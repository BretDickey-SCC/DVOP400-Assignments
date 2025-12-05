# Multi-stage build for Node.js Express app
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files and install production dependencies
COPY package*.json ./
RUN npm ci --only=production

# Copy app source into builder (so server.js and all assets are present)
COPY . .

# Runtime stage
FROM node:18-alpine

WORKDIR /app

# Copy node_modules and app files from builder
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app .

# Expose port 3000
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "require('http').get('http://localhost:3000', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})"

# Start the Express server
CMD ["node", "server.js"]

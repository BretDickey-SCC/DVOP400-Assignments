# Use an official Node image (small Alpine variant)
FROM node:22-alpine

# Create and use /app as the working directory inside the container
WORKDIR /app

# Copy dependency manifests first (better caching)
COPY package*.json ./

# Install dependencies (production-only; change if you need dev deps)
RUN npm install

# Copy the rest of the app source code
COPY . .

# If your app listens on a port, expose it (change if not 3000)
EXPOSE 3000

# Default command to start your app
CMD ["npm", "start"]

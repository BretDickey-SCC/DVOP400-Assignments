# Use an official Node image
FROM node:20-alpine

# Create app directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install --omit=dev

# Copy the rest of the app
COPY . .

# Expose the port the app runs on
EXPOSE 8080

# Start the app
CMD ["npm", "start"]

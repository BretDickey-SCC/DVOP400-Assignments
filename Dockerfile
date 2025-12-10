# Build the Vite application
FROM node:20-alpine AS build
# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock/pnpm-lock.yaml)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application source code
COPY . .

# Build the Vite project. 
# NOTE: The default output directory is 'dist'
RUN npm run build


#Serve the application with Nginx
FROM nginx:alpine AS final

# NOTE: /usr/share/nginx/html is the default Nginx static content directory.
COPY --from=build /app/dist /usr/share/nginx/html

# Expose the default HTTP port for Nginx
EXPOSE 80

# The default Nginx CMD will run 'nginx -g "daemon off;"'
# The container will now serve your Vite app on port 80
CMD ["nginx", "-g", "daemon off;"]
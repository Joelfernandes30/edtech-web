# Use Node 18 Alpine for smaller image size
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy dependency files first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project
COPY . .

# Build production files
RUN npm run build

# Install a lightweight static file server
RUN npm install -g serve

# Cloud Run default port
EXPOSE 8080

# Start the production server
CMD ["serve", "-s", "dist", "-l", "8080"]
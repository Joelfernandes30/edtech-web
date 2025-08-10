# Use an official lightweight Node.js image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first for caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the source code
COPY . .

# Expose the Vite dev server port
EXPOSE 8081

# Run Vite dev server on 0.0.0.0 so it's accessible externally
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

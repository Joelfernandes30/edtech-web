# Use the official Node.js image (LTS version recommended)
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json first (to leverage caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Expose the port your dev server runs on (change if needed)
EXPOSE 3000

# Default command to run the development server
CMD ["npm", "run", "dev"]

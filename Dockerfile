FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Build the production files
RUN npm run build

# Install a lightweight static server
RUN npm install -g serve

# Expose Cloud Run's default port
EXPOSE 8080

# Serve the built app
CMD ["serve", "-s", "dist", "-l", "8080"]

# Base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN npm install

# Install ts-node-dev globally for live reload
RUN npm install -g ts-node-dev

# Copy all source code
COPY . .

# Expose port
EXPOSE 3000

# Start the server with ts-node-dev for live updates
CMD ["ts-node-dev", "--respawn", "--transpile-only", "src/server.ts"]

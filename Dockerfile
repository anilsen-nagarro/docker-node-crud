FROM node:20

WORKDIR /app

# Step 1: Copy ONLY the manifest
# Do NOT copy package-lock.json yet
COPY package.json ./

# Step 2: Install fresh (this creates a clean internal lockfile)
RUN npm install

# Step 3: Copy the rest of your source code
COPY . .

RUN npm run build

EXPOSE 3000
CMD ["node", "dist/server.js"]


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

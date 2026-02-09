# =========================
# Stage 1: Builder
# =========================
FROM node:20-alpine AS builder

WORKDIR /app

# Copy only dependency files first (better caching)
COPY package*.json tsconfig.json ./

# Install ALL dependencies (including devDependencies)
RUN npm install

# Copy source code
COPY src ./src

# Compile TypeScript → JavaScript
RUN npm run build


# =========================
# Stage 2: Runner (Production)
# =========================
FROM node:20-alpine AS runner

# Create non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

WORKDIR /app

# Copy only production dependencies
COPY package*.json ./
RUN npm install --only=production

# Copy compiled output from builder
COPY --from=builder /app/dist ./dist

# Change ownership
RUN chown -R appuser:appgroup /app

# Drop root
USER appuser

# Expose app port
EXPOSE 3000

# Run compiled JS (no ts-node, no dev tools)
CMD ["node", "dist/server.js"]

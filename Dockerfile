# Use the official Node.js runtime as the base image
FROM node:20-alpine

# Install dependencies for development
RUN apk add --no-cache libc6-compat

# Set working directory
WORKDIR /app

# Set environment variables
ENV NODE_ENV=development
ENV NEXT_TELEMETRY_DISABLED=1

# Copy package files
COPY package.json package-lock.json* ./

# Install all dependencies (including dev dependencies)
RUN npm ci

# Copy source code
COPY . .

# Expose port
EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Run the development server
CMD ["npm", "run", "dev"]

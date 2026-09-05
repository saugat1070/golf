# Builder stage
FROM node:22-alpine AS builder

WORKDIR /app

#Copy configuration files
COPY package*.json ./
COPY vite.config.* ./
COPY tsconfig.* ./
COPY .mise.toml ./
COPY gulfparadigm.nginx ./

RUN npm ci

COPY . .

RUN npm run build

# Production stage
FROM node:alpine AS runner

WORKDIR /app

RUN npm install -g serve

# copy build output
COPY --from=builder /app/dist ./

# export port
EXPOSE 8443

# Health check (curl to localhost inside container)
HEALTHCHECK --interval=10s --timeout=3s --retries=5 \
    CMD curl -f http://localhost:8443 || exit 1


# Runtime CMD
CMD ["serve", "-s", "dist", "-l", "8443"]


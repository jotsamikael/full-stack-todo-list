# Stage 1: Build Angular app
FROM node:20 AS build-stage

WORKDIR /app

# Copy package files and install deps
COPY ../../frontend/package*.json ./
RUN npm install --force

# Copy the rest of the app and build it
COPY ../../frontend ./
RUN npm run build:ssr

# Stage 2: Run the built SSR app
FROM node:20

WORKDIR /app

# Copy only the dist folder from build stage
COPY --from=build-stage /app/dist/frontend ./dist/frontend

# Expose port
EXPOSE 4000

# Start the Angular
CMD ["node", "dist/frontend/server/main.server.mjs"]

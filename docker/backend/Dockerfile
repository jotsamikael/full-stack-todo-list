# Use Node 22
FROM node:22.1.0

# Working directory
WORKDIR /app

# Copy package files and install dependencies
COPY ../../backend/package*.json ./
RUN npm install

# Copy rest of the backend
COPY ../../backend .

# Expose the app port
EXPOSE 8885

# Start the app
CMD ["npm", "start"]

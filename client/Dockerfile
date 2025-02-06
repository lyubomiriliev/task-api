# Use Node.js base image
FROM node:22-alpine3.20

# Set working directory inside the container
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the entire project into the container
COPY . .

# Expose the port for the client
EXPOSE 5173

# Start the client
CMD ["npm", "run", "dev"]

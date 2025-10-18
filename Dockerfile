# Use the same lightweight Node.js image
FROM node:22-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first for better caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Tell Docker that the container will listen on port 3000
EXPOSE 3000

# The command to run when the container starts
CMD ["node", "server.js"]
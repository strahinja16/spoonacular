FROM node:latest

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Install dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn

# Bundle app source
COPY . .

# Exports
EXPOSE 5000
CMD [ "npm", "run", "start" ]

FROM node:16.0.0

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --only=production
COPY . ./
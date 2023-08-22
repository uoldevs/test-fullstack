FROM node:16-alpine AS build
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm install
ENTRYPOINT ["npm", "run", "dev"]
FROM node:16.14-alpine

WORKDIR /app-frontend

COPY package*.json ./

RUN npm install --silent

COPY . .

EXPOSE 3000

ENTRYPOINT ["npm", "start"] 

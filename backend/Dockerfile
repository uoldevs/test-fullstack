FROM node:16-alpine

WORKDIR /usr/src/app

RUN npm i -g @nestjs/cli

COPY package*.json ./

RUN npm install

COPY . .

ENV DATABASE_URL=file:./dev.db
ENV API_PORT=10000

EXPOSE 10000

RUN npx prisma generate

RUN npx prisma migrate dev --skip-seed

RUN npm run build

CMD [ "npm", "run", "start:prod" ]

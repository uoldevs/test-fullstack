# FROM node:16-alpine AS build
# WORKDIR /app
# COPY package*.json ./
# COPY prisma ./prisma/
# COPY tsconfig.build.json ./
# COPY tsconfig.json ./
# COPY . .
# RUN npm install
# RUN npm run build

# ## production
# FROM node:16-alpine AS production
# COPY --from=build /app/node_modules ./node_modules/
# COPY --from=build /app/package*.json ./
# COPY --from=build /app/dist ./dist/
# COPY --from=build /app/tsconfig.build.json ./
# COPY --from=build /app/tsconfig.json ./
# COPY --from=build /app/prisma ./prisma/
# EXPOSE 3001
# CMD ["npm", "run", "start:prod"]


FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm install
EXPOSE 3001
CMD ["npm", "run", "start:dev"]

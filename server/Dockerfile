FROM node:12.16.1-alpine

WORKDIR /app
COPY ./app/package*.json ./
COPY ./app/.env ./.env
COPY ./app/bin ./bin
COPY ./app/public ./public
COPY ./app/node_modules ./node_modules
COPY ./app/src/server ./src/server
EXPOSE 3000
ENTRYPOINT [ "npm", "run", "start" ]
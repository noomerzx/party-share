FROM node:10.16.3-alpine as builder
ENV env=""
WORKDIR /app
COPY .npmrc package*.json ./
RUN npm ci
COPY . .
RUN mkdir -p ./dist
CMD npm run build &&\
    cp -rf /app/dist/* /app/dist2/

FROM nginx:1.13.12-alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder ./dist /usr/share/nginx/html/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
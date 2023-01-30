FROM node:lts-alpine as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /usr/app /usr/share/nginx/html
EXPOSE 80
CMD ["npm", "run", "serve"]
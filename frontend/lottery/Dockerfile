#Stage 1
FROM node:18-alpine as build-step
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build --prod
# Stage 2
FROM nginx:1.17.1-alpine
COPY ./src/nginx/etc/conf.d/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build-step /app/dist/lottery/browser /usr/share/nginx/html

FROM node:latest as build
LABEL authors="Soni"
WORKDIR /data
COPY ./ /data/
RUN npm install -g pnpm
RUN pnpm install
RUN pnpm run build

FROM nginx:latest
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /data/dist/xwars-web /usr/share/nginx/html
EXPOSE 80

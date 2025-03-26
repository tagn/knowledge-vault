FROM node:20 AS build

ARG QUARTZ_REPOSITORY_URL="https://github.com/jackyzha0/quartz.git"
ARG QUARTZ_DIR_NAME="quartz"
ARG BUILD_WORKDIR="/workdir"

WORKDIR ${BUILD_WORKDIR}

RUN apt update && apt install -y rsync && \
    git clone ${QUARTZ_REPOSITORY_URL} ${QUARTZ_DIR_NAME} && \
    cd ${QUARTZ_DIR_NAME} && \
    npm ci

COPY ./ ${BUILD_WORKDIR}/${QUARTZ_DIR_NAME}/content/

RUN cd ${BUILD_WORKDIR}/${QUARTZ_DIR_NAME} && \
    npx quartz build

FROM nginx:latest AS production
ARG BUILD_WORKDIR="/workdir"
ARG QUARTZ_DIR_NAME="quartz"
ARG QUARTZ_HOST="notes.mistveil.net"

COPY --from=build /${BUILD_WORKDIR}/${QUARTZ_DIR_NAME}/public/ /var/www/html/
COPY ./.woodpecker/nginx-quartz.conf /etc/nginx/conf.d/quartz.conf

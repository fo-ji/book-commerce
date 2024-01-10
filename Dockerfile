FROM node:20.10.0-slim

WORKDIR /app

RUN apt-get update && \
    apt-get -y install procps openssl

COPY package*.json ./

RUN yarn install --frozen-lockfile

COPY . .
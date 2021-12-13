FROM node:16-slim as BUILDER


WORKDIR /usr/app

COPY package*.json ./
RUN npm install
RUN npm install --save typescript ts-node ts-node-dev

COPY src ./src

FROM node:16-alpine

ARG NODE_ENV

WORKDIR /usr/app

COPY --from=BUILDER /usr/app ./

EXPOSE 3333



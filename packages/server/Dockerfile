FROM node:16-alpine as base


WORKDIR /usr/src

COPY package*.json /
EXPOSE 3333


FROM base as production
ENV NODE_ENV="production"
RUN npm ci
COPY . /
CMD [ "node", "bin/www" ]


FROM base as dev
ENV NODE_ENV="development"
RUN npm install -g nodemon typescript ts-node && npm install
COPY . /

CMD [ "nodemon", "src/server.ts" ]



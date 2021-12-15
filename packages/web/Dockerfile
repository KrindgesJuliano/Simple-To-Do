FROM node:alpine


WORKDIR "/app"

RUN yarn add typescript

COPY ./package*.json ./
EXPOSE 3333


RUN yarn install

COPY . /

CMD ["yarn", "dev"]

FROM node


WORKDIR /usr/src/app

COPY package.json ./

RUN npm install
RUN npm install --save typescript ts-node ts-node-dev

COPY . .

EXPOSE 3333


CMD [ "npm", "run", "dev" ]

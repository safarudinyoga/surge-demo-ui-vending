FROM node:12-alpine

USER root

WORKDIR /opt/app

COPY . .


RUN npm install

RUN npm run build

RUN npm install -g serve

CMD serve -s build

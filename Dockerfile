FROM node:14-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/
COPY tsoa.json /usr/src/app/
COPY schema.prisma /usr/src/app/
COPY .env /usr/src/app/

RUN npm install

RUN npx prisma introspect
RUN npx prisma generate

COPY . /usr/src/app/
RUN npm run build:all

ENV NODE_ENV docker

EXPOSE 8000

CMD [ "npm", "run", "server" ]
FROM node:lts-alpine3.14
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json .
RUN apk update
RUN yarn set version berry
RUN yarn set version latest
COPY . .
RUN yarn
EXPOSE 3000
CMD ["yarn", "start:dev"]

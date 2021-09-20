FROM node:14-alpine

COPY . app/

WORKDIR app/

COPY package.json ./

COPY yarn.lock ./

RUN yarn install --frozen-lockfile

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
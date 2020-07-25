FROM node:erbium-alpine

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile --production

COPY . .

EXPOSE 5000

CMD ["yarn", "start"]
# Developer image
FROM node:16.13.1-alpine as build

USER node
WORKDIR /home/node/app

COPY package*.json ./
RUN yarn install

# Production image
FROM node:16.13.1-alpine

USER node
WORKDIR /home/node/app

ENV NODE_ENV production
ENV NPM_CONFIG_LOGLEVEL info

COPY --chown=node:node --from=build /home/node/app/node_modules ./node_modules
COPY --chown=node:node . /home/node/app

RUN npm ci --only=production

EXPOSE 3000

CMD ["npm", "start"]

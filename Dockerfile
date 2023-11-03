FROM node:18
USER root

COPY package.json package-lock.json
COPY . .
RUN npm i

EXPOSE 80
ENTRYPOINT [ "node", "index.js" ]
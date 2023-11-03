FROM node:18
USER root

ARG OPENAI_API_KEY
ENV OPENAI_API_KEY=${OPENAI_API_KEY}

COPY package.json package-lock.json
COPY . .
RUN npm i
RUN npm run build

EXPOSE 80
ENTRYPOINT [ "node", "index.js" ]
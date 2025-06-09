# Instruction to create the Docker Image
# alpine means add smaller version of the node image
FROM node:18-alpine

WORKDIR /app

COPY ./package*.json ./

RUN npm install

COPY . .

WORKDIR /app/server/src

EXPOSE 5000

CMD [ "node", "app.js" ]

COPY . .

WORKDIR /app/client

RUN npm istall

CMD ["react-scripts", "start"]

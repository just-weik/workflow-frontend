FROM node:20.15.1-alpine3.20

WORKDIR /app

COPY . .

RUN npm install

CMD ["npm", "run", "dev"]

EXPOSE 3030
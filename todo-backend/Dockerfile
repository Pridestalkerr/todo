FROM node:latest
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 4000
CMD npx prisma migrate deploy && node ./src/main.js
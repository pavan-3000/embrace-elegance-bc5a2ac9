FROM node:18-alpine

WORKDIR /app

COPY package.json ./
COPY bun.lock ./
COPY vite.config.ts ./
COPY src/ ./src/
COPY public/ ./public/
COPY components.json ./
COPY .env ./

RUN npm install
RUN npm run build

RUN npm install -g serve

EXPOSE 80
CMD ["serve", "-s", "dist", "-l", "80"]
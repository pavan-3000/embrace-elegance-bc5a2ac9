FROM node:18-alpine

WORKDIR /app

COPY package.json ./
COPY bun.lock ./
COPY vite.config.ts ./
COPY src/ ./src/
COPY public/ ./public/

RUN npm install && npm run build

EXPOSE 80

CMD ["npx", "serve", "-s", "dist", "-l", "80"]
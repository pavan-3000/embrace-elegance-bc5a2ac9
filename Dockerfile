FROM node:22-alpine

WORKDIR /app

COPY package.json package-lock.json ./
COPY bun.lock bunfig.toml ./
COPY src/ src/
COPY public/ public/
COPY vite.config.ts ./

RUN npm install && npm run build

RUN npm install -g serve

EXPOSE 80

CMD ["serve", "-s", "dist", "-l", "80"]
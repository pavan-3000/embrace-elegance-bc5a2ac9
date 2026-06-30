FROM node:18-alpine

WORKDIR /app

COPY package.json bun.lock bunfig.toml ./
COPY src/ src/
COPY public/ public/
COPY vite.config.ts ./

RUN npm install && npm run build

EXPOSE 80

CMD ["npx", "serve", "-s", "dist", "-l", "80"]
FROM node:16-alpine

WORKDIR /app

COPY package.json package-lock.json ./
COPY vite.config.ts ./
COPY src/ src/
COPY public/ public/
COPY tsconfig.json ./
COPY bun.lock ./
COPY bunfig.toml ./

RUN npm install && npm run build

EXPOSE 80

CMD ["npx", "serve", "-s", "dist", "-l", "80"]
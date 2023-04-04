FROM node:18-alpine
WORKDIR /app
COPY index.js package.json package-lock.json .
RUN npm i
CMD ["node", "index.js"]
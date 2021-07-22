FROM node:14
RUN mkdir - /user/src/
WORKDIR /user/src/
COPY package*.json ./
COPY . .
RUN npm install
CMD ["node", "index.js"]

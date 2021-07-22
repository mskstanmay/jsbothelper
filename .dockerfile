FROM node:14
RUN mkdir -p/user/src/
WORKDIR /user/src/
COPY package*.json ./
COPY . .
RUN npm install
CMD ["node", "index.js"]

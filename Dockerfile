FROM node:6.9

WORKDIR /app
COPY package.json /app/
RUN npm config set registry http://registry.npmjs.org/ && npm install

COPY . /app/

VOLUME /app/node_modules

CMD [ "npm", "start" ]

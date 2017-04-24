FROM codekoalas/nginx-node:6

WORKDIR /app
COPY package.json /app/
RUN npm config set registry http://registry.npmjs.org/ && npm install

COPY etc/nginx-docker.conf /etc/nginx/sites-enabled/default
COPY . /app/

VOLUME /app/node_modules

RUN npm run build -- --prod

CMD ["nginx", "-g", "daemon off;"]

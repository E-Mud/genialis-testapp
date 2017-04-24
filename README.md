# GenialisApp

## Run without docker

The app uses `angular-cli` fr building and serving in development. Due to that, a node version of 6.9 or higher should be installed in order to run the app.

### Development

```
npm install
npm start
```

Then navigate to http://localhost:8080 to use the app.

### Production

```
npm install
npm run build -- --prod
```

A production version will be now available at `dist` folder. You can use any web server to serve the files from that folder.


## Run with Docker and Docker-Compose

The app uses a version 2 docker-compose configuration, so you'd need to have Docker-Compose v1.6.0+ and Docker Engine v1.10.0+.

### Development
```
docker-compose up --build development
```

Then navigate to http://localhost:8080 to use the app.

### Production
```
docker-compose up --build production
```

Then navigate to http://localhost:80 to use the app.

# 👻 Brikl Assignment

## ⚙️ Setup Serivce
1. This serivce use database, so it need to setup database first by using sciprt below **(Please instal Docker and Docker Compose first [link](https://docs.docker.com/engine/install/))**
```
sudo docker compose -p brikl-task-dev -f deployment/docker-compose.yaml up -d database
```
2. After setup database, need to install dependency by using command below
```
npm install
```
1. Next, it need to setupp database ORM lib by using sciprt below
```
source .env

npx prisma generate --schema src/providers/database/prisma/schema.prisma

npx prisma db push --force-reset --accept-data-loss --schema src/providers/database/prisma/schema.prisma
```

## Unit test
```
npm run test
```

## 🚀 Start Service with NodeJs
1. This serice can run start with NodeJs by using script below
   
***For dev***
```
yarn start:dev
```
***For dev without hot-reload (You can run this for checking my code)***
```
yarn start
```
2. Go to path *http://localhost:3000/graphql*

## 🐳 Start Service with Docker
**Can not build in Mac-silicon-cpu**
1. Build Image
```
sudo docker compose -f deployment/docker-compose.build.yaml build
```
2. Start Service
```
sudo docker compose -p brikl-task-dev -f deployment/docker-compose.yaml up -d
```
3. Go to path *http://localhost:3000/graphql*
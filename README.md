# Brikl

## Install Serivce

## Start Service
```
sudo docker-compose -p brikl-task-dev -f deployment/docker-compose.yaml up -d
```
```
source .env
```
```
npx prisma generate --schema src/providers/database/prisma/schema.prisma
```
```
npx prisma db push --force-reset --accept-data-loss --schema src/providers/database/prisma/schema.prisma
```
```
npm run start
```

## Migrate DB
```
npx prisma generate --schema src/providers/database/prisma/schema.prisma
```
```
npx prisma db push --force-reset --accept-data-loss --schema src/providers/database/prisma/schema.prisma
```
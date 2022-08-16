FROM node:18-alpine3.15 AS base

# non-root
ARG CONTAINER_UID=2000
ARG CONTAINER_GID=2000

ARG BASH_VERSION=5.1.16-r0
ARG TINI_VERSION=0.19.0-r0

RUN export CONTAINER_USER=apprunner && \
    export CONTAINER_GROUP=apprunner && \
    addgroup -g $CONTAINER_GID apprunner && \
    adduser -u $CONTAINER_UID -G apprunner -h /usr/bin/apprunner.d -s /bin/bash -S apprunner

# install node
RUN apk add --no-cache bash=${BASH_VERSION} tini=${TINI_VERSION}
# set working directory
WORKDIR /usr/bin/apprunner.d

# ---- Dependencies ----
FROM base AS dependencies
# copy project file
COPY package.json ./package.json
RUN mkdir -p ./src/providers/database/prisma
COPY src/providers/database/prisma ./src/providers/database/prisma
# install node packages
RUN npm install --omit=dev
# install prisma model
RUN npx prisma generate --schema=./src/providers/database/prisma/schema.prisma
# copy production node_modules aside
RUN cp -R node_modules prod_node_modules

# ---- Builder ----
FROM base AS builder
# copy app sources
COPY src ./src
COPY tsconfig.json ./tsconfig.json
COPY tsconfig.build.json ./tsconfig.build.json
COPY nest-cli.json ./nest-cli.json
COPY package.json ./package.json
RUN mkdir -p ./src/providers/database/prisma
COPY src/providers/database/prisma ./src/providers/database/prisma
# install ALL node_modules, including 'devDependencies'
RUN npm install
RUN npx prisma generate --schema=./src/providers/database/prisma/schema.prisma
# build
ENV NODE_ENV production
RUN npm run build

# ---- Run ----
FROM base AS runner
# copy production node_modules
COPY --from=dependencies /usr/bin/apprunner.d/prod_node_modules ./node_modules
# copy prisma schema and seed
RUN mkdir -p ./src/providers/database/prisma
COPY --from=dependencies /usr/bin/apprunner.d/src/providers/database/prisma ./src/providers/database/prisma
# Create cert folder
COPY secrets ./secrets
# copy production built
COPY --from=builder /usr/bin/apprunner.d/dist ./dist
COPY package.json ./package.json

# clean unnecessary files
RUN rm -rf /var/cache/apk/* && rm -rf /tmp/*

# expose port and define CMD
ENV NODE_ENV production
EXPOSE 2000
COPY build-image/entrypoint.sh ./entrypoint.sh
RUN chmod +x entrypoint.sh
RUN chown apprunner:apprunner -R /usr/bin/apprunner.d

USER apprunner
ENTRYPOINT ["/sbin/tini","--","/usr/bin/apprunner.d/entrypoint.sh"]

FROM node:alpine AS builder
RUN apk update
WORKDIR /app
ARG SCOPE

RUN yarn global add turbo
COPY . .
RUN turbo prune --scope=${SCOPE} --docker

FROM node:alpine AS installer
RUN apk update
WORKDIR /app
ARG GITHUB_TOKEN
ARG SCOPE

# Install dependencies first to leverage Docker cache
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/yarn.lock ./yarn.lock
COPY --from=builder /app/docker.npmrc .npmrc
RUN yarn install

# Build the project and its dependencies
COPY --from=builder /app/out/full/ .
COPY turbo.json turbo.json
RUN yarn turbo run build --filter=${SCOPE}...

FROM node:alpine AS runner
WORKDIR /app
ARG SCOPE
ENV APP_SCOPE="${SCOPE}"

# Don't run production as root
RUN addgroup --system --gid 1001 server
RUN adduser --system --uid 1001 server
USER server
COPY --from=installer /app .

CMD node apps/${APP_SCOPE}/dist/src/index.js

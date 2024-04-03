---
sidebar_label: "Step by step"
---

# Docker deployment guide

This is a handy guide to deploying with Docker, as well as a breakdown of the [on-premise deployment guide](/docs/self-hosted/deployment/docker).

## Versions

- Stable version - 5.2.2/latest - `ghcr.io/tryzealot/zealot:latest`
- Nightly version - develop - `ghcr.io/tryzealot/zealot:nightly` - Based on branch `develop` builds per commit.

## Registry

- Docker Container Registry: https://hub.docker.com/r/tryzealot/zealot/
- Github Container Registry: https://github.com/tryzealot/zealot/pkgs/container/zealot (**Recommended**)

## Step by Step

### Install Docker

Follows [official tutorial](https://get.docker.com/) to install docker.

### Install Docker-Compose

Follows [official tutorial](https://docs.docker.com/compose/install/) to install docker-compose.

### Configure .env file

Download a sample [config.env](https://github.com/tryzealot/zealot-docker/blob/master/config.env) file and customize it on your own.

### Configure site domain

The secondary verification will remind again if it is not configured

### Configure SSL certificate

Provides three ways to do this, even if the last one generates the https protocol header:

- Using Let's Encrypt SSL
- Using Self-signed SSL
- Using non-SSL with Zealot service (needs gateway or reverse proxy to manage SSL）

### Generate docker-compose.yml

The configuration file will generate at least three services, using the first two certificates will add an additional service.

- `zealot-zealot`: Use reverse-generation gateway services to deliver core Web and API services
- `zealot-postgres`: Database service
- `zealot-redis`: Cache service
- `zealot-web`: Provides a reverse proxy gateway service for (services and certificates), optional.

### Create docker volumes for persistent storage

Persistent storage Data:

- `zealot-uploads`: Uploaded app file with extracted icon, uploaded debugging files.
- `zealot-backup`: backup files.
- `zealot-postgres`: Core database data.
- `zealot-redis`: Hot cache and background jobs data.

### Pull images

The first time you use it, you will initialize the database,
load the sample application data and set up the administrator account,
which is required for subsequent zealot updates.

```bash
docker-compose pull
```

### Setup database data

The first time you use it, you will initialize the database, load the sample application data
and set up the administrator account, which is required for subsequent zealot updates.

```bash
docker-compose run --rm zealot run_upgrade
```

### Launch docker-compose

Manual execution is required to run the service for security periods and user-defined operations:

```bash
docker-compose up -d
```

## Advanced

### Custom volumes

You have two t

There are two ways to customize the path: (Assuming that the custom path is `/data/zealot`)

#### 1. Create custom docker volume

```sh
docker volume create --name zealot-data \
  --opt type=none \
  --opt o=bind \
  --opt device=/data/zealot/zealot-data

docker volume create --name zealot-redis \
  --opt type=none \
  --opt o=bind \
  --opt device=/data/zealot/redis

docker volume create --name zealot-postgres \
  --opt type=none \
  --opt o=bind \
  --opt device=/data/zealot/postgres
```

#### 2. Change volumes part of docker-compose file

Open `docker-compose.yml` file and find `volumes:`:

```yaml
volumes:
  zealot-data:
    driver: local
    driver_opts:
      o: bind
      type: none
      device: /data/zealot/data
  zealot-redis:
    driver: local
    driver_opts:
      o: bind
      type: none
      device: /data/zealot/redis

  zealot-postgres:
    driver: local
    driver_opts:
      o: bind
      type: none
      device: /data/zealot/postgres
```

## Complete example

```yaml
version: "3.8"

x-restart-policy: &restart_policy
  restart: unless-stopped

x-defaults: &defaults
  <<: *restart_policy
  image: ghcr.io/tryzealot/zealot:nightly
  depends_on:
    - redis
    - postgres
  env_file: .env
  volumes:
    - zealot-uploads:/app/public/uploads
    - zealot-backup:/app/public/backup
    - ./log:/app/log                        # Optional: persisting log files.
  healthcheck:
    test: ["CMD-SHELL", "wget -q --spider --proxy=off localhost/health || exit 1"]

services:
  redis:
    <<: *restart_policy
    image: redis:7-alpine
    command: redis-server
    volumes:
      - zealot-redis:/data
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
  postgres:
    <<: *restart_policy
    image: postgres:14-alpine
    volumes:
      - zealot-postgres:/var/lib/postgresql/data
    environment:
      POSTGRES_PASSWORD: ze@l0t
    healthcheck:
      test: ["CMD", "pg_isready", "-U", "postgres"]
  zealot:
    <<: *defaults
    # Port mapping can be enabled without the need for reverse proxy,
    # mutually exclusive with the web reverse proxy service below.
    ports:
      - "80:80"
  # Optional: Use a reverse proxy to host SSL certificates and services.
  web:
    image: caddy:2-alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./caddy/etc/caddy/Caddyfile:/etc/caddy/Caddyfile:ro
      - ./caddy/etc/caddy/certs:/etc/caddy/certs:ro
    env_file: .env
    environment:
      ACME_AGREE: "true"

# There are three methods of persistence:
volumes:
  # 1. docker compose inside volumes
  - zealot-uploads
  - zealot-backup
  - zealot-redis
  - zealot-postgres

  # 2. docker compose external volumes
  zealot-uploads:
    external: true
  zealot-backup:
    external: true
  zealot-redis:
    external: true
  zealot-postgres:
    external: true

  # 3. mount local path
  zealot-uploads:
    driver: local
    driver_opts:
      o: bind
      type: none
      device: /tmp/zealot/uploads
  zealot-backup:
    driver: local
    driver_opts:
      o: bind
      type: none
      device: /tmp/zealot/backup
  zealot-redis:
    driver: local
    driver_opts:
      o: bind
      type: none
      device: /tmp/redis
  zealot-postgres:
    driver: local
    driver_opts:
      o: bind
      type: none
      device: /tmp/postgres
```

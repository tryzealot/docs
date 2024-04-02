---
sidebar_label: "Step by step"
---

# Docker deployment guide

This is a handy guide to deploying with Docker, as well as a breakdown of the [on-premise deployment guide](/docs/self-hosted/deployment/docker).

## Versions

- Stable version - 4.7.1/latest - `ghcr.io/tryzealot/zealot:latest`
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

### Create docker volumes for persistent storage

Persistent storage Data:

- `zealot-data`: Uploaded apps, icons and debug files.
- `zealot-postgres`: Core database data
- `zealot-redis`: Hot cache and background jobs data

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

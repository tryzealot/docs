---
sidebar_label: "详细步骤"
---

# Docker 手把手部署文档

这是一篇手把手来指导使用 Docker 部署文档，同时也是解释[Docker 部署 Zealot 指南](/docs/self-hosted/deployment/docker)的分解

## 版本列表

- 稳定版本 - 5.3.5/latest - `ghcr.io/tryzealot/zealot:latest`
- 测试版本 - develop - `ghcr.io/tryzealot/zealot:nightly` - 基于 develop 分支每次提交构建的版本

## 镜像仓库

> Docker hub [取消了免费组织计划](https://web.docker.com/rs/790-SSB-375/images/privatereposfaq.pdf)，不再同步更新推送。

- Docker Container Registry: https://hub.docker.com/r/tryzealot/zealot/
- Github Container Registry: https://github.com/tryzealot/zealot/pkgs/container/zealot (**推荐**)

## 步骤解析

### 安装 Docker

按照[官方教程](https://get.docker.com/)安装

### 安装 Docker-Compose

按照[官方教程](https://docs.docker.com/compose/install/)安装

### 生成 .env 配置文件

从预先 `config.env` 配置文件复制一份部署使用的配置文件

### 配置域名

二次校验如果没有配置会再提醒

### 配置证书

部署脚本提供三种方式，就算使用最后一种生成的也是 https 的协议头

- 使用 Let's Encrypt 证书
- 使用自签名证书
- 纯 Zealot 服务（需反代网关或负载均衡生成 SSL 证书）

### 生成 docker-compose.yml

配置文件会生成至少三个服务（service），使用上面前两个证书方式会额外增加一个服务：

- `zealot-zealot`: 核心 Web 和 API 服务
- `zealot-postgres`: 数据库和缓存服务
- `zealot-web`: 提供（服务和证书）反代的网关服务，非必需

### 创建持久化存储的 docker volumes

存储持久化数据

- `zealot-uploads`: 上传应用和解析后的应用图标、上传的调试文件
- `zealot-backup`: 备份计划生成备份文件
- `zealot-postgres`: 数据库数据

### 拉取（更新）镜像

第一次使用会自动从容器镜像服务网站下载镜像，后续是更新操作，通常只会更新 zealot 镜像。其他几个依赖服务镜像都是固定版本号

```bash
docker-compose pull
```

### 设置数据库数据

第一次使用会初始化数据库、加载范例应用数据和设置管理员账号，后续这是因 zealot 更新需要的操作

```bash
docker-compose run --rm zealot run_upgrade
```

### 运行 docker-compose

为了安全期间和用户的自定义操作需要手动执行来运行服务:

```bash
docker-compose up -d
```

## 高级配置

### 自定义 volume 路径

自定义路径有两种方法: (假设自定义的路径是 `/data/zealot`)

#### 1. 创建 volume 自定义路径

```sh
docker volume create --name zealot-uploads \
  --opt type=none \
  --opt o=bind \
  --opt device=/data/zealot/zealot-uploads

docker volume create --name zealot-backup \
  --opt type=none \
  --opt o=bind \
  --opt device=/data/zealot/zealot-backup

docker volume create --name zealot-postgres \
  --opt type=none \
  --opt o=bind \
  --opt device=/data/zealot/postgres
```

#### 2. 修改 docker-compose 的 volumes 部分

打开 `docker-compose.yml` 拉到最底部找到 `volumes:` 开头的部分，修改为如下内容：

```yaml
volumes:
  zealot-uploads:
    driver: local
    driver_opts:
      o: bind
      type: none
      device: /data/zealot/uploads

  zealot-backup:
    driver: local
    driver_opts:
      o: bind
      type: none
      device: /data/zealot/backup

  zealot-postgres:
    driver: local
    driver_opts:
      o: bind
      type: none
      device: /data/zealot/postgres
```

## 完整范例

```yaml
version: "3.8"

x-restart-policy: &restart_policy
  restart: unless-stopped

x-defaults: &defaults
  <<: *restart_policy
  image: ghcr.io/tryzealot/zealot:nightly
  depends_on:
    - postgres
  env_file: .env
  volumes:
    - zealot-uploads:/app/public/uploads
    - zealot-backup:/app/public/backup
    - ./log:/app/log                        # 持久化日志文件，可选
  healthcheck:
    test: ["CMD-SHELL", "wget -q --spider --proxy=off localhost/health || exit 1"]

services:
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
    # 无需反代可开启端口映射，与下面 web 反代服务互斥
    ports:
      - "80:80"
  # 可选：使用反代托管 SSL 证书和服务
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


# 持久化有三种方式：
volumes:
  # 1. docker compose 内部自动生成 volumes
  - zealot-uploads
  - zealot-backup
  - zealot-postgres

  # 2. docker compose 外部创建的 volumes
  zealot-uploads:
    external: true
  zealot-backup:
    external: true
  zealot-postgres:
    external: true

  # 3. 挂载自定义本地路径
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
  zealot-postgres:
    driver: local
    driver_opts:
      o: bind
      type: none
      device: /tmp/postgres
```

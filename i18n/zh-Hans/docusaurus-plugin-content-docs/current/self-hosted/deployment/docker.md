---
sidebar_label: "Docker"
---

# Docker 部署 Zealot 指南

> :bell: 强烈建议安装首选使用 [Docker](https://www.docker.io/) 安装部署 Zealot，除非你对本服务的技术栈特别熟悉。
> 鉴于 iOS 使用下载服务依赖开启 SSL/TLS 证书，建议使用经过授权的证书服务，比如 [Let's Encrypt](https://letsencrypt.org/)，
> 如果使用自签名证书需要每个 iOS 设备在下载安装应用前必须安装自签名证书才行。

## 为什么仅支持 Docker 部署？

部署基于 Ruby on Rails 应用是异常复杂，即使你可以在部署服务器安装了 Ruby、ImageMagick、 Node、Postgres 和 Redis，
你仍然需要操心如何运行 Zealot 服务和 Sidekiq 异步任务服务。项目提供的 Docker 镜像把这些烦人的事情都放到了镜像通过一键部署安装脚本完成初始化工作。

## 一键安装脚本

> 对于一键安装部署脚本感兴趣的可以查看 [Docker 手把手部署文档](/docs/self-hosted/deployment/docker/step-by-step)。

本着一键安装的原则，可是现实往往是残酷的，Zealot 配置都是依托于 ENV 环境变量，需要配置好之后再执行一键部署生成脚本。
首先需要克隆[官方 Zealot 部署工具](https://github.com/tryzealot/zealot-docker.git)，进入 `zealot-docker`
目录后需要打开 `example.env` 文件配置必要的参数后可直接执行 `./deploy.sh` 脚本：

:::tip

默认会生成管理员账号：`admin@zealot.com` 和密码 `ze@l0t` 和一些演示应用。

:::

```bash
$ git clone https://github.com/tryzealot/zealot-docker.git
$ cd zealot-docker
$ ./deploy
```

一键部署生成脚本默认内置了下面三种模板配置 SSL 证书：

## 配置 SSL 证书

### Let's Encrypt

:::info

**免费且自动续签 SSL 证书，新手使用的最佳选择**

:::

**第一步**：执行部署脚本:

```bash
$ ./deploy
```

**第二步**：检查和配置 `.env` 文件，主要是 `ZEALOT_DOMAIN` 和 `ZEALOT_CERT_EMAIL` 是否填写正确，
其他部分可根据实际情况做对应的配置调整

**第三步**：运行 Zealot 服务:

```bash
$ docker-compose up -d
```

### 反向代理托管 SSL 证书

:::info

**通过这种方式需要使用一个反向代理服务配合使用**

:::


如果已经有 [Nginx](http://nginx.org/)、[Caddy](https://caddyserver.com/) 之类网关或负载均衡来做 SSL 证书代理，
在运行之后拿到 `zealot-zealot` 实例的 IP 地址，端口是 80 反代给上述服务即可。

#### Nginx 配置

> 如下是通用配置，如果不可用欢迎[提问题](https://github.com/tryzealot/zealot-docs/issues/new)。

```
server {
  listen 80;
  server_name zealot.test;    # 根据实际情况修改域名
  location /.well-known/acme-challenge/ { allow all; }
  location / { return 301 https://$host$request_uri; }
}

server {
  listen 443 ssl http2;
  server_name zealot.test;    # 根据实际情况修改域名

  # 配置域名证书文件
  ssl_certificate       /etc/certs/zealot-cert.pem;
  ssl_certificate_key   /etc/certs/zealot.pem;

  ssl_ciphers           HIGH:!MEDIUM:!LOW:!aNULL:!NULL:!SHA;
  ssl_session_timeout   5m;
  ssl_session_cache     shared:SSL:1m;
  ssl_prefer_server_ciphers  on;

  root /app/public;

  location ~* ^(/assets|/favicon.ico) {
    access_log        off;
    expires           max;
  }

  location / {
    try_files $uri @zealot;
  }

  location @zealot {
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
    proxy_set_header Proxy "";
    proxy_pass_header Server;

    proxy_pass http://127.0.0.1;    # 根据实际情况修改地址和端口号
    proxy_buffering on;
    proxy_redirect off;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
  }

  location /cable {
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_pass http://127.0.0.1;    # 根据实际情况修改地址和端口号
  }

  error_page 500 502 503 504 /500.html;
  location = /500.html {
    root /app/public;
  }
}
```

#### Caddy 2 配置

```
:443

log

## 使用 Let's Encrypt 服务
tls zealot@exampl.com

reverse_proxy 127.0.0.1:80
```

配置只需配置 `tls` 和 `proxy` 后面 IP 地址和端口部分即可。

### 自签名 SSL 证书

:::caution

在条件满足其他情况下绝对不推荐此方案，iOS 设备对使用自签名证书的任何 Web 服务**必须在其设备上手动安装自签名证书后才能正常安装应用**。

:::

如果域名是非注册域名则需要绑 host 才可以访问，通常是修改系统的 `/etc/hosts` 文件。

```bash
$ sudo vim /etc/hosts

127.0.0.1 zealot.test
```

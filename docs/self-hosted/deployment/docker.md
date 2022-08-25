---
sidebar_label: "Docker"
---

# Deploy Zealot with Docker guide

> :bell: Strongly recommended to deploy Zealot using [Docker](https://www.docker.io/),
> unless you are familiar with the technology stack for this service.
> The app protection policy settings for iOS/iPadOS devices, it needs a public network over SSL,
> free to use [Let's Encrypt](https://letsencrypt.org/).
>
> If you use a self-signed certificate you must [install the self-signed certificate](https://support.apple.com/en-us/HT204477)
> on each iOS device before installing any app.

## Why support docker image only?

Deploying a Rails-based application is incredibly complex, and even though you must install many dependenices,
and you still need to worry how to launch and make it as a daemon to run in the background.

## Software requirements

- Git 2.0+
- Docker 20.10.0+
- Docker Compose 1.28.0+

## Install on Docker

In the principle of one-click installation, but reality is often harsh,
Zealot configuration is dependent on `ENV` environment variables,
you need to configure it and then execute the one-click deployment generation script.

First you need to clone the [deployment script](https://github.com/tryzealot/zealot-docker.git),
After entering the `zealot-docker` directory, you need to open the `example.env` file to
configure the necessary parameters and then you can directly execute `./deploy.sh` script.

> By default, the administrator account: `admin@zealot.com` and password `ze@l0t` (you can change it)
> and some demo applications will be generated.

```bash
$ git clone https://github.com/tryzealot/zealot-docker.git
$ cd zealot-docker
$ ./deploy
```

The one-click deployment generation script has three built-in templates by default:

- Using Let's Encrypt SSL
- Using Self-signed SSL
- Using non-SSL (needs gateway or reverse proxy to manage SSL）

For those interested in one-click installation deployment scripts,
you can check out the [Deployment Documentation with Docker](/docs/self-hosted/deployment/source-code.md).

## SSL

### Let's Encrypt

> **Best Choice**

**Step 1**: Execute the deployment script:

```bash
$ ./deploy
```

**Step 2**: Check and configure the `.env` file, mainly whether `ZEALOT_DOMAIN` and `ZEALOT_CERT_EMAIL` are filled in correctly.
Other parts can be adjusted according to the actual situation of the corresponding configuration

**Step 3**: Run the Zealot service:

```bash
$ docker-compose up -d
```

### Reverse proxy controls SSL

> Reverse proxy required

If you already have a gateway or load balance such as [Nginx](http://nginx.org/),
[Caddy](https://caddyserver.com/) for SSL certificate proxy, you can run it.
After running, get the IP address of the `zealot-zealot` instance on port 80 and reverse proxy it to the above service.

#### Nginx config file

> The following is the general configuration, if not effects welcome to [file a issue](https://github.com/tryzealot/zealot-docs/issues/new)。

```nginx title="nginx.conf"
server {
  listen 80;
  server_name zealot.test;    # CHANGE IT ON YOUR DOMAIN
  location /.well-known/acme-challenge/ { allow all; }
  location / { return 301 https://$host$request_uri; }
}

server {
  listen 443 ssl http2;
  server_name zealot.test;    # CHANGE IT ON YOUR DOMAIN

  # Configure your ssl cert and key file
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

    proxy_pass http://127.0.0.1;    # CHANGE IT ON YOUR HOST AND PORT
    proxy_buffering on;
    proxy_redirect off;
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
  }

  location /cable {
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection "upgrade";
    proxy_pass http://127.0.0.1;    # CHANGE IT ON YOUR HOST AND PORT
  }

  error_page 500 502 503 504 /500.html;
  location = /500.html {
    root /app/public;
  }
}
```

#### Caddy 2 config file

```nginx title="Caddyfile"
:443

log

## Using Let's Encrypt
tls zealot@exampl.com

reverse_proxy 127.0.0.1:80
```

The configuration only needs to relate the ip part after `tls` and `proxy`.

### Self-signed untrust SSL

> **Not recommended**

Please do not use this for non-essential cases, for iOS using self-signed certificates
**may require the device to also have an SSL certificate installed before accessing and installing the application**,
and Chrome may also deny access due to the certificate.

> If the domain name is unregistered, you need to tie the host to access it,
> usually by modifying the system's `/etc/hosts` file.

```bash title="/etc/hosts"
$ sudo vim /etc/hosts

# highlight-start
127.0.0.1 zealot.test
# highlight-end
```

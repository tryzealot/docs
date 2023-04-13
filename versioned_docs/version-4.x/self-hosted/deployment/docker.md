---
sidebar_label: "On-premise (Docker)"
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
you can check out the [Deployment Documentation with Docker](/docs/self-hosted/deployment/docker/step-by-step).

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

Check [Reverse Proxies Guide](/docs/self-hosted/deployment/reverse-proxies) page.

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

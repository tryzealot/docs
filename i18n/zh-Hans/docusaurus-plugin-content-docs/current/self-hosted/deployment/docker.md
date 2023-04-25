---
sidebar_label: "Docker"
---

# Docker 部署 Zealot 指南

> :bell: 强烈建议安装首选使用 [Docker](https://www.docker.io/) 容器方式安装部署 Zealot。
> 鉴于 iOS 使用下载服务依赖开启 SSL/TLS 证书，建议使用经过授权的证书服务，比如 [Let's Encrypt](https://letsencrypt.org/)，
> 如果使用自签名证书需要每个 iOS 设备在下载安装应用前[必须安装自签名证书](https://support.apple.com/zh-cn/HT204477)才行。

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

配置说明迁移值[反向代理指南](/docs/self-hosted/reverse-proxies)，里面包含了更多的服务配置。

### 自签名 SSL 证书

:::caution

在条件满足其他情况下绝对不推荐此方案，iOS 设备对使用自签名证书的任何 Web 服务**必须在其设备上手动安装自签名证书后才能正常安装应用**。

:::

如果域名是非注册域名则需要绑 host 才可以访问，通常是修改系统的 `/etc/hosts` 文件。

```bash
$ sudo vim /etc/hosts

127.0.0.1 zealot.test
```

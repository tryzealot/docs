# 疑惑解答

下面会列出来一些遇到的问题并汇总提供给大家。

## 为什么不能使用 HTTP 部署服务

鉴于 iOS 使用下载服务依赖开启 SSL/TLS 证书，建议使用经过授权的证书服务，如果服务不需要提供 iOS、macOS 的安装服务可以考虑使用 HTTPS 部署服务，
这里推荐使用免费 [Let's Encrypt](https://letsencrypt.org/) 提供 SSL 证书服务。

## 使用自签名的证书无法安装 iOS 应用

如果使用自签名证书需要每个 iOS 设备在下载安装应用前必须安装自签名证书才行，每个设备都需要进行安装，操作比较复杂在有免费 SSL 证书服务的情况下不到逼不得已不建议使用自签名证书。

## 使用负载均衡部署服务，下载总会从 https 变成 http

负载均衡在提供服务的时候会在最前端部署 https 服务，内部的分发实际上还是走的 http，解决办法在负载均衡上把转发的协议头从 http 改成 https，这样服务再转发的时候就会继承最前端的协议头（`X-Forwarded-Proto`）。

## 是否支持外部 postgres 链接

支持的，如果有公用的 postgres 服务器那就可以单独部署 zealot 服务，在 `.env` 配置或 Docker、K8s 的环境变量手动指定如下配置：

```bash
# Postgresl
ZEALOT_POSTGRES_HOST=127.0.0.1
ZEALOT_POSTGRES_PORT=5432
ZEALOT_POSTGRES_USERNAME=postgres
ZEALOT_POSTGRES_PASSWORD=ze@l0t
ZEALOT_POSTGRES_DB_NAME=zealot
```

## 是否支持 Kubernetes（k8s）部署

服务是支持 K8S 的单机部署但不支持伸缩特性，具体原因是因为应用上传使用的是容器内的本地存储没有支持亚马逊 S3 或阿里云第三方云存储的支持。

## 是否提供类似 FIR、蒲公英服务的应用的分享页面

服务提供两种页面地址：

**1 应用渠道详情页**

`https://YOUR_ZEALOT_URL/channels/SLUG`

其实 `YOUR_ZEALOT_URL` 是 zealot 服务地址，`SLUG` 是你对应应用渠道的唯一地址。

**2 上传的版本详情页**

`https://YOUR_ZEALOT_URL/channels/SLUG/releases/ID`

其实 `YOUR_ZEALOT_URL` 是 zealot 服务地址，`SLUG` 是你对应应用渠道的唯一地址，`ID` 是上传的版本 ID，为空的时候会自动调整到最新版本，所以可以直接分享

`https://YOUR_ZEALOT_URL/channels/SLUG/releases`


## 服务运行一段时间 CPU 或内存资源暴涨不下，如何解决？

根据用户 [Cleam](https://github.com/Cleam) 的[反馈](https://github.com/tryzealot/zealot/issues/768#issuecomment-1161097162)部署服务之后，托管的应用很少，上传频率不高，服务器硬件规格也完全达标的情况下还是会引发 CPU 或内存资源暴涨造成服务器卡死，
当前的情况属于还属于个人情况，目前情况未知，但可以通过限制 CPU 和内存来规避这个问题，编辑 `docker-compose.yml` 文件：

```diff
zealot:
  <<: *defaults
+  deploy:
+    resources:
+      limits:
+        cpus: 2.0
+        memory: 2G
+      reservations:
+        cpus: 0.5
+        memory: 256M
```

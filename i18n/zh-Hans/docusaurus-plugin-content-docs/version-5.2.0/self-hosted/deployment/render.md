---
sidebar_label: "Render"
---

# 部署 Zealot 到 Render 指南

Zealot 提供 [render.com](https://render.com/) 官方 blueprint 模板 `render.yaml` 用于一键部署本服务。

## 模板

* 使用 [Zealot Docker 镜像](https://ghcr.io/tryzealot/zealot)。
* 使用 [Render Disks](https://render.com/docs/disks) 作为上传应用和调试文件的持久化存储。
* 使用 [PostgreSQL](https://render.com/docs/databases) 作为数据库以及 [Redis](https://render.com/docs/redis) 作为数据缓存。

## 一键部署

[![部署按钮](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/tryzealot/zealot)

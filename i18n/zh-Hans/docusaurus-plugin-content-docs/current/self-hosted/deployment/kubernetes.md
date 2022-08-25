---
sidebar_label: "Kubernetes"
---

# Kubernetes 部署 Zealot 指南

Zealot 原生支持使用 Kubernetes 部署，不过一直还没有梳理 `.yaml` 配置文件用于安装。

手动部署需要注意如下事项

- 生成 `Configmap` 存储环境变量。
- 生成 `PersistentVolumeClaim` 用于 `public/uploads`, `public/bakcup` 的持久化存储。
- 生成 `Deployment` 来管理 `zealot` Pod。

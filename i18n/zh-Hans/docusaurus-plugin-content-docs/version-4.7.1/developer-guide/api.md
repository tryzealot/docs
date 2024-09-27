# APIs

Zealot 提供提供 REST APIs 接口服务可用于自定义的查看 App 信息或者上传、下载 App。

## 接口认证 {#authentication}

接口请求目前仅支持 User Token 的 query 认证，在登录用户的详情页面最下面 `API - 密钥` 找到。
> example : `https://YOUR_ZEALOT_URL/api?token=YOUR_TOKEN`

## 接口版本

当前是 `v1` 版本，接口无需显性传递版本参数，另外 GraphGL 接口也在逐步开发中后续会考虑两个版本同时存在。

## 接口列表

目前可用的 API 接口基本满足打包和下载流程的范围：

- [应用](#应用接口)
- [调试文件](#调试文件接口)

### 应用接口

定义 | 地址
---|---
上传应用 | `/api/apps/upload`
应用列表 | `/api/apps`
应用详情 | `/api/apps/:id`
应用版本列表 | `/api/apps/versions`
应用最新版本 | `/api/apps/latest`
检查当前版本 | `/api/apps/version_exist`

### 调试文件接口

定义 | 地址
---|---
上传调试文件 | `/api/debug_files/upload`
下载调试文件 | `/api/debug_files/download`
调试文件列表 | `/api/debug_files`
调试文件详情 | `/api/debug_files/:id`
检查调试文件是否存在 | `/api/debug_files/version_exist`
更新调试文件 | `/api/debug_files/:id`
删除调试文件 | `/api/debug_files/:id`

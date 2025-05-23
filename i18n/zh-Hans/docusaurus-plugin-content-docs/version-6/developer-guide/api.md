# API 接口

Zealot 提供提供开发接口服务可用于控制应用、调试文件、用户和其他资源的增删改查。

目前接口划分为两个版本：`REST API` 和 `GraphQL`

## REST API

这是 Zealot 当前的核心接口版本是 `1.x`，需要注意的是接口无需显性传递版本参数。

[查看接口文档](/api/v1/zh-Hans)。

### 接口认证 {#authentication}

接口请求目前仅支持`用户密钥`认证，在登录用户的详情页面最下面 `API - 密钥` 找到。

> `https://YOUR_ZEALOT_URL/api?token=YOUR_TOKEN`

## GraphQL

GraphGL 接口也在逐步开发中，虽然已经开发了很久很久也没有完成 100% 覆盖所有功能。

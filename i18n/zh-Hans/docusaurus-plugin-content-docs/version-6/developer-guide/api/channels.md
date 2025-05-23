---
sidebar_label: "应用渠道"
---

# 应用渠道接口

## 获取应用渠道列表

使用应用类型 ID 获取应用渠道列表

```
GET /api/schemes/:id/channels
```

### 参数

| 名称 | 类型 | 是否必须 | 描述 |
|---|---|---|---|
| id | `Integer` | true | 应用类型 ID |

### 返回样例

```json
[
  {
    "slug": "PLHUv",
    "name": "Android",
    "device_type": "android",
    "bundle_id": "*",
    "git_url": null,
    "has_password": false,
    "key": "0f1d47d61f165643e5391e1b5df0ef92"
  },
  {
    "slug": "nnP1s",
    "name": "iOS",
    "device_type": "ios",
    "bundle_id": "*",
    "git_url": null,
    "has_password": true,
    "key": "82acfdb50f8490f70f5e01a5a30ea6e0"
  }
]
```

## 创建应用渠道

使用应用 ID 创建一个新的应用类型

```
POST /api/schemes/:id/channels
```

### 参数

:::info

需要[用户认证](/docs/developer-guide/api#authentication)

:::

| 名称 | 类型 | 是否必须 | 描述 |
|---|---|---|---|
| id | `Integer` | true | 应用类型 ID
| name | `String` | true | 渠道名称
| slug | `String` | false | URL 唯一标示，没有填随机生成
| device_type | `String` | false | 应用类型，有效值: `ios`, `android`, `macos`, `linux` and `windows`
| bundle_id | `String` | false | iOS 指的是 `bundle_id`，Android 指的是 `package name`， 默认是 `*` 不做校验
| git_url | `String` | false | Git 仓库 URL
| password | `String` | false | 设置访问密码

### 返回样例

- 请求参数无效返回 422 状态码和错误信息

创建成功返回：

```json
{
  "slug": "PLHUv",
  "name": "Android",
  "device_type": "android",
  "bundle_id": "*",
  "git_url": null,
  "has_password": false,
  "key": "0f1d47d61f165643e5391e1b5df0ef92"
}
```

## 获取应用渠道

使用应用渠道 ID 获取应用渠道详细信息

```
GET /api/channels/:id
```

### 参数

| 名称 | 类型 | 是否必须 | 描述 |
|---|---|---|---|
| id | `Integer` | true | ID |

### 返回样例

```json
{
  "slug": "nv1lO",
  "name": "Android",
  "device_type": "android",
  "bundle_id": "*",
  "git_url": null,
  "has_password": false,
  "key": "5cf466ef268d7b5b9d408c26889d8abc"
}
```

## 更新应用渠道

更新应用渠道详细信息

```
PUT /api/channels/:id
```

### 参数

:::info

需要[用户认证](/docs/developer-guide/api#authentication)

:::

| 名称 | 类型 | 是否必须 | 描述 |
|---|---|---|---|
| id | `Integer` | true | ID
| name | `String` | true | 渠道名称
| slug | `String` | false | URL 唯一标示，没有填随机生成
| device_type | `String` | false | 应用类型，有效值: `ios`, `android`, `macos`, `linux` and `windows`
| bundle_id | `String` | false | iOS 指的是 `bundle_id`，Android 指的是 `package name`， 默认是 `*` 不做校验
| git_url | `String` | false | Git 仓库 URL
| password | `String` | false | 设置访问密码

### 返回样例

- 版本不存在返回 404 状态码和错误信息

应用渠道存在返回：

```json
{
  "slug": "zealot",
  "name": "Android",
  "device_type": "android",
  "bundle_id": "com.ews.im",
  "git_url": "https://github.com/tryzealot/zealot",
  "has_password": true,
  "key": "0f1d47d61f165643e5391e1b5df0ef92"
}
```

## 删除应用渠道

删除应用渠道，同时会删除所有的版本

```
DELETE /api/channels/:id
```

### 参数

:::info

需要[用户认证](/docs/developer-guide/api#authentication)

:::

| 名称 | 类型 | 是否必须 | 描述 |
|---|---|---|---|
| id | `Integer` | true | ID

### 返回样例

- 应用不存在返回 404 状态码和错误信息
- 成功操作返回 200 状态码和错误信息


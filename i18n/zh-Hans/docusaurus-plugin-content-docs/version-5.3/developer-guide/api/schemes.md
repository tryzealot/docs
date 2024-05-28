---
sidebar_label: "应用类型"
---

# 应用类型接口

## 应用类型列表

使用应用 ID 获取应用类型列表

```
GET /api/apps/:id/schemes
```

### 参数

| 名称 | 类型 | 是否必须 | 描述 |
|---|---|---|---|
| id | `Integer` | true | 应用 ID |

### 返回样例

```json
[
  {
    "id": 2,
    "name": "Adhoc",
    "new_build_callout": true,
    "retained_builds": 0,
    "app": {
      "id": 2,
      "name": "Zealot"
    },
    "channels": [
      {
        "slug": "nv1lO",
        "name": "Android",
        "device_type": "android",
        "bundle_id": "*",
        "git_url": null,
        "has_password": false,
        "key": "5cf466ef268d7b5b9d408c26889d8abc"
      },
      {
        "slug": "eTjDL",
        "name": "iOS",
        "device_type": "ios",
        "bundle_id": "*",
        "git_url": null,
        "has_password": false,
        "key": "b2d167b423a382587a20a242c5122354"
      }
    ]
  },
  {
    "id": 3,
    "name": "Production",
    "new_build_callout": true,
    "retained_builds": 0,
    "app": {
      "id": 2,
      "name": "Zealot"
    },
    "channels": [
      {
        "slug": "5MZ8B",
        "name": "Android",
        "device_type": "android",
        "bundle_id": "*",
        "git_url": null,
        "has_password": false,
        "key": "b723fcf4d179bd3cd85325d66262e0c6"
      }
    ]
  }
]
```

## 创建应用类型

为应用 ID 创建新类型

```
POST /api/apps/:id/schemes
```

### 参数

:::info

需要[用户认证](/docs/developer-guide/api#authentication)

:::

| 名称 | 类型 | 是否必须 | 描述 |
|---|---|---|---|
| id | `Integer` | true | 应用 ID
| name | `String` | true | 应用类型名称
| new_build_callout | `Boolean` | false | 关闭后不会在版本详情提示新版本窗口
| retained_builds | `Integer` | false | 最大保留版本数，设置 0 关闭版本保留功能

### 返回样例

- 请求参数无效返回 422 状态码和错误信息

创建成功返回：

```json
{
  "id": 2,
  "name": "Adhoc",
  "new_build_callout": true,
  "retained_builds": 0,
  "app": {
    "id": 2,
    "name": "Zealot"
  },
  "channels": []
}
```

## 获取应用类型详情

获取应用类型详情信息

```
GET /api/schemes/:id
```

### 参数

| 名称 | 类型 | 是否必须 | 描述 |
|---|---|---|---|
| id | `Integer` | true | ID |

### 返回样例

```json
{
  "id": 2,
  "name": "Adhoc",
  "new_build_callout": true,
  "retained_builds": 0,
  "app": {
    "id": 2,
    "name": "Zealot"
  },
  "channels": [
    {
      "slug": "nv1lO",
      "name": "Android",
      "device_type": "android",
      "bundle_id": "*",
      "git_url": null,
      "has_password": false,
      "key": "5cf466ef268d7b5b9d408c26889d8abc"
    },
    {
      "slug": "eTjDL",
      "name": "iOS",
      "device_type": "ios",
      "bundle_id": "*",
      "git_url": null,
      "has_password": false,
      "key": "b2d167b423a382587a20a242c5122354"
    }
  ]
}
```

## 更新应用类型

更新应用类型的参数信息

```
PUT /api/schemes/:id
```

### 参数

:::info

需要[用户认证](/docs/developer-guide/api#authentication)

:::

| 名称 | 类型 | 是否必须 | 描述 |
|---|---|---|---|
| id | `Integer` | true | ID
| name | `String` | true | 应用类型名称
| new_build_callout | `Boolean` | false | 关闭后不会在版本详情提示新版本窗口
| retained_builds | `Integer` | false | 最大保留版本数，设置 0 关闭版本保留功能

### 返回样例

- 应用类型不存在返回 404 状态码和错误信息

更新成功存在返回：

```json
{
  "id": 2,
  "name": "Adhoc",
  "new_build_callout": false,
  "retained_builds": 3,
  "app": {
    "id": 2,
    "name": "Zealot"
  },
  "channels": []
}
```

## 删除应用类型

删除应用类型，会删除所有关联的渠道，包含所有版本

```
DELETE /api/schemes/:id
```

### 参数

:::info

需要[用户认证](/docs/developer-guide/api#authentication)

:::

| 名称 | 类型 | 是否必须 | 描述 |
|---|---|---|---|
| id | `Integer` | true | ID

### 返回样例

- 版本不存在返回 404 状态码和错误信息
- 删除成功返回 200 状态码和错误信息

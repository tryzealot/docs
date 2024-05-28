---
sidebar_label: "用户"
---

# 用户接口

## 用户列表

获取用户列表。

```
GET /api/users
```

### 参数

:::info

需要[用户认证](/docs/developer-guide/api#authentication)且用户拥有全局管理员[权限](/docs/user-guide/administrator/permissions)。

:::

#### 返回样例

```json
[
  {
    "id": 6,
    "username": "foo",
    "email": "foo@zealot.com",
    "locale": "en",
    "appearance": "dark",
    "timezone": "Etc/UTC",
    "role": "user"
  },
  {
    "id": 7,
    "username": "bar",
    "email": "bar@zealot.com",
    "locale": "zh-CN",
    "appearance": "auto",
    "timezone": "Asia/Shanghai",
    "role": "developer"
  }
]
```

## 当前用户详情

获取用户 token 的相信信息。

```
GET /api/users/me
```

#### 返回样例

```json
{
  "id": 6,
  "username": "foo",
  "email": "foo@zealot.com",
  "locale": "en",
  "appearance": "dark",
  "timezone": "Etc/UTC",
  "role": "user"
}
```

## 搜索用户

根据 email 检索用户。

```
GET /api/users/search
```

### 参数

:::info

需要[用户认证](/docs/developer-guide/api#authentication)且用户拥有全局管理员[权限](/docs/user-guide/administrator/permissions)。

:::

| 名称 | 类型 | 是否必须 | 描述 |
|---|---|---|---|
| email | `String` | true | 用户邮箱 |

#### 返回样例

```json
[
  {
    "id": 6,
    "username": "foo",
    "email": "foo@zealot.com",
    "locale": "en",
    "appearance": "dark",
    "timezone": "Etc/UTC",
    "role": "user"
  },
  {
    "id": 7,
    "username": "bar",
    "email": "bar@zealot.com",
    "locale": "zh-CN",
    "appearance": "auto",
    "timezone": "Asia/Shanghai",
    "role": "developer"
  }
]
```

## 创建用户

传递必要的参数来创建用户。

### 参数

:::info

需要[用户认证](/docs/developer-guide/api#authentication)且用户拥有全局管理员[权限](/docs/user-guide/administrator/permissions)。

:::

| 名称 | 类型 | 是否必须 | 描述 |
|---|---|---|---|
| username | `String` | true | 用户名 |
| email | `String` | true | 用户邮箱 |
| local | `String` | false | 用户语言，默认使用全局设置，可选值为 en/zh-CN |
| appearance | `String`| false | 用户外观，默认使用全局设置，可选值为 light/dark/auto |
| timezone | `String`| false | 用户时区，默认使用全局设置，可用值请参考 [链接](https://api.rubyonrails.org/v7.1.3/classes/ActiveSupport/TimeZone.html#MAPPING) 中 MAPPING 常量 |
| role | `String` | false | 用户角色，默认值为 "user"，可选值为 user/developer/admin |

### 返回样例

- 请求参数无效返回 422 状态码和错误信息
- 创建成功返回 201 状态码和内容

```json
{
  "id": 8,
  "username": "user",
  "email": "user@zealot.com",
  "locale": "en",
  "appearance": "auto",
  "timezone": "Etc/GMT+12",
  "role": "admin"
}
```

## 编辑用户信息

编辑指定用户 ID 的用户名、邮箱或权限信息。

```
PUT /api/users/:id
```

### 参数

:::info

需要[用户认证](/docs/developer-guide/api#authentication)且用户拥有全局管理员[权限](/docs/user-guide/administrator/permissions)。

:::

| 名称 | 类型 | 是否必须 | 描述 |
|---|---|---|---|
| id | `Integer` | true | 用户 ID |
| username | `String` | true | 用户名 |
| email | `String` | true | 用户邮箱 |
| local | `String` | false | 用户语言，默认使用全局设置，可选值为 en/zh-CN |
| appearance | `String`| false | 用户外观，默认使用全局设置，可选值为 light/dark/auto |
| timezone | `String`| false | 用户时区，默认使用全局设置，可用值请参考 [链接](https://api.rubyonrails.org/v7.1.3/classes/ActiveSupport/TimeZone.html#MAPPING) 中 MAPPING 常量 |
| role | `String` | false | 用户角色，默认值为 "user"，可选值为 user/developer/admin |

### 返回样例

```json
{
  "id": 6,
  "username": "foo",
  "email": "foo@zealot.com",
  "locale": "en",
  "appearance": "light",
  "timezone": "America/Los_Angeles",
  "role": "user"
}
```

## 删除用户

从系统删除用户。

```
DELETE /api/apps/:id
```

### 参数

:::info

需要[用户认证](/docs/developer-guide/api#authentication)且用户拥有全局管理员[权限](/docs/user-guide/administrator/permissions)。

:::

| 名称 | 类型 | 是否必须 | 描述 |
|---|---|---|---|
| id | `Integer` | true | 用户 ID |

### 返回样例

- 用户不存在返回 404 状态码和错误信息
- 成功操作返回 200 状态码和错误信息

## 停用用户

将用户停用以防止其登录，当用户离开公司时这很有用

```
POST /api/users/:id/lock
```

### 参数

:::info

需要[用户认证](/docs/developer-guide/api#authentication)且用户拥有全局管理员[权限](/docs/user-guide/administrator/permissions)。

:::

| 名称 | 类型 | 是否必须 | 描述 |
|---|---|---|---|
| id | `Integer` | true | 用户 ID |

### 返回样例

- 用户不存在返回 404 状态码和错误信息
- 成功操作返回 202 状态码和错误信息

## 启用用户

启用用户以允许其登录

```
DELETE /api/users/:id/unlock
```

### 参数

:::info

需要[用户认证](/docs/developer-guide/api#authentication)且用户拥有全局管理员[权限](/docs/user-guide/administrator/permissions)。

:::

| 名称 | 类型 | 是否必须 | 描述 |
|---|---|---|---|
| id | `Integer` | true | 用户 ID |

### 返回样例

- 用户不存在返回 404 状态码和错误信息
- 成功操作返回 202 状态码和错误信息

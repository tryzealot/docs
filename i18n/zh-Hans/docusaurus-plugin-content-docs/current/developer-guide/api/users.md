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
    "role": "user"
  },
  {
    "id": 7,
    "username": "bar",
    "email": "bar@zealot.com",
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
    "role": "user"
  },
  {
    "id": 7,
    "username": "bar",
    "email": "bar@zealot.com",
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
| role | `String` | false | 用户权限，默认是 user，可选 user/developer/admin |

### 返回样例

- 请求参数无效返回 422 状态码和错误信息
- 创建成功返回 201 状态码和内容

```json
{
  "id": 8,
  "username": "user",
  "email": "user@zealot.com",
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
| role | `String` | false | 用户权限，默认是 user，可选 user/developer/admin |

### 返回样例

```json
{
  "id": 6,
  "username": "foo",
  "email": "foo@zealot.com",
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

- 应用不存在返回 404 状态码和错误信息
- 成功操作返回 200 状态码和错误信息

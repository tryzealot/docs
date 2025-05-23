---
sidebar_label: "应用成员"
---

# 应用成员接口

## 成员详情

获取应用的成员详情信息。

```
GET /api/apps/:app_id/collaborators/:user_id
```

### 参数

:::info

需要[用户认证](/docs/developer-guide/api#authentication)且用户拥有全局开发者或应用内开发者[权限](/docs/user-guide/administrator/permissions)。

:::

| 名称 | 类型 | 是否必须 | 描述 |
|---|---|---|---|
| app_id | `Integer` | true | 应用 ID |
| user_id | `Integer` | true |用户 ID |

#### 返回样例

```json
{
  "id": 6,
  "username": "foo",
  "email": "foo@zealot.com",
  "role": "user"
}
```

## 添加成员

把已有用户添加到应用的成员列表。

### 参数

:::info

需要[用户认证](/docs/developer-guide/api#authentication)且用户拥有全局开发者或应用内开发者[权限](/docs/user-guide/administrator/permissions)。

:::

| 名称 | 类型 | 是否必须 | 描述 |
|---|---|---|---|
| app_id | `Integer` | true | 应用 ID |
| user_id | `Integer` | true |用户 ID |


### 返回样例

- 请求参数无效返回 422 状态码和错误信息
- 创建成功返回 201 状态码和内容

```json
{
  "id": 1,
  "name": "Zealot",
  "schemes": []
}
```

## 变更成员

编辑用户信息的权限。

```
PUT /api/apps/:app_id/collaborators/:user_id
```

### 参数

:::info

需要[用户认证](/docs/developer-guide/api#authentication)且用户拥有全局开发者或应用内开发者[权限](/docs/user-guide/administrator/permissions)。

:::

| 名称 | 类型 | 是否必须 | 描述 |
|---|---|---|---|
| app_id | `Integer` | true | 应用 ID |
| user_id | `Integer` | true |用户 ID |

### 返回样例

```json
{
  "id": 6,
  "username": "foo",
  "email": "foo@zealot.com",
  "role": "developer"
}
```

## 删除成员

从应用成员删除指定成员。

```
DELETE /api/apps/:app_id/collaborators/:user_id
```

### 参数

:::info

需要[用户认证](/docs/developer-guide/api#authentication)且用户拥有全局开发者或应用内开发者[权限](/docs/user-guide/administrator/permissions)。

:::

| 名称 | 类型 | 是否必须 | 描述 |
|---|---|---|---|
| app_id | `Integer` | true | 应用 ID |
| user_id | `Integer` | true |用户 ID |

### 返回样例

- 应用不存在返回 404 状态码和错误信息
- 成功操作返回 200 状态码和错误信息

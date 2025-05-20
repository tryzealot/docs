---
sidebar_label: "Collaborators"
---

# Collaborator API

## Get collaborator

Retrieve the details of an app's collaborator.

```
GET /api/apps/:app_id/collaborators/:user_id
```

### Paramters

:::info

[Authentication](/docs/developer-guide/api#authentication) required and the user must have global developer or app developer [permissions](/docs/user-guide/administrator/permissions).

:::

| Attribute | Type | Required | Description |
|---|---|---|---|
| app_id | `Integer` | true | App ID |
| user_id | `Integer` | true |User ID |

### Return body

```json
{
  "id": 6,
  "username": "foo",
  "email": "foo@zealot.com",
  "role": "user"
}
```

## Add collaborator

Add an existing user to the app's collaborators list.

### Paramters

:::info

[Authentication](/docs/developer-guide/api#authentication) required and the user must have global developer or app developer [permissions](/docs/user-guide/administrator/permissions).

:::

| Attribute | Type | Required | Description |
|---|---|---|---|
| app_id | `Integer` | true | App ID |
| user_id | `Integer` | true |User ID |

### Return body

- Return 404 if channel not existed.
- Return 201 and response body if successful

```json
{
  "id": 6,
  "username": "foo",
  "email": "foo@zealot.com",
  "role": "user"
}
```

## Edit collaborator's role

Edit collaborator's role.

```
PUT /api/apps/:app_id/collaborators/:user_id
```

### Paramters

:::info

[Authentication](/docs/developer-guide/api#authentication) required and the user must have global developer or app developer [permissions](/docs/user-guide/administrator/permissions).

:::

| Attribute | Type | Required | Description |
|---|---|---|---|
| app_id | `Integer` | true | App ID |
| user_id | `Integer` | true |User ID |
| role | `String` | true | User role, defaults to "user", options are user/developer/admin |

### Return body

```json
{
  "id": 6,
  "username": "foo",
  "email": "foo@zealot.com",
  "role": "developer"
}
```

## Remove collaborator

Remove a collaborator from app.

```
DELETE /api/apps/:app_id/collaborators/:user_id
```

### Paramters

:::info

[Authentication](/docs/developer-guide/api#authentication) required and the user must have global developer or app developer [permissions](/docs/user-guide/administrator/permissions).

:::

| Attribute | Type | Required | Description |
|---|---|---|---|
| app_id | `Integer` | true | App ID |
| user_id | `Integer` | true |User ID |

### Return body

- Return 404 if app not existed.
- Return 200 if success.

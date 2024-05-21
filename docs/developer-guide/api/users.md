---
sidebar_label: "Users"
---

# User API

## User List

Retrieve the list of users.

```
GET /api/users
```

### Parameters

:::info

Authentication [required](/docs/developer-guide/api#authentication) and the user must have global admin [permissions](/docs/user-guide/administrator/permissions).

:::

#### Return body

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

## Current User Detail

Retrieve information about the authenticated user.

```
GET /api/users/me
```

#### Return body

```json
{
  "id": 6,
  "username": "foo",
  "email": "foo@zealot.com",
  "role": "user"
}
```

## Search user

Search user by email.

```
GET /api/users/search
```

### Parameters

:::info

Authentication [required](/docs/developer-guide/api#authentication) and the user must have global admin [permissions](/docs/user-guide/administrator/permissions).

:::

| Attribute | Type | Required | Description |
|---|---|---|---|
| email | `String` | true | Email |

#### Return body

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

## Create user

Create a user by providing necessary parameters.

### Parameters

:::info

Authentication [required](/docs/developer-guide/api#authentication) and the user must have global admin [permissions](/docs/user-guide/administrator/permissions).

:::

| Attribute | Type | Required | Description |
|---|---|---|---|
| username | String | true | Username |
| email | String | true | User email |
| role | String | false | User role, defaults to "user", options are user/developer/admin |

### Return body

- Return 422 if name is missing or empty.
- Return 201 and response body

```json
{
  "id": 8,
  "username": "user",
  "email": "user@zealot.com",
  "role": "admin"
}
```

## Edit User Information

Edit the username, email, or role for a specified user ID.

```
PUT /api/users/:id
```

### Parameters

:::info

Authentication [required](/docs/developer-guide/api#authentication) and the user must have global admin [permissions](/docs/user-guide/administrator/permissions).

:::

| Attribute | Type | Required | Description |
|---|---|---|---|
| id | String | true | User ID |
| username | String | true | Username |
| email | String | true | User email |
| role | String | false | User role, defaults to "user", options are user/developer/admin |

### Return body

```json
{
  "id": 6,
  "username": "foo",
  "email": "foo@zealot.com",
  "role": "user"
}
```

## Destroy user

Delete a user from the Zealot system.

```
DELETE /api/apps/:id
```

### Parameters

:::info

Authentication [required](/docs/developer-guide/api#authentication) and the user must have global admin [permissions](/docs/user-guide/administrator/permissions).

:::

| Attribute | Type | Required | Description |
|---|---|---|---|
| id | `Integer` | true | User ID |

### Return body

- Return 404 if app not existed.
- Return 200 if success.


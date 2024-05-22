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
  "locale": "en",
  "appearance": "dark",
  "timezone": "Etc/UTC",
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

## Create user

Create a user by providing necessary parameters.

### Parameters

:::info

Authentication [required](/docs/developer-guide/api#authentication) and the user must have global admin [permissions](/docs/user-guide/administrator/permissions).

:::

| Attribute | Type | Required | Description |
|---|---|---|---|
| username | `String` | true | Username |
| email | `String` | true | User email |
| local | `String` | false | set user's language, defaults use global setting, options are en/zh-CN |
| appearance | `String` | false | set user's appearance, defaults use global setting, options are light/dark/auto |
| timezone | `String` | false | set user's timezone, defaults use global setting, avaiable value in the values of [reference](https://api.rubyonrails.org/v7.1.3/classes/ActiveSupport/TimeZone.html#MAPPING) MAPPING constant. |
| role | `String` | false | User role, defaults to "user", options are user/developer/admin |

### Return body

- Return 422 if name is missing or empty.
- Return 201 and response body

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
| id | `String` | true | User ID |
| username | `String` | true | Username |
| email | `String` | true | User email |
| local | `String` | false | set user's language, defaults use global setting, options are en/zh-CN |
| appearance | `String` | false | set user's appearance, defaults use global setting, options are light/dark/auto |
| timezone | `String` | false | set user's timezone, defaults use global setting, avaiable value in the values of [reference](https://api.rubyonrails.org/v7.1.3/classes/ActiveSupport/TimeZone.html#MAPPING) MAPPING constant. |
| role | `String` | false | User role, defaults to "user", options are user/developer/admin |

### Return body

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

## Destroy user

Delete a user from the Zealot system.

```
DELETE /api/users/:id
```

### Parameters

:::info

Authentication [required](/docs/developer-guide/api#authentication) and the user must have global admin [permissions](/docs/user-guide/administrator/permissions).

:::

| Attribute | Type | Required | Description |
|---|---|---|---|
| id | `Integer` | true | User ID |

### Return body

- Return 404 if user not existed.
- Return 200 if success.

## Lock user

Deactive a user to prevent them from logging in. This is useful when a user leaves the company.

```
POST /api/users/:id/lock
```

### Parameters

:::info

Authentication [required](/docs/developer-guide/api#authentication) and the user must have global admin [permissions](/docs/user-guide/administrator/permissions).

:::

| Attribute | Type | Required | Description |
|---|---|---|---|
| id | `Integer` | true | User ID |

### Return body

- Return 404 if user not existed.
- Return 202 if success.

## Unlock user

Active a user to allow them to log in.

```
DELETE /api/users/:id/unlock
```

### Parameters

:::info

Authentication [required](/docs/developer-guide/api#authentication) and the user must have global admin [permissions](/docs/user-guide/administrator/permissions).

:::

| Attribute | Type | Required | Description |
|---|---|---|---|
| id | `Integer` | true | User ID |

### Return body

- Return 404 if user not existed.
- Return 202 if success.

---
sidebar_label: "Schemes"
---

# Scheme APIs

## List schemes

List schemes by given app ID.

```
GET /api/apps/:id/schemes
```

### Parameters

| Attribute | Type | Required | Description |
|---|---|---|---|
| id | `Integer` | true | App ID |

### Return body

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

## Create a scheme

Create a scheme by given app ID.

```
POST /api/apps/:id/schemes
```

### Parameters

:::info

[Authentication](/docs/developer-guide/api#authentication) required.

:::

| Attribute | Type | Required | Description |
|---|---|---|---|
| id | `Integer` | true | App ID
| name | `String` | true | The name of Scheme
| new_build_callout | `Boolean` | false | Whether to send a notification when a new build is available
| retained_builds | `Integer` | false | The number of builds to retain for this scheme, set `0` to disable it

### Return body

- Return 422 if name is missing or empty.
- Return 201 and response body if successful

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

## Get a scheme

Get scheme by given scheme ID.

```
GET /api/schemes/:id
```

### Parameters

| Attribute | Type | Required | Description |
|---|---|---|---|
| id | `Integer` | true | ID |

### Return body

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

## Update a scheme

Update scheme metadata by given ID.

```
PUT /api/schemes/:id
```

### Parameters

:::info

[Authentication](/docs/developer-guide/api#authentication) required.

:::

| Attribute | Type | Required | Description |
|---|---|---|---|
| id | `Integer` | true | ID
| name | `String` | true | The name of Scheme
| new_build_callout | `Boolean` | false | Whether to send a notification when a new build is available
| retained_builds | `Integer` | false | The number of builds to retain for this scheme

### Return body

- Return 404 if scheme not existed.

Success returns:

```json
{
  "id": 2,
  "name": "Adhoc",
  "new_build_callout": false,
  "retained_builds": 10,
  "app": {
    "id": 2,
    "name": "Zealot"
  },
  "channels": []
}
```

## Destroy a scheme

Destroy an scheme by given ID, this will also destroy all related channels and releases.

```
DELETE /api/schemes/:id
```

### Parameters

:::info

[Authentication](/docs/developer-guide/api#authentication) required.

:::

| Attribute | Type | Required | Description |
|---|---|---|---|
| id | `Integer` | true | ID

### Return body

- Return 404 if scheme not existed.
- Return 200 if success.

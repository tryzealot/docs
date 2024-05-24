---
sidebar_label: "Channels"
---

# Channels APIs

## List channels

List channels by given scheme ID.

```
GET /api/schemes/:id/channels
```

### Parameters

| Attribute | Type | Required | Description |
|---|---|---|---|
| id | `Integer` | true | Scheme ID |

### Return body

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

## Create a channel

Create a channel by given scheme ID.

```
POST /api/schemes/:id/channels
```

### Parameters

:::info

[Authentication](/docs/developer-guide/api#authentication) required.

:::

| Attribute | Type | Required | Description |
|---|---|---|---|
| id | `Integer` | true | Scheme ID
| name | `String` | true | The name of Channel
| device_type | `String` | true | avaiable values: `ios`, `android`, `macos`, `linux` and `windows`
| slug | `String` | false | The slug of Channel, random it if not given
| bundle_id | `String` | false | `bundle_id` for iOS, `package name` for Android, `*` is wildcard
| git_url | `String` | false | The Git repository URL
| password | `String` | false | visit password

### Return body

- Return 422 if name is missing or empty
- Return 201 and response body if successful

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

## Get a channel

Get channel by given channel ID.

```
GET /api/channels/:id
```

### Parameters

| Attribute | Type | Required | Description |
|---|---|---|---|
| id | `Integer` | true | ID |

### Return body

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

## Update a channel

Update channel metadata by given ID.

```
PUT /api/channels/:id
```

### Parameters

:::info

[Authentication](/docs/developer-guide/api#authentication) required.

:::

| Attribute | Type | Required | Description |
|---|---|---|---|
| id | `Integer` | true | ID
| name | `String` | true | The name of Channel
| device_type | `String` | true | avaiable values: `ios`, `android`, `macos`, `linux` and `windows`
| slug | `String` | false | The slug of Channel, random it if not given
| bundle_id | `String` | false | `bundle_id` for iOS, `package name` for Android, `*` is wildcard
| git_url | `String` | false | The Git repository URL
| password | `String` | false | visit password

### Return body

- Return 404 if channel not existed.
- Return 200 and response body if successful

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

## Destroy a channel

Destroy an channel by given ID, this will also destroy all related releases.

```
DELETE /api/channels/:id
```

### Parameters

:::info

[Authentication](/docs/developer-guide/api#authentication) required.

:::

| Attribute | Type | Required | Description |
|---|---|---|---|
| id | `Integer` | true | ID

### Return body

- Return 404 if channel not existed.
- Return 200 if success.

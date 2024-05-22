---
sidebar_label: "Debug Files"
---

# Debug File APIs

## Upload debug file

This allows you to upload an single iOS, Android debug file.

Debug file accepts:

- iOS: a Zipped dSYM file
- Android: a Zipped file includes mapping.txt, R.txt or AndroidManifest.xml files.

```
POST /api/debug_files/upload
```

### Parameters

:::info

[Authentication](/docs/developer-guide/api#authentication) required.

:::

| Attribute | Type | Required | Description |
|---|---|---|---|
| channel_key | `String` | true | Channel key |
| file | `File` | true | Arichved file by zip |
| release_version | `String` | true | Release version, ignore this param if iOS app |
| build_version | `String` | true | Build version, ignore this param if iOS app |

### Return body

```json
{
  "id": 1,
  "app_name": "Demo App",
  "device_type": "ios",
  "release_version": "1.14.0",
  "build_version": "980",
  "file_url": "https://tryzealot.ews.im/download/debug_files/1",
  "metadata": [
    {
      "id": 1,
      "debug_file_id": 1,
      "uuid": "34656552-21ae-3722-a7fb-3582bc9b1d98",
      "type": "arm64",
      "object": "AppName",
      "data": {},
      "size": 4137941,
      "created_at": "2022-11-25T15:53:15.157+08:00",
      "updated_at": "2022-11-25T15:53:15.157+08:00"
    }
  ]
}
```

## Download debug file

This allows you to download an single iOS, Android debug file.

```
GET /api/debug_files/download
```

### Parameters

| Attribute | Type | Required | Description |
|---|---|---|---|
| channel_key | `String` | true | Channel key |
| release_version | `String` | true | Release version, ignore this param if iOS app |
| build_version | `String` | false | Build version, ignore this param if iOS app |
| order | `String` | false | Order by <br />`version` = latest version, `upload_date` = last uploaded date<br />**Vaild in release_version is `latest`** |

### Return body

- Retun 200 status code if the version exists and redirect to the download address with a 302 status code.
- return 404 status code if the version does not exist.

## List debug files

Get a list of debug files.

This function takes pagination parameters page and per_page to restrict the list of debug files.

```
GET /api/debug_files
```

### Parameters

| Attribute | Type | Required | Description |
|---|---|---|---|
| channel_key | `String` | true | Channel key |
| page | `Integer` | false | Page number (default: `1`) |
| per_page | `Integer` | false | Number of items to list per page (default: `25`, max: `100`). |

### Return body

```json
[
  {
    "id": 1,
    "app_name": "Demo App",
    "device_type": "ios",
    "release_version": "1.14.0",
    "build_version": "980",
    "file_url": "https://tryzealot.ews.im/download/debug_files/1",
    "metadata": [
      {
        "id": 1,
        "debug_file_id": 1,
        "uuid": "34656552-21ae-3722-a7fb-3582bc9b1d98",
        "type": "arm64",
        "object": "AppName",
        "data": {},
        "size": 4137941,
        "created_at": "2022-11-25T15:53:15.157+08:00",
        "updated_at": "2022-11-25T15:53:15.157+08:00"
      }
    ]
  }
]
```

## Get a debug file

Allows you to receive information about debug file like name, file size, UUID (iOS only), platform (iOS only) or file list (Android only).

```
GET /api/debug_files/:id
```

### Parameters

:::info

[Authentication](/docs/developer-guide/api#authentication) required.

:::

| Attribute | Type | Required | Description |
|---|---|---|---|
| channel_key | `String` | true | Channel key |
| id | `Integer` | true | ID |

### Return body

```json
{
  "id": 1,
  "app_name": "Demo App",
  "device_type": "ios",
  "release_version": "1.14.0",
  "build_version": "980",
  "file_url": "https://tryzealot.ews.im/download/debug_files/1",
  "metadata": [
    {
      "id": 1,
      "debug_file_id": 1,
      "uuid": "34656552-21ae-3722-a7fb-3582bc9b1d98",
      "type": "arm64",
      "object": "AppName",
      "data": {},
      "size": 4137941,
      "created_at": "2022-11-25T15:53:15.157+08:00",
      "updated_at": "2022-11-25T15:53:15.157+08:00"
    }
  ]
}
```

## Update a existed debug file

This allows you to update a debug file.

```
PUT /api/debug_files/:id
```

### Parameters

:::info

[Authentication](/docs/developer-guide/api#authentication) required.

:::

| Attribute | Type | Required | Description |
|---|---|---|---|
| channel_key | `String` | true | Channel key |
| id | `Integer` | true | ID |
| file | `File` | true | a Zipped debug file |
| release_version | `String` | true | Release version, ignore this param if iOS app |
| build_version | `String` | true | Build version, ignore this param if iOS app |

### Return body

```json
{
  "id": 1,
  "app_name": "Demo App",
  "device_type": "ios",
  "release_version": "1.14.0",
  "build_version": "980",
  "file_url": "https://tryzealot.ews.im/download/debug_files/1",
  "metadata": [
    {
      "id": 1,
      "debug_file_id": 1,
      "uuid": "34656552-21ae-3722-a7fb-3582bc9b1d98",
      "type": "arm64",
      "object": "AppName",
      "data": {},
      "size": 4137941,
      "created_at": "2022-11-25T15:53:15.157+08:00",
      "updated_at": "2022-11-25T15:53:15.157+08:00"
    }
  ]
}
```

## Delete a debug file

This allows you to delete a debug file.

```
DELETE /api/debug_files/:id
```

### Parameters

:::info

[Authentication](/docs/developer-guide/api#authentication) required.

:::

| Attribute | Type | Required | Description |
|---|---|---|---|
| channel_key | `String` | true | Channel key |
| id | `Integer` | true | ID |

### Return body

```json
{
  "mesage": "OK"
}
```

---
sidebar_label: "Apps"
---

# App APIs

## Upload an app

This allows you to upload an single iOS, Android or macOS file.

```
POST /api/apps/upload
```

### Parameters

:::info

[Authentication](/docs/developer-guide/api#authentication) required.

:::

| Attribute | Type | Required | Description |
|---|---|---|---|
| file | `File` | true | an App file |
| channel_key | `String` | false | Channel key<br />Create a new App if leave it empty |
| name | `String` | false | the name of App<br />Use app name from parsed metadata in given file if leave it empty |
| release_type | `String` | false | Eg, debug, beta, adhoc, release, enterprise 等 |
| source | `String` | false | the source of upload (default is `api`) |
| changelog | `String` | false | Changelog<br />Avaiables in plain text or JSON formatted struct |
| branch | `String` |false| a branch name from git |
| git_commit | `String` | false | git commit |
| ci_url | `String` | false | the build url of a C |
| custom_fields | `String` | false | JSON formatted custom fileds<br />It could configures and display title, <br />value and icon from fontawesome in a Release page from an App |

For `changelog` attribute which it accepts both `plain text` and `JSON` formatted contents:

**plain text**:

```
message 1\nmessage 2
```

**JSON**:

```json
[
  {
    "message": "message 1",
    "author": "admin",
    "email": "admin@zealot.com",
    "date": "2021-11-11 11:11:11"
  },
  {
    "message": "message 1",
    "author": "developer",
    "email": "developer@zealot.com",
    "date": "2021-11-11 11:11:11"
  }
]
```

For `custom_fields` attribute which it use `JSON` formatted struct to build from each key-value. for example, Display country name like `country=China` with icon [flag](https://fontawesome.com/v5.15/icons/flag?style=solid):

```diff
curl -X POST \
  'https://YOUR_ZEALOT_URL/api/apps/upload' \
   --form 'token="token"' \
   --form 'channel_key="channel_key"' \
+  --form 'custom_fields="[{"name":"country","value":"China","icon":"fas fa-flag"}]"' \
   --form 'file=@/path/to/your/app'
```

### Return body

```json
{
  "id": 50,
  "version": 7,
  "app_name": "Test Android",
  "bundle_id": "com.test.app",
  "release_version": "1.0",
  "build_version": "1",
  "source": "SOURCE",
  "branch": "master",
  "git_commit": "e9de48513dbb6abfbxxxxxxxxxxxxxxxxxxxxxxxx",
  "ci_url": "",
  "size": 1565486,
  "icon_url": "/uploads/apps/a1/r1/icons/app_icon.png",
  "release_url": "https://YOUR_ZEALOT_URL/channels/1XmpC/releases/1",
  "install_url": "https://YOUR_ZEALOT_URL/download/releases/1",
  "qrcode_url": "https://YOUR_ZEALOT_URL/channels/1XmpC/releases/1/qrcode?size=thumb",
  "changelog": [
    {
      "message": "Changelog message 1"
    },
    {
      "message": "Changelog message 2"
    }
  ],
  "text_changelog": "- Changelog message 1\n- Changelog message 2",
  "custom_fields": [],
  "created_at": "2021-09-01T11:43:33.977+08:00",
  "app": {
    "id": 1,
    "name": "App name"
  },
  "scheme": {
    "id": 8,
    "name": "Test"
  },
  "channel": {
    "slug": "1XmpC",
    "name": "Android",
    "device_type": "android",
    "bundle_id": "*",
    "git_url": null,
    "has_password": false
  }
}
```

## List apps

Get a list of app.

This function takes pagination parameters page and per_page to restrict the list of app.

```
GET /api/apps
```

### Parameters

| Attribute | Type | Required | Description |
|---|---|---|---|
| page | `Integer` | false | Page number (default: `1`) |
| per_page | `Integer` | false | Number of items to list per page (default: `25`, max: `100`). |

### Return body

```json
[
  {
    "id": 1,
    "name": "Zealot",
    "schemes": [
      {
        "id": 1,
        "name": "Adhoc",
        "channels": [
          {
            "slug": "X1IXN",
            "name": "Android",
            "device_type": "android",
            "bundle_id": "*",
            "git_url": null,
            "has_password": false
          },
          {
            "slug": "O1qHk",
            "name": "iOS",
            "device_type": "ios",
            "bundle_id": "*",
            "git_url": null,
            "has_password": false
          }
        ]
      },
      {
        "id": 2,
        "name": "Production",
        "channels": [
          {
            "slug": "l19Tl",
            "name": "Android",
            "device_type": "android",
            "bundle_id": "*",
            "git_url": null,
            "has_password": false
          },
          {
            "slug": "8selv",
            "name": "iOS",
            "device_type": "ios",
            "bundle_id": "*",
            "git_url": null,
            "has_password": false
          }
        ]
      }
    ]
  }
]
```

## Get an app

Allows you to receive information about an app like name, scheme, channel.

```
GET /api/apps/:id
```

### Parameters

| Attribute | Type | Required | Description |
|---|---|---|---|
| id | `String` | true | ID |

### Return body

```json
{
  "id": 1,
  "name": "Zealot",
  "schemes": [
    {
      "id": 5,
      "name": "Test App",
      "channels": [
        {
          "slug": "X1IXN",
          "name": "Android",
          "device_type": "android",
          "bundle_id": "*",
          "git_url": null,
          "has_password": false
        },
        {
          "slug": "O1qHk",
          "name": "iOS",
          "device_type": "ios",
          "bundle_id": "*",
          "git_url": null,
          "has_password": false
        }
      ]
    }
  ]
}
```

## Get versions list of app

Get a list of apps by the given channel key


```
GET /api/apps/versions
```

### Parameters

| Attribute | Type | Required | Description |
|---|---|---|---|
| channel_key | `String` | true | Channel key |
| page | `Integer` | false | Page number (default: `1`) |
| per_page | `Integer` | false | Number of items to list per page (default: `25`, max: `100`). |

### Return body

```json
{
  "app_name": "Zealot iOS",
  "bundle_id": "*",
  "git_url": null,
  "app": {
    "id": 3,
    "name": "Zealot"
  },
  "scheme": {
    "id": 5,
    "name": "AdHoc"
  },
  "releases": [
    {
      "version": 2,
      "app_name": "Zealot iOS",
      "bundle_id": "im.ews.zealot",
      "release_version": "1.0.0",
      "build_version": "10292024",
      "source": "Web",
      "branch": "",
      "git_commit": "",
      "ci_url": "",
      "size": 79712596,
      "icon_url": "https://tryzealot.ews.im/uploads/apps/a3/r21/icons/8ab13dc08321f9f3412a9fa98689d9c3.png",
      "install_url": "itms-services://?action=download-manifest&url=https://tryzealot.ews.im/api/apps/O1qHk/1/install",
      "changelog": [],
      "created_at": "2019-12-25T14:26:06.608+08:00"
    },
    {
      "version": 1,
      "app_name": "Zealot iOS",
      "bundle_id": "im.ews.zealot",
      "release_version": "1.0.0",
      "build_version": "10291524",
      "source": "Web",
      "branch": "",
      "git_commit": "",
      "ci_url": "",
      "size": 79712596,
      "icon_url": "https://tryzealot.ews.im/uploads/apps/a3/r21/icons/8ab13dc08321f9f3412a9fa98689d9c3.png",
      "install_url": "itms-services://?action=download-manifest&url=https://tryzealot.ews.im/api/apps/O1qHk/1/install",
      "changelog": [],
      "created_at": "2019-12-25T14:26:06.608+08:00"
    },
  ]
}
```

## Get the latest version of app

Allows you to receive the latest information about a Release version from App like app metadata, changelog, icon url, install (download) url.

```
GET /api/apps/latest
```

### Parameters

| Attribute | Type | Required | Description |
|---|---|---|---|
| channel_key | `String` | true | Channel key |
| release_version | `String` | true | Release version |
| build_version | `String` | true | Build version |

### Return body

```json
{
  "app_name": "Zealot iOS",
  "bundle_id": "*",
  "git_url": null,
  "app": {
    "id": 3,
    "name": "Zealot"
  },
  "scheme": {
    "id": 5,
    "name": "AdHoc"
  },
  "releases": {
    "version": 1,
    "app_name": "Zealot iOS",
    "bundle_id": "im.ews.zealot",
    "release_version": "1.0.0",
    "build_version": "10291524",
    "source": "Web",
    "branch": "",
    "git_commit": "",
    "ci_url": "",
    "size": 79712596,
    "icon_url": "https://tryzealot.ews.im/uploads/apps/a3/r21/icons/8ab13dc08321f9f3412a9fa98689d9c3.png",
    "install_url": "itms-services://?action=download-manifest&url=https://tryzealot.ews.im/api/apps/O1qHk/1/install",
    "changelog": [],
    "created_at": "2019-12-25T14:26:06.608+08:00"
  }
}
```

## Check version exists

Allows you to check the Release exists by given query, query accepts two combo group:

- `bundle_id`, `release_version` and `build_verion`
- `bundle_id` and `git_commit`

```
GET /api/apps/version_exist
```

### Parameters

| Attribute | Type | Required | Description |
|---|---|---|---|
| channel_key | `String` | true | Channel key |
| bundle_id | `String` | true |  bundle_id or package_name |
| release_version | `String` | false | Release version |
| build_version | `String` | false | Build version |
| git_commit | `String` | false | git commit hash |

### Return body

- Return 200 if release existed.
- Return 404 if release not existed.

Success returns:

```json
{
  "version": 1,
  "app_name": "Zealot iOS",
  "bundle_id": "im.ews.zealot",
  "release_version": "4.1.1",
  "build_version": "10291524",
  "source": "Web",
  "branch": "",
  "git_commit": "",
  "ci_url": "",
  "size": 79712596,
  "icon_url": "https://tryzealot.ews.im/uploads/apps/a3/r21/icons/8ab13dc08321f9f3412a9fa98689d9c3.png",
  "install_url": "itms-services://?action=download-manifest&url=https://tryzealot.ews.im/api/apps/O1qHk/1/install",
  "changelog": [],
  "created_at": "2019-12-25T14:26:06.608+08:00"
}
```

Not found returns:

```json
{
    "error": "Not found release"
}
```

## Create an app

Create an app by given name.

```
POST /api/apps
```

### Parameters

:::info

[Authentication](/docs/developer-guide/api#authentication) required.

:::

| Attribute | Type | Required | Description |
|---|---|---|---|
| name | `String` | true | The name of App

### Return body

- Return 422 if name is missing or empty.

Success returns:

```json
[
  {
    "id": 1,
    "name": "Zealot",
    "schemes": []
  }
]
```

## Update an app

Update app metadata by given ID.

```
PUT /api/apps/:id
```

### Parameters

:::info

[Authentication](/docs/developer-guide/api#authentication) required.

:::

| Attribute | Type | Required | Description |
|---|---|---|---|
| id | `Integer` | true | ID
| name | `String` | true | The name of App

### Return body

- Return 404 if app not existed.

Success returns:

```json
[
  {
    "id": 1,
    "name": "New Zealot",
    "schemes": []
  }
]
```

## Destroy an app

Destroy an app by given ID, this will also destroy all related schemes, channels and releases.

```
DELETE /api/apps/:id
```

### Parameters

:::info

[Authentication](/docs/developer-guide/api#authentication) required.

:::

| Attribute | Type | Required | Description |
|---|---|---|---|
| id | `Integer` | true | ID

### Return body

- Return 404 if app not existed.
- Return 200 if success.

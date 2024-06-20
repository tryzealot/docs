---
sidebar_label: "zealot"
---

# Fastlane action: zealot

Uploading iOS, Android and macOS app, it requires three params:

```ruby
zealot(
  endpoint: 'https://zealot.example.com',
  token: '...',
  channel_key: '...',
)
```

## Parameters

```
+-----------------+---------------------------------+------------------------+----------+
|                                    zealot Options                                     |
+-----------------+---------------------------------+------------------------+----------+
| Key             | Description                     | Env Var                | Default  |
+-----------------+---------------------------------+------------------------+----------+
| endpoint        | The endpoint of zealot          | ZEALOT_ENDPOINT        |          |
| token           | The token of user               | ZEALOT_TOKEN           |          |
| channel_key     | The key of app's channel        | ZEALOT_CHANNEL_KEY     |          |
| file            | The path of app file. Optional  | ZEALOT_FILE            |          |
|                 | if you use the `gym`, `ipa`,    |                        |          |
|                 | `xcodebuild` or `gradle`        |                        |          |
|                 | action.                         |                        |          |
| name            | The name of app to display on   | ZEALOT_NAME            |          |
|                 | zealot                          |                        |          |
| changelog       | The changelog of app            | ZEALOT_CHANGELOG       |          |
| slug            | The slug of app                 | ZEALOT_SLUG            |          |
| release_type    | The release type of app         | ZEALOT_RELEASE_TYPE    |          |
| branch          | The name of git branch          | ZEALOT_BRANCH          |          |
| git_commit      | The hash of git commit          | ZEALOT_GIT_COMMIT      |          |
| custom_fields   | The key-value hash of custom    | ZEALOT_CUSTOM_FIELDS   |          |
|                 | fields                          |                        |          |
| password        | The password of app to download | ZEALOT_PASSWORD        |          |
| source          | The name of upload source       | ZEALOT_SOURCE          | fastlane |
| ci_url          | The name of upload source       | ZEALOT_CI_CURL         |          |
| timeout         | Request timeout in seconds      | ZEALOT_TIMEOUT         |          |
| hide_user_token | replase user token to *** to    | ZEALOT_HIDE_USER_TOKEN | true     |
|                 | keep secret                     |                        |          |
| verify_ssl      | Should verify SSL of zealot     | ZEALOT_VERIFY_SSL      | true     |
|                 | service                         |                        |          |
| fail_on_error   | Should an error uploading app   | ZEALOT_FAIL_ON_ERROR   | false    |
|                 | cause a failure                 |                        |          |
+-----------------+---------------------------------+------------------------+----------+
* = default value is dependent on the user's system

+-----------------------+---------------------------------------------+
|                       zealot Output Variables                       |
+-----------------------+---------------------------------------------+
| Key                   | Description                                 |
+-----------------------+---------------------------------------------+
| ZEALOT_APP_ID         | The id of app                               |
| ZEALOT_RELEASE_ID     | The id of app's release                     |
| ZEALOT_RELEASE_URL    | The release URL of the newly uploaded build |
| ZEALOT_INSTALL_URL    | The install URL of the newly uploaded build |
| ZEALOT_QRCODE_URL     | The QRCode URL of the newly uploaded build  |
| ZEAALOT_ERROR_MESSAGE | The error message during upload process     |
+-----------------------+---------------------------------------------+
```

## Output Variables

```
+-----------------------+---------------------------------------------+
|                       zealot Output Variables                       |
+-----------------------+---------------------------------------------+
| Key                   | Description                                 |
+-----------------------+---------------------------------------------+
| ZEALOT_APP_ID         | The id of app                               |
| ZEALOT_RELEASE_ID     | The id of app's release                     |
| ZEALOT_RELEASE_URL    | The release URL of the newly uploaded build |
| ZEALOT_INSTALL_URL    | The install URL of the newly uploaded build |
| ZEALOT_QRCODE_URL     | The QRCode URL of the newly uploaded build  |
| ZEAALOT_ERROR_MESSAGE | The error message during upload process     |
+-----------------------+---------------------------------------------+
Access the output values using `lane_context[SharedValues::VARIABLE_NAME]`
```

---
sidebar_label: "zealot_version_check"
---

# Fastlane action: zealot_version_check

检查当前版本是否已经上传，减少重复打包和上传。

```ruby
zealot_version_check(
  endpoint: 'https://zealot.com',
  token: '...',
  bundle_id: 'com.example.app.name',
  release_version: '1.0.0',
  build_version: '1'
)
```

## 参数

```
+-----------------+---------------------------------+------------------------+---------+
|                             zealot_version_check Options                             |
+-----------------+---------------------------------+------------------------+---------+
| Key             | Description                     | Env Var                | Default |
+-----------------+---------------------------------+------------------------+---------+
| endpoint        | The endpoint of zealot          | ZEALOT_ENDPOINT        |         |
| token           | The token of user               | ZEALOT_TOKEN           |         |
| channel_key     | The key of app's channel        | ZEALOT_CHANNEL_KEY     |         |
| bundle_id       | The bundle id(package name) of  | ZEALOT_BUNDLE_ID       |         |
|                 | app                             |                        |         |
| release_version | The release version of app      | ZEALOT_RELEASE_VERSION |         |
| build_version   | The build version of app        | ZEALOT_BUILD_VERSION   |         |
| git_commit      | The latest git commit of app    | ZEALOT_GIT_COMMIT      |         |
| verify_ssl      | Should verify SSL of zealot     | ZEALOT_VERIFY_SSL      | true    |
|                 | service                         |                        |         |
| fail_on_error   | Should an error http request    | ZEALOT_FAIL_ON_ERROR   | false   |
|                 | cause a failure? (true/false)   |                        |         |
+-----------------+---------------------------------+------------------------+---------+
```

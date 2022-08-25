---
sidebar_label: "zealot_sync_devices"
---

# Fastlane action: zealot_sync_devices

:::info

:bell: Zealot 4.5.0 版本已经支持使用 [Apple API Key](https://docs.fastlane.tools/app-store-connect-api/#using-fastlane-api-key-json-file)

苹果开发者管理并可自动同步测试设备展示，[查看详情](/docs/user-guide/features/apple_team)
:::

同步并关联苹果开发者中心（Apple Developer Portal)的测试设备名称到 Zealot 服务。

```ruby
# 使用 Apple API Key 授权
zealot_sync_devices(
  endpoint: 'https://zealot.com',
  token: '...',
  api_key_path: '/path/to/your/api_key_json_file',
  team_id: '...'
)

# 使用密码授权（需要二步认证）
zealot_sync_devices(
  endpoint: 'https://zealot.com',
  token: '...',
  username: 'user@example.com',
  team_id: '...'
)
```

## 参数

```
+---------------+-----------------------------------------------------------------------------+------------------------+---------+
|                                                  zealot_sync_devices Options                                                   |
+---------------+-----------------------------------------------------------------------------+------------------------+---------+
| Key           | Description                                                                 | Env Var(s)             | Default |
+---------------+-----------------------------------------------------------------------------+------------------------+---------+
| endpoint      | The endpoint of zealot                                                      | ZEALOT_ENDPOINT        |         |
| token         | The token of user                                                           | ZEALOT_TOKEN           |         |
| username      | The apple id (username) of Apple Developer Portal                           | ZEALOT_USERNAME        | *       |
| api_key_path  | Path to your App Store Connect API Key JSON file                            | ZEALOT_API_PATH        |         |
|               | (https://docs.fastlane.tools/app-store-connect-api/#using-fastlane-api-key  |                        |         |
|               | -json-file)                                                                 |                        |         |
| api_key       | Your App Store Connect API Key information                                  | ZEALOT_API_KEY         | *       |
|               | (https://docs.fastlane.tools/app-store-connect-api/#using-fastlane-api-key  |                        |         |
|               | -hash-option)                                                               |                        |         |
| team_id       | The ID of your Developer Portal team if you're in multiple teams            | ZEALOT_APPLE_TEAM_ID   | *       |
| team_name     | The name of your Developer Portal team if you're in multiple teams          | ZEALOT_APPLE_TEAM_NAME | *       |
| platform      | The platform to use (optional)                                              | ZEALOT_APPLE_PLATFORM  | ios     |
| verify_ssl    | Should verify SSL of zealot service                                         | ZEALOT_VERIFY_SSL      | true    |
| timeout       | Request timeout in seconds                                                  | ZEALOT_TIMEOUT         |         |
| fail_on_error | Should an error http request cause a failure? (true/false)                  | ZEALOT_FAIL_ON_ERROR   | false   |
+---------------+-----------------------------------------------------------------------------+------------------------+---------+
```

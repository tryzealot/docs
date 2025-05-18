# Webhooks

Zealot provides a webhook for message notifications for each application channel.
The webhook is a fully customizable structure that can be used for most notification services, such as Wecom, Dingtalk, Slack, etc.

## Payload (default)

Each parameter of the default structure has its value provided as a variable,
and each variable starts with `@`, the default structure will be used if the custom structure is left empty when creating the webhook.
The following variables are all provided.

```ruby
{
  event: @event,
  username: @username,
  email: @email,
  title: @title,
  name: @app_name,
  app_name: @app_name,
  device_type: @device_type,
  release_type: @release_type,
  release_version: @release_version,
  build_version: @build_version,
  size: @file_size,
  branch: @branch,
  source: @source,
  changelog: @changelog,
  release_url: @release_url,
  install_url: @install_url,
  icon_url: @icon_url,
  qrcode_url: @qrcode_url,
  ci_url: @ci_url,
  uploaded_at: @uploaded_at
}
```

Output:

```json
{
  "event": "upload_events",
  "username": "foobar",
  "email": "foobar@example.com",
  "title": "Zealot upload 1.0.0 version",
  "app_name": "Zealot",
  "device_type": "iOS",
  "release_type": "adhoc",
  "release_version": "1.0.0",
  "build_version": "1",
  "size": "30 MB",
  "branch": "develop",
  "source": "API",
  "install_url": "https://zealot.example.com/api/apps/download/12354",
  "icon_url": "https://zealot.example.com/api/apps/icon.png",
  "qrcode_url": "https://zealot.example.com/api/apps/354/qrcode",
  "uploaded_at": "2019-12-30 11:33:00",
  "changelog": "- Add feture A\n- Fix issue B\n- Release v1.0.0",
}
```

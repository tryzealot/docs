---
sidebar_label: "网络钩子"
---

# 网络钩子（WebHook）

Zealot 为每个应用渠道都提供一个消息通知的网络钩子，网络钩子完全可自定义结构体可适用于绝大多数的通知服务，
比如企业微信、钉钉、Slack 等等。

## 默认结构体

默认结构体每个参数都已变量的方式提供它的值，每个变量都以 `@` 开头，在创建网络钩子如果留空自定义结构体就会使用默认结构体，
如下全部提供的变量：

```ruby
{
  event: @event,
  title: @title,
  app_name: @name,
  device_type: @device_type,
  release_version: @release_version,
  build_version: @build_version,
  size: @file_size,
  changelog: @changelog,
  install_url: @install_url,
  icon_url: @icon_url,
  qrcode_url: @qrcode_url,
  uploaded_at: @uploaded_at
}
```

输出的结果如下：

```json
{
  "event": "upload_events",
  "title": "Zealot 样例 iOS 内测版上传了 1.0.0 版本",
  "app_name": "Zealot 样例 iOS 内测版",
  "device_type": "iOS",
  "release_version": "1.0.0",
  "build_version": "1",
  "size": "30 MB",
  "install_url": "https://zealot.test/api/apps/download/12354",
  "icon_url": "https://zealot.test/api/apps/icon.png",
  "qrcode_url": "https://zealot.test/api/apps/354/qrcode",
  "uploaded_at": "2019-12-30 11:33:00",
  "changelog": "- 新增了 A 功能\n- 修复了 B 问题\n- 发布 1.0.0 版本",
}
```

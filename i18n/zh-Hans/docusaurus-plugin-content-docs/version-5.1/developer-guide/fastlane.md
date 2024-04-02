# Fastlane 插件

:::info

第一次听说 fastlane，那你得多 out 了？！快看看[开发者准备的 Fastlane 系列教程](https://icyleaf.com/series/fastlane)补补课吧。

:::

## 添加 Zealot 插件

[fastlane-plugin-zealot](https://github.com/tryzealot/fastlane-plugin-zealot) 是专门为 Zealot 提供
的上传 iOS、Andorid 应用和调试文件的 fastlane 插件。

通过下面方法添加到 fastlane 体系中：

```bash
$ fastlane add_plugin zealot
```

插件包含多个 action：

- `zealot`: 上传 iOS 或 Android 应用
- `zealot_debug_file`: 上传调试文件（iOS 是 dSYM，Android 是 Proguard）
- `zealot_version_check`: 检查当前版本是否已存在
- `zealot_sync_devices`: 同步 Apple 开发者账号的设备列表信息到 Zealot 用于关联 AdHoc 证书应用的设备名称

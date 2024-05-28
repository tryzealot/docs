# 最佳实践

## iOS 和 Android 应用

### 集成 Zealot SDK

集成 Zealot SDK 可以让非客户端研发自动触发新版本检查、查看变更日志和安装功能。

### 安装 fastlane

通过官方文档安装 fastlane.

### 配置 Fastfile

```ruby
# 构建 iOS 的 ipa 文件并上传 zealot 服务器
lane :upload_app do
  # 打包，比如 iOS 的 gym 或 Android 的 gradle
  gym

  # 上传应用到 Zealot
  zealot(
    endpoint: '...',
    token: '...',
    channel_key: '...'
  )

  # 上传 iOS 的 dSYM
  zealot_debug_file(
    scheme: 'AppName'
  )
end

# 构建 android 的 apk 文件并生成 progguard 包后上传 zealot 服务器
lane :upload_debug_file do
  # 打包，比如 iOS 的 gym 或 Android 的 gradle
  gradle

  # 自动化搜索 Android Proguard（混淆）并打包 Zip 文件
  debug_file

  # 上传应用到 Zealot
  zealot(
    endpoint: '...',
    token: '...',
    channel_key: '...'
  )

  # 上传 Android 的 Proguard
  zealot_debug_file(
    build_type: 'release',
    flavor: 'googleplay'
  )
end
```

## CI 打包构建服务

自行选择使用 Jenkins、Gitlab CI 等任何可构建 iOS 或 Android 的构建服务完成项目构建的配置。这部分不同的 CI 服务配置都有所不同，暂时无法展开，大家可根据自己熟悉情况或借助运维部门的协助搭建。

## Zealot 服务

除了管理每次上传的应用和调试文件，在每次接收到上传的应用会触发已配置的网络钩子用来给第三方服务发送通知有新版本收到，同时对于集成 Zealot SDK 的手机客户端每次第一次打开 App 都会收到新版本的安装提醒。

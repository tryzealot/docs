---
sidebar_label: "Android"
---

# Zealot Android SDK

Android 组件提供为 Zealot 检查新版本和安装的服务，支持 Kotlin 和 Java。

## 安装

### JitPack

使用 [jitpack](https://jitpack.io) 安装，先需要添加 maven 仓库：

```groovy
allprojects {
  repositories {
    ...
    maven { url 'https://jitpack.io' }
  }
}
```

之后在主 app 项目的 `build.gradle` 添加 zealot：

```groovy
dependencies {
  implementation 'com.github.tryzealot:zealot-android:master-SNAPSHOT'
}
```

## 用户权限

使用 Zealot SDK 需要开启网络权限

```xml
<uses-permission android:name="android.permission.INTERNET" />
```

## 初始化

在你的 `Application` 文件的 `onCreate` 方法添加启动代码：

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="android-zealot-sdk">
<TabItem value="Kotlin">
```

```kotlin
// 单个渠道
Zealot.create(getActivity())
      .setEndpoint("https://zealot.com")
      .setChannelKey("...")
      .setBuildType(BuildConfig.BUILD_TYPE)
      .launch()

// 多个渠道，比如测试版本，内测版本
Zealot.create(getActivity())
      .setEndpoint("https://zealot.com")
      .setChannelKey("xxxxxxx", "beta")
      .setCHannelKey("yyyyyyy", "test")
      .setBuildType(BuildConfig.BUILD_TYPE)
      .launch()
```

```mdx-code-block
</TabItem>
<TabItem value="Java">
```

```kotlin
// 单个渠道
Zealot.create(getActivity())
      .setEndpoint("https://zealot.com")
      .setChannelKey("...")
      .setBuildType(BuildConfig.BUILD_TYPE)
      .launch();

// 多个渠道，比如测试版本，内测版本
Zealot.create(getActivity())
      .setEndpoint("https://zealot.com")
      .setChannelKey("xxxxxxx", "beta")
      .setCHannelKey("yyyyyyy", "test")
      .setBuildType(BuildConfig.BUILD_TYPE)
      .launch();
```

```mdx-code-block
</TabItem>
</Tabs>
```

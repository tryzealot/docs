---
sidebar_label: "Android"
---

# Zealot Android SDK

The Android component provides a service to check for new versions and installations for Zealot, supporting both Kotlin and Java.

## Install

### JitPack

Using [jitpack](https://jitpack.io) to install：

```groovy
allprojects {
  repositories {
    ...
    maven { url 'https://jitpack.io' }
  }
}
```

In `build.gradle` file of main app project add:

```groovy
dependencies {
  implementation 'com.github.tryzealot:zealot-android:master-SNAPSHOT'
}
```

## Permission

Zealot needs internet permission

```xml
<uses-permission android:name="android.permission.INTERNET" />
```

## Usages

Add the start code to the `onCreate` method block of your `Application` file:

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="android-zealot-sdk">
<TabItem value="Kotlin">
```

```kotlin
// Single channel
Zealot.create(getActivity())
      .setEndpoint("https://zealot.example.com")
      .setChannelKey("...")
      .setBuildType(BuildConfig.BUILD_TYPE)
      .launch()

// Multi-channel, such as beta, adhoc versions
Zealot.create(getActivity())
      .setEndpoint("https://zealot.example.com")
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
// Single channel
Zealot.create(getActivity())
      .setEndpoint("https://zealot.example.com")
      .setChannelKey("...")
      .setBuildType(BuildConfig.BUILD_TYPE)
      .launch();

// Multi-channel, such as beta, adhoc versions
Zealot.create(getActivity())
      .setEndpoint("https://zealot.example.com")
      .setChannelKey("xxxxxxx", "beta")
      .setCHannelKey("yyyyyyy", "test")
      .setBuildType(BuildConfig.BUILD_TYPE)
      .launch();
```

```mdx-code-block
</TabItem>
</Tabs>
```

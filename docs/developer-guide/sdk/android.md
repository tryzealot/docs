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

## Usages

Add the start code to the `onCreate` method block of your `Application` file:

### Kotlin

```kotlin
// Single channel
Zealot.create(getActivity())
      .setEndpoint("https://zealot.com")
      .setChannelKey("...")
      .setBuildType(BuildConfig.BUILD_TYPE)
      .launch()

// Multi-channel, such as beta, adhoc versions
Zealot.create(getActivity())
      .setEndpoint("https://zealot.com")
      .setChannelKey("xxxxxxx", "beta")
      .setCHannelKey("yyyyyyy", "test")
      .setBuildType(BuildConfig.BUILD_TYPE)
      .launch()
```

### Java

```java
// Single channel
Zealot.create(getActivity())
      .setEndpoint("https://zealot.com")
      .setChannelKey("...")
      .setBuildType(BuildConfig.BUILD_TYPE)
      .launch();

// Multi-channel, such as beta, adhoc versions
Zealot.create(getActivity())
      .setEndpoint("https://zealot.com")
      .setChannelKey("xxxxxxx", "beta")
      .setCHannelKey("yyyyyyy", "test")
      .setBuildType(BuildConfig.BUILD_TYPE)
      .launch();
```

## Permission

Zealot needs internet permission

```xml
<uses-permission android:name="android.permission.INTERNET" />
```

---
sidebar_label: "zealot_debug_file"
---

# Fastlane action: zealot_debug_file

Upload iOS dSYM or Android Proguard file(s) to Zealot

```ruby
  # Upload iOS dSYM file
  zealot_debug_file(
    endpoint: 'http://localhost:3000',
    token: '...',
    channel_key: '...',
    platform: :ios,
    xcode_scheme: 'AppName',
    verify_ssl: false
  )

  # Upload Android Proguard files
  zealot_debug_file(
    endpoint: 'http://localhost:3000',
    token: '...',
    channel_key: '...',
    platform: :android,
    android_build_type: 'release',
    android_flavor: 'store',
    release_version: '1.1.0',
    build_version: '1',
    overwrite: true
  )

  # Upload given zip file
  zealot_debug_file(
    endpoint: 'http://localhost:3000',
    token: '...',
    channel_key: '...',
    zip_file: 'path/to/your/zip_file',
    release_version: '1.1.0',
    build_version: '1',
    verify_ssl: false
  )
```

## Parameters

```
+--------------------+-----------------------------------+---------------------------+---------+
|                                  zealot_debug_file Options                                   |
+--------------------+-----------------------------------+---------------------------+---------+
| Key                | Description                       | Env Var                   | Default |
+--------------------+-----------------------------------+---------------------------+---------+
| endpoint           | The endpoint of zealot            | ZEALOT_ENDPOINT           |         |
| token              | The token of user                 | ZEALOT_TOKEN              |         |
| channel_key        | Any channel key of app            | ZEALOT_CHANNEL_KEY        |         |
| zip_file           | Using given the path of zip file  | DF_DSYM_ZIP_FILE          |         |
|                    | to direct upload                  |                           |         |
| platform           | The name of platfrom, avaiable    | ZEALOT_PLATFORM           |         |
|                    | value are                         |                           |         |
|                    | ios,mac,macos,osx,android         |                           |         |
| path               | The path of debug file            | ZEALOT_PATH               |         |
|                    | (iOS/macOS is archive path for    |                           |         |
|                    | Xcode, Android is path for app    |                           |         |
|                    | project)                          |                           |         |
| xcode_scheme       | The scheme name of app            | ZEALOT_XCODE_SCHEME       |         |
| android_build_type | The build type of app             | ZEALOT_ANDROID_BUILD_TYPE | release |
| android_flavor     | The product flavor of app         | ZEALOT_ANDROID_FLAVOR     |         |
| extra_files        | A set file names                  | ZEALOT_EXTRA_FILES        | []      |
| output_path        | The output path of compressed     | DF_DSYM_OUTPUT_PATH       | .       |
|                    | dSYM file                         |                           |         |
| release_version    | The release version of app        | ZEALOT_RELEASE_VERSION    |         |
|                    | (Android needs)                   |                           |         |
| build_version      | The build version of app          | ZEALOT_BUILD_VERSION      |         |
|                    | (Android needs)                   |                           |         |
| overwrite          | Overwrite output compressed file  | DF_DSYM_OVERWRITE         | false   |
|                    | if it existed                     |                           |         |
| timeout            | Request timeout in seconds        | ZEALOT_TIMEOUT            |         |
| verify_ssl         | Should verify SSL of zealot       | ZEALOT_VERIFY_SSL         | true    |
|                    | service                           |                           |         |
| fail_on_error      | Should an error uploading app     | ZEALOT_FAIL_ON_ERROR      | false   |
|                    | cause a failure? (true/false)     |                           |         |
+--------------------+-----------------------------------+---------------------------+---------+
* = default value is dependent on the user's system

+-----------------------+-----------------------------------------+
|               zealot_debug_file Output Variables                |
+-----------------------+-----------------------------------------+
| Key                   | Description                             |
+-----------------------+-----------------------------------------+
| ZEAALOT_ERROR_MESSAGE | The error message during upload process |
+-----------------------+-----------------------------------------+
```

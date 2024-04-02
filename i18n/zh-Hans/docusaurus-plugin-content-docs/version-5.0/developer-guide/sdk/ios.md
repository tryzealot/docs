---
sidebar_label: "iOS"
---

# Zealot iOS SDK
iOS 组件提供为 Zealot 检查新版本和安装的服务，支持 Swift 和 Objective-C。

## 安装

### Cocoapods

使用 [Cocoapods](https://cocoapods.org) 安装 Zealot 需要把它加到 `Podfile`:

```ruby
pod 'Zealot', :git => 'https://github.com/tryzealot/zealot-ios.git', :branch => 'master'
```

保存后开始安装：

```bash
pod install
```

## 初始化

1. 在 AppDelegate 文件引入 Zealot 框架头：

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="ios-zealot-sdk">
<TabItem value="Swift">
```

```swift
import Zealot
```

```mdx-code-block
</TabItem>
<TabItem value="Objective-C">
```

```objectivec
#import <Zealot/Zealot-Swift.h>
```

```mdx-code-block
</TabItem>
</Tabs>
```

2. 接着在上面文件的 `application:didFinishLaunchingWithOptions:` 方法追加启动代码：

```mdx-code-block
<Tabs groupId="ios-zealot-sdk">
<TabItem value="Swift">
```

```swift
// 单个渠道
let zealot = Zealot(endpoint: "http://zealot.com", channelKey: "...")
zealot.checkVersion()

// 多个渠道，比如测试版本，内测版本
let zealot = Zealot(endpoint: "http://zealot.com",
                 channelKeys: [
                   "beta": "xxxxxxx",
                   "test": "yyyyyyy"],
          default_enviroment: "beta")

// 最后触发监测方法
zealot.checkVersion()
```

```mdx-code-block
</TabItem>
<TabItem value="Objective-C">
```

```objectivec
// 单个渠道
Zealot *zealot = [[Zealot alloc] initWithEndpoint:@"http://zealot.com"
                                       channelKey:@"..."];

// 多个渠道，比如测试版本，内测版本
Zealot *zealot = [[Zealot alloc] initWithEndpoint:@"http://zealot.com"
                                      channelKeys:@{
                                              @"beta": @"xxxxxxx",
                                              @"gray": @"yyyyyyy"
                                          }
                               default_enviroment:@"beta"];

// 最后触发监测方法
[zealot checkVersion];
```

```mdx-code-block
</TabItem>
</Tabs>
```

---
sidebar_label: "iOS"
---

# Zealot iOS SDK

The iOS component provides a service to check for new versions and installations for Zealot,
supporting Swift and Objective-C.

## Install

### Cocoapods

Adding below code into `Podfile`:

```ruby
pod 'Zealot', :git => 'https://github.com/tryzealot/zealot-ios.git', :branch => 'master'
```

Install it：

```bash
pod install
```

## Usages

### Import header

1. Add the code in your `AppDelegate`：

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
// Objective-C
#import <Zealot/Zealot-Swift.h>
```

```mdx-code-block
</TabItem>
</Tabs>
```

### Configure

2. Add the following code in  `application:didFinishLaunchingWithOptions:` method block：

```mdx-code-block
<Tabs groupId="ios-zealot-sdk">
<TabItem value="Swift">
```

```swift
// Single channel
let zealot = Zealot(endpoint: "https://zealot.example.com", channelKey: "...")
zealot.checkVersion()

// Multi-channel, such as beta, adhoc versions
let zealot = Zealot(endpoint: "https://zealot.example.com",
                 channelKeys: [
                   "beta": "xxxxxxx",
                   "test": "yyyyyyy"],
          default_enviroment: "beta")

// Active it
zealot.checkVersion()
```

```mdx-code-block
</TabItem>
<TabItem value="Objective-C">
```

```objectivec
// Single channel
Zealot *zealot = [[Zealot alloc] initWithEndpoint:@"https://zealot.example.com"
                                       channelKey:@"..."];

// Multi-channel, such as beta, adhoc versions
Zealot *zealot = [[Zealot alloc] initWithEndpoint:@"https://zealot.example.com"
                                      channelKeys:@{
                                              @"beta": @"xxxxxxx",
                                              @"gray": @"yyyyyyy"
                                          }
                               default_enviroment:@"beta"];

// Active it
[zealot checkVersion];
```

```mdx-code-block
</TabItem>
</Tabs>
```

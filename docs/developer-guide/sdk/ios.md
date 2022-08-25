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

```swift
// Swift
import Zealot
```

```objectivec
// Objective-C
#import <Zealot/Zealot-Swift.h>
```

### Configure

2. Add the following code in  `application:didFinishLaunchingWithOptions:` method block：

```swift
// Swift
// Single channel
let zealot = Zealot(endpoint: "http://zealot.com", channelKey: "...")
zealot.checkVersion()

// Multi-channel, such as beta, adhoc versions
let zealot = Zealot(endpoint: "http://zealot.com",
                 channelKeys: [
                   "beta": "xxxxxxx",
                   "test": "yyyyyyy"],
          default_enviroment: "beta")

// Active it
zealot.checkVersion()
```

```objectivec
// Objective-C
// Single channel
Zealot *zealot = [[Zealot alloc] initWithEndpoint:@"http://zealot.com"
                                       channelKey:@"..."];

// Multi-channel, such as beta, adhoc versions
Zealot *zealot = [[Zealot alloc] initWithEndpoint:@"http://zealot.com"
                                      channelKeys:@{
                                              @"beta": @"xxxxxxx",
                                              @"gray": @"yyyyyyy"
                                          }
                               default_enviroment:@"beta"];

// Active it
[zealot checkVersion];
```

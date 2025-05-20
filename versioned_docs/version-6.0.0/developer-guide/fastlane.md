# Fastlane plugins

## Add Zealot plugin

> [fastlane](https://fastlane.tools) is an open source platform aimed at simplifying Android and iOS deployment.
> fastlane lets you automate every aspect of your development and release workflow,
> customize your deployment workflows using the hundreds of community built fastlane actions and plugins.

[fastlane-plugin-zealot](https://github.com/tryzealot/fastlane-plugin-zealot) provides upload app, debug_file and
version check actions to Zealot, install it in shell：

```bash
$ fastlane add_plugin zealot
```

## More usefully plugins

In addition, as the author of the project also open source a number of other fastlane plug-ins there is always one you will use:

Plugin | Description |
---|---
[fastlane-plugin-ci_changelog](https://github.com/icyleaf/fastlane-plugin-ci_changelog) | Automate generate changelog between previous and the latest commit of SCM during the CI services.
[fastlane-plugin-update_jenkins_build](https://github.com/icyleaf/fastlane-plugin-update_jenkins_build)  | Update build's description of jenkins.
[fastlane-plugin-humanable_build_number](https://github.com/icyleaf/fastlane-plugin-humanable_build_number)  | Automatic generate app build number unque and human readable friendly
[fastlane-plugin-app_info](https://github.com/icyleaf/fastlane-plugin-app_info) | Teardown tool for mobile app(ipa, apk and aab file), analysis metedata like version, name, icon etc.
[fastlane-plugin-android_channels](https://github.com/icyleaf/fastlane-plugin-android_channels)  | Package unsign apk with channels and write empty file to META-INF with channel in general way
[fastlane-plugin-ram_disk](https://github.com/icyleaf/fastlane-plugin-ram_disk)  | Use a virtual ram disk to do anything else

# Best Practices

## Workflow

### iOS and Android Apps

#### Zealot SDKs

Integration with the Zealot SDK allows non-client development to automatically trigger new version checks, view change logs, and install functionality.

#### Install fastlane

In addition to the fastlane-plugin-zealot plugin, which is required to upload applications and debug files,
it is highly recommended to install the following plug-ins in addition to fastlane.

- [ci_changelog](https://github.com/icyleaf/fastlane-plugin-ci_changelog) | Support for multiple CI systems to automatically generate change history
- [update_jenkins_build](https://github.com/icyleaf/fastlane-plugin-update_jenkins_build) | Automatically Update Jenkins Build Description
- [humanable_build_number](https://github.com/icyleaf/fastlane-plugin-humanable_build_number) | Generate a build version number that is recognizable to development
- [app_info](https://github.com/icyleaf/fastlane-plugin-app_info) | View metadata about the application after successful packaging
- [ram_disk](https://github.com/icyleaf/fastlane-plugin-ram_disk) | Create in-memory virtual disks, mainly used to improve App build speed (consider if memory is large)
- [debug_file](https://github.com/icyleaf/fastlane-plugin-debug_file) | Automated search for iOS/macOS dSYM or Android Proguard (obfuscation) and packaging of Zip files

```ruby
# Build and upload ipa to zealot service
lane :upload_app do
  # Building the package file, using gym in iOS, gradle in Android
  gym

  # Uploading to Zealot
  zealot(
    endpoint: '...',
    token: '...',
    channel_key: '...'
  )

  # Uploading dSYM file to Zealot
  zealot_debug_file(
    scheme: 'AppName'
  )
end

# Build android package file and generate progguard then upload to zealot service
lane :upload_debug_file do
  # Building the package file, using gym in iOS, gradle in Android
  gradle

  #  Automated search for iOS/macOS dSYM or Android Proguard (obfuscation) and packaging of Zip files
  debug_file

  # Uploading to Zealot
  zealot(
    endpoint: '...',
    token: '...',
    channel_key: '...'
  )

  # Uploading Proguard file to Zealot
  zealot_debug_file(
    build_type: 'release',
    flavor: 'googleplay'
  )
end
```

### CI/CD Service

For example, Jenkins, configure the project, set up the git hook to trigger packaging, nothing to say

### Zealot Service

In addition to managing each uploaded application and debug file, each time an uploaded application is received,
a configured web hook is triggered to send a notification to the third-party service that a new version has been received,
and for mobile clients that integrate with the Zealot SDK, they will receive a new version installation alert each time they open the app for the first time.

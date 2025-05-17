# Changelog

## Unreleased

:::tip

The following list of changes is the list that has not yet been released, code change history: [Unreleased]

:::

#### Added

- `Web` Fully optimized interface design, new color schemes, new user experience.
- `Web/API` Added basic information upload and unpacking for HarmonyOS app. Thanks to [InjoyDeng](https://github.com/InjoyDeng)
- `Web` Friendly prompt provided when attempting to retrieve iOS device UDID on mobile app based on installation restrictions.
- `Web` Added configurable file naming for app downloads, supporting either original filename or default format. [#1744](https://github.com/tryzealot/zealot/pull/1744) Thanks to [rakuyoMo](https://github.com/rakuyoMo)
- `Web` Added `native codes` field to Android metadata parsing. [#1745](https://github.com/tryzealot/zealot/pull/1745)
- `Web` Added `ci_url, branch, source, release_type` fields to webhooks. [#1750](https://github.com/tryzealot/zealot/pull/1750) Thanks to [rakuyoMo](https://github.com/rakuyoMo)
- `Web` Added configuration option for pagination display at bottom. [#1888](https://github.com/tryzealot/zealot/pull/1888)
- `Web` Application list now supports sorting by app name. [#1879](https://github.com/tryzealot/zealot/pull/1879) Thanks to [BraZucco](https://github.com/BraZucco)
- `Web` Application list supports search by app name, sorting and archiving functions. [#1864](https://github.com/tryzealot/zealot/pull/1864) [#1886](https://github.com/tryzealot/zealot/pull/1886) [#1879](https://github.com/tryzealot/zealot/pull/1879) Thanks to [BraZucco](https://github.com/BraZucco)
- `Web` Github authorization login now supports organization restrictions. [#1878](https://github.com/tryzealot/zealot/pull/1878) Thanks to [BraZucco](https://github.com/BraZucco)
- `Docker` Added log output formats support: `rails (default), json, graylog2, lines, ltvs`. [#1747](https://github.com/tryzealot/zealot/pull/1747)
- `Docker` Added `ZEALOT_POSTGRES_URL` environment variable to configure the database via URL. (old separate field environment variables also retained)
- `Docker` Added SMTP verification test before service startup.

#### Fixed

- `Web/API` Fixed protected app downloads requiring authentication. [#1798](https://github.com/tryzealot/zealot/pull/1798)
- `Web` Optimized English language locale pack.
- `API` Fixed upload source not being recorded when uploading apps. [#1746](https://github.com/tryzealot/zealot/pull/1746) Thanks to [rakuyoMo](https://github.com/rakuyoMo)
- `API` Optimized logic for registering iOS devices to Apple Developer Account.

## 5.3.7 (2024-09-27)

Full [commit changes][5.3.7].

#### Added

- `API` Added two interfaces: edit application version metadata, delete application version. [#1669](https://github.com/tryzealot/zealot/pull/1669)

#### Fixed

- `Web` Reverted the logic of disabling all third-party login authorization simultaneously after closing the user registration mode in version 5.3.5. [#1671](https://github.com/tryzealot/zealot/issues/1671) [#1645](https://github.com/tryzealot/zealot/issues/1645) Thanks to [officebluesource](https://github.com/officebluesource)
- `Docker` Fixed exception error when initializing data.

## 5.3.6 (2024-08-10)

Full [commit changes][5.3.6].

#### Fixed

- `Web` Fixed issues with OAuth and LDAP third-party login. [#1613](https://github.com/tryzealot/zealot/issues/1613) Thanks to [InjoyDeng](https://github.com/InjoyDeng)
- `Docker` Fixed database merge issues during the first initialization. Thanks to [InjoyDeng](https://github.com/InjoyDeng) for reporting on Telegram.

## 5.3.5 (2024-07-24)

Full [commit changes][5.3.5].

#### Fixed

- `API` Ignore validate app format for upload App API. thanks telegram user @Jason1.
- `Web` Correct limited app tips on Android device. [#1593](https://github.com/tryzealot/zealot/issues/1593) thanks to [GanHuaLin](https://github.com/GanHuaLin)
- `Web` Disable third-part OAuth to login when disbale registration mode. thanks telegram user @Jason1.
- `Web` Fix release version detect when show has new build of App.

## 5.3.4 (2024-07-08)

Full [commit changes][5.3.4].

#### Added

- `Web/API` Add Apple TV device for teardown. [#1565](https://github.com/tryzealot/zealot/pull/1565)
- `Web` Add re-generate expired user confirmation token.
- `Web` Add user defined umami host setting (environment variable `UMAMI_SCRIPT_URL`).

#### Fixed

- `Web` Fix universal APK parsing error (app name and icons).
- `Web` Fix crash after logged out when disabled guest mode.
- `Web` Fix verify webhook body vaildator.
- `Web` Catch test webhook and show error notification.

## 5.3.3 (2024-06-25)

Full [commit changes][5.3.3].

#### Changed

- `Web` Changed back in old logic which it will public for everyone in build release page by default.
- `API` Renamed role `user` to `member`.
- `API` Analytics only display if configured and change to read only.

#### Fixed

- `API` Fixed can not upload app by given password

## 5.3.2 (2024-06-24)

Full [commit changes][5.3.2].

#### Fixed

- `Web/API` Fixed issue where the specified app name was not used when uploading applications. thanks to G0_0Oopoa.
- `Web` Fixed incorrect variable name for setting Umami script URL. thanks to Ethan.

## 5.3.1 (2024-06-20)

Full [commit changes][5.3.1].

#### Added

- `Web` Added SMTP email configuration verification [#1548](https://github.com/tryzealot/zealot/pull/1548)
- `Web` Added feature for resending confirmation email to inactive users

#### Fixed

- `Web` Fixed guest access to application version details and password authentication anomalies. [#1544](https://github.com/tryzealot/zealot/issues/1544) thanks to [savage7](https://github.com/savage7)
- `Web` Redirect to the original page after batch deletion of versions in the channel list.
- `Web` Fixed the inability to click to navigate to the version details page in the channel list. [#1540](https://github.com/tryzealot/zealot/issues/1540) thanks to [mlch911](https://github.com/mlch911)
- `Web` Fixed new users being unable to register. [#1539](https://github.com/tryzealot/zealot/issues/1539) thanks to [mlch911](https://github.com/mlch911)
- `Web` Fixed Apple developer test devices failing to register after being added, deleted, and re-added. [#1542](https://github.com/tryzealot/zealot/issues/1542) thanks to [mlch911](https://github.com/mlch911)
- `Web` Fixed the issue where emails could not be sent after configuring the SMTP mailbox. [#1547](https://github.com/tryzealot/zealot/issues/1547) thanks to [jason-xie-123](https://github.com/jason-xie-123)
- `Web` Fixed backup errors and the display of backup phase status.
- `Web` Fixed the issue where viewing macOS and mobilprovision unpacking could not find devices.

## 5.3.0 (2024-05-28)

Full [commit changes][5.3.0].

#### Changed

- `Docker` **Breaking Change** Plan to deprecate Redis service. [#1318](https://github.com/tryzealot/zealot/pull/1318).
- `Web` **Breaking Change** Adjusted the data backup logic. [#1318](https://github.com/tryzealot/zealot/pull/1318).
- `Web` **Major Change** Added App's permissions and global permissions adjustment [#1494](https://github.com/tryzealot/zealot/issues/1494) [#1507](https://github.com/tryzealot/zealot/pull/1507)
- `Web` **Breaking Change** Drop supports arm/v7 platform image.
- `Development` Ruby upgraded to 3.3 and NodeJS upgraded to 20.11.1.

#### Added

- `Web` Added App's collaborators permissions and App transfer functionality. [#1494](https://github.com/tryzealot/zealot/issues/1494) [#1507](https://github.com/tryzealot/zealot/pull/1507)
- `Web` Added user personalization settings, including language, appearance, and time zone. [#1506](https://github.com/tryzealot/zealot/pull/1506)
- `Web` Added user lock and enable functionality.
- `Web` Add multi-select delete and one-click delete
- `Web` added app's collaborators permission feature. [#1494](https://github.com/tryzealot/zealot/issues/1494) for application channel version list
- `API` Added App's collaborators CRUD APIs, app details API now include collaborators list [#1494](https://github.com/tryzealot/zealot/issues/1494)
- `API` Added user CRUD and lock / enable interface.
- `API` added CRUD interfaces for apps, app's schemes and app's channels. [#1485](https://github.com/tryzealot/zealot/issues/1485)

#### Fixed

- `Web` Third-party login fails to obtain email causing token generation issue. [#1461](https://github.com/tryzealot/zealot/issues/1461) thanks to [yiukamsum](https://github.com/yiukamsum)
- `Web` Fixed an issue where the value set from environment variables in the system settings was displayed incorrectly on the page.
- `Web` Fixed the incorrect variable name for OIDC scope.
- `Web` Fixed the system settings not displaying environmental variable values correctly.
- `Web` Fixed the display issue with new user email confirmation.
- `Web` Optimized the friendly display of certain pages on mobile devices.
- `Web` Improved English translations.

## 5.2.3 (2024-04-29)

Full [commit changes][5.2.3].

#### Fixed

- `Web` Fixed an issue where the user registration prompt username was empty. [#1479](https://github.com/tryzealot/zealot/pull/1479) thanks to [mlch911](https://github.com/mlch911)

## 5.2.2 (2024-04-03)

Full [commit changes][5.2.2].

#### Fixed

- `Web` Fix OIDC redirect_uri. [#1455](https://github.com/tryzealot/zealot/pull/1455) thanks to [yiukamsum](https://github.com/yiukamsum)

## 5.2.1 (2024-04-02)

Fixed the pesky bug where the install button would not show on iOS 14.5 and below systems. Full [commit changes][5.2.1].

#### Fixed

- `Web` Install button not displayed on iOS 13 and below. [#1335](https://github.com/tryzealot/zealot/issues/1335) thanks to [InjoyDeng](https://github.com/InjoyDeng) [mlch911](https://github.com/mlch911)
- `Web` Deleting any sub-level of a new app caused an abnormal app list page. [#1445](https://github.com/tryzealot/zealot/issues/1335) thanks to [InjoyDeng](https://github.com/InjoyDeng)
- `Web` Fixed anomalies with empty channels on the app type detail page. [#1426](https://github.com/tryzealot/zealot/issues/) thanks to [Liberately](https://github.com/Liberately)
- `API` Fixed the wrong logic when getting the latest version without a bundle_id.
- `API` Non-iOS app downloads use a regular download URL for the install_url.

## 5.2.0 (2024-03-14)

Minor functional fixes, with minor upgrades to new features. Full [commit changes][5.2.0].

#### Added

- `Web` New setting for maximum number of retained versions added [#1407](https://github.com/tryzealot/zealot/pull/1407)
- `Web` Opened up the feature for macOS systems to retrieve device UDID
- `Web` Allow registration of macOS devices to Apple Developer for testing

#### Fixed

- `Web` Exception error for Android unpacking without services storage
- `Web` Failure to create due to validation error on creating webhook format [#1314](https://github.com/tryzealot/zealot/issues/1314)
- `Web` Exception error caused by application version details mismatching debug files query [#1406](https://github.com/tryzealot/zealot/issues/1406)
- `API` Fixed the download debug files endpoint and changed the request to GET [#1416](https://github.com/tryzealot/zealot/issues/1416)

## 5.1.0 (2023-12-07)

Mainly functional fixes, with minor upgrades to new features. Full [commit changes][5.1.0].

#### Changed

- `Docker` **Major Change** The minimum version of Redis dependencies has been updated from 5.x to 6.2+. It is recommended to use version 7.x. When upgrading, please manually modify the settings.

#### Added
- `Docker` added Redis and PostgreSQL version checks; running below minimum versions may cause malfunction.
- `Docker` service initializes by creating databases during startup.
- `Web` enhanced validation conditions for JSON format settings on the settings page.

#### Fixed

- `Web` checks disk space upon upload to determine file existence.
- `Web` fixed debug file association with application versions.
- `Web` resolved issue where the application unpack details page wasn't displaying the list of testing devices.
- `Web` optimized display information on error pages for application versions.
- `Web` improved display for long package names of mobile device applications.
- `Web` optimized some page styles and the display of English language.
- `API/Web` fixed issue where the Android app parsing icon in webp format failed to convert to png.
- `API` resolved GraphQL user authentication.

## 5.0.0 (2023-09-06)

Any archived package of application supportted (e.g. `Windows` or `Linux`)). Full [commit changes][5.0.0].

#### Changed

- `Docker` **Major Change** The minimum version of Redis dependencies has been updated from 5.x to 6.2+. It is recommended to use version 7.x. When upgrading, please manually modify the settings.

#### Added

- `Web`/`API` supports hosting of general applications (those that can be parsed automatically and those that cannot be parsed are skipped), and Windows and Linux platforms are added by default [#1121](https://github.com/tryzealot/zealot/pull/1121)
- `Web`/`API` adds support for hosting Windows applications (uploading and displaying metadata parsing) [#1124](https://github.com/tryzealot/zealot/pull/1124)
- `Web` has a new debugging file page and adds support for parsing and hosting multiple dSYM debugging files [#1127](https://github.com/tryzealot/zealot/pull/1127) [#1124](https://github.com/tryzealot/zealot/pull/1124) [#961](https://github.com/tryzealot/zealot/issues/961)
- `Web` supports unpacking v1, v2, and v3 signature information for Android applications [#1124](https://github.com/tryzealot/zealot/pull/1124)
- `Web` strengthens X509 certificate information for unpacking Android and iOS applications [#1124](https://github.com/tryzealot/zealot/pull/1124)
- `Web` adds a "Reparse" function to update the metadata of old structure debugging files
- `Web` supports markdown format for change logs of uploaded application versions
- `Web` settings page can configure the global "minimum number of items returned per page" and "maximum number of items"
- `Web` for iOS applications, the application version details page displays the expiration time information of the signing certificate and the logical restriction of installation failure due to expired signing certificate (can be downloaded)
- `Web` adds or updates JSON format verification to network hooks and settings pages.
- `Web` supports registering test devices to Apple developers with custom device names and editing/updating device names after creation.
- `Web` supports downloading private key certificates for Apple developers.

#### Fixed

- `Web` fixes the issue of being unable to delete unpacked applications
- `Web` optimizes the style of some pages
- `Web` corrects errors in the English language package (en language i18n)
- `Web` fixes the error page that appears when creating an empty application type
- `Web` fixes the 404 error page that appears when a file is not found.
- `API` fixes the logic optimization of comparing build_version for retrieving the latest version of an application.
- `Web` optimizes the error handling for custom field format during application upload.
- `Web` optimizes the correct redirection for URL injection, empty application history versions, and unregistered devices.
- `Web` optimizes the display of error information for backup tasks.
- `Web` adds type detection for application types and debug files during application upload.
- `Web` fixes the error message of not preselecting the creation of a Distribution Certificate for Apple developers.

## 4.7.1 (2023-03-10)

Support for parsing aab applications generated by the latest Android aapt2 build tool, full [commit changes][4.7.1].

#### Changed

- `Docker` **Major Change** The minimum version of Redis dependencies has been updated from 5.x to 6.2+. It is recommended to use version 7.x. When upgrading, please manually modify the settings.

#### Fixed

- `Web` upgrades to the latest appt2 model to avoid exceptions when parsing aab files.
- `Web` implements duplicate processing for parsing exceptions.

#### Added

- `Web` adds application types to the details page of unpacked Android applications.
- `Web` adjusts the original page after editing an application channel.

## 4.7.0 (2023-03-03)

**Major Change** The minimum version of Redis dependencies has been updated from 5.x to 6.2+. Full [commit changes][4.7.0].

#### Changed

- `Docker` **Major Change** The minimum version of Redis dependencies has been updated from 5.x to 6.2+. It is recommended to use version 7.x. When upgrading, please manually modify the settings.

#### Added

- `Web` adds a control switch for "New Upload Version Prompt Window" to application types. [#1058](https://github.com/tryzealot/zealot/pull/1058) Thanks to [softwind0214](https://github.com/softwind0214)
- `Web` allows clicking on the application icon on the application list page to jump to the application details page.
- `Web` adds the display of the version number of dependent services to the environment information.
- `Web` adds support for displaying nightly build versions in the version number.

#### Fixed

- `Web` downgrades Ruby version to 3.0 temporarily to solve the iOS application parsing crash caused by the high version. See [#1070](https://github.com/tryzealot/zealot/issues/1070) for details.
- `Web` fixes the display order of applications/types/channels, which is now fixed as ascending order of creation time.
- `Web` fixes the issue where there is no confirmation prompt when a user logs out.
- `Web` fixes the issue where the main historical version of an application cannot be deleted.
- `Web` improves the style of multiple pages.
- `Web` no longer displays Javascript debugger logs in production environments.

## 4.6.0 (2023-01-17)

The runtime environment has been upgraded to Ruby 3.2 and now supports arm64 platforms. Full [commit changes][4.6.0].

#### Fixed

- `Web` captures the issue of creating an application channel with an empty name. [#968](https://github.com/tryzealot/zealot/issues/968) Thanks to [congpeijun](https://github.com/congpeijun)
- `Web` improves the logic for backup files that do not exist on disk. [#995](https://github.com/tryzealot/zealot/issues/995)

#### Added

- `Docker` supports arm64/v8 and armv7 arch. [#970](https://github.com/tryzealot/zealot/pull/970)
- `Web` Adopted a new 50x error page.

#### Changed

- `Web` upgrades the Ruby version to 3.2 in development environments, and devcontainers and containers now have the YJIT feature enabled by default. [#1011](https://github.com/tryzealot/zealot/pull/1011)
- `API` updates the data structure of the debug file return and changes the status code from 204 to 200.

## 4.5.3 (2022-11-22)

Full [commit changes][4.5.3].

#### Fixed

- `Web` Fixes the issue where third-party login cannot be redirected. [#949](https://github.com/tryzealot/zealot/issues/949) Thanks to [softwind0214](https://github.com/softwind0214)

#### Added

- `Docker` Adds a new environment variable to disable the request protection of WebSocket (ActionCable) requests (experimental). [#950](https://github.com/tryzealot/zealot/pull/950)

## 4.5.2 (2022-11-01)

Full [commit changes][4.5.2].

#### Fixed

- `Web` fixes the issue where registering a test device is abnormal.  [#935](https://github.com/tryzealot/zealot/issues/935) Thanks to [ycy0430](https://github.com/ycy0430)
- `Web` adapts the QR code to support dark mode.
- `Web` corrects the English language pack.

#### Added

- `WebHook` Income webhook body structure adds the `username` and `email` fields. [#934](https://github.com/tryzealot/zealot/issues/934) Thanks to [rkonfj](https://github.com/rkonfj)
- `Docker` The `SIDEKIQ_CONCURRENCY` environment variable is now supported to set the concurrency of background tasks, with a default value of 5.

#### Changed

- `Docker` reduces security risks by changing the Web service, which includes puma and pumacontrolserver, to listen on `127.0.0.1`.
- `Web` optimizes the wording of the iOS device UDID profile.
- `Web` updates the text at the bottom of the page. Thanks to Rails and the AdminLTE open source project!

## 4.5.1 (2022-09-14)

Full [commit changes][4.5.1]

#### Fixed

- `Web` Fixes the issue where the application unpacking results in parsing errors.

## 4.5.0 (2022-08-19)

Supports the 🌑 dark mode and managing the test devices of an 👨🏻‍🔧 Apple developer account! Full [commit changes][4.5.0].

#### Added

- `Web` supports dark mode. [#816](https://github.com/tryzealot/zealot/pull/816)
- `Web` adds Apple developer management for registering test devices. [#817](https://github.com/tryzealot/zealot/pull/817)
- `Web` adds data backup management. [#835](https://github.com/tryzealot/zealot/pull/835)
- `Web` completes the monitoring of dependent services in the management panel. [#586](https://github.com/tryzealot/zealot/issues/586)
- `API` adds three fields, `platform`, `device_type`, and `custom_fields`, to the release dictionary.

#### Changed

- `Web` **Incompatible change** Google Analytics forces an upgrade to version 4, and previous settings need to be reconfigured to take effect. [#815](https://github.com/tryzealot/zealot/pull/815)
- `CLI` **Incompatible change** The data backup and restore functionality is no longer available due to changes in the structure. Please use the data backup function in the admin panel instead.
- `Web` adjusts the display of device UDID acquisition, iOS version installation and download based on the device, no longer displaying all functions.
- `Web` removes the page statistics function in the admin panel. [#814](https://github.com/tryzealot/zealot/pull/814)
- `Web` migrates the front-end technology stack from webpacker to esbuild + sass, and from Turbolinks to Stimulus, bringing a better front-end interaction experience. [#829](https://github.com/tryzealot/zealot/pull/829)
- `Web` due to the complexity of editing application types and channels, only the application name can be modified.

#### Fixed

- `Web` fixes the error of selecting a channel that does not exist under an application type. [#795](https://github.com/tryzealot/zealot/issues/795) Thanks to [tasselsd](https://github.com/tasselsd)
- `API` fixes the Android address return error. [#813](https://github.com/tryzealot/zealot/issues/813) Thanks to [denymz](https://github.com/denymz)
- `Web`/`API` fixes the exception caused by some parameters being empty in aab parsing. [tryzealot/fastlane-plugin-zealot#9](https://github.com/tryzealot/fastlane-plugin-zealot/issues/9) Thanks to [tasselsd](https://github.com/tasselsd)
- `Web` fixes the issue of abnormal generation of demo data during the first initialization of the project. [#821](https://github.com/tryzealot/zealot/issues/821)
- `API` fixes the issue of abnormal data when checking the latest version of the application. [#856](https://github.com/tryzealot/zealot/issues/856) Thanks to [denymz](https://github.com/denymz)
- `Web` fixes the issue of an error being thrown due to abnormal data in the associated network hook when viewing the details of an application channel.
- `Web` corrects many spelling errors in the English language pack.

## 4.4.1 (2022-06-20)

Full [commit changes][4.4.1]

#### Fixed

- `WebHook` fixes the issue where an error is thrown after a successful trigger. [#792](https://github.com/tryzealot/zealot/issues/792) Thanks to [tasselsd](https://github.com/tasselsd)
- `Docker` compatible with Caddy 2.5.0 for proxying from https to http. [#790](https://github.com/tryzealot/zealot/pull/790) Thanks to [VisionBao](https://github.com/VisionBao) [songge1209](https://github.com/songge1209)

## 4.4.0 (2022-06-09)

Full [commit changes][4.4.0].

#### Changed

- `Web` adds filtering by version, branch, and packaging type to the list display for users who are not logged in and have not enabled guest mode, in addition to viewing application version details.
- `Web` upgrades the runtime environment to Ruby 3.0 and the service framework to Rails 7.0.
- `Web` is now compatible with the macOS M1 chip.

#### Added

- `Web` simplifies and standardizes some application links to facilitate sharing. [#666](https://github.com/tryzealot/zealot/pull/666)
- `Web` completes some missing permission check pages.

#### Fixed

- `Job` fixes the issue of abnormal URL Schemes when parsing iOS files.
- `Web` fixes the issue where service logs are not output to the terminal console.
- `Web` adds exception handling for processing debug files uploaded when they are deleted during parsing or cannot be found for other reasons.
- `Web` adapts the UI for ultra-wide screens.
- `Web` fixes security vulnerabilities in third-party login dependencies.
- `API` fixes the issue where uploading Android without channel_key results in an exception. [#779](https://github.com/tryzealot/zealot/issues/779) Thanks to [likfe](https://github.com/likfe)

## 4.3.1 (2021-12-22)

Full [commit changes][4.3.1].

#### Added

- `Web` after updating the setting, the original default value can be restored.
- `Web` supports parsing and displaying app links (distinguishing between deep links and URL schemes) for Android in application unpacking.
- `Web` strengthens the visual effect of the open and closed status of the setting page.

#### Fixed

- `Web` fixes the issue of asynchronous task methods in demo mode.
- `Web` fixes the issue where selected application types and channels cannot be checked when creating and editing an application.
- `Web` fixes the issue where it is not possible to navigate to the environment page.
- `Web` fixes the issue where aab parsing fails when there are no intent filters.
- `Web` adds error handling for unchecking all application types and channels when updating an application.
- `Web` fixes the issue where the loading strategy causes all third-party logins to be unavailable.

## 4.3.0 (2021-12-08)

Supports parsing of the aab format, adds support for multiple languages. Full [commit changes][4.3.0]

#### Changed

- `Web` uses the default prompt structure as the data structure for network hooks, instead of a strange structure.
- `Web` no longer provides parameter changes for third-party login authorization on the settings page (requires service restart).
- `API` the upload application interface and version details return the `text_changelog` field in the response body. [650f1ffd](https://github.com/tryzealot/zealot/commit/650f1ffd3731f6a1f4cc703430be1b1b6f5d1cee)
- `API` renames the `changelog_list` field in the response body to `changelog`. [719f0b1e](https://github.com/tryzealot/zealot/commit/719f0b1eff92f358d246ededd6c1e6f9863f7f85)
- `Web` changes the log output format from an array to text format that is compatible with Markdown lists. [719f0b1e](https://github.com/tryzealot/zealot/commit/719f0b1eff92f358d246ededd6c1e6f9863f7f85)
- `Web` some privacy-related configuration keys or tokens are only displayed in plaintext under administrator permissions; other permissions cannot see them; demo mode is read-only and will do some encryption. [#644](https://github.com/tryzealot/zealot/pull/644)
- `Web` does not display the build date and hash value if they cannot be obtained.

#### Added

- `Web` supports parsing of the Android App Bundle (aab) file format and webp icons.
- `Web` supports language internationalization, with optional language packs: Simplified Chinese, English (support for page configuration).
- `Web` supports configuring more system settings. [#643](https://github.com/tryzealot/zealot/pull/643)
- `Web` adds editing functionality for network hooks in the management panel.
- `Web` rewrites and optimizes the style layout of the application list.
- `Web` optimizes the basic email template.
- `Web` adjusts the style and error logic of the login window.
- `Web` adds file permission checking to the environment variable page in the management panel. [#608](https://github.com/tryzealot/zealot/pull/608)
- `Web` adds error details display for asynchronous tasks in the management panel, with a maximum of 5000 errors.
- `Web` uses a better log output format. [#646](https://github.com/tryzealot/zealot/pull/646)

#### Fixed

- `Web` fixes the issue where the default selection state of boolean type parameters is incorrect on the settings page.
- `Web` fixes the issue where exceptions occur when clicking install or download in the DingTalk app (changed to WeChat logic processing).
- `Web` fixes the issue where the build date (time stamp when building a Docker image) cannot be displayed on the environment page.
- `Web` fixes the issue where the domain scope of asynchronous notifications does not take effect.
- `Web` fixes the issue of exception when getting gems.
- `Web` fixes the issue of abnormal judgment of the expiration time of iOS certificates.
- `Web` fixes the issue where disk space cannot be obtained when developing with a virtual machine mounted.
- `Web` fixes some known errors in demo mode.

## 4.2.2 (2021-10-15)

Full [commit changes][4.2.2].

#### Fixed

- `API` fixes the issue where incorrect error messages were not output due to parameter mismatches caused by batch replacements. [#615](https://github.com/tryzealot/zealot/issues/615) Thanks to [gin7758258](https://github.com/gin7758258)
- `Web` fixes the issue of abnormal parsing of some apk Android files. [#587](https://github.com/tryzealot/zealot/pull/529)

## 4.2.1 (2021-09-14)

Full [commit changes][4.2.1].

#### Changed

- `Web` application icons are no longer cropped to the preset size, and image processing dependencies have been removed, reducing the Docker image size by nearly 200MB.
- `Docker` the reverse proxy service Caddy no longer outputs logs to STDOUT but directly to files.

#### Fixed

- `Web` fixes the issue where icons are not displayed correctly after uploading an application.
- `Web` is compatible with different dSYM zip extraction logics when uploading.
- `Web` fixes the issue where the application icon is not displayed when installing iOS applications.
- `Web` fixes a security vulnerability by disabling the editing of read-only system settings.
- `Web` fixes the issue where the downloaded file suffix is not correct on macOS.
- `Web` fixes the issue where the window showing that an installation is not possible does not pop up in some cases.

## 4.2.0 (2021-09-01)

Full [commit changes][4.2.0].

#### Changed

- `Web` changes the default logic for cleaning up old versions to off. To enable, set the environment variable `ZEALOT_KEEP_UPLOADS=false`. [#570](https://github.com/tryzealot/zealot/pull/570)
- `Web` renames File Parsing to Application Unpacking. [#529](https://github.com/tryzealot/zealot/pull/529)
- `Web` removes support for unpacking previously uploaded applications in the application unpacking feature. (now all uploaded applications will automatically trigger additional application unpacking)
- `API` supports fontawesome css values for custom field icons when uploading applications, such as the value `fas fa-flag` for [flag](https://fontawesome.com/v5.15/icons/flag?style=solid).
- `Docker` changes the image to use caddy as a reverse proxy and modifies the volume persistence. Migration is required, see [#540](https://github.com/tryzealot/zealot/pull/540) for details.

#### Added

- `Web` supports uploading, parsing, and downloading macOS applications. [#562](https://github.com/tryzealot/zealot/pull/562)
- `Web` adds quick filtering options for application types and channels for mobile devices on the channel details page. [#510](https://github.com/tryzealot/zealot/issues/510) Thanks to [huacnlee](https://github.com/huacnlee)
- `Web` allows the administrator panel to configure application type templates and default registration user permissions. [#562](https://github.com/tryzealot/zealot/pull/562) [#568](https://github.com/tryzealot/zealot/pull/568)
- `Web` partially encrypts environment variables that involve privacy.
- `Web` adds graphical displays for memory and disk usage.
- `Docker` adds support for synchronizing updates with [Github Container Registry](https://github.com/tryzealot/zealot/pkgs/container/zealot) images.
- `Docker` adds support for configuring the postgres port number with environment variables.

#### Fixed

- `Web` fixes the issue where the iOS installation button cannot be displayed on iPad and M1 chip macOS. [#519](https://github.com/tryzealot/zealot/issues/519) Thanks to [ohdarling](https://github.com/ohdarling)
- `Web` fixes the issue where using third-party login while registering but not verifying email fails. [#517](https://github.com/tryzealot/zealot/issues/517) Thanks to [huacnlee](https://github.com/huacnlee)
- `Web` fixes the issue where uploading an application through the website does not trigger application unpacking.
- `Web` fixes the issue where the left navigation style is misaligned when tubrolink is enabled.
- `Web` displays the unpacking link when uploading Android applications.
- `Web` optimizes the display prompt for empty unpacking file lists.
- `Web` fixes the issue where LDAP parameters are obtained incorrectly. [#541](https://github.com/tryzealot/zealot/pull/542) Thanks to [Martwu](https://github.com/Martwu)
- `Web` changes the error message for capturing application upload errors to a readable format.
- `Web` fixes the issue where the application type creation error judgment is abnormal.
- `Web` adds an exception judgment for clicking the details page when all channels of an application are deleted.
- `Web` fixes the issue where uploading applications causes variable release errors in the parsing process.
- `Web` fixes the issue where an error occurs when verifying password protection for an application. [#564](https://github.com/tryzealot/zealot/issues/564) Thanks to [EasierLu](https://github.com/EasierLu)
- `Web` fixes the issue where editing user information in the administrator panel causes an error. [#564](https://github.com/tryzealot/zealot/issues/564) Thanks to [EasierLu](https://github.com/EasierLu)
- `Web` fixes the issue where the "Install" button on the application details page is displayed abnormally on incorrect systems and devices (normally only iOS applications are displayed on iOS and macOS devices).
- `Web` optimizes the unpacking of applications for developer certificates that fail to parse due to special character sets (currently known to be Chinese encoding) and UI layout adjustments.
- `Web` fixes the issue where the current user cannot be edited.
- `Web` corrects the duplicate title of debug files.
- `Docker` fixes the logrotate error during image initialization.
- `Docker` fixes the issue where Caddy deployment needs to be confirmed. [#551](https://github.com/tryzealot/zealot/issues/551) Thanks to [ReverseScale](https://github.com/ReverseScale)

## 4.1.0 (2021-07-17)

Full [commit changes][4.1.0].

#### Changed

- `Web` changes the display logic for obtaining device UDID due to the similarity of iPad's User-Agent and Desktop.
- `Docker` sets Gihub Container Registry (gcr.io) as the default Docker image source.

#### Added

- `Web` supports one-click login authentication for third-party platforms such as Feishu and Gitlab.
- `Web` optimizes the logic for accessing the version details page of an application that cannot be found and allows manual redirection to the latest version.
- `Web` adds the ability to view some system configuration items and modify some parameters without requiring a restart.
- `Web` adds a page statistics report to the management panel.

#### Fixed

- `Web` fixes the issue where the network hook cannot obtain the value of the title variable.
- `Web` fixes the abnormal error during application parsing process.
- `Web` fixes the abnormal error that occurs during application creation.
- `Web` fixes the issue where system configuration cannot be edited due to being saved as empty.
- `Job` fixes the issue where the logic for removing old versions causes the deletion logic and document logic to be reversed.

## 4.0.0 (2020-12-31)

Full [commit changes][4.0.0].

#### Fixed

- `Web` corrects the display error caused by abnormal judgment of the expiration time of the iOS certificate during file parsing.
- `Web` ignores the default development version number check for new versions.

## 4.0.0.rc2 (2020-12-25)

Full [commit changes][4.0.0.rc2].

#### Added

- `Web` newly parsed files will be saved to the list, and a file parsing for uploaded applications will also be synchronized. (asynchronous task) [#346](https://github.com/tryzealot/zealot/pull/346)
- `Web` adds file parsing data statistics to the control panel.
- `Web` adds data statistics for network hooks, background tasks, and disk usage for administrators in the control panel.
- `Web` adds a quick delete function for authorized personnel to the prompt for missing files in the version details.

#### Changed

- `API` The debug file version check interface has been renamed, and new check methods based on file fingerprints and dSYM UUID have been added. [#349](https://github.com/tryzealot/zealot/pull/346)

#### Fixed

- `Web` fixes the error when disabling LDAP login authentication. (caused by incorrect IP whitelist settings)
- `Web` corrects the wording of the prompt when opening the version details in WeChat for Android.

## 4.0.0.rc1 (2020-10-29)

Full [commit changes][4.0.0.rc1].

#### Changed

- `Docker` **major change** merges rails and worker into the same image for deployment. zealot-docker library needs to be updated accordingly [#235](https://github.com/tryzealot/zealot/pull/235)
- `Docker` upgrades Ruby to version 2.7 for deployment.
- `Web` upgrades font-awesome from version 4.7.0 to 5.13.0, which may cause missing icons to display improperly.
- `Web` adjusts the wording of invitation emails.
- `Web` unifies the download path for applications and debugging files to `/download` path.
- `Web` requires login permission for online application parsing.
- `Web` optimizes the logic for automatically redirecting to the latest version when accessing deleted or non-existent version details.
- `Web` adjusts the installation and download logic of applications (mainly due to the inability to distinguish between iPadOS UserAgent and Desktop).

#### Added

- `Web` displays a prompt when downloading files that do not exist.
- `Web` supports parsing .mobileprovision format files and enabling the parsing of .ipa files online.
- `Web` allows some system settings to be modified online using the administrator panel. [#245](https://github.com/tryzealot/zealot/pull/245)
- `Web` adds guest mode. [#243](https://github.com/tryzealot/zealot/pull/243)
- `Web` supports displaying the names of iOS AdHoc version test devices. [#211](https://github.com/tryzealot/zealot/pull/211)
- `Web` supports parsing the content of uploaded version installation packages. [#210](https://github.com/tryzealot/zealot/pull/210)
- `Web` supports obtaining the UDID of iOS devices. [#203](https://github.com/tryzealot/zealot/pull/203)
- `Web` supports a demo mode with limited functionality and periodic data initialization. [#198](https://github.com/tryzealot/zealot/pull/198)
- `Web` displays the original name of the application in the version details after uploading the App.
- `Web` allows filtering of the application list by version, Git branch, and packaging type.
- `Web` displays the Git commit link associated with the latest upload in the version details. (if the git URL is set in the channel settings)
- `Web` integrates LDAP login into the existing login interface and no longer uses the crude interface provided by third-party dependencies.
- `Job` supports managing the generation and recovery of data backup using rails commands. (database and uploaded file data) [#207](https://github.com/tryzealot/zealot/pull/207)
- `API` adds an interface to check if the debug file exists `/api/debug_files/version_exist`.

#### Fixed

- `Web` fixes the error when parsing changelog during App upload.
- `Web` fixes the issue where the QR code in the version details will exceed the parent view in medium resolution.
- `Web` fixes the issue where some values of the application channel are empty and the default value is not displayed.
- `Web` optimizes the content display when parsing iOS packages online. (and solves the problem of always displaying fake data)
- `Web` fixes the issue where the information of the submitter is not displayed for changelogs generated using [fastlane-plugin-ci_changelog](https://github.com/icyleaf/fastlane-plugin-ci_changelog) in the version details.
- `Web` fixes and optimizes the logic for checking new versions.
- `Web` fixes the issue where the pop-up window for confirming the deletion of debug files displays an empty message.
- `Web` optimizes the display of the device list in the version details on some mobile phones.
- `Web` fixes the error when parsing applications without submitting parameters.
- `Web` optimizes the display of the version list on mobile phones.
- `Web` only displays the bottom pagination for the latest upload dynamics of channel versions, and the top displays the total number of versions.
- `Web` fixes the issue where the administrator editing user prompt for a non-empty password.
- `Web`/`API` fixes the issue where the latest version is used when the requested version for online download and installation does not exist.
- `Web` fixes the issue where the login interface displays the sidebar menu in guest mode.
- `Web` fixes the issue where the same debugging file of the same application and platform is always overwritten when uploaded.
- `Web` optimizes the display of boolean and dictionary types on the system settings page.
- `Job` fixes the issue where old versions were accidentally deleted due to a version judgment error during scheduled cleaning.
- `Docker` fixes the issue where the internal static resources are not updated due to volume storage of the public folder.
- `Docker` fixes the issue where the container version is inconsistent with the external version.

## 4.0.0.beta4 (2020-05-07)

Full [commit changes][4.0.0.beta4].

#### Added

- `Docker` supports deployment on Heroku.
- `Web` allows guests to view App details, lists, and upload App details.
- `API` supports custom fields when uploading an App. [#178](https://github.com/tryzealot/zealot/issues/178)
- `Web`/`API` automatically removes the `origin/` prefix when passing the `branch` value during App upload.
- `Web` adds project introduction to user authentication interfaces such as login, registration, password retrieval, and password resetting.

#### Fixed

- `Web` corrects user password description text.
- `Web` fixes the URL field error in the WebHook.
- `Web`/`API` fixes the error when uploading iOS dSYM files.
- `API` fixes the abnormal has_password parameter in the App interface.
- `API` fixes the source of uploaded App records always showing as Web.
- `API` fixes and supports uploading changelog in JSON format as a string.
- `Web` fixes the issue where CPU and memory information cannot be retrieved from system information.
- `Web` fixes the occasional error when parsing Android applications online.
- `Web` fixes the error when scanning QR code with WeChat.

#### Changed

- `API` adds validation for bundle_id dimension to the latest version interface. (apps/latest)
- `Web` allows guests to access application version details and download operations.
- `Web` shifts the device list on the right-hand side of iOS AdHoc application version details to the left and collapses it by default.
- `Web` removes the GraphQL console functionality from the development environment and recommends using [graphql-playground](https://github.com/prisma-labs/graphql-playground).
- `Web` removes the footbar at the bottom of the page, and the version information can be viewed in the system information.

## 4.0.0.beta3 (2020-01-16)

Full [commit changes][4.0.0.beta3].

#### Added

- `Web` prompts and displays a confirmation email link for users added by administrators if their email is not activated.
- `Web` enables the default Sentry anonymous reporting mechanism (can be turned off).

#### Fixed

- `API` fixes the issue where uploading an application always creates a new channel.
- `Web`/`API` fixes the issue where the icon of uploaded Android applications cannot be displayed.

#### Changed

- `Docker` moves the initialization data out of the image and into [zealot-docker](https://github.com/tryzealot/zealot-docker) image. [#120](https://github.com/tryzealot/zealot/pull/120)
- `Docker` reduces the size of the image from 1.18G to 308M. [#114](https://github.com/tryzealot/zealot/issues/114)
- `Job` uses asynchronous tasks instead of traditional cron jobs to implement scheduled cleaning of old version history package files. (can be turned off)
- `Job` groups asynchronous tasks and sets priority.
- `API` displays all error messages in Chinese because database write operations return specific error messages.
- `Web` standardizes code using Rubocop Lint rules.

## 4.0.0.beta2 (2020-01-10)

Full [commit changes][4.0.0.beta2].

#### Added

- `Web` Added the ability to upload a complete version list to a specific application channel, and support deleting operations.

#### Fixed

- `Web` provides an error prompt instead of an error message when uploading an application that is not a valid ipa or apk.
- `API` fixes the issue where the latest version list of an application cannot be returned due to the non-existence of the queried version number in the database.
- `API` only requires token verification for interfaces that perform write operations (previously most interfaces required it).

## 4.0.0.beta1

🌈 The first public beta version has been released!

## Previous Version

For many years, it was developed and operated internally within the company and was not open source.
It used to undertake many functions, but now it has been separated to focus on providing
application hosting and distribution services

[Unreleased]: https://github.com/tryzealot/zealot/compare/5.3.7...HEAD
[5.3.7]: https://github.com/tryzealot/zealot/compare/5.3.6...5.3.7
[5.3.6]: https://github.com/tryzealot/zealot/compare/5.3.5...5.3.6
[5.3.5]: https://github.com/tryzealot/zealot/compare/5.3.4...5.3.5
[5.3.4]: https://github.com/tryzealot/zealot/compare/5.3.3...5.3.4
[5.3.3]: https://github.com/tryzealot/zealot/compare/5.3.2...5.3.3
[5.3.2]: https://github.com/tryzealot/zealot/compare/5.3.1...5.3.2
[5.3.1]: https://github.com/tryzealot/zealot/compare/5.3.0...5.3.1
[5.3.0]: https://github.com/tryzealot/zealot/compare/5.2.3...5.3.0
[5.2.3]: https://github.com/tryzealot/zealot/compare/5.2.2...5.2.3
[5.2.2]: https://github.com/tryzealot/zealot/compare/5.2.1...5.2.2
[5.2.1]: https://github.com/tryzealot/zealot/compare/5.2.0...5.2.1
[5.2.0]: https://github.com/tryzealot/zealot/compare/5.1.0...5.2.0
[5.1.0]: https://github.com/tryzealot/zealot/compare/5.0.0...5.1.0
[5.0.0]: https://github.com/tryzealot/zealot/compare/4.7.1...5.0.0
[4.7.0]: https://github.com/tryzealot/zealot/compare/4.6.0...4.7.0
[4.6.0]: https://github.com/tryzealot/zealot/compare/4.5.3...4.6.0
[4.5.3]: https://github.com/tryzealot/zealot/compare/4.5.2...4.5.3
[4.5.2]: https://github.com/tryzealot/zealot/compare/4.5.1...4.5.2
[4.5.1]: https://github.com/tryzealot/zealot/compare/4.5.0...4.5.1
[4.5.0]: https://github.com/tryzealot/zealot/compare/4.4.1...4.5.0
[4.4.1]: https://github.com/tryzealot/zealot/compare/4.4.0...4.4.1
[4.4.0]: https://github.com/tryzealot/zealot/compare/4.3.1...4.4.0
[4.3.1]: https://github.com/tryzealot/zealot/compare/4.3.0...4.3.1
[4.3.0]: https://github.com/tryzealot/zealot/compare/4.2.2...4.3.0
[4.2.2]: https://github.com/tryzealot/zealot/compare/4.2.1...4.2.2
[4.2.1]: https://github.com/tryzealot/zealot/compare/4.2.0...4.2.1
[4.2.0]: https://github.com/tryzealot/zealot/compare/4.1.0...4.2.0
[4.1.0]: https://github.com/tryzealot/zealot/compare/4.0.0...4.1.0
[4.0.0]: https://github.com/tryzealot/zealot/compare/4.0.0.rc2...4.0.0
[4.0.0.rc2]: https://github.com/tryzealot/zealot/compare/4.0.0.rc1...4.0.0.rc2
[4.0.0.rc1]: https://github.com/tryzealot/zealot/compare/4.0.0.beta4...4.0.0.rc1
[4.0.0.beta4]: https://github.com/tryzealot/zealot/compare/4.0.0.beta3...4.0.0.beta4
[4.0.0.beta3]: https://github.com/tryzealot/zealot/compare/4.0.0.beta2...4.0.0.beta3
[4.0.0.beta2]: https://github.com/tryzealot/zealot/compare/4.0.0.beta1...4.0.0.beta2

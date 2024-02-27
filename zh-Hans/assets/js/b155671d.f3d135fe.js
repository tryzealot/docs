"use strict";(self.webpackChunkzealot_new_docs=self.webpackChunkzealot_new_docs||[]).push([[5924],{2405:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>d});var o=t(5893),a=t(1151);const i={sidebar_label:"zealot_debug_file"},l="Fastlane action: zealot_debug_file",r={id:"developer-guide/fastlane/zealot_debug_file",title:"Fastlane action: zealot_debug_file",description:"\u4e0a\u4f20 iOS \u7684 dSYM \u6216 Android \u7684 Proguard \u8c03\u8bd5\u6587\u4ef6\u5230 Zealot",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/developer-guide/fastlane/zealot_debug_file.md",sourceDirName:"developer-guide/fastlane",slug:"/developer-guide/fastlane/zealot_debug_file",permalink:"/zh-Hans/docs/next/developer-guide/fastlane/zealot_debug_file",draft:!1,unlisted:!1,editUrl:"https://github.com/tryzealot/docs/tree/main/docs/developer-guide/fastlane/zealot_debug_file.md",tags:[],version:"current",frontMatter:{sidebar_label:"zealot_debug_file"},sidebar:"developerGuide",previous:{title:"zealot_version_check",permalink:"/zh-Hans/docs/next/developer-guide/fastlane/zealot_version_check"},next:{title:"zealot_sync_devices",permalink:"/zh-Hans/docs/next/developer-guide/fastlane/zealot_sync_devices"}},s={},d=[{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2}];function _(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"fastlane-action-zealot_debug_file",children:"Fastlane action: zealot_debug_file"}),"\n",(0,o.jsx)(n.p,{children:"\u4e0a\u4f20 iOS \u7684 dSYM \u6216 Android \u7684 Proguard \u8c03\u8bd5\u6587\u4ef6\u5230 Zealot"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ruby",children:"  # \u4e0a\u4f20 iOS dSYM \u8c03\u8bd5\u6587\u4ef6\n  zealot_debug_file(\n    endpoint: 'https://tryzealot.ews.im',\n    token: '...',\n    channel_key: '...',\n    platform: :ios,\n    xcode_scheme: 'AppName',\n    verify_ssl: false\n  )\n\n  # \u4e0a\u4f20 Android Proguard \u8c03\u8bd5\u6587\u4ef6\n  zealot_debug_file(\n    endpoint: 'https://tryzealot.ews.im',\n    token: '...',\n    channel_key: '...',\n    platform: :android,\n    android_build_type: 'release',\n    android_flavor: 'store',\n    release_version: '1.1.0',\n    build_version: '1',\n    overwrite: true\n  )\n\n  # \u4e0a\u4f20\u6307\u5b9a zip file \u8c03\u8bd5\u6587\u4ef6\n  zealot_debug_file(\n    endpoint: 'https://tryzealot.ews.im',\n    token: '...',\n    channel_key: '...',\n    zip_file: 'path/to/your/zip_file',\n    release_version: '1.1.0',\n    build_version: '1',\n    verify_ssl: false\n  )\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u53c2\u6570",children:"\u53c2\u6570"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"+--------------------+-----------------------------------+---------------------------+---------+\n|                                  zealot_debug_file Options                                   |\n+--------------------+-----------------------------------+---------------------------+---------+\n| Key                | Description                       | Env Var                   | Default |\n+--------------------+-----------------------------------+---------------------------+---------+\n| endpoint           | The endpoint of zealot            | ZEALOT_ENDPOINT           |         |\n| token              | The token of user                 | ZEALOT_TOKEN              |         |\n| channel_key        | Any channel key of app            | ZEALOT_CHANNEL_KEY        |         |\n| zip_file           | Using given the path of zip file  | DF_DSYM_ZIP_FILE          |         |\n|                    | to direct upload                  |                           |         |\n| platform           | The name of platfrom, avaiable    | ZEALOT_PLATFORM           |         |\n|                    | value are                         |                           |         |\n|                    | ios,mac,macos,osx,android         |                           |         |\n| path               | The path of debug file            | ZEALOT_PATH               |         |\n|                    | (iOS/macOS is archive path for    |                           |         |\n|                    | Xcode, Android is path for app    |                           |         |\n|                    | project)                          |                           |         |\n| xcode_scheme       | The scheme name of app            | ZEALOT_XCODE_SCHEME       |         |\n| android_build_type | The build type of app             | ZEALOT_ANDROID_BUILD_TYPE | release |\n| android_flavor     | The product flavor of app         | ZEALOT_ANDROID_FLAVOR     |         |\n| extra_files        | A set file names                  | ZEALOT_EXTRA_FILES        | []      |\n| output_path        | The output path of compressed     | DF_DSYM_OUTPUT_PATH       | .       |\n|                    | dSYM file                         |                           |         |\n| release_version    | The release version of app        | ZEALOT_RELEASE_VERSION    |         |\n|                    | (Android needs)                   |                           |         |\n| build_version      | The build version of app          | ZEALOT_BUILD_VERSION      |         |\n|                    | (Android needs)                   |                           |         |\n| overwrite          | Overwrite output compressed file  | DF_DSYM_OVERWRITE         | false   |\n|                    | if it existed                     |                           |         |\n| timeout            | Request timeout in seconds        | ZEALOT_TIMEOUT            |         |\n| verify_ssl         | Should verify SSL of zealot       | ZEALOT_VERIFY_SSL         | true    |\n|                    | service                           |                           |         |\n| fail_on_error      | Should an error uploading app     | ZEALOT_FAIL_ON_ERROR      | false   |\n|                    | cause a failure? (true/false)     |                           |         |\n+--------------------+-----------------------------------+---------------------------+---------+\n* = default value is dependent on the user's system\n\n+-----------------------+-----------------------------------------+\n|               zealot_debug_file Output Variables                |\n+-----------------------+-----------------------------------------+\n| Key                   | Description                             |\n+-----------------------+-----------------------------------------+\n| ZEAALOT_ERROR_MESSAGE | The error message during upload process |\n+-----------------------+-----------------------------------------+\n"})})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(_,{...e})}):_(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>l});var o=t(7294);const a={},i=o.createContext(a);function l(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkzealot_new_docs=self.webpackChunkzealot_new_docs||[]).push([[9555],{1566:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var a=o(5893),t=o(1151);const l={sidebar_label:"zealot"},s="Fastlane action: zealot",r={id:"developer-guide/fastlane/zealot",title:"Fastlane action: zealot",description:"\u4e0a\u4f20 iOS \u6216 Android \u5e94\u7528\uff0c\u4f20\u5165\u5982\u4e0b\u53c2\u6570\u63d2\u4ef6\u4f1a\u5728\u6210\u529f\u6253\u5305\u540e\u81ea\u52a8\u83b7\u53d6 app \u7684\u8def\u5f84\u5e76\u8fdb\u884c\u4e0a\u4f20\uff1a",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-5.0.0/developer-guide/fastlane/zealot.md",sourceDirName:"developer-guide/fastlane",slug:"/developer-guide/fastlane/zealot",permalink:"/zh-Hans/docs/5.0.0/developer-guide/fastlane/zealot",draft:!1,unlisted:!1,editUrl:"https://github.com/tryzealot/docs/tree/main/versioned_docs/version-5.0.0/developer-guide/fastlane/zealot.md",tags:[],version:"5.0.0",frontMatter:{sidebar_label:"zealot"},sidebar:"developerGuide",previous:{title:"Fastlane \u63d2\u4ef6",permalink:"/zh-Hans/docs/5.0.0/developer-guide/fastlane"},next:{title:"zealot_version_check",permalink:"/zh-Hans/docs/5.0.0/developer-guide/fastlane/zealot_version_check"}},i={},d=[{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u73af\u5883\u53d8\u91cf",id:"\u73af\u5883\u53d8\u91cf",level:2}];function p(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"fastlane-action-zealot",children:"Fastlane action: zealot"}),"\n",(0,a.jsx)(n.p,{children:"\u4e0a\u4f20 iOS \u6216 Android \u5e94\u7528\uff0c\u4f20\u5165\u5982\u4e0b\u53c2\u6570\u63d2\u4ef6\u4f1a\u5728\u6210\u529f\u6253\u5305\u540e\u81ea\u52a8\u83b7\u53d6 app \u7684\u8def\u5f84\u5e76\u8fdb\u884c\u4e0a\u4f20\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ruby",children:"zealot(\n  endpoint: 'https://zealot.com',\n  token: '...',\n  channel_key: '...',\n)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u53c2\u6570",children:"\u53c2\u6570"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"+-----------------+---------------------------------+------------------------+----------+\n|                                    zealot Options                                     |\n+-----------------+---------------------------------+------------------------+----------+\n| Key             | Description                     | Env Var                | Default  |\n+-----------------+---------------------------------+------------------------+----------+\n| endpoint        | The endpoint of zealot          | ZEALOT_ENDPOINT        |          |\n| token           | The token of user               | ZEALOT_TOKEN           |          |\n| channel_key     | The key of app's channel        | ZEALOT_CHANNEL_KEY     |          |\n| file            | The path of app file. Optional  | ZEALOT_FILE            |          |\n|                 | if you use the `gym`, `ipa`,    |                        |          |\n|                 | `xcodebuild` or `gradle`        |                        |          |\n|                 | action.                         |                        |          |\n| name            | The name of app to display on   | ZEALOT_NAME            |          |\n|                 | zealot                          |                        |          |\n| changelog       | The changelog of app            | ZEALOT_CHANGELOG       |          |\n| slug            | The slug of app                 | ZEALOT_SLUG            |          |\n| release_type    | The release type of app         | ZEALOT_RELEASE_TYPE    |          |\n| branch          | The name of git branch          | ZEALOT_BRANCH          |          |\n| git_commit      | The hash of git commit          | ZEALOT_GIT_COMMIT      |          |\n| custom_fields   | The key-value hash of custom    | ZEALOT_CUSTOM_FIELDS   |          |\n|                 | fields                          |                        |          |\n| password        | The password of app to download | ZEALOT_PASSWORD        |          |\n| source          | The name of upload source       | ZEALOT_SOURCE          | fastlane |\n| ci_url          | The name of upload source       | ZEALOT_CI_CURL         |          |\n| timeout         | Request timeout in seconds      | ZEALOT_TIMEOUT         |          |\n| hide_user_token | replase user token to *** to    | ZEALOT_HIDE_USER_TOKEN | true     |\n|                 | keep secret                     |                        |          |\n| verify_ssl      | Should verify SSL of zealot     | ZEALOT_VERIFY_SSL      | true     |\n|                 | service                         |                        |          |\n| fail_on_error   | Should an error uploading app   | ZEALOT_FAIL_ON_ERROR   | false    |\n|                 | cause a failure                 |                        |          |\n+-----------------+---------------------------------+------------------------+----------+\n* = default value is dependent on the user's system\n\n+-----------------------+---------------------------------------------+\n|                       zealot Output Variables                       |\n+-----------------------+---------------------------------------------+\n| Key                   | Description                                 |\n+-----------------------+---------------------------------------------+\n| ZEALOT_APP_ID         | The id of app                               |\n| ZEALOT_RELEASE_ID     | The id of app's release                     |\n| ZEALOT_RELEASE_URL    | The release URL of the newly uploaded build |\n| ZEALOT_INSTALL_URL    | The install URL of the newly uploaded build |\n| ZEALOT_QRCODE_URL     | The QRCode URL of the newly uploaded build  |\n| ZEAALOT_ERROR_MESSAGE | The error message during upload process     |\n+-----------------------+---------------------------------------------+\n"})}),"\n",(0,a.jsx)(n.h2,{id:"\u73af\u5883\u53d8\u91cf",children:"\u73af\u5883\u53d8\u91cf"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"+-----------------------+---------------------------------------------+\n|                       zealot Output Variables                       |\n+-----------------------+---------------------------------------------+\n| Key                   | Description                                 |\n+-----------------------+---------------------------------------------+\n| ZEALOT_APP_ID         | The id of app                               |\n| ZEALOT_RELEASE_ID     | The id of app's release                     |\n| ZEALOT_RELEASE_URL    | The release URL of the newly uploaded build |\n| ZEALOT_INSTALL_URL    | The install URL of the newly uploaded build |\n| ZEALOT_QRCODE_URL     | The QRCode URL of the newly uploaded build  |\n| ZEAALOT_ERROR_MESSAGE | The error message during upload process     |\n+-----------------------+---------------------------------------------+\nAccess the output values using `lane_context[SharedValues::VARIABLE_NAME]`\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>r,a:()=>s});var a=o(7294);const t={},l=a.createContext(t);function s(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);
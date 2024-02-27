"use strict";(self.webpackChunkzealot_new_docs=self.webpackChunkzealot_new_docs||[]).push([[3368],{5018:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>d});var o=a(5893),t=a(1151);const l={sidebar_label:"zealot"},s="Fastlane action: zealot",r={id:"developer-guide/fastlane/zealot",title:"Fastlane action: zealot",description:"Uploading iOS, Android and macOS app, it requires three params:",source:"@site/versioned_docs/version-5.1.0/developer-guide/fastlane/zealot.md",sourceDirName:"developer-guide/fastlane",slug:"/developer-guide/fastlane/zealot",permalink:"/docs/developer-guide/fastlane/zealot",draft:!1,unlisted:!1,editUrl:"https://github.com/tryzealot/docs/tree/main/versioned_docs/version-5.1.0/developer-guide/fastlane/zealot.md",tags:[],version:"5.1.0",frontMatter:{sidebar_label:"zealot"},sidebar:"developerGuide",previous:{title:"Fastlane plugins",permalink:"/docs/developer-guide/fastlane"},next:{title:"zealot_version_check",permalink:"/docs/developer-guide/fastlane/zealot_version_check"}},i={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Output Variables",id:"output-variables",level:2}];function p(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"fastlane-action-zealot",children:"Fastlane action: zealot"}),"\n",(0,o.jsx)(n.p,{children:"Uploading iOS, Android and macOS app, it requires three params:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ruby",children:"zealot(\n  endpoint: 'https://zealot.com',\n  token: '...',\n  channel_key: '...',\n)\n"})}),"\n",(0,o.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"+-----------------+---------------------------------+------------------------+----------+\n|                                    zealot Options                                     |\n+-----------------+---------------------------------+------------------------+----------+\n| Key             | Description                     | Env Var                | Default  |\n+-----------------+---------------------------------+------------------------+----------+\n| endpoint        | The endpoint of zealot          | ZEALOT_ENDPOINT        |          |\n| token           | The token of user               | ZEALOT_TOKEN           |          |\n| channel_key     | The key of app's channel        | ZEALOT_CHANNEL_KEY     |          |\n| file            | The path of app file. Optional  | ZEALOT_FILE            |          |\n|                 | if you use the `gym`, `ipa`,    |                        |          |\n|                 | `xcodebuild` or `gradle`        |                        |          |\n|                 | action.                         |                        |          |\n| name            | The name of app to display on   | ZEALOT_NAME            |          |\n|                 | zealot                          |                        |          |\n| changelog       | The changelog of app            | ZEALOT_CHANGELOG       |          |\n| slug            | The slug of app                 | ZEALOT_SLUG            |          |\n| release_type    | The release type of app         | ZEALOT_RELEASE_TYPE    |          |\n| branch          | The name of git branch          | ZEALOT_BRANCH          |          |\n| git_commit      | The hash of git commit          | ZEALOT_GIT_COMMIT      |          |\n| custom_fields   | The key-value hash of custom    | ZEALOT_CUSTOM_FIELDS   |          |\n|                 | fields                          |                        |          |\n| password        | The password of app to download | ZEALOT_PASSWORD        |          |\n| source          | The name of upload source       | ZEALOT_SOURCE          | fastlane |\n| ci_url          | The name of upload source       | ZEALOT_CI_CURL         |          |\n| timeout         | Request timeout in seconds      | ZEALOT_TIMEOUT         |          |\n| hide_user_token | replase user token to *** to    | ZEALOT_HIDE_USER_TOKEN | true     |\n|                 | keep secret                     |                        |          |\n| verify_ssl      | Should verify SSL of zealot     | ZEALOT_VERIFY_SSL      | true     |\n|                 | service                         |                        |          |\n| fail_on_error   | Should an error uploading app   | ZEALOT_FAIL_ON_ERROR   | false    |\n|                 | cause a failure                 |                        |          |\n+-----------------+---------------------------------+------------------------+----------+\n* = default value is dependent on the user's system\n\n+-----------------------+---------------------------------------------+\n|                       zealot Output Variables                       |\n+-----------------------+---------------------------------------------+\n| Key                   | Description                                 |\n+-----------------------+---------------------------------------------+\n| ZEALOT_APP_ID         | The id of app                               |\n| ZEALOT_RELEASE_ID     | The id of app's release                     |\n| ZEALOT_RELEASE_URL    | The release URL of the newly uploaded build |\n| ZEALOT_INSTALL_URL    | The install URL of the newly uploaded build |\n| ZEALOT_QRCODE_URL     | The QRCode URL of the newly uploaded build  |\n| ZEAALOT_ERROR_MESSAGE | The error message during upload process     |\n+-----------------------+---------------------------------------------+\n"})}),"\n",(0,o.jsx)(n.h2,{id:"output-variables",children:"Output Variables"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"+-----------------------+---------------------------------------------+\n|                       zealot Output Variables                       |\n+-----------------------+---------------------------------------------+\n| Key                   | Description                                 |\n+-----------------------+---------------------------------------------+\n| ZEALOT_APP_ID         | The id of app                               |\n| ZEALOT_RELEASE_ID     | The id of app's release                     |\n| ZEALOT_RELEASE_URL    | The release URL of the newly uploaded build |\n| ZEALOT_INSTALL_URL    | The install URL of the newly uploaded build |\n| ZEALOT_QRCODE_URL     | The QRCode URL of the newly uploaded build  |\n| ZEAALOT_ERROR_MESSAGE | The error message during upload process     |\n+-----------------------+---------------------------------------------+\nAccess the output values using `lane_context[SharedValues::VARIABLE_NAME]`\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>r,a:()=>s});var o=a(7294);const t={},l=o.createContext(t);function s(e){const n=o.useContext(l);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(l.Provider,{value:n},e.children)}}}]);
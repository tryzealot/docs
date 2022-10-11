"use strict";(self.webpackChunkzealot_new_docs=self.webpackChunkzealot_new_docs||[]).push([[131],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(t),f=o,E=d["".concat(s,".").concat(f)]||d[f]||c[f]||r;return t?a.createElement(E,l(l({ref:n},u),{},{components:t})):a.createElement(E,l({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=d;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9468:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=t(7462),o=(t(7294),t(3905));const r={sidebar_label:"zealot"},l="Fastlane action: zealot",i={unversionedId:"developer-guide/fastlane/zealot",id:"developer-guide/fastlane/zealot",title:"Fastlane action: zealot",description:"\u4e0a\u4f20 iOS \u6216 Android \u5e94\u7528\uff0c\u4f20\u5165\u5982\u4e0b\u53c2\u6570\u63d2\u4ef6\u4f1a\u5728\u6210\u529f\u6253\u5305\u540e\u81ea\u52a8\u83b7\u53d6 app \u7684\u8def\u5f84\u5e76\u8fdb\u884c\u4e0a\u4f20\uff1a",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/developer-guide/fastlane/zealot.md",sourceDirName:"developer-guide/fastlane",slug:"/developer-guide/fastlane/zealot",permalink:"/zh-Hans/docs/developer-guide/fastlane/zealot",draft:!1,editUrl:"https://github.com/tryzealot/docs/tree/main/docs/developer-guide/fastlane/zealot.md",tags:[],version:"current",frontMatter:{sidebar_label:"zealot"},sidebar:"developerGuide",previous:{title:"Fastlane \u63d2\u4ef6",permalink:"/zh-Hans/docs/developer-guide/fastlane"},next:{title:"zealot_version_check",permalink:"/zh-Hans/docs/developer-guide/fastlane/zealot_version_check"}},s={},p=[{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u73af\u5883\u53d8\u91cf",id:"\u73af\u5883\u53d8\u91cf",level:2}],u={toc:p};function c(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"fastlane-action-zealot"},"Fastlane action: zealot"),(0,o.kt)("p",null,"\u4e0a\u4f20 iOS \u6216 Android \u5e94\u7528\uff0c\u4f20\u5165\u5982\u4e0b\u53c2\u6570\u63d2\u4ef6\u4f1a\u5728\u6210\u529f\u6253\u5305\u540e\u81ea\u52a8\u83b7\u53d6 app \u7684\u8def\u5f84\u5e76\u8fdb\u884c\u4e0a\u4f20\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"zealot(\n  endpoint: 'https://zealot.com',\n  token: '...',\n  channel_key: '...',\n)\n")),(0,o.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+-----------------+---------------------------------+------------------------+----------+\n|                                    zealot Options                                     |\n+-----------------+---------------------------------+------------------------+----------+\n| Key             | Description                     | Env Var                | Default  |\n+-----------------+---------------------------------+------------------------+----------+\n| endpoint        | The endpoint of zealot          | ZEALOT_ENDPOINT        |          |\n| token           | The token of user               | ZEALOT_TOKEN           |          |\n| channel_key     | The key of app's channel        | ZEALOT_CHANNEL_KEY     |          |\n| file            | The path of app file. Optional  | ZEALOT_FILE            |          |\n|                 | if you use the `gym`, `ipa`,    |                        |          |\n|                 | `xcodebuild` or `gradle`        |                        |          |\n|                 | action.                         |                        |          |\n| name            | The name of app to display on   | ZEALOT_NAME            |          |\n|                 | zealot                          |                        |          |\n| changelog       | The changelog of app            | ZEALOT_CHANGELOG       |          |\n| slug            | The slug of app                 | ZEALOT_SLUG            |          |\n| release_type    | The release type of app         | ZEALOT_RELEASE_TYPE    |          |\n| branch          | The name of git branch          | ZEALOT_BRANCH          |          |\n| git_commit      | The hash of git commit          | ZEALOT_GIT_COMMIT      |          |\n| custom_fields   | The key-value hash of custom    | ZEALOT_CUSTOM_FIELDS   |          |\n|                 | fields                          |                        |          |\n| password        | The password of app to download | ZEALOT_PASSWORD        |          |\n| source          | The name of upload source       | ZEALOT_SOURCE          | fastlane |\n| ci_url          | The name of upload source       | ZEALOT_CI_CURL         |          |\n| timeout         | Request timeout in seconds      | ZEALOT_TIMEOUT         |          |\n| hide_user_token | replase user token to *** to    | ZEALOT_HIDE_USER_TOKEN | true     |\n|                 | keep secret                     |                        |          |\n| verify_ssl      | Should verify SSL of zealot     | ZEALOT_VERIFY_SSL      | true     |\n|                 | service                         |                        |          |\n| fail_on_error   | Should an error uploading app   | ZEALOT_FAIL_ON_ERROR   | false    |\n|                 | cause a failure                 |                        |          |\n+-----------------+---------------------------------+------------------------+----------+\n* = default value is dependent on the user's system\n\n+-----------------------+---------------------------------------------+\n|                       zealot Output Variables                       |\n+-----------------------+---------------------------------------------+\n| Key                   | Description                                 |\n+-----------------------+---------------------------------------------+\n| ZEALOT_APP_ID         | The id of app                               |\n| ZEALOT_RELEASE_ID     | The id of app's release                     |\n| ZEALOT_RELEASE_URL    | The release URL of the newly uploaded build |\n| ZEALOT_INSTALL_URL    | The install URL of the newly uploaded build |\n| ZEALOT_QRCODE_URL     | The QRCode URL of the newly uploaded build  |\n| ZEAALOT_ERROR_MESSAGE | The error message during upload process     |\n+-----------------------+---------------------------------------------+\n")),(0,o.kt)("h2",{id:"\u73af\u5883\u53d8\u91cf"},"\u73af\u5883\u53d8\u91cf"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+-----------------------+---------------------------------------------+\n|                       zealot Output Variables                       |\n+-----------------------+---------------------------------------------+\n| Key                   | Description                                 |\n+-----------------------+---------------------------------------------+\n| ZEALOT_APP_ID         | The id of app                               |\n| ZEALOT_RELEASE_ID     | The id of app's release                     |\n| ZEALOT_RELEASE_URL    | The release URL of the newly uploaded build |\n| ZEALOT_INSTALL_URL    | The install URL of the newly uploaded build |\n| ZEALOT_QRCODE_URL     | The QRCode URL of the newly uploaded build  |\n| ZEAALOT_ERROR_MESSAGE | The error message during upload process     |\n+-----------------------+---------------------------------------------+\nAccess the output values using `lane_context[SharedValues::VARIABLE_NAME]`\n")))}c.isMDXComponent=!0}}]);
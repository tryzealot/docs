"use strict";(self.webpackChunkzealot_new_docs=self.webpackChunkzealot_new_docs||[]).push([[7070],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(n),f=r,E=c["".concat(p,".").concat(f)]||c[f]||d[f]||o;return n?a.createElement(E,l(l({ref:t},u),{},{components:n})):a.createElement(E,l({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9841:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_label:"zealot"},l="Fastlane action: zealot",i={unversionedId:"developer-guide/fastlane/zealot",id:"developer-guide/fastlane/zealot",title:"Fastlane action: zealot",description:"Uploading iOS, Android and macOS app, it requires three params:",source:"@site/docs/developer-guide/fastlane/zealot.md",sourceDirName:"developer-guide/fastlane",slug:"/developer-guide/fastlane/zealot",permalink:"/docs/developer-guide/fastlane/zealot",draft:!1,editUrl:"https://github.com/tryzealot/docs/tree/main/docs/developer-guide/fastlane/zealot.md",tags:[],version:"current",frontMatter:{sidebar_label:"zealot"},sidebar:"developerGuide",previous:{title:"Fastlane plugins",permalink:"/docs/developer-guide/fastlane"},next:{title:"zealot_version_check",permalink:"/docs/developer-guide/fastlane/zealot_version_check"}},p={},s=[{value:"Parameters",id:"parameters",level:2},{value:"Output Variables",id:"output-variables",level:2}],u={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"fastlane-action-zealot"},"Fastlane action: zealot"),(0,r.kt)("p",null,"Uploading iOS, Android and macOS app, it requires three params:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"zealot(\n  endpoint: 'https://zealot.com',\n  token: '...',\n  channel_key: '...',\n)\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"+-----------------+---------------------------------+------------------------+----------+\n|                                    zealot Options                                     |\n+-----------------+---------------------------------+------------------------+----------+\n| Key             | Description                     | Env Var                | Default  |\n+-----------------+---------------------------------+------------------------+----------+\n| endpoint        | The endpoint of zealot          | ZEALOT_ENDPOINT        |          |\n| token           | The token of user               | ZEALOT_TOKEN           |          |\n| channel_key     | The key of app's channel        | ZEALOT_CHANNEL_KEY     |          |\n| file            | The path of app file. Optional  | ZEALOT_FILE            |          |\n|                 | if you use the `gym`, `ipa`,    |                        |          |\n|                 | `xcodebuild` or `gradle`        |                        |          |\n|                 | action.                         |                        |          |\n| name            | The name of app to display on   | ZEALOT_NAME            |          |\n|                 | zealot                          |                        |          |\n| changelog       | The changelog of app            | ZEALOT_CHANGELOG       |          |\n| slug            | The slug of app                 | ZEALOT_SLUG            |          |\n| release_type    | The release type of app         | ZEALOT_RELEASE_TYPE    |          |\n| branch          | The name of git branch          | ZEALOT_BRANCH          |          |\n| git_commit      | The hash of git commit          | ZEALOT_GIT_COMMIT      |          |\n| custom_fields   | The key-value hash of custom    | ZEALOT_CUSTOM_FIELDS   |          |\n|                 | fields                          |                        |          |\n| password        | The password of app to download | ZEALOT_PASSWORD        |          |\n| source          | The name of upload source       | ZEALOT_SOURCE          | fastlane |\n| ci_url          | The name of upload source       | ZEALOT_CI_CURL         |          |\n| timeout         | Request timeout in seconds      | ZEALOT_TIMEOUT         |          |\n| hide_user_token | replase user token to *** to    | ZEALOT_HIDE_USER_TOKEN | true     |\n|                 | keep secret                     |                        |          |\n| verify_ssl      | Should verify SSL of zealot     | ZEALOT_VERIFY_SSL      | true     |\n|                 | service                         |                        |          |\n| fail_on_error   | Should an error uploading app   | ZEALOT_FAIL_ON_ERROR   | false    |\n|                 | cause a failure                 |                        |          |\n+-----------------+---------------------------------+------------------------+----------+\n* = default value is dependent on the user's system\n\n+-----------------------+---------------------------------------------+\n|                       zealot Output Variables                       |\n+-----------------------+---------------------------------------------+\n| Key                   | Description                                 |\n+-----------------------+---------------------------------------------+\n| ZEALOT_APP_ID         | The id of app                               |\n| ZEALOT_RELEASE_ID     | The id of app's release                     |\n| ZEALOT_RELEASE_URL    | The release URL of the newly uploaded build |\n| ZEALOT_INSTALL_URL    | The install URL of the newly uploaded build |\n| ZEALOT_QRCODE_URL     | The QRCode URL of the newly uploaded build  |\n| ZEAALOT_ERROR_MESSAGE | The error message during upload process     |\n+-----------------------+---------------------------------------------+\n")),(0,r.kt)("h2",{id:"output-variables"},"Output Variables"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"+-----------------------+---------------------------------------------+\n|                       zealot Output Variables                       |\n+-----------------------+---------------------------------------------+\n| Key                   | Description                                 |\n+-----------------------+---------------------------------------------+\n| ZEALOT_APP_ID         | The id of app                               |\n| ZEALOT_RELEASE_ID     | The id of app's release                     |\n| ZEALOT_RELEASE_URL    | The release URL of the newly uploaded build |\n| ZEALOT_INSTALL_URL    | The install URL of the newly uploaded build |\n| ZEALOT_QRCODE_URL     | The QRCode URL of the newly uploaded build  |\n| ZEAALOT_ERROR_MESSAGE | The error message during upload process     |\n+-----------------------+---------------------------------------------+\nAccess the output values using `lane_context[SharedValues::VARIABLE_NAME]`\n")))}d.isMDXComponent=!0}}]);
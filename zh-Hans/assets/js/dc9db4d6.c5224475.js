"use strict";(self.webpackChunkzealot_new_docs=self.webpackChunkzealot_new_docs||[]).push([[8794],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>_});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,_=u["".concat(s,".").concat(f)]||u[f]||d[f]||r;return n?o.createElement(_,l(l({ref:t},c),{},{components:n})):o.createElement(_,l({ref:t},c))}));function _(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3175:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const r={sidebar_label:"zealot_sync_devices"},l="Fastlane action: zealot_sync_devices",i={unversionedId:"developer-guide/fastlane/zealot_sync_devices",id:"version-4.x/developer-guide/fastlane/zealot_sync_devices",title:"Fastlane action: zealot_sync_devices",description:"Zealot 4.5.0 \u7248\u672c\u5df2\u7ecf\u652f\u6301\u4f7f\u7528 Apple API Key",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-4.x/developer-guide/fastlane/zealot_sync_devices.md",sourceDirName:"developer-guide/fastlane",slug:"/developer-guide/fastlane/zealot_sync_devices",permalink:"/zh-Hans/docs/4.x/developer-guide/fastlane/zealot_sync_devices",draft:!1,editUrl:"https://github.com/tryzealot/docs/tree/main/versioned_docs/version-4.x/developer-guide/fastlane/zealot_sync_devices.md",tags:[],version:"4.x",frontMatter:{sidebar_label:"zealot_sync_devices"},sidebar:"developerGuide",previous:{title:"zealot_debug_file",permalink:"/zh-Hans/docs/4.x/developer-guide/fastlane/zealot_debug_file"},next:{title:"APIs",permalink:"/zh-Hans/docs/4.x/developer-guide/api"}},s={},p=[{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"fastlane-action-zealot_sync_devices"},"Fastlane action: zealot_sync_devices"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"\ud83d\udd14 Zealot 4.5.0 \u7248\u672c\u5df2\u7ecf\u652f\u6301\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://docs.fastlane.tools/app-store-connect-api/#using-fastlane-api-key-json-file"},"Apple API Key")),(0,a.kt)("p",{parentName:"admonition"},"\u82f9\u679c\u5f00\u53d1\u8005\u7ba1\u7406\u5e76\u53ef\u81ea\u52a8\u540c\u6b65\u6d4b\u8bd5\u8bbe\u5907\u5c55\u793a\uff0c",(0,a.kt)("a",{parentName:"p",href:"/docs/4.x/user-guide/administrator/apple-team"},"\u67e5\u770b\u8be6\u60c5"))),(0,a.kt)("p",null,"\u540c\u6b65\u5e76\u5173\u8054\u82f9\u679c\u5f00\u53d1\u8005\u4e2d\u5fc3\uff08Apple Developer Portal)\u7684\u6d4b\u8bd5\u8bbe\u5907\u540d\u79f0\u5230 Zealot \u670d\u52a1\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby"},"# \u4f7f\u7528 Apple API Key \u6388\u6743\nzealot_sync_devices(\n  endpoint: 'https://zealot.com',\n  token: '...',\n  api_key_path: '/path/to/your/api_key_json_file',\n  team_id: '...'\n)\n\n# \u4f7f\u7528\u5bc6\u7801\u6388\u6743\uff08\u9700\u8981\u4e8c\u6b65\u8ba4\u8bc1\uff09\nzealot_sync_devices(\n  endpoint: 'https://zealot.com',\n  token: '...',\n  username: 'user@example.com',\n  team_id: '...'\n)\n")),(0,a.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"+---------------+-----------------------------------------------------------------------------+------------------------+---------+\n|                                                  zealot_sync_devices Options                                                   |\n+---------------+-----------------------------------------------------------------------------+------------------------+---------+\n| Key           | Description                                                                 | Env Var(s)             | Default |\n+---------------+-----------------------------------------------------------------------------+------------------------+---------+\n| endpoint      | The endpoint of zealot                                                      | ZEALOT_ENDPOINT        |         |\n| token         | The token of user                                                           | ZEALOT_TOKEN           |         |\n| username      | The apple id (username) of Apple Developer Portal                           | ZEALOT_USERNAME        | *       |\n| api_key_path  | Path to your App Store Connect API Key JSON file                            | ZEALOT_API_PATH        |         |\n|               | (https://docs.fastlane.tools/app-store-connect-api/#using-fastlane-api-key  |                        |         |\n|               | -json-file)                                                                 |                        |         |\n| api_key       | Your App Store Connect API Key information                                  | ZEALOT_API_KEY         | *       |\n|               | (https://docs.fastlane.tools/app-store-connect-api/#using-fastlane-api-key  |                        |         |\n|               | -hash-option)                                                               |                        |         |\n| team_id       | The ID of your Developer Portal team if you're in multiple teams            | ZEALOT_APPLE_TEAM_ID   | *       |\n| team_name     | The name of your Developer Portal team if you're in multiple teams          | ZEALOT_APPLE_TEAM_NAME | *       |\n| platform      | The platform to use (optional)                                              | ZEALOT_APPLE_PLATFORM  | ios     |\n| verify_ssl    | Should verify SSL of zealot service                                         | ZEALOT_VERIFY_SSL      | true    |\n| timeout       | Request timeout in seconds                                                  | ZEALOT_TIMEOUT         |         |\n| fail_on_error | Should an error http request cause a failure? (true/false)                  | ZEALOT_FAIL_ON_ERROR   | false   |\n+---------------+-----------------------------------------------------------------------------+------------------------+---------+\n")))}d.isMDXComponent=!0}}]);
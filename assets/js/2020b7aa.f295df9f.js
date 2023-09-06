"use strict";(self.webpackChunkzealot_new_docs=self.webpackChunkzealot_new_docs||[]).push([[7143],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=r,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7091:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_label:"zealot_sync_devices"},i="Fastlane action: zealot_sync_devices",l={unversionedId:"developer-guide/fastlane/zealot_sync_devices",id:"version-5.0.0/developer-guide/fastlane/zealot_sync_devices",title:"Fastlane action: zealot_sync_devices",description:"Zealot 4.5.0 built in Apple team manage which it use Apple API Key",source:"@site/versioned_docs/version-5.0.0/developer-guide/fastlane/zealot_sync_devices.md",sourceDirName:"developer-guide/fastlane",slug:"/developer-guide/fastlane/zealot_sync_devices",permalink:"/docs/developer-guide/fastlane/zealot_sync_devices",draft:!1,editUrl:"https://github.com/tryzealot/docs/tree/main/versioned_docs/version-5.0.0/developer-guide/fastlane/zealot_sync_devices.md",tags:[],version:"5.0.0",frontMatter:{sidebar_label:"zealot_sync_devices"},sidebar:"developerGuide",previous:{title:"zealot_debug_file",permalink:"/docs/developer-guide/fastlane/zealot_debug_file"},next:{title:"APIs",permalink:"/docs/developer-guide/api"}},s={},p=[{value:"Parameters",id:"parameters",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"fastlane-action-zealot_sync_devices"},"Fastlane action: zealot_sync_devices"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\udd14 Zealot 4.5.0 built in Apple team manage which it use ",(0,r.kt)("a",{parentName:"p",href:"https://docs.fastlane.tools/app-store-connect-api/#using-fastlane-api-key-json-file"},"Apple API Key"),"\nto sync iOS devices, even CAN registe the device after fetch the UDID, ",(0,r.kt)("a",{parentName:"p",href:"/docs/user-guide/administrator/apple-team"},"Check detail"))),(0,r.kt)("p",null,"Use Apple Developer account to syncing UDIDs and relates the value in Zealot."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"# With Apple API Key\nzealot_sync_devices(\n  endpoint: 'https://zealot.com',\n  token: '...',\n  api_key_path: '/path/to/your/api_key_json_file',\n  team_id: '...'\n)\n\n# With password (Two-factor Authentication required)\nzealot_sync_devices(\n  endpoint: 'https://zealot.com',\n  token: '...',\n  username: 'user@example.com',\n  team_id: '...'\n)\n")),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"+---------------+-----------------------------------------------------------------------------+------------------------+---------+\n|                                                  zealot_sync_devices Options                                                   |\n+---------------+-----------------------------------------------------------------------------+------------------------+---------+\n| Key           | Description                                                                 | Env Var(s)             | Default |\n+---------------+-----------------------------------------------------------------------------+------------------------+---------+\n| endpoint      | The endpoint of zealot                                                      | ZEALOT_ENDPOINT        |         |\n| token         | The token of user                                                           | ZEALOT_TOKEN           |         |\n| username      | The apple id (username) of Apple Developer Portal                           | ZEALOT_USERNAME        | *       |\n| api_key_path  | Path to your App Store Connect API Key JSON file                            | ZEALOT_API_PATH        |         |\n|               | (https://docs.fastlane.tools/app-store-connect-api/#using-fastlane-api-key  |                        |         |\n|               | -json-file)                                                                 |                        |         |\n| api_key       | Your App Store Connect API Key information                                  | ZEALOT_API_KEY         | *       |\n|               | (https://docs.fastlane.tools/app-store-connect-api/#using-fastlane-api-key  |                        |         |\n|               | -hash-option)                                                               |                        |         |\n| team_id       | The ID of your Developer Portal team if you're in multiple teams            | ZEALOT_APPLE_TEAM_ID   | *       |\n| team_name     | The name of your Developer Portal team if you're in multiple teams          | ZEALOT_APPLE_TEAM_NAME | *       |\n| platform      | The platform to use (optional)                                              | ZEALOT_APPLE_PLATFORM  | ios     |\n| verify_ssl    | Should verify SSL of zealot service                                         | ZEALOT_VERIFY_SSL      | true    |\n| timeout       | Request timeout in seconds                                                  | ZEALOT_TIMEOUT         |         |\n| fail_on_error | Should an error http request cause a failure? (true/false)                  | ZEALOT_FAIL_ON_ERROR   | false   |\n+---------------+-----------------------------------------------------------------------------+------------------------+---------+\n")))}d.isMDXComponent=!0}}]);
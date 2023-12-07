"use strict";(self.webpackChunkzealot_new_docs=self.webpackChunkzealot_new_docs||[]).push([[3165],{5465:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var o=t(5893),a=t(1151);const s={sidebar_label:"zealot_sync_devices"},i="Fastlane action: zealot_sync_devices",l={id:"developer-guide/fastlane/zealot_sync_devices",title:"Fastlane action: zealot_sync_devices",description:"Zealot 4.5.0 \u7248\u672c\u5df2\u7ecf\u652f\u6301\u4f7f\u7528 Apple API Key",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-5.0.0/developer-guide/fastlane/zealot_sync_devices.md",sourceDirName:"developer-guide/fastlane",slug:"/developer-guide/fastlane/zealot_sync_devices",permalink:"/zh-Hans/docs/5.0.0/developer-guide/fastlane/zealot_sync_devices",draft:!1,unlisted:!1,editUrl:"https://github.com/tryzealot/docs/tree/main/versioned_docs/version-5.0.0/developer-guide/fastlane/zealot_sync_devices.md",tags:[],version:"5.0.0",frontMatter:{sidebar_label:"zealot_sync_devices"},sidebar:"developerGuide",previous:{title:"zealot_debug_file",permalink:"/zh-Hans/docs/5.0.0/developer-guide/fastlane/zealot_debug_file"},next:{title:"APIs",permalink:"/zh-Hans/docs/5.0.0/developer-guide/api"}},r={},c=[{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"fastlane-action-zealot_sync_devices",children:"Fastlane action: zealot_sync_devices"}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsxs)(n.p,{children:["\ud83d\udd14"," Zealot 4.5.0 \u7248\u672c\u5df2\u7ecf\u652f\u6301\u4f7f\u7528 ",(0,o.jsx)(n.a,{href:"https://docs.fastlane.tools/app-store-connect-api/#using-fastlane-api-key-json-file",children:"Apple API Key"})]}),(0,o.jsxs)(n.p,{children:["\u82f9\u679c\u5f00\u53d1\u8005\u7ba1\u7406\u5e76\u53ef\u81ea\u52a8\u540c\u6b65\u6d4b\u8bd5\u8bbe\u5907\u5c55\u793a\uff0c",(0,o.jsx)(n.a,{href:"/docs/user-guide/administrator/apple-team",children:"\u67e5\u770b\u8be6\u60c5"})]})]}),"\n",(0,o.jsx)(n.p,{children:"\u540c\u6b65\u5e76\u5173\u8054\u82f9\u679c\u5f00\u53d1\u8005\u4e2d\u5fc3\uff08Apple Developer Portal)\u7684\u6d4b\u8bd5\u8bbe\u5907\u540d\u79f0\u5230 Zealot \u670d\u52a1\u3002"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ruby",children:"# \u4f7f\u7528 Apple API Key \u6388\u6743\nzealot_sync_devices(\n  endpoint: 'https://zealot.com',\n  token: '...',\n  api_key_path: '/path/to/your/api_key_json_file',\n  team_id: '...'\n)\n\n# \u4f7f\u7528\u5bc6\u7801\u6388\u6743\uff08\u9700\u8981\u4e8c\u6b65\u8ba4\u8bc1\uff09\nzealot_sync_devices(\n  endpoint: 'https://zealot.com',\n  token: '...',\n  username: 'user@example.com',\n  team_id: '...'\n)\n"})}),"\n",(0,o.jsx)(n.h2,{id:"\u53c2\u6570",children:"\u53c2\u6570"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"+---------------+-----------------------------------------------------------------------------+------------------------+---------+\n|                                                  zealot_sync_devices Options                                                   |\n+---------------+-----------------------------------------------------------------------------+------------------------+---------+\n| Key           | Description                                                                 | Env Var(s)             | Default |\n+---------------+-----------------------------------------------------------------------------+------------------------+---------+\n| endpoint      | The endpoint of zealot                                                      | ZEALOT_ENDPOINT        |         |\n| token         | The token of user                                                           | ZEALOT_TOKEN           |         |\n| username      | The apple id (username) of Apple Developer Portal                           | ZEALOT_USERNAME        | *       |\n| api_key_path  | Path to your App Store Connect API Key JSON file                            | ZEALOT_API_PATH        |         |\n|               | (https://docs.fastlane.tools/app-store-connect-api/#using-fastlane-api-key  |                        |         |\n|               | -json-file)                                                                 |                        |         |\n| api_key       | Your App Store Connect API Key information                                  | ZEALOT_API_KEY         | *       |\n|               | (https://docs.fastlane.tools/app-store-connect-api/#using-fastlane-api-key  |                        |         |\n|               | -hash-option)                                                               |                        |         |\n| team_id       | The ID of your Developer Portal team if you're in multiple teams            | ZEALOT_APPLE_TEAM_ID   | *       |\n| team_name     | The name of your Developer Portal team if you're in multiple teams          | ZEALOT_APPLE_TEAM_NAME | *       |\n| platform      | The platform to use (optional)                                              | ZEALOT_APPLE_PLATFORM  | ios     |\n| verify_ssl    | Should verify SSL of zealot service                                         | ZEALOT_VERIFY_SSL      | true    |\n| timeout       | Request timeout in seconds                                                  | ZEALOT_TIMEOUT         |         |\n| fail_on_error | Should an error http request cause a failure? (true/false)                  | ZEALOT_FAIL_ON_ERROR   | false   |\n+---------------+-----------------------------------------------------------------------------+------------------------+---------+\n"})})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>i});var o=t(7294);const a={},s=o.createContext(a);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);
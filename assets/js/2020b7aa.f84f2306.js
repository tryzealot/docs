"use strict";(self.webpackChunkzealot_new_docs=self.webpackChunkzealot_new_docs||[]).push([[7143],{7355:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var o=n(5893),a=n(1151);const s={sidebar_label:"zealot_sync_devices"},i="Fastlane action: zealot_sync_devices",l={id:"developer-guide/fastlane/zealot_sync_devices",title:"Fastlane action: zealot_sync_devices",description:"Zealot 4.5.0 built in Apple team manage which it use Apple API Key",source:"@site/versioned_docs/version-5.0.0/developer-guide/fastlane/zealot_sync_devices.md",sourceDirName:"developer-guide/fastlane",slug:"/developer-guide/fastlane/zealot_sync_devices",permalink:"/docs/5.0.0/developer-guide/fastlane/zealot_sync_devices",draft:!1,unlisted:!1,editUrl:"https://github.com/tryzealot/docs/tree/main/versioned_docs/version-5.0.0/developer-guide/fastlane/zealot_sync_devices.md",tags:[],version:"5.0.0",frontMatter:{sidebar_label:"zealot_sync_devices"},sidebar:"developerGuide",previous:{title:"zealot_debug_file",permalink:"/docs/5.0.0/developer-guide/fastlane/zealot_debug_file"},next:{title:"APIs",permalink:"/docs/5.0.0/developer-guide/api"}},r={},c=[{value:"Parameters",id:"parameters",level:2}];function d(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"fastlane-action-zealot_sync_devices",children:"Fastlane action: zealot_sync_devices"}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["\ud83d\udd14"," Zealot 4.5.0 built in Apple team manage which it use ",(0,o.jsx)(t.a,{href:"https://docs.fastlane.tools/app-store-connect-api/#using-fastlane-api-key-json-file",children:"Apple API Key"}),"\nto sync iOS devices, even CAN registe the device after fetch the UDID, ",(0,o.jsx)(t.a,{href:"/docs/user-guide/administrator/apple-team",children:"Check detail"})]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"Use Apple Developer account to syncing UDIDs and relates the value in Zealot."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ruby",children:"# With Apple API Key\nzealot_sync_devices(\n  endpoint: 'https://zealot.com',\n  token: '...',\n  api_key_path: '/path/to/your/api_key_json_file',\n  team_id: '...'\n)\n\n# With password (Two-factor Authentication required)\nzealot_sync_devices(\n  endpoint: 'https://zealot.com',\n  token: '...',\n  username: 'user@example.com',\n  team_id: '...'\n)\n"})}),"\n",(0,o.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"+---------------+-----------------------------------------------------------------------------+------------------------+---------+\n|                                                  zealot_sync_devices Options                                                   |\n+---------------+-----------------------------------------------------------------------------+------------------------+---------+\n| Key           | Description                                                                 | Env Var(s)             | Default |\n+---------------+-----------------------------------------------------------------------------+------------------------+---------+\n| endpoint      | The endpoint of zealot                                                      | ZEALOT_ENDPOINT        |         |\n| token         | The token of user                                                           | ZEALOT_TOKEN           |         |\n| username      | The apple id (username) of Apple Developer Portal                           | ZEALOT_USERNAME        | *       |\n| api_key_path  | Path to your App Store Connect API Key JSON file                            | ZEALOT_API_PATH        |         |\n|               | (https://docs.fastlane.tools/app-store-connect-api/#using-fastlane-api-key  |                        |         |\n|               | -json-file)                                                                 |                        |         |\n| api_key       | Your App Store Connect API Key information                                  | ZEALOT_API_KEY         | *       |\n|               | (https://docs.fastlane.tools/app-store-connect-api/#using-fastlane-api-key  |                        |         |\n|               | -hash-option)                                                               |                        |         |\n| team_id       | The ID of your Developer Portal team if you're in multiple teams            | ZEALOT_APPLE_TEAM_ID   | *       |\n| team_name     | The name of your Developer Portal team if you're in multiple teams          | ZEALOT_APPLE_TEAM_NAME | *       |\n| platform      | The platform to use (optional)                                              | ZEALOT_APPLE_PLATFORM  | ios     |\n| verify_ssl    | Should verify SSL of zealot service                                         | ZEALOT_VERIFY_SSL      | true    |\n| timeout       | Request timeout in seconds                                                  | ZEALOT_TIMEOUT         |         |\n| fail_on_error | Should an error http request cause a failure? (true/false)                  | ZEALOT_FAIL_ON_ERROR   | false   |\n+---------------+-----------------------------------------------------------------------------+------------------------+---------+\n"})})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>i});var o=n(7294);const a={},s=o.createContext(a);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);
"use strict";(self.webpackChunkzealot_new_docs=self.webpackChunkzealot_new_docs||[]).push([[684],{2190:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var o=t(5893),r=t(1151);const s={},a="Lark (Feishu)",i={id:"user-guide/webhooks/feishu",title:"Lark (Feishu)",description:"\u98de\u4e66 use Incoming Webhooks whose constructs",source:"@site/versioned_docs/version-5.1.0/user-guide/webhooks/feishu.md",sourceDirName:"user-guide/webhooks",slug:"/user-guide/webhooks/feishu",permalink:"/docs/5.1.0/user-guide/webhooks/feishu",draft:!1,unlisted:!1,editUrl:"https://github.com/tryzealot/docs/tree/main/versioned_docs/version-5.1.0/user-guide/webhooks/feishu.md",tags:[],version:"5.1.0",frontMatter:{},sidebar:"userGuide",previous:{title:"Discord",permalink:"/docs/5.1.0/user-guide/webhooks/discord"},next:{title:"Dingtalk (Dingding)",permalink:"/docs/5.1.0/user-guide/webhooks/dingtalk"}},c={},d=[{value:"Text format",id:"text-format",level:2},{value:"Interactive card format",id:"interactive-card-format",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"lark-feishu",children:"Lark (Feishu)"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://open.feishu.cn/document/ukTMukTMukTM/ucTM5YjL3ETO24yNxkjN",children:"\u98de\u4e66"})," use Incoming Webhooks whose constructs\ntypically support both text and interactive card, and can be configured as follows:"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Due to system limitations try to use keyword or IP address whitelist mechanism to receive messages."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"text-format",children:"Text format"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ruby",children:'{\n  "msg_type": "text",\n  "text": {\n    "content": "#{@title}\\n\\n\u5b89\u88c5\u5730\u5740\uff1a#{@install_url}\\nUplaod at: #{@uploaded_at}"\n  }\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"interactive-card-format",children:"Interactive card format"}),"\n",(0,o.jsx)(n.p,{children:"Use card format could use partly of markdown syntax:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ruby",children:'{\n  "msg_type": "interactive",\n  "card": {\n    "config": {\n      "wide_screen_mode": true,\n      "enable_forward": true\n    },\n    "elements": [\n      {\n        "tag": "div",\n        "fields": [\n          {\n            "is_short": true,\n            "text": {\n              "tag": "lark_md",\n              "content": "**Platform**\\n#{@device_type}"\n            }\n          },\n          {\n            "is_short": true,\n            "text": {\n              "tag": "lark_md",\n              "content": "**Version**\\n#{@release_version} (#{@build_version})"\n            }\n          },\n          {\n            "is_short": true,\n            "text": {\n              "tag": "lark_md",\n              "content": "**Developer**\\n#{@username}"\n            }\n          },\n          {\n            "is_short": true,\n            "text": {\n              "tag": "lark_md",\n              "content": "**Upload date**\\n#{@uploaded_at}"\n            }\n          },\n        ]\n      },\n      {\n        "tag": "div",\n        "text": {\n          "content": "**Changelog**\\n#{@changelog}",\n          "tag": "lark_md"\n        }\n      },\n      {\n        "actions": [\n          {\n            "tag": "button",\n            "text": {\n              "content": "\ud83d\udc1e Go to app",\n              "tag": "lark_md"\n            },\n            "url": "#{@release_url}",\n            "type": "primary",\n            "value": {}\n          }\n        ],\n        "tag": "action"\n      }\n    ],\n    "header": {\n      "title": {\n        "content": "#{@title}",\n        "tag": "plain_text"\n      }\n    }\n  }\n}\n'})})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>a});var o=t(7294);const r={},s=o.createContext(r);function a(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);
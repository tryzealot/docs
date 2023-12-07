"use strict";(self.webpackChunkzealot_new_docs=self.webpackChunkzealot_new_docs||[]).push([[4985],{3268:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var o=t(5893),s=t(1151);const r={},a="Lark (Feishu)",i={id:"user-guide/webhooks/feishu",title:"Lark (Feishu)",description:"\u98de\u4e66 use Incoming Webhooks whose constructs",source:"@site/versioned_docs/version-4.x/user-guide/webhooks/feishu.md",sourceDirName:"user-guide/webhooks",slug:"/user-guide/webhooks/feishu",permalink:"/docs/4.x/user-guide/webhooks/feishu",draft:!1,unlisted:!1,editUrl:"https://github.com/tryzealot/docs/tree/main/versioned_docs/version-4.x/user-guide/webhooks/feishu.md",tags:[],version:"4.x",frontMatter:{},sidebar:"userGuide",previous:{title:"Discord",permalink:"/docs/4.x/user-guide/webhooks/discord"},next:{title:"Dingtalk (Dingding)",permalink:"/docs/4.x/user-guide/webhooks/dingtalk"}},c={},d=[{value:"Text format",id:"text-format",level:2},{value:"Interactive card format",id:"interactive-card-format",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"lark-feishu",children:"Lark (Feishu)"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://open.feishu.cn/document/ukTMukTMukTM/ucTM5YjL3ETO24yNxkjN",children:"\u98de\u4e66"})," use Incoming Webhooks whose constructs\ntypically support both text and interactive card, and can be configured as follows:"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsx)(n.p,{children:"Due to system limitations try to use keyword or IP address whitelist mechanism to receive messages."}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"text-format",children:"Text format"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ruby",children:'{\n  "msg_type": "text",\n  "text": {\n    "content": "#{@title}\\n\\n\u5b89\u88c5\u5730\u5740\uff1a#{@install_url}\\nUplaod at: #{@uploaded_at}"\n  }\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"interactive-card-format",children:"Interactive card format"}),"\n",(0,o.jsx)(n.p,{children:"Use card format could use partly of markdown syntax:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ruby",children:'{\n  "msg_type": "interactive",\n  "card": {\n    "config": {\n      "wide_screen_mode": true,\n      "enable_forward": true\n    },\n    "elements": [\n      {\n        "tag": "div",\n        "text": {\n          "content": "## #{@title}\\nPlatform: #{@device_type}\\nUplaod at: #{@uploaded_at}\\nInstall QRcode:\\n![qrcode](#{@qrcode_url})",\n          "tag": "lark_md"\n        }\n      },\n      {\n        "actions": [{\n          "tag": "button",\n          "text": {\n            "content": "Install",\n            "tag": "lark_md"\n          },\n          "url": @install_url,\n          "type": "default",\n          "value": {}\n        }],\n        "tag": "action"\n      }\n    ]\n  }\n}\n'})})]})}function l(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>a});var o=t(7294);const s={},r=o.createContext(s);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);
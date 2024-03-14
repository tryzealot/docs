"use strict";(self.webpackChunkzealot_new_docs=self.webpackChunkzealot_new_docs||[]).push([[5537],{7414:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var o=n(5893),s=n(1151);const i={},r="Dingtalk (Dingding)",d={id:"user-guide/webhooks/dingtalk",title:"Dingtalk (Dingding)",description:"\u9489\u9489 use Incoming Webhooks whose constructs",source:"@site/versioned_docs/version-5.1.0/user-guide/webhooks/dingtalk.md",sourceDirName:"user-guide/webhooks",slug:"/user-guide/webhooks/dingtalk",permalink:"/docs/5.1.0/user-guide/webhooks/dingtalk",draft:!1,unlisted:!1,editUrl:"https://github.com/tryzealot/docs/tree/main/versioned_docs/version-5.1.0/user-guide/webhooks/dingtalk.md",tags:[],version:"5.1.0",frontMatter:{},sidebar:"userGuide",previous:{title:"Lark (Feishu)",permalink:"/docs/5.1.0/user-guide/webhooks/feishu"},next:{title:"Wecom (Wechat Work)",permalink:"/docs/5.1.0/user-guide/webhooks/wecom"}},a={},l=[{value:"Text format",id:"text-format",level:2},{value:"Markdown format",id:"markdown-format",level:2}];function c(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"dingtalk-dingding",children:"Dingtalk (Dingding)"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://developers.dingtalk.com/document/robots/custom-robot-access#section-e4x-4y8-9k0",children:"\u9489\u9489"})," use Incoming Webhooks whose constructs\ntypically support both text and markdown, and can be configured as follows:"]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:"Due to system limitations try to use keyword or IP address whitelist mechanism to receive messages."}),"\n"]}),"\n",(0,o.jsx)(t.h2,{id:"text-format",children:"Text format"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ruby",children:'{\n  "msgtype": "text",\n  "text": {\n    "content": "#{@title}\\n\\n\u5b89\u88c5\u5730\u5740\uff1a#{@install_url}\\nUplaod at: #{@uploaded_at}"\n  }\n}\n'})}),"\n",(0,o.jsx)(t.h2,{id:"markdown-format",children:"Markdown format"}),"\n",(0,o.jsx)(t.p,{children:"The title field is only displayed in the dialog list, the text field is displayed for the chat content entering the dialog."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ruby",children:'{\n  "msgtype": "markdown",\n  "markdown": {\n    "title": @title,\n    "text": "## #{@title}\\nPlatform: #{@device_type}\\nUplaod at: #{@uploaded_at}\\nInstall QRcode:\\n![qrcode](#{@qrcode_url})"\n  }\n}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>r});var o=n(7294);const s={},i=o.createContext(s);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);
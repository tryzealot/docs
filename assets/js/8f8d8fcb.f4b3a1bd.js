"use strict";(self.webpackChunkzealot_new_docs=self.webpackChunkzealot_new_docs||[]).push([[1900],{9901:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>i});var n=t(5893),r=t(1151);const s={},a="Wecom (Wechat Work)",c={id:"user-guide/webhooks/wecom",title:"Wecom (Wechat Work)",description:"\u4f01\u4e1a\u5fae\u4fe1 use Incoming Webhooks whose constructs",source:"@site/versioned_docs/version-5.1.0/user-guide/webhooks/wecom.md",sourceDirName:"user-guide/webhooks",slug:"/user-guide/webhooks/wecom",permalink:"/docs/5.1.0/user-guide/webhooks/wecom",draft:!1,unlisted:!1,editUrl:"https://github.com/tryzealot/docs/tree/main/versioned_docs/version-5.1.0/user-guide/webhooks/wecom.md",tags:[],version:"5.1.0",frontMatter:{},sidebar:"userGuide",previous:{title:"Dingtalk (Dingding)",permalink:"/docs/5.1.0/user-guide/webhooks/dingtalk"},next:{title:"Administrator",permalink:"/docs/5.1.0/category/administrator"}},d={},i=[{value:"Text format",id:"text-format",level:2},{value:"Markdown format",id:"markdown-format",level:2}];function l(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"wecom-wechat-work",children:"Wecom (Wechat Work)"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.a,{href:"https://work.weixin.qq.com/api/doc/90000/90136/91770",children:"\u4f01\u4e1a\u5fae\u4fe1"})," use Incoming Webhooks whose constructs\ntypically support both text and markdown, and can be configured as follows:"]}),"\n",(0,n.jsx)(o.h2,{id:"text-format",children:"Text format"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-ruby",children:'{\n  "msgtype": "text",\n  "text": {\n    "content": "#{@title}\\n\\nInstall url\uff1a#{@install_url}\\nUplaod at: #{@uploaded_at}"\n  }\n}\n'})}),"\n",(0,n.jsx)(o.h2,{id:"markdown-format",children:"Markdown format"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-ruby",children:'{\n  "msgtype": "markdown",\n  "markdown": {\n    "content": "## #{@title}\\nPlatform: #{@device_type}\\nUplaod at: #{@uploaded_at}\\nInstall QRcode:\\n![qrcode](#{@qrcode_url})"\n  }\n}\n'})})]})}function u(e={}){const{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},1151:(e,o,t)=>{t.d(o,{Z:()=>c,a:()=>a});var n=t(7294);const r={},s=n.createContext(r);function a(e){const o=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(s.Provider,{value:o},e.children)}}}]);
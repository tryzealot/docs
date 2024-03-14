"use strict";(self.webpackChunkzealot_new_docs=self.webpackChunkzealot_new_docs||[]).push([[383],{3630:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>l});var s=t(5893),o=t(1151);const r={},c="Discord",d={id:"user-guide/webhooks/discord",title:"Discord",description:"Discord \u652f\u6301 Slack \u517c\u5bb9\u7684\u7f51\u7edc\u94a9\u5b50\u56e0\u6b64\u5176\u7ed3\u6784\u4f53\u901a\u5e38\u652f\u6301\u6587\u672c\u548c block \u5bcc\u6587\u672c\u4e24\u79cd\u65b9\u5f0f\uff0c\u53ef\u901a\u8fc7\u5982\u4e0b\u914d\u7f6e\u5b9e\u73b0\uff1a",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-5.1.0/user-guide/webhooks/discord.md",sourceDirName:"user-guide/webhooks",slug:"/user-guide/webhooks/discord",permalink:"/zh-Hans/docs/5.1.0/user-guide/webhooks/discord",draft:!1,unlisted:!1,editUrl:"https://github.com/tryzealot/docs/tree/main/versioned_docs/version-5.1.0/user-guide/webhooks/discord.md",tags:[],version:"5.1.0",frontMatter:{},sidebar:"userGuide",previous:{title:"Slack",permalink:"/zh-Hans/docs/5.1.0/user-guide/webhooks/slack"},next:{title:"\u98de\u4e66",permalink:"/zh-Hans/docs/5.1.0/user-guide/webhooks/feishu"}},i={},l=[{value:"Text \u6587\u672c\u683c\u5f0f",id:"text-\u6587\u672c\u683c\u5f0f",level:2},{value:"Block \u5bcc\u6587\u672c\u683c\u5f0f",id:"block-\u5bcc\u6587\u672c\u683c\u5f0f",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"discord",children:"Discord"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://support.discord.com/hc/zh-tw/articles/228383668",children:"Discord"})," \u652f\u6301 Slack \u517c\u5bb9\u7684\u7f51\u7edc\u94a9\u5b50\u56e0\u6b64\u5176\u7ed3\u6784\u4f53\u901a\u5e38\u652f\u6301\u6587\u672c\u548c block \u5bcc\u6587\u672c\u4e24\u79cd\u65b9\u5f0f\uff0c\u53ef\u901a\u8fc7\u5982\u4e0b\u914d\u7f6e\u5b9e\u73b0\uff1a"]}),"\n",(0,s.jsx)(n.h2,{id:"text-\u6587\u672c\u683c\u5f0f",children:"Text \u6587\u672c\u683c\u5f0f"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ruby",children:'{\n  "text": "#{@title}\\n\u5e73\u53f0: #{@device_type}\\n\u4e0a\u4f20\u65f6\u95f4: #{@uploaded_at}"\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"block-\u5bcc\u6587\u672c\u683c\u5f0f",children:"Block \u5bcc\u6587\u672c\u683c\u5f0f"}),"\n",(0,s.jsx)(n.p,{children:"\u4e00\u4e2a\u7b80\u5355\u7684\u652f\u6301 markdown \u7684 block"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ruby",children:'{\n  "blocks": [\n    {\n      "type": "section",\n      "text": {\n        "type": "mrkdwn",\n        "text": "## #{@title}\\n\u5e73\u53f0: #{@device_type}\\n\u4e0a\u4f20\u65f6\u95f4: #{@uploaded_at}\\n\u5b89\u88c5\u4e8c\u7ef4\u7801:\\n![qrcode](#{@qrcode_url})"\n      }\n    }\n  ]\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u7a0d\u5fae\u597d\u770b\u70b9\u6709\u4e9b\u7ed3\u6784\u5c55\u793a\u7684 block"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ruby",children:'{\n  "blocks": [\n    {\n      "type": "section",\n      "text": {\n        "type": "mrkdwn",\n        "text": @title,\n      }\n    },\n    {\n      "type": "section",\n      "fields": [\n        {\n          "type": "mrkdwn",\n          "text": "*\u5e73\u53f0:*\\n#{@device_type}"\n        },\n        {\n          "type": "mrkdwn",\n          "text": "*\u4e0a\u4f20\u65f6\u95f4:*\\n#{@uploaded_at}"\n        }\n      ]\n    },\n    "accessory": {\n      "type": "image",\n      "image_url": @qrcode_url,\n      "alt_text": "install qrcode"\n    }\n  ]\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>c});var s=t(7294);const o={},r=s.createContext(o);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);
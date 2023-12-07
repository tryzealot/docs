"use strict";(self.webpackChunkzealot_new_docs=self.webpackChunkzealot_new_docs||[]).push([[3844],{2865:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>i});var o=n(5893),s=n(1151);const r={},c="Slack",a={id:"user-guide/webhooks/slack",title:"Slack",description:"Slack use Incoming Webhooks whose constructs",source:"@site/versioned_docs/version-5.0.0/user-guide/webhooks/slack.md",sourceDirName:"user-guide/webhooks",slug:"/user-guide/webhooks/slack",permalink:"/docs/5.0.0/user-guide/webhooks/slack",draft:!1,unlisted:!1,editUrl:"https://github.com/tryzealot/docs/tree/main/versioned_docs/version-5.0.0/user-guide/webhooks/slack.md",tags:[],version:"5.0.0",frontMatter:{},sidebar:"userGuide",previous:{title:"Webhooks",permalink:"/docs/5.0.0/user-guide/webhooks"},next:{title:"Discord",permalink:"/docs/5.0.0/user-guide/webhooks/discord"}},l={},i=[{value:"Text format",id:"text-format",level:2},{value:"Block rich text format",id:"block-rich-text-format",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"slack",children:"Slack"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://api.slack.com/messaging/webhooks",children:"Slack"})," use Incoming Webhooks whose constructs\ntypically support both text and block rich text, and can be configured as follows:"]}),"\n",(0,o.jsx)(t.h2,{id:"text-format",children:"Text format"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ruby",children:'{\n  "text": "#{@title}\\nPlatform: #{@device_type}\\nUpload at: #{@uploaded_at}"\n}\n'})}),"\n",(0,o.jsx)(t.h2,{id:"block-rich-text-format",children:"Block rich text format"}),"\n",(0,o.jsx)(t.p,{children:"A simple block with markdown support"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ruby",children:'{\n  "blocks": [\n    {\n      "type": "section",\n      "text": {\n        "type": "mrkdwn",\n        "text": "## #{@title}\\nPlatform: #{@device_type}\\nUpload at: #{@uploaded_at}\\nInstal QRcode:\\n![qrcode](#{@qrcode_url})"\n      }\n    }\n  ]\n}\n'})}),"\n",(0,o.jsx)(t.p,{children:"Better look at some of the structures shown in the block"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-ruby",children:'{\n  "blocks": [\n    {\n      "type": "section",\n      "text": {\n        "type": "mrkdwn",\n        "text": @title,\n      }\n    },\n    {\n      "type": "section",\n      "fields": [\n        {\n          "type": "mrkdwn",\n          "text": "*Platform:*\\n#{@device_type}"\n        },\n        {\n          "type": "mrkdwn",\n          "text": "*Upload at:*\\n#{@uploaded_at}"\n        }\n      ]\n    },\n    "accessory": {\n      "type": "image",\n      "image_url": @qrcode_url,\n      "alt_text": "install qrcode"\n    }\n  ]\n}\n'})})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>c});var o=n(7294);const s={},r=o.createContext(s);function c(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);
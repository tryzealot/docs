"use strict";(self.webpackChunkzealot_new_docs=self.webpackChunkzealot_new_docs||[]).push([[1854],{7710:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var s=t(5893),r=t(1151);const o={},i="\u98de\u4e66",a={id:"user-guide/webhooks/feishu",title:"\u98de\u4e66",description:"\u98de\u4e66\u7684\u7f51\u7edc\u94a9\u5b50\u7ed3\u6784\u4f53\u901a\u5e38\u652f\u6301\u6587\u672c\u548c\u5361\u7247\u4e24\u79cd\u65b9\u5f0f\uff0c",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-5.0.0/user-guide/webhooks/feishu.md",sourceDirName:"user-guide/webhooks",slug:"/user-guide/webhooks/feishu",permalink:"/zh-Hans/docs/5.0.0/user-guide/webhooks/feishu",draft:!1,unlisted:!1,editUrl:"https://github.com/tryzealot/docs/tree/main/versioned_docs/version-5.0.0/user-guide/webhooks/feishu.md",tags:[],version:"5.0.0",frontMatter:{},sidebar:"userGuide",previous:{title:"Discord",permalink:"/zh-Hans/docs/5.0.0/user-guide/webhooks/discord"},next:{title:"\u9489\u9489",permalink:"/zh-Hans/docs/5.0.0/user-guide/webhooks/dingtalk"}},c={},d=[{value:"Text \u6587\u672c\u683c\u5f0f",id:"text-\u6587\u672c\u683c\u5f0f",level:2},{value:"Interactive \u5361\u7247\u683c\u5f0f",id:"interactive-\u5361\u7247\u683c\u5f0f",level:2}];function u(n){const e={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"\u98de\u4e66",children:"\u98de\u4e66"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.a,{href:"https://open.feishu.cn/document/ukTMukTMukTM/ucTM5YjL3ETO24yNxkjN",children:"\u98de\u4e66"}),"\u7684\u7f51\u7edc\u94a9\u5b50\u7ed3\u6784\u4f53\u901a\u5e38\u652f\u6301\u6587\u672c\u548c\u5361\u7247\u4e24\u79cd\u65b9\u5f0f\uff0c\n\u7531\u4e8e\u7cfb\u7edf\u9650\u5236\u5c3d\u91cf\u4f7f\u7528\u5173\u952e\u8bcd\u6216 IP \u5730\u5740\u767d\u540d\u5355\u673a\u5236\u6765\u63a5\u53d7\u6d88\u606f\u3002\u53ef\u901a\u8fc7\u5982\u4e0b\u914d\u7f6e\u5b9e\u73b0\uff1a"]}),"\n",(0,s.jsx)(e.h2,{id:"text-\u6587\u672c\u683c\u5f0f",children:"Text \u6587\u672c\u683c\u5f0f"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ruby",children:'{\n  "msg_type": "text",\n  "text": {\n    "content": "#{@title}\\n\\n\u5b89\u88c5\u5730\u5740\uff1a#{@install_url}\\n\u4e0a\u4f20\u65f6\u95f4: #{@uploaded_at}"\n  }\n}\n'})}),"\n",(0,s.jsx)(e.h2,{id:"interactive-\u5361\u7247\u683c\u5f0f",children:"Interactive \u5361\u7247\u683c\u5f0f"}),"\n",(0,s.jsx)(e.p,{children:"\u901a\u8fc7\u8fd9\u79cd\u683c\u5f0f\u53ef\u4ee5\u5b9e\u73b0\u652f\u6301 markdown \u7684\u90e8\u5206\u8bed\u6cd5\uff08\u4e0d\u652f\u6301\u5916\u94fe\u56fe\u7247\u5c55\u793a\uff09\uff1a"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-ruby",children:'{\n  "msg_type": "interactive",\n  "card": {\n    "config": {\n      "wide_screen_mode": true,\n      "enable_forward": true\n    },\n    "elements": [\n      {\n        "tag": "div",\n        "fields": [\n          {\n            "is_short": true,\n            "text": {\n              "tag": "lark_md",\n              "content": "**\u5e73\u53f0**\\n#{@device_type}"\n            }\n          },\n          {\n            "is_short": true,\n            "text": {\n              "tag": "lark_md",\n              "content": "**\u7248\u672c**\\n#{@release_version} (#{@build_version})"\n            }\n          },\n          {\n            "is_short": true,\n            "text": {\n              "tag": "lark_md",\n              "content": "**\u6700\u540e\u63d0\u4ea4\u8005**\\n#{@username}"\n            }\n          },\n          {\n            "is_short": true,\n            "text": {\n              "tag": "lark_md",\n              "content": "**\u4e0a\u4f20\u65f6\u95f4**\\n#{@uploaded_at}"\n            }\n          },\n        ]\n      },\n      {\n        "tag": "div",\n        "text": {\n          "content": "**\u53d8\u66f4\u5386\u53f2**\\n#{@changelog}",\n          "tag": "lark_md"\n        }\n      },\n      {\n        "actions": [\n          {\n            "tag": "button",\n            "text": {\n              "content": "\ud83d\udc1e \u7248\u672c\u8be6\u60c5",\n              "tag": "lark_md"\n            },\n            "url": "#{@release_url}",\n            "type": "primary",\n            "value": {}\n          }\n        ],\n        "tag": "action"\n      }\n    ],\n    "header": {\n      "title": {\n        "content": "#{@title}",\n        "tag": "plain_text"\n      }\n    }\n  }\n}\n'})})]})}function l(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(u,{...n})}):u(n)}},1151:(n,e,t)=>{t.d(e,{Z:()=>a,a:()=>i});var s=t(7294);const r={},o=s.createContext(r);function i(n){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),s.createElement(o.Provider,{value:e},n.children)}}}]);
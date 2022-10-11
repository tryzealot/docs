"use strict";(self.webpackChunkzealot_new_docs=self.webpackChunkzealot_new_docs||[]).push([[2570],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,k=p["".concat(i,".").concat(m)]||p[m]||d[m]||c;return n?r.createElement(k,a(a({ref:t},u),{},{components:n})):r.createElement(k,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<c;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3557:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const c={},a="Discord",l={unversionedId:"user-guide/webhooks/discord",id:"user-guide/webhooks/discord",title:"Discord",description:"Discord \u652f\u6301 Slack \u517c\u5bb9\u7684\u7f51\u7edc\u94a9\u5b50\u56e0\u6b64\u5176\u7ed3\u6784\u4f53\u901a\u5e38\u652f\u6301\u6587\u672c\u548c block \u5bcc\u6587\u672c\u4e24\u79cd\u65b9\u5f0f\uff0c\u53ef\u901a\u8fc7\u5982\u4e0b\u914d\u7f6e\u5b9e\u73b0\uff1a",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/user-guide/webhooks/discord.md",sourceDirName:"user-guide/webhooks",slug:"/user-guide/webhooks/discord",permalink:"/zh-Hans/docs/user-guide/webhooks/discord",draft:!1,editUrl:"https://github.com/tryzealot/docs/tree/main/docs/user-guide/webhooks/discord.md",tags:[],version:"current",frontMatter:{},sidebar:"userGuide",previous:{title:"Slack",permalink:"/zh-Hans/docs/user-guide/webhooks/slack"},next:{title:"\u98de\u4e66",permalink:"/zh-Hans/docs/user-guide/webhooks/feishu"}},i={},s=[{value:"Text \u6587\u672c\u683c\u5f0f",id:"text-\u6587\u672c\u683c\u5f0f",level:2},{value:"Block \u5bcc\u6587\u672c\u683c\u5f0f",id:"block-\u5bcc\u6587\u672c\u683c\u5f0f",level:2}],u={toc:s};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"discord"},"Discord"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://support.discord.com/hc/zh-tw/articles/228383668"},"Discord")," \u652f\u6301 Slack \u517c\u5bb9\u7684\u7f51\u7edc\u94a9\u5b50\u56e0\u6b64\u5176\u7ed3\u6784\u4f53\u901a\u5e38\u652f\u6301\u6587\u672c\u548c block \u5bcc\u6587\u672c\u4e24\u79cd\u65b9\u5f0f\uff0c\u53ef\u901a\u8fc7\u5982\u4e0b\u914d\u7f6e\u5b9e\u73b0\uff1a"),(0,o.kt)("h2",{id:"text-\u6587\u672c\u683c\u5f0f"},"Text \u6587\u672c\u683c\u5f0f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},'{\n  "text": "#{@title}\\n\u5e73\u53f0: #{@device_type}\\n\u4e0a\u4f20\u65f6\u95f4: #{@uploaded_at}"\n}\n')),(0,o.kt)("h2",{id:"block-\u5bcc\u6587\u672c\u683c\u5f0f"},"Block \u5bcc\u6587\u672c\u683c\u5f0f"),(0,o.kt)("p",null,"\u4e00\u4e2a\u7b80\u5355\u7684\u652f\u6301 markdown \u7684 block"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},'{\n  "blocks": [\n    {\n      "type": "section",\n      "text": {\n        "type": "mrkdwn",\n        "text": "## #{@title}\\n\u5e73\u53f0: #{@device_type}\\n\u4e0a\u4f20\u65f6\u95f4: #{@uploaded_at}\\n\u5b89\u88c5\u4e8c\u7ef4\u7801:\\n![qrcode](#{@qrcode_url})"\n      }\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"\u7a0d\u5fae\u597d\u770b\u70b9\u6709\u4e9b\u7ed3\u6784\u5c55\u793a\u7684 block"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},'{\n  "blocks": [\n    {\n      "type": "section",\n      "text": {\n        "type": "mrkdwn",\n        "text": @title,\n      }\n    },\n    {\n      "type": "section",\n      "fields": [\n        {\n          "type": "mrkdwn",\n          "text": "*\u5e73\u53f0:*\\n#{@device_type}"\n        },\n        {\n          "type": "mrkdwn",\n          "text": "*\u4e0a\u4f20\u65f6\u95f4:*\\n#{@uploaded_at}"\n        }\n      ]\n    },\n    "accessory": {\n      "type": "image",\n      "image_url": @qrcode_url,\n      "alt_text": "install qrcode"\n    }\n  ]\n}\n')))}d.isMDXComponent=!0}}]);
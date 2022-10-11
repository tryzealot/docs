"use strict";(self.webpackChunkzealot_new_docs=self.webpackChunkzealot_new_docs||[]).push([[387],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,c(c({ref:t},u),{},{components:r})):n.createElement(f,c({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5143:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={},c="Wecom (Wechat Work)",i={unversionedId:"user-guide/webhooks/wecom",id:"user-guide/webhooks/wecom",title:"Wecom (Wechat Work)",description:"\u4f01\u4e1a\u5fae\u4fe1 use Incoming Webhooks whose constructs",source:"@site/docs/user-guide/webhooks/wecom.md",sourceDirName:"user-guide/webhooks",slug:"/user-guide/webhooks/wecom",permalink:"/docs/user-guide/webhooks/wecom",draft:!1,editUrl:"https://github.com/tryzealot/docs/tree/main/docs/user-guide/webhooks/wecom.md",tags:[],version:"current",frontMatter:{},sidebar:"userGuide",previous:{title:"Dingtalk (Dingding)",permalink:"/docs/user-guide/webhooks/dingtalk"},next:{title:"Administrator",permalink:"/docs/category/administrator"}},l={},s=[{value:"Text format",id:"text-format",level:2},{value:"Markdown format",id:"markdown-format",level:2}],u={toc:s};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"wecom-wechat-work"},"Wecom (Wechat Work)"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://work.weixin.qq.com/api/doc/90000/90136/91770"},"\u4f01\u4e1a\u5fae\u4fe1")," use Incoming Webhooks whose constructs\ntypically support both text and markdown, and can be configured as follows:"),(0,o.kt)("h2",{id:"text-format"},"Text format"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},'{\n  "msgtype": "text",\n  "text": {\n    "content": "#{@title}\\n\\nInstall url\uff1a#{@install_url}\\nUplaod at: #{@uploaded_at}"\n  }\n}\n')),(0,o.kt)("h2",{id:"markdown-format"},"Markdown format"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},'{\n  "msgtype": "markdown",\n  "markdown": {\n    "content": "## #{@title}\\nPlatform: #{@device_type}\\nUplaod at: #{@uploaded_at}\\nInstall QRcode:\\n![qrcode](#{@qrcode_url})"\n  }\n}\n')))}p.isMDXComponent=!0}}]);
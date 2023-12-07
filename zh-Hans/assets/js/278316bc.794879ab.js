"use strict";(self.webpackChunkzealot_new_docs=self.webpackChunkzealot_new_docs||[]).push([[2859],{6628:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>c});var t=n(5893),o=n(1151);const i={},l="\u6570\u636e\u5b58\u50a8",r={id:"self-hosted/storage",title:"\u6570\u636e\u5b58\u50a8",description:"\u8fd9\u91cc\u7f57\u5217\u4e86 Zealot \u670d\u52a1\u6240\u9700\u7684\u6240\u6709\u6570\u636e\u5b58\u50a8\uff0c\u5728\u8fd8\u6ca1\u6709\u63d0\u4f9b\u66f4\u597d\u7684\u5907\u4efd\u7ba1\u7406\u5de5\u5177\u4e4b\u524d\uff0c\u65b9\u4fbf\u6709\u80fd\u529b\u7684\u7528\u6237\u80fd\u591f\u624b\u52a8\u5907\u4efd\u548c\u6062\u590d\u6570\u636e\u4f7f\u7528\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-5.1.0/self-hosted/storage.md",sourceDirName:"self-hosted",slug:"/self-hosted/storage",permalink:"/zh-Hans/docs/self-hosted/storage",draft:!1,unlisted:!1,editUrl:"https://github.com/tryzealot/docs/tree/main/versioned_docs/version-5.1.0/self-hosted/storage.md",tags:[],version:"5.1.0",frontMatter:{},sidebar:"selfHosted",previous:{title:"\u5b9a\u65f6\u4efb\u52a1",permalink:"/zh-Hans/docs/self-hosted/configuration/schedule-jobs"}},d={},c=[{value:"Postgres",id:"postgres",level:2},{value:"Redis",id:"redis",level:2},{value:"\u6587\u4ef6\u5b58\u50a8",id:"\u6587\u4ef6\u5b58\u50a8",level:2},{value:"\u5907\u4efd\u5b58\u50a8",id:"\u5907\u4efd\u5b58\u50a8",level:2}];function a(e){const s={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"\u6570\u636e\u5b58\u50a8",children:"\u6570\u636e\u5b58\u50a8"}),"\n",(0,t.jsx)(s.p,{children:"\u8fd9\u91cc\u7f57\u5217\u4e86 Zealot \u670d\u52a1\u6240\u9700\u7684\u6240\u6709\u6570\u636e\u5b58\u50a8\uff0c\u5728\u8fd8\u6ca1\u6709\u63d0\u4f9b\u66f4\u597d\u7684\u5907\u4efd\u7ba1\u7406\u5de5\u5177\u4e4b\u524d\uff0c\u65b9\u4fbf\u6709\u80fd\u529b\u7684\u7528\u6237\u80fd\u591f\u624b\u52a8\u5907\u4efd\u548c\u6062\u590d\u6570\u636e\u4f7f\u7528\u3002"}),"\n",(0,t.jsx)(s.h2,{id:"postgres",children:"Postgres"}),"\n",(0,t.jsx)(s.p,{children:"\u7528\u4e8e\u5b58\u50a8\u548c\u7ba1\u7406\u4e00\u5207\u548c Zealot \u6709\u5173\u6570\u636e\uff0c\u8fd9\u4e2a\u5c31\u4e0d\u7528\u591a\u8bf4\u4e86\u3002"}),"\n",(0,t.jsx)(s.h2,{id:"redis",children:"Redis"}),"\n",(0,t.jsx)(s.p,{children:"\u76ee\u524d\u53ea\u6709 sidekiq \u5f02\u6b65\u4efb\u52a1\u670d\u52a1\u5728\u4f7f\u7528\u5b83\u505a\u4e00\u4e9b\u4efb\u52a1\u72b6\u6001\u3001\u7edf\u8ba1\u6570\u636e\u7684\u5b58\u50a8\u3002"}),"\n",(0,t.jsx)(s.h2,{id:"\u6587\u4ef6\u5b58\u50a8",children:"\u6587\u4ef6\u5b58\u50a8"}),"\n",(0,t.jsxs)(s.p,{children:["Zealot \u670d\u52a1\u9664\u4e86\u4f9d\u8d56 postgresql\u3001redis \u4e4b\u5916\u8fd8\u6709\u4e00\u90e8\u5206\u7684\u78c1\u76d8\u5b58\u50a8\u662f\u4e0a\u4f20\u7684\u5e94\u7528\u3001\u8c03\u8bd5\u6587\u4ef6\u4e14\u4ec5\u63d0\u4f9b\u5b58\u50a8\u5728\u6587\u4ef6\u7cfb\u7edf\u4e4b\u4e2d\uff0c\u76ee\u5f55\u4f4d\u4e8e ",(0,t.jsx)(s.code,{children:"public/uploads"}),"\u3002"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"apps \u4e0a\u4f20\u5e94\u7528\u7684\u76ee\u5f55"}),"\n",(0,t.jsx)(s.li,{children:"debugs_files \u4e0a\u4f20\u8c03\u8bd5\u6587\u4ef6\u7684\u76ee\u5f55"}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"\u5907\u4efd\u5b58\u50a8",children:"\u5907\u4efd\u5b58\u50a8"}),"\n",(0,t.jsxs)(s.p,{children:["Zealot \u670d\u52a1\u76ee\u524d\u652f\u6301\u901a\u8fc7\u7ba1\u7406\u5458\u9762\u677f\u7ba1\u7406\u548c\u751f\u6210\u5907\u4efd\u6570\u636e\uff0c\u5907\u4efd\u6570\u636e\u53ef\u914d\u7f6e\u8303\u56f4\u5305\u62ec\u6570\u636e\u5e93\u548c\u4e0a\u4f20\u5e94\u7528\uff0c\u76ee\u5f55\u4f4d\u4e8e ",(0,t.jsx)(s.code,{children:"public/backup"}),"\u3002"]})]})}function u(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>r,a:()=>l});var t=n(7294);const o={},i=t.createContext(o);function l(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);
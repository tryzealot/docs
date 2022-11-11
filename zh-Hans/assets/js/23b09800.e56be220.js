"use strict";(self.webpackChunkzealot_new_docs=self.webpackChunkzealot_new_docs||[]).push([[7817],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),i=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=i(r),m=o,f=u["".concat(d,".").concat(m)]||u[m]||p[m]||a;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:o,l[1]=s;for(var i=2;i<a;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},368:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>i});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_label:"Render"},l="\u90e8\u7f72 Zealot \u5230 Render \u6307\u5357",s={unversionedId:"self-hosted/deployment/render",id:"self-hosted/deployment/render",title:"\u90e8\u7f72 Zealot \u5230 Render \u6307\u5357",description:"Zealot \u63d0\u4f9b render.com \u5b98\u65b9 blueprint \u6a21\u677f render.yaml \u7528\u4e8e\u4e00\u952e\u90e8\u7f72\u672c\u670d\u52a1\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/self-hosted/deployment/render.md",sourceDirName:"self-hosted/deployment",slug:"/self-hosted/deployment/render",permalink:"/zh-Hans/docs/self-hosted/deployment/render",draft:!1,editUrl:"https://github.com/tryzealot/docs/tree/main/docs/self-hosted/deployment/render.md",tags:[],version:"current",frontMatter:{sidebar_label:"Render"},sidebar:"selfHosted",previous:{title:"Cloud Provider Guides",permalink:"/zh-Hans/docs/category/cloud-provider-guides"},next:{title:"Fly",permalink:"/zh-Hans/docs/self-hosted/deployment/fly"}},d={},i=[{value:"\u6a21\u677f",id:"\u6a21\u677f",level:2},{value:"\u4e00\u952e\u5b89\u88c5",id:"\u4e00\u952e\u5b89\u88c5",level:2}],c={toc:i};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u90e8\u7f72-zealot-\u5230-render-\u6307\u5357"},"\u90e8\u7f72 Zealot \u5230 Render \u6307\u5357"),(0,o.kt)("p",null,"Zealot \u63d0\u4f9b ",(0,o.kt)("a",{parentName:"p",href:"https://render.com/"},"render.com")," \u5b98\u65b9 blueprint \u6a21\u677f ",(0,o.kt)("inlineCode",{parentName:"p"},"render.yaml")," \u7528\u4e8e\u4e00\u952e\u90e8\u7f72\u672c\u670d\u52a1\u3002"),(0,o.kt)("h2",{id:"\u6a21\u677f"},"\u6a21\u677f"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"li",href:"https://ghcr.io/tryzealot/zealot"},"Zealot Docker \u955c\u50cf"),"\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"li",href:"https://render.com/docs/disks"},"Render Disks")," \u4f5c\u4e3a\u4e0a\u4f20\u5e94\u7528\u548c\u8c03\u8bd5\u6587\u4ef6\u7684\u6301\u4e45\u5316\u5b58\u50a8\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"li",href:"https://render.com/docs/databases"},"PostgreSQL")," \u4f5c\u4e3a\u6570\u636e\u5e93\u4ee5\u53ca ",(0,o.kt)("a",{parentName:"li",href:"https://render.com/docs/redis"},"Redis")," \u4f5c\u4e3a\u6570\u636e\u7f13\u5b58\u3002")),(0,o.kt)("h2",{id:"\u4e00\u952e\u5b89\u88c5"},"\u4e00\u952e\u5b89\u88c5"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://render.com/deploy?repo=https://github.com/tryzealot/zealot"},(0,o.kt)("img",{parentName:"a",src:"https://render.com/images/deploy-to-render-button.svg",alt:"\u90e8\u7f72\u6309\u94ae"}))))}p.isMDXComponent=!0}}]);
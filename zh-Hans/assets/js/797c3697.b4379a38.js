"use strict";(self.webpackChunkzealot_new_docs=self.webpackChunkzealot_new_docs||[]).push([[7053],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=d(a),s=r,c=m["".concat(o,".").concat(s)]||m[s]||k[s]||l;return a?n.createElement(c,p(p({ref:t},u),{},{components:a})):n.createElement(c,p({ref:t},u))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=s;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[m]="string"==typeof e?e:r,p[1]=i;for(var d=2;d<l;d++)p[d]=a[d];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},6745:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=a(7462),r=(a(7294),a(3905));const l={},p="APIs",i={unversionedId:"developer-guide/api",id:"version-5.0.0/developer-guide/api",title:"APIs",description:"Zealot \u63d0\u4f9b\u63d0\u4f9b REST APIs \u63a5\u53e3\u670d\u52a1\u53ef\u7528\u4e8e\u81ea\u5b9a\u4e49\u7684\u67e5\u770b App \u4fe1\u606f\u6216\u8005\u4e0a\u4f20\u3001\u4e0b\u8f7d App\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-5.0.0/developer-guide/api.md",sourceDirName:"developer-guide",slug:"/developer-guide/api",permalink:"/zh-Hans/docs/developer-guide/api",draft:!1,editUrl:"https://github.com/tryzealot/docs/tree/main/versioned_docs/version-5.0.0/developer-guide/api.md",tags:[],version:"5.0.0",frontMatter:{},sidebar:"developerGuide",previous:{title:"zealot_sync_devices",permalink:"/zh-Hans/docs/developer-guide/fastlane/zealot_sync_devices"},next:{title:"\u5e94\u7528",permalink:"/zh-Hans/docs/developer-guide/api/apps"}},o={},d=[{value:"\u63a5\u53e3\u8ba4\u8bc1",id:"authentication",level:2},{value:"\u63a5\u53e3\u7248\u672c",id:"\u63a5\u53e3\u7248\u672c",level:2},{value:"\u63a5\u53e3\u5217\u8868",id:"\u63a5\u53e3\u5217\u8868",level:2},{value:"\u5e94\u7528\u63a5\u53e3",id:"\u5e94\u7528\u63a5\u53e3",level:3},{value:"\u8c03\u8bd5\u6587\u4ef6\u63a5\u53e3",id:"\u8c03\u8bd5\u6587\u4ef6\u63a5\u53e3",level:3}],u={toc:d},m="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"apis"},"APIs"),(0,r.kt)("p",null,"Zealot \u63d0\u4f9b\u63d0\u4f9b REST APIs \u63a5\u53e3\u670d\u52a1\u53ef\u7528\u4e8e\u81ea\u5b9a\u4e49\u7684\u67e5\u770b App \u4fe1\u606f\u6216\u8005\u4e0a\u4f20\u3001\u4e0b\u8f7d App\u3002"),(0,r.kt)("h2",{id:"authentication"},"\u63a5\u53e3\u8ba4\u8bc1"),(0,r.kt)("p",null,"\u63a5\u53e3\u8bf7\u6c42\u76ee\u524d\u4ec5\u652f\u6301 User Token \u7684 query \u8ba4\u8bc1\uff0c\u5728\u767b\u5f55\u7528\u6237\u7684\u8be6\u60c5\u9875\u9762\u6700\u4e0b\u9762 ",(0,r.kt)("inlineCode",{parentName:"p"},"API - \u5bc6\u94a5")," \u627e\u5230\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"example : ",(0,r.kt)("inlineCode",{parentName:"p"},"https://YOUR_ZEALOT_URL/api?token=YOUR_TOKEN"))),(0,r.kt)("h2",{id:"\u63a5\u53e3\u7248\u672c"},"\u63a5\u53e3\u7248\u672c"),(0,r.kt)("p",null,"\u5f53\u524d\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"v1")," \u7248\u672c\uff0c\u63a5\u53e3\u65e0\u9700\u663e\u6027\u4f20\u9012\u7248\u672c\u53c2\u6570\uff0c\u53e6\u5916 GraphGL \u63a5\u53e3\u4e5f\u5728\u9010\u6b65\u5f00\u53d1\u4e2d\u540e\u7eed\u4f1a\u8003\u8651\u4e24\u4e2a\u7248\u672c\u540c\u65f6\u5b58\u5728\u3002"),(0,r.kt)("h2",{id:"\u63a5\u53e3\u5217\u8868"},"\u63a5\u53e3\u5217\u8868"),(0,r.kt)("p",null,"\u76ee\u524d\u53ef\u7528\u7684 API \u63a5\u53e3\u57fa\u672c\u6ee1\u8db3\u6253\u5305\u548c\u4e0b\u8f7d\u6d41\u7a0b\u7684\u8303\u56f4\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E5%BA%94%E7%94%A8"},"\u5e94\u7528")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E8%B0%83%E8%AF%95%E6%96%87%E4%BB%B6"},"\u8c03\u8bd5\u6587\u4ef6"))),(0,r.kt)("h3",{id:"\u5e94\u7528\u63a5\u53e3"},"\u5e94\u7528\u63a5\u53e3"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b9a\u4e49"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5730\u5740"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0a\u4f20\u5e94\u7528"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/apps/upload"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5e94\u7528\u5217\u8868"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/apps"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5e94\u7528\u8be6\u60c5"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/apps/:id"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5e94\u7528\u7248\u672c\u5217\u8868"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/apps/versions"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5e94\u7528\u6700\u65b0\u7248\u672c"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/apps/latest"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u68c0\u67e5\u5f53\u524d\u7248\u672c"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/apps/version_exist"))))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5168\u90e8\u63a5\u53e3 ",(0,r.kt)("a",{parentName:"p",href:"/docs/developer-guide/api/apps"},"api/apps"))),(0,r.kt)("h3",{id:"\u8c03\u8bd5\u6587\u4ef6\u63a5\u53e3"},"\u8c03\u8bd5\u6587\u4ef6\u63a5\u53e3"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5b9a\u4e49"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5730\u5740"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0a\u4f20\u8c03\u8bd5\u6587\u4ef6"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/debug_files/upload"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0b\u8f7d\u8c03\u8bd5\u6587\u4ef6"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/debug_files/download"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u8c03\u8bd5\u6587\u4ef6\u5217\u8868"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/debug_files"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u8c03\u8bd5\u6587\u4ef6\u8be6\u60c5"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/debug_files/:id"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u68c0\u67e5\u8c03\u8bd5\u6587\u4ef6\u662f\u5426\u5b58\u5728"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/debug_files/version_exist"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u66f4\u65b0\u8c03\u8bd5\u6587\u4ef6"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/debug_files/:id"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u5220\u9664\u8c03\u8bd5\u6587\u4ef6"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"/api/debug_files/:id"))))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5168\u90e8\u63a5\u53e3",(0,r.kt)("a",{parentName:"p",href:"/docs/developer-guide/api/debug_files"},"api/debug_files"))))}k.isMDXComponent=!0}}]);
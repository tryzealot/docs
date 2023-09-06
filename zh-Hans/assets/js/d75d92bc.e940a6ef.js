"use strict";(self.webpackChunkzealot_new_docs=self.webpackChunkzealot_new_docs||[]).push([[8450],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,b=p["".concat(s,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(b,l(l({ref:t},c),{},{components:n})):r.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9750:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_label:"\u7f51\u7edc\u94a9\u5b50"},l="\u7f51\u7edc\u94a9\u5b50\uff08WebHook\uff09",i={unversionedId:"user-guide/webhooks",id:"version-5.0.0/user-guide/webhooks",title:"\u7f51\u7edc\u94a9\u5b50\uff08WebHook\uff09",description:"Zealot \u4e3a\u6bcf\u4e2a\u5e94\u7528\u6e20\u9053\u90fd\u63d0\u4f9b\u4e00\u4e2a\u6d88\u606f\u901a\u77e5\u7684\u7f51\u7edc\u94a9\u5b50\uff0c\u7f51\u7edc\u94a9\u5b50\u5b8c\u5168\u53ef\u81ea\u5b9a\u4e49\u7ed3\u6784\u4f53\u53ef\u9002\u7528\u4e8e\u7edd\u5927\u591a\u6570\u7684\u901a\u77e5\u670d\u52a1\uff0c",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-5.0.0/user-guide/webhooks.md",sourceDirName:"user-guide",slug:"/user-guide/webhooks",permalink:"/zh-Hans/docs/user-guide/webhooks",draft:!1,editUrl:"https://github.com/tryzealot/docs/tree/main/versioned_docs/version-5.0.0/user-guide/webhooks.md",tags:[],version:"5.0.0",frontMatter:{sidebar_label:"\u7f51\u7edc\u94a9\u5b50"},sidebar:"userGuide",previous:{title:"\u83b7\u53d6 iOS \u8bbe\u5907 UDID",permalink:"/zh-Hans/docs/user-guide/toolkits/fetch-udid"},next:{title:"Slack",permalink:"/zh-Hans/docs/user-guide/webhooks/slack"}},s={},u=[{value:"\u9ed8\u8ba4\u7ed3\u6784\u4f53",id:"\u9ed8\u8ba4\u7ed3\u6784\u4f53",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u7f51\u7edc\u94a9\u5b50webhook"},"\u7f51\u7edc\u94a9\u5b50\uff08WebHook\uff09"),(0,o.kt)("p",null,"Zealot \u4e3a\u6bcf\u4e2a\u5e94\u7528\u6e20\u9053\u90fd\u63d0\u4f9b\u4e00\u4e2a\u6d88\u606f\u901a\u77e5\u7684\u7f51\u7edc\u94a9\u5b50\uff0c\u7f51\u7edc\u94a9\u5b50\u5b8c\u5168\u53ef\u81ea\u5b9a\u4e49\u7ed3\u6784\u4f53\u53ef\u9002\u7528\u4e8e\u7edd\u5927\u591a\u6570\u7684\u901a\u77e5\u670d\u52a1\uff0c\n\u6bd4\u5982\u4f01\u4e1a\u5fae\u4fe1\u3001\u9489\u9489\u3001Slack \u7b49\u7b49\u3002"),(0,o.kt)("h2",{id:"\u9ed8\u8ba4\u7ed3\u6784\u4f53"},"\u9ed8\u8ba4\u7ed3\u6784\u4f53"),(0,o.kt)("p",null,"\u9ed8\u8ba4\u7ed3\u6784\u4f53\u6bcf\u4e2a\u53c2\u6570\u90fd\u5df2\u53d8\u91cf\u7684\u65b9\u5f0f\u63d0\u4f9b\u5b83\u7684\u503c\uff0c\u6bcf\u4e2a\u53d8\u91cf\u90fd\u4ee5 ",(0,o.kt)("inlineCode",{parentName:"p"},"@")," \u5f00\u5934\uff0c\u5728\u521b\u5efa\u7f51\u7edc\u94a9\u5b50\u5982\u679c\u7559\u7a7a\u81ea\u5b9a\u4e49\u7ed3\u6784\u4f53\u5c31\u4f1a\u4f7f\u7528\u9ed8\u8ba4\u7ed3\u6784\u4f53\uff0c\n\u5982\u4e0b\u5168\u90e8\u63d0\u4f9b\u7684\u53d8\u91cf\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"{\n  event: @event,\n  title: @title,\n  app_name: @name,\n  device_type: @device_type,\n  release_version: @release_version,\n  build_version: @build_version,\n  size: @file_size,\n  changelog: @changelog,\n  install_url: @install_url,\n  icon_url: @icon_url,\n  qrcode_url: @qrcode_url,\n  uploaded_at: @uploaded_at\n}\n")),(0,o.kt)("p",null,"\u8f93\u51fa\u7684\u7ed3\u679c\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "event": "upload_events",\n  "title": "Zealot \u6837\u4f8b iOS \u5185\u6d4b\u7248\u4e0a\u4f20\u4e86 1.0.0 \u7248\u672c",\n  "app_name": "Zealot \u6837\u4f8b iOS \u5185\u6d4b\u7248",\n  "device_type": "iOS",\n  "release_version": "1.0.0",\n  "build_version": "1",\n  "size": "30 MB",\n  "install_url": "https://zealot.test/api/apps/download/12354",\n  "icon_url": "https://zealot.test/api/apps/icon.png",\n  "qrcode_url": "https://zealot.test/api/apps/354/qrcode",\n  "uploaded_at": "2019-12-30 11:33:00",\n  "changelog": "- \u65b0\u589e\u4e86 A \u529f\u80fd\\n- \u4fee\u590d\u4e86 B \u95ee\u9898\\n- \u53d1\u5e03 1.0.0 \u7248\u672c",\n}\n')))}d.isMDXComponent=!0}}]);
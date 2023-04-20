"use strict";(self.webpackChunkzealot_new_docs=self.webpackChunkzealot_new_docs||[]).push([[9014],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,h=p["".concat(s,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},5610:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const a={},i="Webhooks",l={unversionedId:"user-guide/webhooks",id:"version-4.x/user-guide/webhooks",title:"Webhooks",description:"Zealot provides a webhook for message notifications for each application channel.",source:"@site/versioned_docs/version-4.x/user-guide/webhooks.md",sourceDirName:"user-guide",slug:"/user-guide/webhooks",permalink:"/docs/user-guide/webhooks",draft:!1,editUrl:"https://github.com/tryzealot/docs/tree/main/versioned_docs/version-4.x/user-guide/webhooks.md",tags:[],version:"4.x",frontMatter:{},sidebar:"userGuide",previous:{title:"Fetch UDID",permalink:"/docs/user-guide/toolkits/fetch-udid"},next:{title:"Slack",permalink:"/docs/user-guide/webhooks/slack"}},s={},u=[{value:"Payload (default)",id:"payload-default",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"webhooks"},"Webhooks"),(0,o.kt)("p",null,"Zealot provides a webhook for message notifications for each application channel.\nThe webhook is a fully customizable structure that can be used for most notification services, such as Wecom, Dingtalk, Slack, etc."),(0,o.kt)("h2",{id:"payload-default"},"Payload (default)"),(0,o.kt)("p",null,"Each parameter of the default structure has its value provided as a variable,\nand each variable starts with ",(0,o.kt)("inlineCode",{parentName:"p"},"@"),", the default structure will be used if the custom structure is left empty when creating the webhook.\nThe following variables are all provided."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"{\n  event: @event,\n  title: @title,\n  app_name: @name,\n  device_type: @device_type,\n  release_version: @release_version,\n  build_version: @build_version,\n  size: @file_size,\n  changelog: @changelog,\n  install_url: @install_url,\n  icon_url: @icon_url,\n  qrcode_url: @qrcode_url,\n  uploaded_at: @uploaded_at\n}\n")),(0,o.kt)("p",null,"Output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "event": "upload_events",\n  "title": "Zealot upload 1.0.0 version",\n  "app_name": "Zealot",\n  "device_type": "iOS",\n  "release_version": "1.0.0",\n  "build_version": "1",\n  "size": "30 MB",\n  "install_url": "https://zealot.test/api/apps/download/12354",\n  "icon_url": "https://zealot.test/api/apps/icon.png",\n  "qrcode_url": "https://zealot.test/api/apps/354/qrcode",\n  "uploaded_at": "2019-12-30 11:33:00",\n  "changelog": "- Add feture A\\n- Fix issue B\\n- Release v1.0.0",\n}\n')))}d.isMDXComponent=!0}}]);
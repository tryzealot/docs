"use strict";(self.webpackChunkzealot_new_docs=self.webpackChunkzealot_new_docs||[]).push([[2107],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>u});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(r),u=o,f=d["".concat(p,".").concat(u)]||d[u]||y[u]||a;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2511:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>y,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_label:"Railway"},l="Deploy Zealot to Railway guide",i={unversionedId:"self-hosted/deployment/railway",id:"self-hosted/deployment/railway",title:"Deploy Zealot to Railway guide",description:"Zealot support use Dockfile to deploy on Railway.",source:"@site/docs/self-hosted/deployment/railway.md",sourceDirName:"self-hosted/deployment",slug:"/self-hosted/deployment/railway",permalink:"/docs/self-hosted/deployment/railway",draft:!1,editUrl:"https://github.com/tryzealot/docs/tree/main/docs/self-hosted/deployment/railway.md",tags:[],version:"current",frontMatter:{sidebar_label:"Railway"},sidebar:"selfHosted",previous:{title:"Fly",permalink:"/docs/self-hosted/deployment/fly"},next:{title:"Render",permalink:"/docs/self-hosted/deployment/render"}},p={},c=[{value:"Deploying on Railway",id:"deploying-on-railway",level:2}],s={toc:c};function y(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploy-zealot-to-railway-guide"},"Deploy Zealot to Railway guide"),(0,o.kt)("p",null,"Zealot support use ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockfile")," to deploy on ",(0,o.kt)("a",{parentName:"p",href:"https://railway.app/"},"Railway"),"."),(0,o.kt)("h2",{id:"deploying-on-railway"},"Deploying on Railway"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fork ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tryzealot/zealot/fork"},"Zealot")," project to your Github account."),(0,o.kt)("li",{parentName:"ul"},"Create ",(0,o.kt)("a",{parentName:"li",href:"https://railway.app/new"},"New Project"),' with "deploy from Github repo".'),(0,o.kt)("li",{parentName:"ul"},"Add ",(0,o.kt)("a",{parentName:"li",href:"/docs/self-hosted/configuration/environment-variables"},"Enviroment")," to Variables page.")))}y.isMDXComponent=!0}}]);
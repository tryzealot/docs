"use strict";(self.webpackChunkzealot_new_docs=self.webpackChunkzealot_new_docs||[]).push([[5351],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,f=u["".concat(s,".").concat(m)]||u[m]||c[m]||a;return r?n.createElement(f,l(l({ref:t},i),{},{components:r})):n.createElement(f,l({ref:t},i))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=u;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:o,l[1]=d;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8903:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>a,metadata:()=>d,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_label:"Render"},l="Deploy Zealot to Render guide",d={unversionedId:"self-hosted/deployment/render",id:"self-hosted/deployment/render",title:"Deploy Zealot to Render guide",description:"Zealot support a render blueprint named render.yaml to deploy on render.com.",source:"@site/docs/self-hosted/deployment/render.md",sourceDirName:"self-hosted/deployment",slug:"/self-hosted/deployment/render",permalink:"/docs/self-hosted/deployment/render",draft:!1,editUrl:"https://github.com/tryzealot/docs/tree/main/docs/self-hosted/deployment/render.md",tags:[],version:"current",frontMatter:{sidebar_label:"Render"},sidebar:"selfHosted",previous:{title:"Kubernetes",permalink:"/docs/self-hosted/deployment/kubernetes"},next:{title:"Fly",permalink:"/docs/self-hosted/deployment/fly"}},s={},p=[{value:"Deploying on Render",id:"deploying-on-render",level:2},{value:"Install button",id:"install-button",level:3}],i={toc:p};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploy-zealot-to-render-guide"},"Deploy Zealot to Render guide"),(0,o.kt)("p",null,"Zealot support a render blueprint named ",(0,o.kt)("inlineCode",{parentName:"p"},"render.yaml")," to deploy on ",(0,o.kt)("a",{parentName:"p",href:"https://render.com/"},"render.com"),"."),(0,o.kt)("h2",{id:"deploying-on-render"},"Deploying on Render"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It uses the ",(0,o.kt)("a",{parentName:"li",href:"https://ghcr.io/tryzealot/zealot"},"Zealot Docker image"),"."),(0,o.kt)("li",{parentName:"ul"},"It uses ",(0,o.kt)("a",{parentName:"li",href:"https://render.com/docs/disks"},"Render Disks")," for permanent SSD storage for uploaded files and content."),(0,o.kt)("li",{parentName:"ul"},"It uses ",(0,o.kt)("a",{parentName:"li",href:"https://render.com/docs/databases"},"PostgreSQL")," as the backing database and ",(0,o.kt)("a",{parentName:"li",href:"https://render.com/docs/redis"},"Redis")," as cache service.")),(0,o.kt)("h3",{id:"install-button"},"Install button"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://render.com/deploy?repo=https://github.com/tryzealot/zealot"},(0,o.kt)("img",{parentName:"a",src:"https://render.com/images/deploy-to-render-button.svg",alt:"Deploy to Render"}))))}c.isMDXComponent=!0}}]);
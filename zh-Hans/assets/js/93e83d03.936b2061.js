"use strict";(self.webpackChunkzealot_new_docs=self.webpackChunkzealot_new_docs||[]).push([[270],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=s(n),d=l,y=f["".concat(p,".").concat(d)]||f[d]||u[d]||o;return n?r.createElement(y,a(a({ref:t},c),{},{components:n})):r.createElement(y,a({ref:t},c))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:l,a[1]=i;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},4658:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7462),l=(n(7294),n(3905));const o={sidebar_label:"Fly"},a="\u90e8\u7f72 Zealot \u5230 Fly \u6307\u5357",i={unversionedId:"self-hosted/deployment/fly",id:"self-hosted/deployment/fly",title:"\u90e8\u7f72 Zealot \u5230 Fly \u6307\u5357",description:"Zealot \u652f\u6301 fly.io \u5b98\u65b9\u7684\u5e94\u7528\u914d\u7f6e\u683c\u5f0f\uff08fly.toml\uff09\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/self-hosted/deployment/fly.md",sourceDirName:"self-hosted/deployment",slug:"/self-hosted/deployment/fly",permalink:"/zh-Hans/docs/self-hosted/deployment/fly",draft:!1,editUrl:"https://github.com/tryzealot/docs/tree/main/docs/self-hosted/deployment/fly.md",tags:[],version:"current",frontMatter:{sidebar_label:"Fly"},sidebar:"selfHosted",previous:{title:"Render",permalink:"/zh-Hans/docs/self-hosted/deployment/render"},next:{title:"Configuration",permalink:"/zh-Hans/docs/category/configuration"}},p={},s=[{value:"\u5b89\u88c5\u6b65\u9aa4",id:"\u5b89\u88c5\u6b65\u9aa4",level:2},{value:"\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u6587\u4ef6",level:3}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u90e8\u7f72-zealot-\u5230-fly-\u6307\u5357"},"\u90e8\u7f72 Zealot \u5230 Fly \u6307\u5357"),(0,l.kt)("p",null,"Zealot \u652f\u6301 ",(0,l.kt)("a",{parentName:"p",href:"https://fly.io"},"fly.io")," \u5b98\u65b9\u7684\u5e94\u7528\u914d\u7f6e\u683c\u5f0f\uff08fly.toml\uff09\u3002"),(0,l.kt)("h2",{id:"\u5b89\u88c5\u6b65\u9aa4"},"\u5b89\u88c5\u6b65\u9aa4"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u9884\u5148\u5b89\u88c5 ",(0,l.kt)("a",{parentName:"li",href:"https://fly.io/docs/flyctl/"},"flyctl")," \u547d\u4ee4\u884c\u5de5\u5177\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u590d\u5236\u4e0b\u9762",(0,l.kt)("a",{parentName:"li",href:"#app-configuration"},"\u914d\u7f6e\u6587\u4ef6")," \u4fdd\u5b58\u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"fly.toml")," \u6587\u4ef6\u653e\u5728\u9879\u76ee\u6839\u76ee\u5f55\uff0c\u6839\u636e\u521b\u5efa\u7684 fly app \u9879\u76ee\u4fee\u6539 app \u7684\u503c\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"li"},"flyctl deploy")," \u5f00\u59cb\u6784\u5efa\u548c\u90e8\u7f72\u5de5\u4f5c\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"li"},"fly scale vm shared-cpu-1x --memory 512")," \u6765\u8fbe\u5230 Zealot \u53ef\u5141\u8bb8\u7684\u5185\u5b58\u73af\u5883\uff0c\u9ed8\u8ba4\u514d\u8d39\u7684 256M \u5185\u5b58\u5b9e\u9645\u53ea\u6709 205M\uff0cZealot \u8fd0\u884c\u8d77\u6765\u95f2\u7f6e\u72b6\u6001\u4f1a 190M \u5230\u4f1a\u63d0\u793a OOM \u5185\u5b58\u6ea2\u51fa\u3002")),(0,l.kt)("h3",{id:"\u914d\u7f6e\u6587\u4ef6"},"\u914d\u7f6e\u6587\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-toml"},'app = "[app-name:changeme]"\nkill_signal = "SIGINT"\nkill_timeout = 120\nprocesses = []\n\n[build]\n  image = "ghcr.io/tryzealot/zealot:nightly"\n\n[experimental]\n  allowed_public_ports = []\n  auto_rollback = true\n\n[[services]]\n  http_checks = []\n  internal_port = 80\n  processes = ["app"]\n  protocol = "tcp"\n  script_checks = []\n  [services.concurrency]\n    hard_limit = 25\n    soft_limit = 20\n    type = "connections"\n\n  [[services.ports]]\n    force_https = true\n    handlers = ["http"]\n    port = 80\n\n  [[services.ports]]\n    handlers = ["tls", "http"]\n    port = 443\n\n  [[services.tcp_checks]]\n    grace_period = "1s"\n    interval = "15s"\n    restart_limit = 0\n    timeout = "2s"\n\n[[statics]]\n  guest_path = "/app/public"\n  url_prefix = "/"\n')))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkzealot_new_docs=self.webpackChunkzealot_new_docs||[]).push([[2347],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},362:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={},o="\u73af\u5883\u53d8\u91cf",i={unversionedId:"self-hosted/configuration/environment-variables",id:"version-4.x/self-hosted/configuration/environment-variables",title:"\u73af\u5883\u53d8\u91cf",description:".env \u6587\u4ef6",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-4.x/self-hosted/configuration/environment-variables.md",sourceDirName:"self-hosted/configuration",slug:"/self-hosted/configuration/environment-variables",permalink:"/zh-Hans/docs/self-hosted/configuration/environment-variables",draft:!1,editUrl:"https://github.com/tryzealot/docs/tree/main/versioned_docs/version-4.x/self-hosted/configuration/environment-variables.md",tags:[],version:"4.x",frontMatter:{},sidebar:"selfHosted",previous:{title:"Configuration",permalink:"/zh-Hans/docs/category/configuration"},next:{title:"\u7b2c\u4e09\u65b9\u767b\u5f55",permalink:"/zh-Hans/docs/self-hosted/configuration/third-party-authentication"}},s={},p=[{value:".env \u6587\u4ef6",id:"env-\u6587\u4ef6",level:2},{value:"HTTPS \u8bc1\u4e66",id:"https-\u8bc1\u4e66",level:2},{value:"\u914d\u7f6e\u57df\u540d (URL)",id:"\u914d\u7f6e\u57df\u540d-url",level:2},{value:"\u914d\u7f6e\u6570\u636e\u5e93\u548c\u7f13\u5b58",id:"\u914d\u7f6e\u6570\u636e\u5e93\u548c\u7f13\u5b58",level:2},{value:"Postgresql",id:"postgresql",level:3},{value:"Redis",id:"redis",level:3},{value:"\u914d\u7f6e\u7f51\u7ad9\u9ed8\u8ba4\u8bed\u8a00",id:"\u914d\u7f6e\u7f51\u7ad9\u9ed8\u8ba4\u8bed\u8a00",level:2},{value:"\u914d\u7f6e\u7f51\u7ad9\u9ed8\u8ba4\u5916\u89c2",id:"\u914d\u7f6e\u7f51\u7ad9\u9ed8\u8ba4\u5916\u89c2",level:2},{value:"\u914d\u7f6e\u7ba1\u7406\u5458\u8d26\u6237\u548c\u5bc6\u7801",id:"\u914d\u7f6e\u7ba1\u7406\u5458\u8d26\u6237\u548c\u5bc6\u7801",level:2},{value:"\u5f00\u542f\u7528\u6237\u6ce8\u518c",id:"\u5f00\u542f\u7528\u6237\u6ce8\u518c",level:3},{value:"\u5f00\u542f\u6e38\u5ba2\u6a21\u5f0f",id:"\u5f00\u542f\u6e38\u5ba2\u6a21\u5f0f",level:3},{value:"\u90ae\u4ef6\u670d\u52a1",id:"\u90ae\u4ef6\u670d\u52a1",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u73af\u5883\u53d8\u91cf"},"\u73af\u5883\u53d8\u91cf"),(0,r.kt)("h2",{id:"env-\u6587\u4ef6"},".env \u6587\u4ef6"),(0,r.kt)("p",null,"Zealot \u53ef\u901a\u8fc7\u5982\u4e0b\u73af\u5883\u53d8\u91cf\u6216\u4f7f\u7528\u9879\u76ee\u6839\u76ee\u5f55\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," \u6587\u4ef6\u914d\u7f6e\u7cfb\u7edf\u53c2\u6570\uff0c\u901a\u8fc7\u4e0a\u8ff0\u65b9\u5f0f\u66f4\u6539\u540e\u9700\u8981\u91cd\u542f\u670d\u52a1\u624d\u53ef\u751f\u6548\u3002"),(0,r.kt)("h2",{id:"https-\u8bc1\u4e66"},"HTTPS \u8bc1\u4e66"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u56e0\u82f9\u679c\u7684\u786c\u6027\u8981\u6c42\u7ebf\u4e0a\u90e8\u7f72\u548c\u4e0b\u8f7d\u670d\u52a1\u5f3a\u5236 HTTPS"),"\uff0c\u56e0\u6b64\u518d\u90e8\u7f72\u7684\u65f6\u5019\u4e0b\u8f7d\u5e94\u7528\u4f1a\u5f3a\u5236\u8d70 HTTPS \u534f\u8bae\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u90e8\u7f72\u662f\u5355\u53f0\u673a\u5668\u7684\u72ec\u7acb\u670d\u52a1\uff0c\u5efa\u8bae\u5f00\u542f Let's Encrypt \u514d\u8d39 SSL \u8bc1\u4e66\uff0c\u53ea\u9700\u8981\u8bbe\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ZEALOT_CERT_EMAIL=zealot@example.com\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u548c\u4e0b\u9762\u81ea\u7b7e\u540d\u8bc1\u4e66\u6587\u4ef6\u540d\u4e8c\u9009\u4e00\uff0c\u4e0d\u80fd\u540c\u65f6\u8bbe\u7f6e")),(0,r.kt)("p",null,"\u5982\u679c\u90e8\u7f72\u7684\u673a\u5668\u53ea\u80fd\u4f7f\u7528\u81ea\u7b7e\u540d\u8bc1\u4e66\uff0c\u5219\u9700\u8981\u914d\u7f6e\uff0c\u4f46\u9700\u8981\u6ce8\u610f\u7684\u662f iOS \u7684\u4e0b\u8f7d\u9700\u8981\u5728 iOS \u8bbe\u5907\u6388\u6743\u81ea\u7b7e\u540d\u7684\u8bc1\u4e66\u540e\u624d\u5141\u8bb8\u4e0b\u8f7d\u5b89\u88c5\u3002\uff08\u4e0d\u63a8\u8350\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ZEALOT_CERT=zealot.test.pem\nZEALOT_CERT_KEY=zealot.test-key.pem\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u548c Let's Encrypt \u6ce8\u518c\u7535\u5b50\u90ae\u7bb1\u540d\u4e8c\u9009\u4e00\uff0c\u4e0d\u80fd\u540c\u65f6\u8bbe\u7f6e")),(0,r.kt)("h2",{id:"\u914d\u7f6e\u57df\u540d-url"},"\u914d\u7f6e\u57df\u540d (URL)"),(0,r.kt)("p",null,"\u5fc5\u987b\u914d\u7f6e\u5426\u5219\u4e0b\u8f7d\u5e94\u7528\u548c\u4e00\u4e9b\u9759\u6001\u8d44\u6e90\u4f1a\u65e0\u6cd5\u6b63\u786e\u8bbf\u95ee\u5230"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u57df\u540d\u914d\u7f6e\uff0c\u65e0\u9700\u914d\u7f6e http:// \u6216 https://\nZEALOT_DOMAIN=zealot.com\n")),(0,r.kt)("h2",{id:"\u914d\u7f6e\u6570\u636e\u5e93\u548c\u7f13\u5b58"},"\u914d\u7f6e\u6570\u636e\u5e93\u548c\u7f13\u5b58"),(0,r.kt)("p",null,"\u5047\u5982\u4f60\u6709\u53ef\u4ee5\u590d\u7528\u7684 postgresql \u548c redis \u670d\u52a1\u4e5f\u53ef\u4ee5\u81ea\u5b9a\u4e49\u914d\u7f6e\u4f7f\u7528\uff0c\u800c\u65e0\u9700\u4f7f\u7528 docker-compose \u9ed8\u8ba4\u914d\u7f6e\u7684\u670d\u52a1\u3002"),(0,r.kt)("h3",{id:"postgresql"},"Postgresql"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ZEALOT_POSTGRES_HOST=127.0.0.1\nZEALOT_POSTGRES_PORT=5432\nZEALOT_POSTGRES_USERNAME=postgres\nZEALOT_POSTGRES_PASSWORD=ze@l0t\nZEALOT_POSTGRES_DB_NAME=zealot\n")),(0,r.kt)("h3",{id:"redis"},"Redis"),(0,r.kt)("p",null,"\u517c\u5bb9\u5927\u591a\u6570\u4e91\u670d\u52a1\u90e8\u7f72\u91c7\u7528\u7684 URL \u8fde\u63a5\u65b9\u5f0f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"REDIS_URL=redis://user:pass@127.0.0.1:6379/0\n")),(0,r.kt)("h2",{id:"\u914d\u7f6e\u7f51\u7ad9\u9ed8\u8ba4\u8bed\u8a00"},"\u914d\u7f6e\u7f51\u7ad9\u9ed8\u8ba4\u8bed\u8a00"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u8bed\u8a00\u5305"),(0,r.kt)("th",{parentName:"tr",align:null},"\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"zh-CN"),(0,r.kt)("td",{parentName:"tr",align:null},"\u7b80\u4f53\u4e2d\u6587 (\u9ed8\u8ba4)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"en"),(0,r.kt)("td",{parentName:"tr",align:null},"\u82f1\u6587")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"DEFAULT_LOCALE=en\n")),(0,r.kt)("h2",{id:"\u914d\u7f6e\u7f51\u7ad9\u9ed8\u8ba4\u5916\u89c2"},"\u914d\u7f6e\u7f51\u7ad9\u9ed8\u8ba4\u5916\u89c2"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u5916\u89c2"),(0,r.kt)("th",{parentName:"tr",align:null},"\u503c"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"light"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6d45\u8272 (\u9ed8\u8ba4)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dark"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6df1\u8272\uff08\u9ed1\u6697\u6a21\u5f0f\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"auto"),(0,r.kt)("td",{parentName:"tr",align:null},"\u968f\u7cfb\u7edf\u81ea\u52a8")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ZEALOT_APPEARANCE=dark\n")),(0,r.kt)("h2",{id:"\u914d\u7f6e\u7ba1\u7406\u5458\u8d26\u6237\u548c\u5bc6\u7801"},"\u914d\u7f6e\u7ba1\u7406\u5458\u8d26\u6237\u548c\u5bc6\u7801"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u4e0d\u914d\u7f6e\u5982\u4e0b\u4e5f\u4f1a\u751f\u6210\u4e0b\u9762\u7684\u8d26\u6237\u548c\u5bc6\u7801\u4f5c\u4e3a\u7ba1\u7406\u5458\u6743\u9650\u7684\u8d26\u6237\uff0c\u5efa\u8bae\u914d\u7f6e\u540e\u91cd\u65b0\u4fee\u6539\u5bc6\u7801\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ZEALOT_ADMIN_EMAIL=admin@zealot.com\nZEALOT_ADMIN_PASSWORD=ze@l0t\n")),(0,r.kt)("h3",{id:"\u5f00\u542f\u7528\u6237\u6ce8\u518c"},"\u5f00\u542f\u7528\u6237\u6ce8\u518c"),(0,r.kt)("p",null,"\u5173\u95ed\u6ce8\u518c\u4e4b\u540e\uff0c\u7ba1\u7406\u5458\u53ef\u4ee5\u901a\u8fc7\u7ba1\u7406\u9762\u677f\u7684\u7528\u6237\u7ba1\u7406\u624b\u52a8\u6dfb\u52a0\u7528\u6237\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5f00\u542f\u6ce8\u518c\nZEALOT_REGISTER_ENABLED=true\n\n# \u5173\u95ed\u6ce8\u518c\nZEALOT_REGISTER_ENABLED=false\n")),(0,r.kt)("h3",{id:"\u5f00\u542f\u6e38\u5ba2\u6a21\u5f0f"},"\u5f00\u542f\u6e38\u5ba2\u6a21\u5f0f"),(0,r.kt)("p",null,"\u5f00\u542f\u6e38\u5ba2\u6a21\u5f0f\u540e\u5141\u8bb8\u5e94\u7528\u7684\u67e5\u770b\u3001\u4e0b\u8f7d\u548c\u5b89\u88c5\uff0c\u5efa\u8bae\u516c\u53f8\u5185\u90e8\u5bf9\u6743\u9650\u4f9d\u8d56\u4e0d\u9ad8\u7684\u72b6\u51b5\u4f7f\u7528\uff0c\u5177\u4f53\u6743\u9650\u5bf9\u6bd4\u53ef\u4ee5",(0,r.kt)("a",{parentName:"p",href:"/docs/user-guide/administrator/permissions"},"\u770b\u8fd9\u91cc\u67e5\u770b\u8be6\u60c5")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u5f00\u542f\u6e38\u5ba2\u6a21\u5f0f\nZEALOT_GUEST_MODE=true\n\n# \u5173\u95ed\u6e38\u5ba2\u6a21\u5f0f\nZEALOT_GUEST_MODE=false\n")),(0,r.kt)("h2",{id:"\u90ae\u4ef6\u670d\u52a1"},"\u90ae\u4ef6\u670d\u52a1"),(0,r.kt)("p",null,"\u76ee\u524d\u4ec5\u652f\u6301 smtp \u7684\u65b9\u5f0f\u914d\u7f6e\u90ae\u4ef6\u901a\u77e5\u670d\u52a1\uff0c\u90ae\u4ef6\u901a\u77e5\u4e3b\u8981\u5f71\u54cd\u7528\u6237\u6ce8\u518c\u3001\u53d1\u9001\u6fc0\u6d3b\u90ae\u4ef6\u3001\u66f4\u6539\u5bc6\u7801\u670d\u52a1\uff0c\u5982\u679c\u4e0d\u5f00\u542f\u4e5f\u4e0d\u5f71\u54cd\u4f7f\u7528\uff0c\u8d26\u6237\u6fc0\u6d3b\u7684\u94fe\u63a5\u4e5f\u4f1a\u5728\u7528\u6237\u7ba1\u7406\u90a3\u8fb9\u627e\u5230\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# \u53d1\u9001\u90ae\u4ef6\u914d\u7f6e\nSMTP_ADDRESS=smtp.gmail.com\nSMTP_PORT=587\nSMTP_DOMAIN=gmail.com\nSMTP_USERNAME=you@gmail.com\nSMTP_PASSWORD=yourpassword\nSMTP_AUTH_METHOD=plain\nSMTP_ENABLE_STARTTLS_AUTO=true\n\n# \u90ae\u4ef6\u9ed8\u8ba4\u6536\u53d1\u4eba\u914d\u7f6e\nACTION_MAILER_DEFAULT_FROM=you@gmail.com\nACTION_MAILER_DEFAULT_TO=you@gmail.com\n")))}d.isMDXComponent=!0}}]);
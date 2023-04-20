"use strict";(self.webpackChunkzealot_new_docs=self.webpackChunkzealot_new_docs||[]).push([[9882],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>k});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},i=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),d=c(n),u=o,k=d["".concat(s,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(k,l(l({ref:t},i),{},{components:n})):r.createElement(k,l({ref:t},i))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:o,l[1]=p;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7177:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_label:"Docker"},l="Docker \u90e8\u7f72 Zealot \u6307\u5357",p={unversionedId:"self-hosted/deployment/docker",id:"self-hosted/deployment/docker",title:"Docker \u90e8\u7f72 Zealot \u6307\u5357",description:"\u5f3a\u70c8\u5efa\u8bae\u5b89\u88c5\u9996\u9009\u4f7f\u7528 Docker \u5bb9\u5668\u65b9\u5f0f\u5b89\u88c5\u90e8\u7f72 Zealot\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/self-hosted/deployment/docker.md",sourceDirName:"self-hosted/deployment",slug:"/self-hosted/deployment/docker",permalink:"/zh-Hans/docs/next/self-hosted/deployment/docker",draft:!1,editUrl:"https://github.com/tryzealot/docs/tree/main/docs/self-hosted/deployment/docker.md",tags:[],version:"current",frontMatter:{sidebar_label:"Docker"},sidebar:"selfHosted",previous:{title:"\u4f9d\u8d56",permalink:"/zh-Hans/docs/next/self-hosted/deployment/requirements"},next:{title:"\u8be6\u7ec6\u6b65\u9aa4",permalink:"/zh-Hans/docs/next/self-hosted/deployment/docker/step-by-step"}},s={},c=[{value:"\u4e00\u952e\u5b89\u88c5\u811a\u672c",id:"\u4e00\u952e\u5b89\u88c5\u811a\u672c",level:2},{value:"\u914d\u7f6e SSL \u8bc1\u4e66",id:"\u914d\u7f6e-ssl-\u8bc1\u4e66",level:2},{value:"Let&#39;s Encrypt",id:"lets-encrypt",level:3},{value:"\u53cd\u5411\u4ee3\u7406\u6258\u7ba1 SSL \u8bc1\u4e66",id:"\u53cd\u5411\u4ee3\u7406\u6258\u7ba1-ssl-\u8bc1\u4e66",level:3},{value:"\u81ea\u7b7e\u540d SSL \u8bc1\u4e66",id:"\u81ea\u7b7e\u540d-ssl-\u8bc1\u4e66",level:3}],i={toc:c},d="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"docker-\u90e8\u7f72-zealot-\u6307\u5357"},"Docker \u90e8\u7f72 Zealot \u6307\u5357"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\ud83d\udd14 \u5f3a\u70c8\u5efa\u8bae\u5b89\u88c5\u9996\u9009\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://www.docker.io/"},"Docker")," \u5bb9\u5668\u65b9\u5f0f\u5b89\u88c5\u90e8\u7f72 Zealot\u3002\n\u9274\u4e8e iOS \u4f7f\u7528\u4e0b\u8f7d\u670d\u52a1\u4f9d\u8d56\u5f00\u542f SSL/TLS \u8bc1\u4e66\uff0c\u5efa\u8bae\u4f7f\u7528\u7ecf\u8fc7\u6388\u6743\u7684\u8bc1\u4e66\u670d\u52a1\uff0c\u6bd4\u5982 ",(0,o.kt)("a",{parentName:"p",href:"https://letsencrypt.org/"},"Let's Encrypt"),"\uff0c\n\u5982\u679c\u4f7f\u7528\u81ea\u7b7e\u540d\u8bc1\u4e66\u9700\u8981\u6bcf\u4e2a iOS \u8bbe\u5907\u5728\u4e0b\u8f7d\u5b89\u88c5\u5e94\u7528\u524d",(0,o.kt)("a",{parentName:"p",href:"https://support.apple.com/zh-cn/HT204477"},"\u5fc5\u987b\u5b89\u88c5\u81ea\u7b7e\u540d\u8bc1\u4e66"),"\u624d\u884c\u3002")),(0,o.kt)("h2",{id:"\u4e00\u952e\u5b89\u88c5\u811a\u672c"},"\u4e00\u952e\u5b89\u88c5\u811a\u672c"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5bf9\u4e8e\u4e00\u952e\u5b89\u88c5\u90e8\u7f72\u811a\u672c\u611f\u5174\u8da3\u7684\u53ef\u4ee5\u67e5\u770b ",(0,o.kt)("a",{parentName:"p",href:"/docs/self-hosted/deployment/docker/step-by-step"},"Docker \u624b\u628a\u624b\u90e8\u7f72\u6587\u6863"),"\u3002")),(0,o.kt)("p",null,"\u672c\u7740\u4e00\u952e\u5b89\u88c5\u7684\u539f\u5219\uff0c\u53ef\u662f\u73b0\u5b9e\u5f80\u5f80\u662f\u6b8b\u9177\u7684\uff0cZealot \u914d\u7f6e\u90fd\u662f\u4f9d\u6258\u4e8e ENV \u73af\u5883\u53d8\u91cf\uff0c\u9700\u8981\u914d\u7f6e\u597d\u4e4b\u540e\u518d\u6267\u884c\u4e00\u952e\u90e8\u7f72\u751f\u6210\u811a\u672c\u3002\n\u9996\u5148\u9700\u8981\u514b\u9686",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tryzealot/zealot-docker.git"},"\u5b98\u65b9 Zealot \u90e8\u7f72\u5de5\u5177"),"\uff0c\u8fdb\u5165 ",(0,o.kt)("inlineCode",{parentName:"p"},"zealot-docker"),"\n\u76ee\u5f55\u540e\u9700\u8981\u6253\u5f00 ",(0,o.kt)("inlineCode",{parentName:"p"},"example.env")," \u6587\u4ef6\u914d\u7f6e\u5fc5\u8981\u7684\u53c2\u6570\u540e\u53ef\u76f4\u63a5\u6267\u884c ",(0,o.kt)("inlineCode",{parentName:"p"},"./deploy.sh")," \u811a\u672c\uff1a"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"\u9ed8\u8ba4\u4f1a\u751f\u6210\u7ba1\u7406\u5458\u8d26\u53f7\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"admin@zealot.com")," \u548c\u5bc6\u7801 ",(0,o.kt)("inlineCode",{parentName:"p"},"ze@l0t")," \u548c\u4e00\u4e9b\u6f14\u793a\u5e94\u7528\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone https://github.com/tryzealot/zealot-docker.git\n$ cd zealot-docker\n$ ./deploy\n")),(0,o.kt)("p",null,"\u4e00\u952e\u90e8\u7f72\u751f\u6210\u811a\u672c\u9ed8\u8ba4\u5185\u7f6e\u4e86\u4e0b\u9762\u4e09\u79cd\u6a21\u677f\u914d\u7f6e SSL \u8bc1\u4e66\uff1a"),(0,o.kt)("h2",{id:"\u914d\u7f6e-ssl-\u8bc1\u4e66"},"\u914d\u7f6e SSL \u8bc1\u4e66"),(0,o.kt)("h3",{id:"lets-encrypt"},"Let's Encrypt"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"\u514d\u8d39\u4e14\u81ea\u52a8\u7eed\u7b7e SSL \u8bc1\u4e66\uff0c\u65b0\u624b\u4f7f\u7528\u7684\u6700\u4f73\u9009\u62e9"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7b2c\u4e00\u6b65"),"\uff1a\u6267\u884c\u90e8\u7f72\u811a\u672c:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ ./deploy\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7b2c\u4e8c\u6b65"),"\uff1a\u68c0\u67e5\u548c\u914d\u7f6e ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," \u6587\u4ef6\uff0c\u4e3b\u8981\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"ZEALOT_DOMAIN")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"ZEALOT_CERT_EMAIL")," \u662f\u5426\u586b\u5199\u6b63\u786e\uff0c\n\u5176\u4ed6\u90e8\u5206\u53ef\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u505a\u5bf9\u5e94\u7684\u914d\u7f6e\u8c03\u6574"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7b2c\u4e09\u6b65"),"\uff1a\u8fd0\u884c Zealot \u670d\u52a1:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker-compose up -d\n")),(0,o.kt)("h3",{id:"\u53cd\u5411\u4ee3\u7406\u6258\u7ba1-ssl-\u8bc1\u4e66"},"\u53cd\u5411\u4ee3\u7406\u6258\u7ba1 SSL \u8bc1\u4e66"),(0,o.kt)("p",null,"\u914d\u7f6e\u8bf4\u660e\u8fc1\u79fb\u503c",(0,o.kt)("a",{parentName:"p",href:"/docs/self-hosted/deployment/reverse-proxies"},"\u53cd\u5411\u4ee3\u7406\u6307\u5357"),"\uff0c\u91cc\u9762\u5305\u542b\u4e86\u66f4\u591a\u7684\u670d\u52a1\u914d\u7f6e\u3002"),(0,o.kt)("h3",{id:"\u81ea\u7b7e\u540d-ssl-\u8bc1\u4e66"},"\u81ea\u7b7e\u540d SSL \u8bc1\u4e66"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"\u5728\u6761\u4ef6\u6ee1\u8db3\u5176\u4ed6\u60c5\u51b5\u4e0b\u7edd\u5bf9\u4e0d\u63a8\u8350\u6b64\u65b9\u6848\uff0ciOS \u8bbe\u5907\u5bf9\u4f7f\u7528\u81ea\u7b7e\u540d\u8bc1\u4e66\u7684\u4efb\u4f55 Web \u670d\u52a1",(0,o.kt)("strong",{parentName:"p"},"\u5fc5\u987b\u5728\u5176\u8bbe\u5907\u4e0a\u624b\u52a8\u5b89\u88c5\u81ea\u7b7e\u540d\u8bc1\u4e66\u540e\u624d\u80fd\u6b63\u5e38\u5b89\u88c5\u5e94\u7528"),"\u3002")),(0,o.kt)("p",null,"\u5982\u679c\u57df\u540d\u662f\u975e\u6ce8\u518c\u57df\u540d\u5219\u9700\u8981\u7ed1 host \u624d\u53ef\u4ee5\u8bbf\u95ee\uff0c\u901a\u5e38\u662f\u4fee\u6539\u7cfb\u7edf\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/hosts")," \u6587\u4ef6\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ sudo vim /etc/hosts\n\n127.0.0.1 zealot.test\n")))}m.isMDXComponent=!0}}]);
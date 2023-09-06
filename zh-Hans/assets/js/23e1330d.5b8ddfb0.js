"use strict";(self.webpackChunkzealot_new_docs=self.webpackChunkzealot_new_docs||[]).push([[3032],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,k=c["".concat(i,".").concat(m)]||c[m]||d[m]||l;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8950:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={},o="\u7591\u60d1\u89e3\u7b54",s={unversionedId:"user-guide/qa",id:"version-5.0.0/user-guide/qa",title:"\u7591\u60d1\u89e3\u7b54",description:"\u4e0b\u9762\u4f1a\u5217\u51fa\u6765\u4e00\u4e9b\u9047\u5230\u7684\u95ee\u9898\u5e76\u6c47\u603b\u63d0\u4f9b\u7ed9\u5927\u5bb6\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-5.0.0/user-guide/qa.md",sourceDirName:"user-guide",slug:"/user-guide/qa",permalink:"/zh-Hans/docs/user-guide/qa",draft:!1,editUrl:"https://github.com/tryzealot/docs/tree/main/versioned_docs/version-5.0.0/user-guide/qa.md",tags:[],version:"5.0.0",frontMatter:{},sidebar:"userGuide",previous:{title:"\u53d8\u66f4\u65e5\u5fd7",permalink:"/zh-Hans/docs/user-guide/changelog"},next:{title:"Credits",permalink:"/zh-Hans/docs/user-guide/credits"}},i={},p=[{value:"\u4e3a\u4ec0\u4e48\u4e0d\u80fd\u4f7f\u7528 HTTP \u90e8\u7f72\u670d\u52a1",id:"\u4e3a\u4ec0\u4e48\u4e0d\u80fd\u4f7f\u7528-http-\u90e8\u7f72\u670d\u52a1",level:2},{value:"\u4f7f\u7528\u81ea\u7b7e\u540d\u7684\u8bc1\u4e66\u65e0\u6cd5\u5b89\u88c5 iOS \u5e94\u7528",id:"\u4f7f\u7528\u81ea\u7b7e\u540d\u7684\u8bc1\u4e66\u65e0\u6cd5\u5b89\u88c5-ios-\u5e94\u7528",level:2},{value:"\u4f7f\u7528\u8d1f\u8f7d\u5747\u8861\u90e8\u7f72\u670d\u52a1\uff0c\u4e0b\u8f7d\u603b\u4f1a\u4ece https \u53d8\u6210 http",id:"\u4f7f\u7528\u8d1f\u8f7d\u5747\u8861\u90e8\u7f72\u670d\u52a1\u4e0b\u8f7d\u603b\u4f1a\u4ece-https-\u53d8\u6210-http",level:2},{value:"\u662f\u5426\u652f\u6301\u5916\u90e8 redis\u3001postgresql \u94fe\u63a5",id:"\u662f\u5426\u652f\u6301\u5916\u90e8-redispostgresql-\u94fe\u63a5",level:2},{value:"\u662f\u5426\u652f\u6301 Kubernetes\uff08k8s\uff09\u90e8\u7f72",id:"\u662f\u5426\u652f\u6301-kubernetesk8s\u90e8\u7f72",level:2},{value:"\u662f\u5426\u63d0\u4f9b\u7c7b\u4f3c FIR\u3001\u84b2\u516c\u82f1\u670d\u52a1\u7684\u5e94\u7528\u7684\u5206\u4eab\u9875\u9762",id:"\u662f\u5426\u63d0\u4f9b\u7c7b\u4f3c-fir\u84b2\u516c\u82f1\u670d\u52a1\u7684\u5e94\u7528\u7684\u5206\u4eab\u9875\u9762",level:2},{value:"\u670d\u52a1\u8fd0\u884c\u4e00\u6bb5\u65f6\u95f4 CPU \u6216\u5185\u5b58\u8d44\u6e90\u66b4\u6da8\u4e0d\u4e0b\uff0c\u5982\u4f55\u89e3\u51b3\uff1f",id:"\u670d\u52a1\u8fd0\u884c\u4e00\u6bb5\u65f6\u95f4-cpu-\u6216\u5185\u5b58\u8d44\u6e90\u66b4\u6da8\u4e0d\u4e0b\u5982\u4f55\u89e3\u51b3",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u7591\u60d1\u89e3\u7b54"},"\u7591\u60d1\u89e3\u7b54"),(0,a.kt)("p",null,"\u4e0b\u9762\u4f1a\u5217\u51fa\u6765\u4e00\u4e9b\u9047\u5230\u7684\u95ee\u9898\u5e76\u6c47\u603b\u63d0\u4f9b\u7ed9\u5927\u5bb6\u3002"),(0,a.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u4e0d\u80fd\u4f7f\u7528-http-\u90e8\u7f72\u670d\u52a1"},"\u4e3a\u4ec0\u4e48\u4e0d\u80fd\u4f7f\u7528 HTTP \u90e8\u7f72\u670d\u52a1"),(0,a.kt)("p",null,"\u9274\u4e8e iOS \u4f7f\u7528\u4e0b\u8f7d\u670d\u52a1\u4f9d\u8d56\u5f00\u542f SSL/TLS \u8bc1\u4e66\uff0c\u5efa\u8bae\u4f7f\u7528\u7ecf\u8fc7\u6388\u6743\u7684\u8bc1\u4e66\u670d\u52a1\uff0c\u5982\u679c\u670d\u52a1\u4e0d\u9700\u8981\u63d0\u4f9b iOS\u3001macOS \u7684\u5b89\u88c5\u670d\u52a1\u53ef\u4ee5\u8003\u8651\u4f7f\u7528 HTTPS \u90e8\u7f72\u670d\u52a1\uff0c\n\u8fd9\u91cc\u63a8\u8350\u4f7f\u7528\u514d\u8d39 ",(0,a.kt)("a",{parentName:"p",href:"https://letsencrypt.org/"},"Let's Encrypt")," \u63d0\u4f9b SSL \u8bc1\u4e66\u670d\u52a1\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528\u81ea\u7b7e\u540d\u7684\u8bc1\u4e66\u65e0\u6cd5\u5b89\u88c5-ios-\u5e94\u7528"},"\u4f7f\u7528\u81ea\u7b7e\u540d\u7684\u8bc1\u4e66\u65e0\u6cd5\u5b89\u88c5 iOS \u5e94\u7528"),(0,a.kt)("p",null,"\u5982\u679c\u4f7f\u7528\u81ea\u7b7e\u540d\u8bc1\u4e66\u9700\u8981\u6bcf\u4e2a iOS \u8bbe\u5907\u5728\u4e0b\u8f7d\u5b89\u88c5\u5e94\u7528\u524d\u5fc5\u987b\u5b89\u88c5\u81ea\u7b7e\u540d\u8bc1\u4e66\u624d\u884c\uff0c\u6bcf\u4e2a\u8bbe\u5907\u90fd\u9700\u8981\u8fdb\u884c\u5b89\u88c5\uff0c\u64cd\u4f5c\u6bd4\u8f83\u590d\u6742\u5728\u6709\u514d\u8d39 SSL \u8bc1\u4e66\u670d\u52a1\u7684\u60c5\u51b5\u4e0b\u4e0d\u5230\u903c\u4e0d\u5f97\u5df2\u4e0d\u5efa\u8bae\u4f7f\u7528\u81ea\u7b7e\u540d\u8bc1\u4e66\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528\u8d1f\u8f7d\u5747\u8861\u90e8\u7f72\u670d\u52a1\u4e0b\u8f7d\u603b\u4f1a\u4ece-https-\u53d8\u6210-http"},"\u4f7f\u7528\u8d1f\u8f7d\u5747\u8861\u90e8\u7f72\u670d\u52a1\uff0c\u4e0b\u8f7d\u603b\u4f1a\u4ece https \u53d8\u6210 http"),(0,a.kt)("p",null,"\u8d1f\u8f7d\u5747\u8861\u5728\u63d0\u4f9b\u670d\u52a1\u7684\u65f6\u5019\u4f1a\u5728\u6700\u524d\u7aef\u90e8\u7f72 https \u670d\u52a1\uff0c\u5185\u90e8\u7684\u5206\u53d1\u5b9e\u9645\u4e0a\u8fd8\u662f\u8d70\u7684 http\uff0c\u89e3\u51b3\u529e\u6cd5\u5728\u8d1f\u8f7d\u5747\u8861\u4e0a\u628a\u8f6c\u53d1\u7684\u534f\u8bae\u5934\u4ece http \u6539\u6210 https\uff0c\u8fd9\u6837\u670d\u52a1\u518d\u8f6c\u53d1\u7684\u65f6\u5019\u5c31\u4f1a\u7ee7\u627f\u6700\u524d\u7aef\u7684\u534f\u8bae\u5934\uff08",(0,a.kt)("inlineCode",{parentName:"p"},"X-Forwarded-Proto"),"\uff09\u3002"),(0,a.kt)("h2",{id:"\u662f\u5426\u652f\u6301\u5916\u90e8-redispostgresql-\u94fe\u63a5"},"\u662f\u5426\u652f\u6301\u5916\u90e8 redis\u3001postgresql \u94fe\u63a5"),(0,a.kt)("p",null,"\u652f\u6301\u7684\uff0c\u5982\u679c\u6709\u516c\u7528\u7684 redis\u3001postgresql \u670d\u52a1\u5668\u90a3\u5c31\u53ef\u4ee5\u5355\u72ec\u90e8\u7f72 zealot \u670d\u52a1\uff0c\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," \u914d\u7f6e\u6216 Docker\u3001K8s \u7684\u73af\u5883\u53d8\u91cf\u624b\u52a8\u6307\u5b9a\u5982\u4e0b\u914d\u7f6e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Redis\nREDIS_URL=redis://127.0.0.1:6379/0\n\n# Postgresl\nZEALOT_POSTGRES_HOST=127.0.0.1\nZEALOT_POSTGRES_PORT=5432\nZEALOT_POSTGRES_USERNAME=postgres\nZEALOT_POSTGRES_PASSWORD=ze@l0t\nZEALOT_POSTGRES_DB_NAME=zealot\n")),(0,a.kt)("h2",{id:"\u662f\u5426\u652f\u6301-kubernetesk8s\u90e8\u7f72"},"\u662f\u5426\u652f\u6301 Kubernetes\uff08k8s\uff09\u90e8\u7f72"),(0,a.kt)("p",null,"\u670d\u52a1\u662f\u652f\u6301 K8S \u7684\u5355\u673a\u90e8\u7f72\u4f46\u4e0d\u652f\u6301\u4f38\u7f29\u7279\u6027\uff0c\u5177\u4f53\u539f\u56e0\u662f\u56e0\u4e3a\u5e94\u7528\u4e0a\u4f20\u4f7f\u7528\u7684\u662f\u5bb9\u5668\u5185\u7684\u672c\u5730\u5b58\u50a8\u6ca1\u6709\u652f\u6301\u4e9a\u9a6c\u900a S3 \u6216\u963f\u91cc\u4e91\u7b2c\u4e09\u65b9\u4e91\u5b58\u50a8\u7684\u652f\u6301\u3002"),(0,a.kt)("h2",{id:"\u662f\u5426\u63d0\u4f9b\u7c7b\u4f3c-fir\u84b2\u516c\u82f1\u670d\u52a1\u7684\u5e94\u7528\u7684\u5206\u4eab\u9875\u9762"},"\u662f\u5426\u63d0\u4f9b\u7c7b\u4f3c FIR\u3001\u84b2\u516c\u82f1\u670d\u52a1\u7684\u5e94\u7528\u7684\u5206\u4eab\u9875\u9762"),(0,a.kt)("p",null,"\u670d\u52a1\u63d0\u4f9b\u4e24\u79cd\u9875\u9762\u5730\u5740\uff1a"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1 \u5e94\u7528\u6e20\u9053\u8be6\u60c5\u9875")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"https://YOUR_ZEALOT_URL/channels/SLUG")),(0,a.kt)("p",null,"\u5176\u5b9e ",(0,a.kt)("inlineCode",{parentName:"p"},"YOUR_ZEALOT_URL")," \u662f zealot \u670d\u52a1\u5730\u5740\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"SLUG")," \u662f\u4f60\u5bf9\u5e94\u5e94\u7528\u6e20\u9053\u7684\u552f\u4e00\u5730\u5740\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2 \u4e0a\u4f20\u7684\u7248\u672c\u8be6\u60c5\u9875")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"https://YOUR_ZEALOT_URL/channels/SLUG/releases/ID")),(0,a.kt)("p",null,"\u5176\u5b9e ",(0,a.kt)("inlineCode",{parentName:"p"},"YOUR_ZEALOT_URL")," \u662f zealot \u670d\u52a1\u5730\u5740\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"SLUG")," \u662f\u4f60\u5bf9\u5e94\u5e94\u7528\u6e20\u9053\u7684\u552f\u4e00\u5730\u5740\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"ID")," \u662f\u4e0a\u4f20\u7684\u7248\u672c ID\uff0c\u4e3a\u7a7a\u7684\u65f6\u5019\u4f1a\u81ea\u52a8\u8c03\u6574\u5230\u6700\u65b0\u7248\u672c\uff0c\u6240\u4ee5\u53ef\u4ee5\u76f4\u63a5\u5206\u4eab"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"https://YOUR_ZEALOT_URL/channels/SLUG/releases")),(0,a.kt)("h2",{id:"\u670d\u52a1\u8fd0\u884c\u4e00\u6bb5\u65f6\u95f4-cpu-\u6216\u5185\u5b58\u8d44\u6e90\u66b4\u6da8\u4e0d\u4e0b\u5982\u4f55\u89e3\u51b3"},"\u670d\u52a1\u8fd0\u884c\u4e00\u6bb5\u65f6\u95f4 CPU \u6216\u5185\u5b58\u8d44\u6e90\u66b4\u6da8\u4e0d\u4e0b\uff0c\u5982\u4f55\u89e3\u51b3\uff1f"),(0,a.kt)("p",null,"\u6839\u636e\u7528\u6237 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Cleam"},"Cleam")," \u7684",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tryzealot/zealot/issues/768#issuecomment-1161097162"},"\u53cd\u9988"),"\u90e8\u7f72\u670d\u52a1\u4e4b\u540e\uff0c\u6258\u7ba1\u7684\u5e94\u7528\u5f88\u5c11\uff0c\u4e0a\u4f20\u9891\u7387\u4e0d\u9ad8\uff0c\u670d\u52a1\u5668\u786c\u4ef6\u89c4\u683c\u4e5f\u5b8c\u5168\u8fbe\u6807\u7684\u60c5\u51b5\u4e0b\u8fd8\u662f\u4f1a\u5f15\u53d1 CPU \u6216\u5185\u5b58\u8d44\u6e90\u66b4\u6da8\u9020\u6210\u670d\u52a1\u5668\u5361\u6b7b\uff0c\n\u5f53\u524d\u7684\u60c5\u51b5\u5c5e\u4e8e\u8fd8\u5c5e\u4e8e\u4e2a\u4eba\u60c5\u51b5\uff0c\u76ee\u524d\u60c5\u51b5\u672a\u77e5\uff0c\u4f46\u53ef\u4ee5\u901a\u8fc7\u9650\u5236 CPU \u548c\u5185\u5b58\u6765\u89c4\u907f\u8fd9\u4e2a\u95ee\u9898\uff0c\u7f16\u8f91 ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," \u6587\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"zealot:\n  <<: *defaults\n+  deploy:\n+    resources:\n+      limits:\n+        cpus: 2.0\n+        memory: 2G\n+      reservations:\n+        cpus: 0.5\n+        memory: 256M\n")))}d.isMDXComponent=!0}}]);
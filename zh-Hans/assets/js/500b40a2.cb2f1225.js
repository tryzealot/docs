"use strict";(self.webpackChunkzealot_new_docs=self.webpackChunkzealot_new_docs||[]).push([[6735],{442:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>a});var l=s(5893),r=s(1151);const i={},d="\u73af\u5883\u53d8\u91cf",t={id:"self-hosted/configuration/environment-variables",title:"\u73af\u5883\u53d8\u91cf",description:".env \u6587\u4ef6",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-5.0.0/self-hosted/configuration/environment-variables.md",sourceDirName:"self-hosted/configuration",slug:"/self-hosted/configuration/environment-variables",permalink:"/zh-Hans/docs/5.0.0/self-hosted/configuration/environment-variables",draft:!1,unlisted:!1,editUrl:"https://github.com/tryzealot/docs/tree/main/versioned_docs/version-5.0.0/self-hosted/configuration/environment-variables.md",tags:[],version:"5.0.0",frontMatter:{},sidebar:"selfHosted",previous:{title:"Configuration",permalink:"/zh-Hans/docs/5.0.0/category/configuration"},next:{title:"\u7b2c\u4e09\u65b9\u767b\u5f55",permalink:"/zh-Hans/docs/5.0.0/self-hosted/configuration/third-party-authentication"}},c={},a=[{value:".env \u6587\u4ef6",id:"env-\u6587\u4ef6",level:2},{value:"HTTPS \u8bc1\u4e66",id:"https-\u8bc1\u4e66",level:2},{value:"\u914d\u7f6e\u57df\u540d (URL)",id:"\u914d\u7f6e\u57df\u540d-url",level:2},{value:"\u914d\u7f6e\u6570\u636e\u5e93\u548c\u7f13\u5b58",id:"\u914d\u7f6e\u6570\u636e\u5e93\u548c\u7f13\u5b58",level:2},{value:"Postgresql",id:"postgresql",level:3},{value:"Redis",id:"redis",level:3},{value:"\u914d\u7f6e\u7f51\u7ad9\u9ed8\u8ba4\u8bed\u8a00",id:"\u914d\u7f6e\u7f51\u7ad9\u9ed8\u8ba4\u8bed\u8a00",level:2},{value:"\u914d\u7f6e\u7f51\u7ad9\u9ed8\u8ba4\u5916\u89c2",id:"\u914d\u7f6e\u7f51\u7ad9\u9ed8\u8ba4\u5916\u89c2",level:2},{value:"\u914d\u7f6e\u7ba1\u7406\u5458\u8d26\u6237\u548c\u5bc6\u7801",id:"\u914d\u7f6e\u7ba1\u7406\u5458\u8d26\u6237\u548c\u5bc6\u7801",level:2},{value:"\u5f00\u542f\u7528\u6237\u6ce8\u518c",id:"\u5f00\u542f\u7528\u6237\u6ce8\u518c",level:3},{value:"\u5f00\u542f\u6e38\u5ba2\u6a21\u5f0f",id:"\u5f00\u542f\u6e38\u5ba2\u6a21\u5f0f",level:3},{value:"\u90ae\u4ef6\u670d\u52a1",id:"\u90ae\u4ef6\u670d\u52a1",level:2}];function o(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"\u73af\u5883\u53d8\u91cf",children:"\u73af\u5883\u53d8\u91cf"}),"\n",(0,l.jsx)(n.h2,{id:"env-\u6587\u4ef6",children:".env \u6587\u4ef6"}),"\n",(0,l.jsxs)(n.p,{children:["Zealot \u53ef\u901a\u8fc7\u5982\u4e0b\u73af\u5883\u53d8\u91cf\u6216\u4f7f\u7528\u9879\u76ee\u6839\u76ee\u5f55\u7684 ",(0,l.jsx)(n.code,{children:".env"})," \u6587\u4ef6\u914d\u7f6e\u7cfb\u7edf\u53c2\u6570\uff0c\u901a\u8fc7\u4e0a\u8ff0\u65b9\u5f0f\u66f4\u6539\u540e\u9700\u8981\u91cd\u542f\u670d\u52a1\u624d\u53ef\u751f\u6548\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"https-\u8bc1\u4e66",children:"HTTPS \u8bc1\u4e66"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"\u56e0\u82f9\u679c\u7684\u786c\u6027\u8981\u6c42\u7ebf\u4e0a\u90e8\u7f72\u548c\u4e0b\u8f7d\u670d\u52a1\u5f3a\u5236 HTTPS"}),"\uff0c\u56e0\u6b64\u518d\u90e8\u7f72\u7684\u65f6\u5019\u4e0b\u8f7d\u5e94\u7528\u4f1a\u5f3a\u5236\u8d70 HTTPS \u534f\u8bae\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u5982\u679c\u90e8\u7f72\u662f\u5355\u53f0\u673a\u5668\u7684\u72ec\u7acb\u670d\u52a1\uff0c\u5efa\u8bae\u5f00\u542f Let's Encrypt \u514d\u8d39 SSL \u8bc1\u4e66\uff0c\u53ea\u9700\u8981\u8bbe\u7f6e"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"ZEALOT_CERT_EMAIL=zealot@example.com\n"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u548c\u4e0b\u9762\u81ea\u7b7e\u540d\u8bc1\u4e66\u6587\u4ef6\u540d\u4e8c\u9009\u4e00\uff0c\u4e0d\u80fd\u540c\u65f6\u8bbe\u7f6e"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u5982\u679c\u90e8\u7f72\u7684\u673a\u5668\u53ea\u80fd\u4f7f\u7528\u81ea\u7b7e\u540d\u8bc1\u4e66\uff0c\u5219\u9700\u8981\u914d\u7f6e\uff0c\u4f46\u9700\u8981\u6ce8\u610f\u7684\u662f iOS \u7684\u4e0b\u8f7d\u9700\u8981\u5728 iOS \u8bbe\u5907\u6388\u6743\u81ea\u7b7e\u540d\u7684\u8bc1\u4e66\u540e\u624d\u5141\u8bb8\u4e0b\u8f7d\u5b89\u88c5\u3002\uff08\u4e0d\u63a8\u8350\uff09"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"ZEALOT_CERT=zealot.test.pem\nZEALOT_CERT_KEY=zealot.test-key.pem\n"})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:"\u548c Let's Encrypt \u6ce8\u518c\u7535\u5b50\u90ae\u7bb1\u540d\u4e8c\u9009\u4e00\uff0c\u4e0d\u80fd\u540c\u65f6\u8bbe\u7f6e"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"\u914d\u7f6e\u57df\u540d-url",children:"\u914d\u7f6e\u57df\u540d (URL)"}),"\n",(0,l.jsx)(n.p,{children:"\u5fc5\u987b\u914d\u7f6e\u5426\u5219\u4e0b\u8f7d\u5e94\u7528\u548c\u4e00\u4e9b\u9759\u6001\u8d44\u6e90\u4f1a\u65e0\u6cd5\u6b63\u786e\u8bbf\u95ee\u5230"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"# \u57df\u540d\u914d\u7f6e\uff0c\u65e0\u9700\u914d\u7f6e http:// \u6216 https://\nZEALOT_DOMAIN=zealot.com\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u914d\u7f6e\u6570\u636e\u5e93\u548c\u7f13\u5b58",children:"\u914d\u7f6e\u6570\u636e\u5e93\u548c\u7f13\u5b58"}),"\n",(0,l.jsx)(n.p,{children:"\u5047\u5982\u4f60\u6709\u53ef\u4ee5\u590d\u7528\u7684 postgresql \u548c redis \u670d\u52a1\u4e5f\u53ef\u4ee5\u81ea\u5b9a\u4e49\u914d\u7f6e\u4f7f\u7528\uff0c\u800c\u65e0\u9700\u4f7f\u7528 docker-compose \u9ed8\u8ba4\u914d\u7f6e\u7684\u670d\u52a1\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"postgresql",children:"Postgresql"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"ZEALOT_POSTGRES_HOST=127.0.0.1\nZEALOT_POSTGRES_PORT=5432\nZEALOT_POSTGRES_USERNAME=postgres\nZEALOT_POSTGRES_PASSWORD=ze@l0t\nZEALOT_POSTGRES_DB_NAME=zealot\n"})}),"\n",(0,l.jsx)(n.h3,{id:"redis",children:"Redis"}),"\n",(0,l.jsx)(n.p,{children:"\u517c\u5bb9\u5927\u591a\u6570\u4e91\u670d\u52a1\u90e8\u7f72\u91c7\u7528\u7684 URL \u8fde\u63a5\u65b9\u5f0f"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"REDIS_URL=redis://user:pass@127.0.0.1:6379/0\n\n# \u57fa\u4e8e SSL \u7684 Redis\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u914d\u7f6e\u7f51\u7ad9\u9ed8\u8ba4\u8bed\u8a00",children:"\u914d\u7f6e\u7f51\u7ad9\u9ed8\u8ba4\u8bed\u8a00"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u8bed\u8a00\u5305"}),(0,l.jsx)(n.th,{children:"\u503c"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"zh-CN"}),(0,l.jsx)(n.td,{children:"\u7b80\u4f53\u4e2d\u6587 (\u9ed8\u8ba4)"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"en"}),(0,l.jsx)(n.td,{children:"\u82f1\u6587"})]})]})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"DEFAULT_LOCALE=en\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u914d\u7f6e\u7f51\u7ad9\u9ed8\u8ba4\u5916\u89c2",children:"\u914d\u7f6e\u7f51\u7ad9\u9ed8\u8ba4\u5916\u89c2"}),"\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"\u5916\u89c2"}),(0,l.jsx)(n.th,{children:"\u503c"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"light"}),(0,l.jsx)(n.td,{children:"\u6d45\u8272 (\u9ed8\u8ba4)"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"dark"}),(0,l.jsx)(n.td,{children:"\u6df1\u8272\uff08\u9ed1\u6697\u6a21\u5f0f\uff09"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"auto"}),(0,l.jsx)(n.td,{children:"\u968f\u7cfb\u7edf\u81ea\u52a8"})]})]})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"ZEALOT_APPEARANCE=dark\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u914d\u7f6e\u7ba1\u7406\u5458\u8d26\u6237\u548c\u5bc6\u7801",children:"\u914d\u7f6e\u7ba1\u7406\u5458\u8d26\u6237\u548c\u5bc6\u7801"}),"\n",(0,l.jsx)(n.p,{children:"\u9ed8\u8ba4\u4e0d\u914d\u7f6e\u5982\u4e0b\u4e5f\u4f1a\u751f\u6210\u4e0b\u9762\u7684\u8d26\u6237\u548c\u5bc6\u7801\u4f5c\u4e3a\u7ba1\u7406\u5458\u6743\u9650\u7684\u8d26\u6237\uff0c\u5efa\u8bae\u914d\u7f6e\u540e\u91cd\u65b0\u4fee\u6539\u5bc6\u7801\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"ZEALOT_ADMIN_EMAIL=admin@zealot.com\nZEALOT_ADMIN_PASSWORD=ze@l0t\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u5f00\u542f\u7528\u6237\u6ce8\u518c",children:"\u5f00\u542f\u7528\u6237\u6ce8\u518c"}),"\n",(0,l.jsx)(n.p,{children:"\u5173\u95ed\u6ce8\u518c\u4e4b\u540e\uff0c\u7ba1\u7406\u5458\u53ef\u4ee5\u901a\u8fc7\u7ba1\u7406\u9762\u677f\u7684\u7528\u6237\u7ba1\u7406\u624b\u52a8\u6dfb\u52a0\u7528\u6237\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"# \u5f00\u542f\u6ce8\u518c\nZEALOT_REGISTER_ENABLED=true\n\n# \u5173\u95ed\u6ce8\u518c\nZEALOT_REGISTER_ENABLED=false\n"})}),"\n",(0,l.jsx)(n.h3,{id:"\u5f00\u542f\u6e38\u5ba2\u6a21\u5f0f",children:"\u5f00\u542f\u6e38\u5ba2\u6a21\u5f0f"}),"\n",(0,l.jsxs)(n.p,{children:["\u5f00\u542f\u6e38\u5ba2\u6a21\u5f0f\u540e\u5141\u8bb8\u5e94\u7528\u7684\u67e5\u770b\u3001\u4e0b\u8f7d\u548c\u5b89\u88c5\uff0c\u5efa\u8bae\u516c\u53f8\u5185\u90e8\u5bf9\u6743\u9650\u4f9d\u8d56\u4e0d\u9ad8\u7684\u72b6\u51b5\u4f7f\u7528\uff0c\u5177\u4f53\u6743\u9650\u5bf9\u6bd4\u53ef\u4ee5",(0,l.jsx)(n.a,{href:"/docs/user-guide/administrator/permissions",children:"\u770b\u8fd9\u91cc\u67e5\u770b\u8be6\u60c5"})]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"# \u5f00\u542f\u6e38\u5ba2\u6a21\u5f0f\nZEALOT_GUEST_MODE=true\n\n# \u5173\u95ed\u6e38\u5ba2\u6a21\u5f0f\nZEALOT_GUEST_MODE=false\n"})}),"\n",(0,l.jsx)(n.h2,{id:"\u90ae\u4ef6\u670d\u52a1",children:"\u90ae\u4ef6\u670d\u52a1"}),"\n",(0,l.jsx)(n.p,{children:"\u76ee\u524d\u4ec5\u652f\u6301 smtp \u7684\u65b9\u5f0f\u914d\u7f6e\u90ae\u4ef6\u901a\u77e5\u670d\u52a1\uff0c\u90ae\u4ef6\u901a\u77e5\u4e3b\u8981\u5f71\u54cd\u7528\u6237\u6ce8\u518c\u3001\u53d1\u9001\u6fc0\u6d3b\u90ae\u4ef6\u3001\u66f4\u6539\u5bc6\u7801\u670d\u52a1\uff0c\u5982\u679c\u4e0d\u5f00\u542f\u4e5f\u4e0d\u5f71\u54cd\u4f7f\u7528\uff0c\u8d26\u6237\u6fc0\u6d3b\u7684\u94fe\u63a5\u4e5f\u4f1a\u5728\u7528\u6237\u7ba1\u7406\u90a3\u8fb9\u627e\u5230\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"# \u53d1\u9001\u90ae\u4ef6\u914d\u7f6e\nSMTP_ADDRESS=smtp.gmail.com\nSMTP_PORT=587\nSMTP_DOMAIN=gmail.com\nSMTP_USERNAME=you@gmail.com\nSMTP_PASSWORD=yourpassword\nSMTP_AUTH_METHOD=plain\nSMTP_ENABLE_STARTTLS_AUTO=true\n\n# \u90ae\u4ef6\u9ed8\u8ba4\u6536\u53d1\u4eba\u914d\u7f6e\nACTION_MAILER_DEFAULT_FROM=you@gmail.com\nACTION_MAILER_DEFAULT_TO=you@gmail.com\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>t,a:()=>d});var l=s(7294);const r={},i=l.createContext(r);function d(e){const n=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),l.createElement(i.Provider,{value:n},e.children)}}}]);
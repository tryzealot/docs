"use strict";(self.webpackChunkzealot_new_docs=self.webpackChunkzealot_new_docs||[]).push([[3130],{7814:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>a});var o=t(5893),s=t(1151);const i={},l="Schedule Jobs",r={id:"self-hosted/configuration/schedule-jobs",title:"Schedule Jobs",description:"Clean old version builds",source:"@site/docs/self-hosted/configuration/schedule-jobs.md",sourceDirName:"self-hosted/configuration",slug:"/self-hosted/configuration/schedule-jobs",permalink:"/docs/next/self-hosted/configuration/schedule-jobs",draft:!1,unlisted:!1,editUrl:"https://github.com/tryzealot/docs/tree/main/docs/self-hosted/configuration/schedule-jobs.md",tags:[],version:"current",frontMatter:{},sidebar:"selfHosted",previous:{title:"Third-party Authentication",permalink:"/docs/next/self-hosted/configuration/third-party-authentication"},next:{title:"Data storages",permalink:"/docs/next/self-hosted/storage"}},c={},a=[{value:"Clean old version builds",id:"clean-old-version-builds",level:2},{value:"Backup",id:"backup",level:2}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"schedule-jobs",children:"Schedule Jobs"}),"\n",(0,o.jsx)(n.h2,{id:"clean-old-version-builds",children:"Clean old version builds"}),"\n",(0,o.jsx)(n.p,{children:"A reliable logic for cleaning up old versions is to keep an eye on all uploaded\nversions of the current master version, as observed by project maintainers over time."}),"\n",(0,o.jsx)(n.p,{children:"Previously uploaded historical versions only need to keep the last uploaded build\nversion basically to meet the vast majority of cases, for example:"}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["Additional: the current logic is relatively trouble-free but inflexible, in fact,\nthere is thought to support a variety of processing logic, see ",(0,o.jsx)(n.a,{href:"https://github.com/tryzealot/zealot/issues/376",children:"https://github.com/tryzealot/zealot/issues/376"})]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"- 2.0\n  - 3\n  - 2\n  - 1\n- 1.0.1\n  - 10\n  - 9\n  - 8\n  ...\n- 1.0\n  - 5\n  - 4\n  - 3\n  ...\n"})}),"\n",(0,o.jsx)(n.p,{children:"The task will clean up all versions up to version 1.0.1 containing 9 and version 1.0 containing 4,\nleaving the final version file as follows:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"- 2.0\n  - 3\n  - 2\n  - 1\n- 1.0.1\n  - 10\n- 1.0\n  - 5\n"})}),"\n",(0,o.jsxs)(n.p,{children:["If disk space is limited, you can enable cleanup of timed tasks by setting the environment variable ",(0,o.jsx)(n.code,{children:"ZEALOT_KEEP_UPLOADS=false"}),"."]}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"ZEALOT_KEEP_UPLOADS"})," set ",(0,o.jsx)(n.code,{children:"true"})," by default."]})}),"\n",(0,o.jsx)(n.h2,{id:"backup",children:"Backup"}),"\n",(0,o.jsx)(n.p,{children:"When you create any backup it will join itself to the schedule job list."})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>l});var o=t(7294);const s={},i=o.createContext(s);function l(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);
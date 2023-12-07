"use strict";(self.webpackChunkzealot_new_docs=self.webpackChunkzealot_new_docs||[]).push([[8763],{8486:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>n,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var o=t(5893),a=t(1151);const r={},n="Data storages",i={id:"self-hosted/storage",title:"Data storages",description:"Here is a list of all the data storages required by the Zealot service,",source:"@site/docs/self-hosted/storage.md",sourceDirName:"self-hosted",slug:"/self-hosted/storage",permalink:"/docs/next/self-hosted/storage",draft:!1,unlisted:!1,editUrl:"https://github.com/tryzealot/docs/tree/main/docs/self-hosted/storage.md",tags:[],version:"current",frontMatter:{},sidebar:"selfHosted",previous:{title:"Schedule Jobs",permalink:"/docs/next/self-hosted/configuration/schedule-jobs"}},l={},d=[{value:"Postgres",id:"postgres",level:2},{value:"Redis",id:"redis",level:2},{value:"File storage",id:"file-storage",level:2},{value:"Backup storage",id:"backup-storage",level:2}];function c(e){const s={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h1,{id:"data-storages",children:"Data storages"}),"\n",(0,o.jsx)(s.p,{children:"Here is a list of all the data storages required by the Zealot service,\nfor those who are able to manually backup and restore data before better backup management tools are available."}),"\n",(0,o.jsx)(s.h2,{id:"postgres",children:"Postgres"}),"\n",(0,o.jsx)(s.p,{children:"This is used to store and manage all data related to Zealot, so it goes without saying."}),"\n",(0,o.jsx)(s.h2,{id:"redis",children:"Redis"}),"\n",(0,o.jsx)(s.p,{children:"Currently only the sidekiq asynchronous task service is using it to store some task status and statistics."}),"\n",(0,o.jsx)(s.h2,{id:"file-storage",children:"File storage"}),"\n",(0,o.jsxs)(s.p,{children:["The Zealot service relies on postgresql, redis and some other disk storage for uploaded application and debug files.\nIt is currently stored in the filesystem in the ",(0,o.jsx)(s.code,{children:"public/uploads"})," directory."]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"apps The directory for uploading applications"}),"\n",(0,o.jsx)(s.li,{children:"debugs_files directory for uploading debug files"}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"backup-storage",children:"Backup storage"}),"\n",(0,o.jsx)(s.p,{children:"The Zealot service currently supports command-generated backup data, which will contain\nthe database and binary packages of the uploaded apps and debug files."}),"\n",(0,o.jsxs)(s.p,{children:["The backup data is currently stored in the file system in the ",(0,o.jsx)(s.code,{children:"public/backup"})," directory."]})]})}function u(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1151:(e,s,t)=>{t.d(s,{Z:()=>i,a:()=>n});var o=t(7294);const a={},r=o.createContext(a);function n(e){const s=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),o.createElement(r.Provider,{value:s},e.children)}}}]);
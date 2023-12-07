"use strict";(self.webpackChunkzealot_new_docs=self.webpackChunkzealot_new_docs||[]).push([[7106],{7376:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var r=n(5893),t=n(1151);const i={sidebar_label:"Requirements"},o="Zealot Self Hosted Requirements",a={id:"self-hosted/deployment/requirements",title:"Zealot Self Hosted Requirements",description:"This page incldues useful information on the requirements that are needed to install and run Zealot on your servers.",source:"@site/versioned_docs/version-5.1.0/self-hosted/deployment/requirements.md",sourceDirName:"self-hosted/deployment",slug:"/self-hosted/deployment/requirements",permalink:"/docs/self-hosted/deployment/requirements",draft:!1,unlisted:!1,editUrl:"https://github.com/tryzealot/docs/tree/main/versioned_docs/version-5.1.0/self-hosted/deployment/requirements.md",tags:[],version:"5.1.0",frontMatter:{sidebar_label:"Requirements"},sidebar:"selfHosted",previous:{title:"Architecture",permalink:"/docs/self-hosted/deployment/architecture"},next:{title:"On-premise (Docker)",permalink:"/docs/self-hosted/deployment/docker"}},d={},l=[{value:"Operating Systems",id:"operating-systems",level:2},{value:"Hardware requirements",id:"hardware-requirements",level:2},{value:"Architecture",id:"architecture",level:3},{value:"CPU",id:"cpu",level:3},{value:"Memory",id:"memory",level:3},{value:"Storage",id:"storage",level:3},{value:"Software requirements",id:"software-requirements",level:2},{value:"Ruby versions",id:"ruby-versions",level:3},{value:"Node.js versions",id:"nodejs-versions",level:3},{value:"Database",id:"database",level:2},{value:"PostgreSQL Requirements",id:"postgresql-requirements",level:3},{value:"Redis",id:"redis",level:3},{value:"Sidekiq",id:"sidekiq",level:2},{value:"Supported web browsers",id:"supported-web-browsers",level:2}];function c(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",input:"input",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"zealot-self-hosted-requirements",children:"Zealot Self Hosted Requirements"}),"\n",(0,r.jsx)(s.p,{children:"This page incldues useful information on the requirements that are needed to install and run Zealot on your servers."}),"\n",(0,r.jsx)(s.h2,{id:"operating-systems",children:"Operating Systems"}),"\n",(0,r.jsx)(s.p,{children:"Installation of Zealot is possible on most Linux environments, but not officially supported."}),"\n",(0,r.jsx)(s.h2,{id:"hardware-requirements",children:"Hardware requirements"}),"\n",(0,r.jsx)(s.h3,{id:"architecture",children:"Architecture"}),"\n",(0,r.jsx)(s.p,{children:"Zealot can now run on either x86_64(amd86) or arm64(armv8/arrch) or armv7 based mostly Linux OS, for example: Debian, Ubuntu, CentOS, Arch Linux, Armbian etc."}),"\n",(0,r.jsx)(s.h3,{id:"cpu",children:"CPU"}),"\n",(0,r.jsx)(s.p,{children:"CPU requirements are dependent on the usage and expected workload. Your workload is influenced by factors such as - but not limited to - how many apps and debug files are uploaded and parsed, how many apps are downloaded, how many web hooks are triggered, how often Apple developers sync test devices, and how much and how often backup schedule jobs are made."}),"\n",(0,r.jsx)(s.p,{children:"The following is the recommended minimum CPU hardware guidance for a handful of example Zealot conversation base sizes."}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"1 cores"})," is the ",(0,r.jsx)(s.strong,{children:"required"})," minimum number of cores."]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"memory",children:"Memory"}),"\n",(0,r.jsx)(s.p,{children:"Memory requirements are dependent on the usage and expected workload. Your workload is influenced by factors such as - but not limited to - how many apps and debug files are uploaded and parsed, how many apps are downloaded, how many web hooks are triggered, how often Apple developers sync test devices, and how much and how often backup schedule jobs are made."}),"\n",(0,r.jsx)(s.p,{children:"The following is the recommended minimum Memory hardware guidance for a handful of example Zealot conversation base sizes."}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"512MB RAM"})," is the ",(0,r.jsx)(s.strong,{children:"required"})," minimum memory size."]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"storage",children:"Storage"}),"\n",(0,r.jsx)(s.p,{children:"The necessary hard drive space largely depends on the size and number of apps and debug files uploaded, also include backup files."}),"\n",(0,r.jsx)(s.h2,{id:"software-requirements",children:"Software requirements"}),"\n",(0,r.jsx)(s.h3,{id:"ruby-versions",children:"Ruby versions"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Ruby 3.0 and later is required."}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"You must use the standard MRI implementation of Ruby. Zealot needs several Gems that have native extensions."}),"\n",(0,r.jsx)(s.h3,{id:"nodejs-versions",children:"Node.js versions"}),"\n",(0,r.jsxs)(s.p,{children:["Zealot uses ",(0,r.jsx)(s.a,{href:"https://esbuild.github.io/",children:"esbuild"})," and ",(0,r.jsx)(s.a,{href:"https://sass-lang.com/",children:"sass"})," to compile frontend assets."]}),"\n",(0,r.jsx)(s.p,{children:"We recommend Node 14.x or higher version, as it's faster."}),"\n",(0,r.jsxs)(s.p,{children:["You can check which version you're running with ",(0,r.jsx)(s.code,{children:"node -v"}),". If you're running a version older than ",(0,r.jsx)(s.code,{children:"v8.0"}),",\nyou need to update it to a newer version. You can find instructions to install from community maintained packages or compile from source at the ",(0,r.jsx)(s.a,{href:"https://nodejs.org/en/download/",children:"Node.js website"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"database",children:"Database"}),"\n",(0,r.jsx)(s.p,{children:"PostgreSQL is the only supported database. We don't have plans to support any other alternatives as of now."}),"\n",(0,r.jsx)(s.h3,{id:"postgresql-requirements",children:"PostgreSQL Requirements"}),"\n",(0,r.jsxs)(s.p,{children:["The server running PostgreSQL should have ",(0,r.jsx)(s.em,{children:"at least"})," 5-10 GB of storage\navailable, though the exact requirements depends on the usage on your Zealot Instance."]}),"\n",(0,r.jsx)(s.p,{children:"We highly recommend using the latest stable PostgreSQL versions as these were used for development and testing."}),"\n",(0,r.jsx)(s.h3,{id:"redis",children:"Redis"}),"\n",(0,r.jsx)(s.p,{children:"Redis stores the background task queue and various Zealot configurations cached.\nThe storage requirements for Redis are minimal, You can start with 50MB and scale up as required."}),"\n",(0,r.jsx)(s.p,{children:"Redis version 6.2 or higher version is recommended"}),"\n",(0,r.jsx)(s.h2,{id:"sidekiq",children:"Sidekiq"}),"\n",(0,r.jsx)(s.p,{children:"Sidekiq processes the background jobs with a multi-threaded process.\nThis process starts with the entire Rails stack but it can grow over time due to memory leaks.\nOn a very active server the Sidekiq process can use 1GB+ of memory."}),"\n",(0,r.jsx)(s.h2,{id:"supported-web-browsers",children:"Supported web browsers"}),"\n",(0,r.jsx)(s.admonition,{type:"tip",children:(0,r.jsx)(s.p,{children:"We don't support running Zealot with JavaScript disabled in the browser."})}),"\n",(0,r.jsx)(s.p,{children:"Zealot supports the following web browsers:"}),"\n",(0,r.jsxs)(s.ul,{className:"contains-task-list",children:["\n",(0,r.jsxs)(s.li,{className:"task-list-item",children:[(0,r.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,r.jsx)(s.a,{href:"https://www.mozilla.org/en-US/firefox/new/",children:"Mozilla Firefox"})]}),"\n",(0,r.jsxs)(s.li,{className:"task-list-item",children:[(0,r.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,r.jsx)(s.a,{href:"https://www.google.com/chrome/",children:"Google Chrome"})]}),"\n",(0,r.jsxs)(s.li,{className:"task-list-item",children:[(0,r.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,r.jsx)(s.a,{href:"https://www.chromium.org/getting-involved/dev-channel",children:"Chromium"})]}),"\n",(0,r.jsxs)(s.li,{className:"task-list-item",children:[(0,r.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,r.jsx)(s.a,{href:"https://www.apple.com/safari/",children:"Apple Safari"})]}),"\n",(0,r.jsxs)(s.li,{className:"task-list-item",children:[(0,r.jsx)(s.input,{type:"checkbox",checked:!0,disabled:!0})," ",(0,r.jsx)(s.a,{href:"https://www.microsoft.com/en-us/edge",children:"Microsoft Edge"})]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>a,a:()=>o});var r=n(7294);const t={},i=r.createContext(t);function o(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);
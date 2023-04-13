"use strict";(self.webpackChunkzealot_new_docs=self.webpackChunkzealot_new_docs||[]).push([[9578],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=d(r),c=a,h=p["".concat(l,".").concat(c)]||p[c]||m[c]||o;return r?n.createElement(h,s(s({ref:t},u),{},{components:r})):n.createElement(h,s({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=c;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var d=2;d<o;d++)s[d]=r[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},4701:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_label:"Requirements"},s="Zealot Self Hosted Requirements",i={unversionedId:"self-hosted/deployment/requirements",id:"self-hosted/deployment/requirements",title:"Zealot Self Hosted Requirements",description:"This page incldues useful information on the requirements that are needed to install and run Zealot on your servers.",source:"@site/docs/self-hosted/deployment/requirements.md",sourceDirName:"self-hosted/deployment",slug:"/self-hosted/deployment/requirements",permalink:"/docs/next/self-hosted/deployment/requirements",draft:!1,editUrl:"https://github.com/tryzealot/docs/tree/main/docs/self-hosted/deployment/requirements.md",tags:[],version:"current",frontMatter:{sidebar_label:"Requirements"},sidebar:"selfHosted",previous:{title:"Architecture",permalink:"/docs/next/self-hosted/deployment/architecture"},next:{title:"On-premise (Docker)",permalink:"/docs/next/self-hosted/deployment/docker"}},l={},d=[{value:"Operating Systems",id:"operating-systems",level:2},{value:"Hardware requirements",id:"hardware-requirements",level:2},{value:"Architecture",id:"architecture",level:3},{value:"CPU",id:"cpu",level:3},{value:"Memory",id:"memory",level:3},{value:"Storage",id:"storage",level:3},{value:"Software requirements",id:"software-requirements",level:2},{value:"Ruby versions",id:"ruby-versions",level:3},{value:"Node.js versions",id:"nodejs-versions",level:3},{value:"Database",id:"database",level:2},{value:"PostgreSQL Requirements",id:"postgresql-requirements",level:3},{value:"Redis",id:"redis",level:3},{value:"Sidekiq",id:"sidekiq",level:2},{value:"Supported web browsers",id:"supported-web-browsers",level:2}],u={toc:d},p="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"zealot-self-hosted-requirements"},"Zealot Self Hosted Requirements"),(0,a.kt)("p",null,"This page incldues useful information on the requirements that are needed to install and run Zealot on your servers."),(0,a.kt)("h2",{id:"operating-systems"},"Operating Systems"),(0,a.kt)("p",null,"Installation of Zealot is possible on most Linux environments, but not officially supported."),(0,a.kt)("h2",{id:"hardware-requirements"},"Hardware requirements"),(0,a.kt)("h3",{id:"architecture"},"Architecture"),(0,a.kt)("p",null,"Zealot can now run on either x86_64(amd86) or arm64(armv8/arrch) or armv7 based mostly Linux OS, for example: Debian, Ubuntu, CentOS, Arch Linux, Armbian etc."),(0,a.kt)("h3",{id:"cpu"},"CPU"),(0,a.kt)("p",null,"CPU requirements are dependent on the usage and expected workload. Your workload is influenced by factors such as - but not limited to - how many apps and debug files are uploaded and parsed, how many apps are downloaded, how many web hooks are triggered, how often Apple developers sync test devices, and how much and how often backup schedule jobs are made."),(0,a.kt)("p",null,"The following is the recommended minimum CPU hardware guidance for a handful of example Zealot conversation base sizes."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"1 cores")," is the ",(0,a.kt)("strong",{parentName:"li"},"required")," minimum number of cores.")),(0,a.kt)("h3",{id:"memory"},"Memory"),(0,a.kt)("p",null,"Memory requirements are dependent on the usage and expected workload. Your workload is influenced by factors such as - but not limited to - how many apps and debug files are uploaded and parsed, how many apps are downloaded, how many web hooks are triggered, how often Apple developers sync test devices, and how much and how often backup schedule jobs are made."),(0,a.kt)("p",null,"The following is the recommended minimum Memory hardware guidance for a handful of example Zealot conversation base sizes."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"512MB RAM")," is the ",(0,a.kt)("strong",{parentName:"li"},"required")," minimum memory size.")),(0,a.kt)("h3",{id:"storage"},"Storage"),(0,a.kt)("p",null,"The necessary hard drive space largely depends on the size and number of apps and debug files uploaded, also include backup files."),(0,a.kt)("h2",{id:"software-requirements"},"Software requirements"),(0,a.kt)("h3",{id:"ruby-versions"},"Ruby versions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Ruby 3.0 and later is required.")),(0,a.kt)("p",null,"You must use the standard MRI implementation of Ruby. Zealot needs several Gems that have native extensions."),(0,a.kt)("h3",{id:"nodejs-versions"},"Node.js versions"),(0,a.kt)("p",null,"Zealot uses ",(0,a.kt)("a",{parentName:"p",href:"https://esbuild.github.io/"},"esbuild")," and ",(0,a.kt)("a",{parentName:"p",href:"https://sass-lang.com/"},"sass")," to compile frontend assets."),(0,a.kt)("p",null,"We recommend Node 14.x or higher version, as it's faster."),(0,a.kt)("p",null,"You can check which version you're running with ",(0,a.kt)("inlineCode",{parentName:"p"},"node -v"),". If you're running a version older than ",(0,a.kt)("inlineCode",{parentName:"p"},"v8.0"),",\nyou need to update it to a newer version. You can find instructions to install from community maintained packages or compile from source at the ",(0,a.kt)("a",{parentName:"p",href:"https://nodejs.org/en/download/"},"Node.js website"),"."),(0,a.kt)("h2",{id:"database"},"Database"),(0,a.kt)("p",null,"PostgreSQL is the only supported database. We don't have plans to support any other alternatives as of now."),(0,a.kt)("h3",{id:"postgresql-requirements"},"PostgreSQL Requirements"),(0,a.kt)("p",null,"The server running PostgreSQL should have ",(0,a.kt)("em",{parentName:"p"},"at least")," 5-10 GB of storage\navailable, though the exact requirements depends on the usage on your Zealot Instance."),(0,a.kt)("p",null,"We highly recommend using the latest stable PostgreSQL versions as these were used for development and testing."),(0,a.kt)("h3",{id:"redis"},"Redis"),(0,a.kt)("p",null,"Redis stores the background task queue and various Zealot configurations cached.\nThe storage requirements for Redis are minimal, You can start with 50MB and scale up as required."),(0,a.kt)("p",null,"Redis version 6.2 or higher version is recommended"),(0,a.kt)("h2",{id:"sidekiq"},"Sidekiq"),(0,a.kt)("p",null,"Sidekiq processes the background jobs with a multi-threaded process.\nThis process starts with the entire Rails stack but it can grow over time due to memory leaks.\nOn a very active server the Sidekiq process can use 1GB+ of memory."),(0,a.kt)("h2",{id:"supported-web-browsers"},"Supported web browsers"),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"We don't support running Zealot with JavaScript disabled in the browser.")),(0,a.kt)("p",null,"Zealot supports the following web browsers:"),(0,a.kt)("ul",{className:"contains-task-list"},(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,a.kt)("a",{parentName:"li",href:"https://www.mozilla.org/en-US/firefox/new/"},"Mozilla Firefox")),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,a.kt)("a",{parentName:"li",href:"https://www.google.com/chrome/"},"Google Chrome")),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,a.kt)("a",{parentName:"li",href:"https://www.chromium.org/getting-involved/dev-channel"},"Chromium")),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,a.kt)("a",{parentName:"li",href:"https://www.apple.com/safari/"},"Apple Safari")),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ",(0,a.kt)("a",{parentName:"li",href:"https://www.microsoft.com/en-us/edge"},"Microsoft Edge"))))}m.isMDXComponent=!0}}]);
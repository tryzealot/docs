"use strict";(self.webpackChunkzealot_new_docs=self.webpackChunkzealot_new_docs||[]).push([[112],{855:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var o=n(5893),r=n(1151),s=n(4866),i=n(5162);const a={},l="Visual Studio Code Dev Container Setup",c={id:"contributing-guide/local-development/devcontainer",title:"Visual Studio Code Dev Container Setup",description:"The Visual Studio Code Dev Containers lets you use a Docker container as a full-featured development environment.",source:"@site/docs/contributing-guide/local-development/devcontainer.md",sourceDirName:"contributing-guide/local-development",slug:"/contributing-guide/local-development/devcontainer",permalink:"/docs/next/contributing-guide/local-development/devcontainer",draft:!1,unlisted:!1,editUrl:"https://github.com/tryzealot/docs/tree/main/docs/contributing-guide/local-development/devcontainer.md",tags:[],version:"current",frontMatter:{},sidebar:"contributingGuide",previous:{title:"Local development",permalink:"/docs/next/category/local-development"},next:{title:"Source code",permalink:"/docs/next/contributing-guide/local-development/source-code"}},d={},u=[{value:"System requirements",id:"system-requirements",level:2},{value:"Install Git",id:"install-git",level:3},{value:"Install Docker &amp; docker-compose",id:"install-docker--docker-compose",level:3},{value:"Install Visual Studio Code",id:"install-visual-studio-code",level:3},{value:"Install Remote container extension",id:"install-remote-container-extension",level:3},{value:"Fetch Zealot Codesoace",id:"fetch-zealot-codesoace",level:2},{value:"Open the project in a container",id:"open-the-project-in-a-container",level:2},{value:"Start the project",id:"start-the-project",level:2},{value:"Open in browser",id:"open-in-browser",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"visual-studio-code-dev-container-setup",children:"Visual Studio Code Dev Container Setup"}),"\n","\n","\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://code.visualstudio.com/docs/devcontainers/containers",children:"The Visual Studio Code Dev Containers"})," lets you use a Docker container as a full-featured development environment."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{src:"https://code.visualstudio.com/assets/docs/devcontainers/containers/architecture-containers.png",alt:"VSCode devcontainer"})}),"\n",(0,o.jsx)(t.h2,{id:"system-requirements",children:"System requirements"}),"\n",(0,o.jsx)(t.p,{children:"Before processing, make sure you have the lateset version of Git, Virsual Studio Code, Docker and docker-compose."}),"\n",(0,o.jsx)(t.h3,{id:"install-git",children:"Install Git"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://github.com/git-guides/install-git",children:"Install"})," it from offical website."]}),"\n",(0,o.jsx)(t.h3,{id:"install-docker--docker-compose",children:"Install Docker & docker-compose"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Windows: ",(0,o.jsx)(t.a,{href:"https://www.docker.com/products/docker-desktop",children:"Docker Desktop"})," 2.0+ on Windows 10 Pro/Enterprise. Windows 10 Home (2004+) requires Docker Desktop 2.3+ and the ",(0,o.jsx)(t.a,{href:"https://aka.ms/vscode-remote/containers/docker-wsl2",children:"WSL 2 back-end"}),". (Docker Toolbox is not supported. Windows container images are not supported.)"]}),"\n",(0,o.jsxs)(t.li,{children:["macOS: ",(0,o.jsx)(t.a,{href:"https://www.docker.com/products/docker-desktop",children:"Docker Desktop"})," 2.0+."]}),"\n",(0,o.jsxs)(t.li,{children:["Linux: ",(0,o.jsx)(t.a,{href:"https://docs.docker.com/install/#supported-platforms",children:"Docker CE/EE"})," 18.06+ and ",(0,o.jsx)(t.a,{href:"https://docs.docker.com/compose/install",children:"Docker Compose"})," 1.21+. (The Ubuntu snap package is not supported.)"]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"install-visual-studio-code",children:"Install Visual Studio Code"}),"\n",(0,o.jsx)(t.p,{children:"Visual Studio Code is a free code editor, which runs on the macOS, Linux, and Windows operating systems."}),"\n",(0,o.jsx)(t.p,{children:"Follow the platform-specific guides below:"}),"\n",(0,o.jsxs)(s.Z,{groupId:"install-vscode",children:[(0,o.jsx)(i.Z,{value:"MacOS",children:(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Download ",(0,o.jsx)(t.a,{href:"https://go.microsoft.com/fwlink/?LinkID=534106",children:"Visual Studio Code"})," for macOS."]}),"\n",(0,o.jsx)(t.li,{children:"Open the browser's download list and locate the downloaded app or archive."}),"\n",(0,o.jsx)(t.li,{children:"If archive, extract the archive contents. Use double-click for some browsers or select the 'magnifying glass' icon with Safari."}),"\n",(0,o.jsxs)(t.li,{children:["Drag ",(0,o.jsx)(t.code,{children:"Visual Studio Code.app"})," to the Applications folder, making it available in the macOS Launchpad."]}),"\n",(0,o.jsx)(t.li,{children:"Open VS Code from the Applications folder, by double clicking the icon."}),"\n"]})}),(0,o.jsx)(i.Z,{value:"Windows",children:(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsxs)(t.li,{children:["Download the ",(0,o.jsx)(t.a,{href:"https://go.microsoft.com/fwlink/?LinkID=534107",children:"Visual Studio Code installer"})," for Windows."]}),"\n",(0,o.jsx)(t.li,{children:"Once it is downloaded, run the installer (VSCodeUserSetup-{version}.exe). This will only take a minute."}),"\n",(0,o.jsxs)(t.li,{children:["By default, VS Code is installed under ",(0,o.jsx)(t.code,{children:"C:\\Users\\\\{Username\\}\\AppData\\Local\\Programs\\Microsoft VS Code"}),"."]}),"\n"]})}),(0,o.jsx)(i.Z,{value:"Linux",children:(0,o.jsxs)(t.p,{children:["Following the ",(0,o.jsx)(t.a,{href:"https://code.visualstudio.com/docs/setup/linux",children:"offical Linux install guide"}),"."]})})]}),"\n",(0,o.jsx)(t.h3,{id:"install-remote-container-extension",children:"Install Remote container extension"}),"\n",(0,o.jsxs)(t.p,{children:["Install the ",(0,o.jsx)(t.a,{href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers",children:"Remote Container extension"}),"."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"VSCode extension",src:n(9763).Z+"",width:"1000",height:"477"})}),"\n",(0,o.jsx)(t.h2,{id:"fetch-zealot-codesoace",children:"Fetch Zealot Codesoace"}),"\n",(0,o.jsxs)(t.p,{children:["Zealot Codespace was in the ",(0,o.jsx)(t.code,{children:".devcontailer"})," folder of Zealot project, so you need clone the source code."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"git clone https://github.com/tryzealot/zealot.git\n"})}),"\n",(0,o.jsx)(t.p,{children:"Explan these files in Codespace:"}),"\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"File"}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"devcontainer.json"})}),(0,o.jsx)(t.td,{children:"VSCode devcontainer config"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"Dockerfile.base"})}),(0,o.jsx)(t.td,{children:"Base Dockerfile, auto push multi registry servers after changes"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"Dockerfile"})}),(0,o.jsx)(t.td,{children:"Speed up build time, depends on above image."})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"docker-compose.yml"})}),(0,o.jsx)(t.td,{children:"All services of Zealot"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:(0,o.jsx)(t.code,{children:"create-db-user.sql"})}),(0,o.jsx)(t.td,{children:"Create user and role for Zealot"})]})]})]}),"\n",(0,o.jsx)(t.h2,{id:"open-the-project-in-a-container",children:"Open the project in a container"}),"\n",(0,o.jsxs)(t.p,{children:["Start Visual Studio Code, run the ",(0,o.jsx)(t.code,{children:"Dev Containers: Open Folder in Container..."})," command in ",(0,o.jsx)(t.a,{href:"https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette",children:"Command Palette"})," and select the Zealot folder."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"VSCode Command Palette",src:n(8979).Z+"",width:"1752",height:"558"})}),"\n",(0,o.jsxs)(t.p,{children:["Click the ",(0,o.jsx)(t.strong,{children:"Starting Dev Container (show log)"})," to review zealot codespace build real time logging messages."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"VSCode Command Palette",src:n(7351).Z+"",width:"1736",height:"846"})}),"\n",(0,o.jsx)(t.p,{children:"When finish the task, project files will load in file explorer and the zsh terminal. Access log outputs messages:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"[7293 ms] Start: Run in container: cat /proc/344/environ\n[9836 ms] Port forwarding connection from 53148 > 43379 > 43379 in the container.\n[9836 ms] Start: Run in container: /home/vscode/.vscode-server/bin/5235c6bb189b60b01b1f49062f4ffa42384f8c91/node -e\n[9981 ms] Port forwarding 53148 > 43379 > 43379 stderr: Connection established\n[14988 ms] Port forwarding 53148 > 43379 > 43379 stderr: Remote close\n[14999 ms] Port forwarding 53148 > 43379 > 43379 terminated with code 0 and signal null.\n[29221 ms] Port forwarding 53148 > 43379 > 43379: Local close\n"})}),"\n",(0,o.jsx)(t.p,{children:"In host Docker containers:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Docker-Compose containers",src:n(2641).Z+"",width:"2180",height:"238"})}),"\n",(0,o.jsx)(t.h2,{id:"start-the-project",children:"Start the project"}),"\n",(0,o.jsxs)(t.p,{children:["Press ",(0,o.jsx)(t.code,{children:"Ctrl + `"})," to open the integrated terminal in Visual Studio Code if it isn't already open. then run ",(0,o.jsx)(t.code,{children:"bin/dev"})," to run all services."]}),"\n",(0,o.jsx)(t.p,{children:"Notice that the terminal prompt might look different than your normal terminal prompt."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"VSCode Zealot in Container",src:n(5771).Z+"",width:"3170",height:"1794"})}),"\n",(0,o.jsx)(t.h2,{id:"open-in-browser",children:"Open in browser"}),"\n",(0,o.jsxs)(t.p,{children:["A while after run ",(0,o.jsx)(t.code,{children:"bin/dev"}),", select ",(0,o.jsx)(t.strong,{children:"Ports"})," to see all forwarded ports, ",(0,o.jsx)(t.strong,{children:"Open in Browser"})," in quick way."]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"VSCode forwarded ports",src:n(5290).Z+"",width:"2646",height:"814"})})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},5162:(e,t,n)=>{n.d(t,{Z:()=>i});n(7294);var o=n(512);const r={tabItem:"tabItem_Ymn6"};var s=n(5893);function i(e){let{children:t,hidden:n,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,i),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>k});var o=n(7294),r=n(512),s=n(2466),i=n(6550),a=n(469),l=n(1980),c=n(7392),d=n(12);function u(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:o,default:r}}=e;return{value:t,label:n,attributes:o,default:r}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(s),(0,o.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,s=h(e),[i,l]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const o=n.find((e=>e.default))??n[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:t,tabValues:s}))),[c,u]=m({queryString:n,groupId:r}),[f,x]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,d.Nk)(n);return[r,(0,o.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:r}),v=(()=>{const e=c??f;return p({value:e,tabValues:s})?e:null})();(0,a.Z)((()=>{v&&l(v)}),[v]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),x(e)}),[u,x,s]),tabValues:s}}var x=n(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(5893);function g(e){let{className:t,block:n,selectedValue:o,selectValue:i,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),r=a[n].value;r!==o&&(c(t),i(r))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:a.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...s,className:(0,r.Z)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":o===t}),children:n??t},t)}))})}function b(e){let{lazy:t,children:n,selectedValue:r}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function w(e){const t=f(e);return(0,j.jsxs)("div",{className:(0,r.Z)("tabs-container",v.tabList),children:[(0,j.jsx)(g,{...e,...t}),(0,j.jsx)(b,{...e,...t})]})}function k(e){const t=(0,x.Z)();return(0,j.jsx)(w,{...e,children:u(e.children)},String(t))}},8979:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/vscode-command-palette-f37b4fd31c6cdc13244ea925b976f221.png"},2641:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/vscode-devcontainer-docker-containers-2a8afa4acc0d89438d14cd6539e432d8.png"},5290:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/vscode-devcontainer-forwarded-ports-4cf5d371a14b1201857d7c53b692b829.png"},7351:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/vscode-devcontainer-log-c904cb2312799a66dc6acc3ddde7e78f.png"},5771:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/vscode-devcontainer-zealot-592ecc98b9f83a304e22157fd1a31192.png"},9763:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/vscode-install-remote-containers-48120b06a2470bee04804c93fa4d881a.png"},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var o=n(7294);const r={},s=o.createContext(r);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);
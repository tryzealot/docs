"use strict";(self.webpackChunkzealot_new_docs=self.webpackChunkzealot_new_docs||[]).push([[6788],{5020:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=t(5893),o=t(1151),s=t(4866),i=t(5162);const a={sidebar_label:"Dev Container (Docker)"},c="Visual Studio Code Dev Container \u5f00\u53d1\u90e8\u7f72\u6307\u5357",l={id:"contributing-guide/local-development/devcontainer",title:"Visual Studio Code Dev Container \u5f00\u53d1\u90e8\u7f72\u6307\u5357",description:"Dev Container (Developing inside a Container) \u662f Visual Studio Code \u4f7f\u7528 Docker \u4f5c\u4e3a\u5f00\u53d1\u73af\u5883\u80fd\u591f\u5b9e\u73b0\u5728\u672c\u5730\u65e0\u9700\u914d\u7f6e\u5f00\u53d1\u73af\u5883\u5728\u5bb9\u5668\u5f00\u53d1\u6709\u8fd1\u4e4e\u672c\u5730\u4f53\u9a8c\u7684\u89e3\u51b3\u65b9\u6848\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-5.0.0/contributing-guide/local-development/devcontainer.md",sourceDirName:"contributing-guide/local-development",slug:"/contributing-guide/local-development/devcontainer",permalink:"/zh-Hans/docs/5.0.0/contributing-guide/local-development/devcontainer",draft:!1,unlisted:!1,editUrl:"https://github.com/tryzealot/docs/tree/main/versioned_docs/version-5.0.0/contributing-guide/local-development/devcontainer.md",tags:[],version:"5.0.0",frontMatter:{sidebar_label:"Dev Container (Docker)"},sidebar:"contributingGuide",previous:{title:"Local development",permalink:"/zh-Hans/docs/5.0.0/category/local-development"},next:{title:"\u6e90\u4ee3\u7801",permalink:"/zh-Hans/docs/5.0.0/contributing-guide/local-development/source-code"}},d={},u=[{value:"\u7cfb\u7edf\u4f9d\u8d56",id:"\u7cfb\u7edf\u4f9d\u8d56",level:2},{value:"\u5b89\u88c5 Git",id:"\u5b89\u88c5-git",level:3},{value:"\u5b89\u88c5 Docker &amp; docker-compose",id:"\u5b89\u88c5-docker--docker-compose",level:3},{value:"\u5b89\u88c5 Visual Studio Code",id:"\u5b89\u88c5-visual-studio-code",level:3},{value:"\u5b89\u88c5 Remote container \u6269\u5c55",id:"\u5b89\u88c5-remote-container-\u6269\u5c55",level:3},{value:"\u83b7\u53d6 Zealot Codespace",id:"\u83b7\u53d6-zealot-codespace",level:2},{value:"\u5728\u5bb9\u5668\u5185\u6253\u5f00\u9879\u76ee",id:"\u5728\u5bb9\u5668\u5185\u6253\u5f00\u9879\u76ee",level:2},{value:"\u542f\u52a8\u9879\u76ee",id:"\u542f\u52a8\u9879\u76ee",level:2},{value:"\u6d4f\u89c8\u5668\u8bbf\u95ee\u670d\u52a1",id:"\u6d4f\u89c8\u5668\u8bbf\u95ee\u670d\u52a1",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"visual-studio-code-dev-container-\u5f00\u53d1\u90e8\u7f72\u6307\u5357",children:"Visual Studio Code Dev Container \u5f00\u53d1\u90e8\u7f72\u6307\u5357"}),"\n","\n","\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://code.visualstudio.com/docs/devcontainers/containers",children:"Dev Container"})," (Developing inside a Container) \u662f Visual Studio Code \u4f7f\u7528 Docker \u4f5c\u4e3a\u5f00\u53d1\u73af\u5883\u80fd\u591f\u5b9e\u73b0\u5728\u672c\u5730\u65e0\u9700\u914d\u7f6e\u5f00\u53d1\u73af\u5883\u5728\u5bb9\u5668\u5f00\u53d1\u6709\u8fd1\u4e4e\u672c\u5730\u4f53\u9a8c\u7684\u89e3\u51b3\u65b9\u6848\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:"https://code.visualstudio.com/assets/docs/devcontainers/containers/architecture-containers.png",alt:"VSCode devcontainer"})}),"\n",(0,r.jsx)(n.h2,{id:"\u7cfb\u7edf\u4f9d\u8d56",children:"\u7cfb\u7edf\u4f9d\u8d56"}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u5f00\u53d1\u4e4b\u524d\uff0c\u4f60\u9700\u8981\u5b89\u88c5\u6700\u65b0\u7248\u672c\u7684 Git\uff0cVirsual Studio Code\uff0cDocker \u548c docker-compose\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u5b89\u88c5-git",children:"\u5b89\u88c5 Git"}),"\n",(0,r.jsxs)(n.p,{children:["\u56e0\u64cd\u4f5c\u7cfb\u7edf\u4e0d\u540c\uff0c\u5efa\u8bae\u6309\u7167\u5b98\u65b9",(0,r.jsx)(n.a,{href:"https://github.com/git-guides/install-git",children:"\u5b89\u88c5\u6559\u7a0b"}),"\u64cd\u4f5c\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u5b89\u88c5-docker--docker-compose",children:"\u5b89\u88c5 Docker & docker-compose"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Windows: 10 Pro/Enterprise \u9700\u8981 ",(0,r.jsx)(n.a,{href:"https://www.docker.com/products/docker-desktop",children:"Docker Desktop"})," / Windows 10 Home (2004+) \u9700\u8981 Docker Desktop 2.3+ \u548c ",(0,r.jsx)(n.a,{href:"https://aka.ms/vscode-remote/containers/docker-wsl2",children:"WSL 2 back-end"}),"\u3002\uff08\u4e0d\u652f\u6301 Docker Toolbox \u548c Windows container images\uff09"]}),"\n",(0,r.jsxs)(n.li,{children:["macOS: ",(0,r.jsx)(n.a,{href:"https://www.docker.com/products/docker-desktop",children:"Docker Desktop"})," 2.0+\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["Linux: ",(0,r.jsx)(n.a,{href:"https://docs.docker.com/install/#supported-platforms",children:"Docker CE/EE"})," 18.06+ \u548c ",(0,r.jsx)(n.a,{href:"https://docs.docker.com/compose/install",children:"Docker Compose"})," 1.21+\u3002\uff08\u4e0d\u652f\u6301 Ubuntu snap \u5305\uff09"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"\u5b89\u88c5-visual-studio-code",children:"\u5b89\u88c5 Visual Studio Code"}),"\n",(0,r.jsx)(n.p,{children:"Visual Studio Code \u662f\u4e00\u4e2a\u8de8\u5e73\u53f0\u8fd0\u884c\u7684\u514d\u8d39\u7684\u4ee3\u7801\u7f16\u8f91\u5668\uff0c\u6839\u636e\u64cd\u4f5c\u7cfb\u7edf\u9009\u62e9\u4f60\u7684\u5b89\u88c5\u65b9\u5f0f\uff1a"}),"\n",(0,r.jsxs)(s.Z,{groupId:"install-vscode",children:[(0,r.jsx)(i.Z,{value:"MacOS",children:(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u4e0b\u8f7d ",(0,r.jsx)(n.a,{href:"https://go.microsoft.com/fwlink/?LinkID=534106",children:"Visual Studio Code"})," macOS \u7248\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u6253\u5f00\u6d4f\u89c8\u5668\u4e0b\u8f7d\u754c\u9762\u627e\u5230\u5df2\u4e0b\u8f7d\u7684\u5e94\u7528\u6587\u4ef6\u6216\u538b\u7f29\u6587\u4ef6\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u5982\u679c\u662f\u538b\u7f29\u6587\u4ef6\u5148\u8fdb\u884c\u89e3\u538b\u7f29\u64cd\u4f5c\uff0c\u5982\u679c\u4f7f\u7528 Safari \u4e0b\u8f7d\u901a\u5e38\u4f1a\u5e2e\u4f60\u81ea\u52a8\u89e3\u538b\u7f29\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["\u62d6\u62fd ",(0,r.jsx)(n.code,{children:"Visual Studio Code.app"})," \u5230\u7cfb\u7edf\u5e94\u7528\u6587\u4ef6\u5939\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u53cc\u51fb VS Code \u5e94\u7528\u5373\u53ef\u6253\u5f00\u5e94\u7528\u3002"}),"\n"]})}),(0,r.jsx)(i.Z,{value:"Windows",children:(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\u4e0b\u8f7d ",(0,r.jsx)(n.a,{href:"https://go.microsoft.com/fwlink/?LinkID=534107",children:"Visual Studio Code installer"})," Windows \u7248\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u4e0b\u8f7d\u5b8c\u6210\u540e\u6267\u884c\u5b89\u88c5\u7a0b\u5e8f\uff08VSCodeUserSetup-{version}.exe\uff09\u7b49\u5f85\u5b89\u88c5\u6210\u529f\u3002"}),"\n",(0,r.jsxs)(n.li,{children:["\u9ed8\u8ba4\u60c5\u51b5\u4e0b VS Code \u4f1a\u5b89\u88c5\u5230 ",(0,r.jsx)(n.code,{children:"C:\\Users\\\\{Username\\}\\AppData\\Local\\Programs\\Microsoft VS Code"})," \u8def\u5f84\u3002"]}),"\n"]})}),(0,r.jsx)(i.Z,{value:"Linux",children:(0,r.jsxs)(n.p,{children:["\u56e0\u64cd\u4f5c\u7cfb\u7edf\u4e0d\u540c\uff0c\u5efa\u8bae\u6309\u7167\u5b98\u65b9",(0,r.jsx)(n.a,{href:"https://code.visualstudio.com/docs/setup/linux",children:"\u5b89\u88c5\u6559\u7a0b"}),"\u64cd\u4f5c\u3002"]})})]}),"\n",(0,r.jsx)(n.h3,{id:"\u5b89\u88c5-remote-container-\u6269\u5c55",children:"\u5b89\u88c5 Remote container \u6269\u5c55"}),"\n",(0,r.jsxs)(n.p,{children:["\u6309\u7167\u5b98\u65b9\u6559\u7a0b\u5b89\u88c5 ",(0,r.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers",children:"Remote Container extension"}),"\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"VSCode extension",src:t(9763).Z+"",width:"1000",height:"477"})}),"\n",(0,r.jsx)(n.h2,{id:"\u83b7\u53d6-zealot-codespace",children:"\u83b7\u53d6 Zealot Codespace"}),"\n",(0,r.jsxs)(n.p,{children:["Zealot Codespace \u540c\u6837\u5b58\u653e\u5728 Zealot \u9879\u76ee ",(0,r.jsx)(n.a,{href:"https://github.com/tryzealot/zealot/tree/develop/.devcontainer",children:".devcontailer"})," \u76ee\u5f55\uff0c\u4f60\u9700\u8981\u5148\u514b\u9686\u9879\u76ee\u6e90\u4ee3\u7801\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/tryzealot/zealot.git\n"})}),"\n",(0,r.jsx)(n.p,{children:"Codespace \u5305\u542b\u4e86\u4e00\u7cfb\u5217\u6587\u4ef6\uff1a"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u6587\u4ef6\u540d"}),(0,r.jsx)(n.th,{children:"\u8bf4\u660e"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"devcontainer.json"})}),(0,r.jsx)(n.td,{children:"VSCode devcontainer \u914d\u7f6e\u6587\u4ef6"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Dockerfile.base"})}),(0,r.jsx)(n.td,{children:"\u955c\u50cf\u6838\u5fc3\uff0c\u53d8\u66f4\u4f1a\u81ea\u52a8\u63a8\u9001\u5230\u4e0d\u540c registry \u4ed3\u5e93"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"Dockerfile"})}),(0,r.jsx)(n.td,{children:"\u95f4\u63a5\u955c\u50cf\uff0c\u4e3b\u8981\u662f\u8282\u7701\u7f16\u8bd1\u65f6\u95f4"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"docker-compose.yml"})}),(0,r.jsx)(n.td,{children:"\u9879\u76ee\u670d\u52a1\u4f9d\u8d56"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"create-db-user.sql"})}),(0,r.jsx)(n.td,{children:"\u7528\u4e8e\u521d\u59cb\u5316 Postgres \u9ed8\u8ba4\u7528\u6237\u53ca\u6743\u9650"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u5728\u5bb9\u5668\u5185\u6253\u5f00\u9879\u76ee",children:"\u5728\u5bb9\u5668\u5185\u6253\u5f00\u9879\u76ee"}),"\n",(0,r.jsxs)(n.p,{children:["\u6253\u5f00 Visual Studio Code \u5e94\u7528\u540e\u5728 ",(0,r.jsx)(n.a,{href:"https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette",children:"Command Palette"})," \u8f93\u5165 ",(0,r.jsx)(n.code,{children:"Dev Containers: Open Folder in Container..."})," \u56de\u8f66\u9009\u62e9\u521a\u514b\u9686\u4e0b\u6765\u7684 Zealot \u9879\u76ee\u76ee\u5f55\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"VSCode Command Palette",src:t(8979).Z+"",width:"1752",height:"558"})}),"\n",(0,r.jsxs)(n.p,{children:["\u9996\u6b21\u6267\u884c\u4f1a\u62c9\u53d6 Zealot Codespace \u955c\u50cf\u5e76\u5f00\u59cb\u6784\u5efa\uff0c\u8fc7\u7a0b\u4f1a\u6301\u7eed\u4e00\u6bb5\u65f6\u95f4\u671f\u95f4\u53ef\u70b9\u51fb ",(0,r.jsx)(n.strong,{children:"Starting Dev Container (show log)"})," \u67e5\u770b\u6784\u5efa\u5b9e\u65f6\u65e5\u5fd7\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"VSCode Command Palette",src:t(7351).Z+"",width:"1736",height:"846"})}),"\n",(0,r.jsx)(n.p,{children:"\u6784\u5efa\u5b8c\u6210\u5e76\u542f\u52a8\u5b8c\u6bd5\u4f1a\u52a0\u8f7d\u9879\u76ee\u6587\u4ef6\u548c zsh \u7ec8\u7aef\uff0c\u901a\u8fc7\u65e5\u5fd7\u53ef\u4ee5\u770b\u5230\u5982\u4e0b\u4fe1\u606f\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"[7293 ms] Start: Run in container: cat /proc/344/environ\n[9836 ms] Port forwarding connection from 53148 > 43379 > 43379 in the container.\n[9836 ms] Start: Run in container: /home/vscode/.vscode-server/bin/5235c6bb189b60b01b1f49062f4ffa42384f8c91/node -e\n[9981 ms] Port forwarding 53148 > 43379 > 43379 stderr: Connection established\n[14988 ms] Port forwarding 53148 > 43379 > 43379 stderr: Remote close\n[14999 ms] Port forwarding 53148 > 43379 > 43379 terminated with code 0 and signal null.\n[29221 ms] Port forwarding 53148 > 43379 > 43379: Local close\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5728\u5bbf\u4e3b\u673a\u4e5f\u80fd\u770b\u5230 Docker \u542f\u52a8\u4e86 docker-compose \u5728\u8fd0\u884c\uff1a"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Docker-Compose containers",src:t(2641).Z+"",width:"2180",height:"238"})}),"\n",(0,r.jsx)(n.h2,{id:"\u542f\u52a8\u9879\u76ee",children:"\u542f\u52a8\u9879\u76ee"}),"\n",(0,r.jsxs)(n.p,{children:["\u5982\u679c\u6ca1\u6709\u6253\u5f00 VSCode \u5185\u7f6e\u7ec8\u7aef\u53ef\u4ee5\u901a\u8fc7\u5feb\u6377\u952e ",(0,r.jsx)(n.code,{children:"Ctrl + `"})," \u6253\u5f00\uff0c\u65b0\u6253\u5f00\u4e00\u4e2a\u7ec8\u7aef\u8fd0\u884c ",(0,r.jsx)(n.code,{children:"bin/dev"})," \u53ef\u8fd0\u884c Zealot \u4f9d\u8d56\u7684\u6240\u6709\u670d\u52a1\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"VSCode Zealot in Container",src:t(5771).Z+"",width:"3170",height:"1794"})}),"\n",(0,r.jsx)(n.h2,{id:"\u6d4f\u89c8\u5668\u8bbf\u95ee\u670d\u52a1",children:"\u6d4f\u89c8\u5668\u8bbf\u95ee\u670d\u52a1"}),"\n",(0,r.jsxs)(n.p,{children:["\u5728\u8fd0\u884c ",(0,r.jsx)(n.code,{children:"bin/dev"})," \u4e00\u4f1a\u540e\u4f60\u4f1a\u5728\u53f3\u4e0b\u89d2\u7a97\u53e3\u770b\u5230 ",(0,r.jsx)(n.strong,{children:"Open in Browser"})," \u7a97\u53e3\u70b9\u51fb\u53ef\u6253\u5f00 Zealot \u7f51\u9875\u670d\u52a1\u3002\u540c\u6837\u4e5f\u53ef\u4ee5\u901a\u8fc7\u7ec8\u7aef\u533a\u57df\u9876\u90e8 ",(0,r.jsx)(n.strong,{children:"Ports"})," \u9009\u9879\u67e5\u770b\u53ef\u8f6c\u53d1\u7aef\u53e3\u7684\u670d\u52a1\uff0c\u70b9\u51fb\u6d4f\u89c8\u5668\u56fe\u6807\u4f1a\u628a\u5bb9\u5668\u7684\u7aef\u53e3\u8f6c\u53d1\u5e76\u7ed1\u5b9a\u5230\u672c\u5730\u968f\u673a\u65ad\u5f00\u540e\u4e0a\u9762\u8bbf\u95ee\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"VSCode forwarded ports",src:t(5290).Z+"",width:"2646",height:"814"})})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>i});t(7294);var r=t(512);const o={tabItem:"tabItem_Ymn6"};var s=t(5893);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,i),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>C});var r=t(7294),o=t(512),s=t(2466),i=t(6550),a=t(469),c=t(1980),l=t(7392),d=t(12);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:o}}=e;return{value:n,label:t,attributes:r,default:o}}))}(t);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const o=(0,i.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._X)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(o.location.search);n.set(s,e),o.replace({...o.location,search:n.toString()})}),[s,o])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,s=h(e),[i,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[l,u]=m({queryString:t,groupId:o}),[x,v]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,s]=(0,d.Nk)(t);return[o,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:o}),j=(()=>{const e=l??x;return p({value:e,tabValues:s})?e:null})();(0,a.Z)((()=>{j&&c(j)}),[j]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),v(e)}),[u,v,s]),tabValues:s}}var v=t(2389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(5893);function g(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:a}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.o5)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),o=a[t].value;o!==r&&(l(n),i(o))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...s,className:(0,o.Z)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:o}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===o));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function k(e){const n=x(e);return(0,f.jsxs)("div",{className:(0,o.Z)("tabs-container",j.tabList),children:[(0,f.jsx)(g,{...e,...n}),(0,f.jsx)(b,{...e,...n})]})}function C(e){const n=(0,v.Z)();return(0,f.jsx)(k,{...e,children:u(e.children)},String(n))}},8979:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/vscode-command-palette-f37b4fd31c6cdc13244ea925b976f221.png"},2641:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/vscode-devcontainer-docker-containers-2a8afa4acc0d89438d14cd6539e432d8.png"},5290:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/vscode-devcontainer-forwarded-ports-4cf5d371a14b1201857d7c53b692b829.png"},7351:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/vscode-devcontainer-log-c904cb2312799a66dc6acc3ddde7e78f.png"},5771:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/vscode-devcontainer-zealot-592ecc98b9f83a304e22157fd1a31192.png"},9763:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/vscode-install-remote-containers-48120b06a2470bee04804c93fa4d881a.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var r=t(7294);const o={},s=r.createContext(o);function i(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);
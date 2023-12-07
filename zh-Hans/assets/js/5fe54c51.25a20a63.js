"use strict";(self.webpackChunkzealot_new_docs=self.webpackChunkzealot_new_docs||[]).push([[1042],{5646:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>t,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>i});var l=n(5893),s=n(1151);const d={sidebar_label:"\u8be6\u7ec6\u6b65\u9aa4"},c="Docker \u624b\u628a\u624b\u90e8\u7f72\u6587\u6863",r={id:"self-hosted/deployment/docker/step-by-step",title:"Docker \u624b\u628a\u624b\u90e8\u7f72\u6587\u6863",description:"\u8fd9\u662f\u4e00\u7bc7\u624b\u628a\u624b\u6765\u6307\u5bfc\u4f7f\u7528 Docker \u90e8\u7f72\u6587\u6863\uff0c\u540c\u65f6\u4e5f\u662f\u89e3\u91caDocker \u90e8\u7f72 Zealot \u6307\u5357\u7684\u5206\u89e3",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-4.x/self-hosted/deployment/docker/step-by-step.md",sourceDirName:"self-hosted/deployment/docker",slug:"/self-hosted/deployment/docker/step-by-step",permalink:"/zh-Hans/docs/4.x/self-hosted/deployment/docker/step-by-step",draft:!1,unlisted:!1,editUrl:"https://github.com/tryzealot/docs/tree/main/versioned_docs/version-4.x/self-hosted/deployment/docker/step-by-step.md",tags:[],version:"4.x",frontMatter:{sidebar_label:"\u8be6\u7ec6\u6b65\u9aa4"},sidebar:"selfHosted",previous:{title:"Docker",permalink:"/zh-Hans/docs/4.x/self-hosted/deployment/docker"},next:{title:"Kubernetes",permalink:"/zh-Hans/docs/4.x/self-hosted/deployment/kubernetes"}},t={},i=[{value:"\u7248\u672c\u5217\u8868",id:"\u7248\u672c\u5217\u8868",level:2},{value:"\u955c\u50cf\u4ed3\u5e93",id:"\u955c\u50cf\u4ed3\u5e93",level:2},{value:"\u6b65\u9aa4\u89e3\u6790",id:"\u6b65\u9aa4\u89e3\u6790",level:2},{value:"\u5b89\u88c5 Docker",id:"\u5b89\u88c5-docker",level:3},{value:"\u5b89\u88c5 Docker-Compose",id:"\u5b89\u88c5-docker-compose",level:3},{value:"\u751f\u6210 .env \u914d\u7f6e\u6587\u4ef6",id:"\u751f\u6210-env-\u914d\u7f6e\u6587\u4ef6",level:3},{value:"\u914d\u7f6e\u57df\u540d",id:"\u914d\u7f6e\u57df\u540d",level:3},{value:"\u914d\u7f6e\u8bc1\u4e66",id:"\u914d\u7f6e\u8bc1\u4e66",level:3},{value:"\u751f\u6210 docker-compose.yml",id:"\u751f\u6210-docker-composeyml",level:3},{value:"\u521b\u5efa\u6301\u4e45\u5316\u5b58\u50a8\u7684 docker volumes",id:"\u521b\u5efa\u6301\u4e45\u5316\u5b58\u50a8\u7684-docker-volumes",level:3},{value:"\u62c9\u53d6\uff08\u66f4\u65b0\uff09\u955c\u50cf",id:"\u62c9\u53d6\u66f4\u65b0\u955c\u50cf",level:3},{value:"\u8bbe\u7f6e\u6570\u636e\u5e93\u6570\u636e",id:"\u8bbe\u7f6e\u6570\u636e\u5e93\u6570\u636e",level:3},{value:"\u8fd0\u884c docker-compose",id:"\u8fd0\u884c-docker-compose",level:3},{value:"\u9ad8\u7ea7\u914d\u7f6e",id:"\u9ad8\u7ea7\u914d\u7f6e",level:2},{value:"\u81ea\u5b9a\u4e49 volume \u8def\u5f84",id:"\u81ea\u5b9a\u4e49-volume-\u8def\u5f84",level:3},{value:"1. \u521b\u5efa volume \u81ea\u5b9a\u4e49\u8def\u5f84",id:"1-\u521b\u5efa-volume-\u81ea\u5b9a\u4e49\u8def\u5f84",level:4},{value:"2. \u4fee\u6539 docker-compose \u7684 volumes \u90e8\u5206",id:"2-\u4fee\u6539-docker-compose-\u7684-volumes-\u90e8\u5206",level:4}];function a(e){const o={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.h1,{id:"docker-\u624b\u628a\u624b\u90e8\u7f72\u6587\u6863",children:"Docker \u624b\u628a\u624b\u90e8\u7f72\u6587\u6863"}),"\n",(0,l.jsxs)(o.p,{children:["\u8fd9\u662f\u4e00\u7bc7\u624b\u628a\u624b\u6765\u6307\u5bfc\u4f7f\u7528 Docker \u90e8\u7f72\u6587\u6863\uff0c\u540c\u65f6\u4e5f\u662f\u89e3\u91ca",(0,l.jsx)(o.a,{href:"/docs/self-hosted/deployment/docker",children:"Docker \u90e8\u7f72 Zealot \u6307\u5357"}),"\u7684\u5206\u89e3"]}),"\n",(0,l.jsx)(o.h2,{id:"\u7248\u672c\u5217\u8868",children:"\u7248\u672c\u5217\u8868"}),"\n",(0,l.jsxs)(o.ul,{children:["\n",(0,l.jsxs)(o.li,{children:["\u7a33\u5b9a\u7248\u672c - 4.7.1/latest - ",(0,l.jsx)(o.code,{children:"ghcr.io/tryzealot/zealot:latest"})]}),"\n",(0,l.jsxs)(o.li,{children:["\u6d4b\u8bd5\u7248\u672c - develop - ",(0,l.jsx)(o.code,{children:"ghcr.io/tryzealot/zealot:nightly"})," - \u57fa\u4e8e develop \u5206\u652f\u6bcf\u6b21\u63d0\u4ea4\u6784\u5efa\u7684\u7248\u672c"]}),"\n"]}),"\n",(0,l.jsx)(o.h2,{id:"\u955c\u50cf\u4ed3\u5e93",children:"\u955c\u50cf\u4ed3\u5e93"}),"\n",(0,l.jsxs)(o.blockquote,{children:["\n",(0,l.jsxs)(o.p,{children:["Docker hub ",(0,l.jsx)(o.a,{href:"https://web.docker.com/rs/790-SSB-375/images/privatereposfaq.pdf",children:"\u53d6\u6d88\u4e86\u514d\u8d39\u7ec4\u7ec7\u8ba1\u5212"}),"\uff0c\u4e0d\u518d\u540c\u6b65\u66f4\u65b0\u63a8\u9001\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(o.p,{children:["Github Container Registry: ",(0,l.jsx)(o.a,{href:"https://github.com/tryzealot/zealot/pkgs/container/zealot",children:"https://github.com/tryzealot/zealot/pkgs/container/zealot"})," (",(0,l.jsx)(o.strong,{children:"\u63a8\u8350"}),")"]}),"\n",(0,l.jsx)(o.h2,{id:"\u6b65\u9aa4\u89e3\u6790",children:"\u6b65\u9aa4\u89e3\u6790"}),"\n",(0,l.jsx)(o.h3,{id:"\u5b89\u88c5-docker",children:"\u5b89\u88c5 Docker"}),"\n",(0,l.jsxs)(o.p,{children:["\u6309\u7167",(0,l.jsx)(o.a,{href:"https://get.docker.com/",children:"\u5b98\u65b9\u6559\u7a0b"}),"\u5b89\u88c5"]}),"\n",(0,l.jsx)(o.h3,{id:"\u5b89\u88c5-docker-compose",children:"\u5b89\u88c5 Docker-Compose"}),"\n",(0,l.jsxs)(o.p,{children:["\u6309\u7167",(0,l.jsx)(o.a,{href:"https://docs.docker.com/compose/install/",children:"\u5b98\u65b9\u6559\u7a0b"}),"\u5b89\u88c5"]}),"\n",(0,l.jsx)(o.h3,{id:"\u751f\u6210-env-\u914d\u7f6e\u6587\u4ef6",children:"\u751f\u6210 .env \u914d\u7f6e\u6587\u4ef6"}),"\n",(0,l.jsxs)(o.p,{children:["\u4ece\u9884\u5148 ",(0,l.jsx)(o.code,{children:"config.env"})," \u914d\u7f6e\u6587\u4ef6\u590d\u5236\u4e00\u4efd\u90e8\u7f72\u4f7f\u7528\u7684\u914d\u7f6e\u6587\u4ef6"]}),"\n",(0,l.jsx)(o.h3,{id:"\u914d\u7f6e\u57df\u540d",children:"\u914d\u7f6e\u57df\u540d"}),"\n",(0,l.jsx)(o.p,{children:"\u4e8c\u6b21\u6821\u9a8c\u5982\u679c\u6ca1\u6709\u914d\u7f6e\u4f1a\u518d\u63d0\u9192"}),"\n",(0,l.jsx)(o.h3,{id:"\u914d\u7f6e\u8bc1\u4e66",children:"\u914d\u7f6e\u8bc1\u4e66"}),"\n",(0,l.jsx)(o.p,{children:"\u90e8\u7f72\u811a\u672c\u63d0\u4f9b\u4e09\u79cd\u65b9\u5f0f\uff0c\u5c31\u7b97\u4f7f\u7528\u6700\u540e\u4e00\u79cd\u751f\u6210\u7684\u4e5f\u662f https \u7684\u534f\u8bae\u5934"}),"\n",(0,l.jsxs)(o.ul,{children:["\n",(0,l.jsx)(o.li,{children:"\u4f7f\u7528 Let's Encrypt \u8bc1\u4e66"}),"\n",(0,l.jsx)(o.li,{children:"\u4f7f\u7528\u81ea\u7b7e\u540d\u8bc1\u4e66"}),"\n",(0,l.jsx)(o.li,{children:"\u7eaf Zealot \u670d\u52a1\uff08\u9700\u53cd\u4ee3\u7f51\u5173\u6216\u8d1f\u8f7d\u5747\u8861\u751f\u6210 SSL \u8bc1\u4e66\uff09"}),"\n"]}),"\n",(0,l.jsx)(o.h3,{id:"\u751f\u6210-docker-composeyml",children:"\u751f\u6210 docker-compose.yml"}),"\n",(0,l.jsx)(o.p,{children:"\u914d\u7f6e\u6587\u4ef6\u4f1a\u751f\u6210\u81f3\u5c11\u56db\u4e2a\u670d\u52a1\uff08service\uff09\uff0c\u4f7f\u7528\u4e0a\u9762\u524d\u4e24\u4e2a\u8bc1\u4e66\u65b9\u5f0f\u4f1a\u989d\u5916\u589e\u52a0\u4e00\u4e2a\u670d\u52a1\uff1a"}),"\n",(0,l.jsxs)(o.ul,{children:["\n",(0,l.jsxs)(o.li,{children:[(0,l.jsx)(o.code,{children:"zealot-zealot"}),": \u6838\u5fc3 Web \u548c API \u670d\u52a1"]}),"\n",(0,l.jsxs)(o.li,{children:[(0,l.jsx)(o.code,{children:"zealot-worker"}),": \u6838\u5fc3\u5f02\u6b65\u4efb\u52a1\u670d\u52a1"]}),"\n",(0,l.jsxs)(o.li,{children:[(0,l.jsx)(o.code,{children:"zealot-postgres"}),": \u6570\u636e\u5e93\u670d\u52a1"]}),"\n",(0,l.jsxs)(o.li,{children:[(0,l.jsx)(o.code,{children:"zealot-redis"}),": \u7f13\u5b58\u670d\u52a1"]}),"\n",(0,l.jsxs)(o.li,{children:[(0,l.jsx)(o.code,{children:"zealot-web"}),": \u63d0\u4f9b\uff08\u670d\u52a1\u548c\u8bc1\u4e66\uff09\u53cd\u4ee3\u7684\u7f51\u5173\u670d\u52a1\uff0c\u975e\u5fc5\u9700"]}),"\n"]}),"\n",(0,l.jsx)(o.h3,{id:"\u521b\u5efa\u6301\u4e45\u5316\u5b58\u50a8\u7684-docker-volumes",children:"\u521b\u5efa\u6301\u4e45\u5316\u5b58\u50a8\u7684 docker volumes"}),"\n",(0,l.jsx)(o.p,{children:"\u5b58\u50a8\u6301\u4e45\u5316\u6570\u636e"}),"\n",(0,l.jsxs)(o.ul,{children:["\n",(0,l.jsxs)(o.li,{children:[(0,l.jsx)(o.code,{children:"zealot-data"}),": \u9759\u6001\u8d44\u6e90\uff0cJS\u3001CSS\u3001\u56fe\u7247\u4ee5\u53ca\u4e0a\u4f20\u7684\u5e94\u7528\u3001\u5e94\u7528\u56fe\u6807\u548c\u8c03\u8bd5\u6587\u4ef6"]}),"\n",(0,l.jsxs)(o.li,{children:[(0,l.jsx)(o.code,{children:"zealot-postgres"}),": \u6570\u636e\u5e93\u6570\u636e"]}),"\n",(0,l.jsxs)(o.li,{children:[(0,l.jsx)(o.code,{children:"zealot-redis"}),": \u7f13\u5b58\u6570\u636e"]}),"\n"]}),"\n",(0,l.jsx)(o.h3,{id:"\u62c9\u53d6\u66f4\u65b0\u955c\u50cf",children:"\u62c9\u53d6\uff08\u66f4\u65b0\uff09\u955c\u50cf"}),"\n",(0,l.jsx)(o.p,{children:"\u7b2c\u4e00\u6b21\u4f7f\u7528\u4f1a\u81ea\u52a8\u4ece Docker hub \u4e0b\u8f7d\u955c\u50cf\uff0c\u540e\u7eed\u662f\u66f4\u65b0\u64cd\u4f5c\uff0c\u901a\u5e38\u53ea\u4f1a\u66f4\u65b0 zealot \u955c\u50cf\u3002\u5176\u4ed6\u51e0\u4e2a\u4f9d\u8d56\u670d\u52a1\u955c\u50cf\u90fd\u662f\u56fa\u5b9a\u7248\u672c\u53f7"}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-bash",children:"docker-compose pull\n"})}),"\n",(0,l.jsx)(o.h3,{id:"\u8bbe\u7f6e\u6570\u636e\u5e93\u6570\u636e",children:"\u8bbe\u7f6e\u6570\u636e\u5e93\u6570\u636e"}),"\n",(0,l.jsx)(o.p,{children:"\u7b2c\u4e00\u6b21\u4f7f\u7528\u4f1a\u521d\u59cb\u5316\u6570\u636e\u5e93\u3001\u52a0\u8f7d\u8303\u4f8b\u5e94\u7528\u6570\u636e\u548c\u8bbe\u7f6e\u7ba1\u7406\u5458\u8d26\u53f7\uff0c\u540e\u7eed\u8fd9\u662f\u56e0 zealot \u66f4\u65b0\u9700\u8981\u7684\u64cd\u4f5c"}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-bash",children:"docker-compose run --rm zealot run_upgrade\n"})}),"\n",(0,l.jsx)(o.h3,{id:"\u8fd0\u884c-docker-compose",children:"\u8fd0\u884c docker-compose"}),"\n",(0,l.jsx)(o.p,{children:"\u4e3a\u4e86\u5b89\u5168\u671f\u95f4\u548c\u7528\u6237\u7684\u81ea\u5b9a\u4e49\u64cd\u4f5c\u9700\u8981\u624b\u52a8\u6267\u884c\u6765\u8fd0\u884c\u670d\u52a1:"}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-bash",children:"docker-compose up -d\n"})}),"\n",(0,l.jsx)(o.h2,{id:"\u9ad8\u7ea7\u914d\u7f6e",children:"\u9ad8\u7ea7\u914d\u7f6e"}),"\n",(0,l.jsx)(o.h3,{id:"\u81ea\u5b9a\u4e49-volume-\u8def\u5f84",children:"\u81ea\u5b9a\u4e49 volume \u8def\u5f84"}),"\n",(0,l.jsxs)(o.p,{children:["\u81ea\u5b9a\u4e49\u8def\u5f84\u6709\u4e24\u79cd\u65b9\u6cd5: (\u5047\u8bbe\u81ea\u5b9a\u4e49\u7684\u8def\u5f84\u662f ",(0,l.jsx)(o.code,{children:"/data/zealot"}),")"]}),"\n",(0,l.jsx)(o.h4,{id:"1-\u521b\u5efa-volume-\u81ea\u5b9a\u4e49\u8def\u5f84",children:"1. \u521b\u5efa volume \u81ea\u5b9a\u4e49\u8def\u5f84"}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-sh",children:"docker volume create --name zealot-data \\\n  --opt type=none \\\n  --opt o=bind \\\n  --opt device=/data/zealot/zealot-data\n\ndocker volume create --name zealot-redis \\\n  --opt type=none \\\n  --opt o=bind \\\n  --opt device=/data/zealot/redis\n\ndocker volume create --name zealot-postgres \\\n  --opt type=none \\\n  --opt o=bind \\\n  --opt device=/data/zealot/postgres\n"})}),"\n",(0,l.jsx)(o.h4,{id:"2-\u4fee\u6539-docker-compose-\u7684-volumes-\u90e8\u5206",children:"2. \u4fee\u6539 docker-compose \u7684 volumes \u90e8\u5206"}),"\n",(0,l.jsxs)(o.p,{children:["\u6253\u5f00 ",(0,l.jsx)(o.code,{children:"docker-compose.yml"})," \u62c9\u5230\u6700\u5e95\u90e8\u627e\u5230 ",(0,l.jsx)(o.code,{children:"volumes:"})," \u5f00\u5934\u7684\u90e8\u5206\uff0c\u4fee\u6539\u4e3a\u5982\u4e0b\u5185\u5bb9\uff1a"]}),"\n",(0,l.jsx)(o.pre,{children:(0,l.jsx)(o.code,{className:"language-yaml",children:"volumes:\n  zealot-data:\n    driver: local\n    driver_opts:\n      o: bind\n      type: none\n      device: /data/zealot/data\n  zealot-redis:\n    driver: local\n    driver_opts:\n      o: bind\n      type: none\n      device: /data/zealot/redis\n\n  zealot-postgres:\n    driver: local\n    driver_opts:\n      o: bind\n      type: none\n      device: /data/zealot/postgres\n"})})]})}function h(e={}){const{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,l.jsx)(o,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},1151:(e,o,n)=>{n.d(o,{Z:()=>r,a:()=>c});var l=n(7294);const s={},d=l.createContext(s);function c(e){const o=l.useContext(d);return l.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),l.createElement(d.Provider,{value:o},e.children)}}}]);
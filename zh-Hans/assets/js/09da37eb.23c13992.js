"use strict";(self.webpackChunkzealot_new_docs=self.webpackChunkzealot_new_docs||[]).push([[2654],{1473:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>a});var l=t(5893),s=t(1151);const o={sidebar_label:"Fly"},r="\u90e8\u7f72 Zealot \u5230 Fly \u6307\u5357",i={id:"self-hosted/deployment/fly",title:"\u90e8\u7f72 Zealot \u5230 Fly \u6307\u5357",description:"Zealot \u652f\u6301 fly.io \u5b98\u65b9\u7684\u5e94\u7528\u914d\u7f6e\u683c\u5f0f\uff08fly.toml\uff09\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-5.1.0/self-hosted/deployment/fly.md",sourceDirName:"self-hosted/deployment",slug:"/self-hosted/deployment/fly",permalink:"/zh-Hans/docs/5.1.0/self-hosted/deployment/fly",draft:!1,unlisted:!1,editUrl:"https://github.com/tryzealot/docs/tree/main/versioned_docs/version-5.1.0/self-hosted/deployment/fly.md",tags:[],version:"5.1.0",frontMatter:{sidebar_label:"Fly"},sidebar:"selfHosted",previous:{title:"Cloud Provider Guides",permalink:"/zh-Hans/docs/5.1.0/category/cloud-provider-guides"},next:{title:"Railway",permalink:"/zh-Hans/docs/5.1.0/self-hosted/deployment/railway"}},c={},a=[{value:"\u90e8\u7f72\u6b65\u9aa4",id:"\u90e8\u7f72\u6b65\u9aa4",level:2},{value:"\u914d\u7f6e\u6587\u4ef6",id:"\u914d\u7f6e\u6587\u4ef6",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"\u90e8\u7f72-zealot-\u5230-fly-\u6307\u5357",children:"\u90e8\u7f72 Zealot \u5230 Fly \u6307\u5357"}),"\n",(0,l.jsxs)(n.p,{children:["Zealot \u652f\u6301 ",(0,l.jsx)(n.a,{href:"https://fly.io",children:"fly.io"})," \u5b98\u65b9\u7684\u5e94\u7528\u914d\u7f6e\u683c\u5f0f\uff08fly.toml\uff09\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"\u90e8\u7f72\u6b65\u9aa4",children:"\u90e8\u7f72\u6b65\u9aa4"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u9884\u5148\u5b89\u88c5 ",(0,l.jsx)(n.a,{href:"https://fly.io/docs/flyctl/",children:"flyctl"})," \u547d\u4ee4\u884c\u5de5\u5177\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:["\u590d\u5236\u4e0b\u9762",(0,l.jsx)(n.a,{href:"#app-configuration",children:"\u914d\u7f6e\u6587\u4ef6"})," \u4fdd\u5b58\u4e3a ",(0,l.jsx)(n.code,{children:"fly.toml"})," \u6587\u4ef6\u653e\u5728\u9879\u76ee\u6839\u76ee\u5f55\uff0c\u6839\u636e\u521b\u5efa\u7684 fly app \u9879\u76ee\u4fee\u6539 app \u7684\u503c\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:["\u8fd0\u884c ",(0,l.jsx)(n.code,{children:"flyctl deploy"})," \u5f00\u59cb\u6784\u5efa\u548c\u90e8\u7f72\u5de5\u4f5c\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:["\u8fd0\u884c ",(0,l.jsx)(n.code,{children:"fly scale vm shared-cpu-1x --memory 512"})," \u6765\u8fbe\u5230 Zealot \u53ef\u5141\u8bb8\u7684\u5185\u5b58\u73af\u5883\uff0c\u9ed8\u8ba4\u514d\u8d39\u7684 256M \u5185\u5b58\u5b9e\u9645\u53ea\u6709 205M\uff0cZealot \u8fd0\u884c\u8d77\u6765\u95f2\u7f6e\u72b6\u6001\u4f1a 190M \u5230\u4f1a\u63d0\u793a OOM \u5185\u5b58\u6ea2\u51fa\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"\u914d\u7f6e\u6587\u4ef6",children:"\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-toml",children:'app = "[app-name:changeme]"\nkill_signal = "SIGINT"\nkill_timeout = 120\nprocesses = []\n\n[build]\n  image = "ghcr.io/tryzealot/zealot:nightly"\n\n[experimental]\n  allowed_public_ports = []\n  auto_rollback = true\n\n[[services]]\n  http_checks = []\n  internal_port = 80\n  processes = ["app"]\n  protocol = "tcp"\n  script_checks = []\n  [services.concurrency]\n    hard_limit = 25\n    soft_limit = 20\n    type = "connections"\n\n  [[services.ports]]\n    force_https = true\n    handlers = ["http"]\n    port = 80\n\n  [[services.ports]]\n    handlers = ["tls", "http"]\n    port = 443\n\n  [[services.tcp_checks]]\n    grace_period = "1s"\n    interval = "15s"\n    restart_limit = 0\n    timeout = "2s"\n\n[[statics]]\n  guest_path = "/app/public"\n  url_prefix = "/"\n'})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>r});var l=t(7294);const s={},o=l.createContext(s);function r(e){const n=l.useContext(o);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),l.createElement(o.Provider,{value:n},e.children)}}}]);
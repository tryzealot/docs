"use strict";(self.webpackChunkzealot_new_docs=self.webpackChunkzealot_new_docs||[]).push([[8590],{4122:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var o=t(5893),s=t(1151);const a={},i="Webhooks",r={id:"user-guide/webhooks",title:"Webhooks",description:"Zealot provides a webhook for message notifications for each application channel.",source:"@site/versioned_docs/version-5.2.0/user-guide/webhooks.md",sourceDirName:"user-guide",slug:"/user-guide/webhooks",permalink:"/docs/user-guide/webhooks",draft:!1,unlisted:!1,editUrl:"https://github.com/tryzealot/docs/tree/main/versioned_docs/version-5.2.0/user-guide/webhooks.md",tags:[],version:"5.2.0",frontMatter:{},sidebar:"userGuide",previous:{title:"Fetch UDID",permalink:"/docs/user-guide/toolkits/fetch-udid"},next:{title:"Slack",permalink:"/docs/user-guide/webhooks/slack"}},l={},c=[{value:"Payload (default)",id:"payload-default",level:2}];function d(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"webhooks",children:"Webhooks"}),"\n",(0,o.jsx)(n.p,{children:"Zealot provides a webhook for message notifications for each application channel.\nThe webhook is a fully customizable structure that can be used for most notification services, such as Wecom, Dingtalk, Slack, etc."}),"\n",(0,o.jsx)(n.h2,{id:"payload-default",children:"Payload (default)"}),"\n",(0,o.jsxs)(n.p,{children:["Each parameter of the default structure has its value provided as a variable,\nand each variable starts with ",(0,o.jsx)(n.code,{children:"@"}),", the default structure will be used if the custom structure is left empty when creating the webhook.\nThe following variables are all provided."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ruby",children:"{\n  event: @event,\n  username: @username,\n  email: @email,\n  title: @title,\n  app_name: @name,\n  device_type: @device_type,\n  release_version: @release_version,\n  build_version: @build_version,\n  size: @file_size,\n  changelog: @changelog,\n  install_url: @install_url,\n  icon_url: @icon_url,\n  qrcode_url: @qrcode_url,\n  uploaded_at: @uploaded_at\n}\n"})}),"\n",(0,o.jsx)(n.p,{children:"Output:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n  "event": "upload_events",\n  "username": "foobar",\n  "email": "foobar@example.com",\n  "title": "Zealot upload 1.0.0 version",\n  "app_name": "Zealot",\n  "device_type": "iOS",\n  "release_version": "1.0.0",\n  "build_version": "1",\n  "size": "30 MB",\n  "install_url": "https://zealot.test/api/apps/download/12354",\n  "icon_url": "https://zealot.test/api/apps/icon.png",\n  "qrcode_url": "https://zealot.test/api/apps/354/qrcode",\n  "uploaded_at": "2019-12-30 11:33:00",\n  "changelog": "- Add feture A\\n- Fix issue B\\n- Release v1.0.0",\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>i});var o=t(7294);const s={},a=o.createContext(s);function i(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);
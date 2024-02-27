"use strict";(self.webpackChunkzealot_new_docs=self.webpackChunkzealot_new_docs||[]).push([[7133],{3859:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var s=i(5893),t=i(1151);const a={},r="Environment Variables",o={id:"self-hosted/configuration/environment-variables",title:"Environment Variables",description:"The .env File",source:"@site/versioned_docs/version-4.x/self-hosted/configuration/environment-variables.md",sourceDirName:"self-hosted/configuration",slug:"/self-hosted/configuration/environment-variables",permalink:"/docs/4.x/self-hosted/configuration/environment-variables",draft:!1,unlisted:!1,editUrl:"https://github.com/tryzealot/docs/tree/main/versioned_docs/version-4.x/self-hosted/configuration/environment-variables.md",tags:[],version:"4.x",frontMatter:{},sidebar:"selfHosted",previous:{title:"Configuration",permalink:"/docs/4.x/category/configuration"},next:{title:"Third-party Authentication",permalink:"/docs/4.x/self-hosted/configuration/third-party-authentication"}},l={},d=[{value:"The .env File",id:"the-env-file",level:2},{value:"Configure HTTPS (SSL)",id:"configure-https-ssl",level:2},{value:"Configure URL (Domain)",id:"configure-url-domain",level:2},{value:"Database configuration",id:"database-configuration",level:2},{value:"Postgresql",id:"postgresql",level:3},{value:"Redis",id:"redis",level:3},{value:"Configure default language",id:"configure-default-language",level:2},{value:"Configure default appearance",id:"configure-default-appearance",level:2},{value:"Configure default Administer",id:"configure-default-administer",level:2},{value:"Enable new user registration",id:"enable-new-user-registration",level:2},{value:"Enable guest mode",id:"enable-guest-mode",level:2},{value:"Configure emails",id:"configure-emails",level:2},{value:"Disbale Cable request protection",id:"disbale-cable-request-protection",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"environment-variables",children:"Environment Variables"}),"\n",(0,s.jsx)(n.h2,{id:"the-env-file",children:"The .env File"}),"\n",(0,s.jsxs)(n.p,{children:["You can set the correct values as per the following options. Once you set the values, you should rename the file to ",(0,s.jsx)(n.code,{children:".env"})," before you start the server."]}),"\n",(0,s.jsx)(n.h2,{id:"configure-https-ssl",children:"Configure HTTPS (SSL)"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Due to Apple's mandatory requirement of mandatory HTTPS for online deployment and download services"}),", d\nownloading applications will be forced to go HTTPS protocol when redeploying."]}),"\n",(0,s.jsx)(n.p,{children:"If the deployment is a standalone service on a single machine, it is recommended to enable Let's Encrypt free SSL certificate:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ZEALOT_CERT_EMAIL=zealot@example.com\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"The following self-signed certificate file name, can not be set at the same time"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"If the deployed machine can only use self-signed certificates, they need to be configured,\nbut note that iOS downloads require the iOS device to authorize the self-signed certificate before the download and installation is allowed. (Not recommended)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ZEALOT_CERT=zealot.test.pem\nZEALOT_CERT_KEY=zealot.test-key.pem\n"})}),"\n",(0,s.jsx)(n.h2,{id:"configure-url-domain",children:"Configure URL (Domain)"}),"\n",(0,s.jsx)(n.p,{children:"Must be configured otherwise downloaded applications and some static resources will not be accessed correctly"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# No need http:// or https://\nZEALOT_DOMAIN=zealot.com\n"})}),"\n",(0,s.jsx)(n.h2,{id:"database-configuration",children:"Database configuration"}),"\n",(0,s.jsx)(n.p,{children:"If you have reusable postgresql and redis services,\nyou can also customize the configuration to use them instead of\nusing the services configured by default with docker-compose."}),"\n",(0,s.jsx)(n.h3,{id:"postgresql",children:"Postgresql"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ZEALOT_POSTGRES_HOST=127.0.0.1\nZEALOT_POSTGRES_PORT=5432\nZEALOT_POSTGRES_USERNAME=postgres\nZEALOT_POSTGRES_PASSWORD=ze@l0t\nZEALOT_POSTGRES_DB_NAME=zealot\n"})}),"\n",(0,s.jsx)(n.h3,{id:"redis",children:"Redis"}),"\n",(0,s.jsx)(n.p,{children:"This is a URL connection mainly for most cloud services compatibility"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"REDIS_URL=redis://user:pass@127.0.0.1:6379/0\n"})}),"\n",(0,s.jsx)(n.h2,{id:"configure-default-language",children:"Configure default language"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Packs"}),(0,s.jsx)(n.th,{children:"Value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"zh-CN"}),(0,s.jsx)(n.td,{children:"Simplified Chinese (default)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"en"}),(0,s.jsx)(n.td,{children:"English"})]})]})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"DEFAULT_LOCALE=en\n"})}),"\n",(0,s.jsx)(n.h2,{id:"configure-default-appearance",children:"Configure default appearance"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Appearance"}),(0,s.jsx)(n.th,{children:"Value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"light"}),(0,s.jsx)(n.td,{children:"Light mode(default)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"dark"}),(0,s.jsx)(n.td,{children:"Dark mode"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"auto"}),(0,s.jsx)(n.td,{children:"System auto"})]})]})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ZEALOT_APPEARANCE=dark\n"})}),"\n",(0,s.jsx)(n.h2,{id:"configure-default-administer",children:"Configure default Administer"}),"\n",(0,s.jsx)(n.p,{children:"The default does not configure the following will also generate the following account and\npassword as an account with administrator privileges, it is recommended to change the password again after configuration."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ZEALOT_ADMIN_EMAIL=admin@zealot.com\nZEALOT_ADMIN_PASSWORD=ze@l0t\n"})}),"\n",(0,s.jsx)(n.h2,{id:"enable-new-user-registration",children:"Enable new user registration"}),"\n",(0,s.jsx)(n.p,{children:"After closing the registration, the administrator can add users manually through the user management in the administration panel."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# Open registration\nZEALOT_REGISTER_ENABLED=true\n\n# Close registration\nZEALOT_REGISTER_ENABLED=false\n"})}),"\n",(0,s.jsx)(n.h2,{id:"enable-guest-mode",children:"Enable guest mode"}),"\n",(0,s.jsxs)(n.p,{children:["Enable the visitor mode to allow the application to view, download and install,\nit is recommended that the company internal reliance on permissions is not high condition to use,\nspecific permission comparison can ",(0,s.jsx)(n.a,{href:"/docs/user-guide/administrator/permissions",children:"see here for details"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# Guest mode is ON\nZEALOT_GUEST_MODE=true\n\n# Guest mode is OFF\nZEALOT_GUEST_MODE=false\n"})}),"\n",(0,s.jsx)(n.h2,{id:"configure-emails",children:"Configure emails"}),"\n",(0,s.jsxs)(n.p,{children:["Currently, only ",(0,s.jsx)(n.code,{children:"smtp"})," is supported to configure email notification service.\nEmail notification mainly affects are user registration, sending activation emails and\nchanging password service, but it does not affect the use if it is not turned on."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# SMTP settings\nSMTP_ADDRESS=smtp.gmail.com\nSMTP_PORT=587\nSMTP_DOMAIN=gmail.com\nSMTP_USERNAME=you@gmail.com\nSMTP_PASSWORD=yourpassword\nSMTP_AUTH_METHOD=plain\nSMTP_ENABLE_STARTTLS_AUTO=true\n\n# Sender and email address by default\nACTION_MAILER_DEFAULT_FROM=you@gmail.com\nACTION_MAILER_DEFAULT_TO=you@gmail.com\n"})}),"\n",(0,s.jsx)(n.h2,{id:"disbale-cable-request-protection",children:"Disbale Cable request protection"}),"\n",(0,s.jsx)(n.p,{children:"Experimental:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"ZEALOT_DISABLE_CABLE_REQUEST_PROTECTION=true\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>r});var s=i(7294);const t={},a=s.createContext(t);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);
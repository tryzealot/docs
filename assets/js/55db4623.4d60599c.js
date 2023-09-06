"use strict";(self.webpackChunkzealot_new_docs=self.webpackChunkzealot_new_docs||[]).push([[7133],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,g=c["".concat(s,".").concat(m)]||c[m]||p[m]||l;return n?a.createElement(g,o(o({ref:t},d),{},{components:n})):a.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1931:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const l={},o="Environment Variables",i={unversionedId:"self-hosted/configuration/environment-variables",id:"version-4.x/self-hosted/configuration/environment-variables",title:"Environment Variables",description:"The .env File",source:"@site/versioned_docs/version-4.x/self-hosted/configuration/environment-variables.md",sourceDirName:"self-hosted/configuration",slug:"/self-hosted/configuration/environment-variables",permalink:"/docs/4.x/self-hosted/configuration/environment-variables",draft:!1,editUrl:"https://github.com/tryzealot/docs/tree/main/versioned_docs/version-4.x/self-hosted/configuration/environment-variables.md",tags:[],version:"4.x",frontMatter:{},sidebar:"selfHosted",previous:{title:"Configuration",permalink:"/docs/4.x/category/configuration"},next:{title:"Third-party Authentication",permalink:"/docs/4.x/self-hosted/configuration/third-party-authentication"}},s={},u=[{value:"The .env File",id:"the-env-file",level:2},{value:"Configure HTTPS (SSL)",id:"configure-https-ssl",level:2},{value:"Configure URL (Domain)",id:"configure-url-domain",level:2},{value:"Database configuration",id:"database-configuration",level:2},{value:"Postgresql",id:"postgresql",level:3},{value:"Redis",id:"redis",level:3},{value:"Configure default language",id:"configure-default-language",level:2},{value:"Configure default appearance",id:"configure-default-appearance",level:2},{value:"Configure default Administer",id:"configure-default-administer",level:2},{value:"Enable new user registration",id:"enable-new-user-registration",level:2},{value:"Enable guest mode",id:"enable-guest-mode",level:2},{value:"Configure emails",id:"configure-emails",level:2},{value:"Disbale Cable request protection",id:"disbale-cable-request-protection",level:2}],d={toc:u},c="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"environment-variables"},"Environment Variables"),(0,r.kt)("h2",{id:"the-env-file"},"The .env File"),(0,r.kt)("p",null,"You can set the correct values as per the following options. Once you set the values, you should rename the file to ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," before you start the server."),(0,r.kt)("h2",{id:"configure-https-ssl"},"Configure HTTPS (SSL)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Due to Apple's mandatory requirement of mandatory HTTPS for online deployment and download services"),", d\nownloading applications will be forced to go HTTPS protocol when redeploying."),(0,r.kt)("p",null,"If the deployment is a standalone service on a single machine, it is recommended to enable Let's Encrypt free SSL certificate:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ZEALOT_CERT_EMAIL=zealot@example.com\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The following self-signed certificate file name, can not be set at the same time")),(0,r.kt)("p",null,"If the deployed machine can only use self-signed certificates, they need to be configured,\nbut note that iOS downloads require the iOS device to authorize the self-signed certificate before the download and installation is allowed. (Not recommended)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ZEALOT_CERT=zealot.test.pem\nZEALOT_CERT_KEY=zealot.test-key.pem\n")),(0,r.kt)("h2",{id:"configure-url-domain"},"Configure URL (Domain)"),(0,r.kt)("p",null,"Must be configured otherwise downloaded applications and some static resources will not be accessed correctly"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# No need http:// or https://\nZEALOT_DOMAIN=zealot.com\n")),(0,r.kt)("h2",{id:"database-configuration"},"Database configuration"),(0,r.kt)("p",null,"If you have reusable postgresql and redis services,\nyou can also customize the configuration to use them instead of\nusing the services configured by default with docker-compose."),(0,r.kt)("h3",{id:"postgresql"},"Postgresql"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ZEALOT_POSTGRES_HOST=127.0.0.1\nZEALOT_POSTGRES_PORT=5432\nZEALOT_POSTGRES_USERNAME=postgres\nZEALOT_POSTGRES_PASSWORD=ze@l0t\nZEALOT_POSTGRES_DB_NAME=zealot\n")),(0,r.kt)("h3",{id:"redis"},"Redis"),(0,r.kt)("p",null,"This is a URL connection mainly for most cloud services compatibility"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"REDIS_URL=redis://user:pass@127.0.0.1:6379/0\n")),(0,r.kt)("h2",{id:"configure-default-language"},"Configure default language"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Packs"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"zh-CN"),(0,r.kt)("td",{parentName:"tr",align:null},"Simplified Chinese (default)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"en"),(0,r.kt)("td",{parentName:"tr",align:null},"English")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"DEFAULT_LOCALE=en\n")),(0,r.kt)("h2",{id:"configure-default-appearance"},"Configure default appearance"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Appearance"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"light"),(0,r.kt)("td",{parentName:"tr",align:null},"Light mode(default)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"dark"),(0,r.kt)("td",{parentName:"tr",align:null},"Dark mode")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"auto"),(0,r.kt)("td",{parentName:"tr",align:null},"System auto")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ZEALOT_APPEARANCE=dark\n")),(0,r.kt)("h2",{id:"configure-default-administer"},"Configure default Administer"),(0,r.kt)("p",null,"The default does not configure the following will also generate the following account and\npassword as an account with administrator privileges, it is recommended to change the password again after configuration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ZEALOT_ADMIN_EMAIL=admin@zealot.com\nZEALOT_ADMIN_PASSWORD=ze@l0t\n")),(0,r.kt)("h2",{id:"enable-new-user-registration"},"Enable new user registration"),(0,r.kt)("p",null,"After closing the registration, the administrator can add users manually through the user management in the administration panel."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Open registration\nZEALOT_REGISTER_ENABLED=true\n\n# Close registration\nZEALOT_REGISTER_ENABLED=false\n")),(0,r.kt)("h2",{id:"enable-guest-mode"},"Enable guest mode"),(0,r.kt)("p",null,"Enable the visitor mode to allow the application to view, download and install,\nit is recommended that the company internal reliance on permissions is not high condition to use,\nspecific permission comparison can ",(0,r.kt)("a",{parentName:"p",href:"/docs/user-guide/administrator/permissions"},"see here for details")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Guest mode is ON\nZEALOT_GUEST_MODE=true\n\n# Guest mode is OFF\nZEALOT_GUEST_MODE=false\n")),(0,r.kt)("h2",{id:"configure-emails"},"Configure emails"),(0,r.kt)("p",null,"Currently, only ",(0,r.kt)("inlineCode",{parentName:"p"},"smtp")," is supported to configure email notification service.\nEmail notification mainly affects are user registration, sending activation emails and\nchanging password service, but it does not affect the use if it is not turned on."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# SMTP settings\nSMTP_ADDRESS=smtp.gmail.com\nSMTP_PORT=587\nSMTP_DOMAIN=gmail.com\nSMTP_USERNAME=you@gmail.com\nSMTP_PASSWORD=yourpassword\nSMTP_AUTH_METHOD=plain\nSMTP_ENABLE_STARTTLS_AUTO=true\n\n# Sender and email address by default\nACTION_MAILER_DEFAULT_FROM=you@gmail.com\nACTION_MAILER_DEFAULT_TO=you@gmail.com\n")),(0,r.kt)("h2",{id:"disbale-cable-request-protection"},"Disbale Cable request protection"),(0,r.kt)("p",null,"Experimental:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ZEALOT_DISABLE_CABLE_REQUEST_PROTECTION=true\n")))}p.isMDXComponent=!0}}]);
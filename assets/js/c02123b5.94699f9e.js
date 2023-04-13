"use strict";(self.webpackChunkzealot_new_docs=self.webpackChunkzealot_new_docs||[]).push([[3877],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>m});var n=t(7294);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,n,l=function(e,a){if(null==e)return{};var t,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=n.createContext({}),u=function(e){var a=n.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},c=function(e){var a=u(e.components);return n.createElement(o.Provider,{value:a},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},b=n.forwardRef((function(e,a){var t=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(t),b=l,m=d["".concat(o,".").concat(b)]||d[b]||p[b]||r;return t?n.createElement(m,s(s({ref:a},c),{},{components:t})):n.createElement(m,s({ref:a},c))}));function m(e,a){var t=arguments,l=a&&a.mdxType;if("string"==typeof e||l){var r=t.length,s=new Array(r);s[0]=b;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i[d]="string"==typeof e?e:l,s[1]=i;for(var u=2;u<r;u++)s[u]=t[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}b.displayName="MDXCreateElement"},5162:(e,a,t)=>{t.d(a,{Z:()=>s});var n=t(7294),l=t(6010);const r={tabItem:"tabItem_Ymn6"};function s(e){let{children:a,hidden:t,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,s),hidden:t},a)}},4866:(e,a,t)=>{t.d(a,{Z:()=>N});var n=t(7462),l=t(7294),r=t(6010),s=t(2466),i=t(6550),o=t(1980),u=t(7392),c=t(12);function d(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:a,label:t,attributes:n,default:l}}=e;return{value:a,label:t,attributes:n,default:l}}))}function p(e){const{values:a,children:t}=e;return(0,l.useMemo)((()=>{const e=a??d(t);return function(e){const a=(0,u.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,t])}function b(e){let{value:a,tabValues:t}=e;return t.some((e=>e.value===a))}function m(e){let{queryString:a=!1,groupId:t}=e;const n=(0,i.k6)(),r=function(e){let{queryString:a=!1,groupId:t}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:a,groupId:t});return[(0,o._X)(r),(0,l.useCallback)((e=>{if(!r)return;const a=new URLSearchParams(n.location.search);a.set(r,e),n.replace({...n.location,search:a.toString()})}),[r,n])]}function g(e){const{defaultValue:a,queryString:t=!1,groupId:n}=e,r=p(e),[s,i]=(0,l.useState)((()=>function(e){let{defaultValue:a,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!b({value:a,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:a,tabValues:r}))),[o,u]=m({queryString:t,groupId:n}),[d,g]=function(e){let{groupId:a}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,r]=(0,c.Nk)(t);return[n,(0,l.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:n}),v=(()=>{const e=o??d;return b({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{v&&i(v)}),[v]);return{selectedValue:s,selectValue:(0,l.useCallback)((e=>{if(!b({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,r]),tabValues:r}}var v=t(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:a,block:t,selectedValue:i,selectValue:o,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),p=e=>{const a=e.currentTarget,t=c.indexOf(a),n=u[t].value;n!==i&&(d(a),o(n))},b=e=>{let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}a?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},a)},u.map((e=>{let{value:a,label:t,attributes:s}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===a?0:-1,"aria-selected":i===a,key:a,ref:e=>c.push(e),onKeyDown:b,onClick:p},s,{className:(0,r.Z)("tabs__item",h.tabItem,s?.className,{"tabs__item--active":i===a})}),t??a)})))}function k(e){let{lazy:a,children:t,selectedValue:n}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=r.find((e=>e.props.value===n));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==n}))))}function y(e){const a=g(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",h.tabList)},l.createElement(f,(0,n.Z)({},e,a)),l.createElement(k,(0,n.Z)({},e,a)))}function N(e){const a=(0,v.Z)();return l.createElement(y,(0,n.Z)({key:String(a)},e))}},4881:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var n=t(7462),l=(t(7294),t(3905)),r=t(4866),s=t(5162);const i={sidebar_label:"Source code"},o="Source code",u={unversionedId:"contributing-guide/local-development/source-code",id:"version-4.x/contributing-guide/local-development/source-code",title:"Source code",description:"The following is a tutorial on local deployment development for different operating systems.",source:"@site/versioned_docs/version-4.x/contributing-guide/local-development/source-code.md",sourceDirName:"contributing-guide/local-development",slug:"/contributing-guide/local-development/source-code",permalink:"/docs/contributing-guide/local-development/source-code",draft:!1,editUrl:"https://github.com/tryzealot/docs/tree/main/versioned_docs/version-4.x/contributing-guide/local-development/source-code.md",tags:[],version:"4.x",frontMatter:{sidebar_label:"Source code"},sidebar:"contributingGuide",previous:{title:"Visual Studio Code Dev Container Setup",permalink:"/docs/contributing-guide/local-development/devcontainer"}},c={},d=[{value:"Prepare dependencies",id:"prepare-dependencies",level:2},{value:"macOS",id:"macos",level:3},{value:"Install homebrew",id:"install-homebrew",level:4},{value:"Install dependencies",id:"install-dependencies",level:4},{value:"Setup Database and cache services",id:"setup-database-and-cache-services",level:4},{value:"yarn",id:"yarn",level:4},{value:"Debian (Ubuntu)",id:"debian-ubuntu",level:3},{value:"System dependencies",id:"system-dependencies",level:4},{value:"Install dependencies",id:"install-dependencies-1",level:4},{value:"Setup Database and cache services",id:"setup-database-and-cache-services-1",level:4},{value:"node",id:"node",level:4},{value:"Alpine Linux",id:"alpine-linux",level:3},{value:"System dependencies",id:"system-dependencies-1",level:4},{value:"Install dependencies",id:"install-dependencies-2",level:4},{value:"Setup Database and cache services",id:"setup-database-and-cache-services-2",level:4},{value:"Install Ruby",id:"install-ruby",level:2},{value:"Fetch source code",id:"fetch-source-code",level:2},{value:"Initialize Zealot",id:"initialize-zealot",level:2},{value:"bundler",id:"bundler",level:3},{value:"yarn",id:"yarn-1",level:3},{value:"Initialize database",id:"initialize-database",level:3},{value:"Initialize default account and demo data",id:"initialize-default-account-and-demo-data",level:3},{value:"Launch services",id:"launch-services",level:3}],p={toc:d},b="wrapper";function m(e){let{components:a,...t}=e;return(0,l.kt)(b,(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"source-code"},"Source code"),(0,l.kt)("p",null,"The following is a tutorial on local deployment development for different operating systems."),(0,l.kt)("h2",{id:"prepare-dependencies"},"Prepare dependencies"),(0,l.kt)("h3",{id:"macos"},"macOS"),(0,l.kt)("h4",{id:"install-homebrew"},"Install homebrew"),(0,l.kt)("p",null,"First you need to install Xcode Command tools:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ xcode-select --install\n")),(0,l.kt)("p",null,"Then install Homebrew, the package management tool for macOS"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"\n')),(0,l.kt)("h4",{id:"install-dependencies"},"Install dependencies"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ brew install redis postgresql webp imagemagick node git\n")),(0,l.kt)("h4",{id:"setup-database-and-cache-services"},"Setup Database and cache services"),(0,l.kt)("p",null,"Run postgresql and redis services"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ brew services start postgresql\n$ brew services start redis\n")),(0,l.kt)("p",null,"You also need to create a default username in Postgresql\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ createuser --superuser zealot\n\n# If you are worried about the high privilege, you can only enable the create database privilege\n$ createuser --createdb zealot\n")),(0,l.kt)("h4",{id:"yarn"},"yarn"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install -g yarn\n")),(0,l.kt)("h3",{id:"debian-ubuntu"},"Debian (Ubuntu)"),(0,l.kt)("h4",{id:"system-dependencies"},"System dependencies"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ apt update\n$ apt install -y libssl-dev tar tzdata git imagemagick libjpeg-dev libpng-dev libtiff-dev libwebp-dev\n")),(0,l.kt)("h4",{id:"install-dependencies-1"},"Install dependencies"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ apt install -y redis postgresql-client node\n")),(0,l.kt)("h4",{id:"setup-database-and-cache-services-1"},"Setup Database and cache services"),(0,l.kt)("p",null,"Run postgresql and redis services"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ systemctl postgres start\n$ systemctl redis start\n")),(0,l.kt)("p",null,"You also need to create a default username in Postgresql\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ initdb -D /var/lib/postgresql/data\n$ createuser --superuser zealot\n\n# If you are worried about the high privilege, you can only enable the create database privilege\n$ createuser --createdb zealot\n")),(0,l.kt)("h4",{id:"node"},"node"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install -g yarn\n")),(0,l.kt)("h3",{id:"alpine-linux"},"Alpine Linux"),(0,l.kt)("h4",{id:"system-dependencies-1"},"System dependencies"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ apk --update --no-cache add build-base libxml2 libxslt git \\\n    libxml2-dev libxslt-dev yaml-dev postgresql-dev nodejs npm yarn libwebp-dev libpng-dev tiff-dev \\\n    tzdata\n")),(0,l.kt)("p",null,"Needs install ",(0,l.kt)("inlineCode",{parentName:"p"},"gcompat")," if use ",(0,l.kt)("inlineCode",{parentName:"p"},"arm"),' architecture. or an exception will throws such like "',(0,l.kt)("a",{parentName:"p",href:"https://nokogiri.org/tutorials/installing_nokogiri.html#linux-musl-error-loading-shared-library"},"Error loading shared library"),'".'),(0,l.kt)("h4",{id:"install-dependencies-2"},"Install dependencies"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ apk --update --no-cache redis postgresql\n")),(0,l.kt)("h4",{id:"setup-database-and-cache-services-2"},"Setup Database and cache services"),(0,l.kt)("p",null,"Run postgresql and redis services"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ rc-service postgres start\n$ rc-service redis start\n")),(0,l.kt)("p",null,"You also need to create a default username in Postgresql\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ initdb -D /var/lib/postgresql/data\n$ createuser --superuser zealot\n\n# If you are worried about the high privilege, you can only enable the create database privilege\n$ createuser --createdb zealot\n")),(0,l.kt)("h2",{id:"install-ruby"},"Install Ruby"),(0,l.kt)("p",null,"Can be installed by either asdf, rvm as ruby version manager."),(0,l.kt)(r.Z,{groupId:"install-ruby",mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"asdf",mdxType:"TabItem"},(0,l.kt)("p",null,"Following the ",(0,l.kt)("a",{parentName:"p",href:"http://asdf-vm.com/guide/getting-started.html"},"offical install guide")," then:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# Enable Ruby 3.2.0 YJIT need install rust 1.58+\n# Optinal install:\nasdf plugin add rust\nasdf install rust latest\nasdf global rust latest\nexport RUBY_CONFIGURE_OPTS=--enable-yjit\n\n# Required:\nasdf plugin add ruby\nasdf install ruby 3.2.0\nasdf global ruby 3.2.0\n"))),(0,l.kt)(s.Z,{value:"rvm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl -sSL https://get.rvm.io | bash -s stable\n$ rvm install 3.2.0 --disable-binary\n")))),(0,l.kt)("h2",{id:"fetch-source-code"},"Fetch source code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/tryzealot/zealot.git\n")),(0,l.kt)("h2",{id:"initialize-zealot"},"Initialize Zealot"),(0,l.kt)("p",null,"All the following steps need to be performed in the zealot root directory."),(0,l.kt)("h3",{id:"bundler"},"bundler"),(0,l.kt)("p",null,"Install Ruby gems"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ [sudo] gem install bundler\n$ bundle install\n")),(0,l.kt)("h3",{id:"yarn-1"},"yarn"),(0,l.kt)("p",null,"Install javascript packages:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn install\n")),(0,l.kt)("h3",{id:"initialize-database"},"Initialize database"),(0,l.kt)("p",null,"Make sure there are no problems with the connection database information, then the database tables will be created and the table structure will be created:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ rails db:create\n$ rails db:migrate\n")),(0,l.kt)("p",null,"Configuring the connection database can be done via ",(0,l.kt)("a",{parentName:"p",href:"/docs/self-hosted/configuration/environment-variables"},"environment variables")," or by changing the ",(0,l.kt)("inlineCode",{parentName:"p"},"config/database.yml")," file."),(0,l.kt)("h3",{id:"initialize-default-account-and-demo-data"},"Initialize default account and demo data"),(0,l.kt)("p",null,"Initialize administrator account and sample application"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ rails db:seed\n")),(0,l.kt)("h3",{id:"launch-services"},"Launch services"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"$ bin/dev\n")),(0,l.kt)("p",null,"Open brower ",(0,l.kt)("inlineCode",{parentName:"p"},"http://localhost:3000")))}m.isMDXComponent=!0}}]);
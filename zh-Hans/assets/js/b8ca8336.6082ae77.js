"use strict";(self.webpackChunkzealot_new_docs=self.webpackChunkzealot_new_docs||[]).push([[4127],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var l=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=l.createContext({}),u=function(e){var t=l.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=u(e.components);return l.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(a),m=r,b=c["".concat(i,".").concat(m)]||c[m]||p[m]||n;return a?l.createElement(b,s(s({ref:t},d),{},{components:a})):l.createElement(b,s({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,s=new Array(n);s[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var u=2;u<n;u++)s[u]=a[u];return l.createElement.apply(null,s)}return l.createElement.apply(null,a)}c.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(7294),r=a(6010);const n="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return l.createElement("div",{role:"tabpanel",className:(0,r.Z)(n,s),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(7462),r=a(7294),n=a(6010),s=a(2389),o=a(7392),i=a(7094),u=a(2466);const d="tabList__CuJ",p="tabItem_LNqP";function c(e){var t;const{lazy:a,block:s,defaultValue:c,values:m,groupId:b,className:g}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??h.map((e=>{let{props:{value:t,label:a,attributes:l}}=e;return{value:t,label:a,attributes:l}})),v=(0,o.l)(k,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===c?c:c??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==y&&!k.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:N}=(0,i.U)(),[w,$]=(0,r.useState)(y),O=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=b){const e=f[b];null!=e&&e!==w&&k.some((t=>t.value===e))&&$(e)}const T=e=>{const t=e.currentTarget,a=O.indexOf(t),l=k[a].value;l!==w&&(x(t),$(l),null!=b&&N(b,String(l)))},E=e=>{var t;let a=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;a=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;a=O[t]??O[O.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,n.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":s},g)},k.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,l.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>O.push(e),onKeyDown:E,onClick:T},s,{className:(0,n.Z)("tabs__item",p,null==s?void 0:s.className,{"tabs__item--active":w===t})}),a??t)}))),a?(0,r.cloneElement)(h.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,s.Z)();return r.createElement(c,(0,l.Z)({key:String(t)},e))}},7248:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var l=a(7462),r=(a(7294),a(3905)),n=a(5488),s=a(5162);const o={sidebar_label:"\u6e90\u7801"},i="\u6e90\u7801\u90e8\u7f72 Zealot \u6307\u5357",u={unversionedId:"self-hosted/deployment/source-code",id:"self-hosted/deployment/source-code",title:"\u6e90\u7801\u90e8\u7f72 Zealot \u6307\u5357",description:"\u5982\u4e0b\u6574\u7406\u4e86\u4e0d\u540c\u64cd\u4f5c\u7cfb\u7edf\u7684\u672c\u5730\u90e8\u7f72\u5f00\u53d1\u6559\u7a0b\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/self-hosted/deployment/source-code.md",sourceDirName:"self-hosted/deployment",slug:"/self-hosted/deployment/source-code",permalink:"/zh-Hans/docs/self-hosted/deployment/source-code",draft:!1,editUrl:"https://github.com/tryzealot/docs/tree/main/docs/self-hosted/deployment/source-code.md",tags:[],version:"current",frontMatter:{sidebar_label:"\u6e90\u7801"},sidebar:"selfHosted",previous:{title:"Kubernetes",permalink:"/zh-Hans/docs/self-hosted/deployment/kubernetes"},next:{title:"\u53cd\u5411\u4ee3\u7406",permalink:"/zh-Hans/docs/self-hosted/deployment/reverse-proxies"}},d={},p=[{value:"\u51c6\u5907\u90e8\u7f72\u73af\u5883",id:"\u51c6\u5907\u90e8\u7f72\u73af\u5883",level:2},{value:"macOS",id:"macos",level:3},{value:"\u5b89\u88c5 homebrew",id:"\u5b89\u88c5-homebrew",level:4},{value:"\u5b89\u88c5\u4f9d\u8d56",id:"\u5b89\u88c5\u4f9d\u8d56",level:4},{value:"\u914d\u7f6e Postgres \u548c Redis",id:"\u914d\u7f6e-postgres-\u548c-redis",level:4},{value:"yarn",id:"yarn",level:4},{value:"\u7591\u96be\u6742\u75c7",id:"\u7591\u96be\u6742\u75c7",level:4},{value:"M1 \u82af\u7247 MacOS \u95ee\u9898",id:"m1-\u82af\u7247-macos-\u95ee\u9898",level:5},{value:"Debian (Ubuntu)",id:"debian-ubuntu",level:3},{value:"\u5b89\u88c5\u73af\u5883\u4f9d\u8d56",id:"\u5b89\u88c5\u73af\u5883\u4f9d\u8d56",level:4},{value:"\u5b89\u88c5\u4f9d\u8d56",id:"\u5b89\u88c5\u4f9d\u8d56-1",level:4},{value:"\u914d\u7f6e Postgres \u548c Redis",id:"\u914d\u7f6e-postgres-\u548c-redis-1",level:4},{value:"node",id:"node",level:4},{value:"Alpine Linux",id:"alpine-linux",level:3},{value:"\u5b89\u88c5\u73af\u5883\u4f9d\u8d56",id:"\u5b89\u88c5\u73af\u5883\u4f9d\u8d56-1",level:4},{value:"\u5b89\u88c5\u4f9d\u8d56",id:"\u5b89\u88c5\u4f9d\u8d56-2",level:4},{value:"\u914d\u7f6e Postgres \u548c Redis",id:"\u914d\u7f6e-postgres-\u548c-redis-2",level:4},{value:"yarn",id:"yarn-1",level:4},{value:"\u5b89\u88c5 Ruby",id:"\u5b89\u88c5-ruby",level:2},{value:"\u514b\u9686\u6e90\u4ee3\u7801",id:"\u514b\u9686\u6e90\u4ee3\u7801",level:2},{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:2},{value:"bundler",id:"bundler",level:3},{value:"yarn",id:"yarn-2",level:3},{value:"\u521d\u59cb\u5316\u6570\u636e\u5e93",id:"\u521d\u59cb\u5316\u6570\u636e\u5e93",level:3},{value:"\u521d\u59cb\u5316\u9884\u5236\u6570\u636e",id:"\u521d\u59cb\u5316\u9884\u5236\u6570\u636e",level:3},{value:"\u8fd0\u884c Zealot \u670d\u52a1",id:"\u8fd0\u884c-zealot-\u670d\u52a1",level:3}],c={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,l.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u6e90\u7801\u90e8\u7f72-zealot-\u6307\u5357"},"\u6e90\u7801\u90e8\u7f72 Zealot \u6307\u5357"),(0,r.kt)("p",null,"\u5982\u4e0b\u6574\u7406\u4e86\u4e0d\u540c\u64cd\u4f5c\u7cfb\u7edf\u7684\u672c\u5730\u90e8\u7f72\u5f00\u53d1\u6559\u7a0b\u3002"),(0,r.kt)("h2",{id:"\u51c6\u5907\u90e8\u7f72\u73af\u5883"},"\u51c6\u5907\u90e8\u7f72\u73af\u5883"),(0,r.kt)("h3",{id:"macos"},"macOS"),(0,r.kt)("h4",{id:"\u5b89\u88c5-homebrew"},"\u5b89\u88c5 homebrew"),(0,r.kt)("p",null,"\u9996\u5148\u9700\u8981\u5b89\u88c5 Xcode Command tools:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ xcode-select --install\n")),(0,r.kt)("p",null,"\u5982\u679c\u63d0\u793a\u5b89\u88c5\u5931\u8d25\uff0c\u9700\u8981\u4ece ",(0,r.kt)("a",{parentName:"p",href:"https://developer.apple.com/downloads"},"https://developer.apple.com/downloads")," \u4e0b\u8f7d\u5b89\u88c5\u3002"),(0,r.kt)("p",null,"\u4e4b\u540e\u5b89\u88c5 macOS \u7684\u5305\u7ba1\u7406\u5de5\u5177 Homebrew"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"\n')),(0,r.kt)("h4",{id:"\u5b89\u88c5\u4f9d\u8d56"},"\u5b89\u88c5\u4f9d\u8d56"),(0,r.kt)("p",null,"\u4e4b\u540e\u5f00\u59cb\u5b89\u88c5\u73af\u5883\u4f9d\u8d56"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ brew install redis postgresql webp imagemagick node git\n")),(0,r.kt)("p",null,"M1 \u7528\u6237\u9700\u8981\u8bbe\u7f6e\u4f9d\u8d56\u7f16\u8bd1\u8def\u5f84\u5230 SHELL \u7684\u914d\u7f6e\u6587\u4ef6\u4e2d\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export CPATH=/opt/homebrew/include/\nexport LIBRARY_PATH=$LIBRARY_PATH:/opt/homebrew/lib/\n")),(0,r.kt)("h4",{id:"\u914d\u7f6e-postgres-\u548c-redis"},"\u914d\u7f6e Postgres \u548c Redis"),(0,r.kt)("p",null,"\u8fd0\u884c postgresql \u548c redis \u670d\u52a1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ brew services start postgresql\n$ brew services start redis\n")),(0,r.kt)("p",null,"Postgresql \u8fd8\u9700\u8981\u521b\u5efa\u9ed8\u8ba4\u7528\u6237\u540d\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ createuser --superuser zealot\n\n# \u5982\u679c\u62c5\u5fc3\u6743\u9650\u8fc7\u9ad8\u53ef\u4ee5\u53ea\u5f00\u542f\u521b\u5efa\u6570\u636e\u5e93\u6743\u9650\n$ createuser --createdb zealot\n")),(0,r.kt)("h4",{id:"yarn"},"yarn"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install -g yarn\n")),(0,r.kt)("p",null,"\u8fd0\u884c\u8d77\u6765\u540e\u4f7f\u7528\u6d4f\u89c8\u5668\u8bbf\u95ee ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:3000")),(0,r.kt)("h4",{id:"\u7591\u96be\u6742\u75c7"},"\u7591\u96be\u6742\u75c7"),(0,r.kt)("h5",{id:"m1-\u82af\u7247-macos-\u95ee\u9898"},"M1 \u82af\u7247 MacOS \u95ee\u9898"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"aarch64-darwin/libwebp_ffi.bundle => aarch64-darwin/jpegdec.o\n")),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"bundle install")," \u4f1a\u9047\u5230\u5982\u4e0a\u95ee\u9898\u8fd9\u4e2a\u662f\u56e0\u4e3a homebrew \u5b89\u88c5 webp \u4f9d\u8d56\u4e4b\u540e\u7f16\u8bd1\u8def\u5f84\u65e0\u6cd5\u88ab\u627e\u5230\uff0c\u4e0a\u9762\u6709\u89e3\u51b3\u529e\u6cd5\u3002"),(0,r.kt)("h3",{id:"debian-ubuntu"},"Debian (Ubuntu)"),(0,r.kt)("h4",{id:"\u5b89\u88c5\u73af\u5883\u4f9d\u8d56"},"\u5b89\u88c5\u73af\u5883\u4f9d\u8d56"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ apt update\n$ apt install -y libssl-dev tar tzdata git imagemagick libjpeg-dev libpng-dev libtiff-dev libwebp-dev\n")),(0,r.kt)("h4",{id:"\u5b89\u88c5\u4f9d\u8d56-1"},"\u5b89\u88c5\u4f9d\u8d56"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ apt install -y redis postgresql-client node\n")),(0,r.kt)("h4",{id:"\u914d\u7f6e-postgres-\u548c-redis-1"},"\u914d\u7f6e Postgres \u548c Redis"),(0,r.kt)("p",null,"\u8fd0\u884c postgresql \u548c redis \u670d\u52a1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ systemctl postgres start\n$ systemctl redis start\n")),(0,r.kt)("p",null,"Postgresql \u8fd8\u9700\u8981\u521b\u5efa\u9ed8\u8ba4\u7528\u6237\u540d\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ initdb -D /var/lib/postgresql/data\n$ createuser --superuser zealot\n\n# If you are worried about the high privilege, you can only enable the create database privilege\n$ createuser --createdb zealot\n")),(0,r.kt)("h4",{id:"node"},"node"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install -g yarn\n")),(0,r.kt)("h3",{id:"alpine-linux"},"Alpine Linux"),(0,r.kt)("h4",{id:"\u5b89\u88c5\u73af\u5883\u4f9d\u8d56-1"},"\u5b89\u88c5\u73af\u5883\u4f9d\u8d56"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ apk --update --no-cache add build-base libxml2 libxslt git \\\n    libxml2-dev libxslt-dev yaml-dev postgresql-dev nodejs npm yarn libwebp-dev libpng-dev tiff-dev \\\n    tzdata\n")),(0,r.kt)("p",null,"\u5982\u679c\u662f\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"arm")," \u67b6\u6784\u5b89\u88c5\u8fd8\u9700\u8981\u989d\u5916\u5b89\u88c5 ",(0,r.kt)("inlineCode",{parentName:"p"},"gcompat"),' glib \u517c\u5bb9\u5c42\uff0c\u5426\u5219\u4f1a\u62a5 "',(0,r.kt)("a",{parentName:"p",href:"https://nokogiri.org/tutorials/installing_nokogiri.html#linux-musl-error-loading-shared-library"},"Error loading shared library"),'" \u5f02\u5e38\u9519\u8bef\u3002'),(0,r.kt)("h4",{id:"\u5b89\u88c5\u4f9d\u8d56-2"},"\u5b89\u88c5\u4f9d\u8d56"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ apk --update --no-cache redis postgresql node\n")),(0,r.kt)("h4",{id:"\u914d\u7f6e-postgres-\u548c-redis-2"},"\u914d\u7f6e Postgres \u548c Redis"),(0,r.kt)("p",null,"\u8fd0\u884c postgresql \u548c redis \u670d\u52a1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ rc-service postgres start\n$ rc-service redis start\n")),(0,r.kt)("p",null,"Postgresql \u8fd8\u9700\u8981\u521b\u5efa\u9ed8\u8ba4\u7528\u6237\u540d\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ initdb -D /var/lib/postgresql/data\n$ createuser --superuser zealot\n\n# \u5982\u679c\u62c5\u5fc3\u6570\u636e\u5e93\u7528\u6237\u6743\u9650\uff0c\u53ef\u4ec5\u5f00\u542f\u521b\u5efa\u6570\u636e\u5e93\u6743\u9650\n$ createuser --createdb zealot\n")),(0,r.kt)("h4",{id:"yarn-1"},"yarn"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm install -g yarn\n")),(0,r.kt)("h2",{id:"\u5b89\u88c5-ruby"},"\u5b89\u88c5 Ruby"),(0,r.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 asdf\u3001rvm \u4efb\u610f\u4e00\u79cd\u65b9\u5f0f\u5b89\u88c5\u3002"),(0,r.kt)(n.Z,{groupId:"install-ruby",mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"asdf",mdxType:"TabItem"},(0,r.kt)("p",null,"\u4e00\u4e2a\u652f\u6301\u4e3b\u6d41\u5f00\u53d1\u8bed\u8a00\u7248\u672c\u5207\u6362\u7684\u5de5\u5177\uff0c\u8bf7\u6309\u7167",(0,r.kt)("a",{parentName:"p",href:"http://asdf-vm.com/guide/getting-started.html"},"\u5b98\u65b9\u5b89\u88c5\u6559\u7a0b"),"\u597d\u4e4b\u540e\u5b89\u88c5 ruby\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"asdf plugin add ruby\nasdf install ruby 3.0.0\nasdf global ruby 3.0.0\n"))),(0,r.kt)(s.Z,{value:"rvm",mdxType:"TabItem"},(0,r.kt)("p",null,"\u5982\u4e0b\u547d\u4ee4\u662f\u5148\u5b89\u88c5 rvm \u5230\u5f53\u524d\u7cfb\u7edf\u7684\u7528\u6237\u540e\u5b89\u88c5 Ruby 3.0 \u7248\u672c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl -sSL https://get.rvm.io | bash -s stable\n$ rvm install 3.0 --disable-binary\n")))),(0,r.kt)("h2",{id:"\u514b\u9686\u6e90\u4ee3\u7801"},"\u514b\u9686\u6e90\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/tryzealot/zealot.git\n")),(0,r.kt)("h2",{id:"\u521d\u59cb\u5316"},"\u521d\u59cb\u5316"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u6b65\u9aa4\u5747\u9700\u8981\u5728 zealot \u6839\u76ee\u5f55\u6267\u884c\u3002"),(0,r.kt)("h3",{id:"bundler"},"bundler"),(0,r.kt)("p",null,"\u5b89\u88c5 Ruby gems \u7b2c\u4e09\u65b9\u7c7b\u5e93"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ [sudo] gem install bundler\n$ bundle install\n")),(0,r.kt)("h3",{id:"yarn-2"},"yarn"),(0,r.kt)("p",null,"\u5b89\u88c5\u524d\u7aef\u7b2c\u4e09\u65b9\u7c7b\u5e93"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn install\n")),(0,r.kt)("h3",{id:"\u521d\u59cb\u5316\u6570\u636e\u5e93"},"\u521d\u59cb\u5316\u6570\u636e\u5e93"),(0,r.kt)("p",null,"\u786e\u4fdd\u8fde\u63a5\u6570\u636e\u5e93\u4fe1\u606f\u6ca1\u6709\u95ee\u9898\uff0c\u540e\u5c06\u4f1a\u521b\u5efa\u6570\u636e\u5e93\u8868\u5e76\u521b\u5efa\u8868\u7ed3\u6784"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ rails db:create\n$ rails db:migrate\n")),(0,r.kt)("p",null,"\u914d\u7f6e\u8fde\u63a5\u6570\u636e\u5e93\u53ef\u901a\u8fc7",(0,r.kt)("a",{parentName:"p",href:"/docs/self-hosted/configuration/environment-variables"},"\u73af\u5883\u53d8\u91cf"),"\u6216\u66f4\u6539 ",(0,r.kt)("inlineCode",{parentName:"p"},"config/database.yml")," \u6587\u4ef6\u3002"),(0,r.kt)("h3",{id:"\u521d\u59cb\u5316\u9884\u5236\u6570\u636e"},"\u521d\u59cb\u5316\u9884\u5236\u6570\u636e"),(0,r.kt)("p",null,"\u521d\u59cb\u5316\u7ba1\u7406\u5458\u8d26\u53f7\u548c\u5e94\u7528\u6837\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ rails db:seed\n")),(0,r.kt)("h3",{id:"\u8fd0\u884c-zealot-\u670d\u52a1"},"\u8fd0\u884c Zealot \u670d\u52a1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ bin/dev\n")),(0,r.kt)("p",null,"\u6253\u5f00\u6d4f\u89c8\u5668\u8bbf\u95ee ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:3000")))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkzealot_new_docs=self.webpackChunkzealot_new_docs||[]).push([[6981],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||l;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294),a=r(6010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l.tabItem,o),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>N});var n=r(7462),a=r(7294),l=r(6010),o=r(2466),s=r(6550),i=r(1980),u=r(7392),c=r(12);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function d(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,s.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function k(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,l=d(e),[o,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[i,u]=f({queryString:r,groupId:n}),[p,k]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:n}),h=(()=>{const e=i??p;return m({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),k(e)}),[u,k,l]),tabValues:l}}var h=r(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:r,selectedValue:s,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.o5)(),d=e=>{const t=e.currentTarget,r=c.indexOf(t),n=u[r].value;n!==s&&(p(t),i(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:o}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},o,{className:(0,l.Z)("tabs__item",v.tabItem,o?.className,{"tabs__item--active":s===t})}),r??t)})))}function g(e){let{lazy:t,children:r,selectedValue:n}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function b(e){const t=k(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",v.tabList)},a.createElement(y,(0,n.Z)({},e,t)),a.createElement(g,(0,n.Z)({},e,t)))}function N(e){const t=(0,h.Z)();return a.createElement(b,(0,n.Z)({key:String(t)},e))}},7183:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>u,metadata:()=>p,toc:()=>m});var n=r(7462),a=(r(7294),r(3905)),l=r(941),o=r(4996),s=r(4866),i=r(5162);const u={},c="\u53cd\u5411\u4ee3\u7406",p={unversionedId:"self-hosted/reverse-proxies",id:"version-4.x/self-hosted/reverse-proxies",title:"\u53cd\u5411\u4ee3\u7406",description:"\u65b9\u4fbf SSL \u8bc1\u4e66\u7684\u7edf\u4e00\u7ba1\u7406\u548c\u5206\u53d1\u3001\u670d\u52a1\u7684\u6269\u5bb9\u53ca\u63a5\u5165\u73b0\u6210\u7684\u7f51\u5173\u670d\u52a1\uff0c\u6587\u6863\u63d0\u4f9b\u51e0\u79cd\u7ed9\u7f51\u5173\u914d\u7f6e\u53cd\u5411\u4ee3\u7406\u670d\u52a1\u7684\u914d\u7f6e\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-4.x/self-hosted/reverse-proxies.mdx",sourceDirName:"self-hosted",slug:"/self-hosted/reverse-proxies",permalink:"/zh-Hans/docs/4.x/self-hosted/reverse-proxies",draft:!1,editUrl:"https://github.com/tryzealot/docs/tree/main/versioned_docs/version-4.x/self-hosted/reverse-proxies.mdx",tags:[],version:"4.x",frontMatter:{},sidebar:"selfHosted",previous:{title:"\u6e90\u4ee3\u7801",permalink:"/zh-Hans/docs/4.x/self-hosted/deployment/source-code"},next:{title:"Cloud Provider Guides",permalink:"/zh-Hans/docs/4.x/category/cloud-provider-guides"}},d={},m=[{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"Traefik",id:"traefik",level:2},{value:"\u914d\u7f6e\u89e3\u91ca",id:"\u914d\u7f6e\u89e3\u91ca",level:3},{value:"Traefik \u670d\u52a1",id:"traefik-\u670d\u52a1",level:3},{value:"Docker",id:"docker",level:3},{value:"Consul",id:"consul",level:3},{value:"Nomad",id:"nomad",level:3},{value:"Caddy 2 \u914d\u7f6e",id:"caddy-2-\u914d\u7f6e",level:2},{value:"Nginx",id:"nginx",level:2}],f={toc:m},k="wrapper";function h(e){let{components:t,...r}=e;return(0,a.kt)(k,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u53cd\u5411\u4ee3\u7406"},"\u53cd\u5411\u4ee3\u7406"),(0,a.kt)("p",null,"\u65b9\u4fbf SSL \u8bc1\u4e66\u7684\u7edf\u4e00\u7ba1\u7406\u548c\u5206\u53d1\u3001\u670d\u52a1\u7684\u6269\u5bb9\u53ca\u63a5\u5165\u73b0\u6210\u7684\u7f51\u5173\u670d\u52a1\uff0c\u6587\u6863\u63d0\u4f9b\u51e0\u79cd\u7ed9\u7f51\u5173\u914d\u7f6e\u53cd\u5411\u4ee3\u7406\u670d\u52a1\u7684\u914d\u7f6e\u3002"),(0,a.kt)(l.Z,{alt:"Architecture",sources:{light:(0,o.Z)("/img/zh-Hans/reverse-proxies-light.png"),dark:(0,o.Z)("/img/zh-Hans/reverse-proxies-dark.png")},mdxType:"ThemedImage"}),(0,a.kt)("h2",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,a.kt)("p",null,"\u914d\u7f6e\u53cd\u5411\u4ee3\u7406\u9700\u8981\u51c6\u5907\u597d\u5982\u4e0b\u6570\u636e\uff1a"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8303\u4f8b\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5907\u6ce8"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u57df\u540d"),(0,a.kt)("td",{parentName:"tr",align:null},"zealot.icyleaf.dev"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"\u53cd\u5411\u4ee3\u7406 IP \u5730\u5740"),(0,a.kt)("td",{parentName:"tr",align:null},"172.16.56.1"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Zealot IP \u5730\u5740"),(0,a.kt)("td",{parentName:"tr",align:null},"172.16.56.100"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53cd\u5411\u4ee3\u7406\u670d\u52a1\u53ef\u8bbf\u95ee",(0,a.kt)("br",null),"\u540c\u4e00\u53f0\u670d\u52a1\u53ef\u6539\u4e3a 127.0.0.1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Zealot \u5916\u90e8\u6620\u5c04\u7aef\u53e3\u53f7"),(0,a.kt)("td",{parentName:"tr",align:null},"8901"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53cd\u5411\u4ee3\u7406\u670d\u52a1\u53ef\u8bbf\u95ee")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Zealot \u5185\u90e8\u7aef\u53e3\u53f7"),(0,a.kt)("td",{parentName:"tr",align:null},"80"),(0,a.kt)("td",{parentName:"tr",align:null},"\u65e0\u9700\u4fee\u6539")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Let's Encrypt \u90ae\u7bb1"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"mailto:your-email@example.com"},"your-email@example.com")),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h2",{id:"traefik"},"Traefik"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://doc.traefik.io/traefik/"},"Traefik")," \u662f\u4e00\u6b3e\u5f00\u6e90\u7684\u53cd\u5411\u4ee3\u7406\u4e0e\u8d1f\u8f7d\u5747\u8861\u5de5\u5177\uff0c\u5b83\u81ea\u8eab\u63d0\u4f9b\u591a\u79cd Providers \u53ef\u4ee5\u5b9e\u73b0\u63a5\u5165\u53cd\u5411\u4ee3\u7406\u5e76\u914d\u7f6e SSL \u7684\u65b9\u5f0f\u3002"),(0,a.kt)("h3",{id:"\u914d\u7f6e\u89e3\u91ca"},"\u914d\u7f6e\u89e3\u91ca"),(0,a.kt)("p",null,"\u65e0\u8bba\u4f7f\u7528\u90a3\u79cd Provider \u6838\u5fc3\u7684\u914d\u7f6e\u9879\u662f\u76f8\u540c\u7684\uff0c\u6784\u6210\u53cd\u5411\u4ee3\u7406\u670d\u52a1\u914d\u7f6e\u4e3b\u8981\u6709\u4e09\u90e8\u5206\u7ec4\u6210\uff1a\u53d1\u73b0\u7aef\u53e3\u53f7\u3001\u8def\u7531\u89c4\u5219\uff08\u5305\u542b\u8bbf\u95ee\u7aef\u53e3\u53f7\u3001\u57df\u540d\u7ed1\u5b9a\u548cSSL\uff09"),(0,a.kt)("h3",{id:"traefik-\u670d\u52a1"},"Traefik \u670d\u52a1"),(0,a.kt)(s.Z,{groupId:"yaml",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"yaml",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'entryPoints:\n  web:\n    address: ":80"\n\n  websecure:\n    address: ":443"\n\ncertificatesResolvers:\n  letsencrypt:\n    acme:\n      email: your-email@example.com\n      storage: acme.json\n      httpChallenge:\n        entryPoint: web\n'))),(0,a.kt)(i.Z,{value:"toml",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'[entryPoints]\n  [entryPoints.web]\n    address = ":80"\n\n  [entryPoints.websecure]\n    address = ":443"\n\n[certificatesResolvers.letsencrypt.acme]\n  email = "your-email@example.com"\n  storage = "acme.json"\n  [certificatesResolvers.letsencrypt.acme.httpChallenge]\n    # used during the challenge\n    entryPoint = "web"\n'))),(0,a.kt)(i.Z,{value:"cli",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"--entrypoints.web.address=:80\n--entrypoints.websecure.address=:443\n\n--certificatesresolvers.letsencrypt.acme.email=your-email@example.com\n--certificatesresolvers.letsencrypt.acme.storage=acme.json\n--certificatesresolvers.letsencrypt.acme.httpchallenge.entrypoint=web\n")))),(0,a.kt)("h3",{id:"docker"},"Docker"),(0,a.kt)("p",null,"\u9996\u5148\u9700\u8981\u5f00\u542f ",(0,a.kt)("a",{parentName:"p",href:"https://doc.traefik.io/traefik/providers/docker/#configuration-examples"},"Docker provider")," \u540e\u5728\u4fee\u6539 zealot \u7684 Docker Compose \u914d\u7f6e\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="docker-compose.yml"',title:'"docker-compose.yml"'},'version: \'3\'\nservices:\n  zealot:\n    <<: *defaults\n    labels:\n      - "traefik.enable=true"\n      - "traefik.http.services.zealot.loadbalancer.server.port=80"\n      - "traefik.http.routers.zealot.service=zealot"\n      - "traefik.http.routers.zealot.rule=Host(`zealot.icyleaf.dev`)"\n      - "traefik.http.routers.zealot.tls=true"\n      - "traefik.http.routers.zealot.tls.certresolver=letsencrypt"\n      - "traefik.http.routers.zealot.tls.domains[0].main=icyleaf.dev"\n      - "traefik.http.routers.zealot.tls.domains[0].sans=zealot.icyleaf.dev"\n    # \u7531 Treafik \u63a5\u7ba1\u65e0\u9700\u5728\u5bf9\u5916\u66b4\u9732\u7aef\u53e3\u53f7\n    # ports:\n    #   - "8901:80"\n    network:\n      # \u6839\u636e traefik \u670d\u52a1\u7684 network \u6309\u9700\u8c03\u6574\n      - traefik-services\n\nnetworks:\n  # \u6839\u636e traefik \u670d\u52a1\u7684 network \u6309\u9700\u8c03\u6574\n  traefik-services:\n    external: true\n')),(0,a.kt)("p",null,"Docker \u90e8\u7f72\u7684\u5c40\u9650\u4e8e Traefik \u548c Zealot \u670d\u52a1\u901a\u5e38\u5728\u540c\u4e00\u4e2a\u673a\u5668\u7684\u540c\u4e00\u4e2a OS \u7cfb\u7edf\u4e2d\uff0c\u8de8\u673a\u5668\u5c31\u6ca1\u6cd5\u5b9e\u73b0\u901a\u8baf\uff0c\u5bf9\u4e8e\u8de8\u673a\u5668\u5c31\u9700\u8981\u53c2\u8003\u4e0b\u9762\u4e24\u79cd\u914d\u7f6e\u65b9\u6848\uff1a"),(0,a.kt)("h3",{id:"consul"},"Consul"),(0,a.kt)("p",null,"\u9996\u5148\u9700\u8981\u5f00\u542f ",(0,a.kt)("a",{parentName:"p",href:"https://doc.traefik.io/traefik/providers/consul/"},"Consul provider")," \u6216 ",(0,a.kt)("a",{parentName:"p",href:"https://doc.traefik.io/traefik/providers/consul-catalog/"},"Consul Catalog provider"),"\uff0c\u6211\u4eec\u53ea\u9700\u8981\u5229\u7528\u5b83\u7684 Key-Value \u5b58\u50a8\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"consul kv put traefik/http/services/zealot/loadbalancer/server/port 5\nconsul kv put traefik/http/routers/zealot/service zealot\nconsul kv put traefik/http/routers/zealot/rule 'Host(`zealot.icyleaf.dev`)'\nconsul kv put traefik/http/routers/zealot/tls/certresolver letsencrypt\nconsul kv put traefik/http/routers/zealot/tls/domains/0/main icyleaf.dev\nconsul kv put traefik/http/routers/zealot/tls/domains/0/sans zealot.icyleaf.dev\n")),(0,a.kt)("h3",{id:"nomad"},"Nomad"),(0,a.kt)("p",null,"\u9996\u5148\u9700\u8981\u5f00\u542f ",(0,a.kt)("a",{parentName:"p",href:"https://doc.traefik.io/traefik/providers/nomad/"},"Nomad provider")," \u4e14 Nomad \u7248\u672c\u8981\u5927\u4e8e\u7b49\u4e8e 1.3 \u624d\u53ef\u4ee5\u54df\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-hcl",metastring:'title="zealot.nomad"',title:'"zealot.nomad"'},'job "zealot" {\n  datacenters = ["dc1"]\n  type        = "service"\n\n  group "zealot" {\n    count = 1\n\n    network {\n      port  "http"{\n        static = 80\n      }\n    }\n\n    service {\n      name = "zealot-http"\n      provider = "nomad"\n      port = "http"\n    }\n\n    task "server" {\n      driver = "docker"\n      config {\n        image = "ghcr.io/tryzealot/zealot:nightly"\n        ports = ["http"]\n        args = [\n          - "traefik.http.routers.zealot.rule=Host(`zealot.icyleaf.dev`)",\n          - "traefik.http.routers.zealot.tls=true",\n          - "traefik.http.routers.zealot.tls.certresolver=letsencrypt",\n          - "traefik.http.routers.zealot.tls.domains[0].main=icyleaf.dev",\n          - "traefik.http.routers.zealot.tls.domains[0].sans=zealot.icyleaf.dev"\n        ]\n      }\n    }\n  }\n}\n')),(0,a.kt)("h2",{id:"caddy-2-\u914d\u7f6e"},"Caddy 2 \u914d\u7f6e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-nginx",metastring:'title="Caddyfile"',title:'"Caddyfile"'},":443\n\nlog\n\n# \u4f7f\u7528 Let's Encrypt \u670d\u52a1\ntls your-email@example.com\n\nreverse_proxy 172.16.56.100:8901\n")),(0,a.kt)("p",null,"\u914d\u7f6e\u53ea\u9700\u914d\u7f6e ",(0,a.kt)("inlineCode",{parentName:"p"},"tls")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"proxy")," \u540e\u9762 IP \u5730\u5740\u548c\u7aef\u53e3\u90e8\u5206\u5373\u53ef\u3002"),(0,a.kt)("h2",{id:"nginx"},"Nginx"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u5982\u4e0b\u662f\u901a\u7528\u914d\u7f6e\uff0c\u5982\u679c\u4e0d\u53ef\u7528\u6b22\u8fce",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tryzealot/docs/issues/new"},"\u63d0\u95ee\u9898"),"\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-nginx",metastring:'title="conf.d/zealot.conf"',title:'"conf.d/zealot.conf"'},"upstream zealot {\n  zone upstreams 64K;\n  server 172.16.56.100:8901;\n  keepalive 32;\n}\n\nmap $http_upgrade $connection_upgrade {\n  default upgrade;\n  '' close;\n}\n\nserver {\n  listen 80;\n  listen [::]:80;\n  server_name zealot.icyleaf.dev;\n  location /.well-known/acme-challenge/ { allow all; }\n  location / { return 301 https://$host$request_uri; }\n}\n\nserver {\n  listen 443 ssl http2;              # \u53ef\u9009\uff1ahttp2 \u53ef\u80fd\u9700\u8981\u5b89\u88c5\u989d\u5916\u6269\u5c55\uff0c\u4e0d\u9700\u8981\u53ef\u79fb\u9664\n  listen [::]:443 ssl http2;         # \u53ef\u9009\uff1ahttp2 \u53ef\u80fd\u9700\u8981\u5b89\u88c5\u989d\u5916\u6269\u5c55\uff0c\u4e0d\u9700\u8981\u53ef\u79fb\u9664\n  server_name zealot.icyleaf.dev;\n\n  ssl_certificate       /etc/certs/zealot-cert.pem;\n  ssl_certificate_key   /etc/certs/zealot.pem;\n\n  # Optional\n  # ssl_ciphers           HIGH:!MEDIUM:!LOW:!aNULL:!NULL:!SHA;\n  # ssl_session_timeout   5m;\n  # ssl_session_cache     shared:SSL:1m;\n  # ssl_prefer_server_ciphers  on;\n\n  location / {\n    proxy_pass http://zealot;\n    proxy_redirect off;\n\n    proxy_pass_header Authorization;\n    proxy_set_header Host $host;\n    # proxy_set_header X-Forwarded-Ssl on; # \u53ef\u9009\n    proxy_set_header X-Real-IP $remote_addr;\n    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    proxy_set_header X-Forwarded-Proto $scheme;\n\n    proxy_http_version 1.1;\n    proxy_set_header Upgrade $http_upgrade;\n    proxy_set_header Connection $connection_upgrade;\n\n    client_max_body_size 0;\n    proxy_read_timeout 36000s;\n  }\n}\n")),(0,a.kt)("p",null,"Nginx \u8fd8\u9700\u8981\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"http")," \u4e2d\u914d\u7f6e\u6700\u5927\u4e0a\u4f20\u6587\u4ef6\u4e0a\u4f20\u5927\u5c0f\uff0c\u666e\u901a\u5e94\u7528\u5efa\u8bae\u662f\u5728 200MB \u5de6\u53f3\uff0c\u5982\u679c\u662f\u6e38\u620f\u53ef\u6839\u636e\u5b9e\u9645\u6587\u4ef6\u5927\u5c0f\u518d\u591a\u51fa 50% \u6253\u51fa\u5bcc\u4f59\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-nginx",metastring:'title="nginx.conf"',title:'"nginx.conf"'},"http {\n  [...]\n\n  client_max_body_size 200M;\n}\n")))}h.isMDXComponent=!0}}]);
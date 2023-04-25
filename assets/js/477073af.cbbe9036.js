"use strict";(self.webpackChunkzealot_new_docs=self.webpackChunkzealot_new_docs||[]).push([[3385],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(7294),a=r(6010);const o={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:r,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,l),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>x});var n=r(7462),a=r(7294),o=r(6010),l=r(2466),s=r(6550),i=r(1980),c=r(7392),u=r(12);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function d(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=d(e),[l,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[i,c]=f({queryString:r,groupId:n}),[p,h]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,u.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),v=(()=>{const e=i??p;return m({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{v&&s(v)}),[v]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),h(e)}),[c,h,o]),tabValues:o}}var v=r(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:r,selectedValue:s,selectValue:i,tabValues:c}=e;const u=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),d=e=>{const t=e.currentTarget,r=u.indexOf(t),n=c[r].value;n!==s&&(p(t),i(n))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},c.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",k.tabItem,l?.className,{"tabs__item--active":s===t})}),r??t)})))}function g(e){let{lazy:t,children:r,selectedValue:n}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function b(e){const t=h(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",k.tabList)},a.createElement(y,(0,n.Z)({},e,t)),a.createElement(g,(0,n.Z)({},e,t)))}function x(e){const t=(0,v.Z)();return a.createElement(b,(0,n.Z)({key:String(t)},e))}},6292:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>v,frontMatter:()=>c,metadata:()=>p,toc:()=>m});var n=r(7462),a=(r(7294),r(3905)),o=r(941),l=r(4996),s=r(4866),i=r(5162);const c={},u="Reverse Proxies",p={unversionedId:"self-hosted/reverse-proxies",id:"self-hosted/reverse-proxies",title:"Reverse Proxies",description:"To facilitate the unified management and distribution of SSL certificates, service expansion and access to off-the-shelf gateway services,",source:"@site/docs/self-hosted/reverse-proxies.mdx",sourceDirName:"self-hosted",slug:"/self-hosted/reverse-proxies",permalink:"/docs/next/self-hosted/reverse-proxies",draft:!1,editUrl:"https://github.com/tryzealot/docs/tree/main/docs/self-hosted/reverse-proxies.mdx",tags:[],version:"current",frontMatter:{},sidebar:"selfHosted",previous:{title:"Source code",permalink:"/docs/next/self-hosted/deployment/source-code"},next:{title:"Cloud Provider Guides",permalink:"/docs/next/category/cloud-provider-guides"}},d={},m=[{value:"Prepare",id:"prepare",level:2},{value:"Traefik",id:"traefik",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Traefik service",id:"traefik-service",level:3},{value:"Docker",id:"docker",level:3},{value:"Consul",id:"consul",level:3},{value:"Nomad",id:"nomad",level:3},{value:"Caddy 2;",id:"caddy-2",level:2},{value:"Nginx",id:"nginx",level:2}],f={toc:m},h="wrapper";function v(e){let{components:t,...r}=e;return(0,a.kt)(h,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"reverse-proxies"},"Reverse Proxies"),(0,a.kt)("p",null,"To facilitate the unified management and distribution of SSL certificates, service expansion and access to off-the-shelf gateway services,\nwe provides several configurations for configuring reverse proxy services to the gateway."),(0,a.kt)(o.Z,{alt:"Architecture",sources:{light:(0,l.Z)("/img/reverse-proxies-light.png"),dark:(0,l.Z)("/img/reverse-proxies-dark.png")},mdxType:"ThemedImage"}),(0,a.kt)("h2",{id:"prepare"},"Prepare"),(0,a.kt)("p",null,"The following data needs to be prepared to configure the reverse proxy:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Sample value"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Domain"),(0,a.kt)("td",{parentName:"tr",align:null},"zealot.icyleaf.dev"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Reverse proxy service IP address"),(0,a.kt)("td",{parentName:"tr",align:null},"172.16.56.1"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Zealot IP address"),(0,a.kt)("td",{parentName:"tr",align:null},"172.16.56.100"),(0,a.kt)("td",{parentName:"tr",align:null},"Reverse Proxy can be accessed",(0,a.kt)("br",null),"Change to 127.0.0.1 Reverse Proxy and zealot with one host.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Zealot public port"),(0,a.kt)("td",{parentName:"tr",align:null},"8901"),(0,a.kt)("td",{parentName:"tr",align:null},"Reverse Proxy can be accessed")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Zealot internal port"),(0,a.kt)("td",{parentName:"tr",align:null},"80"),(0,a.kt)("td",{parentName:"tr",align:null},"No need modify")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Let's Encrypt Email address"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"mailto:your-email@example.com"},"your-email@example.com")),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h2",{id:"traefik"},"Traefik"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://doc.traefik.io/traefik/"},"Traefik")," is an open source reverse proxy and load balancing tool,\nwhich provides a variety of Providers can achieve access to the reverse proxy and configure the SSL."),(0,a.kt)("h3",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"Regardless of the type of Provider used the core configuration items are the same and constitute the reverse proxy service configuration consists of three main components: discovery port number,\nrouting rules (including access port number, domain name binding and SSL)"),(0,a.kt)("h3",{id:"traefik-service"},"Traefik service"),(0,a.kt)(s.Z,{groupId:"yaml",mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"yaml",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'entryPoints:\n  web:\n    address: ":80"\n\n  websecure:\n    address: ":443"\n\ncertificatesResolvers:\n  letsencrypt:\n    acme:\n      email: your-email@example.com\n      storage: acme.json\n      httpChallenge:\n        entryPoint: web\n'))),(0,a.kt)(i.Z,{value:"toml",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'[entryPoints]\n  [entryPoints.web]\n    address = ":80"\n\n  [entryPoints.websecure]\n    address = ":443"\n\n[certificatesResolvers.letsencrypt.acme]\n  email = "your-email@example.com"\n  storage = "acme.json"\n  [certificatesResolvers.letsencrypt.acme.httpChallenge]\n    # used during the challenge\n    entryPoint = "web"\n'))),(0,a.kt)(i.Z,{value:"cli",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"--entrypoints.web.address=:80\n--entrypoints.websecure.address=:443\n\n--certificatesresolvers.letsencrypt.acme.email=your-email@example.com\n--certificatesresolvers.letsencrypt.acme.storage=acme.json\n--certificatesresolvers.letsencrypt.acme.httpchallenge.entrypoint=web\n")))),(0,a.kt)("h3",{id:"docker"},"Docker"),(0,a.kt)("p",null,"Enable ",(0,a.kt)("a",{parentName:"p",href:"https://doc.traefik.io/traefik/providers/docker/#configuration-examples"},"Docker provider")," then edit the Docker Compose file:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="docker-compose.yml"',title:'"docker-compose.yml"'},'version: \'3\'\nservices:\n  zealot:\n    <<: *defaults\n    labels:\n      - "traefik.enable=true"\n      - "traefik.http.services.zealot.loadbalancer.server.port=80"\n      - "traefik.http.routers.zealot.service=zealot"\n      - "traefik.http.routers.zealot.rule=Host(`zealot.icyleaf.dev`)"\n      - "traefik.http.routers.zealot.tls=true"\n      - "traefik.http.routers.zealot.tls.certresolver=letsencrypt"\n      - "traefik.http.routers.zealot.tls.domains[0].main=icyleaf.dev"\n      - "traefik.http.routers.zealot.tls.domains[0].sans=zealot.icyleaf.dev"\n    # Comment port, no need to public\n    # ports:\n    #   - "8901:80"\n    network:\n      # Change the network what traefik service is\n      - traefik-services\n\nnetworks:\n  # Change the network what traefik service is\n  traefik-services:\n    external: true\n')),(0,a.kt)("p",null,"Deployment with Docker is limited to Traefik and Zealot service are usually in the same OS system of the same machine,\ncross-machine can not achieve communication, for cross-machine need to refer to the following two configuration options."),(0,a.kt)("h3",{id:"consul"},"Consul"),(0,a.kt)("p",null,"Enable ",(0,a.kt)("a",{parentName:"p",href:"https://doc.traefik.io/traefik/providers/consul/"},"Consul provider")," or ",(0,a.kt)("a",{parentName:"p",href:"https://doc.traefik.io/traefik/providers/consul-catalog/"},"Consul Catalog provider"),", add key-value below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"consul kv put traefik/http/services/zealot/loadbalancer/server/port 5\nconsul kv put traefik/http/routers/zealot/service zealot\nconsul kv put traefik/http/routers/zealot/rule 'Host(`zealot.icyleaf.dev`)'\nconsul kv put traefik/http/routers/zealot/tls/certresolver letsencrypt\nconsul kv put traefik/http/routers/zealot/tls/domains/0/main icyleaf.dev\nconsul kv put traefik/http/routers/zealot/tls/domains/0/sans zealot.icyleaf.dev\n")),(0,a.kt)("h3",{id:"nomad"},"Nomad"),(0,a.kt)("p",null,"Enable ",(0,a.kt)("a",{parentName:"p",href:"https://doc.traefik.io/traefik/providers/nomad/"},"Nomad provider")," and make sure Nomad version >= 1.3:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-hcl",metastring:'title="zealot.nomad"',title:'"zealot.nomad"'},'job "zealot" {\n  datacenters = ["dc1"]\n  type        = "service"\n\n  group "zealot" {\n    count = 1\n\n    network {\n      port  "http"{\n        static = 80\n      }\n    }\n\n    service {\n      name = "zealot-http"\n      provider = "nomad"\n      port = "http"\n    }\n\n    task "server" {\n      driver = "docker"\n      config {\n        image = "ghcr.io/tryzealot/zealot:nightly"\n        ports = ["http"]\n        args = [\n          - "traefik.http.routers.zealot.rule=Host(`zealot.icyleaf.dev`)",\n          - "traefik.http.routers.zealot.tls=true",\n          - "traefik.http.routers.zealot.tls.certresolver=letsencrypt",\n          - "traefik.http.routers.zealot.tls.domains[0].main=icyleaf.dev",\n          - "traefik.http.routers.zealot.tls.domains[0].sans=zealot.icyleaf.dev"\n        ]\n      }\n    }\n  }\n}\n')),(0,a.kt)("h2",{id:"caddy-2"},"Caddy 2;"),(0,a.kt)("p",null,"The configuration only needs to relate the ip part after ",(0,a.kt)("inlineCode",{parentName:"p"},"tls")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"proxy"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-nginx",metastring:'title="Caddyfile"',title:'"Caddyfile"'},":443\n\nlog\n\n# Use Let's Encrypt service\ntls your-email@example.com\n\nreverse_proxy 172.16.56.100:8901\n")),(0,a.kt)("h2",{id:"nginx"},"Nginx"),(0,a.kt)("p",null,"The following is the general configuration, if not effects welcome to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tryzealot/docs/issues/new"},"file a issue"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-nginx",metastring:'title="conf.d/zealot.conf"',title:'"conf.d/zealot.conf"'},"upstream zealot {\n  zone upstreams 64K;\n  server 172.16.56.100:8901;\n  keepalive 32;\n}\n\nmap $http_upgrade $connection_upgrade {\n  default upgrade;\n  '' close;\n}\n\nserver {\n  listen 80;\n  listen [::]:80;\n  server_name zealot.icyleaf.dev;\n  location /.well-known/acme-challenge/ { allow all; }\n  location / { return 301 https://$host$request_uri; }\n}\n\nserver {\n  listen 443 ssl http2;              # Optional: http2 may needs install extension\n  listen [::]:443 ssl http2;\n  server_name zealot.icyleaf.dev;\n\n  ssl_certificate       /etc/certs/zealot-cert.pem;\n  ssl_certificate_key   /etc/certs/zealot.pem;\n\n  # Optional\n  # ssl_ciphers           HIGH:!MEDIUM:!LOW:!aNULL:!NULL:!SHA;\n  # ssl_session_timeout   5m;\n  # ssl_session_cache     shared:SSL:1m;\n  # ssl_prefer_server_ciphers  on;\n\n  location / {\n    proxy_pass http://zealot;\n    proxy_redirect off;\n\n    proxy_pass_header Authorization;\n    proxy_set_header Host $host;\n    # proxy_set_header X-Forwarded-Ssl on; # Optional\n    proxy_set_header X-Real-IP $remote_addr;\n    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    proxy_set_header X-Forwarded-Proto $scheme;\n\n    proxy_http_version 1.1;\n    proxy_set_header Upgrade $http_upgrade;\n    proxy_set_header Connection $connection_upgrade;\n\n    client_max_body_size 0;\n    proxy_read_timeout 36000s;\n  }\n}\n")),(0,a.kt)("p",null,"And you need update max body size in ",(0,a.kt)("inlineCode",{parentName:"p"},"http")," block. Recommended is 200MB, if it's a game,\n50% more can be played to make a surplus according to the actual file size."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-nginx",metastring:'title="nginx.conf"',title:'"nginx.conf"'},"http {\n  [...]\n\n  client_max_body_size 200M;\n}\n")))}v.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkzealot_new_docs=self.webpackChunkzealot_new_docs||[]).push([[5460],{4783:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>m,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var n=r(5893),s=r(1151),a=r(9965),l=r(4996),o=r(4866),i=r(5162);const c={},d="\u53cd\u5411\u4ee3\u7406",u={id:"self-hosted/reverse-proxies",title:"\u53cd\u5411\u4ee3\u7406",description:"\u65b9\u4fbf SSL \u8bc1\u4e66\u7684\u7edf\u4e00\u7ba1\u7406\u548c\u5206\u53d1\u3001\u670d\u52a1\u7684\u6269\u5bb9\u53ca\u63a5\u5165\u73b0\u6210\u7684\u7f51\u5173\u670d\u52a1\uff0c\u6587\u6863\u63d0\u4f9b\u51e0\u79cd\u7ed9\u7f51\u5173\u914d\u7f6e\u53cd\u5411\u4ee3\u7406\u670d\u52a1\u7684\u914d\u7f6e\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-5.1.0/self-hosted/reverse-proxies.mdx",sourceDirName:"self-hosted",slug:"/self-hosted/reverse-proxies",permalink:"/zh-Hans/docs/self-hosted/reverse-proxies",draft:!1,unlisted:!1,editUrl:"https://github.com/tryzealot/docs/tree/main/versioned_docs/version-5.1.0/self-hosted/reverse-proxies.mdx",tags:[],version:"5.1.0",frontMatter:{},sidebar:"selfHosted",previous:{title:"\u6e90\u4ee3\u7801",permalink:"/zh-Hans/docs/self-hosted/deployment/source-code"},next:{title:"Cloud Provider Guides",permalink:"/zh-Hans/docs/category/cloud-provider-guides"}},h={},p=[{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",level:2},{value:"Traefik",id:"traefik",level:2},{value:"\u914d\u7f6e\u89e3\u91ca",id:"\u914d\u7f6e\u89e3\u91ca",level:3},{value:"Traefik \u670d\u52a1",id:"traefik-\u670d\u52a1",level:3},{value:"Docker",id:"docker",level:3},{value:"Consul",id:"consul",level:3},{value:"Nomad",id:"nomad",level:3},{value:"Caddy 2 \u914d\u7f6e",id:"caddy-2-\u914d\u7f6e",level:2},{value:"Nginx",id:"nginx",level:2}];function f(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"\u53cd\u5411\u4ee3\u7406",children:"\u53cd\u5411\u4ee3\u7406"}),"\n",(0,n.jsx)(t.p,{children:"\u65b9\u4fbf SSL \u8bc1\u4e66\u7684\u7edf\u4e00\u7ba1\u7406\u548c\u5206\u53d1\u3001\u670d\u52a1\u7684\u6269\u5bb9\u53ca\u63a5\u5165\u73b0\u6210\u7684\u7f51\u5173\u670d\u52a1\uff0c\u6587\u6863\u63d0\u4f9b\u51e0\u79cd\u7ed9\u7f51\u5173\u914d\u7f6e\u53cd\u5411\u4ee3\u7406\u670d\u52a1\u7684\u914d\u7f6e\u3002"}),"\n","\n","\n",(0,n.jsx)(a.Z,{alt:"Architecture",sources:{light:(0,l.Z)("/img/5.0.0/zh-Hans/reverse-proxies-light.png"),dark:(0,l.Z)("/img/5.0.0/zh-Hans/reverse-proxies-dark.png")}}),"\n",(0,n.jsx)(t.h2,{id:"\u51c6\u5907\u5de5\u4f5c",children:"\u51c6\u5907\u5de5\u4f5c"}),"\n",(0,n.jsx)(t.p,{children:"\u914d\u7f6e\u53cd\u5411\u4ee3\u7406\u9700\u8981\u51c6\u5907\u597d\u5982\u4e0b\u6570\u636e\uff1a"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"\u540d\u79f0"}),(0,n.jsx)(t.th,{children:"\u8303\u4f8b\u503c"}),(0,n.jsx)(t.th,{children:"\u5907\u6ce8"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"\u57df\u540d"}),(0,n.jsx)(t.td,{children:"zealot.icyleaf.dev"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"\u53cd\u5411\u4ee3\u7406 IP \u5730\u5740"}),(0,n.jsx)(t.td,{children:"172.16.56.1"}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Zealot IP \u5730\u5740"}),(0,n.jsx)(t.td,{children:"172.16.56.100"}),(0,n.jsxs)(t.td,{children:["\u53cd\u5411\u4ee3\u7406\u670d\u52a1\u53ef\u8bbf\u95ee",(0,n.jsx)("br",{}),"\u540c\u4e00\u53f0\u670d\u52a1\u53ef\u6539\u4e3a 127.0.0.1"]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Zealot \u5916\u90e8\u6620\u5c04\u7aef\u53e3\u53f7"}),(0,n.jsx)(t.td,{children:"8901"}),(0,n.jsx)(t.td,{children:"\u53cd\u5411\u4ee3\u7406\u670d\u52a1\u53ef\u8bbf\u95ee"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Zealot \u5185\u90e8\u7aef\u53e3\u53f7"}),(0,n.jsx)(t.td,{children:"80"}),(0,n.jsx)(t.td,{children:"\u65e0\u9700\u4fee\u6539"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Let's Encrypt \u90ae\u7bb1"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"mailto:your-email@example.com",children:"your-email@example.com"})}),(0,n.jsx)(t.td,{})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"traefik",children:"Traefik"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://doc.traefik.io/traefik/",children:"Traefik"})," \u662f\u4e00\u6b3e\u5f00\u6e90\u7684\u53cd\u5411\u4ee3\u7406\u4e0e\u8d1f\u8f7d\u5747\u8861\u5de5\u5177\uff0c\u5b83\u81ea\u8eab\u63d0\u4f9b\u591a\u79cd Providers \u53ef\u4ee5\u5b9e\u73b0\u63a5\u5165\u53cd\u5411\u4ee3\u7406\u5e76\u914d\u7f6e SSL \u7684\u65b9\u5f0f\u3002"]}),"\n",(0,n.jsx)(t.h3,{id:"\u914d\u7f6e\u89e3\u91ca",children:"\u914d\u7f6e\u89e3\u91ca"}),"\n",(0,n.jsx)(t.p,{children:"\u65e0\u8bba\u4f7f\u7528\u90a3\u79cd Provider \u6838\u5fc3\u7684\u914d\u7f6e\u9879\u662f\u76f8\u540c\u7684\uff0c\u6784\u6210\u53cd\u5411\u4ee3\u7406\u670d\u52a1\u914d\u7f6e\u4e3b\u8981\u6709\u4e09\u90e8\u5206\u7ec4\u6210\uff1a\u53d1\u73b0\u7aef\u53e3\u53f7\u3001\u8def\u7531\u89c4\u5219\uff08\u5305\u542b\u8bbf\u95ee\u7aef\u53e3\u53f7\u3001\u57df\u540d\u7ed1\u5b9a\u548cSSL\uff09"}),"\n",(0,n.jsx)(t.h3,{id:"traefik-\u670d\u52a1",children:"Traefik \u670d\u52a1"}),"\n",(0,n.jsxs)(o.Z,{groupId:"yaml",children:[(0,n.jsx)(i.Z,{value:"yaml",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:'entryPoints:\n  web:\n    address: ":80"\n\n  websecure:\n    address: ":443"\n\ncertificatesResolvers:\n  letsencrypt:\n    acme:\n      email: your-email@example.com\n      storage: acme.json\n      httpChallenge:\n        entryPoint: web\n'})})}),(0,n.jsx)(i.Z,{value:"toml",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-toml",children:'[entryPoints]\n  [entryPoints.web]\n    address = ":80"\n\n  [entryPoints.websecure]\n    address = ":443"\n\n[certificatesResolvers.letsencrypt.acme]\n  email = "your-email@example.com"\n  storage = "acme.json"\n  [certificatesResolvers.letsencrypt.acme.httpChallenge]\n    # used during the challenge\n    entryPoint = "web"\n'})})}),(0,n.jsx)(i.Z,{value:"cli",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"--entrypoints.web.address=:80\n--entrypoints.websecure.address=:443\n\n--certificatesresolvers.letsencrypt.acme.email=your-email@example.com\n--certificatesresolvers.letsencrypt.acme.storage=acme.json\n--certificatesresolvers.letsencrypt.acme.httpchallenge.entrypoint=web\n"})})})]}),"\n",(0,n.jsx)(t.h3,{id:"docker",children:"Docker"}),"\n",(0,n.jsxs)(t.p,{children:["\u9996\u5148\u9700\u8981\u5f00\u542f ",(0,n.jsx)(t.a,{href:"https://doc.traefik.io/traefik/providers/docker/#configuration-examples",children:"Docker provider"})," \u540e\u5728\u4fee\u6539 zealot \u7684 Docker Compose \u914d\u7f6e\uff1a"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",metastring:'title="docker-compose.yml"',children:'version: \'3\'\nservices:\n  zealot:\n    <<: *defaults\n    labels:\n      - "traefik.enable=true"\n      - "traefik.http.services.zealot.loadbalancer.server.port=80"\n      - "traefik.http.routers.zealot.service=zealot"\n      - "traefik.http.routers.zealot.rule=Host(`zealot.icyleaf.dev`)"\n      - "traefik.http.routers.zealot.tls=true"\n      - "traefik.http.routers.zealot.tls.certresolver=letsencrypt"\n      - "traefik.http.routers.zealot.tls.domains[0].main=icyleaf.dev"\n      - "traefik.http.routers.zealot.tls.domains[0].sans=zealot.icyleaf.dev"\n    # \u7531 Treafik \u63a5\u7ba1\u65e0\u9700\u5728\u5bf9\u5916\u66b4\u9732\u7aef\u53e3\u53f7\n    # ports:\n    #   - "8901:80"\n    network:\n      # \u6839\u636e traefik \u670d\u52a1\u7684 network \u6309\u9700\u8c03\u6574\n      - traefik-services\n\nnetworks:\n  # \u6839\u636e traefik \u670d\u52a1\u7684 network \u6309\u9700\u8c03\u6574\n  traefik-services:\n    external: true\n'})}),"\n",(0,n.jsx)(t.p,{children:"Docker \u90e8\u7f72\u7684\u5c40\u9650\u4e8e Traefik \u548c Zealot \u670d\u52a1\u901a\u5e38\u5728\u540c\u4e00\u4e2a\u673a\u5668\u7684\u540c\u4e00\u4e2a OS \u7cfb\u7edf\u4e2d\uff0c\u8de8\u673a\u5668\u5c31\u6ca1\u6cd5\u5b9e\u73b0\u901a\u8baf\uff0c\u5bf9\u4e8e\u8de8\u673a\u5668\u5c31\u9700\u8981\u53c2\u8003\u4e0b\u9762\u4e24\u79cd\u914d\u7f6e\u65b9\u6848\uff1a"}),"\n",(0,n.jsx)(t.h3,{id:"consul",children:"Consul"}),"\n",(0,n.jsxs)(t.p,{children:["\u9996\u5148\u9700\u8981\u5f00\u542f ",(0,n.jsx)(t.a,{href:"https://doc.traefik.io/traefik/providers/consul/",children:"Consul provider"})," \u6216 ",(0,n.jsx)(t.a,{href:"https://doc.traefik.io/traefik/providers/consul-catalog/",children:"Consul Catalog provider"}),"\uff0c\u6211\u4eec\u53ea\u9700\u8981\u5229\u7528\u5b83\u7684 Key-Value \u5b58\u50a8\uff1a"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-shell",children:"consul kv put traefik/http/services/zealot/loadbalancer/server/port 5\nconsul kv put traefik/http/routers/zealot/service zealot\nconsul kv put traefik/http/routers/zealot/rule 'Host(`zealot.icyleaf.dev`)'\nconsul kv put traefik/http/routers/zealot/tls/certresolver letsencrypt\nconsul kv put traefik/http/routers/zealot/tls/domains/0/main icyleaf.dev\nconsul kv put traefik/http/routers/zealot/tls/domains/0/sans zealot.icyleaf.dev\n"})}),"\n",(0,n.jsx)(t.h3,{id:"nomad",children:"Nomad"}),"\n",(0,n.jsxs)(t.p,{children:["\u9996\u5148\u9700\u8981\u5f00\u542f ",(0,n.jsx)(t.a,{href:"https://doc.traefik.io/traefik/providers/nomad/",children:"Nomad provider"})," \u4e14 Nomad \u7248\u672c\u8981\u5927\u4e8e\u7b49\u4e8e 1.3 \u624d\u53ef\u4ee5\u54df\uff1a"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-hcl",metastring:'title="zealot.nomad"',children:'job "zealot" {\n  datacenters = ["dc1"]\n  type        = "service"\n\n  group "zealot" {\n    count = 1\n\n    network {\n      port  "http"{\n        static = 80\n      }\n    }\n\n    service {\n      name = "zealot-http"\n      provider = "nomad"\n      port = "http"\n    }\n\n    task "server" {\n      driver = "docker"\n      config {\n        image = "ghcr.io/tryzealot/zealot:nightly"\n        ports = ["http"]\n        args = [\n          - "traefik.http.routers.zealot.rule=Host(`zealot.icyleaf.dev`)",\n          - "traefik.http.routers.zealot.tls=true",\n          - "traefik.http.routers.zealot.tls.certresolver=letsencrypt",\n          - "traefik.http.routers.zealot.tls.domains[0].main=icyleaf.dev",\n          - "traefik.http.routers.zealot.tls.domains[0].sans=zealot.icyleaf.dev"\n        ]\n      }\n    }\n  }\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"caddy-2-\u914d\u7f6e",children:"Caddy 2 \u914d\u7f6e"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-nginx",metastring:'title="Caddyfile"',children:":443\n\nlog\n\n# \u4f7f\u7528 Let's Encrypt \u670d\u52a1\ntls your-email@example.com\n\nreverse_proxy 172.16.56.100:8901\n"})}),"\n",(0,n.jsxs)(t.p,{children:["\u914d\u7f6e\u53ea\u9700\u914d\u7f6e ",(0,n.jsx)(t.code,{children:"tls"})," \u548c ",(0,n.jsx)(t.code,{children:"proxy"})," \u540e\u9762 IP \u5730\u5740\u548c\u7aef\u53e3\u90e8\u5206\u5373\u53ef\u3002"]}),"\n",(0,n.jsx)(t.h2,{id:"nginx",children:"Nginx"}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["\u5982\u4e0b\u662f\u901a\u7528\u914d\u7f6e\uff0c\u5982\u679c\u4e0d\u53ef\u7528\u6b22\u8fce",(0,n.jsx)(t.a,{href:"https://github.com/tryzealot/docs/issues/new",children:"\u63d0\u95ee\u9898"}),"\u3002"]}),"\n"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-nginx",metastring:'title="conf.d/zealot.conf"',children:"upstream zealot {\n  zone upstreams 64K;\n  server 172.16.56.100:8901;\n  keepalive 32;\n}\n\nmap $http_upgrade $connection_upgrade {\n  default upgrade;\n  '' close;\n}\n\nserver {\n  listen 80;\n  listen [::]:80;\n  server_name zealot.icyleaf.dev;\n  location /.well-known/acme-challenge/ { allow all; }\n  location / { return 301 https://$host$request_uri; }\n}\n\nserver {\n  listen 443 ssl http2;              # \u53ef\u9009\uff1ahttp2 \u53ef\u80fd\u9700\u8981\u5b89\u88c5\u989d\u5916\u6269\u5c55\uff0c\u4e0d\u9700\u8981\u53ef\u79fb\u9664\n  listen [::]:443 ssl http2;         # \u53ef\u9009\uff1ahttp2 \u53ef\u80fd\u9700\u8981\u5b89\u88c5\u989d\u5916\u6269\u5c55\uff0c\u4e0d\u9700\u8981\u53ef\u79fb\u9664\n  server_name zealot.icyleaf.dev;\n\n  ssl_certificate       /etc/certs/zealot-cert.pem;\n  ssl_certificate_key   /etc/certs/zealot.pem;\n\n  # Optional\n  # ssl_ciphers           HIGH:!MEDIUM:!LOW:!aNULL:!NULL:!SHA;\n  # ssl_session_timeout   5m;\n  # ssl_session_cache     shared:SSL:1m;\n  # ssl_prefer_server_ciphers  on;\n\n  location / {\n    proxy_pass http://zealot;\n    proxy_redirect off;\n\n    proxy_pass_header Authorization;\n    proxy_set_header Host $host;\n    # proxy_set_header X-Forwarded-Ssl on; # \u53ef\u9009\n    proxy_set_header X-Real-IP $remote_addr;\n    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    proxy_set_header X-Forwarded-Proto $scheme;\n\n    proxy_http_version 1.1;\n    proxy_set_header Upgrade $http_upgrade;\n    proxy_set_header Connection $connection_upgrade;\n\n    client_max_body_size 0;\n    proxy_read_timeout 36000s;\n  }\n}\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Nginx \u8fd8\u9700\u8981\u5728 ",(0,n.jsx)(t.code,{children:"http"})," \u4e2d\u914d\u7f6e\u6700\u5927\u4e0a\u4f20\u6587\u4ef6\u4e0a\u4f20\u5927\u5c0f\uff0c\u666e\u901a\u5e94\u7528\u5efa\u8bae\u662f\u5728 200MB \u5de6\u53f3\uff0c\u5982\u679c\u662f\u6e38\u620f\u53ef\u6839\u636e\u5b9e\u9645\u6587\u4ef6\u5927\u5c0f\u518d\u591a\u51fa 50% \u6253\u51fa\u5bcc\u4f59\u3002"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-nginx",metastring:'title="nginx.conf"',children:"http {\n  [...]\n\n  client_max_body_size 200M;\n}\n"})})]})}function m(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},5162:(e,t,r)=>{r.d(t,{Z:()=>l});r(7294);var n=r(512);const s={tabItem:"tabItem_Ymn6"};var a=r(5893);function l(e){let{children:t,hidden:r,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.Z)(s.tabItem,l),hidden:r,children:t})}},4866:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(7294),s=r(512),a=r(2466),l=r(6550),o=r(469),i=r(1980),c=r(7392),d=r(12);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}(r);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const s=(0,l.k6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i._X)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,a=h(e),[l,i]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[c,u]=f({queryString:r,groupId:s}),[m,x]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,d.Nk)(r);return[s,(0,n.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:s}),v=(()=>{const e=c??m;return p({value:e,tabValues:a})?e:null})();(0,o.Z)((()=>{v&&i(v)}),[v]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),x(e)}),[u,x,a]),tabValues:a}}var x=r(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=r(5893);function y(e){let{className:t,block:r,selectedValue:n,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),d=e=>{const t=e.currentTarget,r=i.indexOf(t),s=o[r].value;s!==n&&(c(t),l(s))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>i.push(e),onKeyDown:u,onClick:d,...a,className:(0,s.Z)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function g(e){let{lazy:t,children:r,selectedValue:s}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function k(e){const t=m(e);return(0,j.jsxs)("div",{className:(0,s.Z)("tabs-container",v.tabList),children:[(0,j.jsx)(y,{...e,...t}),(0,j.jsx)(g,{...e,...t})]})}function b(e){const t=(0,x.Z)();return(0,j.jsx)(k,{...e,children:u(e.children)},String(t))}},1151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>l});var n=r(7294);const s={},a=n.createContext(s);function l(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);
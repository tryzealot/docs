"use strict";(self.webpackChunkzealot_new_docs=self.webpackChunkzealot_new_docs||[]).push([[5098],{785:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var t=r(5893),s=r(1151);const o={sidebar_label:"Nomad"},d="Nomad \u90e8\u7f72 Zealot \u6307\u5357",a={id:"self-hosted/deployment/nomad",title:"Nomad \u90e8\u7f72 Zealot \u6307\u5357",description:"Zealot \u539f\u751f\u652f\u6301\u4f7f\u7528 Nomad \u90e8\u7f72\u3002\u8fd9\u5f97\u76ca\u4e8e Nomad \u6709\u5f88\u4e0d\u9519\u7684\u63d2\u4ef6\u673a\u5236\uff0c\u5b98\u65b9\u9ed8\u8ba4\u652f\u6301 Docker \u63d2\u4ef6\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/version-5.2.0/self-hosted/deployment/nomad.md",sourceDirName:"self-hosted/deployment",slug:"/self-hosted/deployment/nomad",permalink:"/zh-Hans/docs/self-hosted/deployment/nomad",draft:!1,unlisted:!1,editUrl:"https://github.com/tryzealot/docs/tree/main/versioned_docs/version-5.2.0/self-hosted/deployment/nomad.md",tags:[],version:"5.2.0",frontMatter:{sidebar_label:"Nomad"},sidebar:"selfHosted",previous:{title:"Kubernetes",permalink:"/zh-Hans/docs/self-hosted/deployment/kubernetes"},next:{title:"\u6e90\u4ee3\u7801",permalink:"/zh-Hans/docs/self-hosted/deployment/source-code"}},i={},c=[{value:"\u57fa\u672c\u90e8\u7f72",id:"\u57fa\u672c\u90e8\u7f72",level:2},{value:"\u4f7f\u7528 Nomad \u90e8\u7f72",id:"\u4f7f\u7528-nomad-\u90e8\u7f72",level:3},{value:"\u4f7f\u7528 Terraform \u90e8\u7f72",id:"\u4f7f\u7528-terraform-\u90e8\u7f72",level:3},{value:"\u5916\u90e8\u6587\u4ef6\u5b58\u50a8",id:"\u5916\u90e8\u6587\u4ef6\u5b58\u50a8",level:2},{value:"CSI \u534f\u8bae",id:"csi-\u534f\u8bae",level:3}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"nomad-\u90e8\u7f72-zealot-\u6307\u5357",children:"Nomad \u90e8\u7f72 Zealot \u6307\u5357"}),"\n",(0,t.jsxs)(n.p,{children:["Zealot \u539f\u751f\u652f\u6301\u4f7f\u7528 ",(0,t.jsx)(n.a,{href:"https://www.nomadproject.io/",children:"Nomad"})," \u90e8\u7f72\u3002\u8fd9\u5f97\u76ca\u4e8e Nomad \u6709\u5f88\u4e0d\u9519\u7684\u63d2\u4ef6\u673a\u5236\uff0c\u5b98\u65b9\u9ed8\u8ba4\u652f\u6301 Docker \u63d2\u4ef6\u3002\n\u5728\u914d\u7f6e\u4e0a\u63a5\u8fd1\u4e8e docker compose \u7684\u914d\u7f6e\uff0c\u53ea\u4e0d\u8fc7\u5b83\u7684\u914d\u7f6e\u8bed\u8a00\u662f ",(0,t.jsx)(n.a,{href:"https://developer.hashicorp.com/nomad/docs/job-specification/hcl2",children:"HCL"})," \u800c\u4e0d\u662f YAML\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u57fa\u672c\u90e8\u7f72",children:"\u57fa\u672c\u90e8\u7f72"}),"\n",(0,t.jsx)(n.h3,{id:"\u4f7f\u7528-nomad-\u90e8\u7f72",children:"\u4f7f\u7528 Nomad \u90e8\u7f72"}),"\n",(0,t.jsxs)(n.p,{children:["\u5148\u6309\u7167\u5b98\u65b9\u6559\u7a0b\u4f9d\u6b21\u5b89\u88c5\u597d ",(0,t.jsx)(n.a,{href:"https://developer.hashicorp.com/nomad/docs/install",children:"nomad"}),"\uff0c\u8fd9\u4e2a\u4e8c\u8fdb\u5236\u6587\u4ef6\u662f\u5305\u542b\u4e86\u5ba2\u6237\u7aef\u548c\u670d\u52a1\u7aef\u3002\n\u4e0d\u4e86\u89e3\u7684\u5efa\u8bae\u8ddf\u7740",(0,t.jsx)(n.a,{href:"https://developer.hashicorp.com/nomad/tutorials/get-started",children:"\u5b98\u65b9\u6559\u7a0b"}),"\u6f14\u7ec3\u4e00\u904d\u3002"]}),"\n",(0,t.jsxs)(n.p,{children:["\u4e0b\u9762\u6587\u4ef6\u5c06\u4f1a\u521b\u5efa postgres\u3001redis \u548c zealot \u4e09\u4e2a\u670d\u52a1\uff0c\u5bf9\u4e8e\u5df2\u6709\u7684\u5916\u90e8\u6570\u636e\u5e93\u548c\u7f13\u5b58\u670d\u52a1\uff0c\u53ef\u4ee5\u5220\u9664\u6389\u5bf9\u5e94\u7684 ",(0,t.jsx)(n.code,{children:"port"}),", ",(0,t.jsx)(n.code,{children:"service"})," \u548c ",(0,t.jsx)(n.code,{children:"task"})," \u540e\u7f16\u8f91 ",(0,t.jsx)(n.code,{children:"zealot"})," task \u91cc\u9762\u7684\u6a21\u677f\u53d8\u91cf\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-hcl",metastring:'title="zealot.nomad"',children:'job "zealot" {\n  type        = "service"\n  datacenters = "dc1"     // \u6839\u636e\u5b9e\u9645\u60c5\u51b5\u4fee\u6539\n\n  update {\n    max_parallel      = 1\n    min_healthy_time  = "30s"\n    auto_revert       = true\n  }\n\n  group "zealot" {\n    network {\n      port "zealot" {\n        to = 80\n      }\n\n      port "postgres" {\n        to = 5678\n      }\n\n      port "redis" {\n        to = 6379\n      }\n    }\n\n    service {\n      name = "zealot"\n      port = "zealot"\n      provider = "nomad"\n\n      // \u6ce8\u518c\u670d\u52a1\u5230 traefik\n      // tags = [\n      //   "traefik.enable=true",\n      //   "traefik.http.routers.zealot.entrypoints=web, websecure",\n      //   "traefik.http.routers.zealot.rule=Host(`zealot.example.com`)",\n      // ]\n    }\n\n    service {\n      name = "postgres"\n      port = "postgres"\n      provider = "nomad"\n\n      // \u6ce8\u518c\u670d\u52a1\u5230 traefik\n      // tags = [\n      //   "traefik.enable=true",\n      //   "traefik.tcp.routers.postgres.rule=HostSNI(`*`)",\n      //   "traefik.tcp.routers.postgres.entrypoints=postgres",\n      // ]\n    }\n\n    service {\n      name = "redis"\n      port = "redis"\n      provider = "nomad"\n\n      // \u6ce8\u518c\u670d\u52a1\u5230 traefik\n      // tags = [\n      //   "traefik.enable=true",\n      //   "traefik.tcp.routers.redis.rule=HostSNI(`*`)",\n      //   "traefik.tcp.routers.redis.entrypoints=redis",\n      // ]\n    }\n\n    task "zealot" {\n      driver = "docker"\n\n      config {\n        image = "ghcr.io/tryzealot/zealot:latest"\n        ports = ["zealot"]\n\n        // \u6839\u636e\u5b9e\u9645\u60c5\u51b5\u4fee\u6539\uff0c\u6216\u91c7\u7528 CSI \u534f\u8bae\u7684\u5916\u90e8\u5b58\u50a8\n        volumes = [\n          "/tmp/zealot/uploads:/app/public/uploads",\n          "/tmp/zealot/backups:/app/public/backups",\n        ]\n\n        // \u6dfb\u52a0\u670d\u52a1\u5230 homepage dashboard \u9762\u677f\n        // labels = {\n        //   "homepage.group"        = "Dev"\n        //   "homepage.name"         = "Zealot"\n        //   "homepage.icon"         = "mdi-progress-download"\n        //   "homepage.href"         = "https://zealot.example.com"\n        //   "homepage.description"  = "Beta App Distribution"\n        // }\n      }\n\n      // Zealot example config\n      // https://github.com/tryzealot/zealot-docker/blob/master/config.env\n      template {\n        destination = "local/config.env"\n        change_mode = "restart"\n        env         = true\n        data        = <<-EOF\n        ZEALOT_APPEARANCE = dark\n        ZEALOT_DOMAIN = zealot.example.com\n\n        ZEALOT_GUEST_MODE = false\n        ZEALOT_REGISTER_ENABLED = true\n        EOF\n      }\n\n      template {\n        destination = "secrets/secret.env"\n        change_mode = "restart"\n        env         = true\n        data        = <<-EOF\n        # admin account\n        ZEALOT_ADMIN_EMAIL = admin@zealot.com\n        ZEALOT_ADMIN_PASSWORD = ze@l0t\n\n        # datbase\n        ZEALOT_POSTGRES_HOST = {{ env "NOMAD_IP_postgres" }}\n        ZEALOT_POSTGRES_PORT = {{ env "NOMAD_PORT_postgres" }}\n        ZEALOT_POSTGRES_USERNAME = "zealot"\n        ZEALOT_POSTGRES_PASSWORD = "zealot"\n        ZEALOT_POSTGRES_DB_NAME = "zealot"\n\n        # cache\n        REDIS_URL = redis://{{ env "NOMAD_ARRR_redis" }}/0\n\n        # secret token\n        SECRET_TOKEN = $${ sha256(uuidv5("url", "zealot.ews.im")) }\n        EOF\n      }\n\n      resources {\n        cpu         = 500\n        memory      = 500\n        memory_max  = 1000\n      }\n    }\n\n    task "postgres" {\n      driver = "docker"\n\n      lifecycle {\n        hook = "prestart"\n        sidecar = true\n      }\n\n      config {\n        image = "postgres:15-alpine"\n        ports = ["postgres"]\n        volumes = [\n          "secrets/init-role.sql:/init-role.sql",\n          "secrets/init-db.sql:/init-db.sql"\n        ]\n      }\n\n      env {\n        POSTGRES_INITDB_ARGS  = "--data-checksums"\n        POSTGRES_USER         = "zealot"\n        POSTGRES_PASSWORD     = "zealot"\n        POSTGRES_DB           = "zealot"\n      }\n\n      resources{\n        cpu         = 512\n        memory      = 200\n        memory_max  = 512\n      }\n    }\n\n    task "redis" {\n      driver = "docker"\n\n      lifecycle {\n        hook = "prestart"\n        sidecar = true\n      }\n\n      config {\n        image = "redis:7-alpine"\n        ports = ["redis"]\n      }\n\n      resources {\n        cpu    = 200\n        memory = 200\n      }\n    }\n  }\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u786e\u8ba4\u65e0\u8bef\u540e\u6267\u884c ",(0,t.jsx)(n.code,{children:"nomad job run zealot.nomad"})]}),"\n",(0,t.jsx)(n.h3,{id:"\u4f7f\u7528-terraform-\u90e8\u7f72",children:"\u4f7f\u7528 Terraform \u90e8\u7f72"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Terraform \u548c Nomad \u662f\u540c\u5bb6\u516c\u53f8\u7684\u4ea7\u54c1\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\u5148\u6309\u7167\u5b98\u65b9\u6559\u7a0b\u4f9d\u6b21\u5b89\u88c5\u597d ",(0,t.jsx)(n.a,{href:"https://www.terraform.io/",children:"terraform"}),"\u3001",(0,t.jsx)(n.a,{href:"https://registry.terraform.io/providers/hashicorp/nomad/",children:"nomad \u63d2\u4ef6"}),"\u540e\uff0c\u590d\u7528\u4e0a\u9762\u7684 ",(0,t.jsx)(n.code,{children:"zealot.nomad"})," \u6587\u4ef6\u518d\u989d\u5916\u52a0\u4e00\u4e2a ",(0,t.jsx)(n.code,{children:"main.tf"})," \u6587\u4ef6\u5373\u53ef\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-hcl",children:'resource "nomad_job" "jobs" {\n  jobspec = file("${path.module}/zealot.nomad")\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\u6267\u884c ",(0,t.jsx)(n.code,{children:"terraform plan"})," \u786e\u8ba4\u65e0\u8bef\u540e\u5728\u901a\u8fc7 ",(0,t.jsx)(n.code,{children:"terraform apply"})," \u5e94\u7528\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u5916\u90e8\u6587\u4ef6\u5b58\u50a8",children:"\u5916\u90e8\u6587\u4ef6\u5b58\u50a8"}),"\n",(0,t.jsx)(n.p,{children:"Nomad \u652f\u6301\u591a\u96c6\u7fa4\u7ba1\u7406\uff0c\u5f88\u591a\u60c5\u51b5\u4e0b\u670d\u52a1\u90e8\u7f72\u7684\u5b58\u50a8\u4e0d\u53ef\u80fd\u76f4\u63a5\u6302\u8f7d\u5230\u5bf9\u5e94\u7684\u6587\u4ef6\u7cfb\u7edf\u4e2d\uff0c\u66f4\u591a\u7684\u662f\u653e\u5728\u4e00\u4e2a\u5171\u4eab\u6587\u4ef6\u5b58\u50a8\u534f\u8bae\u4e0a\u9762\uff0c\u6bd4\u5982 SMB\u3001NFS\u3001S3 \u7b49\u7b49\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"csi-\u534f\u8bae",children:"CSI \u534f\u8bae"}),"\n",(0,t.jsxs)(n.p,{children:["Nomad ",(0,t.jsx)(n.a,{href:"https://developer.hashicorp.com/nomad/tutorials/stateful-workloads/stateful-workloads-csi-volumes",children:"\u652f\u6301 CSI \u534f\u8bae"}),"\uff0c\u7406\u8bba\u4e0a",(0,t.jsx)(n.a,{href:"https://kubernetes-csi.github.io/docs/drivers.html",children:"\u5b9e\u73b0 CSI \u63a5\u53e3\u7684\u670d\u52a1"}),"\u90fd\u53ef\u4ee5\u6ee1\u8db3\u3002"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u622a\u6b62 Nomad 1.5 \u7248\u672c\u4e3a\u6b62\uff0cNomad \u53ef\u4ee5\u4f7f\u7528 CSI \u5377\uff0c\u4f46\u5b83\u4e0d\u80fd\u81ea\u8eab\u63a7\u5236\u521b\u5efa\u3001\u9500\u6bc1\u6216\u7ba1\u7406\u3002\u5377\u5fc5\u987b\u5728\u5916\u90e8\u521b\u5efa\uff0c\u7136\u540e\u5411 Nomad \u6ce8\u518c\u540e\u624d\u80fd\u4f7f\u7528\u3002"}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"\u63d2\u4ef6"}),(0,t.jsx)(n.th,{children:"\u652f\u6301\u534f\u8bae"}),(0,t.jsx)(n.th,{children:"\u517c\u5bb9\u60c5\u51b5"}),(0,t.jsx)(n.th,{children:"terraform nomad \u8d44\u6e90"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://github.com/kubernetes-csi/csi-driver-smb",children:"kubernetes-csi-driver-smb"})}),(0,t.jsx)(n.td,{children:"smb"}),(0,t.jsx)(n.td,{children:"\u672a\u6d4b\u8bd5"}),(0,t.jsx)(n.td,{children:"\u672a\u6d4b\u8bd5"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://github.com/kubernetes-csi/csi-driver-nfs",children:"kubernetes-csi-driver-nfs"})}),(0,t.jsx)(n.td,{children:"nfs"}),(0,t.jsx)(n.td,{children:"\u652f\u6301"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://registry.terraform.io/providers/hashicorp/nomad/latest/docs/resources/csi_volume_registration",children:"nomad_csi_volume_registration"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://github.com/kubernetes-csi/csi-driver-iscsi",children:"kubernetes-csi-driver-iscsi"})}),(0,t.jsx)(n.td,{children:"iscsi"}),(0,t.jsx)(n.td,{children:"\u672a\u6d4b\u8bd5"}),(0,t.jsx)(n.td,{children:"\u672a\u6d4b\u8bd5"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://github.com/democratic-csi/democratic-csi",children:"democraticcsi/democratic-csi"})}),(0,t.jsx)(n.td,{children:"smb/nfs/iscsi"}),(0,t.jsx)(n.td,{children:"\u652f\u6301"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://registry.terraform.io/providers/hashicorp/nomad/latest/docs/resources/csi_volume",children:"nomad_csi_volume"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://gitlab.com/rocketduck/csi-plugin-nfs",children:"rocketduck/csi-plugin-nfs"})}),(0,t.jsx)(n.td,{children:"nfs"}),(0,t.jsx)(n.td,{children:"\u652f\u6301"}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://registry.terraform.io/providers/hashicorp/nomad/latest/docs/resources/csi_volume",children:"nomad_csi_volume"})})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>a,a:()=>d});var t=r(7294);const s={},o=t.createContext(s);function d(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);
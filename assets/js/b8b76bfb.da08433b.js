"use strict";(self.webpackChunkzealot_new_docs=self.webpackChunkzealot_new_docs||[]).push([[8901],{9149:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=t(5893),s=t(1151);const o={sidebar_label:"Nomad"},i="Deploy Zealot with Nomad guide",a={id:"self-hosted/deployment/nomad",title:"Deploy Zealot with Nomad guide",description:"Zealot support deployments using Nomad, it use HCL language to configure.",source:"@site/versioned_docs/version-5.0.0/self-hosted/deployment/nomad.md",sourceDirName:"self-hosted/deployment",slug:"/self-hosted/deployment/nomad",permalink:"/docs/5.0.0/self-hosted/deployment/nomad",draft:!1,unlisted:!1,editUrl:"https://github.com/tryzealot/docs/tree/main/versioned_docs/version-5.0.0/self-hosted/deployment/nomad.md",tags:[],version:"5.0.0",frontMatter:{sidebar_label:"Nomad"},sidebar:"selfHosted",previous:{title:"Kubernetes",permalink:"/docs/5.0.0/self-hosted/deployment/kubernetes"},next:{title:"Source code",permalink:"/docs/5.0.0/self-hosted/deployment/source-code"}},d={},l=[{value:"Setup",id:"setup",level:2},{value:"Using Nomad",id:"using-nomad",level:3},{value:"Using Terraform",id:"using-terraform",level:3},{value:"External Storages",id:"external-storages",level:2},{value:"CSI",id:"csi",level:3}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"deploy-zealot-with-nomad-guide",children:"Deploy Zealot with Nomad guide"}),"\n",(0,r.jsxs)(n.p,{children:["Zealot support deployments using ",(0,r.jsx)(n.a,{href:"https://www.nomadproject.io/",children:"Nomad"}),", it use ",(0,r.jsx)(n.a,{href:"https://developer.hashicorp.com/nomad/docs/job-specification/hcl2",children:"HCL"})," language to configure."]}),"\n",(0,r.jsx)(n.h2,{id:"setup",children:"Setup"}),"\n",(0,r.jsx)(n.h3,{id:"using-nomad",children:"Using Nomad"}),"\n",(0,r.jsxs)(n.p,{children:["First, follow the official tutorial to install ",(0,r.jsx)(n.a,{href:"https://developer.hashicorp.com/nomad/docs/install",children:"nomad"}),", this binary file contains the client and server. It is recommended to follow the ",(0,r.jsx)(n.a,{href:"https://developer.hashicorp.com/nomad/tutorials/get-started",children:"tutorials"})," to walk through it if you don't know it."]}),"\n",(0,r.jsxs)(n.p,{children:["The following file will create the postgres, redis and zealot services.\nFor the existing external database and cache services,\nyou can delete the corresponding ",(0,r.jsx)(n.code,{children:"port"}),", ",(0,r.jsx)(n.code,{children:"service"})," and ",(0,r.jsx)(n.code,{children:"task"})," and edit the template variables in the ",(0,r.jsx)(n.code,{children:"zealot"})," task."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-hcl",metastring:'title="zealot.nomad"',children:'job "zealot" {\n  type        = "service"\n  datacenters = "dc1"     // modify\n\n  update {\n    max_parallel      = 1\n    min_healthy_time  = "30s"\n    auto_revert       = true\n  }\n\n  group "zealot" {\n    network {\n      port "zealot" {\n        to = 80\n      }\n\n      port "postgres" {\n        to = 5678\n      }\n\n      port "redis" {\n        to = 6379\n      }\n    }\n\n    service {\n      name = "zealot"\n      port = "zealot"\n      provider = "nomad"\n\n      // Register to traefik\n      // tags = [\n      //   "traefik.enable=true",\n      //   "traefik.http.routers.zealot.entrypoints=web, websecure",\n      //   "traefik.http.routers.zealot.rule=Host(`zealot.example.com`)",\n      // ]\n    }\n\n    service {\n      name = "postgres"\n      port = "postgres"\n      provider = "nomad"\n\n      // Register to traefik\n      // tags = [\n      //   "traefik.enable=true",\n      //   "traefik.tcp.routers.postgres.rule=HostSNI(`*`)",\n      //   "traefik.tcp.routers.postgres.entrypoints=postgres",\n      // ]\n    }\n\n    service {\n      name = "redis"\n      port = "redis"\n      provider = "nomad"\n\n      // Register to traefik\n      // tags = [\n      //   "traefik.enable=true",\n      //   "traefik.tcp.routers.redis.rule=HostSNI(`*`)",\n      //   "traefik.tcp.routers.redis.entrypoints=redis",\n      // ]\n    }\n\n    task "zealot" {\n      driver = "docker"\n\n      config {\n        image = "ghcr.io/tryzealot/zealot:latest"\n        ports = ["zealot"]\n\n        // modify\n        volumes = [\n          "/tmp/zealot/uploads:/app/public/uploads",\n          "/tmp/zealot/backups:/app/public/backups",\n        ]\n\n        // Register to homepage dashboard\n        // labels = {\n        //   "homepage.group"        = "Dev"\n        //   "homepage.name"         = "Zealot"\n        //   "homepage.icon"         = "mdi-progress-download"\n        //   "homepage.href"         = "https://zealot.example.com"\n        //   "homepage.description"  = "Beta App Distribution"\n        // }\n      }\n\n      // Zealot example config\n      // https://github.com/tryzealot/zealot-docker/blob/master/config.env\n      template {\n        destination = "local/config.env"\n        change_mode = "restart"\n        env         = true\n        data        = <<-EOF\n        ZEALOT_APPEARANCE = dark\n        ZEALOT_DOMAIN = zealot.example.com\n\n        ZEALOT_GUEST_MODE = false\n        ZEALOT_REGISTER_ENABLED = true\n        EOF\n      }\n\n      template {\n        destination = "secrets/secret.env"\n        change_mode = "restart"\n        env         = true\n        data        = <<-EOF\n        # admin account\n        ZEALOT_ADMIN_EMAIL = admin@zealot.com\n        ZEALOT_ADMIN_PASSWORD = ze@l0t\n\n        # datbase\n        ZEALOT_POSTGRES_HOST = {{ env "NOMAD_IP_postgres" }}\n        ZEALOT_POSTGRES_PORT = {{ env "NOMAD_PORT_postgres" }}\n        ZEALOT_POSTGRES_USERNAME = "zealot"\n        ZEALOT_POSTGRES_PASSWORD = "zealot"\n        ZEALOT_POSTGRES_DB_NAME = "zealot"\n\n        # cache\n        REDIS_URL = redis://{{ env "NOMAD_ARRR_redis" }}/0\n\n        # secret token\n        SECRET_TOKEN = $${ sha256(uuidv5("url", "zealot.ews.im")) }\n        EOF\n      }\n\n      resources {\n        cpu         = 500\n        memory      = 500\n        memory_max  = 1000\n      }\n    }\n\n    task "postgres" {\n      driver = "docker"\n\n      lifecycle {\n        hook = "prestart"\n        sidecar = true\n      }\n\n      config {\n        image = "postgres:15-alpine"\n        ports = ["postgres"]\n        volumes = [\n          "secrets/init-role.sql:/init-role.sql",\n          "secrets/init-db.sql:/init-db.sql"\n        ]\n      }\n\n      env {\n        POSTGRES_INITDB_ARGS  = "--data-checksums"\n        POSTGRES_USER         = "zealot"\n        POSTGRES_PASSWORD     = "zealot"\n        POSTGRES_DB           = "zealot"\n      }\n\n      resources{\n        cpu         = 512\n        memory      = 200\n        memory_max  = 512\n      }\n    }\n\n    task "redis" {\n      driver = "docker"\n\n      lifecycle {\n        hook = "prestart"\n        sidecar = true\n      }\n\n      config {\n        image = "redis:7-alpine"\n        ports = ["redis"]\n      }\n\n      resources {\n        cpu    = 200\n        memory = 200\n      }\n    }\n  }\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Save the file and execute the command ",(0,r.jsx)(n.code,{children:"nomad job run zealot.nomad"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"using-terraform",children:"Using Terraform"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Both Terraform and Nomad are the same company."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Following the offical tutorials to install ",(0,r.jsx)(n.a,{href:"https://www.terraform.io/",children:"terraform"}),", ",(0,r.jsx)(n.a,{href:"https://registry.terraform.io/providers/hashicorp/nomad/",children:"nomad plugin"}),",\ncopy the ",(0,r.jsx)(n.code,{children:"zealot.nomad"})," in previous step and edit a new file named ",(0,r.jsx)(n.code,{children:"main.tf"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-hcl",children:'resource "nomad_job" "jobs" {\n  jobspec = file("${path.module}/zealot.nomad")\n}\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Execute ",(0,r.jsx)(n.code,{children:"terraform plan"})," to ensure, then deploy ",(0,r.jsx)(n.code,{children:"terraform apply"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"external-storages",children:"External Storages"}),"\n",(0,r.jsx)(n.p,{children:"Nomad supports multi-cluster management, and in many cases the storage deployed by the service cannot be mounted directly to the corresponding file system, but is more often placed on top of a shared file storage protocol, such as SMB, NFS, S3, etc."}),"\n",(0,r.jsx)(n.h3,{id:"csi",children:"CSI"}),"\n",(0,r.jsxs)(n.p,{children:["Nomad currently supports the ",(0,r.jsx)(n.a,{href:"https://developer.hashicorp.com/nomad/tutorials/stateful-workloads/stateful-workloads-csi-volumes",children:"CSI"})," in ",(0,r.jsx)(n.a,{href:"https://github.com/democratic-csi/democratic-csi/blob/master/docs/nomad.md",children:"a limited capability"})," (Nomad 1.5).\nNomad can utilize CSI volumes, but it can not automatically create, destroy, or manage them in any capacity. Volumes have to be created externally and then registered with Nomad.\nYou can find a list of plugins in the ",(0,r.jsx)(n.a,{href:"https://kubernetes-csi.github.io/docs/drivers.html",children:"Kubernetes CSI Developer Documentation"}),"."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Plugin"}),(0,r.jsx)(n.th,{children:"Schemes"}),(0,r.jsx)(n.th,{children:"Compatible"}),(0,r.jsx)(n.th,{children:"terraform nomad resource"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://github.com/kubernetes-csi/csi-driver-smb",children:"kubernetes-csi-driver-smb"})}),(0,r.jsx)(n.td,{children:"smb"}),(0,r.jsx)(n.td,{children:"Unknown"}),(0,r.jsx)(n.td,{children:"Unknown"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://github.com/kubernetes-csi/csi-driver-nfs",children:"kubernetes-csi-driver-nfs"})}),(0,r.jsx)(n.td,{children:"nfs"}),(0,r.jsx)(n.td,{children:"Supported"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://registry.terraform.io/providers/hashicorp/nomad/latest/docs/resources/csi_volume_registration",children:"nomad_csi_volume_registration"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://github.com/kubernetes-csi/csi-driver-iscsi",children:"kubernetes-csi-driver-iscsi"})}),(0,r.jsx)(n.td,{children:"iscsi"}),(0,r.jsx)(n.td,{children:"Supported"}),(0,r.jsx)(n.td,{children:"Supported"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://github.com/democratic-csi/democratic-csi",children:"democraticcsi/democratic-csi"})}),(0,r.jsx)(n.td,{children:"smb/nfs/iscsi"}),(0,r.jsx)(n.td,{children:"Supported"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://registry.terraform.io/providers/hashicorp/nomad/latest/docs/resources/csi_volume",children:"nomad_csi_volume"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://gitlab.com/rocketduck/csi-plugin-nfs",children:"rocketduck/csi-plugin-nfs"})}),(0,r.jsx)(n.td,{children:"nfs"}),(0,r.jsx)(n.td,{children:"Supported"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://registry.terraform.io/providers/hashicorp/nomad/latest/docs/resources/csi_volume",children:"nomad_csi_volume"})})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var r=t(7294);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);
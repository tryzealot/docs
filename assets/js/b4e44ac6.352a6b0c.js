"use strict";(self.webpackChunkzealot_new_docs=self.webpackChunkzealot_new_docs||[]).push([[9184],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=l,y=u["".concat(i,".").concat(d)]||u[d]||c[d]||o;return n?a.createElement(y,r(r({ref:t},m),{},{components:n})):a.createElement(y,r({ref:t},m))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:l,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},853:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),l=(n(7294),n(3905));const o={sidebar_label:"Kubernetes"},r="Deploy Zealot with Kubernetes guide",s={unversionedId:"self-hosted/deployment/kubernetes",id:"self-hosted/deployment/kubernetes",title:"Deploy Zealot with Kubernetes guide",description:"Zealot support deployments using Kubernetes, but only .yaml config files are available currently.",source:"@site/docs/self-hosted/deployment/kubernetes.md",sourceDirName:"self-hosted/deployment",slug:"/self-hosted/deployment/kubernetes",permalink:"/docs/self-hosted/deployment/kubernetes",draft:!1,editUrl:"https://github.com/tryzealot/docs/tree/main/docs/self-hosted/deployment/kubernetes.md",tags:[],version:"current",frontMatter:{sidebar_label:"Kubernetes"},sidebar:"selfHosted",previous:{title:"Step by step",permalink:"/docs/self-hosted/deployment/docker/step-by-step"},next:{title:"Nomad",permalink:"/docs/self-hosted/deployment/nomad"}},i={},p=[{value:"Check list",id:"check-list",level:2},{value:"Steps",id:"steps",level:2},{value:"10-zealot-namespace.yml",id:"10-zealot-namespaceyml",level:3},{value:"20-zealot-secrets.yml",id:"20-zealot-secretsyml",level:3},{value:"21-zealot-configmap.yml",id:"21-zealot-configmapyml",level:3},{value:"30-zealot-storage.yml",id:"30-zealot-storageyml",level:3},{value:"40-zealot-deployment.yml",id:"40-zealot-deploymentyml",level:3},{value:"50-zealot-service.yml",id:"50-zealot-serviceyml",level:3},{value:"60-zealot-ingress.yml",id:"60-zealot-ingressyml",level:3}],m={toc:p};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"deploy-zealot-with-kubernetes-guide"},"Deploy Zealot with Kubernetes guide"),(0,l.kt)("p",null,"Zealot support deployments using Kubernetes, but only ",(0,l.kt)("inlineCode",{parentName:"p"},".yaml")," config files are available currently."),(0,l.kt)("h2",{id:"check-list"},"Check list"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ConfigMap")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"Secret")," to configure enviroment variables."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"PersistentVolumeClaim")," to configure ",(0,l.kt)("inlineCode",{parentName:"li"},"public/uploads"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"public/bakcup"),"."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Deployment")," to control ",(0,l.kt)("inlineCode",{parentName:"li"},"zealot")," pod.")),(0,l.kt)("h2",{id:"steps"},"Steps"),(0,l.kt)("h3",{id:"10-zealot-namespaceyml"},"10-zealot-namespace.yml"),(0,l.kt)("p",null,"Zealot namespace."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="10-zealot-namespace.yml"',title:'"10-zealot-namespace.yml"'},"api Version: v1\nkind: Namespace\nmetadata:\nname: zealot\n")),(0,l.kt)("h3",{id:"20-zealot-secretsyml"},"20-zealot-secrets.yml"),(0,l.kt)("p",null,"Zealot enviroments secrets. This is loaded all secrets ",(0,l.kt)("a",{parentName:"p",href:"/docs/self-hosted/configuration/environment-variables"},"enviroments"),", all values need encryt by base64."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="20-zealot-secrets.yml"',title:'"20-zealot-secrets.yml"'},"apiVersion: v1\nkind: Secret\nmetadata:\n  namespace: zealot\n  name: zealot-secrets\ndata:\n  ZEALOT_ADMIN_EMAIL: V1ZkU2RHRlhOVUZsYlZab1lrYzVNRXh0VG5aaVVUMDk=\n  ZEALOT_ADMIN_PASSWORD: emVAbDB0\n  ZEALOT_POSTGRES_HOST: cG9zdGdyZXM=\n  ZEALOT_POSTGRES_PORT: NTQzMg==\n  ZEALOT_POSTGRES_USERNAME: emVhbG90\n  ZEALOT_POSTGRES_PASSWORD: emVAbDB0\n  ZEALOT_POSTGRES_DB_NAME: emVhbG90\n  REDIS_URL: cmVkaXM6Ly9yZWRpczo2Mzc5LzE=\n\n  # echo -n 'secret-key' | sha256sum | awk '{ printf $1 }' | base64\n  SECRET_TOKEN: ODVkYmUxNWQ3NWVmOTMwOGM3YWUwZjMzYzdhMzI0Y2M2ZjRiZjUxOWEyZWQyZjMwMjdiZDMzYzE0MGE0ZjlhYQ==\n")),(0,l.kt)("h3",{id:"21-zealot-configmapyml"},"21-zealot-configmap.yml"),(0,l.kt)("p",null,"Zealot enviroments config map. This is loaded safe ",(0,l.kt)("a",{parentName:"p",href:"/docs/self-hosted/configuration/environment-variables"},"enviroments"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="21-zealot-configmap.yml"',title:'"21-zealot-configmap.yml"'},'apiVersion: v1\nkind: ConfigMap\nmetadata:\n  namespace: zealot\n  name: zealot-config\ndata:\n  ZEALOT_DOMAIN: zealot.icyleaf.dev\n  DEFAULT_LOCALE: en\n  ZEALOT_REGISTER_ENABLED: "true"\n')),(0,l.kt)("h3",{id:"30-zealot-storageyml"},"30-zealot-storage.yml"),(0,l.kt)("p",null,"The creation of the persistent volume claims for uploaded files (apps/debug files) and backup files. May you want to increase the size. This expects to have a storage class installed."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="30-zealot-storage.yml"',title:'"30-zealot-storage.yml"'},"apiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: zealot-uploads\n  labels:\n    app: zealot\nspec:\n  accessModes:\n    - ReadWriteOnce\n  resources:\n    requests:\n      storage: 20Gi\n---\napiVersion: v1\nkind: PersistentVolumeClaim\nmetadata:\n  name: zealot-backup\n  labels:\n    app: zealot\nspec:\n  accessModes:\n    - ReadWriteOnce\n  resources:\n    requests:\n      storage: 20Gi\n")),(0,l.kt)("h3",{id:"40-zealot-deploymentyml"},"40-zealot-deployment.yml"),(0,l.kt)("p",null,"Create zealot deployment, edit ",(0,l.kt)("inlineCode",{parentName:"p"},"replicas")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"image")," tag."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="40-zealot-deployment.yml"',title:'"40-zealot-deployment.yml"'},"apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: zealot\n  namespace: zealot\nspec:\n  restartPolicy: Always\n  replicas: 1\n  selector:\n    matchLabels:\n      app: zealot\n  template:\n    metadata:\n      labels:\n        app: zealot\n    spec:\n      containers:\n        - name: zealot\n          image: ghcr.io/tryzealot/zealot:nightly\n          # imagePullPolicy: Always\n          ports:\n            - containerPort: 80\n          envFrom:\n            - configMapRef:\n              name: zealot-env\n            - secretKeyRef:\n              name: zealot-secrets\n          volumeMounts:\n            - mountPath: /app/public/uploads\n              name: uploads\n            - mountPath: /app/public/backup\n              name: backup\n      volumes:\n        - name: uploads\n          persistentVolumeClaim:\n            claimName: zealot-uploads\n        - name: backup\n          persistentVolumeClaim:\n            claimName: zealot-backup\n")),(0,l.kt)("h3",{id:"50-zealot-serviceyml"},"50-zealot-service.yml"),(0,l.kt)("p",null,"Creating zealot service."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="50-zealot-service.yml"',title:'"50-zealot-service.yml"'},"apiVersion: v1\nkind: Service\nmetadata:\n  name: zealot\n  namespace: zealot\n  labels:\n    app: zealot\nspec:\n  selector:\n    app: zealot\n  ports:\n  - port: 80\n    targetPort: http\n    name: http\n    protocol: TCP\n")),(0,l.kt)("h3",{id:"60-zealot-ingressyml"},"60-zealot-ingress.yml"),(0,l.kt)("p",null,"Setting up the ingress for the zealot service."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="50-zealot-ingress.yml"',title:'"50-zealot-ingress.yml"'},"apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: zealot\n  namespace: zealot\n  annotations:\n    #cert-manager.io/cluster-issuer: letsencrypt-prod\n    #kubernetes.io/ingress.class: nginx\nspec:\n  rules:\n  - host: zealot.icyleaf.dev\n    http:\n      paths:\n      - web:\n          service:\n            name: zealot\n            port:\n              number: 80\n        path: /\n        pathType: Prefix\n")))}c.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkzealot_new_docs=self.webpackChunkzealot_new_docs||[]).push([[8876],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var d=a.createContext({}),o=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=o(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=o(n),k=l,g=s["".concat(d,".").concat(k)]||s[k]||m[k]||r;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=s;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:l,i[1]=p;for(var o=2;o<r;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2873:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>p,toc:()=>o});var a=n(7462),l=(n(7294),n(3905));const r={sidebar_label:"\u5e94\u7528"},i="\u5e94\u7528\u63a5\u53e3",p={unversionedId:"developer-guide/api/apps",id:"developer-guide/api/apps",title:"\u5e94\u7528\u63a5\u53e3",description:"\u4e0a\u4f20\u5e94\u7528",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/developer-guide/api/apps.md",sourceDirName:"developer-guide/api",slug:"/developer-guide/api/apps",permalink:"/zh-Hans/docs/developer-guide/api/apps",draft:!1,editUrl:"https://github.com/tryzealot/docs/tree/main/docs/developer-guide/api/apps.md",tags:[],version:"current",frontMatter:{sidebar_label:"\u5e94\u7528"},sidebar:"developerGuide",previous:{title:"APIs",permalink:"/zh-Hans/docs/developer-guide/api"},next:{title:"\u8c03\u8bd5\u6587\u4ef6",permalink:"/zh-Hans/docs/developer-guide/api/debug_files"}},d={},o=[{value:"\u4e0a\u4f20\u5e94\u7528",id:"\u4e0a\u4f20\u5e94\u7528",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:3},{value:"\u8fd4\u56de\u6837\u4f8b",id:"\u8fd4\u56de\u6837\u4f8b",level:4},{value:"\u5e94\u7528\u5217\u8868",id:"\u5e94\u7528\u5217\u8868",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570-1",level:3},{value:"\u8fd4\u56de\u6837\u4f8b",id:"\u8fd4\u56de\u6837\u4f8b-1",level:3},{value:"\u5e94\u7528\u8be6\u60c5",id:"\u5e94\u7528\u8be6\u60c5",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570-2",level:3},{value:"\u8fd4\u56de\u6837\u4f8b",id:"\u8fd4\u56de\u6837\u4f8b-2",level:3},{value:"\u5e94\u7528\u7248\u672c\u5217\u8868",id:"\u5e94\u7528\u7248\u672c\u5217\u8868",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570-3",level:3},{value:"\u8fd4\u56de\u6837\u4f8b",id:"\u8fd4\u56de\u6837\u4f8b-3",level:3},{value:"\u5e94\u7528\u6700\u65b0\u7248\u672c",id:"\u5e94\u7528\u6700\u65b0\u7248\u672c",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570-4",level:3},{value:"\u8fd4\u56de\u6837\u4f8b",id:"\u8fd4\u56de\u6837\u4f8b-4",level:3},{value:"\u68c0\u67e5\u5f53\u524d\u7248\u672c\u662f\u5426\u5b58\u5728",id:"\u68c0\u67e5\u5f53\u524d\u7248\u672c\u662f\u5426\u5b58\u5728",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570-5",level:3},{value:"\u8fd4\u56de\u6837\u4f8b",id:"\u8fd4\u56de\u6837\u4f8b-5",level:3}],u={toc:o};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u5e94\u7528\u63a5\u53e3"},"\u5e94\u7528\u63a5\u53e3"),(0,l.kt)("h2",{id:"\u4e0a\u4f20\u5e94\u7528"},"\u4e0a\u4f20\u5e94\u7528"),(0,l.kt)("p",null,"\u4e0a\u4f20\u5e94\u7528\uff0c\u4ec5\u652f\u6301 iOS, Android \u548c macOS \u7c7b\u578b\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"POST /api/apps/upload\n")),(0,l.kt)("h3",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"\u9700\u8981",(0,l.kt)("a",{parentName:"p",href:"/docs/developer-guide/api#authentication"},"\u7528\u6237\u8ba4\u8bc1"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"file"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"File")),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5e94\u7528\u672c\u5730\u8def\u5f84\u7684\u5185\u5bb9")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"channel_key"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5e94\u7528\u5177\u4f53\u6e20\u9053\u7684 Key\uff0c\u6ca1\u6709\u4f20\u6b64\u53c2\u6570\u4f1a\u5b57\u6bb5\u521b\u5efa\u5bf9\u4e8e\u7684\u5e94\u7528\u3001\u7c7b\u578b\u548c\u6e20\u9053")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5e94\u7528\u540d\u79f0\uff0c\u4e3a\u7a7a\u65f6\u53d6 App \u7684\u4fe1\u606f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"release_type"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5e94\u7528\u7c7b\u578b\uff0c\u6bd4\u5982 debug, beta, adhoc, release, enterprise \u7b49")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"source"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0a\u4f20\u6e20\u9053\u540d\u79f0\uff0c\u9ed8\u8ba4\u662f api")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"changelog"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d8\u66f4\u65e5\u5fd7\uff0c\u63a5\u53d7\u7eaf\u6587\u672c\u6216 JSON \u683c\u5f0f\u5316\u7684\u6570\u636e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"branch"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0a\u4f20\u5e94\u7528\u65f6\u7684git branch\u540d\u79f0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"git_commit"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0a\u4f20\u5e94\u7528\u65f6\u7684 git commit hash")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ci_url"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"CI \u9879\u76ee\u6784\u5efa\u5730\u5740")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"custom_fields"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fd9\u662f\u4e00\u4e2a\u7528 JSON \u5b57\u7b26\u4e32\u5b9a\u4e49\u7684\u81ea\u5b9a\u4e49\u5b57\u6bb5\uff0c",(0,l.kt)("br",null),"\u53ef\u914d\u7f6e\u540d\u79f0\uff0c\u503c\u4ee5\u53ca fontawesome \u56fe\u6807\u7528\u4e8e\u5728\u9875\u9762\u8be6\u60c5\u5c55\u793a")))),(0,l.kt)("p",null,"For ",(0,l.kt)("inlineCode",{parentName:"p"},"changelog")," attribute which it accepts both ",(0,l.kt)("inlineCode",{parentName:"p"},"plain text")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"JSON")," formatted contents:"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"plain text"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"message 1\\nmessage 2\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"JSON"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'[\n  {\n    "message": "message 1",\n    "author": "admin",\n    "email": "admin@zealot.com",\n    "date": "2021-11-11 11:11:11"\n  },\n  {\n    "message": "message 1",\n    "author": "developer",\n    "email": "developer@zealot.com",\n    "date": "2021-11-11 11:11:11"\n  }\n]\n')),(0,l.kt)("p",null,"\u5bf9\u4e8e ",(0,l.kt)("inlineCode",{parentName:"p"},"custom_fields")," \u7684\u7528\u6cd5\uff0c\u5b83\u662f\u4e00\u4e2a\u4f7f\u7528 JSON \u683c\u5f0f\u7684\u4ee5\u952e\u503c\u5bf9\u4e3a\u5355\u4f4d\u7684\u6570\u7ec4\uff0c\u6bd4\u5982\u9700\u8981\u81ea\u5b9a\u4e49\u56fd\u5bb6 country=China \u5e76\u914d\u7f6e\u56fe\u6807\u4e3a fontawesome \u7684 ",(0,l.kt)("a",{parentName:"p",href:"https://fontawesome.com/v5.15/icons/flag?style=solid"},"flag")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-diff"},'curl -X POST \\\n  \'https://YOUR_ZEALOT_URL/api/apps/upload\' \\\n   --form \'token="token"\' \\\n   --form \'channel_key="channel_key"\' \\\n+  --form \'custom_fields="[{"name":"country","value":"China","icon":"fas fa-flag"}]"\' \\\n   --form \'file=@/path/to/your/app\'\n')),(0,l.kt)("h4",{id:"\u8fd4\u56de\u6837\u4f8b"},"\u8fd4\u56de\u6837\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 50,\n    "version": 7,\n    "app_name": "Test Android",\n    "bundle_id": "com.test.app",\n    "release_version": "1.0",\n    "build_version": "1",\n    "source": "SOURCE",\n    "branch": "master",\n    "git_commit": "e9de48513dbb6abfbxxxxxxxxxxxxxxxxxxxxxxxx",\n    "ci_url": "",\n    "size": 1565486,\n    "icon_url": "/uploads/apps/a1/r1/icons/app_icon.png",\n    "release_url": "https://YOUR_ZEALOT_URL/channels/1XmpC/releases/1",\n    "install_url": "https://YOUR_ZEALOT_URL/download/releases/1",\n    "qrcode_url": "https://YOUR_ZEALOT_URL/channels/1XmpC/releases/1/qrcode?size=thumb",\n    "changelog": [\n        {\n            "message": "Changelog message 1"\n        },\n    {\n            "message": "Changelog message 2"\n        }\n    ],\n  "text_changelog": "- Changelog message 1\\n- Changelog message 2",\n    "custom_fields": [],\n    "created_at": "2021-09-01T11:43:33.977+08:00",\n    "app": {\n        "id": 1,\n        "name": "App name"\n    },\n    "scheme": {\n        "id": 8,\n        "name": "Test"\n    },\n    "channel": {\n        "slug": "1XmpC",\n        "name": "Android",\n        "device_type": "android",\n        "bundle_id": "*",\n        "git_url": null,\n        "has_password": false\n    }\n}\n')),(0,l.kt)("h2",{id:"\u5e94\u7528\u5217\u8868"},"\u5e94\u7528\u5217\u8868"),(0,l.kt)("p",null,"\u83b7\u53d6\u521b\u5efa\u7684\u5e94\u7528\u5217\u8868\uff0c\u652f\u6301\u5206\u9875"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"GET /api/apps\n")),(0,l.kt)("h3",{id:"\u53c2\u6570-1"},"\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"page"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Integer")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9875\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"per_page"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Integer")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6bcf\u9875\u8fd4\u56de\u6700\u5927\u6570\u76ee")))),(0,l.kt)("h3",{id:"\u8fd4\u56de\u6837\u4f8b-1"},"\u8fd4\u56de\u6837\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "id": 1,\n        "name": "Zealot",\n        "schemes": [\n            {\n                "id": 1,\n                "name": "\u6d4b\u8bd5\u7248",\n                "channels": [\n                    {\n                        "slug": "X1IXN",\n                        "name": "Android",\n                        "device_type": "android",\n                        "bundle_id": "*",\n                        "git_url": null,\n                        "has_password": false\n                    },\n                    {\n                        "slug": "O1qHk",\n                        "name": "iOS",\n                        "device_type": "ios",\n                        "bundle_id": "*",\n                        "git_url": null,\n                        "has_password": false\n                    }\n                ]\n            },\n            {\n                "id": 2,\n                "name": "\u5185\u6d4b\u7248",\n                "channels": [\n                    {\n                        "slug": "l19Tl",\n                        "name": "Android",\n                        "device_type": "android",\n                        "bundle_id": "*",\n                        "git_url": null,\n                        "has_password": false\n                    },\n                    {\n                        "slug": "8selv",\n                        "name": "iOS",\n                        "device_type": "ios",\n                        "bundle_id": "*",\n                        "git_url": null,\n                        "has_password": false\n                    }\n                ]\n            }\n        ]\n    }\n]\n')),(0,l.kt)("h2",{id:"\u5e94\u7528\u8be6\u60c5"},"\u5e94\u7528\u8be6\u60c5"),(0,l.kt)("p",null,"\u67e5\u770b\u5e94\u7528\u7684\u660e\u7ec6\uff1a\u5e94\u7528\u7c7b\u578b\u3001\u6e20\u9053\u7b49\u4fe1\u606f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"GET /api/apps/:id\n")),(0,l.kt)("h3",{id:"\u53c2\u6570-2"},"\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5e94\u7528 ID")))),(0,l.kt)("h3",{id:"\u8fd4\u56de\u6837\u4f8b-2"},"\u8fd4\u56de\u6837\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": 1,\n    "name": "Zealot",\n    "schemes": [\n        {\n            "id": 5,\n            "name": "\u6d4b\u8bd5\u7248",\n            "channels": [\n                {\n                    "slug": "X1IXN",\n                    "name": "Android",\n                    "device_type": "android",\n                    "bundle_id": "*",\n                    "git_url": null,\n                    "has_password": false\n                },\n                {\n                    "slug": "O1qHk",\n                    "name": "iOS",\n                    "device_type": "ios",\n                    "bundle_id": "*",\n                    "git_url": null,\n                    "has_password": false\n                }\n            ]\n        }\n    ]\n}\n')),(0,l.kt)("h2",{id:"\u5e94\u7528\u7248\u672c\u5217\u8868"},"\u5e94\u7528\u7248\u672c\u5217\u8868"),(0,l.kt)("p",null,"\u83b7\u53d6\u5e94\u7528\u5df2\u4e0a\u4f20\u7684\u7248\u672c\u5217\u8868\uff0c\u6309\u7167\u4e0a\u4f20\u65f6\u95f4\u5012\u5e8f\u6392\u5217"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"GET /api/apps/versions\n")),(0,l.kt)("h3",{id:"\u53c2\u6570-3"},"\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"channel_key"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5e94\u7528\u5177\u4f53\u6e20\u9053\u7684 Key")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"page"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Integer")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9875\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"per_page"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Integer")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6bcf\u9875\u8fd4\u56de\u6700\u5927\u6570\u76ee")))),(0,l.kt)("h3",{id:"\u8fd4\u56de\u6837\u4f8b-3"},"\u8fd4\u56de\u6837\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "app_name": "Zealot iOS \u6d4b\u8bd5\u7248",\n    "bundle_id": "*",\n    "git_url": null,\n    "app": {\n        "id": 3,\n        "name": "Zealot"\n    },\n    "scheme": {\n        "id": 5,\n        "name": "\u6d4b\u8bd5\u7248"\n    },\n    "releases": [\n        {\n            "version": 2,\n            "app_name": "Zealot iOS \u6d4b\u8bd5\u7248",\n            "bundle_id": "im.ews.zealot",\n            "release_version": "1.0.0",\n            "build_version": "10292024",\n            "source": "Web",\n            "branch": "",\n            "git_commit": "",\n            "ci_url": "",\n            "size": 79712596,\n            "icon_url": "http://localhost:3000/uploads/apps/a3/r21/icons/8ab13dc08321f9f3412a9fa98689d9c3.png",\n            "install_url": "itms-services://?action=download-manifest&url=http://localhost:3000/api/apps/O1qHk/1/install",\n            "changelog": [],\n            "created_at": "2019-12-25T14:26:06.608+08:00"\n        },\n        {\n            "version": 1,\n            "app_name": "Zealot iOS \u6d4b\u8bd5\u7248",\n            "bundle_id": "im.ews.zealot",\n            "release_version": "1.0.0",\n            "build_version": "10291524",\n            "source": "Web",\n            "branch": "",\n            "git_commit": "",\n            "ci_url": "",\n            "size": 79712596,\n            "icon_url": "http://localhost:3000/uploads/apps/a3/r21/icons/8ab13dc08321f9f3412a9fa98689d9c3.png",\n            "install_url": "itms-services://?action=download-manifest&url=http://localhost:3000/api/apps/O1qHk/1/install",\n            "changelog": [],\n            "created_at": "2019-12-25T14:26:06.608+08:00"\n        },\n    ]\n}\n')),(0,l.kt)("h2",{id:"\u5e94\u7528\u6700\u65b0\u7248\u672c"},"\u5e94\u7528\u6700\u65b0\u7248\u672c"),(0,l.kt)("p",null,"\u83b7\u53d6\u6307\u5b9a\u5e94\u7528\u7684\u6700\u65b0\u7248\u672c\u4fe1\u606f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"GET /api/apps/latest\n")),(0,l.kt)("h3",{id:"\u53c2\u6570-4"},"\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"channel_key"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5e94\u7528\u5177\u4f53\u6e20\u9053\u7684 Key")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"release_version"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5e94\u7528\u7684\u53d1\u5e03\u7248\u672c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"build_version"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5e94\u7528\u7684\u6784\u5efa\u7248\u672c")))),(0,l.kt)("h3",{id:"\u8fd4\u56de\u6837\u4f8b-4"},"\u8fd4\u56de\u6837\u4f8b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "app_name": "Zealot iOS \u6d4b\u8bd5\u7248",\n    "bundle_id": "*",\n    "git_url": null,\n    "app": {\n        "id": 3,\n        "name": "Zealot"\n    },\n    "scheme": {\n        "id": 5,\n        "name": "\u6d4b\u8bd5\u7248"\n    },\n    "releases": {\n        "version": 1,\n        "app_name": "Zealot iOS \u6d4b\u8bd5\u7248",\n        "bundle_id": "im.ews.zealot",\n        "release_version": "1.0.0",\n        "build_version": "10291524",\n        "source": "Web",\n        "branch": "",\n        "git_commit": "",\n        "ci_url": "",\n        "size": 79712596,\n        "icon_url": "http://localhost:3000/uploads/apps/a3/r21/icons/8ab13dc08321f9f3412a9fa98689d9c3.png",\n        "install_url": "itms-services://?action=download-manifest&url=http://localhost:3000/api/apps/O1qHk/1/install",\n        "changelog": [],\n        "created_at": "2019-12-25T14:26:06.608+08:00"\n    }\n}\n')),(0,l.kt)("h2",{id:"\u68c0\u67e5\u5f53\u524d\u7248\u672c\u662f\u5426\u5b58\u5728"},"\u68c0\u67e5\u5f53\u524d\u7248\u672c\u662f\u5426\u5b58\u5728"),(0,l.kt)("p",null,"\u4f7f\u7528 bundle_id\u3001release_version\u3001build_verion \u6216 bundle_id\u3001git_commit \u7ec4\u5408\u68c0\u67e5\u5f53\u524d\u7248\u672c\u662f\u5426\u5b58\u5728"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"GET /api/apps/version_exist\n")),(0,l.kt)("h3",{id:"\u53c2\u6570-5"},"\u53c2\u6570"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u987b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"channel_key"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5e94\u7528\u5177\u4f53\u6e20\u9053\u7684 Key")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bundle_id"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5e94\u7528\u7684\u5305\u540d\uff0ciOS \u53d6 bundle_id\uff0cAndroid \u53d6 package_name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"release_version"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5e94\u7528\u7684\u53d1\u5e03\u7248\u672c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"build_version"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5e94\u7528\u7684\u6784\u5efa\u7248\u672c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"git_commit"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"\u4e0a\u4f20\u5e94\u7528\u65f6\u7684 git commit hash")))),(0,l.kt)("h3",{id:"\u8fd4\u56de\u6837\u4f8b-5"},"\u8fd4\u56de\u6837\u4f8b"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7248\u672c\u5b58\u5728\u8fd4\u56de 200 \u72b6\u6001\u7801\u5e76\u8fd4\u56de\u7248\u672c\u7684\u4fe1\u606f"),(0,l.kt)("li",{parentName:"ul"},"\u7248\u672c\u4e0d\u5b58\u5728\u8fd4\u56de 404 \u72b6\u6001\u7801\u548c\u9519\u8bef\u4fe1\u606f")),(0,l.kt)("p",null,"\u7248\u672c\u5b58\u5728\u7684\u8fd4\u56de\u4fe1\u606f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "version": 1,\n    "app_name": "\u597d\u597d\u4f4f iOS \u6d4b\u8bd5\u7248",\n    "bundle_id": "com.haohaozhu.hhz",\n    "release_version": "4.1.1",\n    "build_version": "10291524",\n    "source": "Web",\n    "branch": "",\n    "git_commit": "",\n    "ci_url": "",\n    "size": 79712596,\n    "icon_url": "http://localhost:3000/uploads/apps/a3/r21/icons/8ab13dc08321f9f3412a9fa98689d9c3.png",\n    "install_url": "itms-services://?action=download-manifest&url=http://localhost:3000/api/apps/O1qHk/1/install",\n    "changelog": [],\n    "created_at": "2019-12-25T14:26:06.608+08:00"\n}\n')),(0,l.kt)("p",null,"\u7248\u672c\u4e0d\u5b58\u5728\u7684\u8fd4\u56de\u4fe1\u606f\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "error": "\u5e94\u7528\u7248\u672c\u4e0d\u5b58\u5728"\n}\n')))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkzealot_new_docs=self.webpackChunkzealot_new_docs||[]).push([[9656],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>s});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},o=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,o=d(e,["components","mdxType","originalType","parentName"]),m=u(a),g=l,s=m["".concat(p,".").concat(g)]||m[g]||k[g]||r;return a?n.createElement(s,i(i({ref:t},o),{},{components:a})):n.createElement(s,i({ref:t},o))}));function s(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,i=new Array(r);i[0]=g;var d={};for(var p in t)hasOwnProperty.call(t,p)&&(d[p]=t[p]);d.originalType=e,d[m]="string"==typeof e?e:l,i[1]=d;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},7825:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>d,toc:()=>u});var n=a(7462),l=(a(7294),a(3905));const r={sidebar_label:"Debug Files"},i="Debug File APIs",d={unversionedId:"developer-guide/api/debug_files",id:"developer-guide/api/debug_files",title:"Debug File APIs",description:"Upload debug file",source:"@site/docs/developer-guide/api/debug_files.md",sourceDirName:"developer-guide/api",slug:"/developer-guide/api/debug_files",permalink:"/docs/next/developer-guide/api/debug_files",draft:!1,editUrl:"https://github.com/tryzealot/docs/tree/main/docs/developer-guide/api/debug_files.md",tags:[],version:"current",frontMatter:{sidebar_label:"Debug Files"},sidebar:"developerGuide",previous:{title:"Apps",permalink:"/docs/next/developer-guide/api/apps"}},p={},u=[{value:"Upload debug file",id:"upload-debug-file",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Return body",id:"return-body",level:3},{value:"Download debug file",id:"download-debug-file",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Return body",id:"return-body-1",level:3},{value:"List debug files",id:"list-debug-files",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"Return body",id:"return-body-2",level:3},{value:"Get a debug file",id:"get-a-debug-file",level:2},{value:"Parameters",id:"parameters-3",level:3},{value:"Return body",id:"return-body-3",level:3},{value:"Update a existed debug file",id:"update-a-existed-debug-file",level:2},{value:"Parameters",id:"parameters-4",level:3},{value:"Return body",id:"return-body-4",level:3},{value:"Delete a debug file",id:"delete-a-debug-file",level:2},{value:"Parameters",id:"parameters-5",level:3},{value:"Return body",id:"return-body-5",level:3}],o={toc:u},m="wrapper";function k(e){let{components:t,...a}=e;return(0,l.kt)(m,(0,n.Z)({},o,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"debug-file-apis"},"Debug File APIs"),(0,l.kt)("h2",{id:"upload-debug-file"},"Upload debug file"),(0,l.kt)("p",null,"This allows you to upload an single iOS, Android debug file."),(0,l.kt)("p",null,"Debug file accepts:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"iOS: a Zipped dSYM file"),(0,l.kt)("li",{parentName:"ul"},"Android: a Zipped file includes mapping.txt, R.txt or AndroidManifest.xml files.")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"POST /api/debug_files/upload\n")),(0,l.kt)("h3",{id:"parameters"},"Parameters"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("a",{parentName:"p",href:"/docs/developer-guide/api#authentication"},"Authentication")," required.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"channel_key"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"Channel key")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"file"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"File")),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"Zip \u538b\u7f29\u6587\u4ef6\u540e\u7684\u8c03\u8bd5\u6587\u4ef6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"release_version"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d1\u5e03\u7248\u672c\u53f7\uff0ciOS \u7c7b\u578b\u53ef\u5ffd\u7565\u8be5\u53c2\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"build_version"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5185\u90e8\u7248\u672c\u53f7\uff0ciOS \u7c7b\u578b\u53ef\u5ffd\u7565\u8be5\u53c2\u6570")))),(0,l.kt)("h3",{id:"return-body"},"Return body"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 1,\n  "app_name": "Demo App",\n  "device_type": "ios",\n  "release_version": "1.14.0",\n  "build_version": "980",\n  "file_url": "https://tryzealot.ews.im/download/debug_files/1",\n  "metadata": [\n    {\n      "id": 1,\n      "debug_file_id": 1,\n      "uuid": "34656552-21ae-3722-a7fb-3582bc9b1d98",\n      "type": "arm64",\n      "object": "AppName",\n      "data": {},\n      "size": 4137941,\n      "created_at": "2022-11-25T15:53:15.157+08:00",\n      "updated_at": "2022-11-25T15:53:15.157+08:00"\n    }\n  ]\n}\n')),(0,l.kt)("h2",{id:"download-debug-file"},"Download debug file"),(0,l.kt)("p",null,"This allows you to download an single iOS, Android debug file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"POST /api/debug_files/download\n")),(0,l.kt)("h3",{id:"parameters-1"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"channel_key"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"Channel key")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"release_version"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d1\u5e03\u7248\u672c\u53f7\uff0ciOS \u7c7b\u578b\u53ef\u5ffd\u7565\u8be5\u53c2\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"build_version"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5185\u90e8\u7248\u672c\u53f7\uff0ciOS \u7c7b\u578b\u53ef\u5ffd\u7565\u8be5\u53c2\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"order"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"\u83b7\u53d6\u6700\u65b0\u7684\u65b9\u5f0f\uff0c\u53ef\u9009\u503c\u6709\uff1a",(0,l.kt)("br",null),(0,l.kt)("inlineCode",{parentName:"td"},"version")," = \u6700\u65b0\u7248\u672c \u548c ",(0,l.kt)("inlineCode",{parentName:"td"},"upload_date")," = \u6700\u65b0\u4e0a\u4f20\u65f6\u95f4",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"\u4ec5\u9650\u63a5\u53d7 release_version \u503c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"strong"},"latest")," \u6709\u6548"))))),(0,l.kt)("h3",{id:"return-body-1"},"Return body"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7248\u672c\u5b58\u5728\u8fd4\u56de 200 \u72b6\u6001\u7801\u5e76\u8fd4\u56de 302 \u91cd\u5b9a\u5411\u5230\u4e0b\u8f7d\u5730\u5740"),(0,l.kt)("li",{parentName:"ul"},"\u7248\u672c\u4e0d\u5b58\u5728\u8fd4\u56de 404 \u72b6\u6001\u7801\u548c\u9519\u8bef\u4fe1\u606f")),(0,l.kt)("h2",{id:"list-debug-files"},"List debug files"),(0,l.kt)("p",null,"Get a list of debug files."),(0,l.kt)("p",null,"This function takes pagination parameters page and per_page to restrict the list of debug files."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"GET /api/debug_files\n")),(0,l.kt)("h3",{id:"parameters-2"},"Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"channel_key"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"Channel key")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"page"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Integer")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Page number (default: ",(0,l.kt)("inlineCode",{parentName:"td"},"1"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"per_page"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Integer")),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"Number of items to list per page (default: ",(0,l.kt)("inlineCode",{parentName:"td"},"25"),", max: ",(0,l.kt)("inlineCode",{parentName:"td"},"100"),").")))),(0,l.kt)("h3",{id:"return-body-2"},"Return body"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "id": 1,\n    "app_name": "Demo App",\n    "device_type": "ios",\n    "release_version": "1.14.0",\n    "build_version": "980",\n    "file_url": "https://tryzealot.ews.im/download/debug_files/1",\n    "metadata": [\n      {\n        "id": 1,\n        "debug_file_id": 1,\n        "uuid": "34656552-21ae-3722-a7fb-3582bc9b1d98",\n        "type": "arm64",\n        "object": "AppName",\n        "data": {},\n        "size": 4137941,\n        "created_at": "2022-11-25T15:53:15.157+08:00",\n        "updated_at": "2022-11-25T15:53:15.157+08:00"\n      }\n    ]\n  }\n]\n')),(0,l.kt)("h2",{id:"get-a-debug-file"},"Get a debug file"),(0,l.kt)("p",null,"Allows you to receive information about debug file like name, file size, UUID (iOS only), platform (iOS only) or file list (Android only)."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"GET /api/debug_files/:id\n")),(0,l.kt)("h3",{id:"parameters-3"},"Parameters"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("a",{parentName:"p",href:"/docs/developer-guide/api#authentication"},"Authentication")," required.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"channel_key"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"Channel key")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"ID")))),(0,l.kt)("h3",{id:"return-body-3"},"Return body"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 1,\n  "app_name": "Demo App",\n  "device_type": "ios",\n  "release_version": "1.14.0",\n  "build_version": "980",\n  "file_url": "https://tryzealot.ews.im/download/debug_files/1",\n  "metadata": [\n    {\n      "id": 1,\n      "debug_file_id": 1,\n      "uuid": "34656552-21ae-3722-a7fb-3582bc9b1d98",\n      "type": "arm64",\n      "object": "AppName",\n      "data": {},\n      "size": 4137941,\n      "created_at": "2022-11-25T15:53:15.157+08:00",\n      "updated_at": "2022-11-25T15:53:15.157+08:00"\n    }\n  ]\n}\n')),(0,l.kt)("h2",{id:"update-a-existed-debug-file"},"Update a existed debug file"),(0,l.kt)("p",null,"This allows you to update a debug file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"PUT /api/debug_files/:id\n")),(0,l.kt)("h3",{id:"parameters-4"},"Parameters"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("a",{parentName:"p",href:"/docs/developer-guide/api#authentication"},"Authentication")," required.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"channel_key"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"Channel key")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"file"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"File")),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"a Zipped debug file")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"release_version"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d1\u5e03\u7248\u672c\u53f7\uff0ciOS \u7c7b\u578b\u53ef\u5ffd\u7565\u8be5\u53c2\u6570")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"build_version"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5185\u90e8\u7248\u672c\u53f7\uff0ciOS \u7c7b\u578b\u53ef\u5ffd\u7565\u8be5\u53c2\u6570")))),(0,l.kt)("h3",{id:"return-body-4"},"Return body"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 1,\n  "app_name": "Demo App",\n  "device_type": "ios",\n  "release_version": "1.14.0",\n  "build_version": "980",\n  "file_url": "https://tryzealot.ews.im/download/debug_files/1",\n  "metadata": [\n    {\n      "id": 1,\n      "debug_file_id": 1,\n      "uuid": "34656552-21ae-3722-a7fb-3582bc9b1d98",\n      "type": "arm64",\n      "object": "AppName",\n      "data": {},\n      "size": 4137941,\n      "created_at": "2022-11-25T15:53:15.157+08:00",\n      "updated_at": "2022-11-25T15:53:15.157+08:00"\n    }\n  ]\n}\n')),(0,l.kt)("h2",{id:"delete-a-debug-file"},"Delete a debug file"),(0,l.kt)("p",null,"This allows you to delete a debug file."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"DELETE /api/debug_files/:id\n")),(0,l.kt)("h3",{id:"parameters-5"},"Parameters"),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},(0,l.kt)("a",{parentName:"p",href:"/docs/developer-guide/api#authentication"},"Authentication")," required.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attribute"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"channel_key"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"Channel key")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"String")),(0,l.kt)("td",{parentName:"tr",align:null},"true"),(0,l.kt)("td",{parentName:"tr",align:null},"ID")))),(0,l.kt)("h3",{id:"return-body-5"},"Return body"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "mesage": "OK"\n}\n')))}k.isMDXComponent=!0}}]);
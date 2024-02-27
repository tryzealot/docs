"use strict";(self.webpackChunkzealot_new_docs=self.webpackChunkzealot_new_docs||[]).push([[1627],{5336:(e,d,i)=>{i.r(d),i.d(d,{assets:()=>c,contentTitle:()=>s,default:()=>o,frontMatter:()=>l,metadata:()=>t,toc:()=>a});var n=i(5893),r=i(1151);const l={sidebar_label:"Debug Files"},s="Debug File APIs",t={id:"developer-guide/api/debug_files",title:"Debug File APIs",description:"Upload debug file",source:"@site/versioned_docs/version-4.x/developer-guide/api/debug_files.md",sourceDirName:"developer-guide/api",slug:"/developer-guide/api/debug_files",permalink:"/docs/4.x/developer-guide/api/debug_files",draft:!1,unlisted:!1,editUrl:"https://github.com/tryzealot/docs/tree/main/versioned_docs/version-4.x/developer-guide/api/debug_files.md",tags:[],version:"4.x",frontMatter:{sidebar_label:"Debug Files"},sidebar:"developerGuide",previous:{title:"Apps",permalink:"/docs/4.x/developer-guide/api/apps"}},c={},a=[{value:"Upload debug file",id:"upload-debug-file",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Return body",id:"return-body",level:3},{value:"Download debug file",id:"download-debug-file",level:2},{value:"Parameters",id:"parameters-1",level:3},{value:"Return body",id:"return-body-1",level:3},{value:"List debug files",id:"list-debug-files",level:2},{value:"Parameters",id:"parameters-2",level:3},{value:"Return body",id:"return-body-2",level:3},{value:"Get a debug file",id:"get-a-debug-file",level:2},{value:"Parameters",id:"parameters-3",level:3},{value:"Return body",id:"return-body-3",level:3},{value:"Update a existed debug file",id:"update-a-existed-debug-file",level:2},{value:"Parameters",id:"parameters-4",level:3},{value:"Return body",id:"return-body-4",level:3},{value:"Delete a debug file",id:"delete-a-debug-file",level:2},{value:"Parameters",id:"parameters-5",level:3},{value:"Return body",id:"return-body-5",level:3}];function h(e){const d={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(d.h1,{id:"debug-file-apis",children:"Debug File APIs"}),"\n",(0,n.jsx)(d.h2,{id:"upload-debug-file",children:"Upload debug file"}),"\n",(0,n.jsx)(d.p,{children:"This allows you to upload an single iOS, Android debug file."}),"\n",(0,n.jsx)(d.p,{children:"Debug file accepts:"}),"\n",(0,n.jsxs)(d.ul,{children:["\n",(0,n.jsx)(d.li,{children:"iOS: a Zipped dSYM file"}),"\n",(0,n.jsx)(d.li,{children:"Android: a Zipped file includes mapping.txt, R.txt or AndroidManifest.xml files."}),"\n"]}),"\n",(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{children:"POST /api/debug_files/upload\n"})}),"\n",(0,n.jsx)(d.h3,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsx)(d.admonition,{type:"info",children:(0,n.jsxs)(d.p,{children:[(0,n.jsx)(d.a,{href:"/docs/developer-guide/api#authentication",children:"Authentication"})," required."]})}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Attribute"}),(0,n.jsx)(d.th,{children:"Type"}),(0,n.jsx)(d.th,{children:"Required"}),(0,n.jsx)(d.th,{children:"Description"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"channel_key"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"String"})}),(0,n.jsx)(d.td,{children:"true"}),(0,n.jsx)(d.td,{children:"Channel key"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"file"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"File"})}),(0,n.jsx)(d.td,{children:"true"}),(0,n.jsx)(d.td,{children:"Arichved file by zip"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"release_version"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"String"})}),(0,n.jsx)(d.td,{children:"true"}),(0,n.jsx)(d.td,{children:"Release version, ignore this param if iOS app"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"build_version"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"String"})}),(0,n.jsx)(d.td,{children:"true"}),(0,n.jsx)(d.td,{children:"Build version, ignore this param if iOS app"})]})]})]}),"\n",(0,n.jsx)(d.h3,{id:"return-body",children:"Return body"}),"\n",(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{className:"language-json",children:'{\n  "id": 1,\n  "app_name": "Demo App",\n  "device_type": "ios",\n  "release_version": "1.14.0",\n  "build_version": "980",\n  "file_url": "https://tryzealot.ews.im/download/debug_files/1",\n  "metadata": [\n    {\n      "id": 1,\n      "debug_file_id": 1,\n      "uuid": "34656552-21ae-3722-a7fb-3582bc9b1d98",\n      "type": "arm64",\n      "object": "AppName",\n      "data": {},\n      "size": 4137941,\n      "created_at": "2022-11-25T15:53:15.157+08:00",\n      "updated_at": "2022-11-25T15:53:15.157+08:00"\n    }\n  ]\n}\n'})}),"\n",(0,n.jsx)(d.h2,{id:"download-debug-file",children:"Download debug file"}),"\n",(0,n.jsx)(d.p,{children:"This allows you to download an single iOS, Android debug file."}),"\n",(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{children:"GET /api/debug_files/download\n"})}),"\n",(0,n.jsx)(d.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Attribute"}),(0,n.jsx)(d.th,{children:"Type"}),(0,n.jsx)(d.th,{children:"Required"}),(0,n.jsx)(d.th,{children:"Description"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"channel_key"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"String"})}),(0,n.jsx)(d.td,{children:"true"}),(0,n.jsx)(d.td,{children:"Channel key"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"release_version"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"String"})}),(0,n.jsx)(d.td,{children:"true"}),(0,n.jsx)(d.td,{children:"Release version, ignore this param if iOS app"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"build_version"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"String"})}),(0,n.jsx)(d.td,{children:"false"}),(0,n.jsx)(d.td,{children:"Build version, ignore this param if iOS app"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"order"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"String"})}),(0,n.jsx)(d.td,{children:"false"}),(0,n.jsxs)(d.td,{children:["Order by ",(0,n.jsx)("br",{}),(0,n.jsx)(d.code,{children:"version"})," = latest version, ",(0,n.jsx)(d.code,{children:"upload_date"})," = last uploaded date",(0,n.jsx)("br",{}),(0,n.jsxs)(d.strong,{children:["Vaild in release_version is ",(0,n.jsx)(d.code,{children:"latest"})]})]})]})]})]}),"\n",(0,n.jsx)(d.h3,{id:"return-body-1",children:"Return body"}),"\n",(0,n.jsxs)(d.ul,{children:["\n",(0,n.jsx)(d.li,{children:"Retun 200 status code if the version exists and redirect to the download address with a 302 status code."}),"\n",(0,n.jsx)(d.li,{children:"return 404 status code if the version does not exist."}),"\n"]}),"\n",(0,n.jsx)(d.h2,{id:"list-debug-files",children:"List debug files"}),"\n",(0,n.jsx)(d.p,{children:"Get a list of debug files."}),"\n",(0,n.jsx)(d.p,{children:"This function takes pagination parameters page and per_page to restrict the list of debug files."}),"\n",(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{children:"GET /api/debug_files\n"})}),"\n",(0,n.jsx)(d.h3,{id:"parameters-2",children:"Parameters"}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Attribute"}),(0,n.jsx)(d.th,{children:"Type"}),(0,n.jsx)(d.th,{children:"Required"}),(0,n.jsx)(d.th,{children:"Description"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"channel_key"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"String"})}),(0,n.jsx)(d.td,{children:"true"}),(0,n.jsx)(d.td,{children:"Channel key"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"page"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"Integer"})}),(0,n.jsx)(d.td,{children:"false"}),(0,n.jsxs)(d.td,{children:["Page number (default: ",(0,n.jsx)(d.code,{children:"1"}),")"]})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"per_page"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"Integer"})}),(0,n.jsx)(d.td,{children:"false"}),(0,n.jsxs)(d.td,{children:["Number of items to list per page (default: ",(0,n.jsx)(d.code,{children:"25"}),", max: ",(0,n.jsx)(d.code,{children:"100"}),")."]})]})]})]}),"\n",(0,n.jsx)(d.h3,{id:"return-body-2",children:"Return body"}),"\n",(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{className:"language-json",children:'[\n  {\n    "id": 1,\n    "app_name": "Demo App",\n    "device_type": "ios",\n    "release_version": "1.14.0",\n    "build_version": "980",\n    "file_url": "https://tryzealot.ews.im/download/debug_files/1",\n    "metadata": [\n      {\n        "id": 1,\n        "debug_file_id": 1,\n        "uuid": "34656552-21ae-3722-a7fb-3582bc9b1d98",\n        "type": "arm64",\n        "object": "AppName",\n        "data": {},\n        "size": 4137941,\n        "created_at": "2022-11-25T15:53:15.157+08:00",\n        "updated_at": "2022-11-25T15:53:15.157+08:00"\n      }\n    ]\n  }\n]\n'})}),"\n",(0,n.jsx)(d.h2,{id:"get-a-debug-file",children:"Get a debug file"}),"\n",(0,n.jsx)(d.p,{children:"Allows you to receive information about debug file like name, file size, UUID (iOS only), platform (iOS only) or file list (Android only)."}),"\n",(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{children:"GET /api/debug_files/:id\n"})}),"\n",(0,n.jsx)(d.h3,{id:"parameters-3",children:"Parameters"}),"\n",(0,n.jsx)(d.admonition,{type:"info",children:(0,n.jsxs)(d.p,{children:[(0,n.jsx)(d.a,{href:"/docs/developer-guide/api#authentication",children:"Authentication"})," required."]})}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Attribute"}),(0,n.jsx)(d.th,{children:"Type"}),(0,n.jsx)(d.th,{children:"Required"}),(0,n.jsx)(d.th,{children:"Description"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"channel_key"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"String"})}),(0,n.jsx)(d.td,{children:"true"}),(0,n.jsx)(d.td,{children:"Channel key"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"id"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"String"})}),(0,n.jsx)(d.td,{children:"true"}),(0,n.jsx)(d.td,{children:"ID"})]})]})]}),"\n",(0,n.jsx)(d.h3,{id:"return-body-3",children:"Return body"}),"\n",(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{className:"language-json",children:'{\n  "id": 1,\n  "app_name": "Demo App",\n  "device_type": "ios",\n  "release_version": "1.14.0",\n  "build_version": "980",\n  "file_url": "https://tryzealot.ews.im/download/debug_files/1",\n  "metadata": [\n    {\n      "id": 1,\n      "debug_file_id": 1,\n      "uuid": "34656552-21ae-3722-a7fb-3582bc9b1d98",\n      "type": "arm64",\n      "object": "AppName",\n      "data": {},\n      "size": 4137941,\n      "created_at": "2022-11-25T15:53:15.157+08:00",\n      "updated_at": "2022-11-25T15:53:15.157+08:00"\n    }\n  ]\n}\n'})}),"\n",(0,n.jsx)(d.h2,{id:"update-a-existed-debug-file",children:"Update a existed debug file"}),"\n",(0,n.jsx)(d.p,{children:"This allows you to update a debug file."}),"\n",(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{children:"PUT /api/debug_files/:id\n"})}),"\n",(0,n.jsx)(d.h3,{id:"parameters-4",children:"Parameters"}),"\n",(0,n.jsx)(d.admonition,{type:"info",children:(0,n.jsxs)(d.p,{children:[(0,n.jsx)(d.a,{href:"/docs/developer-guide/api#authentication",children:"Authentication"})," required."]})}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Attribute"}),(0,n.jsx)(d.th,{children:"Type"}),(0,n.jsx)(d.th,{children:"Required"}),(0,n.jsx)(d.th,{children:"Description"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"channel_key"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"String"})}),(0,n.jsx)(d.td,{children:"true"}),(0,n.jsx)(d.td,{children:"Channel key"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"id"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"String"})}),(0,n.jsx)(d.td,{children:"true"}),(0,n.jsx)(d.td,{children:"ID"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"file"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"File"})}),(0,n.jsx)(d.td,{children:"true"}),(0,n.jsx)(d.td,{children:"a Zipped debug file"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"release_version"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"String"})}),(0,n.jsx)(d.td,{children:"true"}),(0,n.jsx)(d.td,{children:"Release version, ignore this param if iOS app"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"build_version"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"String"})}),(0,n.jsx)(d.td,{children:"true"}),(0,n.jsx)(d.td,{children:"Build version, ignore this param if iOS app"})]})]})]}),"\n",(0,n.jsx)(d.h3,{id:"return-body-4",children:"Return body"}),"\n",(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{className:"language-json",children:'{\n  "id": 1,\n  "app_name": "Demo App",\n  "device_type": "ios",\n  "release_version": "1.14.0",\n  "build_version": "980",\n  "file_url": "https://tryzealot.ews.im/download/debug_files/1",\n  "metadata": [\n    {\n      "id": 1,\n      "debug_file_id": 1,\n      "uuid": "34656552-21ae-3722-a7fb-3582bc9b1d98",\n      "type": "arm64",\n      "object": "AppName",\n      "data": {},\n      "size": 4137941,\n      "created_at": "2022-11-25T15:53:15.157+08:00",\n      "updated_at": "2022-11-25T15:53:15.157+08:00"\n    }\n  ]\n}\n'})}),"\n",(0,n.jsx)(d.h2,{id:"delete-a-debug-file",children:"Delete a debug file"}),"\n",(0,n.jsx)(d.p,{children:"This allows you to delete a debug file."}),"\n",(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{children:"DELETE /api/debug_files/:id\n"})}),"\n",(0,n.jsx)(d.h3,{id:"parameters-5",children:"Parameters"}),"\n",(0,n.jsx)(d.admonition,{type:"info",children:(0,n.jsxs)(d.p,{children:[(0,n.jsx)(d.a,{href:"/docs/developer-guide/api#authentication",children:"Authentication"})," required."]})}),"\n",(0,n.jsxs)(d.table,{children:[(0,n.jsx)(d.thead,{children:(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.th,{children:"Attribute"}),(0,n.jsx)(d.th,{children:"Type"}),(0,n.jsx)(d.th,{children:"Required"}),(0,n.jsx)(d.th,{children:"Description"})]})}),(0,n.jsxs)(d.tbody,{children:[(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"channel_key"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"String"})}),(0,n.jsx)(d.td,{children:"true"}),(0,n.jsx)(d.td,{children:"Channel key"})]}),(0,n.jsxs)(d.tr,{children:[(0,n.jsx)(d.td,{children:"id"}),(0,n.jsx)(d.td,{children:(0,n.jsx)(d.code,{children:"String"})}),(0,n.jsx)(d.td,{children:"true"}),(0,n.jsx)(d.td,{children:"ID"})]})]})]}),"\n",(0,n.jsx)(d.h3,{id:"return-body-5",children:"Return body"}),"\n",(0,n.jsx)(d.pre,{children:(0,n.jsx)(d.code,{className:"language-json",children:'{\n  "mesage": "OK"\n}\n'})})]})}function o(e={}){const{wrapper:d}={...(0,r.a)(),...e.components};return d?(0,n.jsx)(d,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},1151:(e,d,i)=>{i.d(d,{Z:()=>t,a:()=>s});var n=i(7294);const r={},l=n.createContext(r);function s(e){const d=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(d):{...d,...e}}),[d,e])}function t(e){let d;return d=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(l.Provider,{value:d},e.children)}}}]);
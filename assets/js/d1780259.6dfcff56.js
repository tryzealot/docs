"use strict";(self.webpackChunkzealot_new_docs=self.webpackChunkzealot_new_docs||[]).push([[6490],{3566:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var a=i(5893),t=i(1151);const l={},o="Best Practices",s={id:"user-guide/best_practices",title:"Best Practices",description:"Workflow",source:"@site/versioned_docs/version-5.1.0/user-guide/best_practices.md",sourceDirName:"user-guide",slug:"/user-guide/best_practices",permalink:"/docs/user-guide/best_practices",draft:!1,unlisted:!1,editUrl:"https://github.com/tryzealot/docs/tree/main/versioned_docs/version-5.1.0/user-guide/best_practices.md",tags:[],version:"5.1.0",frontMatter:{},sidebar:"userGuide",previous:{title:"Database Analytics",permalink:"/docs/user-guide/administrator/monitoring/database-analytics"},next:{title:"Change Log",permalink:"/docs/user-guide/changelog"}},r={},d=[{value:"Workflow",id:"workflow",level:2},{value:"iOS and Android Apps",id:"ios-and-android-apps",level:3},{value:"Zealot SDKs",id:"zealot-sdks",level:4},{value:"Install fastlane",id:"install-fastlane",level:4},{value:"CI/CD Service",id:"cicd-service",level:3},{value:"Zealot Service",id:"zealot-service",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"best-practices",children:"Best Practices"}),"\n",(0,a.jsx)(n.h2,{id:"workflow",children:"Workflow"}),"\n",(0,a.jsx)(n.h3,{id:"ios-and-android-apps",children:"iOS and Android Apps"}),"\n",(0,a.jsx)(n.h4,{id:"zealot-sdks",children:"Zealot SDKs"}),"\n",(0,a.jsx)(n.p,{children:"Integration with the Zealot SDK allows non-client development to automatically trigger new version checks, view change logs, and install functionality."}),"\n",(0,a.jsx)(n.h4,{id:"install-fastlane",children:"Install fastlane"}),"\n",(0,a.jsx)(n.p,{children:"In addition to the fastlane-plugin-zealot plugin, which is required to upload applications and debug files,\nit is highly recommended to install the following plug-ins in addition to fastlane."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://github.com/icyleaf/fastlane-plugin-ci_changelog",children:"ci_changelog"})," | Support for multiple CI systems to automatically generate change history"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://github.com/icyleaf/fastlane-plugin-update_jenkins_build",children:"update_jenkins_build"})," | Automatically Update Jenkins Build Description"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://github.com/icyleaf/fastlane-plugin-humanable_build_number",children:"humanable_build_number"})," | Generate a build version number that is recognizable to development"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://github.com/icyleaf/fastlane-plugin-app_info",children:"app_info"})," | View metadata about the application after successful packaging"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://github.com/icyleaf/fastlane-plugin-ram_disk",children:"ram_disk"})," | Create in-memory virtual disks, mainly used to improve App build speed (consider if memory is large)"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://github.com/icyleaf/fastlane-plugin-debug_file",children:"debug_file"})," | Automated search for iOS/macOS dSYM or Android Proguard (obfuscation) and packaging of Zip files"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ruby",children:"# Build and upload ipa to zealot service\nlane :upload_app do\n  # Building the package file, using gym in iOS, gradle in Android\n  gym\n\n  # Uploading to Zealot\n  zealot(\n    endpoint: '...',\n    token: '...',\n    channel_key: '...'\n  )\n\n  # Uploading dSYM file to Zealot\n  zealot_debug_file(\n    scheme: 'AppName'\n  )\nend\n\n# Build android package file and generate progguard then upload to zealot service\nlane :upload_debug_file do\n  # Building the package file, using gym in iOS, gradle in Android\n  gradle\n\n  #  Automated search for iOS/macOS dSYM or Android Proguard (obfuscation) and packaging of Zip files\n  debug_file\n\n  # Uploading to Zealot\n  zealot(\n    endpoint: '...',\n    token: '...',\n    channel_key: '...'\n  )\n\n  # Uploading Proguard file to Zealot\n  zealot_debug_file(\n    build_type: 'release',\n    flavor: 'googleplay'\n  )\nend\n"})}),"\n",(0,a.jsx)(n.h3,{id:"cicd-service",children:"CI/CD Service"}),"\n",(0,a.jsx)(n.p,{children:"For example, Jenkins, configure the project, set up the git hook to trigger packaging, nothing to say"}),"\n",(0,a.jsx)(n.h3,{id:"zealot-service",children:"Zealot Service"}),"\n",(0,a.jsx)(n.p,{children:"In addition to managing each uploaded application and debug file, each time an uploaded application is received,\na configured web hook is triggered to send a notification to the third-party service that a new version has been received,\nand for mobile clients that integrate with the Zealot SDK, they will receive a new version installation alert each time they open the app for the first time."})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>s,a:()=>o});var a=i(7294);const t={},l=a.createContext(t);function o(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);
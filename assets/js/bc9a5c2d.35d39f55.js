"use strict";(self.webpackChunkzealot_new_docs=self.webpackChunkzealot_new_docs||[]).push([[8958],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,_=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(_,l(l({ref:t},p),{},{components:n})):r.createElement(_,l({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7988:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_label:"zealot_version_check"},l="Fastlane action: zealot_version_check",i={unversionedId:"developer-guide/fastlane/zealot_version_check",id:"developer-guide/fastlane/zealot_version_check",title:"Fastlane action: zealot_version_check",description:"Check given build exists or not on Zealot",source:"@site/docs/developer-guide/fastlane/zealot_version_check.md",sourceDirName:"developer-guide/fastlane",slug:"/developer-guide/fastlane/zealot_version_check",permalink:"/docs/developer-guide/fastlane/zealot_version_check",draft:!1,editUrl:"https://github.com/tryzealot/docs/tree/main/docs/developer-guide/fastlane/zealot_version_check.md",tags:[],version:"current",frontMatter:{sidebar_label:"zealot_version_check"},sidebar:"developerGuide",previous:{title:"zealot",permalink:"/docs/developer-guide/fastlane/zealot"},next:{title:"zealot_sync_devices",permalink:"/docs/developer-guide/fastlane/zealot_sync_devices"}},c={},s=[{value:"Parameters",id:"parameters",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"fastlane-action-zealot_version_check"},"Fastlane action: zealot_version_check"),(0,o.kt)("p",null,"Check given build exists or not on Zealot"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"zealot_version_check(\n  endpoint: 'https://zealot.com',\n  token: '...',\n  bundle_id: 'com.example.app.name',\n  release_version: '1.0.0',\n  build_version: '1'\n)\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+-----------------+---------------------------------+------------------------+---------+\n|                             zealot_version_check Options                             |\n+-----------------+---------------------------------+------------------------+---------+\n| Key             | Description                     | Env Var                | Default |\n+-----------------+---------------------------------+------------------------+---------+\n| endpoint        | The endpoint of zealot          | ZEALOT_ENDPOINT        |         |\n| token           | The token of user               | ZEALOT_TOKEN           |         |\n| channel_key     | The key of app's channel        | ZEALOT_CHANNEL_KEY     |         |\n| bundle_id       | The bundle id(package name) of  | ZEALOT_BUNDLE_ID       |         |\n|                 | app                             |                        |         |\n| release_version | The release version of app      | ZEALOT_RELEASE_VERSION |         |\n| build_version   | The build version of app        | ZEALOT_BUILD_VERSION   |         |\n| git_commit      | The latest git commit of app    | ZEALOT_GIT_COMMIT      |         |\n| verify_ssl      | Should verify SSL of zealot     | ZEALOT_VERIFY_SSL      | true    |\n|                 | service                         |                        |         |\n| fail_on_error   | Should an error http request    | ZEALOT_FAIL_ON_ERROR   | false   |\n|                 | cause a failure? (true/false)   |                        |         |\n+-----------------+---------------------------------+------------------------+---------+\n")))}u.isMDXComponent=!0}}]);
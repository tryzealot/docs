"use strict";(self.webpackChunkzealot_new_docs=self.webpackChunkzealot_new_docs||[]).push([[9396],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(f,l(l({ref:t},p),{},{components:n})):o.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2428:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_label:"iOS"},l="Zealot iOS SDK",i={unversionedId:"developer-guide/sdk/ios",id:"developer-guide/sdk/ios",title:"Zealot iOS SDK",description:"The iOS component provides a service to check for new versions and installations for Zealot,",source:"@site/docs/developer-guide/sdk/ios.md",sourceDirName:"developer-guide/sdk",slug:"/developer-guide/sdk/ios",permalink:"/docs/developer-guide/sdk/ios",draft:!1,editUrl:"https://github.com/tryzealot/docs/tree/main/docs/developer-guide/sdk/ios.md",tags:[],version:"current",frontMatter:{sidebar_label:"iOS"},sidebar:"developerGuide",previous:{title:"SDKs",permalink:"/docs/category/sdks"},next:{title:"Android",permalink:"/docs/developer-guide/sdk/android"}},c={},s=[{value:"Install",id:"install",level:2},{value:"Cocoapods",id:"cocoapods",level:3},{value:"Usages",id:"usages",level:2},{value:"Import header",id:"import-header",level:3},{value:"Configure",id:"configure",level:3}],p={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"zealot-ios-sdk"},"Zealot iOS SDK"),(0,r.kt)("p",null,"The iOS component provides a service to check for new versions and installations for Zealot,\nsupporting Swift and Objective-C."),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)("h3",{id:"cocoapods"},"Cocoapods"),(0,r.kt)("p",null,"Adding below code into ",(0,r.kt)("inlineCode",{parentName:"p"},"Podfile"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ruby"},"pod 'Zealot', :git => 'https://github.com/tryzealot/zealot-ios.git', :branch => 'master'\n")),(0,r.kt)("p",null,"Install it\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pod install\n")),(0,r.kt)("h2",{id:"usages"},"Usages"),(0,r.kt)("h3",{id:"import-header"},"Import header"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Add the code in your ",(0,r.kt)("inlineCode",{parentName:"li"},"AppDelegate"),"\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},"// Swift\nimport Zealot\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},"// Objective-C\n#import <Zealot/Zealot-Swift.h>\n")),(0,r.kt)("h3",{id:"configure"},"Configure"),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Add the following code in  ",(0,r.kt)("inlineCode",{parentName:"li"},"application:didFinishLaunchingWithOptions:")," method block\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'// Swift\n// Single channel\nlet zealot = Zealot(endpoint: "http://zealot.com", channelKey: "...")\nzealot.checkVersion()\n\n// Multi-channel, such as beta, adhoc versions\nlet zealot = Zealot(endpoint: "http://zealot.com",\n                 channelKeys: [\n                   "beta": "xxxxxxx",\n                   "test": "yyyyyyy"],\n          default_enviroment: "beta")\n\n// Active it\nzealot.checkVersion()\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objectivec"},'// Objective-C\n// Single channel\nZealot *zealot = [[Zealot alloc] initWithEndpoint:@"http://zealot.com"\n                                       channelKey:@"..."];\n\n// Multi-channel, such as beta, adhoc versions\nZealot *zealot = [[Zealot alloc] initWithEndpoint:@"http://zealot.com"\n                                      channelKeys:@{\n                                              @"beta": @"xxxxxxx",\n                                              @"gray": @"yyyyyyy"\n                                          }\n                               default_enviroment:@"beta"];\n\n// Active it\n[zealot checkVersion];\n')))}d.isMDXComponent=!0}}]);
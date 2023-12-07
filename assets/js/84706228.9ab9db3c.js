"use strict";(self.webpackChunkzealot_new_docs=self.webpackChunkzealot_new_docs||[]).push([[4943],{5026:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var a=t(5893),r=t(1151),l=t(4866),o=t(5162);const s={sidebar_label:"iOS"},i="Zealot iOS SDK",c={id:"developer-guide/sdk/ios",title:"Zealot iOS SDK",description:"The iOS component provides a service to check for new versions and installations for Zealot,",source:"@site/versioned_docs/version-4.x/developer-guide/sdk/ios.md",sourceDirName:"developer-guide/sdk",slug:"/developer-guide/sdk/ios",permalink:"/docs/4.x/developer-guide/sdk/ios",draft:!1,unlisted:!1,editUrl:"https://github.com/tryzealot/docs/tree/main/versioned_docs/version-4.x/developer-guide/sdk/ios.md",tags:[],version:"4.x",frontMatter:{sidebar_label:"iOS"},sidebar:"developerGuide",previous:{title:"SDKs",permalink:"/docs/4.x/category/sdks"},next:{title:"Android",permalink:"/docs/4.x/developer-guide/sdk/android"}},u={},d=[{value:"Install",id:"install",level:2},{value:"Cocoapods",id:"cocoapods",level:3},{value:"Usages",id:"usages",level:2},{value:"Import header",id:"import-header",level:3},{value:"Configure",id:"configure",level:3}];function h(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"zealot-ios-sdk",children:"Zealot iOS SDK"}),"\n",(0,a.jsx)(n.p,{children:"The iOS component provides a service to check for new versions and installations for Zealot,\nsupporting Swift and Objective-C."}),"\n",(0,a.jsx)(n.h2,{id:"install",children:"Install"}),"\n",(0,a.jsx)(n.h3,{id:"cocoapods",children:"Cocoapods"}),"\n",(0,a.jsxs)(n.p,{children:["Adding below code into ",(0,a.jsx)(n.code,{children:"Podfile"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ruby",children:"pod 'Zealot', :git => 'https://github.com/tryzealot/zealot-ios.git', :branch => 'master'\n"})}),"\n",(0,a.jsx)(n.p,{children:"Install it\uff1a"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pod install\n"})}),"\n",(0,a.jsx)(n.h2,{id:"usages",children:"Usages"}),"\n",(0,a.jsx)(n.h3,{id:"import-header",children:"Import header"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Add the code in your ",(0,a.jsx)(n.code,{children:"AppDelegate"}),"\uff1a"]}),"\n"]}),"\n","\n","\n",(0,a.jsxs)(l.Z,{groupId:"ios-zealot-sdk",children:[(0,a.jsx)(o.Z,{value:"Swift",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-swift",children:"import Zealot\n"})})}),(0,a.jsx)(o.Z,{value:"Objective-C",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-objectivec",children:"// Objective-C\n#import <Zealot/Zealot-Swift.h>\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"configure",children:"Configure"}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsxs)(n.li,{children:["Add the following code in  ",(0,a.jsx)(n.code,{children:"application:didFinishLaunchingWithOptions:"})," method block\uff1a"]}),"\n"]}),"\n",(0,a.jsxs)(l.Z,{groupId:"ios-zealot-sdk",children:[(0,a.jsx)(o.Z,{value:"Swift",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-swift",children:'// Single channel\nlet zealot = Zealot(endpoint: "http://zealot.com", channelKey: "...")\nzealot.checkVersion()\n\n// Multi-channel, such as beta, adhoc versions\nlet zealot = Zealot(endpoint: "http://zealot.com",\n                 channelKeys: [\n                   "beta": "xxxxxxx",\n                   "test": "yyyyyyy"],\n          default_enviroment: "beta")\n\n// Active it\nzealot.checkVersion()\n'})})}),(0,a.jsx)(o.Z,{value:"Objective-C",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-objectivec",children:'// Single channel\nZealot *zealot = [[Zealot alloc] initWithEndpoint:@"http://zealot.com"\n                                       channelKey:@"..."];\n\n// Multi-channel, such as beta, adhoc versions\nZealot *zealot = [[Zealot alloc] initWithEndpoint:@"http://zealot.com"\n                                      channelKeys:@{\n                                              @"beta": @"xxxxxxx",\n                                              @"gray": @"yyyyyyy"\n                                          }\n                               default_enviroment:@"beta"];\n\n// Active it\n[zealot checkVersion];\n'})})})]})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>o});t(7294);var a=t(512);const r={tabItem:"tabItem_Ymn6"};var l=t(5893);function o(e){let{children:n,hidden:t,className:o}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,o),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>k});var a=t(7294),r=t(512),l=t(2466),o=t(6550),s=t(469),i=t(1980),c=t(7392),u=t(12);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function v(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i._X)(l),(0,a.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(r.location.search);n.set(l,e),r.replace({...r.location,search:n.toString()})}),[l,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,l=h(e),[o,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[c,d]=v({queryString:t,groupId:r}),[f,m]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,l]=(0,u.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:r}),b=(()=>{const e=c??f;return p({value:e,tabValues:l})?e:null})();(0,s.Z)((()=>{b&&i(b)}),[b]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),m(e)}),[d,m,l]),tabValues:l}}var m=t(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(5893);function g(e){let{className:n,block:t,selectedValue:a,selectValue:o,tabValues:s}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),u=e=>{const n=e.currentTarget,t=i.indexOf(n),r=s[t].value;r!==a&&(c(n),o(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>i.push(e),onKeyDown:d,onClick:u,...l,className:(0,r.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:r}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,x.jsx)(g,{...e,...n}),(0,x.jsx)(j,{...e,...n})]})}function k(e){const n=(0,m.Z)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>o});var a=t(7294);const r={},l=a.createContext(r);function o(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);
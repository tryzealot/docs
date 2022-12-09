"use strict";(self.webpackChunkzealot_new_docs=self.webpackChunkzealot_new_docs||[]).push([[4123],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,v=p["".concat(s,".").concat(m)]||p[m]||c[m]||l;return n?a.createElement(v,o(o({ref:t},d),{},{components:n})):a.createElement(v,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),l=n(6010),o=n(2389),i=n(7392),s=n(7094),u=n(2466);const d="tabList__CuJ",c="tabItem_LNqP";function p(e){var t;const{lazy:n,block:o,defaultValue:p,values:m,groupId:v,className:y}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),h=(0,i.l)(b,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===p?p:p??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==g&&!b.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:T}=(0,s.U)(),[E,x]=(0,r.useState)(g),N=[],{blockElementScrollPositionUntilNextRender:O}=(0,u.o5)();if(null!=v){const e=k[v];null!=e&&e!==E&&b.some((t=>t.value===e))&&x(e)}const w=e=>{const t=e.currentTarget,n=N.indexOf(t),a=b[n].value;a!==E&&(O(t),x(a),null!=v&&T(v,String(a)))},C=e=>{var t;let n=null;switch(e.key){case"Enter":w(e);break;case"ArrowRight":{const t=N.indexOf(e.currentTarget)+1;n=N[t]??N[0];break}case"ArrowLeft":{const t=N.indexOf(e.currentTarget)-1;n=N[t]??N[N.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",d)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},y)},b.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>N.push(e),onKeyDown:C,onClick:w},o,{className:(0,l.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":E===t})}),n??t)}))),n?(0,r.cloneElement)(f.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function m(e){const t=(0,o.Z)();return r.createElement(p,(0,a.Z)({key:String(t)},e))}},7766:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),l=n(5488),o=n(5162);const i={sidebar_label:"Android"},s="Zealot Android SDK",u={unversionedId:"developer-guide/sdk/android",id:"developer-guide/sdk/android",title:"Zealot Android SDK",description:"Android \u7ec4\u4ef6\u63d0\u4f9b\u4e3a Zealot \u68c0\u67e5\u65b0\u7248\u672c\u548c\u5b89\u88c5\u7684\u670d\u52a1\uff0c\u652f\u6301 Kotlin \u548c Java\u3002",source:"@site/i18n/zh-Hans/docusaurus-plugin-content-docs/current/developer-guide/sdk/android.md",sourceDirName:"developer-guide/sdk",slug:"/developer-guide/sdk/android",permalink:"/zh-Hans/docs/developer-guide/sdk/android",draft:!1,editUrl:"https://github.com/tryzealot/docs/tree/main/docs/developer-guide/sdk/android.md",tags:[],version:"current",frontMatter:{sidebar_label:"Android"},sidebar:"developerGuide",previous:{title:"iOS",permalink:"/zh-Hans/docs/developer-guide/sdk/ios"},next:{title:"Fastlane \u63d2\u4ef6",permalink:"/zh-Hans/docs/developer-guide/fastlane"}},d={},c=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"JitPack",id:"jitpack",level:3},{value:"\u7528\u6237\u6743\u9650",id:"\u7528\u6237\u6743\u9650",level:2},{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:2}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"zealot-android-sdk"},"Zealot Android SDK"),(0,r.kt)("p",null,"Android \u7ec4\u4ef6\u63d0\u4f9b\u4e3a Zealot \u68c0\u67e5\u65b0\u7248\u672c\u548c\u5b89\u88c5\u7684\u670d\u52a1\uff0c\u652f\u6301 Kotlin \u548c Java\u3002"),(0,r.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,r.kt)("h3",{id:"jitpack"},"JitPack"),(0,r.kt)("p",null,"\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://jitpack.io"},"jitpack")," \u5b89\u88c5\uff0c\u5148\u9700\u8981\u6dfb\u52a0 maven \u4ed3\u5e93\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"allprojects {\n  repositories {\n    ...\n    maven { url 'https://jitpack.io' }\n  }\n}\n")),(0,r.kt)("p",null,"\u4e4b\u540e\u5728\u4e3b app \u9879\u76ee\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"build.gradle")," \u6dfb\u52a0 zealot\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},"dependencies {\n  implementation 'com.github.tryzealot:zealot-android:master-SNAPSHOT'\n}\n")),(0,r.kt)("h2",{id:"\u7528\u6237\u6743\u9650"},"\u7528\u6237\u6743\u9650"),(0,r.kt)("p",null,"\u4f7f\u7528 Zealot SDK \u9700\u8981\u5f00\u542f\u7f51\u7edc\u6743\u9650"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<uses-permission android:name="android.permission.INTERNET" />\n')),(0,r.kt)("h2",{id:"\u521d\u59cb\u5316"},"\u521d\u59cb\u5316"),(0,r.kt)("p",null,"\u5728\u4f60\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Application")," \u6587\u4ef6\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"onCreate")," \u65b9\u6cd5\u6dfb\u52a0\u542f\u52a8\u4ee3\u7801\uff1a"),(0,r.kt)(l.Z,{groupId:"android-zealot-sdk",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"Kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'// \u5355\u4e2a\u6e20\u9053\nZealot.create(getActivity())\n      .setEndpoint("https://zealot.com")\n      .setChannelKey("...")\n      .setBuildType(BuildConfig.BUILD_TYPE)\n      .launch()\n\n// \u591a\u4e2a\u6e20\u9053\uff0c\u6bd4\u5982\u6d4b\u8bd5\u7248\u672c\uff0c\u5185\u6d4b\u7248\u672c\nZealot.create(getActivity())\n      .setEndpoint("https://zealot.com")\n      .setChannelKey("xxxxxxx", "beta")\n      .setCHannelKey("yyyyyyy", "test")\n      .setBuildType(BuildConfig.BUILD_TYPE)\n      .launch()\n'))),(0,r.kt)(o.Z,{value:"Java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'// \u5355\u4e2a\u6e20\u9053\nZealot.create(getActivity())\n      .setEndpoint("https://zealot.com")\n      .setChannelKey("...")\n      .setBuildType(BuildConfig.BUILD_TYPE)\n      .launch();\n\n// \u591a\u4e2a\u6e20\u9053\uff0c\u6bd4\u5982\u6d4b\u8bd5\u7248\u672c\uff0c\u5185\u6d4b\u7248\u672c\nZealot.create(getActivity())\n      .setEndpoint("https://zealot.com")\n      .setChannelKey("xxxxxxx", "beta")\n      .setCHannelKey("yyyyyyy", "test")\n      .setBuildType(BuildConfig.BUILD_TYPE)\n      .launch();\n')))))}m.isMDXComponent=!0}}]);
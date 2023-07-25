"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3388],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=u(r),c=a,g=m["".concat(p,".").concat(c)]||m[c]||s[c]||l;return r?n.createElement(g,o(o({ref:t},d),{},{components:r})):n.createElement(g,o({ref:t},d))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},89879:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>g,frontMatter:()=>i,metadata:()=>u,toc:()=>m});var n=r(87462),a=r(63366),l=(r(67294),r(3905)),o=["components"],i={id:"azure",title:"Microsoft Azure"},p=void 0,u={unversionedId:"development/extensions-core/azure",id:"development/extensions-core/azure",title:"Microsoft Azure",description:"\x3c!--",source:"@site/docs/26.0.0/development/extensions-core/azure.md",sourceDirName:"development/extensions-core",slug:"/development/extensions-core/azure",permalink:"/docs/26.0.0/development/extensions-core/azure",draft:!1,tags:[],version:"current",frontMatter:{id:"azure",title:"Microsoft Azure"}},d={},m=[{value:"Deep Storage",id:"deep-storage",level:2}],s={toc:m},c="wrapper";function g(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)(c,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"To use this Apache Druid extension, ",(0,l.kt)("a",{parentName:"p",href:"/docs/26.0.0/development/extensions#loading-extensions"},"include")," ",(0,l.kt)("inlineCode",{parentName:"p"},"druid-azure-extensions")," in the extensions load list."),(0,l.kt)("h2",{id:"deep-storage"},"Deep Storage"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"http://azure.microsoft.com/en-us/services/storage/"},"Microsoft Azure Storage")," is another option for deep storage. This requires some additional Druid configuration."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Possible Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"druid.storage.type")),(0,l.kt)("td",{parentName:"tr",align:null},"azure"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Must be set.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"druid.azure.account")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Azure Storage account name."),(0,l.kt)("td",{parentName:"tr",align:null},"Must be set.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"druid.azure.key")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Azure Storage account key."),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. Either set key or sharedAccessStorageToken but not both.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"druid.azure.sharedAccessStorageToken")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Azure Shared Storage access token"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. Either set key or sharedAccessStorageToken but not both.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"druid.azure.container")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Azure Storage container name."),(0,l.kt)("td",{parentName:"tr",align:null},"Must be set.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"druid.azure.prefix")),(0,l.kt)("td",{parentName:"tr",align:null},"A prefix string that will be prepended to the blob names for the segments published to Azure deep storage"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},'""')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"druid.azure.protocol")),(0,l.kt)("td",{parentName:"tr",align:null},"the protocol to use"),(0,l.kt)("td",{parentName:"tr",align:null},"http or https"),(0,l.kt)("td",{parentName:"tr",align:null},"https")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"druid.azure.maxTries")),(0,l.kt)("td",{parentName:"tr",align:null},"Number of tries before canceling an Azure operation."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"druid.azure.maxListingLength")),(0,l.kt)("td",{parentName:"tr",align:null},"maximum number of input files matching a given prefix to retrieve at a time"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1024")))),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"http://azure.microsoft.com/en-us/pricing/free-trial/"},"Azure Services")," for more information."))}g.isMDXComponent=!0}}]);
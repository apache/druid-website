"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5864],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=d(n),c=a,g=s["".concat(u,".").concat(c)]||s[c]||m[c]||l;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[s]="string"==typeof e?e:a,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},26122:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>g,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),o=["components"],i={id:"azure",title:"Microsoft Azure"},u=void 0,d={unversionedId:"development/extensions-core/azure",id:"development/extensions-core/azure",title:"Microsoft Azure",description:"\x3c!--",source:"@site/docs/30.0.1/development/extensions-core/azure.md",sourceDirName:"development/extensions-core",slug:"/development/extensions-core/azure",permalink:"/docs/30.0.1/development/extensions-core/azure",draft:!1,tags:[],version:"current",frontMatter:{id:"azure",title:"Microsoft Azure"}},p={},s=[{value:"Deep Storage",id:"deep-storage",level:2}],m={toc:s},c="wrapper";function g(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)(c,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"To use this Apache Druid extension, ",(0,l.kt)("a",{parentName:"p",href:"/docs/30.0.1/configuration/extensions#loading-extensions"},"include")," ",(0,l.kt)("inlineCode",{parentName:"p"},"druid-azure-extensions")," in the extensions load list."),(0,l.kt)("h2",{id:"deep-storage"},"Deep Storage"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"http://azure.microsoft.com/en-us/services/storage/"},"Microsoft Azure Storage")," is another option for deep storage. This requires some additional Druid configuration."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Possible Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"druid.storage.type")),(0,l.kt)("td",{parentName:"tr",align:null},"azure"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Must be set.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"druid.azure.account")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Azure Storage account name."),(0,l.kt)("td",{parentName:"tr",align:null},"Must be set.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"druid.azure.key")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Azure Storage account key."),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. Set one of key, sharedAccessStorageToken or useAzureCredentialsChain.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"druid.azure.sharedAccessStorageToken")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Azure Shared Storage access token"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. Set one of key, sharedAccessStorageToken or useAzureCredentialsChain..")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"druid.azure.useAzureCredentialsChain")),(0,l.kt)("td",{parentName:"tr",align:null},"Use ",(0,l.kt)("a",{parentName:"td",href:"https://learn.microsoft.com/en-us/java/api/overview/azure/identity-readme?view=azure-java-stable"},"DefaultAzureCredential")," for authentication"),(0,l.kt)("td",{parentName:"tr",align:null},"Optional. Set one of key, sharedAccessStorageToken or useAzureCredentialsChain."),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"druid.azure.managedIdentityClientId")),(0,l.kt)("td",{parentName:"tr",align:null},"If you want to use managed identity authentication in the ",(0,l.kt)("inlineCode",{parentName:"td"},"DefaultAzureCredential"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"useAzureCredentialsChain")," must be true."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Optional.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"druid.azure.container")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Azure Storage container name."),(0,l.kt)("td",{parentName:"tr",align:null},"Must be set.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"druid.azure.prefix")),(0,l.kt)("td",{parentName:"tr",align:null},"A prefix string that will be prepended to the blob names for the segments published to Azure deep storage"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},'""')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"druid.azure.protocol")),(0,l.kt)("td",{parentName:"tr",align:null},"the protocol to use"),(0,l.kt)("td",{parentName:"tr",align:null},"http or https"),(0,l.kt)("td",{parentName:"tr",align:null},"https")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"druid.azure.maxTries")),(0,l.kt)("td",{parentName:"tr",align:null},"Number of tries before canceling an Azure operation."),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"druid.azure.maxListingLength")),(0,l.kt)("td",{parentName:"tr",align:null},"maximum number of input files matching a given prefix to retrieve at a time"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"1024")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"druid.azure.storageAccountEndpointSuffix")),(0,l.kt)("td",{parentName:"tr",align:null},"The endpoint suffix to use. Use this config instead of ",(0,l.kt)("inlineCode",{parentName:"td"},"druid.azure.endpointSuffix"),". Override the default value to connect to ",(0,l.kt)("a",{parentName:"td",href:"https://learn.microsoft.com/en-us/azure/azure-government/documentation-government-get-started-connect-to-storage#getting-started-with-storage-api"},"Azure Government"),". This config supports storage accounts enabled for ",(0,l.kt)("a",{parentName:"td",href:"https://learn.microsoft.com/en-us/azure/dns/dns-getstarted-portal"},"AzureDNSZone"),". Note: do not include the storage account name prefix in this config value."),(0,l.kt)("td",{parentName:"tr",align:null},"Examples: ",(0,l.kt)("inlineCode",{parentName:"td"},"ABCD1234.blob.storage.azure.net"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"blob.core.usgovcloudapi.net")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"blob.core.windows.net"))))),(0,l.kt)("p",null,"See ",(0,l.kt)("a",{parentName:"p",href:"http://azure.microsoft.com/en-us/pricing/free-trial/"},"Azure Services")," for more information."))}g.isMDXComponent=!0}}]);
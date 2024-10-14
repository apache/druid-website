"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8259],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),y=i,m=p["".concat(s,".").concat(y)]||p[y]||f[y]||o;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=y;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},51552:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var n=r(87462),i=r(63366),o=(r(67294),r(3905)),a=["components"],c={id:"tranquility",title:"Tranquility"},s=void 0,l={unversionedId:"ingestion/tranquility",id:"ingestion/tranquility",title:"Tranquility",description:"\x3c!--",source:"@site/docs/latest/ingestion/tranquility.md",sourceDirName:"ingestion",slug:"/ingestion/tranquility",permalink:"/docs/latest/ingestion/tranquility",draft:!1,tags:[],version:"current",frontMatter:{id:"tranquility",title:"Tranquility"}},u={},p=[],f={toc:p},y="wrapper";function m(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)(y,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/druid-io/tranquility/"},"Tranquility")," was a separately distributed package for pushing\nstreams to Druid in real-time. It is not compatible with recent versions of Druid."),(0,o.kt)("p",null,"For new projects that require streaming ingestion, we recommend using Druid's native support for\n",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/ingestion/kafka-ingestion"},"Apache Kafka")," or\n",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/ingestion/kinesis-ingestion"},"Amazon Kinesis"),"."))}m.isMDXComponent=!0}}]);
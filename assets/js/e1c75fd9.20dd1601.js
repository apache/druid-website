"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3818],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(r),f=o,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},71102:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=r(87462),o=r(63366),i=(r(67294),r(3905)),a=["components"],s={id:"joins",title:"Joins"},u=void 0,l={unversionedId:"querying/joins",id:"querying/joins",title:"Joins",description:"\x3c!--",source:"@site/docs/26.0.0/querying/joins.md",sourceDirName:"querying",slug:"/querying/joins",permalink:"/docs/26.0.0/querying/joins",draft:!1,tags:[],version:"current",frontMatter:{id:"joins",title:"Joins"},sidebar:"docs",previous:{title:"Datasources",permalink:"/docs/26.0.0/querying/datasource"},next:{title:"Lookups",permalink:"/docs/26.0.0/querying/lookups"}},c={},p=[],d={toc:p},f="wrapper";function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)(f,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Apache Druid has two features related to joining of data:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/26.0.0/querying/datasource#join"},"Join")," operators. These are available using a ",(0,i.kt)("a",{parentName:"li",href:"/docs/26.0.0/querying/datasource#join"},"join datasource")," in native\nqueries, or using the ",(0,i.kt)("a",{parentName:"li",href:"/docs/26.0.0/querying/sql"},"JOIN operator")," in Druid SQL. Refer to the\n",(0,i.kt)("a",{parentName:"li",href:"/docs/26.0.0/querying/datasource#join"},"join datasource")," documentation for information about how joins work in Druid native queries,\nor the ",(0,i.kt)("a",{parentName:"li",href:"/docs/26.0.0/multi-stage-query/reference#joins"},"multi-stage query join documentation")," for information about how joins\nwork in multi-stage query tasks."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"/docs/26.0.0/querying/lookups"},"Query-time lookups"),", simple key-to-value mappings. These are preloaded on all servers that are involved\nin queries and can be accessed with or without an explicit join operator. Refer to the ",(0,i.kt)("a",{parentName:"li",href:"/docs/26.0.0/querying/lookups"},"lookups"),"\ndocumentation for more details.")),(0,i.kt)("p",null,"Whenever possible, for best performance it is good to avoid joins at query time. Often this can be accomplished by\njoining data before it is loaded into Druid. However, there are situations where joins or lookups are the best solution\navailable despite the performance overhead, including:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The fact-to-dimension (star and snowflake schema) case: you need to change dimension values after initial ingestion,\nand aren't able to reingest to do this. In this case, you can use lookups for your dimension tables."),(0,i.kt)("li",{parentName:"ul"},"Your workload requires joins or filters on subqueries.")))}m.isMDXComponent=!0}}]);
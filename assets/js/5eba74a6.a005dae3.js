"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6566],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,m=u["".concat(c,".").concat(d)]||u[d]||f[d]||i;return r?a.createElement(m,o(o({ref:t},p),{},{components:r})):a.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},14397:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),o=["components"],s={id:"api-reference",title:"API reference",sidebar_label:"Overview"},c=void 0,l={unversionedId:"api-reference/api-reference",id:"api-reference/api-reference",title:"API reference",description:"\x3c!--",source:"@site/docs/latest/api-reference/api-reference.md",sourceDirName:"api-reference",slug:"/api-reference/",permalink:"/docs/latest/api-reference/",draft:!1,tags:[],version:"current",frontMatter:{id:"api-reference",title:"API reference",sidebar_label:"Overview"},sidebar:"docs",previous:{title:"Spatial filters",permalink:"/docs/latest/querying/geo"},next:{title:"Druid SQL",permalink:"/docs/latest/api-reference/sql-api"}},p={},u=[{value:"HTTP APIs",id:"http-apis",level:2},{value:"Java APIs",id:"java-apis",level:2}],f={toc:u},d="wrapper";function m(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)(d,(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This topic is an index to the Apache Druid API documentation."),(0,i.kt)("h2",{id:"http-apis"},"HTTP APIs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/latest/api-reference/sql-api"},"Druid SQL queries")," to submit SQL queries using the Druid SQL API."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/latest/api-reference/sql-ingestion-api"},"SQL-based ingestion")," to submit SQL-based batch ingestion requests."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/latest/api-reference/json-querying-api"},"JSON querying")," to submit JSON-based native queries."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/latest/api-reference/tasks-api"},"Tasks")," to manage data ingestion operations."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/latest/api-reference/supervisor-api"},"Supervisors")," to manage supervisors for data ingestion lifecycle and data processing."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/latest/api-reference/retention-rules-api"},"Retention rules")," to define and manage data retention rules across datasources."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/latest/api-reference/data-management-api"},"Data management")," to manage data segments."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/latest/api-reference/automatic-compaction-api"},"Automatic compaction")," to optimize segment sizes after ingestion."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/latest/api-reference/lookups-api"},"Lookups")," to manage and modify key-value datasources."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/latest/api-reference/service-status-api"},"Service status")," to monitor components within the Druid cluster. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/latest/api-reference/dynamic-configuration-api"},"Dynamic configuration")," to configure the behavior of the Coordinator and Overlord processes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/latest/api-reference/legacy-metadata-api"},"Legacy metadata")," to retrieve datasource metadata.")),(0,i.kt)("h2",{id:"java-apis"},"Java APIs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/latest/api-reference/sql-jdbc"},"SQL JDBC driver")," to connect to Druid and make Druid SQL queries using the Avatica JDBC driver.")))}m.isMDXComponent=!0}}]);
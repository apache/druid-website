"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6226],{14137:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>m});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=a.createContext({}),s=function(e){var r=a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=s(e.components);return a.createElement(p.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=s(t),d=n,m=u["".concat(p,".").concat(d)]||u[d]||f[d]||i;return t?a.createElement(m,o(o({ref:r},l),{},{components:t})):a.createElement(m,o({ref:r},l))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c[u]="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},27752:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>p,default:()=>m,frontMatter:()=>c,metadata:()=>s,toc:()=>u});var a=t(87462),n=t(63366),i=(t(67294),t(14137)),o=["components"],c={id:"api-reference",title:"API reference",sidebar_label:"Overview"},p=void 0,s={unversionedId:"api-reference/api-reference",id:"api-reference/api-reference",title:"API reference",description:"\x3c!--",source:"@site/docs/31.0.0/api-reference/api-reference.md",sourceDirName:"api-reference",slug:"/api-reference/",permalink:"/docs/31.0.0/api-reference/",draft:!1,tags:[],version:"current",frontMatter:{id:"api-reference",title:"API reference",sidebar_label:"Overview"},sidebar:"docs",previous:{title:"Spatial filters",permalink:"/docs/31.0.0/querying/geo"},next:{title:"Druid SQL",permalink:"/docs/31.0.0/api-reference/sql-api"}},l={},u=[{value:"HTTP APIs",id:"http-apis",level:2},{value:"Java APIs",id:"java-apis",level:2}],f={toc:u},d="wrapper";function m(e){var r=e.components,t=(0,n.Z)(e,o);return(0,i.kt)(d,(0,a.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This topic is an index to the Apache Druid API documentation."),(0,i.kt)("h2",{id:"http-apis"},"HTTP APIs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/31.0.0/api-reference/sql-api"},"Druid SQL queries")," to submit SQL queries using the Druid SQL API."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/31.0.0/api-reference/sql-ingestion-api"},"SQL-based ingestion")," to submit SQL-based batch ingestion requests."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/31.0.0/api-reference/json-querying-api"},"JSON querying")," to submit JSON-based native queries."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/31.0.0/api-reference/tasks-api"},"Tasks")," to manage data ingestion operations."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/31.0.0/api-reference/supervisor-api"},"Supervisors")," to manage supervisors for data ingestion lifecycle and data processing."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/31.0.0/api-reference/retention-rules-api"},"Retention rules")," to define and manage data retention rules across datasources."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/31.0.0/api-reference/data-management-api"},"Data management")," to manage data segments."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/31.0.0/api-reference/automatic-compaction-api"},"Automatic compaction")," to optimize segment sizes after ingestion."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/31.0.0/api-reference/lookups-api"},"Lookups")," to manage and modify key-value datasources."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/31.0.0/api-reference/service-status-api"},"Service status")," to monitor components within the Druid cluster. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/31.0.0/api-reference/dynamic-configuration-api"},"Dynamic configuration")," to configure the behavior of the Coordinator and Overlord processes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/31.0.0/api-reference/legacy-metadata-api"},"Legacy metadata")," to retrieve datasource metadata.")),(0,i.kt)("h2",{id:"java-apis"},"Java APIs"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/31.0.0/api-reference/sql-jdbc"},"SQL JDBC driver")," to connect to Druid and make Druid SQL queries using the Avatica JDBC driver.")))}m.isMDXComponent=!0}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8597],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(n),c=r,k=u["".concat(d,".").concat(c)]||u[c]||m[c]||i;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1533:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>k,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={id:"materialized-view",title:"Materialized View"},d=void 0,s={unversionedId:"development/extensions-contrib/materialized-view",id:"development/extensions-contrib/materialized-view",title:"Materialized View",description:"\x3c!--",source:"@site/docs/26.0.0/development/extensions-contrib/materialized-view.md",sourceDirName:"development/extensions-contrib",slug:"/development/extensions-contrib/materialized-view",permalink:"/docs/26.0.0/development/extensions-contrib/materialized-view",draft:!1,tags:[],version:"current",frontMatter:{id:"materialized-view",title:"Materialized View"}},p={},u=[{value:"Materialized-view-maintenance",id:"materialized-view-maintenance",level:2},{value:"Materialized-view-selection",id:"materialized-view-selection",level:2}],m={toc:u},c="wrapper";function k(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To use this Apache Druid feature, make sure to load ",(0,i.kt)("inlineCode",{parentName:"p"},"materialized-view-selection")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"materialized-view-maintenance"),". In addition, this feature currently requires a Hadoop cluster."),(0,i.kt)("p",null,"This feature enables Druid to greatly improve the query performance, especially when the query dataSource has a very large number of dimensions but the query only required several dimensions. This feature includes two parts. One is ",(0,i.kt)("inlineCode",{parentName:"p"},"materialized-view-maintenance"),", and the other is ",(0,i.kt)("inlineCode",{parentName:"p"},"materialized-view-selection"),"."),(0,i.kt)("h2",{id:"materialized-view-maintenance"},"Materialized-view-maintenance"),(0,i.kt)("p",null,'In materialized-view-maintenance, dataSources user ingested are called "base-dataSource". For each base-dataSource, we can submit ',(0,i.kt)("inlineCode",{parentName:"p"},"derivativeDataSource"),' supervisors to create and maintain other dataSources which we called  "derived-dataSource". The dimensions and metrics of derived-dataSources are the subset of base-dataSource\'s.\nThe ',(0,i.kt)("inlineCode",{parentName:"p"},"derivativeDataSource")," supervisor is used to keep the timeline of derived-dataSource consistent with base-dataSource. Each ",(0,i.kt)("inlineCode",{parentName:"p"},"derivativeDataSource")," supervisor  is responsible for one derived-dataSource."),(0,i.kt)("p",null,"A sample derivativeDataSource supervisor spec is shown below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'   {\n       "type": "derivativeDataSource",\n       "baseDataSource": "wikiticker",\n       "dimensionsSpec": {\n           "dimensions": [\n               "isUnpatrolled",\n               "metroCode",\n               "namespace",\n               "page",\n               "regionIsoCode",\n               "regionName",\n               "user"\n           ]\n       },\n       "metricsSpec": [\n           {\n               "name": "count",\n               "type": "count"\n           },\n           {\n               "name": "added",\n               "type": "longSum",\n               "fieldName": "added"\n           }\n       ],\n       "tuningConfig": {\n           "type": "hadoop"\n       }\n   }\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Supervisor Configuration")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Type"),(0,i.kt)("td",{parentName:"tr",align:null},"The supervisor type. This should always be ",(0,i.kt)("inlineCode",{parentName:"td"},"derivativeDataSource"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"baseDataSource"),(0,i.kt)("td",{parentName:"tr",align:null},"The name of base dataSource. This dataSource data should be already stored inside Druid, and the dataSource will be used as input data."),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"dimensionsSpec"),(0,i.kt)("td",{parentName:"tr",align:null},"Specifies the dimensions of the data. These dimensions must be the subset of baseDataSource's dimensions."),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"metricsSpec"),(0,i.kt)("td",{parentName:"tr",align:null},"A list of aggregators. These metrics must be the subset of baseDataSource's metrics. See ",(0,i.kt)("a",{parentName:"td",href:"/docs/26.0.0/querying/aggregations"},"aggregations"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tuningConfig"),(0,i.kt)("td",{parentName:"tr",align:null},"TuningConfig must be HadoopTuningConfig. See ",(0,i.kt)("a",{parentName:"td",href:"/docs/26.0.0/ingestion/hadoop#tuningconfig"},"Hadoop tuning config"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"dataSource"),(0,i.kt)("td",{parentName:"tr",align:null},"The name of this derived dataSource."),(0,i.kt)("td",{parentName:"tr",align:null},"no(default=baseDataSource-hashCode of supervisor)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"hadoopDependencyCoordinates"),(0,i.kt)("td",{parentName:"tr",align:null},"A JSON array of Hadoop dependency coordinates that Druid will use, this property will override the default Hadoop coordinates. Once specified, Druid will look for those Hadoop dependencies from the location specified by druid.extensions.hadoopDependenciesDir"),(0,i.kt)("td",{parentName:"tr",align:null},"no")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"classpathPrefix"),(0,i.kt)("td",{parentName:"tr",align:null},"Classpath that will be prepended for the Peon process."),(0,i.kt)("td",{parentName:"tr",align:null},"no")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"context"),(0,i.kt)("td",{parentName:"tr",align:null},"See below."),(0,i.kt)("td",{parentName:"tr",align:null},"no")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Context")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"maxTaskCount"),(0,i.kt)("td",{parentName:"tr",align:null},"The max number of tasks the supervisor can submit simultaneously."),(0,i.kt)("td",{parentName:"tr",align:null},"no(default=1)")))),(0,i.kt)("h2",{id:"materialized-view-selection"},"Materialized-view-selection"),(0,i.kt)("p",null,"In materialized-view-selection, we implement a new query type ",(0,i.kt)("inlineCode",{parentName:"p"},"view"),". When we request a view query, Druid will try its best to optimize the query based on query dataSource and intervals."),(0,i.kt)("p",null,"A sample view query spec is shown below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'   {\n       "queryType": "view",\n       "query": {\n           "queryType": "groupBy",\n           "dataSource": "wikiticker",\n           "granularity": "all",\n           "dimensions": [\n               "user"\n           ],\n           "limitSpec": {\n               "type": "default",\n               "limit": 1,\n               "columns": [\n                   {\n                       "dimension": "added",\n                       "direction": "descending",\n                       "dimensionOrder": "numeric"\n                   }\n               ]\n           },\n           "aggregations": [\n               {\n                   "type": "longSum",\n                   "name": "added",\n                   "fieldName": "added"\n               }\n           ],\n           "intervals": [\n               "2015-09-12/2015-09-13"\n           ]\n       }\n   }\n')),(0,i.kt)("p",null,"There are 2 parts in a view query:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"queryType"),(0,i.kt)("td",{parentName:"tr",align:null},"The query type. This should always be view"),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"query"),(0,i.kt)("td",{parentName:"tr",align:null},"The real query of this ",(0,i.kt)("inlineCode",{parentName:"td"},"view")," query. The real query must be ",(0,i.kt)("a",{parentName:"td",href:"/docs/26.0.0/querying/groupbyquery"},"groupBy"),", ",(0,i.kt)("a",{parentName:"td",href:"/docs/26.0.0/querying/topnquery"},"topN"),", or ",(0,i.kt)("a",{parentName:"td",href:"/docs/26.0.0/querying/timeseriesquery"},"timeseries")," type."),(0,i.kt)("td",{parentName:"tr",align:null},"yes")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note that Materialized View is currently designated as experimental. Please make sure the time of all processes are the same and increase monotonically. Otherwise, some unexpected errors may happen on query results.")))}k.isMDXComponent=!0}}]);
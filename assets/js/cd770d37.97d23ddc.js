"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1874],{15680:(e,t,a)=>{a.d(t,{xA:()=>m,yg:()=>d});var n=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),u=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),g=u(a),y=r,d=g["".concat(o,".").concat(y)]||g[y]||p[y]||l;return a?n.createElement(d,i(i({ref:t},m),{},{components:a})):n.createElement(d,i({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=y;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[g]="string"==typeof e?e:r,i[1]=s;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},60483:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>g});var n=a(58168),r=a(98587),l=(a(96540),a(15680)),i=["components"],s={id:"timeseriesquery",title:"Timeseries queries",sidebar_label:"Timeseries"},o=void 0,u={unversionedId:"querying/timeseriesquery",id:"querying/timeseriesquery",title:"Timeseries queries",description:"\x3c!--",source:"@site/docs/29.0.0/querying/timeseriesquery.md",sourceDirName:"querying",slug:"/querying/timeseriesquery",permalink:"/docs/29.0.0/querying/timeseriesquery",draft:!1,tags:[],version:"current",frontMatter:{id:"timeseriesquery",title:"Timeseries queries",sidebar_label:"Timeseries"},sidebar:"docs",previous:{title:"Query context",permalink:"/docs/29.0.0/querying/query-context"},next:{title:"TopN",permalink:"/docs/29.0.0/querying/topnquery"}},m={},g=[{value:"Grand totals",id:"grand-totals",level:2},{value:"Empty bucket values",id:"empty-bucket-values",level:2}],p={toc:g},y="wrapper";function d(e){var t=e.components,a=(0,r.A)(e,i);return(0,l.yg)(y,(0,n.A)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.yg)("admonition",{type:"info"},(0,l.yg)("p",{parentName:"admonition"}," Apache Druid supports two query languages: ",(0,l.yg)("a",{parentName:"p",href:"/docs/29.0.0/querying/sql"},"Druid SQL")," and ",(0,l.yg)("a",{parentName:"p",href:"/docs/29.0.0/querying/"},"native queries"),".\nThis document describes a query\ntype in the native language. For information about when Druid SQL will use this query type, refer to the\n",(0,l.yg)("a",{parentName:"p",href:"/docs/29.0.0/querying/sql-translation#query-types"},"SQL documentation"),".")),(0,l.yg)("p",null,"These types of queries take a timeseries query object and return an array of JSON objects where each object represents a value asked for by the timeseries query."),(0,l.yg)("p",null,"An example timeseries query object is shown below:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "queryType": "timeseries",\n  "dataSource": "sample_datasource",\n  "granularity": "day",\n  "descending": "true",\n  "filter": {\n    "type": "and",\n    "fields": [\n      { "type": "selector", "dimension": "sample_dimension1", "value": "sample_value1" },\n      { "type": "or",\n        "fields": [\n          { "type": "selector", "dimension": "sample_dimension2", "value": "sample_value2" },\n          { "type": "selector", "dimension": "sample_dimension3", "value": "sample_value3" }\n        ]\n      }\n    ]\n  },\n  "aggregations": [\n    { "type": "longSum", "name": "sample_name1", "fieldName": "sample_fieldName1" },\n    { "type": "doubleSum", "name": "sample_name2", "fieldName": "sample_fieldName2" }\n  ],\n  "postAggregations": [\n    { "type": "arithmetic",\n      "name": "sample_divide",\n      "fn": "/",\n      "fields": [\n        { "type": "fieldAccess", "name": "postAgg__sample_name1", "fieldName": "sample_name1" },\n        { "type": "fieldAccess", "name": "postAgg__sample_name2", "fieldName": "sample_name2" }\n      ]\n    }\n  ],\n  "intervals": [ "2012-01-01T00:00:00.000/2012-01-03T00:00:00.000" ]\n}\n')),(0,l.yg)("p",null,"There are 7 main parts to a timeseries query:"),(0,l.yg)("table",null,(0,l.yg)("thead",{parentName:"table"},(0,l.yg)("tr",{parentName:"thead"},(0,l.yg)("th",{parentName:"tr",align:null},"property"),(0,l.yg)("th",{parentName:"tr",align:null},"description"),(0,l.yg)("th",{parentName:"tr",align:null},"required?"))),(0,l.yg)("tbody",{parentName:"table"},(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"queryType"),(0,l.yg)("td",{parentName:"tr",align:null},'This String should always be "timeseries"; this is the first thing Apache Druid looks at to figure out how to interpret the query'),(0,l.yg)("td",{parentName:"tr",align:null},"yes")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"dataSource"),(0,l.yg)("td",{parentName:"tr",align:null},"A String or Object defining the data source to query, very similar to a table in a relational database. See ",(0,l.yg)("a",{parentName:"td",href:"/docs/29.0.0/querying/datasource"},"DataSource")," for more information."),(0,l.yg)("td",{parentName:"tr",align:null},"yes")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"descending"),(0,l.yg)("td",{parentName:"tr",align:null},"Whether to make descending ordered result. Default is ",(0,l.yg)("inlineCode",{parentName:"td"},"false"),"(ascending)."),(0,l.yg)("td",{parentName:"tr",align:null},"no")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"intervals"),(0,l.yg)("td",{parentName:"tr",align:null},"A JSON Object representing ISO-8601 Intervals. This defines the time ranges to run the query over."),(0,l.yg)("td",{parentName:"tr",align:null},"yes")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"granularity"),(0,l.yg)("td",{parentName:"tr",align:null},"Defines the granularity to bucket query results. See ",(0,l.yg)("a",{parentName:"td",href:"/docs/29.0.0/querying/granularities"},"Granularities")),(0,l.yg)("td",{parentName:"tr",align:null},"yes")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"filter"),(0,l.yg)("td",{parentName:"tr",align:null},"See ",(0,l.yg)("a",{parentName:"td",href:"/docs/29.0.0/querying/filters"},"Filters")),(0,l.yg)("td",{parentName:"tr",align:null},"no")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"virtualColumns"),(0,l.yg)("td",{parentName:"tr",align:null},"A JSON list of ",(0,l.yg)("a",{parentName:"td",href:"/docs/29.0.0/querying/virtual-columns"},"virtual columns"),". You can reference the virtual columns in ",(0,l.yg)("inlineCode",{parentName:"td"},"aggregations")," or ",(0,l.yg)("inlineCode",{parentName:"td"},"postAggregations"),"."),(0,l.yg)("td",{parentName:"tr",align:null},"no (default none)")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"aggregations"),(0,l.yg)("td",{parentName:"tr",align:null},"See ",(0,l.yg)("a",{parentName:"td",href:"/docs/29.0.0/querying/aggregations"},"Aggregations")),(0,l.yg)("td",{parentName:"tr",align:null},"no")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"postAggregations"),(0,l.yg)("td",{parentName:"tr",align:null},"See ",(0,l.yg)("a",{parentName:"td",href:"/docs/29.0.0/querying/post-aggregations"},"Post Aggregations")),(0,l.yg)("td",{parentName:"tr",align:null},"no")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"limit"),(0,l.yg)("td",{parentName:"tr",align:null},"An integer that limits the number of results. The default is unlimited."),(0,l.yg)("td",{parentName:"tr",align:null},"no")),(0,l.yg)("tr",{parentName:"tbody"},(0,l.yg)("td",{parentName:"tr",align:null},"context"),(0,l.yg)("td",{parentName:"tr",align:null},"Can be used to modify query behavior, including ",(0,l.yg)("a",{parentName:"td",href:"#grand-totals"},"grand totals")," and ",(0,l.yg)("a",{parentName:"td",href:"#empty-bucket-values"},"empty bucket values"),". See also ",(0,l.yg)("a",{parentName:"td",href:"/docs/29.0.0/querying/query-context"},"Context")," for parameters that apply to all query types."),(0,l.yg)("td",{parentName:"tr",align:null},"no")))),(0,l.yg)("p",null,'To pull it all together, the above query would return 2 data points, one for each day between 2012-01-01 and 2012-01-03, from the "sample',"_",'datasource" table. Each data point would be the (long) sum of sample',"_","fieldName1, the (double) sum of sample","_","fieldName2 and the (double) result of sample","_","fieldName1 divided by sample","_","fieldName2 for the filter set. The output looks like this:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "timestamp": "2012-01-01T00:00:00.000Z",\n    "result": { "sample_name1": <some_value>, "sample_name2": <some_value>, "sample_divide": <some_value> }\n  },\n  {\n    "timestamp": "2012-01-02T00:00:00.000Z",\n    "result": { "sample_name1": <some_value>, "sample_name2": <some_value>, "sample_divide": <some_value> }\n  }\n]\n')),(0,l.yg)("h2",{id:"grand-totals"},"Grand totals"),(0,l.yg)("p",null,'Druid can include an extra "grand totals" row as the last row of a timeseries result set. To enable this, add\n',(0,l.yg)("inlineCode",{parentName:"p"},'"grandTotal" : true')," to your query context. For example:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "queryType": "timeseries",\n  "dataSource": "sample_datasource",\n  "intervals": [ "2012-01-01T00:00:00.000/2012-01-03T00:00:00.000" ],\n  "granularity": "day",\n  "aggregations": [\n    { "type": "longSum", "name": "sample_name1", "fieldName": "sample_fieldName1" },\n    { "type": "doubleSum", "name": "sample_name2", "fieldName": "sample_fieldName2" }\n  ],\n  "context": {\n    "grandTotal": true\n  }\n}\n')),(0,l.yg)("p",null,'The grand totals row will appear as the last row in the result array, and will have no timestamp. It will be the last\nrow even if the query is run in "descending" mode. Post-aggregations in the grand totals row will be computed based\nupon the grand total aggregations.'),(0,l.yg)("h2",{id:"empty-bucket-values"},"Empty bucket values"),(0,l.yg)("p",null,"By default Druid fills empty interior time buckets in the results of timeseries queries with the default value for the ",(0,l.yg)("a",{parentName:"p",href:"/docs/29.0.0/querying/sql-aggregations"},"aggregator function"),'.\nFor example, if you issue a "day" granularity\ntimeseries query for the interval 2012-01-01/2012-01-04 using the SUM aggregator, and no data exists for 2012-01-02, Druid returns:'),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "timestamp": "2012-01-01T00:00:00.000Z",\n    "result": { "sample_name1": <some_value> }\n  },\n  {\n   "timestamp": "2012-01-02T00:00:00.000Z",\n   "result": { "sample_name1": NULL }\n  },\n  {\n    "timestamp": "2012-01-03T00:00:00.000Z",\n    "result": { "sample_name1": <some_value> }\n  }\n]\n')),(0,l.yg)("p",null,"Time buckets that lie completely outside the data interval are not filled with the default value."),(0,l.yg)("p",null,"You can disable all empty bucket filling with the context flag ",(0,l.yg)("inlineCode",{parentName:"p"},"skipEmptyBuckets"),".\nIn this mode, Druid omits the data point 2012-01-02 from the results.\nFor example:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "queryType": "timeseries",\n  "dataSource": "sample_datasource",\n  "granularity": "day",\n  "aggregations": [\n    { "type": "longSum", "name": "sample_name1", "fieldName": "sample_fieldName1" }\n  ],\n  "intervals": [ "2012-01-01T00:00:00.000/2012-01-04T00:00:00.000" ],\n  "context" : {\n    "skipEmptyBuckets": "true"\n  }\n}\n')))}d.isMDXComponent=!0}}]);
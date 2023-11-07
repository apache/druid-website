"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7248],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,h=p["".concat(o,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(h,l(l({ref:t},c),{},{components:n})):a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:r,l[1]=s;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68517:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],s={id:"searchquery",title:"Search queries",sidebar_label:"Search"},o=void 0,u={unversionedId:"querying/searchquery",id:"querying/searchquery",title:"Search queries",description:"\x3c!--",source:"@site/docs/latest/querying/searchquery.md",sourceDirName:"querying",slug:"/querying/searchquery",permalink:"/docs/latest/querying/searchquery",draft:!1,tags:[],version:"current",frontMatter:{id:"searchquery",title:"Search queries",sidebar_label:"Search"},sidebar:"docs",previous:{title:"Scan",permalink:"/docs/latest/querying/scan-query"},next:{title:"TimeBoundary",permalink:"/docs/latest/querying/timeboundaryquery"}},c={},p=[{value:"Implementation details",id:"implementation-details",level:3},{value:"Strategies",id:"strategies",level:4},{value:"Server configuration",id:"server-configuration",level:2},{value:"Query context",id:"query-context",level:2},{value:"SearchQuerySpec",id:"searchqueryspec",level:2},{value:"<code>insensitive_contains</code>",id:"insensitive_contains",level:3},{value:"<code>fragment</code>",id:"fragment",level:3},{value:"<code>contains</code>",id:"contains",level:3},{value:"<code>regex</code>",id:"regex",level:3}],d={toc:p},m="wrapper";function h(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)(m,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"}," Apache Druid supports two query languages: ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/querying/sql"},"Druid SQL")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/querying/"},"native queries"),".\nThis document describes a query\ntype that is only available in the native language.")),(0,i.kt)("p",null,"A search query returns dimension values that match the search specification."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "queryType": "search",\n  "dataSource": "sample_datasource",\n  "granularity": "day",\n  "searchDimensions": [\n    "dim1",\n    "dim2"\n  ],\n  "query": {\n    "type": "insensitive_contains",\n    "value": "Ke"\n  },\n  "sort" : {\n    "type": "lexicographic"\n  },\n  "intervals": [\n    "2013-01-01T00:00:00.000/2013-01-03T00:00:00.000"\n  ]\n}\n')),(0,i.kt)("p",null,"There are several main parts to a search query:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"property"),(0,i.kt)("th",{parentName:"tr",align:null},"description"),(0,i.kt)("th",{parentName:"tr",align:null},"required?"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"queryType"),(0,i.kt)("td",{parentName:"tr",align:null},'This String should always be "search"; this is the first thing Apache Druid looks at to figure out how to interpret the query.'),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"dataSource"),(0,i.kt)("td",{parentName:"tr",align:null},"A String or Object defining the data source to query, very similar to a table in a relational database. See ",(0,i.kt)("a",{parentName:"td",href:"/docs/latest/querying/datasource"},"DataSource")," for more information."),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"granularity"),(0,i.kt)("td",{parentName:"tr",align:null},"Defines the granularity of the query. See ",(0,i.kt)("a",{parentName:"td",href:"/docs/latest/querying/granularities"},"Granularities"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"no (default to ",(0,i.kt)("inlineCode",{parentName:"td"},"all"),")")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"filter"),(0,i.kt)("td",{parentName:"tr",align:null},"See ",(0,i.kt)("a",{parentName:"td",href:"/docs/latest/querying/filters"},"Filters"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"no")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"limit"),(0,i.kt)("td",{parentName:"tr",align:null},"Defines the maximum number per Historical process (parsed as int) of search results to return."),(0,i.kt)("td",{parentName:"tr",align:null},"no (default to 1000)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"intervals"),(0,i.kt)("td",{parentName:"tr",align:null},"A JSON Object representing ISO-8601 Intervals. This defines the time ranges to run the query over."),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"searchDimensions"),(0,i.kt)("td",{parentName:"tr",align:null},"The dimensions to run the search over. Excluding this means the search is run over all dimensions."),(0,i.kt)("td",{parentName:"tr",align:null},"no")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"virtualColumns"),(0,i.kt)("td",{parentName:"tr",align:null},"A JSON list of ",(0,i.kt)("a",{parentName:"td",href:"/docs/latest/querying/virtual-columns"},"virtual columns")," available to use in ",(0,i.kt)("inlineCode",{parentName:"td"},"searchDimensions"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"no (default none)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"query"),(0,i.kt)("td",{parentName:"tr",align:null},"See ",(0,i.kt)("a",{parentName:"td",href:"#searchqueryspec"},"SearchQuerySpec"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"sort"),(0,i.kt)("td",{parentName:"tr",align:null},"An object specifying how the results of the search should be sorted.",(0,i.kt)("br",null),'Possible types are "lexicographic" (the default sort), "alphanumeric", "strlen", and "numeric".',(0,i.kt)("br",null),"See ",(0,i.kt)("a",{parentName:"td",href:"/docs/latest/querying/sorting-orders"},"Sorting Orders")," for more details."),(0,i.kt)("td",{parentName:"tr",align:null},"no")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"context"),(0,i.kt)("td",{parentName:"tr",align:null},"See ",(0,i.kt)("a",{parentName:"td",href:"/docs/latest/querying/query-context"},"Context")),(0,i.kt)("td",{parentName:"tr",align:null},"no")))),(0,i.kt)("p",null,"The format of the result is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "timestamp": "2013-01-01T00:00:00.000Z",\n    "result": [\n      {\n        "dimension": "dim1",\n        "value": "Ke$ha",\n        "count": 3\n      },\n      {\n        "dimension": "dim2",\n        "value": "Ke$haForPresident",\n        "count": 1\n      }\n    ]\n  },\n  {\n    "timestamp": "2013-01-02T00:00:00.000Z",\n    "result": [\n      {\n        "dimension": "dim1",\n        "value": "SomethingThatContainsKe",\n        "count": 1\n      },\n      {\n        "dimension": "dim2",\n        "value": "SomethingElseThatContainsKe",\n        "count": 2\n      }\n    ]\n  }\n]\n')),(0,i.kt)("h3",{id:"implementation-details"},"Implementation details"),(0,i.kt)("h4",{id:"strategies"},"Strategies"),(0,i.kt)("p",null,'Search queries can be executed using two different strategies. The default strategy is determined by the\n"druid.query.search.searchStrategy" runtime property on the Broker. This can be overridden using "searchStrategy" in the\nquery context. If neither the context field nor the property is set, the "useIndexes" strategy will be used.'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'"useIndexes" strategy, the default, first categorizes search dimensions into two groups according to their support for\nbitmap indexes. And then, it applies index-only and cursor-based execution plans to the group of dimensions supporting\nbitmaps and others, respectively. The index-only plan uses only indexes for search query processing. For each dimension,\nit reads the bitmap index for each dimension value, evaluates the search predicate, and finally checks the time interval\nand filter predicates. For the cursor-based execution plan, please refer to the "cursorOnly" strategy. The index-only\nplan shows low performance for the search dimensions of large cardinality which means most values of search dimensions\nare unique.')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'"cursorOnly" strategy generates a cursor-based execution plan. This plan creates a cursor which reads a row from a\nqueryableIndexSegment, and then evaluates search predicates. If some filters support bitmap indexes, the cursor can read\nonly the rows which satisfy those filters, thereby saving I/O cost. However, it might be slow with filters of low selectivity.')),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'"auto" strategy uses a cost-based planner for choosing an optimal search strategy. It estimates the cost of index-only\nand cursor-based execution plans, and chooses the optimal one. Currently, it is not enabled by default due to the overhead\nof cost estimation.'))),(0,i.kt)("h2",{id:"server-configuration"},"Server configuration"),(0,i.kt)("p",null,"The following runtime properties apply:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.query.search.searchStrategy")),(0,i.kt)("td",{parentName:"tr",align:null},"Default search query strategy."),(0,i.kt)("td",{parentName:"tr",align:null},"useIndexes")))),(0,i.kt)("h2",{id:"query-context"},"Query context"),(0,i.kt)("p",null,"The following query context parameters apply:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"searchStrategy")),(0,i.kt)("td",{parentName:"tr",align:null},"Overrides the value of ",(0,i.kt)("inlineCode",{parentName:"td"},"druid.query.search.searchStrategy")," for this query.")))),(0,i.kt)("h2",{id:"searchqueryspec"},"SearchQuerySpec"),(0,i.kt)("h3",{id:"insensitive_contains"},(0,i.kt)("inlineCode",{parentName:"h3"},"insensitive_contains")),(0,i.kt)("p",null,'If any part of a dimension value contains the value specified in this search query spec, regardless of case, a "match" occurs. The grammar is:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type"  : "insensitive_contains",\n  "value" : "some_value"\n}\n')),(0,i.kt)("h3",{id:"fragment"},(0,i.kt)("inlineCode",{parentName:"h3"},"fragment")),(0,i.kt)("p",null,'If any part of a dimension value contains all the values specified in this search query spec, regardless of case by default, a "match" occurs. The grammar is:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type" : "fragment",\n  "case_sensitive" : false,\n  "values" : ["fragment1", "fragment2"]\n}\n')),(0,i.kt)("h3",{id:"contains"},(0,i.kt)("inlineCode",{parentName:"h3"},"contains")),(0,i.kt)("p",null,'If any part of a dimension value contains the value specified in this search query spec, a "match" occurs. The grammar is:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type"  : "contains",\n  "case_sensitive" : true,\n  "value" : "some_value"\n}\n')),(0,i.kt)("h3",{id:"regex"},(0,i.kt)("inlineCode",{parentName:"h3"},"regex")),(0,i.kt)("p",null,'If any part of a dimension value contains the pattern specified in this search query spec, a "match" occurs. The grammar is:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type"  : "regex",\n  "pattern" : "some_pattern"\n}\n')))}h.isMDXComponent=!0}}]);
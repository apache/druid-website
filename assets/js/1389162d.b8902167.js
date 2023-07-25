"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5293],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),c=a,g=m["".concat(s,".").concat(c)]||m[c]||d[c]||i;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},70557:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>m});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"topnquery",title:"TopN queries",sidebar_label:"TopN"},s=void 0,u={unversionedId:"querying/topnquery",id:"querying/topnquery",title:"TopN queries",description:"\x3c!--",source:"@site/docs/26.0.0/querying/topnquery.md",sourceDirName:"querying",slug:"/querying/topnquery",permalink:"/docs/26.0.0/querying/topnquery",draft:!1,tags:[],version:"current",frontMatter:{id:"topnquery",title:"TopN queries",sidebar_label:"TopN"},sidebar:"docs",previous:{title:"Timeseries",permalink:"/docs/26.0.0/querying/timeseriesquery"},next:{title:"GroupBy",permalink:"/docs/26.0.0/querying/groupbyquery"}},p={},m=[{value:"Behavior on multi-value dimensions",id:"behavior-on-multi-value-dimensions",level:2},{value:"Aliasing",id:"aliasing",level:2},{value:"Example First query",id:"example-first-query",level:3},{value:"Example second query",id:"example-second-query",level:3}],d={toc:m},c="wrapper";function g(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)(c,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Apache Druid supports two query languages: ",(0,i.kt)("a",{parentName:"p",href:"/docs/26.0.0/querying/sql"},"Druid SQL")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/26.0.0/querying/"},"native queries"),".\nThis document describes a query\ntype in the native language. For information about when Druid SQL will use this query type, refer to the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/26.0.0/querying/sql-translation#query-types"},"SQL documentation"),".")),(0,i.kt)("p",null,"Apache Druid TopN queries return a sorted set of results for the values in a given dimension according to some criteria. Conceptually, they can be thought of as an approximate ",(0,i.kt)("a",{parentName:"p",href:"/docs/26.0.0/querying/groupbyquery"},"GroupByQuery")," over a single dimension with an ",(0,i.kt)("a",{parentName:"p",href:"/docs/26.0.0/querying/limitspec"},"Ordering")," spec. TopNs are much faster and resource efficient than GroupBys for this use case. These types of queries take a topN query object and return an array of JSON objects where each object represents a value asked for by the topN query."),(0,i.kt)("p",null,"TopNs are approximate in that each data process will rank their top K results and only return those top K results to the Broker. K, by default in Druid, is ",(0,i.kt)("inlineCode",{parentName:"p"},"max(1000, threshold)"),". In practice, this means that if you ask for the top 1000 items ordered, the correctness of the first ~900 items will be 100%, and the ordering of the results after that is not guaranteed. TopNs can be made more accurate by increasing the threshold."),(0,i.kt)("p",null,"A topN query object looks like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "queryType": "topN",\n  "dataSource": "sample_data",\n  "dimension": "sample_dim",\n  "threshold": 5,\n  "metric": "count",\n  "granularity": "all",\n  "filter": {\n    "type": "and",\n    "fields": [\n      {\n        "type": "selector",\n        "dimension": "dim1",\n        "value": "some_value"\n      },\n      {\n        "type": "selector",\n        "dimension": "dim2",\n        "value": "some_other_val"\n      }\n    ]\n  },\n  "aggregations": [\n    {\n      "type": "longSum",\n      "name": "count",\n      "fieldName": "count"\n    },\n    {\n      "type": "doubleSum",\n      "name": "some_metric",\n      "fieldName": "some_metric"\n    }\n  ],\n  "postAggregations": [\n    {\n      "type": "arithmetic",\n      "name": "average",\n      "fn": "/",\n      "fields": [\n        {\n          "type": "fieldAccess",\n          "name": "some_metric",\n          "fieldName": "some_metric"\n        },\n        {\n          "type": "fieldAccess",\n          "name": "count",\n          "fieldName": "count"\n        }\n      ]\n    }\n  ],\n  "intervals": [\n    "2013-08-31T00:00:00.000/2013-09-03T00:00:00.000"\n  ]\n}\n')),(0,i.kt)("p",null,"There are 11 parts to a topN query."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"property"),(0,i.kt)("th",{parentName:"tr",align:null},"description"),(0,i.kt)("th",{parentName:"tr",align:null},"required?"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"queryType"),(0,i.kt)("td",{parentName:"tr",align:null},'This String should always be "topN"; this is the first thing Druid looks at to figure out how to interpret the query'),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"dataSource"),(0,i.kt)("td",{parentName:"tr",align:null},"A String or Object defining the data source to query, very similar to a table in a relational database. See ",(0,i.kt)("a",{parentName:"td",href:"/docs/26.0.0/querying/datasource"},"DataSource")," for more information."),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"intervals"),(0,i.kt)("td",{parentName:"tr",align:null},"A JSON Object representing ISO-8601 Intervals. This defines the time ranges to run the query over."),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"granularity"),(0,i.kt)("td",{parentName:"tr",align:null},"Defines the granularity to bucket query results. See ",(0,i.kt)("a",{parentName:"td",href:"/docs/26.0.0/querying/granularities"},"Granularities")),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"filter"),(0,i.kt)("td",{parentName:"tr",align:null},"See ",(0,i.kt)("a",{parentName:"td",href:"/docs/26.0.0/querying/filters"},"Filters")),(0,i.kt)("td",{parentName:"tr",align:null},"no")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"virtualColumns"),(0,i.kt)("td",{parentName:"tr",align:null},"A JSON list of ",(0,i.kt)("a",{parentName:"td",href:"/docs/26.0.0/querying/virtual-columns"},"virtual columns"),". You can reference a virtual column as the grouping ",(0,i.kt)("inlineCode",{parentName:"td"},"dimension")," or as an input in ",(0,i.kt)("inlineCode",{parentName:"td"},"aggregations")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"postAggregations"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"no (default none)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"aggregations"),(0,i.kt)("td",{parentName:"tr",align:null},"See ",(0,i.kt)("a",{parentName:"td",href:"/docs/26.0.0/querying/aggregations"},"Aggregations")),(0,i.kt)("td",{parentName:"tr",align:null},"for numeric metricSpec, aggregations or postAggregations should be specified. Otherwise no.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"postAggregations"),(0,i.kt)("td",{parentName:"tr",align:null},"See ",(0,i.kt)("a",{parentName:"td",href:"/docs/26.0.0/querying/post-aggregations"},"Post Aggregations")),(0,i.kt)("td",{parentName:"tr",align:null},"for numeric metricSpec, aggregations or postAggregations should be specified. Otherwise no.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"dimension"),(0,i.kt)("td",{parentName:"tr",align:null},"A String or JSON object defining the dimension that you want the top taken for. For more info, see ",(0,i.kt)("a",{parentName:"td",href:"/docs/26.0.0/querying/dimensionspecs"},"DimensionSpecs")),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"threshold"),(0,i.kt)("td",{parentName:"tr",align:null},"An integer defining the N in the topN (i.e. how many results you want in the top list)"),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"metric"),(0,i.kt)("td",{parentName:"tr",align:null},"A String or JSON object specifying the metric to sort by for the top list. For more info, see ",(0,i.kt)("a",{parentName:"td",href:"/docs/26.0.0/querying/topnmetricspec"},"TopNMetricSpec"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"context"),(0,i.kt)("td",{parentName:"tr",align:null},"See ",(0,i.kt)("a",{parentName:"td",href:"/docs/26.0.0/querying/query-context"},"Context")),(0,i.kt)("td",{parentName:"tr",align:null},"no")))),(0,i.kt)("p",null,"Please note the context JSON object is also available for topN queries and should be used with the same caution as the timeseries case.\nThe format of the results would look like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "timestamp": "2013-08-31T00:00:00.000Z",\n    "result": [\n      {\n        "dim1": "dim1_val",\n        "count": 111,\n        "some_metrics": 10669,\n        "average": 96.11711711711712\n      },\n      {\n        "dim1": "another_dim1_val",\n        "count": 88,\n        "some_metrics": 28344,\n        "average": 322.09090909090907\n      },\n      {\n        "dim1": "dim1_val3",\n        "count": 70,\n        "some_metrics": 871,\n        "average": 12.442857142857143\n      },\n      {\n        "dim1": "dim1_val4",\n        "count": 62,\n        "some_metrics": 815,\n        "average": 13.14516129032258\n      },\n      {\n        "dim1": "dim1_val5",\n        "count": 60,\n        "some_metrics": 2787,\n        "average": 46.45\n      }\n    ]\n  }\n]\n')),(0,i.kt)("h2",{id:"behavior-on-multi-value-dimensions"},"Behavior on multi-value dimensions"),(0,i.kt)("p",null,"topN queries can group on multi-value dimensions. When grouping on a multi-value dimension, ",(0,i.kt)("em",{parentName:"p"},"all")," values\nfrom matching rows will be used to generate one group per value. It's possible for a query to return more groups than\nthere are rows. For example, a topN on the dimension ",(0,i.kt)("inlineCode",{parentName:"p"},"tags")," with filter ",(0,i.kt)("inlineCode",{parentName:"p"},'"t1" AND "t3"')," would match only row1, and\ngenerate a result with three groups: ",(0,i.kt)("inlineCode",{parentName:"p"},"t1"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"t2"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"t3"),". If you only need to include values that match\nyour filter, you can use a ",(0,i.kt)("a",{parentName:"p",href:"/docs/26.0.0/querying/dimensionspecs#filtered-dimensionspecs"},"filtered dimensionSpec"),". This can also\nimprove performance."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/26.0.0/querying/multi-value-dimensions"},"Multi-value dimensions")," for more details."),(0,i.kt)("h2",{id:"aliasing"},"Aliasing"),(0,i.kt)("p",null,"The current TopN algorithm is an approximate algorithm. The top 1000 local results from each segment are returned for merging to determine the global topN. As such, the topN algorithm is approximate in both rank and results. Approximate results ",(0,i.kt)("em",{parentName:"p"},"ONLY APPLY WHEN THERE ARE MORE THAN 1000 DIM VALUES"),". A topN over a dimension with fewer than 1000 unique dimension values can be considered accurate in rank and accurate in aggregates."),(0,i.kt)("p",null,"The threshold can be modified from its default 1000 via the server parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.query.topN.minTopNThreshold"),", which needs a restart of the servers to take effect, or via ",(0,i.kt)("inlineCode",{parentName:"p"},"minTopNThreshold")," in the query context, which takes effect per query."),(0,i.kt)("p",null,"If you are wanting the top 100 of a high cardinality, uniformly distributed dimension ordered by some low-cardinality, uniformly distributed dimension, you are potentially going to get aggregates back that are missing data."),(0,i.kt)("p",null,"To put it another way, the best use cases for topN are when you can have confidence that the overall results are uniformly in the top. For example, if a particular site ID is in the top 10 for some metric for every hour of every day, then it will probably be accurate in the topN over multiple days. But if a site is barely in the top 1000 for any given hour, but over the whole query granularity is in the top 500 (example: a site which gets highly uniform traffic co-mingling in the dataset with sites with highly periodic data), then a top500 query may not have that particular site at the exact rank, and may not be accurate for that particular site's aggregates."),(0,i.kt)("p",null,'Before continuing in this section, please consider if you really need exact results. Getting exact results is a very resource intensive process. For the vast majority of "useful" data results, an approximate topN algorithm supplies plenty of accuracy.'),(0,i.kt)("p",null,"Users wishing to get an ",(0,i.kt)("em",{parentName:"p"},"exact rank and exact aggregates")," topN over a dimension with greater than 1000 unique values should issue a groupBy query and sort the results themselves. This is very computationally expensive for high-cardinality dimensions."),(0,i.kt)("p",null,"Users who can tolerate ",(0,i.kt)("em",{parentName:"p"},"approximate rank")," topN over a dimension with greater than 1000 unique values, but require ",(0,i.kt)("em",{parentName:"p"},"exact aggregates")," can issue two queries. One to get the approximate topN dimension values, and another topN with dimension selection filters which only use the topN results of the first."),(0,i.kt)("h3",{id:"example-first-query"},"Example First query"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "aggregations": [\n         {\n             "fieldName": "L_QUANTITY_longSum",\n             "name": "L_QUANTITY_",\n             "type": "longSum"\n         }\n    ],\n    "dataSource": "tpch_year",\n    "dimension":"l_orderkey",\n    "granularity": "all",\n    "intervals": [\n        "1900-01-09T00:00:00.000Z/2992-01-10T00:00:00.000Z"\n    ],\n    "metric": "L_QUANTITY_",\n    "queryType": "topN",\n    "threshold": 2\n}\n')),(0,i.kt)("h3",{id:"example-second-query"},"Example second query"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "aggregations": [\n         {\n             "fieldName": "L_TAX_doubleSum",\n             "name": "L_TAX_",\n             "type": "doubleSum"\n         },\n         {\n             "fieldName": "L_DISCOUNT_doubleSum",\n             "name": "L_DISCOUNT_",\n             "type": "doubleSum"\n         },\n         {\n             "fieldName": "L_EXTENDEDPRICE_doubleSum",\n             "name": "L_EXTENDEDPRICE_",\n             "type": "doubleSum"\n         },\n         {\n             "fieldName": "L_QUANTITY_longSum",\n             "name": "L_QUANTITY_",\n             "type": "longSum"\n         },\n         {\n             "name": "count",\n             "type": "count"\n         }\n    ],\n    "dataSource": "tpch_year",\n    "dimension":"l_orderkey",\n    "filter": {\n        "fields": [\n            {\n                "dimension": "l_orderkey",\n                "type": "selector",\n                "value": "103136"\n            },\n            {\n                "dimension": "l_orderkey",\n                "type": "selector",\n                "value": "1648672"\n            }\n        ],\n        "type": "or"\n    },\n    "granularity": "all",\n    "intervals": [\n        "1900-01-09T00:00:00.000Z/2992-01-10T00:00:00.000Z"\n    ],\n    "metric": "L_QUANTITY_",\n    "queryType": "topN",\n    "threshold": 2\n}\n')))}g.isMDXComponent=!0}}]);
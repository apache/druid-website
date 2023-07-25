"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6557],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},m="mdxType",g={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(t),c=i,d=m["".concat(u,".").concat(c)]||m[c]||g[c]||r;return t?a.createElement(d,l(l({ref:n},p),{},{components:t})):a.createElement(d,l({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=c;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[m]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},25695:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>u,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>m});var a=t(87462),i=t(63366),r=(t(67294),t(3905)),l=["components"],o={id:"granularities",title:"Query granularities",sidebar_label:"Granularities"},u=void 0,s={unversionedId:"querying/granularities",id:"querying/granularities",title:"Query granularities",description:"\x3c!--",source:"@site/docs/latest/querying/granularities.md",sourceDirName:"querying",slug:"/querying/granularities",permalink:"/docs/latest/querying/granularities",draft:!1,tags:[],version:"current",frontMatter:{id:"granularities",title:"Query granularities",sidebar_label:"Granularities"},sidebar:"docs",previous:{title:"Filters",permalink:"/docs/latest/querying/filters"},next:{title:"Dimensions",permalink:"/docs/latest/querying/dimensionspecs"}},p={},m=[{value:"Simple Granularities",id:"simple-granularities",level:3},{value:"Example:",id:"example",level:4},{value:"Duration Granularities",id:"duration-granularities",level:3},{value:"Example:",id:"example-1",level:4},{value:"Period Granularities",id:"period-granularities",level:3},{value:"Example",id:"example-2",level:4},{value:"Supported Time Zones",id:"supported-time-zones",level:4}],g={toc:m},c="wrapper";function d(e){var n=e.components,t=(0,i.Z)(e,l);return(0,r.kt)(c,(0,a.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Apache Druid supports two query languages: ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/querying/sql"},"Druid SQL")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/querying/"},"native queries"),".\nThis document describes the native\nlanguage. For information about time functions available in SQL, refer to the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/querying/sql-scalar#date-and-time-functions"},"SQL documentation"),".")),(0,r.kt)("p",null,"Granularity determines how to bucket data across the time dimension, or how to aggregate data by hour, day, minute, etc."),(0,r.kt)("p",null,"For example, use time granularities in ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/querying/"},"native queries")," to bucket results by time, and in the ",(0,r.kt)("inlineCode",{parentName:"p"},"dataSchema")," ","\\"," ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/ingestion/ingestion-spec#granularityspec"},(0,r.kt)("inlineCode",{parentName:"a"},"granularitySpec"))," section of ingestion specifications to segment incoming data."),(0,r.kt)("p",null,"You can specify a time period as a ",(0,r.kt)("a",{parentName:"p",href:"#simple-granularities"},"simple")," string, as a ",(0,r.kt)("a",{parentName:"p",href:"#duration-granularities"},"duration")," in milliseconds, or as an arbitrary ISO8601 ",(0,r.kt)("a",{parentName:"p",href:"#period-granularities"},"period"),"."),(0,r.kt)("h3",{id:"simple-granularities"},"Simple Granularities"),(0,r.kt)("p",null,"Simple granularities are specified as a string and bucket timestamps by their UTC time (e.g., days start at 00:00 UTC)."),(0,r.kt)("p",null,"Druid supports the following granularity strings: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"all")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"none")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"second")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"minute")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"five_minute")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ten_minute")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fifteen_minute")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"thirty_minute")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hour")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"six_hour")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"eight_hour")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"day")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"week")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"month")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"quarter")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"year"))),(0,r.kt)("p",null,"The minimum and maximum granularities are ",(0,r.kt)("inlineCode",{parentName:"p"},"none")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"all"),", described as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"all")," buckets everything into a single bucket."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"none")," does not mean zero bucketing. It buckets data to millisecond granularity\u2014the granularity of the internal index. You can think of ",(0,r.kt)("inlineCode",{parentName:"li"},"none")," as equivalent to ",(0,r.kt)("inlineCode",{parentName:"li"},"millisecond"),".",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"Do not use ",(0,r.kt)("inlineCode",{parentName:"p"},"none")," in a ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/querying/timeseriesquery"},"timeseries query"),"; Druid fills empty interior time buckets with zeroes, meaning the output will contain results for every single millisecond in the requested interval.")))),(0,r.kt)("h4",{id:"example"},"Example:"),(0,r.kt)("p",null,"Suppose you have data below stored in Apache Druid with millisecond ingestion granularity,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"timestamp": "2013-08-31T01:02:33Z", "page": "AAA", "language" : "en"}\n{"timestamp": "2013-09-01T01:02:33Z", "page": "BBB", "language" : "en"}\n{"timestamp": "2013-09-02T23:32:45Z", "page": "CCC", "language" : "en"}\n{"timestamp": "2013-09-03T03:32:45Z", "page": "DDD", "language" : "en"}\n')),(0,r.kt)("p",null,"After submitting a groupBy query with ",(0,r.kt)("inlineCode",{parentName:"p"},"hour")," granularity,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "queryType":"groupBy",\n   "dataSource":"my_dataSource",\n   "granularity":"hour",\n   "dimensions":[\n      "language"\n   ],\n   "aggregations":[\n      {\n         "type":"count",\n         "name":"count"\n      }\n   ],\n   "intervals":[\n      "2000-01-01T00:00Z/3000-01-01T00:00Z"\n   ]\n}\n')),(0,r.kt)("p",null,"you will get"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[ {\n  "version" : "v1",\n  "timestamp" : "2013-08-31T01:00:00.000Z",\n  "event" : {\n    "count" : 1,\n    "language" : "en"\n  }\n}, {\n  "version" : "v1",\n  "timestamp" : "2013-09-01T01:00:00.000Z",\n  "event" : {\n    "count" : 1,\n    "language" : "en"\n  }\n}, {\n  "version" : "v1",\n  "timestamp" : "2013-09-02T23:00:00.000Z",\n  "event" : {\n    "count" : 1,\n    "language" : "en"\n  }\n}, {\n  "version" : "v1",\n  "timestamp" : "2013-09-03T03:00:00.000Z",\n  "event" : {\n    "count" : 1,\n    "language" : "en"\n  }\n} ]\n')),(0,r.kt)("p",null,"Note that all the empty buckets are discarded."),(0,r.kt)("p",null,"If you change the granularity to ",(0,r.kt)("inlineCode",{parentName:"p"},"day"),", you will get"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[ {\n  "version" : "v1",\n  "timestamp" : "2013-08-31T00:00:00.000Z",\n  "event" : {\n    "count" : 1,\n    "language" : "en"\n  }\n}, {\n  "version" : "v1",\n  "timestamp" : "2013-09-01T00:00:00.000Z",\n  "event" : {\n    "count" : 1,\n    "language" : "en"\n  }\n}, {\n  "version" : "v1",\n  "timestamp" : "2013-09-02T00:00:00.000Z",\n  "event" : {\n    "count" : 1,\n    "language" : "en"\n  }\n}, {\n  "version" : "v1",\n  "timestamp" : "2013-09-03T00:00:00.000Z",\n  "event" : {\n    "count" : 1,\n    "language" : "en"\n  }\n} ]\n')),(0,r.kt)("p",null,"If you change the granularity to ",(0,r.kt)("inlineCode",{parentName:"p"},"none"),", you will get the same results as setting it to the ingestion granularity."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[ {\n  "version" : "v1",\n  "timestamp" : "2013-08-31T01:02:33.000Z",\n  "event" : {\n    "count" : 1,\n    "language" : "en"\n  }\n}, {\n  "version" : "v1",\n  "timestamp" : "2013-09-01T01:02:33.000Z",\n  "event" : {\n    "count" : 1,\n    "language" : "en"\n  }\n}, {\n  "version" : "v1",\n  "timestamp" : "2013-09-02T23:32:45.000Z",\n  "event" : {\n    "count" : 1,\n    "language" : "en"\n  }\n}, {\n  "version" : "v1",\n  "timestamp" : "2013-09-03T03:32:45.000Z",\n  "event" : {\n    "count" : 1,\n    "language" : "en"\n  }\n} ]\n')),(0,r.kt)("p",null,"Having a query time ",(0,r.kt)("inlineCode",{parentName:"p"},"granularity")," that is smaller than the ",(0,r.kt)("inlineCode",{parentName:"p"},"queryGranularity")," parameter set at\n",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/ingestion/ingestion-spec#granularityspec"},"ingestion time")," is unreasonable because information about that\nsmaller granularity is not present in the indexed data. So, if the query time granularity is smaller than the ingestion\ntime query granularity, Druid produces results that are equivalent to having set ",(0,r.kt)("inlineCode",{parentName:"p"},"granularity")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"queryGranularity"),"."),(0,r.kt)("p",null,"If you change the granularity to ",(0,r.kt)("inlineCode",{parentName:"p"},"all"),", you will get everything aggregated in 1 bucket,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[ {\n  "version" : "v1",\n  "timestamp" : "2000-01-01T00:00:00.000Z",\n  "event" : {\n    "count" : 4,\n    "language" : "en"\n  }\n} ]\n')),(0,r.kt)("h3",{id:"duration-granularities"},"Duration Granularities"),(0,r.kt)("p",null,"Duration granularities are specified as an exact duration in milliseconds and timestamps are returned as UTC. Duration granularity values are in millis."),(0,r.kt)("p",null,"They also support specifying an optional origin, which defines where to start counting time buckets from (defaults to 1970-01-01T00:00:00Z)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{"type": "duration", "duration": 7200000}\n')),(0,r.kt)("p",null,"This chunks up every 2 hours."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{"type": "duration", "duration": 3600000, "origin": "2012-01-01T00:30:00Z"}\n')),(0,r.kt)("p",null,"This chunks up every hour on the half-hour."),(0,r.kt)("h4",{id:"example-1"},"Example:"),(0,r.kt)("p",null,"Reusing the data in the previous example, after submitting a groupBy query with 24 hours duration,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "queryType":"groupBy",\n   "dataSource":"my_dataSource",\n   "granularity":{"type": "duration", "duration": "86400000"},\n   "dimensions":[\n      "language"\n   ],\n   "aggregations":[\n      {\n         "type":"count",\n         "name":"count"\n      }\n   ],\n   "intervals":[\n      "2000-01-01T00:00Z/3000-01-01T00:00Z"\n   ]\n}\n')),(0,r.kt)("p",null,"you will get"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[ {\n  "version" : "v1",\n  "timestamp" : "2013-08-31T00:00:00.000Z",\n  "event" : {\n    "count" : 1,\n    "language" : "en"\n  }\n}, {\n  "version" : "v1",\n  "timestamp" : "2013-09-01T00:00:00.000Z",\n  "event" : {\n    "count" : 1,\n    "language" : "en"\n  }\n}, {\n  "version" : "v1",\n  "timestamp" : "2013-09-02T00:00:00.000Z",\n  "event" : {\n    "count" : 1,\n    "language" : "en"\n  }\n}, {\n  "version" : "v1",\n  "timestamp" : "2013-09-03T00:00:00.000Z",\n  "event" : {\n    "count" : 1,\n    "language" : "en"\n  }\n} ]\n')),(0,r.kt)("p",null,"if you set the origin for the granularity to ",(0,r.kt)("inlineCode",{parentName:"p"},"2012-01-01T00:30:00Z"),","),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'   "granularity":{"type": "duration", "duration": "86400000", "origin":"2012-01-01T00:30:00Z"}\n')),(0,r.kt)("p",null,"you will get"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[ {\n  "version" : "v1",\n  "timestamp" : "2013-08-31T00:30:00.000Z",\n  "event" : {\n    "count" : 1,\n    "language" : "en"\n  }\n}, {\n  "version" : "v1",\n  "timestamp" : "2013-09-01T00:30:00.000Z",\n  "event" : {\n    "count" : 1,\n    "language" : "en"\n  }\n}, {\n  "version" : "v1",\n  "timestamp" : "2013-09-02T00:30:00.000Z",\n  "event" : {\n    "count" : 1,\n    "language" : "en"\n  }\n}, {\n  "version" : "v1",\n  "timestamp" : "2013-09-03T00:30:00.000Z",\n  "event" : {\n    "count" : 1,\n    "language" : "en"\n  }\n} ]\n')),(0,r.kt)("p",null,"Note that the timestamp for each bucket starts at the 30th minute."),(0,r.kt)("h3",{id:"period-granularities"},"Period Granularities"),(0,r.kt)("p",null,"Period granularities are specified as arbitrary period combinations of years, months, weeks, hours, minutes and seconds (e.g. P2W, P3M, PT1H30M, PT0.750S) in ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/ISO_8601"},"ISO8601")," format. They support specifying a time zone which determines where period boundaries start as well as the timezone of the returned timestamps. By default, years start on the first of January, months start on the first of the month and weeks start on Mondays unless an origin is specified."),(0,r.kt)("p",null,"Time zone is optional (defaults to UTC). Origin is optional (defaults to 1970-01-01T00:00:00 in the given time zone)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{"type": "period", "period": "P2D", "timeZone": "America/Los_Angeles"}\n')),(0,r.kt)("p",null,"This will bucket by two-day chunks in the Pacific timezone."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{"type": "period", "period": "P3M", "timeZone": "America/Los_Angeles", "origin": "2012-02-01T00:00:00-08:00"}\n')),(0,r.kt)("p",null,"This will bucket by 3-month chunks in the Pacific timezone where the three-month quarters are defined as starting from February."),(0,r.kt)("h4",{id:"example-2"},"Example"),(0,r.kt)("p",null,"Reusing the data in the previous example, if you submit a groupBy query with 1 day period in Pacific timezone,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "queryType":"groupBy",\n   "dataSource":"my_dataSource",\n   "granularity":{"type": "period", "period": "P1D", "timeZone": "America/Los_Angeles"},\n   "dimensions":[\n      "language"\n   ],\n   "aggregations":[\n      {\n         "type":"count",\n         "name":"count"\n      }\n   ],\n   "intervals":[\n      "1999-12-31T16:00:00.000-08:00/2999-12-31T16:00:00.000-08:00"\n   ]\n}\n')),(0,r.kt)("p",null,"you will get"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[ {\n  "version" : "v1",\n  "timestamp" : "2013-08-30T00:00:00.000-07:00",\n  "event" : {\n    "count" : 1,\n    "language" : "en"\n  }\n}, {\n  "version" : "v1",\n  "timestamp" : "2013-08-31T00:00:00.000-07:00",\n  "event" : {\n    "count" : 1,\n    "language" : "en"\n  }\n}, {\n  "version" : "v1",\n  "timestamp" : "2013-09-02T00:00:00.000-07:00",\n  "event" : {\n    "count" : 2,\n    "language" : "en"\n  }\n} ]\n')),(0,r.kt)("p",null,"Note that the timestamp for each bucket has been converted to Pacific time. Row ",(0,r.kt)("inlineCode",{parentName:"p"},'{"timestamp": "2013-09-02T23:32:45Z", "page": "CCC", "language" : "en"}')," and\n",(0,r.kt)("inlineCode",{parentName:"p"},'{"timestamp": "2013-09-03T03:32:45Z", "page": "DDD", "language" : "en"}')," are put in the same bucket because they are in the same day in Pacific time."),(0,r.kt)("p",null,"Also note that the ",(0,r.kt)("inlineCode",{parentName:"p"},"intervals")," in groupBy query will not be converted to the timezone specified, the timezone specified in granularity is only applied on the\nquery results."),(0,r.kt)("p",null,"If you set the origin for the granularity to ",(0,r.kt)("inlineCode",{parentName:"p"},"1970-01-01T20:30:00-08:00"),","),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'   "granularity":{"type": "period", "period": "P1D", "timeZone": "America/Los_Angeles", "origin": "1970-01-01T20:30:00-08:00"}\n')),(0,r.kt)("p",null,"you will get"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[ {\n  "version" : "v1",\n  "timestamp" : "2013-08-29T20:30:00.000-07:00",\n  "event" : {\n    "count" : 1,\n    "language" : "en"\n  }\n}, {\n  "version" : "v1",\n  "timestamp" : "2013-08-30T20:30:00.000-07:00",\n  "event" : {\n    "count" : 1,\n    "language" : "en"\n  }\n}, {\n  "version" : "v1",\n  "timestamp" : "2013-09-01T20:30:00.000-07:00",\n  "event" : {\n    "count" : 1,\n    "language" : "en"\n  }\n}, {\n  "version" : "v1",\n  "timestamp" : "2013-09-02T20:30:00.000-07:00",\n  "event" : {\n    "count" : 1,\n    "language" : "en"\n  }\n} ]\n')),(0,r.kt)("p",null,"Note that the ",(0,r.kt)("inlineCode",{parentName:"p"},"origin")," you specified has nothing to do with the timezone, it only serves as a starting point for locating the very first granularity bucket.\nIn this case, Row ",(0,r.kt)("inlineCode",{parentName:"p"},'{"timestamp": "2013-09-02T23:32:45Z", "page": "CCC", "language" : "en"}')," and ",(0,r.kt)("inlineCode",{parentName:"p"},'{"timestamp": "2013-09-03T03:32:45Z", "page": "DDD", "language" : "en"}'),"\nare not in the same bucket."),(0,r.kt)("h4",{id:"supported-time-zones"},"Supported Time Zones"),(0,r.kt)("p",null,"Timezone support is provided by the ",(0,r.kt)("a",{parentName:"p",href:"http://www.joda.org"},"Joda Time library"),", which uses the standard IANA time zones. See the ",(0,r.kt)("a",{parentName:"p",href:"http://joda-time.sourceforge.net/timezones.html"},"Joda Time supported timezones"),"."))}d.isMDXComponent=!0}}]);
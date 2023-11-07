"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9579],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=i,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return n?a.createElement(g,r(r({ref:t},u),{},{components:n})):a.createElement(g,r({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},11397:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=["components"],l={id:"tutorial-ingestion-spec",title:"Write an ingestion spec",sidebar_label:"Write an ingestion spec"},s=void 0,p={unversionedId:"tutorials/tutorial-ingestion-spec",id:"tutorials/tutorial-ingestion-spec",title:"Write an ingestion spec",description:"\x3c!--",source:"@site/docs/28.0.0/tutorials/tutorial-ingestion-spec.md",sourceDirName:"tutorials",slug:"/tutorials/tutorial-ingestion-spec",permalink:"/docs/28.0.0/tutorials/tutorial-ingestion-spec",draft:!1,tags:[],version:"current",frontMatter:{id:"tutorial-ingestion-spec",title:"Write an ingestion spec",sidebar_label:"Write an ingestion spec"},sidebar:"docs",previous:{title:"Deleting data",permalink:"/docs/28.0.0/tutorials/tutorial-delete-data"},next:{title:"Transform input data",permalink:"/docs/28.0.0/tutorials/tutorial-transform-spec"}},u={},c=[{value:"Example data",id:"example-data",level:2},{value:"Defining the schema",id:"defining-the-schema",level:2},{value:"Datasource name",id:"datasource-name",level:3},{value:"Time column",id:"time-column",level:3},{value:"Column types",id:"column-types",level:3},{value:"Rollup",id:"rollup",level:3},{value:"Choosing dimensions and metrics",id:"choosing-dimensions-and-metrics",level:4},{value:"Dimensions",id:"dimensions",level:4},{value:"Strings vs. Numerics",id:"strings-vs-numerics",level:5},{value:"Metrics",id:"metrics",level:4},{value:"No rollup",id:"no-rollup",level:3},{value:"Define granularities",id:"define-granularities",level:3},{value:"Segment granularity",id:"segment-granularity",level:4},{value:"Query granularity",id:"query-granularity",level:4},{value:"Define an interval (batch only)",id:"define-an-interval-batch-only",level:4},{value:"Define the task type",id:"define-the-task-type",level:2},{value:"Define the input source",id:"define-the-input-source",level:2},{value:"Define the format of the data",id:"define-the-format-of-the-data",level:3},{value:"Additional tuning",id:"additional-tuning",level:2},{value:"Final spec",id:"final-spec",level:2},{value:"Submit the task and query the data",id:"submit-the-task-and-query-the-data",level:2}],m={toc:c},d="wrapper";function g(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This tutorial will guide the reader through the process of defining an ingestion spec, pointing out key considerations and guidelines."),(0,o.kt)("p",null,"For this tutorial, we'll assume you've already downloaded Apache Druid as described in\nthe ",(0,o.kt)("a",{parentName:"p",href:"/docs/28.0.0/tutorials/"},"single-machine quickstart")," and have it running on your local machine."),(0,o.kt)("p",null,"It will also be helpful to have finished ",(0,o.kt)("a",{parentName:"p",href:"/docs/28.0.0/tutorials/tutorial-batch"},"Tutorial: Loading a file"),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/28.0.0/tutorials/tutorial-query"},"Tutorial: Querying data"),", and ",(0,o.kt)("a",{parentName:"p",href:"/docs/28.0.0/tutorials/tutorial-rollup"},"Tutorial: Rollup"),"."),(0,o.kt)("h2",{id:"example-data"},"Example data"),(0,o.kt)("p",null,"Suppose we have the following network flow data:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"srcIP"),": IP address of sender"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"srcPort"),": Port of sender"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"dstIP"),": IP address of receiver"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"dstPort"),": Port of receiver"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"protocol"),": IP protocol number"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"packets"),": number of packets transmitted"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bytes"),": number of bytes transmitted"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"cost"),": the cost of sending the traffic")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{"ts":"2018-01-01T01:01:35Z","srcIP":"1.1.1.1", "dstIP":"2.2.2.2", "srcPort":2000, "dstPort":3000, "protocol": 6, "packets":10, "bytes":1000, "cost": 1.4}\n{"ts":"2018-01-01T01:01:51Z","srcIP":"1.1.1.1", "dstIP":"2.2.2.2", "srcPort":2000, "dstPort":3000, "protocol": 6, "packets":20, "bytes":2000, "cost": 3.1}\n{"ts":"2018-01-01T01:01:59Z","srcIP":"1.1.1.1", "dstIP":"2.2.2.2", "srcPort":2000, "dstPort":3000, "protocol": 6, "packets":30, "bytes":3000, "cost": 0.4}\n{"ts":"2018-01-01T01:02:14Z","srcIP":"1.1.1.1", "dstIP":"2.2.2.2", "srcPort":5000, "dstPort":7000, "protocol": 6, "packets":40, "bytes":4000, "cost": 7.9}\n{"ts":"2018-01-01T01:02:29Z","srcIP":"1.1.1.1", "dstIP":"2.2.2.2", "srcPort":5000, "dstPort":7000, "protocol": 6, "packets":50, "bytes":5000, "cost": 10.2}\n{"ts":"2018-01-01T01:03:29Z","srcIP":"1.1.1.1", "dstIP":"2.2.2.2", "srcPort":5000, "dstPort":7000, "protocol": 6, "packets":60, "bytes":6000, "cost": 4.3}\n{"ts":"2018-01-01T02:33:14Z","srcIP":"7.7.7.7", "dstIP":"8.8.8.8", "srcPort":4000, "dstPort":5000, "protocol": 17, "packets":100, "bytes":10000, "cost": 22.4}\n{"ts":"2018-01-01T02:33:45Z","srcIP":"7.7.7.7", "dstIP":"8.8.8.8", "srcPort":4000, "dstPort":5000, "protocol": 17, "packets":200, "bytes":20000, "cost": 34.5}\n{"ts":"2018-01-01T02:35:45Z","srcIP":"7.7.7.7", "dstIP":"8.8.8.8", "srcPort":4000, "dstPort":5000, "protocol": 17, "packets":300, "bytes":30000, "cost": 46.3}\n')),(0,o.kt)("p",null,"Save the JSON contents above into a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"ingestion-tutorial-data.json")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"quickstart/"),"."),(0,o.kt)("p",null,"Let's walk through the process of defining an ingestion spec that can load this data."),(0,o.kt)("p",null,"For this tutorial, we will be using the native batch indexing task. When using other task types, some aspects of the ingestion spec will differ, and this tutorial will point out such areas."),(0,o.kt)("h2",{id:"defining-the-schema"},"Defining the schema"),(0,o.kt)("p",null,"The core element of a Druid ingestion spec is the ",(0,o.kt)("inlineCode",{parentName:"p"},"dataSchema"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"dataSchema")," defines how to parse input data into a set of columns that will be stored in Druid."),(0,o.kt)("p",null,"Let's start with an empty ",(0,o.kt)("inlineCode",{parentName:"p"},"dataSchema")," and add fields to it as we progress through the tutorial."),(0,o.kt)("p",null,"Create a new file called ",(0,o.kt)("inlineCode",{parentName:"p"},"ingestion-tutorial-index.json")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"quickstart/")," with the following contents:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"dataSchema" : {}\n')),(0,o.kt)("p",null,"We will be making successive edits to this ingestion spec as we progress through the tutorial."),(0,o.kt)("h3",{id:"datasource-name"},"Datasource name"),(0,o.kt)("p",null,"The datasource name is specified by the ",(0,o.kt)("inlineCode",{parentName:"p"},"dataSource")," parameter in the ",(0,o.kt)("inlineCode",{parentName:"p"},"dataSchema"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"dataSchema" : {\n  "dataSource" : "ingestion-tutorial",\n}\n')),(0,o.kt)("p",null,"Let's call the tutorial datasource ",(0,o.kt)("inlineCode",{parentName:"p"},"ingestion-tutorial"),"."),(0,o.kt)("h3",{id:"time-column"},"Time column"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"dataSchema")," needs to know how to extract the main timestamp field from the input data."),(0,o.kt)("p",null,'The timestamp column in our input data is named "ts", containing ISO 8601 timestamps, so let\'s add a ',(0,o.kt)("inlineCode",{parentName:"p"},"timestampSpec")," with that information to the ",(0,o.kt)("inlineCode",{parentName:"p"},"dataSchema"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"dataSchema" : {\n  "dataSource" : "ingestion-tutorial",\n  "timestampSpec" : {\n    "format" : "iso",\n    "column" : "ts"\n  }\n}\n')),(0,o.kt)("h3",{id:"column-types"},"Column types"),(0,o.kt)("p",null,"Now that we've defined the time column, let's look at definitions for other columns."),(0,o.kt)("p",null,"Druid supports the following column types: String, Long, Float, Double. We will see how these are used in the following sections."),(0,o.kt)("p",null,"Before we move on to how we define our other non-time columns, let's discuss ",(0,o.kt)("inlineCode",{parentName:"p"},"rollup")," first."),(0,o.kt)("h3",{id:"rollup"},"Rollup"),(0,o.kt)("p",null,"When ingesting data, we must consider whether we wish to use rollup or not."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'If rollup is enabled, we will need to separate the input columns into two categories, "dimensions" and "metrics". "Dimensions" are the grouping columns for rollup, while "metrics" are the columns that will be aggregated.')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'If rollup is disabled, then all columns are treated as "dimensions" and no pre-aggregation occurs.'))),(0,o.kt)("p",null,"For this tutorial, let's enable rollup. This is specified with a ",(0,o.kt)("inlineCode",{parentName:"p"},"granularitySpec")," on the ",(0,o.kt)("inlineCode",{parentName:"p"},"dataSchema"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"dataSchema" : {\n  "dataSource" : "ingestion-tutorial",\n  "timestampSpec" : {\n    "format" : "iso",\n    "column" : "ts"\n  },\n  "granularitySpec" : {\n    "rollup" : true\n  }\n}\n')),(0,o.kt)("h4",{id:"choosing-dimensions-and-metrics"},"Choosing dimensions and metrics"),(0,o.kt)("p",null,'For this example dataset, the following is a sensible split for "dimensions" and "metrics":'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Dimensions: srcIP, srcPort, dstIP, dstPort, protocol"),(0,o.kt)("li",{parentName:"ul"},"Metrics: packets, bytes, cost")),(0,o.kt)("p",null,"The dimensions here are a group of properties that identify a unidirectional flow of IP traffic, while the metrics represent facts about the IP traffic flow specified by a dimension grouping."),(0,o.kt)("p",null,"Let's look at how to define these dimensions and metrics within the ingestion spec."),(0,o.kt)("h4",{id:"dimensions"},"Dimensions"),(0,o.kt)("p",null,"Dimensions are specified with a ",(0,o.kt)("inlineCode",{parentName:"p"},"dimensionsSpec")," inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"dataSchema"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"dataSchema" : {\n  "dataSource" : "ingestion-tutorial",\n  "timestampSpec" : {\n    "format" : "iso",\n    "column" : "ts"\n  },\n  "dimensionsSpec" : {\n    "dimensions": [\n      "srcIP",\n      { "name" : "srcPort", "type" : "long" },\n      { "name" : "dstIP", "type" : "string" },\n      { "name" : "dstPort", "type" : "long" },\n      { "name" : "protocol", "type" : "string" }\n    ]\n  },\n  "granularitySpec" : {\n    "rollup" : true\n  }\n}\n')),(0,o.kt)("p",null,"Each dimension has a ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," and a ",(0,o.kt)("inlineCode",{parentName:"p"},"type"),", where ",(0,o.kt)("inlineCode",{parentName:"p"},"type"),' can be "long", "float", "double", or "string".'),(0,o.kt)("p",null,"Note that ",(0,o.kt)("inlineCode",{parentName:"p"},"srcIP"),' is a "string" dimension; for string dimensions, it is enough to specify just a dimension name, since "string" is the default dimension type.'),(0,o.kt)("p",null,"Also note that ",(0,o.kt)("inlineCode",{parentName:"p"},"protocol"),' is a numeric value in the input data, but we are ingesting it as a "string" column; Druid will coerce the input longs to strings during ingestion.'),(0,o.kt)("h5",{id:"strings-vs-numerics"},"Strings vs. Numerics"),(0,o.kt)("p",null,"Should a numeric input be ingested as a numeric dimension or as a string dimension?"),(0,o.kt)("p",null,"Numeric dimensions have the following pros/cons relative to String dimensions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Pros: Numeric representation can result in smaller column sizes on disk and lower processing overhead when reading values from the column"),(0,o.kt)("li",{parentName:"ul"},"Cons: Numeric dimensions do not have indices, so filtering on them will often be slower than filtering on an equivalent String dimension (which has bitmap indices)")),(0,o.kt)("h4",{id:"metrics"},"Metrics"),(0,o.kt)("p",null,"Metrics are specified with a ",(0,o.kt)("inlineCode",{parentName:"p"},"metricsSpec")," inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"dataSchema"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"dataSchema" : {\n  "dataSource" : "ingestion-tutorial",\n  "timestampSpec" : {\n    "format" : "iso",\n    "column" : "ts"\n  },\n  "dimensionsSpec" : {\n    "dimensions": [\n      "srcIP",\n      { "name" : "srcPort", "type" : "long" },\n      { "name" : "dstIP", "type" : "string" },\n      { "name" : "dstPort", "type" : "long" },\n      { "name" : "protocol", "type" : "string" }\n    ]\n  },\n  "metricsSpec" : [\n    { "type" : "count", "name" : "count" },\n    { "type" : "longSum", "name" : "packets", "fieldName" : "packets" },\n    { "type" : "longSum", "name" : "bytes", "fieldName" : "bytes" },\n    { "type" : "doubleSum", "name" : "cost", "fieldName" : "cost" }\n  ],\n  "granularitySpec" : {\n    "rollup" : true\n  }\n}\n')),(0,o.kt)("p",null,"When defining a metric, it is necessary to specify what type of aggregation should be performed on that column during rollup."),(0,o.kt)("p",null,"Here we have defined long sum aggregations on the two long metric columns, ",(0,o.kt)("inlineCode",{parentName:"p"},"packets")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"bytes"),", and a double sum aggregation for the ",(0,o.kt)("inlineCode",{parentName:"p"},"cost")," column."),(0,o.kt)("p",null,"Note that the ",(0,o.kt)("inlineCode",{parentName:"p"},"metricsSpec")," is on a different nesting level than ",(0,o.kt)("inlineCode",{parentName:"p"},"dimensionSpec")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"parseSpec"),"; it belongs on the same nesting level as ",(0,o.kt)("inlineCode",{parentName:"p"},"parser")," within the ",(0,o.kt)("inlineCode",{parentName:"p"},"dataSchema"),"."),(0,o.kt)("p",null,"Note that we have also defined a ",(0,o.kt)("inlineCode",{parentName:"p"},"count"),' aggregator. The count aggregator will track how many rows in the original input data contributed to a "rolled up" row in the final ingested data.'),(0,o.kt)("h3",{id:"no-rollup"},"No rollup"),(0,o.kt)("p",null,"If we were not using rollup, all columns would be specified in the ",(0,o.kt)("inlineCode",{parentName:"p"},"dimensionsSpec"),", e.g.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'      "dimensionsSpec" : {\n        "dimensions": [\n          "srcIP",\n          { "name" : "srcPort", "type" : "long" },\n          { "name" : "dstIP", "type" : "string" },\n          { "name" : "dstPort", "type" : "long" },\n          { "name" : "protocol", "type" : "string" },\n          { "name" : "packets", "type" : "long" },\n          { "name" : "bytes", "type" : "long" },\n          { "name" : "srcPort", "type" : "double" }\n        ]\n      },\n')),(0,o.kt)("h3",{id:"define-granularities"},"Define granularities"),(0,o.kt)("p",null,"At this point, we are done defining the ",(0,o.kt)("inlineCode",{parentName:"p"},"parser")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"metricsSpec")," within the ",(0,o.kt)("inlineCode",{parentName:"p"},"dataSchema")," and we are almost done writing the ingestion spec."),(0,o.kt)("p",null,"There are some additional properties we need to set in the ",(0,o.kt)("inlineCode",{parentName:"p"},"granularitySpec"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Type of granularitySpec: the ",(0,o.kt)("inlineCode",{parentName:"li"},"uniform")," granularity spec defines segments with uniform interval sizes. For example, all segments cover an hour's worth of data."),(0,o.kt)("li",{parentName:"ul"},"The segment granularity: what size of time interval should a single segment contain data for? e.g., ",(0,o.kt)("inlineCode",{parentName:"li"},"DAY"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"WEEK")),(0,o.kt)("li",{parentName:"ul"},"The bucketing granularity of the timestamps in the time column (referred to as ",(0,o.kt)("inlineCode",{parentName:"li"},"queryGranularity"),")")),(0,o.kt)("h4",{id:"segment-granularity"},"Segment granularity"),(0,o.kt)("p",null,"Segment granularity is configured by the ",(0,o.kt)("inlineCode",{parentName:"p"},"segmentGranularity")," property in the ",(0,o.kt)("inlineCode",{parentName:"p"},"granularitySpec"),". For this tutorial, we'll create hourly segments:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"dataSchema" : {\n  "dataSource" : "ingestion-tutorial",\n  "timestampSpec" : {\n    "format" : "iso",\n    "column" : "ts"\n  },\n  "dimensionsSpec" : {\n    "dimensions": [\n      "srcIP",\n      { "name" : "srcPort", "type" : "long" },\n      { "name" : "dstIP", "type" : "string" },\n      { "name" : "dstPort", "type" : "long" },\n      { "name" : "protocol", "type" : "string" }\n    ]\n  },\n  "metricsSpec" : [\n    { "type" : "count", "name" : "count" },\n    { "type" : "longSum", "name" : "packets", "fieldName" : "packets" },\n    { "type" : "longSum", "name" : "bytes", "fieldName" : "bytes" },\n    { "type" : "doubleSum", "name" : "cost", "fieldName" : "cost" }\n  ],\n  "granularitySpec" : {\n    "type" : "uniform",\n    "segmentGranularity" : "HOUR",\n    "rollup" : true\n  }\n}\n')),(0,o.kt)("p",null,"Our input data has events from two separate hours, so this task will generate two segments."),(0,o.kt)("h4",{id:"query-granularity"},"Query granularity"),(0,o.kt)("p",null,"The query granularity is configured by the ",(0,o.kt)("inlineCode",{parentName:"p"},"queryGranularity")," property in the ",(0,o.kt)("inlineCode",{parentName:"p"},"granularitySpec"),". For this tutorial, let's use minute granularity:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"dataSchema" : {\n  "dataSource" : "ingestion-tutorial",\n  "timestampSpec" : {\n    "format" : "iso",\n    "column" : "ts"\n  },\n  "dimensionsSpec" : {\n    "dimensions": [\n      "srcIP",\n      { "name" : "srcPort", "type" : "long" },\n      { "name" : "dstIP", "type" : "string" },\n      { "name" : "dstPort", "type" : "long" },\n      { "name" : "protocol", "type" : "string" }\n    ]\n  },\n  "metricsSpec" : [\n    { "type" : "count", "name" : "count" },\n    { "type" : "longSum", "name" : "packets", "fieldName" : "packets" },\n    { "type" : "longSum", "name" : "bytes", "fieldName" : "bytes" },\n    { "type" : "doubleSum", "name" : "cost", "fieldName" : "cost" }\n  ],\n  "granularitySpec" : {\n    "type" : "uniform",\n    "segmentGranularity" : "HOUR",\n    "queryGranularity" : "MINUTE",\n    "rollup" : true\n  }\n}\n')),(0,o.kt)("p",null,"To see the effect of the query granularity, let's look at this row from the raw input data:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{"ts":"2018-01-01T01:03:29Z","srcIP":"1.1.1.1", "dstIP":"2.2.2.2", "srcPort":5000, "dstPort":7000, "protocol": 6, "packets":60, "bytes":6000, "cost": 4.3}\n')),(0,o.kt)("p",null,"When this row is ingested with minute queryGranularity, Druid will floor the row's timestamp to minute buckets:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{"ts":"2018-01-01T01:03:00Z","srcIP":"1.1.1.1", "dstIP":"2.2.2.2", "srcPort":5000, "dstPort":7000, "protocol": 6, "packets":60, "bytes":6000, "cost": 4.3}\n')),(0,o.kt)("h4",{id:"define-an-interval-batch-only"},"Define an interval (batch only)"),(0,o.kt)("p",null,"For batch tasks, it is necessary to define a time interval. Input rows with timestamps outside of the time interval will not be ingested."),(0,o.kt)("p",null,"The interval is also specified in the ",(0,o.kt)("inlineCode",{parentName:"p"},"granularitySpec"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"dataSchema" : {\n  "dataSource" : "ingestion-tutorial",\n  "timestampSpec" : {\n    "format" : "iso",\n    "column" : "ts"\n  },\n  "dimensionsSpec" : {\n    "dimensions": [\n      "srcIP",\n      { "name" : "srcPort", "type" : "long" },\n      { "name" : "dstIP", "type" : "string" },\n      { "name" : "dstPort", "type" : "long" },\n      { "name" : "protocol", "type" : "string" }\n    ]\n  },\n  "metricsSpec" : [\n    { "type" : "count", "name" : "count" },\n    { "type" : "longSum", "name" : "packets", "fieldName" : "packets" },\n    { "type" : "longSum", "name" : "bytes", "fieldName" : "bytes" },\n    { "type" : "doubleSum", "name" : "cost", "fieldName" : "cost" }\n  ],\n  "granularitySpec" : {\n    "type" : "uniform",\n    "segmentGranularity" : "HOUR",\n    "queryGranularity" : "MINUTE",\n    "intervals" : ["2018-01-01/2018-01-02"],\n    "rollup" : true\n  }\n}\n')),(0,o.kt)("h2",{id:"define-the-task-type"},"Define the task type"),(0,o.kt)("p",null,"We've now finished defining our ",(0,o.kt)("inlineCode",{parentName:"p"},"dataSchema"),". The remaining steps are to place the ",(0,o.kt)("inlineCode",{parentName:"p"},"dataSchema")," we created into an ingestion task spec, and specify the input source."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"dataSchema")," is shared across all task types, but each task type has its own specification format. For this tutorial, we will use the native batch ingestion task:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type" : "index_parallel",\n  "spec" : {\n    "dataSchema" : {\n      "dataSource" : "ingestion-tutorial",\n      "timestampSpec" : {\n        "format" : "iso",\n        "column" : "ts"\n      },\n      "dimensionsSpec" : {\n        "dimensions": [\n          "srcIP",\n          { "name" : "srcPort", "type" : "long" },\n          { "name" : "dstIP", "type" : "string" },\n          { "name" : "dstPort", "type" : "long" },\n          { "name" : "protocol", "type" : "string" }\n        ]\n      },\n      "metricsSpec" : [\n        { "type" : "count", "name" : "count" },\n        { "type" : "longSum", "name" : "packets", "fieldName" : "packets" },\n        { "type" : "longSum", "name" : "bytes", "fieldName" : "bytes" },\n        { "type" : "doubleSum", "name" : "cost", "fieldName" : "cost" }\n      ],\n      "granularitySpec" : {\n        "type" : "uniform",\n        "segmentGranularity" : "HOUR",\n        "queryGranularity" : "MINUTE",\n        "intervals" : ["2018-01-01/2018-01-02"],\n        "rollup" : true\n      }\n    }\n  }\n}\n')),(0,o.kt)("h2",{id:"define-the-input-source"},"Define the input source"),(0,o.kt)("p",null,"Now let's define our input source, which is specified in an ",(0,o.kt)("inlineCode",{parentName:"p"},"ioConfig")," object. Each task type has its own type of ",(0,o.kt)("inlineCode",{parentName:"p"},"ioConfig"),". To read input data, we need to specify an ",(0,o.kt)("inlineCode",{parentName:"p"},"inputSource"),". The example netflow data we saved earlier needs to be read from a local file, which is configured below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'    "ioConfig" : {\n      "type" : "index_parallel",\n      "inputSource" : {\n        "type" : "local",\n        "baseDir" : "quickstart/",\n        "filter" : "ingestion-tutorial-data.json"\n      }\n    }\n')),(0,o.kt)("h3",{id:"define-the-format-of-the-data"},"Define the format of the data"),(0,o.kt)("p",null,"Since our input data is represented as JSON strings, we'll use a ",(0,o.kt)("inlineCode",{parentName:"p"},"inputFormat")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"json")," format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'    "ioConfig" : {\n      "type" : "index_parallel",\n      "inputSource" : {\n        "type" : "local",\n        "baseDir" : "quickstart/",\n        "filter" : "ingestion-tutorial-data.json"\n      },\n      "inputFormat" : {\n        "type" : "json"\n      }\n    }\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type" : "index_parallel",\n  "spec" : {\n    "dataSchema" : {\n      "dataSource" : "ingestion-tutorial",\n      "timestampSpec" : {\n        "format" : "iso",\n        "column" : "ts"\n      },\n      "dimensionsSpec" : {\n        "dimensions": [\n          "srcIP",\n          { "name" : "srcPort", "type" : "long" },\n          { "name" : "dstIP", "type" : "string" },\n          { "name" : "dstPort", "type" : "long" },\n          { "name" : "protocol", "type" : "string" }\n        ]\n      },\n      "metricsSpec" : [\n        { "type" : "count", "name" : "count" },\n        { "type" : "longSum", "name" : "packets", "fieldName" : "packets" },\n        { "type" : "longSum", "name" : "bytes", "fieldName" : "bytes" },\n        { "type" : "doubleSum", "name" : "cost", "fieldName" : "cost" }\n      ],\n      "granularitySpec" : {\n        "type" : "uniform",\n        "segmentGranularity" : "HOUR",\n        "queryGranularity" : "MINUTE",\n        "intervals" : ["2018-01-01/2018-01-02"],\n        "rollup" : true\n      }\n    },\n    "ioConfig" : {\n      "type" : "index_parallel",\n      "inputSource" : {\n        "type" : "local",\n        "baseDir" : "quickstart/",\n        "filter" : "ingestion-tutorial-data.json"\n      },\n      "inputFormat" : {\n        "type" : "json"\n      }\n    }\n  }\n}\n')),(0,o.kt)("h2",{id:"additional-tuning"},"Additional tuning"),(0,o.kt)("p",null,"Each ingestion task has a ",(0,o.kt)("inlineCode",{parentName:"p"},"tuningConfig")," section that allows users to tune various ingestion parameters."),(0,o.kt)("p",null,"As an example, let's add a ",(0,o.kt)("inlineCode",{parentName:"p"},"tuningConfig")," that sets a target segment size for the native batch ingestion task:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'    "tuningConfig" : {\n      "type" : "index_parallel",\n      "partitionsSpec": {\n        "type": "dynamic",\n         "maxRowsPerSegment" : 5000000\n      }\n    }\n         \n')),(0,o.kt)("p",null,"Note that each ingestion task has its own type of ",(0,o.kt)("inlineCode",{parentName:"p"},"tuningConfig"),"."),(0,o.kt)("h2",{id:"final-spec"},"Final spec"),(0,o.kt)("p",null,"We've finished defining the ingestion spec, it should now look like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type" : "index_parallel",\n  "spec" : {\n    "dataSchema" : {\n      "dataSource" : "ingestion-tutorial",\n      "timestampSpec" : {\n        "format" : "iso",\n        "column" : "ts"\n      },\n      "dimensionsSpec" : {\n        "dimensions": [\n          "srcIP",\n          { "name" : "srcPort", "type" : "long" },\n          { "name" : "dstIP", "type" : "string" },\n          { "name" : "dstPort", "type" : "long" },\n          { "name" : "protocol", "type" : "string" }\n        ]\n      },\n      "metricsSpec" : [\n        { "type" : "count", "name" : "count" },\n        { "type" : "longSum", "name" : "packets", "fieldName" : "packets" },\n        { "type" : "longSum", "name" : "bytes", "fieldName" : "bytes" },\n        { "type" : "doubleSum", "name" : "cost", "fieldName" : "cost" }\n      ],\n      "granularitySpec" : {\n        "type" : "uniform",\n        "segmentGranularity" : "HOUR",\n        "queryGranularity" : "MINUTE",\n        "intervals" : ["2018-01-01/2018-01-02"],\n        "rollup" : true\n      }\n    },\n    "ioConfig" : {\n      "type" : "index_parallel",\n      "inputSource" : {\n        "type" : "local",\n        "baseDir" : "quickstart/",\n        "filter" : "ingestion-tutorial-data.json"\n      },\n      "inputFormat" : {\n        "type" : "json"\n      }\n    },\n    "tuningConfig" : {\n      "type" : "index_parallel",\n      "partitionsSpec": {\n        "type": "dynamic",\n         "maxRowsPerSegment" : 5000000\n      }\n    }\n  }\n}\n')),(0,o.kt)("h2",{id:"submit-the-task-and-query-the-data"},"Submit the task and query the data"),(0,o.kt)("p",null,"From the apache-druid-28.0.0 package root, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bin/post-index-task --file quickstart/ingestion-tutorial-index.json --url http://localhost:8081\n")),(0,o.kt)("p",null,"After the script completes, we will query the data."),(0,o.kt)("p",null,"Let's run ",(0,o.kt)("inlineCode",{parentName:"p"},"bin/dsql")," and issue a ",(0,o.kt)("inlineCode",{parentName:"p"},'select * from "ingestion-tutorial";')," query to see what data was ingested."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'$ bin/dsql\nWelcome to dsql, the command-line client for Druid SQL.\nType "\\h" for help.\ndsql> select * from "ingestion-tutorial";\n\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 __time                   \u2502 bytes \u2502 cost \u2502 count \u2502 dstIP   \u2502 dstPort \u2502 packets \u2502 protocol \u2502 srcIP   \u2502 srcPort \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502 2018-01-01T01:01:00.000Z \u2502  6000 \u2502  4.9 \u2502     3 \u2502 2.2.2.2 \u2502    3000 \u2502      60 \u2502 6        \u2502 1.1.1.1 \u2502    2000 \u2502\n\u2502 2018-01-01T01:02:00.000Z \u2502  9000 \u2502 18.1 \u2502     2 \u2502 2.2.2.2 \u2502    7000 \u2502      90 \u2502 6        \u2502 1.1.1.1 \u2502    5000 \u2502\n\u2502 2018-01-01T01:03:00.000Z \u2502  6000 \u2502  4.3 \u2502     1 \u2502 2.2.2.2 \u2502    7000 \u2502      60 \u2502 6        \u2502 1.1.1.1 \u2502    5000 \u2502\n\u2502 2018-01-01T02:33:00.000Z \u2502 30000 \u2502 56.9 \u2502     2 \u2502 8.8.8.8 \u2502    5000 \u2502     300 \u2502 17       \u2502 7.7.7.7 \u2502    4000 \u2502\n\u2502 2018-01-01T02:35:00.000Z \u2502 30000 \u2502 46.3 \u2502     1 \u2502 8.8.8.8 \u2502    5000 \u2502     300 \u2502 17       \u2502 7.7.7.7 \u2502    4000 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\nRetrieved 5 rows in 0.12s.\n\ndsql>\n')))}g.isMDXComponent=!0}}]);
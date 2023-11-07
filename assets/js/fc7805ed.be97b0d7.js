"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4934],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>h});var n=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var l=n.createContext({}),c=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},p=function(t){var e=c(t.components);return n.createElement(l.Provider,{value:e},t.children)},m="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,i=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),m=c(a),d=o,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return a?n.createElement(h,r(r({ref:e},p),{},{components:a})):n.createElement(h,r({ref:e},p))}));function h(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=a.length,r=new Array(i);r[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s[m]="string"==typeof t?t:o,r[1]=s;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},22831:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var n=a(87462),o=a(63366),i=(a(67294),a(3905)),r=["components"],s={id:"tutorial-compaction",title:"Compact segments",sidebar_label:"Compact segments"},l=void 0,c={unversionedId:"tutorials/tutorial-compaction",id:"tutorials/tutorial-compaction",title:"Compact segments",description:"\x3c!--",source:"@site/docs/28.0.0/tutorials/tutorial-compaction.md",sourceDirName:"tutorials",slug:"/tutorials/tutorial-compaction",permalink:"/docs/28.0.0/tutorials/tutorial-compaction",draft:!1,tags:[],version:"current",frontMatter:{id:"tutorial-compaction",title:"Compact segments",sidebar_label:"Compact segments"},sidebar:"docs",previous:{title:"Update existing data",permalink:"/docs/28.0.0/tutorials/tutorial-update-data"},next:{title:"Deleting data",permalink:"/docs/28.0.0/tutorials/tutorial-delete-data"}},p={},m=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Load the initial data",id:"load-the-initial-data",level:2},{value:"Compact the data",id:"compact-the-data",level:2},{value:"Compact the data with new segment granularity",id:"compact-the-data-with-new-segment-granularity",level:2},{value:"Learn more",id:"learn-more",level:2}],u={toc:m},d="wrapper";function h(t){var e=t.components,s=(0,o.Z)(t,r);return(0,i.kt)(d,(0,n.Z)({},u,s,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This tutorial demonstrates how to compact existing segments into fewer but larger segments in Apache Druid."),(0,i.kt)("p",null,"There is some per-segment memory and processing overhead during query processing.\nTherefore, it can be beneficial to reduce the total number of segments.\nSee ",(0,i.kt)("a",{parentName:"p",href:"/docs/28.0.0/operations/segment-optimization"},"Segment size optimization")," for details."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"This tutorial assumes you have already downloaded Apache Druid as described in\nthe ",(0,i.kt)("a",{parentName:"p",href:"/docs/28.0.0/tutorials/"},"single-machine quickstart")," and have it running on your local machine."),(0,i.kt)("p",null,"If you haven't already, you should finish the following tutorials first:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/28.0.0/tutorials/tutorial-batch"},"Tutorial: Loading a file")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/28.0.0/tutorials/tutorial-query"},"Tutorial: Querying data"))),(0,i.kt)("h2",{id:"load-the-initial-data"},"Load the initial data"),(0,i.kt)("p",null,"This tutorial uses the Wikipedia edits sample data included with the Druid distribution.\nTo load the initial data, you use an ingestion spec that loads batch data with segment granularity of ",(0,i.kt)("inlineCode",{parentName:"p"},"HOUR")," and creates between one and three segments per hour."),(0,i.kt)("p",null,"You can review the ingestion spec at ",(0,i.kt)("inlineCode",{parentName:"p"},"quickstart/tutorial/compaction-init-index.json"),".\nSubmit the spec as follows to create a datasource called ",(0,i.kt)("inlineCode",{parentName:"p"},"compaction-tutorial"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"bin/post-index-task --file quickstart/tutorial/compaction-init-index.json --url http://localhost:8081\n")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"}," ",(0,i.kt)("inlineCode",{parentName:"p"},"maxRowsPerSegment")," in the tutorial ingestion spec is set to 1000 to generate multiple segments per hour for demonstration purposes. Do not use this spec in production.")),(0,i.kt)("p",null,"After the ingestion completes, navigate to ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:8888/unified-console.html#datasources"},"http://localhost:8888/unified-console.html#datasources")," in a browser to see the new datasource in the web console."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"compaction-tutorial datasource",src:a(93046).Z,title:"compaction-tutorial datasource",width:"1274",height:"228"})),(0,i.kt)("p",null,"In the ",(0,i.kt)("strong",{parentName:"p"},"Availability")," column for the ",(0,i.kt)("inlineCode",{parentName:"p"},"compaction-tutorial")," datasource, click the link for ",(0,i.kt)("strong",{parentName:"p"},"51 segments")," to view segments information for the datasource."),(0,i.kt)("p",null,"The datasource comprises 51 segments, between one and three segments per hour from the input data:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Original segments",src:a(9900).Z,title:"Original segments",width:"1275",height:"772"})),(0,i.kt)("p",null,"Run a COUNT query on the datasource to verify there are 39,244 rows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'dsql> select count(*) from "compaction-tutorial";\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 EXPR$0 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502  39244 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\nRetrieved 1 row in 1.38s.\n')),(0,i.kt)("h2",{id:"compact-the-data"},"Compact the data"),(0,i.kt)("p",null,"Now you compact these 51 small segments and retain the segment granularity of ",(0,i.kt)("inlineCode",{parentName:"p"},"HOUR"),".\nThe Druid distribution includes a compaction task spec for this tutorial datasource at ",(0,i.kt)("inlineCode",{parentName:"p"},"quickstart/tutorial/compaction-keep-granularity.json"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "compact",\n  "dataSource": "compaction-tutorial",\n  "interval": "2015-09-12/2015-09-13",\n  "tuningConfig" : {\n    "type" : "index_parallel",\n    "partitionsSpec": {\n        "type": "dynamic"\n    },\n    "maxRowsInMemory" : 25000\n  }\n}\n')),(0,i.kt)("p",null,"This compacts all segments for the interval ",(0,i.kt)("inlineCode",{parentName:"p"},"2015-09-12/2015-09-13")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"compaction-tutorial")," datasource."),(0,i.kt)("p",null,"The parameters in the ",(0,i.kt)("inlineCode",{parentName:"p"},"tuningConfig")," control the maximum number of rows present in each compacted segment and thus affect the number of segments in the compacted set."),(0,i.kt)("p",null,"This datasource only has 39,244 rows. 39,244 is below the default limit of 5,000,000 ",(0,i.kt)("inlineCode",{parentName:"p"},"maxRowsPerSegment")," for ",(0,i.kt)("a",{parentName:"p",href:"/docs/28.0.0/ingestion/native-batch#dynamic-partitioning"},"dynamic partitioning"),". Therefore, Druid only creates one compacted segment per hour."),(0,i.kt)("p",null,"Submit the compaction task now:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"bin/post-index-task --file quickstart/tutorial/compaction-keep-granularity.json --url http://localhost:8081\n")),(0,i.kt)("p",null,"After the task finishes, refresh the ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:8888/unified-console.html#segments"},"segments view"),"."),(0,i.kt)("p",null,"Over time the Coordinator marks the original 51 segments as unused and subsequently removes them to leave only the new compacted segments."),(0,i.kt)("p",null,"By default, the Coordinator does not mark segments as unused until the Coordinator has been running for at least 15 minutes.\nDuring that time, you may see 75 total segments comprised of the old segment set and the new compacted set:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Compacted segments intermediate state 1",src:a(61061).Z,title:"Compacted segments intermediate state 1",width:"1334",height:"175"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Compacted segments intermediate state 2",src:a(74285).Z,title:"Compacted segments intermediate state 2",width:"1334",height:"792"})),(0,i.kt)("p",null,"The new compacted segments have a more recent version than the original segments.\nEven though the web console displays both sets of segments, queries only read from the new compacted segments."),(0,i.kt)("p",null,"Run a COUNT query on ",(0,i.kt)("inlineCode",{parentName:"p"},"compaction-tutorial")," again to verify the number of rows remains 39,244:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'dsql> select count(*) from "compaction-tutorial";\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 EXPR$0 \u2502\n\u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n\u2502  39244 \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\nRetrieved 1 row in 1.30s.\n')),(0,i.kt)("p",null,"After the Coordinator has been running for at least 15 minutes, the segments view only shows the new 24 segments, one for each hour:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Compacted segments hourly granularity 1",src:a(57393).Z,title:"Compacted segments hourly granularity 1",width:"1330",height:"164"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Compacted segments hourly granularity 2",src:a(54471).Z,title:"Compacted segments hourly granularity 2",width:"1330",height:"896"})),(0,i.kt)("h2",{id:"compact-the-data-with-new-segment-granularity"},"Compact the data with new segment granularity"),(0,i.kt)("p",null,"You can also change the segment granularity in a compaction task to produce compacted segments with a different granularity from that of the input segments."),(0,i.kt)("p",null,"The Druid distribution includes a compaction task spec to create ",(0,i.kt)("inlineCode",{parentName:"p"},"DAY")," granularity segments at ",(0,i.kt)("inlineCode",{parentName:"p"},"quickstart/tutorial/compaction-day-granularity.json"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "compact",\n  "dataSource": "compaction-tutorial",\n  "interval": "2015-09-12/2015-09-13",\n  "tuningConfig" : {\n    "type" : "index_parallel",\n    "partitionsSpec": {\n        "type": "dynamic"\n    },\n    "maxRowsInMemory" : 25000,\n    "forceExtendableShardSpecs" : true\n  },\n  "granularitySpec" : {\n    "segmentGranularity" : "DAY",\n    "queryGranularity" : "none"\n  }\n}\n')),(0,i.kt)("p",null,"Note that ",(0,i.kt)("inlineCode",{parentName:"p"},"segmentGranularity")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"DAY")," in this compaction task spec."),(0,i.kt)("p",null,"Submit this task now:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"bin/post-index-task --file quickstart/tutorial/compaction-day-granularity.json --url http://localhost:8081\n")),(0,i.kt)("p",null,"It takes some time before the Coordinator marks the old input segments as unused, so you may see an intermediate state with 25 total segments. Eventually, only one DAY granularity segment remains:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Compacted segments day granularity 1",src:a(73046).Z,title:"Compacted segments day granularity 1",width:"1331",height:"181"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Compacted segments day granularity 2",src:a(64549).Z,title:"Compacted segments day granularity 2",width:"1334",height:"171"})),(0,i.kt)("h2",{id:"learn-more"},"Learn more"),(0,i.kt)("p",null,"This tutorial demonstrated how to use a compaction task spec to manually compact segments and how to optionally change the segment granularity for segments."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For more details, see ",(0,i.kt)("a",{parentName:"li",href:"/docs/28.0.0/data-management/compaction"},"Compaction"),"."),(0,i.kt)("li",{parentName:"ul"},"To learn about the benefits of compaction, see ",(0,i.kt)("a",{parentName:"li",href:"/docs/28.0.0/operations/segment-optimization"},"Segment optimization"),".")))}h.isMDXComponent=!0},93046:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/tutorial-compaction-01-122ba6887d51536c0799f2b4f105f00c.png"},9900:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/tutorial-compaction-02-3e62bb856c0c0cf0b318520c7d071bb5.png"},61061:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/tutorial-compaction-03-7fdb3f2fed5120f81ff7fa1b0659b1da.png"},74285:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/tutorial-compaction-04-36f7ed804ee7538d35d6fe31da6fbfae.png"},57393:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/tutorial-compaction-05-c6b86c4a1c1aeeccad0e4567f43f7112.png"},54471:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/tutorial-compaction-06-d55426f79668b103a03066b3fb602d1b.png"},73046:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/tutorial-compaction-07-e6e0a2617410595ee7ce54d48ea43e7b.png"},64549:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/tutorial-compaction-08-c185270edb96314c1d83efeb308b4bf3.png"}}]);
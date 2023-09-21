"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8069],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),h=i,m=c["".concat(s,".").concat(h)]||c[h]||p[h]||o;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},75565:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=["components"],l={id:"tutorial-batch",title:"Load a file",sidebar_label:"Load files natively"},s=void 0,d={unversionedId:"tutorials/tutorial-batch",id:"tutorials/tutorial-batch",title:"Load a file",description:"\x3c!--",source:"@site/docs/latest/tutorials/tutorial-batch.md",sourceDirName:"tutorials",slug:"/tutorials/tutorial-batch",permalink:"/docs/latest/tutorials/tutorial-batch",draft:!1,tags:[],version:"current",frontMatter:{id:"tutorial-batch",title:"Load a file",sidebar_label:"Load files natively"}},u={},c=[{value:"Loading data with a spec (via console)",id:"loading-data-with-a-spec-via-console",level:2},{value:"Loading data with a spec (via command line)",id:"loading-data-with-a-spec-via-command-line",level:2},{value:"Loading data without the script",id:"loading-data-without-the-script",level:2},{value:"Querying your data",id:"querying-your-data",level:2},{value:"Cleanup",id:"cleanup",level:2},{value:"Further reading",id:"further-reading",level:2}],p={toc:c},h="wrapper";function m(e){var t=e.components,l=(0,i.Z)(e,r);return(0,o.kt)(h,(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This tutorial demonstrates how to load data into Apache Druid from a file using Apache Druid's native batch ingestion feature."),(0,o.kt)("p",null,"You initiate data loading in Druid by submitting an ",(0,o.kt)("em",{parentName:"p"},"ingestion task")," spec to the Druid Overlord. You can write ingestion\nspecs by hand or using the ",(0,o.kt)("em",{parentName:"p"},"data loader")," built into the web console. "),(0,o.kt)("p",null,"For production environments, it's likely that you'll want to automate data ingestion. This tutorial starts by showing\nyou how to submit an ingestion spec directly in the web console, and then introduces ways to ingest batch data that\nlend themselves to automation","\u2014","from the command line and from a script. "),(0,o.kt)("h2",{id:"loading-data-with-a-spec-via-console"},"Loading data with a spec (via console)"),(0,o.kt)("p",null,"The Druid package includes the following sample native batch ingestion task spec at ",(0,o.kt)("inlineCode",{parentName:"p"},"quickstart/tutorial/wikipedia-index.json"),", shown here for convenience,\nwhich has been configured to read the ",(0,o.kt)("inlineCode",{parentName:"p"},"quickstart/tutorial/wikiticker-2015-09-12-sampled.json.gz")," input file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type" : "index_parallel",\n  "spec" : {\n    "dataSchema" : {\n      "dataSource" : "wikipedia",\n      "dimensionsSpec" : {\n        "dimensions" : [\n          "channel",\n          "cityName",\n          "comment",\n          "countryIsoCode",\n          "countryName",\n          "isAnonymous",\n          "isMinor",\n          "isNew",\n          "isRobot",\n          "isUnpatrolled",\n          "metroCode",\n          "namespace",\n          "page",\n          "regionIsoCode",\n          "regionName",\n          "user",\n          { "name": "added", "type": "long" },\n          { "name": "deleted", "type": "long" },\n          { "name": "delta", "type": "long" }\n        ]\n      },\n      "timestampSpec": {\n        "column": "time",\n        "format": "iso"\n      },\n      "metricsSpec" : [],\n      "granularitySpec" : {\n        "type" : "uniform",\n        "segmentGranularity" : "day",\n        "queryGranularity" : "none",\n        "intervals" : ["2015-09-12/2015-09-13"],\n        "rollup" : false\n      }\n    },\n    "ioConfig" : {\n      "type" : "index_parallel",\n      "inputSource" : {\n        "type" : "local",\n        "baseDir" : "quickstart/tutorial/",\n        "filter" : "wikiticker-2015-09-12-sampled.json.gz"\n      },\n      "inputFormat" :  {\n        "type": "json"\n      },\n      "appendToExisting" : false\n    },\n    "tuningConfig" : {\n      "type" : "index_parallel",\n      "partitionsSpec": {\n        "type": "dynamic"\n      },\n      "maxRowsInMemory" : 25000\n    }\n  }\n}\n')),(0,o.kt)("p",null,'This spec creates a datasource named "wikipedia".'),(0,o.kt)("p",null,"From the Ingestion view, click the ellipses next to Tasks and choose ",(0,o.kt)("inlineCode",{parentName:"p"},"Submit JSON task"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Tasks view add task",src:n(63771).Z,title:"Tasks view add task",width:"1250",height:"740"})),(0,o.kt)("p",null,"This brings up the spec submission dialog where you can paste the spec above."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Query view",src:n(32554).Z,title:"Query view",width:"1250",height:"740"})),(0,o.kt)("p",null,"Once the spec is submitted, wait a few moments for the data to load, after which you can query it."),(0,o.kt)("h2",{id:"loading-data-with-a-spec-via-command-line"},"Loading data with a spec (via command line)"),(0,o.kt)("p",null,"For convenience, the Druid package includes a batch ingestion helper script at ",(0,o.kt)("inlineCode",{parentName:"p"},"bin/post-index-task"),"."),(0,o.kt)("p",null,"This script will POST an ingestion task to the Druid Overlord and poll Druid until the data is available for querying."),(0,o.kt)("p",null,"Run the following command from Druid package root:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bin/post-index-task --file quickstart/tutorial/wikipedia-index.json --url http://localhost:8081\n")),(0,o.kt)("p",null,"You should see output like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Beginning indexing data for wikipedia\nTask started: index_wikipedia_2018-07-27T06:37:44.323Z\nTask log:     http://localhost:8081/druid/indexer/v1/task/index_wikipedia_2018-07-27T06:37:44.323Z/log\nTask status:  http://localhost:8081/druid/indexer/v1/task/index_wikipedia_2018-07-27T06:37:44.323Z/status\nTask index_wikipedia_2018-07-27T06:37:44.323Z still running...\nTask index_wikipedia_2018-07-27T06:37:44.323Z still running...\nTask finished with status: SUCCESS\nCompleted indexing data for wikipedia. Now loading indexed data onto the cluster...\nwikipedia loading complete! You may now query your data\n")),(0,o.kt)("p",null,"Once the spec is submitted, you can follow the same instructions as above to wait for the data to load and then query it."),(0,o.kt)("h2",{id:"loading-data-without-the-script"},"Loading data without the script"),(0,o.kt)("p",null,"Let's briefly discuss how we would've submitted the ingestion task without using the script. You do not need to run these commands."),(0,o.kt)("p",null,"To submit the task, POST it to Druid in a new terminal window from the apache-druid-27.0.0 directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X 'POST' -H 'Content-Type:application/json' -d @quickstart/tutorial/wikipedia-index.json http://localhost:8081/druid/indexer/v1/task\n")),(0,o.kt)("p",null,"Which will print the ID of the task if the submission was successful:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'{"task":"index_wikipedia_2018-06-09T21:30:32.802Z"}\n')),(0,o.kt)("p",null,"You can monitor the status of this task from the console as outlined above."),(0,o.kt)("h2",{id:"querying-your-data"},"Querying your data"),(0,o.kt)("p",null,"Once the data is loaded, please follow the ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/tutorials/tutorial-query"},"query tutorial")," to run some example queries on the newly loaded data."),(0,o.kt)("h2",{id:"cleanup"},"Cleanup"),(0,o.kt)("p",null,"If you wish to go through any of the other ingestion tutorials, you will need to shut down the cluster and reset the cluster state by removing the contents of the ",(0,o.kt)("inlineCode",{parentName:"p"},"var"),' directory under the druid package, as the other tutorials will write to the same "wikipedia" datasource.'),(0,o.kt)("h2",{id:"further-reading"},"Further reading"),(0,o.kt)("p",null,"For more information on loading batch data, please see ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/ingestion/native-batch"},"the native batch ingestion documentation"),"."))}m.isMDXComponent=!0},63771:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tutorial-batch-submit-task-01-fbbf03666cc6ca1078988febc09b8e5e.png"},32554:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tutorial-batch-submit-task-02-15a3dea57d3cb78f671e65fc6277fdf5.png"}}]);
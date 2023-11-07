"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3334],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,c=m["".concat(l,".").concat(u)]||m[u]||k[u]||o;return a?n.createElement(c,i(i({ref:t},d),{},{components:a})):n.createElement(c,i({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},31794:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],s={id:"tutorial-kafka",title:"Load streaming data from Apache Kafka",sidebar_label:"Load from Apache Kafka"},l=void 0,p={unversionedId:"tutorials/tutorial-kafka",id:"tutorials/tutorial-kafka",title:"Load streaming data from Apache Kafka",description:"\x3c!--",source:"@site/docs/28.0.0/tutorials/tutorial-kafka.md",sourceDirName:"tutorials",slug:"/tutorials/tutorial-kafka",permalink:"/docs/28.0.0/tutorials/tutorial-kafka",draft:!1,tags:[],version:"current",frontMatter:{id:"tutorial-kafka",title:"Load streaming data from Apache Kafka",sidebar_label:"Load from Apache Kafka"},sidebar:"docs",previous:{title:"Load files using SQL",permalink:"/docs/28.0.0/tutorials/tutorial-msq-extern"},next:{title:"Load from Apache Hadoop",permalink:"/docs/28.0.0/tutorials/tutorial-batch-hadoop"}},d={},m=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Download and start Kafka",id:"download-and-start-kafka",level:2},{value:"Load data into Kafka",id:"load-data-into-kafka",level:2},{value:"Load data into Druid",id:"load-data-into-druid",level:2},{value:"Load data with the console data loader",id:"load-data-with-the-console-data-loader",level:3},{value:"Submit a supervisor spec",id:"submit-a-supervisor-spec",level:3},{value:"Use the console",id:"use-the-console",level:4},{value:"Use the API",id:"use-the-api",level:4},{value:"Query your data",id:"query-your-data",level:2},{value:"Further reading",id:"further-reading",level:2}],k={toc:m},u="wrapper";function c(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)(u,(0,n.Z)({},k,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This tutorial shows you how to load data into Apache Druid from a Kafka stream, using Druid's Kafka indexing service. "),(0,o.kt)("p",null,"The tutorial guides you through the steps to load sample nested clickstream data from the ",(0,o.kt)("a",{parentName:"p",href:"https://www.koalastothemax.com/"},"Koalas to the Max")," game into a Kafka topic, then ingest the data into Druid."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before you follow the steps in this tutorial, download Druid as described in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/28.0.0/tutorials/"},"quickstart")," using the ",(0,o.kt)("a",{parentName:"p",href:"/docs/28.0.0/operations/single-server"},"automatic single-machine configuration")," and have it running on your local machine. You don't need to have loaded any data."),(0,o.kt)("h2",{id:"download-and-start-kafka"},"Download and start Kafka"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://kafka.apache.org/"},"Apache Kafka")," is a high-throughput message bus that works well with Druid. For this tutorial, use Kafka 2.7.0. "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To download Kafka, run the following commands in your terminal:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -O https://archive.apache.org/dist/kafka/2.7.0/kafka_2.13-2.7.0.tgz\ntar -xzf kafka_2.13-2.7.0.tgz\ncd kafka_2.13-2.7.0\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you're already running Kafka on the machine you're using for this tutorial, delete or rename the ",(0,o.kt)("inlineCode",{parentName:"p"},"kafka-logs")," directory in ",(0,o.kt)("inlineCode",{parentName:"p"},"/tmp"),"."))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"}," Druid and Kafka both rely on ",(0,o.kt)("a",{parentName:"p",href:"https://zookeeper.apache.org/"},"Apache ZooKeeper")," to coordinate and manage services. Because Druid is already running, Kafka attaches to the Druid ZooKeeper instance when it starts up.",(0,o.kt)("br",null)),(0,o.kt)("p",{parentName:"admonition"}," In a production environment where you're running Druid and Kafka on different machines, ",(0,o.kt)("a",{parentName:"p",href:"https://kafka.apache.org/quickstart"},"start the Kafka ZooKeeper")," before you start the Kafka broker.")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the Kafka root directory, run this command to start a Kafka broker:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/kafka-server-start.sh config/server.properties\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In a new terminal window, navigate to the Kafka root directory and run the following command to create a Kafka topic called ",(0,o.kt)("inlineCode",{parentName:"p"},"kttm"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/kafka-topics.sh --create --topic kttm --bootstrap-server localhost:9092\n")),(0,o.kt)("p",{parentName:"li"},"Kafka returns a message when it successfully adds the topic: ",(0,o.kt)("inlineCode",{parentName:"p"},"Created topic kttm"),"."))),(0,o.kt)("h2",{id:"load-data-into-kafka"},"Load data into Kafka"),(0,o.kt)("p",null,"In this section, you download sample data to the tutorial's directory and send the data to your Kafka topic."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In your Kafka root directory, create a directory for the sample data:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir sample-data\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Download the sample data to your new directory and extract it:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"(cd sample-data && curl -O https://static.imply.io/example-data/kttm-nested-v2/kttm-nested-v2-2019-08-25.json.gz)\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In your Kafka root directory, run the following commands to post sample events to the ",(0,o.kt)("inlineCode",{parentName:"p"},"kttm")," Kafka topic:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'export KAFKA_OPTS="-Dfile.encoding=UTF-8"\ngzcat ./sample-data/kttm-nested-v2-2019-08-25.json.gz | ./bin/kafka-console-producer.sh --broker-list localhost:9092 --topic kttm\n')))),(0,o.kt)("h2",{id:"load-data-into-druid"},"Load data into Druid"),(0,o.kt)("p",null,"Now that you have data in your Kafka topic, you can use Druid's Kafka indexing service to ingest the data into Druid. "),(0,o.kt)("p",null,"To do this, you can use the Druid console data loader or you can submit a supervisor spec. Follow the steps below to try each method."),(0,o.kt)("h3",{id:"load-data-with-the-console-data-loader"},"Load data with the console data loader"),(0,o.kt)("p",null,"The Druid console data loader presents you with several screens to configure each section of the supervisor spec, then creates an ingestion task to ingest the Kafka data. "),(0,o.kt)("p",null,"To use the console data loader:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:8888"},"localhost:8888")," and click ",(0,o.kt)("strong",{parentName:"p"},"Load data > Streaming"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Data loader init",src:a(47535).Z,title:"Data loader init",width:"1250",height:"640"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Apache Kafka")," and then ",(0,o.kt)("strong",{parentName:"p"},"Connect data"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:9092")," as the bootstrap server and ",(0,o.kt)("inlineCode",{parentName:"p"},"kttm")," as the topic, then click ",(0,o.kt)("strong",{parentName:"p"},"Apply")," and make sure you see data similar to the following:"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Data loader sample",src:a(80383).Z,title:"Data loader sample",width:"1250",height:"640"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Next: Parse data"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Data loader parse data",src:a(91256).Z,title:"Data loader parse data",width:"1250",height:"640"})),(0,o.kt)("p",{parentName:"li"},"The data loader automatically tries to determine the correct parser for the data. For the sample data, it selects input format ",(0,o.kt)("inlineCode",{parentName:"p"},"json"),". You can play around with the different options to get a preview of how Druid parses your data.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"With the ",(0,o.kt)("inlineCode",{parentName:"p"},"json")," input format selected, click ",(0,o.kt)("strong",{parentName:"p"},"Next: Parse time"),". You may need to click ",(0,o.kt)("strong",{parentName:"p"},"Apply")," first."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Data loader parse time",src:a(37065).Z,title:"Data loader parse time",width:"1250",height:"640"})),(0,o.kt)("p",{parentName:"li"},"Druid's architecture requires that you specify a primary timestamp column. Druid stores the timestamp in the ",(0,o.kt)("inlineCode",{parentName:"p"},"__time")," column in your Druid datasource.\nIn a production environment, if you don't have a timestamp in your data, you can select ",(0,o.kt)("strong",{parentName:"p"},"Parse timestamp from:")," ",(0,o.kt)("inlineCode",{parentName:"p"},"None")," to use a placeholder value. "),(0,o.kt)("p",{parentName:"li"},"For the sample data, the data loader selects the ",(0,o.kt)("inlineCode",{parentName:"p"},"timestamp")," column in the raw data as the primary time column.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Next: ...")," three times to go past the ",(0,o.kt)("strong",{parentName:"p"},"Transform")," and ",(0,o.kt)("strong",{parentName:"p"},"Filter")," steps to ",(0,o.kt)("strong",{parentName:"p"},"Configure schema"),". You don't need to enter anything in these two steps because applying transforms and filters is out of scope for this tutorial."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Data loader schema",src:a(12932).Z,title:"Data loader schema",width:"1250",height:"640"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In the ",(0,o.kt)("strong",{parentName:"p"},"Configure schema")," step, you can select data types for the columns and configure ",(0,o.kt)("a",{parentName:"p",href:"/docs/28.0.0/ingestion/schema-model#dimensions"},"dimensions")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/28.0.0/ingestion/schema-model#metrics"},"metrics")," to ingest into Druid. The console does most of this for you, but you need to create JSON-type dimensions for the three nested columns in the data. "),(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Add dimension")," and enter the following information. You can only add one dimension at a time."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Name: ",(0,o.kt)("inlineCode",{parentName:"li"},"event"),", Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"json")),(0,o.kt)("li",{parentName:"ul"},"Name: ",(0,o.kt)("inlineCode",{parentName:"li"},"agent"),", Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"json")),(0,o.kt)("li",{parentName:"ul"},"Name: ",(0,o.kt)("inlineCode",{parentName:"li"},"geo_ip"),", Type: ",(0,o.kt)("inlineCode",{parentName:"li"},"json"))),(0,o.kt)("p",{parentName:"li"},"After you create the dimensions, you can scroll to the right in the preview window to see the nested columns:"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Nested columns schema",src:a(74151).Z,title:"Nested columns schema",width:"1250",height:"640"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Next: Partition")," to configure how Druid partitions the data into segments."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Data loader partition",src:a(5488).Z,title:"Data loader partition",width:"1250",height:"640"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("inlineCode",{parentName:"p"},"day")," as the ",(0,o.kt)("strong",{parentName:"p"},"Segment granularity"),". Since this is a small dataset, you don't need to make any further adjustments. Click ",(0,o.kt)("strong",{parentName:"p"},"Next: Tune")," to fine tune how Druid ingests data."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Data loader tune",src:a(5705).Z,title:"Data loader tune",width:"1250",height:"640"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"In ",(0,o.kt)("strong",{parentName:"p"},"Input tuning"),", set ",(0,o.kt)("strong",{parentName:"p"},"Use earliest offset")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"True"),"\u2014","this is very  important because you want to consume the data from the start of the stream. There are no other changes to make here, so click ",(0,o.kt)("strong",{parentName:"p"},"Next: Publish"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Data loader publish",src:a(2057).Z,title:"Data loader publish",width:"1250",height:"640"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Name the datasource ",(0,o.kt)("inlineCode",{parentName:"p"},"kttm-kafka")," and click ",(0,o.kt)("strong",{parentName:"p"},"Next: Edit spec")," to review your spec."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Data loader spec",src:a(8535).Z,title:"Data loader spec",width:"1250",height:"640"})),(0,o.kt)("p",{parentName:"li"},"The console presents the spec you've constructed. You can click the buttons above the spec to make changes in previous steps and see how the changes update the spec. You can also edit the spec directly and see it reflected in the previous steps.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Submit")," to create an ingestion task."),(0,o.kt)("p",{parentName:"li"},"Druid displays the task view with the focus on the newly created supervisor."),(0,o.kt)("p",{parentName:"li"},"The task view auto-refreshes, so wait until the supervisor launches a task. The status changes from ",(0,o.kt)("strong",{parentName:"p"},"Pending")," to ",(0,o.kt)("strong",{parentName:"p"},"Running")," as Druid starts to ingest data."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Tasks view",src:a(91062).Z,title:"Tasks view",width:"1250",height:"640"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Navigate to the ",(0,o.kt)("strong",{parentName:"p"},"Datasources")," view from the header."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"Datasource view",src:a(5002).Z,title:"Datasource view",width:"1250",height:"640"})),(0,o.kt)("p",{parentName:"li"},"When the ",(0,o.kt)("inlineCode",{parentName:"p"},"kttm-kafka")," datasource appears here, you can query it. See ",(0,o.kt)("a",{parentName:"p",href:"#query-your-data"},"Query your data")," for details."))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"}," If the datasource doesn't appear after a minute you might not have set the supervisor to read data from the start of the stream","\u2014","the ",(0,o.kt)("inlineCode",{parentName:"p"},"Use earliest offset")," setting in the ",(0,o.kt)("strong",{parentName:"p"},"Tune")," step. Go to the ",(0,o.kt)("strong",{parentName:"p"},"Ingestion")," page and terminate the supervisor using the ",(0,o.kt)("strong",{parentName:"p"},"Actions(...)")," menu. ",(0,o.kt)("a",{parentName:"p",href:"#load-data-with-the-console-data-loader"},"Load the sample data")," again and apply the correct setting when you get to the ",(0,o.kt)("strong",{parentName:"p"},"Tune")," step.")),(0,o.kt)("h3",{id:"submit-a-supervisor-spec"},"Submit a supervisor spec"),(0,o.kt)("p",null,"As an alternative to using the data loader, you can submit a supervisor spec to Druid. You can do this in the console or using the Druid API."),(0,o.kt)("h4",{id:"use-the-console"},"Use the console"),(0,o.kt)("p",null,"To submit a supervisor spec using the Druid console:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Ingestion")," in the console, then click the ellipses next to the refresh button and select ",(0,o.kt)("strong",{parentName:"p"},"Submit JSON supervisor"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Paste this spec into the JSON window and click ",(0,o.kt)("strong",{parentName:"p"},"Submit"),"."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "kafka",\n  "spec": {\n    "ioConfig": {\n      "type": "kafka",\n      "consumerProperties": {\n        "bootstrap.servers": "localhost:9092"\n      },\n      "topic": "kttm",\n      "inputFormat": {\n        "type": "json"\n      },\n      "useEarliestOffset": true\n    },\n    "tuningConfig": {\n      "type": "kafka"\n    },\n    "dataSchema": {\n      "dataSource": "kttm-kafka-supervisor-console",\n      "timestampSpec": {\n        "column": "timestamp",\n        "format": "iso"\n      },\n      "dimensionsSpec": {\n        "dimensions": [\n          "session",\n          "number",\n          "client_ip",\n          "language",\n          "adblock_list",\n          "app_version",\n          "path",\n          "loaded_image",\n          "referrer",\n          "referrer_host",\n          "server_ip",\n          "screen",\n          "window",\n          {\n            "type": "long",\n            "name": "session_length"\n          },\n          "timezone",\n          "timezone_offset",\n          {\n            "type": "json",\n            "name": "event"\n          },\n          {\n            "type": "json",\n            "name": "agent"\n          },\n          {\n            "type": "json",\n            "name": "geo_ip"\n          }\n        ]\n      },\n      "granularitySpec": {\n        "queryGranularity": "none",\n        "rollup": false,\n        "segmentGranularity": "day"\n      }\n    }\n  }\n}\n')))),(0,o.kt)("p",null,"   This starts the supervisor","\u2014","the supervisor spawns tasks that start listening for incoming data."),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Tasks")," on the console home page to monitor the status of the job. This spec writes the data in the ",(0,o.kt)("inlineCode",{parentName:"li"},"kttm")," topic to a datasource named ",(0,o.kt)("inlineCode",{parentName:"li"},"kttm-kafka-supervisor-console"),".")),(0,o.kt)("h4",{id:"use-the-api"},"Use the API"),(0,o.kt)("p",null,"You can also use the Druid API to submit a supervisor spec."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run the following command to download the sample spec:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o kttm-kafka-supervisor.json https://raw.githubusercontent.com/apache/druid/master/docs/assets/files/kttm-kafka-supervisor.json\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run the following command to submit the spec in the ",(0,o.kt)("inlineCode",{parentName:"p"},"kttm-kafka-supervisor.json")," file:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -X POST -H 'Content-Type: application/json' -d @kttm-kafka-supervisor.json http://localhost:8081/druid/indexer/v1/supervisor\n")),(0,o.kt)("p",{parentName:"li"},"After Druid successfully creates the supervisor, you get a response containing the supervisor ID: ",(0,o.kt)("inlineCode",{parentName:"p"},'{"id":"kttm-kafka-supervisor-api"}'),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Tasks")," on the console home page to monitor the status of the job. This spec writes the data in the ",(0,o.kt)("inlineCode",{parentName:"p"},"kttm")," topic to a datasource named ",(0,o.kt)("inlineCode",{parentName:"p"},"kttm-kafka-supervisor-api"),"."))),(0,o.kt)("h2",{id:"query-your-data"},"Query your data"),(0,o.kt)("p",null,"After Druid sends data to the Kafka stream, it is immediately available for querying. Click ",(0,o.kt)("strong",{parentName:"p"},"Query")," in the Druid console to run SQL queries against the datasource."),(0,o.kt)("p",null,"Since this tutorial ingests a small dataset, you can run the query ",(0,o.kt)("inlineCode",{parentName:"p"},'SELECT * FROM "kttm-kafka"')," to return all of the data in the dataset you created."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Query view",src:a(36073).Z,title:"Query view",width:"1250",height:"640"})),(0,o.kt)("p",null,"Check out the ",(0,o.kt)("a",{parentName:"p",href:"/docs/28.0.0/tutorials/tutorial-query"},"Querying data tutorial")," to run some example queries on the newly loaded data."),(0,o.kt)("h2",{id:"further-reading"},"Further reading"),(0,o.kt)("p",null,"For more information, see the following topics:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/28.0.0/development/extensions-core/kafka-ingestion"},"Apache Kafka ingestion")," for more information on loading data from Kafka streams."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/28.0.0/development/extensions-core/kafka-supervisor-reference"},"Apache Kafka supervisor reference")," for Kafka supervisor configuration information."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/28.0.0/development/extensions-core/kafka-supervisor-operations"},"Apache Kafka supervisor operations reference")," for information on running and maintaining Kafka supervisors for Druid.")))}c.isMDXComponent=!0},47535:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tutorial-kafka-data-loader-01-de140d7670cbefc01f4b3fe4d85b3b3d.png"},80383:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tutorial-kafka-data-loader-02-8785108e4afd995cfd86f8bf6d700c08.png"},91256:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tutorial-kafka-data-loader-03-6aaa78a9b8e65e5b9096ea22513528d0.png"},37065:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tutorial-kafka-data-loader-04-7d140b6240d194151ff0c65dbb00a1ca.png"},12932:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tutorial-kafka-data-loader-05-6644ee93e8235e1347ef045ce13ac9f2.png"},74151:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tutorial-kafka-data-loader-05b-e55c9e613d9a8f0cdc25942ce4c3ef5a.png"},5488:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tutorial-kafka-data-loader-06-40677bfad6c763bb5e9b194ecd4adf73.png"},5705:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tutorial-kafka-data-loader-07-3b52de9fd7bff202da8c2a939c2c83b8.png"},2057:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tutorial-kafka-data-loader-08-d9ba2317e15b6ef9c5462777c9607599.png"},8535:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tutorial-kafka-data-loader-09-180337ab02ae60444d19b768a4ed2fd5.png"},91062:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tutorial-kafka-data-loader-10-6a55a1befc9900c50ed7f8f3f14071ed.png"},5002:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tutorial-kafka-data-loader-11-74188b46ff51c655a03d12c5a838b33f.png"},36073:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tutorial-kafka-data-loader-12-3cd1aa4f7669845ca042aa2e524ea521.png"}}]);
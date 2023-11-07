"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6278],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(a),k=i,f=m["".concat(l,".").concat(k)]||m[k]||d[k]||r;return a?n.createElement(f,o(o({ref:t},u),{},{components:a})):n.createElement(f,o({ref:t},u))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},94225:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var n=a(87462),i=a(63366),r=(a(67294),a(3905)),o=["components"],s={id:"kafka-ingestion",title:"Apache Kafka ingestion",sidebar_label:"Apache Kafka ingestion",description:"Overview of the Kafka indexing service for Druid. Includes example supervisor specs to help you get started."},l=void 0,p={unversionedId:"development/extensions-core/kafka-ingestion",id:"development/extensions-core/kafka-ingestion",title:"Apache Kafka ingestion",description:"Overview of the Kafka indexing service for Druid. Includes example supervisor specs to help you get started.",source:"@site/docs/28.0.0/development/extensions-core/kafka-ingestion.md",sourceDirName:"development/extensions-core",slug:"/development/extensions-core/kafka-ingestion",permalink:"/docs/28.0.0/development/extensions-core/kafka-ingestion",draft:!1,tags:[],version:"current",frontMatter:{id:"kafka-ingestion",title:"Apache Kafka ingestion",sidebar_label:"Apache Kafka ingestion",description:"Overview of the Kafka indexing service for Druid. Includes example supervisor specs to help you get started."},sidebar:"docs",previous:{title:"Known issues",permalink:"/docs/28.0.0/multi-stage-query/known-issues"},next:{title:"Apache Kafka supervisor",permalink:"/docs/28.0.0/development/extensions-core/kafka-supervisor-reference"}},u={},m=[{value:"Kafka support",id:"kafka-support",level:2},{value:"Load the Kafka indexing service",id:"load-the-kafka-indexing-service",level:2},{value:"Define a supervisor spec",id:"define-a-supervisor-spec",level:2},{value:"JSON input format supervisor spec example",id:"json-input-format-supervisor-spec-example",level:3},{value:"Kafka input format supervisor spec example",id:"kafka-input-format-supervisor-spec-example",level:3},{value:"Submit a supervisor spec",id:"submit-a-supervisor-spec",level:2}],d={toc:m},k="wrapper";function f(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)(k,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When you enable the Kafka indexing service, you can configure supervisors on the Overlord to manage the creation and lifetime of Kafka indexing tasks."),(0,r.kt)("p",null,"Kafka indexing tasks read events using Kafka's own partition and offset mechanism to guarantee exactly-once ingestion. The supervisor oversees the state of the indexing tasks to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"coordinate handoffs"),(0,r.kt)("li",{parentName:"ul"},"manage failures"),(0,r.kt)("li",{parentName:"ul"},"ensure that scalability and replication requirements are maintained.")),(0,r.kt)("p",null,"This topic covers how to submit a supervisor spec to ingest event data, also known as message data, from Kafka. See the following for more information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For a reference of Kafka supervisor spec configuration options, see the ",(0,r.kt)("a",{parentName:"li",href:"/docs/28.0.0/development/extensions-core/kafka-supervisor-reference"},"Kafka supervisor reference"),"."),(0,r.kt)("li",{parentName:"ul"},"For operations reference information to help run and maintain Apache Kafka supervisors, see ",(0,r.kt)("a",{parentName:"li",href:"/docs/28.0.0/development/extensions-core/kafka-supervisor-operations"},"Kafka supervisor operations"),"."),(0,r.kt)("li",{parentName:"ul"},"For a walk-through, see the ",(0,r.kt)("a",{parentName:"li",href:"/docs/28.0.0/tutorials/tutorial-kafka"},"Loading from Apache Kafka")," tutorial.")),(0,r.kt)("h2",{id:"kafka-support"},"Kafka support"),(0,r.kt)("p",null,"The Kafka indexing service supports transactional topics introduced in Kafka 0.11.x by default. The consumer for Kafka indexing service is incompatible with older Kafka brokers. If you are using an older version, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://kafka.apache.org/documentation/#upgrade"},"Kafka upgrade guide"),"."),(0,r.kt)("p",null,"Additionally, you can set ",(0,r.kt)("inlineCode",{parentName:"p"},"isolation.level")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"read_uncommitted")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"consumerProperties")," if either:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You don't need Druid to consume transactional topics."),(0,r.kt)("li",{parentName:"ul"},"You need Druid to consume older versions of Kafka. Make sure offsets are sequential, since there is no offset gap check in Druid anymore.")),(0,r.kt)("p",null,"If your Kafka cluster enables consumer-group based ACLs, you can set ",(0,r.kt)("inlineCode",{parentName:"p"},"group.id")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"consumerProperties")," to override the default auto generated group id."),(0,r.kt)("h2",{id:"load-the-kafka-indexing-service"},"Load the Kafka indexing service"),(0,r.kt)("p",null,"To use the Kafka indexing service, load the ",(0,r.kt)("inlineCode",{parentName:"p"},"druid-kafka-indexing-service")," extension on both the Overlord and the MiddleManagers. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/28.0.0/configuration/extensions"},"Loading extensions")," for instructions on how to configure extensions."),(0,r.kt)("h2",{id:"define-a-supervisor-spec"},"Define a supervisor spec"),(0,r.kt)("p",null,"Similar to the ingestion spec for batch ingestion, the supervisor spec configures the data ingestion for Kafka streaming ingestion. A supervisor spec has the following sections:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"dataSchema")," to specify the Druid datasource name, primary timestamp, dimensions, metrics, transforms, and any necessary filters."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ioConfig")," to configure Kafka connection settings and configure how Druid parses the data. Kafka-specific connection details go in the ",(0,r.kt)("inlineCode",{parentName:"li"},"consumerProperties"),". The ",(0,r.kt)("inlineCode",{parentName:"li"},"ioConfig")," is also where you define the input format (",(0,r.kt)("inlineCode",{parentName:"li"},"inputFormat"),") of your Kafka data. For supported formats for Kafka and information on how to configure the input format, see ",(0,r.kt)("a",{parentName:"li",href:"/docs/28.0.0/ingestion/data-formats"},"Data formats"),".  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tuningConfig")," to control various tuning parameters specific to each ingestion method.\nFor a full description of all the fields and parameters in a Kafka supervisor spec, see the ",(0,r.kt)("a",{parentName:"li",href:"/docs/28.0.0/development/extensions-core/kafka-supervisor-reference"},"Kafka supervisor reference"),".")),(0,r.kt)("p",null,"The following sections contain examples to help you get started with supervisor specs."),(0,r.kt)("h3",{id:"json-input-format-supervisor-spec-example"},"JSON input format supervisor spec example"),(0,r.kt)("p",null,"The following example demonstrates a supervisor spec for Kafka that uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"JSON")," input format. In this case Druid parses the event contents in JSON format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "kafka",\n  "spec": {\n    "dataSchema": {\n      "dataSource": "metrics-kafka",\n      "timestampSpec": {\n        "column": "timestamp",\n        "format": "auto"\n      },\n      "dimensionsSpec": {\n        "dimensions": [],\n        "dimensionExclusions": [\n          "timestamp",\n          "value"\n         ]\n       },\n      "metricsSpec": [\n        {\n          "name": "count",\n          "type": "count"\n        },\n        {\n          "name": "value_sum",\n          "fieldName": "value",\n          "type": "doubleSum"\n        },\n        {\n          "name": "value_min",\n          "fieldName": "value",\n         "type": "doubleMin"\n        },\n        {\n          "name": "value_max",\n          "fieldName": "value",\n          "type": "doubleMax"\n       }\n      ],\n      "granularitySpec": {\n        "type": "uniform",\n        "segmentGranularity": "HOUR",\n        "queryGranularity": "NONE"\n      }\n    },\n    "ioConfig": {\n      "topic": "metrics",\n      "inputFormat": {\n        "type": "json"\n      },\n      "consumerProperties": {\n        "bootstrap.servers": "localhost:9092"\n      },\n      "taskCount": 1,\n      "replicas": 1,\n      "taskDuration": "PT1H"\n    },\n    "tuningConfig": {\n      "type": "kafka",\n      "maxRowsPerSegment": 5000000\n    }\n  } \n}\n')),(0,r.kt)("h3",{id:"kafka-input-format-supervisor-spec-example"},"Kafka input format supervisor spec example"),(0,r.kt)("p",null,"If you want to parse the Kafka metadata fields in addition to the Kafka payload value contents, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"kafka")," input format."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"kafka")," input format wraps around the payload parsing input format and augments the data it outputs with the Kafka event timestamp,\nthe Kafka topic name, the Kafka event headers, and the key field that itself can be parsed using any available InputFormat."),(0,r.kt)("p",null,"For example, consider the following structure for a Kafka message that represents a fictitious wiki edit in a development environment:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Kafka timestamp"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"1680795276351")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Kafka topic"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"wiki-edits")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Kafka headers"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"env=development")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"zone=z1")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Kafka key"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"wiki-edit")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Kafka payload value"),": ",(0,r.kt)("inlineCode",{parentName:"li"},'{"channel":"#sv.wikipedia","timestamp":"2016-06-27T00:00:11.080Z","page":"Salo Toraut","delta":31,"namespace":"Main"}'))),(0,r.kt)("p",null,"Using ",(0,r.kt)("inlineCode",{parentName:"p"},'{ "type": "json" }')," as the input format would only parse the payload value.\nTo parse the Kafka metadata in addition to the payload, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"kafka")," input format."),(0,r.kt)("p",null,"You would configure it as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"valueFormat"),": Define how to parse the payload value. Set this to the payload parsing input format (",(0,r.kt)("inlineCode",{parentName:"li"},'{ "type": "json" }'),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"timestampColumnName"),": Supply a custom name for the Kafka timestamp in the Druid schema to avoid conflicts with columns from the payload. The default is ",(0,r.kt)("inlineCode",{parentName:"li"},"kafka.timestamp"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"topicColumnName"),": Supply a custom name for the Kafka topic in the Druid schema to avoid conflicts with columns from the payload. The default is ",(0,r.kt)("inlineCode",{parentName:"li"},"kafka.topic"),". This field is useful when ingesting data from multiple topics into same datasource."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"headerFormat"),": The default value ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," decodes strings in UTF-8 encoding from the Kafka header.\nOther supported encoding formats include the following:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ISO-8859-1"),": ISO Latin Alphabet No. 1, that is, ISO-LATIN-1."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"US-ASCII"),": Seven-bit ASCII. Also known as ISO646-US. The Basic Latin block of the Unicode character set."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"UTF-16"),": Sixteen-bit UCS Transformation Format, byte order identified by an optional byte-order mark."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"UTF-16BE"),": Sixteen-bit UCS Transformation Format, big-endian byte order."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"UTF-16LE"),": Sixteen-bit UCS Transformation Format, little-endian byte order."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"headerColumnPrefix"),": Supply a prefix to the Kafka headers to avoid any conflicts with columns from the payload. The default is ",(0,r.kt)("inlineCode",{parentName:"li"},"kafka.header."),".\nConsidering the header from the example, Druid maps the headers to the following columns: ",(0,r.kt)("inlineCode",{parentName:"li"},"kafka.header.env"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"kafka.header.zone"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"keyFormat"),": Supply an input format to parse the key. Only the first value will be used.\nIf, as in the example, your key values are simple strings, then you can use the ",(0,r.kt)("inlineCode",{parentName:"li"},"tsv")," format to parse them.",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'{\n  "type": "tsv",\n  "findColumnsFromHeader": false,\n  "columns": ["x"]\n} \n')),"Note that for ",(0,r.kt)("inlineCode",{parentName:"li"},"tsv"),",",(0,r.kt)("inlineCode",{parentName:"li"},"csv"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"regex")," formats, you need to provide a ",(0,r.kt)("inlineCode",{parentName:"li"},"columns")," array to make a valid input format. Only the first one is used, and its name will be ignored in favor of ",(0,r.kt)("inlineCode",{parentName:"li"},"keyColumnName"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"keyColumnName"),": Supply the name for the Kafka key column to avoid conflicts with columns from the payload. The default is ",(0,r.kt)("inlineCode",{parentName:"li"},"kafka.key"),".")),(0,r.kt)("p",null,"Putting it together, the following input format (that uses the default values for ",(0,r.kt)("inlineCode",{parentName:"p"},"timestampColumnName"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"topicColumnName"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"headerColumnPrefix"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"keyColumnName"),")"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "kafka",\n  "valueFormat": {\n    "type": "json"\n  },\n  "headerFormat": {\n    "type": "string"\n  },\n  "keyFormat": {\n    "type": "tsv",\n    "findColumnsFromHeader": false,\n    "columns": ["x"]\n  }\n}\n')),(0,r.kt)("p",null,"would parse the example message as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "channel": "#sv.wikipedia",\n  "timestamp": "2016-06-27T00:00:11.080Z",\n  "page": "Salo Toraut",\n  "delta": 31,\n  "namespace": "Main",\n  "kafka.timestamp": 1680795276351,\n  "kafka.topic": "wiki-edits",\n  "kafka.header.env": "development",\n  "kafka.header.zone": "z1",\n  "kafka.key": "wiki-edit"\n}\n')),(0,r.kt)("p",null,"For more information on data formats, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/28.0.0/ingestion/data-formats"},"Data formats"),"."),(0,r.kt)("p",null,"Finally, add these Kafka metadata columns to the ",(0,r.kt)("inlineCode",{parentName:"p"},"dimensionsSpec")," or  set your ",(0,r.kt)("inlineCode",{parentName:"p"},"dimensionsSpec")," to auto-detect columns."),(0,r.kt)("p",null,"The following supervisor spec demonstrates how to ingest the Kafka header, key, timestamp, and topic into Druid dimensions:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "type": "kafka",\n  "spec": {\n    "ioConfig": {\n      "type": "kafka",\n      "consumerProperties": {\n        "bootstrap.servers": "localhost:9092"\n      },\n      "topic": "wiki-edits",\n      "inputFormat": {\n        "type": "kafka",\n        "valueFormat": {\n          "type": "json"\n        },\n        "headerFormat": {\n          "type": "string"\n        },\n        "keyFormat": {\n          "type": "tsv",\n          "findColumnsFromHeader": false,\n          "columns": ["x"]\n        }\n      },\n      "useEarliestOffset": true\n    },\n    "dataSchema": {\n      "dataSource": "wikiticker",\n      "timestampSpec": {\n        "column": "timestamp",\n        "format": "posix"\n      },\n      "dimensionsSpec":  "dimensionsSpec": {\n        "useSchemaDiscovery": true,\n        "includeAllDimensions": true\n      },\n      "granularitySpec": {\n        "queryGranularity": "none",\n        "rollup": false,\n        "segmentGranularity": "day"\n      }\n    },\n    "tuningConfig": {\n      "type": "kafka"\n    }\n  }\n}\n')),(0,r.kt)("p",null,"After Druid ingests the data, you can query the Kafka metadata columns as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT\n  "kafka.header.env",\n  "kafka.key",\n  "kafka.timestamp",\n  "kafka.topic"\nFROM "wikiticker"\n')),(0,r.kt)("p",null,"This query returns:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"kafka.header.env")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"kafka.key")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"kafka.timestamp")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"kafka.topic")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"development")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"wiki-edit")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1680795276351")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"wiki-edits"))))),(0,r.kt)("p",null,"For more information, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/28.0.0/ingestion/data-formats#kafka"},(0,r.kt)("inlineCode",{parentName:"a"},"kafka")," data format"),"."),(0,r.kt)("h2",{id:"submit-a-supervisor-spec"},"Submit a supervisor spec"),(0,r.kt)("p",null,"Druid starts a supervisor for a dataSource when you submit a supervisor spec. You can use the data loader in the web console or you can submit a supervisor spec to the following endpoint:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"http://<OVERLORD_IP>:<OVERLORD_PORT>/druid/indexer/v1/supervisor")),(0,r.kt)("p",null,"For example: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl -X POST -H 'Content-Type: application/json' -d @supervisor-spec.json http://localhost:8090/druid/indexer/v1/supervisor\n")),(0,r.kt)("p",null,"Where the file ",(0,r.kt)("inlineCode",{parentName:"p"},"supervisor-spec.json")," contains your Kafka supervisor spec file."))}f.isMDXComponent=!0}}]);
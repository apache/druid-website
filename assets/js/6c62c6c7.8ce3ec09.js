"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6010],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),k=i,c=u["".concat(s,".").concat(k)]||u[k]||d[k]||r;return n?a.createElement(c,o(o({ref:t},m),{},{components:n})):a.createElement(c,o({ref:t},m))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},44860:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],l={id:"kafka-ingestion",title:"Apache Kafka ingestion",sidebar_label:"Apache Kafka ingestion",description:"Overview of the Kafka indexing service for Druid. Includes example supervisor specs to help you get started."},s=void 0,p={unversionedId:"ingestion/kafka-ingestion",id:"ingestion/kafka-ingestion",title:"Apache Kafka ingestion",description:"Overview of the Kafka indexing service for Druid. Includes example supervisor specs to help you get started.",source:"@site/docs/latest/ingestion/kafka-ingestion.md",sourceDirName:"ingestion",slug:"/ingestion/kafka-ingestion",permalink:"/docs/latest/ingestion/kafka-ingestion",draft:!1,tags:[],version:"current",frontMatter:{id:"kafka-ingestion",title:"Apache Kafka ingestion",sidebar_label:"Apache Kafka ingestion",description:"Overview of the Kafka indexing service for Druid. Includes example supervisor specs to help you get started."},sidebar:"docs",previous:{title:"Supervisor",permalink:"/docs/latest/ingestion/supervisor"},next:{title:"Amazon Kinesis ingestion",permalink:"/docs/latest/ingestion/kinesis-ingestion"}},m={},u=[{value:"Setup",id:"setup",level:2},{value:"Supervisor spec configuration",id:"supervisor-spec-configuration",level:2},{value:"I/O configuration",id:"io-configuration",level:3},{value:"Ingest from multiple topics",id:"ingest-from-multiple-topics",level:4},{value:"Consumer properties",id:"consumer-properties",level:4},{value:"Idle configuration",id:"idle-configuration",level:4},{value:"Data format",id:"data-format",level:4},{value:"Kafka input format supervisor spec example",id:"kafka-input-format-supervisor-spec-example",level:5},{value:"Tuning configuration",id:"tuning-configuration",level:3},{value:"Deployment notes on Kafka partitions and Druid segments",id:"deployment-notes-on-kafka-partitions-and-druid-segments",level:2},{value:"Learn more",id:"learn-more",level:2}],d={toc:u},k="wrapper";function c(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)(k,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"To use the Kafka indexing service, you must be on Apache Kafka version 0.11.x or higher.\nIf you are using an older version, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://kafka.apache.org/documentation/#upgrade"},"Apache Kafka upgrade guide"),".")),(0,r.kt)("p",null,"When you enable the Kafka indexing service, you can configure supervisors on the Overlord to manage the creation and lifetime of Kafka indexing tasks.\nKafka indexing tasks read events using Kafka partition and offset mechanism to guarantee exactly-once ingestion. The supervisor oversees the state of the indexing tasks to coordinate handoffs, manage failures, and ensure that scalability and replication requirements are maintained."),(0,r.kt)("p",null,"This topic contains configuration information for the Kafka indexing service supervisor for Apache Druid."),(0,r.kt)("h2",{id:"setup"},"Setup"),(0,r.kt)("p",null,"To use the Kafka indexing service, you must first load the ",(0,r.kt)("inlineCode",{parentName:"p"},"druid-kafka-indexing-service")," extension on both the Overlord and the Middle Manager. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/configuration/extensions"},"Loading extensions")," for more information."),(0,r.kt)("h2",{id:"supervisor-spec-configuration"},"Supervisor spec configuration"),(0,r.kt)("p",null,"This section outlines the configuration properties that are specific to the Apache Kafka streaming ingestion method. For configuration properties shared across all streaming ingestion methods supported by Druid, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/ingestion/supervisor#supervisor-spec"},"Supervisor spec"),"."),(0,r.kt)("p",null,"The following example shows a supervisor spec for the Kafka indexing service:"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Click to view the example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "kafka",\n  "spec": {\n    "dataSchema": {\n      "dataSource": "metrics-kafka",\n      "timestampSpec": {\n        "column": "timestamp",\n        "format": "auto"\n      },\n      "dimensionsSpec": {\n        "dimensions": [],\n        "dimensionExclusions": [\n          "timestamp",\n          "value"\n        ]\n      },\n      "metricsSpec": [\n        {\n          "name": "count",\n          "type": "count"\n        },\n        {\n          "name": "value_sum",\n          "fieldName": "value",\n          "type": "doubleSum"\n        },\n        {\n          "name": "value_min",\n          "fieldName": "value",\n          "type": "doubleMin"\n        },\n        {\n          "name": "value_max",\n          "fieldName": "value",\n          "type": "doubleMax"\n        }\n      ],\n      "granularitySpec": {\n        "type": "uniform",\n        "segmentGranularity": "HOUR",\n        "queryGranularity": "NONE"\n      }\n    },\n    "ioConfig": {\n      "topic": "metrics",\n      "inputFormat": {\n        "type": "json"\n      },\n      "consumerProperties": {\n        "bootstrap.servers": "localhost:9092"\n      },\n      "taskCount": 1,\n      "replicas": 1,\n      "taskDuration": "PT1H"\n    },\n    "tuningConfig": {\n      "type": "kafka",\n      "maxRowsPerSegment": 5000000\n    }\n  }\n}\n'))),(0,r.kt)("h3",{id:"io-configuration"},"I/O configuration"),(0,r.kt)("p",null,"The following table outlines the ",(0,r.kt)("inlineCode",{parentName:"p"},"ioConfig")," configuration properties specific to Kafka.\nFor configuration properties shared across all streaming ingestion methods, refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/ingestion/supervisor#io-configuration"},"Supervisor I/O configuration"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"topic")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"The Kafka topic to read from. To ingest data from multiple topic, use ",(0,r.kt)("inlineCode",{parentName:"td"},"topicPattern"),"."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes if ",(0,r.kt)("inlineCode",{parentName:"td"},"topicPattern")," isn't set."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"topicPattern")),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Multiple Kafka topics to read from, passed as a regex pattern. See ",(0,r.kt)("a",{parentName:"td",href:"#ingest-from-multiple-topics"},"Ingest from multiple topics")," for more information."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes if ",(0,r.kt)("inlineCode",{parentName:"td"},"topic")," isn't set."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"consumerProperties")),(0,r.kt)("td",{parentName:"tr",align:null},"String, Object"),(0,r.kt)("td",{parentName:"tr",align:null},"A map of properties to pass to the Kafka consumer. See ",(0,r.kt)("a",{parentName:"td",href:"#consumer-properties"},"Consumer properties")," for details."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes. At the minimum, you must set the ",(0,r.kt)("inlineCode",{parentName:"td"},"bootstrap.servers")," property to establish the initial connection to the Kafka cluster."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pollTimeout")),(0,r.kt)("td",{parentName:"tr",align:null},"Long"),(0,r.kt)("td",{parentName:"tr",align:null},"The length of time to wait for the Kafka consumer to poll records, in milliseconds."),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"100")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"useEarliestOffset")),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"If a supervisor manages a datasource for the first time, it obtains a set of starting offsets from Kafka. This flag determines whether it retrieves the earliest or latest offsets in Kafka. Under normal circumstances, subsequent tasks start from where the previous segments ended. Druid only uses ",(0,r.kt)("inlineCode",{parentName:"td"},"useEarliestOffset")," on the first run."),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"idleConfig")),(0,r.kt)("td",{parentName:"tr",align:null},"Object"),(0,r.kt)("td",{parentName:"tr",align:null},"Defines how and when the Kafka supervisor can become idle. See ",(0,r.kt)("a",{parentName:"td",href:"#idle-configuration"},"Idle configuration")," for more details."),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"null")))),(0,r.kt)("h4",{id:"ingest-from-multiple-topics"},"Ingest from multiple topics"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you enable multi-topic ingestion for a datasource, downgrading to a version older than\n28.0.0 will cause the ingestion for that datasource to fail.")),(0,r.kt)("p",null,"You can ingest data from one or multiple topics.\nWhen ingesting data from multiple topics, Druid assigns partitions based on the hashcode of the topic name and the ID of the partition within that topic. The partition assignment might not be uniform across all the tasks. Druid assumes that partitions across individual topics have similar load. If you want to ingest from both high and low load topics in the same supervisor, it is recommended that you have a higher number of partitions for a high load topic and a lower number of partitions for a low load topic."),(0,r.kt)("p",null,"To ingest data from multiple topics, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"topicPattern")," property instead of ",(0,r.kt)("inlineCode",{parentName:"p"},"topic"),".\nYou pass multiple topics as a regex pattern. For example, to ingest data from clicks and impressions, set ",(0,r.kt)("inlineCode",{parentName:"p"},"topicPattern")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"clicks|impressions"),".\nSimilarly, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"metrics-.*")," as the value for ",(0,r.kt)("inlineCode",{parentName:"p"},"topicPattern")," if you want to ingest from all the topics that start with ",(0,r.kt)("inlineCode",{parentName:"p"},"metrics-"),". If you add a new topic that matches the regex to the cluster, Druid automatically starts ingesting from the new topic. Topic names that match partially, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"my-metrics-12"),", are not included for ingestion."),(0,r.kt)("h4",{id:"consumer-properties"},"Consumer properties"),(0,r.kt)("p",null,"Consumer properties control how a supervisor reads and processes event messages from a Kafka stream. For more information about consumers, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://kafka.apache.org/documentation/#consumerconfigs"},"Apache Kafka documentation"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"consumerProperties")," object must contain a  ",(0,r.kt)("inlineCode",{parentName:"p"},"bootstrap.servers")," property with a list of Kafka brokers in the form: ",(0,r.kt)("inlineCode",{parentName:"p"},"<BROKER_1>:<PORT_1>,<BROKER_2>:<PORT_2>,..."),".\nBy default, ",(0,r.kt)("inlineCode",{parentName:"p"},"isolation.level")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"read_committed"),"."),(0,r.kt)("p",null,"If you use older versions of Kafka servers without transactions support or don't want Druid to consume only committed transactions, set ",(0,r.kt)("inlineCode",{parentName:"p"},"isolation.level")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"read_uncommitted"),". If you need Druid to consume older versions of Kafka, make sure offsets are sequential, since there is no offset gap check in Druid."),(0,r.kt)("p",null,"If your Kafka cluster enables consumer-group based ACLs, you can set ",(0,r.kt)("inlineCode",{parentName:"p"},"group.id")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"consumerProperties")," to override the default auto generated group ID."),(0,r.kt)("p",null,"In some cases, you may need to fetch consumer properties at runtime. For example, when ",(0,r.kt)("inlineCode",{parentName:"p"},"bootstrap.servers")," is not known upfront or is not static. To enable SSL connections, you must provide passwords for ",(0,r.kt)("inlineCode",{parentName:"p"},"keystore"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"truststore"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," secretly. You can provide configurations at runtime with a dynamic config provider implementation like the environment variable config provider that comes with Druid. For more information, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/operations/dynamic-config-provider"},"Dynamic config provider"),"."),(0,r.kt)("p",null,"For example, if you are using SASL and SSL with Kafka, set the following environment variables for the Druid user on the machines running the Overlord and the Peon services:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"export KAFKA_JAAS_CONFIG=\"org.apache.kafka.common.security.plain.PlainLoginModule required username='admin_user' password='admin_password';\"\nexport SSL_KEY_PASSWORD=mysecretkeypassword\nexport SSL_KEYSTORE_PASSWORD=mysecretkeystorepassword\nexport SSL_TRUSTSTORE_PASSWORD=mysecrettruststorepassword\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"druid.dynamic.config.provider": {\n  "type": "environment",\n  "variables": {\n    "sasl.jaas.config": "KAFKA_JAAS_CONFIG",\n    "ssl.key.password": "SSL_KEY_PASSWORD",\n    "ssl.keystore.password": "SSL_KEYSTORE_PASSWORD",\n    "ssl.truststore.password": "SSL_TRUSTSTORE_PASSWORD"\n  }\n}\n')),(0,r.kt)("p",null,"Verify that you've changed the values for all configurations to match your own environment. In the Druid data loader interface, you can use the environment variable config provider syntax in the ",(0,r.kt)("strong",{parentName:"p"},"Consumer properties")," field on the ",(0,r.kt)("strong",{parentName:"p"},"Connect tab"),". When connecting to Kafka, Druid replaces the environment variables with their corresponding values."),(0,r.kt)("p",null,"You can provide SSL connections with ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/operations/password-provider"},"Password provider")," interface to define the ",(0,r.kt)("inlineCode",{parentName:"p"},"keystore"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"truststore"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"key"),", but this feature is deprecated."),(0,r.kt)("h4",{id:"idle-configuration"},"Idle configuration"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Idle state transitioning is currently designated as experimental.")),(0,r.kt)("p",null,"When the supervisor enters the idle state, no new tasks are launched subsequent to the completion of the currently executing tasks. This strategy may lead to reduced costs for cluster operators while using topics that get sporadic data."),(0,r.kt)("p",null,"The following table outlines the configuration options for ",(0,r.kt)("inlineCode",{parentName:"p"},"idleConfig"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"enabled")),(0,r.kt)("td",{parentName:"tr",align:null},"If ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", the supervisor becomes idle if there is no data on input stream or topic for some time."),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"inactiveAfterMillis")),(0,r.kt)("td",{parentName:"tr",align:null},"The supervisor becomes idle if all existing data has been read from input topic and no new data has been published for ",(0,r.kt)("inlineCode",{parentName:"td"},"inactiveAfterMillis")," milliseconds."),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("p",null,"The following example shows a supervisor spec with idle configuration enabled:"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Click to view the example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "kafka",\n  "spec": {\n    "dataSchema": {...},\n    "ioConfig": {\n      "topic": "metrics",\n      "inputFormat": {\n        "type": "json"\n      },\n      "consumerProperties": {\n        "bootstrap.servers": "localhost:9092"\n      },\n      "autoScalerConfig": {\n        "enableTaskAutoScaler": true,\n        "taskCountMax": 6,\n        "taskCountMin": 2,\n        "minTriggerScaleActionFrequencyMillis": 600000,\n        "autoScalerStrategy": "lagBased",\n        "lagCollectionIntervalMillis": 30000,\n        "lagCollectionRangeMillis": 600000,\n        "scaleOutThreshold": 6000000,\n        "triggerScaleOutFractionThreshold": 0.3,\n        "scaleInThreshold": 1000000,\n        "triggerScaleInFractionThreshold": 0.9,\n        "scaleActionStartDelayMillis": 300000,\n        "scaleActionPeriodMillis": 60000,\n        "scaleInStep": 1,\n        "scaleOutStep": 2\n      },\n      "taskCount": 1,\n      "replicas": 1,\n      "taskDuration": "PT1H",\n      "idleConfig": {\n        "enabled": true,\n        "inactiveAfterMillis": 600000\n      }\n    },\n    "tuningConfig": {...}\n  }\n}\n'))),(0,r.kt)("h4",{id:"data-format"},"Data format"),(0,r.kt)("p",null,"The Kafka indexing service supports both ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/ingestion/data-formats#input-format"},(0,r.kt)("inlineCode",{parentName:"a"},"inputFormat"))," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/ingestion/data-formats#parser"},(0,r.kt)("inlineCode",{parentName:"a"},"parser"))," to specify the data format. Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"inputFormat")," to specify the data format for the Kafka indexing service unless you need a format only supported by the legacy ",(0,r.kt)("inlineCode",{parentName:"p"},"parser"),". For more information, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/ingestion/data-formats"},"Source input formats"),"."),(0,r.kt)("p",null,"The Kinesis indexing service supports the following values for ",(0,r.kt)("inlineCode",{parentName:"p"},"inputFormat"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"csv")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tvs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"json")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"kafka")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"avro_stream")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"protobuf"))),(0,r.kt)("p",null,"You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"parser")," to read ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/development/extensions-contrib/thrift"},(0,r.kt)("inlineCode",{parentName:"a"},"thrift"))," formats."),(0,r.kt)("h5",{id:"kafka-input-format-supervisor-spec-example"},"Kafka input format supervisor spec example"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"kafka")," input format lets you parse the Kafka metadata fields in addition to the Kafka payload value contents."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"kafka")," input format wraps around the payload parsing input format and augments the data it outputs with the Kafka event timestamp, the Kafka topic name, the Kafka event headers, and the key field that itself can be parsed using any available input format."),(0,r.kt)("p",null,"For example, consider the following structure for a Kafka message that represents a wiki edit in a development environment:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Kafka timestamp"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"1680795276351")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Kafka topic"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"wiki-edits")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Kafka headers"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"env=development")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"zone=z1")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Kafka key"),": ",(0,r.kt)("inlineCode",{parentName:"li"},"wiki-edit")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Kafka payload value"),": ",(0,r.kt)("inlineCode",{parentName:"li"},'{"channel":"#sv.wikipedia","timestamp":"2016-06-27T00:00:11.080Z","page":"Salo Toraut","delta":31,"namespace":"Main"}'))),(0,r.kt)("p",null,"Using ",(0,r.kt)("inlineCode",{parentName:"p"},'{ "type": "json" }')," as the input format only parses the payload value.\nTo parse the Kafka metadata in addition to the payload, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"kafka")," input format."),(0,r.kt)("p",null,"You configure it as follows:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"valueFormat"),": Define how to parse the payload value. Set this to the payload parsing input format (",(0,r.kt)("inlineCode",{parentName:"li"},'{ "type": "json" }'),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"timestampColumnName"),": Supply a custom name for the Kafka timestamp in the Druid schema to avoid conflicts with columns from the payload. The default is ",(0,r.kt)("inlineCode",{parentName:"li"},"kafka.timestamp"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"topicColumnName"),": Supply a custom name for the Kafka topic in the Druid schema to avoid conflicts with columns from the payload. The default is ",(0,r.kt)("inlineCode",{parentName:"li"},"kafka.topic"),". This field is useful when ingesting data from multiple topics into the same datasource."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"headerFormat"),": The default value ",(0,r.kt)("inlineCode",{parentName:"li"},"string")," decodes strings in UTF-8 encoding from the Kafka header.",(0,r.kt)("br",{parentName:"li"}),"Other supported encoding formats include the following:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ISO-8859-1"),": ISO Latin Alphabet No. 1, that is, ISO-LATIN-1."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"US-ASCII"),": Seven-bit ASCII. Also known as ISO646-US. The Basic Latin block of the Unicode character set."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"UTF-16"),": Sixteen-bit UCS Transformation Format, byte order identified by an optional byte-order mark."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"UTF-16BE"),": Sixteen-bit UCS Transformation Format, big-endian byte order."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"UTF-16LE"),": Sixteen-bit UCS Transformation Format, little-endian byte order."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"headerColumnPrefix"),": Supply a prefix to the Kafka headers to avoid any conflicts with columns from the payload. The default is ",(0,r.kt)("inlineCode",{parentName:"li"},"kafka.header."),".\nConsidering the header from the example, Druid maps the headers to the following columns: ",(0,r.kt)("inlineCode",{parentName:"li"},"kafka.header.env"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"kafka.header.zone"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"keyFormat"),": Supply an input format to parse the key. Only the first value is used.\nIf, as in the example, your key values are simple strings, then you can use the ",(0,r.kt)("inlineCode",{parentName:"li"},"tsv")," format to parse them.",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "tsv",\n  "findColumnsFromHeader": false,\n  "columns": ["x"]\n} \n')),"Note that for ",(0,r.kt)("inlineCode",{parentName:"li"},"tsv"),",",(0,r.kt)("inlineCode",{parentName:"li"},"csv"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"regex")," formats, you need to provide a ",(0,r.kt)("inlineCode",{parentName:"li"},"columns")," array to make a valid input format. Only the first one is used, and its name will be ignored in favor of ",(0,r.kt)("inlineCode",{parentName:"li"},"keyColumnName"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"keyColumnName"),": Supply the name for the Kafka key column to avoid conflicts with columns from the payload. The default is ",(0,r.kt)("inlineCode",{parentName:"li"},"kafka.key"),".")),(0,r.kt)("p",null,"The following input format uses default values for ",(0,r.kt)("inlineCode",{parentName:"p"},"timestampColumnName"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"topicColumnName"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"headerColumnPrefix"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"keyColumnName"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "kafka",\n  "valueFormat": {\n    "type": "json"\n  },\n  "headerFormat": {\n    "type": "string"\n  },\n  "keyFormat": {\n    "type": "tsv",\n    "findColumnsFromHeader": false,\n    "columns": ["x"]\n  }\n}\n')),(0,r.kt)("p",null,"It parses the example message as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "channel": "#sv.wikipedia",\n  "timestamp": "2016-06-27T00:00:11.080Z",\n  "page": "Salo Toraut",\n  "delta": 31,\n  "namespace": "Main",\n  "kafka.timestamp": 1680795276351,\n  "kafka.topic": "wiki-edits",\n  "kafka.header.env": "development",\n  "kafka.header.zone": "z1",\n  "kafka.key": "wiki-edit"\n}\n')),(0,r.kt)("p",null,"Finally, add these Kafka metadata columns to the ",(0,r.kt)("inlineCode",{parentName:"p"},"dimensionsSpec")," or set your ",(0,r.kt)("inlineCode",{parentName:"p"},"dimensionsSpec")," to auto-detect columns."),(0,r.kt)("p",null,"The following supervisor spec demonstrates how to ingest the Kafka header, key, timestamp, and topic into Druid dimensions:"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Click to view the example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "kafka",\n  "spec": {\n    "ioConfig": {\n      "type": "kafka",\n      "consumerProperties": {\n        "bootstrap.servers": "localhost:9092"\n      },\n      "topic": "wiki-edits",\n      "inputFormat": {\n        "type": "kafka",\n        "valueFormat": {\n          "type": "json"\n        },\n        "headerFormat": {\n          "type": "string"\n        },\n        "keyFormat": {\n          "type": "tsv",\n          "findColumnsFromHeader": false,\n          "columns": ["x"]\n        }\n      },\n      "useEarliestOffset": true\n    },\n    "dataSchema": {\n      "dataSource": "wikiticker",\n      "timestampSpec": {\n        "column": "timestamp",\n        "format": "posix"\n      },\n      "dimensionsSpec":  "dimensionsSpec": {\n        "useSchemaDiscovery": true,\n        "includeAllDimensions": true\n      },\n      "granularitySpec": {\n        "queryGranularity": "none",\n        "rollup": false,\n        "segmentGranularity": "day"\n      }\n    },\n    "tuningConfig": {\n      "type": "kafka"\n    }\n  }\n}\n'))),(0,r.kt)("p",null,"After Druid ingests the data, you can query the Kafka metadata columns as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT\n  "kafka.header.env",\n  "kafka.key",\n  "kafka.timestamp",\n  "kafka.topic"\nFROM "wikiticker"\n')),(0,r.kt)("p",null,"This query returns:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"kafka.header.env")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"kafka.key")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"kafka.timestamp")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"kafka.topic")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"development")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"wiki-edit")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1680795276351")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"wiki-edits"))))),(0,r.kt)("h3",{id:"tuning-configuration"},"Tuning configuration"),(0,r.kt)("p",null,"The following table outlines the ",(0,r.kt)("inlineCode",{parentName:"p"},"tuningConfig")," configuration properties specific to Kafka.\nFor configuration properties shared across all streaming ingestion methods, refer to ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/ingestion/supervisor#tuning-configuration"},"Supervisor tuning configuration"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"numPersistThreads")),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of threads to use to create and persist incremental segments on the disk. Higher ingestion data throughput results in a larger number of incremental segments, causing significant CPU time to be spent on the creation of the incremental segments on the disk. For datasources with number of columns running into hundreds or thousands, creation of the incremental segments may take up significant time, in the order of multiple seconds. In both of these scenarios, ingestion can stall or pause frequently, causing it to fall behind. You can use additional threads to parallelize the segment creation without blocking ingestion as long as there are sufficient CPU resources available."),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"1")))),(0,r.kt)("h2",{id:"deployment-notes-on-kafka-partitions-and-druid-segments"},"Deployment notes on Kafka partitions and Druid segments"),(0,r.kt)("p",null,"Druid assigns Kafka partitions to each Kafka indexing task. A task writes the events it consumes from Kafka into a single segment for the segment granularity interval until it reaches one of the following limits: ",(0,r.kt)("inlineCode",{parentName:"p"},"maxRowsPerSegment"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"maxTotalRows"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"intermediateHandoffPeriod"),". At this point, the task creates a new partition for this segment granularity to contain subsequent events."),(0,r.kt)("p",null,"The Kafka indexing task also does incremental hand-offs. Therefore, segments become available as they are ready and you don't have to wait for all segments until the end of the task duration. When the task reaches one of ",(0,r.kt)("inlineCode",{parentName:"p"},"maxRowsPerSegment"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"maxTotalRows"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"intermediateHandoffPeriod"),", it hands off all the segments and creates a new set of segments for further events. This allows the task to run for longer durations without accumulating old segments locally on Middle Manager services."),(0,r.kt)("p",null,"The Kafka indexing service may still produce some small segments. For example, consider the following scenario:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Task duration is 4 hours."),(0,r.kt)("li",{parentName:"ul"},"Segment granularity is set to an HOUR."),(0,r.kt)("li",{parentName:"ul"},"The supervisor was started at 9:10.\nAfter 4 hours at 13:10, Druid starts a new set of tasks. The events for the interval 13:00 - 14:00 may be split across existing tasks and the new set of tasks which could result in small segments. To merge them together into new segments of an ideal size (in the range of ~500-700 MB per segment), you can schedule re-indexing tasks, optionally with a different segment granularity.")),(0,r.kt)("p",null,"For information on how to optimize the segment size, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/operations/segment-optimization"},"Segment size optimization"),"."),(0,r.kt)("h2",{id:"learn-more"},"Learn more"),(0,r.kt)("p",null,"See the following topics for more information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/latest/api-reference/supervisor-api"},"Supervisor API")," for how to manage and monitor supervisors using the API."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/latest/ingestion/supervisor"},"Supervisor")," for supervisor status and capacity planning."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/latest/tutorials/tutorial-kafka"},"Loading from Apache Kafka")," for a tutorial on streaming data from Apache Kafka."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/latest/ingestion/data-formats#kafka"},"Kafka input format")," to learn about the ",(0,r.kt)("inlineCode",{parentName:"li"},"kafka")," input format.")))}c.isMDXComponent=!0}}]);
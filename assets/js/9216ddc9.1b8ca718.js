"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2929],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>h});var a=t(67294);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,s=function(e,r){if(null==e)return{};var t,a,s={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=a.createContext({}),d=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=d(e.components);return a.createElement(l.Provider,{value:r},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},v=a.forwardRef((function(e,r){var t=e.components,s=e.mdxType,n=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(t),v=s,h=u["".concat(l,".").concat(v)]||u[v]||p[v]||n;return t?a.createElement(h,o(o({ref:r},c),{},{components:t})):a.createElement(h,o({ref:r},c))}));function h(e,r){var t=arguments,s=r&&r.mdxType;if("string"==typeof e||s){var n=t.length,o=new Array(n);o[0]=v;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i[u]="string"==typeof e?e:s,o[1]=i;for(var d=2;d<n;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}v.displayName="MDXCreateElement"},74641:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var a=t(87462),s=t(63366),n=(t(67294),t(3905)),o=["components"],i={id:"architecture",title:"Architecture"},l=void 0,d={unversionedId:"design/architecture",id:"design/architecture",title:"Architecture",description:"\x3c!--",source:"@site/docs/latest/design/architecture.md",sourceDirName:"design",slug:"/design/architecture",permalink:"/docs/latest/design/architecture",draft:!1,tags:[],version:"current",frontMatter:{id:"architecture",title:"Architecture"},sidebar:"docs",previous:{title:"Kerberized HDFS deep storage",permalink:"/docs/latest/tutorials/tutorial-kerberos-hadoop"},next:{title:"Coordinator",permalink:"/docs/latest/design/coordinator"}},c={},u=[{value:"Druid services",id:"druid-services",level:2},{value:"Druid servers",id:"druid-servers",level:2},{value:"Master server",id:"master-server",level:3},{value:"Coordinator service",id:"coordinator-service",level:4},{value:"Overlord service",id:"overlord-service",level:4},{value:"Query server",id:"query-server",level:3},{value:"Broker service",id:"broker-service",level:4},{value:"Router service",id:"router-service",level:4},{value:"Data server",id:"data-server",level:3},{value:"Historical service",id:"historical-service",level:4},{value:"MiddleManager service",id:"middlemanager-service",level:4},{value:"Peon service",id:"peon-service",level:5},{value:"Indexer service (optional)",id:"indexer-service-optional",level:4},{value:"Colocation of services",id:"colocation-of-services",level:2},{value:"Coordinators and Overlords",id:"coordinators-and-overlords",level:3},{value:"Historicals and MiddleManagers",id:"historicals-and-middlemanagers",level:3},{value:"External dependencies",id:"external-dependencies",level:2},{value:"Deep storage",id:"deep-storage",level:3},{value:"Metadata storage",id:"metadata-storage",level:3},{value:"ZooKeeper",id:"zookeeper",level:3},{value:"Learn more",id:"learn-more",level:2}],p={toc:u},v="wrapper";function h(e){var r=e.components,i=(0,s.Z)(e,o);return(0,n.kt)(v,(0,a.Z)({},p,i,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Druid has a distributed architecture that is designed to be cloud-friendly and easy to operate. You can configure and scale services independently for maximum flexibility over cluster operations. This design includes enhanced fault tolerance: an outage of one component does not immediately affect other components."),(0,n.kt)("p",null,"The following diagram shows the services that make up the Druid architecture, their typical arrangement across servers, and how queries and data flow through this architecture."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Druid architecture",src:t(26722).Z,width:"1967",height:"865"})),(0,n.kt)("p",null,"The following sections describe the components of this architecture."),(0,n.kt)("h2",{id:"druid-services"},"Druid services"),(0,n.kt)("p",null,"Druid has several types of services:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/latest/design/coordinator"},"Coordinator")," manages data availability on the cluster."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/latest/design/overlord"},"Overlord")," controls the assignment of data ingestion workloads."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/latest/design/broker"},"Broker")," handles queries from external clients."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/latest/design/router"},"Router")," routes requests to Brokers, Coordinators, and Overlords."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/latest/design/historical"},"Historical")," stores queryable data."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/latest/design/middlemanager"},"MiddleManager")," and ",(0,n.kt)("a",{parentName:"li",href:"/docs/latest/design/peons"},"Peon")," ingest data."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/latest/design/indexer"},"Indexer")," serves an alternative to the MiddleManager + Peon task execution system.")),(0,n.kt)("p",null,"You can view services in the ",(0,n.kt)("strong",{parentName:"p"},"Services")," tab in the web console: "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Druid services",src:t(30018).Z,title:"Services in the web console",width:"1250",height:"640"})),(0,n.kt)("h2",{id:"druid-servers"},"Druid servers"),(0,n.kt)("p",null,"You can deploy Druid services according to your preferences. For ease of deployment, we recommend organizing them into three server types: ",(0,n.kt)("a",{parentName:"p",href:"#master-server"},"Master"),", ",(0,n.kt)("a",{parentName:"p",href:"#query-server"},"Query"),", and ",(0,n.kt)("a",{parentName:"p",href:"#data-server"},"Data"),"."),(0,n.kt)("h3",{id:"master-server"},"Master server"),(0,n.kt)("p",null,"A Master server manages data ingestion and availability. It is responsible for starting new ingestion jobs and coordinating availability of data on the ",(0,n.kt)("a",{parentName:"p",href:"#data-server"},"Data server"),"."),(0,n.kt)("p",null,"Master servers divide operations between Coordinator and Overlord services."),(0,n.kt)("h4",{id:"coordinator-service"},"Coordinator service"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/latest/design/coordinator"},"Coordinator")," services watch over the Historical services on the Data servers. They are responsible for assigning segments to specific servers, and for ensuring segments are well-balanced across Historicals."),(0,n.kt)("h4",{id:"overlord-service"},"Overlord service"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/latest/design/overlord"},"Overlord")," services watch over the MiddleManager services on the Data servers and are the controllers of data ingestion into Druid. They are responsible for assigning ingestion tasks to MiddleManagers and for coordinating segment publishing."),(0,n.kt)("h3",{id:"query-server"},"Query server"),(0,n.kt)("p",null,"A Query server provides the endpoints that users and client applications interact with, routing queries to Data servers or other Query servers (and optionally proxied Master server requests)."),(0,n.kt)("p",null,"Query servers divide operations between Broker and Router services."),(0,n.kt)("h4",{id:"broker-service"},"Broker service"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/latest/design/broker"},"Broker")," services receive queries from external clients and forward those queries to Data servers. When Brokers receive results from those subqueries, they merge those results and return them to the caller. Typically, you query Brokers rather than querying Historical or MiddleManager services on Data servers directly."),(0,n.kt)("h4",{id:"router-service"},"Router service"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/latest/design/router"},(0,n.kt)("strong",{parentName:"a"},"Router"))," services provide a unified API gateway in front of Brokers, Overlords, and Coordinators."),(0,n.kt)("p",null,"The Router service also runs the ",(0,n.kt)("a",{parentName:"p",href:"/docs/latest/operations/web-console"},"web console"),", a UI for loading data, managing datasources and tasks, and viewing server status and segment information."),(0,n.kt)("h3",{id:"data-server"},"Data server"),(0,n.kt)("p",null,"A Data server executes ingestion jobs and stores queryable data."),(0,n.kt)("p",null,"Data servers divide operations between Historical and MiddleManager services."),(0,n.kt)("h4",{id:"historical-service"},"Historical service"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/latest/design/historical"},(0,n.kt)("strong",{parentName:"a"},"Historical"))," services handle storage and querying on historical data, including any streaming data that has been in the system long enough to be committed. Historical services download segments from deep storage and respond to queries about these segments. They don't accept writes."),(0,n.kt)("h4",{id:"middlemanager-service"},"MiddleManager service"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/latest/design/middlemanager"},(0,n.kt)("strong",{parentName:"a"},"MiddleManager"))," services handle ingestion of new data into the cluster. They are responsible\nfor reading from external data sources and publishing new Druid segments."),(0,n.kt)("h5",{id:"peon-service"},"Peon service"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/latest/design/peons"},(0,n.kt)("strong",{parentName:"a"},"Peon"))," services are task execution engines spawned by MiddleManagers. Each Peon runs a separate JVM and is responsible for executing a single task. Peons always run on the same host as the MiddleManager that spawned them."),(0,n.kt)("h4",{id:"indexer-service-optional"},"Indexer service (optional)"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/latest/design/indexer"},(0,n.kt)("strong",{parentName:"a"},"Indexer"))," services are an alternative to MiddleManagers and Peons. Instead of\nforking separate JVM processes per-task, the Indexer runs tasks as individual threads within a single JVM process."),(0,n.kt)("p",null,"The Indexer is designed to be easier to configure and deploy compared to the MiddleManager + Peon system and to better enable resource sharing across tasks. The Indexer is a newer feature and is currently designated ",(0,n.kt)("a",{parentName:"p",href:"/docs/latest/development/experimental"},"experimental")," due to the fact that its memory management system is still under\ndevelopment. It will continue to mature in future versions of Druid."),(0,n.kt)("p",null,"Typically, you would deploy either MiddleManagers or Indexers, but not both."),(0,n.kt)("h2",{id:"colocation-of-services"},"Colocation of services"),(0,n.kt)("p",null,"Colocating Druid services by server type generally results in better utilization of hardware resources for most clusters.\nFor very large scale clusters, it can be desirable to split the Druid services such that they run on individual servers to avoid resource contention."),(0,n.kt)("p",null,"This section describes guidelines and configuration parameters related to service colocation."),(0,n.kt)("h3",{id:"coordinators-and-overlords"},"Coordinators and Overlords"),(0,n.kt)("p",null,"The workload on the Coordinator service tends to increase with the number of segments in the cluster. The Overlord's workload also increases based on the number of segments in the cluster, but to a lesser degree than the Coordinator."),(0,n.kt)("p",null,"In clusters with very high segment counts, it can make sense to separate the Coordinator and Overlord services to provide more resources for the Coordinator's segment balancing workload."),(0,n.kt)("p",null,"You can run the Coordinator and Overlord services as a single combined service by setting the ",(0,n.kt)("inlineCode",{parentName:"p"},"druid.coordinator.asOverlord.enabled")," property.\nFor more information, see ",(0,n.kt)("a",{parentName:"p",href:"/docs/latest/configuration/#coordinator-operation"},"Coordinator Operation"),"."),(0,n.kt)("h3",{id:"historicals-and-middlemanagers"},"Historicals and MiddleManagers"),(0,n.kt)("p",null,"With higher levels of ingestion or query load, it can make sense to deploy the Historical and MiddleManager services on separate hosts to to avoid CPU and memory contention."),(0,n.kt)("p",null,"The Historical service also benefits from having free memory for memory mapped segments, which can be another reason to deploy the Historical and MiddleManager services separately."),(0,n.kt)("h2",{id:"external-dependencies"},"External dependencies"),(0,n.kt)("p",null,"In addition to its built-in service types, Druid also has three external dependencies. These are intended to be able to\nleverage existing infrastructure, where present."),(0,n.kt)("h3",{id:"deep-storage"},"Deep storage"),(0,n.kt)("p",null,"Druid uses deep storage to store any data that has been ingested into the system. Deep storage is shared file\nstorage accessible by every Druid server. In a clustered deployment, this is typically a distributed object store like S3 or\nHDFS, or a network mounted filesystem. In a single-server deployment, this is typically local disk."),(0,n.kt)("p",null,"Druid uses deep storage for the following purposes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"To store all the data you ingest. Segments that get loaded onto Historical services for low latency queries are also kept in deep storage for backup purposes. Additionally, segments that are only in deep storage can be used for ",(0,n.kt)("a",{parentName:"li",href:"/docs/latest/querying/query-deep-storage"},"queries from deep storage"),"."),(0,n.kt)("li",{parentName:"ul"},"As a way to transfer data in the background between Druid services. Druid stores data in files called ",(0,n.kt)("em",{parentName:"li"},"segments"),".")),(0,n.kt)("p",null,"Historical services cache data segments on local disk and serve queries from that cache as well as from an in-memory cache.\nSegments on disk for Historical services provide the low latency querying performance Druid is known for."),(0,n.kt)("p",null,"You can also query directly from deep storage. When you query segments that exist only in deep storage, you trade some performance  for the ability to query more of your data without necessarily having to scale your Historical services."),(0,n.kt)("p",null,"When determining sizing for your storage, keep the following in mind:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Deep storage needs to be able to hold all the data that you ingest into Druid."),(0,n.kt)("li",{parentName:"ul"},"On disk storage for Historical services need to be able to accommodate the data you want to load onto them to run queries. The data on Historical services should be data you access frequently and need to run low latency queries for. ")),(0,n.kt)("p",null,"Deep storage is an important part of Druid's elastic, fault-tolerant design. Druid bootstraps from deep storage even\nif every single data server is lost and re-provisioned."),(0,n.kt)("p",null,"For more details, please see the ",(0,n.kt)("a",{parentName:"p",href:"/docs/latest/design/deep-storage"},"Deep storage")," page."),(0,n.kt)("h3",{id:"metadata-storage"},"Metadata storage"),(0,n.kt)("p",null,"The metadata storage holds various shared system metadata such as segment usage information and task information. In a\nclustered deployment, this is typically a traditional RDBMS like PostgreSQL or MySQL. In a single-server\ndeployment, it is typically a locally-stored Apache Derby database."),(0,n.kt)("p",null,"For more details, please see the ",(0,n.kt)("a",{parentName:"p",href:"/docs/latest/design/metadata-storage"},"Metadata storage")," page."),(0,n.kt)("h3",{id:"zookeeper"},"ZooKeeper"),(0,n.kt)("p",null,"Used for internal service discovery, coordination, and leader election."),(0,n.kt)("p",null,"For more details, please see the ",(0,n.kt)("a",{parentName:"p",href:"/docs/latest/design/zookeeper"},"ZooKeeper")," page."),(0,n.kt)("h2",{id:"learn-more"},"Learn more"),(0,n.kt)("p",null,"See the following topics for more information:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/latest/design/storage"},"Storage components")," to learn about data storage in Druid."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/latest/design/segments"},"Segments")," to learn about segment files."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/latest/querying/query-processing"},"Query processing")," for a high-level overview of how Druid processes queries.")))}h.isMDXComponent=!0},26722:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/druid-architecture-7db1cd79d2d70b2e5ccc73b6bebfcaa4.svg"},30018:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/services-overview-626a864a11edcf4945591a35d4a3814c.png"}}]);
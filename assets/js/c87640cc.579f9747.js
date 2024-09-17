"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3687],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=a,h=m["".concat(l,".").concat(u)]||m[u]||p[u]||i;return n?o.createElement(h,r(r({ref:t},d),{},{components:n})):o.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},73928:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var o=n(87462),a=n(63366),i=(n(67294),n(3905)),r=["components"],s={id:"coordinator",title:"Coordinator service",sidebar_label:"Coordinator"},l=void 0,c={unversionedId:"design/coordinator",id:"design/coordinator",title:"Coordinator service",description:"\x3c!--",source:"@site/docs/30.0.1/design/coordinator.md",sourceDirName:"design",slug:"/design/coordinator",permalink:"/docs/30.0.1/design/coordinator",draft:!1,tags:[],version:"current",frontMatter:{id:"coordinator",title:"Coordinator service",sidebar_label:"Coordinator"},sidebar:"docs",previous:{title:"Architecture",permalink:"/docs/30.0.1/design/architecture"},next:{title:"Overlord",permalink:"/docs/30.0.1/design/overlord"}},d={},m=[{value:"Configuration",id:"configuration",level:2},{value:"HTTP endpoints",id:"http-endpoints",level:2},{value:"Running",id:"running",level:2},{value:"Rules",id:"rules",level:2},{value:"Clean up overshadowed segments",id:"clean-up-overshadowed-segments",level:3},{value:"Clean up non-overshadowed eternity tombstone segments",id:"clean-up-non-overshadowed-eternity-tombstone-segments",level:3},{value:"Segment availability",id:"segment-availability",level:2},{value:"Balancing segment load",id:"balancing-segment-load",level:2},{value:"Automatic compaction",id:"automatic-compaction",level:2},{value:"Segment search policy in automatic compaction",id:"segment-search-policy-in-automatic-compaction",level:2},{value:"FAQ",id:"faq",level:2}],p={toc:m},u="wrapper";function h(e){var t=e.components,n=(0,a.Z)(e,r);return(0,i.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'The Coordinator service is primarily responsible for segment management and distribution. More specifically, the\nCoordinator service communicates to Historical services to load or drop segments based on configurations. The Coordinator is responsible for loading new segments, dropping outdated segments, ensuring that segments are "replicated" (that is, loaded on multiple different Historical nodes) proper (configured) number of times, and moving\n("balancing") segments between Historical nodes to keep the latter evenly loaded.'),(0,i.kt)("p",null,'The Coordinator runs its duties periodically and the time between each run is a configurable parameter. On each\nrun, the Coordinator assesses the current state of the cluster before deciding on the appropriate actions to take.\nSimilar to the Broker and Historical services, the Coordinator maintains a connection to a ZooKeeper cluster for\ncurrent cluster information. The Coordinator also maintains a connection to a database containing information about\n"used" segments (that is, the segments that ',(0,i.kt)("em",{parentName:"p"},"should")," be loaded in the cluster) and the loading rules."),(0,i.kt)("p",null,"Before any unassigned segments are serviced by Historical services, the Historical services for each tier are first\nsorted in terms of capacity, with least capacity servers having the highest priority. Unassigned segments are always\nassigned to the services with least capacity to maintain a level of balance between services. The Coordinator does not\ndirectly communicate with a Historical service when assigning it a new segment; instead the Coordinator creates some\ntemporary information about the new segment under load queue path of the Historical service. Once this request is seen,\nthe Historical service loads the segment and begins servicing it."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"For Apache Druid Coordinator service configuration, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/30.0.1/configuration/#coordinator"},"Coordinator configuration"),"."),(0,i.kt)("p",null,"For basic tuning guidance for the Coordinator service, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/30.0.1/operations/basic-cluster-tuning#coordinator"},"Basic cluster tuning"),"."),(0,i.kt)("h2",{id:"http-endpoints"},"HTTP endpoints"),(0,i.kt)("p",null,"For a list of API endpoints supported by the Coordinator, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/30.0.1/api-reference/service-status-api#coordinator"},"Service status API reference"),"."),(0,i.kt)("h2",{id:"running"},"Running"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"org.apache.druid.cli.Main server coordinator\n")),(0,i.kt)("h2",{id:"rules"},"Rules"),(0,i.kt)("p",null,"Segments can be automatically loaded and dropped from the cluster based on a set of rules. For more information on rules, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/30.0.1/operations/rule-configuration"},"Rule Configuration"),"."),(0,i.kt)("h3",{id:"clean-up-overshadowed-segments"},"Clean up overshadowed segments"),(0,i.kt)("p",null,"On each run, the Coordinator compares the set of used segments in the database with the segments served by some\nHistorical nodes in the cluster. The Coordinator sends requests to Historical nodes to unload unused segments or segments\nthat are removed from the database."),(0,i.kt)("p",null,"Segments that are overshadowed (their versions are too old and their data has been replaced by newer segments) are\nmarked as unused. During the next Coordinator's run, they will be unloaded from Historical nodes in the cluster."),(0,i.kt)("h3",{id:"clean-up-non-overshadowed-eternity-tombstone-segments"},"Clean up non-overshadowed eternity tombstone segments"),(0,i.kt)("p",null,"On each run, the Coordinator determines and cleans up unneeded eternity tombstone segments for each datasource. These segments must fit all the following criteria:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It is a tombstone segment that starts at -INF or ends at INF (for example, a tombstone with an interval of ",(0,i.kt)("inlineCode",{parentName:"li"},"-146136543-09-08T08:23:32.096Z/2000-01-01")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"2020-01-01/146140482-04-24T15:36:27.903Z")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"-146136543-09-08T08:23:32.096Z/146140482-04-24T15:36:27.903Z"),")"),(0,i.kt)("li",{parentName:"ul"},"It does not overlap with any overshadowed segment"),(0,i.kt)("li",{parentName:"ul"},"It has 0 core partitions")),(0,i.kt)("h2",{id:"segment-availability"},"Segment availability"),(0,i.kt)("p",null,"If a Historical service restarts or becomes unavailable for any reason, the Coordinator will notice a service has gone missing and treat all segments served by that service as being dropped. Given a sufficient period of time, the segments may be reassigned to other Historical services in the cluster. However, each segment that is dropped is not immediately forgotten. Instead, there is a transitional data structure that stores all dropped segments with an associated lifetime. The lifetime represents a period of time in which the Coordinator will not reassign a dropped segment. Hence, if a Historical service becomes unavailable and available again within a short period of time, the Historical service will start up and serve segments from its cache without any those segments being reassigned across the cluster."),(0,i.kt)("h2",{id:"balancing-segment-load"},"Balancing segment load"),(0,i.kt)("p",null,"To ensure an even distribution of segments across Historical services in the cluster, the Coordinator service will find the total size of all segments being served by every Historical service each time the Coordinator runs. For every Historical service tier in the cluster, the Coordinator service will determine the Historical service with the highest utilization and the Historical service with the lowest utilization. The percent difference in utilization between the two services is computed, and if the result exceeds a certain threshold, a number of segments will be moved from the highest utilized service to the lowest utilized service. There is a configurable limit on the number of segments that can be moved from one service to another each time the Coordinator runs. Segments to be moved are selected at random and only moved if the resulting utilization calculation indicates the percentage difference between the highest and lowest servers has decreased."),(0,i.kt)("h2",{id:"automatic-compaction"},"Automatic compaction"),(0,i.kt)("p",null,"The Coordinator manages the ",(0,i.kt)("a",{parentName:"p",href:"/docs/30.0.1/data-management/automatic-compaction"},"automatic compaction system"),".\nEach run, the Coordinator compacts segments by merging small segments or splitting a large one. This is useful when the size of your segments is not optimized which may degrade query performance.\nSee ",(0,i.kt)("a",{parentName:"p",href:"/docs/30.0.1/operations/segment-optimization"},"Segment size optimization")," for details."),(0,i.kt)("p",null,"The Coordinator first finds the segments to compact based on the ",(0,i.kt)("a",{parentName:"p",href:"#segment-search-policy-in-automatic-compaction"},"segment search policy"),".\nOnce some segments are found, it issues a ",(0,i.kt)("a",{parentName:"p",href:"/docs/30.0.1/ingestion/tasks#compact"},"compaction task")," to compact those segments.\nThe maximum number of running compaction tasks is ",(0,i.kt)("inlineCode",{parentName:"p"},"min(sum of worker capacity * slotRatio, maxSlots)"),".\nNote that even if ",(0,i.kt)("inlineCode",{parentName:"p"},"min(sum of worker capacity * slotRatio, maxSlots) = 0"),", at least one compaction task is always submitted\nif the compaction is enabled for a dataSource.\nSee ",(0,i.kt)("a",{parentName:"p",href:"/docs/30.0.1/api-reference/automatic-compaction-api#manage-automatic-compaction"},"Automatic compaction configuration API")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/30.0.1/configuration/#automatic-compaction-dynamic-configuration"},"Automatic compaction configuration")," to enable and configure automatic compaction."),(0,i.kt)("p",null,"Compaction tasks might fail due to the following reasons:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If the input segments of a compaction task are removed or overshadowed before it starts, that compaction task fails immediately."),(0,i.kt)("li",{parentName:"ul"},"If a task of a higher priority acquires a ",(0,i.kt)("a",{parentName:"li",href:"/docs/30.0.1/ingestion/tasks#locking"},"time chunk lock")," for an interval overlapping with the interval of a compaction task, the compaction task fails.")),(0,i.kt)("p",null,"Once a compaction task fails, the Coordinator simply checks the segments in the interval of the failed task again, and issues another compaction task in the next run."),(0,i.kt)("p",null,"Note that Compacting Segments Coordinator Duty is automatically enabled and run as part of the Indexing Service Duties group. However, Compacting Segments Coordinator Duty can be configured to run in isolation as a separate Coordinator duty group. This allows changing the period of Compacting Segments Coordinator Duty without impacting the period of other Indexing Service Duties. This can be done by setting the following properties. For more details, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/30.0.1/development/modules#adding-your-own-custom-pluggable-coordinator-duty"},"custom pluggable Coordinator Duty"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'druid.coordinator.dutyGroups=[<SOME_GROUP_NAME>]\ndruid.coordinator.<SOME_GROUP_NAME>.duties=["compactSegments"]\ndruid.coordinator.<SOME_GROUP_NAME>.period=<PERIOD_TO_RUN_COMPACTING_SEGMENTS_DUTY>\n')),(0,i.kt)("h2",{id:"segment-search-policy-in-automatic-compaction"},"Segment search policy in automatic compaction"),(0,i.kt)("p",null,"At every Coordinator run, this policy looks up time chunks from newest to oldest and checks whether the segments in those time chunks\nneed compaction.\nA set of segments needs compaction if all conditions below are satisfied:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Total size of segments in the time chunk is smaller than or equal to the configured ",(0,i.kt)("inlineCode",{parentName:"li"},"inputSegmentSizeBytes"),"."),(0,i.kt)("li",{parentName:"ul"},"Segments have never been compacted yet or compaction spec has been updated since the last compaction: ",(0,i.kt)("inlineCode",{parentName:"li"},"maxTotalRows")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"indexSpec"),".")),(0,i.kt)("p",null,"Here are some details with an example. Suppose we have two dataSources (",(0,i.kt)("inlineCode",{parentName:"p"},"foo"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"bar"),") as seen below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"foo"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"foo_2017-11-01T00:00:00.000Z_2017-12-01T00:00:00.000Z_VERSION")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"foo_2017-11-01T00:00:00.000Z_2017-12-01T00:00:00.000Z_VERSION_1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"foo_2017-09-01T00:00:00.000Z_2017-10-01T00:00:00.000Z_VERSION")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bar"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bar_2017-10-01T00:00:00.000Z_2017-11-01T00:00:00.000Z_VERSION")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bar_2017-10-01T00:00:00.000Z_2017-11-01T00:00:00.000Z_VERSION_1"))))),(0,i.kt)("p",null,"Assuming that each segment is 10 MB and haven't been compacted yet, this policy first returns two segments of\n",(0,i.kt)("inlineCode",{parentName:"p"},"foo_2017-11-01T00:00:00.000Z_2017-12-01T00:00:00.000Z_VERSION")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"foo_2017-11-01T00:00:00.000Z_2017-12-01T00:00:00.000Z_VERSION_1")," to compact together because\n",(0,i.kt)("inlineCode",{parentName:"p"},"2017-11-01T00:00:00.000Z/2017-12-01T00:00:00.000Z")," is the most recent time chunk."),(0,i.kt)("p",null,"If the Coordinator has enough task slots for compaction, this policy will continue searching for the next segments and return\n",(0,i.kt)("inlineCode",{parentName:"p"},"bar_2017-10-01T00:00:00.000Z_2017-11-01T00:00:00.000Z_VERSION")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"bar_2017-10-01T00:00:00.000Z_2017-11-01T00:00:00.000Z_VERSION_1"),".\nFinally, ",(0,i.kt)("inlineCode",{parentName:"p"},"foo_2017-09-01T00:00:00.000Z_2017-10-01T00:00:00.000Z_VERSION")," will be picked up even though there is only one segment in the time chunk of ",(0,i.kt)("inlineCode",{parentName:"p"},"2017-09-01T00:00:00.000Z/2017-10-01T00:00:00.000Z"),"."),(0,i.kt)("p",null,"The search start point can be changed by setting ",(0,i.kt)("inlineCode",{parentName:"p"},"skipOffsetFromLatest"),".\nIf this is set, this policy will ignore the segments falling into the time chunk of (the end time of the most recent segment - ",(0,i.kt)("inlineCode",{parentName:"p"},"skipOffsetFromLatest"),").\nThis is to avoid conflicts between compaction tasks and realtime tasks.\nNote that realtime tasks have a higher priority than compaction tasks by default. Realtime tasks will revoke the locks of compaction tasks if their intervals overlap, resulting in the termination of the compaction task.\nFor more information, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/30.0.1/data-management/automatic-compaction#avoid-conflicts-with-ingestion"},"Avoid conflicts with ingestion"),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"}," This policy currently cannot handle the situation when there are a lot of small segments which have the same interval,\nand their total size exceeds ",(0,i.kt)("a",{parentName:"p",href:"/docs/30.0.1/configuration/#automatic-compaction-dynamic-configuration"},(0,i.kt)("inlineCode",{parentName:"a"},"inputSegmentSizeBytes")),".\nIf it finds such segments, it simply skips them.")),(0,i.kt)("h2",{id:"faq"},"FAQ"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Do clients ever contact the Coordinator service?")),(0,i.kt)("p",{parentName:"li"},"The Coordinator is not involved in a query."),(0,i.kt)("p",{parentName:"li"},"Historical services never directly contact the Coordinator service. The Coordinator tells the Historical services to load/drop data via ZooKeeper, but the Historical services are completely unaware of the Coordinator."),(0,i.kt)("p",{parentName:"li"},"Brokers also never contact the Coordinator. Brokers base their understanding of the data topology on metadata exposed by the Historical services via ZooKeeper and are completely unaware of the Coordinator.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Does it matter if the Coordinator service starts up before or after other services?")),(0,i.kt)("p",{parentName:"li"},"No. If the Coordinator is not started up, no new segments will be loaded in the cluster and outdated segments will not be dropped. However, the Coordinator service can be started up at any time, and after a configurable delay, will start running Coordinator tasks."),(0,i.kt)("p",{parentName:"li"},"This also means that if you have a working cluster and all of your Coordinators die, the cluster will continue to function, it just won\u2019t experience any changes to its data topology."))))}h.isMDXComponent=!0}}]);
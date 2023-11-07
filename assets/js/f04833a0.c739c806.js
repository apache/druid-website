"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8390],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var o=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)a=i[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=o.createContext({}),s=function(e){var t=o.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},u=function(e){var t=s(e.components);return o.createElement(d.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(a),m=r,f=c["".concat(d,".").concat(m)]||c[m]||p[m]||i;return a?o.createElement(f,n(n({ref:t},u),{},{components:a})):o.createElement(f,n({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,n=new Array(i);n[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:r,n[1]=l;for(var s=2;s<i;s++)n[s]=a[s];return o.createElement.apply(null,n)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},40532:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var o=a(87462),r=a(63366),i=(a(67294),a(3905)),n=["components"],l={id:"clean-metadata-store",title:"Automated cleanup for metadata records",sidebar_label:"Automated metadata cleanup",description:"Defines a strategy to maintain Druid metadata store performance by automatically removing leftover records for deleted entities: datasources, supervisors, rules, compaction configuration, audit records, etc. Most applicable to databases with 'high-churn' datasources."},d=void 0,s={unversionedId:"operations/clean-metadata-store",id:"operations/clean-metadata-store",title:"Automated cleanup for metadata records",description:"Defines a strategy to maintain Druid metadata store performance by automatically removing leftover records for deleted entities: datasources, supervisors, rules, compaction configuration, audit records, etc. Most applicable to databases with 'high-churn' datasources.",source:"@site/docs/latest/operations/clean-metadata-store.md",sourceDirName:"operations",slug:"/operations/clean-metadata-store",permalink:"/docs/latest/operations/clean-metadata-store",draft:!1,tags:[],version:"current",frontMatter:{id:"clean-metadata-store",title:"Automated cleanup for metadata records",sidebar_label:"Automated metadata cleanup",description:"Defines a strategy to maintain Druid metadata store performance by automatically removing leftover records for deleted entities: datasources, supervisors, rules, compaction configuration, audit records, etc. Most applicable to databases with 'high-churn' datasources."},sidebar:"docs",previous:{title:"HTTP compression",permalink:"/docs/latest/operations/http-compression"},next:{title:"Request logging",permalink:"/docs/latest/operations/request-logging"}},u={},c=[{value:"Automated cleanup strategies",id:"automated-cleanup-strategies",level:2},{value:"Configure automated metadata cleanup",id:"configure-automated-metadata-cleanup",level:2},{value:"Audit records",id:"audit-records",level:3},{value:"Supervisor records",id:"supervisor-records",level:3},{value:"Rules records",id:"rules-records",level:3},{value:"Compaction configuration records",id:"compaction-configuration-records",level:3},{value:"Datasource records created by supervisors",id:"datasource-records-created-by-supervisors",level:3},{value:"Indexer task logs",id:"indexer-task-logs",level:3},{value:"Disable automated metadata cleanup",id:"disable-automated-metadata-cleanup",level:2},{value:"Learn more",id:"learn-more",level:2}],p={toc:c},m="wrapper";function f(e){var t=e.components,a=(0,r.Z)(e,n);return(0,i.kt)(m,(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Apache Druid relies on ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/design/metadata-storage"},"metadata storage")," to track information on data storage, operations, and system configuration.\nThe metadata store includes the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Segment records"),(0,i.kt)("li",{parentName:"ul"},"Audit records"),(0,i.kt)("li",{parentName:"ul"},"Supervisor records"),(0,i.kt)("li",{parentName:"ul"},"Rule records"),(0,i.kt)("li",{parentName:"ul"},"Compaction configuration records"),(0,i.kt)("li",{parentName:"ul"},"Datasource records created by supervisors"),(0,i.kt)("li",{parentName:"ul"},"Indexer task logs")),(0,i.kt)("p",null,"When you delete some entities from Apache Druid, records related to the entity may remain in the metadata store.\nIf you have a high datasource churn rate, meaning you frequently create and delete many short-lived datasources or other related entities like compaction configuration or rules, the leftover records can fill your metadata store and cause performance issues.\nTo maintain metadata store performance, you can configure Apache Druid to automatically remove records associated with deleted entities from the metadata store."),(0,i.kt)("p",null,"By default, Druid automatically cleans up metadata older than 90 days.\nThis applies to all metadata entities in this topic except compaction configuration records and indexer task logs, for which cleanup is disabled by default.\nYou can configure the retention period for each metadata type, when available, through the record's ",(0,i.kt)("inlineCode",{parentName:"p"},"durationToRetain")," property.\nCertain records may require additional conditions be satisfied before clean up occurs."),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"#example"},"example")," for how you can customize the automated metadata cleanup for a specific use case."),(0,i.kt)("h2",{id:"automated-cleanup-strategies"},"Automated cleanup strategies"),(0,i.kt)("p",null,"There are several cases when you should consider automated cleanup of the metadata related to deleted datasources:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you know you have many high-churn datasources, for example, you have scripts that create and delete supervisors regularly."),(0,i.kt)("li",{parentName:"ul"},"If you have issues with the hard disk for your metadata database filling up."),(0,i.kt)("li",{parentName:"ul"},"If you run into performance issues with the metadata database. For example, API calls are very slow or fail to execute.")),(0,i.kt)("p",null,"If you have compliance requirements to keep audit records and you enable automated cleanup for audit records, use alternative methods to preserve audit metadata, for example, by periodically exporting audit metadata records to external storage."),(0,i.kt)("h2",{id:"configure-automated-metadata-cleanup"},"Configure automated metadata cleanup"),(0,i.kt)("p",null,"You can configure cleanup for each entity separately, as described in this section.\nDefine the properties in the ",(0,i.kt)("inlineCode",{parentName:"p"},"coordinator/runtime.properties")," file."),(0,i.kt)("p",null,"The cleanup of one entity may depend on the cleanup of another entity as follows:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You have to configure a ",(0,i.kt)("a",{parentName:"li",href:"#kill-task"},"kill task for segment records")," before you can configure automated cleanup for ",(0,i.kt)("a",{parentName:"li",href:"#rules-records"},"rules")," or ",(0,i.kt)("a",{parentName:"li",href:"#compaction-configuration-records"},"compaction configuration"),"."),(0,i.kt)("li",{parentName:"ul"},"You have to schedule the metadata management tasks to run at the same or higher frequency as your most frequent cleanup job. For example, if your most frequent cleanup job is every hour, set the metadata store management period to one hour or less: ",(0,i.kt)("inlineCode",{parentName:"li"},"druid.coordinator.period.metadataStoreManagementPeriod=P1H"),".")),(0,i.kt)("p",null,"For details on configuration properties, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/configuration/#metadata-management"},"Metadata management"),".\nIf you want to skip the details, check out the ",(0,i.kt)("a",{parentName:"p",href:"#example"},"example")," for configuring automated metadata cleanup."),(0,i.kt)("a",{name:"kill-task"}),"### Segment records and segments in deep storage (kill task)",(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"}," The kill task is the only configuration in this topic that affects actual data in deep storage and not simply metadata or logs.")),(0,i.kt)("p",null,"Segment records and segments in deep storage become eligible for deletion when both of the following conditions hold:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When they meet the eligibility requirement of kill task datasource configuration according to ",(0,i.kt)("inlineCode",{parentName:"li"},"killDataSourceWhitelist")," set in the Coordinator dynamic configuration. See ",(0,i.kt)("a",{parentName:"li",href:"/docs/latest/configuration/#dynamic-configuration"},"Dynamic configuration"),"."),(0,i.kt)("li",{parentName:"ul"},"When the ",(0,i.kt)("inlineCode",{parentName:"li"},"durationToRetain")," time has passed since their creation.")),(0,i.kt)("p",null,"Kill tasks use the following configuration:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"druid.coordinator.kill.on"),": When ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", enables the Coordinator to submit a kill task for unused segments, which deletes them completely from metadata store and from deep storage.\nOnly applies to the specified datasources in the dynamic configuration parameter ",(0,i.kt)("inlineCode",{parentName:"li"},"killDataSourceWhitelist"),".\nIf ",(0,i.kt)("inlineCode",{parentName:"li"},"killDataSourceWhitelist")," is not set or empty, then kill tasks can be submitted for all datasources."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"druid.coordinator.kill.period"),": Defines the frequency in ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/ISO_8601#Durations"},"ISO 8601 format")," for the cleanup job to check for and delete eligible segments. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"P1D"),". Must be greater than ",(0,i.kt)("inlineCode",{parentName:"li"},"druid.coordinator.period.indexingPeriod"),". "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"druid.coordinator.kill.durationToRetain"),": Defines the retention period in ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/ISO_8601#Durations"},"ISO 8601 format")," after creation that segments become eligible for deletion."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"druid.coordinator.kill.maxSegments"),": Defines the maximum number of segments to delete per kill task.")),(0,i.kt)("h3",{id:"audit-records"},"Audit records"),(0,i.kt)("p",null,"All audit records become eligible for deletion when the ",(0,i.kt)("inlineCode",{parentName:"p"},"durationToRetain")," time has passed since their creation."),(0,i.kt)("p",null,"Audit cleanup uses the following configuration:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"druid.coordinator.kill.audit.on"),": When ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", enables cleanup for audit records."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"druid.coordinator.kill.audit.period"),": Defines the frequency in ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/ISO_8601#Durations"},"ISO 8601 format")," for the cleanup job to check for and delete eligible audit records. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"P1D"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"druid.coordinator.kill.audit.durationToRetain"),": Defines the retention period in ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/ISO_8601#Durations"},"ISO 8601 format")," after creation that audit records become eligible for deletion.")),(0,i.kt)("h3",{id:"supervisor-records"},"Supervisor records"),(0,i.kt)("p",null,"Supervisor records become eligible for deletion when the supervisor is terminated and the ",(0,i.kt)("inlineCode",{parentName:"p"},"durationToRetain")," time has passed since their creation."),(0,i.kt)("p",null,"Supervisor cleanup uses the following configuration:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"druid.coordinator.kill.supervisor.on"),": When ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", enables cleanup for supervisor records."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"druid.coordinator.kill.supervisor.period"),": Defines the frequency in ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/ISO_8601#Durations"},"ISO 8601 format")," for the cleanup job to check for and delete eligible supervisor records. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"P1D"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"druid.coordinator.kill.supervisor.durationToRetain"),": Defines the retention period in ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/ISO_8601#Durations"},"ISO 8601 format")," after creation that supervisor records become eligible for deletion.")),(0,i.kt)("h3",{id:"rules-records"},"Rules records"),(0,i.kt)("p",null,"Rule records become eligible for deletion when all segments for the datasource have been killed by the kill task and the ",(0,i.kt)("inlineCode",{parentName:"p"},"durationToRetain")," time has passed since their creation. Automated cleanup for rules requires a ",(0,i.kt)("a",{parentName:"p",href:"#kill-task"},"kill task"),"."),(0,i.kt)("p",null,"Rule cleanup uses the following configuration:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"druid.coordinator.kill.rule.on"),": When ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", enables cleanup for rules records."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"druid.coordinator.kill.rule.period"),": Defines the frequency in ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/ISO_8601#Durations"},"ISO 8601 format")," for the cleanup job to check for and delete eligible rules records. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"P1D"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"druid.coordinator.kill.rule.durationToRetain"),": Defines the retention period in ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/ISO_8601#Durations"},"ISO 8601 format")," after creation that rules records become eligible for deletion.")),(0,i.kt)("h3",{id:"compaction-configuration-records"},"Compaction configuration records"),(0,i.kt)("p",null,"Druid retains all compaction configuration records by default, which should be suitable for most use cases.\nIf you create and delete short-lived datasources with high frequency, and you set auto compaction configuration on those datasources, then consider turning on automated cleanup of compaction configuration records."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"}," With automated cleanup of compaction configuration records, if you create a compaction configuration for some datasource before the datasource exists, for example if initial ingestion is still ongoing, Druid may remove the compaction configuration.\nTo prevent the configuration from being prematurely removed, wait for the datasource to be created before applying the compaction configuration to the datasource.")),(0,i.kt)("p",null,"Unlike other metadata records, compaction configuration records do not have a retention period set by ",(0,i.kt)("inlineCode",{parentName:"p"},"durationToRetain"),". Druid deletes compaction configuration records at every cleanup cycle for inactive datasources, which do not have segments either used or unused."),(0,i.kt)("p",null,"Compaction configuration records in the ",(0,i.kt)("inlineCode",{parentName:"p"},"druid_config")," table become eligible for deletion after all segments for the datasource have been killed by the kill task. Automated cleanup for compaction configuration requires a ",(0,i.kt)("a",{parentName:"p",href:"#kill-task"},"kill task"),"."),(0,i.kt)("p",null,"Compaction configuration cleanup uses the following configuration:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"druid.coordinator.kill.compaction.on"),": When ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", enables cleanup for compaction configuration records."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"druid.coordinator.kill.compaction.period"),": Defines the frequency in ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/ISO_8601#Durations"},"ISO 8601 format")," for the cleanup job to check for and delete eligible compaction configuration records. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"P1D"),".")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If you already have an extremely large compaction configuration, you may not be able to delete compaction configuration due to size limits with the audit log. In this case you can set ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.audit.manager.maxPayloadSizeBytes")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.audit.manager.skipNullField")," to avoid the auditing issue. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/configuration/#audit-logging"},"Audit logging"),".")),(0,i.kt)("h3",{id:"datasource-records-created-by-supervisors"},"Datasource records created by supervisors"),(0,i.kt)("p",null,"Datasource records created by supervisors become eligible for deletion when the supervisor is terminated or does not exist in the ",(0,i.kt)("inlineCode",{parentName:"p"},"druid_supervisors")," table and the ",(0,i.kt)("inlineCode",{parentName:"p"},"durationToRetain")," time has passed since their creation."),(0,i.kt)("p",null,"Datasource cleanup uses the following configuration:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"druid.coordinator.kill.datasource.on"),": When ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", enables cleanup datasources created by supervisors."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"druid.coordinator.kill.datasource.period"),": Defines the frequency in ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/ISO_8601#Durations"},"ISO 8601 format")," for the cleanup job to check for and delete eligible datasource records. Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"P1D"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"druid.coordinator.kill.datasource.durationToRetain"),": Defines the retention period in ",(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/ISO_8601#Durations"},"ISO 8601 format")," after creation that datasource records become eligible for deletion.")),(0,i.kt)("h3",{id:"indexer-task-logs"},"Indexer task logs"),(0,i.kt)("p",null,"You can configure the Overlord to periodically delete indexer task logs and associated metadata. During cleanup, the Overlord removes the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Indexer task logs from deep storage."),(0,i.kt)("li",{parentName:"ul"},"Indexer task log metadata from the tasks and tasklogs tables in ",(0,i.kt)("a",{parentName:"li",href:"/docs/latest/configuration/#metadata-storage"},"metadata storage")," (named ",(0,i.kt)("inlineCode",{parentName:"li"},"druid_tasks")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"druid_tasklogs")," by default). Druid no longer uses the tasklogs table, and the table is always empty.")),(0,i.kt)("p",null,"To configure cleanup of task logs by the Overlord, set the following properties in the ",(0,i.kt)("inlineCode",{parentName:"p"},"overlord/runtime.properties")," file."),(0,i.kt)("p",null,"Indexer task log cleanup on the Overlord uses the following configuration:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"druid.indexer.logs.kill.enabled"),": When ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", enables cleanup of task logs."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"druid.indexer.logs.kill.durationToRetain"),": Defines the length of time in milliseconds to retain task logs."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"druid.indexer.logs.kill.initialDelay"),": Defines the length of time in milliseconds after the Overlord starts before it executes its first job to kill task logs."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"druid.indexer.logs.kill.delay"),": The length of time in milliseconds between jobs to kill task logs.")),(0,i.kt)("p",null,"For more detail, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/configuration/#task-logging"},"Task logging"),"."),(0,i.kt)("h2",{id:"disable-automated-metadata-cleanup"},"Disable automated metadata cleanup"),(0,i.kt)("p",null,"Druid automatically cleans up metadata records, excluding compaction configuration records and indexer task logs.\nTo disable automated metadata cleanup, set the following properties in the ",(0,i.kt)("inlineCode",{parentName:"p"},"coordinator/runtime.properties")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"# Keep unused segments\ndruid.coordinator.kill.on=false\n\n# Keep audit records\ndruid.coordinator.kill.audit.on=false\n\n# Keep supervisor records\ndruid.coordinator.kill.supervisor.on=false\n\n# Keep rules records\ndruid.coordinator.kill.rule.on=false\n\n# Keep datasource records created by supervisors\ndruid.coordinator.kill.datasource.on=false\n")),(0,i.kt)("a",{name:"example"}),"## Example configuration for automated metadata cleanup",(0,i.kt)("p",null,"Consider a scenario where you have scripts to create and delete hundreds of datasources and related entities a day. You do not want to fill your metadata store with leftover records. The datasources and related entities tend to persist for only one or two days. Therefore, you want to run a cleanup job that identifies and removes leftover records that are at least four days old. The exception is for audit logs, which you need to retain for 30 days:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"...\n# Schedule the metadata management store task for every hour:\ndruid.coordinator.period.metadataStoreManagementPeriod=P1H\n\n# Set a kill task to poll every day to delete Segment records and segments\n# in deep storage > 4 days old. When druid.coordinator.kill.on is set to true,\n# you can set killDataSourceWhitelist in the dynamic configuration to limit\n# the datasources that can be killed.\n# Required also for automated cleanup of rules and compaction configuration.\n\ndruid.coordinator.kill.on=true\ndruid.coordinator.kill.period=P1D\ndruid.coordinator.kill.durationToRetain=P4D\ndruid.coordinator.kill.maxSegments=1000\n\n# Poll every day to delete audit records > 30 days old\ndruid.coordinator.kill.audit.on=true\ndruid.coordinator.kill.audit.period=P1D\ndruid.coordinator.kill.audit.durationToRetain=P30D\n\n# Poll every day to delete supervisor records > 4 days old\ndruid.coordinator.kill.supervisor.on=true\ndruid.coordinator.kill.supervisor.period=P1D\ndruid.coordinator.kill.supervisor.durationToRetain=P4D\n\n# Poll every day to delete rules records > 4 days old\ndruid.coordinator.kill.rule.on=true\ndruid.coordinator.kill.rule.period=P1D\ndruid.coordinator.kill.rule.durationToRetain=P4D\n\n# Poll every day to delete compaction configuration records\ndruid.coordinator.kill.compaction.on=true\ndruid.coordinator.kill.compaction.period=P1D\n\n# Poll every day to delete datasource records created by supervisors > 4 days old\ndruid.coordinator.kill.datasource.on=true\ndruid.coordinator.kill.datasource.period=P1D\ndruid.coordinator.kill.datasource.durationToRetain=P4D\n...\n")),(0,i.kt)("h2",{id:"learn-more"},"Learn more"),(0,i.kt)("p",null,"See the following topics for more information:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/latest/configuration/#metadata-management"},"Metadata management")," for metadata store configuration reference."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/latest/design/metadata-storage"},"Metadata storage")," for an overview of the metadata storage database.")))}f.isMDXComponent=!0}}]);
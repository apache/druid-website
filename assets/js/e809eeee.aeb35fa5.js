"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[26],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(o),c=a,m=d["".concat(s,".").concat(c)]||d[c]||k[c]||r;return o?n.createElement(m,i(i({ref:t},u),{},{components:o})):n.createElement(m,i({ref:t},u))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=o[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},43655:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var n=o(87462),a=o(63366),r=(o(67294),o(3905)),i=["components"],l={id:"lookups",title:"Lookups"},s=void 0,p={unversionedId:"querying/lookups",id:"querying/lookups",title:"Lookups",description:"\x3c!--",source:"@site/docs/26.0.0/querying/lookups.md",sourceDirName:"querying",slug:"/querying/lookups",permalink:"/docs/26.0.0/querying/lookups",draft:!1,tags:[],version:"current",frontMatter:{id:"lookups",title:"Lookups"},sidebar:"docs",previous:{title:"Joins",permalink:"/docs/26.0.0/querying/joins"},next:{title:"Multi-value dimensions",permalink:"/docs/26.0.0/querying/multi-value-dimensions"}},u={},d=[{value:"Query Syntax",id:"query-syntax",level:2},{value:"Query Execution",id:"query-execution",level:2},{value:"Dynamic Configuration",id:"dynamic-configuration",level:2},{value:"Configuration propagation behavior",id:"configuration-propagation-behavior",level:2},{value:"API for configuring lookups",id:"api-for-configuring-lookups",level:2},{value:"Bulk update",id:"bulk-update",level:3},{value:"Update lookup",id:"update-lookup",level:3},{value:"Get all lookups",id:"get-all-lookups",level:3},{value:"Get lookup",id:"get-lookup",level:3},{value:"Delete lookup",id:"delete-lookup",level:3},{value:"Delete tier",id:"delete-tier",level:3},{value:"List tier names",id:"list-tier-names",level:3},{value:"List lookup names",id:"list-lookup-names",level:3},{value:"API for lookup status",id:"api-for-lookup-status",level:2},{value:"List load status of all lookups",id:"list-load-status-of-all-lookups",level:3},{value:"List load status of lookups in a tier",id:"list-load-status-of-lookups-in-a-tier",level:3},{value:"List load status of single lookup",id:"list-load-status-of-single-lookup",level:3},{value:"List lookup state of all processes",id:"list-lookup-state-of-all-processes",level:3},{value:"List lookup state of processes in a tier",id:"list-lookup-state-of-processes-in-a-tier",level:3},{value:"List lookup state of single process",id:"list-lookup-state-of-single-process",level:3},{value:"Internal API",id:"internal-api",level:2},{value:"Get lookups",id:"get-lookups",level:3},{value:"Get lookup",id:"get-lookup-1",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Saving configuration across restarts",id:"saving-configuration-across-restarts",level:2},{value:"Introspect a Lookup",id:"introspect-a-lookup",level:2}],k={toc:d},c="wrapper";function m(e){var t=e.components,o=(0,a.Z)(e,i);return(0,r.kt)(c,(0,n.Z)({},k,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Lookups are a concept in Apache Druid where dimension values are (optionally) replaced with new values, allowing join-like\nfunctionality. Applying lookups in Druid is similar to joining a dimension table in a data warehouse. See\n",(0,r.kt)("a",{parentName:"p",href:"/docs/26.0.0/querying/dimensionspecs"},"dimension specs"),' for more information. For the purpose of these documents, a "key"\nrefers to a dimension value to match, and a "value" refers to its replacement. So if you wanted to map\n',(0,r.kt)("inlineCode",{parentName:"p"},"appid-12345")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"Super Mega Awesome App")," then the key would be ",(0,r.kt)("inlineCode",{parentName:"p"},"appid-12345")," and the value would be\n",(0,r.kt)("inlineCode",{parentName:"p"},"Super Mega Awesome App"),"."),(0,r.kt)("p",null,"It is worth noting that lookups support not just use cases where keys map one-to-one to unique values, such as country\ncode and country name, but also support use cases where multiple IDs map to the same value, e.g. multiple app-ids\nmapping to a single account manager. When lookups are one-to-one, Druid is able to apply additional optimizations at\nquery time; see ",(0,r.kt)("a",{parentName:"p",href:"#query-execution"},"Query execution")," below for more details."),(0,r.kt)("p",null,"Lookups do not have history. They always use the current data. This means that if the chief account manager for a\nparticular app-id changes, and you issue a query with a lookup to store the app-id to account manager relationship,\nit will return the current account manager for that app-id REGARDLESS of the time range over which you query."),(0,r.kt)("p",null,"If you require data time range sensitive lookups, such a use case is not currently supported dynamically at query time,\nand such data belongs in the raw denormalized data for use in Druid."),(0,r.kt)("p",null,'Lookups are generally preloaded in-memory on all servers. But very small lookups (on the order of a few dozen to a few\nhundred entries) can also be passed inline in native queries time using the "map" lookup type. Refer to the\n',(0,r.kt)("a",{parentName:"p",href:"/docs/26.0.0/querying/dimensionspecs"},"dimension specs")," documentation for details."),(0,r.kt)("p",null,"Other lookup types are available as extensions, including:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Globally cached lookups from local files, remote URIs, or JDBC through ",(0,r.kt)("a",{parentName:"li",href:"/docs/26.0.0/development/extensions-core/lookups-cached-global"},"lookups-cached-global"),"."),(0,r.kt)("li",{parentName:"ul"},"Globally cached lookups from a Kafka topic through ",(0,r.kt)("a",{parentName:"li",href:"/docs/26.0.0/development/extensions-core/kafka-extraction-namespace"},"kafka-extraction-namespace"),".")),(0,r.kt)("h2",{id:"query-syntax"},"Query Syntax"),(0,r.kt)("p",null,"In ",(0,r.kt)("a",{parentName:"p",href:"/docs/26.0.0/querying/sql"},"Druid SQL"),", lookups can be queried using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/26.0.0/querying/sql-scalar#string-functions"},(0,r.kt)("inlineCode",{parentName:"a"},"LOOKUP")," function"),", for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n  LOOKUP(store, 'store_to_country') AS country,\n  SUM(revenue)\nFROM sales\nGROUP BY 1\n")),(0,r.kt)("p",null,"They can also be queried using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/26.0.0/querying/datasource#join"},"JOIN operator"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT\n  store_to_country.v AS country,\n  SUM(sales.revenue) AS country_revenue\nFROM\n  sales\n  INNER JOIN lookup.store_to_country ON sales.store = store_to_country.k\nGROUP BY 1\n")),(0,r.kt)("p",null,"In native queries, lookups can be queried with ",(0,r.kt)("a",{parentName:"p",href:"/docs/26.0.0/querying/dimensionspecs"},"dimension specs or extraction functions"),"."),(0,r.kt)("h2",{id:"query-execution"},"Query Execution"),(0,r.kt)("p",null,"When executing an aggregation query involving lookup functions (like the SQL ",(0,r.kt)("a",{parentName:"p",href:"/docs/26.0.0/querying/sql-scalar#string-functions"},(0,r.kt)("inlineCode",{parentName:"a"},"LOOKUP")," function"),',\nDruid can decide to apply them while scanning and aggregating rows, or to apply them after aggregation is complete. It\nis more efficient to apply lookups after aggregation is complete, so Druid will do this if it can. Druid decides this\nby checking if the lookup is marked as "injective" or not. In general, you should set this property for any lookup that\nis naturally one-to-one, to allow Druid to run your queries as fast as possible.'),(0,r.kt)("p",null,"Injective lookups should include ",(0,r.kt)("em",{parentName:"p"},"all")," possible keys that may show up in your dataset, and should also map all keys to\n",(0,r.kt)("em",{parentName:"p"},"unique values"),". This matters because non-injective lookups may map different keys to the same value, which must be\naccounted for during aggregation, lest query results contain two result values that should have been aggregated into\none."),(0,r.kt)("p",null,"This lookup is injective (assuming it contains all possible keys from your data):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"1 -> Foo\n2 -> Bar\n3 -> Billy\n")),(0,r.kt)("p",null,'But this one is not, since both "2" and "3" map to the same value:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"1 -> Foo\n2 -> Bar\n3 -> Bar\n")),(0,r.kt)("p",null,"To tell Druid that your lookup is injective, you must specify ",(0,r.kt)("inlineCode",{parentName:"p"},'"injective" : true')," in the lookup configuration. Druid\nwill not detect this automatically."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Currently, the injective lookup optimization is not triggered when lookups are inputs to a\n",(0,r.kt)("a",{parentName:"p",href:"/docs/26.0.0/querying/datasource#join"},"join datasource"),". It is only used when lookup functions are used directly, without the join\noperator.")),(0,r.kt)("h2",{id:"dynamic-configuration"},"Dynamic Configuration"),(0,r.kt)("p",null,'The following documents the behavior of the cluster-wide config which is accessible through the Coordinator.\nThe configuration is propagated through the concept of "tier" of servers.\nA "tier" is defined as a group of services which should receive a set of lookups.\nFor example, you might have all Historicals be part of ',(0,r.kt)("inlineCode",{parentName:"p"},"__default"),", and Peons be part of individual tiers for the datasources they are tasked with.\nThe tiers for lookups are completely independent of Historical tiers."),(0,r.kt)("p",null,"These configs are accessed using JSON through the following URI template"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"http://<COORDINATOR_IP>:<PORT>/druid/coordinator/v1/lookups/config/{tier}/{id}\n")),(0,r.kt)("p",null,"All URIs below are assumed to have ",(0,r.kt)("inlineCode",{parentName:"p"},"http://<COORDINATOR_IP>:<PORT>")," prepended."),(0,r.kt)("p",null,"If you have NEVER configured lookups before, you MUST post an empty json object ",(0,r.kt)("inlineCode",{parentName:"p"},"{}")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"/druid/coordinator/v1/lookups/config")," to initialize the configuration."),(0,r.kt)("p",null,"These endpoints will return one of the following results:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"404 if the resource is not found"),(0,r.kt)("li",{parentName:"ul"},"400 if there is a problem in the formatting of the request"),(0,r.kt)("li",{parentName:"ul"},"202 if the request was accepted asynchronously (",(0,r.kt)("inlineCode",{parentName:"li"},"POST")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"DELETE"),")"),(0,r.kt)("li",{parentName:"ul"},"200 if the request succeeded (",(0,r.kt)("inlineCode",{parentName:"li"},"GET")," only)")),(0,r.kt)("h2",{id:"configuration-propagation-behavior"},"Configuration propagation behavior"),(0,r.kt)("p",null,"The configuration is propagated to the query serving processes (Broker / Router / Peon / Historical) by the Coordinator.\nThe query serving processes have an internal API for managing lookups on the process and those are used by the Coordinator.\nThe Coordinator periodically checks if any of the processes need to load/drop lookups and updates them appropriately."),(0,r.kt)("p",null,"Please note that only 2 simultaneous lookup configuration propagation requests can be concurrently handled by a single query serving process. This limit is applied to prevent lookup handling from consuming too many server HTTP connections."),(0,r.kt)("h2",{id:"api-for-configuring-lookups"},"API for configuring lookups"),(0,r.kt)("h3",{id:"bulk-update"},"Bulk update"),(0,r.kt)("p",null,"Lookups can be updated in bulk by posting a JSON object to ",(0,r.kt)("inlineCode",{parentName:"p"},"/druid/coordinator/v1/lookups/config"),". The format of the json object is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "<tierName>": {\n        "<lookupName>": {\n          "version": "<version>",\n          "lookupExtractorFactory": {\n            "type": "<someExtractorFactoryType>",\n            "<someExtractorField>": "<someExtractorValue>"\n          }\n        }\n    }\n}\n')),(0,r.kt)("p",null,'Note that "version" is an arbitrary string assigned by the user, when making updates to existing lookup then user would need to specify a lexicographically higher version.'),(0,r.kt)("p",null,"For example, a config might look something like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "__default": {\n    "country_code": {\n      "version": "v0",\n      "lookupExtractorFactory": {\n        "type": "map",\n        "map": {\n          "77483": "United States"\n        }\n      }\n    },\n    "site_id": {\n      "version": "v0",\n      "lookupExtractorFactory": {\n        "type": "cachedNamespace",\n        "extractionNamespace": {\n          "type": "jdbc",\n          "connectorConfig": {\n            "createTables": true,\n            "connectURI": "jdbc:mysql:\\/\\/localhost:3306\\/druid",\n            "user": "druid",\n            "password": "diurd"\n          },\n          "table": "lookupTable",\n          "keyColumn": "country_id",\n          "valueColumn": "country_name",\n          "tsColumn": "timeColumn"\n        },\n        "firstCacheTimeout": 120000,\n        "injective": true\n      }\n    },\n    "site_id_customer1": {\n      "version": "v0",\n      "lookupExtractorFactory": {\n        "type": "map",\n        "map": {\n          "847632": "Internal Use Only"\n        }\n      }\n    },\n    "site_id_customer2": {\n      "version": "v0",\n      "lookupExtractorFactory": {\n        "type": "map",\n        "map": {\n          "AHF77": "Home"\n        }\n      }\n    }\n  },\n  "realtime_customer1": {\n    "country_code": {\n      "version": "v0",\n      "lookupExtractorFactory": {\n        "type": "map",\n        "map": {\n          "77483": "United States"\n        }\n      }\n    },\n    "site_id_customer1": {\n      "version": "v0",\n      "lookupExtractorFactory": {\n        "type": "map",\n        "map": {\n          "847632": "Internal Use Only"\n        }\n      }\n    }\n  },\n  "realtime_customer2": {\n    "country_code": {\n      "version": "v0",\n      "lookupExtractorFactory": {\n        "type": "map",\n        "map": {\n          "77483": "United States"\n        }\n      }\n    },\n    "site_id_customer2": {\n      "version": "v0",\n      "lookupExtractorFactory": {\n        "type": "map",\n        "map": {\n          "AHF77": "Home"\n        }\n      }\n    }\n  }\n}\n')),(0,r.kt)("p",null,"All entries in the map will UPDATE existing entries. No entries will be deleted."),(0,r.kt)("h3",{id:"update-lookup"},"Update lookup"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"POST")," to a particular lookup extractor factory via ",(0,r.kt)("inlineCode",{parentName:"p"},"/druid/coordinator/v1/lookups/config/{tier}/{id}")," creates or updates that specific extractor factory."),(0,r.kt)("p",null,"For example, a post to ",(0,r.kt)("inlineCode",{parentName:"p"},"/druid/coordinator/v1/lookups/config/realtime_customer1/site_id_customer1")," might contain the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": "v1",\n  "lookupExtractorFactory": {\n    "type": "map",\n    "map": {\n      "847632": "Internal Use Only"\n    }\n  }\n}\n')),(0,r.kt)("p",null,"This will replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"site_id_customer1")," lookup in the ",(0,r.kt)("inlineCode",{parentName:"p"},"realtime_customer1")," with the definition above."),(0,r.kt)("p",null,"Assign a unique version identifier each time you update a lookup extractor factory. Otherwise the call will fail."),(0,r.kt)("h3",{id:"get-all-lookups"},"Get all lookups"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"/druid/coordinator/v1/lookups/config/all")," will return all known lookup specs for all tiers."),(0,r.kt)("h3",{id:"get-lookup"},"Get lookup"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," to a particular lookup extractor factory is accomplished via ",(0,r.kt)("inlineCode",{parentName:"p"},"/druid/coordinator/v1/lookups/config/{tier}/{id}")),(0,r.kt)("p",null,"Using the prior example, a ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"/druid/coordinator/v1/lookups/config/realtime_customer2/site_id_customer2")," should return"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": "v1",\n  "lookupExtractorFactory": {\n    "type": "map",\n    "map": {\n      "AHF77": "Home"\n    }\n  }\n}\n')),(0,r.kt)("h3",{id:"delete-lookup"},"Delete lookup"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"/druid/coordinator/v1/lookups/config/{tier}/{id}")," will remove that lookup from the cluster. If it was last lookup in the tier, then tier is deleted as well."),(0,r.kt)("h3",{id:"delete-tier"},"Delete tier"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"DELETE")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"/druid/coordinator/v1/lookups/config/{tier}")," will remove that tier from the cluster."),(0,r.kt)("h3",{id:"list-tier-names"},"List tier names"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"/druid/coordinator/v1/lookups/config")," will return a list of known tier names in the dynamic configuration.\nTo discover a list of tiers currently active in the cluster in addition to ones known in the dynamic configuration, the parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"discover=true")," can be added as per ",(0,r.kt)("inlineCode",{parentName:"p"},"/druid/coordinator/v1/lookups/config?discover=true"),"."),(0,r.kt)("h3",{id:"list-lookup-names"},"List lookup names"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"/druid/coordinator/v1/lookups/config/{tier}")," will return a list of known lookup names for that tier."),(0,r.kt)("p",null,"These end points can be used to get the propagation status of configured lookups to processes using lookups such as Historicals."),(0,r.kt)("h2",{id:"api-for-lookup-status"},"API for lookup status"),(0,r.kt)("h3",{id:"list-load-status-of-all-lookups"},"List load status of all lookups"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET /druid/coordinator/v1/lookups/status")," with optional query parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"detailed"),"."),(0,r.kt)("h3",{id:"list-load-status-of-lookups-in-a-tier"},"List load status of lookups in a tier"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET /druid/coordinator/v1/lookups/status/{tier}")," with optional query parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"detailed"),"."),(0,r.kt)("h3",{id:"list-load-status-of-single-lookup"},"List load status of single lookup"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET /druid/coordinator/v1/lookups/status/{tier}/{lookup}")," with optional query parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"detailed"),"."),(0,r.kt)("h3",{id:"list-lookup-state-of-all-processes"},"List lookup state of all processes"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET /druid/coordinator/v1/lookups/nodeStatus")," with optional query parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"discover")," to discover tiers advertised by other Druid nodes, or by default, returning all configured lookup tiers. The default response will also include the lookups which are loaded, being loaded, or being dropped on each node, for each tier, including the complete lookup spec. Add the optional query parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"detailed=false")," to only include the 'version' of the lookup instead of the complete spec."),(0,r.kt)("h3",{id:"list-lookup-state-of-processes-in-a-tier"},"List lookup state of processes in a tier"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET /druid/coordinator/v1/lookups/nodeStatus/{tier}")),(0,r.kt)("h3",{id:"list-lookup-state-of-single-process"},"List lookup state of single process"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"GET /druid/coordinator/v1/lookups/nodeStatus/{tier}/{host:port}")),(0,r.kt)("h2",{id:"internal-api"},"Internal API"),(0,r.kt)("p",null,"The Peon, Router, Broker, and Historical processes all have the ability to consume lookup configuration.\nThere is an internal API these processes use to list/load/drop their lookups starting at ",(0,r.kt)("inlineCode",{parentName:"p"},"/druid/listen/v1/lookups"),".\nThese follow the same convention for return values as the cluster wide dynamic configuration. Following endpoints\ncan be used for debugging purposes but not otherwise."),(0,r.kt)("h3",{id:"get-lookups"},"Get lookups"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," to the process at ",(0,r.kt)("inlineCode",{parentName:"p"},"/druid/listen/v1/lookups")," will return a json map of all the lookups currently active on the process.\nThe return value will be a json map of the lookups to their extractor factories."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "site_id_customer2": {\n    "version": "v1",\n    "lookupExtractorFactory": {\n      "type": "map",\n      "map": {\n        "AHF77": "Home"\n      }\n    }\n  }\n}\n')),(0,r.kt)("h3",{id:"get-lookup-1"},"Get lookup"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," to the process at ",(0,r.kt)("inlineCode",{parentName:"p"},"/druid/listen/v1/lookups/some_lookup_name")," will return the LookupExtractorFactory for the lookup identified by ",(0,r.kt)("inlineCode",{parentName:"p"},"some_lookup_name"),".\nThe return value will be the json representation of the factory."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": "v1",\n  "lookupExtractorFactory": {\n    "type": "map",\n    "map": {\n      "AHF77": "Home"\n    }\n  }\n}\n')),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/26.0.0/configuration/#lookups-dynamic-configuration"},"Lookups Dynamic Configuration")," for Coordinator configuration."),(0,r.kt)("p",null,"To configure a Broker / Router / Historical / Peon to announce itself as part of a lookup tier, use following properties."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"druid.lookup.lookupTier")),(0,r.kt)("td",{parentName:"tr",align:null},"The tier for ",(0,r.kt)("strong",{parentName:"td"},"lookups")," for this process. This is independent of other tiers."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"__default"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"druid.lookup.lookupTierIsDatasource")),(0,r.kt)("td",{parentName:"tr",align:null},"For some things like indexing service tasks, the datasource is passed in the runtime properties of a task. This option fetches the tierName from the same value as the datasource for the task. It is suggested to only use this as Peon options for the indexing service, if at all. If true, ",(0,r.kt)("inlineCode",{parentName:"td"},"druid.lookup.lookupTier")," MUST NOT be specified"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'"false"'))))),(0,r.kt)("p",null,"To configure the behavior of the dynamic configuration manager, use the following properties on the Coordinator:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"druid.manager.lookups.hostTimeout")),(0,r.kt)("td",{parentName:"tr",align:null},"Timeout (in ms) PER HOST for processing request"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"2000"),"(2 seconds)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"druid.manager.lookups.allHostTimeout")),(0,r.kt)("td",{parentName:"tr",align:null},"Timeout (in ms) to finish lookup management on all the processes."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"900000"),"(15 mins)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"druid.manager.lookups.period")),(0,r.kt)("td",{parentName:"tr",align:null},"How long to pause between management cycles"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"120000"),"(2 mins)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"druid.manager.lookups.threadPoolSize")),(0,r.kt)("td",{parentName:"tr",align:null},"Number of service processes that can be managed concurrently"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"10"))))),(0,r.kt)("h2",{id:"saving-configuration-across-restarts"},"Saving configuration across restarts"),(0,r.kt)("p",null,"It is possible to save the configuration across restarts such that a process will not have to wait for Coordinator action to re-populate its lookups. To do this the following property is set:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"druid.lookup.snapshotWorkingDir")),(0,r.kt)("td",{parentName:"tr",align:null},"Working path used to store snapshot of current lookup configuration, leaving this property null will disable snapshot/bootstrap utility"),(0,r.kt)("td",{parentName:"tr",align:null},"null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"druid.lookup.enableLookupSyncOnStartup")),(0,r.kt)("td",{parentName:"tr",align:null},"Enable the lookup synchronization process with Coordinator on startup. The queryable processes will fetch and load the lookups from the Coordinator instead of waiting for the Coordinator to load the lookups for them. Users may opt to disable this option if there are no lookups configured in the cluster."),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"druid.lookup.numLookupLoadingThreads")),(0,r.kt)("td",{parentName:"tr",align:null},"Number of threads for loading the lookups in parallel on startup. This thread pool is destroyed once startup is done. It is not kept during the lifetime of the JVM"),(0,r.kt)("td",{parentName:"tr",align:null},"Available Processors / 2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"druid.lookup.coordinatorFetchRetries")),(0,r.kt)("td",{parentName:"tr",align:null},"How many times to retry to fetch the lookup bean list from Coordinator, during the sync on startup."),(0,r.kt)("td",{parentName:"tr",align:null},"3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"druid.lookup.lookupStartRetries")),(0,r.kt)("td",{parentName:"tr",align:null},"How many times to retry to start each lookup, either during the sync on startup, or during the runtime."),(0,r.kt)("td",{parentName:"tr",align:null},"3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"druid.lookup.coordinatorRetryDelay")),(0,r.kt)("td",{parentName:"tr",align:null},"How long to delay (in millis) between retries to fetch lookup list from the Coordinator during the sync on startup."),(0,r.kt)("td",{parentName:"tr",align:null},"60_000")))),(0,r.kt)("h2",{id:"introspect-a-lookup"},"Introspect a Lookup"),(0,r.kt)("p",null,"The Broker provides an API for lookup introspection if the lookup type implements a ",(0,r.kt)("inlineCode",{parentName:"p"},"LookupIntrospectHandler"),"."),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," request to ",(0,r.kt)("inlineCode",{parentName:"p"},"/druid/v1/lookups/introspect/{lookupId}")," will return the map of complete values."),(0,r.kt)("p",null,"ex: ",(0,r.kt)("inlineCode",{parentName:"p"},"GET /druid/v1/lookups/introspect/nato-phonetic")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "A": "Alfa",\n    "B": "Bravo",\n    "C": "Charlie",\n    ...\n    "Y": "Yankee",\n    "Z": "Zulu",\n    "-": "Dash"\n}\n\n')),(0,r.kt)("p",null,"The list of keys can be retrieved via ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," to ",(0,r.kt)("inlineCode",{parentName:"p"},'/druid/v1/lookups/introspect/{lookupId}/keys"')),(0,r.kt)("p",null,"ex: ",(0,r.kt)("inlineCode",{parentName:"p"},"GET /druid/v1/lookups/introspect/nato-phonetic/keys")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'[\n    "A",\n    "B",\n    "C",\n    ...\n    "Y",\n    "Z",\n    "-"\n]\n')),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," request to ",(0,r.kt)("inlineCode",{parentName:"p"},'/druid/v1/lookups/introspect/{lookupId}/values"')," will return the list of values."),(0,r.kt)("p",null,"ex: ",(0,r.kt)("inlineCode",{parentName:"p"},"GET /druid/v1/lookups/introspect/nato-phonetic/values")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'[\n    "Alfa",\n    "Bravo",\n    "Charlie",\n    ...\n    "Yankee",\n    "Zulu",\n    "Dash"\n]\n')))}m.isMDXComponent=!0}}]);
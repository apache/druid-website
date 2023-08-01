"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7986],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(n),c=l,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||r;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function k(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:l,o[1]=i;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2739:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>p,default:()=>k,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(7462),l=n(3366),r=(n(7294),n(3905)),o=["components"],i={id:"lookups-cached-global",title:"Globally Cached Lookups"},p=void 0,s={unversionedId:"development/extensions-core/lookups-cached-global",id:"development/extensions-core/lookups-cached-global",title:"Globally Cached Lookups",description:"\x3c!--",source:"@site/docs/latest/development/extensions-core/lookups-cached-global.md",sourceDirName:"development/extensions-core",slug:"/development/extensions-core/lookups-cached-global",permalink:"/docs/latest/development/extensions-core/lookups-cached-global",draft:!1,tags:[],version:"current",frontMatter:{id:"lookups-cached-global",title:"Globally Cached Lookups"}},d={},u=[{value:"Configuration",id:"configuration",level:2},{value:"Example configuration",id:"example-configuration",level:2},{value:"Cache Settings",id:"cache-settings",level:2},{value:"Supported lookups",id:"supported-lookups",level:2},{value:"URI lookup",id:"uri-lookup",level:3},{value:"csv lookupParseSpec",id:"csv-lookupparsespec",level:4},{value:"tsv lookupParseSpec",id:"tsv-lookupparsespec",level:4},{value:"customJson lookupParseSpec",id:"customjson-lookupparsespec",level:4},{value:"simpleJson lookupParseSpec",id:"simplejson-lookupparsespec",level:4},{value:"JDBC lookup",id:"jdbc-lookup",level:3},{value:"Introspection",id:"introspection",level:2}],m={toc:u},c="wrapper";function k(e){var t=e.components,n=(0,l.Z)(e,o);return(0,r.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"To use this Apache Druid extension, ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/development/extensions#loading-extensions"},"include")," ",(0,r.kt)("inlineCode",{parentName:"p"},"druid-lookups-cached-global")," in the extensions load list."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Static configuration is no longer supported. Lookups can be configured through\n",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/querying/lookups#configuration"},"dynamic configuration"),".")),(0,r.kt)("p",null,"Globally cached lookups are appropriate for lookups which are not possible to pass at query time due to their size,\nor are not desired to be passed at query time because the data is to reside in and be handled by the Druid servers,\nand are small enough to reasonably populate in-memory. This usually means tens to tens of thousands of entries per lookup."),(0,r.kt)("p",null,"Globally cached lookups all draw from the same cache pool, allowing each process to have a fixed cache pool that can be used by cached lookups."),(0,r.kt)("p",null,"Globally cached lookups can be specified as part of the ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/querying/lookups"},"cluster wide config for lookups")," as a type of ",(0,r.kt)("inlineCode",{parentName:"p"},"cachedNamespace")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "type": "cachedNamespace",\n   "extractionNamespace": {\n      "type": "uri",\n      "uri": "file:/tmp/prefix/",\n      "namespaceParseSpec": {\n        "format": "csv",\n        "columns": [\n            "[\\"key\\"",\n            "\\"value\\"]"\n     ]\n      },\n      "pollPeriod": "PT5M"\n    },\n    "firstCacheTimeout": 0\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "type": "cachedNamespace",\n   "extractionNamespace": {\n      "type": "jdbc",\n      "connectorConfig": {\n        "connectURI": "jdbc:mysql:\\/\\/localhost:3306\\/druid",\n        "user": "druid",\n        "password": "diurd"\n      },\n      "table": "lookupTable",\n      "keyColumn": "mykeyColumn",\n      "valueColumn": "myValueColumn",\n      "filter" : "myFilterSQL (Where clause statement  e.g LOOKUPTYPE=1)",\n      "tsColumn": "timeColumn"\n   },\n   "firstCacheTimeout": 120000,\n   "injective":true\n}\n')),(0,r.kt)("p",null,"The parameters are as follows"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"extractionNamespace")),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies how to populate the local cache. See below"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"firstCacheTimeout")),(0,r.kt)("td",{parentName:"tr",align:null},"How long to wait (in ms) for the first run of the cache to populate. 0 indicates to not wait"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0")," (do not wait)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"injective")),(0,r.kt)("td",{parentName:"tr",align:null},"If the underlying map is ",(0,r.kt)("a",{parentName:"td",href:"/docs/latest/querying/lookups#query-execution"},"injective")," (keys and values are unique) then optimizations can occur internally by setting this to ",(0,r.kt)("inlineCode",{parentName:"td"},"true")),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"false"))))),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"firstCacheTimeout")," is set to a non-zero value, it should be less than ",(0,r.kt)("inlineCode",{parentName:"p"},"druid.manager.lookups.hostUpdateTimeout"),". If ",(0,r.kt)("inlineCode",{parentName:"p"},"firstCacheTimeout")," is NOT set, then management is essentially asynchronous and does not know if a lookup succeeded or failed in starting. In such a case logs from the processes using lookups should be monitored for repeated failures."),(0,r.kt)("p",null,"Proper functionality of globally cached lookups requires the following extension to be loaded on the Broker, Peon, and Historical processes:\n",(0,r.kt)("inlineCode",{parentName:"p"},"druid-lookups-cached-global")),(0,r.kt)("h2",{id:"example-configuration"},"Example configuration"),(0,r.kt)("p",null,"In a simple case where only one ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/querying/lookups#dynamic-configuration"},"tier")," exists (",(0,r.kt)("inlineCode",{parentName:"p"},"realtime_customer2"),") with one ",(0,r.kt)("inlineCode",{parentName:"p"},"cachedNamespace")," lookup called ",(0,r.kt)("inlineCode",{parentName:"p"},"country_code"),", the resulting configuration JSON looks similar to the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "realtime_customer2": {\n    "country_code": {\n      "version": "v0",\n      "lookupExtractorFactory": {\n        "type": "cachedNamespace",\n        "extractionNamespace": {\n          "type": "jdbc",\n          "connectorConfig": {\n            "connectURI": "jdbc:mysql:\\/\\/localhost:3306\\/druid",\n            "user": "druid",\n            "password": "diurd"\n          },\n          "table": "lookupValues",\n          "keyColumn": "value_id",\n          "valueColumn": "value_text",\n          "filter": "value_type=\'country\'",\n          "tsColumn": "timeColumn"\n        },\n        "firstCacheTimeout": 120000,\n        "injective": true\n      }\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Where the Coordinator endpoint ",(0,r.kt)("inlineCode",{parentName:"p"},"/druid/coordinator/v1/lookups/realtime_customer2/country_code")," should return"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "version": "v0",\n  "lookupExtractorFactory": {\n    "type": "cachedNamespace",\n    "extractionNamespace": {\n      "type": "jdbc",\n      "connectorConfig": {\n        "connectURI": "jdbc:mysql://localhost:3306/druid",\n        "user": "druid",\n        "password": "diurd"\n      },\n      "table": "lookupValues",\n      "keyColumn": "value_id",\n      "valueColumn": "value_text",\n      "filter": "value_type=\'country\'",\n      "tsColumn": "timeColumn"\n    },\n    "firstCacheTimeout": 120000,\n    "injective": true\n  }\n}\n')),(0,r.kt)("h2",{id:"cache-settings"},"Cache Settings"),(0,r.kt)("p",null,"Lookups are cached locally on Historical processes. The following are settings used by the processes which service queries when\nsetting namespaces (Broker, Peon, Historical)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"druid.lookup.namespace.cache.type")),(0,r.kt)("td",{parentName:"tr",align:null},"Specifies the type of caching to be used by the namespaces. May be one of ","[",(0,r.kt)("inlineCode",{parentName:"td"},"offHeap"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"onHeap"),"]",". ",(0,r.kt)("inlineCode",{parentName:"td"},"offHeap")," uses a temporary file for off-heap storage of the namespace (memory mapped files). ",(0,r.kt)("inlineCode",{parentName:"td"},"onHeap")," stores all cache on the heap in standard java map types."),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onHeap"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"druid.lookup.namespace.numExtractionThreads")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of threads in the thread pool dedicated for lookup extraction and updates. This number may need to be scaled up, if you have a lot of lookups and they take long time to extract, to avoid timeouts."),(0,r.kt)("td",{parentName:"tr",align:null},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"druid.lookup.namespace.numBufferedEntries")),(0,r.kt)("td",{parentName:"tr",align:null},"If using off-heap caching, the number of records to be stored on an on-heap buffer."),(0,r.kt)("td",{parentName:"tr",align:null},"100,000")))),(0,r.kt)("p",null,"The cache is populated in different ways depending on the settings below. In general, most namespaces employ\na ",(0,r.kt)("inlineCode",{parentName:"p"},"pollPeriod")," at the end of which time they poll the remote resource of interest for updates."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"onHeap")," uses ",(0,r.kt)("inlineCode",{parentName:"p"},"ConcurrentMap"),"s in the java heap, and thus affects garbage collection and heap sizing.\n",(0,r.kt)("inlineCode",{parentName:"p"},"offHeap")," uses an on-heap buffer and MapDB using memory-mapped files in the java temporary directory.\nSo if total number of entries in the ",(0,r.kt)("inlineCode",{parentName:"p"},"cachedNamespace")," is in excess of the buffer's configured capacity, the extra will be kept in memory as page cache, and paged in and out by general OS tunings.\nIt's highly recommended that ",(0,r.kt)("inlineCode",{parentName:"p"},"druid.lookup.namespace.numBufferedEntries")," is set when using ",(0,r.kt)("inlineCode",{parentName:"p"},"offHeap"),", the value should be chosen from the range between 10% and 50% of the number of entries in the lookup."),(0,r.kt)("h2",{id:"supported-lookups"},"Supported lookups"),(0,r.kt)("p",null,"For additional lookups, please see our ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/development/extensions"},"extensions list"),"."),(0,r.kt)("h3",{id:"uri-lookup"},"URI lookup"),(0,r.kt)("p",null,"The remapping values for each globally cached lookup can be specified by a JSON object as per the following examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type":"uri",\n  "uri": "s3://bucket/some/key/prefix/renames-0003.gz",\n  "namespaceParseSpec":{\n    "format":"csv",\n    "columns":[\n        "[\\"key\\"",\n        "\\"value\\"]"\n      ]\n  },\n  "pollPeriod":"PT5M"\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type":"uri",\n  "uriPrefix": "s3://bucket/some/key/prefix/",\n  "fileRegex":"renames-[0-9]*\\\\.gz",\n  "namespaceParseSpec":{\n    "format":"csv",\n    "columns":[\n        "[\\"key\\"",\n        "\\"value\\"]"\n      ]\n  },\n  "pollPeriod":"PT5M",\n  "maxHeapPercentage": 10\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pollPeriod")),(0,r.kt)("td",{parentName:"tr",align:null},"Period between polling for updates"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"0 (only once)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uri")),(0,r.kt)("td",{parentName:"tr",align:null},"URI for the file of interest, specified as a file, hdfs, s3 or gs path"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Use ",(0,r.kt)("inlineCode",{parentName:"td"},"uriPrefix"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"uriPrefix")),(0,r.kt)("td",{parentName:"tr",align:null},"A URI that specifies a directory (or other searchable resource) in which to search for files"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Use ",(0,r.kt)("inlineCode",{parentName:"td"},"uri"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"fileRegex")),(0,r.kt)("td",{parentName:"tr",align:null},"Optional regex for matching the file name under ",(0,r.kt)("inlineCode",{parentName:"td"},"uriPrefix"),". Only used if ",(0,r.kt)("inlineCode",{parentName:"td"},"uriPrefix")," is used"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'".*"'))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"namespaceParseSpec")),(0,r.kt)("td",{parentName:"tr",align:null},"How to interpret the data at the URI"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"maxHeapPercentage")),(0,r.kt)("td",{parentName:"tr",align:null},"The maximum percentage of heap size that the lookup should consume. If the lookup grows beyond this size, warning messages will be logged in the respective service logs."),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"10% of JVM heap size")))),(0,r.kt)("p",null,"One of either ",(0,r.kt)("inlineCode",{parentName:"p"},"uri")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"uriPrefix")," must be specified, as either a local file system (file://), HDFS (hdfs://), S3 (s3://) or GCS (gs://) location. HTTP location is not currently supported."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"pollPeriod")," value specifies the period in ISO 8601 format between checks for replacement data for the lookup. If the source of the lookup is capable of providing a timestamp, the lookup will only be updated if it has changed since the prior tick of ",(0,r.kt)("inlineCode",{parentName:"p"},"pollPeriod"),". A value of 0, an absent parameter, or ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," all mean populate once and do not attempt to look for new data later. Whenever an poll occurs, the updating system will look for a file with the most recent timestamp and assume that one with the most recent data set, replacing the local cache of the lookup data."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"namespaceParseSpec")," can be one of a number of values. Each of the examples below would rename foo to bar, baz to bat, and buck to truck. All parseSpec types assumes each input is delimited by a new line. See below for the types of parseSpec supported."),(0,r.kt)("p",null,"Only ONE file which matches the search will be used. For most implementations, the discriminator for choosing the URIs is by whichever one reports the most recent timestamp for its modification time."),(0,r.kt)("h4",{id:"csv-lookupparsespec"},"csv lookupParseSpec"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"columns")),(0,r.kt)("td",{parentName:"tr",align:null},"The list of columns in the csv file"),(0,r.kt)("td",{parentName:"tr",align:null},"no if ",(0,r.kt)("inlineCode",{parentName:"td"},"hasHeaderRow")," is set"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"keyColumn")),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the column containing the key"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"The first column")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"valueColumn")),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the column containing the value"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"The second column")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hasHeaderRow")),(0,r.kt)("td",{parentName:"tr",align:null},"A flag to indicate that column information can be extracted from the input files' header row"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"skipHeaderRows")),(0,r.kt)("td",{parentName:"tr",align:null},"Number of header rows to be skipped"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"0")))),(0,r.kt)("p",null,"If both ",(0,r.kt)("inlineCode",{parentName:"p"},"skipHeaderRows")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"hasHeaderRow")," options are set, ",(0,r.kt)("inlineCode",{parentName:"p"},"skipHeaderRows")," is first applied. For example, if you set\n",(0,r.kt)("inlineCode",{parentName:"p"},"skipHeaderRows")," to 2 and ",(0,r.kt)("inlineCode",{parentName:"p"},"hasHeaderRow")," to true, Druid will skip the first two lines and then extract column information\nfrom the third line."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"example input")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"bar,something,foo\nbat,something2,baz\ntruck,something3,buck\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"example namespaceParseSpec")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"namespaceParseSpec": {\n  "format": "csv",\n  "columns": ["value","somethingElse","key"],\n  "keyColumn": "key",\n  "valueColumn": "value"\n}\n')),(0,r.kt)("h4",{id:"tsv-lookupparsespec"},"tsv lookupParseSpec"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"columns")),(0,r.kt)("td",{parentName:"tr",align:null},"The list of columns in the tsv file"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"keyColumn")),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the column containing the key"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"The first column")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"valueColumn")),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the column containing the value"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"The second column")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"delimiter")),(0,r.kt)("td",{parentName:"tr",align:null},"The delimiter in the file"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"tab (",(0,r.kt)("inlineCode",{parentName:"td"},"\\t"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"listDelimiter")),(0,r.kt)("td",{parentName:"tr",align:null},"The list delimiter in the file"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"(",(0,r.kt)("inlineCode",{parentName:"td"},"\\u0001"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hasHeaderRow")),(0,r.kt)("td",{parentName:"tr",align:null},"A flag to indicate that column information can be extracted from the input files' header row"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"skipHeaderRows")),(0,r.kt)("td",{parentName:"tr",align:null},"Number of header rows to be skipped"),(0,r.kt)("td",{parentName:"tr",align:null},"no"),(0,r.kt)("td",{parentName:"tr",align:null},"0")))),(0,r.kt)("p",null,"If both ",(0,r.kt)("inlineCode",{parentName:"p"},"skipHeaderRows")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"hasHeaderRow")," options are set, ",(0,r.kt)("inlineCode",{parentName:"p"},"skipHeaderRows")," is first applied. For example, if you set\n",(0,r.kt)("inlineCode",{parentName:"p"},"skipHeaderRows")," to 2 and ",(0,r.kt)("inlineCode",{parentName:"p"},"hasHeaderRow")," to true, Druid will skip the first two lines and then extract column information\nfrom the third line."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"example input")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"bar|something,1|foo\nbat|something,2|baz\ntruck|something,3|buck\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"example namespaceParseSpec")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"namespaceParseSpec": {\n  "format": "tsv",\n  "columns": ["value","somethingElse","key"],\n  "keyColumn": "key",\n  "valueColumn": "value",\n  "delimiter": "|"\n}\n')),(0,r.kt)("h4",{id:"customjson-lookupparsespec"},"customJson lookupParseSpec"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"keyFieldName")),(0,r.kt)("td",{parentName:"tr",align:null},"The field name of the key"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"valueFieldName")),(0,r.kt)("td",{parentName:"tr",align:null},"The field name of the value"),(0,r.kt)("td",{parentName:"tr",align:null},"yes"),(0,r.kt)("td",{parentName:"tr",align:null},"null")))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"example input")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"key": "foo", "value": "bar", "somethingElse" : "something"}\n{"key": "baz", "value": "bat", "somethingElse" : "something"}\n{"key": "buck", "somethingElse": "something", "value": "truck"}\n')),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"example namespaceParseSpec")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"namespaceParseSpec": {\n  "format": "customJson",\n  "keyFieldName": "key",\n  "valueFieldName": "value"\n}\n')),(0,r.kt)("p",null,"With customJson parsing, if the value field for a particular row is missing or null then that line will be skipped, and\nwill not be included in the lookup."),(0,r.kt)("h4",{id:"simplejson-lookupparsespec"},"simpleJson lookupParseSpec"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"simpleJson")," lookupParseSpec does not take any parameters. It is simply a line delimited JSON file where the field is the key, and the field's value is the value."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"example input")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"foo": "bar"}\n{"baz": "bat"}\n{"buck": "truck"}\n')),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"example namespaceParseSpec")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"namespaceParseSpec":{\n  "format": "simpleJson"\n}\n')),(0,r.kt)("h3",{id:"jdbc-lookup"},"JDBC lookup"),(0,r.kt)("p",null,"The JDBC lookups will poll a database to populate its local cache. If the ",(0,r.kt)("inlineCode",{parentName:"p"},"tsColumn")," is set it must be able to accept comparisons in the format ",(0,r.kt)("inlineCode",{parentName:"p"},"'2015-01-01 00:00:00'"),". For example, the following must be valid SQL for the table ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT * FROM some_lookup_table WHERE timestamp_column >  '2015-01-01 00:00:00'"),". If ",(0,r.kt)("inlineCode",{parentName:"p"},"tsColumn")," is set, the caching service will attempt to only poll values that were written ",(0,r.kt)("em",{parentName:"p"},"after")," the last sync. If ",(0,r.kt)("inlineCode",{parentName:"p"},"tsColumn")," is not set, the entire table is pulled every time."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"connectorConfig")),(0,r.kt)("td",{parentName:"tr",align:null},"The connector config to use. You can set ",(0,r.kt)("inlineCode",{parentName:"td"},"connectURI"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"user")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"password"),". You can selectively allow JDBC properties in ",(0,r.kt)("inlineCode",{parentName:"td"},"connectURI"),". See ",(0,r.kt)("a",{parentName:"td",href:"/docs/latest/configuration/#jdbc-connections-to-external-databases"},"JDBC connections security config")," for more details."),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"table")),(0,r.kt)("td",{parentName:"tr",align:null},"The table which contains the key value pairs"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"keyColumn")),(0,r.kt)("td",{parentName:"tr",align:null},"The column in ",(0,r.kt)("inlineCode",{parentName:"td"},"table")," which contains the keys"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"valueColumn")),(0,r.kt)("td",{parentName:"tr",align:null},"The column in ",(0,r.kt)("inlineCode",{parentName:"td"},"table")," which contains the values"),(0,r.kt)("td",{parentName:"tr",align:null},"Yes"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"filter")),(0,r.kt)("td",{parentName:"tr",align:null},"The filter to use when selecting lookups, this is used to create a where clause on lookup population"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"No Filter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"tsColumn")),(0,r.kt)("td",{parentName:"tr",align:null},"The column in ",(0,r.kt)("inlineCode",{parentName:"td"},"table")," which contains when the key was updated"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"Not used")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"pollPeriod")),(0,r.kt)("td",{parentName:"tr",align:null},"How often to poll the DB"),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"0 (only once)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"maxHeapPercentage")),(0,r.kt)("td",{parentName:"tr",align:null},"The maximum percentage of heap size that the lookup should consume. If the lookup grows beyond this size, warning messages will be logged in the respective service logs."),(0,r.kt)("td",{parentName:"tr",align:null},"No"),(0,r.kt)("td",{parentName:"tr",align:null},"10% of JVM heap size")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type":"jdbc",\n  "connectorConfig":{\n    "connectURI":"jdbc:mysql://localhost:3306/druid",\n    "user":"druid",\n    "password":"diurd"\n  },\n  "table":"some_lookup_table",\n  "keyColumn":"the_old_dim_value",\n  "valueColumn":"the_new_dim_value",\n  "tsColumn":"timestamp_column",\n  "pollPeriod":600000,\n  "maxHeapPercentage": 10\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"If using JDBC, you will need to add your database's client JAR files to the extension's directory.\nFor Postgres, the connector JAR is already included.\nSee the MySQL extension documentation for instructions to obtain ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/development/extensions-core/mysql#installing-the-mysql-connector-library"},"MySQL")," or ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/development/extensions-core/mysql#alternative-installing-the-mariadb-connector-library"},"MariaDB")," connector libraries.\nThe connector JAR should reside in the classpath of Druid's main class loader.\nTo add the connector JAR to the classpath, you can copy the downloaded file to ",(0,r.kt)("inlineCode",{parentName:"p"},"lib/")," under the distribution root directory. Alternatively, create a symbolic link to the connector in the ",(0,r.kt)("inlineCode",{parentName:"p"},"lib")," directory.")),(0,r.kt)("h2",{id:"introspection"},"Introspection"),(0,r.kt)("p",null,"Globally cached lookups have introspection points at ",(0,r.kt)("inlineCode",{parentName:"p"},"/keys")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"/values")," which return a complete set of the keys and values (respectively) in the lookup. Introspection to ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," returns the entire map. Introspection to ",(0,r.kt)("inlineCode",{parentName:"p"},"/version")," returns the version indicator for the lookup."))}k.isMDXComponent=!0}}]);
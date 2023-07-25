"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3262],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),u=a,h=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},46485:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={id:"historical",title:"Historical Process"},c=void 0,l={unversionedId:"design/historical",id:"design/historical",title:"Historical Process",description:"\x3c!--",source:"@site/docs/latest/design/historical.md",sourceDirName:"design",slug:"/design/historical",permalink:"/docs/latest/design/historical",draft:!1,tags:[],version:"current",frontMatter:{id:"historical",title:"Historical Process"}},p={},m=[{value:"Configuration",id:"configuration",level:3},{value:"HTTP endpoints",id:"http-endpoints",level:3},{value:"Running",id:"running",level:3},{value:"Loading and serving segments",id:"loading-and-serving-segments",level:3},{value:"Loading and serving segments from cache",id:"loading-and-serving-segments-from-cache",level:3},{value:"Querying segments",id:"querying-segments",level:3}],d={toc:m},u="wrapper";function h(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)(u,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"For Apache Druid Historical Process Configuration, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/configuration/#historical"},"Historical Configuration"),"."),(0,o.kt)("p",null,"For basic tuning guidance for the Historical process, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/operations/basic-cluster-tuning#historical"},"Basic cluster tuning"),"."),(0,o.kt)("h3",{id:"http-endpoints"},"HTTP endpoints"),(0,o.kt)("p",null,"For a list of API endpoints supported by the Historical, please see the ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/operations/api-reference#historical"},"API reference"),"."),(0,o.kt)("h3",{id:"running"},"Running"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"org.apache.druid.cli.Main server historical\n")),(0,o.kt)("h3",{id:"loading-and-serving-segments"},"Loading and serving segments"),(0,o.kt)("p",null,'Each Historical process copies or "pulls" segment files from Deep Storage to local disk in an area called the ',(0,o.kt)("em",{parentName:"p"},"segment cache"),".  Set the ",(0,o.kt)("inlineCode",{parentName:"p"},"druid.segmentCache.locations")," to configure the size and location of the segment cache on each Historical process. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/configuration/#historical-general-configuration"},"Historical general configuration"),"."),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/operations/basic-cluster-tuning#segment-cache-size"},"Tuning Guide")," for more information."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"../design/coordinator.html"},"Coordinator")," controls the assignment of segments to Historicals and the balance of segments between Historicals. Historical processes do not communicate directly with each other, nor do they communicate directly with the Coordinator.  Instead, the Coordinator creates ephemeral entries in Zookeeper in a ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/configuration/#path-configuration"},"load queue path"),". Each Historical process maintains a connection to Zookeeper, watching those paths for segment information."),(0,o.kt)("p",null,"For more information about how the Coordinator assigns segments to Historical processes, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/design/coordinator"},"Coordinator"),"."),(0,o.kt)("p",null,"When a Historical process detects a new entry in the Zookeeper load queue, it checks its own segment cache. If no information about the segment exists there, the Historical process first retrieves metadata from Zookeeper about the segment, including where the segment is located in Deep Storage and how it needs to decompress and process it."),(0,o.kt)("p",null,"For more information about segment metadata and Druid segments in general, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/design/segments"},"Segments"),". "),(0,o.kt)("p",null,"After a Historical process pulls down and processes a segment from Deep Storage, Druid advertises the segment as being available for queries from the Broker.  This announcement by the Historical is made via Zookeeper, in a ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/configuration/#path-configuration"},"served segments path"),"."),(0,o.kt)("p",null,"For more information about how the Broker determines what data is available for queries, please see ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/design/broker"},"Broker"),"."),(0,o.kt)("p",null,"To make data from the segment cache available for querying as soon as possible, Historical services search the local segment cache upon startup and advertise the segments found there."),(0,o.kt)("h3",{id:"loading-and-serving-segments-from-cache"},"Loading and serving segments from cache"),(0,o.kt)("p",null,"The segment cache uses ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Mmap"},"memory mapping"),". The cache consumes memory from the underlying operating system so Historicals can hold parts of segment files in memory to increase query performance at the data level.  The in-memory segment cache is affected by the size of the Historical JVM, heap / direct memory buffers, and other processes on the operating system itself."),(0,o.kt)("p",null,'At query time, if the required part of a segment file is available in the memory mapped cache or "page cache", the Historical re-uses it and reads it directly from memory.  If it is not in the memory-mapped cache, the Historical reads that part of the segment from disk. In this case, there is potential for new data to flush other segment data from memory. This means that if free operating system memory is close to ',(0,o.kt)("inlineCode",{parentName:"p"},"druid.server.maxSize"),", the more likely that segment data will be available in memory and reduce query times.  Conversely, the lower the free operating system memory, the more likely a Historical is to read segments from disk."),(0,o.kt)("p",null,"Note that this memory-mapped segment cache is in addition to other ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/querying/caching"},"query-level caches"),"."),(0,o.kt)("h3",{id:"querying-segments"},"Querying segments"),(0,o.kt)("p",null,"Please see ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/querying/"},"Querying")," for more information on querying Historical processes."),(0,o.kt)("p",null,"A Historical can be configured to log and report metrics for every query it services."))}h.isMDXComponent=!0}}]);
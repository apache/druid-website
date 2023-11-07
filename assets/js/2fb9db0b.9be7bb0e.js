"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[878],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,y=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(y,o(o({ref:t},l),{},{components:n})):r.createElement(y,o({ref:t},l))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2946:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>y,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={id:"multitenancy",title:"Multitenancy considerations",sidebar_label:"Multitenancy"},u=void 0,c={unversionedId:"querying/multitenancy",id:"querying/multitenancy",title:"Multitenancy considerations",description:"\x3c!--",source:"@site/docs/28.0.0/querying/multitenancy.md",sourceDirName:"querying",slug:"/querying/multitenancy",permalink:"/docs/28.0.0/querying/multitenancy",draft:!1,tags:[],version:"current",frontMatter:{id:"multitenancy",title:"Multitenancy considerations",sidebar_label:"Multitenancy"},sidebar:"docs",previous:{title:"Nested columns",permalink:"/docs/28.0.0/querying/nested-columns"},next:{title:"Query caching",permalink:"/docs/28.0.0/querying/caching"}},l={},d=[{value:"Shared datasources or datasource-per-tenant?",id:"shared-datasources-or-datasource-per-tenant",level:2},{value:"Partitioning shared datasources",id:"partitioning-shared-datasources",level:2},{value:"Customizing data distribution",id:"customizing-data-distribution",level:2},{value:"Supporting high query concurrency",id:"supporting-high-query-concurrency",level:2}],p={toc:d},m="wrapper";function y(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Apache Druid is often used to power user-facing data applications, where multitenancy is an important requirement. This\ndocument outlines Druid's multitenant storage and querying features."),(0,i.kt)("h2",{id:"shared-datasources-or-datasource-per-tenant"},"Shared datasources or datasource-per-tenant?"),(0,i.kt)("p",null,'A datasource is the Druid equivalent of a database table. Multitenant workloads can either use a separate datasource\nfor each tenant, or can share one or more datasources between tenants using a "tenant_id" dimension. When deciding\nwhich path to go down, consider that each path has pros and cons.'),(0,i.kt)("p",null,"Pros of datasources per tenant:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Each datasource can have its own schema, its own backfills, its own partitioning rules, and its own data loading\nand expiration rules."),(0,i.kt)("li",{parentName:"ul"},"Queries can be faster since there will be fewer segments to examine for a typical tenant's query."),(0,i.kt)("li",{parentName:"ul"},"You get the most flexibility.")),(0,i.kt)("p",null,"Pros of shared datasources:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Each datasource requires its own JVMs for realtime indexing."),(0,i.kt)("li",{parentName:"ul"},"Each datasource requires its own YARN resources for Hadoop batch jobs."),(0,i.kt)("li",{parentName:"ul"},"Each datasource requires its own segment files on disk."),(0,i.kt)("li",{parentName:"ul"},"For these reasons it can be wasteful to have a very large number of small datasources.")),(0,i.kt)("p",null,"One compromise is to use more than one datasource, but a smaller number than tenants. For example, you could have some\ntenants with partitioning rules A and some with partitioning rules B; you could use two datasources and split your\ntenants between them."),(0,i.kt)("h2",{id:"partitioning-shared-datasources"},"Partitioning shared datasources"),(0,i.kt)("p",null,'If your multitenant cluster uses shared datasources, most of your queries will likely filter on a "tenant_id"\ndimension. These sorts of queries perform best when data is well-partitioned by tenant. There are a few ways to\naccomplish this.'),(0,i.kt)("p",null,"With batch indexing, you can use ",(0,i.kt)("a",{parentName:"p",href:"/docs/28.0.0/ingestion/hadoop#single-dimension-range-partitioning"},"single-dimension partitioning"),"\nto partition your data by tenant_id. Druid always partitions by time first, but the secondary partition within each\ntime bucket will be on tenant_id."),(0,i.kt)("p",null,"With realtime indexing, you'd do this by tweaking the stream you send to Druid. For example, if you're using Kafka then\nyou can have your Kafka producer partition your topic by a hash of tenant_id."),(0,i.kt)("h2",{id:"customizing-data-distribution"},"Customizing data distribution"),(0,i.kt)("p",null,"Druid additionally supports multitenancy by providing configurable means of distributing data. Druid's Historical processes\ncan be configured into ",(0,i.kt)("a",{parentName:"p",href:"/docs/28.0.0/operations/rule-configuration"},"tiers"),", and ",(0,i.kt)("a",{parentName:"p",href:"/docs/28.0.0/operations/rule-configuration"},"rules"),"\ncan be set that determines which segments go into which tiers. One use case of this is that recent data tends to be accessed\nmore frequently than older data. Tiering enables more recent segments to be hosted on more powerful hardware for better performance.\nA second copy of recent segments can be replicated on cheaper hardware (a different tier), and older segments can also be\nstored on this tier."),(0,i.kt)("h2",{id:"supporting-high-query-concurrency"},"Supporting high query concurrency"),(0,i.kt)("p",null,"Druid uses a ",(0,i.kt)("a",{parentName:"p",href:"/docs/28.0.0/design/segments"},"segment")," as its fundamental unit of computation. Processes scan segments in parallel and a given process can scan ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.processing.numThreads")," concurrently. You can add more cores to a cluster to process more data in parallel and increase performance. Size your Druid segments such that any computation over any given segment should complete in at most 500ms. Use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/28.0.0/operations/metrics#historical"},(0,i.kt)("inlineCode",{parentName:"a"},"query/segment/time"))," metric to monitor computation times."),(0,i.kt)("p",null,"Druid internally stores requests to scan segments in a priority queue. If a given query requires scanning\nmore segments than the total number of available processors in a cluster, and many similarly expensive queries are concurrently\nrunning, we don't want any query to be starved out. Druid's internal processing logic will scan a set of segments from one query and release resources as soon as the scans complete.\nThis allows for a second set of segments from another query to be scanned. By keeping segment computation time very small, we ensure\nthat resources are constantly being yielded, and segments pertaining to different queries are all being processed."),(0,i.kt)("p",null,"Druid queries can optionally set a ",(0,i.kt)("inlineCode",{parentName:"p"},"priority")," flag in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/28.0.0/querying/query-context"},"query context"),". Queries known to be\nslow (download or reporting style queries) can be de-prioritized and more interactive queries can have higher priority."),(0,i.kt)("p",null,"Broker processes can also be dedicated to a given tier. For example, one set of Broker processes can be dedicated to fast interactive queries,\nand a second set of Broker processes can be dedicated to slower reporting queries. Druid also provides a ",(0,i.kt)("a",{parentName:"p",href:"/docs/28.0.0/design/router"},"Router"),"\nprocess that can route queries to different Brokers based on various query parameters (datasource, interval, etc.)."))}y.isMDXComponent=!0}}]);
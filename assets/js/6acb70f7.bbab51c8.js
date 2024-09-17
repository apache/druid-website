"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1582],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),c=i,h=m["".concat(l,".").concat(c)]||m[c]||d[c]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},15504:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>m});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],s={id:"concepts",title:"SQL-based ingestion concepts",sidebar_label:"Key concepts"},l=void 0,p={unversionedId:"multi-stage-query/concepts",id:"multi-stage-query/concepts",title:"SQL-based ingestion concepts",description:"\x3c!--",source:"@site/docs/30.0.1/multi-stage-query/concepts.md",sourceDirName:"multi-stage-query",slug:"/multi-stage-query/concepts",permalink:"/docs/30.0.1/multi-stage-query/concepts",draft:!1,tags:[],version:"current",frontMatter:{id:"concepts",title:"SQL-based ingestion concepts",sidebar_label:"Key concepts"},sidebar:"docs",previous:{title:"SQL-based ingestion",permalink:"/docs/30.0.1/multi-stage-query/"},next:{title:"Security",permalink:"/docs/30.0.1/multi-stage-query/security"}},u={},m=[{value:"Multi-stage query task engine",id:"multi-stage-query-task-engine",level:2},{value:"SQL extensions",id:"sql-extensions",level:2},{value:"Read external data with <code>EXTERN</code>",id:"read-external-data-with-extern",level:3},{value:"Load data with <code>INSERT</code>",id:"load-data-with-insert",level:3},{value:"Overwrite data with REPLACE",id:"overwrite-data-with-replace",level:3},{value:"Write to an external destination with <code>EXTERN</code>",id:"write-to-an-external-destination-with-extern",level:3},{value:"Primary timestamp",id:"primary-timestamp",level:3},{value:"Partitioning by time",id:"partitioning-by-time",level:3},{value:"Clustering",id:"clustering",level:3},{value:"Rollup",id:"rollup",level:3},{value:"Multi-stage query tasks",id:"multi-stage-query-tasks",level:2},{value:"Execution flow",id:"execution-flow",level:3},{value:"Parallelism",id:"parallelism",level:3},{value:"Memory usage",id:"memory-usage",level:3},{value:"Disk usage",id:"disk-usage",level:3}],d={toc:m},c="wrapper";function h(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"}," This page describes SQL-based batch ingestion using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/30.0.1/multi-stage-query/"},(0,r.kt)("inlineCode",{parentName:"a"},"druid-multi-stage-query")),"\nextension, new in Druid 24.0. Refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/30.0.1/ingestion/#batch"},"ingestion methods")," table to determine which\ningestion method is right for you.")),(0,r.kt)("h2",{id:"multi-stage-query-task-engine"},"Multi-stage query task engine"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"druid-multi-stage-query")," extension adds a multi-stage query (MSQ) task engine that executes SQL statements as batch\ntasks in the indexing service, which execute on ",(0,r.kt)("a",{parentName:"p",href:"/docs/30.0.1/design/architecture#druid-services"},"Middle Managers"),".\n",(0,r.kt)("a",{parentName:"p",href:"/docs/30.0.1/multi-stage-query/reference#insert"},"INSERT")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/30.0.1/multi-stage-query/reference#replace"},"REPLACE")," tasks publish\n",(0,r.kt)("a",{parentName:"p",href:"/docs/30.0.1/design/storage"},"segments")," just like ",(0,r.kt)("a",{parentName:"p",href:"/docs/30.0.1/ingestion/#batch"},"all other forms of batch\ningestion"),". Each query occupies at least two task slots while running: one controller task,\nand at least one worker task. As an experimental feature, the MSQ task engine also supports running SELECT queries as\nbatch tasks. The behavior and result format of plain SELECT (without INSERT or REPLACE) is subject to change."),(0,r.kt)("p",null,"You can execute SQL statements using the MSQ task engine through the ",(0,r.kt)("strong",{parentName:"p"},"Query")," view in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/30.0.1/operations/web-console"},"web\nconsole")," or through the ",(0,r.kt)("a",{parentName:"p",href:"/docs/30.0.1/api-reference/sql-ingestion-api"},(0,r.kt)("inlineCode",{parentName:"a"},"/druid/v2/sql/task")," API"),"."),(0,r.kt)("p",null,"For more details on how SQL queries are executed using the MSQ task engine, see ",(0,r.kt)("a",{parentName:"p",href:"#multi-stage-query-tasks"},"multi-stage query\ntasks"),"."),(0,r.kt)("h2",{id:"sql-extensions"},"SQL extensions"),(0,r.kt)("p",null,"To support ingestion, additional SQL functionality is available through the MSQ task engine."),(0,r.kt)("a",{name:"extern"}),(0,r.kt)("h3",{id:"read-external-data-with-extern"},"Read external data with ",(0,r.kt)("inlineCode",{parentName:"h3"},"EXTERN")),(0,r.kt)("p",null,"Query tasks can access external data through the ",(0,r.kt)("inlineCode",{parentName:"p"},"EXTERN")," function, using any native batch ",(0,r.kt)("a",{parentName:"p",href:"/docs/30.0.1/ingestion/input-sources"},"input\nsource")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/30.0.1/ingestion/data-formats#input-format"},"input format"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"EXTERN")," can read multiple files in parallel across different worker tasks. However, ",(0,r.kt)("inlineCode",{parentName:"p"},"EXTERN")," does not split individual\nfiles across multiple worker tasks. If you have a small number of very large input files, you can increase query\nparallelism by splitting up your input files."),(0,r.kt)("p",null,"For more information about the syntax, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/30.0.1/multi-stage-query/reference#extern-function"},(0,r.kt)("inlineCode",{parentName:"a"},"EXTERN")),"."),(0,r.kt)("p",null,"See also the set of SQL-friendly input-source-specific table functions which may be more convenient\nthan ",(0,r.kt)("inlineCode",{parentName:"p"},"EXTERN"),"."),(0,r.kt)("a",{name:"insert"}),(0,r.kt)("h3",{id:"load-data-with-insert"},"Load data with ",(0,r.kt)("inlineCode",{parentName:"h3"},"INSERT")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," statements can create a new datasource or append to an existing datasource. In Druid SQL, unlike standard SQL,\nthere is no syntactical difference between creating a table and appending data to a table. Druid does not include a\n",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE TABLE")," statement."),(0,r.kt)("p",null,"Nearly all ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," capabilities are available for ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT ... SELECT")," queries. Certain exceptions are listed on the ",(0,r.kt)("a",{parentName:"p",href:"/docs/30.0.1/multi-stage-query/known-issues#select-statement"},"Known\nissues")," page."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," statements acquire a shared lock to the target datasource. Multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," statements can run at the same time,\nfor the same datasource, if your cluster has enough task slots."),(0,r.kt)("p",null,"Like all other forms of ",(0,r.kt)("a",{parentName:"p",href:"/docs/30.0.1/ingestion/#batch"},"batch ingestion"),", each ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," statement generates new segments and\npublishes them at the end of its run. For this reason, it is best suited to loading data in larger batches. Do not use\n",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," statements to load data in a sequence of microbatches; for that, use ",(0,r.kt)("a",{parentName:"p",href:"/docs/30.0.1/ingestion/#streaming"},"streaming\ningestion")," instead."),(0,r.kt)("p",null,"When deciding whether to use ",(0,r.kt)("inlineCode",{parentName:"p"},"REPLACE")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT"),", keep in mind that segments generated with ",(0,r.kt)("inlineCode",{parentName:"p"},"REPLACE")," can be pruned\nwith dimension-based pruning but those generated with ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," cannot. For more information about the requirements\nfor dimension-based pruning, see ",(0,r.kt)("a",{parentName:"p",href:"#clustering"},"Clustering"),"."),(0,r.kt)("p",null,"For more information about the syntax, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/30.0.1/multi-stage-query/reference#insert"},"INSERT"),"."),(0,r.kt)("a",{name:"replace"}),(0,r.kt)("h3",{id:"overwrite-data-with-replace"},"Overwrite data with REPLACE"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"REPLACE")," statements can create a new datasource or overwrite data in an existing datasource. In Druid SQL, unlike\nstandard SQL, there is no syntactical difference between creating a table and overwriting data in a table. Druid does\nnot include a ",(0,r.kt)("inlineCode",{parentName:"p"},"CREATE TABLE")," statement."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"REPLACE")," uses an ",(0,r.kt)("a",{parentName:"p",href:"/docs/30.0.1/multi-stage-query/reference#replace-specific-time-ranges"},"OVERWRITE clause")," to determine which data to overwrite. You\ncan overwrite an entire table, or a specific time range of a table. When you overwrite a specific time range, that time\nrange must align with the granularity specified in the ",(0,r.kt)("inlineCode",{parentName:"p"},"PARTITIONED BY")," clause."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"REPLACE")," statements acquire an exclusive write lock to the target time range of the target datasource. No other ingestion\nor compaction operations may proceed for that time range while the task is running. However, ingestion and compaction\noperations may proceed for other time ranges."),(0,r.kt)("p",null,"Nearly all ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," capabilities are available for ",(0,r.kt)("inlineCode",{parentName:"p"},"REPLACE ... SELECT")," queries. Certain exceptions are listed on the ",(0,r.kt)("a",{parentName:"p",href:"/docs/30.0.1/multi-stage-query/known-issues#select-statement"},"Known\nissues")," page."),(0,r.kt)("p",null,"For more information about the syntax, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/30.0.1/multi-stage-query/reference#replace"},"REPLACE"),"."),(0,r.kt)("p",null,"When deciding whether to use ",(0,r.kt)("inlineCode",{parentName:"p"},"REPLACE")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT"),", keep in mind that segments generated with ",(0,r.kt)("inlineCode",{parentName:"p"},"REPLACE")," can be pruned\nwith dimension-based pruning but those generated with ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," cannot. For more information about the requirements\nfor dimension-based pruning, see ",(0,r.kt)("a",{parentName:"p",href:"#clustering"},"Clustering"),"."),(0,r.kt)("h3",{id:"write-to-an-external-destination-with-extern"},"Write to an external destination with ",(0,r.kt)("inlineCode",{parentName:"h3"},"EXTERN")),(0,r.kt)("p",null,"Query tasks can write data to an external destination through the ",(0,r.kt)("inlineCode",{parentName:"p"},"EXTERN")," function, when it is used with the ",(0,r.kt)("inlineCode",{parentName:"p"},"INTO"),"\nclause, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT INTO EXTERN(...)"),". The EXTERN function takes arguments that specify where to write the files.\nThe format can be specified using an ",(0,r.kt)("inlineCode",{parentName:"p"},"AS")," clause."),(0,r.kt)("p",null,"For more information about the syntax, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/30.0.1/multi-stage-query/reference#extern-function"},(0,r.kt)("inlineCode",{parentName:"a"},"EXTERN")),"."),(0,r.kt)("h3",{id:"primary-timestamp"},"Primary timestamp"),(0,r.kt)("p",null,"Druid tables always include a primary timestamp named ",(0,r.kt)("inlineCode",{parentName:"p"},"__time"),"."),(0,r.kt)("p",null,"It is common to set a primary timestamp by using ",(0,r.kt)("a",{parentName:"p",href:"/docs/30.0.1/querying/sql-scalar#date-and-time-functions"},"date and time\nfunctions"),"; for example: ",(0,r.kt)("inlineCode",{parentName:"p"},"TIME_FORMAT(\"timestamp\", 'yyyy-MM-dd\nHH:mm:ss') AS __time"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"__time")," column is used for ",(0,r.kt)("a",{parentName:"p",href:"#partitioning-by-time"},"partitioning by time"),". If you use ",(0,r.kt)("inlineCode",{parentName:"p"},"PARTITIONED BY ALL")," or\n",(0,r.kt)("inlineCode",{parentName:"p"},"PARTITIONED BY ALL TIME"),", partitioning by time is disabled. In these cases, you do not need to include a ",(0,r.kt)("inlineCode",{parentName:"p"},"__time"),"\ncolumn in your ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," statement. However, Druid still creates a ",(0,r.kt)("inlineCode",{parentName:"p"},"__time")," column in your Druid table and sets all\ntimestamps to 1970-01-01 00:00:00."),(0,r.kt)("p",null,"For more information, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/30.0.1/ingestion/schema-model#primary-timestamp"},"Primary timestamp"),"."),(0,r.kt)("a",{name:"partitioning"}),(0,r.kt)("h3",{id:"partitioning-by-time"},"Partitioning by time"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"REPLACE")," statements require the ",(0,r.kt)("inlineCode",{parentName:"p"},"PARTITIONED BY")," clause, which determines how time-based partitioning is done.\nIn Druid, data is split into one or more segments per time chunk, defined by the PARTITIONED BY granularity."),(0,r.kt)("p",null,"Partitioning by time is important for three reasons:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Queries that filter by ",(0,r.kt)("inlineCode",{parentName:"li"},"__time")," (SQL) or ",(0,r.kt)("inlineCode",{parentName:"li"},"intervals")," (native) are able to use time partitioning to prune the set of\nsegments to consider."),(0,r.kt)("li",{parentName:"ol"},"Certain data management operations, such as overwriting and compacting existing data, acquire exclusive write locks\non time partitions. Finer-grained partitioning allows finer-grained exclusive write locks."),(0,r.kt)("li",{parentName:"ol"},"Each segment file is wholly contained within a time partition. Too-fine-grained partitioning may cause a large number\nof small segments, which leads to poor performance.")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"PARTITIONED BY HOUR")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"PARTITIONED BY DAY")," are the most common choices to balance these considerations. ",(0,r.kt)("inlineCode",{parentName:"p"},"PARTITIONED\nBY ALL")," is suitable if your dataset does not have a ",(0,r.kt)("a",{parentName:"p",href:"#primary-timestamp"},"primary timestamp"),"."),(0,r.kt)("p",null,"For more information about the syntax, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/30.0.1/multi-stage-query/reference#partitioned-by"},"PARTITIONED BY"),"."),(0,r.kt)("h3",{id:"clustering"},"Clustering"),(0,r.kt)("p",null,"Within each time chunk defined by ",(0,r.kt)("a",{parentName:"p",href:"#partitioning-by-time"},"time partitioning"),", data can be further split by the optional\n",(0,r.kt)("a",{parentName:"p",href:"/docs/30.0.1/multi-stage-query/reference#clustered-by"},"CLUSTERED BY")," clause."),(0,r.kt)("p",null,"For example, suppose you ingest 100 million rows per hour using ",(0,r.kt)("inlineCode",{parentName:"p"},"PARTITIONED BY HOUR")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"CLUSTERED BY hostName"),". The\ningestion task will generate segments of roughly 3 million rows \u2014\xa0the default value of\n",(0,r.kt)("a",{parentName:"p",href:"/docs/30.0.1/multi-stage-query/reference#context-parameters"},(0,r.kt)("inlineCode",{parentName:"a"},"rowsPerSegment"))," \u2014\xa0with lexicographic ranges of ",(0,r.kt)("inlineCode",{parentName:"p"},"hostName"),"s grouped into segments."),(0,r.kt)("p",null,"Clustering is important for two reasons:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Lower storage footprint due to improved locality, and therefore improved compressibility."),(0,r.kt)("li",{parentName:"ol"},"Better query performance due to dimension-based segment pruning, which removes segments from consideration when they\ncannot possibly contain data matching a query's filter. This speeds up filters like ",(0,r.kt)("inlineCode",{parentName:"li"},"x = 'foo'")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"x IN ('foo',\n'bar')"),".")),(0,r.kt)("p",null,"To activate dimension-based pruning, these requirements must be met:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Segments were generated by a ",(0,r.kt)("inlineCode",{parentName:"li"},"REPLACE")," statement, not an ",(0,r.kt)("inlineCode",{parentName:"li"},"INSERT")," statement."),(0,r.kt)("li",{parentName:"ul"},"All ",(0,r.kt)("inlineCode",{parentName:"li"},"CLUSTERED BY")," columns are single-valued string columns.")),(0,r.kt)("p",null,"If these requirements are ",(0,r.kt)("em",{parentName:"p"},"not")," met, Druid still clusters data during ingestion but will not be able to perform\ndimension-based segment pruning at query time. You can tell if dimension-based segment pruning is possible by using the\n",(0,r.kt)("inlineCode",{parentName:"p"},"sys.segments")," table to inspect the ",(0,r.kt)("inlineCode",{parentName:"p"},"shard_spec")," for the segments generated by an ingestion query. If they are of type\n",(0,r.kt)("inlineCode",{parentName:"p"},"range")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"single"),", then dimension-based segment pruning is possible. Otherwise, it is not. The shard spec type is also\navailable in the ",(0,r.kt)("strong",{parentName:"p"},"Segments")," view under the ",(0,r.kt)("strong",{parentName:"p"},"Partitioning")," column."),(0,r.kt)("p",null,"For more information about syntax, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/30.0.1/multi-stage-query/reference#clustered-by"},(0,r.kt)("inlineCode",{parentName:"a"},"CLUSTERED BY")),"."),(0,r.kt)("h3",{id:"rollup"},"Rollup"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/30.0.1/ingestion/rollup"},"Rollup")," is a technique that pre-aggregates data during ingestion to reduce the amount of data\nstored. Intermediate aggregations are stored in the generated segments, and further aggregation is done at query time.\nThis reduces storage footprint and improves performance, often dramatically."),(0,r.kt)("p",null,"To perform ingestion with rollup:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Use ",(0,r.kt)("inlineCode",{parentName:"li"},"GROUP BY"),". The columns in the ",(0,r.kt)("inlineCode",{parentName:"li"},"GROUP BY")," clause become dimensions, and aggregation functions become metrics."),(0,r.kt)("li",{parentName:"ol"},"Set ",(0,r.kt)("a",{parentName:"li",href:"/docs/30.0.1/multi-stage-query/reference#context-parameters"},(0,r.kt)("inlineCode",{parentName:"a"},"finalizeAggregations: false"))," in your context. This causes aggregation\nfunctions to write their internal state to the generated segments, instead of the finalized end result, and enables\nfurther aggregation at query time."),(0,r.kt)("li",{parentName:"ol"},"See ",(0,r.kt)("a",{parentName:"li",href:"/docs/30.0.1/querying/arrays#sql-based-ingestion"},"ARRAY types")," for information about ingesting ",(0,r.kt)("inlineCode",{parentName:"li"},"ARRAY")," columns"),(0,r.kt)("li",{parentName:"ol"},"See ",(0,r.kt)("a",{parentName:"li",href:"/docs/30.0.1/querying/multi-value-dimensions#sql-based-ingestion"},"multi-value dimensions")," for information to ingest multi-value VARCHAR columns")),(0,r.kt)("p",null,"When you do all of these things, Druid understands that you intend to do an ingestion with rollup, and it writes\nrollup-related metadata into the generated segments. Other applications can then use ",(0,r.kt)("a",{parentName:"p",href:"/docs/30.0.1/querying/segmentmetadataquery"},(0,r.kt)("inlineCode",{parentName:"a"},"segmentMetadata"),"\nqueries")," to retrieve rollup-related information."),(0,r.kt)("p",null,"The following ",(0,r.kt)("a",{parentName:"p",href:"/docs/30.0.1/querying/sql-aggregations"},"aggregation functions")," are supported for rollup at ingestion time:\n",(0,r.kt)("inlineCode",{parentName:"p"},"COUNT")," (but switch to ",(0,r.kt)("inlineCode",{parentName:"p"},"SUM")," at query time), ",(0,r.kt)("inlineCode",{parentName:"p"},"SUM"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"MIN"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"MAX"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"EARLIEST")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"EARLIEST_BY"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"LATEST")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"LATEST_BY"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"APPROX_COUNT_DISTINCT"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"APPROX_COUNT_DISTINCT_BUILTIN"),",\n",(0,r.kt)("inlineCode",{parentName:"p"},"APPROX_COUNT_DISTINCT_DS_HLL"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"APPROX_COUNT_DISTINCT_DS_THETA"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"DS_QUANTILES_SKETCH")," (but switch to\n",(0,r.kt)("inlineCode",{parentName:"p"},"APPROX_QUANTILE_DS")," at query time). Do not use ",(0,r.kt)("inlineCode",{parentName:"p"},"AVG"),"; instead, use ",(0,r.kt)("inlineCode",{parentName:"p"},"SUM")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"COUNT")," at ingest time and compute the\nquotient at query time."),(0,r.kt)("p",null,"For an example, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/30.0.1/multi-stage-query/examples#insert-with-rollup"},"INSERT with rollup example"),"."),(0,r.kt)("h2",{id:"multi-stage-query-tasks"},"Multi-stage query tasks"),(0,r.kt)("h3",{id:"execution-flow"},"Execution flow"),(0,r.kt)("p",null,"When you execute a SQL statement using the task endpoint ",(0,r.kt)("a",{parentName:"p",href:"/docs/30.0.1/api-reference/sql-ingestion-api#submit-a-query"},(0,r.kt)("inlineCode",{parentName:"a"},"/druid/v2/sql/task")),", the following\nhappens:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The Broker plans your SQL query into a native query, as usual.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The Broker wraps the native query into a task of type ",(0,r.kt)("inlineCode",{parentName:"p"},"query_controller"),"\nand submits it to the indexing service.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The Broker returns the task ID to you and exits.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The controller task launches some number of worker tasks determined by\nthe ",(0,r.kt)("inlineCode",{parentName:"p"},"maxNumTasks")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"taskAssignment")," ",(0,r.kt)("a",{parentName:"p",href:"/docs/30.0.1/multi-stage-query/reference#context-parameters"},"context parameters"),". You can set these settings individually for each query.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Worker tasks of type ",(0,r.kt)("inlineCode",{parentName:"p"},"query_worker")," execute the query.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If the query is a ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," query, the worker tasks send the results\nback to the controller task, which writes them into its task report.\nIf the query is an INSERT or REPLACE query, the worker tasks generate and\npublish new Druid segments to the provided datasource."))),(0,r.kt)("h3",{id:"parallelism"},"Parallelism"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/docs/30.0.1/multi-stage-query/reference#context-parameters"},(0,r.kt)("inlineCode",{parentName:"a"},"maxNumTasks"))," query parameter determines the maximum number of tasks your\nquery will use, including the one ",(0,r.kt)("inlineCode",{parentName:"p"},"query_controller")," task. Generally, queries perform better with more workers. The\nlowest possible value of ",(0,r.kt)("inlineCode",{parentName:"p"},"maxNumTasks")," is two (one worker and one controller). Do not set this higher than the number of\nfree slots available in your cluster; doing so will result in a ",(0,r.kt)("a",{parentName:"p",href:"/docs/30.0.1/multi-stage-query/reference#error_TaskStartTimeout"},"TaskStartTimeout"),"\nerror."),(0,r.kt)("p",null,"When ",(0,r.kt)("a",{parentName:"p",href:"#extern"},"reading external data"),", EXTERN can read multiple files in parallel across\ndifferent worker tasks. However, EXTERN does not split individual files across multiple worker tasks. If you have a\nsmall number of very large input files, you can increase query parallelism by splitting up your input files."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"druid.worker.capacity")," server property on each ",(0,r.kt)("a",{parentName:"p",href:"/docs/30.0.1/design/architecture#druid-services"},"Middle Manager"),"\ndetermines the maximum number of worker tasks that can run on each server at once. Worker tasks run single-threaded,\nwhich also determines the maximum number of processors on the server that can contribute towards multi-stage queries."),(0,r.kt)("h3",{id:"memory-usage"},"Memory usage"),(0,r.kt)("p",null,"Increasing the amount of available memory can improve performance in certain cases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Segment generation becomes more efficient when data doesn't spill to disk as often."),(0,r.kt)("li",{parentName:"ul"},"Sorting stage output data becomes more efficient since available memory affects the\nnumber of required sorting passes.")),(0,r.kt)("p",null,'Worker tasks use both JVM heap memory and off-heap ("direct") memory.'),(0,r.kt)("p",null,"On Peons launched by Middle Managers, the bulk of the JVM heap (75%, less any space used by\n",(0,r.kt)("a",{parentName:"p",href:"/docs/30.0.1/querying/lookups"},"lookups"),") is split up into two bundles of equal size: one processor bundle and one worker\nbundle. Each one comprises 37.5% of the available JVM heap, less any space used by ",(0,r.kt)("a",{parentName:"p",href:"/docs/30.0.1/querying/lookups"},"lookups"),"."),(0,r.kt)("p",null,"Depending on the type of query, controller and worker tasks may use sketches for determining partition boundaries.\nThe heap footprint of these sketches is capped at 10% of available memory, or 300 MB, whichever is lower."),(0,r.kt)("p",null,"The processor memory bundle is used for query processing and segment generation. Each processor bundle must also\nprovides space to buffer I/O between stages. Specifically, each downstream stage requires 1 MB of buffer space for each\nupstream worker. For example, if you have 100 workers running in stage 0, and stage 1 reads from stage 0, then each\nworker in stage 1 requires 1M * 100 = 100 MB of memory for frame buffers."),(0,r.kt)("p",null,"The worker memory bundle is used for sorting stage output data prior to shuffle. Workers can sort more data than fits in\nmemory; in this case, they will switch to using disk."),(0,r.kt)("p",null,'Worker tasks also use off-heap ("direct") memory. Set the amount of direct memory available (',(0,r.kt)("inlineCode",{parentName:"p"},"-XX:MaxDirectMemorySize"),")\nto at least ",(0,r.kt)("inlineCode",{parentName:"p"},"(druid.processing.numThreads + 1) * druid.processing.buffer.sizeBytes"),". Increasing the amount of direct\nmemory available beyond the minimum does not speed up processing."),(0,r.kt)("h3",{id:"disk-usage"},"Disk usage"),(0,r.kt)("p",null,"Worker tasks use local disk for four purposes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Temporary copies of input data. Each temporary file is deleted before the next one is read. You only need\nenough temporary disk space to store one input file at a time per task."),(0,r.kt)("li",{parentName:"ul"},"Temporary data related to segment generation. You only need enough temporary disk space to store one segments' worth\nof data at a time per task. This is generally less than 2 GB per task."),(0,r.kt)("li",{parentName:"ul"},"External sort of data prior to shuffle. Requires enough space to store a compressed copy of the entire output dataset\nfor a task."),(0,r.kt)("li",{parentName:"ul"},"Storing stage output data during a shuffle. Requires enough space to store a compressed copy of the entire output\ndataset for a task.")),(0,r.kt)("p",null,"Workers use the task working directory, given by\n",(0,r.kt)("a",{parentName:"p",href:"/docs/30.0.1/configuration/#additional-peon-configuration"},(0,r.kt)("inlineCode",{parentName:"a"},"druid.indexer.task.baseDir")),", for these items. It is\nimportant that this directory has enough space available for these purposes."))}h.isMDXComponent=!0}}]);
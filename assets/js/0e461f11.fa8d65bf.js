"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6197],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=d(a),m=r,g=c["".concat(l,".").concat(m)]||c[m]||p[m]||i;return a?n.createElement(g,o(o({ref:t},u),{},{components:a})):n.createElement(g,o({ref:t},u))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},84530:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],s={id:"index",title:"Introduction to Apache Druid"},l=void 0,d={unversionedId:"design/index",id:"design/index",title:"Introduction to Apache Druid",description:"\x3c!--",source:"@site/docs/latest/design/index.md",sourceDirName:"design",slug:"/design/",permalink:"/docs/latest/design/",draft:!1,tags:[],version:"current",frontMatter:{id:"index",title:"Introduction to Apache Druid"},sidebar:"docs",next:{title:"Local quickstart",permalink:"/docs/latest/tutorials/"}},u={},c=[{value:"Key features of Druid",id:"key-features-of-druid",level:2},{value:"When to use Druid",id:"when-to-use-druid",level:2},{value:"Learn more",id:"learn-more",level:2}],p={toc:c},m="wrapper";function g(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,'Apache Druid is a real-time analytics database designed for fast slice-and-dice analytics ("',(0,i.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Online_analytical_processing"},"OLAP"),'" queries) on large data sets. Most often, Druid powers use cases where real-time ingestion, fast query performance, and high uptime are important.'),(0,i.kt)("p",null,"Druid is commonly used as the database backend for GUIs of analytical applications, or for highly-concurrent APIs that need fast aggregations. Druid works best with event-oriented data."),(0,i.kt)("p",null,"Common application areas for Druid include:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Use Case"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Clickstream analytics"),(0,i.kt)("td",{parentName:"tr",align:null},"Analyze user behavior on websites and mobile applications to understand navigation patterns, popular content, and user engagement")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Network telemetry analytics"),(0,i.kt)("td",{parentName:"tr",align:null},"Monitor and analyze network traffic and performance metrics to optimize network efficiency, identify bottlenecks, and ensure quality of service")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Server metrics storage"),(0,i.kt)("td",{parentName:"tr",align:null},"Collect and store performance metrics such as CPU usage, memory usage, disk I/O, and network activity to monitor server health and optimize resource allocation")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Supply chain analytics"),(0,i.kt)("td",{parentName:"tr",align:null},"Use data from various stages of the supply chain to optimize inventory management, streamline logistics, forecast demand, and improve overall operational efficiency")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Application performance metrics"),(0,i.kt)("td",{parentName:"tr",align:null},"Monitor and analyze the performance of software applications to identify areas for improvement, troubleshoot issues, and ensure optimal user experience")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Digital marketing/advertising analytics"),(0,i.kt)("td",{parentName:"tr",align:null},"Track and analyze the effectiveness of digital marketing campaigns and advertising efforts across various channels, such as social media, search engines, and display ads")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Business intelligence (BI)/OLAP (Online Analytical Processing)"),(0,i.kt)("td",{parentName:"tr",align:null},"Use data analysis tools and techniques to gather insights from large datasets, generate reports, and make data-driven decisions to improve business operations and strategy")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Customer analytics"),(0,i.kt)("td",{parentName:"tr",align:null},"Analyze customer data to understand preferences, behavior, and purchasing patterns, enabling personalized marketing strategies, improved customer service, and customer retention efforts")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"IoT (Internet of Things) analytics"),(0,i.kt)("td",{parentName:"tr",align:null},"Process and analyze data generated by IoT devices to gain insights into device performance, user behavior, and environmental conditions, facilitating automation, optimization, and predictive maintenance")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Financial analytics"),(0,i.kt)("td",{parentName:"tr",align:null},"Evaluate finance data to gauge financial performance, manage risk, detect fraud, and make informed investment decisions")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Healthcare analytics"),(0,i.kt)("td",{parentName:"tr",align:null},"Analyze healthcare data to improve patient outcomes, optimize healthcare delivery, reduce costs, and identify trends and patterns in diseases and treatments")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Social media analytics"),(0,i.kt)("td",{parentName:"tr",align:null},"Monitor and analyze social media activity, such as likes, shares, comments, and mentions, to understand audience sentiment, track brand perception, and identify influencers")))),(0,i.kt)("p",null,"If you are experimenting with a new use case for Druid or have questions about Druid's capabilities and features, join the ",(0,i.kt)("a",{parentName:"p",href:"http://apachedruidworkspace.slack.com/"},"Apache Druid Slack")," channel. There, you can connect with Druid experts, ask questions, and get help in real time."),(0,i.kt)("h2",{id:"key-features-of-druid"},"Key features of Druid"),(0,i.kt)("p",null,"Druid's core architecture combines ideas from data warehouses, timeseries databases, and logsearch systems. Some of\nDruid's key features are:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Columnar storage format.")," Druid uses column-oriented storage. This means it only loads the exact columns\nneeded for a particular query.  This greatly improves speed for queries that retrieve only a few columns. Additionally, to support fast scans and aggregations, Druid optimizes column storage for each column according to its data type."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Scalable distributed system.")," Typical Druid deployments span clusters ranging from tens to hundreds of servers. Druid can ingest data at the rate of millions of records per second while retaining trillions of records and maintaining query latencies ranging from the sub-second to a few seconds."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Massively parallel processing.")," Druid can process each query in parallel across the entire cluster."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Realtime or batch ingestion.")," Druid can ingest data either real-time or in batches. Ingested data is immediately available for\nquerying."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Self-healing, self-balancing, easy to operate.")," As an operator, you add servers to scale out or\nremove servers to scale down. The Druid cluster re-balances itself automatically in the background without any downtime. If a\nDruid server fails, the system automatically routes data around the damage until the server can be replaced. Druid\nis designed to run continuously without planned downtime for any reason. This is true for configuration changes and software\nupdates."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Cloud-native, fault-tolerant architecture that won't lose data.")," After ingestion, Druid safely stores a copy of your data in ",(0,i.kt)("a",{parentName:"li",href:"/docs/latest/design/architecture#deep-storage"},"deep storage"),". Deep storage is typically cloud storage, HDFS, or a shared filesystem. You can recover your data from deep storage even in the unlikely case that all Druid servers fail. For a limited failure that affects only a few Druid servers, replication ensures that queries are still possible during system recoveries."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Indexes for quick filtering.")," Druid uses ",(0,i.kt)("a",{parentName:"li",href:"https://roaringbitmap.org/"},"Roaring")," or\n",(0,i.kt)("a",{parentName:"li",href:"https://arxiv.org/pdf/1004.0403"},"CONCISE")," compressed bitmap indexes to create indexes to enable fast filtering and searching across multiple columns."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Time-based partitioning.")," Druid first partitions data by time. You can optionally implement additional partitioning based upon other fields.\nTime-based queries only access the partitions that match the time range of the query which leads to significant performance improvements."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Approximate algorithms.")," Druid includes algorithms for approximate count-distinct, approximate ranking, and\ncomputation of approximate histograms and quantiles. These algorithms offer bounded memory usage and are often\nsubstantially faster than exact computations. For situations where accuracy is more important than speed, Druid also\noffers exact count-distinct and exact ranking."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Automatic summarization at ingest time.")," Druid optionally supports data summarization at ingestion time. This\nsummarization partially pre-aggregates your data, potentially leading to significant cost savings and performance boosts.")),(0,i.kt)("h2",{id:"when-to-use-druid"},"When to use Druid"),(0,i.kt)("p",null,"Druid is used by many companies of various sizes for many different use cases. For more information see\n",(0,i.kt)("a",{parentName:"p",href:"/druid-powered"},"Powered by Apache Druid"),"."),(0,i.kt)("p",null,"Druid is likely a good choice if your use case matches a few of the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Insert rates are very high, but updates are less common."),(0,i.kt)("li",{parentName:"ul"},'Most of your queries are aggregation and reporting queries. For example "group by" queries. You may also have searching and\nscanning queries.'),(0,i.kt)("li",{parentName:"ul"},"You are targeting query latencies of 100ms to a few seconds."),(0,i.kt)("li",{parentName:"ul"},"Your data has a time component. Druid includes optimizations and design choices specifically related to time."),(0,i.kt)("li",{parentName:"ul"},'You may have more than one table, but each query hits just one big distributed table. Queries may potentially hit more\nthan one smaller "lookup" table.'),(0,i.kt)("li",{parentName:"ul"},"You have high cardinality data columns, e.g. URLs, user IDs, and need fast counting and ranking over them."),(0,i.kt)("li",{parentName:"ul"},"You want to load data from Kafka, HDFS, flat files, or object storage like Amazon S3.")),(0,i.kt)("p",null,"Situations where you would likely ",(0,i.kt)("em",{parentName:"p"},"not")," want to use Druid include:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You need low-latency updates of ",(0,i.kt)("em",{parentName:"li"},"existing")," records using a primary key. Druid supports streaming inserts, but not streaming updates. You can perform updates using\nbackground batch jobs."),(0,i.kt)("li",{parentName:"ul"},"You are building an offline reporting system where query latency is not very important."),(0,i.kt)("li",{parentName:"ul"},'You want to do "big" joins, meaning joining one big fact table to another big fact table, and you are okay with these queries\ntaking a long time to complete.')),(0,i.kt)("h2",{id:"learn-more"},"Learn more"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Try the Druid ",(0,i.kt)("a",{parentName:"li",href:"/docs/latest/tutorials/"},"Quickstart"),"."),(0,i.kt)("li",{parentName:"ul"},"Learn more about Druid components in ",(0,i.kt)("a",{parentName:"li",href:"/docs/latest/design/architecture"},"Design"),"."),(0,i.kt)("li",{parentName:"ul"},"Read about new features and improvements in ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/druid/releases"},"Druid Releases"),".")))}g.isMDXComponent=!0}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2374],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return a?n.createElement(h,o(o({ref:t},p),{},{components:a})):n.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},96434:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var n=a(87462),r=a(63366),i=(a(67294),a(3905)),o=["components"],l={id:"index",title:"Quickstart (local)",sidebar_label:"Quickstart (local)"},s=void 0,u={unversionedId:"tutorials/index",id:"tutorials/index",title:"Quickstart (local)",description:"\x3c!--",source:"@site/docs/latest/tutorials/index.md",sourceDirName:"tutorials",slug:"/tutorials/",permalink:"/docs/latest/tutorials/",draft:!1,tags:[],version:"current",frontMatter:{id:"index",title:"Quickstart (local)",sidebar_label:"Quickstart (local)"},sidebar:"docs",previous:{title:"Introduction to Apache Druid",permalink:"/docs/latest/design/"},next:{title:"Single server deployment",permalink:"/docs/latest/operations/single-server"}},p={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Install Druid",id:"install-druid",level:2},{value:"Start up Druid services",id:"start-up-druid-services",level:2},{value:"Open the web console",id:"open-the-web-console",level:2},{value:"Load data",id:"load-data",level:2},{value:"Query data",id:"query-data",level:2},{value:"Next steps",id:"next-steps",level:2}],c={toc:d},m="wrapper";function h(e){var t=e.components,l=(0,r.Z)(e,o);return(0,i.kt)(m,(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This quickstart helps you install Apache Druid and introduces you to Druid ingestion and query features. For this tutorial, you need a machine with at least 6 GiB of RAM."),(0,i.kt)("p",null,"In this quickstart, you'll:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"install Druid"),(0,i.kt)("li",{parentName:"ul"},"start up Druid services"),(0,i.kt)("li",{parentName:"ul"},"use SQL to ingest and query data")),(0,i.kt)("p",null,"Druid supports a variety of ingestion options. Once you're done with this tutorial, refer to the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/ingestion/"},"Ingestion")," page to determine which ingestion method is right for you."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"You can follow these steps on a relatively modest machine, such as a workstation or virtual server with 6 GiB of RAM."),(0,i.kt)("p",null,"The software requirements for the installation machine are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Linux, Mac OS X, or other Unix-like OS. (Windows is not supported)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/latest/operations/java"},"Java 8u92+, 11, or 17")),(0,i.kt)("li",{parentName:"ul"},"Python 3 (preferred) or Python 2"),(0,i.kt)("li",{parentName:"ul"},"Perl 5")),(0,i.kt)("p",null,"Java must be available. Either it is on your path, or set one of the ",(0,i.kt)("inlineCode",{parentName:"p"},"JAVA_HOME")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"DRUID_JAVA_HOME")," environment variables.\nYou can run ",(0,i.kt)("inlineCode",{parentName:"p"},"apache-druid-30.0.0/bin/verify-java")," to verify Java requirements for your environment."),(0,i.kt)("p",null,"Before installing a production Druid instance, be sure to review the ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/operations/security-overview"},"security\noverview"),". In general, avoid running Druid as root user. Consider creating a\ndedicated user account for running Druid.  "),(0,i.kt)("h2",{id:"install-druid"},"Install Druid"),(0,i.kt)("p",null,"Download the ",(0,i.kt)("a",{parentName:"p",href:"https://www.apache.org/dyn/closer.cgi?path=/druid/30.0.0/apache-druid-30.0.0-bin.tar.gz"},"30.0.0 release")," from Apache Druid. "),(0,i.kt)("p",null,"In your terminal, extract the file and change directories to the distribution directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"tar -xzf apache-druid-30.0.0-bin.tar.gz\ncd apache-druid-30.0.0\n")),(0,i.kt)("p",null,"The distribution directory contains ",(0,i.kt)("inlineCode",{parentName:"p"},"LICENSE")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"NOTICE")," files and subdirectories for executable files, configuration files, sample data and more."),(0,i.kt)("h2",{id:"start-up-druid-services"},"Start up Druid services"),(0,i.kt)("p",null,"Start up Druid services using the automatic single-machine configuration.\nThis configuration includes default settings that are appropriate for this tutorial, such as loading the ",(0,i.kt)("inlineCode",{parentName:"p"},"druid-multi-stage-query")," extension by default so that you can use the MSQ task engine."),(0,i.kt)("p",null,"You can view the default settings in the configuration files located in ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/druid/auto"),"."),(0,i.kt)("p",null,"From the apache-druid-30.0.0 package root, run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./bin/start-druid\n")),(0,i.kt)("p",null,"This launches instances of ZooKeeper and the Druid services.\nFor example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'$ ./bin/start-druid\n[Tue Nov 29 16:31:06 2022] Starting Apache Druid.\n[Tue Nov 29 16:31:06 2022] Open http://localhost:8888/ in your browser to access the web console.\n[Tue Nov 29 16:31:06 2022] Or, if you have enabled TLS, use https on port 9088.\n[Tue Nov 29 16:31:06 2022] Starting services with log directory [/apache-druid-30.0.0/log].\n[Tue Nov 29 16:31:06 2022] Running command[zk]: bin/run-zk conf\n[Tue Nov 29 16:31:06 2022] Running command[broker]: bin/run-druid broker /apache-druid-30.0.0/conf/druid/single-server/quickstart \'-Xms1187m -Xmx1187m -XX:MaxDirectMemorySize=791m\'\n[Tue Nov 29 16:31:06 2022] Running command[router]: bin/run-druid router /apache-druid-30.0.0/conf/druid/single-server/quickstart \'-Xms128m -Xmx128m\'\n[Tue Nov 29 16:31:06 2022] Running command[coordinator-overlord]: bin/run-druid coordinator-overlord /apache-druid-30.0.0/conf/druid/single-server/quickstart \'-Xms1290m -Xmx1290m\'\n[Tue Nov 29 16:31:06 2022] Running command[historical]: bin/run-druid historical /apache-druid-30.0.0/conf/druid/single-server/quickstart \'-Xms1376m -Xmx1376m -XX:MaxDirectMemorySize=2064m\'\n[Tue Nov 29 16:31:06 2022] Running command[middleManager]: bin/run-druid middleManager /apache-druid-30.0.0/conf/druid/single-server/quickstart \'-Xms64m -Xmx64m\' \'-Ddruid.worker.capacity=2 -Ddruid.indexer.runner.javaOptsArray=["-server","-Duser.timezone=UTC","-Dfile.encoding=UTF-8","-XX:+ExitOnOutOfMemoryError","-Djava.util.logging.manager=org.apache.logging.log4j.jul.LogManager","-Xms256m","-Xmx256m","-XX:MaxDirectMemorySize=256m"]\'\n')),(0,i.kt)("p",null,"Druid may use up to 80% of the total available system memory.\nTo explicitly set the total memory available to Druid, pass a value for the memory parameter. For example, ",(0,i.kt)("inlineCode",{parentName:"p"},"./bin/start-druid -m 16g"),". "),(0,i.kt)("p",null,"Druid stores all persistent state data, such as the cluster metadata store and data segments, in ",(0,i.kt)("inlineCode",{parentName:"p"},"apache-druid-30.0.0/var"),".\nEach service writes to a log file under ",(0,i.kt)("inlineCode",{parentName:"p"},"apache-druid-30.0.0/log"),"."),(0,i.kt)("p",null,"At any time, you can revert Druid to its original, post-installation state by deleting the entire ",(0,i.kt)("inlineCode",{parentName:"p"},"var")," directory. You may want to do this, for example, between Druid tutorials or after experimentation, to start with a fresh instance. "),(0,i.kt)("p",null,"To stop Druid at any time, use CTRL+C in the terminal. This exits the ",(0,i.kt)("inlineCode",{parentName:"p"},"bin/start-druid")," script and terminates all Druid processes."),(0,i.kt)("h2",{id:"open-the-web-console"},"Open the web console"),(0,i.kt)("p",null,"After starting the Druid services, open the ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/operations/web-console"},"web console")," at ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:8888"},"http://localhost:8888"),". "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"web console",src:a(39433).Z,title:"web console",width:"1250",height:"740"})),(0,i.kt)("p",null,"It may take a few seconds for all Druid services to finish starting, including the ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/design/router"},"Druid router"),", which serves the console. If you attempt to open the web console before startup is complete, you may see errors in the browser. Wait a few moments and try again."),(0,i.kt)("p",null,"In this quickstart, you use the the web console to perform ingestion. The MSQ task engine specifically uses the ",(0,i.kt)("strong",{parentName:"p"},"Query")," view to edit and run SQL queries.\nFor a complete walkthrough of the ",(0,i.kt)("strong",{parentName:"p"},"Query")," view as it relates to the multi-stage query architecture and the MSQ task engine, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/operations/web-console"},"UI walkthrough"),"."),(0,i.kt)("h2",{id:"load-data"},"Load data"),(0,i.kt)("p",null,"The Druid distribution bundles the ",(0,i.kt)("inlineCode",{parentName:"p"},"wikiticker-2015-09-12-sampled.json.gz")," sample dataset that you can use for testing. The sample dataset is located in the ",(0,i.kt)("inlineCode",{parentName:"p"},"quickstart/tutorial/")," folder, accessible from the Druid root directory, and represents Wikipedia page edits for a given day. "),(0,i.kt)("p",null,"Follow these steps to load the sample Wikipedia dataset:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("strong",{parentName:"p"},"Query")," view, click ",(0,i.kt)("strong",{parentName:"p"},"Connect external data"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the ",(0,i.kt)("strong",{parentName:"p"},"Local disk")," tile and enter the following values:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Base directory"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"quickstart/tutorial/"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"File filter"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"wikiticker-2015-09-12-sampled.json.gz")," "))),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Data location",src:a(46320).Z,title:"Data location",width:"1250",height:"740"})),(0,i.kt)("p",{parentName:"li"},"Entering the base directory and ",(0,i.kt)("a",{parentName:"p",href:"https://commons.apache.org/proper/commons-io/apidocs/org/apache/commons/io/filefilter/WildcardFileFilter.html"},"wildcard file filter")," separately, as afforded by the UI, allows you to specify multiple files for ingestion at once.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Connect data"),". ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"On the ",(0,i.kt)("strong",{parentName:"p"},"Parse")," page, you can examine the raw data and perform the following optional actions before loading data into Druid: "),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Expand a row to see the corresponding source data."),(0,i.kt)("li",{parentName:"ul"},"Customize how the data is handled by selecting from the ",(0,i.kt)("strong",{parentName:"li"},"Input format")," options."),(0,i.kt)("li",{parentName:"ul"},"Adjust the primary timestamp column for the data.\nDruid requires data to have a primary timestamp column (internally stored in a column called ",(0,i.kt)("inlineCode",{parentName:"li"},"__time"),").\nIf your dataset doesn't have a timestamp, Druid uses the default value of ",(0,i.kt)("inlineCode",{parentName:"li"},"1970-01-01 00:00:00"),".")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Data sample",src:a(84341).Z,title:"Data sample",width:"1250",height:"740"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Done"),". You're returned to the ",(0,i.kt)("strong",{parentName:"p"},"Query")," view that displays the newly generated query.\nThe query inserts the sample data into the table named ",(0,i.kt)("inlineCode",{parentName:"p"},"wikiticker-2015-09-12-sampled"),"."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Show the query"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'REPLACE INTO "wikiticker-2015-09-12-sampled" OVERWRITE ALL\nWITH input_data AS (SELECT *\nFROM TABLE(\n  EXTERN(\n    \'{"type":"local","baseDir":"quickstart/tutorial/","filter":"wikiticker-2015-09-12-sampled.json.gz"}\',\n    \'{"type":"json"}\',\n    \'[{"name":"time","type":"string"},{"name":"channel","type":"string"},{"name":"cityName","type":"string"},{"name":"comment","type":"string"},{"name":"countryIsoCode","type":"string"},{"name":"countryName","type":"string"},{"name":"isAnonymous","type":"string"},{"name":"isMinor","type":"string"},{"name":"isNew","type":"string"},{"name":"isRobot","type":"string"},{"name":"isUnpatrolled","type":"string"},{"name":"metroCode","type":"long"},{"name":"namespace","type":"string"},{"name":"page","type":"string"},{"name":"regionIsoCode","type":"string"},{"name":"regionName","type":"string"},{"name":"user","type":"string"},{"name":"delta","type":"long"},{"name":"added","type":"long"},{"name":"deleted","type":"long"}]\'\n     )\n   ))\nSELECT\n  TIME_PARSE("time") AS __time,\n  channel,\n  cityName,\n  comment,\n  countryIsoCode,\n  countryName,\n  isAnonymous,\n  isMinor,\n  isNew,\n  isRobot,\n  isUnpatrolled,\n  metroCode,\n  namespace,\n  page,\n  regionIsoCode,\n  regionName,\n  user,\n  delta,\n  added,\n  deleted\nFROM input_data\nPARTITIONED BY DAY\n')))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Optionally, click ",(0,i.kt)("strong",{parentName:"p"},"Preview")," to see the general shape of the data before you ingest it.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Edit the first line of the query and change the default destination datasource name from ",(0,i.kt)("inlineCode",{parentName:"p"},"wikiticker-2015-09-12-sampled")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"wikipedia"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Run")," to execute the query. The task may take a minute or two to complete. When done, the task displays its duration and the number of rows inserted into the table. The view is set to automatically refresh, so you don't need to refresh the browser to see the status change."),(0,i.kt)("p",{parentName:"li"}," ",(0,i.kt)("img",{alt:"Run query",src:a(51289).Z,title:"Run query",width:"1250",height:"740"})),(0,i.kt)("p",{parentName:"li"},"A successful task means that Druid data servers have picked up one or more segments."))),(0,i.kt)("h2",{id:"query-data"},"Query data"),(0,i.kt)("p",null,"Once the ingestion job is complete, you can query the data. "),(0,i.kt)("p",null,"In the ",(0,i.kt)("strong",{parentName:"p"},"Query")," view, run the following query to produce a list of top channels:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT\n  channel,\n  COUNT(*)\nFROM "wikipedia"\nGROUP BY channel\nORDER BY COUNT(*) DESC\n')),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Query view",src:a(58368).Z,title:"Query view",width:"1250",height:"740"})),(0,i.kt)("p",null,"Congratulations! You've gone from downloading Druid to querying data with the MSQ task engine in just one quickstart."),(0,i.kt)("h2",{id:"next-steps"},"Next steps"),(0,i.kt)("p",null,"See the following topics for more information:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/latest/querying/sql"},"Druid SQL overview")," or the ",(0,i.kt)("a",{parentName:"li",href:"/docs/latest/tutorials/tutorial-query"},"Query tutorial")," to learn about how to query the data you just ingested."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/latest/ingestion/"},"Ingestion overview")," to explore options for ingesting more data."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/latest/tutorials/tutorial-msq-extern"},"Tutorial: Load files using SQL")," to learn how to generate a SQL query that loads external data into a Druid datasource."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/latest/tutorials/tutorial-batch-native"},"Tutorial: Load data with native batch ingestion")," to load and query data with Druid's native batch ingestion feature."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/latest/tutorials/tutorial-kafka"},"Tutorial: Load stream data from Apache Kafka")," to load streaming data from a Kafka topic."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/latest/configuration/extensions"},"Extensions")," for details on Druid extensions.")),(0,i.kt)("p",null,"Remember that after stopping Druid services, you can start clean next time by deleting the ",(0,i.kt)("inlineCode",{parentName:"p"},"var")," directory from the Druid root directory and running the ",(0,i.kt)("inlineCode",{parentName:"p"},"bin/start-druid")," script again. You may want to do this before using other data ingestion tutorials, since they use the same Wikipedia datasource."))}h.isMDXComponent=!0},39433:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tutorial-quickstart-01-55397fb67d2b63fa55d39770575a846f.png"},46320:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tutorial-quickstart-02-02e231b09af60b9b3e84a66bf3742b49.png"},84341:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tutorial-quickstart-03-ca6142482a661095586235c8a9327067.png"},51289:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tutorial-quickstart-04-10eea489c28fe821798a99cd69f18ea6.png"},58368:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tutorial-quickstart-05-85c807249150e21f285bbbbff7dc9a4a.png"}}]);
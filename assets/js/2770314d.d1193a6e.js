"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5537],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>h});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),d=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=d(e.components);return n.createElement(l.Provider,{value:r},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(t),m=a,h=p["".concat(l,".").concat(m)]||p[m]||c[m]||o;return t?n.createElement(h,i(i({ref:r},u),{},{components:t})):n.createElement(h,i({ref:r},u))}));function h(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var d=2;d<o;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},72484:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>p});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],s={id:"cluster",title:"Clustered deployment",sidebar_label:"Clustered deployment"},l=void 0,d={unversionedId:"tutorials/cluster",id:"tutorials/cluster",title:"Clustered deployment",description:"\x3c!--",source:"@site/docs/28.0.0/tutorials/cluster.md",sourceDirName:"tutorials",slug:"/tutorials/cluster",permalink:"/docs/28.0.0/tutorials/cluster",draft:!1,tags:[],version:"current",frontMatter:{id:"cluster",title:"Clustered deployment",sidebar_label:"Clustered deployment"},sidebar:"docs",previous:{title:"Single server deployment",permalink:"/docs/28.0.0/operations/single-server"},next:{title:"Load files using SQL",permalink:"/docs/28.0.0/tutorials/tutorial-msq-extern"}},u={},p=[{value:"Select hardware",id:"select-hardware",level:2},{value:"Fresh Deployment",id:"fresh-deployment",level:3},{value:"Master server",id:"master-server",level:4},{value:"Data server",id:"data-server",level:4},{value:"Query server",id:"query-server",level:4},{value:"Other Hardware Sizes",id:"other-hardware-sizes",level:4},{value:"Migrating from a single-server deployment",id:"migrating-from-a-single-server-deployment",level:3},{value:"Master server",id:"master-server-1",level:4},{value:"Data server",id:"data-server-1",level:4},{value:"Query server",id:"query-server-1",level:4},{value:"Select OS",id:"select-os",level:2},{value:"Download the distribution",id:"download-the-distribution",level:2},{value:"Migrating from Single-Server Deployments",id:"migrating-from-single-server-deployments",level:3},{value:"Configure metadata storage and deep storage",id:"configure-metadata-storage-and-deep-storage",level:2},{value:"Migrating from Single-Server Deployments",id:"migrating-from-single-server-deployments-1",level:3},{value:"Metadata storage",id:"metadata-storage",level:3},{value:"Deep storage",id:"deep-storage",level:3},{value:"S3",id:"s3",level:4},{value:"HDFS",id:"hdfs",level:4},{value:"Configure for connecting to Hadoop (optional)",id:"configure-for-connecting-to-hadoop-optional",level:2},{value:"Configure Zookeeper connection",id:"configure-zookeeper-connection",level:2},{value:"Configuration Tuning",id:"configuration-tuning",level:2},{value:"Migrating from a Single-Server Deployment",id:"migrating-from-a-single-server-deployment-1",level:3},{value:"Master",id:"master",level:4},{value:"Data",id:"data",level:4},{value:"Query",id:"query",level:4},{value:"Fresh deployment",id:"fresh-deployment-1",level:3},{value:"Open ports (if using a firewall)",id:"open-ports-if-using-a-firewall",level:2},{value:"Master Server",id:"master-server-2",level:3},{value:"Data Server",id:"data-server-2",level:3},{value:"Query Server",id:"query-server-2",level:3},{value:"Start Master Server",id:"start-master-server",level:2},{value:"No Zookeeper on Master",id:"no-zookeeper-on-master",level:3},{value:"With Zookeeper on Master",id:"with-zookeeper-on-master",level:3},{value:"Start Data Server",id:"start-data-server",level:2},{value:"Start Query Server",id:"start-query-server",level:2},{value:"Loading data",id:"loading-data",level:2}],c={toc:p},m="wrapper";function h(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)(m,(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Apache Druid is designed to be deployed as a scalable, fault-tolerant cluster."),(0,o.kt)("p",null,"In this document, we'll set up a simple cluster and discuss how it can be further configured to meet\nyour needs."),(0,o.kt)("p",null,"This simple cluster will feature:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A Master server to host the Coordinator and Overlord processes"),(0,o.kt)("li",{parentName:"ul"},"Two scalable, fault-tolerant Data servers running Historical and MiddleManager processes"),(0,o.kt)("li",{parentName:"ul"},"A query server, hosting the Druid Broker and Router processes")),(0,o.kt)("p",null,"In production, we recommend deploying multiple Master servers and multiple Query servers in a fault-tolerant configuration based on your specific fault-tolerance needs, but you can get started quickly with one Master and one Query server and add more servers later."),(0,o.kt)("h2",{id:"select-hardware"},"Select hardware"),(0,o.kt)("h3",{id:"fresh-deployment"},"Fresh Deployment"),(0,o.kt)("p",null,"If you do not have an existing Druid cluster, and wish to start running Druid in a clustered deployment, this guide provides an example clustered deployment with pre-made configurations."),(0,o.kt)("h4",{id:"master-server"},"Master server"),(0,o.kt)("p",null,"The Coordinator and Overlord processes are responsible for handling the metadata and coordination needs of your cluster. They can be colocated together on the same server."),(0,o.kt)("p",null,"In this example, we will be deploying the equivalent of one AWS ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/ec2/instance-types/m5/"},"m5.2xlarge")," instance."),(0,o.kt)("p",null,"This hardware offers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"8 vCPUs"),(0,o.kt)("li",{parentName:"ul"},"32 GiB RAM")),(0,o.kt)("p",null,"Example Master server configurations that have been sized for this hardware can be found under ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/druid/cluster/master"),"."),(0,o.kt)("h4",{id:"data-server"},"Data server"),(0,o.kt)("p",null,"Historicals and MiddleManagers can be colocated on the same server to handle the actual data in your cluster. These servers benefit greatly from CPU, RAM,\nand SSDs."),(0,o.kt)("p",null,"In this example, we will be deploying the equivalent of two AWS ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/ec2/instance-types/i3/"},"i3.4xlarge")," instances."),(0,o.kt)("p",null,"This hardware offers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"16 vCPUs"),(0,o.kt)("li",{parentName:"ul"},"122 GiB RAM"),(0,o.kt)("li",{parentName:"ul"},"2 * 1.9TB SSD storage")),(0,o.kt)("p",null,"Example Data server configurations that have been sized for this hardware can be found under ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/druid/cluster/data"),"."),(0,o.kt)("h4",{id:"query-server"},"Query server"),(0,o.kt)("p",null,"Druid Brokers accept queries and farm them out to the rest of the cluster. They also optionally maintain an\nin-memory query cache. These servers benefit greatly from CPU and RAM."),(0,o.kt)("p",null,"In this example, we will be deploying the equivalent of one AWS ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/ec2/instance-types/m5/"},"m5.2xlarge")," instance."),(0,o.kt)("p",null,"This hardware offers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"8 vCPUs"),(0,o.kt)("li",{parentName:"ul"},"32 GiB RAM")),(0,o.kt)("p",null,"You can consider co-locating any open source UIs or query libraries on the same server that the Broker is running on."),(0,o.kt)("p",null,"Example Query server configurations that have been sized for this hardware can be found under ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/druid/cluster/query"),"."),(0,o.kt)("h4",{id:"other-hardware-sizes"},"Other Hardware Sizes"),(0,o.kt)("p",null,"The example cluster above is chosen as a single example out of many possible ways to size a Druid cluster."),(0,o.kt)("p",null,"You can choose smaller/larger hardware or less/more servers for your specific needs and constraints."),(0,o.kt)("p",null,"If your use case has complex scaling requirements, you can also choose to not co-locate Druid processes (e.g., standalone Historical servers)."),(0,o.kt)("p",null,"The information in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/28.0.0/operations/basic-cluster-tuning"},"basic cluster tuning guide")," can help with your decision-making process and with sizing your configurations."),(0,o.kt)("h3",{id:"migrating-from-a-single-server-deployment"},"Migrating from a single-server deployment"),(0,o.kt)("p",null,"If you have an existing single-server deployment, such as the ones from the ",(0,o.kt)("a",{parentName:"p",href:"/docs/28.0.0/operations/single-server"},"single-server deployment examples"),", and you wish to migrate to a clustered deployment of similar scale, the following section contains guidelines for choosing equivalent hardware using the Master/Data/Query server organization."),(0,o.kt)("h4",{id:"master-server-1"},"Master server"),(0,o.kt)("p",null,"The main considerations for the Master server are available CPUs and RAM for the Coordinator and Overlord heaps."),(0,o.kt)("p",null,"Sum up the allocated heap sizes for your Coordinator and Overlord from the single-server deployment, and choose Master server hardware with enough RAM for the combined heaps, with some extra RAM for other processes on the machine."),(0,o.kt)("p",null,"For CPU cores, you can choose hardware with approximately 1/4th of the cores of the single-server deployment."),(0,o.kt)("h4",{id:"data-server-1"},"Data server"),(0,o.kt)("p",null,"When choosing Data server hardware for the cluster, the main considerations are available CPUs and RAM, and using SSD storage if feasible."),(0,o.kt)("p",null,"In a clustered deployment, having multiple Data servers is a good idea for fault-tolerance purposes."),(0,o.kt)("p",null,"When choosing the Data server hardware, you can choose a split factor ",(0,o.kt)("inlineCode",{parentName:"p"},"N"),", divide the original CPU/RAM of the single-server deployment by ",(0,o.kt)("inlineCode",{parentName:"p"},"N"),", and deploy ",(0,o.kt)("inlineCode",{parentName:"p"},"N")," Data servers of reduced size in the new cluster."),(0,o.kt)("p",null,"Instructions for adjusting the Historical/MiddleManager configs for the split are described in a later section in this guide."),(0,o.kt)("h4",{id:"query-server-1"},"Query server"),(0,o.kt)("p",null,"The main considerations for the Query server are available CPUs and RAM for the Broker heap + direct memory, and Router heap."),(0,o.kt)("p",null,"Sum up the allocated memory sizes for your Broker and Router from the single-server deployment, and choose Query server hardware with enough RAM to cover the Broker/Router, with some extra RAM for other processes on the machine."),(0,o.kt)("p",null,"For CPU cores, you can choose hardware with approximately 1/4th of the cores of the single-server deployment."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/docs/28.0.0/operations/basic-cluster-tuning"},"basic cluster tuning guide")," has information on how to calculate Broker/Router memory usage."),(0,o.kt)("h2",{id:"select-os"},"Select OS"),(0,o.kt)("p",null,"We recommend running your favorite Linux distribution. You will also need "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/28.0.0/operations/java"},"Java 8u92+, 11, or 17")),(0,o.kt)("li",{parentName:"ul"},"Python 2 or Python 3")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"}," If needed, you can specify where to find Java using the environment variables\n",(0,o.kt)("inlineCode",{parentName:"p"},"DRUID_JAVA_HOME")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"JAVA_HOME"),". For more details run the ",(0,o.kt)("inlineCode",{parentName:"p"},"bin/verify-java")," script.")),(0,o.kt)("p",null,"For information about installing Java, see the documentation for your OS package manager. If your Ubuntu-based OS does not have a recent enough version of Java, WebUpd8 offers ",(0,o.kt)("a",{parentName:"p",href:"http://www.webupd8.org/2012/09/install-oracle-java-8-in-ubuntu-via-ppa.html"},"packages for those\nOSes"),"."),(0,o.kt)("h2",{id:"download-the-distribution"},"Download the distribution"),(0,o.kt)("p",null,"First, download and unpack the release archive. It's best to do this on a single machine at first,\nsince you will be editing the configurations and then copying the modified distribution out to all\nof your servers."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.apache.org/dyn/closer.cgi?path=/druid/28.0.0/apache-druid-28.0.0-bin.tar.gz"},"Download"),"\nthe 28.0.0 release."),(0,o.kt)("p",null,"Extract Druid by running the following commands in your terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"tar -xzf apache-druid-28.0.0-bin.tar.gz\ncd apache-druid-28.0.0\n")),(0,o.kt)("p",null,"In the package, you should find:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"LICENSE")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"NOTICE")," files"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"bin/*")," - scripts related to the ",(0,o.kt)("a",{parentName:"li",href:"/docs/28.0.0/tutorials/"},"single-machine quickstart")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"conf/druid/cluster/*")," - template configurations for a clustered setup"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"extensions/*")," - core Druid extensions"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"hadoop-dependencies/*")," - Druid Hadoop dependencies"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"lib/*")," - libraries and dependencies for core Druid"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"quickstart/*")," - files related to the ",(0,o.kt)("a",{parentName:"li",href:"/docs/28.0.0/tutorials/"},"single-machine quickstart"))),(0,o.kt)("p",null,"We'll be editing the files in ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/druid/cluster/")," in order to get things running."),(0,o.kt)("h3",{id:"migrating-from-single-server-deployments"},"Migrating from Single-Server Deployments"),(0,o.kt)("p",null,"In the following sections we will be editing the configs under ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/druid/cluster"),"."),(0,o.kt)("p",null,"If you have an existing single-server deployment, please copy your existing configs to ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/druid/cluster")," to preserve any config changes you have made."),(0,o.kt)("h2",{id:"configure-metadata-storage-and-deep-storage"},"Configure metadata storage and deep storage"),(0,o.kt)("h3",{id:"migrating-from-single-server-deployments-1"},"Migrating from Single-Server Deployments"),(0,o.kt)("p",null,"If you have an existing single-server deployment and you wish to preserve your data across the migration, please follow the instructions at ",(0,o.kt)("a",{parentName:"p",href:"/docs/28.0.0/operations/metadata-migration"},"metadata migration")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/28.0.0/operations/deep-storage-migration"},"deep storage migration")," before updating your metadata/deep storage configs."),(0,o.kt)("p",null,"These guides are targeted at single-server deployments that use the Derby metadata store and local deep storage. If you are already using a non-Derby metadata store in your single-server cluster, you can reuse the existing metadata store for the new cluster."),(0,o.kt)("p",null,"These guides also provide information on migrating segments from local deep storage. A clustered deployment requires distributed deep storage like S3 or HDFS. If your single-server deployment was already using distributed deep storage, you can reuse the existing deep storage for the new cluster."),(0,o.kt)("h3",{id:"metadata-storage"},"Metadata storage"),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/druid/cluster/_common/common.runtime.properties"),', replace\n"metadata.storage.*" with the address of the machine that you will use as your metadata store:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"druid.metadata.storage.connector.connectURI")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"druid.metadata.storage.connector.host"))),(0,o.kt)("p",null,"In a production deployment, we recommend running a dedicated metadata store such as MySQL or PostgreSQL with replication, deployed separately from the Druid servers."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/docs/28.0.0/development/extensions-core/mysql"},"MySQL extension")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/28.0.0/development/extensions-core/postgresql"},"PostgreSQL extension")," docs have instructions for extension configuration and initial database setup."),(0,o.kt)("h3",{id:"deep-storage"},"Deep storage"),(0,o.kt)("p",null,"Druid relies on a distributed filesystem or large object (blob) store for data storage. The most\ncommonly used deep storage implementations are S3 (popular for those on AWS) and HDFS (popular if\nyou already have a Hadoop deployment)."),(0,o.kt)("h4",{id:"s3"},"S3"),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/druid/cluster/_common/common.runtime.properties"),","),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Add "druid-s3-extensions" to ',(0,o.kt)("inlineCode",{parentName:"p"},"druid.extensions.loadList"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Comment out the configurations for local storage under "Deep Storage" and "Indexing service logs".')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Uncomment and configure appropriate values in the "For S3" sections of "Deep Storage" and\n"Indexing service logs".'))),(0,o.kt)("p",null,"After this, you should have made the following changes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'druid.extensions.loadList=["druid-s3-extensions"]\n\n#druid.storage.type=local\n#druid.storage.storageDirectory=var/druid/segments\n\ndruid.storage.type=s3\ndruid.storage.bucket=your-bucket\ndruid.storage.baseKey=druid/segments\ndruid.s3.accessKey=...\ndruid.s3.secretKey=...\n\n#druid.indexer.logs.type=file\n#druid.indexer.logs.directory=var/druid/indexing-logs\n\ndruid.indexer.logs.type=s3\ndruid.indexer.logs.s3Bucket=your-bucket\ndruid.indexer.logs.s3Prefix=druid/indexing-logs\n')),(0,o.kt)("p",null,"Please see the ",(0,o.kt)("a",{parentName:"p",href:"/docs/28.0.0/development/extensions-core/s3"},"S3 extension")," documentation for more info."),(0,o.kt)("h4",{id:"hdfs"},"HDFS"),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/druid/cluster/_common/common.runtime.properties"),","),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Add "druid-hdfs-storage" to ',(0,o.kt)("inlineCode",{parentName:"p"},"druid.extensions.loadList"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Comment out the configurations for local storage under "Deep Storage" and "Indexing service logs".')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'Uncomment and configure appropriate values in the "For HDFS" sections of "Deep Storage" and\n"Indexing service logs".'))),(0,o.kt)("p",null,"After this, you should have made the following changes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'druid.extensions.loadList=["druid-hdfs-storage"]\n\n#druid.storage.type=local\n#druid.storage.storageDirectory=var/druid/segments\n\ndruid.storage.type=hdfs\ndruid.storage.storageDirectory=/druid/segments\n\n#druid.indexer.logs.type=file\n#druid.indexer.logs.directory=var/druid/indexing-logs\n\ndruid.indexer.logs.type=hdfs\ndruid.indexer.logs.directory=/druid/indexing-logs\n')),(0,o.kt)("p",null,"Also,"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Place your Hadoop configuration XMLs (core-site.xml, hdfs-site.xml, yarn-site.xml,\nmapred-site.xml) on the classpath of your Druid processes. You can do this by copying them into\n",(0,o.kt)("inlineCode",{parentName:"li"},"conf/druid/cluster/_common/"),".")),(0,o.kt)("p",null,"Please see the ",(0,o.kt)("a",{parentName:"p",href:"/docs/28.0.0/development/extensions-core/hdfs"},"HDFS extension")," documentation for more info."),(0,o.kt)("a",{name:"hadoop"}),(0,o.kt)("h2",{id:"configure-for-connecting-to-hadoop-optional"},"Configure for connecting to Hadoop (optional)"),(0,o.kt)("p",null,"If you will be loading data from a Hadoop cluster, then at this point you should configure Druid to be aware\nof your cluster:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Update ",(0,o.kt)("inlineCode",{parentName:"p"},"druid.indexer.task.hadoopWorkingPath")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/druid/cluster/middleManager/runtime.properties")," to\na path on HDFS that you'd like to use for temporary files required during the indexing process.\n",(0,o.kt)("inlineCode",{parentName:"p"},"druid.indexer.task.hadoopWorkingPath=/tmp/druid-indexing")," is a common choice.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Place your Hadoop configuration XMLs (core-site.xml, hdfs-site.xml, yarn-site.xml,\nmapred-site.xml) on the classpath of your Druid processes. You can do this by copying them into\n",(0,o.kt)("inlineCode",{parentName:"p"},"conf/druid/cluster/_common/core-site.xml"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/druid/cluster/_common/hdfs-site.xml"),", and so on."))),(0,o.kt)("p",null,"Note that you don't need to use HDFS deep storage in order to load data from Hadoop. For example, if\nyour cluster is running on Amazon Web Services, we recommend using S3 for deep storage even if you\nare loading data using Hadoop or Elastic MapReduce."),(0,o.kt)("p",null,"For more info, please see the ",(0,o.kt)("a",{parentName:"p",href:"/docs/28.0.0/ingestion/hadoop"},"Hadoop-based ingestion")," page."),(0,o.kt)("h2",{id:"configure-zookeeper-connection"},"Configure Zookeeper connection"),(0,o.kt)("p",null,"In a production cluster, we recommend using a dedicated ZK cluster in a quorum, deployed separately from the Druid servers."),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/druid/cluster/_common/common.runtime.properties"),", set\n",(0,o.kt)("inlineCode",{parentName:"p"},"druid.zk.service.host")," to a ",(0,o.kt)("a",{parentName:"p",href:"https://zookeeper.apache.org/doc/current/zookeeperProgrammers.html"},"connection string"),'\ncontaining a comma separated list of host:port pairs, each corresponding to a ZooKeeper server in your ZK quorum.\n(e.g. "127.0.0.1:4545" or "127.0.0.1:3000,127.0.0.1:3001,127.0.0.1:3002")'),(0,o.kt)("p",null,"You can also choose to run ZK on the Master servers instead of having a dedicated ZK cluster. If doing so, we recommend deploying 3 Master servers so that you have a ZK quorum."),(0,o.kt)("h2",{id:"configuration-tuning"},"Configuration Tuning"),(0,o.kt)("h3",{id:"migrating-from-a-single-server-deployment-1"},"Migrating from a Single-Server Deployment"),(0,o.kt)("h4",{id:"master"},"Master"),(0,o.kt)("p",null,"If you are using an example configuration from ",(0,o.kt)("a",{parentName:"p",href:"/docs/28.0.0/operations/single-server"},"single-server deployment examples"),", these examples combine the Coordinator and Overlord processes into one combined process."),(0,o.kt)("p",null,"The example configs under ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/druid/cluster/master/coordinator-overlord")," also combine the Coordinator and Overlord processes."),(0,o.kt)("p",null,"You can copy your existing ",(0,o.kt)("inlineCode",{parentName:"p"},"coordinator-overlord")," configs from the single-server deployment to ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/druid/cluster/master/coordinator-overlord"),"."),(0,o.kt)("h4",{id:"data"},"Data"),(0,o.kt)("p",null,"Suppose we are migrating from a single-server deployment that had 32 CPU and 256GiB RAM. In the old deployment, the following configurations for Historicals and MiddleManagers were applied:"),(0,o.kt)("p",null,"Historical (Single-server)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"druid.processing.buffer.sizeBytes=500MiB\ndruid.processing.numMergeBuffers=8\ndruid.processing.numThreads=31\n")),(0,o.kt)("p",null,"MiddleManager (Single-server)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"druid.worker.capacity=8\ndruid.indexer.fork.property.druid.processing.numMergeBuffers=2\ndruid.indexer.fork.property.druid.processing.buffer.sizeBytes=100MiB\ndruid.indexer.fork.property.druid.processing.numThreads=1\n")),(0,o.kt)("p",null,"In the clustered deployment, we can choose a split factor (2 in this example), and deploy 2 Data servers with 16CPU and 128GiB RAM each. The areas to scale are the following:"),(0,o.kt)("p",null,"Historical"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"druid.processing.numThreads"),": Set to ",(0,o.kt)("inlineCode",{parentName:"li"},"(num_cores - 1)")," based on the new hardware"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"druid.processing.numMergeBuffers"),": Divide the old value from the single-server deployment by the split factor"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"druid.processing.buffer.sizeBytes"),": Keep this unchanged")),(0,o.kt)("p",null,"MiddleManager:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"druid.worker.capacity"),": Divide the old value from the single-server deployment by the split factor"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"druid.indexer.fork.property.druid.processing.numMergeBuffers"),": Keep this unchanged"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"druid.indexer.fork.property.druid.processing.buffer.sizeBytes"),": Keep this unchanged"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"druid.indexer.fork.property.druid.processing.numThreads"),": Keep this unchanged")),(0,o.kt)("p",null,"The resulting configs after the split:"),(0,o.kt)("p",null,"New Historical (on 2 Data servers)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"druid.processing.buffer.sizeBytes=500MiB\ndruid.processing.numMergeBuffers=4\ndruid.processing.numThreads=15\n")),(0,o.kt)("p",null,"New MiddleManager (on 2 Data servers)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"druid.worker.capacity=4\ndruid.indexer.fork.property.druid.processing.numMergeBuffers=2\ndruid.indexer.fork.property.druid.processing.buffer.sizeBytes=100MiB\ndruid.indexer.fork.property.druid.processing.numThreads=1\n")),(0,o.kt)("h4",{id:"query"},"Query"),(0,o.kt)("p",null,"You can copy your existing Broker and Router configs to the directories under ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/druid/cluster/query"),", no modifications are needed, as long as the new hardware is sized accordingly."),(0,o.kt)("h3",{id:"fresh-deployment-1"},"Fresh deployment"),(0,o.kt)("p",null,"If you are using the example cluster described above:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"1 Master server (m5.2xlarge)"),(0,o.kt)("li",{parentName:"ul"},"2 Data servers (i3.4xlarge)"),(0,o.kt)("li",{parentName:"ul"},"1 Query server (m5.2xlarge)")),(0,o.kt)("p",null,"The configurations under ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/druid/cluster")," have already been sized for this hardware and you do not need to make further modifications for general use cases."),(0,o.kt)("p",null,"If you have chosen different hardware, the ",(0,o.kt)("a",{parentName:"p",href:"/docs/28.0.0/operations/basic-cluster-tuning"},"basic cluster tuning guide")," can help you size your configurations."),(0,o.kt)("h2",{id:"open-ports-if-using-a-firewall"},"Open ports (if using a firewall)"),(0,o.kt)("p",null,"If you're using a firewall or some other system that only allows traffic on specific ports, allow\ninbound connections on the following:"),(0,o.kt)("h3",{id:"master-server-2"},"Master Server"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"1527 (Derby metadata store; not needed if you are using a separate metadata store like MySQL or PostgreSQL)"),(0,o.kt)("li",{parentName:"ul"},"2181 (ZooKeeper; not needed if you are using a separate ZooKeeper cluster)"),(0,o.kt)("li",{parentName:"ul"},"8081 (Coordinator)"),(0,o.kt)("li",{parentName:"ul"},"8090 (Overlord)")),(0,o.kt)("h3",{id:"data-server-2"},"Data Server"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"8083 (Historical)"),(0,o.kt)("li",{parentName:"ul"},"8091, 8100","\u2013","8199 (Druid Middle Manager; you may need higher than port 8199 if you have a very high ",(0,o.kt)("inlineCode",{parentName:"li"},"druid.worker.capacity"),")")),(0,o.kt)("h3",{id:"query-server-2"},"Query Server"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"8082 (Broker)"),(0,o.kt)("li",{parentName:"ul"},"8088 (Router, if used)")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"}," In production, we recommend deploying ZooKeeper and your metadata store on their own dedicated hardware,\nrather than on the Master server.")),(0,o.kt)("h2",{id:"start-master-server"},"Start Master Server"),(0,o.kt)("p",null,"Copy the Druid distribution and your edited configurations to your Master server."),(0,o.kt)("p",null,"If you have been editing the configurations on your local machine, you can use ",(0,o.kt)("em",{parentName:"p"},"rsync")," to copy them:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"rsync -az apache-druid-28.0.0/ MASTER_SERVER:apache-druid-28.0.0/\n")),(0,o.kt)("h3",{id:"no-zookeeper-on-master"},"No Zookeeper on Master"),(0,o.kt)("p",null,"From the distribution root, run the following command to start the Master server:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"bin/start-cluster-master-no-zk-server\n")),(0,o.kt)("h3",{id:"with-zookeeper-on-master"},"With Zookeeper on Master"),(0,o.kt)("p",null,"If you plan to run ZK on Master servers, first update ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/zoo.cfg")," to reflect how you plan to run ZK. Then, you\ncan start the Master server processes together with ZK using:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"bin/start-cluster-master-with-zk-server\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"}," In production, we also recommend running a ZooKeeper cluster on its own dedicated hardware.")),(0,o.kt)("h2",{id:"start-data-server"},"Start Data Server"),(0,o.kt)("p",null,"Copy the Druid distribution and your edited configurations to your Data servers."),(0,o.kt)("p",null,"From the distribution root, run the following command to start the Data server:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"bin/start-cluster-data-server\n")),(0,o.kt)("p",null,"You can add more Data servers as needed."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"}," For clusters with complex resource allocation needs, you can break apart Historicals and MiddleManagers and scale the components individually.\nThis also allows you take advantage of Druid's built-in MiddleManager autoscaling facility.")),(0,o.kt)("h2",{id:"start-query-server"},"Start Query Server"),(0,o.kt)("p",null,"Copy the Druid distribution and your edited configurations to your Query servers."),(0,o.kt)("p",null,"From the distribution root, run the following command to start the Query server:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"bin/start-cluster-query-server\n")),(0,o.kt)("p",null,"You can add more Query servers as needed based on query load. If you increase the number of Query servers, be sure to adjust the connection pools on your Historicals and Tasks as described in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/28.0.0/operations/basic-cluster-tuning"},"basic cluster tuning guide"),"."),(0,o.kt)("h2",{id:"loading-data"},"Loading data"),(0,o.kt)("p",null,"Congratulations, you now have a Druid cluster! The next step is to learn about recommended ways to load data into\nDruid based on your use case. Read more about ",(0,o.kt)("a",{parentName:"p",href:"/docs/28.0.0/ingestion/"},"loading data"),"."))}h.isMDXComponent=!0}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4942],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>h});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d=o.createContext({}),p=function(e){var r=o.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=p(e.components);return o.createElement(d.Provider,{value:r},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},m=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(t),m=n,h=u["".concat(d,".").concat(m)]||u[m]||c[m]||i;return t?o.createElement(h,a(a({ref:r},l),{},{components:t})):o.createElement(h,a({ref:r},l))}));function h(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,a=new Array(i);a[0]=m;var s={};for(var d in r)hasOwnProperty.call(r,d)&&(s[d]=r[d]);s.originalType=e,s[u]="string"==typeof e?e:n,a[1]=s;for(var p=2;p<i;p++)a[p]=t[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},23380:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var o=t(87462),n=t(63366),i=(t(67294),t(3905)),a=["components"],s={id:"tutorial-kerberos-hadoop",title:"Configuring Apache Druid to use Kerberized Apache Hadoop as deep storage",sidebar_label:"Kerberized HDFS deep storage"},d=void 0,p={unversionedId:"tutorials/tutorial-kerberos-hadoop",id:"tutorials/tutorial-kerberos-hadoop",title:"Configuring Apache Druid to use Kerberized Apache Hadoop as deep storage",description:"\x3c!--",source:"@site/docs/latest/tutorials/tutorial-kerberos-hadoop.md",sourceDirName:"tutorials",slug:"/tutorials/tutorial-kerberos-hadoop",permalink:"/docs/latest/tutorials/tutorial-kerberos-hadoop",draft:!1,tags:[],version:"current",frontMatter:{id:"tutorial-kerberos-hadoop",title:"Configuring Apache Druid to use Kerberized Apache Hadoop as deep storage",sidebar_label:"Kerberized HDFS deep storage"},sidebar:"docs",previous:{title:"Tutorial: Run with Docker",permalink:"/docs/latest/tutorials/docker"},next:{title:"Convert ingestion spec to SQL",permalink:"/docs/latest/tutorials/tutorial-msq-convert-spec"}},l={},u=[{value:"Hadoop Setup",id:"hadoop-setup",level:2},{value:"HDFS Folders and permissions",id:"hdfs-folders-and-permissions",level:3},{value:"Druid Setup",id:"druid-setup",level:2},{value:"common.runtime.properties",id:"commonruntimeproperties",level:3},{value:"Hadoop Jars",id:"hadoop-jars",level:3},{value:"Kerberos setup",id:"kerberos-setup",level:3},{value:"Restart Druid Services",id:"restart-druid-services",level:3}],c={toc:u},m="wrapper";function h(e){var r=e.components,t=(0,n.Z)(e,a);return(0,i.kt)(m,(0,o.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"hadoop-setup"},"Hadoop Setup"),(0,i.kt)("p",null,"Following are the configurations files required to be copied over to Druid conf folders:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"For HDFS as a deep storage, hdfs-site.xml, core-site.xml"),(0,i.kt)("li",{parentName:"ol"},"For ingestion, mapred-site.xml, yarn-site.xml")),(0,i.kt)("h3",{id:"hdfs-folders-and-permissions"},"HDFS Folders and permissions"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Choose any folder name for the druid deep storage, for example 'druid'")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create the folder in hdfs under the required parent folder. For example,\n",(0,i.kt)("inlineCode",{parentName:"p"},"hdfs dfs -mkdir /druid"),"\nOR\n",(0,i.kt)("inlineCode",{parentName:"p"},"hdfs dfs -mkdir /apps/druid"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Give druid processes appropriate permissions for the druid processes to access this folder. This would ensure that druid is able to create necessary folders like data and indexing_log in HDFS.\nFor example, if druid processes run as user 'root', then"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"`hdfs dfs -chown root:root /apps/druid`\n\nOR\n\n`hdfs dfs -chmod 777 /apps/druid`\n")))),(0,i.kt)("p",null,"Druid creates necessary sub-folders to store data and index under this newly created folder."),(0,i.kt)("h2",{id:"druid-setup"},"Druid Setup"),(0,i.kt)("p",null,"Edit common.runtime.properties at conf/druid/_common/common.runtime.properties to include the HDFS properties. Folders used for the location are same as the ones used for example above."),(0,i.kt)("h3",{id:"commonruntimeproperties"},"common.runtime.properties"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"# Deep storage\n#\n# For HDFS:\ndruid.storage.type=hdfs\ndruid.storage.storageDirectory=/druid/segments\n# OR\n# druid.storage.storageDirectory=/apps/druid/segments\n\n#\n# Indexing service logs\n#\n\n# For HDFS:\ndruid.indexer.logs.type=hdfs\ndruid.indexer.logs.directory=/druid/indexing-logs\n# OR\n# druid.storage.storageDirectory=/apps/druid/indexing-logs\n")),(0,i.kt)("p",null,"Note: Comment out Local storage and S3 Storage parameters in the file"),(0,i.kt)("p",null,"Also include hdfs-storage core extension to ",(0,i.kt)("inlineCode",{parentName:"p"},"conf/druid/_common/common.runtime.properties")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},'#\n# Extensions\n#\n\ndruid.extensions.directory=dist/druid/extensions\ndruid.extensions.hadoopDependenciesDir=dist/druid/hadoop-dependencies\ndruid.extensions.loadList=["mysql-metadata-storage", "druid-hdfs-storage", "druid-kerberos"]\n')),(0,i.kt)("h3",{id:"hadoop-jars"},"Hadoop Jars"),(0,i.kt)("p",null,"Ensure that Druid has necessary jars to support the Hadoop version."),(0,i.kt)("p",null,"Find the hadoop version using command, ",(0,i.kt)("inlineCode",{parentName:"p"},"hadoop version")),(0,i.kt)("p",null,"In case there is other software used with hadoop, like ",(0,i.kt)("inlineCode",{parentName:"p"},"WanDisco"),", ensure that"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"the necessary libraries are available"),(0,i.kt)("li",{parentName:"ol"},"add the requisite extensions to ",(0,i.kt)("inlineCode",{parentName:"li"},"druid.extensions.loadlist")," in ",(0,i.kt)("inlineCode",{parentName:"li"},"conf/druid/_common/common.runtime.properties"))),(0,i.kt)("h3",{id:"kerberos-setup"},"Kerberos setup"),(0,i.kt)("p",null,"Create a headless keytab which would have access to the druid data and index."),(0,i.kt)("p",null,"Edit conf/druid/_common/common.runtime.properties and add the following properties:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"druid.hadoop.security.kerberos.principal\ndruid.hadoop.security.kerberos.keytab\n")),(0,i.kt)("p",null,"For example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-properties"},"druid.hadoop.security.kerberos.principal=hdfs-test@EXAMPLE.IO\ndruid.hadoop.security.kerberos.keytab=/etc/security/keytabs/hdfs.headless.keytab\n")),(0,i.kt)("h3",{id:"restart-druid-services"},"Restart Druid Services"),(0,i.kt)("p",null,"With the above changes, restart Druid. This would ensure that Druid works with Kerberized Hadoop"))}h.isMDXComponent=!0}}]);
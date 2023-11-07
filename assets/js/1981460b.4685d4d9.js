"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8215],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||c[m]||r;return n?o.createElement(h,p(p({ref:t},s),{},{components:n})):o.createElement(h,p({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,p=new Array(r);p[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,p[1]=i;for(var d=2;d<r;d++)p[d]=n[d];return o.createElement.apply(null,p)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},38414:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>u});var o=n(87462),a=n(63366),r=(n(67294),n(3905)),p=["components"],i={id:"pull-deps",title:"pull-deps tool"},l=void 0,d={unversionedId:"operations/pull-deps",id:"operations/pull-deps",title:"pull-deps tool",description:"\x3c!--",source:"@site/docs/latest/operations/pull-deps.md",sourceDirName:"operations",slug:"/operations/pull-deps",permalink:"/docs/latest/operations/pull-deps",draft:!1,tags:[],version:"current",frontMatter:{id:"pull-deps",title:"pull-deps tool"},sidebar:"docs",previous:{title:"insert-segment-to-db tool",permalink:"/docs/latest/operations/insert-segment-to-db"},next:{title:"Deep storage migration",permalink:"/docs/latest/operations/deep-storage-migration"}},s={},u=[],c={toc:u},m="wrapper";function h(e){var t=e.components,n=(0,a.Z)(e,p);return(0,r.kt)(m,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pull-deps")," is an Apache Druid tool that can pull down dependencies to the local repository and lay dependencies out into the extension directory as needed."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"pull-deps")," has several command line options, they are as follows:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-c")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"--coordinate")," (Can be specified multiple times)"),(0,r.kt)("p",null,"Extension coordinate to pull down, followed by a maven coordinate, e.g. org.apache.druid.extensions:mysql-metadata-storage"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-h")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"--hadoop-coordinate")," (Can be specified multiply times)"),(0,r.kt)("p",null,"Apache Hadoop dependency to pull down, followed by a maven coordinate, e.g. org.apache.hadoop:hadoop-client:2.4.0"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--no-default-hadoop")),(0,r.kt)("p",null,"Don't pull down the default hadoop coordinate, i.e., org.apache.hadoop:hadoop-client:2.3.0. If ",(0,r.kt)("inlineCode",{parentName:"p"},"-h")," option is supplied, then default hadoop coordinate will not be downloaded."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--clean")),(0,r.kt)("p",null,"Remove existing extension and hadoop dependencies directories before pulling down dependencies."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-l")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"--localRepository")),(0,r.kt)("p",null,"A local repository that Maven will use to put downloaded files. Then pull-deps will lay these files out into the extensions directory as needed."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-r")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"--remoteRepository")),(0,r.kt)("p",null,"Add a remote repository. Unless ",(0,r.kt)("inlineCode",{parentName:"p"},"--no-default-remote-repositories")," is provided, these will be used after ",(0,r.kt)("a",{parentName:"p",href:"https://repo1.maven.org/maven2/"},"https://repo1.maven.org/maven2/"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--no-default-remote-repositories")),(0,r.kt)("p",null,"Don't use the default remote repository, ",(0,r.kt)("a",{parentName:"p",href:"https://repo1.maven.org/maven2/"},"https://repo1.maven.org/maven2/"),". Only use the repositories provided directly via --remoteRepository."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"-d")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"--defaultVersion")),(0,r.kt)("p",null,"Version to use for extension coordinate that doesn't have a version information. For example, if extension coordinate is ",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.druid.extensions:mysql-metadata-storage"),", and default version is ",(0,r.kt)("inlineCode",{parentName:"p"},"28.0.0"),", then this coordinate will be treated as ",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.druid.extensions:mysql-metadata-storage:28.0.0")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--use-proxy")),(0,r.kt)("p",null,"Use http/https proxy to send request to the remote repository servers. ",(0,r.kt)("inlineCode",{parentName:"p"},"--proxy-host")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"--proxy-port")," must be set explicitly if this option is enabled."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--proxy-type")),(0,r.kt)("p",null,"Set the proxy type, Should be either ",(0,r.kt)("em",{parentName:"p"},"http")," or ",(0,r.kt)("em",{parentName:"p"},"https"),", default value is ",(0,r.kt)("em",{parentName:"p"},"https"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--proxy-host")),(0,r.kt)("p",null,"Set the proxy host. e.g. proxy.com."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--proxy-port")),(0,r.kt)("p",null,"Set the proxy port number. e.g. 8080."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--proxy-username")),(0,r.kt)("p",null,"Set a username to connect to the proxy, this option is only required if the proxy server uses authentication."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--proxy-password")),(0,r.kt)("p",null,"Set a password to connect to the proxy, this option is only required if the proxy server uses authentication."),(0,r.kt)("p",null,"To run ",(0,r.kt)("inlineCode",{parentName:"p"},"pull-deps"),", you should"),(0,r.kt)("p",null,"1) Specify ",(0,r.kt)("inlineCode",{parentName:"p"},"druid.extensions.directory")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"druid.extensions.hadoopDependenciesDir"),", these two properties tell ",(0,r.kt)("inlineCode",{parentName:"p"},"pull-deps")," where to put extensions. If you don't specify them,  default values will be used, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/configuration/"},"Configuration"),"."),(0,r.kt)("p",null,"2) Tell ",(0,r.kt)("inlineCode",{parentName:"p"},"pull-deps")," what to download using ",(0,r.kt)("inlineCode",{parentName:"p"},"-c")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"-h")," option, which are followed by a maven coordinate."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("p",null,"Suppose you want to download ",(0,r.kt)("inlineCode",{parentName:"p"},"mysql-metadata-storage")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"hadoop-client"),"(both 2.3.0 and 2.4.0) with a specific version, you can run ",(0,r.kt)("inlineCode",{parentName:"p"},"pull-deps")," command with ",(0,r.kt)("inlineCode",{parentName:"p"},"-c org.apache.druid.extensions:mysql-metadata-storage:28.0.0"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"-h org.apache.hadoop:hadoop-client:2.3.0")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"-h org.apache.hadoop:hadoop-client:2.4.0"),", an example command would be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'java -classpath "/my/druid/lib/*" org.apache.druid.cli.Main tools pull-deps --clean -c org.apache.druid.extensions:mysql-metadata-storage:28.0.0 -h org.apache.hadoop:hadoop-client:2.3.0 -h org.apache.hadoop:hadoop-client:2.4.0\n')),(0,r.kt)("p",null,"Because ",(0,r.kt)("inlineCode",{parentName:"p"},"--clean")," is supplied, this command will first remove the directories specified at ",(0,r.kt)("inlineCode",{parentName:"p"},"druid.extensions.directory")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"druid.extensions.hadoopDependenciesDir"),", then recreate them and start downloading the extensions there. After finishing downloading, if you go to the extension directories you specified, you will see"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tree extensions\nextensions\n\u2514\u2500\u2500 mysql-metadata-storage\n    \u2514\u2500\u2500 mysql-metadata-storage-28.0.0.jar\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tree hadoop-dependencies\nhadoop-dependencies/\n\u2514\u2500\u2500 hadoop-client\n    \u251c\u2500\u2500 2.3.0\n    \u2502\xa0\xa0 \u251c\u2500\u2500 activation-1.1.jar\n    \u2502\xa0\xa0 \u251c\u2500\u2500 avro-1.7.4.jar\n    \u2502\xa0\xa0 \u251c\u2500\u2500 commons-beanutils-1.7.0.jar\n    \u2502\xa0\xa0 \u251c\u2500\u2500 commons-beanutils-core-1.8.0.jar\n    \u2502\xa0\xa0 \u251c\u2500\u2500 commons-cli-1.2.jar\n    \u2502\xa0\xa0 \u251c\u2500\u2500 commons-codec-1.4.jar\n    ..... lots of jars\n    \u2514\u2500\u2500 2.4.0\n        \u251c\u2500\u2500 activation-1.1.jar\n        \u251c\u2500\u2500 avro-1.7.4.jar\n        \u251c\u2500\u2500 commons-beanutils-1.7.0.jar\n        \u251c\u2500\u2500 commons-beanutils-core-1.8.0.jar\n        \u251c\u2500\u2500 commons-cli-1.2.jar\n        \u251c\u2500\u2500 commons-codec-1.4.jar\n    ..... lots of jars\n")),(0,r.kt)("p",null,"Note that if you specify ",(0,r.kt)("inlineCode",{parentName:"p"},"--defaultVersion"),", you don't have to put version information in the coordinate. For example, if you want ",(0,r.kt)("inlineCode",{parentName:"p"},"mysql-metadata-storage")," to use version ",(0,r.kt)("inlineCode",{parentName:"p"},"28.0.0"),",  you can change the command above to"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'java -classpath "/my/druid/lib/*" org.apache.druid.cli.Main tools pull-deps --defaultVersion 28.0.0 --clean -c org.apache.druid.extensions:mysql-metadata-storage -h org.apache.hadoop:hadoop-client:2.3.0 -h org.apache.hadoop:hadoop-client:2.4.0\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"}," Please note to use the pull-deps tool you must know the Maven groupId, artifactId, and version of your extension."),(0,r.kt)("p",{parentName:"admonition"}," For Druid community extensions listed ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/configuration/extensions"},"here"),', the groupId is "org.apache.druid.extensions.contrib" and the artifactId is the name of the extension.')))}h.isMDXComponent=!0}}]);
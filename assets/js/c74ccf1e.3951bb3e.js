"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4377],{3905:(e,a,n)=>{n.d(a,{Zo:()=>d,kt:()=>v});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),p=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):o(o({},a),e)),n},d=function(e){var a=p(e.components);return t.createElement(l.Provider,{value:a},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},m=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,v=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return n?t.createElement(v,o(o({ref:a},d),{},{components:n})):t.createElement(v,o({ref:a},d))}));function v(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},31568:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>l,default:()=>v,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var t=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={id:"java",title:"Java runtime"},l=void 0,p={unversionedId:"operations/java",id:"operations/java",title:"Java runtime",description:"\x3c!--",source:"@site/docs/latest/operations/java.md",sourceDirName:"operations",slug:"/operations/java",permalink:"/docs/latest/operations/java",draft:!1,tags:[],version:"current",frontMatter:{id:"java",title:"Java runtime"},sidebar:"docs",previous:{title:"Web console",permalink:"/docs/latest/operations/web-console"},next:{title:"Security overview",permalink:"/docs/latest/operations/security-overview"}},d={},c=[{value:"Selecting a Java runtime",id:"selecting-a-java-runtime",level:2},{value:"Garbage collection",id:"garbage-collection",level:2},{value:"Strong encapsulation",id:"strong-encapsulation",level:2},{value:"Java 17",id:"java-17",level:2}],u={toc:c},m="wrapper";function v(e){var a=e.components,n=(0,r.Z)(e,o);return(0,i.kt)(m,(0,t.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Apache Druid is written in Java and requires a Java runtime. This page provides details about obtaining and configuring\na Java runtime for Druid."),(0,i.kt)("h2",{id:"selecting-a-java-runtime"},"Selecting a Java runtime"),(0,i.kt)("p",null,"Druid fully supports Java 8 and 11, and has experimental support for ",(0,i.kt)("a",{parentName:"p",href:"#java-17"},"Java 17"),".\nThe project team recommends Java 11."),(0,i.kt)("p",null,"The project team recommends using an OpenJDK-based Java distribution. There are many free and actively-supported\ndistributions available, including\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/corretto/latest/corretto-11-ug/what-is-corretto-11.html"},"Amazon Corretto"),",\n",(0,i.kt)("a",{parentName:"p",href:"https://www.azul.com/downloads/?version=java-11-lts&package=jdk"},"Azul Zulu"),", and\n",(0,i.kt)("a",{parentName:"p",href:"https://adoptium.net/temurin/releases?version=11"},"Eclipse Temurin"),".\nThe project team does not recommend any specific distribution over any other."),(0,i.kt)("p",null,"Druid relies on the environment variables ",(0,i.kt)("inlineCode",{parentName:"p"},"JAVA_HOME")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"DRUID_JAVA_HOME")," to find Java on the machine. You can set\n",(0,i.kt)("inlineCode",{parentName:"p"},"DRUID_JAVA_HOME")," if there is more than one instance of Java. To verify Java requirements for your environment, run the\n",(0,i.kt)("inlineCode",{parentName:"p"},"bin/verify-java")," script."),(0,i.kt)("h2",{id:"garbage-collection"},"Garbage collection"),(0,i.kt)("p",null,"In general, the project team recommends using the G1 collector with default settings. This is the default collector in\nJava 11. To enable G1 on Java 8, use ",(0,i.kt)("inlineCode",{parentName:"p"},"-XX:+UseG1GC"),". There is no harm in explicitly specifying this on Java 11 as well."),(0,i.kt)("p",null,"Garbage collector selection and tuning is a form of sport in the Java community. There may be situations where adjusting\ngarbage collection configuration improves or worsens performance. The project team's guidance is that most people do\nnot need to stray away from G1 with default settings."),(0,i.kt)("h2",{id:"strong-encapsulation"},"Strong encapsulation"),(0,i.kt)("p",null,"Java 9 and beyond (including Java 11) include the capability for\n",(0,i.kt)("a",{parentName:"p",href:"https://dev.java/learn/strong-encapsulation-(of-jdk-internals)/"},"strong encapsulation")," of internal JDK APIs. Druid\nuses certain internal JDK APIs for functionality- and performance-related reasons. In Java 11, this leads to log\nmessages like the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"WARNING: An illegal reflective access operation has occurred\nWARNING: Use --illegal-access=warn to enable warnings of further illegal reflective access operations\nWARNING: All illegal access operations will be denied in a future release\n")),(0,i.kt)("p",null,"These warning messages are harmless, and can be ignored. However, you can avoid them entirely if you wish by adding the\nfollowing Java command line parameters. These parameters are not part of the default configurations that ship with\nDruid, because Java 8 does not recognize these parameters and fails to start up if they are provided."),(0,i.kt)("p",null,"To do this, add the following lines to your ",(0,i.kt)("inlineCode",{parentName:"p"},"jvm.config")," files:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"--add-exports=java.base/jdk.internal.ref=ALL-UNNAMED\n--add-exports=java.base/jdk.internal.misc=ALL-UNNAMED\n--add-opens=java.base/java.lang=ALL-UNNAMED\n--add-opens=java.base/java.io=ALL-UNNAMED\n--add-opens=java.base/java.nio=ALL-UNNAMED\n--add-opens=java.base/jdk.internal.ref=ALL-UNNAMED\n--add-opens=java.base/sun.nio.ch=ALL-UNNAMED\n")),(0,i.kt)("p",null,"Additionally, tasks run by ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/design/architecture"},"MiddleManagers")," execute in separate JVMs. The command line for\nthese JVMs is given by ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.indexer.runner.javaOptsArray")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.indexer.runner.javaOpts")," in\n",(0,i.kt)("inlineCode",{parentName:"p"},"middleManager/runtime.properties"),". Java command line parameters for tasks must be specified here. For example, use\na line like the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'druid.indexer.runner.javaOptsArray=["-server","-Xms1g","-Xmx1g","-XX:MaxDirectMemorySize=1g","-Duser.timezone=UTC","-Dfile.encoding=UTF-8","-XX:+ExitOnOutOfMemoryError","-Djava.util.logging.manager=org.apache.logging.log4j.jul.LogManager","--add-exports=java.base/jdk.internal.ref=ALL-UNNAMED","--add-exports=java.base/jdk.internal.misc=ALL-UNNAMED","--add-opens=java.base/java.lang=ALL-UNNAMED","--add-opens=java.base/java.io=ALL-UNNAMED","--add-opens=java.base/java.nio=ALL-UNNAMED","--add-opens=java.base/jdk.internal.ref=ALL-UNNAMED","--add-opens=java.base/sun.nio.ch=ALL-UNNAMED"]\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Xms"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Xmx"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"MaxDirectMemorySize")," parameters in the line above are merely an example. You may use different\nvalues in your specific environment."),(0,i.kt)("h2",{id:"java-17"},"Java 17"),(0,i.kt)("p",null,"Druid has experimental support for Java 17."),(0,i.kt)("p",null,"An important change in Java 17 is that ",(0,i.kt)("a",{parentName:"p",href:"#strong-encapsulation"},"strong encapsulation")," is enabled by default. The various\n",(0,i.kt)("inlineCode",{parentName:"p"},"--add-opens")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"--add-exports")," parameters listed in the ",(0,i.kt)("a",{parentName:"p",href:"#strong-encapsulation"},"strong encapsulation")," section are\nrequired in all ",(0,i.kt)("inlineCode",{parentName:"p"},"jvm.config")," files and in ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.indexer.runner.javaOpts")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.indexer.runner.javaOptsArray")," on\nMiddleManagers. Failure to include these parameters leads to failure of various operations."),(0,i.kt)("p",null,"In addition, Druid's launch scripts detect Java 17 and log the following message rather than starting up:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Druid requires Java 8 or 11. Your current version is: 17.X.Y.\n")),(0,i.kt)("p",null,"You can skip this check with an environment variable:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"export DRUID_SKIP_JAVA_CHECK=1\n")))}v.isMDXComponent=!0}}]);
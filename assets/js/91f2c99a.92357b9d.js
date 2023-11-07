"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5836],{3905:(e,n,a)=>{a.d(n,{Zo:()=>u,kt:()=>v});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),p=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},u=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,v=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return a?t.createElement(v,i(i({ref:n},u),{},{components:a})):t.createElement(v,i({ref:n},u))}));function v(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},65802:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>s,default:()=>v,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var t=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],l={id:"java",title:"Java runtime"},s=void 0,p={unversionedId:"operations/java",id:"operations/java",title:"Java runtime",description:"\x3c!--",source:"@site/docs/28.0.0/operations/java.md",sourceDirName:"operations",slug:"/operations/java",permalink:"/docs/28.0.0/operations/java",draft:!1,tags:[],version:"current",frontMatter:{id:"java",title:"Java runtime"},sidebar:"docs",previous:{title:"Web console",permalink:"/docs/28.0.0/operations/web-console"},next:{title:"Durable storage",permalink:"/docs/28.0.0/operations/durable-storage"}},u={},c=[{value:"Selecting a Java runtime",id:"selecting-a-java-runtime",level:2},{value:"Garbage collection",id:"garbage-collection",level:2},{value:"Strong encapsulation",id:"strong-encapsulation",level:2}],d={toc:c},m="wrapper";function v(e){var n=e.components,a=(0,r.Z)(e,i);return(0,o.kt)(m,(0,t.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Apache Druid is written in Java and requires a Java runtime. This page provides details about obtaining and configuring\na Java runtime for Druid."),(0,o.kt)("h2",{id:"selecting-a-java-runtime"},"Selecting a Java runtime"),(0,o.kt)("p",null,"Druid fully supports Java 8u92+, Java 11, and Java 17. The project team recommends Java 17."),(0,o.kt)("p",null,"The project team recommends using an OpenJDK-based Java distribution. There are many free and actively-supported\ndistributions available, including\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/corretto/latest/corretto-17-ug/what-is-corretto-17.html"},"Amazon Corretto"),",\n",(0,o.kt)("a",{parentName:"p",href:"https://www.azul.com/downloads/?version=java-17-lts&package=jdk"},"Azul Zulu"),", and\n",(0,o.kt)("a",{parentName:"p",href:"https://adoptium.net/temurin/releases?version=17"},"Eclipse Temurin"),".\nThe project team does not recommend any specific distribution over any other."),(0,o.kt)("p",null,"Druid relies on the environment variables ",(0,o.kt)("inlineCode",{parentName:"p"},"JAVA_HOME")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"DRUID_JAVA_HOME")," to find Java on the machine. You can set\n",(0,o.kt)("inlineCode",{parentName:"p"},"DRUID_JAVA_HOME")," if there is more than one instance of Java. To verify Java requirements for your environment, run the\n",(0,o.kt)("inlineCode",{parentName:"p"},"bin/verify-java")," script."),(0,o.kt)("h2",{id:"garbage-collection"},"Garbage collection"),(0,o.kt)("p",null,"In general, the project team recommends using the G1 collector with default settings. This is the default collector in\nJava 11 and 17. To enable G1 on Java 8, use ",(0,o.kt)("inlineCode",{parentName:"p"},"-XX:+UseG1GC"),". There is no harm in explicitly specifying this on Java 11\nor 17 as well."),(0,o.kt)("p",null,"Garbage collector selection and tuning is a form of sport in the Java community. There may be situations where adjusting\ngarbage collection configuration improves or worsens performance. The project team's guidance is that most people do\nnot need to stray away from G1 with default settings."),(0,o.kt)("h2",{id:"strong-encapsulation"},"Strong encapsulation"),(0,o.kt)("p",null,"Java 9 and beyond (including Java 11 and 17) include the capability for\n",(0,o.kt)("a",{parentName:"p",href:"https://dev.java/learn/strong-encapsulation-(of-jdk-internals)/"},"strong encapsulation")," of internal JDK APIs. Druid\nuses certain internal JDK APIs, which must be added to ",(0,o.kt)("inlineCode",{parentName:"p"},"--add-exports")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"--add-opens")," on the Java command line."),(0,o.kt)("p",null,"On Java 11, if these parameters are not included, you will see warnings like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"WARNING: An illegal reflective access operation has occurred\nWARNING: Use --illegal-access=warn to enable warnings of further illegal reflective access operations\nWARNING: All illegal access operations will be denied in a future release\n")),(0,o.kt)("p",null,"On Java 17, if these parameters are not included, you will see errors on startup like the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Exception in thread "main" java.lang.ExceptionInInitializerError\n')),(0,o.kt)("p",null,"Druid's out-of-box configuration adds these parameters transparently when you use the bundled ",(0,o.kt)("inlineCode",{parentName:"p"},"bin/start-druid")," or\nsimilar commands. In this case, there is nothing special you need to do to run successfully on Java 11 or 17. However,\nif you have customized your Druid service launching system, you will need to ensure the required Java parameters are\nadded. There are many ways of doing this. Choose the one that works best for you."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"The simplest approach: use Druid's bundled ",(0,o.kt)("inlineCode",{parentName:"p"},"bin/start-druid")," script to launch Druid.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you launch Druid using ",(0,o.kt)("inlineCode",{parentName:"p"},"bin/supervise -c <config>"),", ensure your config file uses ",(0,o.kt)("inlineCode",{parentName:"p"},"bin/run-druid"),". This\nscript uses ",(0,o.kt)("inlineCode",{parentName:"p"},"bin/run-java")," internally, and automatically adds the proper flags.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you launch Druid using a ",(0,o.kt)("inlineCode",{parentName:"p"},"java")," command, replace ",(0,o.kt)("inlineCode",{parentName:"p"},"java")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"bin/run-java"),". Druid's bundled\n",(0,o.kt)("inlineCode",{parentName:"p"},"bin/run-java")," script automatically adds the proper flags.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"If you launch Druid without using its bundled scripts, ensure the following parameters are added to your Java\ncommand line:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"--add-exports=java.base/jdk.internal.misc=ALL-UNNAMED \\\n--add-exports=java.base/jdk.internal.ref=ALL-UNNAMED \\\n--add-opens=java.base/java.nio=ALL-UNNAMED \\\n--add-opens=java.base/sun.nio.ch=ALL-UNNAMED \\\n--add-opens=java.base/jdk.internal.ref=ALL-UNNAMED \\\n--add-opens=java.base/java.io=ALL-UNNAMED \\\n--add-opens=java.base/java.lang=ALL-UNNAMED \\\n--add-opens=jdk.management/com.sun.management.internal=ALL-UNNAMED\n")))}v.isMDXComponent=!0}}]);
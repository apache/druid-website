"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2738],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,k=c["".concat(l,".").concat(d)]||c[d]||m[d]||i;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7049:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>k,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],s={id:"known-issues",title:"SQL-based ingestion known issues",sidebar_label:"Known issues"},l=void 0,p={unversionedId:"multi-stage-query/known-issues",id:"multi-stage-query/known-issues",title:"SQL-based ingestion known issues",description:"\x3c!--",source:"@site/docs/28.0.0/multi-stage-query/known-issues.md",sourceDirName:"multi-stage-query",slug:"/multi-stage-query/known-issues",permalink:"/docs/28.0.0/multi-stage-query/known-issues",draft:!1,tags:[],version:"current",frontMatter:{id:"known-issues",title:"SQL-based ingestion known issues",sidebar_label:"Known issues"},sidebar:"docs",previous:{title:"Reference",permalink:"/docs/28.0.0/multi-stage-query/reference"},next:{title:"Apache Kafka ingestion",permalink:"/docs/28.0.0/development/extensions-core/kafka-ingestion"}},u={},c=[{value:"Multi-stage query task runtime",id:"multi-stage-query-task-runtime",level:2},{value:"<code>SELECT</code> Statement",id:"select-statement",level:2},{value:"<code>INSERT</code> and <code>REPLACE</code> Statements",id:"insert-and-replace-statements",level:2},{value:"<code>EXTERN</code> Function",id:"extern-function",level:2}],m={toc:c},d="wrapper";function k(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"}," This page describes SQL-based batch ingestion using the ",(0,i.kt)("a",{parentName:"p",href:"/docs/28.0.0/multi-stage-query/"},(0,i.kt)("inlineCode",{parentName:"a"},"druid-multi-stage-query")),"\nextension, new in Druid 24.0. Refer to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/28.0.0/ingestion/#batch"},"ingestion methods")," table to determine which\ningestion method is right for you.")),(0,i.kt)("h2",{id:"multi-stage-query-task-runtime"},"Multi-stage query task runtime"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Fault tolerance is partially implemented. Workers get relaunched when they are killed unexpectedly. The controller does not get relaunched if it is killed unexpectedly.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Worker task stage outputs are stored in the working directory given by ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.indexer.task.baseDir"),". Stages that\ngenerate a large amount of output data may exhaust all available disk space. In this case, the query fails with\nan ",(0,i.kt)("a",{parentName:"p",href:"/docs/28.0.0/multi-stage-query/reference#error_UnknownError"},"UnknownError"),' with a message including "No space left on device".'))),(0,i.kt)("h2",{id:"select-statement"},(0,i.kt)("inlineCode",{parentName:"h2"},"SELECT")," Statement"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"GROUPING SETS")," are not implemented. Queries using these features return a\n",(0,i.kt)("a",{parentName:"p",href:"/docs/28.0.0/multi-stage-query/reference#error_QueryNotSupported"},"QueryNotSupported")," error.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The numeric varieties of the ",(0,i.kt)("inlineCode",{parentName:"p"},"EARLIEST")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"LATEST")," aggregators do not work properly. Attempting to use the numeric\nvarieties of these aggregators lead to an error like\n",(0,i.kt)("inlineCode",{parentName:"p"},"java.lang.ClassCastException: class java.lang.Double cannot be cast to class org.apache.druid.collections.SerializablePair"),".\nThe string varieties, however, do work properly."))),(0,i.kt)("h2",{id:"insert-and-replace-statements"},(0,i.kt)("inlineCode",{parentName:"h2"},"INSERT")," and ",(0,i.kt)("inlineCode",{parentName:"h2"},"REPLACE")," Statements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"REPLACE")," statements with column lists, like ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT INTO tbl (a, b, c) SELECT ..."),", is not implemented.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"INSERT ... SELECT")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"REPLACE ... SELECT")," insert columns from the ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," statement based on column name. This\ndiffers from SQL standard behavior, where columns are inserted based on position.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"INSERT")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"REPLACE")," do not support all options available in ",(0,i.kt)("a",{parentName:"p",href:"/docs/28.0.0/ingestion/ingestion-spec"},"ingestion specs"),",\nincluding the ",(0,i.kt)("inlineCode",{parentName:"p"},"createBitmapIndex")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"multiValueHandling")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/28.0.0/ingestion/ingestion-spec#dimension-objects"},"dimension"),"\nproperties, and the ",(0,i.kt)("inlineCode",{parentName:"p"},"indexSpec")," ",(0,i.kt)("a",{parentName:"p",href:"/docs/28.0.0/ingestion/ingestion-spec#tuningconfig"},(0,i.kt)("inlineCode",{parentName:"a"},"tuningConfig"))," property."))),(0,i.kt)("h2",{id:"extern-function"},(0,i.kt)("inlineCode",{parentName:"h2"},"EXTERN")," Function"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("a",{parentName:"p",href:"/docs/28.0.0/ingestion/ingestion-spec#inclusions-and-exclusions"},"schemaless dimensions"),"\nfeature is not available. All columns and their types must be specified explicitly using the ",(0,i.kt)("inlineCode",{parentName:"p"},"signature")," parameter\nof the ",(0,i.kt)("a",{parentName:"p",href:"/docs/28.0.0/multi-stage-query/reference#extern-function"},(0,i.kt)("inlineCode",{parentName:"a"},"EXTERN")," function"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"EXTERN")," with input sources that match large numbers of files may exhaust available memory on the controller task.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"EXTERN")," refers to external files. Use ",(0,i.kt)("inlineCode",{parentName:"p"},"FROM")," to access ",(0,i.kt)("inlineCode",{parentName:"p"},"druid")," input sources."))))}k.isMDXComponent=!0}}]);
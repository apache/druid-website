"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[193],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(t),u=o,f=d["".concat(c,".").concat(u)]||d[u]||m[u]||a;return t?r.createElement(f,i(i({ref:n},s),{},{components:t})):r.createElement(f,i({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p[d]="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},20267:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>f,frontMatter:()=>p,metadata:()=>l,toc:()=>d});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],p={id:"orc",title:"ORC Extension"},c=void 0,l={unversionedId:"development/extensions-core/orc",id:"development/extensions-core/orc",title:"ORC Extension",description:"\x3c!--",source:"@site/docs/27.0.0/development/extensions-core/orc.md",sourceDirName:"development/extensions-core",slug:"/development/extensions-core/orc",permalink:"/docs/27.0.0/development/extensions-core/orc",draft:!1,tags:[],version:"current",frontMatter:{id:"orc",title:"ORC Extension"}},s={},d=[{value:"ORC extension",id:"orc-extension",level:2},{value:"Migration from &#39;contrib&#39; extension",id:"migration-from-contrib-extension",level:3}],m={toc:d},u="wrapper";function f(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)(u,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"orc-extension"},"ORC extension"),(0,a.kt)("p",null,"This Apache Druid extension enables Druid to ingest and understand the Apache ORC data format."),(0,a.kt)("p",null,"The extension provides the ",(0,a.kt)("a",{parentName:"p",href:"/docs/27.0.0/ingestion/data-formats#orc"},"ORC input format")," and the ",(0,a.kt)("a",{parentName:"p",href:"/docs/27.0.0/ingestion/data-formats#orc-hadoop-parser"},"ORC Hadoop parser"),"\nfor ",(0,a.kt)("a",{parentName:"p",href:"/docs/27.0.0/ingestion/native-batch"},"native batch ingestion")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/27.0.0/ingestion/hadoop"},"Hadoop batch ingestion"),", respectively.\nPlease see corresponding docs for details."),(0,a.kt)("p",null,"To use this extension, make sure to ",(0,a.kt)("a",{parentName:"p",href:"/docs/27.0.0/configuration/extensions#loading-extensions"},"include")," ",(0,a.kt)("inlineCode",{parentName:"p"},"druid-orc-extensions")," in the extensions load list."),(0,a.kt)("h3",{id:"migration-from-contrib-extension"},"Migration from 'contrib' extension"),(0,a.kt)("p",null,"This extension, first available in version 0.15.0, replaces the previous 'contrib' extension which was available until\n0.14.0-incubating. While this extension can index any data the 'contrib' extension could, the JSON spec for the\ningestion task is ",(0,a.kt)("em",{parentName:"p"},"incompatible"),", and will need modified to work with the newer 'core' extension."),(0,a.kt)("p",null,"To migrate to 0.15.0+:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In ",(0,a.kt)("inlineCode",{parentName:"li"},"inputSpec")," of ",(0,a.kt)("inlineCode",{parentName:"li"},"ioConfig"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"inputFormat")," must be changed from ",(0,a.kt)("inlineCode",{parentName:"li"},'"org.apache.hadoop.hive.ql.io.orc.OrcNewInputFormat"')," to\n",(0,a.kt)("inlineCode",{parentName:"li"},'"org.apache.orc.mapreduce.OrcInputFormat"')),(0,a.kt)("li",{parentName:"ul"},"The 'contrib' extension supported a ",(0,a.kt)("inlineCode",{parentName:"li"},"typeString")," property, which provided the schema of the\nORC file, of which was essentially required to have the types correct, but notably ",(0,a.kt)("em",{parentName:"li"},"not")," the column names, which\nfacilitated column renaming. In the 'core' extension, column renaming can be achieved with\n",(0,a.kt)("a",{parentName:"li",href:"/docs/27.0.0/ingestion/ingestion-spec#flattenspec"},(0,a.kt)("inlineCode",{parentName:"a"},"flattenSpec")),". For example, ",(0,a.kt)("inlineCode",{parentName:"li"},'"typeString":"struct<time:string,name:string>"'),"\nwith the actual schema ",(0,a.kt)("inlineCode",{parentName:"li"},"struct<_col0:string,_col1:string>"),", to preserve Druid schema would need replaced with:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"flattenSpec": {\n  "fields": [\n    {\n      "type": "path",\n      "name": "time",\n      "expr": "$._col0"\n    },\n    {\n      "type": "path",\n      "name": "name",\n      "expr": "$._col1"\n    }\n  ]\n  ...\n}\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The 'contrib' extension supported a ",(0,a.kt)("inlineCode",{parentName:"p"},"mapFieldNameFormat")," property, which provided a way to specify a dimension to\nflatten ",(0,a.kt)("inlineCode",{parentName:"p"},"OrcMap")," columns with primitive types. This functionality has also been replaced with\n",(0,a.kt)("a",{parentName:"p",href:"/docs/27.0.0/ingestion/ingestion-spec#flattenspec"},(0,a.kt)("inlineCode",{parentName:"a"},"flattenSpec")),". For example: ",(0,a.kt)("inlineCode",{parentName:"p"},'"mapFieldNameFormat": "<PARENT>_<CHILD>"'),"\nfor a dimension ",(0,a.kt)("inlineCode",{parentName:"p"},"nestedData_dim1"),", to preserve Druid schema could be replaced with"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-json"},'"flattenSpec": {\n "fields": [\n   {\n     "type": "path",\n     "name": "nestedData_dim1",\n     "expr": "$.nestedData.dim1"\n   }\n ]\n ...\n}\n')))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"")))}f.isMDXComponent=!0}}]);
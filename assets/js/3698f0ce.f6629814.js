"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9327],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},27722:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"datasketches-hll",title:"DataSketches HLL Sketch module"},s=void 0,d={unversionedId:"development/extensions-core/datasketches-hll",id:"development/extensions-core/datasketches-hll",title:"DataSketches HLL Sketch module",description:"\x3c!--",source:"@site/docs/latest/development/extensions-core/datasketches-hll.md",sourceDirName:"development/extensions-core",slug:"/development/extensions-core/datasketches-hll",permalink:"/docs/latest/development/extensions-core/datasketches-hll",draft:!1,tags:[],version:"current",frontMatter:{id:"datasketches-hll",title:"DataSketches HLL Sketch module"}},p={},u=[{value:"Aggregators",id:"aggregators",level:2},{value:"HLLSketchBuild aggregator",id:"hllsketchbuild-aggregator",level:3},{value:"HLLSketchMerge aggregator",id:"hllsketchmerge-aggregator",level:3},{value:"Post aggregators",id:"post-aggregators",level:2},{value:"Estimate",id:"estimate",level:3},{value:"Estimate with bounds",id:"estimate-with-bounds",level:3},{value:"Union",id:"union",level:3},{value:"Sketch to string",id:"sketch-to-string",level:3}],c={toc:u},m="wrapper";function g(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This module provides Apache Druid aggregators for distinct counting based on HLL sketch from ",(0,i.kt)("a",{parentName:"p",href:"https://datasketches.apache.org/"},"Apache DataSketches")," library. At ingestion time, this aggregator creates the HLL sketch objects to store in Druid segments. By default, Druid reads and merges sketches at query time. The default result is\nthe estimate of the number of distinct values presented to the sketch. You can also use post aggregators to produce a union of sketch columns in the same row.\nYou can use the HLL sketch aggregator on any column to estimate its cardinality."),(0,i.kt)("p",null,"To use this aggregator, make sure you ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/configuration/extensions#loading-extensions"},"include")," the extension in your config file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'druid.extensions.loadList=["druid-datasketches"]\n')),(0,i.kt)("p",null,"For additional sketch types supported in Druid, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/development/extensions-core/datasketches-extension"},"DataSketches extension"),"."),(0,i.kt)("h2",{id:"aggregators"},"Aggregators"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Required?"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"type")),(0,i.kt)("td",{parentName:"tr",align:null},"Either ",(0,i.kt)("a",{parentName:"td",href:"#hllsketchbuild-aggregator"},(0,i.kt)("inlineCode",{parentName:"a"},"HLLSketchBuild"))," or ",(0,i.kt)("a",{parentName:"td",href:"#hllsketchmerge-aggregator"},(0,i.kt)("inlineCode",{parentName:"a"},"HLLSketchMerge")),"."),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"name")),(0,i.kt)("td",{parentName:"tr",align:null},"String representing the output column to store sketch values."),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"fieldName")),(0,i.kt)("td",{parentName:"tr",align:null},"The name of the input field."),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"lgK")),(0,i.kt)("td",{parentName:"tr",align:null},"log2 of K that is the number of buckets in the sketch, parameter that controls the size and the accuracy. Must be between 4 and 21 inclusively."),(0,i.kt)("td",{parentName:"tr",align:null},"no, defaults to ",(0,i.kt)("inlineCode",{parentName:"td"},"12"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"tgtHllType")),(0,i.kt)("td",{parentName:"tr",align:null},"The type of the target HLL sketch. Must be ",(0,i.kt)("inlineCode",{parentName:"td"},"HLL_4"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"HLL_6")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"HLL_8")),(0,i.kt)("td",{parentName:"tr",align:null},"no, defaults to ",(0,i.kt)("inlineCode",{parentName:"td"},"HLL_4"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"round")),(0,i.kt)("td",{parentName:"tr",align:null},"Round off values to whole numbers. Only affects query-time behavior and is ignored at ingestion-time."),(0,i.kt)("td",{parentName:"tr",align:null},"no, defaults to ",(0,i.kt)("inlineCode",{parentName:"td"},"false"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"shouldFinalize")),(0,i.kt)("td",{parentName:"tr",align:null},"Return the final double type representing the estimate rather than the intermediate sketch type itself. In addition to controlling the finalization of this aggregator, you can control whether all aggregators are finalized with the query context parameters ",(0,i.kt)("a",{parentName:"td",href:"/docs/latest/querying/query-context"},(0,i.kt)("inlineCode",{parentName:"a"},"finalize"))," and ",(0,i.kt)("a",{parentName:"td",href:"/docs/latest/querying/sql-query-context"},(0,i.kt)("inlineCode",{parentName:"a"},"sqlFinalizeOuterSketches")),"."),(0,i.kt)("td",{parentName:"tr",align:null},"no, defaults to ",(0,i.kt)("inlineCode",{parentName:"td"},"true"))))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"}," The default ",(0,i.kt)("inlineCode",{parentName:"p"},"lgK")," value has proven to be sufficient for most use cases; expect only very negligible improvements in accuracy with ",(0,i.kt)("inlineCode",{parentName:"p"},"lgK")," values over ",(0,i.kt)("inlineCode",{parentName:"p"},"16")," in normal circumstances.")),(0,i.kt)("h3",{id:"hllsketchbuild-aggregator"},"HLLSketchBuild aggregator"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "type": "HLLSketchBuild",\n  "name": <output name>,\n  "fieldName": <metric name>,\n  "lgK": <size and accuracy parameter>,\n  "tgtHllType": <target HLL type>,\n  "round": <false | true>\n }\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"HLLSketchBuild")," aggregator builds an HLL sketch object from the specified input column. When used during ingestion, Druid stores pre-generated HLL sketch objects in the datasource instead of the raw data from the input column.\nWhen applied at query time on an existing dimension, you can use the resulting column as an intermediate dimension by the ",(0,i.kt)("a",{parentName:"p",href:"#post-aggregators"},"post-aggregators"),"."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"}," It is very common to use ",(0,i.kt)("inlineCode",{parentName:"p"},"HLLSketchBuild")," in combination with ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/ingestion/rollup"},"rollup")," to create a ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/ingestion/ingestion-spec#metricsspec"},"metric")," on high-cardinality columns.  In this example, a metric called ",(0,i.kt)("inlineCode",{parentName:"p"},"userid_hll")," is included in the ",(0,i.kt)("inlineCode",{parentName:"p"},"metricsSpec"),".  This will perform a HLL sketch on the ",(0,i.kt)("inlineCode",{parentName:"p"},"userid")," field at ingestion time, allowing for highly-performant approximate ",(0,i.kt)("inlineCode",{parentName:"p"},"COUNT DISTINCT")," query operations and improving roll-up ratios when ",(0,i.kt)("inlineCode",{parentName:"p"},"userid")," is then left out of the ",(0,i.kt)("inlineCode",{parentName:"p"},"dimensionsSpec"),"."),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},'"metricsSpec": [\n  {\n    "type": "HLLSketchBuild",\n    "name": "userid_hll",\n    "fieldName": "userid",\n    "lgK": 12,\n    "tgtHllType": "HLL_4"\n  }\n]\n'))),(0,i.kt)("h3",{id:"hllsketchmerge-aggregator"},"HLLSketchMerge aggregator"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "type": "HLLSketchMerge",\n  "name": <output name>,\n  "fieldName": <metric name>,\n  "lgK": <size and accuracy parameter>,\n  "tgtHllType": <target HLL type>,\n  "round": <false | true>\n}\n')),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"HLLSketchMerge")," aggregator to ingest pre-generated sketches from an input dataset. For example, you can set up a batch processing job to generate the sketches before sending the data to Druid. You must serialize the sketches in the input dataset to Base64-encoded bytes. Then, specify ",(0,i.kt)("inlineCode",{parentName:"p"},"HLLSketchMerge")," for the input column in the native ingestion ",(0,i.kt)("inlineCode",{parentName:"p"},"metricsSpec"),"."),(0,i.kt)("h2",{id:"post-aggregators"},"Post aggregators"),(0,i.kt)("h3",{id:"estimate"},"Estimate"),(0,i.kt)("p",null,"Returns the distinct count estimate as a double."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "type": "HLLSketchEstimate",\n  "name": <output name>,\n  "field": <post aggregator that returns an HLL Sketch>,\n  "round": <if true, round the estimate. Default is false>\n}\n')),(0,i.kt)("h3",{id:"estimate-with-bounds"},"Estimate with bounds"),(0,i.kt)("p",null,"Returns a distinct count estimate and error bounds from an HLL sketch.\nThe result will be an array containing three double values: estimate, lower bound and upper bound.\nThe bounds are provided at a given number of standard deviations (optional, defaults to 1).\nThis must be an integer value of 1, 2 or 3 corresponding to approximately 68.3%, 95.4% and 99.7% confidence intervals."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "type": "HLLSketchEstimateWithBounds",\n  "name": <output name>,\n  "field": <post aggregator that returns an HLL Sketch>,\n  "numStdDev": <number of standard deviations: 1 (default), 2 or 3>\n}\n')),(0,i.kt)("h3",{id:"union"},"Union"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "type": "HLLSketchUnion",\n  "name": <output name>,\n  "fields": <array of post aggregators that return HLL sketches>,\n  "lgK": <log2 of K for the target sketch>,\n  "tgtHllType": <target HLL type>\n}\n')),(0,i.kt)("h3",{id:"sketch-to-string"},"Sketch to string"),(0,i.kt)("p",null,"Human-readable sketch summary for debugging."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "type": "HLLSketchToString",\n  "name": <output name>,\n  "field": <post aggregator that returns an HLL Sketch>\n}\n')))}g.isMDXComponent=!0}}]);
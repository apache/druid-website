"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3229],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(a),m=r,h=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(h,s(s({ref:t},c),{},{components:a})):n.createElement(h,s({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:r,s[1]=l;for(var u=2;u<o;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8116:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),s=["components"],l={id:"datasketches-tuple",title:"DataSketches Tuple Sketch module"},i=void 0,u={unversionedId:"development/extensions-core/datasketches-tuple",id:"development/extensions-core/datasketches-tuple",title:"DataSketches Tuple Sketch module",description:"\x3c!--",source:"@site/docs/28.0.0/development/extensions-core/datasketches-tuple.md",sourceDirName:"development/extensions-core",slug:"/development/extensions-core/datasketches-tuple",permalink:"/docs/28.0.0/development/extensions-core/datasketches-tuple",draft:!1,tags:[],version:"current",frontMatter:{id:"datasketches-tuple",title:"DataSketches Tuple Sketch module"}},c={},p=[{value:"Aggregator",id:"aggregator",level:2},{value:"Example on top of raw data",id:"example-on-top-of-raw-data",level:3},{value:"Example ingesting a precomputed sketch column",id:"example-ingesting-a-precomputed-sketch-column",level:3},{value:"Post aggregators",id:"post-aggregators",level:2},{value:"Estimate of the number of distinct keys",id:"estimate-of-the-number-of-distinct-keys",level:3},{value:"Estimate of the number of distinct keys with error bounds",id:"estimate-of-the-number-of-distinct-keys-with-error-bounds",level:3},{value:"Number of retained entries",id:"number-of-retained-entries",level:3},{value:"Mean values for each column",id:"mean-values-for-each-column",level:3},{value:"Variance values for each column",id:"variance-values-for-each-column",level:3},{value:"Quantiles sketch from a column",id:"quantiles-sketch-from-a-column",level:3},{value:"Set operations",id:"set-operations",level:3},{value:"Student&#39;s t-test",id:"students-t-test",level:3},{value:"Sketch summary",id:"sketch-summary",level:3},{value:"Constant ArrayOfDoublesSketch",id:"constant-arrayofdoublessketch",level:3},{value:"Base64 output of ArrayOfDoublesSketch",id:"base64-output-of-arrayofdoublessketch",level:3},{value:"Estimated metrics values for each column of ArrayOfDoublesSketch",id:"estimated-metrics-values-for-each-column-of-arrayofdoublessketch",level:3}],d={toc:p},m="wrapper";function h(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This module provides Apache Druid aggregators based on Tuple sketch from ",(0,o.kt)("a",{parentName:"p",href:"https://datasketches.apache.org/"},"Apache DataSketches")," library. ArrayOfDoublesSketch sketches extend the functionality of the count-distinct Theta sketches by adding arrays of double values associated with unique keys."),(0,o.kt)("p",null,"To use this aggregator, make sure you ",(0,o.kt)("a",{parentName:"p",href:"/docs/28.0.0/configuration/extensions#loading-extensions"},"include")," the extension in your config file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'druid.extensions.loadList=["druid-datasketches"]\n')),(0,o.kt)("p",null,"For additional sketch types supported in Druid, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/28.0.0/development/extensions-core/datasketches-extension"},"DataSketches extension"),"."),(0,o.kt)("h2",{id:"aggregator"},"Aggregator"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type" : "arrayOfDoublesSketch",\n  "name" : <output_name>,\n  "fieldName" : <metric_name>,\n  "nominalEntries": <number>,\n  "metricColumns" : <array of strings>,\n  "numberOfValues" : <number>\n }\n')),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Property"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Required?"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"type")),(0,o.kt)("td",{parentName:"tr",align:null},'This string should always be "arrayOfDoublesSketch"'),(0,o.kt)("td",{parentName:"tr",align:null},"yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"name")),(0,o.kt)("td",{parentName:"tr",align:null},"String representing the output column to store sketch values."),(0,o.kt)("td",{parentName:"tr",align:null},"yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"fieldName")),(0,o.kt)("td",{parentName:"tr",align:null},"A string for the name of the input field."),(0,o.kt)("td",{parentName:"tr",align:null},"yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"nominalEntries")),(0,o.kt)("td",{parentName:"tr",align:null},"Parameter that determines the accuracy and size of the sketch. Higher k means higher accuracy but more space to store sketches. Must be a power of 2. See the ",(0,o.kt)("a",{parentName:"td",href:"https://datasketches.apache.org/docs/Theta/ThetaErrorTable"},"Theta sketch accuracy")," for details."),(0,o.kt)("td",{parentName:"tr",align:null},"no, defaults to 16384")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"metricColumns")),(0,o.kt)("td",{parentName:"tr",align:null},"When building sketches from raw data, an array input column that contain numeric values to associate with each distinct key. If not provided, assumes ",(0,o.kt)("inlineCode",{parentName:"td"},"fieldName")," is an ",(0,o.kt)("inlineCode",{parentName:"td"},"arrayOfDoublesSketch")),(0,o.kt)("td",{parentName:"tr",align:null},"no, if not provided ",(0,o.kt)("inlineCode",{parentName:"td"},"fieldName")," is assumed to be an arrayOfDoublesSketch")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"numberOfValues")),(0,o.kt)("td",{parentName:"tr",align:null},"Number of values associated with each distinct key."),(0,o.kt)("td",{parentName:"tr",align:null},"no, defaults to the length of ",(0,o.kt)("inlineCode",{parentName:"td"},"metricColumns")," if provided and 1 otherwise")))),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"arrayOfDoublesSketch")," aggregator to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Build a sketch from raw data. In this case, set ",(0,o.kt)("inlineCode",{parentName:"li"},"metricColumns")," to an array."),(0,o.kt)("li",{parentName:"ul"},"Build a sketch from an existing ",(0,o.kt)("inlineCode",{parentName:"li"},"ArrayOfDoubles")," sketch . In this case, leave ",(0,o.kt)("inlineCode",{parentName:"li"},"metricColumns")," unset and set the ",(0,o.kt)("inlineCode",{parentName:"li"},"fieldName")," to an ",(0,o.kt)("inlineCode",{parentName:"li"},"ArrayOfDoubles")," sketch with ",(0,o.kt)("inlineCode",{parentName:"li"},"numberOfValues")," doubles. At ingestion time, you must base64 encode ",(0,o.kt)("inlineCode",{parentName:"li"},"ArrayOfDoubles"),"  sketches at ingestion time.")),(0,o.kt)("h3",{id:"example-on-top-of-raw-data"},"Example on top of raw data"),(0,o.kt)("p",null,"Compute a theta of unique users. For each user store the ",(0,o.kt)("inlineCode",{parentName:"p"},"added")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"deleted")," scores. The new sketch column will be called ",(0,o.kt)("inlineCode",{parentName:"p"},"users_theta"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "arrayOfDoublesSketch",\n  "name": "users_theta",\n  "fieldName": "user",\n  "nominalEntries": 16384,\n  "metricColumns": ["added", "deleted"],\n}\n')),(0,o.kt)("h3",{id:"example-ingesting-a-precomputed-sketch-column"},"Example ingesting a precomputed sketch column"),(0,o.kt)("p",null,"Ingest a sketch column called ",(0,o.kt)("inlineCode",{parentName:"p"},"user_sketches")," that has a base64 encoded value of two doubles in its array and store it in a column called ",(0,o.kt)("inlineCode",{parentName:"p"},"users_theta"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "arrayOfDoublesSketch",\n  "name": "users_theta",\n  "fieldName": "user_sketches",\n  "nominalEntries": 16384,\n  "numberOfValues": 2,\n}\n')),(0,o.kt)("h2",{id:"post-aggregators"},"Post aggregators"),(0,o.kt)("h3",{id:"estimate-of-the-number-of-distinct-keys"},"Estimate of the number of distinct keys"),(0,o.kt)("p",null,"Returns a distinct count estimate from a given ArrayOfDoublesSketch."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type"  : "arrayOfDoublesSketchToEstimate",\n  "name": <output name>,\n  "field"  : <post aggregator that refers to an ArrayOfDoublesSketch (fieldAccess or another post aggregator)>\n}\n')),(0,o.kt)("h3",{id:"estimate-of-the-number-of-distinct-keys-with-error-bounds"},"Estimate of the number of distinct keys with error bounds"),(0,o.kt)("p",null,"Returns a distinct count estimate and error bounds from a given ArrayOfDoublesSketch. The result will be three double values: estimate of the number of distinct keys, lower bound and upper bound. The bounds are provided at the given number of standard deviations (optional, defaults to 1). This must be an integer value of 1, 2 or 3 corresponding to approximately 68.3%, 95.4% and 99.7% confidence intervals."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type"  : "arrayOfDoublesSketchToEstimateAndBounds",\n  "name": <output name>,\n  "field"  : <post aggregator that refers to an  ArrayOfDoublesSketch (fieldAccess or another post aggregator)>,\n  "numStdDevs", <number from 1 to 3>\n}\n')),(0,o.kt)("h3",{id:"number-of-retained-entries"},"Number of retained entries"),(0,o.kt)("p",null,"Returns the number of retained entries from a given ArrayOfDoublesSketch."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type"  : "arrayOfDoublesSketchToNumEntries",\n  "name": <output name>,\n  "field"  : <post aggregator that refers to an ArrayOfDoublesSketch (fieldAccess or another post aggregator)>\n}\n')),(0,o.kt)("h3",{id:"mean-values-for-each-column"},"Mean values for each column"),(0,o.kt)("p",null,"Returns a list of mean values from a given ArrayOfDoublesSketch. The result will be N double values, where N is the number of double values kept in the sketch per key."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type"  : "arrayOfDoublesSketchToMeans",\n  "name": <output name>,\n  "field"  : <post aggregator that refers to a DoublesSketch (fieldAccess or another post aggregator)>\n}\n')),(0,o.kt)("h3",{id:"variance-values-for-each-column"},"Variance values for each column"),(0,o.kt)("p",null,"Returns a list of variance values from a given ArrayOfDoublesSketch. The result will be N double values, where N is the number of double values kept in the sketch per key."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type"  : "arrayOfDoublesSketchToVariances",\n  "name": <output name>,\n  "field"  : <post aggregator that refers to a DoublesSketch (fieldAccess or another post aggregator)>\n}\n')),(0,o.kt)("h3",{id:"quantiles-sketch-from-a-column"},"Quantiles sketch from a column"),(0,o.kt)("p",null,"Returns a quantiles DoublesSketch constructed from a given column of values from a given ArrayOfDoublesSketch using optional parameter k that determines the accuracy and size of the quantiles sketch. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/28.0.0/development/extensions-core/datasketches-quantiles"},"Quantiles Sketch Module")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The column number is 1-based and is optional (the default is 1)."),(0,o.kt)("li",{parentName:"ul"},"The parameter k is optional (the default is defined in the sketch library)."),(0,o.kt)("li",{parentName:"ul"},"The result is a quantiles sketch.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type"  : "arrayOfDoublesSketchToQuantilesSketch",\n  "name": <output name>,\n  "field"  : <post aggregator that refers to a DoublesSketch (fieldAccess or another post aggregator)>,\n  "column" : <number>,\n  "k" : <parameter that determines the accuracy and size of the quantiles sketch>\n}\n')),(0,o.kt)("h3",{id:"set-operations"},"Set operations"),(0,o.kt)("p",null,"Returns a result of a specified set operation on the given array of sketches. Supported operations are: union, intersection and set difference (UNION, INTERSECT, NOT)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type"  : "arrayOfDoublesSketchSetOp",\n  "name": <output name>,\n  "operation": <"UNION"|"INTERSECT"|"NOT">,\n  "fields"  : <array of post aggregators to access sketch aggregators or post aggregators to allow arbitrary combination of set operations>,\n  "nominalEntries" : <parameter that determines the accuracy and size of the sketch>,\n  "numberOfValues" : <number of values associated with each distinct key>\n}\n')),(0,o.kt)("h3",{id:"students-t-test"},"Student's t-test"),(0,o.kt)("p",null,"Performs Student's t-test and returns a list of p-values given two instances of ArrayOfDoublesSketch. The result will be N double values, where N is the number of double values kept in the sketch per key. See ",(0,o.kt)("a",{parentName:"p",href:"https://commons.apache.org/proper/commons-math/javadocs/api-3.6.1/org/apache/commons/math3/stat/inference/TTest.html"},"t-test documentation"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type"  : "arrayOfDoublesSketchTTest",\n  "name": <output name>,\n  "fields"  : <array with two post aggregators to access sketch aggregators or post aggregators referring to an ArrayOfDoublesSketch>,\n}\n')),(0,o.kt)("h3",{id:"sketch-summary"},"Sketch summary"),(0,o.kt)("p",null,"Returns a human-readable summary of a given ArrayOfDoublesSketch. This is a string returned by toString() method of the sketch. This can be useful for debugging."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type"  : "arrayOfDoublesSketchToString",\n  "name": <output name>,\n  "field"  : <post aggregator that refers to an ArrayOfDoublesSketch (fieldAccess or another post aggregator)>\n}\n')),(0,o.kt)("h3",{id:"constant-arrayofdoublessketch"},"Constant ArrayOfDoublesSketch"),(0,o.kt)("p",null,"This post aggregator adds a Base64-encoded constant ArrayOfDoublesSketch value that you can use in other post aggregators."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "arrayOfDoublesSketchConstant",\n  "name": DESTINATION_COLUMN_NAME,\n  "value": CONSTANT_SKETCH_VALUE\n}\n')),(0,o.kt)("h3",{id:"base64-output-of-arrayofdoublessketch"},"Base64 output of ArrayOfDoublesSketch"),(0,o.kt)("p",null,"This post aggregator outputs an ArrayOfDoublesSketch as a Base64-encoded string storing the constant tuple sketch value that you can use in other post aggregators. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "arrayOfDoublesSketchToBase64String",\n  "name": DESTINATION_COLUMN_NAME,\n  "field": <post aggregator that refers to a ArrayOfDoublesSketch (fieldAccess or another post aggregator)>\n}\n')),(0,o.kt)("h3",{id:"estimated-metrics-values-for-each-column-of-arrayofdoublessketch"},"Estimated metrics values for each column of ArrayOfDoublesSketch"),(0,o.kt)("p",null,"For the key-value pairs in the given ArrayOfDoublesSketch, this post aggregator estimates the sum for each set of values across the keys. For example, the post aggregator returns ",(0,o.kt)("inlineCode",{parentName:"p"},"{3.0, 8.0}")," for the following key-value pairs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Key_1, {1.0, 3.0}\nKey_2, {2.0, 5.0}\n")),(0,o.kt)("p",null,"The post aggregator returns ",(0,o.kt)("em",{parentName:"p"},"N")," double values, where ",(0,o.kt)("em",{parentName:"p"},"N")," is the number of values associated with each key."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "arrayOfDoublesSketchToMetricsSumEstimate",\n  "name": DESTINATION_COLUMN_NAME,\n  "field": <post aggregator that refers to a ArrayOfDoublesSketch (fieldAccess or another post aggregator)>\n}\n')))}h.isMDXComponent=!0}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1616],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,g=u["".concat(p,".").concat(m)]||u[m]||d[m]||i;return r?n.createElement(g,l(l({ref:t},s),{},{components:r})):n.createElement(g,l({ref:t},s))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},26522:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),l=["components"],o={id:"topnmetricspec",title:"Sorting (topN)"},p=void 0,c={unversionedId:"querying/topnmetricspec",id:"querying/topnmetricspec",title:"Sorting (topN)",description:"\x3c!--",source:"@site/docs/27.0.0/querying/topnmetricspec.md",sourceDirName:"querying",slug:"/querying/topnmetricspec",permalink:"/docs/27.0.0/querying/topnmetricspec",draft:!1,tags:[],version:"current",frontMatter:{id:"topnmetricspec",title:"Sorting (topN)"},sidebar:"docs",previous:{title:"Sorting and limiting (groupBy)",permalink:"/docs/27.0.0/querying/limitspec"},next:{title:"String comparators",permalink:"/docs/27.0.0/querying/sorting-orders"}},s={},u=[{value:"Numeric TopNMetricSpec",id:"numeric-topnmetricspec",level:2},{value:"Dimension TopNMetricSpec",id:"dimension-topnmetricspec",level:2},{value:"Inverted TopNMetricSpec",id:"inverted-topnmetricspec",level:2}],d={toc:u},m="wrapper";function g(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)(m,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"}," Apache Druid supports two query languages: ",(0,i.kt)("a",{parentName:"p",href:"/docs/27.0.0/querying/sql"},"Druid SQL")," and ",(0,i.kt)("a",{parentName:"p",href:"/docs/27.0.0/querying/"},"native queries"),".\nThis document describes the native\nlanguage. For information about sorting in SQL, refer to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/27.0.0/querying/sql#order-by"},"SQL documentation"),".")),(0,i.kt)("p",null,"In Apache Druid, the topN metric spec specifies how topN values should be sorted."),(0,i.kt)("h2",{id:"numeric-topnmetricspec"},"Numeric TopNMetricSpec"),(0,i.kt)("p",null,"The simplest metric specification is a String value indicating the metric to sort topN results by. They are included in a topN query with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"metric": "<metric_name>"\n')),(0,i.kt)("p",null,"The metric field can also be given as a JSON object. The grammar for dimension values sorted by numeric value is shown below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"metric": {\n    "type": "numeric",\n    "metric": "<metric_name>"\n}\n')),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"property"),(0,i.kt)("th",{parentName:"tr",align:null},"description"),(0,i.kt)("th",{parentName:"tr",align:null},"required?"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"type"),(0,i.kt)("td",{parentName:"tr",align:null},"this indicates a numeric sort"),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"metric"),(0,i.kt)("td",{parentName:"tr",align:null},"the actual metric field in which results will be sorted by"),(0,i.kt)("td",{parentName:"tr",align:null},"yes")))),(0,i.kt)("h2",{id:"dimension-topnmetricspec"},"Dimension TopNMetricSpec"),(0,i.kt)("p",null,"This metric specification sorts TopN results by dimension value, using one of the sorting orders described here: ",(0,i.kt)("a",{parentName:"p",href:"/docs/27.0.0/querying/sorting-orders"},"Sorting Orders")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"property"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"description"),(0,i.kt)("th",{parentName:"tr",align:null},"required?"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"type"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"this indicates a sort a dimension's values"),(0,i.kt)("td",{parentName:"tr",align:null},"yes, must be 'dimension'")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ordering"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},'Specifies the sorting order. Can be one of the following values: "lexicographic", "alphanumeric", "numeric", "strlen". See ',(0,i.kt)("a",{parentName:"td",href:"/docs/27.0.0/querying/sorting-orders"},"Sorting Orders")," for more details."),(0,i.kt)("td",{parentName:"tr",align:null},'no, default: "lexicographic"')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"previousStop"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"the starting point of the sort. For example, if a previousStop value is 'b', all values before 'b' are discarded. This field can be used to paginate through all the dimension values."),(0,i.kt)("td",{parentName:"tr",align:null},"no")))),(0,i.kt)("p",null,"The following metricSpec uses lexicographic sorting."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"metric": {\n    "type": "dimension",\n    "ordering": "lexicographic",\n    "previousStop": "<previousStop_value>"\n}\n')),(0,i.kt)("p",null,"Note that in earlier versions of Druid, the functionality provided by the DimensionTopNMetricSpec was handled by two separate spec types, Lexicographic and Alphanumeric (when only two sorting orders were supported). These spec types have been deprecated but are still usable."),(0,i.kt)("h2",{id:"inverted-topnmetricspec"},"Inverted TopNMetricSpec"),(0,i.kt)("p",null,"Sort dimension values in inverted order, i.e inverts the order of the delegate metric spec. It can be used to sort the values in ascending order."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"metric": {\n    "type": "inverted",\n    "metric": <delegate_top_n_metric_spec>\n}\n')),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"property"),(0,i.kt)("th",{parentName:"tr",align:null},"description"),(0,i.kt)("th",{parentName:"tr",align:null},"required?"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"type"),(0,i.kt)("td",{parentName:"tr",align:null},"this indicates an inverted sort"),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"metric"),(0,i.kt)("td",{parentName:"tr",align:null},"the delegate metric spec."),(0,i.kt)("td",{parentName:"tr",align:null},"yes")))))}g.isMDXComponent=!0}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5027],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(n),c=a,k=u["".concat(d,".").concat(c)]||u[c]||m[c]||i;return n?r.createElement(k,l(l({ref:t},s),{},{components:n})):r.createElement(k,l({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},48867:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>k,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={id:"sql-array-functions",title:"SQL ARRAY functions",sidebar_label:"Array functions"},d=void 0,p={unversionedId:"querying/sql-array-functions",id:"querying/sql-array-functions",title:"SQL ARRAY functions",description:"\x3c!--",source:"@site/docs/latest/querying/sql-array-functions.md",sourceDirName:"querying",slug:"/querying/sql-array-functions",permalink:"/docs/latest/querying/sql-array-functions",draft:!1,tags:[],version:"current",frontMatter:{id:"sql-array-functions",title:"SQL ARRAY functions",sidebar_label:"Array functions"},sidebar:"docs",previous:{title:"Aggregation functions",permalink:"/docs/latest/querying/sql-aggregations"},next:{title:"Multi-value string functions",permalink:"/docs/latest/querying/sql-multivalue-string-functions"}},s={},u=[],m={toc:u},c="wrapper";function k(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)(c,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"}," Apache Druid supports two query languages: Druid SQL and ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/querying/"},"native queries"),".\nThis document describes the SQL language.")),(0,i.kt)("p",null,"This page describes the operations you can perform on arrays using ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/querying/sql"},"Druid SQL"),". See ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/querying/sql-data-types#arrays"},(0,i.kt)("inlineCode",{parentName:"a"},"ARRAY")," data type documentation")," for additional details. "),(0,i.kt)("p",null,"All array references in the array function documentation can refer to multi-value string columns or ",(0,i.kt)("inlineCode",{parentName:"p"},"ARRAY")," literals.\nThese functions are largely identical to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/querying/sql-multivalue-string-functions"},"multi-value string functions"),", but\nuse ",(0,i.kt)("inlineCode",{parentName:"p"},"ARRAY")," types and behavior. Multi-value string ",(0,i.kt)("inlineCode",{parentName:"p"},"VARCHAR")," columns can be converted to ",(0,i.kt)("inlineCode",{parentName:"p"},"VARCHAR ARRAY")," to use with\nthese functions using ",(0,i.kt)("inlineCode",{parentName:"p"},"MV_TO_ARRAY"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"ARRAY")," types can be converted to multi-value string ",(0,i.kt)("inlineCode",{parentName:"p"},"VARCHAR")," with\n",(0,i.kt)("inlineCode",{parentName:"p"},"ARRAY_TO_MV"),"."),(0,i.kt)("p",null,"The following table describes array functions. To learn more about array aggregation functions, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/querying/sql-aggregations"},"SQL aggregation functions"),"."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Function"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ARRAY[expr1, expr2, ...]")),(0,i.kt)("td",{parentName:"tr",align:null},"Constructs a SQL ",(0,i.kt)("inlineCode",{parentName:"td"},"ARRAY")," literal from the expression arguments, using the type of the first argument as the output array type.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ARRAY_LENGTH(arr)")),(0,i.kt)("td",{parentName:"tr",align:null},"Returns length of the array expression.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ARRAY_OFFSET(arr, long)")),(0,i.kt)("td",{parentName:"tr",align:null},"Returns the array element at the 0-based index supplied, or null for an out of range index.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ARRAY_ORDINAL(arr, long)")),(0,i.kt)("td",{parentName:"tr",align:null},"Returns the array element at the 1-based index supplied, or null for an out of range index.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ARRAY_CONTAINS(arr, expr)")),(0,i.kt)("td",{parentName:"tr",align:null},"If ",(0,i.kt)("inlineCode",{parentName:"td"},"expr")," is a scalar type, returns 1 if ",(0,i.kt)("inlineCode",{parentName:"td"},"arr")," contains ",(0,i.kt)("inlineCode",{parentName:"td"},"expr"),". If ",(0,i.kt)("inlineCode",{parentName:"td"},"expr")," is an array, returns 1 if ",(0,i.kt)("inlineCode",{parentName:"td"},"arr")," contains all elements of ",(0,i.kt)("inlineCode",{parentName:"td"},"expr"),". Otherwise returns 0.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ARRAY_OVERLAP(arr1, arr2)")),(0,i.kt)("td",{parentName:"tr",align:null},"Returns 1 if ",(0,i.kt)("inlineCode",{parentName:"td"},"arr1")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"arr2")," have any elements in common, else 0.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ARRAY_OFFSET_OF(arr, expr)")),(0,i.kt)("td",{parentName:"tr",align:null},"Returns the 0-based index of the first occurrence of ",(0,i.kt)("inlineCode",{parentName:"td"},"expr")," in the array. If no matching elements exist in the array, returns ",(0,i.kt)("inlineCode",{parentName:"td"},"null")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"-1")," if ",(0,i.kt)("inlineCode",{parentName:"td"},"druid.generic.useDefaultValueForNull=true")," (legacy mode).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ARRAY_ORDINAL_OF(arr, expr)")),(0,i.kt)("td",{parentName:"tr",align:null},"Returns the 1-based index of the first occurrence of ",(0,i.kt)("inlineCode",{parentName:"td"},"expr")," in the array. If no matching elements exist in the array, returns ",(0,i.kt)("inlineCode",{parentName:"td"},"null")," or ",(0,i.kt)("inlineCode",{parentName:"td"},"-1")," if ",(0,i.kt)("inlineCode",{parentName:"td"},"druid.generic.useDefaultValueForNull=true")," (legacy mode).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ARRAY_PREPEND(expr, arr)")),(0,i.kt)("td",{parentName:"tr",align:null},"Adds ",(0,i.kt)("inlineCode",{parentName:"td"},"expr")," to the beginning of ",(0,i.kt)("inlineCode",{parentName:"td"},"arr"),", the resulting array type determined by the type of ",(0,i.kt)("inlineCode",{parentName:"td"},"arr"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ARRAY_APPEND(arr, expr)")),(0,i.kt)("td",{parentName:"tr",align:null},"Appends ",(0,i.kt)("inlineCode",{parentName:"td"},"expr")," to ",(0,i.kt)("inlineCode",{parentName:"td"},"arr"),", the resulting array type determined by the type of ",(0,i.kt)("inlineCode",{parentName:"td"},"arr"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ARRAY_CONCAT(arr1, arr2)")),(0,i.kt)("td",{parentName:"tr",align:null},"Concatenates ",(0,i.kt)("inlineCode",{parentName:"td"},"arr2")," to ",(0,i.kt)("inlineCode",{parentName:"td"},"arr1"),". The resulting array type is determined by the type of ",(0,i.kt)("inlineCode",{parentName:"td"},"arr1"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ARRAY_SLICE(arr, start, end)")),(0,i.kt)("td",{parentName:"tr",align:null},"Returns the subarray of ",(0,i.kt)("inlineCode",{parentName:"td"},"arr")," from the 0-based index ",(0,i.kt)("inlineCode",{parentName:"td"},"start")," (inclusive) to ",(0,i.kt)("inlineCode",{parentName:"td"},"end")," (exclusive). Returns ",(0,i.kt)("inlineCode",{parentName:"td"},"null"),", if ",(0,i.kt)("inlineCode",{parentName:"td"},"start")," is less than 0, greater than length of ",(0,i.kt)("inlineCode",{parentName:"td"},"arr"),", or greater than ",(0,i.kt)("inlineCode",{parentName:"td"},"end"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ARRAY_TO_STRING(arr, str)")),(0,i.kt)("td",{parentName:"tr",align:null},"Joins all elements of ",(0,i.kt)("inlineCode",{parentName:"td"},"arr")," by the delimiter specified by ",(0,i.kt)("inlineCode",{parentName:"td"},"str"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"STRING_TO_ARRAY(str1, str2)")),(0,i.kt)("td",{parentName:"tr",align:null},"Splits ",(0,i.kt)("inlineCode",{parentName:"td"},"str1")," into an array on the delimiter specified by ",(0,i.kt)("inlineCode",{parentName:"td"},"str2"),", which is a regular expression.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ARRAY_TO_MV(arr)")),(0,i.kt)("td",{parentName:"tr",align:null},"Converts an ",(0,i.kt)("inlineCode",{parentName:"td"},"ARRAY")," of any type into a multi-value string ",(0,i.kt)("inlineCode",{parentName:"td"},"VARCHAR"),".")))))}k.isMDXComponent=!0}}]);
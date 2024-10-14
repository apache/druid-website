"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2246],{14137:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>N});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=l.createContext({}),p=function(e){var t=l.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return l.createElement(o.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},k=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),m=p(n),k=a,N=m["".concat(o,".").concat(k)]||m[k]||s[k]||r;return n?l.createElement(N,i(i({ref:t},d),{},{components:n})):l.createElement(N,i({ref:t},d))}));function N(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=k;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[m]="string"==typeof e?e:a,i[1]=u;for(var p=2;p<r;p++)i[p]=n[p];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}k.displayName="MDXCreateElement"},33088:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>N,frontMatter:()=>u,metadata:()=>p,toc:()=>m});var l=n(87462),a=n(63366),r=(n(67294),n(14137)),i=["components"],u={id:"tutorial-sql-null",title:"Null handling tutorial",sidebar_label:"Handling null values",description:"Introduction to null handling in Druid"},o=void 0,p={unversionedId:"tutorials/tutorial-sql-null",id:"tutorials/tutorial-sql-null",title:"Null handling tutorial",description:"Introduction to null handling in Druid",source:"@site/docs/31.0.0/tutorials/tutorial-sql-null.md",sourceDirName:"tutorials",slug:"/tutorials/tutorial-sql-null",permalink:"/docs/31.0.0/tutorials/tutorial-sql-null",draft:!1,tags:[],version:"current",frontMatter:{id:"tutorial-sql-null",title:"Null handling tutorial",sidebar_label:"Handling null values",description:"Introduction to null handling in Druid"}},d={},m=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Load data with null values",id:"load-data-with-null-values",level:2},{value:"String query example",id:"string-query-example",level:2},{value:"Filter for empty strings in addition to null",id:"filter-for-empty-strings-in-addition-to-null",level:3},{value:"Numeric query examples",id:"numeric-query-examples",level:2},{value:"Ingestion time filtering",id:"ingestion-time-filtering",level:2},{value:"Learn more",id:"learn-more",level:2}],s={toc:m},k="wrapper";function N(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)(k,(0,l.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This tutorial introduces the basic concepts of null handling for string and numeric columns in Apache Druid.\nThe tutorial focuses on filters using the logical NOT operation on columns with NULL values."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before starting this tutorial, download and run Apache Druid on your local machine as described in\nthe ",(0,r.kt)("a",{parentName:"p",href:"/docs/31.0.0/tutorials/"},"Local quickstart"),"."),(0,r.kt)("p",null,"The tutorial assumes you are familiar with using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/31.0.0/tutorials/tutorial-sql-query-view"},"Query view")," to ingest and query data."),(0,r.kt)("p",null,"The tutorial also assumes you have not changed any of the default settings for null handling."),(0,r.kt)("h2",{id:"load-data-with-null-values"},"Load data with null values"),(0,r.kt)("p",null,"The sample data for the tutorial contains null values for string and numeric columns as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"date": "1/1/2024 1:02:00","title": "example_1","string_value": "some_value","numeric_value": 1}\n{"date": "1/1/2024 1:03:00","title": "example_2","string_value": "another_value","numeric_value": 2}\n{"date": "1/1/2024 1:04:00","title": "example_3","string_value": "", "numeric_value": null}\n{"date": "1/1/2024 1:05:00","title": "example_4","string_value": null, "numeric_value": null}\n')),(0,r.kt)("p",null,"Run the following query in the Druid Console to load the data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'REPLACE INTO "null_example" OVERWRITE ALL\nWITH "ext" AS (\n  SELECT *\n  FROM TABLE(\n    EXTERN(\n      \'{"type":"inline","data":"{\\"date\\": \\"1/1/2024 1:02:00\\",\\"title\\": \\"example_1\\",\\"string_value\\": \\"some_value\\",\\"numeric_value\\": 1}\\n{\\"date\\": \\"1/1/2024 1:03:00\\",\\"title\\": \\"example_2\\",\\"string_value\\": \\"another_value\\",\\"numeric_value\\": 2}\\n{\\"date\\": \\"1/1/2024 1:04:00\\",\\"title\\": \\"example_3\\",\\"string_value\\": \\"\\", \\"numeric_value\\": null}\\n{\\"date\\": \\"1/1/2024 1:05:00\\",\\"title\\": \\"example_4\\",\\"string_value\\": null, \\"numeric_value\\": null}"}\',\n      \'{"type":"json"}\'\n    )\n  ) EXTEND ("date" VARCHAR, "title" VARCHAR, "string_value" VARCHAR, "numeric_value" BIGINT)\n)\nSELECT\n  TIME_PARSE("date", \'d/M/yyyy H:mm:ss\') AS "__time",\n  "title",\n  "string_value",\n  "numeric_value"\nFROM "ext"\nPARTITIONED BY DAY\n')),(0,r.kt)("p",null,"After Druid finishes loading the data, run the following query to see the table:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT * FROM "null_example"\n')),(0,r.kt)("p",null,"Druid returns the following:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"__time")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"title")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"string_value")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"numeric_value")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"2024-01-01T01:02:00.000Z")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"example_1")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"some_value")),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"2024-01-01T01:03:00.000Z")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"example_2")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"another_value")),(0,r.kt)("td",{parentName:"tr",align:null},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"2024-01-01T01:04:00.000Z")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"example_3")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"empty")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"2024-01-01T01:05:00.000Z")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"example_4")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null"))))),(0,r.kt)("p",null,"Note the difference in the empty string value for example 3 and the null string value for example 4."),(0,r.kt)("h2",{id:"string-query-example"},"String query example"),(0,r.kt)("p",null,"The queries in this section illustrate null handling with strings.\nThe following query filters rows where the string value is not equal to ",(0,r.kt)("inlineCode",{parentName:"p"},"some_value"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT COUNT(*)\nFROM "null_example"\nWHERE "string_value" != \'some_value\'\n')),(0,r.kt)("p",null,"Druid returns 2 for ",(0,r.kt)("inlineCode",{parentName:"p"},"another_value")," and the empty string ",(0,r.kt)("inlineCode",{parentName:"p"},'""'),". The null value is not counted."),(0,r.kt)("p",null,"Note that the null value is included in ",(0,r.kt)("inlineCode",{parentName:"p"},"COUNT(*)")," but not as a count of the values in the column as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT "string_value",\n      COUNT(*) AS count_all_rows,\n      COUNT("string_value") AS count_values\nFROM "inline_data"\nGROUP BY 1\n')),(0,r.kt)("p",null,"Druid returns the following:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"string_value")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"count_all_rows")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"count_values")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"empty")),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"another_value")),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"some_value")),(0,r.kt)("td",{parentName:"tr",align:null},"1"),(0,r.kt)("td",{parentName:"tr",align:null},"1")))),(0,r.kt)("p",null,"Also note that GROUP BY expressions yield distinct entries for ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," and the empty string."),(0,r.kt)("h3",{id:"filter-for-empty-strings-in-addition-to-null"},"Filter for empty strings in addition to null"),(0,r.kt)("p",null,"If your queries rely on treating empty strings and null values the same, you can use an OR operator in the filter. For example to select all rows with null values or empty strings:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT *\nFROM "null_example"\nWHERE "string_value" IS NULL OR "string_value" = \'\'\n')),(0,r.kt)("p",null,"Druid returns the following:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"__time")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"title")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"string_value")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"numeric_value")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"2024-01-01T01:04:00.000Z")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"example_3")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"empty")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"2024-01-01T01:05:00.000Z")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"example_4")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null"))))),(0,r.kt)("p",null,"For another example, if you do not want to count empty strings, use a FILTER to exclude them. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT COUNT("string_value") FILTER(WHERE "string_value" <> \'\')\nFROM "null_example"\n')),(0,r.kt)("p",null,"Druid returns 2. Both the empty string and null values are excluded."),(0,r.kt)("h2",{id:"numeric-query-examples"},"Numeric query examples"),(0,r.kt)("p",null,"Druid does not count null values in numeric comparisons."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT COUNT(*)\nFROM "null_example"\nWHERE "numeric_value" < 2\n')),(0,r.kt)("p",null,"Druid returns 1. The ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," values for examples 3 and 4 are excluded."),(0,r.kt)("p",null,"Additionally, be aware that null values do not behave as 0. For examples:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT numeric_value + 1\nFROM "null_example"\nWHERE "__time" > \'2024-01-01 01:04:00.000Z\'\n')),(0,r.kt)("p",null,"Druid returns ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," and not 1. One option is to use the COALESCE function for null handling. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT COALESCE(numeric_value, 0) + 1\nFROM "null_example"\nWHERE "__time" > \'2024-01-01 01:04:00.000Z\'\n')),(0,r.kt)("p",null,"In this case, Druid returns 1."),(0,r.kt)("h2",{id:"ingestion-time-filtering"},"Ingestion time filtering"),(0,r.kt)("p",null,"The same null handling rules apply at ingestion time.\nThe following query replaces the example data with data filtered with a WHERE clause:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'REPLACE INTO "null_example" OVERWRITE ALL\nWITH "ext" AS (\n  SELECT *\n  FROM TABLE(\n    EXTERN(\n      \'{"type":"inline","data":"{\\"date\\": \\"1/1/2024 1:02:00\\",\\"title\\": \\"example_1\\",\\"string_value\\": \\"some_value\\",\\"numeric_value\\": 1}\\n{\\"date\\": \\"1/1/2024 1:03:00\\",\\"title\\": \\"example_2\\",\\"string_value\\": \\"another_value\\",\\"numeric_value\\": 2}\\n{\\"date\\": \\"1/1/2024 1:04:00\\",\\"title\\": \\"example_3\\",\\"string_value\\": \\"\\", \\"numeric_value\\": null}\\n{\\"date\\": \\"1/1/2024 1:05:00\\",\\"title\\": \\"example_4\\",\\"string_value\\": null, \\"numeric_value\\": null}"}\',\n      \'{"type":"json"}\'\n    )\n  ) EXTEND ("date" VARCHAR, "title" VARCHAR, "string_value" VARCHAR, "numeric_value" BIGINT)\n)\nSELECT\n  TIME_PARSE("date", \'d/M/yyyy H:mm:ss\') AS "__time",\n  "title",\n  "string_value",\n  "numeric_value"\nFROM "ext"\nWHERE "string_value" != \'some_value\'\nPARTITIONED BY DAY\n')),(0,r.kt)("p",null,"The resulting data set only includes two rows. Druid has filtered out example 1 (",(0,r.kt)("inlineCode",{parentName:"p"},"some_value"),") and example 4 (",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"):"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"__time")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"title")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"string_value")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"th"},"numeric_value")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"2024-01-01T01:03:00.000Z")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"example_2")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"another_value")),(0,r.kt)("td",{parentName:"tr",align:null},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"2024-01-01T01:04:00.000Z")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"example_3")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"empty")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"null"))))),(0,r.kt)("h2",{id:"learn-more"},"Learn more"),(0,r.kt)("p",null,"See the following for more information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/31.0.0/querying/sql-data-types#null-values"},"Null values")),(0,r.kt)("li",{parentName:"ul"},'"Generating and working with NULL values" notebook at ',(0,r.kt)("a",{parentName:"li",href:"https://github.com/implydata/learn-druid/"},"Learn druid"))))}N.isMDXComponent=!0}}]);
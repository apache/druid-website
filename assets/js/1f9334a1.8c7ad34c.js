"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3164],{14137:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),c=u(a),p=i,m=c["".concat(l,".").concat(p)]||c[p]||d[p]||o;return a?n.createElement(m,s(s({ref:t},h),{},{components:a})):n.createElement(m,s({ref:t},h))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,s=new Array(o);s[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[c]="string"==typeof e?e:i,s[1]=r;for(var u=2;u<o;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},19277:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>u,toc:()=>c});var n=a(87462),i=a(63366),o=(a(67294),a(14137)),s=["components"],r={id:"tutorial-sketches-theta",title:"Approximations with Theta sketches",sidebar_label:"Theta sketches tutorial"},l=void 0,u={unversionedId:"tutorials/tutorial-sketches-theta",id:"tutorials/tutorial-sketches-theta",title:"Approximations with Theta sketches",description:"\x3c!--",source:"@site/docs/31.0.0/tutorials/tutorial-sketches-theta.md",sourceDirName:"tutorials",slug:"/tutorials/tutorial-sketches-theta",permalink:"/docs/31.0.0/tutorials/tutorial-sketches-theta",draft:!1,tags:[],version:"current",frontMatter:{id:"tutorial-sketches-theta",title:"Approximations with Theta sketches",sidebar_label:"Theta sketches tutorial"},sidebar:"docs",previous:{title:"Query for latest data",permalink:"/docs/31.0.0/tutorials/tutorial-latest-by"},next:{title:"JDBC connector tutorial",permalink:"/docs/31.0.0/tutorials/tutorial-jdbc"}},h={},c=[{value:"The problem with counts and set operations on large data sets",id:"the-problem-with-counts-and-set-operations-on-large-data-sets",level:2},{value:"Use Theta sketches for fast approximation with set operations",id:"use-theta-sketches-for-fast-approximation-with-set-operations",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Sample data",id:"sample-data",level:2},{value:"Ingest data using Theta sketches",id:"ingest-data-using-theta-sketches",level:2},{value:"Query the Theta sketch column",id:"query-the-theta-sketch-column",level:2},{value:"Basic counting",id:"basic-counting",level:3},{value:"Filtered metrics",id:"filtered-metrics",level:3},{value:"Set operations",id:"set-operations",level:3},{value:"Conclusions",id:"conclusions",level:2},{value:"Learn more",id:"learn-more",level:2},{value:"Acknowledgments",id:"acknowledgments",level:2}],d={toc:c},p="wrapper";function m(e){var t=e.components,r=(0,i.Z)(e,s);return(0,o.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Apache Druid can power real-time collection, streaming, and interactive visualization of clickstreams.\nA common problem in clickstream analytics is counting unique things, like visitors or sessions.\nGenerally this involves scanning through all detail data, because unique counts do not add up as you aggregate the numbers."),(0,o.kt)("h2",{id:"the-problem-with-counts-and-set-operations-on-large-data-sets"},"The problem with counts and set operations on large data sets"),(0,o.kt)("p",null,"Imagine you are interested in the number of visitors that watched episodes of a TV show. Let's say you found that at a given day, 1000 unique visitors watched the first episode, and 800 visitors watched the second episode. You may want to explore further trends, for example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"How many visitors watched ",(0,o.kt)("em",{parentName:"li"},"both")," episodes?"),(0,o.kt)("li",{parentName:"ul"},"How many visitors are there that watched ",(0,o.kt)("em",{parentName:"li"},"at least one")," of the episodes?"),(0,o.kt)("li",{parentName:"ul"},"How many visitors watched episode 1 ",(0,o.kt)("em",{parentName:"li"},"but not")," episode 2?")),(0,o.kt)("p",null,"There is no way to answer these questions by just looking at the aggregated numbers. You would have to go back to the detail data and scan every single row. If the data volume is high enough, this may take a very long time, meaning that an interactive data exploration is not possible."),(0,o.kt)("p",null,"An additional nuisance is that unique counts don't work well with rollups. For this example, it would be great if you could have just one row of data per 15 minute interval",(0,o.kt)("sup",null,(0,o.kt)("sup",{parentName:"p",id:"fnref-1"},(0,o.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),", show, and episode. After all, you are not interested in the individual user IDs, just the unique counts."),(0,o.kt)("p",null,"Is there a way to avoid crunching the detail data every single time, and maybe even enable rollup?\nEnter Theta sketches."),(0,o.kt)("h2",{id:"use-theta-sketches-for-fast-approximation-with-set-operations"},"Use Theta sketches for fast approximation with set operations"),(0,o.kt)("p",null,"Use Theta sketches to obtain a fast approximate estimate for the distinct count of values used to build the sketches.\nTheta sketches are a probabilistic data structure to enable approximate analysis of big data with known error distributions.\nDruid's implementation relies on the ",(0,o.kt)("a",{parentName:"p",href:"https://datasketches.apache.org/"},"Apache DataSketches")," library."),(0,o.kt)("p",null,"The following properties describe Theta sketches:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Similar to other sketches, Theta sketches are ",(0,o.kt)("strong",{parentName:"li"},"mergeable"),". This means you can work with rolled up data and merge the sketches over various time intervals. Thus, you can take advantage of Druid's rollup feature."),(0,o.kt)("li",{parentName:"ul"},"Specific to sketches supported in Druid, Theta sketches support ",(0,o.kt)("strong",{parentName:"li"},"set operations"),". Given two Theta sketches over subsets of data, you can compute the union, intersection, or set difference of the two subsets. This enables you to answer questions like the number of visitors that watched a specific combination of episodes from the example.")),(0,o.kt)("p",null,"In this tutorial, you will learn how to do the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create Theta sketches from your input data at ingestion time."),(0,o.kt)("li",{parentName:"ul"},"Execute distinct count and set operation queries on the Theta sketches to explore the questions presented earlier.")),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Before proceeding, download Druid as described in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/31.0.0/tutorials/"},"single-machine quickstart")," and have it running on your local machine. You don't need to load any data into the Druid cluster."),(0,o.kt)("p",null,"It's helpful to have finished ",(0,o.kt)("a",{parentName:"p",href:"/docs/31.0.0/tutorials/tutorial-batch"},"Tutorial: Loading a file")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/31.0.0/tutorials/tutorial-query"},"Tutorial: Querying data"),"."),(0,o.kt)("h2",{id:"sample-data"},"Sample data"),(0,o.kt)("p",null,"This tutorial works with the following data:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"date"),": a timestamp. In this case it's just dates but as mentioned earlier, a finer granularity makes sense in real life."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"uid"),": a user ID"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"show"),": name of a TV show"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"episode"),": episode identifier")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csv"},"date,uid,show,episode\n2022-05-19,alice,Game of Thrones,S1E1\n2022-05-19,alice,Game of Thrones,S1E2\n2022-05-19,alice,Game of Thrones,S1E1\n2022-05-19,bob,Bridgerton,S1E1\n2022-05-20,alice,Game of Thrones,S1E1\n2022-05-20,carol,Bridgerton,S1E2\n2022-05-20,dan,Bridgerton,S1E1\n2022-05-21,alice,Game of Thrones,S1E1\n2022-05-21,carol,Bridgerton,S1E1\n2022-05-21,erin,Game of Thrones,S1E1\n2022-05-21,alice,Bridgerton,S1E1\n2022-05-22,bob,Game of Thrones,S1E1\n2022-05-22,bob,Bridgerton,S1E1\n2022-05-22,carol,Bridgerton,S1E2\n2022-05-22,bob,Bridgerton,S1E1\n2022-05-22,erin,Game of Thrones,S1E1\n2022-05-22,erin,Bridgerton,S1E2\n2022-05-23,erin,Game of Thrones,S1E1\n2022-05-23,alice,Game of Thrones,S1E1\n")),(0,o.kt)("h2",{id:"ingest-data-using-theta-sketches"},"Ingest data using Theta sketches"),(0,o.kt)("p",null,"Load the sample dataset using the ",(0,o.kt)("a",{parentName:"p",href:"/docs/31.0.0/multi-stage-query/reference/#insert"},(0,o.kt)("inlineCode",{parentName:"a"},"INSERT INTO"))," statement and the ",(0,o.kt)("a",{parentName:"p",href:"/docs/31.0.0/multi-stage-query/reference/#extern-function"},(0,o.kt)("inlineCode",{parentName:"a"},"EXTERN"))," function to ingest the sample data inline. In the ",(0,o.kt)("a",{parentName:"p",href:"/docs/31.0.0/operations/web-console"},"Druid web console"),", go to the ",(0,o.kt)("strong",{parentName:"p"},"Query")," view and run the following query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},'INSERT INTO "ts_tutorial"\nWITH "source" AS (SELECT * FROM TABLE(\n  EXTERN(\n    \'{"type":"inline","data":"date,uid,show,episode\\n2022-05-19,alice,Game of Thrones,S1E1\\n2022-05-19,alice,Game of Thrones,S1E2\\n2022-05-19,alice,Game of Thrones,S1E1\\n2022-05-19,bob,Bridgerton,S1E1\\n2022-05-20,alice,Game of Thrones,S1E1\\n2022-05-20,carol,Bridgerton,S1E2\\n2022-05-20,dan,Bridgerton,S1E1\\n2022-05-21,alice,Game of Thrones,S1E1\\n2022-05-21,carol,Bridgerton,S1E1\\n2022-05-21,erin,Game of Thrones,S1E1\\n2022-05-21,alice,Bridgerton,S1E1\\n2022-05-22,bob,Game of Thrones,S1E1\\n2022-05-22,bob,Bridgerton,S1E1\\n2022-05-22,carol,Bridgerton,S1E2\\n2022-05-22,bob,Bridgerton,S1E1\\n2022-05-22,erin,Game of Thrones,S1E1\\n2022-05-22,erin,Bridgerton,S1E2\\n2022-05-23,erin,Game of Thrones,S1E1\\n2022-05-23,alice,Game of Thrones,S1E1"}\',\n    \'{"type":"csv","findColumnsFromHeader":true}\'\n  )\n) EXTEND ("date" VARCHAR, "show" VARCHAR, "episode" VARCHAR, "uid" VARCHAR))\nSELECT\n  TIME_FLOOR(TIME_PARSE("date"), \'P1D\') AS "__time",\n  "show",\n  "episode",\n  COUNT(*) AS "count",\n  DS_THETA("uid") AS "theta_uid"\nFROM "source"\nGROUP BY 1, 2, 3\nPARTITIONED BY DAY\n')),(0,o.kt)("p",null,"Notice the ",(0,o.kt)("inlineCode",{parentName:"p"},"theta_uid")," column in the ",(0,o.kt)("inlineCode",{parentName:"p"},"SELECT")," statement. It defines the ",(0,o.kt)("inlineCode",{parentName:"p"},"thetaSketch")," aggregator on the ",(0,o.kt)("inlineCode",{parentName:"p"},"uid")," column during ingestion.\nIn this scenario you are not interested in individual user IDs, only the unique counts.\nInstead you create Theta sketches on the values of ",(0,o.kt)("inlineCode",{parentName:"p"},"uid")," using the ",(0,o.kt)("inlineCode",{parentName:"p"},"DS_THETA")," function."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/31.0.0/development/extensions-core/datasketches-theta#aggregator"},(0,o.kt)("inlineCode",{parentName:"a"},"DS_THETA"))," has an optional second parameter that controls the accuracy and size of the sketches."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"GROUP BY")," statement groups the entries for each episode of a show watched on the same day."),(0,o.kt)("h2",{id:"query-the-theta-sketch-column"},"Query the Theta sketch column"),(0,o.kt)("p",null,"Calculating a unique count estimate from a Theta sketch column involves the following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Merge the Theta sketches in the column by means of the ",(0,o.kt)("inlineCode",{parentName:"li"},"DS_THETA")," ",(0,o.kt)("a",{parentName:"li",href:"/docs/31.0.0/querying/sql-aggregations#theta-sketch-functions"},"aggregator function")," in Druid SQL."),(0,o.kt)("li",{parentName:"ol"},"Retrieve the estimate from the merged sketch with the ",(0,o.kt)("a",{parentName:"li",href:"/docs/31.0.0/querying/sql-scalar#theta-sketch-functions"},(0,o.kt)("inlineCode",{parentName:"a"},"THETA_SKETCH_ESTIMATE"))," function.")),(0,o.kt)("p",null,"Between steps 1 and 2, you can apply set functions as demonstrated later in ",(0,o.kt)("a",{parentName:"p",href:"#set-operations"},"Set operations"),"."),(0,o.kt)("h3",{id:"basic-counting"},"Basic counting"),(0,o.kt)("p",null,"Let's first see what the data looks like in Druid. Run the following SQL statement in the query editor:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT * FROM ts_tutorial\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"View data with SELECT all query",src:a(61449).Z,width:"1250",height:"640"})),(0,o.kt)("p",null,"The Theta sketch column ",(0,o.kt)("inlineCode",{parentName:"p"},"theta_uid")," appears as a Base64-encoded string; behind it is a bitmap."),(0,o.kt)("p",null,"The following query uses ",(0,o.kt)("inlineCode",{parentName:"p"},"THETA_SKETCH_ESTIMATE")," to compute the distinct counts of user IDs and groups by the other dimensions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT\n  __time,\n  "show",\n  "episode",\n  THETA_SKETCH_ESTIMATE(theta_uid) AS users\nFROM ts_tutorial\n')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Count distinct with Theta sketches",src:a(39165).Z,width:"1250",height:"640"})),(0,o.kt)("h3",{id:"filtered-metrics"},"Filtered metrics"),(0,o.kt)("p",null,"Druid has the capability to use ",(0,o.kt)("a",{parentName:"p",href:"/docs/31.0.0/querying/sql-aggregations"},"filtered metrics"),". This means you can include a WHERE clause in the SELECT part of the query."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"}," In the case of Theta sketches, the filter clause has to be inserted between the aggregator and the estimator.")),(0,o.kt)("p",null,"As an example, query the total unique users that watched ",(0,o.kt)("em",{parentName:"p"},"Bridgerton"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT APPROX_COUNT_DISTINCT_DS_THETA(theta_uid) FILTER(WHERE \"show\" = 'Bridgerton') AS users\nFROM ts_tutorial\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Count distinct with Theta sketches and filters",src:a(5932).Z,width:"1250",height:"640"})),(0,o.kt)("p",null,"In the preceding query, ",(0,o.kt)("inlineCode",{parentName:"p"},"APPROX_COUNT_DISTINCT_DS_THETA")," is equivalent to calling ",(0,o.kt)("inlineCode",{parentName:"p"},"DS_THETA")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"THETA_SKETCH_ESIMATE")," as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT THETA_SKETCH_ESTIMATE(\n         DS_THETA(theta_uid) FILTER(WHERE \"show\" = 'Bridgerton')\n       ) AS users\nFROM ts_tutorial\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"APPROX_COUNT_DISTINCT_DS_THETA")," function applies the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"DS_THETA"),": Creates a new Theta sketch from the column of Theta sketches."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"THETA_SKETCH_ESTIMATE"),": Calculates the distinct count estimate from the output of ",(0,o.kt)("inlineCode",{parentName:"li"},"DS_THETA"),".")),(0,o.kt)("p",null,"Note that the filter clause limits an aggregation query to only the rows that match the filter."),(0,o.kt)("h3",{id:"set-operations"},"Set operations"),(0,o.kt)("p",null,"You can use this capability of filtering in the aggregator, together with ",(0,o.kt)("em",{parentName:"p"},"set operations"),", to finally answer the questions from the introduction."),(0,o.kt)("p",null,"How many users watched both episodes of ",(0,o.kt)("em",{parentName:"p"},"Bridgerton?")," Use ",(0,o.kt)("inlineCode",{parentName:"p"},"THETA_SKETCH_INTERSECT")," to compute the unique count of the intersection of two (or more) segments:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT THETA_SKETCH_ESTIMATE(\n         THETA_SKETCH_INTERSECT(\n           DS_THETA(theta_uid) FILTER(WHERE \"show\" = 'Bridgerton' AND \"episode\" = 'S1E1'),\n           DS_THETA(theta_uid) FILTER(WHERE \"show\" = 'Bridgerton' AND \"episode\" = 'S1E2')\n         )\n       ) AS users\nFROM ts_tutorial\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Count distinct with Theta sketches, filters, and set operations",src:a(51913).Z,width:"1250",height:"640"})),(0,o.kt)("p",null,"Again, the set function is spliced in between the aggregator and the estimator."),(0,o.kt)("p",null,"Likewise, use ",(0,o.kt)("inlineCode",{parentName:"p"},"THETA_SKETCH_UNION")," to find the number of visitors that watched ",(0,o.kt)("em",{parentName:"p"},"any")," of the episodes:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT THETA_SKETCH_ESTIMATE(\n         THETA_SKETCH_UNION(\n           DS_THETA(theta_uid) FILTER(WHERE \"show\" = 'Bridgerton' AND \"episode\" = 'S1E1'),\n           DS_THETA(theta_uid) FILTER(WHERE \"show\" = 'Bridgerton' AND \"episode\" = 'S1E2')\n         )\n       ) AS users\nFROM ts_tutorial\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Count distinct with Theta sketches, filters, and set operations",src:a(77362).Z,width:"1250",height:"640"})),(0,o.kt)("p",null,"And finally, there is ",(0,o.kt)("inlineCode",{parentName:"p"},"THETA_SKETCH_NOT")," which computes the set difference of two or more segments.\nThe result describes how many visitors watched episode 1 of Bridgerton but not episode 2."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT THETA_SKETCH_ESTIMATE(\n         THETA_SKETCH_NOT(\n           DS_THETA(theta_uid) FILTER(WHERE \"show\" = 'Bridgerton' AND \"episode\" = 'S1E1'),\n           DS_THETA(theta_uid) FILTER(WHERE \"show\" = 'Bridgerton' AND \"episode\" = 'S1E2')\n         )\n       ) AS users\nFROM ts_tutorial\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Count distinct with Theta sketches, filters, and set operations",src:a(69418).Z,width:"1250",height:"640"})),(0,o.kt)("h2",{id:"conclusions"},"Conclusions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Counting distinct things for large data sets can be done with Theta sketches in Apache Druid."),(0,o.kt)("li",{parentName:"ul"},"This allows us to use rollup and discard the individual values, just retaining statistical approximations in the sketches."),(0,o.kt)("li",{parentName:"ul"},"With Theta sketch set operations, affinity analysis is easier, for example, to answer questions such as which segments correlate or overlap by how much.")),(0,o.kt)("h2",{id:"learn-more"},"Learn more"),(0,o.kt)("p",null,"See the following topics for more information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/31.0.0/development/extensions-core/datasketches-theta"},"Theta sketch")," for reference on ingestion and native queries on Theta sketches in Druid."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/31.0.0/querying/sql-scalar#theta-sketch-functions"},"Theta sketch scalar functions")," and ",(0,o.kt)("a",{parentName:"li",href:"/docs/31.0.0/querying/sql-aggregations#theta-sketch-functions"},"Theta sketch aggregation functions")," for Theta sketch functions in Druid SQL queries."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/31.0.0/ingestion/schema-design#sketches-for-high-cardinality-columns"},"Sketches for high cardinality columns")," for Druid schema design involving sketches."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/31.0.0/development/extensions-core/datasketches-extension"},"DataSketches extension")," for more information about the DataSketches extension in Druid as well as other available sketches."),(0,o.kt)("li",{parentName:"ul"},"The accuracy of queries using Theta sketches is governed by the size ",(0,o.kt)("em",{parentName:"li"},"k")," of the Theta sketch and by the operations you perform. See more details in the ",(0,o.kt)("a",{parentName:"li",href:"https://datasketches.apache.org/docs/Theta/ThetaAccuracy.html"},"Apache DataSketches documentation"),".")),(0,o.kt)("h2",{id:"acknowledgments"},"Acknowledgments"),(0,o.kt)("p",null,"This tutorial is adapted from a ",(0,o.kt)("a",{parentName:"p",href:"https://blog.hellmar-becker.de/2022/06/05/druid-data-cookbook-counting-unique-visitors-for-overlapping-segments/"},"blog post")," by community member Hellmar Becker."),(0,o.kt)("div",{className:"footnotes"},(0,o.kt)("hr",{parentName:"div"}),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol",id:"fn-1"},"Why 15 minutes and not just 1 hour? Intervals of 15 minutes work better with international timezones because those are not always aligned by hour. India, for instance, is 30 minutes off, and Nepal is even 45 minutes off. With 15 minute aggregates, you can get hourly sums for any of those timezones, too!",(0,o.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}m.isMDXComponent=!0},61449:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tutorial-theta-03-d396351338383bf3cbd248be97a7c9ae.png"},39165:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tutorial-theta-04-7c498583c84f25374a035507a41592da.png"},5932:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tutorial-theta-05-210059e731382527a704510b94d370d4.png"},51913:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tutorial-theta-06-4b588f7737377421937ed369bfe9a94e.png"},77362:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tutorial-theta-07-8c74460cb2ed72066ca3b0b3470657e0.png"},69418:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tutorial-theta-08-8d2ab89aef3d1661329ad060467e2f9b.png"}}]);
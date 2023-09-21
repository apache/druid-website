"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3934],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,y=p["".concat(u,".").concat(m)]||p[m]||c[m]||i;return n?r.createElement(y,l(l({ref:t},d),{},{components:n})):r.createElement(y,l({ref:t},d))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9183:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>u,default:()=>y,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={id:"sql-query-context",title:"SQL query context",sidebar_label:"SQL query context"},u=void 0,s={unversionedId:"querying/sql-query-context",id:"querying/sql-query-context",title:"SQL query context",description:"\x3c!--",source:"@site/docs/latest/querying/sql-query-context.md",sourceDirName:"querying",slug:"/querying/sql-query-context",permalink:"/docs/latest/querying/sql-query-context",draft:!1,tags:[],version:"current",frontMatter:{id:"sql-query-context",title:"SQL query context",sidebar_label:"SQL query context"},sidebar:"docs",previous:{title:"JDBC driver API",permalink:"/docs/latest/querying/sql-jdbc"},next:{title:"SQL metadata tables",permalink:"/docs/latest/querying/sql-metadata-tables"}},d={},p=[{value:"SQL query context parameters",id:"sql-query-context-parameters",level:2},{value:"Setting the query context",id:"setting-the-query-context",level:2},{value:"Example using JSON API",id:"example-using-json-api",level:3},{value:"Example using JDBC",id:"example-using-jdbc",level:3}],c={toc:p},m="wrapper";function y(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Apache Druid supports two query languages: Druid SQL and ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/querying/"},"native queries"),".\nThis document describes the SQL language.")),(0,i.kt)("p",null,"Druid supports query context parameters which affect ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/querying/sql"},"SQL query")," planning.\nSee ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/querying/query-context"},"Query context")," for general query context parameters for all query types."),(0,i.kt)("h2",{id:"sql-query-context-parameters"},"SQL query context parameters"),(0,i.kt)("p",null,"Configure Druid SQL query planning using the parameters in the table below."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"sqlQueryId")),(0,i.kt)("td",{parentName:"tr",align:null},"Unique identifier given to this SQL query. For HTTP client, it will be returned in ",(0,i.kt)("inlineCode",{parentName:"td"},"X-Druid-SQL-Query-Id")," header.",(0,i.kt)("br",null),(0,i.kt)("br",null),"To specify a unique identifier for SQL query, use ",(0,i.kt)("inlineCode",{parentName:"td"},"sqlQueryId")," instead of ",(0,i.kt)("a",{parentName:"td",href:"/docs/latest/querying/query-context"},(0,i.kt)("inlineCode",{parentName:"a"},"queryId")),". Setting ",(0,i.kt)("inlineCode",{parentName:"td"},"queryId")," for a SQL request has no effect. All native queries underlying SQL use an auto-generated ",(0,i.kt)("inlineCode",{parentName:"td"},"queryId"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"auto-generated")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"sqlTimeZone")),(0,i.kt)("td",{parentName:"tr",align:null},'Sets the time zone for this connection, which will affect how time functions and timestamp literals behave. Should be a time zone name like "America/Los_Angeles" or offset like "-08:00".'),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.sql.planner.sqlTimeZone")," on the Broker (default: UTC)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"sqlStringifyArrays")),(0,i.kt)("td",{parentName:"tr",align:null},"When set to true, result columns which return array values will be serialized into a JSON string in the response instead of as an array"),(0,i.kt)("td",{parentName:"tr",align:null},"true, except for JDBC connections, where it is always false")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"useApproximateCountDistinct")),(0,i.kt)("td",{parentName:"tr",align:null},"Whether to use an approximate cardinality algorithm for ",(0,i.kt)("inlineCode",{parentName:"td"},"COUNT(DISTINCT foo)"),"."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.sql.planner.useApproximateCountDistinct")," on the Broker (default: true)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"useGroupingSetForExactDistinct")),(0,i.kt)("td",{parentName:"tr",align:null},"Whether to use grouping sets to execute queries with multiple exact distinct aggregations."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.sql.planner.useGroupingSetForExactDistinct")," on the Broker (default: false)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"useApproximateTopN")),(0,i.kt)("td",{parentName:"tr",align:null},"Whether to use approximate ",(0,i.kt)("a",{parentName:"td",href:"/docs/latest/querying/topnquery"},"TopN queries")," when a SQL query could be expressed as such. If false, exact ",(0,i.kt)("a",{parentName:"td",href:"/docs/latest/querying/groupbyquery"},"GroupBy queries")," will be used instead."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.sql.planner.useApproximateTopN")," on the Broker (default: true)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"enableTimeBoundaryPlanning")),(0,i.kt)("td",{parentName:"tr",align:null},"If true, SQL queries will get converted to TimeBoundary queries wherever possible. TimeBoundary queries are very efficient for min-max calculation on __time column in a datasource"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.query.default.context.enableTimeBoundaryPlanning")," on the Broker (default: false)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"useNativeQueryExplain")),(0,i.kt)("td",{parentName:"tr",align:null},"If true, ",(0,i.kt)("inlineCode",{parentName:"td"},"EXPLAIN PLAN FOR")," will return the explain plan as a JSON representation of equivalent native query(s), else it will return the original version of explain plan generated by Calcite.",(0,i.kt)("br",null),(0,i.kt)("br",null),"This property is provided for backwards compatibility. It is not recommended to use this parameter unless you were depending on the older behavior."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.sql.planner.useNativeQueryExplain")," on the Broker (default: true)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"sqlFinalizeOuterSketches")),(0,i.kt)("td",{parentName:"tr",align:null},"If false (default behavior in Druid 25.0.0 and later), ",(0,i.kt)("inlineCode",{parentName:"td"},"DS_HLL"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"DS_THETA"),", and ",(0,i.kt)("inlineCode",{parentName:"td"},"DS_QUANTILES_SKETCH")," return sketches in query results, as documented. If true (default behavior in Druid 24.0.1 and earlier), sketches from these functions are finalized when they appear in query results.",(0,i.kt)("br",null),(0,i.kt)("br",null),"This property is provided for backwards compatibility with behavior in Druid 24.0.1 and earlier. It is not recommended to use this parameter unless you were depending on the older behavior. Instead, use a function that does not return a sketch, such as ",(0,i.kt)("inlineCode",{parentName:"td"},"APPROX_COUNT_DISTINCT_DS_HLL"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"APPROX_COUNT_DISTINCT_DS_THETA"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"APPROX_QUANTILE_DS"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"DS_THETA_ESTIMATE"),", or ",(0,i.kt)("inlineCode",{parentName:"td"},"DS_GET_QUANTILE"),"."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.query.default.context.sqlFinalizeOuterSketches")," on the Broker (default: false)")))),(0,i.kt)("h2",{id:"setting-the-query-context"},"Setting the query context"),(0,i.kt)("p",null,'The query context parameters can be specified as a "context" object in the ',(0,i.kt)("a",{parentName:"p",href:"/docs/latest/querying/sql-api"},"JSON API")," or as a ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/querying/sql-jdbc"},"JDBC connection properties object"),".\nSee examples for each option below."),(0,i.kt)("h3",{id:"example-using-json-api"},"Example using JSON API"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "query" : "SELECT COUNT(*) FROM data_source WHERE foo = \'bar\' AND __time > TIMESTAMP \'2000-01-01 00:00:00\'",\n  "context" : {\n    "sqlTimeZone" : "America/Los_Angeles"\n  }\n}\n')),(0,i.kt)("h3",{id:"example-using-jdbc"},"Example using JDBC"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'String url = "jdbc:avatica:remote:url=http://localhost:8082/druid/v2/sql/avatica/";\n\n// Set any query context parameters you need here.\nProperties connectionProperties = new Properties();\nconnectionProperties.setProperty("sqlTimeZone", "America/Los_Angeles");\nconnectionProperties.setProperty("useCache", "false");\n\ntry (Connection connection = DriverManager.getConnection(url, connectionProperties)) {\n  // create and execute statements, process result sets, etc\n}\n')))}y.isMDXComponent=!0}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5857],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>h});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(t),d=a,h=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return t?r.createElement(h,i(i({ref:n},p),{},{components:t})):r.createElement(h,i({ref:n},p))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(67294),a=t(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){var n=e.children,t=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:t},n)}},74866:(e,n,t)=>{t.d(n,{Z:()=>k});var r=t(87462),a=t(67294),o=t(86010),i=t(12466),l=t(16550),s=t(91980),u=t(67392),p=t(50012);function c(e){return function(e){var n,t;return null!=(n=null==(t=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(n=e.props)&&"object"==typeof n&&"value"in n)return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}function m(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:c(t);return function(e){var n=(0,u.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function d(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function h(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId,o=(0,l.k6)(),i=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:r});return[(0,s._X)(i),(0,a.useCallback)((function(e){if(i){var n=new URLSearchParams(o.location.search);n.set(i,e),o.replace(Object.assign({},o.location,{search:n.toString()}))}}),[i,o])]}function y(e){var n,t,r,o,i=e.defaultValue,l=e.queryString,s=void 0!==l&&l,u=e.groupId,c=m(e),y=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:c})})),v=y[0],T=y[1],f=h({queryString:s,groupId:u}),g=f[0],b=f[1],k=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),t=(0,p.Nk)(n),r=t[0],o=t[1],[r,(0,a.useCallback)((function(e){n&&o.set(e)}),[n,o])]),N=k[0],Z=k[1],S=function(){var e=null!=g?g:N;return d({value:e,tabValues:c})?e:null}();return(0,a.useLayoutEffect)((function(){S&&T(S)}),[S]),{selectedValue:v,selectValue:(0,a.useCallback)((function(e){if(!d({value:e,tabValues:c}))throw new Error("Can't select invalid tab value="+e);T(e),b(e),Z(e)}),[b,Z,c]),tabValues:c}}var v=t(72389);const T={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){var n=e.className,t=e.block,l=e.selectedValue,s=e.selectValue,u=e.tabValues,p=[],c=(0,i.o5)().blockElementScrollPositionUntilNextRender,m=function(e){var n=e.currentTarget,t=p.indexOf(n),r=u[t].value;r!==l&&(c(n),s(r))},d=function(e){var n,t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":var r,a=p.indexOf(e.currentTarget)+1;t=null!=(r=p[a])?r:p[0];break;case"ArrowLeft":var o,i=p.indexOf(e.currentTarget)-1;t=null!=(o=p[i])?o:p[p.length-1]}null==(n=t)||n.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},n)},u.map((function(e){var n=e.value,t=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,key:n,ref:function(e){return p.push(e)},onKeyDown:d,onClick:m},i,{className:(0,o.Z)("tabs__item",T.tabItem,null==i?void 0:i.className,{"tabs__item--active":l===n})}),null!=t?t:n)})))}function g(e){var n=e.lazy,t=e.children,r=e.selectedValue,o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var i=o.find((function(e){return e.props.value===r}));return i?(0,a.cloneElement)(i,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})})))}function b(e){var n=y(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",T.tabList)},a.createElement(f,(0,r.Z)({},e,n)),a.createElement(g,(0,r.Z)({},e,n)))}function k(e){var n=(0,v.Z)();return a.createElement(b,(0,r.Z)({key:String(n)},e))}},15350:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>p,default:()=>v,frontMatter:()=>u,metadata:()=>c,toc:()=>d});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=t(74866),l=t(85162),s=["components"],u={id:"json-querying-api",title:"JSON querying API",sidebar_label:"JSON querying"},p=void 0,c={unversionedId:"api-reference/json-querying-api",id:"api-reference/json-querying-api",title:"JSON querying API",description:"\x3c!--",source:"@site/docs/28.0.1/api-reference/json-querying-api.md",sourceDirName:"api-reference",slug:"/api-reference/json-querying-api",permalink:"/docs/28.0.1/api-reference/json-querying-api",draft:!1,tags:[],version:"current",frontMatter:{id:"json-querying-api",title:"JSON querying API",sidebar_label:"JSON querying"},sidebar:"docs",previous:{title:"SQL-based ingestion",permalink:"/docs/28.0.1/api-reference/sql-ingestion-api"},next:{title:"Tasks",permalink:"/docs/28.0.1/api-reference/tasks-api"}},m={},d=[{value:"Submit a query",id:"submit-a-query",level:2},{value:"URL",id:"url",level:3},{value:"Query parameters",id:"query-parameters",level:3},{value:"Responses",id:"responses",level:3},{value:"Example query: <code>topN</code>",id:"example-query-topn",level:3},{value:"Example response: <code>topN</code>",id:"example-response-topn",level:4},{value:"Example query: <code>groupBy</code>",id:"example-query-groupby",level:3},{value:"Example response: <code>groupBy</code>",id:"example-response-groupby",level:4},{value:"Get segment information for query",id:"get-segment-information-for-query",level:2},{value:"URL",id:"url-1",level:3},{value:"Query parameters",id:"query-parameters-1",level:3},{value:"Responses",id:"responses-1",level:3},{value:"Sample request",id:"sample-request",level:3},{value:"Sample response",id:"sample-response",level:3}],h={toc:d},y="wrapper";function v(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)(y,(0,r.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This topic describes the API endpoints to submit JSON-based ",(0,o.kt)("a",{parentName:"p",href:"/docs/28.0.1/querying/"},"native queries")," to Apache Druid."),(0,o.kt)("p",null,"In this topic, ",(0,o.kt)("inlineCode",{parentName:"p"},"http://SERVICE_IP:SERVICE_PORT")," is a placeholder for the server address of deployment and the service port. For example, on the quickstart configuration, replace ",(0,o.kt)("inlineCode",{parentName:"p"},"http://ROUTER_IP:ROUTER_PORT")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:8888"),"."),(0,o.kt)("h2",{id:"submit-a-query"},"Submit a query"),(0,o.kt)("p",null,"Submits a JSON-based native query. The body of the request is the native query itself."),(0,o.kt)("p",null,"Druid supports different types of queries for different use cases. All queries require the following properties:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"queryType"),": A string representing the type of query. Druid supports the following native query types: ",(0,o.kt)("inlineCode",{parentName:"li"},"timeseries"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"topN"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"groupBy"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"timeBoundaries"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"segmentMetadata"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"datasourceMetadata"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"scan"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"search"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"dataSource"),": A string or object defining the source of data to query. The most common value is the name of the datasource to query. For more information, see ",(0,o.kt)("a",{parentName:"li",href:"/docs/28.0.1/querying/datasource"},"Datasources"),".")),(0,o.kt)("p",null,"For additional properties based on your query type or use case, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/28.0.1/querying/#available-queries"},"available native queries"),"."),(0,o.kt)("h3",{id:"url"},"URL"),(0,o.kt)("code",{class:"postAPI"},"POST")," ",(0,o.kt)("code",null,"/druid/v2/"),(0,o.kt)("h3",{id:"query-parameters"},"Query parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pretty")," (optional)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Druid returns the response in a pretty-printed format using indentation and line breaks.")))),(0,o.kt)("h3",{id:"responses"},"Responses"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"1",label:"200 SUCCESS",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Successfully submitted query"))),(0,o.kt)(l.Z,{value:"2",label:"400 BAD REQUEST",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Error thrown due to bad query. Returns a JSON object detailing the error with the following format:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "error": "A well-defined error code.",\n    "errorMessage": "A message with additional details about the error.",\n    "errorClass": "Class of exception that caused this error.",\n    "host": "The host on which the error occurred."\n}\n')),(0,o.kt)("p",null,"For more information on possible error messages, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/28.0.1/querying/#query-execution-failures"},"query execution failures"),"."))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"example-query-topn"},"Example query: ",(0,o.kt)("inlineCode",{parentName:"h3"},"topN")),(0,o.kt)("p",null,"The following example shows a ",(0,o.kt)("inlineCode",{parentName:"p"},"topN")," query. The query analyzes the ",(0,o.kt)("inlineCode",{parentName:"p"},"social_media")," datasource to return the top five users from the ",(0,o.kt)("inlineCode",{parentName:"p"},"username")," dimension with the highest number of views from the ",(0,o.kt)("inlineCode",{parentName:"p"},"views")," metric."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"3",label:"cURL",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl "http://ROUTER_IP:ROUTER_PORT/druid/v2?pretty=null" \\\n--header \'Content-Type: application/json\' \\\n--data \'{\n  "queryType": "topN",\n  "dataSource": "social_media",\n  "dimension": "username",\n  "threshold": 5,\n  "metric": "views",\n  "granularity": "all",\n  "aggregations": [\n    {\n      "type": "longSum",\n      "name": "views",\n      "fieldName": "views"\n    }\n  ],\n  "intervals": [\n    "2022-01-01T00:00:00.000/2024-01-01T00:00:00.000"\n  ]\n}\'\n'))),(0,o.kt)(l.Z,{value:"4",label:"HTTP",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-HTTP"},'POST /druid/v2?pretty=null HTTP/1.1\nHost: http://ROUTER_IP:ROUTER_PORT\nContent-Type: application/json\nContent-Length: 336\n\n{\n  "queryType": "topN",\n  "dataSource": "social_media",\n  "dimension": "username",\n  "threshold": 5,\n  "metric": "views",\n  "granularity": "all",\n  "aggregations": [\n    {\n      "type": "longSum",\n      "name": "views",\n      "fieldName": "views"\n    }\n  ],\n  "intervals": [\n    "2022-01-01T00:00:00.000/2024-01-01T00:00:00.000"\n  ]\n}\n')))),(0,o.kt)("h4",{id:"example-response-topn"},"Example response: ",(0,o.kt)("inlineCode",{parentName:"h4"},"topN")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Click to show sample response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n      "timestamp": "2023-07-03T18:49:54.848Z",\n      "result": [\n          {\n              "views": 11591218026,\n              "username": "gus"\n          },\n          {\n              "views": 11578638578,\n              "username": "miette"\n          },\n          {\n              "views": 11561618880,\n              "username": "leon"\n          },\n          {\n              "views": 11552609824,\n              "username": "mia"\n          },\n          {\n              "views": 11551537517,\n              "username": "milton"\n          }\n      ]\n  }\n]\n'))),(0,o.kt)("h3",{id:"example-query-groupby"},"Example query: ",(0,o.kt)("inlineCode",{parentName:"h3"},"groupBy")),(0,o.kt)("p",null,"The following example submits a JSON query of the ",(0,o.kt)("inlineCode",{parentName:"p"},"groupBy")," type to retrieve the ",(0,o.kt)("inlineCode",{parentName:"p"},"username")," with the highest votes to posts ratio from the ",(0,o.kt)("inlineCode",{parentName:"p"},"social_media")," datasource."),(0,o.kt)("p",null,"In this query:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"upvoteSum")," aggregation calculates the sum of the ",(0,o.kt)("inlineCode",{parentName:"li"},"upvotes")," for each user."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"postCount")," aggregation calculates the sum of posts for each user."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"upvoteToPostRatio")," is a post-aggregation of the ",(0,o.kt)("inlineCode",{parentName:"li"},"upvoteSum")," and the ",(0,o.kt)("inlineCode",{parentName:"li"},"postCount"),", divided to calculate the ratio."),(0,o.kt)("li",{parentName:"ul"},"The result is sorted based on the ",(0,o.kt)("inlineCode",{parentName:"li"},"upvoteToPostRatio")," in descending order.")),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"5",label:"cURL",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl "http://ROUTER_IP:ROUTER_PORT/druid/v2" \\\n--header \'Content-Type: application/json\' \\\n--data \'{\n  "queryType": "groupBy",\n  "dataSource": "social_media",\n  "dimensions": ["username"],\n  "granularity": "all",\n  "aggregations": [\n    { "type": "doubleSum", "name": "upvoteSum", "fieldName": "upvotes" },\n    { "type": "count", "name": "postCount", "fieldName": "post_title" }\n  ],\n  "postAggregations": [\n    {\n      "type": "arithmetic",\n      "name": "upvoteToPostRatio",\n      "fn": "/",\n      "fields": [\n        { "type": "fieldAccess", "name": "upvoteSum", "fieldName": "upvoteSum" },\n        { "type": "fieldAccess", "name": "postCount", "fieldName": "postCount" }\n      ]\n    }\n  ],\n  "intervals": ["2022-01-01T00:00:00.000/2024-01-01T00:00:00.000"],\n  "limitSpec": {\n    "type": "default",\n    "limit": 1,\n    "columns": [\n      { "dimension": "upvoteToPostRatio", "direction": "descending" }\n    ]\n  }\n}\'\n'))),(0,o.kt)(l.Z,{value:"6",label:"HTTP",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-HTTP"},'POST /druid/v2?pretty=null HTTP/1.1\nHost: http://ROUTER_IP:ROUTER_PORT\nContent-Type: application/json\nContent-Length: 817\n\n{\n  "queryType": "groupBy",\n  "dataSource": "social_media",\n  "dimensions": ["username"],\n  "granularity": "all",\n  "aggregations": [\n    { "type": "doubleSum", "name": "upvoteSum", "fieldName": "upvotes" },\n    { "type": "count", "name": "postCount", "fieldName": "post_title" }\n  ],\n  "postAggregations": [\n    {\n      "type": "arithmetic",\n      "name": "upvoteToPostRatio",\n      "fn": "/",\n      "fields": [\n        { "type": "fieldAccess", "name": "upvoteSum", "fieldName": "upvoteSum" },\n        { "type": "fieldAccess", "name": "postCount", "fieldName": "postCount" }\n      ]\n    }\n  ],\n  "intervals": ["2022-01-01T00:00:00.000/2024-01-01T00:00:00.000"],\n  "limitSpec": {\n    "type": "default",\n    "limit": 1,\n    "columns": [\n      { "dimension": "upvoteToPostRatio", "direction": "descending" }\n    ]\n  }\n}\n')))),(0,o.kt)("h4",{id:"example-response-groupby"},"Example response: ",(0,o.kt)("inlineCode",{parentName:"h4"},"groupBy")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Click to show sample response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "version": "v1",\n        "timestamp": "2022-01-01T00:00:00.000Z",\n        "event": {\n            "upvoteSum": 8.0419541E7,\n            "upvoteToPostRatio": 69.53014661762697,\n            "postCount": 1156614,\n            "username": "miette"\n        }\n    }\n]\n'))),(0,o.kt)("h2",{id:"get-segment-information-for-query"},"Get segment information for query"),(0,o.kt)("p",null,"Retrieves an array that contains objects with segment information, including the server locations associated with the query provided in the request body."),(0,o.kt)("h3",{id:"url-1"},"URL"),(0,o.kt)("code",{class:"postAPI"},"POST")," ",(0,o.kt)("code",null,"/druid/v2/candidates/"),(0,o.kt)("h3",{id:"query-parameters-1"},"Query parameters"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"pretty")," (optional)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Druid returns the response in a pretty-printed format using indentation and line breaks.")))),(0,o.kt)("h3",{id:"responses-1"},"Responses"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"7",label:"200 SUCCESS",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Successfully retrieved segment information"))),(0,o.kt)(l.Z,{value:"8",label:"400 BAD REQUEST",mdxType:"TabItem"},(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Error thrown due to bad query. Returns a JSON object detailing the error with the following format:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "error": "A well-defined error code.",\n    "errorMessage": "A message with additional details about the error.",\n    "errorClass": "Class of exception that caused this error.",\n    "host": "The host on which the error occurred."\n}\n')),(0,o.kt)("p",null,"For more information on possible error messages, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/28.0.1/querying/#query-execution-failures"},"query execution failures"),"."))),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"sample-request"},"Sample request"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"9",label:"cURL",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl "http://ROUTER_IP:ROUTER_PORT/druid/v2/candidates" \\\n--header \'Content-Type: application/json\' \\\n--data \'{\n  "queryType": "topN",\n  "dataSource": "social_media",\n  "dimension": "username",\n  "threshold": 5,\n  "metric": "views",\n  "granularity": "all",\n  "aggregations": [\n    {\n      "type": "longSum",\n      "name": "views",\n      "fieldName": "views"\n    }\n  ],\n  "intervals": [\n    "2022-01-01T00:00:00.000/2024-01-01T00:00:00.000"\n  ]\n}\'\n'))),(0,o.kt)(l.Z,{value:"10",label:"HTTP",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-HTTP"},'POST /druid/v2/candidates HTTP/1.1\nHost: http://ROUTER_IP:ROUTER_PORT\nContent-Type: application/json\nContent-Length: 336\n\n{\n  "queryType": "topN",\n  "dataSource": "social_media",\n  "dimension": "username",\n  "threshold": 5,\n  "metric": "views",\n  "granularity": "all",\n\n  "aggregations": [\n    {\n      "type": "longSum",\n      "name": "views",\n      "fieldName": "views"\n    }\n  ],\n  "intervals": [\n    "2020-01-01T00:00:00.000/2024-01-01T00:00:00.000"\n  ]\n}\n')))),(0,o.kt)("h3",{id:"sample-response"},"Sample response"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Click to show sample response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n      "interval": "2023-07-03T18:00:00.000Z/2023-07-03T19:00:00.000Z",\n      "version": "2023-07-03T18:51:18.905Z",\n      "partitionNumber": 0,\n      "size": 21563693,\n      "locations": [\n          {\n              "name": "localhost:8083",\n              "host": "localhost:8083",\n              "hostAndTlsPort": null,\n              "maxSize": 300000000000,\n              "type": "historical",\n              "tier": "_default_tier",\n              "priority": 0\n          }\n      ]\n  },\n  {\n      "interval": "2023-07-03T19:00:00.000Z/2023-07-03T20:00:00.000Z",\n      "version": "2023-07-03T19:00:00.657Z",\n      "partitionNumber": 0,\n      "size": 6057236,\n      "locations": [\n          {\n              "name": "localhost:8083",\n              "host": "localhost:8083",\n              "hostAndTlsPort": null,\n              "maxSize": 300000000000,\n              "type": "historical",\n              "tier": "_default_tier",\n              "priority": 0\n          }\n      ]\n  },\n  {\n      "interval": "2023-07-05T21:00:00.000Z/2023-07-05T22:00:00.000Z",\n      "version": "2023-07-05T21:09:58.102Z",\n      "partitionNumber": 0,\n      "size": 223926186,\n      "locations": [\n          {\n              "name": "localhost:8083",\n              "host": "localhost:8083",\n              "hostAndTlsPort": null,\n              "maxSize": 300000000000,\n              "type": "historical",\n              "tier": "_default_tier",\n              "priority": 0\n          }\n      ]\n  },\n  {\n      "interval": "2023-07-05T21:00:00.000Z/2023-07-05T22:00:00.000Z",\n      "version": "2023-07-05T21:09:58.102Z",\n      "partitionNumber": 1,\n      "size": 20244827,\n      "locations": [\n          {\n              "name": "localhost:8083",\n              "host": "localhost:8083",\n              "hostAndTlsPort": null,\n              "maxSize": 300000000000,\n              "type": "historical",\n              "tier": "_default_tier",\n              "priority": 0\n          }\n      ]\n  },\n  {\n      "interval": "2023-07-05T22:00:00.000Z/2023-07-05T23:00:00.000Z",\n      "version": "2023-07-05T22:00:00.524Z",\n      "partitionNumber": 0,\n      "size": 104628051,\n      "locations": [\n          {\n              "name": "localhost:8083",\n              "host": "localhost:8083",\n              "hostAndTlsPort": null,\n              "maxSize": 300000000000,\n              "type": "historical",\n              "tier": "_default_tier",\n              "priority": 0\n          }\n      ]\n  },\n  {\n      "interval": "2023-07-05T22:00:00.000Z/2023-07-05T23:00:00.000Z",\n      "version": "2023-07-05T22:00:00.524Z",\n      "partitionNumber": 1,\n      "size": 1603995,\n      "locations": [\n          {\n              "name": "localhost:8083",\n              "host": "localhost:8083",\n              "hostAndTlsPort": null,\n              "maxSize": 300000000000,\n              "type": "historical",\n              "tier": "_default_tier",\n              "priority": 0\n          }\n      ]\n  },\n  {\n      "interval": "2023-07-05T23:00:00.000Z/2023-07-06T00:00:00.000Z",\n      "version": "2023-07-05T23:21:55.242Z",\n      "partitionNumber": 0,\n      "size": 181506843,\n      "locations": [\n          {\n              "name": "localhost:8083",\n              "host": "localhost:8083",\n              "hostAndTlsPort": null,\n              "maxSize": 300000000000,\n              "type": "historical",\n              "tier": "_default_tier",\n              "priority": 0\n          }\n      ]\n  },\n  {\n      "interval": "2023-07-06T00:00:00.000Z/2023-07-06T01:00:00.000Z",\n      "version": "2023-07-06T00:02:08.498Z",\n      "partitionNumber": 0,\n      "size": 9170974,\n      "locations": [\n          {\n              "name": "localhost:8083",\n              "host": "localhost:8083",\n              "hostAndTlsPort": null,\n              "maxSize": 300000000000,\n              "type": "historical",\n              "tier": "_default_tier",\n              "priority": 0\n          }\n      ]\n  },\n  {\n      "interval": "2023-07-06T00:00:00.000Z/2023-07-06T01:00:00.000Z",\n      "version": "2023-07-06T00:02:08.498Z",\n      "partitionNumber": 1,\n      "size": 23969632,\n      "locations": [\n          {\n              "name": "localhost:8083",\n              "host": "localhost:8083",\n              "hostAndTlsPort": null,\n              "maxSize": 300000000000,\n              "type": "historical",\n              "tier": "_default_tier",\n              "priority": 0\n          }\n      ]\n  },\n  {\n      "interval": "2023-07-06T01:00:00.000Z/2023-07-06T02:00:00.000Z",\n      "version": "2023-07-06T01:13:53.982Z",\n      "partitionNumber": 0,\n      "size": 599895,\n      "locations": [\n          {\n              "name": "localhost:8083",\n              "host": "localhost:8083",\n              "hostAndTlsPort": null,\n              "maxSize": 300000000000,\n              "type": "historical",\n              "tier": "_default_tier",\n              "priority": 0\n          }\n      ]\n  },\n  {\n      "interval": "2023-07-06T01:00:00.000Z/2023-07-06T02:00:00.000Z",\n      "version": "2023-07-06T01:13:53.982Z",\n      "partitionNumber": 1,\n      "size": 1627041,\n      "locations": [\n          {\n              "name": "localhost:8083",\n              "host": "localhost:8083",\n              "hostAndTlsPort": null,\n              "maxSize": 300000000000,\n              "type": "historical",\n              "tier": "_default_tier",\n              "priority": 0\n          }\n      ]\n  },\n  {\n      "interval": "2023-07-06T02:00:00.000Z/2023-07-06T03:00:00.000Z",\n      "version": "2023-07-06T02:55:50.701Z",\n      "partitionNumber": 0,\n      "size": 629753,\n      "locations": [\n          {\n              "name": "localhost:8083",\n              "host": "localhost:8083",\n              "hostAndTlsPort": null,\n              "maxSize": 300000000000,\n              "type": "historical",\n              "tier": "_default_tier",\n              "priority": 0\n          }\n      ]\n  },\n  {\n      "interval": "2023-07-06T02:00:00.000Z/2023-07-06T03:00:00.000Z",\n      "version": "2023-07-06T02:55:50.701Z",\n      "partitionNumber": 1,\n      "size": 1342360,\n      "locations": [\n          {\n              "name": "localhost:8083",\n              "host": "localhost:8083",\n              "hostAndTlsPort": null,\n              "maxSize": 300000000000,\n              "type": "historical",\n              "tier": "_default_tier",\n              "priority": 0\n          }\n      ]\n  },\n  {\n      "interval": "2023-07-06T04:00:00.000Z/2023-07-06T05:00:00.000Z",\n      "version": "2023-07-06T04:02:36.562Z",\n      "partitionNumber": 0,\n      "size": 2131434,\n      "locations": [\n          {\n              "name": "localhost:8083",\n              "host": "localhost:8083",\n              "hostAndTlsPort": null,\n              "maxSize": 300000000000,\n              "type": "historical",\n              "tier": "_default_tier",\n              "priority": 0\n          }\n      ]\n  },\n  {\n      "interval": "2023-07-06T05:00:00.000Z/2023-07-06T06:00:00.000Z",\n      "version": "2023-07-06T05:23:27.856Z",\n      "partitionNumber": 0,\n      "size": 797161,\n      "locations": [\n          {\n              "name": "localhost:8083",\n              "host": "localhost:8083",\n              "hostAndTlsPort": null,\n              "maxSize": 300000000000,\n              "type": "historical",\n              "tier": "_default_tier",\n              "priority": 0\n          }\n      ]\n  },\n  {\n      "interval": "2023-07-06T05:00:00.000Z/2023-07-06T06:00:00.000Z",\n      "version": "2023-07-06T05:23:27.856Z",\n      "partitionNumber": 1,\n      "size": 1176858,\n      "locations": [\n          {\n              "name": "localhost:8083",\n              "host": "localhost:8083",\n              "hostAndTlsPort": null,\n              "maxSize": 300000000000,\n              "type": "historical",\n              "tier": "_default_tier",\n              "priority": 0\n          }\n      ]\n  },\n  {\n      "interval": "2023-07-06T06:00:00.000Z/2023-07-06T07:00:00.000Z",\n      "version": "2023-07-06T06:46:34.638Z",\n      "partitionNumber": 0,\n      "size": 2148760,\n      "locations": [\n          {\n              "name": "localhost:8083",\n              "host": "localhost:8083",\n              "hostAndTlsPort": null,\n              "maxSize": 300000000000,\n              "type": "historical",\n              "tier": "_default_tier",\n              "priority": 0\n          }\n      ]\n  },\n  {\n      "interval": "2023-07-06T07:00:00.000Z/2023-07-06T08:00:00.000Z",\n      "version": "2023-07-06T07:38:28.050Z",\n      "partitionNumber": 0,\n      "size": 2040748,\n      "locations": [\n          {\n              "name": "localhost:8083",\n              "host": "localhost:8083",\n              "hostAndTlsPort": null,\n              "maxSize": 300000000000,\n              "type": "historical",\n              "tier": "_default_tier",\n              "priority": 0\n          }\n      ]\n  },\n  {\n      "interval": "2023-07-06T08:00:00.000Z/2023-07-06T09:00:00.000Z",\n      "version": "2023-07-06T08:27:31.407Z",\n      "partitionNumber": 0,\n      "size": 678723,\n      "locations": [\n          {\n              "name": "localhost:8083",\n              "host": "localhost:8083",\n              "hostAndTlsPort": null,\n              "maxSize": 300000000000,\n              "type": "historical",\n              "tier": "_default_tier",\n              "priority": 0\n          }\n      ]\n  },\n  {\n      "interval": "2023-07-06T08:00:00.000Z/2023-07-06T09:00:00.000Z",\n      "version": "2023-07-06T08:27:31.407Z",\n      "partitionNumber": 1,\n      "size": 1437866,\n      "locations": [\n          {\n              "name": "localhost:8083",\n              "host": "localhost:8083",\n              "hostAndTlsPort": null,\n              "maxSize": 300000000000,\n              "type": "historical",\n              "tier": "_default_tier",\n              "priority": 0\n          }\n      ]\n  },\n  {\n      "interval": "2023-07-06T10:00:00.000Z/2023-07-06T11:00:00.000Z",\n      "version": "2023-07-06T10:02:42.079Z",\n      "partitionNumber": 0,\n      "size": 1671296,\n      "locations": [\n          {\n              "name": "localhost:8083",\n              "host": "localhost:8083",\n              "hostAndTlsPort": null,\n              "maxSize": 300000000000,\n              "type": "historical",\n              "tier": "_default_tier",\n              "priority": 0\n          }\n      ]\n  },\n  {\n      "interval": "2023-07-06T11:00:00.000Z/2023-07-06T12:00:00.000Z",\n      "version": "2023-07-06T11:27:23.902Z",\n      "partitionNumber": 0,\n      "size": 574893,\n      "locations": [\n          {\n              "name": "localhost:8083",\n              "host": "localhost:8083",\n              "hostAndTlsPort": null,\n              "maxSize": 300000000000,\n              "type": "historical",\n              "tier": "_default_tier",\n              "priority": 0\n          }\n      ]\n  },\n  {\n      "interval": "2023-07-06T11:00:00.000Z/2023-07-06T12:00:00.000Z",\n      "version": "2023-07-06T11:27:23.902Z",\n      "partitionNumber": 1,\n      "size": 1427384,\n      "locations": [\n          {\n              "name": "localhost:8083",\n              "host": "localhost:8083",\n              "hostAndTlsPort": null,\n              "maxSize": 300000000000,\n              "type": "historical",\n              "tier": "_default_tier",\n              "priority": 0\n          }\n      ]\n  },\n  {\n      "interval": "2023-07-06T12:00:00.000Z/2023-07-06T13:00:00.000Z",\n      "version": "2023-07-06T12:52:00.846Z",\n      "partitionNumber": 0,\n      "size": 2115172,\n      "locations": [\n          {\n              "name": "localhost:8083",\n              "host": "localhost:8083",\n              "hostAndTlsPort": null,\n              "maxSize": 300000000000,\n              "type": "historical",\n              "tier": "_default_tier",\n              "priority": 0\n          }\n      ]\n  },\n  {\n      "interval": "2023-07-06T14:00:00.000Z/2023-07-06T15:00:00.000Z",\n      "version": "2023-07-06T14:32:33.926Z",\n      "partitionNumber": 0,\n      "size": 589108,\n      "locations": [\n          {\n              "name": "localhost:8083",\n              "host": "localhost:8083",\n              "hostAndTlsPort": null,\n              "maxSize": 300000000000,\n              "type": "historical",\n              "tier": "_default_tier",\n              "priority": 0\n          }\n      ]\n  },\n  {\n      "interval": "2023-07-06T14:00:00.000Z/2023-07-06T15:00:00.000Z",\n      "version": "2023-07-06T14:32:33.926Z",\n      "partitionNumber": 1,\n      "size": 1392649,\n      "locations": [\n          {\n              "name": "localhost:8083",\n              "host": "localhost:8083",\n              "hostAndTlsPort": null,\n              "maxSize": 300000000000,\n              "type": "historical",\n              "tier": "_default_tier",\n              "priority": 0\n          }\n      ]\n  },\n  {\n      "interval": "2023-07-06T15:00:00.000Z/2023-07-06T16:00:00.000Z",\n      "version": "2023-07-06T15:53:25.467Z",\n      "partitionNumber": 0,\n      "size": 2037851,\n      "locations": [\n          {\n              "name": "localhost:8083",\n              "host": "localhost:8083",\n              "hostAndTlsPort": null,\n              "maxSize": 300000000000,\n              "type": "historical",\n              "tier": "_default_tier",\n              "priority": 0\n          }\n      ]\n  },\n  {\n      "interval": "2023-07-06T16:00:00.000Z/2023-07-06T17:00:00.000Z",\n      "version": "2023-07-06T16:02:26.568Z",\n      "partitionNumber": 0,\n      "size": 230400650,\n      "locations": [\n          {\n              "name": "localhost:8083",\n              "host": "localhost:8083",\n              "hostAndTlsPort": null,\n              "maxSize": 300000000000,\n              "type": "historical",\n              "tier": "_default_tier",\n              "priority": 0\n          }\n      ]\n  },\n  {\n      "interval": "2023-07-06T16:00:00.000Z/2023-07-06T17:00:00.000Z",\n      "version": "2023-07-06T16:02:26.568Z",\n      "partitionNumber": 1,\n      "size": 38209056,\n      "locations": [\n          {\n              "name": "localhost:8083",\n              "host": "localhost:8083",\n              "hostAndTlsPort": null,\n              "maxSize": 300000000000,\n              "type": "historical",\n              "tier": "_default_tier",\n              "priority": 0\n          }\n      ]\n  },\n  {\n      "interval": "2023-07-06T17:00:00.000Z/2023-07-06T18:00:00.000Z",\n      "version": "2023-07-06T17:00:02.391Z",\n      "partitionNumber": 0,\n      "size": 211099463,\n      "locations": [\n          {\n              "name": "localhost:8083",\n              "host": "localhost:8083",\n              "hostAndTlsPort": null,\n              "maxSize": 300000000000,\n              "type": "historical",\n              "tier": "_default_tier",\n              "priority": 0\n          }\n      ]\n  }\n]\n'))))}v.isMDXComponent=!0}}]);
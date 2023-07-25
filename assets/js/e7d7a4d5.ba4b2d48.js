"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1661],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),g=i,d=p["".concat(l,".").concat(g)]||p[g]||m[g]||o;return n?r.createElement(d,a(a({ref:t},c),{},{components:n})):r.createElement(d,a({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},19092:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>u,toc:()=>p});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],s={id:"request-logging",title:"Request logging",sidebar_label:"Request logging"},l=void 0,u={unversionedId:"operations/request-logging",id:"operations/request-logging",title:"Request logging",description:"\x3c!--",source:"@site/docs/26.0.0/operations/request-logging.md",sourceDirName:"operations",slug:"/operations/request-logging",permalink:"/docs/26.0.0/operations/request-logging",draft:!1,tags:[],version:"current",frontMatter:{id:"request-logging",title:"Request logging",sidebar_label:"Request logging"},sidebar:"docs",previous:{title:"Automated metadata cleanup",permalink:"/docs/26.0.0/operations/clean-metadata-store"},next:{title:"Metrics",permalink:"/docs/26.0.0/operations/metrics"}},c={},p=[{value:"Configure request logging",id:"configure-request-logging",level:2},{value:"Configure metrics emission",id:"configure-metrics-emission",level:2},{value:"Example",id:"example",level:2},{value:"Learn more",id:"learn-more",level:2}],m={toc:p},g="wrapper";function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)(g,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"All Apache Druid services that can serve queries can also log the query requests they process.\nRequest logs contain information on query metrics, including execution time and memory usage.\nYou can use information in the request logs to monitor query performance, determine bottlenecks, and analyze and improve slow queries."),(0,o.kt)("p",null,"Request logging is disabled by default.\nThis topic describes how to configure Druid to generate request logs to track query metrics."),(0,o.kt)("h2",{id:"configure-request-logging"},"Configure request logging"),(0,o.kt)("p",null,"To enable request logging, determine the type of request logger to use, then set the configurations specific to the request logger type."),(0,o.kt)("p",null,"The following request logger types are available:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"noop"),": Disables request logging, the default behavior."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/26.0.0/configuration/#file-request-logging"},(0,o.kt)("inlineCode",{parentName:"a"},"file")),": Stores logs to disk."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/26.0.0/configuration/#emitter-request-logging"},(0,o.kt)("inlineCode",{parentName:"a"},"emitter")),": Logs request to an external location, which is configured through an emitter."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/26.0.0/configuration/#slf4j-request-logging"},(0,o.kt)("inlineCode",{parentName:"a"},"slf4j")),": Logs queries via the SLF4J Java logging API."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/26.0.0/configuration/#filtered-request-logging"},(0,o.kt)("inlineCode",{parentName:"a"},"filtered")),": Filters requests by query type or execution time before logging the filtered queries by the delegated request logger."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/26.0.0/configuration/#composing-request-logging"},(0,o.kt)("inlineCode",{parentName:"a"},"composing")),": Logs all requests to multiple request loggers."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/26.0.0/configuration/#switching-request-logging"},(0,o.kt)("inlineCode",{parentName:"a"},"switching")),": Logs native queries and SQL queries to separate request loggers.")),(0,o.kt)("p",null,"Define the type of request logger in ",(0,o.kt)("inlineCode",{parentName:"p"},"druid.request.logging.type"),".\nSee the ",(0,o.kt)("a",{parentName:"p",href:"/docs/26.0.0/configuration/#request-logging"},"Request logging configuration")," for properties to set for each type of request logger.\nSpecify these properties in the ",(0,o.kt)("inlineCode",{parentName:"p"},"common.runtime.properties")," file.\nYou must restart Druid for the changes to take effect."),(0,o.kt)("p",null,"Druid stores the results in the Broker logs, unless the request logging type is ",(0,o.kt)("inlineCode",{parentName:"p"},"emitter"),".\nIf you use emitter request logging, you must also configure metrics emission."),(0,o.kt)("h2",{id:"configure-metrics-emission"},"Configure metrics emission"),(0,o.kt)("p",null,"Druid includes various emitters to send metrics and alerts.\nTo emit query metrics, set ",(0,o.kt)("inlineCode",{parentName:"p"},"druid.request.logging.feed=emitter"),", and define the emitter type in the ",(0,o.kt)("inlineCode",{parentName:"p"},"druid.emitter")," property."),(0,o.kt)("p",null,"You can use any of the following emitters in Druid:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"noop"),": Disables metric emission, the default behavior."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/26.0.0/configuration/#logging-emitter-module"},(0,o.kt)("inlineCode",{parentName:"a"},"logging")),": Emits metrics to Log4j 2. See ",(0,o.kt)("a",{parentName:"li",href:"/docs/26.0.0/configuration/logging"},"Logging")," to configure Log4j 2 for use with Druid."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/26.0.0/configuration/#http-emitter-module"},(0,o.kt)("inlineCode",{parentName:"a"},"http")),": Sends HTTP ",(0,o.kt)("inlineCode",{parentName:"li"},"POST")," requests containing the metrics in JSON format to a user-defined endpoint."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/26.0.0/configuration/#parametrized-http-emitter-module"},(0,o.kt)("inlineCode",{parentName:"a"},"parametrized")),": Operates like the ",(0,o.kt)("inlineCode",{parentName:"li"},"http")," emitter but fine-tunes the recipient URL based on the event feed."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/26.0.0/configuration/#composing-emitter-module"},(0,o.kt)("inlineCode",{parentName:"a"},"composing")),": Emits metrics to multiple emitter types."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/26.0.0/configuration/#graphite-emitter"},(0,o.kt)("inlineCode",{parentName:"a"},"graphite")),": Emits metrics to a ",(0,o.kt)("a",{parentName:"li",href:"https://graphiteapp.org/"},"Graphite")," Carbon service.")),(0,o.kt)("p",null,"Specify these properties in the ",(0,o.kt)("inlineCode",{parentName:"p"},"common.runtime.properties")," file.\nSee the ",(0,o.kt)("a",{parentName:"p",href:"/docs/26.0.0/configuration/#metrics-emitters"},"Metrics emitters configuration")," for properties to set for each type of metrics emitter.\nYou must restart Druid for the changes to take effect."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"The following configuration shows how to enable request logging and post query metrics to the endpoint ",(0,o.kt)("inlineCode",{parentName:"p"},"http://example.com:8080/path"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"# Enable request logging and configure the emitter request logger\ndruid.request.logging.type=emitter\ndruid.request.logging.feed=myRequestLogFeed\n\n# Enable metrics emission and tell Druid where to emit messages\ndruid.emitter=http\ndruid.emitter.http.recipientBaseUrl=http://example.com:8080/path\n\n# Authenticate to the base URL, if needed\ndruid.emitter.http.basicAuthentication=username:password\n")),(0,o.kt)("p",null,"The following shows an example log emitter output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'[\n    {\n        "feed": "metrics",\n        "timestamp": "2022-01-06T20:32:06.628Z",\n        "service": "druid/broker",\n        "host": "localhost:8082",\n        "version": "2022.01.0-iap-SNAPSHOT",\n        "metric": "sqlQuery/bytes",\n        "value": 9351,\n        "dataSource": "[wikipedia]",\n        "id": "56e8317b-31cc-443d-b109-47f51b21d4c3",\n        "nativeQueryIds": "[2b9cbced-11fc-4d78-a58c-c42863dff3c8]",\n        "remoteAddress": "127.0.0.1",\n        "success": "true"\n    },\n    {\n        "feed": "myRequestLogFeed",\n        "timestamp": "2022-01-06T20:32:06.585Z",\n        "remoteAddr": "127.0.0.1",\n        "service": "druid/broker",\n        "sqlQueryContext":\n        {\n            "useApproximateCountDistinct": false,\n            "sqlQueryId": "56e8317b-31cc-443d-b109-47f51b21d4c3",\n            "useApproximateTopN": false,\n            "useCache": false,\n            "sqlOuterLimit": 101,\n            "populateCache": false,\n            "nativeQueryIds": "[2b9cbced-11fc-4d78-a58c-c42863dff3c8]"\n        },\n        "queryStats":\n        {\n            "sqlQuery/time": 43,\n            "sqlQuery/planningTimeMs": 5,\n            "sqlQuery/bytes": 9351,\n            "success": true,\n            "context":\n            {\n                "useApproximateCountDistinct": false,\n                "sqlQueryId": "56e8317b-31cc-443d-b109-47f51b21d4c3",\n                "useApproximateTopN": false,\n                "useCache": false,\n                "sqlOuterLimit": 101,\n                "populateCache": false,\n                "nativeQueryIds": "[2b9cbced-11fc-4d78-a58c-c42863dff3c8]"\n            },\n            "identity": "allowAll"\n        },\n        "query": null,\n        "host": "localhost:8082",\n        "sql": "SELECT * FROM wikipedia WHERE cityName = \'Buenos Aires\'"\n    },\n    {\n        "feed": "myRequestLogFeed",\n        "timestamp": "2022-01-06T20:32:07.652Z",\n        "remoteAddr": "",\n        "service": "druid/broker",\n        "sqlQueryContext":\n        {},\n        "queryStats":\n        {\n            "query/time": 16,\n            "query/bytes": -1,\n            "success": true,\n            "identity": "allowAll"\n        },\n        "query":\n        {\n            "queryType": "scan",\n            "dataSource":\n            {\n                "type": "table",\n                "name": "wikipedia"\n            },\n            "intervals":\n            {\n                "type": "intervals",\n                "intervals":\n                [\n                    "-146136543-09-08T08:23:32.096Z/146140482-04-24T15:36:27.903Z"\n                ]\n            },\n            "virtualColumns":\n            [\n                {\n                    "type": "expression",\n                    "name": "v0",\n                    "expression": "\'Buenos Aires\'",\n                    "outputType": "STRING"\n                }\n            ],\n            "resultFormat": "compactedList",\n            "batchSize": 20480,\n            "limit": 101,\n            "filter":\n            {\n                "type": "selector",\n                "dimension": "cityName",\n                "value": "Buenos Aires",\n                "extractionFn": null\n            },\n            "columns":\n            [\n                "__time",\n                "added",\n                "channel",\n                "comment",\n                "commentLength",\n                "countryIsoCode",\n                "countryName",\n                "deleted",\n                "delta",\n                "deltaBucket",\n                "diffUrl",\n                "flags",\n                "isAnonymous",\n                "isMinor",\n                "isNew",\n                "isRobot",\n                "isUnpatrolled",\n                "metroCode",\n                "namespace",\n                "page",\n                "regionIsoCode",\n                "regionName",\n                "user",\n                "v0"\n            ],\n            "legacy": false,\n            "context":\n            {\n                "populateCache": false,\n                "queryId": "62e3d373-6e50-41b4-873b-1e56347c2950",\n                "sqlOuterLimit": 101,\n                "sqlQueryId": "cbb3d519-aee9-4566-8920-dbbeab6269f5",\n                "useApproximateCountDistinct": false,\n                "useApproximateTopN": false,\n                "useCache": false\n            },\n            "descending": false,\n            "granularity":\n            {\n                "type": "all"\n            }\n        },\n        "host": "localhost:8082",\n        "sql": null\n    },\n    ...\n]\n')),(0,o.kt)("h2",{id:"learn-more"},"Learn more"),(0,o.kt)("p",null,"See the following topics for more information."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/26.0.0/operations/metrics#query-metrics"},"Query metrics")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/26.0.0/configuration/#request-logging"},"Request logging configuration")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/26.0.0/configuration/#metrics-emitters"},"Metrics emitters configuration"))))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[926],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var a=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var d=a.createContext({}),u=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(d.Provider,{value:n},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(t),c=l,f=s["".concat(d,".").concat(c)]||s[c]||m[c]||r;return t?a.createElement(f,o(o({ref:n},p),{},{components:t})):a.createElement(f,o({ref:n},p))}));function f(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=t.length,o=new Array(r);o[0]=c;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i[s]="string"==typeof e?e:l,o[1]=i;for(var u=2;u<r;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},38603:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>d,default:()=>f,frontMatter:()=>i,metadata:()=>u,toc:()=>s});var a=t(87462),l=t(63366),r=(t(67294),t(3905)),o=["components"],i={id:"dump-segment",title:"dump-segment tool"},d=void 0,u={unversionedId:"operations/dump-segment",id:"operations/dump-segment",title:"dump-segment tool",description:"\x3c!--",source:"@site/docs/28.0.0/operations/dump-segment.md",sourceDirName:"operations",slug:"/operations/dump-segment",permalink:"/docs/28.0.0/operations/dump-segment",draft:!1,tags:[],version:"current",frontMatter:{id:"dump-segment",title:"dump-segment tool"},sidebar:"docs",previous:{title:"Working with different versions of Apache Hadoop",permalink:"/docs/28.0.0/operations/other-hadoop"},next:{title:"reset-cluster tool",permalink:"/docs/28.0.0/operations/reset-cluster"}},p={},s=[{value:"Output format",id:"output-format",level:3},{value:"Data dumps",id:"data-dumps",level:4},{value:"Metadata dumps",id:"metadata-dumps",level:4},{value:"Bitmap dumps",id:"bitmap-dumps",level:4},{value:"Nested column dumps",id:"nested-column-dumps",level:4},{value:"Command line arguments",id:"command-line-arguments",level:3}],m={toc:s},c="wrapper";function f(e){var n=e.components,t=(0,l.Z)(e,o);return(0,r.kt)(c,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The DumpSegment tool can be used to dump the metadata or contents of an Apache Druid segment for debugging purposes. Note that the\ndump is not necessarily a full-fidelity translation of the segment. In particular, not all metadata is included, and\ncomplex metric values may not be complete."),(0,r.kt)("p",null,"To run the tool, point it at a segment directory and provide a file for writing output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'java -classpath "/my/druid/lib/*" -Ddruid.extensions.loadList="[]" org.apache.druid.cli.Main \\\n  tools dump-segment \\\n  --directory /home/druid/path/to/segment/ \\\n  --out /home/druid/output.txt\n')),(0,r.kt)("h3",{id:"output-format"},"Output format"),(0,r.kt)("h4",{id:"data-dumps"},"Data dumps"),(0,r.kt)("p",null,"By default, or with ",(0,r.kt)("inlineCode",{parentName:"p"},"--dump rows"),", this tool dumps rows of the segment as newline-separate JSON objects, with one\nobject per line, using the default serialization for each column. Normally all columns are included, but if you like,\nyou can limit the dump to specific columns with ",(0,r.kt)("inlineCode",{parentName:"p"},"--column name"),"."),(0,r.kt)("p",null,"For example, one line might look like this when pretty-printed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "__time": 1442018818771,\n  "added": 36,\n  "channel": "#en.wikipedia",\n  "cityName": null,\n  "comment": "added project",\n  "count": 1,\n  "countryIsoCode": null,\n  "countryName": null,\n  "deleted": 0,\n  "delta": 36,\n  "isAnonymous": "false",\n  "isMinor": "false",\n  "isNew": "false",\n  "isRobot": "false",\n  "isUnpatrolled": "false",\n  "iuser": "00001553",\n  "metroCode": null,\n  "namespace": "Talk",\n  "page": "Talk:Oswald Tilghman",\n  "regionIsoCode": null,\n  "regionName": null,\n  "user": "GELongstreet"\n}\n')),(0,r.kt)("h4",{id:"metadata-dumps"},"Metadata dumps"),(0,r.kt)("p",null,"With ",(0,r.kt)("inlineCode",{parentName:"p"},"--dump metadata"),", this tool dumps metadata instead of rows. Metadata dumps generated by this tool are in the same\nformat as returned by the ",(0,r.kt)("a",{parentName:"p",href:"/docs/28.0.0/querying/segmentmetadataquery"},"SegmentMetadata query"),"."),(0,r.kt)("h4",{id:"bitmap-dumps"},"Bitmap dumps"),(0,r.kt)("p",null,"With ",(0,r.kt)("inlineCode",{parentName:"p"},"--dump bitmaps"),', this tool will dump bitmap indexes instead of rows. Bitmap dumps generated by this tool include\ndictionary-encoded string columns only. The output contains a field "bitmapSerdeFactory" describing the type of bitmaps\nused in the segment, and a field "bitmaps" containing the bitmaps for each value of each column. These are base64\nencoded by default, but you can also dump them as lists of row numbers with ',(0,r.kt)("inlineCode",{parentName:"p"},"--decompress-bitmaps"),"."),(0,r.kt)("p",null,"Normally all columns are included, but if you like, you can limit the dump to specific columns with ",(0,r.kt)("inlineCode",{parentName:"p"},"--column name"),"."),(0,r.kt)("p",null,"Sample output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "bitmapSerdeFactory": {\n    "type": "roaring"\n  },\n  "bitmaps": {\n    "isRobot": {\n      "false": "//aExfu+Nv3X...",\n      "true": "gAl7OoRByQ..."\n    }\n  }\n}\n')),(0,r.kt)("h4",{id:"nested-column-dumps"},"Nested column dumps"),(0,r.kt)("p",null,"With ",(0,r.kt)("inlineCode",{parentName:"p"},"--dump nested"),", this tool can be used to examine Druid ",(0,r.kt)("a",{parentName:"p",href:"/docs/28.0.0/querying/nested-columns"},"nested columns"),". Using\n",(0,r.kt)("inlineCode",{parentName:"p"},"nested")," always requires exactly one ",(0,r.kt)("inlineCode",{parentName:"p"},"--column name")," argument, and takes an optional argument to specify a specific\nnested field in ",(0,r.kt)("a",{parentName:"p",href:"/docs/28.0.0/querying/sql-json-functions#jsonpath-syntax"},"JSONPath syntax"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"--nested-path $.path.to.field"),".\nIf ",(0,r.kt)("inlineCode",{parentName:"p"},"--nested-path")," is not specified, the output will contain the list of nested fields and their types, the global\nvalue dictionaries, and the list of null rows."),(0,r.kt)("p",null,"Sample output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "nest": {\n    "fields": [\n      {\n        "path": "$.x",\n        "types": [\n          "LONG"\n        ]\n      },\n      {\n        "path": "$.y",\n        "types": [\n          "DOUBLE"\n        ]\n      },\n      {\n        "path": "$.z",\n        "types": [\n          "STRING"\n        ]\n      }\n    ],\n    "dictionaries": {\n      "strings": [\n        {\n          "globalId": 0,\n          "value": null\n        },\n        {\n          "globalId": 1,\n          "value": "a"\n        },\n        {\n          "globalId": 2,\n          "value": "b"\n        }\n      ],\n      "longs": [\n        {\n          "globalId": 3,\n          "value": 100\n        },\n        {\n          "globalId": 4,\n          "value": 200\n        },\n        {\n          "globalId": 5,\n          "value": 400\n        }\n      ],\n      "doubles": [\n        {\n          "globalId": 6,\n          "value": 1.1\n        },\n        {\n          "globalId": 7,\n          "value": 2.2\n        },\n        {\n          "globalId": 8,\n          "value": 3.3\n        }\n      ],\n      "nullRows": []\n    }\n  }\n}\n')),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"--nested-path")," is specified, the output will instead contain the types of the nested field, the local value\ndictionary, including the 'global' dictionary id and value, the uncompressed bitmap index for each value (list of row\nnumbers which contain the value), and a dump of the column itself, which contains the row number, raw JSON form of the\nnested column itself, the local dictionary id of the field for that row, and the value for the field for the row."),(0,r.kt)("p",null,"Sample output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "bitmapSerdeFactory": {\n    "type": "roaring"\n  },\n  "nest": {\n    "$.x": {\n      "types": [\n        "LONG"\n      ],\n      "dictionary": [\n        {\n          "localId": 0,\n          "globalId": 0,\n          "value": null,\n          "rows": [\n            4\n          ]\n        },\n        {\n          "localId": 1,\n          "globalId": 3,\n          "value": "100",\n          "rows": [\n            3\n          ]\n        },\n        {\n          "localId": 2,\n          "globalId": 4,\n          "value": "200",\n          "rows": [\n            0,\n            2\n          ]\n        },\n        {\n          "localId": 3,\n          "globalId": 5,\n          "value": "400",\n          "rows": [\n            1\n          ]\n        }\n      ],\n      "column": [\n        {\n          "row": 0,\n          "raw": {\n            "x": 200,\n            "y": 2.2\n          },\n          "fieldId": 2,\n          "fieldValue": "200"\n        },\n        {\n          "row": 1,\n          "raw": {\n            "x": 400,\n            "y": 1.1,\n            "z": "a"\n          },\n          "fieldId": 3,\n          "fieldValue": "400"\n        },\n        {\n          "row": 2,\n          "raw": {\n            "x": 200,\n            "z": "b"\n          },\n          "fieldId": 2,\n          "fieldValue": "200"\n        },\n        {\n          "row": 3,\n          "raw": {\n            "x": 100,\n            "y": 1.1,\n            "z": "a"\n          },\n          "fieldId": 1,\n          "fieldValue": "100"\n        },\n        {\n          "row": 4,\n          "raw": {\n            "y": 3.3,\n            "z": "b"\n          },\n          "fieldId": 0,\n          "fieldValue": null\n        }\n      ]\n    }\n  }\n}\n')),(0,r.kt)("h3",{id:"command-line-arguments"},"Command line arguments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"argument"),(0,r.kt)("th",{parentName:"tr",align:null},"description"),(0,r.kt)("th",{parentName:"tr",align:null},"required?"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--directory file"),(0,r.kt)("td",{parentName:"tr",align:null},'Directory containing segment data. This could be generated by unzipping an "index.zip" from deep storage.'),(0,r.kt)("td",{parentName:"tr",align:null},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--output file"),(0,r.kt)("td",{parentName:"tr",align:null},"File to write to, or omit to write to stdout."),(0,r.kt)("td",{parentName:"tr",align:null},"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--dump TYPE"),(0,r.kt)("td",{parentName:"tr",align:null},"Dump either 'rows' (default), 'metadata', 'bitmaps', or 'nested' for examining nested columns."),(0,r.kt)("td",{parentName:"tr",align:null},"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--column columnName"),(0,r.kt)("td",{parentName:"tr",align:null},"Column to include. Specify multiple times for multiple columns, or omit to include all columns."),(0,r.kt)("td",{parentName:"tr",align:null},"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--filter json"),(0,r.kt)("td",{parentName:"tr",align:null},"JSON-encoded ",(0,r.kt)("a",{parentName:"td",href:"/docs/28.0.0/querying/filters"},"query filter"),". Omit to include all rows. Only used if dumping rows."),(0,r.kt)("td",{parentName:"tr",align:null},"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--time-iso8601"),(0,r.kt)("td",{parentName:"tr",align:null},"Format __time column in ISO8601 format rather than long. Only used if dumping rows."),(0,r.kt)("td",{parentName:"tr",align:null},"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--decompress-bitmaps"),(0,r.kt)("td",{parentName:"tr",align:null},"Dump bitmaps as arrays rather than base64-encoded compressed bitmaps. Only used if dumping bitmaps."),(0,r.kt)("td",{parentName:"tr",align:null},"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"--nested-path"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify a specific nested column field using ",(0,r.kt)("a",{parentName:"td",href:"/docs/28.0.0/querying/sql-json-functions#jsonpath-syntax"},"JSONPath syntax"),". Only used if dumping a nested column."),(0,r.kt)("td",{parentName:"tr",align:null},"no")))))}f.isMDXComponent=!0}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4606],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),p=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(a),h=n,u=c["".concat(l,".").concat(h)]||c[h]||m[h]||r;return a?i.createElement(u,o(o({ref:t},d),{},{components:a})):i.createElement(u,o({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}h.displayName="MDXCreateElement"},1950:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var i=a(87462),n=a(63366),r=(a(67294),a(3905)),o=["components"],s={id:"tutorial-batch-native",title:"Load data with native batch ingestion",sidebar_label:"Load data with native batch ingestion"},l=void 0,p={unversionedId:"tutorials/tutorial-batch-native",id:"tutorials/tutorial-batch-native",title:"Load data with native batch ingestion",description:"\x3c!--",source:"@site/docs/28.0.1/tutorials/tutorial-batch-native.md",sourceDirName:"tutorials",slug:"/tutorials/tutorial-batch-native",permalink:"/docs/28.0.1/tutorials/tutorial-batch-native",draft:!1,tags:[],version:"current",frontMatter:{id:"tutorial-batch-native",title:"Load data with native batch ingestion",sidebar_label:"Load data with native batch ingestion"}},d={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Load data",id:"load-data",level:2},{value:"Query the data",id:"query-the-data",level:2}],m={toc:c},h="wrapper";function u(e){var t=e.components,s=(0,n.Z)(e,o);return(0,r.kt)(h,(0,i.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This topic shows you how to load and query data files in Apache Druid using its native batch ingestion feature. "),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Install Druid, start up Druid services, and open the web console as described in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/28.0.1/tutorials/"},"Druid quickstart"),"."),(0,r.kt)("h2",{id:"load-data"},"Load data"),(0,r.kt)("p",null,"Ingestion specs define the schema of the data Druid reads and stores. You can write ingestion specs by hand or using the ",(0,r.kt)("em",{parentName:"p"},"data loader"),",\nas we'll do here to perform batch file loading with Druid's native batch ingestion."),(0,r.kt)("p",null,"The Druid distribution bundles sample data we can use. The sample data located in ",(0,r.kt)("inlineCode",{parentName:"p"},"quickstart/tutorial/wikiticker-2015-09-12-sampled.json.gz"),"\nin the Druid root directory represents Wikipedia page edits for a given day. "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Load data")," from the web console header (",(0,r.kt)("img",{alt:"Load data",src:a(68255).Z,width:"95",height:"23"}),").")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the ",(0,r.kt)("strong",{parentName:"p"},"Local disk")," tile and then click ",(0,r.kt)("strong",{parentName:"p"},"Connect data"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Data loader init",src:a(44533).Z,title:"Data loader init",width:"1250",height:"740"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enter the following values: "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Base directory"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"quickstart/tutorial/"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"File filter"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"wikiticker-2015-09-12-sampled.json.gz")," "))),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Data location",src:a(55110).Z,title:"Data location",width:"1250",height:"740"})),(0,r.kt)("p",{parentName:"li"},"Entering the base directory and ",(0,r.kt)("a",{parentName:"p",href:"https://commons.apache.org/proper/commons-io/apidocs/org/apache/commons/io/filefilter/WildcardFileFilter.html"},"wildcard file filter")," separately, as afforded by the UI, allows you to specify multiple files for ingestion at once.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Apply"),". "),(0,r.kt)("p",{parentName:"li"},"The data loader displays the raw data, giving you a chance to verify that the data\nappears as expected. "),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Data loader sample",src:a(18018).Z,title:"Data loader sample",width:"1250",height:"740"})),(0,r.kt)("p",{parentName:"li"},"Notice that your position in the sequence of steps to load data, ",(0,r.kt)("strong",{parentName:"p"},"Connect")," in our case, appears at the top of the console, as shown below.\nYou can click other steps to move forward or backward in the sequence at any time."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Load data",src:a(34213).Z,width:"1175",height:"78"}),"  "))),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Next: Parse data"),". "),(0,r.kt)("p",{parentName:"li"},"The data loader tries to determine the parser appropriate for the data format automatically. In this case\nit identifies the data format as ",(0,r.kt)("inlineCode",{parentName:"p"},"json"),", as shown in the ",(0,r.kt)("strong",{parentName:"p"},"Input format")," field at the bottom right."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Data loader parse data",src:a(73186).Z,title:"Data loader parse data",width:"1250",height:"740"})),(0,r.kt)("p",{parentName:"li"},"Feel free to select other ",(0,r.kt)("strong",{parentName:"p"},"Input format")," options to get a sense of their configuration settings\nand how Druid parses other types of data.  ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"With the JSON parser selected, click ",(0,r.kt)("strong",{parentName:"p"},"Next: Parse time"),". The ",(0,r.kt)("strong",{parentName:"p"},"Parse time")," settings are where you view and adjust the\nprimary timestamp column for the data."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Data loader parse time",src:a(6224).Z,title:"Data loader parse time",width:"1250",height:"740"})),(0,r.kt)("p",{parentName:"li"},"Druid requires data to have a primary timestamp column (internally stored in a column called ",(0,r.kt)("inlineCode",{parentName:"p"},"__time"),").\nIf you do not have a timestamp in your data, select ",(0,r.kt)("inlineCode",{parentName:"p"},"Constant value"),". In our example, the data loader\ndetermines that the ",(0,r.kt)("inlineCode",{parentName:"p"},"time")," column is the only candidate that can be used as the primary time column.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Next: Transform"),", ",(0,r.kt)("strong",{parentName:"p"},"Next: Filter"),", and then ",(0,r.kt)("strong",{parentName:"p"},"Next: Configure schema"),", skipping a few steps."),(0,r.kt)("p",{parentName:"li"},"You do not need to adjust transformation or filtering settings, as applying ingestion time transforms and\nfilters are out of scope for this tutorial.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The Configure schema settings are where you configure what ",(0,r.kt)("a",{parentName:"p",href:"/docs/28.0.1/ingestion/schema-model#dimensions"},"dimensions"),"\nand ",(0,r.kt)("a",{parentName:"p",href:"/docs/28.0.1/ingestion/schema-model#metrics"},"metrics")," are ingested. The outcome of this configuration represents exactly how the\ndata will appear in Druid after ingestion. "),(0,r.kt)("p",{parentName:"li"},"Since our dataset is very small, you can turn off ",(0,r.kt)("a",{parentName:"p",href:"/docs/28.0.1/ingestion/rollup"},"rollup"),"\nby unsetting the ",(0,r.kt)("strong",{parentName:"p"},"Rollup")," switch and confirming the change when prompted."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Data loader schema",src:a(46297).Z,title:"Data loader schema",width:"1250",height:"740"})))),(0,r.kt)("ol",{start:9},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Next: Partition")," to configure how the data will be split into segments. In this case, choose ",(0,r.kt)("inlineCode",{parentName:"p"},"DAY")," as the ",(0,r.kt)("strong",{parentName:"p"},"Segment granularity"),". "),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Data loader partition",src:a(48790).Z,title:"Data loader partition",width:"1250",height:"740"})),(0,r.kt)("p",{parentName:"li"},"Since this is a small dataset, we can have just a single segment, which is what selecting ",(0,r.kt)("inlineCode",{parentName:"p"},"DAY")," as the\nsegment granularity gives us. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Next: Tune")," and ",(0,r.kt)("strong",{parentName:"p"},"Next: Publish"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The Publish settings are where you specify the datasource name in Druid. Let's change the default name from  ",(0,r.kt)("inlineCode",{parentName:"p"},"wikiticker-2015-09-12-sampled")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"wikipedia"),". "),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Data loader publish",src:a(22246).Z,title:"Data loader publish",width:"1250",height:"740"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Next: Edit spec")," to review the ingestion spec we've constructed with the data loader. "),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Data loader spec",src:a(75247).Z,title:"Data loader spec",width:"1250",height:"740"})),(0,r.kt)("p",{parentName:"li"},"Feel free to go back and change settings from previous steps to see how doing so updates the spec.\nSimilarly, you can edit the spec directly and see it reflected in the previous steps. "),(0,r.kt)("p",{parentName:"li"},"For other ways to load ingestion specs in Druid, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/28.0.1/tutorials/tutorial-batch"},"Tutorial: Loading a file"),". ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once you are satisfied with the spec, click ",(0,r.kt)("strong",{parentName:"p"},"Submit"),"."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'The new task for our wikipedia datasource now appears in the Ingestion view. \n\n![Tasks view](../assets/tutorial-batch-data-loader-09.png "Tasks view")\n\nThe task may take a minute or two to complete. When done, the task status should be "SUCCESS", with\nthe duration of the task indicated. Note that the view is set to automatically \nrefresh, so you do not need to refresh the browser to see the status change.\n\nA successful task means that one or more segments have been built and are now picked up by our data servers.\n')),(0,r.kt)("h2",{id:"query-the-data"},"Query the data"),(0,r.kt)("p",null,"You can now see the data as a datasource in the console and try out a query, as follows: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Datasources")," from the console header. "),(0,r.kt)("p",{parentName:"li"},'If the wikipedia datasource doesn\'t appear, wait a few moments for the segment to finish loading. A datasource is\nqueryable once it is shown to be "Fully available" in the ',(0,r.kt)("strong",{parentName:"p"},"Availability")," column. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"When the datasource is available, open the Actions menu (",(0,r.kt)("img",{alt:"Actions",src:a(69787).Z,width:"23",height:"21"}),") for that\ndatasource and choose ",(0,r.kt)("strong",{parentName:"p"},"Query with SQL"),"."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Datasource view",src:a(92801).Z,title:"Datasource view",width:"1250",height:"740"})))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"}," Notice the other actions you can perform for a datasource, including configuring retention rules, compaction, and more.")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the prepopulated query, ",(0,r.kt)("inlineCode",{parentName:"p"},'SELECT * FROM "wikipedia"')," to see the results."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Query view",src:a(4041).Z,title:"Query view",width:"1250",height:"740"})))))}u.isMDXComponent=!0},69787:(e,t,a)=>{a.d(t,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAVCAYAAACt4nWrAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAF6ADAAQAAAABAAAAFQAAAADcJ4LJAAACiklEQVQ4EbWVvYsTQRjGn9lvczlzkUONeChcLk1ERIygIGdhcXiIYmFnZWWhnYX/hI1WNtopllfcFQcKEhTUxkJPvYBFDk/F0+QSdLNf4zsTs9lsNh8iTpHdndn3977zPO9s2JFTCxz/aWh/xQ18cB5QCANTVLqwoeFjw7nnQt+bR+rQaei5PLytDWw/vgfutWSypCxjwbnvYUdxHpkzV6Bm9hC4iu0n98EdG1CUJK6cGw0PPJgzRWQWrkIxJ+B8rqC+dAvOlwqYanTBnKyLyTQ4bSeMtJ0onYNipSF20Cw/hLP5oRdMXjBNp4heD4bDqRqmmaT1HIFdAmpQd073QIQX2u4DmJy/3CknvA6Hy9e4BEM2LIexvwimm+BuS2quT88ge/4GmVwAvRiCxc1wzWmXwjTvWxVaNked4cI8eBjZizfhVN/A/7GJ9MlLsosazx4BAbWp2q13KFzArHwJxr4COOkqh6LBmj0Ga+44JXNIKh1+Ywv226dyc1HVB8JFoFU4ganFa2DUJRBw6gZGcHmQ/ID8MBDYTdRX78L5tC49aVfQ/k2Eh+CzETB1DSeQTXJoUznSK4D79SN+vl6Fs7HWBxb4PngIXrxOFafaFQswaV9buYPW+gsy1JKlSVMpieiipNEzKzWWUvSD6wS23z+X/SwKkINOJ0PXwHiCEM59H+bsUdK4H1xbuQ17rSw1loCoa3Fi5DlMK05uunQBSmoyIsUv1JZj4EjwqNsQzuk0+s3v1A06aWpIjevLpPG7SMWjaLH1UBZG+jXKD+TnQU3vQvPlEpzKK7I88nGKBY96ZD3/ROQ8p1PGSCOxk0FdMAraWQ8rlxOM3P9zfMf0rMNJvIaaJ67+4+Rvz6X7Gy+xq1sAAAAASUVORK5CYII="},68255:(e,t,a)=>{a.d(t,{Z:()=>i});const i="data:image/png;base64,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"},44533:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/tutorial-batch-data-loader-01-6c69bcaeea1649df6343a9b9a9f25780.png"},55110:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/tutorial-batch-data-loader-015-55d94d89e0b3a4edf0c1e23bc283b6f1.png"},18018:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/tutorial-batch-data-loader-02-716ba72a06f10d39340e20fb710f2230.png"},73186:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/tutorial-batch-data-loader-03-58febe17527a612312c8477ed7ebc2a5.png"},6224:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/tutorial-batch-data-loader-04-fa86ea0f7b9e1790fb2d0db1a05093a8.png"},46297:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/tutorial-batch-data-loader-05-d0c53acd1380865082797b0714f77f5a.png"},48790:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/tutorial-batch-data-loader-06-4eb248fe1e79b55b2e9419715d55b761.png"},22246:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/tutorial-batch-data-loader-07-384d6ae7af33910e131a46564b7e6677.png"},75247:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/tutorial-batch-data-loader-08-ed6704712050c56e866d3b5c53395fcf.png"},92801:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/tutorial-batch-data-loader-10-3020349a4bc011d974ff49effac64f6f.png"},4041:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/tutorial-batch-data-loader-11-e176f4b04d11f4cd667780fef55aceaf.png"},34213:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/tutorial-batch-data-loader-12-220d0ea9d5e2b5549721db29e5ca7260.png"}}]);
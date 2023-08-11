"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3400],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),p=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(r),u=n,m=c["".concat(s,".").concat(u)]||c[u]||h[u]||a;return r?o.createElement(m,i(i({ref:t},d),{},{components:r})):o.createElement(m,i({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},73752:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var o=r(87462),n=r(63366),a=(r(67294),r(3905)),i=["components"],l={id:"zookeeper",title:"ZooKeeper"},s=void 0,p={unversionedId:"dependencies/zookeeper",id:"dependencies/zookeeper",title:"ZooKeeper",description:"\x3c!--",source:"@site/docs/latest/dependencies/zookeeper.md",sourceDirName:"dependencies",slug:"/dependencies/zookeeper",permalink:"/docs/latest/dependencies/zookeeper",draft:!1,tags:[],version:"current",frontMatter:{id:"zookeeper",title:"ZooKeeper"}},d={},c=[{value:"Minimum ZooKeeper versions",id:"minimum-zookeeper-versions",level:2},{value:"ZooKeeper Operations",id:"zookeeper-operations",level:2},{value:"Coordinator Leader Election",id:"coordinator-leader-election",level:2},{value:"Segment &quot;publishing&quot; protocol from Historical and Realtime",id:"segment-publishing-protocol-from-historical-and-realtime",level:2},{value:"Segment load/drop protocol between Coordinator and Historical",id:"segment-loaddrop-protocol-between-coordinator-and-historical",level:2}],h={toc:c},u="wrapper";function m(e){var t=e.components,r=(0,n.Z)(e,i);return(0,a.kt)(u,(0,o.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Apache Druid uses ",(0,a.kt)("a",{parentName:"p",href:"http://zookeeper.apache.org/"},"Apache ZooKeeper")," (ZK) for management of current cluster state."),(0,a.kt)("h2",{id:"minimum-zookeeper-versions"},"Minimum ZooKeeper versions"),(0,a.kt)("p",null,"Apache Druid supports ZooKeeper versions 3.5.x and above."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: Starting with Apache Druid 0.22.0, support for ZooKeeper 3.4.x has been removed")),(0,a.kt)("h2",{id:"zookeeper-operations"},"ZooKeeper Operations"),(0,a.kt)("p",null,"The operations that happen over ZK are"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/docs/latest/design/coordinator"},"Coordinator")," leader election"),(0,a.kt)("li",{parentName:"ol"},'Segment "publishing" protocol from ',(0,a.kt)("a",{parentName:"li",href:"/docs/latest/design/historical"},"Historical")),(0,a.kt)("li",{parentName:"ol"},"Segment load/drop protocol between ",(0,a.kt)("a",{parentName:"li",href:"/docs/latest/design/coordinator"},"Coordinator")," and ",(0,a.kt)("a",{parentName:"li",href:"/docs/latest/design/historical"},"Historical")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/docs/latest/design/overlord"},"Overlord")," leader election"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/docs/latest/design/overlord"},"Overlord")," and ",(0,a.kt)("a",{parentName:"li",href:"/docs/latest/design/middlemanager"},"MiddleManager")," task management")),(0,a.kt)("h2",{id:"coordinator-leader-election"},"Coordinator Leader Election"),(0,a.kt)("p",null,"We use the Curator ",(0,a.kt)("a",{parentName:"p",href:"https://curator.apache.org/curator-recipes/leader-latch.html"},"LeaderLatch")," recipe to perform leader election at path"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"${druid.zk.paths.coordinatorPath}/_COORDINATOR\n")),(0,a.kt)("h2",{id:"segment-publishing-protocol-from-historical-and-realtime"},'Segment "publishing" protocol from Historical and Realtime'),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"announcementsPath")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"servedSegmentsPath")," are used for this."),(0,a.kt)("p",null,"All ",(0,a.kt)("a",{parentName:"p",href:"/docs/latest/design/historical"},"Historical")," processes publish themselves on the ",(0,a.kt)("inlineCode",{parentName:"p"},"announcementsPath"),", specifically, they will create an ephemeral znode at"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"${druid.zk.paths.announcementsPath}/${druid.host}\n")),(0,a.kt)("p",null,"Which signifies that they exist. They will also subsequently create a permanent znode at"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"${druid.zk.paths.servedSegmentsPath}/${druid.host}\n")),(0,a.kt)("p",null,"And as they load up segments, they will attach ephemeral znodes that look like"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"${druid.zk.paths.servedSegmentsPath}/${druid.host}/_segment_identifier_\n")),(0,a.kt)("p",null,"Processes like the ",(0,a.kt)("a",{parentName:"p",href:"/docs/latest/design/coordinator"},"Coordinator")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/latest/design/broker"},"Broker")," can then watch these paths to see which processes are currently serving which segments."),(0,a.kt)("h2",{id:"segment-loaddrop-protocol-between-coordinator-and-historical"},"Segment load/drop protocol between Coordinator and Historical"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"loadQueuePath")," is used for this."),(0,a.kt)("p",null,"When the ",(0,a.kt)("a",{parentName:"p",href:"/docs/latest/design/coordinator"},"Coordinator")," decides that a ",(0,a.kt)("a",{parentName:"p",href:"/docs/latest/design/historical"},"Historical")," process should load or drop a segment, it writes an ephemeral znode to"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"${druid.zk.paths.loadQueuePath}/_host_of_historical_process/_segment_identifier\n")),(0,a.kt)("p",null,"This znode will contain a payload that indicates to the Historical process what it should do with the given segment. When the Historical process is done with the work, it will delete the znode in order to signify to the Coordinator that it is complete."))}m.isMDXComponent=!0}}]);
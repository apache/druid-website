"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4300],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>h});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=a.createContext({}),s=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=s(e.components);return a.createElement(c.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=n,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return t?a.createElement(h,o(o({ref:r},p),{},{components:t})):a.createElement(h,o({ref:r},p))}));function h(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},63487:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=t(87462),n=t(63366),i=(t(67294),t(3905)),o=["components"],l={id:"high-availability",title:"High availability"},c=void 0,s={unversionedId:"operations/high-availability",id:"operations/high-availability",title:"High availability",description:"\x3c!--",source:"@site/docs/latest/operations/high-availability.md",sourceDirName:"operations",slug:"/operations/high-availability",permalink:"/docs/latest/operations/high-availability",draft:!1,tags:[],version:"current",frontMatter:{id:"high-availability",title:"High availability"},sidebar:"docs",previous:{title:"API reference",permalink:"/docs/latest/operations/api-reference"},next:{title:"Rolling updates",permalink:"/docs/latest/operations/rolling-updates"}},p={},u=[],d={toc:u},m="wrapper";function h(e){var r=e.components,t=(0,n.Z)(e,o);return(0,i.kt)(m,(0,a.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Apache ZooKeeper, metadata store, the coordinator, the overlord, and brokers are recommended to set up a high availability environment."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"For highly-available ZooKeeper, you will need a cluster of 3 or 5 ZooKeeper nodes.\nWe recommend either installing ZooKeeper on its own hardware, or running 3 or 5 Master servers (where overlords or coordinators are running)\nand configuring ZooKeeper on them appropriately. See the ",(0,i.kt)("a",{parentName:"li",href:"https://zookeeper.apache.org/doc/current/zookeeperAdmin"},"ZooKeeper admin guide")," for more details."),(0,i.kt)("li",{parentName:"ul"},"For highly-available metadata storage, we recommend MySQL or PostgreSQL with replication and failover enabled.\nSee ",(0,i.kt)("a",{parentName:"li",href:"https://www.mysql.com/products/enterprise/high_availability.html"},"MySQL Enterprise High Availability")," and ",(0,i.kt)("a",{parentName:"li",href:"https://www.postgresql.org/docs/current/high-availability.html"},"PostgreSQL's High Availability, Load Balancing, and Replication")," for more information."),(0,i.kt)("li",{parentName:"ul"},"For highly-available Apache Druid Coordinators and Overlords, we recommend to run multiple servers.\nIf they are all configured to use the same ZooKeeper cluster and metadata storage,\nthen they will automatically failover between each other as necessary.\nOnly one will be active at a time, but inactive servers will redirect to the currently active server."),(0,i.kt)("li",{parentName:"ul"},"Druid Brokers can be scaled out and all running servers will be active and queryable.\nWe recommend placing them behind a load balancer.")))}h.isMDXComponent=!0}}]);
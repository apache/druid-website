"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1659],{14137:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=d(n),u=a,g=c["".concat(l,".").concat(u)]||c[u]||p[u]||i;return n?r.createElement(g,o(o({ref:t},m),{},{components:n})):r.createElement(g,o({ref:t},m))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},94129:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>g,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var r=n(87462),a=n(63366),i=(n(67294),n(14137)),o=["components"],s={id:"release-notes",title:"Release notes"},l=void 0,d={unversionedId:"release-info/release-notes",id:"release-info/release-notes",title:"Release notes",description:"\x3c!--",source:"@site/docs/31.0.0/release-info/release-notes.md",sourceDirName:"release-info",slug:"/release-info/release-notes",permalink:"/docs/31.0.0/release-info/release-notes",draft:!1,tags:[],version:"current",frontMatter:{id:"release-notes",title:"Release notes"},sidebar:"docs",previous:{title:"Experimental features",permalink:"/docs/31.0.0/development/experimental"},next:{title:"Upgrade notes",permalink:"/docs/31.0.0/release-info/upgrade-notes"}},m={},c=[{value:"Important features, changes, and deprecations",id:"important-features-changes-and-deprecations",level:2},{value:"Functional area and related changes",id:"functional-area-and-related-changes",level:2},{value:"Web console",id:"web-console",level:3},{value:"Other web console improvements",id:"other-web-console-improvements",level:4},{value:"Ingestion",id:"ingestion",level:3},{value:"SQL-based ingestion",id:"sql-based-ingestion",level:4},{value:"Other SQL-based ingestion improvements",id:"other-sql-based-ingestion-improvements",level:5},{value:"Streaming ingestion",id:"streaming-ingestion",level:4},{value:"Other streaming ingestion improvements",id:"other-streaming-ingestion-improvements",level:5},{value:"Querying",id:"querying",level:3},{value:"Other querying improvements",id:"other-querying-improvements",level:4},{value:"Cluster management",id:"cluster-management",level:3},{value:"Other cluster management improvements",id:"other-cluster-management-improvements",level:4},{value:"Data management",id:"data-management",level:3},{value:"Other data management improvements",id:"other-data-management-improvements",level:4},{value:"Metrics and monitoring",id:"metrics-and-monitoring",level:3},{value:"Extensions",id:"extensions",level:3},{value:"Documentation improvements",id:"documentation-improvements",level:3},{value:"Upgrade notes and incompatible changes",id:"upgrade-notes-and-incompatible-changes",level:2},{value:"Upgrade notes",id:"upgrade-notes",level:3},{value:"Front-coded dictionaries",id:"front-coded-dictionaries",level:4},{value:"Incompatible changes",id:"incompatible-changes",level:3},{value:"Developer notes",id:"developer-notes",level:3},{value:"Dependency updates",id:"dependency-updates",level:4}],p={toc:c},u="wrapper";function g(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Apache Druid 31.0.0 contains over $NUMBER_FEATURES new features, bug fixes, performance enhancements, documentation improvements, and additional test coverage from $NUMBER_OF_CONTRIBUTORS contributors."),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/druid/issues?q=is%3Aclosed+milestone%3A%7B%7BMILESTONE%7D%7D+sort%3Aupdated-desc+"},"complete set of changes")," for additional details, including bug fixes."),(0,i.kt)("p",null,"Review the ",(0,i.kt)("a",{parentName:"p",href:"#upgrade-notes"},"upgrade notes")," and ",(0,i.kt)("a",{parentName:"p",href:"#incompatible-changes"},"incompatible changes")," before you upgrade to Druid 31.0.0.\nIf you are upgrading across multiple versions, see the ",(0,i.kt)("a",{parentName:"p",href:"/docs/31.0.0/release-info/upgrade-notes"},"Upgrade notes")," page, which lists upgrade notes for the most recent Druid versions."),(0,i.kt)("h2",{id:"important-features-changes-and-deprecations"},"Important features, changes, and deprecations"),(0,i.kt)("p",null,"This section contains important information about new and existing features."),(0,i.kt)("h2",{id:"functional-area-and-related-changes"},"Functional area and related changes"),(0,i.kt)("p",null,"This section contains detailed release notes separated by areas."),(0,i.kt)("h3",{id:"web-console"},"Web console"),(0,i.kt)("h4",{id:"other-web-console-improvements"},"Other web console improvements"),(0,i.kt)("h3",{id:"ingestion"},"Ingestion"),(0,i.kt)("h4",{id:"sql-based-ingestion"},"SQL-based ingestion"),(0,i.kt)("h5",{id:"other-sql-based-ingestion-improvements"},"Other SQL-based ingestion improvements"),(0,i.kt)("h4",{id:"streaming-ingestion"},"Streaming ingestion"),(0,i.kt)("h5",{id:"other-streaming-ingestion-improvements"},"Other streaming ingestion improvements"),(0,i.kt)("h3",{id:"querying"},"Querying"),(0,i.kt)("h4",{id:"other-querying-improvements"},"Other querying improvements"),(0,i.kt)("h3",{id:"cluster-management"},"Cluster management"),(0,i.kt)("h4",{id:"other-cluster-management-improvements"},"Other cluster management improvements"),(0,i.kt)("h3",{id:"data-management"},"Data management"),(0,i.kt)("h4",{id:"other-data-management-improvements"},"Other data management improvements"),(0,i.kt)("h3",{id:"metrics-and-monitoring"},"Metrics and monitoring"),(0,i.kt)("h3",{id:"extensions"},"Extensions"),(0,i.kt)("h3",{id:"documentation-improvements"},"Documentation improvements"),(0,i.kt)("h2",{id:"upgrade-notes-and-incompatible-changes"},"Upgrade notes and incompatible changes"),(0,i.kt)("h3",{id:"upgrade-notes"},"Upgrade notes"),(0,i.kt)("h4",{id:"front-coded-dictionaries"},"Front-coded dictionaries"),(0,i.kt)("p",null,"In Druid 32.0.0, the front coded dictionaries feature will be turned on by default. Front-coded dictionaries reduce storage and improve performance by optimizing for strings where the front part looks similar."),(0,i.kt)("p",null,"Once this feature is on, you cannot easily downgrade to an earlier version that does not support the feature. "),(0,i.kt)("p",null,"For more information, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/31.0.0/release-info/migr-front-coded-dict"},"Migration guide: front-coded dictionaries"),"."),(0,i.kt)("p",null,"If you're already using this feature, you don't need to take any action. "),(0,i.kt)("h3",{id:"incompatible-changes"},"Incompatible changes"),(0,i.kt)("h3",{id:"developer-notes"},"Developer notes"),(0,i.kt)("h4",{id:"dependency-updates"},"Dependency updates"),(0,i.kt)("p",null,"The following dependencies have had their versions bumped:"))}g.isMDXComponent=!0}}]);
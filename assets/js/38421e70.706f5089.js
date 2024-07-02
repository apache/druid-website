"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4501],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var i=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,o=function(e,t){if(null==e)return{};var r,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=i.createContext({}),d=function(e){var t=i.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=d(e.components);return i.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=d(r),f=o,g=c["".concat(u,".").concat(f)]||c[f]||m[f]||n;return r?i.createElement(g,a(a({ref:t},l),{},{components:r})):i.createElement(g,a({ref:t},l))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,a=new Array(n);a[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var d=2;d<n;d++)a[d]=r[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}f.displayName="MDXCreateElement"},85007:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>u,default:()=>g,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var i=r(87462),o=r(63366),n=(r(67294),r(3905)),a=["components"],s={id:"migration-guide",title:"Migration guides",description:"How to migrate from legacy features to get the most from Druid updates"},u=void 0,d={unversionedId:"release-info/migration-guide",id:"release-info/migration-guide",title:"Migration guides",description:"How to migrate from legacy features to get the most from Druid updates",source:"@site/docs/latest/release-info/migration-guide.md",sourceDirName:"release-info",slug:"/release-info/migration-guide",permalink:"/docs/latest/release-info/migration-guide",draft:!1,tags:[],version:"current",frontMatter:{id:"migration-guide",title:"Migration guides",description:"How to migrate from legacy features to get the most from Druid updates"},sidebar:"docs",previous:{title:"Upgrade notes",permalink:"/docs/latest/release-info/upgrade-notes"},next:{title:"Front-coded dictionaries",permalink:"/docs/latest/release-info/migr-front-coded-dict"}},l={},c=[{value:"Migrate from multi-value dimensions to arrays",id:"migrate-from-multi-value-dimensions-to-arrays",level:2},{value:"Migrate to front-coded dictionary encoding",id:"migrate-to-front-coded-dictionary-encoding",level:2},{value:"Migrate from <code>maxSubqueryRows</code> to <code>maxSubqueryBytes</code>",id:"migrate-from-maxsubqueryrows-to-maxsubquerybytes",level:2}],m={toc:c},f="wrapper";function g(e){var t=e.components,r=(0,o.Z)(e,a);return(0,n.kt)(f,(0,i.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In general, when we introduce new features and behaviors into Apache Druid, we make every effort to avoid breaking existing features when introducing new behaviors. However, sometimes there are either bugs or performance limitations with the old behaviors that are not possible to fix in a backward-compatible way. In these cases, we must introduce breaking changes for the future maintainability of Druid. "),(0,n.kt)("p",null,"The guides in this section outline breaking changes introduced in Druid 25.0.0 and later. Each guide provides instructions to migrate to new features."),(0,n.kt)("h2",{id:"migrate-from-multi-value-dimensions-to-arrays"},"Migrate from multi-value dimensions to arrays"),(0,n.kt)("p",null,"Druid now supports SQL-compliant array types. Whenever possible, you should use the array type over multi-value dimensions. See ",(0,n.kt)("a",{parentName:"p",href:"/docs/latest/release-info/migr-mvd-array"},"Migration guide: MVDs to arrays"),"."),(0,n.kt)("h2",{id:"migrate-to-front-coded-dictionary-encoding"},"Migrate to front-coded dictionary encoding"),(0,n.kt)("p",null,"Druid encodes string columns into dictionaries for better compression. Front-coded dictionary encoding reduces storage and improves performance by optimizing for strings that share similar beginning substrings. See ",(0,n.kt)("a",{parentName:"p",href:"/docs/latest/release-info/migr-front-coded-dict"},"Migration guide: front-coded dictionaries")," for more information."),(0,n.kt)("h2",{id:"migrate-from-maxsubqueryrows-to-maxsubquerybytes"},"Migrate from ",(0,n.kt)("inlineCode",{parentName:"h2"},"maxSubqueryRows")," to ",(0,n.kt)("inlineCode",{parentName:"h2"},"maxSubqueryBytes")),(0,n.kt)("p",null,"Druid allows you to set a byte-based limit on subquery size to prevent Brokers from running out of memory when handling large subqueries. The byte-based subquery limit overrides Druid's row-based subquery limit. We recommend that you move towards using byte-based limits starting in Druid 30.0.0. See ",(0,n.kt)("a",{parentName:"p",href:"/docs/latest/release-info/migr-subquery-limit"},"Migration guide: subquery limit")," for more information."))}g.isMDXComponent=!0}}]);
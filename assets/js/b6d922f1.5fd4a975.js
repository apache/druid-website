(self.webpackChunk=self.webpackChunk||[]).push([[9076],{3905:(e,r,t)=>{"use strict";t.d(r,{Zo:()=>p,kt:()=>w});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var d=a.createContext({}),l=function(e){var r=a.useContext(d),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=l(e.components);return a.createElement(d.Provider,{value:r},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},h=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=l(t),h=n,w=c["".concat(d,".").concat(h)]||c[h]||u[h]||i;return t?a.createElement(w,s(s({ref:r},p),{},{components:t})):a.createElement(w,s({ref:r},p))}));function w(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,s=new Array(i);s[0]=h;var o={};for(var d in r)hasOwnProperty.call(r,d)&&(o[d]=r[d]);o.originalType=e,o[c]="string"==typeof e?e:n,s[1]=o;for(var l=2;l<i;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},95383:(e,r,t)=>{"use strict";t.r(r),t.d(r,{contentTitle:()=>l,default:()=>w,frontMatter:()=>d,metadata:()=>p,toc:()=>c});var a=t(87462),n=t(63366),i=(t(67294),t(3905)),s=t(60701),o=["components"],d={title:"Download"},l=void 0,p={type:"mdx",permalink:"/downloads",source:"@site/src/pages/downloads.mdx",title:"Download",description:"Latest release",frontMatter:{title:"Download"}},c=[{value:"Latest release",id:"latest-release",level:2},{value:"Get started",id:"get-started",level:2},{value:"Optional dependencies",id:"optional-dependencies",level:2},{value:"MySQL JDBC Driver",id:"mysql-jdbc-driver",level:3},{value:"Release candidates",id:"release-candidates",level:2},{value:"Older releases",id:"older-releases",level:2}],u={toc:c},h="wrapper";function w(e){var r=e.components,t=(0,n.Z)(e,o);return(0,i.kt)(h,(0,a.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"latest-release"},"Latest release"),(0,i.kt)("p",null,"The latest Apache Druid stable release is ",s.w[0].version,"."),(0,i.kt)("ul",null,(0,i.kt)("li",null,"Release date: ",s.w[0].date),(0,i.kt)("li",null,"Binary download: ",(0,i.kt)("a",{href:"https://www.apache.org/dyn/closer.cgi?path=/druid/"+s.w[0].version+"/apache-druid-"+s.w[0].version+"-bin.tar.gz"},"apache-druid-",s.w[0].version,"-bin.tar.gz")," (",(0,i.kt)("a",{href:"https://www.apache.org/dist/druid/"+s.w[0].version+"/apache-druid-"+s.w[0].version+"-bin.tar.gz.sha512"},"sha512"),", ",(0,i.kt)("a",{href:"https://www.apache.org/dist/druid/"+s.w[0].version+"/apache-druid-"+s.w[0].version+"-bin.tar.gz.asc"},"pgp"),")"),(0,i.kt)("li",null,"Source download: ",(0,i.kt)("a",{href:"https://www.apache.org/dyn/closer.cgi?path=/druid/"+s.w[0].version+"/apache-druid-"+s.w[0].version+"-src.tar.gz"},"apache-druid-",s.w[0].version,"-src.tar.gz")," (",(0,i.kt)("a",{href:"https://www.apache.org/dist/druid/"+s.w[0].version+"/apache-druid-"+s.w[0].version+"-src.tar.gz.sha512"},"sha512"),", ",(0,i.kt)("a",{href:"https://www.apache.org/dist/druid/"+s.w[0].version+"/apache-druid-"+s.w[0].version+"-src.tar.gz.asc"},"pgp"),")"),(0,i.kt)("li",null,"Release notes: ",(0,i.kt)("a",{href:"https://github.com/apache/druid/releases/tag/druid-"+s.w[0].version},s.w[0].version))),(0,i.kt)("p",null,"You should verify your download by following these ",(0,i.kt)("a",{parentName:"p",href:"https://www.apache.org/info/verification.html"},"procedures")," and using these ",(0,i.kt)("a",{parentName:"p",href:"https://www.apache.org/dist/druid/KEYS"},"KEYS"),"."),(0,i.kt)("p",null,"To learn more about releases, please visit the ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/development/versioning"},"versioning page"),"."),(0,i.kt)("h2",{id:"get-started"},"Get started"),(0,i.kt)("p",null,"To get started with Druid, visit the ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/tutorials/"},"quickstart"),"."),(0,i.kt)("h2",{id:"optional-dependencies"},"Optional dependencies"),(0,i.kt)("h3",{id:"mysql-jdbc-driver"},"MySQL JDBC Driver"),(0,i.kt)("p",null,"Due to licensing considerations, the MySQL metadata store extension does not include the required MySQL JDBC driver which\nmust be downloaded separately. Please see the ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/development/extensions-core/mysql"},"documentation")," for instructions on how to include this library."),(0,i.kt)("h2",{id:"release-candidates"},"Release candidates"),(0,i.kt)("p",null,"Release candidates are announced on the ",(0,i.kt)("a",{parentName:"p",href:"https://lists.apache.org/list.html?dev@druid.apache.org"},"Druid dev mailing list"),"."),(0,i.kt)("p",null,"If you are interested in being notified of upcoming release candidates and being involved in the dev community (e.g. validating and approving RC builds), you can subscribe to the list by emailing: ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"mailto:dev-subscribe@druid.apache.org"},"dev-subscribe@druid.apache.org"))),(0,i.kt)("p",null,"Previous discussions are available in the ",(0,i.kt)("a",{parentName:"p",href:"https://lists.apache.org/list.html?dev@druid.apache.org"},"Apache Mail Archives"),"."),(0,i.kt)("h2",{id:"older-releases"},"Older releases"),(0,i.kt)("p",null,"The previous major release branch of Apache Druid was ",s.w[1].version,"."),(0,i.kt)("h3",null,s.w[1].version),(0,i.kt)("ul",null,(0,i.kt)("li",null,"Release date: ",s.w[1].date),(0,i.kt)("li",null,"Binary download: ",(0,i.kt)("a",{href:"https://www.apache.org/dyn/closer.cgi?path=/druid/"+s.w[1].version+"/apache-druid-"+s.w[1].version+"-bin.tar.gz"},"apache-druid-",s.w[1].version,"-bin.tar.gz")," (",(0,i.kt)("a",{href:"https://www.apache.org/dist/druid/"+s.w[1].version+"/apache-druid-"+s.w[1].version+"-bin.tar.gz.sha512"},"sha512"),", ",(0,i.kt)("a",{href:"https://www.apache.org/dist/druid/"+s.w[1].version+"/apache-druid-"+s.w[1].version+"-bin.tar.gz.asc"},"pgp"),")"),(0,i.kt)("li",null,"Source download: ",(0,i.kt)("a",{href:"https://www.apache.org/dyn/closer.cgi?path=/druid/"+s.w[1].version+"/apache-druid-"+s.w[1].version+"-src.tar.gz"},"apache-druid-",s.w[1].version,"-src.tar.gz")," (",(0,i.kt)("a",{href:"https://www.apache.org/dist/druid/"+s.w[1].version+"/apache-druid-"+s.w[1].version+"-src.tar.gz.sha512"},"sha512"),", ",(0,i.kt)("a",{href:"https://www.apache.org/dist/druid/"+s.w[1].version+"/apache-druid-"+s.w[1].version+"-src.tar.gz.asc"},"pgp"),")"),(0,i.kt)("li",null,"Release notes: ",(0,i.kt)("a",{href:"https://github.com/apache/druid/releases/tag/druid-"+s.w[1].version},s.w[1].version))),(0,i.kt)("p",null,"All other releases of Apache Druid are available at the ",(0,i.kt)("a",{parentName:"p",href:"https://archive.apache.org/dist/druid/"},"Apache Druid release archives"),"."),(0,i.kt)("p",null,"Archived versions of releases made while Druid was under the Apache Incubator are available at ",(0,i.kt)("a",{parentName:"p",href:"https://archive.apache.org/dist/incubator/druid/"},"Apache Druid (incubating) release archives"),"."))}w.isMDXComponent=!0},60701:e=>{e.exports.w=[{version:"30.0.1",date:"Sep 17 2024"},{version:"29.0.1",date:"Apr 3 2024"},{version:"28.0.1",date:"Dec 20 2023"}]}}]);
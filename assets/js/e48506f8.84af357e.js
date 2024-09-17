"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7786],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=u(r),f=o,m=l["".concat(p,".").concat(f)]||l[f]||d[f]||a;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[l]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},14259:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>m,frontMatter:()=>c,metadata:()=>u,toc:()=>l});var n=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],c={id:"kubernetes",title:"kubernetes"},p=void 0,u={unversionedId:"operations/kubernetes",id:"operations/kubernetes",title:"kubernetes",description:"\x3c!--",source:"@site/docs/30.0.1/operations/kubernetes.md",sourceDirName:"operations",slug:"/operations/kubernetes",permalink:"/docs/30.0.1/operations/kubernetes",draft:!1,tags:[],version:"current",frontMatter:{id:"kubernetes",title:"kubernetes"}},s={},l=[],d={toc:l},f="wrapper";function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)(f,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Apache Druid distribution is also available as ",(0,a.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker")," image from ",(0,a.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/apache/druid"},"Docker Hub")," . For example, you can obtain latest release using the command below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ docker pull apache/druid\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/datainfrahq/druid-operator"},"druid-operator")," can be used to manage a Druid cluster on ",(0,a.kt)("a",{parentName:"p",href:"https://kubernetes.io/"},"Kubernetes")," ."),(0,a.kt)("p",null,"Druid clusters deployed on Kubernetes can function without Zookeeper using ",(0,a.kt)("a",{parentName:"p",href:"/docs/30.0.1/development/extensions-core/kubernetes"},"druid\u2013kubernetes-extensions")," ."))}m.isMDXComponent=!0}}]);
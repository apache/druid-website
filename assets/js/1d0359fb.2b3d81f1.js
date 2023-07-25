"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7274],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=i,g=p["".concat(s,".").concat(h)]||p[h]||c[h]||r;return n?a.createElement(g,o(o({ref:t},d),{},{components:n})):a.createElement(g,o({ref:t},d))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},75237:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],l={id:"druid-ranger-security",title:"Apache Ranger Security"},s=void 0,u={unversionedId:"development/extensions-core/druid-ranger-security",id:"development/extensions-core/druid-ranger-security",title:"Apache Ranger Security",description:"\x3c!--",source:"@site/docs/latest/development/extensions-core/druid-ranger-security.md",sourceDirName:"development/extensions-core",slug:"/development/extensions-core/druid-ranger-security",permalink:"/docs/latest/development/extensions-core/druid-ranger-security",draft:!1,tags:[],version:"current",frontMatter:{id:"druid-ranger-security",title:"Apache Ranger Security"}},d={},p=[{value:"Configuration",id:"configuration",level:2},{value:"Enabling the extension",id:"enabling-the-extension",level:3},{value:"Properties to configure the extension in Apache Druid",id:"properties-to-configure-the-extension-in-apache-druid",level:4},{value:"Configuring the connection to Apache Ranger",id:"configuring-the-connection-to-apache-ranger",level:3},{value:"Adding the service definition for Apache Druid to Apache Ranger",id:"adding-the-service-definition-for-apache-druid-to-apache-ranger",level:3},{value:"Configuring Apache Ranger policies",id:"configuring-apache-ranger-policies",level:4},{value:"Usage",id:"usage",level:2},{value:"HTTP methods",id:"http-methods",level:3},{value:"SQL Permissions",id:"sql-permissions",level:3},{value:"Debugging",id:"debugging",level:3}],c={toc:p},h="wrapper";function g(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)(h,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This Apache Druid extension adds an Authorizer which implements access control for Druid, backed by ",(0,r.kt)("a",{parentName:"p",href:"https://ranger.apache.org/"},"Apache Ranger"),". Please see ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/design/auth"},"Authentication and Authorization")," for more information on the basic facilities this extension provides."),(0,r.kt)("p",null,"Make sure to ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/development/extensions#loading-extensions"},"include")," ",(0,r.kt)("inlineCode",{parentName:"p"},"druid-ranger-security")," in the extensions load list."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The latest release of Apache Ranger is at the time of writing version 2.0. This version has a dependency on ",(0,r.kt)("inlineCode",{parentName:"p"},"log4j 1.2.17")," which has a vulnerability if you configure it to use a ",(0,r.kt)("inlineCode",{parentName:"p"},"SocketServer")," (CVE-2019-17571). Next to that, it also includes Kafka 2.0.0 which has 2 known vulnerabilities (CVE-2019-12399, CVE-2018-17196). Kafka can be used by the audit component in Ranger, but is not required. ")),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Support for Apache Ranger authorization consists of three elements: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"configuring the extension in Apache Druid"),(0,r.kt)("li",{parentName:"ul"},"configuring the connection to Apache Ranger"),(0,r.kt)("li",{parentName:"ul"},"providing the service definition for Druid to Apache Ranger")),(0,r.kt)("h3",{id:"enabling-the-extension"},"Enabling the extension"),(0,r.kt)("p",null,"Ensure that you have a valid authenticator chain and escalator set in your ",(0,r.kt)("inlineCode",{parentName:"p"},"common.runtime.properties"),". For every authenticator your wish to use the authorizer for, set ",(0,r.kt)("inlineCode",{parentName:"p"},"druid.auth.authenticator.<authenticatorName>.authorizerName")," to the name you will give the authorizer, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"ranger"),". "),(0,r.kt)("p",null,"Then add the following and amend to your needs (in case you need to use multiple authorizers):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'druid.auth.authorizers=["ranger"]\ndruid.auth.authorizer.ranger.type=ranger\n')),(0,r.kt)("p",null,"The following is an example that showcases using ",(0,r.kt)("inlineCode",{parentName:"p"},"druid-basic-security")," for authentication and ",(0,r.kt)("inlineCode",{parentName:"p"},"druid-ranger-security")," for authorization."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'druid.auth.authenticatorChain=["basic"]\ndruid.auth.authenticator.basic.type=basic\ndruid.auth.authenticator.basic.initialAdminPassword=password1\ndruid.auth.authenticator.basic.initialInternalClientPassword=password2\ndruid.auth.authenticator.basic.credentialsValidator.type=metadata\ndruid.auth.authenticator.basic.skipOnFailure=false\ndruid.auth.authenticator.basic.enableCacheNotifications=true\ndruid.auth.authenticator.basic.authorizerName=ranger\n\ndruid.auth.authorizers=["ranger"]\ndruid.auth.authorizer.ranger.type=ranger\n\n# Escalator\ndruid.escalator.type=basic\ndruid.escalator.internalClientUsername=druid_system\ndruid.escalator.internalClientPassword=password2\ndruid.escalator.authorizerName=ranger\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Contrary to the documentation of ",(0,r.kt)("inlineCode",{parentName:"p"},"druid-basic-auth")," Ranger does not automatically provision a highly privileged system user, you will need to do this yourself. This system user in the case of ",(0,r.kt)("inlineCode",{parentName:"p"},"druid-basic-auth")," is named ",(0,r.kt)("inlineCode",{parentName:"p"},"druid_system")," and for the escalator it is configurable, as shown above. Make sure to take note of these user names and configure ",(0,r.kt)("inlineCode",{parentName:"p"},"READ")," access to ",(0,r.kt)("inlineCode",{parentName:"p"},"state:STATE")," and to ",(0,r.kt)("inlineCode",{parentName:"p"},"config:security")," in your ranger policies, otherwise system services will not work properly.")),(0,r.kt)("h4",{id:"properties-to-configure-the-extension-in-apache-druid"},"Properties to configure the extension in Apache Druid"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Property"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"druid.auth.ranger.keytab")),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the keytab to be used while authenticating against Apache Ranger to obtain policies and provide auditing"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"druid.auth.ranger.principal")),(0,r.kt)("td",{parentName:"tr",align:null},"Defines the principal to be used while authenticating against Apache Ranger to obtain policies and provide auditing"),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"No")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"druid.auth.ranger.use_ugi")),(0,r.kt)("td",{parentName:"tr",align:null},"Determines if groups that the authenticated user belongs to should be obtained from Hadoop's ",(0,r.kt)("inlineCode",{parentName:"td"},"UserGroupInformation")),(0,r.kt)("td",{parentName:"tr",align:null},"null"),(0,r.kt)("td",{parentName:"tr",align:null},"No")))),(0,r.kt)("h3",{id:"configuring-the-connection-to-apache-ranger"},"Configuring the connection to Apache Ranger"),(0,r.kt)("p",null,"The Apache Ranger authorization extension will read several configuration files. Discussing the contents of those files is beyond the scope of this document. Depending on your needs you will need to create them. The minimum you will need to have is a ",(0,r.kt)("inlineCode",{parentName:"p"},"ranger-druid-security.xml")," file that you will need to put in the classpath (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"_common"),"). For auditing, the configuration is in ",(0,r.kt)("inlineCode",{parentName:"p"},"ranger-druid-audit.xml"),"."),(0,r.kt)("h3",{id:"adding-the-service-definition-for-apache-druid-to-apache-ranger"},"Adding the service definition for Apache Druid to Apache Ranger"),(0,r.kt)("p",null,"At the time of writing of this document Apache Ranger (2.0) does not include an out of the box service and service definition for Druid. You can add the service definition to Apache Ranger by entering the following command:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},'curl -u <user>:<password> -d "@ranger-servicedef-druid.json" -X POST -H "Accept: application/json" -H "Content-Type: application/json" http://localhost:6080/service/public/v2/api/servicedef/')),(0,r.kt)("p",null,"You should get back ",(0,r.kt)("inlineCode",{parentName:"p"},"json"),' describing the service definition you just added. You can now go to the web interface of Apache Ranger which should now include a widget for "Druid". Click the plus sign and create the new service. Ensure your service name is equal to what you configured in ',(0,r.kt)("inlineCode",{parentName:"p"},"ranger-druid-security.xml"),"."),(0,r.kt)("h4",{id:"configuring-apache-ranger-policies"},"Configuring Apache Ranger policies"),(0,r.kt)("p",null,"When installing a new Druid service in Apache Ranger for the first time, Ranger will provision the policies to allow the administrative user ",(0,r.kt)("inlineCode",{parentName:"p"},"read/write")," access to all properties and data sources. You might want to limit this. Do not forget to add the correct policies for the ",(0,r.kt)("inlineCode",{parentName:"p"},"druid_system")," user and the ",(0,r.kt)("inlineCode",{parentName:"p"},"internalClientUserName")," of the escalator."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Loading new data sources requires ",(0,r.kt)("inlineCode",{parentName:"p"},"write")," access to the ",(0,r.kt)("inlineCode",{parentName:"p"},"datasource")," prior to the loading itself. So if you want to create a datasource ",(0,r.kt)("inlineCode",{parentName:"p"},"wikipedia")," you are required to have an ",(0,r.kt)("inlineCode",{parentName:"p"},"allow")," policy inside Apache Ranger before trying to load the spec. ")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("h3",{id:"http-methods"},"HTTP methods"),(0,r.kt)("p",null,"For information on what HTTP methods are supported for a particular request endpoint, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/operations/api-reference"},"API documentation"),"."),(0,r.kt)("p",null,"GET requires READ permission, while POST and DELETE require WRITE permission."),(0,r.kt)("h3",{id:"sql-permissions"},"SQL Permissions"),(0,r.kt)("p",null,"Queries on Druid datasources require DATASOURCE READ permissions for the specified datasource."),(0,r.kt)("p",null,"Queries on the ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/querying/sql-metadata-tables#information-schema"},"INFORMATION_SCHEMA tables")," will return information about datasources that the caller has DATASOURCE READ access to. Other datasources will be omitted."),(0,r.kt)("p",null,"Queries on the ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/querying/sql-metadata-tables#system-schema"},"system schema tables")," require the following permissions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"segments"),": Segments will be filtered based on DATASOURCE READ permissions."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"servers"),": The user requires STATE READ permissions."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"server_segments"),": The user requires STATE READ permissions and segments will be filtered based on DATASOURCE READ permissions."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tasks"),": Tasks will be filtered based on DATASOURCE READ permissions.")),(0,r.kt)("h3",{id:"debugging"},"Debugging"),(0,r.kt)("p",null,"If you face difficulty grasping why access is denied to certain elements, and the ",(0,r.kt)("inlineCode",{parentName:"p"},"audit")," section in Apache Ranger does not give you any detail, you can enable debug logging for ",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.druid.security.ranger"),". To do so add the following in your ",(0,r.kt)("inlineCode",{parentName:"p"},"log4j2.xml"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'\x3c!-- Set level="debug" to see access requests to Apache Ranger --\x3e\n<Logger name="org.apache.druid.security" level="debug" additivity="false">\n  <Appender-ref ref="Console"/>\n</Logger>\n')))}g.isMDXComponent=!0}}]);
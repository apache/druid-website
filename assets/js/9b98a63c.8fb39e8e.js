"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4825],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,k=u["".concat(d,".").concat(m)]||u[m]||c[m]||i;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},25036:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>k,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={id:"tls-support",title:"TLS support"},d=void 0,s={unversionedId:"operations/tls-support",id:"operations/tls-support",title:"TLS support",description:"\x3c!--",source:"@site/docs/28.0.0/operations/tls-support.md",sourceDirName:"operations",slug:"/operations/tls-support",permalink:"/docs/28.0.0/operations/tls-support",draft:!1,tags:[],version:"current",frontMatter:{id:"tls-support",title:"TLS support"},sidebar:"docs",previous:{title:"Dynamic Config Providers",permalink:"/docs/28.0.0/operations/dynamic-config-provider"},next:{title:"Basic cluster tuning",permalink:"/docs/28.0.0/operations/basic-cluster-tuning"}},p={},u=[{value:"General configuration",id:"general-configuration",level:2},{value:"Jetty server configuration",id:"jetty-server-configuration",level:2},{value:"Internal communication over TLS",id:"internal-communication-over-tls",level:2},{value:"Custom certificate checks",id:"custom-certificate-checks",level:2}],c={toc:u},m="wrapper";function k(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"general-configuration"},"General configuration"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.enablePlaintextPort")),(0,i.kt)("td",{parentName:"tr",align:null},"Enable/Disable HTTP connector."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"true"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.enableTlsPort")),(0,i.kt)("td",{parentName:"tr",align:null},"Enable/Disable HTTPS connector."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false"))))),(0,i.kt)("p",null,"Although not recommended, the HTTP and HTTPS connectors can both be enabled at a time. The respective ports are configurable using ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.plaintextPort"),"\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.tlsPort")," properties on each process. Please see ",(0,i.kt)("inlineCode",{parentName:"p"},"Configuration")," section of individual processes to check the valid and default values for these ports."),(0,i.kt)("h2",{id:"jetty-server-configuration"},"Jetty server configuration"),(0,i.kt)("p",null,"Apache Druid uses Jetty as its embedded web server. "),(0,i.kt)("p",null,"To get familiar with TLS/SSL, along with related concepts like keys and certificates,\nread ",(0,i.kt)("a",{parentName:"p",href:"https://www.eclipse.org/jetty/documentation/jetty-12/operations-guide/index.html#og-protocols-ssl"},"Configuring Secure Protocols")," in the Jetty documentation.\nTo get more in-depth knowledge of TLS/SSL support in Java in general, refer to the ",(0,i.kt)("a",{parentName:"p",href:"http://docs.oracle.com/javase/8/docs/technotes/guides/security/jsse/JSSERefGuide.html"},"Java Secure Socket Extension (JSSE) Reference Guide"),".\nThe ",(0,i.kt)("a",{parentName:"p",href:"https://www.eclipse.org/jetty/javadoc/jetty-11/org/eclipse/jetty/util/ssl/SslContextFactory.html"},"Class SslContextFactory"),"\nreference doc can help in understanding TLS/SSL configurations listed below. Finally, ",(0,i.kt)("a",{parentName:"p",href:"http://docs.oracle.com/javase/8/docs/technotes/guides/security/StandardNames.html"},"Java Cryptography Architecture\nStandard Algorithm Name Documentation for JDK 8")," lists all possible\nvalues for the configs below, among others provided by Java implementation."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.server.https.keyStorePath")),(0,i.kt)("td",{parentName:"tr",align:null},"The file path or URL of the TLS/SSL Key store."),(0,i.kt)("td",{parentName:"tr",align:null},"none"),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.server.https.keyStoreType")),(0,i.kt)("td",{parentName:"tr",align:null},"The type of the key store."),(0,i.kt)("td",{parentName:"tr",align:null},"none"),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.server.https.certAlias")),(0,i.kt)("td",{parentName:"tr",align:null},"Alias of TLS/SSL certificate for the connector."),(0,i.kt)("td",{parentName:"tr",align:null},"none"),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.server.https.keyStorePassword")),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("a",{parentName:"td",href:"/docs/28.0.0/operations/password-provider"},"Password Provider")," or String password for the Key Store."),(0,i.kt)("td",{parentName:"tr",align:null},"none"),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.server.https.reloadSslContext")),(0,i.kt)("td",{parentName:"tr",align:null},"Should Druid server detect Key Store file change and reload."),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"no")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.server.https.reloadSslContextSeconds")),(0,i.kt)("td",{parentName:"tr",align:null},"How frequently should Druid server scan for Key Store file change."),(0,i.kt)("td",{parentName:"tr",align:null},"60"),(0,i.kt)("td",{parentName:"tr",align:null},"yes")))),(0,i.kt)("p",null,"The following table contains configuration options related to client certificate authentication."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.server.https.requireClientCertificate")),(0,i.kt)("td",{parentName:"tr",align:null},"If set to true, clients must identify themselves by providing a TLS certificate, without which connections will fail."),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"no")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.server.https.requestClientCertificate")),(0,i.kt)("td",{parentName:"tr",align:null},"If set to true, clients may optionally identify themselves by providing a TLS certificate. Connections will not fail if TLS certificate is not provided. This property is ignored if ",(0,i.kt)("inlineCode",{parentName:"td"},"requireClientCertificate")," is set to true. If ",(0,i.kt)("inlineCode",{parentName:"td"},"requireClientCertificate")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"requestClientCertificate")," are false, the rest of the options in this table are ignored."),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"no")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.server.https.trustStoreType")),(0,i.kt)("td",{parentName:"tr",align:null},"The type of the trust store containing certificates used to validate client certificates. Not needed if ",(0,i.kt)("inlineCode",{parentName:"td"},"requireClientCertificate")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"requestClientCertificate")," are false."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"java.security.KeyStore.getDefaultType()")),(0,i.kt)("td",{parentName:"tr",align:null},"no")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.server.https.trustStorePath")),(0,i.kt)("td",{parentName:"tr",align:null},"The file path or URL of the trust store containing certificates used to validate client certificates. Not needed if ",(0,i.kt)("inlineCode",{parentName:"td"},"requireClientCertificate")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"requestClientCertificate")," are false."),(0,i.kt)("td",{parentName:"tr",align:null},"none"),(0,i.kt)("td",{parentName:"tr",align:null},"yes, only if ",(0,i.kt)("inlineCode",{parentName:"td"},"requireClientCertificate")," is true")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.server.https.trustStoreAlgorithm")),(0,i.kt)("td",{parentName:"tr",align:null},"Algorithm to be used by TrustManager to validate client certificate chains. Not needed if ",(0,i.kt)("inlineCode",{parentName:"td"},"requireClientCertificate")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"requestClientCertificate")," are false."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"javax.net.ssl.TrustManagerFactory.getDefaultAlgorithm()")),(0,i.kt)("td",{parentName:"tr",align:null},"no")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.server.https.trustStorePassword")),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("a",{parentName:"td",href:"/docs/28.0.0/operations/password-provider"},"password provider")," or String password for the Trust Store.  Not needed if ",(0,i.kt)("inlineCode",{parentName:"td"},"requireClientCertificate")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"requestClientCertificate")," are false."),(0,i.kt)("td",{parentName:"tr",align:null},"none"),(0,i.kt)("td",{parentName:"tr",align:null},"no")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.server.https.validateHostnames")),(0,i.kt)("td",{parentName:"tr",align:null},"If set to true, check that the client's hostname matches the CN/subjectAltNames in the client certificate.  Not used if ",(0,i.kt)("inlineCode",{parentName:"td"},"requireClientCertificate")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"requestClientCertificate")," are false."),(0,i.kt)("td",{parentName:"tr",align:null},"true"),(0,i.kt)("td",{parentName:"tr",align:null},"no")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.server.https.crlPath")),(0,i.kt)("td",{parentName:"tr",align:null},"Specifies a path to a file containing static ",(0,i.kt)("a",{parentName:"td",href:"https://en.wikipedia.org/wiki/Certificate_revocation_list"},"Certificate Revocation Lists"),", used to check if a client certificate has been revoked. Not used if ",(0,i.kt)("inlineCode",{parentName:"td"},"requireClientCertificate")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"requestClientCertificate")," are false."),(0,i.kt)("td",{parentName:"tr",align:null},"null"),(0,i.kt)("td",{parentName:"tr",align:null},"no")))),(0,i.kt)("p",null,"The following table contains non-mandatory advanced configuration options, use caution."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.server.https.keyManagerFactoryAlgorithm")),(0,i.kt)("td",{parentName:"tr",align:null},"Algorithm to use for creating KeyManager, more details ",(0,i.kt)("a",{parentName:"td",href:"https://docs.oracle.com/javase/7/docs/technotes/guides/security/jsse/JSSERefGuide.html#KeyManager"},"here"),"."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"javax.net.ssl.KeyManagerFactory.getDefaultAlgorithm()")),(0,i.kt)("td",{parentName:"tr",align:null},"no")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.server.https.keyManagerPassword")),(0,i.kt)("td",{parentName:"tr",align:null},"The ",(0,i.kt)("a",{parentName:"td",href:"/docs/28.0.0/operations/password-provider"},"Password Provider")," or String password for the Key Manager."),(0,i.kt)("td",{parentName:"tr",align:null},"none"),(0,i.kt)("td",{parentName:"tr",align:null},"no")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.server.https.includeCipherSuites")),(0,i.kt)("td",{parentName:"tr",align:null},"List of cipher suite names to include. You can either use the exact cipher suite name or a regular expression."),(0,i.kt)("td",{parentName:"tr",align:null},"Jetty's default include cipher list"),(0,i.kt)("td",{parentName:"tr",align:null},"no")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.server.https.excludeCipherSuites")),(0,i.kt)("td",{parentName:"tr",align:null},"List of cipher suite names to exclude. You can either use the exact cipher suite name or a regular expression."),(0,i.kt)("td",{parentName:"tr",align:null},"Jetty's default exclude cipher list"),(0,i.kt)("td",{parentName:"tr",align:null},"no")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.server.https.includeProtocols")),(0,i.kt)("td",{parentName:"tr",align:null},"List of exact protocols names to include."),(0,i.kt)("td",{parentName:"tr",align:null},"Jetty's default include protocol list"),(0,i.kt)("td",{parentName:"tr",align:null},"no")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.server.https.excludeProtocols")),(0,i.kt)("td",{parentName:"tr",align:null},"List of exact protocols names to exclude."),(0,i.kt)("td",{parentName:"tr",align:null},"Jetty's default exclude protocol list"),(0,i.kt)("td",{parentName:"tr",align:null},"no")))),(0,i.kt)("h2",{id:"internal-communication-over-tls"},"Internal communication over TLS"),(0,i.kt)("p",null,"Whenever possible Druid processes will use HTTPS to talk to each other. To enable this communication Druid's HttpClient needs to\nbe configured with a proper ",(0,i.kt)("a",{parentName:"p",href:"http://docs.oracle.com/javase/8/docs/api/javax/net/ssl/SSLContext.html"},"SSLContext")," that is able\nto validate the Server Certificates, otherwise communication will fail."),(0,i.kt)("p",null,"Since, there are various ways to configure SSLContext, by default, Druid looks for an instance of SSLContext Guice binding\nwhile creating the HttpClient. This binding can be achieved writing a ",(0,i.kt)("a",{parentName:"p",href:"/docs/28.0.0/configuration/extensions"},"Druid extension"),"\nwhich can provide an instance of SSLContext. Druid comes with a simple extension present ",(0,i.kt)("a",{parentName:"p",href:"/docs/28.0.0/development/extensions-core/simple-client-sslcontext"},"here"),"\nwhich should be useful enough for most simple cases, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/28.0.0/configuration/extensions#loading-extensions"},"this")," for how to include extensions.\nIf this extension does not satisfy the requirements then please follow the extension ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/druid/tree/master/extensions-core/simple-client-sslcontext"},"implementation"),"\nto create your own extension."),(0,i.kt)("p",null,"When Druid Coordinator/Overlord have both HTTP and HTTPS enabled and Client sends request to non-leader process, then Client is always redirected to the HTTPS endpoint on leader process.\nSo, Clients should be first upgraded to be able to handle redirect to HTTPS. Then Druid Overlord/Coordinator should be upgraded and configured to run both HTTP and HTTPS ports. Then Client configuration should be changed to refer to Druid Coordinator/Overlord via the HTTPS endpoint and then HTTP port on Druid Coordinator/Overlord should be disabled."),(0,i.kt)("h2",{id:"custom-certificate-checks"},"Custom certificate checks"),(0,i.kt)("p",null,"Druid supports custom certificate check extensions. Please refer to the ",(0,i.kt)("inlineCode",{parentName:"p"},"org.apache.druid.server.security.TLSCertificateChecker")," interface for details on the methods to be implemented."),(0,i.kt)("p",null,"To use a custom TLS certificate checker, specify the following property:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.tls.certificateChecker")),(0,i.kt)("td",{parentName:"tr",align:null},"Type name of custom TLS certificate checker, provided by extensions. Please refer to extension documentation for the type name that should be specified."),(0,i.kt)("td",{parentName:"tr",align:null},'"default"'),(0,i.kt)("td",{parentName:"tr",align:null},"no")))),(0,i.kt)("p",null,"The default checker delegates to the standard trust manager and performs no additional actions or checks."),(0,i.kt)("p",null,"If using a non-default certificate checker, please refer to the extension documentation for additional configuration properties needed."))}k.isMDXComponent=!0}}]);
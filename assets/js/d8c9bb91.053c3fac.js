"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7363],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),h=o,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||i;return r?a.createElement(m,n(n({ref:t},u),{},{components:r})):a.createElement(m,n({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,n=new Array(i);n[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,n[1]=l;for(var p=2;p<i;p++)n[p]=r[p];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},76279:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var a=r(87462),o=r(63366),i=(r(67294),r(3905)),n=["components"],l={id:"auth-ldap",title:"Configure LDAP authentication",sidebar_label:"LDAP auth"},s=void 0,p={unversionedId:"operations/auth-ldap",id:"operations/auth-ldap",title:"Configure LDAP authentication",description:"\x3c!--",source:"@site/docs/latest/operations/auth-ldap.md",sourceDirName:"operations",slug:"/operations/auth-ldap",permalink:"/docs/latest/operations/auth-ldap",draft:!1,tags:[],version:"current",frontMatter:{id:"auth-ldap",title:"Configure LDAP authentication",sidebar_label:"LDAP auth"},sidebar:"docs",previous:{title:"User authentication and authorization",permalink:"/docs/latest/operations/security-user-auth"},next:{title:"Password providers",permalink:"/docs/latest/operations/password-provider"}},u={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Check your LDAP connection",id:"check-your-ldap-connection",level:3},{value:"Test your LDAP search",id:"test-your-ldap-search",level:3},{value:"Configure Druid for LDAP authentication",id:"configure-druid-for-ldap-authentication",level:2},{value:"Map LDAP groups to Druid roles",id:"map-ldap-groups-to-druid-roles",level:2},{value:"Create a Druid role",id:"create-a-druid-role",level:3},{value:"Add permissions to the Druid role",id:"add-permissions-to-the-druid-role",level:3},{value:"Create the group mapping",id:"create-the-group-mapping",level:3},{value:"Add an LDAP user to Druid and assign a role",id:"add-an-ldap-user-to-druid-and-assign-a-role",level:3},{value:"Enable LDAP over TLS (LDAPS)",id:"enable-ldap-over-tls-ldaps",level:2},{value:"Prerequisites",id:"prerequisites-1",level:2},{value:"Configure Druid for LDAPS",id:"configure-druid-for-ldaps",level:2},{value:"Troubleshooting tips",id:"troubleshooting-tips",level:2},{value:"Check the coordinator logs",id:"check-the-coordinator-logs",level:3},{value:"Check the Druid escalator configuration",id:"check-the-druid-escalator-configuration",level:3},{value:"Check your LDAP server response time",id:"check-your-ldap-server-response-time",level:3}],c={toc:d},h="wrapper";function m(e){var t=e.components,r=(0,o.Z)(e,n);return(0,i.kt)(h,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can use ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Lightweight_Directory_Access_Protocol"},"Lightweight Directory Access Protocol (LDAP)")," to secure access to Apache Druid. This topic describes how to set up Druid authentication and authorization with LDAP and LDAP over TLS (LDAPS). The examples on this page show the configuration for an Active Directory LDAP system."),(0,i.kt)("p",null,"The first step is to enable LDAP authentication and authorization for Druid. You then map an LDAP group to Druid roles and assign permissions to those roles. After you've completed this configuration you can optionally choose to enable LDAPS to make LDAP traffic confidential and secure."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("p",null,"Before you start to configure LDAP for Druid, test your LDAP connection and perform a sample search."),(0,i.kt)("h3",{id:"check-your-ldap-connection"},"Check your LDAP connection"),(0,i.kt)("p",null,"Test your LDAP connection to verify it works with user credentials. Later in the process you ",(0,i.kt)("a",{parentName:"p",href:"#configure-druid-for-ldap-authentication"},"configure Druid for LDAP authentication")," with this user as the ",(0,i.kt)("inlineCode",{parentName:"p"},"bindUser"),"."),(0,i.kt)("p",null,"The following example command tests the connection for the user ",(0,i.kt)("inlineCode",{parentName:"p"},"myuser@example.com"),". Insert your LDAP server IP address. Modify the port number of your LDAP instance if it listens on a port other than ",(0,i.kt)("inlineCode",{parentName:"p"},"389"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'ldapwhoami -vv -H ldap://ip_address:389  -D "myuser@example.com" -W\n')),(0,i.kt)("p",null,"Enter the password for the user when prompted and verify that the command succeeded. If it failed, check the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Make sure you're using the correct port for your LDAP instance."),(0,i.kt)("li",{parentName:"ul"},"Check if a network firewall is preventing connections to the LDAP port."),(0,i.kt)("li",{parentName:"ul"},"Review your LDAP implementation details to see whether you need to specifically allow LDAP clients at the LDAP server. If so, add the Druid Coordinator server to the allow list.")),(0,i.kt)("h3",{id:"test-your-ldap-search"},"Test your LDAP search"),(0,i.kt)("p",null,"Once your LDAP connection is working, search for a user. For example, the following command searches for the user ",(0,i.kt)("inlineCode",{parentName:"p"},"myuser")," in an Active Directory system. The ",(0,i.kt)("inlineCode",{parentName:"p"},"sAMAccountName")," attribute is specific to Active Directory and contains the authenticated user identity:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'ldapsearch -x -W -H ldap://ip_address:389  -D "cn=admin,dc=example,dc=com" -b "dc=example,dc=com" "(sAMAccountName=myuser)" +\n')),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"memberOf")," attribute in the results shows the groups the user belongs to. For example, the following response shows that the user is a member of the ",(0,i.kt)("inlineCode",{parentName:"p"},"mygroup")," group:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"memberOf: cn=mygroup,ou=groups,dc=example,dc=com\n")),(0,i.kt)("p",null,"You use this information to map the LDAP group to Druid roles in a later step. "),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"}," Druid uses the ",(0,i.kt)("inlineCode",{parentName:"p"},"memberOf")," attribute to determine a group's membership using LDAP. If your LDAP server implementation doesn't include this attribute, you must complete some additional steps when you ",(0,i.kt)("a",{parentName:"p",href:"#map-ldap-groups-to-druid-roles"},"map LDAP groups to Druid roles"),".")),(0,i.kt)("h2",{id:"configure-druid-for-ldap-authentication"},"Configure Druid for LDAP authentication"),(0,i.kt)("p",null,"To configure Druid to use LDAP authentication, follow these steps. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/configuration/"},"Configuration reference")," for the location of the configuration files. "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a user in your LDAP system that you'll use both for internal communication with Druid and as the LDAP initial admin user. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/operations/security-overview"},"Security overview")," for more information.\nIn the example below, the LDAP user is ",(0,i.kt)("inlineCode",{parentName:"p"},"internal@example.com"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Enable the ",(0,i.kt)("inlineCode",{parentName:"p"},"druid-basic-security")," extension in the ",(0,i.kt)("inlineCode",{parentName:"p"},"common.runtime.properties")," file.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the ",(0,i.kt)("inlineCode",{parentName:"p"},"common.runtime.properties")," file, add the following lines for LDAP properties and substitute the values for your own. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/development/extensions-core/druid-basic-security#properties-for-ldap-user-authentication"},"Druid basic security")," for details about these properties."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'druid.auth.authenticatorChain=["ldap"]\ndruid.auth.authenticator.ldap.type=basic\ndruid.auth.authenticator.ldap.enableCacheNotifications=true\ndruid.auth.authenticator.ldap.credentialsValidator.type=ldap\ndruid.auth.authenticator.ldap.credentialsValidator.url=ldap://ip_address:port\ndruid.auth.authenticator.ldap.credentialsValidator.bindUser=administrator@example.com\ndruid.auth.authenticator.ldap.credentialsValidator.bindPassword=adminpassword\ndruid.auth.authenticator.ldap.credentialsValidator.baseDn=dc=example,dc=com\ndruid.auth.authenticator.ldap.credentialsValidator.userSearch=(&(sAMAccountName=%s)(objectClass=user))\ndruid.auth.authenticator.ldap.credentialsValidator.userAttribute=sAMAccountName\ndruid.auth.authenticator.ldap.authorizerName=ldapauth\ndruid.escalator.type=basic\ndruid.escalator.internalClientUsername=internal@example.com\ndruid.escalator.internalClientPassword=internaluserpassword\ndruid.escalator.authorizerName=ldapauth\ndruid.auth.authorizers=["ldapauth"]\ndruid.auth.authorizer.ldapauth.type=basic\ndruid.auth.authorizer.ldapauth.initialAdminUser=internal@example.com\ndruid.auth.authorizer.ldapauth.initialAdminRole=admin\ndruid.auth.authorizer.ldapauth.roleProvider.type=ldap\n')),(0,i.kt)("p",{parentName:"li"},"Note the following:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bindUser"),": A user for connecting to LDAP. This should be the same user you used to ",(0,i.kt)("a",{parentName:"li",href:"#test-your-ldap-search"},"test your LDAP search"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"userSearch"),": Your LDAP search syntax."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"userAttribute"),": The user search attribute."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"internal@example.com")," is the LDAP user you created in step 1. In the example it serves as both the internal client user and the initial admin user.")))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"}," In the above example, the ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/development/extensions-core/druid-basic-security#escalator"},"Druid escalator")," and LDAP initial admin user are set to the same user - ",(0,i.kt)("inlineCode",{parentName:"p"},"internal@example.com"),". If the escalator is set to a different user, you must follow steps 4 and 5 to create the group mapping and allocate initial roles before the rest of the cluster can function.")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Save your group mapping to a JSON file. An example file ",(0,i.kt)("inlineCode",{parentName:"p"},"groupmap.json")," looks like this:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'{\n   "name": "mygroupmap",\n   "groupPattern": "CN=mygroup,CN=Users,DC=example,DC=com",\n   "roles": [\n      "readRole"\n   ]\n}\n')),(0,i.kt)("p",{parentName:"li"},"In the example, the LDAP group ",(0,i.kt)("inlineCode",{parentName:"p"},"mygroup")," maps to Druid role ",(0,i.kt)("inlineCode",{parentName:"p"},"readRole")," and the name of the mapping is ",(0,i.kt)("inlineCode",{parentName:"p"},"mygroupmap"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Use the Druid API to create the group mapping and allocate initial roles according to your JSON file. The following example uses curl to create the mapping defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"groupmap.json")," for the LDAP group ",(0,i.kt)("inlineCode",{parentName:"p"},"mygroup"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'curl -i -v  -H "Content-Type: application/json" -u internal -X POST -d @groupmap.json http://localhost:8081/druid-ext/basic-security/authorization/db/ldapauth/groupMappings/mygroupmap\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Check that the group mapping was created successfully. The following example request lists all group mappings:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'curl -i -v  -H "Content-Type: application/json" -u internal -X GET  http://localhost:8081/druid-ext/basic-security/authorization/db/ldapauth/groupMappings\n')))),(0,i.kt)("h2",{id:"map-ldap-groups-to-druid-roles"},"Map LDAP groups to Druid roles"),(0,i.kt)("p",null,"Once you've completed the initial setup and mapping, you can map more LDAP groups to Druid roles. Members of an LDAP group get access to the permissions of the corresponding Druid role."),(0,i.kt)("h3",{id:"create-a-druid-role"},"Create a Druid role"),(0,i.kt)("p",null,"To create a Druid role, you can submit a POST request to the Coordinator process using the Druid REST API or you can use the Druid console."),(0,i.kt)("p",null,"The examples below use ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost")," as the Coordinator host and ",(0,i.kt)("inlineCode",{parentName:"p"},"8081")," as the port. Amend these properties according to the details of your deployment. "),(0,i.kt)("p",null,"Example request to create a role named ",(0,i.kt)("inlineCode",{parentName:"p"},"readRole"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'curl -i -v  -H "Content-Type: application/json" -u internal -X POST  http://localhost:8081/druid-ext/basic-security/authorization/db/ldapauth/roles/readRole \n')),(0,i.kt)("p",null,"Check that Druid created the role successfully. The following example request lists all roles:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'curl -i -v  -H "Content-Type: application/json" -u internal -X GET  http://localhost:8081/druid-ext/basic-security/authorization/db/ldapauth/roles\n')),(0,i.kt)("h3",{id:"add-permissions-to-the-druid-role"},"Add permissions to the Druid role"),(0,i.kt)("p",null,"Once you have a Druid role you can add permissions to it. The following example adds read-only access to a ",(0,i.kt)("inlineCode",{parentName:"p"},"wikipedia")," data source."),(0,i.kt)("p",null,"Given the following JSON in a file named ",(0,i.kt)("inlineCode",{parentName:"p"},"perm.json"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'[\n    { "resource": { "name": "wikipedia", "type": "DATASOURCE" }, "action": "READ" },\n    { "resource": { "name": ".*", "type": "STATE" }, "action": "READ" },\n    { "resource": {"name": ".*", "type": "CONFIG"}, "action": "READ"}\n]\n')),(0,i.kt)("p",null,"The following request associates the permissions in the JSON file with the ",(0,i.kt)("inlineCode",{parentName:"p"},"readRole")," role:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'curl -i -v  -H "Content-Type: application/json" -u internal -X POST -d@perm.json  http://localhost:8081/druid-ext/basic-security/authorization/db/ldapauth/roles/readRole/permissions\n')),(0,i.kt)("p",null,"Druid users need the ",(0,i.kt)("inlineCode",{parentName:"p"},"STATE")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"CONFIG")," permissions to view the data source in the Druid console. If you only want to assign querying permissions you can apply just the ",(0,i.kt)("inlineCode",{parentName:"p"},"READ")," permission with the first line in the ",(0,i.kt)("inlineCode",{parentName:"p"},"perm.json")," file."),(0,i.kt)("p",null,"You can also provide the data source name in the form of a regular expression. For example, to give access to all data sources starting with ",(0,i.kt)("inlineCode",{parentName:"p"},"wiki"),", you would specify the data source name as ",(0,i.kt)("inlineCode",{parentName:"p"},'{ "name": "wiki.*" }')," ."),(0,i.kt)("h3",{id:"create-the-group-mapping"},"Create the group mapping"),(0,i.kt)("p",null,"You can now map an LDAP group to the Druid role. The following example request creates a mapping with name ",(0,i.kt)("inlineCode",{parentName:"p"},"mygroupmap"),". It assumes that a group named ",(0,i.kt)("inlineCode",{parentName:"p"},"mygroup")," exists in the directory."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "name": "mygroupmap",\n    "groupPattern": "CN=mygroup,CN=Users,DC=example,DC=com",\n    "roles": [\n        "readRole"\n    ]\n}\n')),(0,i.kt)("p",null,"The following example request configures the mapping","\u2014","the role mapping is in the file ",(0,i.kt)("inlineCode",{parentName:"p"},"groupmap.json"),". See ",(0,i.kt)("a",{parentName:"p",href:"#configure-druid-for-ldap-authentication"},"Configure Druid for LDAP authentication")," for the contents of an example file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'curl -i -v  -H "Content-Type: application/json" -u internal -X POST -d @groupmap.json http://localhost:8081/druid-ext/basic-security/authorization/db/ldapauth/groupMappings/mygroupmap\n')),(0,i.kt)("p",null,"To check whether the group mapping was created successfully, the following request lists all group mappings:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'curl -i -v  -H "Content-Type: application/json" -u internal -X GET http://localhost:8081/druid-ext/basic-security/authorization/db/ldapauth/groupMappings\n')),(0,i.kt)("p",null,"The following example request returns the details of the ",(0,i.kt)("inlineCode",{parentName:"p"},"mygroupmap")," group:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'curl -i -v  -H "Content-Type: application/json" -u internal -X GET http://localhost:8081/druid-ext/basic-security/authorization/db/ldapauth/groupMappings/mygroupmap\n')),(0,i.kt)("p",null,"The following example request adds the role ",(0,i.kt)("inlineCode",{parentName:"p"},"queryRole")," to the ",(0,i.kt)("inlineCode",{parentName:"p"},"mygroupmap")," mapping:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'curl -i -v  -H "Content-Type: application/json" -u internal -X POST http://localhost:8081/druid-ext/basic-security/authorization/db/ldapauth/groupMappings/mygroup/roles/queryrole\n')),(0,i.kt)("h3",{id:"add-an-ldap-user-to-druid-and-assign-a-role"},"Add an LDAP user to Druid and assign a role"),(0,i.kt)("p",null,"You only need to complete this step if:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Your LDAP user doesn't belong to any of your LDAP groups, or"),(0,i.kt)("li",{parentName:"ul"},"You want to configure a user with additional Druid roles that are not mapped to the LDAP groups that the user belongs to.")),(0,i.kt)("p",null,"Example request to add the LDAP user ",(0,i.kt)("inlineCode",{parentName:"p"},"myuser")," to Druid:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'curl -i -v  -H "Content-Type: application/json" -u internal -X POST http://localhost:8081/druid-ext/basic-security/authorization/db/ldapauth/users/myuser \n')),(0,i.kt)("p",null,"Example request to assign the ",(0,i.kt)("inlineCode",{parentName:"p"},"myuser")," user to the ",(0,i.kt)("inlineCode",{parentName:"p"},"queryRole")," role:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'curl -i -v  -H "Content-Type: application/json" -u internal -X POST http://localhost:8081/druid-ext/basic-security/authorization/db/ldapauth/users/myuser/roles/queryRole\n')),(0,i.kt)("h2",{id:"enable-ldap-over-tls-ldaps"},"Enable LDAP over TLS (LDAPS)"),(0,i.kt)("p",null,"Once you've configured LDAP authentication in Druid, you can optionally make LDAP traffic confidential and secure by using Transport Layer Security (TLS)","\u2014","previously Secure Socket Layer(SSL)","\u2014","technology. "),(0,i.kt)("p",null,"Configuring LDAPS establishes trust between Druid and the LDAP server."),(0,i.kt)("h2",{id:"prerequisites-1"},"Prerequisites"),(0,i.kt)("p",null,"Before you start to set up LDAPS in Druid, you must ",(0,i.kt)("a",{parentName:"p",href:"#configure-druid-for-ldap-authentication"},"configure Druid for LDAP authentication"),". You also need:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A certificate issued by a public certificate authority (CA) or a self-signed certificate by an internal CA."),(0,i.kt)("li",{parentName:"ul"},"The root certificate for the CA that signed the certificate for the LDAP server. If you're using a common public CA, the certificate may already be in the Java truststore. Otherwise you need to import the certificate for the CA.")),(0,i.kt)("h2",{id:"configure-druid-for-ldaps"},"Configure Druid for LDAPS"),(0,i.kt)("p",null,"Complete the following steps to set up LDAPS for Druid. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/configuration/"},"Configuration reference")," for the location of the configuration files. "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Import the CA or self-signed certificate for your LDAP server into either a newly created LDAP trust store or the trust store specified by the ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.client.https.trustStorePath"),"  property located in your ",(0,i.kt)("inlineCode",{parentName:"p"},"common.runtime.properties")," file."),(0,i.kt)("p",{parentName:"li"}," The example below illustrates the option with one key store for both HTTPS clients and LDAP clients, but you can use a separate dedicated trust store just for ldap if you wish. "),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"keytool -import -trustcacerts -keystore path/to/cacerts -storepass truststorepassword -alias aliasName -file path/to/certificate.cer\n")),(0,i.kt)("p",{parentName:"li"},"Replace ",(0,i.kt)("inlineCode",{parentName:"p"},"path/to/cacerts")," with the path to your truststore, ",(0,i.kt)("inlineCode",{parentName:"p"},"truststorepassword")," with your truststore password, ",(0,i.kt)("inlineCode",{parentName:"p"},"aliasName")," with an alias name for the keystore, and ",(0,i.kt)("inlineCode",{parentName:"p"},"path/to/certificate.cer")," with the location and name of your certificate. For example:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"keytool -import -trustcacerts -keystore /Library/Java/JavaVirtualMachines/adoptopenjdk-8.jdk/Contents/Home/jre/lib/security/cacerts -storepass mypassword -alias myAlias -file /etc/ssl/certs/my-certificate.cer\n")))),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"If the root certificate for the CA isn't already in the Java truststore, import it:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"keytool -importcert -keystore path/to/cacerts -storepass truststorepassword -alias aliasName -file path/to/certificate.cer\n")),(0,i.kt)("p",{parentName:"li"},"Replace ",(0,i.kt)("inlineCode",{parentName:"p"},"path/to/cacerts")," with the path to your truststore, ",(0,i.kt)("inlineCode",{parentName:"p"},"truststorepassword")," with your truststore password, ",(0,i.kt)("inlineCode",{parentName:"p"},"aliasName")," with an alias name for the keystore, and ",(0,i.kt)("inlineCode",{parentName:"p"},"path/to/certificate.cer")," with the location and name of your certificate. For example:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"keytool -importcert -keystore /Library/Java/JavaVirtualMachines/adoptopenjdk-8.jdk/Contents/Home/jre/lib/security/cacerts -storepass mypassword -alias myAlias -file /etc/ssl/certs/my-certificate.cer\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In your ",(0,i.kt)("inlineCode",{parentName:"p"},"common.runtime.properties")," file, add the following lines to the LDAP configuration section, substituting your own trust store path and password. Note that the property to point to the trust store is ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.auth.basic.ssl.trustStorePath")," and not ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.client.https.trustStorePath")," . Regardless of if you use the same trust store for HTTPS clients and LDAP or if you use a separate LDAP trust store, ensure the correct property points to the trust store where you imported the LDAP certificates. "),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"druid.auth.basic.ssl.trustStorePath=/Library/Java/JavaVirtualMachines/adoptopenjdk-8.jdk/Contents/Home/jre/lib/security/cacerts\ndruid.auth.basic.ssl.protocol=TLS\ndruid.auth.basic.ssl.trustStorePassword=xxxxxx\n")),(0,i.kt)("p",{parentName:"li"},"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/development/extensions-core/druid-basic-security#properties-for-ldaps"},"Druid basic security")," for details about these properties.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"You can optionally configure additional LDAPS properties in the ",(0,i.kt)("inlineCode",{parentName:"p"},"common.runtime.properties")," file. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/development/extensions-core/druid-basic-security#properties-for-ldaps"},"Druid basic security")," for more information.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Restart Druid."))),(0,i.kt)("h2",{id:"troubleshooting-tips"},"Troubleshooting tips"),(0,i.kt)("p",null,"The following are some ideas to help you troubleshoot issues with LDAP and LDAPS."),(0,i.kt)("h3",{id:"check-the-coordinator-logs"},"Check the coordinator logs"),(0,i.kt)("p",null,"If your LDAP connection isn't working, check the coordinator logs. See ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/configuration/logging"},"Logging")," for details."),(0,i.kt)("h3",{id:"check-the-druid-escalator-configuration"},"Check the Druid escalator configuration"),(0,i.kt)("p",null,"If the coordinator is working but the rest of the cluster isn't, check the escalator configuration. See the ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/configuration/"},"Configuration reference")," for details. You can also check other service logs to see why the services are unable to fetch authorization details from the coordinator."),(0,i.kt)("h3",{id:"check-your-ldap-server-response-time"},"Check your LDAP server response time"),(0,i.kt)("p",null,"If a user can log in to the Druid console but the landing page shows a 401 error, check your LDAP server response time. In a large organization with a high number of LDAP users, LDAP may be slow to respond, and this can result in a connection timeout."))}m.isMDXComponent=!0}}]);
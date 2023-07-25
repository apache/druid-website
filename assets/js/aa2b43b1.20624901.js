"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5738],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84404:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={id:"sql-jdbc",title:"SQL JDBC driver API",sidebar_label:"JDBC driver API"},l=void 0,c={unversionedId:"querying/sql-jdbc",id:"querying/sql-jdbc",title:"SQL JDBC driver API",description:"\x3c!--",source:"@site/docs/26.0.0/querying/sql-jdbc.md",sourceDirName:"querying",slug:"/querying/sql-jdbc",permalink:"/docs/26.0.0/querying/sql-jdbc",draft:!1,tags:[],version:"current",frontMatter:{id:"sql-jdbc",title:"SQL JDBC driver API",sidebar_label:"JDBC driver API"},sidebar:"docs",previous:{title:"Druid SQL API",permalink:"/docs/26.0.0/querying/sql-api"},next:{title:"SQL query context",permalink:"/docs/26.0.0/querying/sql-query-context"}},u={},p=[{value:"Connection stickiness",id:"connection-stickiness",level:2},{value:"Dynamic parameters",id:"dynamic-parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Get the metadata for a datasource",id:"get-the-metadata-for-a-datasource",level:3},{value:"Query data",id:"query-data",level:3}],m={toc:p},d="wrapper";function h(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Apache Druid supports two query languages: Druid SQL and ",(0,o.kt)("a",{parentName:"p",href:"/docs/26.0.0/querying/"},"native queries"),".\nThis document describes the SQL language.")),(0,o.kt)("p",null,"You can make ",(0,o.kt)("a",{parentName:"p",href:"/docs/26.0.0/querying/sql"},"Druid SQL")," queries using the ",(0,o.kt)("a",{parentName:"p",href:"https://calcite.apache.org/avatica/downloads/"},"Avatica JDBC driver"),". We recommend using Avatica JDBC driver version 1.17.0 or later. Note that as of the time of this writing, Avatica 1.17.0, the latest version, does not support passing connection string parameters from the URL to Druid, so you must pass them using a ",(0,o.kt)("inlineCode",{parentName:"p"},"Properties")," object. Once you've downloaded the Avatica client jar, add it to your classpath and use the connect string ",(0,o.kt)("inlineCode",{parentName:"p"},"jdbc:avatica:remote:url=http://BROKER:8082/druid/v2/sql/avatica/"),"."),(0,o.kt)("p",null,"When using the JDBC connector for the ",(0,o.kt)("a",{parentName:"p",href:"#examples"},"examples")," or in general, it's helpful to understand the parts of the connect string stored in the ",(0,o.kt)("inlineCode",{parentName:"p"},"url")," variable:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"jdbc:avatica:remote:url=")," is prepended to the hostname and port."),(0,o.kt)("li",{parentName:"ul"},"The hostname and port number for your Druid deployment depends on whether you want to connect to the Router or a specific Broker. For more information, see ",(0,o.kt)("a",{parentName:"li",href:"#connection-stickiness"},"Connection stickiness"),". In the case of the quickstart deployment, the hostname and port are ",(0,o.kt)("inlineCode",{parentName:"li"},"http://localhost:8888"),", which connects to the Router running on your local machine."),(0,o.kt)("li",{parentName:"ul"},"The SQL endpoint in Druid for the Avatica driver is  ",(0,o.kt)("inlineCode",{parentName:"li"},"/druid/v2/sql/avatica/"),".")),(0,o.kt)("p",null,"Example code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// Connect to /druid/v2/sql/avatica/ on your Broker.\nString url = "jdbc:avatica:remote:url=http://localhost:8082/druid/v2/sql/avatica/";\n\n// Set any connection context parameters you need here\n// Or leave empty for default behavior.\nProperties connectionProperties = new Properties();\n\ntry (Connection connection = DriverManager.getConnection(url, connectionProperties)) {\n  try (\n      final Statement statement = connection.createStatement();\n      final ResultSet resultSet = statement.executeQuery(query)\n  ) {\n    while (resultSet.next()) {\n      // process result set\n    }\n  }\n}\n')),(0,o.kt)("p",null,"For a runnable example that includes a query that you might run, see ",(0,o.kt)("a",{parentName:"p",href:"#examples"},"Examples"),"."),(0,o.kt)("p",null,"It is also possible to use a protocol buffers JDBC connection with Druid, this offer reduced bloat and potential performance\nimprovements for larger result sets. To use it apply the following connection url instead, everything else remains the same"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'String url = "jdbc:avatica:remote:url=http://localhost:8082/druid/v2/sql/avatica-protobuf/;serialization=protobuf";\n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The protobuf endpoint is also known to work with the official ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/calcite-avatica-go"},"Golang Avatica driver"))),(0,o.kt)("p",null,"Table metadata is available over JDBC using ",(0,o.kt)("inlineCode",{parentName:"p"},"connection.getMetaData()")," or by querying the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/26.0.0/querying/sql-metadata-tables"},'"INFORMATION_SCHEMA" tables'),". For an example of this, see ",(0,o.kt)("a",{parentName:"p",href:"#get-the-metadata-for-a-datasource"},"Get the metadata for a datasource"),"."),(0,o.kt)("h2",{id:"connection-stickiness"},"Connection stickiness"),(0,o.kt)("p",null,"Druid's JDBC server does not share connection state between Brokers. This means that if you're using JDBC and have\nmultiple Druid Brokers, you should either connect to a specific Broker or use a load balancer with sticky sessions\nenabled. The Druid Router process provides connection stickiness when balancing JDBC requests, and can be used to achieve\nthe necessary stickiness even with a normal non-sticky load balancer. Please see the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/26.0.0/design/router"},"Router")," documentation for more details."),(0,o.kt)("p",null,"Note that the non-JDBC ",(0,o.kt)("a",{parentName:"p",href:"/docs/26.0.0/querying/sql-api#submit-a-query"},"JSON over HTTP")," API is stateless and does not require stickiness."),(0,o.kt)("h2",{id:"dynamic-parameters"},"Dynamic parameters"),(0,o.kt)("p",null,"You can use ",(0,o.kt)("a",{parentName:"p",href:"/docs/26.0.0/querying/sql#dynamic-parameters"},"parameterized queries")," in JDBC code, as in this example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'PreparedStatement statement = connection.prepareStatement("SELECT COUNT(*) AS cnt FROM druid.foo WHERE dim1 = ? OR dim1 = ?");\nstatement.setString(1, "abc");\nstatement.setString(2, "def");\nfinal ResultSet resultSet = statement.executeQuery();\n')),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("p",null,"The following section contains two complete samples that use the JDBC connector:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#get-the-metadata-for-a-datasource"},"Get the metadata for a datasource")," shows you how to query the ",(0,o.kt)("inlineCode",{parentName:"li"},"INFORMATION_SCHEMA")," to get metadata like column names. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#query-data"},"Query data")," runs a select query against the datasource.")),(0,o.kt)("p",null,"You can try out these examples after verifying that you meet the ",(0,o.kt)("a",{parentName:"p",href:"#prerequisites"},"prerequisites"),"."),(0,o.kt)("p",null,"For more information about the connection options, see ",(0,o.kt)("a",{parentName:"p",href:"https://calcite.apache.org/avatica/docs/client_reference.html"},"Client Reference"),"."),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"Make sure you meet the following requirements before trying these examples:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A supported Java version, such as Java 8")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://calcite.apache.org/avatica/downloads/"},"Avatica JDBC driver"),". You can add the JAR  to your ",(0,o.kt)("inlineCode",{parentName:"p"},"CLASSPATH")," directly or manage it externally, such as through Maven and a ",(0,o.kt)("inlineCode",{parentName:"p"},"pom.xml")," file.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"An available Druid instance. You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"micro-quickstart")," configuration described in ",(0,o.kt)("a",{parentName:"p",href:"/docs/26.0.0/tutorials/"},"Quickstart (local)"),". The examples assume that you are using the quickstart, so no authentication or authorization is expected unless explicitly mentioned. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The example ",(0,o.kt)("inlineCode",{parentName:"p"},"wikipedia")," datasource from the quickstart is loaded on your Druid instance. If you have a different datasource loaded, you can still try these examples. You'll have to update the table name and column names to match your datasource."))),(0,o.kt)("h3",{id:"get-the-metadata-for-a-datasource"},"Get the metadata for a datasource"),(0,o.kt)("p",null,"Metadata, such as column names, is available either through the ",(0,o.kt)("a",{parentName:"p",href:"/docs/26.0.0/querying/sql-metadata-tables"},(0,o.kt)("inlineCode",{parentName:"a"},"INFORMATION_SCHEMA"))," table or through ",(0,o.kt)("inlineCode",{parentName:"p"},"connect.getMetaData()"),". The following example uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"INFORMATION_SCHEMA")," table to retrieve and print the list of column names for the ",(0,o.kt)("inlineCode",{parentName:"p"},"wikipedia")," datasource that you loaded during a previous tutorial."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import java.sql.*;\nimport java.util.Properties;\n\npublic class JdbcListColumns {\n\n    public static void main(String args[]) throws SQLException\n    {\n        // Connect to /druid/v2/sql/avatica/ on your Router. \n        // You can connect to a Broker but must configure connection stickiness if you do. \n        String url = "jdbc:avatica:remote:url=http://localhost:8888/druid/v2/sql/avatica/";\n\n        String query = "SELECT COLUMN_NAME,* FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = \'wikipedia\' and TABLE_SCHEMA=\'druid\'";\n        // Set any connection context parameters you need here\n        // Or leave empty for default behavior.\n        Properties connectionProperties = new Properties();\n\n        try (Connection connection = DriverManager.getConnection(url, connectionProperties)) {\n            try (\n                    final Statement statement = connection.createStatement();\n                    final ResultSet rs = statement.executeQuery(query)\n            ) {\n                while (rs.next()) {\n                    String columnName = rs.getString("COLUMN_NAME");\n                    System.out.println(columnName);\n                }\n            }\n        } catch (SQLException e) {\n            throw new RuntimeException(e);\n        }\n\n    }\n}\n')),(0,o.kt)("h3",{id:"query-data"},"Query data"),(0,o.kt)("p",null,"Now that you know what columns are available, you can start querying the data. The following example queries the datasource named ",(0,o.kt)("inlineCode",{parentName:"p"},"wikipedia")," for the timestamps and comments from Japan. It also sets the ",(0,o.kt)("a",{parentName:"p",href:"/docs/26.0.0/querying/sql-query-context"},"query context parameter")," ",(0,o.kt)("inlineCode",{parentName:"p"},"sqlTimeZone")," . Optionally,  you can also parameterize queries by using ",(0,o.kt)("a",{parentName:"p",href:"#dynamic-parameters"},"dynamic parameters"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import java.sql.*;\nimport java.util.Properties;\n\npublic class JdbcCountryAndTime {\n\n    public static void main(String args[]) throws SQLException\n    {\n        // Connect to /druid/v2/sql/avatica/ on your Router. \n        // You can connect to a Broker but must configure connection stickiness if you do. \n        String url = "jdbc:avatica:remote:url=http://localhost:8888/druid/v2/sql/avatica/";\n\n        //The query you want to run.\n        String query = "SELECT __time, isRobot, countryName, comment FROM wikipedia WHERE countryName=\'Japan\'";\n        // Set any connection context parameters you need here\n        // Or leave empty for default behavior.\n        Properties connectionProperties = new Properties();\n        connectionProperties.setProperty("sqlTimeZone", "America/Los_Angeles");\n\n        try (Connection connection = DriverManager.getConnection(url, connectionProperties)) {\n            try (\n                    final Statement statement = connection.createStatement();\n                    final ResultSet rs = statement.executeQuery(query)\n            ) {\n                while (rs.next()) {\n                    Timestamp timeStamp = rs.getTimestamp("__time");\n                    String comment = rs.getString("comment");\n                    System.out.println(timeStamp);\n                    System.out.println(comment);\n                }\n            }\n        } catch (SQLException e) {\n            throw new RuntimeException(e);\n        }\n\n    }\n}\n')))}h.isMDXComponent=!0}}]);
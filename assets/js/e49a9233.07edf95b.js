"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[6980],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},50358:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(52263);const i="authorByline_VoxI",s="authorLabel_a70t",o="authorProfileImage_URwT";const l=function(e){let{frontMatter:t}=e;const{siteConfig:n}=(0,r.Z)(),l=n.customFields.authors;return a.createElement(a.Fragment,null,t.authors&&a.createElement("div",{className:"docAuthors"},a.createElement("hr",null),t.authors.map((e=>a.createElement("div",{key:e,className:i},a.createElement("img",{className:o,src:`/img/${l[e].image?l[e].image:"default_author_profile_pic.png"}`,alt:`Profile picture for ${l[e].name}`}),a.createElement("div",null,a.createElement("div",{className:s},"Author:"),a.createElement("div",null,a.createElement("a",{href:l[e].link,target:"_blank"},l[e].name),", ",l[e].title))))),a.createElement("hr",null)))}},33965:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905)),i=n(50358);const s={id:"how-to-use-ssl-tls-with-redis-enterprise",title:"How to Use SSL/TLS With Redis Enterprise",slug:"/guide/security/how-to-use-ssl-tls-with-redis-enterprise/",description:"Learn how to secure your Redis databases using SSL",authors:["tug"],keywords:["java","node.js","python","ssl","tls"]},o=void 0,l={unversionedId:"guides/security/how-to-use-tls-with-redis-enterprise/how-to-use-ssl-tls-with-redis-enterprise",id:"guides/security/how-to-use-tls-with-redis-enterprise/how-to-use-ssl-tls-with-redis-enterprise",title:"How to Use SSL/TLS With Redis Enterprise",description:"Learn how to secure your Redis databases using SSL",source:"@site/docs/guides/security/how-to-use-tls-with-redis-enterprise/how-to-use-ssl-tls-with-redis-enterprise.mdx",sourceDirName:"guides/security/how-to-use-tls-with-redis-enterprise",slug:"/guide/security/how-to-use-ssl-tls-with-redis-enterprise/",permalink:"/guide/security/how-to-use-ssl-tls-with-redis-enterprise/",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/guides/security/how-to-use-tls-with-redis-enterprise/how-to-use-ssl-tls-with-redis-enterprise.mdx",tags:[],version:"current",lastUpdatedAt:1667498754,formattedLastUpdatedAt:"Nov 3, 2022",frontMatter:{id:"how-to-use-ssl-tls-with-redis-enterprise",title:"How to Use SSL/TLS With Redis Enterprise",slug:"/guide/security/how-to-use-ssl-tls-with-redis-enterprise/",description:"Learn how to secure your Redis databases using SSL",authors:["tug"],keywords:["java","node.js","python","ssl","tls"]}},c={},p=[{value:"1- Get the Certificate from Redis Cluster",id:"1--get-the-certificate-from-redis-cluster",level:2},{value:"2- Generate a New Client Certificate",id:"2--generate-a-new-client-certificate",level:2},{value:"3- Configure the Redis Database",id:"3--configure-the-redis-database",level:2},{value:"4- Connect to the Database using the Certificate",id:"4--connect-to-the-database-using-the-certificate",level:2},{value:"4.1 Using Redis-CLI",id:"41-using-redis-cli",level:3},{value:"4.2 Using Python",id:"42-using-python",level:3},{value:"4.3 Using Node.JS",id:"43-using-nodejs",level:3},{value:"4.4 Using Java",id:"44-using-java",level:3},{value:"Conclusion",id:"conclusion",level:2}],u={toc:p};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{frontMatter:s,mdxType:"Authors"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Header",src:n(58553).Z,width:"900",height:"600"})),(0,r.kt)("p",null,"In this article, I will explain how to secure your Redis databases using SSL (Secure Sockets Layer). In production, it is a good practice to use SSL to protect the data that are moving between various computers (client applications and Redis servers). Transport Level Security (TLS) guarantees that only allowed applications/computers are connected to the database, and also that data is not viewed or altered by a middle man process."),(0,r.kt)("p",null,"You can secure the connections between your client applications and Redis cluster using:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"One-Way SSL: the client (your application) get the certificate from the server (Redis cluster), validate it, and then all communications are encrypted"),(0,r.kt)("li",{parentName:"ul"},"Two-Way SSL: (aka mutual SSL) here both the client and the server authenticate each other and validate that both ends are trusted.")),(0,r.kt)("p",null,"In this article, I will focus on the Two-Way SSL, and using Redis Enterprise."),(0,r.kt)("p",null,"Prerequisites:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A Redis Enterprise 6.0.x database, (my database is protected by the password ",(0,r.kt)("inlineCode",{parentName:"li"},"secretdb01"),", and listening on port ",(0,r.kt)("inlineCode",{parentName:"li"},"12000"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"redis-cli")," to run basic commands"),(0,r.kt)("li",{parentName:"ul"},"Python, Node, and Java installed if you want to test various languages.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Simple Test")),(0,r.kt)("p",null,"Let's make sure that the database is available:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"redis-cli -p 12000 -a secretdb01 INFO SERVER\n")),(0,r.kt)("p",null,"This should print the Server information."),(0,r.kt)("h2",{id:"1--get-the-certificate-from-redis-cluster"},"1- Get the Certificate from Redis Cluster"),(0,r.kt)("p",null,"You have access to the Redis Enterprise Cluster, you go to one of the nodes to retrieve the certificate (that is a self-generated one by default)."),(0,r.kt)("p",null,"The cluster certificate is located at: ",(0,r.kt)("inlineCode",{parentName:"p"},"/etc/opt/redislabs/proxy_cert.pem"),"."),(0,r.kt)("p",null,'You have to copy it on each client machine; note that once it is done you can use this certificate to connect using "One-Way SSL", but not the purpose of this article.'),(0,r.kt)("p",null,"In my demonstration I am using Docker and copy the certificate using this command from my host:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker cp redis-node1:/etc/opt/redislabs/proxy_cert.pem ./certificates\n")),(0,r.kt)("h2",{id:"2--generate-a-new-client-certificate"},"2- Generate a New Client Certificate"),(0,r.kt)("p",null,"Using the Two-Way SSL you need to have a certificate for the client that will be used by Redis database proxy to trust the client."),(0,r.kt)("p",null,"In this article I will use a self-signed certificate using OpenSSL, in this example, we are creating a certificate for an application named ",(0,r.kt)("inlineCode",{parentName:"p"},"app_001"),"."),(0,r.kt)("p",null,"You can create as many certificates as you want, or reuse this one for all servers/applications."),(0,r.kt)("p",null,"Open a terminal and run the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"\nopenssl req \\\n  -nodes \\\n -newkey rsa:2048 \\\n -keyout client_key_app_001.pem \\\n -x509 \\\n -days 36500 \\\n -out client_cert_app_001.pem\n\n")),(0,r.kt)("p",null,"This command generate a new client key (",(0,r.kt)("inlineCode",{parentName:"p"},"client_key_001.pem"),") and certificate (",(0,r.kt)("inlineCode",{parentName:"p"},"client_cert_001.pem"),") with no passphrase."),(0,r.kt)("h2",{id:"3--configure-the-redis-database"},"3- Configure the Redis Database"),(0,r.kt)("p",null,"The next step is to take the certificate and add it to the database you want to protect."),(0,r.kt)("p",null,"Let's copy the certificate and paste it into the Redis Enterprise Web Console."),(0,r.kt)("p",null,"Copy the certificate in your clipboard:"),(0,r.kt)("p",null,"Mac:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pbcopy < client_cert_app_001.pem\n")),(0,r.kt)("p",null,"Linux:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," xclip -sel clip < client_cert_app_001.pem\n")),(0,r.kt)("p",null,"Windows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"clip < client_cert_app_001.pem\n")),(0,r.kt)("p",null,"Go to the Redis Enterprise Admin Web Console and enable TLS on your database:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Edit the database configuration"),(0,r.kt)("li",{parentName:"ol"},"Check TLS"),(0,r.kt)("li",{parentName:"ol"},'Select "Require TLS for All communications"'),(0,r.kt)("li",{parentName:"ol"},'Check "Enforce client authentication"'),(0,r.kt)("li",{parentName:"ol"},"Paste the certificate in the text area"),(0,r.kt)("li",{parentName:"ol"},"Click the Save button to save the certificate"),(0,r.kt)("li",{parentName:"ol"},"Click the Update button to save the configuration.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Security Configuration",src:n(67862).Z,width:"1014",height:"219"})),(0,r.kt)("p",null,"The database is now protected, and it is mandatory to use the SSL certificate to connect to it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"redis-cli -p 12000 -a secretdb01 INFO SERVER\n(error) ERR unencrypted connection is prohibited\n")),(0,r.kt)("h2",{id:"4--connect-to-the-database-using-the-certificate"},"4- Connect to the Database using the Certificate"),(0,r.kt)("p",null,'In all following examples, I am using a "self-signed" certificate, so I do not check the validity of the hostname.\nYou should adapt the connections/TLS information based on your certificate configuration.'),(0,r.kt)("h3",{id:"41-using-redis-cli"},"4.1 Using Redis-CLI"),(0,r.kt)("p",null,"To connect to a SSL protected database using ",(0,r.kt)("inlineCode",{parentName:"p"},"redis-cli")," you have to use ",(0,r.kt)("a",{parentName:"p",href:"https://www.stunnel.org/index.html"},(0,r.kt)("inlineCode",{parentName:"a"},"stunnel")),"."),(0,r.kt)("p",null,"Create a ",(0,r.kt)("inlineCode",{parentName:"p"},"stunnel.conf")," file with the following content:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cert = /path_to/certificates/client_cert_app_001.pem\nkey = /path_to/certificates/client_key_app_001.pem\ncafile = /path_to/certificates/proxy_cert.pem\nclient = yes\n\n[redislabs]\naccept = 127.0.0.1:6380\nconnect = 127.0.0.1:12000\n\n")),(0,r.kt)("p",null,"Start stunnel using the command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"stunnel ./stunnel.conf\n")),(0,r.kt)("p",null,"This will start a process that listen to port ",(0,r.kt)("inlineCode",{parentName:"p"},"6380")," and used as a proxy to the Redis Enterprise database on port ",(0,r.kt)("inlineCode",{parentName:"p"},"12000"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"redis-cli -p 6380 -a secretdb01 INFO SERVER\n")),(0,r.kt)("h3",{id:"42-using-python"},"4.2 Using Python"),(0,r.kt)("p",null,"Using Python, you have to set the SSL connection parameters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"#!/usr/local/bin/python3\n\nimport redis\nimport pprint\n\ntry:\n  r = redis.StrictRedis(\n    password='secretdb01',\n    decode_responses=True,\n    host='localhost',\n    port=12000,\n    ssl=True,\n    ssl_keyfile='./client_key_app_001.pem',\n    ssl_certfile='./client_cert_app_001.pem',\n    ssl_cert_reqs='required',\n    ssl_ca_certs='./proxy_cert.pem',\n    )\n\n  info = r.info()\n  pprint.pprint(info)\n\nexcept Exception as err:\n  print(\"Error connecting to Redis: {}\".format(err))\n")),(0,r.kt)("p",null,'More information in the documentation "',(0,r.kt)("a",{parentName:"p",href:"https://developer.redis.com/develop/python/"},"Using Redis with Python"),'".'),(0,r.kt)("h3",{id:"43-using-nodejs"},"4.3 Using Node.JS"),(0,r.kt)("p",null,"For ",(0,r.kt)("a",{parentName:"p",href:"http://redis.js.org/"},"Node Redis"),", use the ",(0,r.kt)("a",{parentName:"p",href:"https://nodejs.org/api/tls.html"},"TLS")," library to configure the client connection:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var redis = require('redis');\nvar tls = require('tls');\nvar fs = require('fs');\n\nvar ssl = {\n  key: fs.readFileSync(\n    '../certificates/client_key_app_001.pem',\n    (encoding = 'ascii'),\n  ),\n  cert: fs.readFileSync(\n    '../certificates/client_cert_app_001.pem',\n    (encoding = 'ascii'),\n  ),\n  ca: [fs.readFileSync('../certificates/proxy_cert.pem', (encoding = 'ascii'))],\n  checkServerIdentity: () => {\n    return null;\n  },\n};\n\nvar client = redis.createClient(12000, '127.0.0.1', {\n  password: 'secretdb01',\n  tls: ssl,\n});\n\nclient.info('SERVER', function (err, reply) {\n  console.log(reply);\n});\n")),(0,r.kt)("p",null,'More information in the documentation "',(0,r.kt)("a",{parentName:"p",href:"https://developer.redis.com/develop/node/"},"Using Redis with Node.js"),'".'),(0,r.kt)("h3",{id:"44-using-java"},"4.4 Using Java"),(0,r.kt)("p",null,"In Java, to be able to connect using SSL, you have to install all the certificates in the Java environment using the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en/java/javase/11/tools/keytool.html"},"keytool")," utility."),(0,r.kt)("p",null,"Create a ",(0,r.kt)("strong",{parentName:"p"},"keystore")," file that stores the key and certificate you have created earlier:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'openssl pkcs12 -export \\\n  -in ./client_cert_app_001.pem \\\n  -inkey ./client_key_app_001.pem \\\n  -out client-keystore.p12 \\\n  -name "APP_01_P12"\n')),(0,r.kt)("p",null,"As you can see the keystore is used to store the credentials associated with you client; it will be used later with the ",(0,r.kt)("inlineCode",{parentName:"p"},"-javax.net.ssl.keyStore")," system property in the Java application."),(0,r.kt)("p",null,"In addition to the keys tore, you also have to create a trust store, that is used to store other credentials for example in our case the redis cluster certificate."),(0,r.kt)("p",null,"Create a ",(0,r.kt)("strong",{parentName:"p"},"trust store")," file and add the Redis cluster certificate to it"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'keytool -genkey \\\n  -dname "cn=CLIENT_APP_01" \\\n  -alias truststorekey \\\n  -keyalg RSA \\\n  -keystore ./client-truststore.p12 \\\n  -keypass secret\n  -storepass secret\n  -storetype pkcs12\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"keytool -import \\\n  -keystore ./client-truststore.p12 \\\n  -file ./proxy_cert.pem \\\n  -alias redis-cluster-crt\n")),(0,r.kt)("p",null,"The trustore will be used later with the ",(0,r.kt)("inlineCode",{parentName:"p"},"-javax.net.ssl.trustStore")," system property in the Java application."),(0,r.kt)("p",null,"You can now run the Java application with the following environment variables:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"java -Djavax.net.ssl.keyStore=/path_to/certificates/java/client-keystore.p12 \\\n-Djavax.net.ssl.keyStorePassword=secret \\\n-Djavax.net.ssl.trustStore=/path_to/certificates/java/client-truststore.p12 \\\n-Djavax.net.ssl.trustStorePassword=secret \\\n-jar MyApp.jar\n")),(0,r.kt)("p",null,"For this example and simplicity, I will hard code these property in the Java code itself:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\nimport redis.clients.jedis.Jedis;\nimport java.net.URI;\n\npublic class SSLTest {\n\n    public static void main(String[] args) {\n\n        System.setProperty("javax.net.ssl.keyStore", "/path_to/certificates/client-keystore.p12");\n        System.setProperty("javax.net.ssl.keyStorePassword", "secret");\n\n        System.setProperty("javax.net.ssl.trustStore","/path_to/certificates/client-truststore.p12");\n        System.setProperty("javax.net.ssl.trustStorePassword","secret");\n\n        URI uri = URI.create("rediss://127.0.0.1:12000");\n\n        Jedis jedis = new Jedis(uri);\n        jedis.auth("secretdb01");\n\n\n        System.out.println(jedis.info("SERVER"));\n        jedis.close();\n    }\n\n}\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"line 8-12, the system environment variables are set to point to the keystore and trust store (this should be externalized)"),(0,r.kt)("li",{parentName:"ul"},"line 14, the Redis URL start with ",(0,r.kt)("inlineCode",{parentName:"li"},"rediss")," with 2 s to indicate that the connection should be encrypted"),(0,r.kt)("li",{parentName:"ul"},"line 17, set the database password")),(0,r.kt)("p",null,'More information in the documentation "',(0,r.kt)("a",{parentName:"p",href:"https://developer.redis.com/develop/java/"},"Using Redis with Java"),'".'),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"In this article, you have learned how to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"retrieve the Redis Server certificate"),(0,r.kt)("li",{parentName:"ul"},"generate a client certificate"),(0,r.kt)("li",{parentName:"ul"},"protect your database to enforce transport level security (TLS) with 2 ways authentication"),(0,r.kt)("li",{parentName:"ul"},"connect to the database from ",(0,r.kt)("inlineCode",{parentName:"li"},"redis-cli"),", Python, Node and Java")))}d.isMDXComponent=!0},58553:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/000_header-1e7e2d24525b6d38705cdbca9b008b78.jpeg"},67862:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/001-tls-configuration-503f00085716901e3134c38734c1c920.png"}}]);
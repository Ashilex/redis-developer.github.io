"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[7459],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(a),m=r,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||s;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<s;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},50358:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(67294),r=a(52263);const s="authorByline_VoxI",i="authorLabel_a70t",o="authorProfileImage_URwT";const l=function(e){let{frontMatter:t}=e;const{siteConfig:a}=(0,r.Z)(),l=a.customFields.authors;return n.createElement(n.Fragment,null,t.authors&&n.createElement("div",{className:"docAuthors"},n.createElement("hr",null),t.authors.map((e=>n.createElement("div",{key:e,className:s},n.createElement("img",{className:o,src:`/img/${l[e].image?l[e].image:"default_author_profile_pic.png"}`,alt:`Profile picture for ${l[e].name}`}),n.createElement("div",null,n.createElement("div",{className:i},"Author:"),n.createElement("div",null,n.createElement("a",{href:l[e].link,target:"_blank"},l[e].name),", ",l[e].title))))),n.createElement("hr",null)))}},22761:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905)),s=a(50358);const i={id:"index-gettingstarted",title:"Storing and Querying JSON documents using Redis Stack",sidebar_label:"Storing and Querying JSON documents",slug:"/howtos/redisjson/getting-started",authors:["ajeet"]},o=void 0,l={unversionedId:"howtos/redisjson/getting-started/index-gettingstarted",id:"howtos/redisjson/getting-started/index-gettingstarted",title:"Storing and Querying JSON documents using Redis Stack",description:"Redis Stack is an extension of Redis that adds modern data models and processing engines to provide a complete developer experience. Redis Stack provides a simple and seamless way to access different data models such as full-text search, document store, graph, time series, and probabilistic data structures enabling developers to build any real-time data application.",source:"@site/docs/howtos/redisjson/getting-started/index-gettingstarted.mdx",sourceDirName:"howtos/redisjson/getting-started",slug:"/howtos/redisjson/getting-started",permalink:"/howtos/redisjson/getting-started",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/redisjson/getting-started/index-gettingstarted.mdx",tags:[],version:"current",lastUpdatedAt:1667495358,formattedLastUpdatedAt:"Nov 3, 2022",frontMatter:{id:"index-gettingstarted",title:"Storing and Querying JSON documents using Redis Stack",sidebar_label:"Storing and Querying JSON documents",slug:"/howtos/redisjson/getting-started",authors:["ajeet"]},sidebar:"docs",previous:{title:"Overview",permalink:"/howtos/redisjson/"},next:{title:"RedisJSON and Python",permalink:"/howtos/redisjson/using-python"}},d={},p=[{value:"Step 1. Create a free Cloud account",id:"step-1-create-a-free-cloud-account",level:3},{value:"Step 2. Create Your database",id:"step-2-create-your-database",level:3},{value:"Step 3. Verify the database details",id:"step-3-verify-the-database-details",level:3},{value:"Step 4. Using RedisInsight",id:"step-4-using-redisinsight",level:3},{value:"Step 5. Enter Redis Enterprise Cloud details",id:"step-5-enter-redis-enterprise-cloud-details",level:3},{value:"Step 6. Verify the database under RedisInsight dashboard",id:"step-6-verify-the-database-under-redisinsight-dashboard",level:3},{value:"Step 7. Getting Started with RedisJSON",id:"step-7-getting-started-with-redisjson",level:3},{value:"Scalar",id:"scalar",level:4},{value:"Objects",id:"objects",level:4},{value:"Retrieving a part of JSON document",id:"retrieving-a-part-of-json-document",level:4},{value:"Retrieving the type of JSON data",id:"retrieving-the-type-of-json-data",level:4},{value:"JSON arrays of objects",id:"json-arrays-of-objects",level:4},{value:"JSON nested objects",id:"json-nested-objects",level:4},{value:"Next Steps",id:"next-steps",level:3}],u={toc:p};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(s.Z,{frontMatter:i,mdxType:"Authors"}),(0,r.kt)("p",null,"Redis Stack is an extension of Redis that adds modern data models and processing engines to provide a complete developer experience. Redis Stack provides a simple and seamless way to access different data models such as full-text search, document store, graph, time series, and probabilistic data structures enabling developers to build any real-time data application."),(0,r.kt)("p",null,"In this tutorial, you will see how Redis Stack can help you in storing and querying JSON documents."),(0,r.kt)("h3",{id:"step-1-create-a-free-cloud-account"},"Step 1. Create a free Cloud account"),(0,r.kt)("p",null,"Create your free ",(0,r.kt)("a",{href:"https://redis.com/try-free/",target:"_blank",rel:"noopener"},"Redis Enterprise Cloud account"),". Once you click on \u201cGet Started\u201d, you will receive an email with a link to activate your account and complete your signup process."),(0,r.kt)("admonition",{title:"TIP",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For a limited time, use ",(0,r.kt)("strong",{parentName:"p"},"TIGER200")," to get ",(0,r.kt)("strong",{parentName:"p"},"$200")," credits on Redis Enterprise Cloud and try all the advanced capabilities!"),(0,r.kt)("p",{parentName:"admonition"},"\ud83c\udf89 ",(0,r.kt)("a",{parentName:"p",href:"https://redis.com/try-free"},"Click here to sign up"))),(0,r.kt)("h3",{id:"step-2-create-your-database"},"Step 2. Create Your database"),(0,r.kt)("p",null,'Choose your preferred cloud vendor. Select the region and then click "Let\'s start free" to create your free database automatically.'),(0,r.kt)("admonition",{title:"TIP",type:"info"},(0,r.kt)("p",{parentName:"admonition"},'If you want to create a custom database with your preferred name and type of Redis,\nclick "Create a custom database" option shown in the image.')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"create database ",src:a(87061).Z,width:"1676",height:"1010"})),(0,r.kt)("h3",{id:"step-3-verify-the-database-details"},"Step 3. Verify the database details"),(0,r.kt)("p",null,'You will be provided with Public endpoint URL and "Redis Stack" as the type of database with the list of modules that comes by default.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"verify database",src:a(68834).Z,width:"1346",height:"881"})),(0,r.kt)("h3",{id:"step-4-using-redisinsight"},"Step 4. Using RedisInsight"),(0,r.kt)("p",null,"RedisInsight is a visual tool that lets you do both GUI- and CLI-based interactions with your Redis database, and so much more when developing your Redis based application. It is a fully-featured pure Desktop GUI client that provides capabilities to design, develop and optimize your Redis application. It works with any cloud provider as long as you run it on a host with network access to your cloud-based Redis server. It makes it easy to discover cloud databases and configure connection details with a single click. It allows you to automatically add Redis Enterprise Software and Redis Enterprise Cloud databases."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/explore/redisinsightv2/getting-started"},"Follow this link"),' to install RedisInsight v2 on your local system.\nAssuming that you already have RedisInsight v2 installed on your MacOS, you can browse through the Applications and click "RedisInsight-v2" to bring up the Redis Desktop GUI tool.'),(0,r.kt)("h3",{id:"step-5-enter-redis-enterprise-cloud-details"},"Step 5. Enter Redis Enterprise Cloud details"),(0,r.kt)("p",null,"Add the Redis Enterprise cloud database endpoint, port and password."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"access redisinsight",src:a(22632).Z,width:"2332",height:"1734"})),(0,r.kt)("h3",{id:"step-6-verify-the-database-under-redisinsight-dashboard"},"Step 6. Verify the database under RedisInsight dashboard"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"database details",src:a(41027).Z,width:"2226",height:"844"})),(0,r.kt)("h3",{id:"step-7-getting-started-with-redisjson"},"Step 7. Getting Started with RedisJSON"),(0,r.kt)("p",null,"The following steps use some basic RedisJSON commands. You can run them from the Redis command-line interface (redis-cli) or use the CLI available in RedisInsight."),(0,r.kt)("p",null,"To interact with RedisJSON, you will most often use the JSON.SET and JSON.GET commands. Before using RedisJSON, you should familiarize yourself with its commands and syntax as detailed in the documentation: RedisJSON Commands."),(0,r.kt)("p",null,"Let\u2019s go ahead and test drive some JSON-specific operations for setting and retrieving a Redis key with a JSON value:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Scalar"),(0,r.kt)("li",{parentName:"ul"},"Objects (including nested objects)"),(0,r.kt)("li",{parentName:"ul"},"Arrays of JSON objects"),(0,r.kt)("li",{parentName:"ul"},"JSON nested objects")),(0,r.kt)("h4",{id:"scalar"},"Scalar"),(0,r.kt)("p",null,"Under RedisJSON, a key can contain any valid JSON value. It can be scalar, objects or arrays. JSON scalar is basically a string. You will have to use the JSON.SET command to set the JSON value. For new Redis keys the path must be the root, so you will use \u201c.\u201d path in the example below. For existing keys, when the entire path exists, the value that it contains is replaced with the JSON value. Here you will use JSON.SET to set the JSON scalar value to \u201cHello JSON!\u201d Scalar will contain a string that holds \u201cHello JSON!\u201d"),(0,r.kt)("b",null,"Command"),":",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"JSON.SET greetings .  ' \"Hello JSON!\" '\n")),(0,r.kt)("b",null,"Result"),":",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"OK\n")),(0,r.kt)("p",null,"Use JSON.GET to return the value at path in JSON serialized form:"),(0,r.kt)("b",null,"Command"),":",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"JSON.GET greetings\n")),(0,r.kt)("b",null,"Result"),":",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"\\"Hello JSON!\\""\n')),(0,r.kt)("h4",{id:"objects"},"Objects"),(0,r.kt)("p",null,"Let\u2019s look at a JSON object example. A JSON object contains data in the form of a key-value pair. The keys are strings and the values are the JSON types. Keys and values are separated by a colon. Each entry (key-value pair) is separated by a comma. The { (curly brace) represents the JSON object:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "employee": {\n        "name": "alpha",\n        "age": 40,\n        "married": true\n    }\n}\n')),(0,r.kt)("p",null,"Here is the command to insert JSON data into Redis:"),(0,r.kt)("b",null,"Command"),":",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'JSON.SET employee_profile $ \'{ "employee": { "name": "alpha", "age": 40,"married": true }  } \'\n')),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},'Please note that the above command works for 2.0+ release of RedisJSON. If you are using the older version of RedisJSON, you can replace "$" with "."')),(0,r.kt)("b",null,"Result"),":",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"OK"\n')),(0,r.kt)("p",null,"The subcommands below change the reply\u2019s format and are all set to the empty string by default: ",(0,r.kt)("em",{parentName:"p"}," INDENT sets the indentation string for nested levels "),". NEWLINE sets the string that\u2019s printed at the end of each line. ","*"," SPACE sets the string that\u2019s put between a key and a value:"),(0,r.kt)("b",null,"Command"),":",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"JSON.GET employee_profile\n")),(0,r.kt)("b",null,"Result"),":",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"{\\"employee\\":{\\"name\\":\\"alpha\\",\\"age\\":40,\\"married\\":true}}"\n')),(0,r.kt)("h4",{id:"retrieving-a-part-of-json-document"},"Retrieving a part of JSON document"),(0,r.kt)("p",null,"You can also retrieve a part of the JSON document from Redis. In the example below, \u201c.ans\u201d can be passed in the commandline to retrieve the value 4:"),(0,r.kt)("b",null,"Command"),":",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'JSON.SET object . \'{"foo":"bar", "ans":"4" }\'\n')),(0,r.kt)("b",null,"Result"),":",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"OK"\n')),(0,r.kt)("b",null,"Command"),":",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"JSON.GET object\n")),(0,r.kt)("b",null,"Result"),":",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"{\\"foo\\":\\"bar\\",\\"ans\\":\\"4\\"}"\n')),(0,r.kt)("b",null,"Command"),":",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"JSON.GET object .ans\n")),(0,r.kt)("b",null,"Results"),":",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"\\"4\\""\n')),(0,r.kt)("h4",{id:"retrieving-the-type-of-json-data"},"Retrieving the type of JSON data"),(0,r.kt)("p",null,"JSON.TYPE reports the type of JSON value at path and path defaults to root if not provided. If the key or path do not exist, null is returned."),(0,r.kt)("b",null,"Command"),":",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"JSON.TYPE employee_profile\n")),(0,r.kt)("b",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"Object"\n')),(0,r.kt)("h4",{id:"json-arrays-of-objects"},"JSON arrays of objects"),(0,r.kt)("p",null,"The JSON array represents an ordered list of values. A JSON array can store multiple values, including strings, numbers, or objects. In JSON arrays, values must be separated by a comma. The [ (square bracket) represents the JSON array. Let\u2019s look at a simple JSON array example with four objects:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{"employees":[\n    {"name":"Alpha", "email":"alpha@gmail.com", "age":23},\n    {"name":"Beta", "email":"beta@gmail.com", "age":28},\n    {"name":"Gamma", "email":"gamma@gmail.com", "age":33},\n    {"name":"Theta", "email":"theta@gmail.com", "age":41}\n]}\n')),(0,r.kt)("b",null,"Command"),":",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'JSON.SET testarray .  \'{"employees":[         {"name":"Alpha", "email":"alpha@gmail.com", "age":23},         {"name":"Beta", "email":"beta@gmail.com", "age":28},       {"name":"Gamma", "email":"gamma@gmail.com", "age":33},         {"name":"Theta", "email":"theta@gmail.com", "age":41}    ]}   \'\n')),(0,r.kt)("b",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"OK"\n')),(0,r.kt)("b",null,"Command"),":",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"JSON.GET testarray\n")),(0,r.kt)("b",null,"Result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"{\\"employees\\":[{\\"name\\":\\"Alpha\\",\\"email\\":\\\nalpha@gmail.com\n\n\\",\\"age\\":23},{\\"name\\":\\"Beta\\",\\"email\\":\\"beta@gmail.com....\n')),(0,r.kt)("h4",{id:"json-nested-objects"},"JSON nested objects"),(0,r.kt)("p",null,"A JSON object can also have another object. Here is a simple example of a JSON object having another object nested in it:"),(0,r.kt)("b",null,"Command"),":",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'>> JSON.SET employee_info . \' { "firstName": "Alpha",         "lastName": "K", "age": 23,        "address" : {            "streetAddress": "110 Fulbourn Road Cambridge",  "city": "San Francisco", "state": "California", "postalCode": "94016"  } } \'\n')),(0,r.kt)("b",null,"Command"),":",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},">> JSON.GET employee_info\n")),(0,r.kt)("b",null,"Result"),":",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"{\\"firstName\\":\\"Alpha\\",\\"lastName\\":\\"K\\",\\"age\\":23,\\"address\\":{\\"streetAddress\\":\\"110 Fulbourn Road Cambridge\\",\\"city\\":\\"San Francisco\\",\\"state\\":\\"California\\",\\"postalCode\\":\\"94016\\"}}"\n')),(0,r.kt)("h3",{id:"next-steps"},"Next Steps"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://university.redis.com/courses/ru204/"},"RU204: Storing, Querying and Indexing JSON at Speed")," - a course at Redis University"),(0,r.kt)("li",{parentName:"ul"},"Learn more about ",(0,r.kt)("a",{parentName:"li",href:"https://oss.redis.com/redisjson/"},"RedisJSON")," in the Quickstart tutorial."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/howtos/shoppingcart"},"How to build shopping cart app using NodeJS and RedisJSON")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://redis.com/blog/index-and-query-json-docs-with-redis/"},"Indexing, Querying, and Full-Text Search of JSON Documents with Redis"))),(0,r.kt)("h2",{id:""}),(0,r.kt)("div",null,(0,r.kt)("a",{href:"https://launchpad.redis.com",target:"_blank",rel:"noopener",className:"link"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<img\n  src="/img/launchpad.png"\n  className="thumb"\n  loading="lazy"\n  alt="Redis Launchpad"\n/>\n')))))}c.isMDXComponent=!0},22632:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/database_creds-f7ab4af8f0121712ed02fff3901ebfec.png"},41027:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/database_details-d49880aa22636d96917ad114493a4711.png"},68834:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/details_database-471fa25198e8a549638e2fc8710b96c0.png"},87061:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/select_cloud_vendor-1ad229a2effb7aad2f19495d0cea18fb.png"}}]);
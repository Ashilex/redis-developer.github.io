"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[7846],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(t),m=r,h=p["".concat(l,".").concat(m)]||p[m]||c[m]||i;return t?a.createElement(h,s(s({ref:n},u),{},{components:t})):a.createElement(h,s({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,s=new Array(i);s[0]=p;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var d=2;d<i;d++)s[d]=t[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},50358:(e,n,t)=>{t.d(n,{Z:()=>l});var a=t(67294),r=t(52263);const i="authorByline_VoxI",s="authorLabel_a70t",o="authorProfileImage_URwT";const l=function(e){let{frontMatter:n}=e;const{siteConfig:t}=(0,r.Z)(),l=t.customFields.authors;return a.createElement(a.Fragment,null,n.authors&&a.createElement("div",{className:"docAuthors"},a.createElement("hr",null),n.authors.map((e=>a.createElement("div",{key:e,className:i},a.createElement("img",{className:o,src:`/img/${l[e].image?l[e].image:"default_author_profile_pic.png"}`,alt:`Profile picture for ${l[e].name}`}),a.createElement("div",null,a.createElement("div",{className:s},"Author:"),a.createElement("div",null,a.createElement("a",{href:l[e].link,target:"_blank"},l[e].name),", ",l[e].title))))),a.createElement("hr",null)))}},47239:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var a=t(87462),r=(t(67294),t(3905)),i=t(50358);const s={id:"index-jsonind-document",title:"Indexing JSON document using RediSearch",sidebar_label:"Indexing JSON document using RediSearch",slug:"/howtos/redisjson/jsonind-document",authors:["ajeet"]},o=void 0,l={unversionedId:"howtos/redisjson/jsonind-document/index-jsonind-document",id:"howtos/redisjson/jsonind-document/index-jsonind-document",title:"Indexing JSON document using RediSearch",description:"RedisJSON 2.0 Private Preview was announced for the first time during RedisConf 2021. With this newer version, RedisJSON will fully support JSONPath expressions and Active-Active geo-distribution. The Active-Active implementation is based on Conflict-free Replicated Data-Types (CRDT).",source:"@site/docs/howtos/redisjson/jsonind-document/index-jsonind-document.mdx",sourceDirName:"howtos/redisjson/jsonind-document",slug:"/howtos/redisjson/jsonind-document",permalink:"/howtos/redisjson/jsonind-document",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/howtos/redisjson/jsonind-document/index-jsonind-document.mdx",tags:[],version:"current",lastUpdatedAt:1667495358,formattedLastUpdatedAt:"Nov 3, 2022",frontMatter:{id:"index-jsonind-document",title:"Indexing JSON document using RediSearch",sidebar_label:"Indexing JSON document using RediSearch",slug:"/howtos/redisjson/jsonind-document",authors:["ajeet"]},sidebar:"docs",previous:{title:"Storing and retrieving Nested JSON document",permalink:"/howtos/redisjson/storing-complex-json-document"},next:{title:"RedisJSON CheatSheet",permalink:"/howtos/redisjson/redisjson-cheatsheet"}},d={},u=[{value:"Prerequisite:",id:"prerequisite",level:3},{value:"Step 1. Run the &quot;preview&quot; tagged Redismod container",id:"step-1-run-the-preview-tagged-redismod-container",level:3},{value:"Step 2. Create an Index",id:"step-2-create-an-index",level:3},{value:"Step 3. Populate the database with JSON document",id:"step-3-populate-the-database-with-json-document",level:3},{value:"Step 4. Indexing the database with JSON document",id:"step-4-indexing-the-database-with-json-document",level:3},{value:"Step 5. Projecting using JSON Path expressions",id:"step-5-projecting-using-json-path-expressions",level:3},{value:"References",id:"references",level:3}],c={toc:u};function p(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{frontMatter:s,mdxType:"Authors"}),(0,r.kt)("p",null,"RedisJSON 2.0 Private Preview was announced for the first time during RedisConf 2021. With this newer version, RedisJSON will fully support JSONPath expressions and ",(0,r.kt)("a",{parentName:"p",href:"https://redis.com/redis-enterprise/technology/active-active-geo-distribution/"},"Active-Active geo-distribution"),". The Active-Active implementation is based on ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Conflict-free_replicated_data_type"},"Conflict-free Replicated Data-Types (CRDT)"),"."),(0,r.kt)("p",null,"Prior to v2.2, RediSearch only supported Redis hashes. Going forward, RediSearch will support RedisJSON documents. This opens a powerful new set of document-based indexing use cases. In addition, RediSearch now provides query profiling. This will empower developers to understand and optimize their RediSearch queries, increasing their developer experience."),(0,r.kt)("p",null,"RediSearch has been providing indexing and search capabilities on hashes. Under the hood, RedisJSON 2.0 exposes an internal public API. Internal, because this API is exposed to other modules running inside a Redis node. Public, because any module can consume this API. So does RediSearch 2.2 ! In addition to indexing Redis hashes, RediSearch also indexes JSON. To index JSON, you must use the RedisJSON module."),(0,r.kt)("p",null,"By exposing its capabilities to other modules, RedisJSON gives RediSearch the ability to index JSON documents so users can now find documents by indexing and querying the content. These combined modules give you a powerful, low latency, JSON-oriented document database!"),(0,r.kt)("h3",{id:"prerequisite"},"Prerequisite:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Redis 6.x or later"),(0,r.kt)("li",{parentName:"ul"},"RediSearch 2.2 or later"),(0,r.kt)("li",{parentName:"ul"},"RediJSON 2.0 or later")),(0,r.kt)("h3",{id:"step-1-run-the-preview-tagged-redismod-container"},'Step 1. Run the "preview" tagged Redismod container'),(0,r.kt)("p",null,"Please note that this publicly available Docker Image is a community preview and doesn't support Active-Active.This Docker image contains Redis together with the main Redis modules, including RediSearch and RedisJSON. You'll need the preview tag of the image, which you can access as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," docker run -p 6379:6379 redislabs/redismod:preview\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," info modules\n # Modules\n module:name=rg,ver=10006,api=1,filters=0,usedby=[],using=[ai],options=[]\n module:name=graph,ver=20406,api=1,filters=0,usedby=[],using=[],options=[]\n module:name=timeseries,ver=10410,api=1,filters=0,usedby=[],using=[],options=[]\n module:name=bf,ver=20205,api=1,filters=0,usedby=[],using=[],options=[]\n module:name=ai,ver=10003,api=1,filters=0,usedby=[rg],using=[],options=[]\n module:name=ReJSON,ver=20000,api=1,filters=0,usedby=[search],using=[],options=[]\n module:name=search,ver=20200,api=1,filters=0,usedby=[],using=[ReJSON],options=[]\n")),(0,r.kt)("h3",{id:"step-2-create-an-index"},"Step 2. Create an Index"),(0,r.kt)("p",null,"Let's start by creating an index."),(0,r.kt)("p",null,"We can now specify ON JSON to inform RediSearch that we want to index JSON documents.\nThen, on the SCHEMA part, you can provide JSONPath expressions. The result of each JSON Path expression is indexed and associated with a logical name ( attribute ). This attribute (previously called field ) is used in the query part."),(0,r.kt)("p",null,"This is the basic syntax for indexing a JSON document:"),(0,r.kt)("b",null,"Syntax"),":",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," FT.CREATE {index_name} ON JSON SCHEMA {json_path} AS {attribute} {type}\n")),(0,r.kt)("b",null,"Command"),":",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," FT.CREATE userIdx ON JSON SCHEMA $.user.name AS name TEXT $.user.email AS email  TAG\n")),(0,r.kt)("h3",{id:"step-3-populate-the-database-with-json-document"},"Step 3. Populate the database with JSON document"),(0,r.kt)("p",null,"We should first populate the database with a JSON document using the JSON.SET command. In our example we are going to use the following JSON document:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "user": {\n    "name": "Paul John",\n    "email": "paul.john@example.com",\n    "age": "42",\n    "country": "London"\n  }\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'JSON.SET myuser $ \'{ "user":{"name": "Paul John", "email": "paul.john@example.com", "age": "4", "country": "London" }}\'\n\n')),(0,r.kt)("p",null,"Because indexing is synchronous, the document will be visible on the index as soon as the JSON.SET command returns. Any subsequent query matching the indexed content will return the document"),(0,r.kt)("h3",{id:"step-4-indexing-the-database-with-json-document"},"Step 4. Indexing the database with JSON document"),(0,r.kt)("p",null,"This new version includes a comprehensive support of JSONPath. It is now possible to use all the expressiveness of JSONPath expressions."),(0,r.kt)("p",null,"To create a new index, we use the FT.CREATE command. The schema of the index now accepts JSONPath expressions. The result of the expression is indexed and associated with an attribute (here: title)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"FT.CREATE myIdx ON JSON SCHEMA $.title AS title TEXT\n")),(0,r.kt)("p",null,"We can now do a search query and find our JSON document using FT.SEARCH:"),(0,r.kt)("b",null,"Command"),":",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," FT.SEARCH userIdx '@name:(John)'\n")),(0,r.kt)("b",null,"Result"),":",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},' 1) (integer) 1\n 2) "myuser"\n 3) 1) "$"\n    2) "{\\"user\\":{\\"name\\":\\"Paul John\\",\\"email\\":\\"paul.john@example.com\\",\\"age\\":\\"4\\",\\"country\\":\\"London\\"}}"\n')),(0,r.kt)("p",null,"We just saw that, by default, FT.SEARCH returns the whole document. We can also return only specific attribute (here name)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"  FT.SEARCH userIdx '@name:(John)' RETURN 1 name\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'  1) (integer) 1\n  2) "myuser"\n  3) 1) "name"\n    2) "Paul John"\n')),(0,r.kt)("h3",{id:"step-5-projecting-using-json-path-expressions"},"Step 5. Projecting using JSON Path expressions"),(0,r.kt)("p",null,"The RETURN parameter also accepts a JSON Path expression which let us extract any part of the JSON document.\nIn this example, we return the result of the JSON Path expression $.user.hp ."),(0,r.kt)("b",null,"Command"),":",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," FT.SEARCH userIdx '@name:(John)' RETURN 1 $.user.email\n")),(0,r.kt)("b",null,"Result"),":",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},' 1) (integer) 1\n 2) "myuser"\n 3) 1) "$.user.email"\n    2) "paul.john@example.com"\n')),(0,r.kt)("p",null,"Please Note: It is not possible to index JSON object and JSON arrays.\nTo be indexed, a JSONPath expression must return a single scalar value (string or number). If the JSONPath expression returns an object or an array, it will be ignored."),(0,r.kt)("p",null,"Given the following document:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},' {\n\n    "name": "Paul John",\n    \u201caddress": [\n        "Orbital Park",\n        " Hounslow"\n  ],\n  "pincode": "TW4 6JS"\n }\n')),(0,r.kt)("p",null,"If we want to index the array under the address key, we have to create two fields:"),(0,r.kt)("b",null,"Command"),":",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," FT.CREATE orgIdx ON JSON SCHEMA $.address[0] AS a1 TEXT $.address[1] AS a2 TEXT\n")),(0,r.kt)("p",null,"It's time to index the document:"),(0,r.kt)("b",null,"Command"),":",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},' JSON.SET org:1 $ \'{ "name": "Home Address", "address": [ "Orbital Park","Hounslow" ], "pincode": "TW4 6JS" }\'\n')),(0,r.kt)("p",null,"We can now search in the address:"),(0,r.kt)("b",null,"Command"),":",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},' FT.SEARCH orgIdx "Orbital Park"\n')),(0,r.kt)("b",null,"Result"),":",(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},' FT.SEARCH orgIdx "Orbital Park"\n 1) (integer) 1\n 2) "org:1"\n 3) 1) "$"\n   2) "{\\"name\\":\\"Home Address\\",\\"address\\":[\\"Orbital Park\\",\\"Hounslow\\"],\\"pincode\\":\\"TW4 6JS\\"}"\n')),(0,r.kt)("h3",{id:"references"},"References"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://university.redis.com/courses/ru204/"},"RU204: Storing, Querying and Indexing JSON at Speed")," - a course at Redis University"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://oss.redis.com/redisearch/master/Indexing_JSON/"},"Indexing JSON Documents")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://redis.com/blog/index-and-query-json-docs-with-redis/"},"Indexing, Querying, and Full-Text Search of JSON Documents with Redis"))))}p.isMDXComponent=!0}}]);
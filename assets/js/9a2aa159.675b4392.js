"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[8681],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,o),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),i=n(86010),o=n(72389),s=n(67392),l=n(7094),d=n(12466);const c="tabList__CuJ",p="tabItem_LNqP";function u(e){var t;const{lazy:n,block:o,defaultValue:u,values:m,groupId:h,className:v}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??g.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),f=(0,s.l)(k,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===u?u:u??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==y&&!k.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:w}=(0,l.U)(),[N,R]=(0,r.useState)(y),S=[],{blockElementScrollPositionUntilNextRender:j}=(0,d.o5)();if(null!=h){const e=b[h];null!=e&&e!==N&&k.some((t=>t.value===e))&&R(e)}const T=e=>{const t=e.currentTarget,n=S.indexOf(t),a=k[n].value;a!==N&&(j(t),R(a),null!=h&&w(h,String(a)))},x=e=>{var t;let n=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const t=S.indexOf(e.currentTarget)+1;n=S[t]??S[0];break}case"ArrowLeft":{const t=S.indexOf(e.currentTarget)-1;n=S[t]??S[S.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},v)},k.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>S.push(e),onKeyDown:x,onClick:T},o,{className:(0,i.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,r.cloneElement)(g.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,o.Z)();return r.createElement(u,(0,a.Z)({key:String(t)},e))}},50358:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(52263);const i="authorByline_VoxI",o="authorLabel_a70t",s="authorProfileImage_URwT";const l=function(e){let{frontMatter:t}=e;const{siteConfig:n}=(0,r.Z)(),l=n.customFields.authors;return a.createElement(a.Fragment,null,t.authors&&a.createElement("div",{className:"docAuthors"},a.createElement("hr",null),t.authors.map((e=>a.createElement("div",{key:e,className:i},a.createElement("img",{className:s,src:`/img/${l[e].image?l[e].image:"default_author_profile_pic.png"}`,alt:`Profile picture for ${l[e].name}`}),a.createElement("div",null,a.createElement("div",{className:o},"Author:"),a.createElement("div",null,a.createElement("a",{href:l[e].link,target:"_blank"},l[e].name),", ",l[e].title))))),a.createElement("hr",null)))}},75002:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var a=n(87462),r=(n(67294),n(3905)),i=n(65488),o=n(85162),s=n(50358);const l={id:"index-gettingstarted",title:"Getting Started with Node and Redis",sidebar_label:"Getting Started",slug:"/develop/node/gettingstarted",authors:["ajeet","simon"]},d=void 0,c={unversionedId:"develop/node/gettingstarted/index-gettingstarted",id:"develop/node/gettingstarted/index-gettingstarted",title:"Getting Started with Node and Redis",description:"Find tutorials, examples and technical articles that will help you to develop with Redis and Node.js/JavaScript:",source:"@site/docs/develop/node/gettingstarted/index-gettingstarted.mdx",sourceDirName:"develop/node/gettingstarted",slug:"/develop/node/gettingstarted",permalink:"/develop/node/gettingstarted",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/node/gettingstarted/index-gettingstarted.mdx",tags:[],version:"current",lastUpdatedAt:1667495358,formattedLastUpdatedAt:"Nov 3, 2022",frontMatter:{id:"index-gettingstarted",title:"Getting Started with Node and Redis",sidebar_label:"Getting Started",slug:"/develop/node/gettingstarted",authors:["ajeet","simon"]},sidebar:"docs",previous:{title:"Overview",permalink:"/develop/node"},next:{title:"Overview",permalink:"/develop/node/node-crash-course"}},p={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Step 1. Run a Redis server",id:"step-1-run-a-redis-server",level:4},{value:"Step 2. Install node redis using <code>NPM</code> (or <code>YARN</code>)",id:"step-2-install-node-redis-using-npm-or-yarn",level:4},{value:"Step 2. Write your Application Code",id:"step-2-write-your-application-code",level:4},{value:"Step 1. Install ioredis using <code>npm</code> (or <code>yarn</code>)",id:"step-1-install-ioredis-using-npm-or-yarn",level:4},{value:"Step 2. Write your Application Code",id:"step-2-write-your-application-code-1",level:4},{value:"Redis Launchpad",id:"redis-launchpad",level:3},{value:"Hacker News Clone in NodeJS",id:"hacker-news-clone-in-nodejs",level:4},{value:"Shopping Cart application in NodeJS",id:"shopping-cart-application-in-nodejs",level:4},{value:"More Developer Resources",id:"more-developer-resources",level:3},{value:"Sample Code",id:"sample-code",level:4},{value:"Technical Articles &amp; Videos",id:"technical-articles--videos",level:4},{value:"Redis University",id:"redis-university",level:3},{value:"Redis for JavaScript Developers",id:"redis-for-javascript-developers",level:3}],m={toc:u};function h(e){let{components:t,...d}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,d,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(s.Z,{frontMatter:l,mdxType:"Authors"}),(0,r.kt)("p",null,"Find tutorials, examples and technical articles that will help you to develop with Redis and Node.js/JavaScript:"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"Redis is an open source, in-memory, key-value data store most commonly used as a primary database, cache, message broker, and queue. Redis cache delivers sub-millisecond response times, enabling fast and powerful real-time applications in industries such as gaming, fintech, ad-tech, social media, healthcare, and IoT."),(0,r.kt)("p",null,"Redis is a great database for use with Node. Both Redis and Node share similar type conventions and threading models, which makes for a very predictable development experience. By pairing Node and Redis together you can achieve a scalable and productive development platform."),(0,r.kt)("p",null,"Redis has two primary Node clients which are ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/redis/node-redis"},"node-redis")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/luin/ioredis"},"ioredis"),". Both are available through npm. We generally suggest using node-redis, as it has wide support for Redis modules, is easily extended, and is widely used."),(0,r.kt)("p",null,"Check out a list of Redis clients that the community has built for Node ",(0,r.kt)("a",{parentName:"p",href:"https://redis.io/clients#nodejs"},"here"),"."),(0,r.kt)("p",null,"This article shows how to get started with the recommended libraries: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/redis/node-redis"},"node-redis")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/luin/ioredis"},"ioredis"),"."),(0,r.kt)(i.Z,{defaultValue:"node-redis",values:[{label:"node-redis",value:"node-redis"},{label:"ioredis",value:"ioredis"}],mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"node-redis",mdxType:"TabItem"},(0,r.kt)("h4",{id:"step-1-run-a-redis-server"},"Step 1. Run a Redis server"),(0,r.kt)("p",null,"You can either run Redis in a Docker container or directly on your Mac OS.\nUse the following commands to setup a Redis server locally:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," brew tap redis-stack/redis-stack\n brew install --cask redis-stack\n")),(0,r.kt)("admonition",{title:"INFO",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Redis Stack unifies and simplifies the developer experience of the leading Redis data store, modules and the capabilities they provide. Redis Stack bundles five Redis modules: RedisJSON, RedisSearch, RedisGraph, RedisTimeSeries, and RedisBloom.\n",(0,r.kt)("a",{parentName:"p",href:"/create/redis-stack"},"Learn more"))),(0,r.kt)("p",null,"Ensure that you are able to use the following Redis command to connect to the Redis instance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," redis-cli\n localhost>\n")),(0,r.kt)("p",null,"Now you should be able to perform CRUD operations with Redis keys.\nThe above Redis client command might require password if you have setup authentication in your Redis configuration file. Refer ",(0,r.kt)("a",{parentName:"p",href:"https://redis.io/commands/"},"Redis Command Reference")),(0,r.kt)("h4",{id:"step-2-install-node-redis-using-npm-or-yarn"},"Step 2. Install node redis using ",(0,r.kt)("inlineCode",{parentName:"h4"},"NPM")," (or ",(0,r.kt)("inlineCode",{parentName:"h4"},"YARN"),")"),(0,r.kt)("p",null,"Run the following NPM command to install the Redis client."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"  npm install redis\n")),(0,r.kt)("h4",{id:"step-2-write-your-application-code"},"Step 2. Write your Application Code"),(0,r.kt)("p",null,"Use the following sample code for our Node.js application:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"import { createClient } from 'redis';\n\nasync function nodeRedisDemo() {\n  try {\n    const client = createClient();\n    await client.connect();\n\n    await client.set('mykey', 'Hello from node redis');\n    const myKeyValue = await client.get('mykey');\n    console.log(myKeyValue);\n\n    const numAdded = await client.zAdd('vehicles', [\n      {\n        score: 4,\n        value: 'car',\n      },\n      {\n        score: 2,\n        value: 'bike',\n      },\n    ]);\n    console.log(`Added ${numAdded} items.`);\n\n    for await (const { score, value } of client.zScanIterator('vehicles')) {\n      console.log(`${value} -> ${score}`);\n    }\n\n    await client.quit();\n  } catch (e) {\n    console.error(e);\n  }\n}\n\nnodeRedisDemo();\n"))),(0,r.kt)(o.Z,{value:"ioredis",mdxType:"TabItem"},(0,r.kt)("h4",{id:"step-1-install-ioredis-using-npm-or-yarn"},"Step 1. Install ioredis using ",(0,r.kt)("inlineCode",{parentName:"h4"},"npm")," (or ",(0,r.kt)("inlineCode",{parentName:"h4"},"yarn"),")"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," npm install ioredis\n")),(0,r.kt)("h4",{id:"step-2-write-your-application-code-1"},"Step 2. Write your Application Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const Redis = require('ioredis');\n\nasync function ioredisDemo() {\n  try {\n    const client = new Redis();\n\n    await client.set('mykey', 'Hello from io-redis!');\n    const myKeyValue = await client.get('mykey');\n    console.log(myKeyValue);\n\n    const numAdded = await client.zadd('vehicles', 4, 'car', 2, 'bike');\n    console.log(`Added ${numAdded} items.`);\n\n    const stream = client.zscanStream('vehicles');\n\n    stream.on('data', (items) => {\n      // items = array of value, score, value, score...\n      for (let n = 0; n < items.length; n += 2) {\n        console.log(`${items[n]} -> ${items[n + 1]}`);\n      }\n    });\n\n    stream.on('end', async () => {\n      await client.quit();\n    });\n  } catch (e) {\n    console.error(e);\n  }\n}\n\nioredisDemo();\n")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"redis-launchpad"},"Redis Launchpad"),(0,r.kt)("p",null,"Redis Launchpad is like an \u201cApp Store\u201d for Redis sample apps. You can easily find apps for your preferred frameworks and languages.\nCheck out a few of these apps below, or ",(0,r.kt)("a",{parentName:"p",href:"https://launchpad.redis.com"},"click here to access the complete list"),"."),(0,r.kt)("div",{class:"row text--center"},(0,r.kt)("div",{class:"col "},(0,r.kt)("div",{className:"ri-container"},(0,r.kt)("h4",{id:"hacker-news-clone-in-nodejs"},"Hacker News Clone in NodeJS"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"marketplace",src:n(12250).Z,width:"1190",height:"1152"})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://launchpad.redis.com/?id=project%3Aredis-hacker-news-demo"},"A Hacker News Clone project")," built in NextJS, NodeJS and Express based on RediSearch & RedisJSON"))),(0,r.kt)("div",{class:"col"},(0,r.kt)("div",{className:"ri-container"},(0,r.kt)("h4",{id:"shopping-cart-application-in-nodejs"},"Shopping Cart application in NodeJS"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"marketplace",src:n(14976).Z,width:"1130",height:"1006"})),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://launchpad.redis.com/?id=project%3Abasic-redis-shopping-chart-nodejs"},"Shopping Cart app in NodeJS")," module functionalities")))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"more-developer-resources"},"More Developer Resources"),(0,r.kt)("div",{class:"row"},(0,r.kt)("div",{class:"col"},(0,r.kt)("h4",{id:"sample-code"},"Sample Code"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://developer.redis.com/howtos/caching/"},"Basic Redis Caching")),"\nThis application calls the GitHub API and caches the results into Redis."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://developer.redis.com/howtos/ratelimiting/"},"Redis Rate-Limiting")),"\nThis is a very simple app that demonstrates rate-limiting feature using Redis."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://github.com/redis-developer/redis-websockets-vue-notifications"},"Notifications with WebSocket, Vue & Redis")),"\nThis project allows you to push notifications in a Vue application from a Redis ",(0,r.kt)("inlineCode",{parentName:"p"},"PUBLISH")," using WebSockets.")),(0,r.kt)("div",{class:"col"},(0,r.kt)("h4",{id:"technical-articles--videos"},"Technical Articles & Videos"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://www.youtube.com/watch?v=H6rikGCYPUk"},"Redis Rapid Tips: ioredis"))," (YouTube)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"https://www.youtube.com/watch?v=dukkMLbzPfA"},"Mapping Objects between Node and Redis"))," (YouTube)"))),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"redis-university"},"Redis University"),(0,r.kt)("h3",{id:"redis-for-javascript-developers"},(0,r.kt)("a",{parentName:"h3",href:"https://university.redis.com/courses/ru102js/"},"Redis for JavaScript Developers")),(0,r.kt)("p",null,"Build full-fledged Redis applications with Node.js and Express."),(0,r.kt)("div",{class:"text--center"},(0,r.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/Ik1WXPX3WNU",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})))}h.isMDXComponent=!0},12250:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/hackernews-11fd43019338c4104534050eeca60aec.png"},14976:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/shoppingcartnodejs-538c50a3e278a671803e1bb24e6ec596.png"}}]);
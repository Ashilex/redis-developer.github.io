"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[1280],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(r),m=o,p=h["".concat(l,".").concat(m)]||h[m]||u[m]||i;return r?n.createElement(p,a(a({ref:t},d),{},{components:r})):n.createElement(p,a({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},50358:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(67294),o=r(52263);const i="authorByline_VoxI",a="authorLabel_a70t",s="authorProfileImage_URwT";const l=function(e){let{frontMatter:t}=e;const{siteConfig:r}=(0,o.Z)(),l=r.customFields.authors;return n.createElement(n.Fragment,null,t.authors&&n.createElement("div",{className:"docAuthors"},n.createElement("hr",null),t.authors.map((e=>n.createElement("div",{key:e,className:i},n.createElement("img",{className:s,src:`/img/${l[e].image?l[e].image:"default_author_profile_pic.png"}`,alt:`Profile picture for ${l[e].name}`}),n.createElement("div",null,n.createElement("div",{className:a},"Author:"),n.createElement("div",null,n.createElement("a",{href:l[e].link,target:"_blank"},l[e].name),", ",l[e].title))))),n.createElement("hr",null)))}},84614:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=r(87462),o=(r(67294),r(3905)),i=r(50358);const a={id:"index-redisbloom",title:"Preventing Duplicate Checkins with RedisBloom",sidebar_label:"RedisBloom",slug:"/develop/node/nodecrashcourse/redisbloom",authors:["simon"]},s=void 0,l={unversionedId:"develop/node/node-crash-course/redisbloom/index-redisbloom",id:"develop/node/node-crash-course/redisbloom/index-redisbloom",title:"Preventing Duplicate Checkins with RedisBloom",description:"<iframe",source:"@site/docs/develop/node/node-crash-course/redisbloom/index-redisbloom.mdx",sourceDirName:"develop/node/node-crash-course/redisbloom",slug:"/develop/node/nodecrashcourse/redisbloom",permalink:"/develop/node/nodecrashcourse/redisbloom",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/node/node-crash-course/redisbloom/index-redisbloom.mdx",tags:[],version:"current",lastUpdatedAt:1667495358,formattedLastUpdatedAt:"Nov 3, 2022",frontMatter:{id:"index-redisbloom",title:"Preventing Duplicate Checkins with RedisBloom",sidebar_label:"RedisBloom",slug:"/develop/node/nodecrashcourse/redisbloom",authors:["simon"]},sidebar:"docs",previous:{title:"Advanced Streams",permalink:"/develop/node/nodecrashcourse/advancedstreams"},next:{title:"Wrap Up",permalink:"/develop/node/nodecrashcourse/coursewrapup"}},c={},d=[{value:"Hands-on Exercise",id:"hands-on-exercise",level:2},{value:"External Resources",id:"external-resources",level:2}],u={toc:d};function h(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.Z,{frontMatter:a,mdxType:"Authors"}),(0,o.kt)("div",{class:"text--center"},(0,o.kt)("iframe",{width:"896",height:"509",src:"https://www.youtube.com/embed/rzMugckhQss",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,o.kt)("p",null,"As our application grows in popularity, we're getting more and more checkins from our expanding user base. We've decided that we want to limit this a bit, and only allow each user to give each location a particular star rating once. For example, if user 100 checks in at location 73 and rates it 3 stars, we want to reject any further 3 star checkins from them at that location."),(0,o.kt)("p",null,"In order to do this, we need a way of remembering each checkin, and to quickly determine if we've seen it before. We can't do this by querying the data in our checkins stream, as streams don't allow that sort of access and are periodically trimmed, removing older checkins that have been processed and are no longer needed."),(0,o.kt)("p",null,"We can represent our checkins in the form ",(0,o.kt)("inlineCode",{parentName:"p"},"<userId>:<locationId>:<rating>"),". With this schema, the string 100733 would represent user 100's checkin at location 73 with a 3 star rating."),(0,o.kt)("p",null,"We then need to remember each checkin, so that we can ensure it's a unique combination of user ID, location ID, and star rating. We could use a Redis Set for this. Sets are great whenever we want to maintain a collection of unique members, as they don't allow duplicates. With a Redis Set, adding a new member and checking whether a member is in the Set are both O(1) operations, meaning their performance doesn't degrade as the Set grows."),(0,o.kt)("p",null,"However, every new member of a Set that we add (in our case these are unique checkins) causes the Set to take up more memory on the Redis server. And this growth will become an issue as we continue to receive more and more checkins."),(0,o.kt)("p",null,"But what if there was a way to check if a potential new member was already in a set that didn't have this memory consumption issue? A Bloom Filter is a space-efficient probabilistic data structure that can help here. Bloom Filters store hashed representations of the members of a Set rather than the actual member data itself. Unlike a Set, we can't get members back out of the Bloom Filter, but we can test if something is already in there or not... with some false positives due to hash collisions. When asked if something is a member of a Set, the Bloom Filter can tell us \"no it isn't\", or \"it's likely that it is\"."),(0,o.kt)("p",null,"This hashing approach sacrifices the 100% accuracy we'd get with a Set to dramatically reduce the memory overhead. Bloom Filters can be configured with a desired acceptable error rate, so for our application this seems like a good way to enforce our \"no duplicate checkins\" rule without having a runaway memory consumption problem. Whenever the Bloom Filter tells us its maybe seen a checkin before it will mostly be correct, and we'll accept that sometimes we disallow a checkin that we actually haven't had before as a sensible tradeoff for keeping our memory usage under control."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://redisbloom.io/"},"RedisBloom")," is a module from Redis that provides a Bloom Filter implementation for Redis, along with other useful probabilistic data structures. In the video, you'll see how easy this is to use in a Node.js application, with no math skills required!"),(0,o.kt)("h2",{id:"hands-on-exercise"},"Hands-on Exercise"),(0,o.kt)("p",null,"In this exercise, you'll see the Bloom filter in action by attempting to submit the same checkin to the system more than once."),(0,o.kt)("p",null,"You'll need to be running the Checkin Receiver Service... stop it with Ctrl-C if it's still running from a previous exercise. Then, restart it using the following command. This command will disable the login requirement which we don't want for this exercise:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm run checkinreceiver\n\n> js-crash-course@0.0.1 checkinreceiver\n> node ./src/checkinreceiver.js\n\ninfo: Authentication disabled, checkins do not require a valid user session.\ninfo: Checkin receiver listening on port 8082.\n")),(0,o.kt)("p",null,'Now, open Postman and create a new request, selecting "POST" as the HTTP verb.'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Set the URL to ",(0,o.kt)("inlineCode",{parentName:"li"},"localhost:8082/api/checkin")),(0,o.kt)("li",{parentName:"ul"},'In the "Body" tab, set the type dropdowns to "raw" and "JSON"'),(0,o.kt)("li",{parentName:"ul"},"In the body text area, enter the following JSON:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{ "userId": 100, "locationId": 73, "starRating": 3 }\n')),(0,o.kt)("p",null,"Your request should look like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Checkin Request",src:r(68169).Z,width:"1848",height:"650"})),(0,o.kt)("p",null,'Click "Send" to submit your checkin to the Checkin Receiver, which should respond with a 202 Accepted status and empty response body:'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"202 Checkin Response",src:r(46453).Z,width:"1854",height:"940"})),(0,o.kt)("p",null,'Click "Send" a second time and you should receive a 422 Unprocessable Entity response from the Checkin Receiver along with an error message:'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"422 Checkin Response",src:r(33346).Z,width:"1880",height:"954"})),(0,o.kt)("p",null,"With the Checkin Receiver service still running, start the Checkin Generator utility that generates random checkins:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"node-js-crash-course $ npm run checkingenerator\n\n> js-crash-course@0.0.1 checkingenerator\n> node ./src/checkingenerator.js\n\ninfo: Started checkin generator.\n")),(0,o.kt)("p",null,"Leave the Checkin Generator running. It will generate a new random checkin every few seconds. Let it run and generate a few hundred checkins. While it's doing that, periodically monitor the memory usage required by the Bloom Filter using redis-cli or the CLI tab in RedisInsight:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"127.0.0.1:6379> bf.info ncc:checkinfilter\n 1) Capacity\n 2) (integer) 1000000\n 3) Size\n 4) (integer) 2576760\n 5) Number of filters\n 6) (integer) 1\n 7) Number of items inserted\n 8) (integer) 269\n 9) Expansion rate\n10) (integer) 2\n")),(0,o.kt)("p",null,"Run this a few times as more checkins are generated, and note that the size required to store the Bloom Filter doesn't increase as the number of items inserted increases. While sacrificing some accuracy, Bloom Filters are a storage efficient solution for this type of use case."),(0,o.kt)("h2",{id:"external-resources"},"External Resources"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Find out more about RedisBloom at its ",(0,o.kt)("a",{parentName:"li",href:"https://redisbloom.io/"},"official website"),"."),(0,o.kt)("li",{parentName:"ul"},"Wikipedia: ",(0,o.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Bloom_filter"},"Bloom Filters"),".")),(0,o.kt)("p",null,"In this video, Guy Royse explains what Bloom Filters are and how to use them in Redis:"),(0,o.kt)("div",{class:"text--center"},(0,o.kt)("iframe",{width:"896",height:"509",src:"https://www.youtube.com/embed/Z9_wrhdbSC4",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,o.kt)("p",null,"Redis Sets are a powerful data type to know about, learn more with Andrew's two videos on the Redis University YouTube channel. First, Redis Sets Explained:"),(0,o.kt)("div",{class:"text--center"},(0,o.kt)("iframe",{width:"896",height:"509",src:"https://www.youtube.com/embed/6Pjz819sT7M",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,o.kt)("p",null,"Followed by Redis Sets Elaborated:"),(0,o.kt)("div",{class:"text--center"},(0,o.kt)("iframe",{width:"896",height:"509",src:"https://www.youtube.com/embed/N5i5QiYdyZU",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})))}h.isMDXComponent=!0},46453:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/postman_bloom_202_response-2695c8e261c8f1b0ff3722e52b488659.png"},33346:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/postman_bloom_422_response-8356347eab305ea70f8a3ed095b8308e.png"},68169:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/postman_bloom_checkin-2ef0be39a5183ca7d2fd6b484cd5cc9d.png"}}]);
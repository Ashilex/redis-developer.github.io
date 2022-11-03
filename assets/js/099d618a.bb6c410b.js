"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[2626],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>p});var r=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var c=r.createContext({}),u=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=u(e.components);return r.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=u(t),p=s,h=m["".concat(c,".").concat(p)]||m[p]||d[p]||o;return t?r.createElement(h,a(a({ref:n},l),{},{components:t})):r.createElement(h,a({ref:n},l))}));function p(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=t.length,a=new Array(o);a[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var u=2;u<o;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},50358:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(67294),s=t(52263);const o="authorByline_VoxI",a="authorLabel_a70t",i="authorProfileImage_URwT";const c=function(e){let{frontMatter:n}=e;const{siteConfig:t}=(0,s.Z)(),c=t.customFields.authors;return r.createElement(r.Fragment,null,n.authors&&r.createElement("div",{className:"docAuthors"},r.createElement("hr",null),n.authors.map((e=>r.createElement("div",{key:e,className:o},r.createElement("img",{className:i,src:`/img/${c[e].image?c[e].image:"default_author_profile_pic.png"}`,alt:`Profile picture for ${c[e].name}`}),r.createElement("div",null,r.createElement("div",{className:a},"Author:"),r.createElement("div",null,r.createElement("a",{href:c[e].link,target:"_blank"},c[e].name),", ",c[e].title))))),r.createElement("hr",null)))}},1434:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=t(87462),s=(t(67294),t(3905)),o=t(50358);const a={id:"index-advancedstreams",title:"Advanced Streams: Parallel Processing Checkins with Consumer Groups",sidebar_label:"Advanced Streams",slug:"/develop/node/nodecrashcourse/advancedstreams",authors:["simon"]},i=void 0,c={unversionedId:"develop/node/node-crash-course/advancedstreams/index-advancedstreams",id:"develop/node/node-crash-course/advancedstreams/index-advancedstreams",title:"Advanced Streams: Parallel Processing Checkins with Consumer Groups",description:"<iframe",source:"@site/docs/develop/node/node-crash-course/advancedstreams/index-advancedstreams.mdx",sourceDirName:"develop/node/node-crash-course/advancedstreams",slug:"/develop/node/nodecrashcourse/advancedstreams",permalink:"/develop/node/nodecrashcourse/advancedstreams",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/node/node-crash-course/advancedstreams/index-advancedstreams.mdx",tags:[],version:"current",lastUpdatedAt:1667495358,formattedLastUpdatedAt:"Nov 3, 2022",frontMatter:{id:"index-advancedstreams",title:"Advanced Streams: Parallel Processing Checkins with Consumer Groups",sidebar_label:"Advanced Streams",slug:"/develop/node/nodecrashcourse/advancedstreams",authors:["simon"]},sidebar:"docs",previous:{title:"Session Storage",permalink:"/develop/node/nodecrashcourse/sessionstorage"},next:{title:"RedisBloom",permalink:"/develop/node/nodecrashcourse/redisbloom"}},u={},l=[{value:"Hands-on Exercise",id:"hands-on-exercise",level:2},{value:"External Resources",id:"external-resources",level:2}],d={toc:l};function m(e){let{components:n,...i}=e;return(0,s.kt)("wrapper",(0,r.Z)({},d,i,{components:n,mdxType:"MDXLayout"}),(0,s.kt)(o.Z,{frontMatter:a,mdxType:"Authors"}),(0,s.kt)("div",{class:"text--center"},(0,s.kt)("iframe",{width:"896",height:"509",src:"https://www.youtube.com/embed/xdROBvMb4LE",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,s.kt)("p",null,"As our application grows in popularity and our user base increases, we're receiving more and more checkins. Recall that checkins are added to a Redis Stream by the Checkin Receiver, and read from that stream by the Checkin Processor. The Stream acts as a buffer between these two components:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Stream Overview",src:t(92571).Z,width:"3184",height:"1730"})),(0,s.kt)("p",null,"Unfortunately, our single Checkin Processor is struggling to keep up with the volume of new checkins. This means that we're seeing longer and longer lag times between a checkin arriving in the Stream and its values being reflected in our user and location Hashes."),(0,s.kt)("p",null,"And, we can't run more than one instance of the Checkin Processor, as each instance will consume the whole Stream. What we need is a way for multiple instances of the same consumer code to collaboratively process entries from a Stream."),(0,s.kt)("p",null,"Redis Streams offers consumer groups as a solution for this. We can think of a consumer group as a single logical consumer that reads the entire Stream, spreading the work out between individual consumers in the group:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"Stream Overview",src:t(4956).Z,width:"1778",height:"1024"})),(0,s.kt)("p",null,"Redis tracks which messages have been delivered to which consumers in the group, ensuring that each consumer receives its own unique subset of the Stream to process. This allows for parallel processing of the Stream by multiple consumer processes. As you'll see in the video, this requires us to rethink our processing logic to allow Stream entries to be processed out of order, and to avoid race conditions when updating user and location Hashes. We'll use the Lua interpreter built into Redis to help here."),(0,s.kt)("h2",{id:"hands-on-exercise"},"Hands-on Exercise"),(0,s.kt)("p",null,"In this exercise, you'll run multiple concurrent instances of the Checkin Group Processor so that you can see how they work together to collaboratively process the Stream."),(0,s.kt)("p",null,"If you're still running the Checkin Processor service, stop it with Ctrl-C."),(0,s.kt)("p",null,"Next, open up two terminal windows. cd to the ",(0,s.kt)("inlineCode",{parentName:"p"},"node-js-crash-course")," folder that you cloned the GitHub repo into in both windows."),(0,s.kt)("p",null,"In one terminal, start an instance of the Checkin Group Processor that we'll call consumer1:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'$ npm run checkingroupprocessor consumer1\n\n> js-crash-course@0.0.1 checkingroupprocessor\n> node ./src/checkingroupprocessor.js "consumer1"\n\ninfo: consumer1: Starting up.\ninfo: consumer1: Processing checkin 1609602085397-0.\ndebug: consumer1: Processing 1609602085397-0.\ndebug: consumer1: Updating user ncc:users:789 and location ncc:locations:171.\ninfo: consumer1: Acknowledged processing of checkin 1609602085397-0.\ninfo: consumer1: Pausing to simulate work.\ninfo: consumer1: Processing checkin 1609604227545-0.\ndebug: consumer1: Processing 1609604227545-0.\ndebug: consumer1: Updating user ncc:users:752 and location ncc:locations:100.\ninfo: consumer1: Acknowledged processing of checkin 1609604227545-0.\ninfo: consumer1: Pausing to simulate work.\ninfo: consumer1: Processing checkin 1609605397408-0.\ndebug: consumer1: Processing 1609605397408-0.\ndebug: consumer1: Updating user ncc:users:180 and location ncc:locations:13.\ninfo: consumer1: Acknowledged processing of checkin 1609605397408-0.\ninfo: consumer1: Pausing to simulate work.\ninfo: consumer1: Processing checkin 1609605876514-0.\n...\n')),(0,s.kt)("p",null,"In the second terminal, start another instance of the Checkin Group Processor, consumer2:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'$ npm run checkingroupprocessor consumer2\n\n> js-crash-course@0.0.1 checkingroupprocessor\n> node ./src/checkingroupprocessor.js "consumer2"\n\ninfo: consumer2: Starting up.\ninfo: consumer2: Processing checkin 1609603711960-0.\ndebug: consumer2: Processing 1609603711960-0.\ndebug: consumer2: Updating user ncc:users:455 and location ncc:locations:181.\ninfo: consumer2: Acknowledged processing of checkin 1609603711960-0.\ninfo: consumer2: Pausing to simulate work.\ninfo: consumer2: Processing checkin 1609604778689-0.\ndebug: consumer2: Processing 1609604778689-0.\ndebug: consumer2: Updating user ncc:users:102 and location ncc:locations:144.\ninfo: consumer2: Acknowledged processing of checkin 1609604778689-0.\ninfo: consumer2: Pausing to simulate work.\n...\n')),(0,s.kt)("p",null,"Look at the checkin IDs that each consumer processes. Note that they don't receive the same checkins. The Redis server gives each consumer in a group its own logical view of the Stream, each processing a subset of entries. This speeds up checkin processing as now we can have more than one consumer running at the same time."),(0,s.kt)("p",null,"Let\u2019s take a look at some of the information Redis is tracking about our consumer group. Go ahead and stop both consumer processes by pressing Ctrl-C."),(0,s.kt)("p",null,'If you\'re using RedisInsight, open up the "Streams" browser, click the ',(0,s.kt)("inlineCode",{parentName:"p"},"ncc:checkins"),' key, and then select the "Consumer Groups" tab. You should see something like this:'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"RedisInsight Consumer Groups",src:t(23460).Z,width:"1361",height:"844"})),(0,s.kt)("p",null,"This shows the number of consumers that are in the group, how many pending messages each has (a pending message is one that has been read by a consumer but not yet acknowledged with ",(0,s.kt)("inlineCode",{parentName:"p"},"XACK"),"), and the consumer's idle time since it last read from the Stream."),(0,s.kt)("p",null,'Click on "checkinConsumers" in the Consumer Group table to see a breakdown of pending messages and idle time for each consumer:'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"RedisInsight Consumer Groups Detail",src:t(47608).Z,width:"1366",height:"817"})),(0,s.kt)("p",null,"In a real-world system, you could use this information to detect consumers that have encountered a problem processing entries. Redis Streams provides commands to reassign messages that a consumer has read but not acknowledged, allowing you to build consumer recovery strategies that re-allocate those messages to healthy consumer instances in the same group."),(0,s.kt)("p",null,"If you're using redis-cli rather than RedisInsight, you can see the same information using the ",(0,s.kt)("inlineCode",{parentName:"p"},"XINFO")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"XPENDING")," commands:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'127.0.0.1:6379> xinfo groups ncc:checkins\n1) 1) "name"\n   2) "checkinConsumers"\n   3) "consumers"\n   4) (integer) 2\n   5) "pending"\n   6) (integer) 0\n   7) "last-delivered-id"\n   8) "1609605876514-0"\n127.0.0.1:6379> xpending ncc:checkins checkinConsumers\n1) (integer) 0\n127.0.0.1:6379> xinfo consumers ncc:checkins checkinConsumers\n1) 1) "name"\n   2) "consumer1"\n   3) "pending"\n   4) (integer) 0\n   5) "idle"\n   6) (integer) 2262454\n2) 1) "name"\n   2) "consumer2"\n   3) "pending"\n   4) (integer) 0\n   5) "idle"\n   6) (integer) 2266244\n')),(0,s.kt)("h2",{id:"external-resources"},"External Resources"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://university.redis.com/courses/ru202/"},"RU202 Redis Streams"),", a free online course at Redis University."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://redis.io/topics/streams-intro"},"Introduction to Redis Streams")," at redis.io."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://redis.io/commands/xgroup"},"XGROUP documentation")," at redis.io."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://redis.io/commands/xreadgroup"},"XREADGROUP documentation")," at redis.io."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://redis.io/commands/xinfo"},"XINFO documentation")," at redis.io."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://redis.io/commands/xpending"},"XPENDING documentation")," at redis.io."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://redis.io/commands/eval"},"Redis Lua Scripting documentation")," at redis.io.")))}m.isMDXComponent=!0},4956:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/consumer_group-478bcd500658bab3b2a2f61478f65f4e.png"},47608:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/insight_consumer_group_detail-129c949c515dbbbe56abb425631c5729.png"},23460:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/insight_consumer_groups-e18a2418163651ba436f6dfe721d896a.png"},92571:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/stream_overview-ee1bf9b1581a559b156ff57f50798881.png"}}]);
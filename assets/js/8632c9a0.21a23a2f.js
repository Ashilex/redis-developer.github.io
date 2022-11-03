"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[2451],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>p});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},h=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,h=o(e,["components","mdxType","originalType","parentName"]),c=d(a),p=i,m=c["".concat(l,".").concat(p)]||c[p]||u[p]||s;return a?r.createElement(m,n(n({ref:t},h),{},{components:a})):r.createElement(m,n({ref:t},h))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=a.length,n=new Array(s);n[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,n[1]=o;for(var d=2;d<s;d++)n[d]=a[d];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},50358:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(67294),i=a(52263);const s="authorByline_VoxI",n="authorLabel_a70t",o="authorProfileImage_URwT";const l=function(e){let{frontMatter:t}=e;const{siteConfig:a}=(0,i.Z)(),l=a.customFields.authors;return r.createElement(r.Fragment,null,t.authors&&r.createElement("div",{className:"docAuthors"},r.createElement("hr",null),t.authors.map((e=>r.createElement("div",{key:e,className:s},r.createElement("img",{className:o,src:`/img/${l[e].image?l[e].image:"default_author_profile_pic.png"}`,alt:`Profile picture for ${l[e].name}`}),r.createElement("div",null,r.createElement("div",{className:n},"Author:"),r.createElement("div",null,r.createElement("a",{href:l[e].link,target:"_blank"},l[e].name),", ",l[e].title))))),r.createElement("hr",null)))}},19001:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>l,toc:()=>h});var r=a(87462),i=(a(67294),a(3905)),s=a(50358);const n={id:"index-clustering-in-redis",title:"4.0 Clustering In Redis",sidebar_label:"4.0 Clustering In Redis",slug:"/operate/redis-at-scale/scalability/lustering-in-redis",authors:["justin"],custom_edit_url:null},o=void 0,l={unversionedId:"operate/redis-at-scale/scalability/clustering-in-redis/index-clustering-in-redis",id:"operate/redis-at-scale/scalability/clustering-in-redis/index-clustering-in-redis",title:"4.0 Clustering In Redis",description:"<iframe",source:"@site/docs/operate/redis-at-scale/scalability/clustering-in-redis/index-scalability.mdx",sourceDirName:"operate/redis-at-scale/scalability/clustering-in-redis",slug:"/operate/redis-at-scale/scalability/lustering-in-redis",permalink:"/operate/redis-at-scale/scalability/lustering-in-redis",draft:!1,editUrl:null,tags:[],version:"current",lastUpdatedAt:1667495358,formattedLastUpdatedAt:"Nov 3, 2022",frontMatter:{id:"index-clustering-in-redis",title:"4.0 Clustering In Redis",sidebar_label:"4.0 Clustering In Redis",slug:"/operate/redis-at-scale/scalability/lustering-in-redis",authors:["justin"],custom_edit_url:null},sidebar:"docs",previous:{title:"3.4 Exercise - Sentinel Hands-on",permalink:"/operate/redis-at-scale/high-availability/exercise-2"},next:{title:"4.1 Exercise - Creating a Redis Cluster",permalink:"/operate/redis-at-scale/scalability/exercise-1"}},d={},h=[],u={toc:h};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(s.Z,{frontMatter:n,mdxType:"Authors"}),(0,i.kt)("div",{align:"center"},(0,i.kt)("iframe",{width:"896",height:"509",src:"https://www.youtube.com/embed/jJMJc9QZaoA",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("p",null,"Before we jump into the details, let's first address the elephant in the room: DBaaS offerings, or \"database-as-a-service\" in the cloud. No doubt, it's useful to know how Redis scales and how you might deploy it. But deploying and maintaining a Redis cluster is a fair amount of work. So if you don't want to deploy and manage Redis yourself, then consider signing up for Redis Cloud, our managed service, and let us do the scaling for you. Of course, that route is not for everyone. And as I said, there's a lot to learn here, so let's dive in."),(0,i.kt)("p",null,"We'll start with scalability. Here's one definition:"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u201cScalability is the property of a system to handle a growing amount of work by adding resources to the system.\u201d\n",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Scalability"},"Wikipedia"))),(0,i.kt)("p",null,"The two most common scaling strategies are ",(0,i.kt)("strong",null,"vertical")," scaling and ",(0,i.kt)("strong",null,"horizontal")," scaling. Vertical scaling, or also called \u201cScaling Up\u201d, means adding more resources like CPU or memory to your server. Horizontal scaling, or \u201cScaling out\u201d, implies adding more servers to your pool of resources. It's the difference between just getting a bigger server and deploying a whole fleet of servers."),(0,i.kt)("p",null,"Let's take an example. Suppose you have a server with 128 GB of RAM, but you know that your database will need to store 300 GB of data. In this case, you\u2019ll have two choices: you can either add more RAM to your server so it can fit the 300GB dataset, or you can add two more servers and split the 300GB of data between the three of them. Hitting your server\u2019s RAM limit is one reason you might want to scale up, or out, but reaching the performance limit in terms of throughput, or operations per second, is also an indicator that scaling is necessary."),(0,i.kt)("p",null,"Since Redis is mostly single-threaded, Redis cannot make use of the multiple cores of your server\u2019s CPU for command processing. But if we split the data between two Redis servers, our system can process requests in parallel, increasing the throughput by almost 200%. In fact, performance will scale close to linearly by adding more Redis servers to the system. This database architectural pattern of splitting data between multiple servers for the purpose of scaling is called ",(0,i.kt)("strong",null,"sharding"),". The resulting servers that hold chunks of the data are called ",(0,i.kt)("strong",null,"shards"),"."),(0,i.kt)("p",null,"This performance increase sounds amazing, but it doesn\u2019t come without some cost: if we divide and distribute our data across two shards, which are just two Redis server instances, how will we know where to look for each key? We need to have a way to consistently map a key to a specific shard. There are multiple ways to do this and different databases adopt different strategies. The one Redis chose is called \u201cAlgorithmic sharding\u201d and this is how it works:"),(0,i.kt)("p",null,"In order to find the shard on which a key lives we compute a numeric hash value out of the key name and modulo divide it by the total number of shards. Because we are using a deterministic hash function the key \u201cfoo\u201d will always end up on the same shard, as long as the number of shards stays the same."),(0,i.kt)("p",null,"But what happens if we want to increase our shard count even further, a process commonly called ",(0,i.kt)("strong",null,"resharding"),"? Let\u2019s say we add one new shard so that our total number of shards is three. When a client tries to read the key \u201cfoo\u201d now, they will run the hash function and modulo divide by the number of shards, as before, but this time the number of shards is different and we\u2019re modulo dividing with three instead of two. Understandably, the result may be different, pointing us to the wrong shard!"),(0,i.kt)("p",null,"Resharding is a common issue with the algorithmic sharding strategy and can be solved by rehashing all the keys in the keyspace and moving them to the shard appropriate to the new shard count. This is not a trivial task, though, and it can require a lot of time and resources, during which the database will not be able to reach its full performance or might even become unavailable."),(0,i.kt)("p",null,"Redis chose a very simple approach to solving this problem: it introduced a new, logical unit that sits between a key and a shard, called a ",(0,i.kt)("strong",null,"hash slot"),"."),(0,i.kt)("p",null,"One shard can contain many hash slots, and a hash slot contains many keys. The total number of hash slots in a database is always 16384 (16K). This time, the modulo division is not done with the number of shards anymore, but instead with the number of hash slots, that stays the same even when resharding and the end result will give us the position of the hash slot where the key we\u2019re looking for lives. And when we do need to reshard, we simply move hash slots from one shard to another, distributing the data as required across the different redis instances."),(0,i.kt)("p",null,"Now that we know what sharding is and how it works in Redis, we can finally introduce ",(0,i.kt)("strong",null,"Redis Cluster"),". Redis Cluster provides a way to run a Redis installation where data is automatically split across multiple Redis servers, or shards. Redis Cluster also provides high availability. So, if you're deploying Redis Cluster, you don't need (or use) Redis Sentinel."),(0,i.kt)("p",null,"Redis Cluster can detect when a primary shard fails and promote a replica to a primary without any manual intervention from the outside. How does it do it? How does it know that a primary shard has failed, and how does it promote its replica to be the new primary shard? We need to have replication enabled. Say we have one replica for every primary shard. If all our data is divided between three Redis servers, we would need a six-member cluster, with three primary shards and three replicas."),(0,i.kt)("p",null,"All 6 shards are connected to each other over TCP and constantly PING each other and exchange messages using a binary protocol. These messages contain information about which shards have responded with a PONG, so are considered alive, and which haven\u2019t."),(0,i.kt)("p",null,"When enough shards report that a certain primary shard is not responding to them, they can agree to trigger a failover and promote the shard\u2019s replica to become the new primary. How many shards need to agree that a shard is offline before a failover is triggered? Well, that\u2019s configurable and you can set it up when you create a cluster, but there are some very important guidelines that you need to follow."),(0,i.kt)("p",null,"If you have an even number of shards in the cluster, say six, and there\u2019s a network partition that divides the cluster in two, you'll then have two groups of three shards. The group on the left side will not be able to talk to the shards from the group on the right side, so the cluster will think that they are offline and it will trigger a failover of any primary shards, resulting in a left side with all primary shards. On the right side, the three shards will see the shards on the left as offline, and will trigger a failover on any primary shard that was on the left side, resulting in a right side of all primary shards. Both sides, thinking they have all the primaries, will continue to receive client requests that modify data, and that is a problem, because maybe client A sets the key \u201cfoo\u201d to \u201cbar\u201d on the left side, but a client B sets the same key\u2019s value to \u201cbaz\u201d on the right side."),(0,i.kt)("p",null,"When the network partition is removed and the shards try to rejoin, we will have a conflict, because we have two shards - holding different data claiming to be the primary and we wouldn\u2019t know which data is valid."),(0,i.kt)("p",null,"This is called a ",(0,i.kt)("strong",null,"split brain situation"),", and is a very common issue in the world of distributed systems. A popular solution is to always keep an odd number of shards in your cluster, so that when you get a network split, the left and right group will do a count and see if they are in the bigger or the smaller group (also called majority or minority). If they are in the minority, they will not try to trigger a failover and will not accept any client write requests."),(0,i.kt)("p",null,"Here's the bottom line: ",(0,i.kt)("b",null,"to prevent split-brain situations in Redis Cluster, always keep an odd number of primary shards and two replicas per primary shard.")))}c.isMDXComponent=!0}}]);
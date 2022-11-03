"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[3156],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>h});var a=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,a,r=function(e,t){if(null==e)return{};var i,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var i=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(i),h=r,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||n;return i?a.createElement(m,l(l({ref:t},p),{},{components:i})):a.createElement(m,l({ref:t},p))}));function h(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=i.length,l=new Array(n);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<n;c++)l[c]=i[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,i)}u.displayName="MDXCreateElement"},81405:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var a=i(87462),r=(i(67294),i(3905));const n={id:"index-basic-replication",title:"3.1 Basic Replication",sidebar_label:"3.1 Basic Replication",slug:"/operate/redis-at-scale/high-availability/basic-replication",custom_edit_url:null},l=void 0,o={unversionedId:"operate/redis-at-scale/high-availability/basic-replication/index-basic-replication",id:"operate/redis-at-scale/high-availability/basic-replication/index-basic-replication",title:"3.1 Basic Replication",description:"<iframe",source:"@site/docs/operate/redis-at-scale/high-availability/basic-replication/index-basic-replication.mdx",sourceDirName:"operate/redis-at-scale/high-availability/basic-replication",slug:"/operate/redis-at-scale/high-availability/basic-replication",permalink:"/operate/redis-at-scale/high-availability/basic-replication",draft:!1,editUrl:null,tags:[],version:"current",lastUpdatedAt:1667495358,formattedLastUpdatedAt:"Nov 3, 2022",frontMatter:{id:"index-basic-replication",title:"3.1 Basic Replication",sidebar_label:"3.1 Basic Replication",slug:"/operate/redis-at-scale/high-availability/basic-replication",custom_edit_url:null},sidebar:"docs",previous:{title:"3.0 Introduction to High Availability",permalink:"/operate/redis-at-scale/high-availability/introduction"},next:{title:"3.2 Exercise - Enabling Basic Replication",permalink:"/operate/redis-at-scale/high-availability/exercise-1"}},s={},c=[],p={toc:c};function d(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{align:"center"},(0,r.kt)("iframe",{width:"896",height:"509",src:"https://www.youtube.com/embed/-osCdf90tRA",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,"Replication in Redis follows a simple primary-replica model where the replication happens in one direction - from the primary to one or multiple replicas. Data is only written to the primary instance and replicas are kept in sync so that they\u2019re exact copies of the primaries."),(0,r.kt)("p",null,"To create a replica, you instantiate a Redis server instance with the configuration directive ",(0,r.kt)("strong",null,"replicaof")," set to the address and port of the primary instance. Once the replica instance is up and running, the replica will try to sync with the primary. To transfer all of its data as efficiently as possible, the primary instance will produce a compacted version of the data in a snapshot (.rdb) file and send it to the replica."),(0,r.kt)("p",null,"The replica will then read the snapshot file and load all of its data into memory, which will bring it to the same state the primary instance had at the moment of creating the .rdb file. When the loading stage is done, the primary instance will send the backlog of any write commands run since the snapshot was made. Finally, the primary instance will send the replica a live stream of all subsequent commands."),(0,r.kt)("p",null,"By default, replication is asynchronous. This means that if you send a write command to Redis you will receive your acknowledged response first, and only then will the command be replicated to the replica."),(0,r.kt)("p",null,"If the primary goes down after acknowledging a write but before the write can be replicated, then you might have data loss. To avoid this, the client can use the ",(0,r.kt)("strong",null,"WAIT")," command. This command blocks the current client until all of the previous write commands are successfully transferred and acknowledged by at least some specified number of replicas."),(0,r.kt)("p",null,"For example, if we send the command ",(0,r.kt)("strong",null,"WAIT 2 0"),", the client will block (will not return a response to the client) until all of the previous write commands issued on that connection have been written to at least 2 replicas. The second argument - 0 - will instruct the server to block indefinitely, but we could set it to a number (in milliseconds) so that it times out after a while and returns the number of replicas that successfully acknowledged the commands."),(0,r.kt)("p",null,"Replicas are read-only. This means that you can configure your clients to read from them, but you cannot write data to them. If you need additional read throughput, you can configure your Redis client to read from replicas as well as from your primary node. However, it's often easier just to scale out your cluster. This lets you scale reads and writes without writing any complex client logic."),(0,r.kt)("p",null,"Also, you should know about ",(0,r.kt)("strong",null,"Active-Active"),", an advanced feature of Redis Enterprise and Redis Cloud. ",(0,r.kt)("strong",null,"Active-Active")," replicates entire databases across geographically-distributed clusters. With ",(0,r.kt)("strong",null,"Active-Active"),", you can write locally to any replica databases, and those writes will be reflected globally. Something to keep in mind when you're really scaling out!"))}d.isMDXComponent=!0}}]);
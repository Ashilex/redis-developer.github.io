"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[7809],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(a),h=r,f=u["".concat(o,".").concat(h)]||u[h]||p[h]||s;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<s;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},22581:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const s={id:"index-exercise-1",title:"4.1 Exercise - Creating a Redis Cluster",sidebar_label:"4.1 Exercise - Creating a Redis Cluster",slug:"/operate/redis-at-scale/scalability/exercise-1",custom_edit_url:null},i=void 0,l={unversionedId:"operate/redis-at-scale/scalability/exercise-1/index-exercise-1",id:"operate/redis-at-scale/scalability/exercise-1/index-exercise-1",title:"4.1 Exercise - Creating a Redis Cluster",description:"Step 1",source:"@site/docs/operate/redis-at-scale/scalability/exercise-1/index-exercise-1.mdx",sourceDirName:"operate/redis-at-scale/scalability/exercise-1",slug:"/operate/redis-at-scale/scalability/exercise-1",permalink:"/operate/redis-at-scale/scalability/exercise-1",draft:!1,editUrl:null,tags:[],version:"current",lastUpdatedAt:1667495358,formattedLastUpdatedAt:"Nov 3, 2022",frontMatter:{id:"index-exercise-1",title:"4.1 Exercise - Creating a Redis Cluster",sidebar_label:"4.1 Exercise - Creating a Redis Cluster",slug:"/operate/redis-at-scale/scalability/exercise-1",custom_edit_url:null},sidebar:"docs",previous:{title:"4.0 Clustering In Redis",permalink:"/operate/redis-at-scale/scalability/lustering-in-redis"},next:{title:"4.2 Using Redis-CLI with a Redis Cluster",permalink:"/operate/redis-at-scale/scalability/redis-cli-with-redis-cluster"}},o={},d=[{value:"Step 1",id:"step-1",level:2},{value:"Step 2",id:"step-2",level:2},{value:"Step 3",id:"step-3",level:2},{value:"Step 4",id:"step-4",level:2},{value:"Step 5",id:"step-5",level:2},{value:"Step 6",id:"step-6",level:2},{value:"Step 7",id:"step-7",level:2},{value:"Step 8",id:"step-8",level:2},{value:"Step 9",id:"step-9",level:2},{value:"Step 10",id:"step-10",level:2}],c={toc:d};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"step-1"},"Step 1"),(0,r.kt)("p",null,"To create a cluster, we need to spin up a few empty Redis instances and configure them to run in cluster mode."),(0,r.kt)("p",null,"Here\u2019s a minimal configuration file for Redis Cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# redis.conf file\nport 7000\ncluster-enabled yes\ncluster-config-file nodes.conf\ncluster-node-timeout 5000\nappendonly yes\n")),(0,r.kt)("p",null,"On the first line we specify the port on which the server should run, then we state that we want the server to run in cluster mode, with the ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster-enabled yes")," directive. ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster-config-file")," defines the name of the file where the configuration for this node is stored, in case of a server restart. Finally, ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster-node-timeout")," is the number of milliseconds a node must be unreachable for it to be considered in failure state."),(0,r.kt)("h2",{id:"step-2"},"Step 2"),(0,r.kt)("p",null,"Let\u2019s create a cluster on your localhost with three primary shards and three replicas (remember, in production always use two replicas to protect against a split-brain situation). We\u2019ll need to bring up six Redis processes and create a ",(0,r.kt)("inlineCode",{parentName:"p"},"redis.conf")," file for each of them, specifying their port and the rest of the configuration directives above."),(0,r.kt)("p",null,"First, create six directories:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p {7000..7005}\n")),(0,r.kt)("h2",{id:"step-3"},"Step 3"),(0,r.kt)("p",null,"Then create the minimal configuration ",(0,r.kt)("inlineCode",{parentName:"p"},"redis.conf")," file from above in each one of them, ",(0,r.kt)("strong",null,"making sure you change the port directive to match the directory name"),"."),(0,r.kt)("p",null,"To copy the initial ",(0,r.kt)("inlineCode",{parentName:"p"},"redis.conf")," file to each folder, run the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"for i in {7000..7005}; do cp redis.conf $i; done\n")),(0,r.kt)("p",null,"You should end up with the following directory structure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"- 7000\n  - redis.conf\n- 7001\n  - redis.conf\n- 7002\n  - redis.conf\n- 7003\n  - redis.conf\n- 7004\n  - redis.conf\n- 7005\n  - redis.conf\n")),(0,r.kt)("h2",{id:"step-4"},"Step 4"),(0,r.kt)("p",null,"Open six terminal tabs and start the servers by going into each one of the directories and starting a Redis instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Terminal tab 1\ncd 7000\n/path/to/redis-server ./redis.conf\n# Terminal tab 2\ncd 7001\n/path/to/redis-server ./redis.conf\n... and so on.\n")),(0,r.kt)("h2",{id:"step-5"},"Step 5"),(0,r.kt)("p",null,"Now that you have six empty Redis servers running, you can join them in a cluster:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"redis-cli --cluster create 127.0.0.1:7000 127.0.0.1:7001 \\\n127.0.0.1:7002 127.0.0.1:7003 127.0.0.1:7004 127.0.0.1:7005 \\\n--cluster-replicas 1\n")),(0,r.kt)("p",null,"Here we list the ports and IP addresses of all six servers and use the ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," command to instruct Redis to join them in a cluster, creating one replica for each primary. ",(0,r.kt)("inlineCode",{parentName:"p"},"redis-cli")," will propose a configuration; accept it by typing yes. The cluster will be configured and joined, which means, instances will be bootstrapped into talking with each other."),(0,r.kt)("p",null,"Finally, you should see a message saying:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"[OK] All 16384 slots covered\n")),(0,r.kt)("p",null,"This means that there is at least a master instance serving each of the 16384 slots available."),(0,r.kt)("h2",{id:"step-6"},"Step 6"),(0,r.kt)("p",null,"Let\u2019s add a new shard to the cluster, which is something you might do when you need to scale."),(0,r.kt)("p",null,"First, as before, we need to start two new empty Redis instances (primary and its replica) in cluster mode. We create new directories ",(0,r.kt)("inlineCode",{parentName:"p"},"7006")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"7007")," and in them we copy the same ",(0,r.kt)("inlineCode",{parentName:"p"},"redis.conf")," file we used before, making sure we change the port directive in them to the appropriate port (",(0,r.kt)("inlineCode",{parentName:"p"},"7006")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"7007"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ mkdir 7006 7007\n$ cp 7000/redis.conf 7006/redis.conf\n$ cp 7000/redis.conf 7007/redis.conf\n")),(0,r.kt)("p",null,"Update the port numbers in the files ",(0,r.kt)("inlineCode",{parentName:"p"},"./7006/redis.conf")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"./7007/redis.conf")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"7006")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"7007"),", respectively."),(0,r.kt)("h2",{id:"step-7"},"Step 7"),(0,r.kt)("p",null,"Let\u2019s start the Redis instances:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Terminal tab 7\n$ cd 7006\n$ redis-server ./redis.conf\n# Terminal tab 8\n$ cd 7007\n$ redis-server ./redis.conf\n")),(0,r.kt)("h2",{id:"step-8"},"Step 8"),(0,r.kt)("p",null,"In the next step we join the new primary shard to the cluster with the ",(0,r.kt)("inlineCode",{parentName:"p"},"add-node")," command. The first parameter is the address of the new shard, and the second parameter is the address of any of the current shards in the cluster."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"redis-cli --cluster add-node 127.0.0.1:7006 127.0.0.1:7000\n")),(0,r.kt)("strong",null,"Note: The Redis commands use the term \u201cNodes\u201d for what we call \u201cShards\u201d in this training, so a command named \u201cadd-node\u201d would mean \u201cadd a shard\u201d."),(0,r.kt)("h2",{id:"step-9"},"Step 9"),(0,r.kt)("p",null,"Finally we need to join the new replica shard, with the same ",(0,r.kt)("inlineCode",{parentName:"p"},"add-node")," command, and a few extra arguments indicating the shard is joining as a replica and what will be its primary shard. If we don\u2019t specify a primary shard Redis will assign one itself."),(0,r.kt)("p",null,"We can find the IDs of our shards by running the cluster nodes command on any of the shards:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ redis-cli -p 7000 cluster nodes\n46a768cfeadb9d2aee91ddd882433a1798f53271 127.0.0.1:7006@17006 master - 0 1616754504000 0 connected\n1f2bc068c7ccc9e408161bd51b695a9a47b890b2 127.0.0.1:7003@17003 slave a138f48fe038b93ea2e186e7a5962fb1fa6e34fa 0 1616754504551 3 connected\n5b4e4be56158cf6103ffa3035024a8d820337973 127.0.0.1:7001@17001 master - 0 1616754505584 2 connected 5461-10922\na138f48fe038b93ea2e186e7a5962fb1fa6e34fa 127.0.0.1:7002@17002 master - 0 1616754505000 3 connected 10923-16383\n71e078dab649166dcbbcec51520742bc7a5c1992 127.0.0.1:7005@17005 slave 5b4e4be56158cf6103ffa3035024a8d820337973 0 1616754505584 2 connected\nf224ecabedf39d1fffb34fb6c1683f8252f3b7dc 127.0.0.1:7000@17000 myself,master - 0 1616754502000 1 connected 0-5460\n04d71d5eb200353713da475c5c4f0a4253295aa4 127.0.0.1:7004@17004 slave f224ecabedf39d1fffb34fb6c1683f8252f3b7dc 0 1616754505896 1 connected\n")),(0,r.kt)("p",null,"The port of the primary shard we added in the last step was ",(0,r.kt)("inlineCode",{parentName:"p"},"7006"),", and we can see it on the first line. It\u2019s id is ",(0,r.kt)("inlineCode",{parentName:"p"},"46a768cfeadb9d2aee91ddd882433a1798f53271"),"."),(0,r.kt)("p",null,"The resulting command is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ redis-cli -p 7000 --cluster add-node 127.0.0.1:7007 127.0.0.1:7000 --cluster-slave --cluster-master-id 46a768cfeadb9d2aee91ddd882433a1798f53271\n")),(0,r.kt)("p",null,"The flag ",(0,r.kt)("inlineCode",{parentName:"p"},"cluster-slave")," indicates that the shard should join as a replica and ",(0,r.kt)("inlineCode",{parentName:"p"},"--cluster-master-id 46a768cfeadb9d2aee91ddd882433a1798f53271")," specifies which primary shard it should replicate."),(0,r.kt)("h2",{id:"step-10"},"Step 10"),(0,r.kt)("p",null,"Now our cluster has eight shards (four primary and four replica), but if we run the cluster slots command we\u2019ll see that the newly added shards don\u2019t host any hash slots, and thus - data. Let\u2019s assign some hash slots to them:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ redis-cli  -p 7000  --cluster reshard 127.0.0.1:7000\n")),(0,r.kt)("p",null,"We use the command ",(0,r.kt)("inlineCode",{parentName:"p"},"reshard")," and the address of any shard in the cluster as an argument here. In the next step we\u2019ll be able to choose the shards we\u2019ll be moving slots from and to."),(0,r.kt)("p",null,"The first question you\u2019ll get is about the number of slots you want to move. If we have 16384 slots in total, and four primary shards, let\u2019s get a quarter of all shards, so the data is distributed equally. 16384 \xf7 4 is 4096, so let\u2019s use that number."),(0,r.kt)("p",null,"The next question is about the receiving shard id; the ID of the primary shard we want to move the data to, which we learned how to get in the previous Step, with the cluster nodes command."),(0,r.kt)("p",null,"Finally, we need to enter the IDs of the shards we want to copy data from. Alternatively, we can type \u201call\u201d and the shard will move a number of hash slots from all available primary shards."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ redis-cli -p 7000 --cluster reshard 127.0.0.1:7000\n....\n....\n....\n\nHow many slots do you want to move (from 1 to 16384)? 4096\nWhat is the receiving node ID? 46a768cfeadb9d2aee91ddd882433a1798f53271\nPlease enter all the source node IDs.\n  Type 'all' to use all the nodes as source nodes for the hash slots.\n  Type 'done' once you entered all the source nodes IDs.\nSource node #1: all\n\nReady to move 4096 slots.\n  Source nodes:\n    M: f224ecabedf39d1fffb34fb6c1683f8252f3b7dc 127.0.0.1:7000\n    slots:[0-5460] (5461 slots) master\n    1 additional replica(s)\n    M: 5b4e4be56158cf6103ffa3035024a8d820337973 127.0.0.1:7001\n    slots:[5461-10922] (5462 slots) master\n    1 additional replica(s)\n    M: a138f48fe038b93ea2e186e7a5962fb1fa6e34fa 127.0.0.1:7002\n    slots:[10923-16383] (5461 slots) master\n    1 additional replica(s)\n  Destination node:\n    M: 46a768cfeadb9d2aee91ddd882433a1798f53271 127.0.0.1:7006\n    slots: (0 slots) master\n    1 additional replica(s)\n  Resharding plan:\n    Moving slot 5461 from 5b4e4be56158cf6103ffa3035024a8d820337973\n    Moving slot 5462 from 5b4e4be56158cf6103ffa3035024a8d820337973\n\nDo you want to proceed with the proposed reshard plan (yes/no)?\nMoving slot 5461 from 127.0.0.1:7001 to 127.0.0.1:7006:\nMoving slot 5462 from 127.0.0.1:7001 to 127.0.0.1:7006:\nMoving slot 5463 from 127.0.0.1:7001 to 127.0.0.1:7006:\n....\n....\n....\n")),(0,r.kt)("p",null,"Once the command finishes we can run the cluster slots command again and we\u2019ll see that our new primary and replica shards have been assigned some hash slots:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ redis-cli -p 7000 cluster slots\n")))}p.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[6973],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),p=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(r),h=n,f=u["".concat(o,".").concat(h)]||u[h]||c[h]||i;return r?a.createElement(f,s(s({ref:t},d),{},{components:r})):a.createElement(f,s({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var p=2;p<i;p++)s[p]=r[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},94233:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={id:"index-exercise",title:"2.2 Exercise: Saving a Snapshot",sidebar_label:"2.2 Exercise: Saving a Snapshot",slug:"/operate/redis-at-scale/persistence-and-durability/exercise",custom_edit_url:null},s=void 0,l={unversionedId:"operate/redis-at-scale/persistence-and-durability/exercise/index-exercise",id:"operate/redis-at-scale/persistence-and-durability/exercise/index-exercise",title:"2.2 Exercise: Saving a Snapshot",description:"As we learned in the previous unit, Redis will save a snapshot of your database every hour if at least one key has changed, every five minutes if at least 100 keys have changed, or every 60 seconds if at least 10000 keys have changed.",source:"@site/docs/operate/redis-at-scale/persistence-and-durability/exercise/index-exercise.mdx",sourceDirName:"operate/redis-at-scale/persistence-and-durability/exercise",slug:"/operate/redis-at-scale/persistence-and-durability/exercise",permalink:"/operate/redis-at-scale/persistence-and-durability/exercise",draft:!1,editUrl:null,tags:[],version:"current",lastUpdatedAt:1667495358,formattedLastUpdatedAt:"Nov 3, 2022",frontMatter:{id:"index-exercise",title:"2.2 Exercise: Saving a Snapshot",sidebar_label:"2.2 Exercise: Saving a Snapshot",slug:"/operate/redis-at-scale/persistence-and-durability/exercise",custom_edit_url:null},sidebar:"docs",previous:{title:"2.1 Persistence options in Redis'",permalink:"/operate/redis-at-scale/persistence-and-durability/persistence-options-in-redis"},next:{title:"3.0 Introduction to High Availability",permalink:"/operate/redis-at-scale/high-availability/introduction"}},o={},p=[{value:"Step 1",id:"step-1",level:2},{value:"Step 2",id:"step-2",level:2},{value:"Step 3",id:"step-3",level:2},{value:"Step 4",id:"step-4",level:2},{value:"Step 5",id:"step-5",level:2}],d={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"As we learned in the previous unit, Redis will save a snapshot of your database every hour if at least one key has changed, every five minutes if at least 100 keys have changed, or every 60 seconds if at least 10000 keys have changed."),(0,n.kt)("p",null,"Let\u2019s update this to a simplified hypothetical scenario where we want to save a snapshot if three keys have been modified in 20 seconds."),(0,n.kt)("h2",{id:"step-1"},"Step 1"),(0,n.kt)("p",null,"Create a directory named 2.2 and in it prepare a ",(0,n.kt)("inlineCode",{parentName:"p"},"redis.conf")," file."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ mkdir 2.2\n$ cd 2.2\n$ vim redis.conf\n")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"redis.conf")," file should specify a filename that will be used for the rdb file and a directive that will trigger the creation of a snapshot if 3 keys have been modified in 20 seconds, as described above."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"dbfilename my_backup_file.rdb\nsave 20 3\n")),(0,n.kt)("h2",{id:"step-2"},"Step 2"),(0,n.kt)("p",null,"In the 2.2 directory, start a Redis server - passing it the ",(0,n.kt)("inlineCode",{parentName:"p"},"redis.conf")," configuration file you just created."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"$ redis-server ./redis.conf\n")),(0,n.kt)("p",null,"In a separate terminal tab use the ",(0,n.kt)("inlineCode",{parentName:"p"},"redis-cli")," to create three random keys, one after the other. For example:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"127.0.0.1:6379> SET a 1\n127.0.0.1:6379> SET b 2\n127.0.0.1:6379> SET c 3\n")),(0,n.kt)("p",null,"Run the ",(0,n.kt)("inlineCode",{parentName:"p"},"ls")," command in the first terminal to list all the files in the 2.2 directory. What changed?"),(0,n.kt)("h2",{id:"step-3"},"Step 3"),(0,n.kt)("p",null,"Now we\u2019re ready to take our persistence a level higher and set up an ",(0,n.kt)("inlineCode",{parentName:"p"},"AOF")," file. Modify your ",(0,n.kt)("inlineCode",{parentName:"p"},"redis.conf")," file so that the server will log every new write command and force writing it to disk."),(0,n.kt)("p",null,"Be careful! We have a running server and we want this configuration to be applied without restarting it."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"127.0.0.1:6379> CONFIG SET appendonly yes\n127.0.0.1:6379> CONFIG SET appendfsync always\n")),(0,n.kt)("p",null,"In order for these settings to be persisted to the ",(0,n.kt)("inlineCode",{parentName:"p"},"redis.conf")," file we need to save them:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"127.0.0.1:6379> CONFIG REWRITE\n")),(0,n.kt)("h2",{id:"step-4"},"Step 4"),(0,n.kt)("p",null,"Create a few random keys through ",(0,n.kt)("inlineCode",{parentName:"p"},"redis-cli"),". Check the contents of the directory 2.2 again. What changed?"),(0,n.kt)("h2",{id:"step-5"},"Step 5"),(0,n.kt)("p",null,"As a final step, restart the Redis server process (you can press Ctrl+C in the terminal to stop the process and re-run it again). If you run the ",(0,n.kt)("inlineCode",{parentName:"p"},"SCAN 0")," command you will see that all the keys you created are still in the database, even though we restarted the process."))}c.isMDXComponent=!0}}]);
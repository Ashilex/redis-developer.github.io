"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[779],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>u});var a=i(67294);function s(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){s(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,a,s=function(e,t){if(null==e)return{};var i,a,s={},n=Object.keys(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||(s[i]=e[i]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)i=n[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(s[i]=e[i])}return s}var o=a.createContext({}),d=function(e){var t=a.useContext(o),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},c=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var i=e.components,s=e.mdxType,n=e.originalType,o=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=d(i),u=s,m=p["".concat(o,".").concat(u)]||p[u]||h[u]||n;return i?a.createElement(m,l(l({ref:t},c),{},{components:i})):a.createElement(m,l({ref:t},c))}));function u(e,t){var i=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=i.length,l=new Array(n);l[0]=p;var r={};for(var o in t)hasOwnProperty.call(t,o)&&(r[o]=t[o]);r.originalType=e,r.mdxType="string"==typeof e?e:s,l[1]=r;for(var d=2;d<n;d++)l[d]=i[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,i)}p.displayName="MDXCreateElement"},85162:(e,t,i)=>{i.d(t,{Z:()=>l});var a=i(67294),s=i(86010);const n="tabItem_Ymn6";function l(e){let{children:t,hidden:i,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,s.Z)(n,l),hidden:i},t)}},65488:(e,t,i)=>{i.d(t,{Z:()=>u});var a=i(87462),s=i(67294),n=i(86010),l=i(72389),r=i(67392),o=i(7094),d=i(12466);const c="tabList__CuJ",h="tabItem_LNqP";function p(e){var t;const{lazy:i,block:l,defaultValue:p,values:u,groupId:m,className:g}=e,k=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),w=u??k.map((e=>{let{props:{value:t,label:i,attributes:a}}=e;return{value:t,label:i,attributes:a}})),b=(0,r.l)(w,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===p?p:p??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==f&&!w.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${w.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:y}=(0,o.U)(),[I,R]=(0,s.useState)(f),S=[],{blockElementScrollPositionUntilNextRender:x}=(0,d.o5)();if(null!=m){const e=v[m];null!=e&&e!==I&&w.some((t=>t.value===e))&&R(e)}const T=e=>{const t=e.currentTarget,i=S.indexOf(t),a=w[i].value;a!==I&&(x(t),R(a),null!=m&&y(m,String(a)))},A=e=>{var t;let i=null;switch(e.key){case"Enter":T(e);break;case"ArrowRight":{const t=S.indexOf(e.currentTarget)+1;i=S[t]??S[0];break}case"ArrowLeft":{const t=S.indexOf(e.currentTarget)-1;i=S[t]??S[S.length-1];break}}null==(t=i)||t.focus()};return s.createElement("div",{className:(0,n.Z)("tabs-container",c)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":l},g)},w.map((e=>{let{value:t,label:i,attributes:l}=e;return s.createElement("li",(0,a.Z)({role:"tab",tabIndex:I===t?0:-1,"aria-selected":I===t,key:t,ref:e=>S.push(e),onKeyDown:A,onClick:T},l,{className:(0,n.Z)("tabs__item",h,null==l?void 0:l.className,{"tabs__item--active":I===t})}),i??t)}))),i?(0,s.cloneElement)(k.filter((e=>e.props.value===I))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==I})))))}function u(e){const t=(0,l.Z)();return s.createElement(p,(0,a.Z)({key:String(t)},e))}},50358:(e,t,i)=>{i.d(t,{Z:()=>o});var a=i(67294),s=i(52263);const n="authorByline_VoxI",l="authorLabel_a70t",r="authorProfileImage_URwT";const o=function(e){let{frontMatter:t}=e;const{siteConfig:i}=(0,s.Z)(),o=i.customFields.authors;return a.createElement(a.Fragment,null,t.authors&&a.createElement("div",{className:"docAuthors"},a.createElement("hr",null),t.authors.map((e=>a.createElement("div",{key:e,className:n},a.createElement("img",{className:r,src:`/img/${o[e].image?o[e].image:"default_author_profile_pic.png"}`,alt:`Profile picture for ${o[e].name}`}),a.createElement("div",null,a.createElement("div",{className:l},"Author:"),a.createElement("div",null,a.createElement("a",{href:o[e].link,target:"_blank"},o[e].name),", ",o[e].title))))),a.createElement("hr",null)))}},79984:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var a=i(87462),s=(i(67294),i(3905)),n=i(65488),l=i(85162),r=i(50358);const o={id:"index-gettingstarted",title:"Getting Started with RedisInsight",sidebar_label:"Getting Started with RedisInsight",slug:"/explore/redisinsightv2/getting-started",authors:["ajeet"]},d=void 0,c={unversionedId:"explore/redisinsightv2/getting-started/index-gettingstarted",id:"explore/redisinsightv2/getting-started/index-gettingstarted",title:"Getting Started with RedisInsight",description:"My Image",source:"@site/docs/explore/redisinsightv2/getting-started/index-gettingstarted.mdx",sourceDirName:"explore/redisinsightv2/getting-started",slug:"/explore/redisinsightv2/getting-started",permalink:"/explore/redisinsightv2/getting-started",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/explore/redisinsightv2/getting-started/index-gettingstarted.mdx",tags:[],version:"current",lastUpdatedAt:1667495358,formattedLastUpdatedAt:"Nov 3, 2022",frontMatter:{id:"index-gettingstarted",title:"Getting Started with RedisInsight",sidebar_label:"Getting Started with RedisInsight",slug:"/explore/redisinsightv2/getting-started",authors:["ajeet"]},sidebar:"docs",previous:{title:"Overview",permalink:"/explore/redisinsightv2"},next:{title:"How to run RedisInsight on Windows",permalink:"/explore/redisinsightv2/windows"}},h={},p=[{value:"What&#39;s New in RedisInsight v2.0?",id:"whats-new-in-redisinsight-v20",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Using MacOS",id:"using-macos",level:2},{value:"Step 1. Install Redis Stack using Homebrew",id:"step-1-install-redis-stack-using-homebrew",level:3},{value:"Start Redis Stack Server",id:"start-redis-stack-server",level:3},{value:"Existing Redis installation",id:"existing-redis-installation",level:3},{value:"Step 2. Add Redis database",id:"step-2-add-redis-database",level:3},{value:"Step 3. Enter Redis database details",id:"step-3-enter-redis-database-details",level:3},{value:"Step 5. Redis for time series",id:"step-5-redis-for-time-series",level:3},{value:"Step 6. Create time series per shop",id:"step-6-create-time-series-per-shop",level:3},{value:"Step 7. Running the query",id:"step-7-running-the-query",level:3},{value:"Step 8. Time series compaction",id:"step-8-time-series-compaction",level:3},{value:"Example:",id:"example",level:4},{value:"Overview of RedisInsight Workbench",id:"overview-of-redisinsight-workbench",level:3},{value:"Accessing the CLI",id:"accessing-the-cli",level:3},{value:"Using Linux",id:"using-linux",level:2},{value:"Step 1. Download RedisInsight",id:"step-1-download-redisinsight",level:3},{value:"Step 2. Install RedisInsight",id:"step-2-install-redisinsight",level:3},{value:"Step 3. Start RedisInsight.",id:"step-3-start-redisinsight",level:3},{value:"Step 4. Changing the appearance",id:"step-4-changing-the-appearance",level:3},{value:"Step 5. Connect to Redis Database",id:"step-5-connect-to-redis-database",level:3},{value:"Step 6. Add Redis database",id:"step-6-add-redis-database",level:3},{value:"Step 7. Adding a New Key",id:"step-7-adding-a-new-key",level:3},{value:"Step 8. Accessing the Workbench",id:"step-8-accessing-the-workbench",level:3},{value:"Step 9. Accessing the CLI",id:"step-9-accessing-the-cli",level:3},{value:"Using Windows",id:"using-windows",level:2},{value:"Step 1. Download RedisInsight",id:"step-1-download-redisinsight-1",level:3},{value:"Step 2. Install RedisInsight",id:"step-2-install-redisinsight-1",level:3},{value:"Step 3. Accessing RedisInsight",id:"step-3-accessing-redisinsight",level:3},{value:"Step 4. Changing the Theme",id:"step-4-changing-the-theme",level:3},{value:"Step 5. Add a Redis Database",id:"step-5-add-a-redis-database",level:3},{value:"Step 6. Adding a New Key",id:"step-6-adding-a-new-key",level:3},{value:"Step 7. Accessing the Workbench",id:"step-7-accessing-the-workbench",level:3},{value:"Step 8. Accessing the CLI",id:"step-8-accessing-the-cli",level:3},{value:"References",id:"references",level:3}],u={toc:p};function m(e){let{components:t,...d}=e;return(0,s.kt)("wrapper",(0,a.Z)({},u,d,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(r.Z,{frontMatter:o,mdxType:"Authors"}),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"My Image",src:i(41898).Z,width:"1024",height:"244"})),(0,s.kt)("p",null,"RedisInsight is a visual tool that lets you do both GUI- and CLI-based interactions with your Redis database, and so much more when developing your Redis based application. It is a fully-featured pure Desktop GUI client that provides capabilities to design, develop and optimize your Redis application. It works with any cloud provider as long as you run it on a host with network access to your cloud-based Redis server. It makes it easy to discover cloud databases and configure connection details with a single click. It allows you to automatically add Redis Enterprise Software and Redis Enterprise Cloud databases."),(0,s.kt)("h2",{id:"whats-new-in-redisinsight-v20"},"What's New in RedisInsight v2.0?"),(0,s.kt)("p",null,"RedisInsight v2.0 is a complete product rewrite based on a new tech stack comprising of ",(0,s.kt)("a",{parentName:"p",href:"https://www.electronjs.org/"},"Electron"),", ",(0,s.kt)("a",{parentName:"p",href:"https://microsoft.github.io/monaco-editor/"},"Monaco Editor")," and ",(0,s.kt)("a",{parentName:"p",href:"https://nodejs.org"},"NodeJS"),". This version contains a number of must-have and most-used capabilities from previous releases, plus a number of differentiators and delighters. You can run the application locally along with your favorite IDE, and it remains cross-platform, supported on Linux, Windows, and MacOS."),(0,s.kt)("div",{class:"text--center"},(0,s.kt)("iframe",{width:"760",height:"315",src:"https://www.youtube.com/embed/ppYSS6opUiQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,s.kt)("p",null,"Starting with RedisInsight v2.0 release, the code is open source and publicly available over on ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/redisinsight/redisinsight"},"GitHub"),". Below are the list of new features introduced with this latest release:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Workbench - An advanced command line interface with intelligent command auto-complete and complex data visualizations"),(0,s.kt)("li",{parentName:"ul"},"Ability to write and render your own data visualizations within Workbench"),(0,s.kt)("li",{parentName:"ul"},"Built-in click-through Redis Guides available"),(0,s.kt)("li",{parentName:"ul"},"Support for Light and Dark themes"),(0,s.kt)("li",{parentName:"ul"},"Enhanced user experience with Browser")),(0,s.kt)("h2",{id:"getting-started"},"Getting Started"),(0,s.kt)(n.Z,{defaultValue:"MacOS",values:[{label:"MacOS",value:"MacOS"},{label:"Linux",value:"Linux"},{label:"Windows",value:"Windows"}],mdxType:"Tabs"},(0,s.kt)(l.Z,{value:"MacOS",mdxType:"TabItem"},(0,s.kt)("h2",{id:"using-macos"},"Using MacOS"),(0,s.kt)("p",null,"To install RedisInsight on MacOS, the easiest way is to install Redis Stack.\nMake sure that you have Homebrew installed before starting on the installation instructions below."),(0,s.kt)("h3",{id:"step-1-install-redis-stack-using-homebrew"},"Step 1. Install Redis Stack using Homebrew"),(0,s.kt)("p",null,"First, tap the Redis Stack Homebrew tap and then run ",(0,s.kt)("inlineCode",{parentName:"p"},"brew install")," as shown below:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"}," brew tap redis-stack/redis-stack\n brew install --cask redis-stack\n")),(0,s.kt)("p",null,"This will install all Redis and Redis Stack binaries. How you run these binaries depends on whether you already have Redis installed on your system."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"}," ==> Installing Cask redis-stack-redisinsight\n ==> Moving App 'RedisInsight-preview.app' to '/Applications/RedisInsight-preview.app'\n \ud83c\udf7a  redis-stack-redisinsight was successfully installed!\n ==> Installing Cask redis-stack\n \ud83c\udf7a  redis-stack was successfully installed!\n")),(0,s.kt)("admonition",{title:"TIP",type:"info"},(0,s.kt)("p",{parentName:"admonition"},"If this is the first time you\u2019ve installed Redis on your system, then all Redis Stack binaries be installed and accessible on your path. On M1 Macs, this assumes that ",(0,s.kt)("inlineCode",{parentName:"p"},"/opt/homebrew/bin")," is in your path. On Intel-based Macs, ",(0,s.kt)("inlineCode",{parentName:"p"},"/usr/local/bin")," should be in the path."),(0,s.kt)("p",{parentName:"admonition"},"To check this, run:"),(0,s.kt)("pre",{parentName:"admonition"},(0,s.kt)("code",{parentName:"pre",className:"language-bash"}," echo $PATH\n")),(0,s.kt)("p",{parentName:"admonition"},"Then, confirm that the output contains ",(0,s.kt)("inlineCode",{parentName:"p"},"/opt/homebrew/bin")," (M1 Mac) or ",(0,s.kt)("inlineCode",{parentName:"p"},"/usr/local/bin")," (Intel Mac). If these directories are not in the output, see the \u201cExisting Redis installation\u201d instructions below.")),(0,s.kt)("h3",{id:"start-redis-stack-server"},"Start Redis Stack Server"),(0,s.kt)("p",null,"You can now start Redis Stack Server as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"}," redis-stack-server\n")),(0,s.kt)("h3",{id:"existing-redis-installation"},"Existing Redis installation"),(0,s.kt)("p",null,"If you have an existing Redis installation on your system, then you\u2019ll need to modify your path to ensure that you\u2019re using the latest Redis Stack binaries."),(0,s.kt)("p",null,"Open the file ",(0,s.kt)("inlineCode",{parentName:"p"},"~/.bashrc")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"~/zshrc")," (depending on your shell), and add the following lines."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"  export PATH=/usr/local/Caskroom/redis-stack-server/<VERSION>/bin:$PATH\n")),(0,s.kt)("p",null,'Go to Applications and click "RedisInsight-v2" to bring up the Redis Desktop GUI tool.'),(0,s.kt)("h3",{id:"step-2-add-redis-database"},"Step 2. Add Redis database"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"access redisinsight",src:i(42942).Z,width:"2078",height:"1496"})),(0,s.kt)("h3",{id:"step-3-enter-redis-database-details"},"Step 3. Enter Redis database details"),(0,s.kt)("p",null,"Add the local Redis database endpoint and port."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"access redisinsight",src:i(36902).Z,width:"2288",height:"1414"})),(0,s.kt)("h3",{id:"step-5-redis-for-time-series"},"Step 5. Redis for time series"),(0,s.kt)("p",null,"Redis Stack provides you with a native time series data structure. Let's see how a time series might be useful in our bike shop."),(0,s.kt)("p",null,"As we have multiple physical shops too, alongside our online shop, it could be helpful to have an overview of the sales volume. We will create one time series per shop tracking the total amount of all sales. In addition, we will mark the time series with the appropriate region label, east or west. This kind of representation will allow us to easily query bike sales performance per certain time periods, per shop, per region or across all shops."),(0,s.kt)("p",null,'Click "Guides" icon(just below the key) in the left sidebar and choose "Redis for the time series" for this demonstration. i'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"redis for timeseries",src:i(67034).Z,width:"2282",height:"1232"})),(0,s.kt)("h3",{id:"step-6-create-time-series-per-shop"},"Step 6. Create time series per shop"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"}," TS.CREATE bike_sales_1 DUPLICATE_POLICY SUM LABELS region east compacted no\n TS.CREATE bike_sales_2 DUPLICATE_POLICY SUM LABELS region east compacted no\n TS.CREATE bike_sales_3 DUPLICATE_POLICY SUM LABELS region west compacted no\n TS.CREATE bike_sales_4 DUPLICATE_POLICY SUM LABELS region west compacted no\n TS.CREATE bike_sales_5 DUPLICATE_POLICY SUM LABELS region west compacted no\n")),(0,s.kt)("p",null,"As shown in the following query, we make the shop id (1,2,3,4,5) a part of the time series name. You might also notice the ",(0,s.kt)("inlineCode",{parentName:"p"},"DUPLICATE_POLICY SUM")," argument; this describes what should be done when two events in the same time series share the same timestamp: In this case, it would mean that two sales happened at exactly the same time, so the resulting value should be a sum of the two sales amounts."),(0,s.kt)("p",null,"Since the metrics are collected with a millisecond timestamp, we can compact our time series into sales per hour:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"create time series per shop",src:i(88759).Z,width:"2214",height:"952"})),(0,s.kt)("h3",{id:"step-7-running-the-query"},"Step 7. Running the query"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"execute the query",src:i(39605).Z,width:"1774",height:"872"})),(0,s.kt)("h3",{id:"step-8-time-series-compaction"},"Step 8. Time series compaction"),(0,s.kt)("p",null,"RedisTimeSeries supports downsampling with the following aggregations: avg, sum, min, max, range, count, first and last. If you want to keep all of your raw data points indefinitely, your data set grows linearly over time. However, if your use case allows you to have less fine-grained data further back in time, downsampling can be applied. This allows you to keep fewer historical data points by aggregating raw data for a given time window using a given aggregation function."),(0,s.kt)("h4",{id:"example"},"Example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"}," TS.CREATERULE bike_sales_5 bike_sales_5_per_day AGGREGATION sum 86400000\n")),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"time series compaction",src:i(86190).Z,width:"1714",height:"838"})),(0,s.kt)("h3",{id:"overview-of-redisinsight-workbench"},"Overview of RedisInsight Workbench"),(0,s.kt)("p",null,"With the new RedisInsight v2.0, a Workbench has been introduced. Workbench is basically an advanced command-line interface that lets you run commands against your Redis server. Workbench editor allows comments, multi-line formatting and multi-command execution. It is an Intelligent Redis command auto-complete and syntax highlighting with support for RediSearch, RedisJSON, RedisGraph, RedisTimeSeries, RedisGears, RedisAI, RedisBloom. It allows rendering custom data visualization per Redis command using externally developed plugins."),(0,s.kt)("p",null,"You can locate the workbench on the left sidebar of RedisInsight dashboard UI. It displays a built-in click-through guides for Redis capabilities. You can also see a number of metrics always on display within the database workspace. These metrics get updated every 5 seconds. The metrics include CPU, number of keys, commands/sec, network input, network output, total memory, number of connected clients."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"My Image",src:i(94723).Z,width:"2546",height:"1146"})),(0,s.kt)("p",null,"Check out the reference section to learn more about the new RedisInsight v2.0 features."),(0,s.kt)("h3",{id:"accessing-the-cli"},"Accessing the CLI"),(0,s.kt)("p",null,'The new RedisInsight v2.0 comes with a command-line interface with enhanced type-ahead command help. It includes an embedded command helper where you can filter and search for Redis commands. Click on "CLI" option to open CLI window:'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"My Image",src:i(58470).Z,width:"2304",height:"1544"})),(0,s.kt)("p",null,"Try executing Redis commands as shown below:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"My Image",src:i(99654).Z,width:"2414",height:"854"}))),(0,s.kt)(l.Z,{value:"Linux",mdxType:"TabItem"},(0,s.kt)("h2",{id:"using-linux"},"Using Linux"),(0,s.kt)("h3",{id:"step-1-download-redisinsight"},"Step 1. Download RedisInsight"),(0,s.kt)("p",null,"To use RedisInsight on your Linux machine, you can download it directly from the official Redis website:"),(0,s.kt)("p",null,"Open ",(0,s.kt)("a",{parentName:"p",href:"https://redis.com/redis-enterprise/redis-insight/#insight-form"},"this")," link to open up a form that allows you to select the operating system of your choice."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"My Image",src:i(60203).Z,width:"1346",height:"1350"})),(0,s.kt)("p",null,"Fill out the rest of the form and click \u201cDownload\u201d. Please note that the package is based on AppImage. The AppImage file is a compressed image which is temporarily mounted to allow access to the program, but not having to extract the program or modify the underlying system."),(0,s.kt)("p",null,"Package Name: RedisInsight-preview-linux.AppImage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"}," file RedisInsight-preview-linux.AppImage\n RedisInsight-preview-linux.AppImage: ELF 64-bit LSB executable, x86-64, version 1 (SYSV), dynamically linked, interpreter /lib64/ld-linux-x86-64.so.2, for GNU/Linux 2.6.18, stripped\n")),(0,s.kt)("h3",{id:"step-2-install-redisinsight"},"Step 2. Install RedisInsight"),(0,s.kt)("p",null,"Open a terminal and navigate to the folder containing the downloaded file."),(0,s.kt)("p",null,"Make your downloaded file into an executable."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"chmod a+x RedisInsight-preview-linux.AppImage\n")),(0,s.kt)("h3",{id:"step-3-start-redisinsight"},"Step 3. Start RedisInsight."),(0,s.kt)("p",null,"Run the below command to open up RedisInsight dashboard."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"./RedisInsight-preview-linux.AppImage\n")),(0,s.kt)("h3",{id:"step-4-changing-the-appearance"},"Step 4. Changing the appearance"),(0,s.kt)("p",null,'RedisInsight v2.x allows you to specify the color theme of your choice. Click on "Settings" and change the appearance from "Dark Theme" to "Light Theme" as shown in the image below:'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"My Image",src:i(76381).Z,width:"1894",height:"1180"})),(0,s.kt)("h3",{id:"step-5-connect-to-redis-database"},"Step 5. Connect to Redis Database"),(0,s.kt)("p",null,'There are multiple ways you can connect to a Redis database - either by creating a new Redis Enterprise Cloud database or connecting to an existing database. To connect to Redis Enterprise Cloud, choose the "Create a Free on Redis Cloud" option.'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"My Image",src:i(49939).Z,width:"1196",height:"1272"})),(0,s.kt)("p",null,"Once clicked, it will redirect to ",(0,s.kt)("a",{parentName:"p",href:"https://redis.com/try-free/?utm_source=redis&utm_medium=app&utm_campaign=redisinsight"},"the link")," where you will need to complete the form."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"My Image",src:i(9825).Z,width:"2378",height:"1766"})),(0,s.kt)("p",null,"You can follow ",(0,s.kt)("a",{parentName:"p",href:"/create/rediscloud"},"this link")," to create a New Redis Enterprise Cloud database.\nIn case you have an existing Redis database, follow the below steps."),(0,s.kt)("p",null,'Assuming that you already have Redis database up and running locally, proceed to the next step to select "ADD REDIS DATABASE"'),(0,s.kt)("h3",{id:"step-6-add-redis-database"},"Step 6. Add Redis database"),(0,s.kt)("p",null,"Enter the requested details, including Host (endpoint), Port, and Alias in the form, as shown below. You can skip username for now. Then click \u201cADD REDIS DATABASE\u201d:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"My Image",src:i(9381).Z,width:"982",height:"1354"})),(0,s.kt)("p",null,"Once added, you will see the database added as shown below:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"My Image",src:i(50742).Z,width:"2600",height:"710"})),(0,s.kt)("h3",{id:"step-7-adding-a-new-key"},"Step 7. Adding a New Key"),(0,s.kt)("p",null,'Select the "Key" icon on the left sidebar of RedisInsight UI and click "+Key" to add a new key.'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"My Image",src:i(66499).Z,width:"1248",height:"1094"})),(0,s.kt)("p",null,"Once added, the dashboard UI shows the hash key details."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"My Image",src:i(96216).Z,width:"1804",height:"994"})),(0,s.kt)("h3",{id:"step-8-accessing-the-workbench"},"Step 8. Accessing the Workbench"),(0,s.kt)("p",null,"With the new RedisInsight v2.0, a Workbench has been introduced. Workbench is basically an advanced command-line interface that lets you run commands against your Redis server. Workbench editor allows comments, multi-line formatting and multi-command execution. It is an Intelligent Redis command auto-complete and syntax highlighting with support for RediSearch, RedisJSON, RedisGraph, RedisTimeSeries, RedisGears, RedisAI, RedisBloom. It allows rendering custom data visualization per Redis command using externally developed plugins."),(0,s.kt)("p",null,"You can locate the workbench on the left sidebar of RedisInsight dashboard UI. It displays a built-in click-through guides for Redis capabilities. You can also see a number of metrics always on display within the database workspace. These metrics get updated every 5 seconds. The metrics include CPU, number of keys, commands/sec, network input, network output, total memory, number of connected clients."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"My Image",src:i(94723).Z,width:"2546",height:"1146"})),(0,s.kt)("h3",{id:"step-9-accessing-the-cli"},"Step 9. Accessing the CLI"),(0,s.kt)("p",null,'The new RedisInsight v2.0 comes with a command-line interface with enhanced type-ahead command help. It includes an embedded command helper where you can filter and search for Redis commands. Click on "CLI" option to open CLI window:'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"My Image",src:i(58470).Z,width:"2304",height:"1544"})),(0,s.kt)("p",null,"Try executing Redis commands as shown below:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"My Image",src:i(99654).Z,width:"2414",height:"854"}))),(0,s.kt)(l.Z,{value:"Windows",mdxType:"TabItem"},(0,s.kt)("h2",{id:"using-windows"},"Using Windows"),(0,s.kt)("h3",{id:"step-1-download-redisinsight-1"},"Step 1. Download RedisInsight"),(0,s.kt)("p",null,"To install RedisInsight on Windows, you need to first download the RedisInsight windows bits."),(0,s.kt)("p",null,"Open ",(0,s.kt)("a",{parentName:"p",href:"https://redis.com/redis-enterprise/redis-insight/#insight-form"},"this")," link to open up a form that allows you to select the operating system of your choice."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"My Image",src:i(86369).Z,width:"1460",height:"1500"})),(0,s.kt)("h3",{id:"step-2-install-redisinsight-1"},"Step 2. Install RedisInsight"),(0,s.kt)("p",null,"Once you download the bits, double-click the file 'RedisInsight-preview-win-installer.exe' to install RedisInsight in your Windows desktop."),(0,s.kt)("h3",{id:"step-3-accessing-redisinsight"},"Step 3. Accessing RedisInsight"),(0,s.kt)("p",null,"Double-click on RedisInsight icon to access RedisInsight."),(0,s.kt)("h3",{id:"step-4-changing-the-theme"},"Step 4. Changing the Theme"),(0,s.kt)("p",null,'RedisInsight v2.x allows you to specify the color theme of your choice. Click on "Settings" and change the appearance from "Dark Theme" to "Light Theme" as shown in the image below:'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"My Image",src:i(76381).Z,width:"1894",height:"1180"})),(0,s.kt)("h3",{id:"step-5-add-a-redis-database"},"Step 5. Add a Redis Database"),(0,s.kt)("p",null,"Enter the requested details, including Host (endpoint), Port, and Alias in the form, as shown below. You can skip username for now. Then click \u201cADD REDIS DATABASE\u201d:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"My Image",src:i(9381).Z,width:"982",height:"1354"})),(0,s.kt)("p",null,"Once added, you will see the database added as shown below:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"My Image",src:i(50742).Z,width:"2600",height:"710"})),(0,s.kt)("h3",{id:"step-6-adding-a-new-key"},"Step 6. Adding a New Key"),(0,s.kt)("p",null,'Select the "Key" icon on the left sidebar of RedisInsight UI and click "+Key" to add a new key.'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"My Image",src:i(66499).Z,width:"1248",height:"1094"})),(0,s.kt)("p",null,"Once added, the dashboard UI shows the hash key details."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"My Image",src:i(96216).Z,width:"1804",height:"994"})),(0,s.kt)("h3",{id:"step-7-accessing-the-workbench"},"Step 7. Accessing the Workbench"),(0,s.kt)("p",null,"With the new RedisInsight v2.0, a Workbench has been introduced. Workbench is basically an advanced command-line interface that lets you run commands against your Redis server. Workbench editor allows comments, multi-line formatting and multi-command execution. It is an Intelligent Redis command auto-complete and syntax highlighting with support for RediSearch, RedisJSON, RedisGraph, RedisTimeSeries, RedisGears, RedisAI, RedisBloom. It allows rendering custom data visualization per Redis command using externally developed plugins"),(0,s.kt)("p",null,"You can locate the workbench on the left sidebar of RedisInsight dashboard UI. It displays a built-in click-through guides for Redis capabilities. You can also see a number of metrics always on display within the database workspace. These metrics get updated every 5 seconds. The metrics include CPU, number of keys, commands/sec, network input, network output, total memory, number of connected clients."),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"My Image",src:i(94723).Z,width:"2546",height:"1146"})),(0,s.kt)("h3",{id:"step-8-accessing-the-cli"},"Step 8. Accessing the CLI"),(0,s.kt)("p",null,'The new RedisInsight v2.0 comes with a command-line interface with enhanced type-ahead command help. It includes an embedded command helper where you can filter and search for Redis commands. Click on "CLI" option to open CLI window:'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"My Image",src:i(58470).Z,width:"2304",height:"1544"})),(0,s.kt)("p",null,"Try executing Redis commands as shown below:"),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"My Image",src:i(99654).Z,width:"2414",height:"854"})))),(0,s.kt)("p",null,"RedisInsight allows you to browse, filter and visualize key-value Redis data structures. It support CRUD operation for Lists, Hashes, Strings, Sets, Sorted Sets etc. ",(0,s.kt)("a",{parentName:"p",href:"/explore/redisinsightv2/browser"},"In our next tutorial"),", we will explore the browser tool in more details."),(0,s.kt)("h3",{id:"references"},"References"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://redis.com/blog/introducing-redisinsight-2/"},"RedisInsight v2.0 Release Blog")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.redis.com/latest/ri/release-notes/v2.0.2/"},"RedisInsight v2.0 Release Notes")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/redisinsight/redisinsight"},"RedisInsight GitHub Repository"))))}m.isMDXComponent=!0},42942:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/add_database-9830232a6e209dc61f0bfd5a8bf87ea4.png"},96216:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/image11-3bb7184084a5e4b70cd235c5734ea4e4.png"},94723:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/image13-7e36c4dce9291f7cbd8bf4da3815adaa.png"},58470:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/image16-55979e0607c5b3c72079bf4c4b98e76b.png"},99654:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/image17-f89f27d5f2c1b4be4b9270a659019ac7.png"},60203:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/image21-16c8de4c66e3c6a5583f762978ffd3e9.png"},49939:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/image31-cc1ee9ebe1ac98480415bc844fc3763f.png"},9825:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/image41-44ac3b77adcabddddd823226bd090f9b.png"},9381:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/image_61-f2ae30fb1dd6cd8a3b158943319c4217.png"},66499:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/image_71-5585c08e045f26ed9d924414f4ed140c.png"},76381:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/image_appearance-5d3d1d07b060d40f065b0db6c959dd2e.png"},50742:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/image_db-0742b337e1136a4d17c652af6b454307.png"},86369:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/image_windows-2ef81f66dc4ebfadefd7801d10860cfc.png"},41898:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/redisinsight-e0a8d5ad7ea887deb82179a3dad7ca2d.png"},36902:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/testredis1-00dd4af30abfacc3794d407f00ecc353.png"},67034:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/testredis2-74bd5e0774ec1c50adc2a62e37353f2a.png"},88759:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/testredis3-bc694edacbcd09186a2feff7e77e0c71.png"},39605:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/testredis4-8ca0ff4f3a285039d7f621c11f4afb47.png"},86190:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/testredis6-064d294586d0d32e8c015588ec478b00.png"}}]);
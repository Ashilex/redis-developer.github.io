"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[6502],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),h=r,m=u["".concat(o,".").concat(h)]||u[h]||d[h]||l;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},85162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:a},t)}},65488:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(87462),r=a(67294),l=a(86010),i=a(72389),s=a(67392),o=a(7094),c=a(12466);const p="tabList__CuJ",d="tabItem_LNqP";function u(e){var t;const{lazy:a,block:i,defaultValue:u,values:h,groupId:m,className:g}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=h??k.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),f=(0,s.l)(v,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===u?u:u??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==b&&!v.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:y}=(0,o.U)(),[S,w]=(0,r.useState)(b),E=[],{blockElementScrollPositionUntilNextRender:T}=(0,c.o5)();if(null!=m){const e=N[m];null!=e&&e!==S&&v.some((t=>t.value===e))&&w(e)}const x=e=>{const t=e.currentTarget,a=E.indexOf(t),n=v[a].value;n!==S&&(T(t),w(n),null!=m&&y(m,String(n)))},C=e=>{var t;let a=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;a=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;a=E[t]??E[E.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":i},g)},v.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:e=>E.push(e),onKeyDown:C,onClick:x},i,{className:(0,l.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":S===t})}),a??t)}))),a?(0,r.cloneElement)(k.filter((e=>e.props.value===S))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==S})))))}function h(e){const t=(0,i.Z)();return r.createElement(u,(0,n.Z)({key:String(t)},e))}},50358:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(67294),r=a(52263);const l="authorByline_VoxI",i="authorLabel_a70t",s="authorProfileImage_URwT";const o=function(e){let{frontMatter:t}=e;const{siteConfig:a}=(0,r.Z)(),o=a.customFields.authors;return n.createElement(n.Fragment,null,t.authors&&n.createElement("div",{className:"docAuthors"},n.createElement("hr",null),t.authors.map((e=>n.createElement("div",{key:e,className:l},n.createElement("img",{className:s,src:`/img/${o[e].image?o[e].image:"default_author_profile_pic.png"}`,alt:`Profile picture for ${o[e].name}`}),n.createElement("div",null,n.createElement("div",{className:i},"Author:"),n.createElement("div",null,n.createElement("a",{href:o[e].link,target:"_blank"},o[e].name),", ",o[e].title))))),n.createElement("hr",null)))}},63046:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var n=a(87462),r=(a(67294),a(3905)),l=a(65488),i=a(85162),s=a(50358);const o={id:"index-dotnet",title:".NET and Redis",sidebar_label:"Getting Started",slug:"/develop/dotnet/",authors:["steve"]},c=void 0,p={unversionedId:"develop/dotnet/index-dotnet",id:"develop/dotnet/index-dotnet",title:".NET and Redis",description:"Getting Started",source:"@site/docs/develop/dotnet/index-dotnet.mdx",sourceDirName:"develop/dotnet",slug:"/develop/dotnet/",permalink:"/develop/dotnet/",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/dotnet/index-dotnet.mdx",tags:[],version:"current",lastUpdatedAt:1667495358,formattedLastUpdatedAt:"Nov 3, 2022",frontMatter:{id:"index-dotnet",title:".NET and Redis",sidebar_label:"Getting Started",slug:"/develop/dotnet/",authors:["steve"]},sidebar:"docs",previous:{title:"Redis with FastAPI",permalink:"/develop/python/fastapi"},next:{title:"Fixed Window Rate Limiting app using ASP.NET",permalink:"/develop/dotnet/aspnetcore/rate-limiting/fixed-window"}},d={},u=[{value:"Getting Started",id:"getting-started",level:2},{value:"Step 1. Install the Package",id:"step-1-install-the-package",level:2},{value:"Step 2. Import the Required Namespace",id:"step-2-import-the-required-namespace",level:2},{value:"Step 3. Initialize the ConnectionMultiplexer",id:"step-3-initialize-the-connectionmultiplexer",level:2},{value:"Step 4. Grab Database Connection",id:"step-4-grab-database-connection",level:2},{value:"Step 5. Use the connection",id:"step-5-use-the-connection",level:2},{value:"Set String",id:"set-string",level:3},{value:"Get String",id:"get-string",level:3},{value:"Insert Into List",id:"insert-into-list",level:3},{value:"Pop Out of List",id:"pop-out-of-list",level:3},{value:"Insert Into Set",id:"insert-into-set",level:3},{value:"Set Union",id:"set-union",level:3},{value:"Set Intersection",id:"set-intersection",level:3},{value:"Set Difference",id:"set-difference",level:3},{value:"Add to Hash",id:"add-to-hash",level:3},{value:"Get Field From Hash",id:"get-field-from-hash",level:3},{value:"Get All Fields From Hash",id:"get-all-fields-from-hash",level:3},{value:"Redis Launchpad",id:"redis-launchpad",level:2},{value:"Rate Limiting App in .NET",id:"rate-limiting-app-in-net",level:4},{value:"Leaderboard App in .NET",id:"leaderboard-app-in-net",level:4},{value:"API Caching .NET",id:"api-caching-net",level:4},{value:"Basic Chat App .NET",id:"basic-chat-app-net",level:4},{value:"Additional Resources",id:"additional-resources",level:4}],h={toc:u};function m(e){let{components:t,...c}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,c,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(s.Z,{frontMatter:o,mdxType:"Authors"}),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"The .NET Community has built many ",(0,r.kt)("a",{parentName:"p",href:"https://redis.io/clients#c-sharp"},"client libraries")," to help handle requests to Redis Server. In this guide, we'll mostly be concerned with using the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/StackExchange/StackExchange.Redis"},"StackExchange.Redis")," client library. As the name implies the StackExchange client is developed by StackExchange for use on popular websites like ",(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/"},"StackOverflow"),"."),(0,r.kt)("h2",{id:"step-1-install-the-package"},"Step 1. Install the Package"),(0,r.kt)("p",null,"There are a few ways to Install the Package:"),(0,r.kt)(l.Z,{defaultValue:"cli",values:[{label:".NET CLI",value:"cli"},{label:"PM Console",value:"pmConsole"},{label:"Package Reference",value:"csproj"},{label:"NuGet GUI",value:"gui"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"cli",mdxType:"TabItem"},(0,r.kt)("p",null,"Run the following in the directory of the ",(0,r.kt)("inlineCode",{parentName:"p"},"csproj")," file you want to add the package too."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"  dotnet add package StackExchange.Redis\n"))),(0,r.kt)(i.Z,{value:"pmConsole",mdxType:"TabItem"},(0,r.kt)("p",null,"Run the following command from the Package Manager Console"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"Install-Package StackExchange.Redis\n"))),(0,r.kt)(i.Z,{value:"csproj",mdxType:"TabItem"},(0,r.kt)("p",null,"You can also add the package directly to you ",(0,r.kt)("inlineCode",{parentName:"p"},"csproj")," file with the following XML:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-XML"},'<ItemGroup>\n  <PackageReference Include="StackExchange.Redis" Version="2.2.4" />\n</ItemGroup>\n'))),(0,r.kt)(i.Z,{value:"gui",mdxType:"TabItem"},(0,r.kt)("p",null,"If you're using Visual Studio, and you want to use the NuGet GUI just follow the steps outlined by ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/nuget/consume-packages/install-use-packages-visual-studio"},"Microsoft"),", and make sure to search for ",(0,r.kt)("strong",{parentName:"p"},"StackExchange.Redis")))),(0,r.kt)("h2",{id:"step-2-import-the-required-namespace"},"Step 2. Import the Required Namespace"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"using StackExchange.Redis;\n")),(0,r.kt)("h2",{id:"step-3-initialize-the-connectionmultiplexer"},"Step 3. Initialize the ConnectionMultiplexer"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://stackexchange.github.io/StackExchange.Redis/Basics"},"ConnectionMultiplexer")," is the main arbiter of the connection to Redis inside the CLR, your application should maintain a single instance of the ConnectionMultiplexer throughout its runtime. You can initialize the Multiplexer with either a connection string, or with a ",(0,r.kt)("inlineCode",{parentName:"p"},"ConfigurationOptions")," object. A typical connection string is of the form: ",(0,r.kt)("inlineCode",{parentName:"p"},"HOST_NAME:PORT_NUMBER,password=PASSWORD")," where ",(0,r.kt)("inlineCode",{parentName:"p"},"HOST_NAME")," is the host name of your server (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost"),"), ",(0,r.kt)("inlineCode",{parentName:"p"},"PORT_NUMBER")," is the port number Redis is listening on (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"6379"),") and ",(0,r.kt)("inlineCode",{parentName:"p"},"PASSWORD")," is your redis server's password (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"secret_password"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'static readonly ConnectionMultiplexer _redis = ConnectionMultiplexer.Connect($"{HOST_NAME}:{PORT_NUMBER},password={PASSWORD}");\n')),(0,r.kt)("h2",{id:"step-4-grab-database-connection"},"Step 4. Grab Database Connection"),(0,r.kt)("p",null,"Once we have a handle for the Multiplexer, we need get a connection to the database."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"var db = _redis.GetDatabase();\n")),(0,r.kt)("h2",{id:"step-5-use-the-connection"},"Step 5. Use the connection"),(0,r.kt)("p",null,"Now that you've retreived the connection to the database, all that's left is to use it. Here are some simple operations:"),(0,r.kt)(l.Z,{defaultValue:"ping",values:[{label:"Ping the Database",value:"ping"},{label:"Set and Get String",value:"strings"},{label:"List Operations",value:"lists"},{label:"Set Operations",value:"sets"},{label:"Hash Operations",value:"hashes"}],mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"ping",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"db.Ping();\n"))),(0,r.kt)(i.Z,{value:"strings",mdxType:"TabItem"},(0,r.kt)("h3",{id:"set-string"},"Set String"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'db.StringGetSet("foo","bar");\n')),(0,r.kt)("h3",{id:"get-string"},"Get String"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'Console.WriteLine(db.StringGet("foo"));\n'))),(0,r.kt)(i.Z,{value:"lists",mdxType:"TabItem"},(0,r.kt)("h3",{id:"insert-into-list"},"Insert Into List"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'db.ListLeftPush("simple-list", 1);\n')),(0,r.kt)("h3",{id:"pop-out-of-list"},"Pop Out of List"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var result = db.ListRightPop("simple-list");\nConsole.WriteLine(result);\n'))),(0,r.kt)(i.Z,{value:"sets",mdxType:"TabItem"},(0,r.kt)("h3",{id:"insert-into-set"},"Insert Into Set"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'db.SetAdd("sample-set-1", new RedisValue[]{"apple", "banana", "tangerine", "kiwi"});\ndb.SetAdd("sample-set-2", new RedisValue[]{"apple", "banana", "orange", "blueberries"});\n')),(0,r.kt)("h3",{id:"set-union"},"Set Union"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var union = db.SetCombine(SetOperation.Union, "sample-set-1", "sample-set-2");\nConsole.WriteLine(String.Join(", ", union));\n')),(0,r.kt)("h3",{id:"set-intersection"},"Set Intersection"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var intersection = db.SetCombine(SetOperation.Intersect, "sample-set-1", "sample-set-2");\nConsole.WriteLine(String.Join(", ", intersection));\n')),(0,r.kt)("h3",{id:"set-difference"},"Set Difference"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var difference = db.SetCombine(SetOperation.Difference, "sample-set-1", "sample-set-2");\nConsole.WriteLine(String.Join(", ",difference));\n'))),(0,r.kt)(i.Z,{value:"hashes",mdxType:"TabItem"},(0,r.kt)("h3",{id:"add-to-hash"},"Add to Hash"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'db.HashSet("person:1", new HashEntry[]{new HashEntry("first-name","John"), new HashEntry("last-name","Smith")});\n')),(0,r.kt)("h3",{id:"get-field-from-hash"},"Get Field From Hash"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var firstName = db.HashGet("person:1", "first-name");\nConsole.WriteLine(firstName);\n')),(0,r.kt)("h3",{id:"get-all-fields-from-hash"},"Get All Fields From Hash"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'var allFields = db.HashGetAll("person:1");\nConsole.WriteLine(string.Join(", ",allFields));\n')))),(0,r.kt)("h2",{id:"redis-launchpad"},"Redis Launchpad"),(0,r.kt)("p",null,"Redis Launchpad is like an \u201cApp Store\u201d for Redis sample apps. You can easily find apps for your preferred frameworks and languages.\nCheck out a few of these apps below, or ",(0,r.kt)("a",{parentName:"p",href:"https://launchpad.redis.com"},"click here to access the complete list"),"."),(0,r.kt)("div",{class:"row text--center"},(0,r.kt)("div",{class:"col "},(0,r.kt)("div",{className:"ri-container"},(0,r.kt)("h4",{id:"rate-limiting-app-in-net"},"Rate Limiting App in .NET"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://launchpad.redis.com/?id=project%3Abasic-redis-rate-limiting-demo-csharp-dot-net"},(0,r.kt)("img",{alt:"Launchpad",src:a(84830).Z,width:"1268",height:"1106"}))))),(0,r.kt)("div",{class:"col"},(0,r.kt)("div",{className:"ri-container"},(0,r.kt)("h4",{id:"leaderboard-app-in-net"},"Leaderboard App in .NET"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://launchpad.redis.com/?id=project%3Abasic-redis-leaderboard-demo-dotnet"},(0,r.kt)("img",{alt:"Launchpad",src:a(10919).Z,width:"1082",height:"942"})))))),(0,r.kt)("div",{class:"row text--center"},(0,r.kt)("div",{class:"col"},(0,r.kt)("div",{className:"ri-container"},(0,r.kt)("h4",{id:"api-caching-net"},"API Caching .NET"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://launchpad.redis.com/?id=project%3Abasic-caching-demo-csharpdotnet"},(0,r.kt)("img",{alt:"Launchpad",src:a(5049).Z,width:"1094",height:"956"}))))),(0,r.kt)("div",{class:"col"},(0,r.kt)("div",{className:"ri-container"},(0,r.kt)("h4",{id:"basic-chat-app-net"},"Basic Chat App .NET"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://launchpad.redis.com/?id=project%3Abasic-redis-chat-app-demo-dotnet"},(0,r.kt)("img",{alt:"Launchpad",src:a(45472).Z,width:"1082",height:"950"})))))),(0,r.kt)("h4",{id:"additional-resources"},"Additional Resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.redis.com/latest/rs/references/client_references/client_csharp/"},"Using C# with Redis")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.redis.com/latest/rs/references/client_references/client_csharp/"},"Using SSL and StackExchange.Redis"))))}m.isMDXComponent=!0},5049:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cachingMarketplace-ac4abc085590a8c1a924fdde9ef05992.png"},45472:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/chatMarketplace-f10024ee88b9fba7c0a1d49435116c9c.png"},10919:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/leaderboard-8ba889677215417a4cd2820e75e84af0.png"},84830:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/rate-limiting-d20fba142ccfad82e5d3abc2f4642171.png"}}]);
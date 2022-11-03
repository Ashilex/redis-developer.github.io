"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[1284],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),h=i,m=p["".concat(l,".").concat(h)]||p[h]||d[h]||r;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},50358:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),i=n(52263);const r="authorByline_VoxI",o="authorLabel_a70t",s="authorProfileImage_URwT";const l=function(e){let{frontMatter:t}=e;const{siteConfig:n}=(0,i.Z)(),l=n.customFields.authors;return a.createElement(a.Fragment,null,t.authors&&a.createElement("div",{className:"docAuthors"},a.createElement("hr",null),t.authors.map((e=>a.createElement("div",{key:e,className:r},a.createElement("img",{className:s,src:`/img/${l[e].image?l[e].image:"default_author_profile_pic.png"}`,alt:`Profile picture for ${l[e].name}`}),a.createElement("div",null,a.createElement("div",{className:o},"Author:"),a.createElement("div",null,a.createElement("a",{href:l[e].link,target:"_blank"},l[e].name),", ",l[e].title))))),a.createElement("hr",null)))}},224:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),i=(n(67294),n(3905)),r=n(50358);const o={id:"index-azurefunctions",title:"Getting Started with Azure Functions and Redis",sidebar_label:"Getting Started with Azure Functions and Redis",slug:"/create/azurefunctions",authors:["ajeet"]},s=void 0,l={unversionedId:"create/azurefunctions/index-azurefunctions",id:"create/azurefunctions/index-azurefunctions",title:"Getting Started with Azure Functions and Redis",description:"alttext",source:"@site/docs/create/azurefunctions/index-azurefunctions.mdx",sourceDirName:"create/azurefunctions",slug:"/create/azurefunctions",permalink:"/create/azurefunctions",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/create/azurefunctions/index-azurefunctions.mdx",tags:[],version:"current",lastUpdatedAt:1667495358,formattedLastUpdatedAt:"Nov 3, 2022",frontMatter:{id:"index-azurefunctions",title:"Getting Started with Azure Functions and Redis",sidebar_label:"Getting Started with Azure Functions and Redis",slug:"/create/azurefunctions",authors:["ajeet"]},sidebar:"docs",previous:{title:"Getting Started with Google Cloud Run and Redis",permalink:"/create/cloudrun"},next:{title:"Getting Started with Portainer and Redis",permalink:"/create/portainer"}},u={},c=[{value:"How it works",id:"how-it-works",level:3},{value:"Benefits of Microsoft Azure Functions",id:"benefits-of-microsoft-azure-functions",level:3},{value:"Getting started",id:"getting-started",level:3},{value:"Step 1. Log in to Microsoft Azure Portal",id:"step-1-log-in-to-microsoft-azure-portal",level:3},{value:"Step 2. Set up \u201cAzure Cache for Redis\u201d",id:"step-2-set-up-azure-cache-for-redis",level:3},{value:"Step 3. Configure Keys for Redis Cache",id:"step-3-configure-keys-for-redis-cache",level:3},{value:"Step 4. Verify if Redis database is accessible",id:"step-4-verify-if-redis-database-is-accessible",level:3},{value:"Step 5. Install Homebrew on Mac",id:"step-5-install-homebrew-on-mac",level:3},{value:"Step 6. Install Visual Studio Code",id:"step-6-install-visual-studio-code",level:3},{value:"Step 7. Install the Azure Functions Core Tools",id:"step-7-install-the-azure-functions-core-tools",level:3},{value:"Step 8. Install the Azure Functions extension for Visual Studio Code",id:"step-8-install-the-azure-functions-extension-for-visual-studio-code",level:3},{value:"Step 9. Connect Azure Function to Azure account",id:"step-9-connect-azure-function-to-azure-account",level:3},{value:"Step 10. Clone the project repository",id:"step-10-clone-the-project-repository",level:3},{value:"Step 11. Trigger the function",id:"step-11-trigger-the-function",level:3},{value:"Step 12. Verify the Azure functions app is working properly",id:"step-12-verify-the-azure-functions-app-is-working-properly",level:3},{value:"Step 13. Seed the Redis database",id:"step-13-seed-the-redis-database",level:3},{value:"Step 14. Run query using RedisInsight",id:"step-14-run-query-using-redisinsight",level:3},{value:"Additional references:",id:"additional-references",level:3}],d={toc:c};function p(e){let{components:t,...s}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(r.Z,{frontMatter:o,mdxType:"Authors"}),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt_text",src:n(16986).Z,width:"1236",height:"1228"})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-in/services/functions/"},"Azure Functions")," is an event-based, serverless compute platform offered by ",(0,i.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-in/blog/microsoft-named-a-leader-in-forrester-wave-functionasaservice-platforms/"},"Microsoft")," to accelerate and simplify serverless application development. It allows developers to write less code, build and debug locally without additional setup, and deploy and operate at scale in the cloud."),(0,i.kt)("h3",{id:"how-it-works"},"How it works"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/Azure/Azure-Functions"},"Azure Functions"),' allows you to implement your system\'s logic into readily available blocks of code. These code blocks are called "functions." ',(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/learn/modules/execute-azure-function-with-triggers/"},"An Azure function's execution is triggered")," when an event is fired. Whenever demand for execution increases, more and more resources are allocated automatically to the service, and when requests fall, all extra resources and application instances drop off automatically. In short, as a developer, you can now focus on the pieces of code that matter most to you, and Azure Functions handles the rest."),(0,i.kt)("p",null,"Azure Functions ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/azure-functions/functions-scale"},"provides as many or as few compute resources as needed")," to meet your application's demand. Providing compute resources on-demand is the essence of ",(0,i.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/solutions/serverless/"},"serverless computing")," in Azure Functions."),(0,i.kt)("h3",{id:"benefits-of-microsoft-azure-functions"},"Benefits of Microsoft Azure Functions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Azure Functions provides automated and flexible scaling."),(0,i.kt)("li",{parentName:"ul"},"It allows you to build, debug, deploy, and monitor with integrated tools and built-in DevOps capabilities."),(0,i.kt)("li",{parentName:"ul"},"It ",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-in/azure/azure-functions/supported-languages#languages-in-runtime-1x-and-2x"},"supports a variety of programming languages")," such as C#, Java, JavaScript, Python, and PowerShell."),(0,i.kt)("li",{parentName:"ul"},"It allows you to use Functions extensions on Visual Studio and Visual Studio Code for faster and more efficient development on your local system."),(0,i.kt)("li",{parentName:"ul"},"With Azure Functions you can set up CI/CD with Azure Pipelines."),(0,i.kt)("li",{parentName:"ul"},"It\u2019s a great solution for processing bulk data, integrating systems, working with IoT, and building simple APIs and microservices."),(0,i.kt)("li",{parentName:"ul"},"It\u2019s used to break monolithic architectures into loosely coupled functions."),(0,i.kt)("li",{parentName:"ul"},"It allows you to ",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/azure-functions/functions-kubernetes-keda"},"deploy Functions to Kubernetes"),".")),(0,i.kt)("p",null,"In this tutorial, you will learn how to get started with Azure Functions and Redis."),(0,i.kt)("h3",{id:"getting-started"},"Getting started"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Step 1. Log in to Microsoft Azure Portal"),(0,i.kt)("li",{parentName:"ul"},"Step 2. Set up Azure Cache for Redis"),(0,i.kt)("li",{parentName:"ul"},"Step 3. Configure Keys for Redis Cache"),(0,i.kt)("li",{parentName:"ul"},"Step 4. Verify if Redis database is reachable remotely"),(0,i.kt)("li",{parentName:"ul"},"Step 5. Install Homebrew on Mac"),(0,i.kt)("li",{parentName:"ul"},"Step 6. Install Visual Studio Code"),(0,i.kt)("li",{parentName:"ul"},"Step 7. Install the Azure Functions Core Tools"),(0,i.kt)("li",{parentName:"ul"},"Step 8. Install the Azure Functions extension for Visual Studio Code"),(0,i.kt)("li",{parentName:"ul"},"Step 9. Connect Azure Function to Azure account"),(0,i.kt)("li",{parentName:"ul"},"Step 10. Clone the project repository"),(0,i.kt)("li",{parentName:"ul"},"Step 11. Trigger the function"),(0,i.kt)("li",{parentName:"ul"},"Step 12. Verify the Azure Functions app is working properly"),(0,i.kt)("li",{parentName:"ul"},"Step 13. Seed the Redis database"),(0,i.kt)("li",{parentName:"ul"},"Step 14. Run query using RedisInsight")),(0,i.kt)("h3",{id:"step-1-log-in-to-microsoft-azure-portal"},"Step 1. Log in to Microsoft Azure Portal"),(0,i.kt)("p",null,"Create an Azure account with an active subscription by clicking this link: ",(0,i.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/free/"},"Create an account for free"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Acount Dashboard",src:n(72180).Z,width:"1412",height:"946"})),(0,i.kt)("h3",{id:"step-2-set-up-azure-cache-for-redis"},"Step 2. Set up \u201cAzure Cache for Redis\u201d"),(0,i.kt)("p",null,'Type "Azure Cache for Redis" in the search section and select the service:'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Azure Cache for Redis Service",src:n(5704).Z,width:"1416",height:"926"})),(0,i.kt)("p",null,'Under "New Redis Cache" window, create a new resource group, select your preferred location and cache type:'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Creating a new Redis Instance",src:n(80087).Z,width:"1360",height:"1244"})),(0,i.kt)("p",null,'Once you are done with the entries, click "Review + Create" button.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"alt_text",src:n(58916).Z,width:"1420",height:"566"})),(0,i.kt)("p",null,"Wait for few seconds to let deployment process to complete."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Deploying your Redis Instance",src:n(63908).Z,width:"1294",height:"454"})),(0,i.kt)("p",null,"Once the deployment is complete, you will be provided with the deployment name, subscription details and resource group."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Redis Instance up and running",src:n(25188).Z,width:"1428",height:"738"})),(0,i.kt)("h3",{id:"step-3-configure-keys-for-redis-cache"},"Step 3. Configure Keys for Redis Cache"),(0,i.kt)("p",null,'You will need keys to log in to the Redis database.\nClick "Overview" option in the left sidebar to see the Primary key and save it for future reference.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Managing keys",src:n(7412).Z,width:"717",height:"346"})),(0,i.kt)("h3",{id:"step-4-verify-if-redis-database-is-accessible"},"Step 4. Verify if Redis database is accessible"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'redis-cli -h demorediss.redis.cache.windows.net -p 6379\ndemorediss.redis.cache.windows.net:6379> info modules\nNOAUTH Authentication required.\ndemorediss.redis.cache.windows.net:6379> auth jsn9IdFXXXXXXXXXXXXXsAzCaDzLh6s=\nOK\ndemorediss.redis.cache.windows.net:6379> get a1\n"100"\n\n')),(0,i.kt)("h3",{id:"step-5-install-homebrew-on-mac"},"Step 5. Install Homebrew on Mac"),(0,i.kt)("p",null,"Install the Homebrew package manager by running this script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\n')),(0,i.kt)("h3",{id:"step-6-install-visual-studio-code"},"Step 6. Install Visual Studio Code"),(0,i.kt)("p",null,"Visual Studio Code is a lightweight but powerful source code editor that runs on your desktop and is available for Windows, macOS, and Linux. It comes with built-in support for JavaScript, TypeScript, and Node.js, and has a rich ecosystem of extensions for other languages (such as C++, C#, Java, Python, PHP, Go) and runtimes (such as .NET and Unity). Begin your journey with VS Code with these ",(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/introvideos/overview"},"introductory videos"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Visual Studio Code download",src:n(40497).Z,width:"1242",height:"790"})),(0,i.kt)("h3",{id:"step-7-install-the-azure-functions-core-tools"},"Step 7. Install the Azure Functions Core Tools"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"brew tap azure/functions\nbrew install azure-functions-core-tools@4\n# if upgrading on a machine that has 2.x or 3.x installed:\nbrew link --overwrite azure-functions-core-tools@4\n")),(0,i.kt)("h3",{id:"step-8-install-the-azure-functions-extension-for-visual-studio-code"},"Step 8. Install the Azure Functions extension for Visual Studio Code"),(0,i.kt)("p",null,"Use the Azure Functions extension to quickly create, debug, manage, and deploy serverless apps directly from VS Code."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"The Azure Functions extension for Visual Studio Code",src:n(56738).Z,width:"1242",height:"984"})),(0,i.kt)("h3",{id:"step-9-connect-azure-function-to-azure-account"},"Step 9. Connect Azure Function to Azure account"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Configuring Azure in Visual Studio Code",src:n(50901).Z,width:"1244",height:"1014"})),(0,i.kt)("h3",{id:"step-10-clone-the-project-repository"},"Step 10. Clone the project repository"),(0,i.kt)("p",null,"For this tutorial, we will be using a baby names counter app built using C#.\nTo get started, we will first clone the repository:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git clone https://github.com/redis-developer/Baby-Names-Func\n\n\n")),(0,i.kt)("p",null,"Add \u201cAzure Cache for Redis\u201d endpoint URL details in the ",(0,i.kt)("inlineCode",{parentName:"p"},"local-settings.json")," file as shown below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "IsEncrypted": false,\n  "Values": {\n    "FUNCTIONS_WORKER_RUNTIME": "dotnet"\n    "redisCacheConnectionString": "demorediss.redis.cache.windows.net"\n\n\n  }\n}\n')),(0,i.kt)("p",null,"Open the project with Visual Studio Code by running the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd Baby-Names-Func\ncode .\n")),(0,i.kt)("p",null,"This will open VS Code. The function will automatically load into the plugin."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Project loaded into Visual Studio Code",src:n(18e3).Z,width:"1412",height:"860"})),(0,i.kt)("h3",{id:"step-11-trigger-the-function"},"Step 11. Trigger the function"),(0,i.kt)("p",null,"Press F5 to automatically execute the function."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Executing the function",src:n(86034).Z,width:"1384",height:"842"})),(0,i.kt)("p",null,"If you want to manually select the repository, choose .NET framework, etc., and then click \u201cCreate new project.\u201d"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Creating a new project",src:n(20033).Z,width:"1390",height:"844"})),(0,i.kt)("p",null,"You will find the following output under VS Code screen:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'     1>Done Building Project "/Users/ajeetraina/projects/Baby-Names-Func/RedisFunctions.csproj" (Clean target(s)).\n\nTerminal will be reused by tasks, press any key to close it.\n\n> Executing task: dotnet build /property:GenerateFullPaths=true /consoleloggerparameters:NoSummary <\n\nMicrosoft (R) Build Engine version 17.0.0+c9eb9dd64 for .NET\nCopyright (C) Microsoft Corporation. All rights reserved.\n\n  Determining projects to restore...\n  All projects are up-to-date for restore.\n  RedisFunctions -> /Users/ajeetraina/projects/Baby-Names-Func/bin/Debug/net6.0/RedisFunctions.dll\n\nTerminal will be reused by tasks, press any key to close it.\n\n> Executing task: func host start <\n\n\nAzure Functions Core Tools\nCore Tools Version:       4.0.3971 Commit hash: d0775d487c93ebd49e9c1166d5c3c01f3c76eaaf  (64-bit)\nFunction Runtime Version: 4.0.1.16815\n\n[2022-03-01T07:51:01.383Z] Found /Users/ajeetraina/projects/Baby-Names-Func/RedisFunctions.csproj. Using for user secrets file configuration.\n\nFunctions:\n\n        CountBabyNames: [GET,POST] http://localhost:7071/api/getCount\n\n        IncrementBabyName: [GET,POST] http://localhost:7071/api/increment\n\nFor detailed output, run func with --verbose flag.\n\n\n')),(0,i.kt)("h3",{id:"step-12-verify-the-azure-functions-app-is-working-properly"},"Step 12. Verify the Azure functions app is working properly"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Output in the browser from running the application locally",src:n(11058).Z,width:"1248",height:"896"})),(0,i.kt)("h3",{id:"step-13-seed-the-redis-database"},"Step 13. Seed the Redis database"),(0,i.kt)("p",null,"Now, let us seed BabyNames data into the Redis database."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git clone https://github.com/slorello89/Seed-Baby-Names\n")),(0,i.kt)("p",null,"If you connect to the Redis database and run the ",(0,i.kt)("inlineCode",{parentName:"p"},"MONITOR")," command, you should see the data being inserted into the database as shown below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'1646061655.966050 [0 122.171.48.244:60531] "CMS.INCRBY" "baby-names" "Rowen" "1"\n1646061655.966050 [0 122.171.48.244:60531] "SELECT" "0"\n1646061655.966050 [0 122.171.48.244:60531] "CMS.INCRBY" "baby-names" "Titus" "1"\n1646061655.966050 [0 122.171.48.244:60531] "SELECT" "0"\n1646061655.966050 [0 122.171.48.244:60531] "CMS.INCRBY" "baby-names" "Braxton" "1"\n1646061655.966050 [0 122.171.48.244:60531] "SELECT" "0"\n1646061655.966050 [0 122.171.48.244:60531] "CMS.INCRBY" "baby-names" "Alexander" "1"\n1646061655.966050 [0 122.171.48.244:60531] "SELECT" "0"\n1646061655.966050 [0 122.171.48.244:60531] "CMS.INCRBY" "baby-names" "Finnegan" "1"\n1646061655.966050 [0 122.171.48.244:60531] "SELECT" "0"\n1646061655.966050 [0 122.171.48.244:60531] "CMS.INCRBY" "baby-names" "Nasir" "1"\n1646061655.966050 [0 122.171.48.244:60531] "SELECT" "0"\n1646061655.966050 [0 122.171.48.244:60531] "CMS.INCRBY" "baby-names" "Fabian" "1"\n1646061655.966050 [0 122.171.48.244:60531] "SELECT" "0"\n1646061655.966050 [0 122.171.48.244:60531] "CMS.INCRBY" "baby-names" "Alexander" "1"\n1646061655.966050 [0 122.171.48.244:60531] "SELECT" "0"\n1646061655.966050 [0 122.171.48.244:60531] "CMS.INCRBY" "baby-names" "Emilio" "1"\n1646061655.966050 [0 122.171.48.244:60531] "SELECT" "0"\n1646061655.966050 [0 122.171.48.244:60531] "CMS.INCRBY" "baby-names" "Dax" "1"\n1646061655.966050 [0 122.171.48.244:60531] "SELECT" "0"\n1646061655.966050 [0 122.171.48.244:60531] "CMS.INCRBY" "baby-names" "Johnny" "1"\n1646061655.966050 [0 122.171.48.244:60531] "SELECT" "0"\n1646061655.966050 [0 122.171.48.244:60531] "CMS.INCRBY" "baby-names" "Mario" "1"\n1646061655.966050 [0 122.171.48.244:60531] "SELECT" "0"\n1646061655.966050 [0 122.171.48.244:60531] "CMS.INCRBY" "baby-names" "Lennox" "1"\n\n')),(0,i.kt)("h3",{id:"step-14-run-query-using-redisinsight"},"Step 14. Run query using RedisInsight"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://developer.redis.com/explore/redisinsightv2/getting-started"},"Follow this link to set up RedisInsight")," on your local system and get connected to the Redis database. Once connected, you should be able to run the following queries:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Redis Insight",src:n(34725).Z,width:"1368",height:"896"})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"> CMS.INFO baby-names\n1) width\n2) (integer) 1000\n3) depth\n4) (integer) 10\n5) count\n6) (integer) 100000\n\n> CMS.QUERY baby-names Johnny\n1) 109\n")),(0,i.kt)("h3",{id:"additional-references"},"Additional references:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-in/services/functions/"},"Introduction to Azure Functions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://redis.com/cloud-partners/microsoft-azure/"},"Fully Managed Redis Enterprise for Azure")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://azuremarketplace.microsoft.com/en-us/marketplace/apps/garantiadata.redis_enterprise_1sp_public_preview?ocid=redisga_redis_cloudpartner_cta1"},"Azure Cache for Redis Enterprise & Flash"))))}p.isMDXComponent=!0},56738:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image10-0f80a4101a0e800d040025ec2db11d94.png"},50901:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image13-a9c05f021c6187d1efbac3b6623e1026.png"},18e3:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image14-b2f1ecbe08591eb6451202cc8001a7fd.png"},86034:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image15-0ad9017369d59392e06bfe0598b3aec6.png"},20033:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image16-a91ce437c40c3fed92031773db12a7ae.png"},11058:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image17-966d6b398025ade4556b4de7095f10cb.png"},34725:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image18-fafbcafc94cacd10698d8868c97e089a.png"},72180:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image2-12deb78845bb8abea05e9dfbe43e3b32.png"},5704:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image3-fe4993b5dff022135e49aa34202e0965.png"},80087:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image4-3a5ecd9455d553b437b86d55a3f46940.png"},58916:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image5-81a3874cdb9fc4f6e3991ce2491fa4ac.png"},63908:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image6-262a99b44e236d90c089b46c9154bb9a.png"},25188:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image7-cb090730fee4bccdb962223594b3c83e.png"},40497:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image8-e3aa39d84be07f66b30afac49f65995c.png"},7412:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/keys-31172adebc0bdf804f51bd7f62d83cf1.png"},16986:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/preview_azurefunction-0d532227cb469cc8c8aa4ad953f197ef.png"}}]);
"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[8443],{3905:(e,t,i)=>{i.d(t,{Zo:()=>A,kt:()=>d});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},A=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,A=l(e,["components","mdxType","originalType","parentName"]),p=s(i),d=r,g=p["".concat(c,".").concat(d)]||p[d]||u[d]||o;return i?n.createElement(g,a(a({ref:t},A),{},{components:i})):n.createElement(g,a({ref:t},A))}));function d(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=i[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},50358:(e,t,i)=>{i.d(t,{Z:()=>c});var n=i(67294),r=i(52263);const o="authorByline_VoxI",a="authorLabel_a70t",l="authorProfileImage_URwT";const c=function(e){let{frontMatter:t}=e;const{siteConfig:i}=(0,r.Z)(),c=i.customFields.authors;return n.createElement(n.Fragment,null,t.authors&&n.createElement("div",{className:"docAuthors"},n.createElement("hr",null),t.authors.map((e=>n.createElement("div",{key:e,className:o},n.createElement("img",{className:l,src:`/img/${c[e].image?c[e].image:"default_author_profile_pic.png"}`,alt:`Profile picture for ${c[e].name}`}),n.createElement("div",null,n.createElement("div",{className:a},"Author:"),n.createElement("div",null,n.createElement("a",{href:c[e].link,target:"_blank"},c[e].name),", ",c[e].title))))),n.createElement("hr",null)))}},23318:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>A});var n=i(87462),r=(i(67294),i(3905)),o=i(50358);const a={id:"index-circleci",title:"CircleCI: What It Is and Why It Should Be Part of Your Redis CI/CD",sidebar_label:"Redis using CircleCI",slug:"/operate/continuous-integration-continuous-deployment/circleci",authors:["talon","ajeet"]},l=void 0,c={unversionedId:"operate/continuous-integration-continuous-deployment/circleci/index-circleci",id:"operate/continuous-integration-continuous-deployment/circleci/index-circleci",title:"CircleCI: What It Is and Why It Should Be Part of Your Redis CI/CD",description:"What is CircleCI?",source:"@site/docs/operate/continuous-integration-continuous-deployment/circleci/index-circleci.mdx",sourceDirName:"operate/continuous-integration-continuous-deployment/circleci",slug:"/operate/continuous-integration-continuous-deployment/circleci",permalink:"/operate/continuous-integration-continuous-deployment/circleci",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/operate/continuous-integration-continuous-deployment/circleci/index-circleci.mdx",tags:[],version:"current",lastUpdatedAt:1667495358,formattedLastUpdatedAt:"Nov 3, 2022",frontMatter:{id:"index-circleci",title:"CircleCI: What It Is and Why It Should Be Part of Your Redis CI/CD",sidebar_label:"Redis using CircleCI",slug:"/operate/continuous-integration-continuous-deployment/circleci",authors:["talon","ajeet"]},sidebar:"docs",previous:{title:"Redis using Jenkins",permalink:"/operate/continuous-integration-continuous-deployment/jenkins"},next:{title:"Redis using Argo CD",permalink:"/operate/continuous-integration-continuous-deployment/argocd"}},s={},A=[{value:"<strong>What is CircleCI?</strong>",id:"what-is-circleci",level:2},{value:"<strong>How does CircleCI work?</strong>",id:"how-does-circleci-work",level:2},{value:"<strong>What are CircleCI\u2019s capabilities?</strong>",id:"what-are-circlecis-capabilities",level:2},{value:"<strong>Deploy a Redis Rate Limiting application on Heroku using CircleCI</strong>",id:"deploy-a-redis-rate-limiting-application-on-heroku-using-circleci",level:2},{value:"<strong>Prerequisites:</strong>",id:"prerequisites",level:2},{value:"<strong>Getting started</strong>",id:"getting-started",level:2},{value:"Step 1. Log in to CircleCI",id:"step-1-log-in-to-circleci",level:2},{value:"Step 2. Verify your permissions on GitHub",id:"step-2-verify-your-permissions-on-github",level:2},{value:"Step 3. Select your project repository and click \u201cSetup Project\u201d",id:"step-3-select-your-project-repository-and-click-setup-project",level:2},{value:"Step 4. Create a new CircleCI configuration file",id:"step-4-create-a-new-circleci-configuration-file",level:2},{value:"Step 5. Merge the pull request",id:"step-5-merge-the-pull-request",level:2},{value:"Step 6. Set up a Heroku account",id:"step-6-set-up-a-heroku-account",level:2},{value:"Step 7. Configuring Heroku access on CircleCI",id:"step-7-configuring-heroku-access-on-circleci",level:2},{value:"Step 8. Set up the environment variables on CircleCI",id:"step-8-set-up-the-environment-variables-on-circleci",level:2},{value:"Step 9. Trigger the build",id:"step-9-trigger-the-build",level:2},{value:"Additional references:",id:"additional-references",level:2}],u={toc:A};function p(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{frontMatter:a,mdxType:"Authors"}),(0,r.kt)("h2",{id:"what-is-circleci"},(0,r.kt)("strong",{parentName:"h2"},"What is CircleCI?")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"CircleCI and Redis logos",src:i(22877).Z,width:"512",height:"103"})),(0,r.kt)("p",null,"CircleCI is a CI/CD platform built by DevOps professionals to help you fine-tune your entire development process from start to finish. It helps engineering teams build, test, and deploy software while checking code changes in real time with the CircleCI dashboard UI. More control over pipelines is possible with the ability to build in the CI/CD process per project or configure workflows to decide on when and how jobs run, plus data- and image-caching options that optimize continuous delivery."),(0,r.kt)("p",null,"CircleCI supports many different languages and a varied amount of cloud-hosted compute types such as Docker, Linux VMs, macOS, Windows, and more for a simplified approach to infrastructure. With the CircleCI dashboard, it's possible to gather insights on build changes to continuously optimize pipelines."),(0,r.kt)("p",null,"To deploy, CircleCI takes artifacts from your pipeline and sends them to wherever you need them deployed, whether it's Docker, Heroku, Kubernetes, cloud platforms, and more."),(0,r.kt)("h2",{id:"how-does-circleci-work"},(0,r.kt)("strong",{parentName:"h2"},"How does CircleCI work?")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"CircleCI Overview",src:i(94510).Z,width:"512",height:"285"})),(0,r.kt)("p",null,"After GitHub or Bitbucket are authorized and added as a project to circleci.com, every code change triggers CircleCI jobs. CircleCI sends an email notification of success or failure after the test completes. CircleCI finds and runs ",(0,r.kt)("inlineCode",{parentName:"p"},"config.yml"),", tests the build, runs security scans, goes through approval steps, and then deploys."),(0,r.kt)("h2",{id:"what-are-circlecis-capabilities"},(0,r.kt)("strong",{parentName:"h2"},"What are CircleCI\u2019s capabilities?")),(0,r.kt)("p",null,"As a DevOps engineer or developer, you can:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SSH into any job to debug build issues."),(0,r.kt)("li",{parentName:"ul"},"Set up jobs to run in parallel to reduce time."),(0,r.kt)("li",{parentName:"ul"},"Configure a Redis cache with two simple keys to reuse data from previous jobs in your workflow."),(0,r.kt)("li",{parentName:"ul"},"Configure self-hosted runners for unique platform support."),(0,r.kt)("li",{parentName:"ul"},"Access Arm resources for the machine executor."),(0,r.kt)("li",{parentName:"ul"},"Use reusable packages of configuration to integrate with third parties."),(0,r.kt)("li",{parentName:"ul"},"Use a pre-built Redis Docker image in a variety of languages."),(0,r.kt)("li",{parentName:"ul"},"Use the API to retrieve information about jobs and workflows."),(0,r.kt)("li",{parentName:"ul"},"Use the CLI to access advanced tools locally."),(0,r.kt)("li",{parentName:"ul"},"Get flaky test detection with test insights.")),(0,r.kt)("h2",{id:"deploy-a-redis-rate-limiting-application-on-heroku-using-circleci"},(0,r.kt)("strong",{parentName:"h2"},"Deploy a Redis Rate Limiting application on Heroku using CircleCI")),(0,r.kt)("h2",{id:"prerequisites"},(0,r.kt)("strong",{parentName:"h2"},"Prerequisites:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A CircleCI account"),(0,r.kt)("li",{parentName:"ul"},"A GitHub account"),(0,r.kt)("li",{parentName:"ul"},"A Heroku account")),(0,r.kt)("h2",{id:"getting-started"},(0,r.kt)("strong",{parentName:"h2"},"Getting started")),(0,r.kt)("p",null,"In this demo, we will be using the Redis Rate Limiting app built using Python and Redis."),(0,r.kt)("p",null,"Rate limiting is a mechanism that many developers may have to deal with at some point in their life. It\u2019s useful for a variety of purposes, such as sharing access to limited resources or limiting the number of requests made to an API endpoint and responding with a 429 status code. The complete source code of the project is ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/redis-developer/basic-rate-limiting-demo-python"},"hosted over at GitHub"),". In this example, we will configure CircleCI to deploy the Rate Limiting app directly on the Heroku platform."),(0,r.kt)("h2",{id:"step-1-log-in-to-circleci"},"Step 1. Log in to CircleCI"),(0,r.kt)("p",null,"Go to ",(0,r.kt)("a",{parentName:"p",href:"https://circleci.com"},"https://circleci.com")," and log in using your GitHub account:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"CircleCI Login",src:i(37759).Z,width:"512",height:"206"})),(0,r.kt)("p",null,"Choose your preferred login method. To make it easier, let us choose \u201cGitHub\u201d for this demonstration."),(0,r.kt)("h2",{id:"step-2-verify-your-permissions-on-github"},"Step 2. Verify your permissions on GitHub"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Authenticating",src:i(58918).Z,width:"512",height:"239"})),(0,r.kt)("h2",{id:"step-3-select-your-project-repository-and-click-setup-project"},"Step 3. Select your project repository and click \u201cSetup Project\u201d"),(0,r.kt)("p",null,"We will be using the Redis rate-limiting project for this demonstration."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Selecting the project",src:i(62655).Z,width:"512",height:"236"})),(0,r.kt)("h2",{id:"step-4-create-a-new-circleci-configuration-file"},"Step 4. Create a new CircleCI configuration file"),(0,r.kt)("p",null,"CircleCI believes in ",(0,r.kt)("em",{parentName:"p"},"configuration as code"),". As a result, the entire delivery process from build to deploy is orchestrated through a single file called ",(0,r.kt)("inlineCode",{parentName:"p"},"config.yml"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"config.yml")," file is located in a folder called ",(0,r.kt)("inlineCode",{parentName:"p"},".circleci")," at the top of your project. CircleCI uses the YAML syntax for config."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Selecting a config file",src:i(53051).Z,width:"512",height:"465"})),(0,r.kt)("p",null,"As we haven\u2019t yet created a ",(0,r.kt)("inlineCode",{parentName:"p"},"config.yml")," file, let\u2019s choose the \u201cFast\u201d option to create a new ",(0,r.kt)("inlineCode",{parentName:"p"},"config.yml")," based on the available template that is editable."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Selecting the fast option",src:i(24606).Z,width:"512",height:"297"})),(0,r.kt)("p",null,"Once you click \u201cSet Up Project\u201d it will ask you to select sample configs as shown in the following screenshot:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Sample configs",src:i(28547).Z,width:"512",height:"326"})),(0,r.kt)("p",null,"Add the following content under ",(0,r.kt)("inlineCode",{parentName:"p"},".circleci/config.yml")," and save the file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"version: 2.1\norbs:\n  heroku: circleci/heroku@1.2.6\nworkflows:\n  heroku_deploy:\n    jobs:\n      - heroku/deploy-via-git\n")),(0,r.kt)("p",null,"In the configuration above, we pull in the Heroku orb ",(0,r.kt)("inlineCode",{parentName:"p"},"circleci/heroku@1.2.6"),", which automatically gives us access to a powerful set of Heroku jobs and commands."),(0,r.kt)("p",null,"One of those jobs is ",(0,r.kt)("inlineCode",{parentName:"p"},"heroku/deploy-via-git"),", which deploys your application straight from your GitHub repo to your Heroku account."),(0,r.kt)("h2",{id:"step-5-merge-the-pull-request"},"Step 5. Merge the pull request"),(0,r.kt)("p",null,"Once you make the new change, it will ask you to raise a new PR. Go ahead and merge the changes as of now."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Open a pull request",src:i(66472).Z,width:"512",height:"332"})),(0,r.kt)("h2",{id:"step-6-set-up-a-heroku-account"},"Step 6. Set up a Heroku account"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developer.redis.com/create/heroku/portal"},"Follow these steps")," to set up a Heroku account and create a new app ",(0,r.kt)("inlineCode",{parentName:"p"},"rate-limit-python"),". You will need the Heroku API key for this demo."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Set up a Heroku account",src:i(25250).Z,width:"512",height:"268"})),(0,r.kt)("h2",{id:"step-7-configuring-heroku-access-on-circleci"},"Step 7. Configuring Heroku access on CircleCI"),(0,r.kt)("p",null,"Before you push your project to Heroku from CircleCI, you will need to configure an authenticated handshake between CircleCI and Heroku. Configure the handshake by creating two ",(0,r.kt)("a",{parentName:"p",href:"https://circleci.com/docs/2.0/env-vars/"},"environment variables")," in the settings for your CircleCI project:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HEROKU_APP_NAME")," is the name of your Heroku application (in this case, ",(0,r.kt)("inlineCode",{parentName:"li"},"simple-node-api-circleci"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HEROKU_API_KEY")," is your Heroku account API key. This can be found under the Account tab of your Heroku account under Account Settings. Scroll to the API Key section and click ",(0,r.kt)("strong",{parentName:"li"},"Reveal")," to copy your API key.")),(0,r.kt)("h2",{id:"step-8-set-up-the-environment-variables-on-circleci"},"Step 8. Set up the environment variables on CircleCI"),(0,r.kt)("p",null,"On the sidebar menu of the settings page, click ",(0,r.kt)("strong",{parentName:"p"},"Environment Variables")," under Build Settings. On the environment variables page, create two variables named ",(0,r.kt)("inlineCode",{parentName:"p"},"HEROKU_APP_NAME")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"HEROKU_API_KEY")," and enter the values for them."),(0,r.kt)("p",null,"With these in place, our CircleCI configuration will be able to make authenticated deployments to the Heroku platform."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Heroku Environment Variables",src:i(39459).Z,width:"512",height:"284"})),(0,r.kt)("h2",{id:"step-9-trigger-the-build"},"Step 9. Trigger the build"),(0,r.kt)("p",null,"As soon as you merge the pull request, the tool will trigger the build automatically."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Triggering the build",src:i(1585).Z,width:"512",height:"260"})),(0,r.kt)("p",null,"You should now be able to access your application."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"remote:        Collecting attrs>=19.2.0\nremote:          Downloading attrs-21.4.0-py2.py3-none-any.whl (60 kB)\nremote:        Collecting wrapt<2,>=1.10\nremote:          Downloading wrapt-1.14.0-cp310-cp310-manylinux_2_5_x86_64.manylinux1_x86_64.manylinux_2_17_x86_64.manylinux2014_x86_64.whl (77 kB)\nremote:        Collecting pyparsing!=3.0.5,>=2.0.2\nremote:          Downloading pyparsing-3.0.7-py3-none-any.whl (98 kB)\nremote:        Installing collected packages: wrapt, pyparsing, typing-extensions, sqlparse, packaging, deprecated, async-timeout, asgiref, tomli, redis, py, pluggy, iniconfig, h11, Django, click, attrs, uvloop, uvicorn, urllib3, sniffio, rfc3986, pytz, python-dotenv, pytest, django-redis, django-ipware, django-cors-headers\nremote:        Successfully installed Django-4.0.3 asgiref-3.5.0 async-timeout-4.0.2 attrs-21.4.0 click-8.1.0 deprecated-1.2.13 django-cors-headers-3.11.0 django-ipware-4.0.2 django-redis-5.2.0 h11-0.13.0 iniconfig-1.1.1 packaging-21.3 pluggy-1.0.0 py-1.11.0 pyparsing-3.0.7 pytest-7.1.1 python-dotenv-0.20.0 pytz-2022.1 redis-4.2.0 rfc3986-2.0.0 sniffio-1.2.0 sqlparse-0.4.2 tomli-2.0.1 typing-extensions-4.1.1 urllib3-1.26.9 uvicorn-0.17.6 uvloop-0.16.0 wrapt-1.14.0\nremote: -----\x3e $ python server/manage.py collectstatic --noinput\nremote:        133 static files copied to '/tmp/build_3850bcfb/server/static_root'.\nremote:\nremote: -----\x3e Discovering process types\nremote:        Procfile declares types -> web\nremote:\nremote: -----\x3e Compressing...\nremote:        Done: 75.3M\nremote: -----\x3e Launching...\nremote:        Released v11\nremote:        https://*****************.herokuapp.com/ deployed to Heroku\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Application running",src:i(61573).Z,width:"512",height:"343"})),(0,r.kt)("h2",{id:"additional-references"},"Additional references:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://circleci.com/blog/what-is-a-ci-cd-pipeline/"},"What is a CI/CI Pipeline?")," (article at circleci.com)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://circleci.com/docs/2.0/getting-started/"},"Getting Started with CircleCI")," (article at circleci.com)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.redis.com/create/heroku/portal"},"Creating a Redis database on Heroku"))))}p.isMDXComponent=!0},58918:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/circleci-auth-97cb0853e85f680cb25c89dee57dd08c.png"},53051:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/circleci-config-faf49f38fc5ebd6d6bcc60abcae0d7af.png"},24606:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/circleci-config2-46caeb88bcd20d9fd85ff7b6159fa9f5.png"},28547:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/circleci-demoapp-9bcf114937a269cd9ac4b47707d27757.png"},37759:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/circleci-login-76e19eeeaed3629dcd3220b921faec9c.png"},66472:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/circleci-merge-da6014242d8741244ef6f4bd39a898e9.png"},62655:(e,t,i)=>{i.d(t,{Z:()=>n});const n="data:image/png;base64,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"},22877:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/circleci-redis-c390aa25ebfe916004c26944d7098b92.png"},94510:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/circlecidiagram-48c63b742c69dbe8f2c9cf73b35b5526.png"},39459:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/heroku-envir-b19647b21fcd811f2e28e067d86e1031.png"},25250:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/heroku-setup-cb694828eca8523398f68ea1dcad2700.png"},1585:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/heroku-trigger-31ab2be6a408ca27fd367801e1543250.png"},61573:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/rate-limiting-example-16e442d751f70fa3cf6b1d254aaeec9b.png"}}]);
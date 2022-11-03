"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[9769],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=d(n),m=o,p=h["".concat(l,".").concat(m)]||h[m]||u[m]||a;return n?r.createElement(p,s(s({ref:t},c),{},{components:n})):r.createElement(p,s({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var d=2;d<a;d++)s[d]=n[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},50358:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),o=n(52263);const a="authorByline_VoxI",s="authorLabel_a70t",i="authorProfileImage_URwT";const l=function(e){let{frontMatter:t}=e;const{siteConfig:n}=(0,o.Z)(),l=n.customFields.authors;return r.createElement(r.Fragment,null,t.authors&&r.createElement("div",{className:"docAuthors"},r.createElement("hr",null),t.authors.map((e=>r.createElement("div",{key:e,className:a},r.createElement("img",{className:i,src:`/img/${l[e].image?l[e].image:"default_author_profile_pic.png"}`,alt:`Profile picture for ${l[e].name}`}),r.createElement("div",null,r.createElement("div",{className:s},"Author:"),r.createElement("div",null,r.createElement("a",{href:l[e].link,target:"_blank"},l[e].name),", ",l[e].title))))),r.createElement("hr",null)))}},30464:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905)),a=n(50358);const s={id:"index-domainobjectswithhashes",title:"Managing Domain Objects with Redis Hashes",sidebar_label:"Domain Objects with Hashes",slug:"/develop/node/nodecrashcourse/domainobjectswithhashes",authors:["simon"]},i=void 0,l={unversionedId:"develop/node/node-crash-course/domainobjectswithhashes/index-domainobjectswithhashes",id:"develop/node/node-crash-course/domainobjectswithhashes/index-domainobjectswithhashes",title:"Managing Domain Objects with Redis Hashes",description:"In this module, you'll see how we're using Redis Hashes to model the user and location data in our application.",source:"@site/docs/develop/node/node-crash-course/domainobjectswithhashes/index-domainobjectswithhashes.mdx",sourceDirName:"develop/node/node-crash-course/domainobjectswithhashes",slug:"/develop/node/nodecrashcourse/domainobjectswithhashes",permalink:"/develop/node/nodecrashcourse/domainobjectswithhashes",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/node/node-crash-course/domainobjectswithhashes/index-domainobjectswithhashes.mdx",tags:[],version:"current",lastUpdatedAt:1667495358,formattedLastUpdatedAt:"Nov 3, 2022",frontMatter:{id:"index-domainobjectswithhashes",title:"Managing Domain Objects with Redis Hashes",sidebar_label:"Domain Objects with Hashes",slug:"/develop/node/nodecrashcourse/domainobjectswithhashes",authors:["simon"]},sidebar:"docs",previous:{title:"Running the Application",permalink:"/develop/node/nodecrashcourse/runningtheapplication"},next:{title:"Introduction to Modules",permalink:"/develop/node/nodecrashcourse/introductiontomodules"}},d={},c=[{value:"Coding Exercise",id:"coding-exercise",level:2},{value:"External Resources",id:"external-resources",level:2}],u={toc:c};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(a.Z,{frontMatter:s,mdxType:"Authors"}),(0,o.kt)("p",null,"In this module, you'll see how we're using Redis Hashes to model the user and location data in our application."),(0,o.kt)("div",{class:"text--center"},(0,o.kt)("iframe",{width:"896",height:"509",src:"https://www.youtube.com/embed/xASSiToabSM",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,o.kt)("h2",{id:"coding-exercise"},"Coding Exercise"),(0,o.kt)("p",null,"In your first coding exercise, you'll be adding a new route that takes a user's ID and returns their full name."),(0,o.kt)("p",null,"Using your IDE, open the ",(0,o.kt)("inlineCode",{parentName:"p"},"node-js-crash-course")," folder that you cloned the GitHub repository into. Open the file ",(0,o.kt)("inlineCode",{parentName:"p"},"src/routes/user_routes.js")," and find the route ",(0,o.kt)("inlineCode",{parentName:"p"},"/user/:userId/fullname")," which looks like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// EXERCISE: Get user's full name.\nrouter.get(\n  '/user/:userId/fullname',\n  [param('userId').isInt({ min: 1 }), apiErrorReporter],\n  async (req, res) => {\n    const { userId } = req.params;\n    /* eslint-disable no-unused-vars */\n    const userKey = redis.getKeyName('users', userId);\n    /* eslint-enable */\n\n    // TODO: Get the firstName and lastName fields from the\n    // user hash whose key is in userKey.\n    // HINT: Check out the HMGET command...\n    // https://redis.io/commands/hmget\n    const [firstName, lastName] = ['TODO', 'TODO'];\n\n    res.status(200).json({ fullName: `${firstName} ${lastName}` });\n  },\n);\n")),(0,o.kt)("p",null,"In this exercise, you'll modify the code to return the user's full name by retrieving the firstName and lastName fields for the requested user from Redis."),(0,o.kt)("p",null,"First, make sure your server is still running, if not start it with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm run dev\n")),(0,o.kt)("p",null,"Next, browse to ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:8081/api/user/5/fullname")),(0,o.kt)("p",null,"You should see:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "fullName": "TODO TODO"\n}\n')),(0,o.kt)("p",null,"Take a look at the ",(0,o.kt)("a",{parentName:"p",href:"https://redis.io/commands/hmget"},"documentation for the Redis HMGET command"),", which retrieves multiple named fields from a Redis Hash. You'll need to add code that calls the Redis client's ",(0,o.kt)("inlineCode",{parentName:"p"},"hmget")," function, then place the values returned into the ",(0,o.kt)("inlineCode",{parentName:"p"},"firstName")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"lastName")," variables. You should be able to retrieve both values using a single call to ",(0,o.kt)("inlineCode",{parentName:"p"},"hmget"),". For guidance on how to invoke Redis commands, check out the code for the ",(0,o.kt)("inlineCode",{parentName:"p"},"/user/:userId")," route which calls the ",(0,o.kt)("inlineCode",{parentName:"p"},"HGETALL")," command."),(0,o.kt)("p",null,"nodemon will restart the server automatically for you each time you save your changes."),(0,o.kt)("p",null,"When you're ready to test your solution, browse to ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:8081/api/user/5/fullname")," and you should see:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "fullName": "Alejandro Reyes"\n}\n')),(0,o.kt)("p",null,"If you need help from our team, ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/redis"},"join us in Discord"),"."),(0,o.kt)("h2",{id:"external-resources"},"External Resources"),(0,o.kt)("p",null,"In this video, Justin explains what Redis Hashes are and shows how common Redis Hash commands work:"),(0,o.kt)("div",{class:"text--center"},(0,o.kt)("iframe",{width:"896",height:"509",src:"https://www.youtube.com/embed/-agsJUihrWw",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,o.kt)("p",null,"You can find documentation for all of the ",(0,o.kt)("a",{parentName:"p",href:"https://redis.io/commands#hash"},"Redis Hash commands on redis.io"),"."))}h.isMDXComponent=!0}}]);
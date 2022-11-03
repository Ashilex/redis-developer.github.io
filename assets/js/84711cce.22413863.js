"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[6517],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,y=p["".concat(l,".").concat(m)]||p[m]||c[m]||o;return n?r.createElement(y,i(i({ref:t},d),{},{components:n})):r.createElement(y,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},50358:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(52263);const o="authorByline_VoxI",i="authorLabel_a70t",s="authorProfileImage_URwT";const l=function(e){let{frontMatter:t}=e;const{siteConfig:n}=(0,a.Z)(),l=n.customFields.authors;return r.createElement(r.Fragment,null,t.authors&&r.createElement("div",{className:"docAuthors"},r.createElement("hr",null),t.authors.map((e=>r.createElement("div",{key:e,className:o},r.createElement("img",{className:s,src:`/img/${l[e].image?l[e].image:"default_author_profile_pic.png"}`,alt:`Profile picture for ${l[e].name}`}),r.createElement("div",null,r.createElement("div",{className:i},"Author:"),r.createElement("div",null,r.createElement("a",{href:l[e].link,target:"_blank"},l[e].name),", ",l[e].title))))),r.createElement("hr",null)))}},85997:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>u,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o=n.p+"assets/images/insider_jyotsna_gupta-61c1ce75a1262a09c8ba80a3797c885c.jpg";var i=n(50358);const s={id:"index-jyotsna-gupta",title:"Jyotsna Gupta, Redis Insider",sidebar_label:"Jyotsna Gupta",slug:"/redis-insiders/jyotsna-gupta/",authors:["suze","jyotsna"],custom_edit_url:null},l=void 0,u={unversionedId:"get-involved/redis-insiders/jyotsna-gupta/index-jyotsna-gupta",id:"get-involved/redis-insiders/jyotsna-gupta/index-jyotsna-gupta",title:"Jyotsna Gupta, Redis Insider",description:'"I am an Open Source Enthusiast, working as a Senior Software Engineer at Gojek (GoPay). I am based out of Bangalore, India. I have been using Redis for the last 3 years.',source:"@site/docs/get-involved/redis-insiders/jyotsna-gupta/index-jyotsna-gupta.mdx",sourceDirName:"get-involved/redis-insiders/jyotsna-gupta",slug:"/redis-insiders/jyotsna-gupta/",permalink:"/redis-insiders/jyotsna-gupta/",draft:!1,editUrl:null,tags:[],version:"current",lastUpdatedAt:1667495358,formattedLastUpdatedAt:"Nov 3, 2022",frontMatter:{id:"index-jyotsna-gupta",title:"Jyotsna Gupta, Redis Insider",sidebar_label:"Jyotsna Gupta",slug:"/redis-insiders/jyotsna-gupta/",authors:["suze","jyotsna"],custom_edit_url:null},sidebar:"docs",previous:{title:"Redis Insiders",permalink:"/redis-insiders/"},next:{title:"Moiz Kapasi",permalink:"/redis-insiders/moiz-kapasi/"}},d={},c=[],p={toc:c};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{frontMatter:s,mdxType:"Authors"}),(0,a.kt)("img",{alt:"Jyotsna Gupta headshot",src:o,style:{float:"left","margin-right":"50px"}}),(0,a.kt)("p",null,'"I am an Open Source Enthusiast, working as a Senior Software Engineer at Gojek (GoPay). I am based out of Bangalore, India. I have been using Redis for the last 3 years.'),(0,a.kt)("p",null,'"I applied to become a Redis Insider because I am highly passionate about communities and love to share and learn together, and I am currently trying to get the expertise in Redis at my current workplace.'),(0,a.kt)("p",null,'"Apart from my work and volunteering, I energize myself by playing badminton, table tennis, Carrom, chess and basketball. I prefer to spend most of the time in my room, else I feel to travel the world. If you don\u2019t see me doing any of the above, then you\u2019ll find probably find me sleeping and dreaming for hours, maybe days?"'),(0,a.kt)("div",{style:{clear:"left"}}),(0,a.kt)("p",null,"Find Jyotsna online at:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://twitter.com/imJenal/"},"Twitter"))))}m.isMDXComponent=!0}}]);
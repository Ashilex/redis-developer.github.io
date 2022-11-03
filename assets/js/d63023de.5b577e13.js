"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[4845],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||a;return n?i.createElement(h,l(l({ref:t},d),{},{components:n})):i.createElement(h,l({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<a;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50358:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(67294),r=n(52263);const a="authorByline_VoxI",l="authorLabel_a70t",o="authorProfileImage_URwT";const s=function(e){let{frontMatter:t}=e;const{siteConfig:n}=(0,r.Z)(),s=n.customFields.authors;return i.createElement(i.Fragment,null,t.authors&&i.createElement("div",{className:"docAuthors"},i.createElement("hr",null),t.authors.map((e=>i.createElement("div",{key:e,className:a},i.createElement("img",{className:o,src:`/img/${s[e].image?s[e].image:"default_author_profile_pic.png"}`,alt:`Profile picture for ${s[e].name}`}),i.createElement("div",null,i.createElement("div",{className:l},"Author:"),i.createElement("div",null,i.createElement("a",{href:s[e].link,target:"_blank"},s[e].name),", ",s[e].title))))),i.createElement("hr",null)))}},12464:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var i=n(87462),r=(n(67294),n(3905)),a=n(50358);const l={id:"index-spring-fixed-window-reactive",title:"Reactive Implementation",sidebar_label:"Reactive Implementation",slug:"/develop/java/spring/rate-limiting/fixed-window/reactive",authors:["bsb"]},o=void 0,s={unversionedId:"develop/java/spring/rate-limiting/fixed-window/index-spring-fixed-window-reactive",id:"develop/java/spring/rate-limiting/fixed-window/index-spring-fixed-window-reactive",title:"Reactive Implementation",description:"A basic Spring Web Flux App",source:"@site/docs/develop/java/spring/rate-limiting/fixed-window/index-fixed-window-reactive.mdx",sourceDirName:"develop/java/spring/rate-limiting/fixed-window",slug:"/develop/java/spring/rate-limiting/fixed-window/reactive",permalink:"/develop/java/spring/rate-limiting/fixed-window/reactive",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/java/spring/rate-limiting/fixed-window/index-fixed-window-reactive.mdx",tags:[],version:"current",lastUpdatedAt:1667495358,formattedLastUpdatedAt:"Nov 3, 2022",frontMatter:{id:"index-spring-fixed-window-reactive",title:"Reactive Implementation",sidebar_label:"Reactive Implementation",slug:"/develop/java/spring/rate-limiting/fixed-window/reactive",authors:["bsb"]},sidebar:"docs",previous:{title:"Overview",permalink:"/develop/java/spring/rate-limiting/fixed-window"},next:{title:"Atomicity with Lua",permalink:"/develop/java/spring/rate-limiting/fixed-window/reactive-lua"}},p={},d=[{value:"A basic Spring Web Flux App",id:"a-basic-spring-web-flux-app",level:2},{value:"Spring WebFlux Filters",id:"spring-webflux-filters",level:2},{value:"Reactive Redis Template",id:"reactive-redis-template",level:2},{value:"Identifying the Requester",id:"identifying-the-requester",level:2},{value:"Increment and Expire Key",id:"increment-and-expire-key",level:2},{value:"Completing the filter implementation",id:"completing-the-filter-implementation",level:2},{value:"Testing with curl",id:"testing-with-curl",level:2}],c={toc:d};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(a.Z,{frontMatter:l,mdxType:"Authors"}),(0,r.kt)("h2",{id:"a-basic-spring-web-flux-app"},"A basic Spring Web Flux App"),(0,r.kt)("p",null,"Let's start by creating a simple Spring Boot application using the Spring Initializr:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In your browser, launch the ",(0,r.kt)("a",{parentName:"li",href:"https://start.spring.io"},"Spring Initilizr")),(0,r.kt)("li",{parentName:"ol"},"Fill out the form using the following settings:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Project: Maven Project"),(0,r.kt)("li",{parentName:"ul"},"Language: Java"),(0,r.kt)("li",{parentName:"ul"},"Spring Boot: 2.5.4"),(0,r.kt)("li",{parentName:"ul"},"Project Metadata:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Group: ",(0,r.kt)("inlineCode",{parentName:"li"},"com.redis.rl")),(0,r.kt)("li",{parentName:"ul"},"Artifact: ",(0,r.kt)("inlineCode",{parentName:"li"},"fixed-window-rate-limiter")),(0,r.kt)("li",{parentName:"ul"},"Name: ",(0,r.kt)("inlineCode",{parentName:"li"},"fixed-window-rate-limiter")),(0,r.kt)("li",{parentName:"ul"},"Description: Redis Fixed Window Rate Limiter"),(0,r.kt)("li",{parentName:"ul"},"Package Name: ",(0,r.kt)("inlineCode",{parentName:"li"},"com.redis.rl")),(0,r.kt)("li",{parentName:"ul"},"Packaging: JAR"),(0,r.kt)("li",{parentName:"ul"},"Java: 11"))),(0,r.kt)("li",{parentName:"ul"},"Dependencies:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Spring Reactive Web"),(0,r.kt)("li",{parentName:"ul"},"String Data Reactive"),(0,r.kt)("li",{parentName:"ul"},"Spring Boot DevTools")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Spring Initializr",src:n(95196).Z,width:"2520",height:"1754"})),(0,r.kt)("p",null,"Click on GENERATE and Initializr will generate the zip file for the project and prompt you to download it to your local machine.\nUnzip the downloaded file (named ",(0,r.kt)("inlineCode",{parentName:"p"},"fixed-window-rate-limiter.zip"),") in a suitable directory. For example on a Mac:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/my-directory\nunzip ~/Downloads/fixed-window-rate-limiter.zip\n")),(0,r.kt)("p",null,"Now, open the file ",(0,r.kt)("inlineCode",{parentName:"p"},"FixedWindowRateLimiterApplication.java")," located under ",(0,r.kt)("inlineCode",{parentName:"p"},"fixed-window-rate-limiter/src/main/java/com/redis/rl/"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"package com.redis.rl;\n\nimport org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\n\n@SpringBootApplication\npublic class FixedWindowRateLimiterApplication {\n\n    public static void main(String[] args) {\n        SpringApplication.run(FixedWindowRateLimiterApplication.class, args);\n    }\n\n}\n")),(0,r.kt)("p",null,"And let's add the ",(0,r.kt)("inlineCode",{parentName:"p"},"@Bean")," annotated method ",(0,r.kt)("inlineCode",{parentName:"p"},"routes()"),' to create the simplest of endpoints; a "ping" endpoint,\nwhich replies with a text reponse "PONG":'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Bean\nRouterFunction<ServerResponse> routes() {\n  return route() //\n      .GET("/api/ping", r -> ok() //\n          .contentType(TEXT_PLAIN) //\n          .body(BodyInserters.fromValue("PONG")) //\n      ).build();\n}\n')),(0,r.kt)("p",null,"You'll also need the following imports:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"import static org.springframework.web.reactive.function.server.RouterFunctions.route;\nimport static org.springframework.web.reactive.function.server.ServerResponse.ok;\nimport static org.springframework.http.MediaType.TEXT_PLAIN;\n\nimport org.springframework.context.annotation.Bean;\nimport org.springframework.web.reactive.function.server.RouterFunction;\nimport org.springframework.web.reactive.function.server.ServerResponse;\nimport org.springframework.web.reactive.function.BodyInserters;\n")),(0,r.kt)("p",null,"Let's use curl to test the newly created endpoint:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"/>curl http://localhost:8080/api/ping\nPONG\n")),(0,r.kt)("h2",{id:"spring-webflux-filters"},"Spring WebFlux Filters"),(0,r.kt)("p",null,"We'll implement our rate limiter as a Spring WebFlux Filter. A filter allows us to\nintercept a request and modify the response. For our needs we'll use a ",(0,r.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/reactive/function/server/HandlerFilterFunction.html"},(0,r.kt)("inlineCode",{parentName:"a"},"HandlerFilterFunction")),";\nwhich we can filter a ",(0,r.kt)("inlineCode",{parentName:"p"},"RouterFunction")," such as our ",(0,r.kt)("inlineCode",{parentName:"p"},"routes()")," endpoint."),(0,r.kt)("p",null,"We'll keep everything in one file to make the example easier to manage for our simple example. At the end of the file\n",(0,r.kt)("inlineCode",{parentName:"p"},"FixedWindowRateLimiterApplication.java")," let's add a class called ",(0,r.kt)("inlineCode",{parentName:"p"},"RateLimiterHandlerFilterFunction")," as shown:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"class RateLimiterHandlerFilterFunction implements HandlerFilterFunction<ServerResponse, ServerResponse> {\n\n  @Override\n  public Mono<ServerResponse> filter(ServerRequest request, HandlerFunction<ServerResponse> next) {\n    // TODO Auto-generated method stub\n    return null;\n  }\n}\n")),(0,r.kt)("p",null,"The class implements the ",(0,r.kt)("inlineCode",{parentName:"p"},"filter")," method, which currently returns ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),". Let's modify it to simply pass the\nrequest throught."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Override\npublic Mono<ServerResponse> filter(ServerRequest request, HandlerFunction<ServerResponse> next) {\n  return next.handle(request);\n}\n")),(0,r.kt)("p",null,"And also, let's apply it to our ",(0,r.kt)("inlineCode",{parentName:"p"},"routes")," method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Bean\nRouterFunction<ServerResponse> routes() {\n  return route() //\n      .GET("/api/ping", r -> ok() //\n          .contentType(TEXT_PLAIN) //\n          .body(BodyInserters.fromValue("PONG")) //\n      ).filter(new RateLimiterHandlerFilterFunction()).build();\n}\n')),(0,r.kt)("p",null,"Testing the endpoint with curl should still works as previously."),(0,r.kt)("h2",{id:"reactive-redis-template"},"Reactive Redis Template"),(0,r.kt)("p",null,"Spring Data Redis provides a Reactive API which plays well with all the other reactive parts of the Spring framework.\nIn order to work with Redis we'll use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ReactiveRedisTemplate"),", the aptly named ",(0,r.kt)("inlineCode",{parentName:"p"},"reactiveRedisTemplate")," method\nconfigures a reactive template given a ",(0,r.kt)("inlineCode",{parentName:"p"},"ReactiveRedisConnectionFactory")," (which will be injected by the framework)."),(0,r.kt)("p",null,"The template is configured to use the work with String keys and Long values as shown by the usage of the ",(0,r.kt)("inlineCode",{parentName:"p"},"StringRedisSerializer"),"\nand the ",(0,r.kt)("inlineCode",{parentName:"p"},"GenericToStringSerializer"),"."),(0,r.kt)("p",null,"The template offers a high-level abstraction for Redis interactions and we will later pass it to our rate limiter\nfilter to use Redis as our rate limiting back-end:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"@Bean\nReactiveRedisTemplate<String, Long> reactiveRedisTemplate(ReactiveRedisConnectionFactory factory) {\n  JdkSerializationRedisSerializer jdkSerializationRedisSerializer = new JdkSerializationRedisSerializer();\n  StringRedisSerializer stringRedisSerializer = StringRedisSerializer.UTF_8;\n  GenericToStringSerializer<Long> longToStringSerializer = new GenericToStringSerializer<>(Long.class);\n  ReactiveRedisTemplate<String, Long> template = new ReactiveRedisTemplate<>(factory,\n      RedisSerializationContext.<String, Long>newSerializationContext(jdkSerializationRedisSerializer)\n          .key(stringRedisSerializer).value(longToStringSerializer).build());\n  return template;\n}\n\n@Autowired\nprivate ReactiveRedisTemplate<String, Long> redisTemplate;\n")),(0,r.kt)("p",null,"Below are the required imports added:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"import org.springframework.data.redis.connection.ReactiveRedisConnectionFactory;\nimport org.springframework.data.redis.core.ReactiveRedisTemplate;\nimport org.springframework.data.redis.serializer.GenericToStringSerializer;\nimport org.springframework.data.redis.serializer.JdkSerializationRedisSerializer;\nimport org.springframework.data.redis.serializer.RedisSerializationContext;\nimport org.springframework.data.redis.serializer.StringRedisSerializer;\n\nimport org.springframework.beans.factory.annotation.Autowired;\n")),(0,r.kt)("p",null,"Next, let's modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"RateLimiterHandlerFilterFunction")," class to include the template and let's add a\nconstructor so that we can properly initialize it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"class RateLimiterHandlerFilterFunction implements HandlerFilterFunction<ServerResponse, ServerResponse> {\n\n  private ReactiveRedisTemplate<String, Long> redisTemplate;\n\n  public RateLimiterHandlerFilterFunction(ReactiveRedisTemplate<String, Long> redisTemplate) {\n    this.redisTemplate = redisTemplate;\n  }\n")),(0,r.kt)("p",null,"We also need to modify the ",(0,r.kt)("inlineCode",{parentName:"p"},"routes")," method to include the ",(0,r.kt)("inlineCode",{parentName:"p"},"redisTemplate")," in the call to the\n",(0,r.kt)("inlineCode",{parentName:"p"},"RateLimiterHandlerFilterFunction")," constructor:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Bean\nRouterFunction<ServerResponse> routes() {\n  return route() //\n      .GET("/api/ping", r -> ok() //\n          .contentType(TEXT_PLAIN) //\n          .body(BodyInserters.fromValue("PONG")) //\n      ).filter(new RateLimiterHandlerFilterFunction(redisTemplate)).build();\n}\n')),(0,r.kt)("h2",{id:"identifying-the-requester"},"Identifying the Requester"),(0,r.kt)("p",null,"As mentioned in the introduction to rate limiting, identifying the origin of the request is critical to\nthe efficacy of your rate limiting implementation. In this simple implementation we will focus on the\nmechanics of rate limiting and do the simplest possible thing we can do to identify the requester."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"filter")," method in ",(0,r.kt)("inlineCode",{parentName:"p"},"RateLimiterHandlerFilterFunction")," takes an instance of a ",(0,r.kt)("inlineCode",{parentName:"p"},"ServerRequest"),", from\nwhich we can obtain the IP address of the requester. Add private method ",(0,r.kt)("inlineCode",{parentName:"p"},"requestAddress")," to the filter function\nclass:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'private String requestAddress(Optional<InetSocketAddress> maybeAddress) {\n  return maybeAddress.isPresent() ? maybeAddress.get().getHostName() : "";\n}\n')),(0,r.kt)("p",null,"With the ",(0,r.kt)("inlineCode",{parentName:"p"},"requestAddress")," in place we can build the key we'll use to check for the requesters' quota.\nTo compute the key we will concatenate the requester's address and the current minute of the hour. We'll\nprefix the keys with ",(0,r.kt)("inlineCode",{parentName:"p"},"rl_"),' for "rate limiting":'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public Mono<ServerResponse> filter(ServerRequest request, HandlerFunction<ServerResponse> next) {\n  int currentMinute = LocalTime.now().getMinute();\n  String key = String.format("rl_%s:%s", requestAddress(request.remoteAddress()), currentMinute);\n  System.out.println(">>>> key " + key);\n\n  return next.handle(request);\n}\n')),(0,r.kt)("p",null,"Invoking the endpoint should show the key on the console like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},">>>> key rl_localhost:34\n")),(0,r.kt)("h2",{id:"increment-and-expire-key"},"Increment and Expire Key"),(0,r.kt)("p",null,"Now we need to implement the logic to execute the ",(0,r.kt)("inlineCode",{parentName:"p"},"INCR")," and an ",(0,r.kt)("inlineCode",{parentName:"p"},"EXPIRE")," logic\noutlined in ",(0,r.kt)("a",{parentName:"p",href:"/develop/java/spring/rate-limiting/fixed-window"},"Fixed Window"),"\nimplementation using Spring Data Redis Reactive:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"MULTI\nINCR [user-api-key]:[current minute number]\nEXPIRE [user-api-key]:[current minute number] 59\nEXEC\n")),(0,r.kt)("p",null,'The "Basic Rate Limiting" recipe calls for the use of a ',(0,r.kt)("a",{parentName:"p",href:"https://redis.io/topics/transactions"},"Redis Transaction"),"\nin which the commands are sent to the server, accumulated in serial way and executed\nsequentially without any possible interruption by a request from another client."),(0,r.kt)("p",null,"Basically, we want the ",(0,r.kt)("inlineCode",{parentName:"p"},"INCR")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"EXPIRE")," calls to update the requests-per-unit-of-time counter\nto happen atomically or not at all. Given that ",(0,r.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/56647972/how-do-i-use-transactions-in-spring-data-redis-reactive"},(0,r.kt)("inlineCode",{parentName:"a"},"a Reactive API and Redis Transactions (MULTI/EXEC) are not compatible paradigms")),', which boils down to "you cannot listen to a command that is going to be executed in the future" in a chain of reactive commands\nA "best possible" approach to achieve this behavior with a reactive API is by using the ',(0,r.kt)("inlineCode",{parentName:"p"},"ReactiveRedisTemplate")," ",(0,r.kt)("inlineCode",{parentName:"p"},"execute")," method which takes a\n",(0,r.kt)("inlineCode",{parentName:"p"},"ReactiveRedisCallback"),' guaranteing that at least the commands will run on the same Redis\nconnection, but, this is by no means a real "transaction":'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"private Mono<ServerResponse> incrAndExpireKey(String key, ServerRequest request,\n  HandlerFunction<ServerResponse> next) {\n  return redisTemplate.execute(new ReactiveRedisCallback<List<Object>>() {\n    @Override\n    public Publisher<List<Object>> doInRedis(ReactiveRedisConnection connection) throws DataAccessException {\n      ByteBuffer bbKey = ByteBuffer.wrap(key.getBytes());\n      return Mono.zip( //\n          connection.numberCommands().incr(bbKey), //\n          connection.keyCommands().expire(bbKey, Duration.ofSeconds(59L)) //\n      ).then(Mono.empty());\n    }\n  }).then(next.handle(request));\n}\n")),(0,r.kt)("p",null,"Let's break down what this monster of a reactive method:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The method returns an Asynchronous (0-1) Result, a ",(0,r.kt)("inlineCode",{parentName:"li"},"Mono")," (a specialized ",(0,r.kt)("inlineCode",{parentName:"li"},"Publisher<T>")," that emits at most one item in this case a ",(0,r.kt)("inlineCode",{parentName:"li"},"ServerResponse"),")"),(0,r.kt)("li",{parentName:"ol"},"The method takes the calculated rate limiting ",(0,r.kt)("inlineCode",{parentName:"li"},"key"),", the original server ",(0,r.kt)("inlineCode",{parentName:"li"},"request")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"next")," handler function"),(0,r.kt)("li",{parentName:"ol"},"In the ",(0,r.kt)("inlineCode",{parentName:"li"},"doInRedis")," method we turn the key into a ",(0,r.kt)("inlineCode",{parentName:"li"},"ByteBuffer")," in order to use with ",(0,r.kt)("inlineCode",{parentName:"li"},"ReactiveRedisConnection")," commands"),(0,r.kt)("li",{parentName:"ol"},"The zip methods waits for all the sources to emit one element and combines these elements into an output value\n,which we are ignoring since all we are after is sequential execution on the ",(0,r.kt)("inlineCode",{parentName:"li"},"INCR")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"EXPIRE")," commands."),(0,r.kt)("li",{parentName:"ol"},"The method then returns a ",(0,r.kt)("inlineCode",{parentName:"li"},"Mono.empty()")),(0,r.kt)("li",{parentName:"ol"},"Finally handle the request.")),(0,r.kt)("h2",{id:"completing-the-filter-implementation"},"Completing the filter implementation"),(0,r.kt)("p",null,"To complete the filter implementation, we'll add a constant for the cap on the number of request per minute, that can\nbe optionally loaded from the application's properties:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@Value("${MAX_REQUESTS_PER_MINUTE}")\nprivate static Long MAX_REQUESTS_PER_MINUTE = 20L;\n')),(0,r.kt)("p",null,"Let's break down he final ",(0,r.kt)("inlineCode",{parentName:"p"},"filter")," method implementation:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"We use the Redis template ",(0,r.kt)("inlineCode",{parentName:"li"},"opsForValue()")," to retrieve the value stored under the calculated key."),(0,r.kt)("li",{parentName:"ol"},"If the value..",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Is greater than or equal to the max quota we deny the request with a 409 response."),(0,r.kt)("li",{parentName:"ul"},"Otherwise, call ",(0,r.kt)("inlineCode",{parentName:"li"},"incrementAndExpireKey")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Is empty/key not found (first request on this window) we call ",(0,r.kt)("inlineCode",{parentName:"li"},"incrementAndExpireKey"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public Mono<ServerResponse> filter(ServerRequest request, HandlerFunction<ServerResponse> next) {\n  int currentMinute = LocalTime.now().getMinute();\n  String key = String.format("rl_%s:%s", requestAddress(request.remoteAddress()), currentMinute);\n\n  return redisTemplate //\n      .opsForValue().get(key) //\n      .flatMap( //\n          value -> value >= MAX_REQUESTS_PER_MINUTE ? //\n              ServerResponse.status(TOO_MANY_REQUESTS).build() : //\n              incrAndExpireKey(key, request, next) //\n      ).switchIfEmpty(incrAndExpireKey(key, request, next));\n}\n')),(0,r.kt)("h2",{id:"testing-with-curl"},"Testing with curl"),(0,r.kt)("p",null,"A simple way to test an API rate limiter is using ",(0,r.kt)("a",{parentName:"p",href:"https://curl.se"},"curl")," in a loop,\nsince we are testing a set number of requests per unit of time the curl loop below will\nsuffice:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'for n in {1..22}; do echo $(curl -s -w " :: HTTP %{http_code}, %{size_download} bytes, %{time_total} s" -X GET http://localhost:8080/api/ping); sleep 0.5; done\n')),(0,r.kt)("p",null,"We loop 22 times, the example code is set to 20 so 22 will allow us to see two 429 responses. The\ncurl flags used are as follows; first is ",(0,r.kt)("inlineCode",{parentName:"p"},"-s")," that silences curl (makes it hide progress bar and errors), ",(0,r.kt)("inlineCode",{parentName:"p"},"-w")," is the write out options in which we can pass a string with interpolated variables.\nThen we sleep 1/2 second between cycles."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'\u279c for n in {1..22}; do echo $(curl -s -w " :: HTTP %{http_code}, %{size_download} bytes, %{time_total} s" -X GET http://localhost:8080/api/ping); sleep 0.5; done\nPONG :: HTTP 200, 4 bytes, 0.393156 s\nPONG :: HTTP 200, 4 bytes, 0.019530 s\nPONG :: HTTP 200, 4 bytes, 0.023677 s\nPONG :: HTTP 200, 4 bytes, 0.019922 s\nPONG :: HTTP 200, 4 bytes, 0.025573 s\nPONG :: HTTP 200, 4 bytes, 0.018916 s\nPONG :: HTTP 200, 4 bytes, 0.019548 s\nPONG :: HTTP 200, 4 bytes, 0.018335 s\nPONG :: HTTP 200, 4 bytes, 0.010105 s\nPONG :: HTTP 200, 4 bytes, 0.008416 s\nPONG :: HTTP 200, 4 bytes, 0.009829 s\nPONG :: HTTP 200, 4 bytes, 0.011766 s\nPONG :: HTTP 200, 4 bytes, 0.010809 s\nPONG :: HTTP 200, 4 bytes, 0.015483 s\nPONG :: HTTP 200, 4 bytes, 0.009732 s\nPONG :: HTTP 200, 4 bytes, 0.009970 s\nPONG :: HTTP 200, 4 bytes, 0.008696 s\nPONG :: HTTP 200, 4 bytes, 0.009176 s\nPONG :: HTTP 200, 4 bytes, 0.009678 s\nPONG :: HTTP 200, 4 bytes, 0.012497 s\n:: HTTP 429, 0 bytes, 0.010071 s\n:: HTTP 429, 0 bytes, 0.006625 s\n')),(0,r.kt)("p",null,"If we run Redis in monitor mode, we should see the call to ",(0,r.kt)("inlineCode",{parentName:"p"},"GET")," for a rejected\nrequest, and the same plus calls to ",(0,r.kt)("inlineCode",{parentName:"p"},"INCR")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"EXPIRE")," for an allowed request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'1630366639.188290 [0 172.17.0.1:65016] "GET" "rl_localhost:37"\n1630366639.200956 [0 172.17.0.1:65016] "INCR" "rl_localhost:37"\n1630366639.202372 [0 172.17.0.1:65016] "EXPIRE" "rl_localhost:37" "59"\n...\n1630366649.891110 [0 172.17.0.1:65016] "GET" "rl_localhost:37"\n1630366650.417131 [0 172.17.0.1:65016] "GET" "rl_localhost:37"\n')),(0,r.kt)("p",null,"You can find this example on the main branch at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/redis-developer/fixed-window-rate-limiter"},"https://github.com/redis-developer/fixed-window-rate-limiter")))}m.isMDXComponent=!0},95196:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/start-spring-io-01-b64e74c2f2f16c5c0d0145c2aee477ee.png"}}]);
"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[4641],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,g=u["".concat(l,".").concat(m)]||u[m]||c[m]||i;return n?r.createElement(g,o(o({ref:t},d),{},{components:n})):r.createElement(g,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},50358:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(67294),a=n(52263);const i="authorByline_VoxI",o="authorLabel_a70t",s="authorProfileImage_URwT";const l=function(e){let{frontMatter:t}=e;const{siteConfig:n}=(0,a.Z)(),l=n.customFields.authors;return r.createElement(r.Fragment,null,t.authors&&r.createElement("div",{className:"docAuthors"},r.createElement("hr",null),t.authors.map((e=>r.createElement("div",{key:e,className:i},r.createElement("img",{className:s,src:`/img/${l[e].image?l[e].image:"default_author_profile_pic.png"}`,alt:`Profile picture for ${l[e].name}`}),r.createElement("div",null,r.createElement("div",{className:o},"Author:"),r.createElement("div",null,r.createElement("a",{href:l[e].link,target:"_blank"},l[e].name),", ",l[e].title))))),r.createElement("hr",null)))}},68367:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(87462),a=(n(67294),n(3905)),i=n(50358);const o={id:"index-lesson_2",title:"Introducing Spring Data Redis",sidebar_label:"Spring Data Redis",slug:"/develop/java/redis-and-spring-course/lesson_2",authors:["bsb"]},s=void 0,l={unversionedId:"develop/java/spring/redis-and-spring-course/lesson_2/index-lesson_2",id:"develop/java/spring/redis-and-spring-course/lesson_2/index-lesson_2",title:"Introducing Spring Data Redis",description:"Objectives",source:"@site/docs/develop/java/spring/redis-and-spring-course/lesson_2/index-lesson_2.mdx",sourceDirName:"develop/java/spring/redis-and-spring-course/lesson_2",slug:"/develop/java/redis-and-spring-course/lesson_2",permalink:"/develop/java/redis-and-spring-course/lesson_2",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/java/spring/redis-and-spring-course/lesson_2/index-lesson_2.mdx",tags:[],version:"current",lastUpdatedAt:1667495358,formattedLastUpdatedAt:"Nov 3, 2022",frontMatter:{id:"index-lesson_2",title:"Introducing Spring Data Redis",sidebar_label:"Spring Data Redis",slug:"/develop/java/redis-and-spring-course/lesson_2",authors:["bsb"]},sidebar:"docs",previous:{title:"Up and Running",permalink:"/develop/java/redis-and-spring-course/lesson_1"},next:{title:"Mapping & Repositories",permalink:"/develop/java/redis-and-spring-course/lesson_3"}},p={},d=[{value:"Objectives",id:"objectives",level:3},{value:"Agenda",id:"agenda",level:3},{value:"Introducing Spring Data Redis",id:"introducing-spring-data-redis",level:3},{value:"Redis template",id:"redis-template",level:3},{value:"Using the redis template",id:"using-the-redis-template",level:3}],c={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(i.Z,{frontMatter:o,mdxType:"Authors"}),(0,a.kt)("h3",{id:"objectives"},"Objectives"),(0,a.kt)("p",null,"Configure a RedisTemplate and learn how to access different operation bundles to read and write data to and from Redis in a Spring REST controller."),(0,a.kt)("h3",{id:"agenda"},"Agenda"),(0,a.kt)("p",null,"In this lesson, students will learn:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"How to configure the connection to Redis from the application"),(0,a.kt)("li",{parentName:"ul"},"How to access and configure the Spring Data RedisTemplate"),(0,a.kt)("li",{parentName:"ul"},"How to use opsForXXX to read and write data to Redis"),(0,a.kt)("li",{parentName:"ul"},"The basis of Spring\u2019s @RestController")),(0,a.kt)("p",null,"If you get stuck:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The progress made in this lesson is available on the redi2read github repository at ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/redis-developer/redi2read/tree/course/milestone-2"},"https://github.com/redis-developer/redi2read/tree/course/milestone-2"))),(0,a.kt)("h3",{id:"introducing-spring-data-redis"},"Introducing Spring Data Redis"),(0,a.kt)("p",null,"Spring Data Redis provides the abstractions of the Spring Data platform to Redis."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Spring Data")," makes it easy to use data access technologies, relational and non-relational databases, map-reduce frameworks, and cloud-based data services.\nTo learn more about Spring Data, see ",(0,a.kt)("a",{parentName:"li",href:"https://spring.io/projects/spring-data"},"https://spring.io/projects/spring-data"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Spring Data Redis")," provides access to Redis from Spring applications. It offers both low-level and high-level abstractions for interacting with Redis.")),(0,a.kt)("h3",{id:"redis-template"},"Redis template"),(0,a.kt)("p",null,"We will start by configuring a RedisTemplate, a class that provides a thread-safe bridge between Spring and Redis Commands. It handles connection management, freeing the developer from opening and closing Redis connections."),(0,a.kt)("p",null,"Start from the main application class, ",(0,a.kt)("inlineCode",{parentName:"p"},"Redi2readApplication"),", located at ",(0,a.kt)("inlineCode",{parentName:"p"},"src/main/java/com/redislabs/edu/redi2read/Redi2readApplication.java"),"."),(0,a.kt)("p",null,"Add a ",(0,a.kt)("inlineCode",{parentName:"p"},"@Bean")," annotated method called redisTemplate, which takes a ",(0,a.kt)("inlineCode",{parentName:"p"},"RedisConnectionFactory")," and returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"RedisTemplate"),". This method will provide a configured bean of type ",(0,a.kt)("inlineCode",{parentName:"p"},"RedisTemplate")," in the Spring container. We can inject this bean wherever we need to access Redis."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"@Bean\npublic RedisTemplate<?, ?> redisTemplate(RedisConnectionFactory connectionFactory) {\n  RedisTemplate<?, ?> template = new RedisTemplate<>();\n  template.setConnectionFactory(connectionFactory);\n\n  return template;\n}\n")),(0,a.kt)("p",null,"This requires the following imports:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"import org.springframework.context.annotation.Bean;\nimport org.springframework.data.redis.connection.RedisConnectionFactory;\nimport org.springframework.data.redis.core.RedisTemplate;\n")),(0,a.kt)("p",null,"Notice that while the template types are generic, it is up to the serializers/deserializers to convert the given Objects to-and-from binary data correctly."),(0,a.kt)("p",null,"We could also configure the Redis host and port programmatically by defining a ",(0,a.kt)("inlineCode",{parentName:"p"},"@Bean")," annotated method that returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"RedisConnectionFactory")," (either a ",(0,a.kt)("inlineCode",{parentName:"p"},"JedisConnectionFactory")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"LettuceConnectionFactory"),") and use the ",(0,a.kt)("inlineCode",{parentName:"p"},"setHostName")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"setPort")," methods."),(0,a.kt)("p",null,"But since Spring Data Redis can configure the beans using a properties file (either Java Properties or YAML), we will use the ",(0,a.kt)("inlineCode",{parentName:"p"},"applications.properties")," file instead."),(0,a.kt)("p",null,"Spring Data Redis properties are prefixed with ",(0,a.kt)("inlineCode",{parentName:"p"},"spring.redis."),". In the file ",(0,a.kt)("inlineCode",{parentName:"p"},"src/main/resources/application.properties")," add the following properties:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"spring.redis.host=localhost\nspring.redis.port=6379\n")),(0,a.kt)("p",null,"While we're at it, let\u2019s also add an exclusion for the autoconfiguration of Spring Security. Since we\u2019ve included the Maven dependency for Spring Security but have not yet configured it, Spring defaults on the safe side and protects all endpoints on the application. So, for now, we\u2019ll disable security autoconfiguration until we decide to secure our services."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"spring.redis.host=localhost\nspring.redis.port=6379\nspring.autoconfigure.exclude=org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration\n")),(0,a.kt)("h3",{id:"using-the-redis-template"},"Using the redis template"),(0,a.kt)("p",null,"To test the RedisTemplate, we\u2019ll create a REST controller and use it to perform some operations against our Redis instance."),(0,a.kt)("p",null,"We will add the controller under the src/main/java/com/redislabs/edu/redi2read/controllers folder, which means it\u2019ll live in the com.redislabs.edu.redi2read.controllers package."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"package com.redislabs.edu.redi2read.controllers;\n\npublic class HelloRedisController {\n\n}\n")),(0,a.kt)("p",null,"Next, let\u2019s annotate the class with the ",(0,a.kt)("inlineCode",{parentName:"p"},"@RestController")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"@RequestMapping")," annotations. The controller will now listen to requests rooted at http://localhost:8080/api/redis."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'@RestController\n@RequestMapping("/api/redis")\npublic class HelloRedisController {\n\n}\n')),(0,a.kt)("p",null,"Add the necessary import as shown next:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"import org.springframework.web.bind.annotation.RequestMapping;\nimport org.springframework.web.bind.annotation.RestController;\n")),(0,a.kt)("p",null,"Next, let\u2019s inject an ",(0,a.kt)("inlineCode",{parentName:"p"},"@Autowired")," instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"RedisTemplate"),". Notice that we will use concrete classes for the ",(0,a.kt)("inlineCode",{parentName:"p"},"K")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"V")," parameter classes in ",(0,a.kt)("inlineCode",{parentName:"p"},"RedisTemplate<K,V>"),". ",(0,a.kt)("inlineCode",{parentName:"p"},"K")," is the Redis key type (usually a ",(0,a.kt)("inlineCode",{parentName:"p"},"String"),") and ",(0,a.kt)("inlineCode",{parentName:"p"},"V"),", the Redis value type (i.e., something that maps to a Redis data structure)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'@RestController\n@RequestMapping("/api/redis")\npublic class HelloRedisController {\n\n  @Autowired\n  private RedisTemplate<String, String> template;\n}\n')),(0,a.kt)("p",null,"Add the necessary import as shown next:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"import org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.data.redis.core.RedisTemplate;\n")),(0,a.kt)("p",null,"Now, all we need is a controller method to run some Redis commands. We will use the Redis SET command (",(0,a.kt)("a",{parentName:"p",href:"https://redis.io/commands/set"},"https://redis.io/commands/set"),") as we previously demonstrated using the Redis CLI."),(0,a.kt)("p",null,"First, we\u2019ll create a String that will serve to prefix the keys that we write to Redis:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'private static final String STRING_KEY_PREFIX = "redi2read:strings:";\n')),(0,a.kt)("p",null,"The method is annotated with the ",(0,a.kt)("inlineCode",{parentName:"p"},"@PostMapping")," with a path of ",(0,a.kt)("inlineCode",{parentName:"p"},"/strings"),", making the effective path for our post ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/redis/strings"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"@Request")," body and the return value of the method is a ",(0,a.kt)("inlineCode",{parentName:"p"},"Map.Entry<String, String>")," which is convenient when dealing with name-value pairs."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'@PostMapping("/strings")\n@ResponseStatus(HttpStatus.CREATED)\npublic Map.Entry<String, String> setString(@RequestBody Map.Entry<String, String> kvp) {\n  return kvp;\n}\n')),(0,a.kt)("p",null,"Add the necessary import as shown next:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"import org.springframework.web.bind.annotation.PostMapping;\nimport org.springframework.web.bind.annotation.ResponseStatus;\n")),(0,a.kt)("p",null,"If we launch the application now with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./mvnw clean spring-boot:run\n")),(0,a.kt)("p",null,"We can use curl to invoke our ",(0,a.kt)("inlineCode",{parentName:"p"},"api/redis/strings")," endpoint:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'$ curl --location --request POST \'http://localhost:8080/api/redis/strings\' \\\n  --header \'Content-Type: application/json\' \\\n  --data-raw \'{ "database:redis:creator": "Salvatore Sanfilippo" }\'\n{"database:redis:creator":"Salvatore Sanfilippo"}\n')),(0,a.kt)("p",null,"This results in the JSON payload being echoed back. Let's complete the implementation of the setString method so that we can write a Redis string to the database:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'@PostMapping("/strings")\n@ResponseStatus(HttpStatus.CREATED)\npublic Map.Entry<String, String> setString(@RequestBody Map.Entry<String, String> kvp) {\n  template.opsForValue().set(STRING_KEY_PREFIX + kvp.getKey(), kvp.getValue());\n\n  return kvp;\n}\n')),(0,a.kt)("p",null,"We will use the ",(0,a.kt)("inlineCode",{parentName:"p"},"RedisTemplate "),"instance template ",(0,a.kt)("inlineCode",{parentName:"p"},"opsForValue()")," method to get an instance of ",(0,a.kt)("inlineCode",{parentName:"p"},"ValueOperations"),", which provides methods to execute operations performed on simple values (or ",(0,a.kt)("inlineCode",{parentName:"p"},"Strings")," in Redis terminology).\nThe Redis SET method is implemented using the (you guessed it!) ",(0,a.kt)("inlineCode",{parentName:"p"},"set()")," method, which takes a key name and a value. We are prepending the KEY_SPACE_PREFIX to the key that's provided as an argument.\nBefore you fire up another curl request, let\u2019s start a Redis CLI instance with the MONITOR flag so that we can watch what transpires when we hit the server."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ redis-cli MONITOR\n")),(0,a.kt)("p",null,"Now, when you issue the POST request again, you should see output similar to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'1617346602.221390 [0 172.19.0.1:58396] "SET" "redi2read:strings:database:redis:creator" "Salvatore Sanfilippo"\n')),(0,a.kt)("p",null,"We can launch another Redis CLI to query Redis ourselves:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'127.0.0.1:6379> KEYS *\n1) "redi2read:strings:database:redis:creator"\n127.0.0.1:6379> TYPE "redi2read:strings:database:redis:creator"\nstring\n127.0.0.1:6379> GET "redi2read:strings:database:redis:creator"\n"Salvatore Sanfilippo"\n127.0.0.1:6379>\n')),(0,a.kt)("p",null,"If we use the KEYS ","*"," command, we can see all of the keys stored in Redis (don\u2019t do this on a production box with a lot of data,\nas you\u2019ll block your Redis instance while serving a massive response).\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"redi2read:strings:database:redis:creator")," key has been created, and it is a Redis String with a value of ",(0,a.kt)("inlineCode",{parentName:"p"},"Salvatore Sanfilipo"),"\nWe can now write strings to Redis through our REST controller.\nNext, let\u2019s add a corresponding GET method to our controller to read string values:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'@GetMapping("/strings/{key}")\npublic Map.Entry<String, String> getString(@PathVariable("key") String key) {\n  String value = template.opsForValue().get(STRING_KEY_PREFIX + key);\n\n  if (value == null) {\n    throw new ResponseStatusException(HttpStatus.NOT_FOUND, "key not found");\n  }\n\n  return new SimpleEntry<String, String>(key, value);\n}\n')),(0,a.kt)("p",null,"With imports:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"import java.util.AbstractMap.SimpleEntry;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.PathVariable;\nimport org.springframework.web.server.ResponseStatusException;\n")),(0,a.kt)("p",null,"We can now issue a GET request to retrieve String keys:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'$ curl --location --request GET \'http://localhost:8080/api/redis/strings/database:redis:creator\'\n{"database:redis:creator":"Salvatore Sanfilippo"}\n')),(0,a.kt)("p",null,"On the Redis CLI monitor you should see:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'1617347871.901585 [0 172.19.0.1:58284] "GET" "redi2read:strings:database:redis:creator"\n')),(0,a.kt)("p",null,"Note that in order to return an error on a key not found, we have to check the result for null and throw an appropriate exception."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n  "timestamp": "2021-04-02T07:45:10.303+00:00",\n  "status": 404,\n  "error": "Not Found",\n  "trace": "org.springframework.web.server.ResponseStatusException: 404...\\n",\n  "message": "key not found",\n  "path": "/api/redis/strings/database:neo4j:creator"\n}\n')),(0,a.kt)("p",null,"Keep in mind that this is a \u201cdevelopment time\u201d exception, appropriate to be shown on an error page meant for developers.\nLikely, we would intercept this exception and create an API appropriate response (likely just the status and error fields above)."))}u.isMDXComponent=!0}}]);
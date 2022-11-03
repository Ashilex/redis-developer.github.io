"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[6754],{3905:(e,a,n)=>{n.d(a,{Zo:()=>p,kt:()=>c});var t=n(67294);function r(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function o(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?o(Object(n),!0).forEach((function(a){r(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,t,r=function(e,a){if(null==e)return{};var n,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(r[n]=e[n]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=t.createContext({}),d=function(e){var a=t.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},p=function(e){var a=d(e.components);return t.createElement(l.Provider,{value:a},e.children)},h={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),c=r,m=u["".concat(l,".").concat(c)]||u[c]||h[c]||o;return n?t.createElement(m,i(i({ref:a},p),{},{components:n})):t.createElement(m,i({ref:a},p))}));function c(e,a){var n=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},50358:(e,a,n)=>{n.d(a,{Z:()=>l});var t=n(67294),r=n(52263);const o="authorByline_VoxI",i="authorLabel_a70t",s="authorProfileImage_URwT";const l=function(e){let{frontMatter:a}=e;const{siteConfig:n}=(0,r.Z)(),l=n.customFields.authors;return t.createElement(t.Fragment,null,a.authors&&t.createElement("div",{className:"docAuthors"},t.createElement("hr",null),a.authors.map((e=>t.createElement("div",{key:e,className:o},t.createElement("img",{className:s,src:`/img/${l[e].image?l[e].image:"default_author_profile_pic.png"}`,alt:`Profile picture for ${l[e].name}`}),t.createElement("div",null,t.createElement("div",{className:i},"Author:"),t.createElement("div",null,t.createElement("a",{href:l[e].link,target:"_blank"},l[e].name),", ",l[e].title))))),t.createElement("hr",null)))}},97535:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var t=n(87462),r=(n(67294),n(3905)),o=n(50358);const i={id:"index-lesson_8",title:"Recommendations with RedisGraph",sidebar_label:"Recommendations w/ RedisGraph",slug:"/develop/java/redis-and-spring-course/lesson_8",authors:["bsb"]},s=void 0,l={unversionedId:"develop/java/spring/redis-and-spring-course/lesson_8/index-lesson_8",id:"develop/java/spring/redis-and-spring-course/lesson_8/index-lesson_8",title:"Recommendations with RedisGraph",description:"Objectives",source:"@site/docs/develop/java/spring/redis-and-spring-course/lesson_8/index-lesson_8.mdx",sourceDirName:"develop/java/spring/redis-and-spring-course/lesson_8",slug:"/develop/java/redis-and-spring-course/lesson_8",permalink:"/develop/java/redis-and-spring-course/lesson_8",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/develop/java/spring/redis-and-spring-course/lesson_8/index-lesson_8.mdx",tags:[],version:"current",lastUpdatedAt:1667498159,formattedLastUpdatedAt:"Nov 3, 2022",frontMatter:{id:"index-lesson_8",title:"Recommendations with RedisGraph",sidebar_label:"Recommendations w/ RedisGraph",slug:"/develop/java/redis-and-spring-course/lesson_8",authors:["bsb"]},sidebar:"docs",previous:{title:"Search w/ RediSearch",permalink:"/develop/java/redis-and-spring-course/lesson_7"},next:{title:"Caching w/ Redis",permalink:"/develop/java/redis-and-spring-course/lesson_9"}},d={},p=[{value:"Objectives",id:"objectives",level:3},{value:"Agenda",id:"agenda",level:3},{value:"Graphs",id:"graphs",level:3},{value:"Redis Graph",id:"redis-graph",level:3},{value:"Nodes",id:"nodes",level:3},{value:"RedisInsight: A Visual Management Tool for Redis",id:"redisinsight-a-visual-management-tool-for-redis",level:3},{value:"A warm-up with Cypher",id:"a-warm-up-with-cypher",level:3},{value:"Using Redis Graph in Java",id:"using-redis-graph-in-java",level:3},{value:"CommandLineRunner",id:"commandlinerunner",level:4},{value:"Creating the Recommendations Service",id:"creating-the-recommendations-service",level:3},{value:"The Recommendations Controller",id:"the-recommendations-controller",level:3}],h={toc:p};function u(e){let{components:a,...s}=e;return(0,r.kt)("wrapper",(0,t.Z)({},h,s,{components:a,mdxType:"MDXLayout"}),(0,r.kt)(o.Z,{frontMatter:i,mdxType:"Authors"}),(0,r.kt)("h3",{id:"objectives"},"Objectives"),(0,r.kt)("p",null,"Build a simple but powerful graph-based recommendation engine in the Redi2Read application."),(0,r.kt)("h3",{id:"agenda"},"Agenda"),(0,r.kt)("p",null,"In this lesson, students will learn:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"How to use RedisGraph in a Spring Boot application to construct a Graph from model data using the JRedisGraph client library."),(0,r.kt)("li",{parentName:"ul"},"How to query data using the Cypher query language.\nIf you get stuck:"),(0,r.kt)("li",{parentName:"ul"},"The progress made in this lesson is available on the redi2read github repository at ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/redis-developer/redi2read/tree/course/milestone-8"},"https://github.com/redis-developer/redi2read/tree/course/milestone-8"))),(0,r.kt)("h3",{id:"graphs"},"Graphs"),(0,r.kt)("p",null,"Graph databases are composed of nodes and relationships. These databases excel at managing highly connected data.\nNodes represent entities (party, place, thing, category, moment-in-time) related to other entities.\nRelationships connect nodes. They represent an association between nodes that are important to your domain."),(0,r.kt)("h3",{id:"redis-graph"},"Redis Graph"),(0,r.kt)("p",null,"Redis Graph is a low-latency graph database based on the property graph model built as a Redis module.\nLike all graphs, a property graph has nodes and relationships. However, it adds extra expressiveness by providing:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Nodes: Graph data entities"),(0,r.kt)("li",{parentName:"ul"},"Relationships: Connect nodes (has direction and a type)"),(0,r.kt)("li",{parentName:"ul"},"Properties: Stores data in key-value pairs in nodes and relationships"),(0,r.kt)("li",{parentName:"ul"},"Labels: Groups nodes and relationships (optional)")),(0,r.kt)("p",null,"Redis Graph meets the two most essential requirements of a graph database:\nNative Graph Storage: Uses a Redis-native optimized graph data structure (sparse adjacency matrices).\nNative Graph Processing: Index-free adjacency and linear algebra to query the graph.\nIt supports a large subset of the Cypher Query Language, an open standard supported by several graph databases, the Cypher Graph Query Language.\nThe Cypher Query Language is a SQL-inspired pattern-matching language with an easy to grasp visual aspect due to its use of ASCII-Art to easily visual graph relationships in text. The specification is becoming an industry standard among graph database vendors (see openCypher)."),(0,r.kt)("h3",{id:"nodes"},"Nodes"),(0,r.kt)("p",null,"Nodes are enclosed by parenthesis. For example:\n",(0,r.kt)("inlineCode",{parentName:"p"},"()")),(0,r.kt)("p",null,"It is the simplest of nodes; an anonymous node (with no label or variable), as a pattern-matching entity, it will match any node in the database.\n",(0,r.kt)("inlineCode",{parentName:"p"},"(:Actor)")),(0,r.kt)("p",null,"Represents a node under the label \u201cActor\u201d; you can think of it as the node\u2019s class.\n",(0,r.kt)("inlineCode",{parentName:"p"},"(a:Actor)")),(0,r.kt)("p",null,"In this example, \u201ca\u201d is an alias for the node. Think of it as a variable that you can use in a query, just like in SQL.\n",(0,r.kt)("inlineCode",{parentName:"p"},"(a:Actor {name:'Kathryn Hahn'})")),(0,r.kt)("p",null,"The JSON-looking object in curly brackets is a node property. The properties are attached to the node upon creation. When used in a query, they serve as pattern matching.\nRelationships\nRelationships are represented by arrows (--\x3e or <--) between two nodes. The type of relationship is enclosed in squared brackets.\n",(0,r.kt)("inlineCode",{parentName:"p"},"(a:Actor {name:'Kathryn Hahn'})-[:ACTS]->(s:Show {name:'WandaVision'})")),(0,r.kt)("p",null,"The above snippet could be used to create the relationship if used with the GRAPH.CREATE method, for example. If the nodes did not exist, they would be created, or if they existed, it would just use the node properties to pattern match."),(0,r.kt)("h3",{id:"redisinsight-a-visual-management-tool-for-redis"},"RedisInsight: A Visual Management Tool for Redis"),(0,r.kt)("p",null,"Until now, we have been using the Redis CLI, curl, and the output of our Java programs to interact with Redis."),(0,r.kt)("p",null,"If there is one place where we can use visualization is with graph data. RedisInsight is a free product from Redis that provides an intuitive graphical user interface for managing Redis databases.\nRedisInsight also supports some popular Redis modules, and we'll use it in this lesson to visualize our graphs.\nIf you want to get the best possible understanding of the materials in this chapter, please download and install RedisInsight."),(0,r.kt)("h3",{id:"a-warm-up-with-cypher"},"A warm-up with Cypher"),(0,r.kt)("p",null,"Try in the Redis CLI\nOk, enough theory, let\u2019s fire up the Redis CLI and try some graph making and querying (and later visualizing in RedisInsight).\nLet\u2019s create a standalone node for an Actor:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'127.0.0.1:6379> GRAPH.QUERY imdb-grf "CREATE (:Actor {name: \'Kathryn Hahn\', nick: \'ka\'})"\n1) 1) "Labels added: 1"\n   2) "Nodes created: 1"\n   3) "Properties set: 2"\n\nAnd a standalone node for a TV show:\n127.0.0.1:6379> GRAPH.QUERY imdb-grf "CREATE (:Show {name: \'WandaVision\', nick: \'wv\'})"\n1) 1) "Labels added: 1"\n   2) "Nodes created: 1"\n   3) "Properties set: 2"\n')),(0,r.kt)("p",null,"Now let\u2019s join them with a relationship of type ",(0,r.kt)("inlineCode",{parentName:"p"},":ACTS"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"127.0.0.1:6379> GRAPH.QUERY imdb-grf \"MATCH (a:Actor {nick: 'ka'}), (s:Show {nick: 'wv'}) CREATE (a)-[:ACTS]->(s)\"\n1) 1) \"Relationships created: 1\"\n")),(0,r.kt)("p",null,"The MATCH keyword indicates a pattern matching operation. You can have multiple patterns in a command separated list in a single MATCH or multiple MATCH lines. Variables are used to \u201cjoin\u201d multiple patterns.\nNotice that the Redis Graph Cypher command starts with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"GRAPH.QUERY key-of-the-graph cypher-query\n")),(0,r.kt)("p",null,"First, let\u2019s see what are the unique labels (classes) in the graph:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'127.0.0.1:6379> GRAPH.QUERY "imdb-grf" "match (n) return distinct labels(n)"\n1) 1) "labels(n)"\n2) 1) 1) "Actor"\n   2) 1) "Show"\n   3) 1) "Movie"\n')),(0,r.kt)("p",null,"In RedisInsight:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"RedisInsight",src:n(42911).Z,width:"1999",height:"621"})),(0,r.kt)("p",null,"As expected, the unique labels are \u201cActor,\u201d \u201cMovie,\u201d and \u201cShow.\u201d\nNow, execute the commands below, and then we can ask some questions of the data using Cypher:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"GRAPH.QUERY imdb-grf \"CREATE (:Actor {name: 'Paul Bettany', nick: 'pb'})\"\nGRAPH.QUERY imdb-grf \"CREATE (:Actor {name: 'Paul Rudd', nick: 'pr'})\"\n\nGRAPH.QUERY imdb-grf \"CREATE (:Show {name: 'The Shrink Next Door', nick: 'tsnd'})\"\nGRAPH.QUERY imdb-grf \"CREATE (:Movie {name: 'Iron Man', nick: 'im'})\"\nGRAPH.QUERY imdb-grf \"CREATE (:Movie {name: 'Our Idiot Brother', nick: 'oib'})\"\nGRAPH.QUERY imdb-grf \"CREATE (:Movie {name: 'Captain America: Civil War', nick: 'cacw'})\"\n\nGRAPH.QUERY imdb-grf \"MATCH (a:Actor {nick: 'pb'}), (s:Show {nick: 'wv'}) CREATE (a)-[:ACTS]->(s)\"\nGRAPH.QUERY imdb-grf \"MATCH (a:Actor {nick: 'pb'}), (m:Movie {nick: 'im'}) CREATE (a)-[:ACTS]->(m)\"\nGRAPH.QUERY imdb-grf \"MATCH (a:Actor {nick: 'ka'}), (m:Movie {nick: 'oib'}) CREATE (a)-[:ACTS]->(m)\"\nGRAPH.QUERY imdb-grf \"MATCH (a:Actor {nick: 'pr'}), (m:Movie {nick: 'oib'}) CREATE (a)-[:ACTS]->(m)\"\nGRAPH.QUERY imdb-grf \"MATCH (a:Actor {nick: 'pr'}), (m:Movie {nick: 'cacw'}) CREATE (a)-[:ACTS]->(m)\"\nGRAPH.QUERY imdb-grf \"MATCH (a:Actor {nick: 'pr'}), (s:Show {nick: 'tsnd'}) CREATE (a)-[:ACTS]->(s)\"\nGRAPH.QUERY imdb-grf \"MATCH (a:Actor {nick: 'ka'}), (s:Show {nick: 'tsnd'}) CREATE (a)-[:ACTS]->(s)\"\n")),(0,r.kt)("p",null,"What are the relationships in our graph?"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'127.0.0.1:6379> GRAPH.QUERY "imdb-grf" "MATCH ()-[e]->() RETURN distinct type(e)"\n1) 1) "type(e)"\n2) 1) 1) "ACTS"\n')),(0,r.kt)("p",null,"Count the labels in the graph:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'127.0.0.1:6379> GRAPH.QUERY "imdb-grf" "MATCH (n) RETURN distinct labels(n), count(n)"\n1) 1) "labels(n)"\n   2) "count(n)"\n2) 1) 1) "Actor"\n      2) (integer) 3\n   2) 1) "Movie"\n      2) (integer) 3\n   3) 1) "Show"\n      2) (integer) 2\n')),(0,r.kt)("p",null,"Return the name of all actors that acted in \u2018The Shrink Next Door\u2019:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'127.0.0.1:6379> GRAPH.QUERY imdb-grf "MATCH (a:Actor)-[:ACTS]->(:Show {name:\'The Shrink Next Door\'}) RETURN a.name"\n1) 1) "a.name"\n2) 1) 1) "Kathryn Hahn"\n   2) 1) "Paul Rudd"\n')),(0,r.kt)("p",null,"Find any two actors that worked together in a movie:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'127.0.0.1:6379> GRAPH.QUERY "imdb-grf" "MATCH                  (a1:Actor)-[:ACTS]->(m:Movie)<-[:ACTS]-(a2:Actor)\nWHERE a1 <> a2 AND id(a1) > id(a2)\nRETURN m.name, a1.name, a2.name"\n1) 1) "m.name"\n   2) "a1.name"\n   3) "a2.name"\n2) 1) 1) "Our Idiot Brother"\n      2) "Paul Rudd"\n      3) "Kathryn Hahn"\n')),(0,r.kt)("p",null,"That last query gives us a glimpse into the power of the Cypher Query Language. We can graphically draw the connections between the two actors, remove any duplicated (the permutations problem) by making sure we don\u2019t match on the same node (Paul Rudd and Paul Rudd) and variations of the same pair (Paul Rudd and Kathryn Hahn vs. Kathryn Hahn and Paul Rudd) by ordering the pair using the id function.\nCreating the Redi2Read Graph\nNow that we have a cursory understanding of Redis Graph and the Cypher Query Language, let\u2019s build the graph that will power our recommendations in Redi2Read.\nWe will create a graph containing the following relationships:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Author -> AUTHORED -> Book\nBook -> IN -> Category\nUser -> RATED -> Book\nUser -> PURCHASED -> Book\n")),(0,r.kt)("h3",{id:"using-redis-graph-in-java"},"Using Redis Graph in Java"),(0,r.kt)("p",null,"To create and query graphs in Redi2Read we will use the JRedisGraph client library for Redis Graph (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/RedisGraph/JRedisGraph"},"https://github.com/RedisGraph/JRedisGraph"),") built on top of the popular Jedis client library (",(0,r.kt)("a",{parentName:"p",href:"https://github.com/redis/jedis"},"https://github.com/redis/jedis"),")\nAdding the JRedisGraph dependency\nIn your Maven pom.xml, add the following dependency:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n  <groupId>com.redislabs</groupId>\n  <artifactId>jredisgraph</artifactId>\n  <version>2.3.0</version>\n</dependency>\n")),(0,r.kt)("h4",{id:"commandlinerunner"},"CommandLineRunner"),(0,r.kt)("p",null,"To create our graph we\u2019ll use the now familiar CommandLineRunner recipe. We will keep the name of the created graph in the applications property field as shown:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"app.graphId=redi2read-grf\n")),(0,r.kt)("p",null,"Next, create the src/main/java/com/redislabs/edu/redi2read/boot/CreateGraph.java file and add the contents as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'package com.redislabs.edu.redi2read.boot;\n\nimport java.util.HashSet;\nimport java.util.Set;\n\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.beans.factory.annotation.Value;\nimport org.springframework.boot.CommandLineRunner;\nimport org.springframework.core.annotation.Order;\nimport org.springframework.data.redis.core.RedisTemplate;\nimport org.springframework.stereotype.Component;\n\nimport com.redislabs.edu.redi2read.repositories.BookRatingRepository;\nimport com.redislabs.edu.redi2read.repositories.BookRepository;\nimport com.redislabs.edu.redi2read.repositories.CategoryRepository;\nimport com.redislabs.edu.redi2read.repositories.UserRepository;\nimport com.redislabs.redisgraph.impl.api.RedisGraph;\n\nimport lombok.extern.slf4j.Slf4j;\n\n@Component\n@Order(8)\n@Slf4j\npublic class CreateGraph implements CommandLineRunner {\n\n  @Autowired\n  private RedisTemplate<String, String> redisTemplate;\n\n  @Autowired\n  private UserRepository userRepository;\n\n  @Autowired\n  private BookRepository bookRepository;\n\n  @Autowired\n  private BookRatingRepository bookRatingRepository;\n\n  @Autowired\n  private CategoryRepository categoryRepository;\n\n  @Value("${app.graphId}")\n  private String graphId;\n\n  @Override\n  public void run(String... args) throws Exception {\n    if (!redisTemplate.hasKey(graphId)) {\n      try (RedisGraph graph = new RedisGraph()) {\n        // create an index for Books on id\n        graph.query(graphId, "CREATE INDEX ON :Book(id)");\n        graph.query(graphId, "CREATE INDEX ON :Category(id)");\n        graph.query(graphId, "CREATE INDEX ON :Author(name)");\n        graph.query(graphId, "CREATE INDEX ON :User(id)");\n\n        Set<String> authors = new HashSet<String>();\n\n        // for each category create a graph node\n        categoryRepository.findAll().forEach(c -> {\n          graph.query(graphId, String.format("CREATE (:Category {id: \\"%s\\", name: \\"%s\\"})", c.getId(), c.getName()));\n        });\n\n        // for each book create a graph node\n        bookRepository.findAll().forEach(b -> {\n          graph.query(graphId, String.format("CREATE (:Book {id: \\"%s\\", title: \\"%s\\"})", b.getId(), b.getTitle()));\n          // for each author create an AUTHORED relationship to the book\n          if (b.getAuthors() != null) {\n            b.getAuthors().forEach(a -> {\n              if (!authors.contains(a)) {\n                graph.query(graphId, String.format("CREATE (:Author {name: \\"%s\\"})", a));\n                authors.add(a);\n              }\n              graph.query(graphId, String.format(\n                  "MATCH (a:Author {name: \\"%s\\"}), (b:Book {id: \\"%s\\"}) CREATE (a)-[:AUTHORED]->(b)", a, b.getId()));\n            });\n\n            b.getCategories().forEach(c -> {\n              graph.query(graphId,\n                  String.format("MATCH (b:Book {id: \\"%s\\"}), (c:Category {id: \\"%s\\"}) CREATE (b)-[:IN]->(c)",\n                      b.getId(), c.getId()));\n            });\n          }\n        });\n\n        // for each user create a graph node\n        userRepository.findAll().forEach(u -> {\n          graph.query(graphId, String.format("CREATE (:User {id: \\"%s\\", name: \\"%s\\"})", u.getId(), u.getName()));\n\n          // for each of the user\'s book create a purchased relationship\n          u.getBooks().forEach(book -> {\n            graph.query(graphId,\n                String.format("MATCH (u:User {id: \\"%s\\"}), (b:Book {id: \\"%s\\"}) CREATE (u)-[:PURCHASED]->(b)",\n                    u.getId(), book.getId()));\n          });\n        });\n\n        // for each book rating create a rated relationship\n        bookRatingRepository.findAll().forEach(br -> {\n          graph.query(graphId,\n              String.format("MATCH (u:User {id: \\"%s\\"}), (b:Book {id: \\"%s\\"}) CREATE (u)-[:RATED {rating: %s}]->(b)",\n                  br.getUser().getId(), br.getBook().getId(), br.getRating()));\n        });\n      }\n\n      log.info(">>>> Created graph...");\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Let\u2019s break down the graph creation:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We inject the needed repositories for users, books, book rating and categories"),(0,r.kt)("li",{parentName:"ul"},"We check if the key for the graph does not exist to prevent recreating the graph on restarts"),(0,r.kt)("li",{parentName:"ul"},"We create 4 single property indexes for the Book id, Category id, Author name and User id. RedisGraph supports indexes for node labels. Indexes are automatically used by queries that reference any indexed properties.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For each book category we create a node"),(0,r.kt)("li",{parentName:"ul"},"For each book we create a node"),(0,r.kt)("li",{parentName:"ul"},"For each author we create a node"),(0,r.kt)("li",{parentName:"ul"},"For each book author we created a AUTHORED relationship between the author and the book"),(0,r.kt)("li",{parentName:"ul"},"For each book we created an IN relationship with the category"),(0,r.kt)("li",{parentName:"ul"},"For each user we create a node"),(0,r.kt)("li",{parentName:"ul"},"For each book owned by a user we create a PURCHASED relationship"),(0,r.kt)("li",{parentName:"ul"},"For each book rating we create a RATED relationship between the user and the book")))),(0,r.kt)("h3",{id:"creating-the-recommendations-service"},"Creating the Recommendations Service"),(0,r.kt)("p",null,"As we did in the Search Lesson, we are going to use a Service abstraction to encapsulate the complexity of the recommendations engine.\nLet\u2019s start with the skeleton of the recommendation service. Create the src/main/java/com/redislabs/edu/redi2read/services/RecommendationService.java file and add the contents as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'package com.redislabs.edu.redi2read.services;\n\nimport java.util.HashSet;\nimport java.util.Set;\n\nimport com.redislabs.redisgraph.Record;\nimport com.redislabs.redisgraph.ResultSet;\nimport com.redislabs.redisgraph.graph_entities.Node;\nimport com.redislabs.redisgraph.impl.api.RedisGraph;\n\nimport org.springframework.beans.factory.annotation.Value;\nimport org.springframework.stereotype.Service;\n\n@Service\npublic class RecommendationService {\n\n  @Value("${app.graphId}")\n  public String graphId;\n\n  RedisGraph graph = new RedisGraph();\n\n  // add magic here!\n}\n')),(0,r.kt)("p",null,"Getting Book Recommendations From Common Purchases\nOur first recommendation method will find recommendations by looking at purchases of other users that have bought some of the same books a user has in its bookshelf:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"MATCH (u:User { id: '8675309' })-[:PURCHASED]->(ob:Book)\nMATCH (ob)<-[:PURCHASED]-(:User)-[:PURCHASED]->(b:Book)\nWHERE NOT (u)-[:PURCHASED]->(b)\nRETURN distinct b, count(b) as frequency\nORDER BY frequency DESC\n")),(0,r.kt)("p",null,"Let\u2019s break down the Cypher query:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The anchor for the query is the User\u2019s id, in this case \u20188675309\u2019"),(0,r.kt)("li",{parentName:"ul"},"On the first MATCH we look for the given user purchases"),(0,r.kt)("li",{parentName:"ul"},"On the second MATCH we find other users that have purchase a book the user has purchased and also collect the other users books"),(0,r.kt)("li",{parentName:"ul"},"On WHERE clause we make sure that the user doesn\u2019t already own any of the recommended books"),(0,r.kt)("li",{parentName:"ul"},"ON the RETURN we make sure to remove duplicates and we count how often a book has been purchased"),(0,r.kt)("li",{parentName:"ul"},"Finally on the ORDER BY, we return the most purchased books first")),(0,r.kt)("p",null,"Running the query on RedisInsight we get graphical display in which we can navigate the relationships of the result set:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"RedisInsight Query Results Graph",src:n(43389).Z,width:"1972",height:"1190"})),(0,r.kt)("p",null,"There is also a tabular results view that reflect the values of the RETURN clause:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"RedisInsight Query Results Table",src:n(23080).Z,width:"1974",height:"1196"})),(0,r.kt)("p",null,"To implement the above query in the recommendations service we can escape the query string, and we simply pass the prepared query string to JRedisGraph\u2019s query method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public Set<String> getBookRecommendationsFromCommonPurchasesForUser(String userId) {\n  Set<String> recommendations = new HashSet<String>();\n\n  String query = "MATCH (u:User { id: \'%s\' })-[:PURCHASED]->(ob:Book) " //\n               + "MATCH (ob)<-[:PURCHASED]-(:User)-[:PURCHASED]->(b:Book) " //\n               + "WHERE NOT (u)-[:PURCHASED]->(b) " //\n               + "RETURN distinct b, count(b) as frequency " //\n               + "ORDER BY frequency DESC";\n\n    ResultSet resultSet = graph.query(graphId, String.format(query, userId));\n\n    while (resultSet.hasNext()) {\n      Record record = resultSet.next();\n      Node book = record.getValue("b");\n      recommendations.add(book.getProperty("id").getValue().toString());\n    }\n\n    return recommendations;\n  }\n')),(0,r.kt)("p",null,"Similar to a JDBC result set, we have an iterator that returns Record objects. We extract the column of interest by its label, in the case above \u201cb\u201d for the Book entity. Graph Nodes like the \u201cbook\u201d variable above are like Maps, we can get a property by its name \u201cid\u201d and then get the value with getValue().\nBooks Frequently Bought Together\nTo find books that are frequently bought together give an ISBN we use the query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"MATCH (u:User)-[:PURCHASED]->(b1:Book {id: '%s'})\nMATCH (b1)<-[:PURCHASED]-(u)-[:PURCHASED]->(b2:Book)\nMATCH rated = (User)-[:RATED]-(b2) \" //\nWITH b1, b2, count(b2) as freq, head(relationships(rated)) as r\nWHERE b1 <> b2\nRETURN b2, freq, avg(r.rating)\nORDER BY freq, avg(r.rating) DESC\n")),(0,r.kt)("p",null,"Let's break it down:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The first MATCH find users that have the bought the target book"),(0,r.kt)("li",{parentName:"ul"},"The second MATCH finds other books purchased by those users"),(0,r.kt)("li",{parentName:"ul"},"The third MATCH find the ratings if any for those books"),(0,r.kt)("li",{parentName:"ul"},"The WITH clause groups the values gathered so far, counts number of purchases of the collected books and grab the metadata from the RATED notes"),(0,r.kt)("li",{parentName:"ul"},"The RETURN line returns the collected books, with the number of purchases and their average star rating")),(0,r.kt)("p",null,"To implement the above query in our service add the following method:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'  public Set<String> getFrequentlyBoughtTogether(String isbn) {\n    Set<String> recommendations = new HashSet<String>();\n\n    String query = "MATCH (u:User)-[:PURCHASED]->(b1:Book {id: \'%s\'}) " //\n        + "MATCH (b1)<-[:PURCHASED]-(u)-[:PURCHASED]->(b2:Book) " //\n        + "MATCH rated = (User)-[:RATED]-(b2) " //\n        + "WITH b1, b2, count(b2) as freq, head(relationships(rated)) as r " //\n        + "WHERE b1 <> b2 " //\n        + "RETURN b2, freq, avg(r.rating) " //\n        + "ORDER BY freq, avg(r.rating) DESC";\n\n    ResultSet resultSet = graph.query(graphId, String.format(query, isbn));\n    while (resultSet.hasNext()) {\n      Record record = resultSet.next();\n      Node book = record.getValue("b2");\n      recommendations.add(book.getProperty("id").getValue().toString());\n    }\n    return recommendations;\n  }\n')),(0,r.kt)("h3",{id:"the-recommendations-controller"},"The Recommendations Controller"),(0,r.kt)("p",null,"To serve our recommendations we will expose the recommendation service using the ",(0,r.kt)("inlineCode",{parentName:"p"},"RecommendationController"),".\nCreate the ",(0,r.kt)("inlineCode",{parentName:"p"},"src/main/java/com/redislabs/edu/redi2read/controllers/RecommendationController.java"),"\nfile and add the contents as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'package com.redislabs.edu.redi2read.controllers;\n\nimport java.util.Set;\n\nimport com.redislabs.edu.redi2read.services.RecommendationService;\n\nimport org.springframework.beans.factory.annotation.Autowired;\nimport org.springframework.web.bind.annotation.GetMapping;\nimport org.springframework.web.bind.annotation.PathVariable;\nimport org.springframework.web.bind.annotation.RequestMapping;\nimport org.springframework.web.bind.annotation.RestController;\n\n@RestController\n@RequestMapping("/api/recommendations")\npublic class RecommendationController {\n\n  @Autowired\n  private RecommendationService recommendationService;\n\n  @GetMapping("/user/{userId}")\n  public Set<String> userRecommendations(@PathVariable("userId") String userId) {\n    return recommendationService.getBookRecommendationsFromCommonPurchasesForUser(userId);\n  }\n\n  @GetMapping("/isbn/{isbn}/pairings")\n  public Set<String> frequentPairings(@PathVariable("isbn") String isbn) {\n    return recommendationService.getFrequentlyBoughtTogether(isbn);\n  }\n}\n')),(0,r.kt)("p",null,"You can invoke the recommendation service with a curl request like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request GET 'http://localhost:8080/api/recommendations/user/55214615117483454'\n")),(0,r.kt)("p",null,"or:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request GET 'http://localhost:8080/api/recommendations/isbn/1789610222/pairings'\n")))}u.isMDXComponent=!0},43389:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/redis-insight-query-graph-abb7d323e5eaf895bf74cba9710affe9.png"},23080:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/redis-insight-query-table-7c782e4b532a59ebeae26cb1eff5cb07.png"},42911:(e,a,n)=>{n.d(a,{Z:()=>t});const t=n.p+"assets/images/redis-insight-34e1d2647f2fdf3c20170d9447a6059c.png"}}]);
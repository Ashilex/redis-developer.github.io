(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{166:function(e,a,t){"use strict";var s=t(0),r=t.n(s),c=t(164),n=t(172);t(165),t(55);a.a=function(e){var a=r.a.useState(!1),t=a[0],s=a[1];return r.a.createElement("div",{className:"ri-container"},r.a.createElement("div",{className:"ri-description-short"},r.a.createElement("div",{className:"ri-icon"},r.a.createElement("span",{className:"fe fe-zap"})),r.a.createElement("div",{className:"ri-detail"},r.a.createElement("div",{className:"ri-title"},r.a.createElement("a",{href:e.page},e.title)),r.a.createElement("div",{className:"ri-description"},e.description,r.a.Children.count(e.children)>0&&r.a.createElement("span",{className:"ri-more fe fe-more-horizontal",onClick:function(){return s(!t)}})))),t&&r.a.createElement("div",{className:"ri-description-long"},r.a.createElement(c.a,{components:n.a},e.children)))}},167:function(e,a,t){"use strict";var s=t(0),r=t(169);a.a=function(){var e=Object(s.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},169:function(e,a,t){"use strict";var s=t(0),r=Object(s.createContext)(void 0);a.a=r},170:function(e,a,t){"use strict";var s=t(0),r=t.n(s),c=t(167),n=t(168),d=t(56),i=t.n(d),o=37,l=39;a.a=function(e){var a=e.lazy,t=e.block,d=e.defaultValue,u=e.values,b=e.groupId,p=e.className,m=Object(c.a)(),f=m.tabGroupChoices,h=m.setTabGroupChoices,g=Object(s.useState)(d),O=g[0],j=g[1],S=s.Children.toArray(e.children);if(null!=b){var v=f[b];null!=v&&v!==O&&u.some((function(e){return e.value===v}))&&j(v)}var R=function(e){j(e),null!=b&&h(b,e)},k=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(n.a)("tabs",{"tabs--block":t},p)},u.map((function(e){var a=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===a,className:Object(n.a)("tabs__item",i.a.tabItem,{"tabs__item--active":O===a}),key:a,ref:function(e){return k.push(e)},onKeyDown:function(e){!function(e,a,t){switch(t.keyCode){case l:!function(e,a){var t=e.indexOf(a)+1;e[t]?e[t].focus():e[0].focus()}(e,a);break;case o:!function(e,a){var t=e.indexOf(a)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,a)}}(k,e.target,e)},onFocus:function(){return R(a)},onClick:function(){R(a)}},t)}))),a?Object(s.cloneElement)(S.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},S.map((function(e,a){return Object(s.cloneElement)(e,{key:a,hidden:e.props.value!==O})}))))}},171:function(e,a,t){"use strict";var s=t(3),r=t(0),c=t.n(r);a.a=function(e){var a=e.children,t=e.hidden,r=e.className;return c.a.createElement("div",Object(s.a)({role:"tabpanel"},{hidden:t,className:r}),a)}},204:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/grafana-daa1bc6bc814c0518497ab7d72266124.png"},205:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/grafana_datasource-410ccdbd0e0fe15c88077fc3d214971e.png"},206:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/grafana_datasource2-12a726c9875cc3b9223f03a3a9058093.png"},207:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/grafana_datasource3-6e427694af670f03e164b95c34244ca4.png"},208:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/grafana_datasource4-e13494025dc69749a70d5d4fd1690b6e.png"},209:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/grafana_datasource5-25ec9e3ecf7e458baf204761ae31d104.png"},210:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/grafana_datasource7-7017aed615ea5fc3773d8686d152bd83.png"},299:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/redis-080746df0190688654cd8b2b3e740853.png"},89:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return o})),t.d(a,"toc",(function(){return l})),t.d(a,"default",(function(){return b}));var s=t(3),r=t(7),c=(t(0),t(164)),n=t(170),d=t(171),i=(t(165),t(166),{id:"index-redisdatasource",title:"Redis DataSource for Grafana",sidebar_label:"Redis Data Source for Grafana",slug:"/explore/redisdatasource"}),o={unversionedId:"explore/redisdatasource/index-redisdatasource",id:"explore/redisdatasource/index-redisdatasource",isDocsHomePage:!1,title:"Redis DataSource for Grafana",description:"The Redis Data Source for Grafana is a plug-in that allows users to connect to the Redis database and build dashboards in Grafana to easily monitor Redis and application data. It provides an out-of-the-box predefined dashboard, but also lets you build customized dashboards tuned to your specific needs.",source:"@site/docs/explore/redisdatasource/index-redisdatasource.mdx",slug:"/explore/redisdatasource",permalink:"/explore/redisdatasource",editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/explore/redisdatasource/index-redisdatasource.mdx",version:"current",sidebar_label:"Redis Data Source for Grafana",sidebar:"docs",previous:{title:"RedisInsight",permalink:"/explore/redisinsight"},next:{title:"RIOT",permalink:"/explore/riot"}},l=[{value:"Features and Capabilities",id:"features-and-capabilities",children:[]},{value:"Using Homebrew",id:"using-homebrew",children:[{value:"Step 1. Install Grafana",id:"step-1-install-grafana",children:[]},{value:"Step 2. Install Redis datasource using <code>grafana-cli</code>",id:"step-2-install-redis-datasource-using-grafana-cli",children:[]},{value:"Step 3. Start Grafana using the command:",id:"step-3-start-grafana-using-the-command",children:[]},{value:"Step 4. Access Grafana dashboard",id:"step-4-access-grafana-dashboard",children:[]},{value:"Step 5. Click &quot;Configuration&quot;",id:"step-5-click-configuration",children:[]},{value:"Step 6. Add Redis as a Data Source",id:"step-6-add-redis-as-a-data-source",children:[]},{value:"Step 7. Select &quot;Redis&quot; as data source type",id:"step-7-select-redis-as-data-source-type",children:[]},{value:"Step 8. Add Redis Database name, Endpoint URL and password",id:"step-8-add-redis-database-name-endpoint-url-and-password",children:[]},{value:"Step 9. Click &quot;Import&quot; under Dashboard",id:"step-9-click-import-under-dashboard",children:[]},{value:"Step 10.Access the Redis datasource Dashboard",id:"step-10access-the-redis-datasource-dashboard",children:[]}]},{value:"Using Docker",id:"using-docker",children:[{value:"Step 1. Install Docker",id:"step-1-install-docker",children:[]},{value:"Step 2. Run Grafana Docker container",id:"step-2-run-grafana-docker-container",children:[]},{value:"Step 3. Accessing the grafana dashboard",id:"step-3-accessing-the-grafana-dashboard",children:[]},{value:"Step 4. Access Grafana dashboard",id:"step-4-access-grafana-dashboard-1",children:[]},{value:"Step 5. Click &quot;Configuration&quot;",id:"step-5-click-configuration-1",children:[]},{value:"Step 6. Add Redis as a Data Source",id:"step-6-add-redis-as-a-data-source-1",children:[]},{value:"Step 7. Select &quot;Redis&quot; as data source type",id:"step-7-select-redis-as-data-source-type-1",children:[]},{value:"Step 8. Add Redis Database name, Endpoint URL and password",id:"step-8-add-redis-database-name-endpoint-url-and-password-1",children:[]},{value:"Step 9. Click &quot;Import&quot; under Dashboard",id:"step-9-click-import-under-dashboard-1",children:[]},{value:"Step 10.Access the Redis datasource Dashboard",id:"step-10access-the-redis-datasource-dashboard-1",children:[]}]},{value:"Using Docker Compose",id:"using-docker-compose",children:[{value:"Step 1.  Clone the repository",id:"step-1--clone-the-repository",children:[]},{value:"Step 2. Execute the docker-compose CLI",id:"step-2-execute-the-docker-compose-cli",children:[]},{value:"Step 3. Access Grafana dashboard",id:"step-3-access-grafana-dashboard",children:[]},{value:"Step 4. Click &quot;Configuration&quot;",id:"step-4-click-configuration",children:[]},{value:"Step 5. Add Redis as a Data Source",id:"step-5-add-redis-as-a-data-source",children:[]},{value:"Step 6. Select &quot;Redis&quot; as data source type",id:"step-6-select-redis-as-data-source-type",children:[]},{value:"Step 7. Add Redis Database name, Endpoint URL and password",id:"step-7-add-redis-database-name-endpoint-url-and-password",children:[]},{value:"Step 8. Click &quot;Import&quot; under Dashboard",id:"step-8-click-import-under-dashboard",children:[]},{value:"Step 9.Access the Redis datasource Dashboard",id:"step-9access-the-redis-datasource-dashboard",children:[]},{value:"Supported commands",id:"supported-commands",children:[]},{value:"Further References",id:"further-references",children:[]}]}],u={toc:l};function b(e){var a=e.components,i=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(s.a)({},u,i,{components:a,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The Redis Data Source for Grafana is a plug-in that allows users to connect to the Redis database and build dashboards in Grafana to easily monitor Redis and application data. It provides an out-of-the-box predefined dashboard, but also lets you build customized dashboards tuned to your specific needs."),Object(c.b)("p",null,Object(c.b)("img",{alt:"my image",src:t(299).default})),Object(c.b)("h2",{id:"features-and-capabilities"},"Features and Capabilities"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Grafana 7.1 and later with a new plug-in platform supported.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Data Source can connect to any Redis database. No special configuration is required.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Redis Cluster and Sentinel supported since version 1.2.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Data Source supports:"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(s.a)({parentName:"li"},{href:"https://oss.redislabs.com/redistimeseries/"}),"RedisTimeSeries"),": TS.GET, TS.INFO, TS.MRANGE, TS.QUERYINDEX, TS.RANGE"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(s.a)({parentName:"li"},{href:"https://oss.redislabs.com/redisgears/"}),"RedisGears"),": RG.DUMPREGISTRATIONS, RG.PYEXECUTE, RG.PYSTATS"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(s.a)({parentName:"li"},{href:"https://oss.redislabs.com/redisearch/"}),"RedisSearch"),": FT.INFO"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(s.a)({parentName:"li"},{href:"https://oss.redislabs.com/redisgraph/"}),"RedisGraph"),": GRAPH.QUERY, GRAPH.SLOWLOG")))),Object(c.b)(n.a,{defaultValue:"Using Homebrew",values:[{label:"Using Homebrew",value:"Homebrew"},{label:"Docker",value:"Docker"},{label:"Docker Compose",value:"Docker Compose"}],mdxType:"Tabs"},Object(c.b)(d.a,{value:"Using Homebrew",mdxType:"TabItem"},Object(c.b)("h2",{id:"using-homebrew"},"Using Homebrew"),Object(c.b)("h3",{id:"step-1-install-grafana"},"Step 1. Install Grafana"),Object(c.b)("pre",null,Object(c.b)("code",Object(s.a)({parentName:"pre"},{className:"language-bash"})," brew install grafana\n")),Object(c.b)("h3",{id:"step-2-install-redis-datasource-using-grafana-cli"},"Step 2. Install Redis datasource using ",Object(c.b)("inlineCode",{parentName:"h3"},"grafana-cli")),Object(c.b)("pre",null,Object(c.b)("code",Object(s.a)({parentName:"pre"},{className:"language-bash"})," grafana-cli plugins install redis-datasource\n")),Object(c.b)("p",null,"The brew page downloads and untars the files into /usr/local/Cellar/grafana/version."),Object(c.b)("h3",{id:"step-3-start-grafana-using-the-command"},"Step 3. Start Grafana using the command:"),Object(c.b)("pre",null,Object(c.b)("code",Object(s.a)({parentName:"pre"},{className:"language-bash"})," brew services start grafana\n")),Object(c.b)("h3",{id:"step-4-access-grafana-dashboard"},"Step 4. Access Grafana dashboard"),Object(c.b)("p",null,Object(c.b)("img",{alt:"grafana",src:t(204).default})),Object(c.b)("h3",{id:"step-5-click-configuration"},'Step 5. Click "Configuration"'),Object(c.b)("p",null,Object(c.b)("img",{alt:"grafana",src:t(205).default})),Object(c.b)("h3",{id:"step-6-add-redis-as-a-data-source"},"Step 6. Add Redis as a Data Source"),Object(c.b)("p",null,Object(c.b)("img",{alt:"grafana",src:t(206).default})),Object(c.b)("h3",{id:"step-7-select-redis-as-data-source-type"},'Step 7. Select "Redis" as data source type'),Object(c.b)("p",null,Object(c.b)("img",{alt:"grafana",src:t(207).default})),Object(c.b)("h3",{id:"step-8-add-redis-database-name-endpoint-url-and-password"},"Step 8. Add Redis Database name, Endpoint URL and password"),Object(c.b)("p",null,Object(c.b)("img",{alt:"grafana",src:t(208).default})),Object(c.b)("h3",{id:"step-9-click-import-under-dashboard"},'Step 9. Click "Import" under Dashboard'),Object(c.b)("p",null,Object(c.b)("img",{alt:"grafana",src:t(209).default})),Object(c.b)("h3",{id:"step-10access-the-redis-datasource-dashboard"},"Step 10.Access the Redis datasource Dashboard"),Object(c.b)("p",null,Object(c.b)("img",{alt:"grafana",src:t(210).default}))),Object(c.b)(d.a,{value:"Docker",mdxType:"TabItem"},Object(c.b)("h2",{id:"using-docker"},"Using Docker"),Object(c.b)("p",null,"You can install and run Grafana using the official Docker image. "),Object(c.b)("h3",{id:"step-1-install-docker"},"Step 1. Install Docker"),Object(c.b)("p",null,"The first step is to install docker for your operating system. Run the docker version command in a terminal window to make sure that docker is installed correctly."),Object(c.b)("p",null,"Note - On Windows and Mac, install docker version 18.03 or higher. You can run docker version to find out your docker version."),Object(c.b)("h3",{id:"step-2-run-grafana-docker-container"},"Step 2. Run Grafana Docker container"),Object(c.b)("p",null,"Pass the plugins you want installed to Docker with the GF_INSTALL_PLUGINS environment variable as a comma-separated list. This sends each plugin name to grafana-cli plugins install ${plugin} and installs them when Grafana starts.\nIn our case, we will be using redis-datasource."),Object(c.b)("pre",null,Object(c.b)("code",Object(s.a)({parentName:"pre"},{className:"language-bash"}),' docker run -d -p 3000:3000 --name=grafana -e "GF_INSTALL_PLUGINS=redis-datasource" grafana/grafana\n')),Object(c.b)("h3",{id:"step-3-accessing-the-grafana-dashboard"},"Step 3. Accessing the grafana dashboard"),Object(c.b)("p",null,"Open https://IP:3000 to access grafana. The default username/password is admin/admin."),Object(c.b)("h3",{id:"step-4-access-grafana-dashboard-1"},"Step 4. Access Grafana dashboard"),Object(c.b)("p",null,Object(c.b)("img",{alt:"grafana",src:t(204).default})),Object(c.b)("h3",{id:"step-5-click-configuration-1"},'Step 5. Click "Configuration"'),Object(c.b)("p",null,Object(c.b)("img",{alt:"grafana",src:t(205).default})),Object(c.b)("h3",{id:"step-6-add-redis-as-a-data-source-1"},"Step 6. Add Redis as a Data Source"),Object(c.b)("p",null,Object(c.b)("img",{alt:"grafana",src:t(206).default})),Object(c.b)("h3",{id:"step-7-select-redis-as-data-source-type-1"},'Step 7. Select "Redis" as data source type'),Object(c.b)("p",null,Object(c.b)("img",{alt:"grafana",src:t(207).default})),Object(c.b)("h3",{id:"step-8-add-redis-database-name-endpoint-url-and-password-1"},"Step 8. Add Redis Database name, Endpoint URL and password"),Object(c.b)("p",null,Object(c.b)("img",{alt:"grafana",src:t(208).default})),Object(c.b)("h3",{id:"step-9-click-import-under-dashboard-1"},'Step 9. Click "Import" under Dashboard'),Object(c.b)("p",null,Object(c.b)("img",{alt:"grafana",src:t(209).default})),Object(c.b)("h3",{id:"step-10access-the-redis-datasource-dashboard-1"},"Step 10.Access the Redis datasource Dashboard"),Object(c.b)("p",null,Object(c.b)("img",{alt:"grafana",src:t(210).default}))),Object(c.b)(d.a,{value:"Docker Compose",mdxType:"TabItem"},Object(c.b)("h2",{id:"using-docker-compose"},"Using Docker Compose"),Object(c.b)("p",null,"Assuming that Docker Compose is already installed in your system, follow the below steps:"),Object(c.b)("h3",{id:"step-1--clone-the-repository"},"Step 1.  Clone the repository"),Object(c.b)("pre",null,Object(c.b)("code",Object(s.a)({parentName:"pre"},{className:"language-bash"})," git clone https://github.com/RedisGrafana/grafana-redis-datasource\n cd grafana-redis-datasource\n")),Object(c.b)("h3",{id:"step-2-execute-the-docker-compose-cli"},"Step 2. Execute the docker-compose CLI"),Object(c.b)("p",null,"Project provides ",Object(c.b)("inlineCode",{parentName:"p"},"docker-compose.yml")," to start Redis with all Redis Labs modules and Grafana."),Object(c.b)("pre",null,Object(c.b)("code",Object(s.a)({parentName:"pre"},{className:"language-bash"})," docker-compose up -d\n")),Object(c.b)("h3",{id:"step-3-access-grafana-dashboard"},"Step 3. Access Grafana dashboard"),Object(c.b)("p",null,Object(c.b)("img",{alt:"grafana",src:t(204).default})),Object(c.b)("h3",{id:"step-4-click-configuration"},'Step 4. Click "Configuration"'),Object(c.b)("p",null,Object(c.b)("img",{alt:"grafana",src:t(205).default})),Object(c.b)("h3",{id:"step-5-add-redis-as-a-data-source"},"Step 5. Add Redis as a Data Source"),Object(c.b)("p",null,Object(c.b)("img",{alt:"grafana",src:t(206).default})),Object(c.b)("h3",{id:"step-6-select-redis-as-data-source-type"},'Step 6. Select "Redis" as data source type'),Object(c.b)("p",null,Object(c.b)("img",{alt:"grafana",src:t(207).default})),Object(c.b)("h3",{id:"step-7-add-redis-database-name-endpoint-url-and-password"},"Step 7. Add Redis Database name, Endpoint URL and password"),Object(c.b)("p",null,Object(c.b)("img",{alt:"grafana",src:t(208).default})),Object(c.b)("h3",{id:"step-8-click-import-under-dashboard"},'Step 8. Click "Import" under Dashboard'),Object(c.b)("p",null,Object(c.b)("img",{alt:"grafana",src:t(209).default})),Object(c.b)("h3",{id:"step-9access-the-redis-datasource-dashboard"},"Step 9.Access the Redis datasource Dashboard"),Object(c.b)("p",null,Object(c.b)("img",{alt:"grafana",src:t(210).default})))),Object(c.b)("h3",{id:"supported-commands"},"Supported commands"),Object(c.b)("p",null,"Data Source supports various Redis commands using custom components and provides a unified interface to query any command."),Object(c.b)("p",null,Object(c.b)("img",Object(s.a)({parentName:"p"},{src:"https://raw.githubusercontent.com/RedisGrafana/grafana-redis-datasource/master/src/img/query.png",alt:"Query"}))),Object(c.b)("h3",{id:"further-references"},"Further References"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(s.a)({parentName:"li"},{href:"https://redislabs.com/blog/introducing-the-redis-data-source-plug-in-for-grafana/"}),"Introducing the Redis Data Source Plug-in for Grafana")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(s.a)({parentName:"li"},{href:"https://redislabs.com/blog/how-to-use-the-new-redis-data-source-for-grafana-plug-in/"}),"How to Use the New Redis Data Source for Grafana Plug-in")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(s.a)({parentName:"li"},{href:"https://redislabs.com/blog/3-real-life-apps-built-with-redis-data-source-for-grafana/"}),"3 Real-Life Apps Built with Redis Data Source for Grafana")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(s.a)({parentName:"li"},{href:"https://redislabs.com/blog/how-to-manage-real-time-iot-sensor-data-in-redis/"}),"How to Manage Real-Time IoT Sensor Data in Redis")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(s.a)({parentName:"li"},{href:"https://grafana.com/go/observabilitycon/real-time-observability-with-redis-and-grafana/"}),"Real-time observability with Redis and Grafana"))))}b.isMDXComponent=!0}}]);
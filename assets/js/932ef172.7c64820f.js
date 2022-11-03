"use strict";(self.webpackChunkredis_developer_hub=self.webpackChunkredis_developer_hub||[]).push([[4717],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var s=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},i=Object.keys(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)n=i[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=s.createContext({}),l=function(e){var t=s.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return s.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},u=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(n),c=r,h=u["".concat(d,".").concat(c)]||u[c]||m[c]||i;return n?s.createElement(h,a(a({ref:t},p),{},{components:n})):s.createElement(h,a({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var l=2;l<i;l++)a[l]=n[l];return s.createElement.apply(null,a)}return s.createElement.apply(null,n)}u.displayName="MDXCreateElement"},50358:(e,t,n)=>{n.d(t,{Z:()=>d});var s=n(67294),r=n(52263);const i="authorByline_VoxI",a="authorLabel_a70t",o="authorProfileImage_URwT";const d=function(e){let{frontMatter:t}=e;const{siteConfig:n}=(0,r.Z)(),d=n.customFields.authors;return s.createElement(s.Fragment,null,t.authors&&s.createElement("div",{className:"docAuthors"},s.createElement("hr",null),t.authors.map((e=>s.createElement("div",{key:e,className:i},s.createElement("img",{className:o,src:`/img/${d[e].image?d[e].image:"default_author_profile_pic.png"}`,alt:`Profile picture for ${d[e].name}`}),s.createElement("div",null,s.createElement("div",{className:a},"Author:"),s.createElement("div",null,s.createElement("a",{href:d[e].link,target:"_blank"},d[e].name),", ",d[e].title))))),s.createElement("hr",null)))}},34969:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>d,toc:()=>p});var s=n(87462),r=(n(67294),n(3905)),i=n(50358);const a={id:"index-profiler",title:"RedisInsight Profiler Tool - Analyze Your Redis Commands Using Redis Monitor Command",sidebar_label:"RedisInsight Profiler Tool - Analyze Your Redis Commands Using Redis Monitor Command",slug:"/explore/redisinsight/profiler",authors:["ajeet"]},o=void 0,d={unversionedId:"explore/redisinsight/profiler/index-profiler",id:"explore/redisinsight/profiler/index-profiler",title:"RedisInsight Profiler Tool - Analyze Your Redis Commands Using Redis Monitor Command",description:"RedisInsight profiler analyzes your Redis commands that are being run on the Redis server in real-time. The tool provides you detailed information about the number of commands processed, commands/second and number of connected clients. It also gives information about top prefixes, top keys and top commands.",source:"@site/docs/explore/redisinsight/profiler/index-profiler.mdx",sourceDirName:"explore/redisinsight/profiler",slug:"/explore/redisinsight/profiler",permalink:"/explore/redisinsight/profiler",draft:!1,editUrl:"https://github.com/redis-developer/redis-developer/edit/master/docs/explore/redisinsight/profiler/index-profiler.mdx",tags:[],version:"current",lastUpdatedAt:1667495358,formattedLastUpdatedAt:"Nov 3, 2022",frontMatter:{id:"index-profiler",title:"RedisInsight Profiler Tool - Analyze Your Redis Commands Using Redis Monitor Command",sidebar_label:"RedisInsight Profiler Tool - Analyze Your Redis Commands Using Redis Monitor Command",slug:"/explore/redisinsight/profiler",authors:["ajeet"]},sidebar:"docs",previous:{title:"Use Redis Streams Consumer Groups with RedisInsight",permalink:"/explore/redisinsight/streams"},next:{title:"Query, Visualize and Manipulate Graphs using RedisGraph Browser Visualization Tool",permalink:"/explore/redisinsight/redisgraph"}},l={},p=[{value:"Step 1. Create Redis database with RedisTimeSeries module enabled",id:"step-1-create-redis-database-with-redistimeseries-module-enabled",level:2},{value:"Step 2: Download RedisInsight",id:"step-2-download-redisinsight",level:2},{value:"Step 3. Cloning the GITHUB repo",id:"step-3-cloning-the-github-repo",level:2},{value:"Step 4: Execute the sensor script",id:"step-4-execute-the-sensor-script",level:2},{value:"Step 5: Accessing the RedisTimeSeries Keys",id:"step-5-accessing-the-redistimeseries-keys",level:2},{value:"Step 6: Running RedisTimeSeries specific queries**",id:"step-6-running-redistimeseries-specific-queries",level:2},{value:"Step 7. Initiate the Profiler",id:"step-7-initiate-the-profiler",level:2},{value:"Additional Links",id:"additional-links",level:2}],m={toc:p};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,s.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(i.Z,{frontMatter:a,mdxType:"Authors"}),(0,r.kt)("p",null,"RedisInsight profiler analyzes your Redis commands that are being run on the Redis server in real-time. The tool provides you detailed information about the number of commands processed, commands/second and number of connected clients. It also gives information about top prefixes, top keys and top commands."),(0,r.kt)("p",null,"It basically runs the Redis MONITOR command and generates a summarized view. MONITOR is a debugging command that streams back every command processed by the Redis server. It can help in understanding what is happening to the database. This command can both be used via ",(0,r.kt)("inlineCode",{parentName:"p"},"redis-cli")," and via ",(0,r.kt)("inlineCode",{parentName:"p"},"telnet"),".All the commands sent to the redis instance are monitored for the duration of the profiling. The ability to see all the requests processed by the server is useful in order to spot bugs in an application both when using Redis as a database and as a distributed caching system."),(0,r.kt)("admonition",{type:"important"},(0,r.kt)("p",{parentName:"admonition"},"Because MONITOR streams back all commands, its use comes at a cost.Running monitor command is dangerous to the performance of your production server, hence the profiler is run for a maximum time of 5 minutes, if the user has not stopped it in between. This is to avoid overload on the Redis server.")),(0,r.kt)("p",null,"Follow the below instructions to test drive RedisInsight profiler tool:"),(0,r.kt)("h2",{id:"step-1-create-redis-database-with-redistimeseries-module-enabled"},"Step 1. Create Redis database with RedisTimeSeries module enabled"),(0,r.kt)("p",null,"Visit ",(0,r.kt)("a",{parentName:"p",href:"https://developer.redis.com/create/rediscloud"},"https://developer.redis.com/create/rediscloud")," and create a Redis database. ",(0,r.kt)("a",{parentName:"p",href:"https://developer.redis.com/howtos/redistimeseries"},"Follow these steps to enable RedisTimeSeries module "),"on Redis Enterprise Cloud"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt_text",src:n(11488).Z,width:"1338",height:"1082"})),(0,r.kt)("p",null,"You can use Redis CLI to connect to the remote Redis Enterprise cloud database. You can check memory usage with the Redis ",(0,r.kt)("inlineCode",{parentName:"p"},"INFO")," command."),(0,r.kt)("admonition",{title:"TIP",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"RedisInsight allows you to add a Redis Sentinel database too. Refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.redis.com/latest/ri/using-redisinsight/add-instance/#add-a-redis-sentinel-database"},"documentation")," to learn more.")),(0,r.kt)("h2",{id:"step-2-download-redisinsight"},"Step 2: Download RedisInsight"),(0,r.kt)("admonition",{title:"TIP",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"RedisInsight v2.0 is an open source visual tool that lets you do both GUI- and CLI-based interactions with your Redis database.\nIt is an open source visual tool that lets you do both GUI- and CLI-based interactions with your Redis database . It is a desktop manager that provides an intuitive and efficient GUI for Redis, allowing you to interact with your databases, monitor, and manage your data."),(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("a",{parentName:"p",href:"/explore/redisinsightv2/"},"Refer to these tutorials")," to learn more about this latest release.")),(0,r.kt)("p",null,"To install RedisInsight on your local system, you need to first download the software from the Redis website."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://redis.com/redis-enterprise/redis-insight/#insight-form"},"Click this link")," to access a form that allows you to select the operating system of your choice."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"My Image",src:n(71552).Z,width:"1464",height:"1256"})),(0,r.kt)("p",null,"Run the installer. After the web server starts, open http://YOUR_HOST_IP:8001 and add a Redis database connection."),(0,r.kt)("p",null,'Select "Connect to a Redis database"\n',(0,r.kt)("img",{alt:"My Image",src:n(17602).Z,width:"1790",height:"838"})),(0,r.kt)("p",null,"Enter the requested details, including Name, Host (endpoint), Port, and Password. Then click \u201cADD REDIS DATABASE\u201d."),(0,r.kt)("h2",{id:"step-3-cloning-the-github-repo"},"Step 3. Cloning the GITHUB repo"),(0,r.kt)("p",null,"We will be using a python script to fetch sensor data from one of the IoT Edge sensor devices (such as BME680 sensors) and then push the sensor values to the Redis Cloud database."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ git clone https://github.com/redis-developer/redis-datasets/tree/master/redistimeseries\ncd redistimeseries/realtime-sensor-jetson\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'import bme680\nimport time\nimport datetime\nimport csv\nimport argparse\nimport redis\n\n\nprint("""read-sensor.py - Displays temperature, pressure, humidity, and gas.\nPress Ctrl+C to exit!\n""")\n\ntry:\n    sensor = bme680.BME680(bme680.I2C_ADDR_PRIMARY)\nexcept IOError:\n    sensor = bme680.BME680(bme680.I2C_ADDR_SECONDARY)\n\n# These calibration data can safely be commented\n# out, if desired.\n\nprint(\'Calibration data:\')\nfor name in dir(sensor.calibration_data):\n\n    if not name.startswith(\'_\'):\n        value = getattr(sensor.calibration_data, name)\n\n        if isinstance(value, int):\n            print(\'{}: {}\'.format(name, value))\n\n# These oversampling settings can be tweaked to\n# change the balance between accuracy and noise in\n# the data.\n\nsensor.set_humidity_oversample(bme680.OS_2X)\nsensor.set_pressure_oversample(bme680.OS_4X)\nsensor.set_temperature_oversample(bme680.OS_8X)\nsensor.set_filter(bme680.FILTER_SIZE_3)\nsensor.set_gas_status(bme680.ENABLE_GAS_MEAS)\n\nprint(\'\\n\\nInitial reading:\')\nfor name in dir(sensor.data):\n    value = getattr(sensor.data, name)\n\n    if not name.startswith(\'_\'):\n        print(\'{}: {}\'.format(name, value))\n\nsensor.set_gas_heater_temperature(320)\nsensor.set_gas_heater_duration(150)\nsensor.select_gas_heater_profile(0)\n\n# Up to 10 heater profiles can be configured, each\n# with their own temperature and duration.\n# sensor.set_gas_heater_profile(200, 150, nb_profile=1)\n# sensor.select_gas_heater_profile(1)\n\n\nparser = argparse.ArgumentParser()\nparser.add_argument("--port", type=int,\n                    help="redis instance port", default=6379)\nparser.add_argument(\n    "--password", type=int, help="redis instance password", default=None\n)\nparser.add_argument(\n    "--verbose", help="enable verbose output", action="store_true")\nparser.add_argument("--host", type=str,\n                    help="redis instance host", default="127.0.0.1")\n\n\nargs = parser.parse_args()\n\n# redis setup\nredis_obj = redis.Redis(host=args.host, port=args.port, password=args.password)\ntemperature_key = "ts:temperature"\npressure_key = "ts:pressure"\nhumidity_key = "ts:humidity"\n\nprint(\'\\n\\nPolling:\')\ntry:\n    while True:\n        if not sensor.get_sensor_data():\n            print(\'Can not access sensor data\')\n            continue\n\n        output = \'{0:.2f} C,{1:.2f} hPa,{2:.2f} %RH\'.format(\n            sensor.data.temperature,\n            sensor.data.pressure,\n            sensor.data.humidity)\n\n        if not sensor.data.heat_stable:\n            print(\'Heat unstable: \' + output)\n            continue\n\n        print(\'{0},{1} Ohms\'.format(\n            output,\n            sensor.data.gas_resistance))\n\n        date = datetime.datetime.now()\n        timestamp = int(date.timestamp() * 1000)\n\n        # Create pipeline\n        pipe = redis_obj.pipeline()\n\n        pipe.execute_command(\n            "ts.add", temperature_key, timestamp, sensor.data.temperature\n        )\n\n        pipe.execute_command(\n            "ts.add", pressure_key, timestamp, sensor.data.pressure\n        )\n\n        pipe.execute_command("ts.add", humidity_key,\n                             timestamp, sensor.data.humidity)\n\n        # Execute pipeline\n        pipe.execute()\n\n        time.sleep(1)\n\nexcept KeyboardInterrupt:\n    pass\n\n')),(0,r.kt)("p",null,"The complete walkthrough of this python script is explained ",(0,r.kt)("a",{parentName:"p",href:"https://redis.com/blog/how-to-manage-real-time-iot-sensor-data-in-redis/"},"here"),"."),(0,r.kt)("h2",{id:"step-4-execute-the-sensor-script"},"Step 4: Execute the sensor script"),(0,r.kt)("p",null,"Let us execute the script using the command line:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ sudo python3 sensorloader2.py --host Endpoint_of_Redis_enterprise_Cloud --port port\n")),(0,r.kt)("p",null,"Run the monitor command to verify if sensor values are being fetched or not.(Don\u2019t run this command in the production environment)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'redis-17316.c251.east-us-mz.azure.cloud.redislabs.com:17316> monitor\nOK\n1622212328.833139 [0 122.171.186.213:59471] "monitor"\n1622212329.865158 [0 70.167.220.160:50378] "MULTI"\n1622212329.865158 [0 70.167.220.160:50378] "ts.add" "ts:temperature" "1622212329847" "35.67"\n1622212329.865158 [0 70.167.220.160:50378] "ts.add" "ts:pressure" "1622212329847" "957.52"\n1622212329.865158 [0 70.167.220.160:50378] "ts.add" "ts:humidity" "1622212329847" "11.111"\n1622212329.865158 [0 70.167.220.160:50378] "EXEC"\n1622212330.941178 [0 70.167.220.160:50378] "MULTI"\n1622212330.941178 [0 70.167.220.160:50378] "ts.add" "ts:temperature" "1622212330920" "35.68"\n1622212330.941178 [0 70.167.220.160:50378] "ts.add" "ts:pressure" "1622212330920" "957.51"\n1622212330.941178 [0 70.167.220.160:50378] "ts.add" "ts:humidity" "1622212330920" "11.111"\n1622212330.941178 [0 70.167.220.160:50378] "EXEC"\n\n')),(0,r.kt)("h2",{id:"step-5-accessing-the-redistimeseries-keys"},"Step 5: Accessing the RedisTimeSeries Keys"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developer.redis.com/explore/redisinsight/getting-started"},"Follow these steps to connect to the database")," using RedisInsight. Once you are connected to RedisInsight GUI, you can verify the 3 RedisTimeSeries keys:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ts:temperature"),(0,r.kt)("li",{parentName:"ul"},"ts:pressure"),(0,r.kt)("li",{parentName:"ul"},"ts:humidity")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt_text",src:n(27853).Z,width:"1330",height:"1504"})),(0,r.kt)("h2",{id:"step-6-running-redistimeseries-specific-queries"},"Step 6: Running RedisTimeSeries specific queries","*","*"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt_text",src:n(55617).Z,width:"1314",height:"1232"})),(0,r.kt)("p",null,"Please note that In RedisTimeSeries, only ",(0,r.kt)("a",{parentName:"p",href:"https://oss.redis.com/redistimeseries/commands/#tsrangetsrevrange"},"TS.RANGE "),"and ",(0,r.kt)("a",{parentName:"p",href:"https://oss.redis.com/redistimeseries/commands/#tsmrangetsmrevrange"},"TS.MRANGE")," are supported as of the current release. In the next release, TS.REVRANGE and TS.MREVRANGE will be supported too."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt_text",src:n(65754).Z,width:"1308",height:"770"})),(0,r.kt)("h2",{id:"step-7-initiate-the-profiler"},"Step 7. Initiate the Profiler"),(0,r.kt)("p",null,"Click \u201cStart Profiler\u201d while sensor data is continuously being pushed to Redis database."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt_text",src:n(98565).Z,width:"1322",height:"578"})),(0,r.kt)("p",null,"Let the profiler tool run for next 1-2 minutes."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt_text",src:n(1977).Z,width:"1308",height:"1066"})),(0,r.kt)("p",null,"Stop the profiler to see the results as shown below:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"alt_text",src:n(75726).Z,width:"1298",height:"618"})),(0,r.kt)("p",null,"Hence, the profiler provides the below statistical details:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"How many commands were processed"),(0,r.kt)("li",{parentName:"ul"},"Number of connected clients"),(0,r.kt)("li",{parentName:"ul"},"Rate at which the commands were executed"),(0,r.kt)("li",{parentName:"ul"},"Top key patterns (key patterns followed by number of commands)"),(0,r.kt)("li",{parentName:"ul"},"Top Keys"),(0,r.kt)("li",{parentName:"ul"},"Top Commands & their frequency")),(0,r.kt)("h2",{id:"additional-links"},"Additional Links"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/explore/redisinsight/browser"},"Explore Redis keys using RedisInsight browser tool")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/explore/redisinsight/memoryanalyzer"},"Memory Usage and Analysis using RedisInsight")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/explore/redisinsight/streams"},"Using Redis Streams with RedisInsight")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.redis.com/latest/ri/release-notes/"},"RedisInsight Release Notes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.redis.com/explore/redisinsight/slowlog"},"Debug Redis using RedisInsight Slow log Debugging Tool"))),(0,r.kt)("h2",{id:""}),(0,r.kt)("div",null,(0,r.kt)("a",{href:"https://launchpad.redis.com",target:"_blank",rel:"noopener",className:"link"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<img\n  src="/img/launchpad.png"\n  className="thumb"\n  loading="lazy"\n  alt="Redis Launchpad"\n/>\n')))))}u.isMDXComponent=!0},11488:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/image1-d4d2661bc67be076efaad05ee55482d3.png"},27853:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/image2-87fd2049639d7f68eba9da60adf50dc9.png"},55617:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/image3-eb5bed7afe340fcae07bbde310500612.png"},65754:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/image4-8eae12b9bf9867c1e3ba0cd13c244e85.png"},98565:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/image5-f7779b0f13bbdadc313bab919d0c8d83.png"},1977:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/image6-acec39bd7e5791a93a2414a7aa25f142.png"},75726:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/image7-3c9c0dd2dfee8ff1112b850ed0dec91b.png"},17602:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/redisinsight4-c10ff2035f21df96053f824b1eefd790.png"},71552:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/redisinsightinstall-b920e816c541305ea0ea2dd2593f5a0f.png"}}]);
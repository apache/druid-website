"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3950],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),k=r,c=u["".concat(d,".").concat(k)]||u[k]||m[k]||i;return n?a.createElement(c,o(o({ref:t},s),{},{components:n})):a.createElement(c,o({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=k;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},88422:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"k8s-jobs",title:"MM-less Druid in K8s"},d=void 0,p={unversionedId:"development/extensions-contrib/k8s-jobs",id:"development/extensions-contrib/k8s-jobs",title:"MM-less Druid in K8s",description:"\x3c!--",source:"@site/docs/latest/development/extensions-contrib/k8s-jobs.md",sourceDirName:"development/extensions-contrib",slug:"/development/extensions-contrib/k8s-jobs",permalink:"/docs/latest/development/extensions-contrib/k8s-jobs",draft:!1,tags:[],version:"current",frontMatter:{id:"k8s-jobs",title:"MM-less Druid in K8s"}},s={},u=[{value:"How it works",id:"how-it-works",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Pod Adapters",id:"pod-adapters",level:2},{value:"Overlord Single Container Pod Adapter/Overlord Multi Container Pod Adapter",id:"overlord-single-container-pod-adapteroverlord-multi-container-pod-adapter",level:3},{value:"Custom Template Pod Adapter",id:"custom-template-pod-adapter",level:3},{value:"Properties",id:"properties",level:3},{value:"Metrics added",id:"metrics-added",level:3},{value:"Gotchas",id:"gotchas",level:3},{value:"Migration/Kubernetes and Worker Task Runner",id:"migrationkubernetes-and-worker-task-runner",level:2},{value:"Additional Configurations",id:"additional-configurations",level:3}],m={toc:u},k="wrapper";function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)(k,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Apache Druid Extension to enable using Kubernetes for launching and managing tasks instead of the Middle Managers.  This extension allows you to launch tasks as kubernetes jobs removing the need for your middle manager.  "),(0,i.kt)("p",null,"Consider this an ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/development/experimental"},"EXPERIMENTAL")," feature mostly because it has not been tested yet on a wide variety of long-running Druid clusters."),(0,i.kt)("h2",{id:"how-it-works"},"How it works"),(0,i.kt)("p",null,"The K8s extension builds a pod spec for each task using the specified pod adapter. All jobs are natively restorable, they are decoupled from the Druid deployment, thus restarting pods or doing upgrades has no affect on tasks in flight.  They will continue to run and when the overlord comes back up it will start tracking them again.  "),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"To use this extension please make sure to  ",(0,i.kt)("a",{parentName:"p",href:"/docs/latest/configuration/extensions#loading-extensions"},"include"),(0,i.kt)("inlineCode",{parentName:"p"},"druid-kubernetes-overlord-extensions")," in the extensions load list for your overlord process."),(0,i.kt)("p",null,"The extension uses ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.indexer.runner.capacity")," to limit the number of k8s jobs in flight. A good initial value for this would be the sum of the total task slots of all the middle managers you were running before switching to K8s based ingestion. The K8s task runner uses one thread per Job that is created, so setting this number too large can cause memory issues on the overlord. Additionally set the variable ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.indexer.runner.namespace")," to the namespace in which you are running druid."),(0,i.kt)("p",null,"Other configurations required are:\n",(0,i.kt)("inlineCode",{parentName:"p"},"druid.indexer.runner.type: k8s")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.indexer.task.encapsulatedTask: true")),(0,i.kt)("h2",{id:"pod-adapters"},"Pod Adapters"),(0,i.kt)("p",null,"The logic defining how the pod template is built for your Kubernetes Job depends on which pod adapter you have specified."),(0,i.kt)("h3",{id:"overlord-single-container-pod-adapteroverlord-multi-container-pod-adapter"},"Overlord Single Container Pod Adapter/Overlord Multi Container Pod Adapter"),(0,i.kt)("p",null,"The overlord single container pod adapter takes the podSpec of your ",(0,i.kt)("inlineCode",{parentName:"p"},"Overlord")," pod and creates a kubernetes job from this podSpec.  This is the default pod adapter implementation, to explicitly enable it you can specify the runtime property ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.indexer.runner.k8s.adapter.type: overlordSingleContainer")),(0,i.kt)("p",null,"The overlord multi container pod adapter takes the podSpec of your ",(0,i.kt)("inlineCode",{parentName:"p"},"Overlord")," pod and creates a kubernetes job from this podSpec.  It uses kubexit to manage dependency ordering between the main container that runs your druid peon and other sidecars defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Overlord")," pod spec. Thus if you have sidecars such as Splunk or Istio it will be able to handle them. To enable this pod adapter you can specify the runtime property ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.indexer.runner.k8s.adapter.type: overlordMultiContainer")," "),(0,i.kt)("p",null,"For the sidecar support to work for the multi container pod adapter, your entry point / command in docker must be explicitly defined your spec."),(0,i.kt)("p",null,"You can't have something like this:\nDockerfile:\n",(0,i.kt)("inlineCode",{parentName:"p"},'ENTRYPOINT: ["foo.sh"]')),(0,i.kt)("p",null,"and in your sidecar specs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-container:"},"        name: foo\n        args: \n           - arg1\n           - arg2 \n")),(0,i.kt)("p",null,"That will not work, because we cannot decipher what your command is, the extension needs to know it explicitly.\n*",(0,i.kt)("em",{parentName:"p"},"Even for sidecars like Istio which are dynamically created by the service mesh, this needs to happen.")),(0,i.kt)("p",null,"Instead do the following:\nYou can keep your Dockerfile the same but you must have a sidecar spec like so:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-container:"},"        name: foo\n        command: foo.sh\n        args: \n           - arg1\n           - arg2 \n")),(0,i.kt)("p",null,"For both of these adapters, you can add optional labels to your K8s jobs / pods if you need them by using the following configuration:\n",(0,i.kt)("inlineCode",{parentName:"p"},'druid.indexer.runner.labels: \'{"key":"value"}\''),"\nAnnotations are the same with:\n",(0,i.kt)("inlineCode",{parentName:"p"},'druid.indexer.runner.annotations: \'{"key":"value"}\'')),(0,i.kt)("p",null,"All other configurations you had for the middle manager tasks must be moved under the overlord with one caveat, you must specify javaOpts as an array:\n",(0,i.kt)("inlineCode",{parentName:"p"},"druid.indexer.runner.javaOptsArray"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.indexer.runner.javaOpts")," is no longer supported."),(0,i.kt)("p",null,"If you are running without a middle manager you need to also use ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.processing.intermediaryData.storage.type=deepstore")),(0,i.kt)("h3",{id:"custom-template-pod-adapter"},"Custom Template Pod Adapter"),(0,i.kt)("p",null,"The custom template pod adapter allows you to specify a pod template file per task type for more flexibility on how to define your pods. This adapter expects a ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/workloads/pods/#pod-templates"},"Pod Template")," to be available on the overlord's file system. This pod template is used as the base of the pod spec for the Kubernetes Job. You can override things like labels, environment variables, resources, annotation, or even the base image with this template. To enable this pod adapter you can specify the runtime property ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.indexer.runner.k8s.adapter.type: customTemplateAdapter")),(0,i.kt)("p",null,"The base pod template must be specified as the runtime property ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.indexer.runner.k8s.podTemplate.base: /path/to/basePodSpec.yaml")),(0,i.kt)("p",null,"Task specific pod templates can be specified as the runtime property ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.indexer.runner.k8s.podTemplate.{taskType}: /path/to/taskSpecificPodSpec.yaml")," where {taskType} is the name of the task type i.e ",(0,i.kt)("inlineCode",{parentName:"p"},"index_parallel")),(0,i.kt)("p",null,"The following is an example Pod Template that uses the regular druid docker image."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'apiVersion: "v1"\nkind: "PodTemplate"\ntemplate:\n  metadata:\n    annotations:\n      sidecar.istio.io/proxyCPU: "512m" # to handle a injected istio sidecar\n    labels:\n      app.kubernetes.io/name: "druid-realtime-backend"\n  spec:\n    affinity: {}\n    containers:\n    - command:\n        - sh\n        - -c\n        - |\n          /peon.sh /druid/data 1\n      env:\n      - name: CUSTOM_ENV_VARIABLE\n        value: "hello"\n      image: apache/druid:28.0.0\n      name: main\n      ports:\n      - containerPort: 8091\n        name: druid-tls-port\n        protocol: TCP\n      - containerPort: 8100\n        name: druid-port\n        protocol: TCP\n      resources:\n        limits:\n          cpu: "1"\n          memory: 2400M\n        requests:\n          cpu: "1"\n          memory: 2400M\n      volumeMounts:\n      - mountPath: /opt/druid/conf/druid/cluster/master/coordinator-overlord # runtime props are still mounted in this location because that\'s where peon.sh looks for configs\n        name: nodetype-config-volume\n        readOnly: true\n      - mountPath: /druid/data\n        name: data-volume\n      - mountPath: /druid/deepstorage\n        name: deepstorage-volume\n    restartPolicy: "Never"\n    securityContext:\n      fsGroup: 1000\n      runAsGroup: 1000\n      runAsUser: 1000\n    tolerations:\n    - effect: NoExecute\n      key: node.kubernetes.io/not-ready\n      operator: Exists\n      tolerationSeconds: 300\n    - effect: NoExecute\n      key: node.kubernetes.io/unreachable\n      operator: Exists\n      tolerationSeconds: 300\n    volumes:\n    - configMap:\n        defaultMode: 420\n        name: druid-tiny-cluster-peons-config\n      name: nodetype-config-volume\n    - emptyDir: {}\n      name: data-volume\n    - emptyDir: {}\n      name: deepstorage-volume\n')),(0,i.kt)("p",null,"The below runtime properties need to be passed to the Job's peon process."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"druid.port=8100 (what port the peon should run on)\ndruid.peon.mode=remote\ndruid.service=druid/peon (for metrics reporting)\ndruid.indexer.task.baseTaskDir=/druid/data (this should match the argument to the ./peon.sh run command in the PodTemplate)\ndruid.indexer.runner.type=k8s\ndruid.indexer.task.encapsulatedTask=true\n")),(0,i.kt)("p",null,"Any runtime property or JVM config used by the peon process can also be passed. E.G. below is a example of a ConfigMap that can be used to generate the ",(0,i.kt)("inlineCode",{parentName:"p"},"nodetype-config-volume")," mount in the above template."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'kind: ConfigMap\nmetadata:\n    name: druid-tiny-cluster-peons-config\n    namespace: default\napiVersion: v1\ndata:\n    jvm.config: |-\n        -server\n        -XX:MaxDirectMemorySize=1000M\n        -Duser.timezone=UTC\n        -Dfile.encoding=UTF-8\n        -Dlog4j.debug\n        -Djava.util.logging.manager=org.apache.logging.log4j.jul.LogManager\n        -Djava.io.tmpdir=/druid/data\n        -Xmx1024M\n        -Xms1024M\n    log4j2.xml: |-\n        <?xml version="1.0" encoding="UTF-8" ?>\n        <Configuration status="WARN">\n            <Appenders>\n                <Console name="Console" target="SYSTEM_OUT">\n                    <PatternLayout pattern="%d{ISO8601} %p [%t] %c - %m%n"/>\n                </Console>\n            </Appenders>\n            <Loggers>\n                <Root level="info">\n                    <AppenderRef ref="Console"/>\n                </Root>\n            </Loggers>\n        </Configuration>\n    runtime.properties: |\n        druid.port=8100\n        druid.service=druid/peon\n        druid.server.http.numThreads=5\n        druid.indexer.task.baseTaskDir=/druid/data\n        druid.indexer.runner.type=k8s\n        druid.peon.mode=remote\n        druid.indexer.task.encapsulatedTask=true\n')),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Possible Values"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.indexer.runner.debugJobs")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:null},"Clean up K8s jobs after tasks complete."),(0,i.kt)("td",{parentName:"tr",align:null},"False"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.indexer.runner.sidecarSupport")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:null},"Deprecated, specify adapter type as runtime property ",(0,i.kt)("inlineCode",{parentName:"td"},"druid.indexer.runner.k8s.adapter.type: overlordMultiContainer")," instead. If your overlord pod has sidecars, this will attempt to start the task with the same sidecars as the overlord pod."),(0,i.kt)("td",{parentName:"tr",align:null},"False"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.indexer.runner.primaryContainerName")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:null},"If running with sidecars, the ",(0,i.kt)("inlineCode",{parentName:"td"},"primaryContainerName")," should be that of your druid container like ",(0,i.kt)("inlineCode",{parentName:"td"},"druid-overlord"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"First container in ",(0,i.kt)("inlineCode",{parentName:"td"},"podSpec")," list"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.indexer.runner.kubexitImage")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String")),(0,i.kt)("td",{parentName:"tr",align:null},"Used kubexit project to help shutdown sidecars when the main pod completes.  Otherwise jobs with sidecars never terminate."),(0,i.kt)("td",{parentName:"tr",align:null},"karlkfi/kubexit:latest"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.indexer.runner.disableClientProxy")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:null},"Use this if you have a global http(s) proxy and you wish to bypass it."),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.indexer.runner.maxTaskDuration")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Duration")),(0,i.kt)("td",{parentName:"tr",align:null},"Max time a task is allowed to run for before getting killed"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"PT4H")),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.indexer.runner.taskCleanupDelay")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Duration")),(0,i.kt)("td",{parentName:"tr",align:null},"How long do jobs stay around before getting reaped from K8s"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"P2D")),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.indexer.runner.taskCleanupInterval")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Duration")),(0,i.kt)("td",{parentName:"tr",align:null},"How often to check for jobs to be reaped"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"PT10M")),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.indexer.runner.K8sjobLaunchTimeout")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Duration")),(0,i.kt)("td",{parentName:"tr",align:null},"How long to wait to launch a K8s task before marking it as failed, on a resource constrained cluster it may take some time."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"PT1H")),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.indexer.runner.javaOptsArray")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"JsonArray")),(0,i.kt)("td",{parentName:"tr",align:null},"java opts for the task."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-Xmx1g")),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.indexer.runner.labels")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"JsonObject")),(0,i.kt)("td",{parentName:"tr",align:null},"Additional labels you want to add to peon pod"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{}")),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.indexer.runner.annotations")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"JsonObject")),(0,i.kt)("td",{parentName:"tr",align:null},"Additional annotations you want to add to peon pod"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{}")),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.indexer.runner.peonMonitors")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"JsonArray")),(0,i.kt)("td",{parentName:"tr",align:null},"Overrides ",(0,i.kt)("inlineCode",{parentName:"td"},"druid.monitoring.monitors"),". Use this property if you don't want to inherit monitors from the Overlord."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"[]")),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.indexer.runner.graceTerminationPeriodSeconds")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Long")),(0,i.kt)("td",{parentName:"tr",align:null},"Number of seconds you want to wait after a sigterm for container lifecycle hooks to complete.  Keep at a smaller value if you want tasks to hold locks for shorter periods."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"PT30S")," (K8s default)"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.indexer.runner.capacity")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Integer")),(0,i.kt)("td",{parentName:"tr",align:null},"Number of concurrent jobs that can be sent to Kubernetes."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"2147483647")),(0,i.kt)("td",{parentName:"tr",align:null},"No")))),(0,i.kt)("h3",{id:"metrics-added"},"Metrics added"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Metric"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Dimensions"),(0,i.kt)("th",{parentName:"tr",align:null},"Normal value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"k8s/peon/startup/time")),(0,i.kt)("td",{parentName:"tr",align:null},"Metric indicating the milliseconds for peon pod to startup."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"dataSource"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"taskId"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"taskType"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"groupId"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"taskStatus"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"tags")),(0,i.kt)("td",{parentName:"tr",align:null},"Varies")))),(0,i.kt)("h3",{id:"gotchas"},"Gotchas"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"All Druid Pods belonging to one Druid cluster must be inside the same Kubernetes namespace.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"You must have a role binding for the overlord's service account that provides the needed permissions for interacting with Kubernetes. An example spec could be:"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'kind: Role\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\n  namespace: <druid-namespace>\n  name: druid-k8s-task-scheduler\nrules:\n  - apiGroups: ["batch"]\n    resources: ["jobs"]\n    verbs: ["get", "watch", "list", "delete", "create"]\n  - apiGroups: [""]\n    resources: ["pods", "pods/log"]\n    verbs: ["get", "watch", "list", "delete", "create"]\n---\nkind: RoleBinding\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\n  name: druid-k8s-binding\n  namespace: <druid-namespace>\nsubjects:\n  - kind: ServiceAccount\n    name: <druid-overlord-k8s-service-account>\n    namespace: <druid-namespace>\nroleRef:\n  kind: Role\n  name: druid-k8s-task-scheduler\n  apiGroup: rbac.authorization.k8s.io\n')),(0,i.kt)("h2",{id:"migrationkubernetes-and-worker-task-runner"},"Migration/Kubernetes and Worker Task Runner"),(0,i.kt)("p",null,"If you are running a cluster with tasks running on middle managers or indexers and want to do a zero downtime migration to mm-less ingestion, the mm-less ingestion system is capable of running in migration mode by reading tasks from middle managers/indexers and Kubernetes and writing tasks to either middle managers or to Kubernetes."),(0,i.kt)("p",null,"To do this, set the following property.\n",(0,i.kt)("inlineCode",{parentName:"p"},"druid.indexer.runner.type: k8sAndWorker")," (instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"druid.indexer.runner.type: k8s"),")"),(0,i.kt)("h3",{id:"additional-configurations"},"Additional Configurations"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Possible Values"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.indexer.runner.k8sAndWorker.runnerStrategy.type")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String")," (e.g., ",(0,i.kt)("inlineCode",{parentName:"td"},"k8s"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"worker"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"taskType"),")"),(0,i.kt)("td",{parentName:"tr",align:null},"Defines the strategy for task runner selection."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"k8s")),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.indexer.runner.k8sAndWorker.runnerStrategy.workerType")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String")," (e.g., ",(0,i.kt)("inlineCode",{parentName:"td"},"httpRemote"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"remote"),")"),(0,i.kt)("td",{parentName:"tr",align:null},"Specifies the variant of the worker task runner to be utilized."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"httpRemote")),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"For ",(0,i.kt)("inlineCode",{parentName:"strong"},"taskType")," runner strategy:")),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null}),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.indexer.runner.k8sAndWorker.runnerStrategy.taskType.default")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"String")," (e.g., ",(0,i.kt)("inlineCode",{parentName:"td"},"k8s"),", ",(0,i.kt)("inlineCode",{parentName:"td"},"worker"),")"),(0,i.kt)("td",{parentName:"tr",align:null},"Specifies the default runner to use if no overrides apply. This setting ensures there is always a fallback runner available."),(0,i.kt)("td",{parentName:"tr",align:null},"None"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.indexer.runner.k8sAndWorker.runnerStrategy.taskType.overrides")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"JsonObject"),"(e.g., ",(0,i.kt)("inlineCode",{parentName:"td"},'{"index_kafka": "worker"}'),")"),(0,i.kt)("td",{parentName:"tr",align:null},"Defines task-specific overrides for runner types. Each entry sets a task type to a specific runner, allowing fine control."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"{}")),(0,i.kt)("td",{parentName:"tr",align:null},"No")))))}c.isMDXComponent=!0}}]);
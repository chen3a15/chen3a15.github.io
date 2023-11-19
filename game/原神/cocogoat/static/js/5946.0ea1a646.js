"use strict";(self["define"]=self["define"]||[]).push([[5946],{35200:function(e,n,t){t.d(n,{zG:function(){return f}});var r=t(35512),a=t(19390),o=t(44847),s=t(7728),c=t(28341),l=t(15748),i=t(3146),m=t(40586);function u(){const e=(0,s.G)((()=>(console.log("[worker-macro] webpack"),new s.G(new URL(t.p+t.u(1584),t.b))))),n=(0,r.Ud)(e);return{worker:n,_worker:e}}function d(){const{worker:e,_worker:n}=u(),{worker:t,_worker:r}=u(),{scannerOnImage:s,scannerOnLine:d,recognizeAchievement:p}=e,{recognizeAchievement:f,scannerOnLine:h}=t;let E=(e,n)=>{};const v=e=>{E=e},k=e=>{throw E(-99),e};n.addEventListener("error",k),r.addEventListener("error",k);const g=(async()=>{try{const[n,r]=(0,o.LS)(),s=c.hasSIMD?"ort-wasm-simd.wasm":"ort-wasm.wasm",u=c.hasSIMD?"opencv-simd.wasm":"opencv-normal.wasm";await n,await(0,o.sB)([s,u,"ppocr.ort"],(e=>E(e)),r);const d=(0,m.Z)(i.ag.amos);await Promise.all([e.setResources(a.ZP),t.setResources(a.ZP),e.initAchievementMap(l["default"],d),t.initAchievementMap(l["default"],d)]),E(100)}catch(s){throw E(-1,s),s}n.removeEventListener("error",k),r.removeEventListener("error",k),await Promise.all([e.init(),t.init()])})();return{recognizeAchievement:f,recognizeAchievement2:p,scannerOnLine:h,scannerOnLine2:d,scannerOnImage:s,initPromise:g,workerCV:e,workerOCR:t,onProgress:v}}let p;function f(){return p||(p=d()),p}},78099:function(e,n,t){t.r(n),t.d(n,{default:function(){return D}});var r=t(10311);const a=(0,r.createElementVNode)("h1",null,[(0,r.createTextVNode)(" 椰羊·成就扫描 "),(0,r.createElementVNode)("small",null,"请选择扫描方式")],-1),o={class:"method-list"},s=(0,r.createTextVNode)(" 读屏扫描 "),c={key:0},l=(0,r.createElementVNode)("div",null,"滚动页面自动扫描",-1),i=(0,r.createElementVNode)("div",null,"推荐电脑用户使用",-1),m=[l,i],u={key:1,style:{color:"#fe6565"}},d=(0,r.createElementVNode)("div",null,"暂不支持该浏览器",-1),p=(0,r.createElementVNode)("div",{style:{"font-size":"12px"}},"请换用 Chrome 或 Edge",-1),f=[d,p],h=(0,r.createTextVNode)(" 录屏识别 "),E={key:0},v=(0,r.createElementVNode)("div",null,"上传录屏文件识别",-1),k=(0,r.createElementVNode)("div",null,"手机用户可以选择",-1),g=[v,k],w={key:1,style:{color:"#fe6565"}},y=(0,r.createElementVNode)("div",null,"暂不支持该浏览器",-1),N={style:{"font-size":"12px"}},V={class:"line-entrance"},b=(0,r.createElementVNode)("h2",null,"截图识别",-1),C=(0,r.createElementVNode)("small",null,"手动截图上传识别",-1),S=(0,r.createElementVNode)("h2",null,"图片集识别",-1),L=(0,r.createElementVNode)("small",null,"导入第三方扫描器的图片结果",-1);function O(e,n,t,l,i,d){const p=(0,r.resolveComponent)("Loader"),v=(0,r.resolveComponent)("fa-icon"),k=(0,r.resolveComponent)("router-link"),O=(0,r.resolveComponent)("FooterComponent");return(0,r.openBlock)(),(0,r.createElementBlock)("div",null,[e.load?((0,r.openBlock)(),(0,r.createElementBlock)("div",{key:1,class:(0,r.normalizeClass)(e.$style.scannerEntrance)},[a,(0,r.createElementVNode)("div",o,[(0,r.createVNode)(k,{to:{name:"frames.achievement.scan.capture-scanner",params:{direct:!0}},class:(0,r.normalizeClass)(["one",{disabled:!e.scannerCompatible}])},{default:(0,r.withCtx)((()=>[(0,r.createElementVNode)("i",null,[(0,r.createVNode)(v,{icon:"desktop"})]),(0,r.createElementVNode)("h2",null,[s,e.scannerCompatible?((0,r.openBlock)(),(0,r.createElementBlock)("small",c,m)):((0,r.openBlock)(),(0,r.createElementBlock)("small",u,f))])])),_:1},8,["to","class"]),(0,r.createVNode)(k,{class:(0,r.normalizeClass)(["one",{disabled:!e.hasRequestVideoFrameCallback}]),to:{name:"frames.achievement.scan.rvfc-scanner"}},{default:(0,r.withCtx)((()=>[(0,r.createElementVNode)("i",null,[(0,r.createVNode)(v,{icon:"photo-film"})]),(0,r.createElementVNode)("h2",null,[h,e.hasRequestVideoFrameCallback?((0,r.openBlock)(),(0,r.createElementBlock)("small",E,g)):((0,r.openBlock)(),(0,r.createElementBlock)("small",w,[y,(0,r.createElementVNode)("div",N,(0,r.toDisplayString)(e.isIOS?"仅支持 iOS 15.4 及以上":"请换用 Chrome 或 Edge"),1)]))])])),_:1},8,["to","class"])]),(0,r.createElementVNode)("div",V,[(0,r.createVNode)(k,{to:{name:"frames.achievement.scan.screenshot-scanner"}},{default:(0,r.withCtx)((()=>[(0,r.createElementVNode)("i",null,[(0,r.createVNode)(v,{icon:"crop-simple"})]),b,C])),_:1},8,["to"]),(0,r.createVNode)(k,{to:{name:"frames.achievement.scan.line-scanner"}},{default:(0,r.withCtx)((()=>[(0,r.createElementVNode)("i",null,[(0,r.createVNode)(v,{icon:"clipboard-list"})]),S,L])),_:1},8,["to"])]),(0,r.createVNode)(O,{name:"成就"})],2)):((0,r.openBlock)(),(0,r.createBlock)(p,{key:0,source:"achievement",instance:e.getScannerInstance,onDone:n[0]||(n[0]=n=>e.load=!0)},null,8,["instance"]))])}var A=t(96181),P=t(29067),R=t(28341),z=t(48206),B=t(2849),M=t(35200);z.library.add(B.tc$,B.B_A,B.OGB,B.nTQ);var T=(0,r.defineComponent)({components:{Loader:A.Z,FooterComponent:P.Z},setup(){const e=(0,r.ref)(!1);return{load:e,isIOS:R.isIOS,scannerCompatible:R.scannerCompatible,getScannerInstance:M.zG,hasRequestVideoFrameCallback:R.hasRequestVideoFrameCallback}}}),x={scannerEntrance:"scanner-entrance-dca5e5"},I=t(14545);const _={};_["$style"]=x;const j=(0,I.Z)(T,[["render",O],["__cssModules",_]]);var D=j},35512:function(e,n,t){t.d(n,{Jj:function(){return u},Ud:function(){return f}});t(23662),t(77253),t(16329);const r=Symbol("Comlink.proxy"),a=Symbol("Comlink.endpoint"),o=Symbol("Comlink.releaseProxy"),s=Symbol("Comlink.thrown"),c=e=>"object"===typeof e&&null!==e||"function"===typeof e,l={canHandle:e=>c(e)&&e[r],serialize(e){const{port1:n,port2:t}=new MessageChannel;return u(e,n),[t,[t]]},deserialize(e){return e.start(),f(e)}},i={canHandle:e=>c(e)&&s in e,serialize({value:e}){let n;return n=e instanceof Error?{isError:!0,value:{message:e.message,name:e.name,stack:e.stack}}:{isError:!1,value:e},[n,[]]},deserialize(e){if(e.isError)throw Object.assign(new Error(e.value.message),e.value);throw e.value}},m=new Map([["proxy",l],["throw",i]]);function u(e,n=self){n.addEventListener("message",(function t(r){if(!r||!r.data)return;const{id:a,type:o,path:c}=Object.assign({path:[]},r.data),l=(r.data.argumentList||[]).map(V);let i;try{const n=c.slice(0,-1).reduce(((e,n)=>e[n]),e),t=c.reduce(((e,n)=>e[n]),e);switch(o){case"GET":i=t;break;case"SET":n[c.slice(-1)[0]]=V(r.data.value),i=!0;break;case"APPLY":i=t.apply(n,l);break;case"CONSTRUCT":{const e=new t(...l);i=y(e)}break;case"ENDPOINT":{const{port1:n,port2:t}=new MessageChannel;u(e,t),i=w(n,[n])}break;case"RELEASE":i=void 0;break;default:return}}catch(m){i={value:m,[s]:0}}Promise.resolve(i).catch((e=>({value:e,[s]:0}))).then((e=>{const[r,s]=N(e);n.postMessage(Object.assign(Object.assign({},r),{id:a}),s),"RELEASE"===o&&(n.removeEventListener("message",t),p(n))}))})),n.start&&n.start()}function d(e){return"MessagePort"===e.constructor.name}function p(e){d(e)&&e.close()}function f(e,n){return E(e,[],n)}function h(e){if(e)throw new Error("Proxy has been released and is not useable")}function E(e,n=[],t=function(){}){let r=!1;const s=new Proxy(t,{get(t,a){if(h(r),a===o)return()=>b(e,{type:"RELEASE",path:n.map((e=>e.toString()))}).then((()=>{p(e),r=!0}));if("then"===a){if(0===n.length)return{then:()=>s};const t=b(e,{type:"GET",path:n.map((e=>e.toString()))}).then(V);return t.then.bind(t)}return E(e,[...n,a])},set(t,a,o){h(r);const[s,c]=N(o);return b(e,{type:"SET",path:[...n,a].map((e=>e.toString())),value:s},c).then(V)},apply(t,o,s){h(r);const c=n[n.length-1];if(c===a)return b(e,{type:"ENDPOINT"}).then(V);if("bind"===c)return E(e,n.slice(0,-1));const[l,i]=k(s);return b(e,{type:"APPLY",path:n.map((e=>e.toString())),argumentList:l},i).then(V)},construct(t,a){h(r);const[o,s]=k(a);return b(e,{type:"CONSTRUCT",path:n.map((e=>e.toString())),argumentList:o},s).then(V)}});return s}function v(e){return Array.prototype.concat.apply([],e)}function k(e){const n=e.map(N);return[n.map((e=>e[0])),v(n.map((e=>e[1])))]}const g=new WeakMap;function w(e,n){return g.set(e,n),e}function y(e){return Object.assign(e,{[r]:!0})}function N(e){for(const[n,t]of m)if(t.canHandle(e)){const[r,a]=t.serialize(e);return[{type:"HANDLER",name:n,value:r},a]}return[{type:"RAW",value:e},g.get(e)||[]]}function V(e){switch(e.type){case"HANDLER":return m.get(e.name).deserialize(e.value);case"RAW":return e.value}}function b(e,n,t){return new Promise((r=>{const a=C();e.addEventListener("message",(function n(t){t.data&&t.data.id&&t.data.id===a&&(e.removeEventListener("message",n),r(t.data))})),e.start&&e.start(),e.postMessage(Object.assign({id:a},n),t)}))}function C(){return new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-")}},40586:function(e,n,t){var r=t(81319),a=1,o=4;function s(e){return(0,r.Z)(e,a|o)}n["Z"]=s}}]);
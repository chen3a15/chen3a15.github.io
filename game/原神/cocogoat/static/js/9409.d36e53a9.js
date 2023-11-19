"use strict";(self["define"]=self["define"]||[]).push([[9409],{10787:function(e,n,o){o.d(n,{i:function(){return s},h:function(){return p}});o(23662),o(65946);var t=o(10311),r=o(67311);const l={inheritAttrs:!1};function i(e,n,o,r,l,i){return(0,t.renderSlot)(e.$slots,"default")}var a=(0,r.Z)(l,[["render",i],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection.vue"]]);const u={name:"ElCollectionItem",inheritAttrs:!1};function d(e,n,o,r,l,i){return(0,t.renderSlot)(e.$slots,"default")}var c=(0,r.Z)(u,[["render",d],["__file","/home/runner/work/element-plus/element-plus/packages/components/collection/src/collection-item.vue"]]);const s="data-el-collection-item",p=e=>{const n=`El${e}Collection`,o=`${n}Item`,r=Symbol(n),l=Symbol(o),i={...a,name:n,setup(){const e=(0,t.ref)(null),n=new Map,o=()=>{const o=(0,t.unref)(e);if(!o)return[];const r=Array.from(o.querySelectorAll(`[${s}]`)),l=[...n.values()];return l.sort(((e,n)=>r.indexOf(e.ref)-r.indexOf(n.ref)))};(0,t.provide)(r,{itemMap:n,getItems:o,collectionRef:e})}},u={...c,name:o,setup(e,{attrs:n}){const o=(0,t.ref)(null),i=(0,t.inject)(r,void 0);(0,t.provide)(l,{collectionItemRef:o}),(0,t.onMounted)((()=>{const e=(0,t.unref)(o);e&&i.itemMap.set(e,{ref:e,...n})})),(0,t.onBeforeUnmount)((()=>{const e=(0,t.unref)(o);i.itemMap.delete(e)}))}};return{COLLECTION_INJECTION_KEY:r,COLLECTION_ITEM_INJECTION_KEY:l,ElCollection:i,ElCollectionItem:u}}},93219:function(e,n,o){o(75452)},15116:function(e,n,o){o(75452)},79121:function(e,n,o){o.d(n,{YK:function(){return se},Df:function(){return pe},o2:function(){return fe}});var t=o(10311),r=o(29056),l=o(15471),i=o(782),a=o(77707),u=o(8780),d=o(43137);o(23662);const c=Symbol("elDropdown");var s=o(67311),p=o(17398),f=o(10787);const m=(0,p.o8)({style:{type:(0,p.Cq)([String,Array,Object])},currentTabId:{type:(0,p.Cq)(String)},defaultCurrentTabId:String,loop:Boolean,dir:{type:String,values:["ltr","rtl"],default:"ltr"},orientation:{type:(0,p.Cq)(String)},onBlur:Function,onFocus:Function,onMousedown:Function}),{ElCollection:v,ElCollectionItem:g,COLLECTION_INJECTION_KEY:w,COLLECTION_ITEM_INJECTION_KEY:b}=(0,f.h)("RovingFocusGroup"),h=Symbol("elRovingFocusGroup"),C=Symbol("elRovingFocusGroupItem");o(25766);var y=o(57035);const I={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"},k=(e,n)=>{if("rtl"!==n)return e;switch(e){case y.n.right:return y.n.left;case y.n.left:return y.n.right;default:return e}},E=(e,n,o)=>{const t=k(e.key,o);if(("vertical"!==n||![y.n.left,y.n.right].includes(t))&&("horizontal"!==n||![y.n.up,y.n.down].includes(t)))return I[t]},S=(e,n)=>e.map(((o,t)=>e[(t+n)%e.length])),x=e=>{const{activeElement:n}=document;for(const o of e){if(o===n)return;if(o.focus(),n!==document.activeElement)return}};var B=o(39713);const F="currentTabIdChange",T="rovingFocusGroup.entryFocus",_={bubbles:!1,cancelable:!0},R=(0,t.defineComponent)({name:"ElRovingFocusGroupImpl",inheritAttrs:!1,props:m,emits:[F,"entryFocus"],setup(e,{emit:n}){var o;const r=(0,t.ref)(null!=(o=e.currentTabId||e.defaultCurrentTabId)?o:null),l=(0,t.ref)(!1),i=(0,t.ref)(!1),a=(0,t.ref)(null),{getItems:u}=(0,t.inject)(w,void 0),d=(0,t.computed)((()=>[{outline:"none"},e.style])),c=e=>{n(F,e)},s=()=>{l.value=!0},p=(0,B.Mj)((n=>{var o;null==(o=e.onMousedown)||o.call(e,n)}),(()=>{i.value=!0})),f=(0,B.Mj)((n=>{var o;null==(o=e.onFocus)||o.call(e,n)}),(e=>{const n=!(0,t.unref)(i),{target:o,currentTarget:a}=e;if(o===a&&n&&!(0,t.unref)(l)){const e=new Event(T,_);if(null==a||a.dispatchEvent(e),!e.defaultPrevented){const e=u().filter((e=>e.focusable)),n=e.find((e=>e.active)),o=e.find((e=>e.id===(0,t.unref)(r))),l=[n,o,...e].filter(Boolean),i=l.map((e=>e.ref));x(i)}}i.value=!1})),m=(0,B.Mj)((n=>{var o;null==(o=e.onBlur)||o.call(e,n)}),(()=>{l.value=!1})),v=(...e)=>{n("entryFocus",...e)};(0,t.provide)(h,{currentTabbedId:(0,t.readonly)(r),loop:(0,t.toRef)(e,"loop"),tabIndex:(0,t.computed)((()=>(0,t.unref)(l)?-1:0)),rovingFocusGroupRef:a,rovingFocusGroupRootStyle:d,orientation:(0,t.toRef)(e,"orientation"),dir:(0,t.toRef)(e,"dir"),onItemFocus:c,onItemShiftTab:s,onBlur:m,onFocus:f,onMousedown:p}),(0,t.watch)((()=>e.currentTabId),(e=>{r.value=null!=e?e:null})),(0,t.onMounted)((()=>{const e=(0,t.unref)(a);(0,B.on)(e,T,v)})),(0,t.onBeforeUnmount)((()=>{const e=(0,t.unref)(a);(0,B.S1)(e,T,v)}))}});function M(e,n,o,r,l,i){return(0,t.renderSlot)(e.$slots,"default")}var N=(0,s.Z)(R,[["render",M],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group-impl.vue"]]);const O=(0,t.defineComponent)({name:"ElRovingFocusGroup",components:{ElFocusGroupCollection:v,ElRovingFocusGroupImpl:N}});function D(e,n,o,r,l,i){const a=(0,t.resolveComponent)("el-roving-focus-group-impl"),u=(0,t.resolveComponent)("el-focus-group-collection");return(0,t.openBlock)(),(0,t.createBlock)(u,null,{default:(0,t.withCtx)((()=>[(0,t.createVNode)(a,(0,t.normalizeProps)((0,t.guardReactiveProps)(e.$attrs)),{default:(0,t.withCtx)((()=>[(0,t.renderSlot)(e.$slots,"default")])),_:3},16)])),_:3})}var P=(0,s.Z)(O,[["render",D],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group.vue"]]),j=o(33584),K=o(66384),z=o(91525),$=o(4259),G=o(43324),A=o(80048);const{ButtonGroup:L}=r.mi,V=(0,t.defineComponent)({name:"ElDropdown",components:{ElButton:r.mi,ElButtonGroup:L,ElScrollbar:i.Mr,ElDropdownCollection:d.fJ,ElTooltip:l.Q0,ElRovingFocusGroup:P,ElOnlyChild:j.n,ElIcon:a.gn,ArrowDown:u.K5e},props:d.O8,emits:["visible-change","click","command"],setup(e,{emit:n}){const o=(0,t.getCurrentInstance)(),r=(0,K.s)("dropdown"),{t:l}=(0,z.bU)(),i=(0,t.ref)(),a=(0,t.ref)(),u=(0,t.ref)(null),d=(0,t.ref)(null),s=(0,t.ref)(null),p=(0,t.ref)(null),f=(0,t.ref)(!1),m=[y.n.enter,y.n.space,y.n.down],v=(0,t.computed)((()=>({maxHeight:(0,$.Nn)(e.maxHeight)}))),g=(0,t.computed)((()=>[r.m(k.value)])),w=(0,G.M)().value,b=(0,t.computed)((()=>e.id||w));function h(){C()}function C(){var e;null==(e=u.value)||e.onClose()}function I(){var e;null==(e=u.value)||e.onOpen()}const k=(0,A.tH)();function E(...e){n("command",...e)}function S(){}function x(){const e=(0,t.unref)(d);null==e||e.focus(),p.value=null}function B(e){p.value=e}function F(e){f.value||(e.preventDefault(),e.stopImmediatePropagation())}function T(e){"keydown"===(null==e?void 0:e.type)&&d.value.focus(),n("visible-change",!0)}function _(){n("visible-change",!1)}(0,t.provide)(c,{contentRef:d,role:(0,t.computed)((()=>e.role)),triggerId:b,isUsingKeyboard:f,onItemEnter:S,onItemLeave:x}),(0,t.provide)("elDropdown",{instance:o,dropdownSize:k,handleClick:h,commandHandler:E,trigger:(0,t.toRef)(e,"trigger"),hideOnClick:(0,t.toRef)(e,"hideOnClick")});const R=e=>{var n,o;e.preventDefault(),null==(o=null==(n=d.value)?void 0:n.focus)||o.call(n,{preventScroll:!0})},M=e=>{n("click",e)};return{t:l,ns:r,scrollbar:s,wrapStyle:v,dropdownTriggerKls:g,dropdownSize:k,triggerId:b,triggerKeys:m,currentTabId:p,handleCurrentTabIdChange:B,handlerMainButtonClick:M,handleEntryFocus:F,handleClose:C,handleOpen:I,handleShowTooltip:T,handleHideTooltip:_,onFocusAfterTrapped:R,popperRef:u,contentRef:d,triggeringElementRef:i,referenceElementRef:a}}});function H(e,n,o,r,l,i){var a;const u=(0,t.resolveComponent)("el-dropdown-collection"),d=(0,t.resolveComponent)("el-roving-focus-group"),c=(0,t.resolveComponent)("el-scrollbar"),s=(0,t.resolveComponent)("el-only-child"),p=(0,t.resolveComponent)("el-tooltip"),f=(0,t.resolveComponent)("el-button"),m=(0,t.resolveComponent)("arrow-down"),v=(0,t.resolveComponent)("el-icon"),g=(0,t.resolveComponent)("el-button-group");return(0,t.openBlock)(),(0,t.createElementBlock)("div",{class:(0,t.normalizeClass)([e.ns.b(),e.ns.is("disabled",e.disabled)])},[(0,t.createVNode)(p,{ref:"popperRef",role:e.role,effect:e.effect,"fallback-placements":["bottom","top"],"popper-options":e.popperOptions,"gpu-acceleration":!1,"hide-after":"hover"===e.trigger?e.hideTimeout:0,"manual-mode":!0,placement:e.placement,"popper-class":[e.ns.e("popper"),e.popperClass],"reference-element":null==(a=e.referenceElementRef)?void 0:a.$el,trigger:e.trigger,"trigger-keys":e.triggerKeys,"trigger-target-el":e.contentRef,"show-after":"hover"===e.trigger?e.showTimeout:0,"stop-popper-mouse-event":!1,"virtual-ref":e.triggeringElementRef,"virtual-triggering":e.splitButton,disabled:e.disabled,transition:`${e.ns.namespace.value}-zoom-in-top`,teleported:"",pure:"",persistent:"",onShow:e.handleShowTooltip,onHide:e.handleHideTooltip},(0,t.createSlots)({content:(0,t.withCtx)((()=>[(0,t.createVNode)(c,{ref:"scrollbar","wrap-style":e.wrapStyle,tag:"div","view-class":e.ns.e("list")},{default:(0,t.withCtx)((()=>[(0,t.createVNode)(d,{loop:e.loop,"current-tab-id":e.currentTabId,orientation:"horizontal",onCurrentTabIdChange:e.handleCurrentTabIdChange,onEntryFocus:e.handleEntryFocus},{default:(0,t.withCtx)((()=>[(0,t.createVNode)(u,null,{default:(0,t.withCtx)((()=>[(0,t.renderSlot)(e.$slots,"dropdown")])),_:3})])),_:3},8,["loop","current-tab-id","onCurrentTabIdChange","onEntryFocus"])])),_:3},8,["wrap-style","view-class"])])),_:2},[e.splitButton?void 0:{name:"default",fn:(0,t.withCtx)((()=>[(0,t.createVNode)(s,{id:e.triggerId,role:"button",tabindex:e.tabindex},{default:(0,t.withCtx)((()=>[(0,t.renderSlot)(e.$slots,"default")])),_:3},8,["id","tabindex"])]))}]),1032,["role","effect","popper-options","hide-after","placement","popper-class","reference-element","trigger","trigger-keys","trigger-target-el","show-after","virtual-ref","virtual-triggering","disabled","transition","onShow","onHide"]),e.splitButton?((0,t.openBlock)(),(0,t.createBlock)(g,{key:0},{default:(0,t.withCtx)((()=>[(0,t.createVNode)(f,(0,t.mergeProps)({ref:"referenceElementRef"},e.buttonProps,{size:e.dropdownSize,type:e.type,disabled:e.disabled,tabindex:e.tabindex,onClick:e.handlerMainButtonClick}),{default:(0,t.withCtx)((()=>[(0,t.renderSlot)(e.$slots,"default")])),_:3},16,["size","type","disabled","tabindex","onClick"]),(0,t.createVNode)(f,(0,t.mergeProps)({id:e.triggerId,ref:"triggeringElementRef"},e.buttonProps,{role:"button",size:e.dropdownSize,type:e.type,class:e.ns.e("caret-button"),disabled:e.disabled,tabindex:e.tabindex,"aria-label":e.t("el.dropdown.toggleDropdown")}),{default:(0,t.withCtx)((()=>[(0,t.createVNode)(v,{class:(0,t.normalizeClass)(e.ns.e("icon"))},{default:(0,t.withCtx)((()=>[(0,t.createVNode)(m)])),_:1},8,["class"])])),_:1},16,["id","size","type","class","disabled","tabindex","aria-label"])])),_:3})):(0,t.createCommentVNode)("v-if",!0)],2)}var q=(0,s.Z)(V,[["render",H],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown.vue"]]),J=o(84270);const Z=(0,t.defineComponent)({name:"DropdownItemImpl",components:{ElIcon:a.gn},props:d.TB,emits:["pointermove","pointerleave","click","clickimpl"],setup(e,{emit:n}){const o=(0,K.s)("dropdown"),{role:r}=(0,t.inject)(c,void 0),{collectionItemRef:l}=(0,t.inject)(d.Os,void 0),{collectionItemRef:i}=(0,t.inject)(b,void 0),{rovingFocusGroupItemRef:a,tabIndex:u,handleFocus:s,handleKeydown:p,handleMousedown:m}=(0,t.inject)(C,void 0),v=(0,J.F)(l,i,a),g=(0,t.computed)((()=>"menu"===r.value?"menuitem":"navigation"===r.value?"link":"button")),w=(0,B.Mj)((e=>{const{code:o}=e;if(o===y.n.enter||o===y.n.space)return e.preventDefault(),e.stopImmediatePropagation(),n("clickimpl",e),!0}),p);return{ns:o,itemRef:v,dataset:{[f.i]:""},role:g,tabIndex:u,handleFocus:s,handleKeydown:w,handleMousedown:m}}}),U=["aria-disabled","tabindex","role"];function Y(e,n,o,r,l,i){const a=(0,t.resolveComponent)("el-icon");return(0,t.openBlock)(),(0,t.createElementBlock)(t.Fragment,null,[e.divided?((0,t.openBlock)(),(0,t.createElementBlock)("li",(0,t.mergeProps)({key:0,role:"separator",class:e.ns.bem("menu","item","divided")},e.$attrs),null,16)):(0,t.createCommentVNode)("v-if",!0),(0,t.createElementVNode)("li",(0,t.mergeProps)({ref:e.itemRef},{...e.dataset,...e.$attrs},{"aria-disabled":e.disabled,class:[e.ns.be("menu","item"),e.ns.is("disabled",e.disabled)],tabindex:e.tabIndex,role:e.role,onClick:n[0]||(n[0]=n=>e.$emit("clickimpl",n)),onFocus:n[1]||(n[1]=(...n)=>e.handleFocus&&e.handleFocus(...n)),onKeydown:n[2]||(n[2]=(...n)=>e.handleKeydown&&e.handleKeydown(...n)),onMousedown:n[3]||(n[3]=(...n)=>e.handleMousedown&&e.handleMousedown(...n)),onPointermove:n[4]||(n[4]=n=>e.$emit("pointermove",n)),onPointerleave:n[5]||(n[5]=n=>e.$emit("pointerleave",n))}),[e.icon?((0,t.openBlock)(),(0,t.createBlock)(a,{key:0},{default:(0,t.withCtx)((()=>[((0,t.openBlock)(),(0,t.createBlock)((0,t.resolveDynamicComponent)(e.icon)))])),_:1})):(0,t.createCommentVNode)("v-if",!0),(0,t.renderSlot)(e.$slots,"default")],16,U)],64)}var W=(0,s.Z)(Z,[["render",Y],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item-impl.vue"]]);const X=()=>{const e=(0,t.inject)("elDropdown",{}),n=(0,t.computed)((()=>null==e?void 0:e.dropdownSize));return{elDropdown:e,_elDropdownSize:n}},Q=(0,t.defineComponent)({components:{ElRovingFocusCollectionItem:g},props:{focusable:{type:Boolean,default:!0},active:{type:Boolean,default:!1}},emits:["mousedown","focus","keydown"],setup(e,{emit:n}){const{currentTabbedId:o,loop:r,onItemFocus:l,onItemShiftTab:i}=(0,t.inject)(h,void 0),{getItems:a}=(0,t.inject)(w,void 0),u=(0,G.M)(),d=(0,t.ref)(null),c=(0,B.Mj)((e=>{n("mousedown",e)}),(n=>{e.focusable?l((0,t.unref)(u)):n.preventDefault()})),s=(0,B.Mj)((e=>{n("focus",e)}),(()=>{l((0,t.unref)(u))})),p=(0,B.Mj)((e=>{n("keydown",e)}),(e=>{const{key:n,shiftKey:o,target:l,currentTarget:u}=e;if(n===y.n.tab&&o)return void i();if(l!==u)return;const d=E(e);if(d){e.preventDefault();const n=a().filter((e=>e.focusable));let o=n.map((e=>e.ref));switch(d){case"last":o.reverse();break;case"prev":case"next":{"prev"===d&&o.reverse();const e=o.indexOf(u);o=r.value?S(o,e+1):o.slice(e+1);break}default:break}(0,t.nextTick)((()=>{x(o)}))}})),f=(0,t.computed)((()=>o.value===(0,t.unref)(u)));return(0,t.provide)(C,{rovingFocusGroupItemRef:d,tabIndex:(0,t.computed)((()=>(0,t.unref)(f)?0:-1)),handleMousedown:c,handleFocus:s,handleKeydown:p}),{id:u,handleKeydown:p,handleFocus:s,handleMousedown:c}}});function ee(e,n,o,r,l,i){const a=(0,t.resolveComponent)("el-roving-focus-collection-item");return(0,t.openBlock)(),(0,t.createBlock)(a,{id:e.id,focusable:e.focusable,active:e.active},{default:(0,t.withCtx)((()=>[(0,t.renderSlot)(e.$slots,"default")])),_:3},8,["id","focusable","active"])}var ne=(0,s.Z)(Q,[["render",ee],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-item.vue"]]);const oe=(0,t.defineComponent)({name:"ElDropdownItem",components:{ElDropdownCollectionItem:d.GH,ElRovingFocusItem:ne,ElDropdownItemImpl:W},inheritAttrs:!1,props:d.TB,emits:["pointermove","pointerleave","click"],setup(e,{emit:n,attrs:o}){const{elDropdown:r}=X(),l=(0,t.getCurrentInstance)(),i=(0,t.ref)(null),a=(0,t.computed)((()=>{var e,n;return null!=(n=null==(e=(0,t.unref)(i))?void 0:e.textContent)?n:""})),{onItemEnter:u,onItemLeave:d}=(0,t.inject)(c,void 0),s=(0,B.Mj)((e=>(n("pointermove",e),e.defaultPrevented)),(0,B.rk)((n=>{var o;e.disabled?d(n):(u(n),n.defaultPrevented||null==(o=n.currentTarget)||o.focus())}))),p=(0,B.Mj)((e=>(n("pointerleave",e),e.defaultPrevented)),(0,B.rk)((e=>{d(e)}))),f=(0,B.Mj)((e=>(n("click",e),"keydown"!==e.type&&e.defaultPrevented)),(n=>{var o,t,i;e.disabled?n.stopImmediatePropagation():((null==(o=null==r?void 0:r.hideOnClick)?void 0:o.value)&&(null==(t=r.handleClick)||t.call(r)),null==(i=r.commandHandler)||i.call(r,e.command,l,n))})),m=(0,t.computed)((()=>({...e,...o})));return{handleClick:f,handlePointerMove:s,handlePointerLeave:p,textContent:a,propsAndAttrs:m}}});function te(e,n,o,r,l,i){var a;const u=(0,t.resolveComponent)("el-dropdown-item-impl"),d=(0,t.resolveComponent)("el-roving-focus-item"),c=(0,t.resolveComponent)("el-dropdown-collection-item");return(0,t.openBlock)(),(0,t.createBlock)(c,{disabled:e.disabled,"text-value":null!=(a=e.textValue)?a:e.textContent},{default:(0,t.withCtx)((()=>[(0,t.createVNode)(d,{focusable:!e.disabled},{default:(0,t.withCtx)((()=>[(0,t.createVNode)(u,(0,t.mergeProps)(e.propsAndAttrs,{onPointerleave:e.handlePointerLeave,onPointermove:e.handlePointerMove,onClickimpl:e.handleClick}),{default:(0,t.withCtx)((()=>[(0,t.renderSlot)(e.$slots,"default")])),_:3},16,["onPointerleave","onPointermove","onClickimpl"])])),_:3},8,["focusable"])])),_:3},8,["disabled","text-value"])}var re=(0,s.Z)(oe,[["render",te],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item.vue"]]),le=o(60011);const ie=(0,t.defineComponent)({name:"ElDropdownMenu",props:d.lX,setup(e){const n=(0,K.s)("dropdown"),{_elDropdownSize:o}=X(),r=o.value,{focusTrapRef:l,onKeydown:i}=(0,t.inject)(le.D5,void 0),{contentRef:a,role:u,triggerId:s}=(0,t.inject)(c,void 0),{collectionRef:p,getItems:f}=(0,t.inject)(d.Jd,void 0),{rovingFocusGroupRef:m,rovingFocusGroupRootStyle:v,tabIndex:g,onBlur:b,onFocus:C,onMousedown:I}=(0,t.inject)(h,void 0),{collectionRef:k}=(0,t.inject)(w,void 0),E=(0,t.computed)((()=>[n.b("menu"),n.bm("menu",null==r?void 0:r.value)])),S=(0,J.F)(a,p,l,m,k),F=(0,B.Mj)((n=>{var o;null==(o=e.onKeydown)||o.call(e,n)}),(e=>{const{currentTarget:n,code:o,target:r}=e;n.contains(r);if(y.n.tab===o&&e.stopImmediatePropagation(),e.preventDefault(),r!==(0,t.unref)(a))return;if(!d["in"].includes(o))return;const l=f().filter((e=>!e.disabled)),i=l.map((e=>e.ref));d.Sf.includes(o)&&i.reverse(),x(i)})),T=e=>{F(e),i(e)};return{size:r,rovingFocusGroupRootStyle:v,tabIndex:g,dropdownKls:E,role:u,triggerId:s,dropdownListWrapperRef:S,handleKeydown:T,onBlur:b,onFocus:C,onMousedown:I}}}),ae=["role","aria-labelledby"];function ue(e,n,o,r,l,i){return(0,t.openBlock)(),(0,t.createElementBlock)("ul",{ref:e.dropdownListWrapperRef,class:(0,t.normalizeClass)(e.dropdownKls),style:(0,t.normalizeStyle)(e.rovingFocusGroupRootStyle),tabindex:-1,role:e.role,"aria-labelledby":e.triggerId,onBlur:n[0]||(n[0]=(...n)=>e.onBlur&&e.onBlur(...n)),onFocus:n[1]||(n[1]=(...n)=>e.onFocus&&e.onFocus(...n)),onKeydown:n[2]||(n[2]=(...n)=>e.handleKeydown&&e.handleKeydown(...n)),onMousedown:n[3]||(n[3]=(...n)=>e.onMousedown&&e.onMousedown(...n))},[(0,t.renderSlot)(e.$slots,"default")],46,ae)}var de=(0,s.Z)(ie,[["render",ue],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-menu.vue"]]),ce=o(6700);const se=(0,ce.nz)(q,{DropdownItem:re,DropdownMenu:de}),pe=(0,ce.dp)(re),fe=(0,ce.dp)(de)},43137:function(e,n,o){o.d(n,{GH:function(){return v},Jd:function(){return g},O8:function(){return u},Os:function(){return w},Sf:function(){return p},TB:function(){return d},fJ:function(){return m},in:function(){return f},lX:function(){return c}});var t=o(17398),r=o(1656),l=o(49434),i=o(57035),a=o(10787);const u=(0,t.o8)({trigger:r.ks.trigger,effect:{...r.sp.effect,default:"light"},type:{type:(0,t.Cq)(String)},placement:{type:(0,t.Cq)(String),default:"bottom"},popperOptions:{type:(0,t.Cq)(Object),default:()=>({})},id:String,size:{type:String,default:""},splitButton:Boolean,hideOnClick:{type:Boolean,default:!0},loop:{type:Boolean,default:!0},showTimeout:{type:Number,default:150},hideTimeout:{type:Number,default:150},tabindex:{type:(0,t.Cq)([Number,String]),default:0},maxHeight:{type:(0,t.Cq)([Number,String]),default:""},popperClass:{type:String,default:""},disabled:{type:Boolean,default:!1},role:{type:String,default:"menu"},buttonProps:{type:(0,t.Cq)(Object)}}),d=(0,t.o8)({command:{type:[Object,String,Number],default:()=>({})},disabled:Boolean,divided:Boolean,textValue:String,icon:{type:l.AA}}),c=(0,t.o8)({onKeydown:{type:(0,t.Cq)(Function)}}),s=[i.n.down,i.n.pageDown,i.n.home],p=[i.n.up,i.n.pageUp,i.n.end],f=[...s,...p],{ElCollection:m,ElCollectionItem:v,COLLECTION_INJECTION_KEY:g,COLLECTION_ITEM_INJECTION_KEY:w}=(0,a.h)("Dropdown")},95638:function(e,n,o){o(75452),o(24787),o(26238)},84270:function(e,n,o){o.d(n,{F:function(){return r}});var t=o(91239);const r=(...e)=>n=>{e.forEach((e=>{(0,t.mf)(e)?e(n):e.value=n}))}}}]);
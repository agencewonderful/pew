!function(e){var t={};function n(r){if(t[r])return t[r].exports;var s=t[r]={i:r,l:!1,exports:{}};return e[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){"use strict";t.a=class{constructor(e,t,n,r){this.key=e,this.classDef=t,this.domSelector=n,this.parentHTMLElement=r,this.HTMLCollection=null}debug(){this.__DEBUG=!0}enhance(e){this.HTMLCollection=this.findDOMElements(e),this.HTMLCollection.forEach(e=>{this.enhanceElement(e)})}enhanceElement(e){return new this.classDef(e)}findDOMElements(e){this.parentHTMLElement||(this.parentHTMLElement=document.body);let t=[],n=[],r=this.parentHTMLElement.querySelectorAll(this.domSelector);if(r.length)for(let s=0;s<r.length;s++)e||!r[s].hasAttribute("data-no-pew")?t.push(r[s]):n.push(r[s]);if(this.__DEBUG){let e=n.length>0?", and "+n.length+" ignored@ due to [data-no-pew] : ":"";console.warn('[PewJS DEBUG] RegistryItem : "'+this.key+'" matched '+r.length+" results in ParentNode",this.parentHTMLElement,'with selector "'+this.domSelector+'" :',t,e,n)}return t}}},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),s=n(4),i=n(0);t.Pew=class{constructor(e,t=!1){this.registry=new s.a,this.enhancer=new r.a,this.__DEBUG=t}__debug(){this.__DEBUG=!0,this.enhancer.__debug()}enhanceRegistry(){this.__DEBUG&&console.info("[PewJS] Automatic enhancement starting on the following registry : ",this.registry.getAll()),this.enhancer.enhance(this.registry)}addRegistryEntry({key:e,classDef:t,domSelector:n}){let r=new i.a(e,t,n);return this.registry.addEntry(r,this.__DEBUG),this}enhanceRegistryEntry(e){let t=this.registry.getEntry(e);if(t)this.enhancer.enhanceEntry(t,!0);else if(this.__DEBUG)throw'[PewJS] No entry found for Registry Entry key "'+e+'".';return this}}},function(e,t,n){"use strict";t.a=class{__debug(){this.__DEBUG=!0}enhance(e){let t=e.getAll();return Object.keys(t).map(e=>{this.enhanceEntry(t[e])})}enhanceEntry(e,t){this.__DEBUG&&e.debug(),e.enhance(t)}}},function(e,t,n){"use strict";t.a=class{constructor(){this.entries={}}addEntry(e){this.entries[e.key]=e}getAll(){return this.entries}getEntry(e){return!!this.entries[e]&&this.entries[e]}}}]);
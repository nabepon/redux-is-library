webpackJsonp([0],{0:function(e,t,n){e.exports=n(1)},1:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(2),a=n(24),s=r(a),c=n(26),l=r(c),f=function(){function e(){i(this,e),this.store=(0,u.createStore)(s.default,{}),this.el=document.querySelector("#app")}return o(e,[{key:"counterPage",value:function(){var e=new l.default(this.store);this.el.appendChild(e.mount())}}]),e}();window.app=new f},24:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),o=n(25),u=r(o);t.default=(0,i.combineReducers)({counter:u.default})},25:function(e,t){"use strict";function n(e){return{type:u,payload:{count:e+1}}}function r(e){return{type:a,payload:{count:e-1}}}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments[1],n=t.type,r=t.payload;switch(n){case u:return o({},e,r);case a:return o({},e,r);default:return e}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.increment=n,t.decrement=r,t.default=i;var u="INCREMENT",a="DECREMENT",s={count:0}},26:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(27),a=n(25),s=r(a),c=function(){function e(t){i(this,e),this.store=t,this.actions=(0,u.mapDispatchToActions)(this.store,s),this.render=this.render.bind(this),this.handler=this.handler.bind(this)}return o(e,[{key:"mount",value:function(){return this.unsubscribe=this.store.subscribe(this.render),this.el=document.createElement("div"),this.el.addEventListener("click",this.handler,!1),this.render(),this.el}},{key:"unmount",value:function(){this.unsubscribe(),this.el.removeEventListener("click",this.handler,!1),this.el.parentNode.removeChild(this.el)}},{key:"handler",value:function(e){var t=this.store.getState().counter;(0,u.hasClass)(e,"js-increment")&&this.actions.increment(t.count),(0,u.hasClass)(e,"js-decrement")&&this.actions.decrement(t.count)}},{key:"render",value:function(){var e=this.store.getState().counter;this.el.innerHTML="\n      <div>"+e.count+'</div>\n      <button class="js-increment">increment</button>\n      <button class="js-decrement">decrement</button>\n    '}}]),e}();t.default=c},27:function(e,t,n){"use strict";function r(e,t){var n=e.dispatch,r=o({},t);for(var i in r)r[i]=(0,u.bindActionCreators)(r[i],n);return r}function i(e,t){return e.target.classList.contains(t)}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.mapDispatchToActions=r,t.hasClass=i;var u=n(2)}});
//# sourceMappingURL=bundle.js.map
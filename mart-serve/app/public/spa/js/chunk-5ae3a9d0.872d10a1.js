(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ae3a9d0"],{"0517":function(e,t,r){"use strict";r("4bf8"),r("5c98"),r("9dff"),r("abea"),r("c549"),r("652c")},"3ca2":function(e,t,r){},"652c":function(e,t,r){},"6db4":function(e,t,r){"use strict";var n=r("1c8b"),a=r("c10f").trim,s=r("f221");n({target:"String",proto:!0,forced:s("trim")},{trim:function(){return a(this)}})},a05d:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"forgetpwd"},[r("h2",[e._v("找回密码")]),r("p",{staticClass:"tab"},[r("span",{class:{active:0===e.tab},on:{click:function(t){return e.tabc(0)}}},[e._v("邮箱找回")]),r("span",{class:{active:1===e.tab},on:{click:function(t){return e.tabc(1)}}},[e._v("手机号找回")])]),0===e.tab?r("van-form",{on:{submit:e.onEmail}},[r("van-field",{attrs:{name:"email",label:"邮箱",placeholder:"邮箱",rules:[{pattern:/\.com$/,message:"请填写正确的邮箱"}]},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),r("van-field",{attrs:{name:"verifyCode",label:"验证码",placeholder:"验证码",rules:[{required:!0,message:"请填写验证码"}]},model:{value:e.emailVerify,callback:function(t){e.emailVerify=t},expression:"emailVerify"}}),r("van-field",{attrs:{name:"password",type:"password",label:"密码",placeholder:"密码",rules:[{required:!0,message:"请输入新密码"}]},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),r("van-field",{attrs:{name:"lostpassword",type:"password",label:"重输密码",placeholder:"请再次输入密码",rules:[{validator:function(){return e.lostpassword===e.password},message:"请让两次输入的密码一致"}]},model:{value:e.lostpassword,callback:function(t){e.lostpassword=t},expression:"lostpassword"}}),r("span",{class:e.verifyclass?"db":"verify",on:{click:e.getemailverify}},[e._v(e._s(e.msg))]),r("div",{staticStyle:{margin:"16px"}},[r("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v(" 提交 ")])],1)],1):e._e(),1===e.tab?r("van-form",{attrs:{"validate-trigger":"onChange"},on:{submit:e.onmobile}},[r("van-field",{attrs:{name:"mobile",label:"手机号",placeholder:"手机号",rules:[{pattern:/^1[3578]\d{9}$/,message:"请填写正确的手机号"}]},model:{value:e.mobile,callback:function(t){e.mobile=t},expression:"mobile"}}),r("van-field",{attrs:{name:"verifyCode",label:"验证码",placeholder:"验证码",rules:[{required:!0,message:"请填写验证码"}]},model:{value:e.mobileVerify,callback:function(t){e.mobileVerify=t},expression:"mobileVerify"}}),r("span",{class:e.verifyclass?"db":"verify",on:{click:e.getverify}},[e._v(e._s(e.msg))]),r("van-field",{attrs:{name:"password",type:"password",label:"密码",placeholder:"密码",rules:[{required:!0,message:"请输入新密码"}]},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),r("van-field",{attrs:{name:"lostpassword",type:"password",label:"重输密码",placeholder:"再次输入密码",rules:[{validator:function(){return e.lostpassword===e.password},message:"请让两次输入的密码一致"}]},model:{value:e.lostpassword,callback:function(t){e.lostpassword=t},expression:"lostpassword"}}),r("div",{staticStyle:{margin:"16px"}},[r("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v(" 提交 ")])],1)],1):e._e()],1)},a=[],s=(r("6db4"),r("0517"),r("b6f5")),u=(r("6a61"),r("cf7f")),i=r("c24f"),o={data:function(){return{email:"",emailVerify:"",mobile:"",mobileVerify:"",y:null,tab:0,msg:"获取验证码",verifyclass:!1,lostpassword:"",password:""}},methods:{onEmail:function(e){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Object(i["h"])(e);case 2:n=r.sent,n.data.code?Object(s["a"])({type:"success",message:n.data.msg,onClose:function(){t.$router.history.push("/login")}}):Object(s["a"])({type:"danger",message:n.data.msg});case 4:case"end":return r.stop()}}),r)})))()},onmobile:function(e){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,Object(i["i"])(e);case 2:n=r.sent,n.data.code?Object(s["a"])({type:"success",message:n.data.msg,onClose:function(){t.$router.history.push("/login")}}):Object(s["a"])({type:"danger",message:n.data.msg});case 4:case"end":return r.stop()}}),r)})))()},tabc:function(e){this.tab=e},getemailverify:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=/\.com$/,r.test(e.email.trim())){t.next=3;break}return t.abrupt("return",Object(s["a"])({type:"danger",message:"邮箱错误"}));case 3:return t.next=5,Object(i["c"])({email:e.email});case 5:if(n=t.sent,!n.data.code){t.next=14;break}if(a=60,!e.verifyclass){t.next=10;break}return t.abrupt("return");case 10:e.verifyclass=!0,e.t=setInterval((function(){e.msg="剩余".concat(a,"秒"),a--,0===a&&(e.msg="获取验证码",clearInterval(e.t),e.verifyclass=!1)}),1e3),t.next=15;break;case 14:Object(s["a"])({type:"danger",message:n.data.msg});case 15:case"end":return t.stop()}}),t)})))()},getverify:function(){var e=this,t=/^1[3578]\d{9}$/;if(!t.test(this.mobile))return Object(s["a"])({type:"danger",message:"请输入正确的手机号"});Object(i["f"])({mobile:this.mobile}).then((function(e){e.data.code&&Object(s["a"])({type:"success",message:"您的验证码为"+e.data.verifyCode})}));var r=60;this.verifyclass||(this.verifyclass=!0,this.t=setInterval((function(){e.msg="剩余".concat(r,"秒"),r--,0===r&&(e.msg="获取验证码",clearInterval(e.t),e.verifyclass=!1)}),1e3))}}},c=o,l=(r("de26"),r("9ca4")),p=Object(l["a"])(c,n,a,!1,null,"619f4dcb",null);t["default"]=p.exports},b6f5:function(e,t,r){"use strict";var n=r("d601"),a=r("a593"),s=r("23c4"),u=r.n(s),i=r("d11a"),o=r("1a98"),c=r("ff38"),l=r("96c3"),p=Object(i["a"])("notify"),f=p[0],d=p[1];function m(e,t,r,n){var a={color:t.color,background:t.background};return e(l["a"],u()([{attrs:{value:t.value,position:"top",overlay:!1,duration:.2,lockScroll:!1},style:a,class:[d([t.type]),t.className]},Object(o["b"])(n,!0)]),[(null==r.default?void 0:r.default())||t.message])}m.props=Object(n["a"])({},c["b"],{color:String,message:[Number,String],duration:[Number,String],className:null,background:String,getContainer:[String,Function],type:{type:String,default:"danger"}});var b,g,v=f(m),y=r("10cd");function h(e){return Object(y["e"])(e)?e:{message:e}}function w(e){if(!y["g"])return g||(g=Object(o["c"])(v,{on:{click:function(e){g.onClick&&g.onClick(e)},close:function(){g.onClose&&g.onClose()},opened:function(){g.onOpened&&g.onOpened()}}})),e=Object(n["a"])({},w.currentOptions,h(e)),Object(n["a"])(g,e),clearTimeout(b),e.duration&&e.duration>0&&(b=setTimeout(w.clear,e.duration)),g}function k(){return{type:"danger",value:!0,message:"",color:void 0,background:void 0,duration:3e3,className:"",onClose:null,onClick:null,onOpened:null}}w.clear=function(){g&&(g.value=!1)},w.currentOptions=k(),w.setDefaultOptions=function(e){Object(n["a"])(w.currentOptions,e)},w.resetDefaultOptions=function(){w.currentOptions=k()},w.install=function(){a["a"].use(v)},w.Component=v,a["a"].prototype.$notify=w;t["a"]=w},c10f:function(e,t,r){var n=r("2732"),a=r("fc8c"),s="["+a+"]",u=RegExp("^"+s+s+"*"),i=RegExp(s+s+"*$"),o=function(e){return function(t){var r=String(n(t));return 1&e&&(r=r.replace(u,"")),2&e&&(r=r.replace(i,"")),r}};e.exports={start:o(1),end:o(2),trim:o(3)}},c24f:function(e,t,r){"use strict";r.d(t,"k",(function(){return s})),r.d(t,"f",(function(){return i})),r.d(t,"c",(function(){return c})),r.d(t,"j",(function(){return p})),r.d(t,"i",(function(){return d})),r.d(t,"h",(function(){return m})),r.d(t,"l",(function(){return b})),r.d(t,"d",(function(){return v})),r.d(t,"e",(function(){return h})),r.d(t,"m",(function(){return k})),r.d(t,"g",(function(){return O})),r.d(t,"b",(function(){return R})),r.d(t,"a",(function(){return S}));r("6a61");var n=r("cf7f"),a=r("ed08");function s(e){return u.apply(this,arguments)}function u(){return u=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a["a"].post("/user/login",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),u.apply(this,arguments)}function i(e){return o.apply(this,arguments)}function o(){return o=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a["a"].get("/user/verifyCode",{params:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),o.apply(this,arguments)}function c(e){return l.apply(this,arguments)}function l(){return l=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a["a"].get("/user/SendMailVerifyCode",{params:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),l.apply(this,arguments)}function p(e){return f.apply(this,arguments)}function f(){return f=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a["a"].post("/user/modileLogin",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}function d(e){return a["a"].put("/user/modifyPwdByMobile",e)}function m(e){return a["a"].put("/user/modifyPwdByEmail",e)}function b(e){return g.apply(this,arguments)}function g(){return g=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a["a"].post("/user/registry",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),g.apply(this,arguments)}function v(){return y.apply(this,arguments)}function y(){return y=Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a["a"].get("/user/getUserByToken",{params:{token:localStorage.getItem("vtoken")}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),y.apply(this,arguments)}function h(e){return w.apply(this,arguments)}function w(){return w=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a["a"].get("/user/getUserInfo",{params:{uid:t}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),w.apply(this,arguments)}function k(e){return x.apply(this,arguments)}function x(){return x=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a["a"].put("/user/updataUserInfo",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),x.apply(this,arguments)}function O(e,t){return j.apply(this,arguments)}function j(){return j=Object(n["a"])(regeneratorRuntime.mark((function e(t,r){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=r?"/user/upload?uid=".concat(r):"/user/upload",e.next=3,a["a"].post(n,t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)}))),j.apply(this,arguments)}function R(e){return C.apply(this,arguments)}function C(){return C=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a["a"].get("/user/historyAvatar",{params:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),C.apply(this,arguments)}function S(e){return _.apply(this,arguments)}function _(){return _=Object(n["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,a["a"].put("/user/cutAvatar",t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),_.apply(this,arguments)}},de26:function(e,t,r){"use strict";var n=r("3ca2"),a=r.n(n);a.a},f221:function(e,t,r){var n=r("efe2"),a=r("fc8c"),s="​᠎";e.exports=function(e){return n((function(){return!!a[e]()||s[e]()!=s||a[e].name!==e}))}},fc8c:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-5ae3a9d0.872d10a1.js.map
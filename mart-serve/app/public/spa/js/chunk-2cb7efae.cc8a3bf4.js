(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2cb7efae"],{ae10:function(e,t,a){},b74c:function(e,t,a){"use strict";var r=a("ae10"),s=a.n(r);s.a},eb85:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",[a("van-icon",{staticClass:"del",attrs:{name:"share-o"},on:{click:function(t){return e.$router.history.go("-1")}}}),e._v(" 增加地址")],1),a("van-address-edit",{ref:"address",attrs:{"area-list":e.areaList,"show-postal":"","show-set-default":"","show-search-result":"","address-info":e.userInfo,"search-result":e.searchResult,"area-columns-placeholder":["请选择","请选择","请选择"]},on:{save:e.onSave}})],1)},s=[],n=(a("053b"),a("0517"),a("b6f5")),c=(a("6a61"),a("cf7f")),o=a("2e8e"),u=a("c24f"),i=a("2f94"),d={data:function(){return{result:null,show:!1,areaList:{},searchResult:[],userInfo:{}}},created:function(){this.getAddresscity()},mounted:function(){this.$refs.address.setAddressDetail(this.$route.query.loca)},methods:{onSave:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){var r,s,c;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,Object(u["d"])();case 2:return r=a.sent,s={auser:e.name,mobile:e.tel,province:e.province,city:e.city,county:e.county,uid:r.data.uid,street:e.addressDetail},a.next=6,Object(i["a"])(s);case 6:c=a.sent,c.data.code&&(e.isDefault&&localStorage.setItem("aid",c.data.aid),Object(n["a"])({type:"success",message:c.data.msg,duration:2e3,onClose:function(){t.$router.go("-1")}}));case 8:case"end":return a.stop()}}),a)})))()},getAddresscity:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.areaList=Object(o["a"])();case 1:case"end":return t.stop()}}),t)})))()}}},l=d,f=(a("b74c"),a("9ca4")),h=Object(f["a"])(l,r,s,!1,null,null,null);t["default"]=h.exports}}]);
//# sourceMappingURL=chunk-2cb7efae.cc8a3bf4.js.map
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["component/analysis/analysis"],{2468:function(e,t,n){"use strict";n.r(t);var a=n("cc35"),c=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=c.a},a0ef:function(e,t,n){"use strict";var a=n("e47d"),c=n.n(a);c.a},cc35:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{chartData:{},opts:{color:["#1890FF","#91CB74","#FAC858","#EE6666","#73C0DE","#3CA272","#FC8452","#9A60B4","#ea7ccc"],padding:[5,5,5,5],fontColor:"#fff",enableScroll:!1,extra:{pie:{activeOpacity:.5,activeRadius:10,offsetAngle:0,labelWidth:15,border:!1,borderWidth:3,color:"#fff",fontSize:""}}}}},mounted:function(){this.getServerData()},methods:{getServerData:function(){var e=this;setTimeout((function(){e.chartData=JSON.parse(JSON.stringify({series:[{data:[{name:"一班",value:50},{name:"二班",value:30},{name:"三班",value:20},{name:"四班",value:18},{name:"五班",value:8}]}]}))}),500)}}};t.default=a},cf7c:function(e,t,n){"use strict";n.r(t);var a=n("f15b"),c=n("2468");for(var r in c)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return c[e]}))}(r);n("a0ef");var u=n("f0c5"),i=Object(u["a"])(c["default"],a["b"],a["c"],!1,null,"28db6ee4",null,!1,a["a"],void 0);t["default"]=i.exports},e47d:function(e,t,n){},efc3:function(e,t,n){"use strict";(function(e,t){var a=n("4ea4");n("4b4b");a(n("66fd"));var c=a(n("cf7c"));e.__webpack_require_UNI_MP_PLUGIN__=n,t(c.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},f15b:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var a={qiunDataCharts:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/qiun-data-charts/components/qiun-data-charts/qiun-data-charts")]).then(n.bind(null,"18c7"))}},c=function(){var e=this.$createElement;this._self._c},r=[]}},[["efc3","common/runtime","common/vendor"]]]);
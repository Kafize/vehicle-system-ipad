(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uview-ui/components/u-text/u-text"],{"0ae8":function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return i}));var i={uIcon:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(n.bind(null,"a3a5"))},uLink:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uview-ui/components/u-link/u-link")]).then(n.bind(null,"a199"))}},u=function(){var e=this,t=e.$createElement,n=(e._self._c,e.show&&"price"===e.mode?e.__get_style([e.valueStyle]):null),i=e.show&&e.prefixIcon?e.$u.addStyle(e.iconStyle):null,u=e.show&&"link"!==e.mode&&e.openType&&e.isMp?e.__get_style([e.valueStyle]):null,o=!e.show||"link"===e.mode||e.openType&&e.isMp?null:e.__get_style([e.valueStyle]),l=e.show&&e.suffixIcon?e.$u.addStyle(e.iconStyle):null;e.$mp.data=Object.assign({},{$root:{s0:n,g0:i,s1:u,s2:o,g1:l}})},o=[]},3150:function(e,t,n){"use strict";n.r(t);var i=n("0ae8"),u=n("a72e");for(var o in u)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return u[e]}))}(o);n("8843");var l=n("f0c5"),s=Object(l["a"])(u["default"],i["b"],i["c"],!1,null,"6bfb644b",null,!1,i["a"],void 0);t["default"]=s.exports},8545:function(e,t,n){"use strict";(function(e){var i=n("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=i(n("ed8b")),o=i(n("33fd")),l=i(n("0a12")),s=i(n("74d3")),a={name:"u--text",mixins:[e.$u.mpMixin,e.$u.mixin,u.default,o.default,l.default,s.default],computed:{valueStyle:function(){var t={textDecoration:this.decoration,fontWeight:this.bold?"bold":"normal",wordWrap:this.wordWrap,fontSize:e.$u.addUnit(this.size)};return!this.type&&(t.color=this.color),this.isNvue&&this.lines&&(t.lines=this.lines),this.lineHeight&&(t.lineHeight=e.$u.addUnit(this.lineHeight)),!this.isNvue&&this.block&&(t.display="block"),e.$u.deepMerge(t,e.$u.addStyle(this.customStyle))},isNvue:function(){return!1},isMp:function(){return!0,!0}},data:function(){return{}},methods:{clickHandler:function(){this.call&&"phone"===this.mode&&e.makePhoneCall({phoneNumber:this.text}),this.$emit("click")}}};t.default=a}).call(this,n("543d")["default"])},8843:function(e,t,n){"use strict";var i=n("9878"),u=n.n(i);u.a},9878:function(e,t,n){},a72e:function(e,t,n){"use strict";n.r(t);var i=n("8545"),u=n.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);t["default"]=u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uview-ui/components/u-text/u-text-create-component',
    {
        'uni_modules/uview-ui/components/u-text/u-text-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("3150"))
        })
    },
    [['uni_modules/uview-ui/components/u-text/u-text-create-component']]
]);
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([6],{55:function(t,e,o){"use strict";var n=s(o(1)),a=s(o(56));function s(t){return t&&t.__esModule?t:{default:t}}new n.default(a.default).$mount()},56:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(58),a=o.n(n),s=o(59),i=!1;var r=function(t){i||o(57)},c=o(0)(a.a,s.a,r,null,null);c.options.__file="..\\..\\..\\..\\Documents\\HBuilderProjects\\SLLUKS\\pages\\goodstype\\goodstype.vue",c.esModule&&Object.keys(c.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),c.options.functional&&console.error("[vue-loader] goodstype.vue: functional components are not supported with templates, they should use render functions."),e.default=c.exports},57:function(t,e){},58:function(t,e,o){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var n,a=o(3);(n=a)&&n.__esModule;e.default={data:{allType:[],title:"Categories"},methods:{getGoodsType:function(){var e=this;e.allType=[],wx.request({url:"https://www.slluks.com/index.php/app/goods/goodsType",data:{},header:{"content-type":"application/json"},success:function(o){e.allType=o.data,t.showToast({title:"加载成功",duration:2e3,icon:"none"})},fail:function(){t.showToast({title:"加载失败",duration:2e3,icon:"none"})}})}},onLoad:function(){this.getGoodsType()},onPullDownRefresh:function(){this.getGoodsType()},onReachBottom:function(){},onTabItemTap:function(){this.getGoodsType(),t.pageScrollTo({scrollTop:0,duration:300})}}}).call(e,o(2).default)},59:function(t,e,o){"use strict";var n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("view",{staticClass:"page"},[o("page-head",{attrs:{title:t.title,mpcomid:"zba-0"}},[t._v(t._s(t.title))]),o("view",{},t._l(t.allType,function(e,n){return o("view",{key:n,staticClass:"11"},[o("h2",{staticClass:"first_type"},[t._v("·"+t._s(e.category_name))]),o("view",{},[o("navigator",{staticClass:"second_type",attrs:{url:"/pages/product/product?category_id="+e.category_id+"&&category_name="+e.category_name,"open-type":"navigate"}},[t._v("\n\t\t\t\t\t全部"+t._s(e.category_name)+"\n\t\t\t\t")]),t._l(e.child_list,function(n,a){return""!=e.child_list?o("navigator",{key:a,staticClass:"second_type",attrs:{url:"/pages/product/product?category_id="+n.category_id+"&&category_name="+n.category_name,"open-type":"navigate"}},[t._v("\n\t\t\t\t\t"+t._s(a+1)+"."+t._s(n.category_name)+"\n\t\t\t\t")]):t._e()})],2)],1)}))],1)};n._withStripped=!0;var a={render:n,staticRenderFns:[]};e.a=a}},[55]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/goodstype/goodstype.js.map
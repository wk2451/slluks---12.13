require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([0],{31:function(t,e,i){"use strict";var s=a(i(1)),o=a(i(32));function a(t){return t&&t.__esModule?t:{default:t}}new s.default(o.default).$mount()},32:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(34),o=i.n(s),a=i(39),r=!1;var n=function(t){r||i(33)},c=i(0)(o.a,a.a,n,null,null);c.options.__file="..\\..\\..\\..\\Documents\\HBuilderProjects\\SLLUKS\\pages\\product\\product.vue",c.esModule&&Object.keys(c.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),c.options.functional&&console.error("[vue-loader] product.vue: functional components are not supported with templates, they should use render functions."),e.default=c.exports},33:function(t,e){},34:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var s=o(i(35));o(i(3));function o(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{title:"所有商品",productList:[],index:1,allow:1,orderby:"desc",order:"",selectUrl:["../../static/images/tb.png","../../static/images/top.png","../../static/images/bottom.png"],salesUrl:"../../static/images/tb.png",priceUrl:"../../static/images/tb.png",timeUrl:"../../static/images/tb.png",category_id:"",empty:!0}},components:{product:s.default},methods:{jiazai:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"add",i=this;i.allow=0,"pulldown"==e?this.index=1:"add"==e&&this.index,wx.request({url:"https://www.slluks.com/index.php/app/goods/goodslist",data:{page:i.index,sort:i.orderby,order:i.order,category_id:i.category_id},header:{"content-type":"application/json"},success:function(s){console.log(s.data),"[]"!==JSON.stringify(s.data)?(i.empty=!1,"pulldown"==e&&(i.productList=[]),s.data.forEach(function(t){i.productList.push(t)}),"pulldown"==e?i.index=2:"add"==e&&i.index++):"add"==e?t.showToast({title:"已经到底了哦",duration:2e3,icon:"none"}):"pulldown"==e&&t.showToast({title:"沒有商品",duration:2e3,icon:"none"}),i.allow=1},fail:function(){t.showToast({title:"加载失败",duration:2e3,icon:"none"}),i.empty=!0,i.allow=1}})},ctimeToggle:function(){"desc"==this.orderby?(this.orderby="asc",this.salesUrl="../../static/images/tb.png",this.priceUrl="../../static/images/tb.png",this.timeUrl="../../static/images/top.png"):"asc"==this.orderby&&(this.orderby="desc",this.salesUrl="../../static/images/tb.png",this.priceUrl="../../static/images/tb.png",this.timeUrl="../../static/images/bottom.png"),this.order="ng.create_time",this.jiazai("pulldown")},salesToggle:function(){this.orderby="desc",this.salesUrl="../../static/images/top.png",this.priceUrl="../../static/images/tb.png",this.timeUrl="../../static/images/tb.png",this.order="ng.sales",this.jiazai("pulldown")},priceToggle:function(){"desc"==this.orderby?(this.orderby="asc",this.salesUrl="../../static/images/tb.png",this.priceUrl="../../static/images/top.png",this.timeUrl="../../static/images/tb.png"):"asc"==this.orderby&&(this.orderby="desc",this.salesUrl="../../static/images/tb.png",this.priceUrl="../../static/images/bottom.png",this.timeUrl="../../static/images/tb.png"),this.order="ng.price",this.jiazai("pulldown")}},onLoad:function(t){t.category_id&&(this.category_id=t.category_id,this.title=t.category_name),this.jiazai("pulldown"),this.productList},onPullDownRefresh:function(){this.jiazai("pulldown"),t.showToast({title:"刷新",duration:2e3,icon:"none"}),setTimeout(function(){t.stopPullDownRefresh()},100)},onReachBottom:function(){1==this.allow&&this.jiazai("add")},onTabItemTap:function(){1==this.allow&&(this.jiazai("pulldown"),t.pageScrollTo({scrollTop:0,duration:300}),t.showToast({title:"刷新成功",duration:2e3,icon:"none"}))}}}).call(e,i(2).default)},35:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(37),o=i.n(s),a=i(38),r=!1;var n=function(t){r||i(36)},c=i(0)(o.a,a.a,n,null,null);c.options.__file="..\\..\\..\\..\\Documents\\HBuilderProjects\\SLLUKS\\components\\product.vue",c.esModule&&Object.keys(c.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),c.options.functional&&console.error("[vue-loader] product.vue: functional components are not supported with templates, they should use render functions."),e.default=c.exports},36:function(t,e){},37:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"product",props:["image","title","originalPrice","favourPrice","tip"]}},38:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"product"},[i("navigator",{attrs:{url:"/pages/goodsinfo/goodsinfo?goodsid="+t.tip,"open-type":"navigate"}},[i("image",{staticClass:"product-image",attrs:{src:t.image?t.image:"http://via.placeholder.com/150x200"}}),i("view",{staticClass:"product-title"},[t._v(t._s(t.title))]),i("view",{staticClass:"product-price"},[t.originalPrice!=t.favourPrice?i("text",{staticClass:"product-price-favour"},[t._v("￥"+t._s(t.originalPrice))]):t._e(),i("text",{staticClass:"product-price-original"},[t._v("￥"+t._s(t.favourPrice))]),204==t.tip?i("text",{staticClass:"product-tip"},[t._v("热销")]):210==t.tip?i("text",{staticClass:"product-tip"},[t._v("折扣")]):t._e()])])],1)};s._withStripped=!0;var o={render:s,staticRenderFns:[]};e.a=o},39:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.empty?i("view",{staticClass:"page"},[i("page-head",{attrs:{title:t.title,mpcomid:"UdT-0"}},[t._v(t._s(t.title))]),t._m(0)],1):i("view",{staticClass:"page"},[i("page-head",{attrs:{title:t.title,mpcomid:"WM5-1"}},[t._v(t._s(t.title))]),i("view",{staticClass:"orderby"},[i("view",{staticClass:"order sales",attrs:{eventid:"Yxj-0"},on:{click:t.salesToggle}},[t._v("\n\t\t\t\t销量\n\t\t\t\t"),i("image",{attrs:{src:t.salesUrl,mode:"widthFix"}})]),i("view",{staticClass:"order time",attrs:{eventid:"3Nx-1"},on:{click:t.ctimeToggle}},[t._v("\n\t\t\t\t上货时间\n\t\t\t\t"),i("image",{attrs:{src:t.timeUrl,mode:"widthFix"}})]),i("view",{staticClass:"order price",attrs:{eventid:"vrU-2"},on:{click:t.priceToggle}},[t._v("\n\t\t\t\t价格\n\t\t\t\t"),i("image",{attrs:{src:t.priceUrl,mode:"widthFix"}})])]),i("view",{staticClass:"product-list"},t._l(t.productList,function(t,e){return i("view",{key:e},[i("product",{attrs:{image:t.pic_cover_small,title:t.goods_name,originalPrice:t.price,favourPrice:t.market_price,tip:t.goods_id,mpcomid:"yGN-2-"+e}})],1)}))],1)};s._withStripped=!0;var o={render:s,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"content_empty"},[e("image",{staticClass:"empty",attrs:{src:"../../static/images/empty.png",mode:"widthFix"}})])}]};e.a=o}},[31]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/product/product.js.map
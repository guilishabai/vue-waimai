webpackJsonp([0],{0:function(t,s){},"0p5c":function(t,s){},"130N":function(t,s){},"34KM":function(t,s){},CyjQ:function(t,s){},JIHv:function(t,s){},NHnr:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("7+uW"),a={props:{size:{type:Number},score:{type:Number}},computed:{starType:function(){return"star-"+this.size},itemClasses:function(){for(var t=[],s=Math.floor(2*this.score)/2,e=s%1!=0,i=Math.floor(s),a=0;a<i;a++)t.push("on");for(e&&t.push("half");t.length<5;)t.push("off");return t}}},n={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"star",class:this.starType},this._l(this.itemClasses,function(t){return s("span",{key:t.key,staticClass:"star-item",class:t})}))},staticRenderFns:[]};var r=e("VU/8")(a,n,!1,function(t){e("oWC1")},"data-v-ef3b5a8a",null).exports,o={props:{seller:{type:Object}},data:function(){return{detailShow:!1}},created:function(){this.classMap=["decrease","discount","special","invoice","guarantee"]},methods:{showDetail:function(){this.detailShow=!0},hideDetail:function(){this.detailShow=!1}},components:{star:r}},l={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"header"},[e("div",{staticClass:"content-wrapper"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{width:"64",height:"64",src:t.seller.avatar}})]),t._v(" "),e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[e("span",{staticClass:"brand"}),t._v(" "),e("span",{staticClass:"name"},[t._v(t._s(t.seller.name))])]),t._v(" "),e("div",{staticClass:"description"},[t._v("\n        "+t._s(t.seller.description)+"/"+t._s(t.seller.deliveryTime)+"分钟送达\n      ")]),t._v(" "),t.seller.supports?e("div",{staticClass:"support"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[0].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[0].description))])]):t._e()]),t._v(" "),t.seller.supports?e("div",{staticClass:"support-count",on:{click:t.showDetail}},[e("span",{staticClass:"count"},[t._v(t._s(t.seller.supports.length)+"个")]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]):t._e()]),t._v(" "),e("div",{staticClass:"bulletin-wrapper",on:{click:t.showDetail}},[e("span",{staticClass:"bulletin-title"}),e("span",{staticClass:"bulletin-text"},[t._v(t._s(t.seller.bulletin))]),t._v(" "),e("i",{staticClass:"icon-keyboard_arrow_right"})]),t._v(" "),e("div",{staticClass:"background"},[e("img",{attrs:{src:t.seller.avatar,width:"100%",height:"100%"}})]),t._v(" "),e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.detailShow,expression:"detailShow"}],staticClass:"detail"},[e("div",{staticClass:"detail-wrapper clearfix"},[e("div",{staticClass:"detail-main"},[e("h1",{staticClass:"name"},[t._v(t._s(t.seller.name))]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:48,score:t.seller.score}})],1),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("优惠信息")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s){return e("li",{key:s.type,staticClass:"supports-item"},[e("span",{staticClass:"icon",class:t.classMap[s.type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(s.description))])])})):t._e(),t._v(" "),e("div",{staticClass:"title"},[e("div",{staticClass:"line"}),t._v(" "),e("div",{staticClass:"text"},[t._v("商家公告")]),t._v(" "),e("div",{staticClass:"line"})]),t._v(" "),e("div",{staticClass:"bulletin"},[e("p",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))])])])]),t._v(" "),e("div",{staticClass:"detail-close",on:{click:t.hideDetail}},[e("i",{staticClass:"icon-close"})])])])],1)},staticRenderFns:[]};var c={data:function(){return{seller:{}}},created:function(){var t=this;this.$http.get("/api/seller").then(function(s){0===(s=s.body).errno&&(t.seller=s.data)})},components:{vHeader:e("VU/8")(o,l,!1,function(t){e("q4Ba")},"data-v-5f537a4e",null).exports}},v={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("v-header",{staticClass:"header",attrs:{seller:t.seller}}),t._v(" "),e("div",{staticClass:"tab border-1px"},[e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/goods"}},[t._v("\n\t  \t\t商品\n\t  \t")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/ratings"}},[t._v("\n\t  \t\t评论\n\t  \t")])],1),t._v(" "),e("div",{staticClass:"tab-item"},[e("router-link",{attrs:{to:"/seller"}},[t._v("\n\t  \t\t商家\n\t  \t")])],1)]),t._v(" "),e("router-view",{attrs:{seller:t.seller}})],1)},staticRenderFns:[]};var d=e("VU/8")(c,v,!1,function(t){e("cI8w")},"data-v-6350d854",null).exports,p=e("/ocq"),u=e("43Vb"),h=e.n(u),f={props:{food:{type:Object}},created:function(){},methods:{addCart:function(t){if(!t._constructed)return"";this.food.count?this.food.count++:i.a.set(this.food,"count",1),this.$emit("goods",t.target)},decreaseCart:function(t){if(!t._constructed)return"";this.food.count&&this.food.count--}}},_={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"cartcontrol"},[e("transition",{attrs:{name:"fade"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count > 0"}],staticClass:"cart-decrease icon-remove_circle_outline",on:{click:function(s){return s.stopPropagation(),t.decreaseCart(s)}}})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.count>0,expression:"food.count > 0"}],staticClass:"cart-count"},[t._v(t._s(t.food.count))]),t._v(" "),e("div",{staticClass:"cart-add icon-add_circle",on:{click:function(s){return s.stopPropagation(),t.addCart(s)}}})],1)},staticRenderFns:[]};var C=e("VU/8")(f,_,!1,function(t){e("130N")},"data-v-67ffbe5f",null).exports,m={props:{deliveryPrice:Number,minPrice:{type:Number,default:0},selectFoods:{type:Array,default:function(){return[]}}},data:function(){return{balls:[{show:!1},{show:!1},{show:!1},{show:!1},{show:!1}],dropBalls:[],fold:!0}},computed:{totalPrice:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.price*s.count}),t},totalCount:function(){var t=0;return this.selectFoods.forEach(function(s){t+=s.count}),t},payDesc:function(){return 0===this.totalPrice?"￥"+this.minPrice+"元起送":this.totalPrice<this.minPrice?"还差￥"+(this.minPrice-this.totalPrice)+"元起送":"去结算"},payClass:function(){return this.totalPrice<this.minPrice?"not-enough":"enough"}},methods:{listShow:function(){var t=this;if(!this.totalCount)return this.fold=!0,!1;var s=!this.fold;return s&&this.$nextTick(function(){if(t.scroll)t.scroll.refresh();else{var s=t.$refs.listConter;t.scroll=new h.a(s,{click:!0})}}),s},drop:function(t){for(var s=0;s<this.balls.length;s++){var e=this.balls[s];if(!e.show)return e.show=!0,e.el=t,void this.dropBalls.push(e)}},beforeEnter:function(t){for(var s=this.balls.length;s--;){var e=this.balls[s];if(e.show){var i=e.el.getBoundingClientRect(),a=i.left-32,n=-(window.innerHeight-i.top-22);t.style.display="",t.style.transform="translate3d(0,"+n+"px,0)",t.children[0].style.transform="translate3d("+a+"px, 0, 0)"}}},enter:function(t){this.$nextTick(function(){t.style.transform="translate3d(0, 0, 0)",t.children[0].style.transform="translate3d(0, 0, 0)"})},afterEnter:function(t){var s=this.dropBalls.shift();s&&(s.show=!1,t.style.display="none")},toggleList:function(){this.totalCount&&(this.fold=!this.fold)},empty:function(){this.selectFoods.forEach(function(t){t.count=0})},hideList:function(){this.fold=!0},pay:function(){this.totalPrice<this.minPrice||window.alert("支付"+this.totalPrice+"元")}},components:{cartcontrol:C}},g={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"shopcart"},[e("div",{staticClass:"content",on:{click:t.toggleList}},[e("div",{staticClass:"content-left"},[e("div",{staticClass:"logo-wrapper"},[e("div",{ref:"logo",staticClass:"logo",class:{heightlight:t.totalCount>0}},[e("i",{staticClass:"icon-shopping_cart",class:{heightlight:t.totalCount>0}})]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.totalCount>0,expression:"totalCount > 0"}],staticClass:"num"},[t._v(t._s(t.totalCount))])]),t._v(" "),e("div",{staticClass:"price",class:{heightlight:t.totalPrice>0}},[t._v("￥"+t._s(t.totalPrice))]),t._v(" "),e("div",{staticClass:"desc"},[t._v("另需配送费￥"+t._s(t.deliveryPrice)+"元")])]),t._v(" "),e("div",{staticClass:"content-right",on:{click:function(s){return s.stopPropagation(),s.preventDefault(),t.pay(s)}}},[e("div",{staticClass:"pay",class:t.payClass},[t._v("\n        "+t._s(t.payDesc)+"\n      ")])])]),t._v(" "),e("div",{staticClass:"ball-container"},[e("transition-group",{staticClass:"drop",attrs:{name:"drop"},on:{"before-enter":t.beforeEnter,enter:t.enter,"after-enter":t.afterEnter}},t._l(t.balls,function(t,s){return e("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"ball.show"}],key:s,ref:"ball",refInFor:!0,staticClass:"ball"},[e("div",{ref:"inner",refInFor:!0,staticClass:"inner"})])}))],1),t._v(" "),e("transition",{attrs:{name:"shopcartList"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow(),expression:"listShow()"}],staticClass:"shopcart-list"},[e("div",{staticClass:"list-header"},[e("h1",{staticClass:"title"},[t._v("购物车")]),t._v(" "),e("span",{staticClass:"empty",on:{click:t.empty}},[t._v("清空")])]),t._v(" "),e("div",{ref:"listConter",staticClass:"list-conter"},[e("ul",t._l(t.selectFoods,function(s,i){return e("li",{key:i,staticClass:"food"},[e("span",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("div",{staticClass:"price"},[e("span",[t._v("￥"+t._s(s.price*s.count))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:s}})],1)])}))])])]),t._v(" "),e("transition",{attrs:{name:"mask"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.listShow(),expression:"listShow()"}],staticClass:"list-mask",on:{click:t.hideList}})])],1)},staticRenderFns:[]};var w=e("VU/8")(m,g,!1,function(t){e("JIHv")},"data-v-00a807ca",null).exports,y={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"split"})},staticRenderFns:[]};var x=e("VU/8")({},y,!1,function(t){e("0p5c")},"data-v-bef9047a",null).exports,b={props:{ratings:{type:Array,default:function(){return[]}},selectType:{type:Number,default:2},onlyContent:{type:Boolean,default:!1},desc:{type:Object,default:function(){return{all:"全部",positive:"满意",negative:"不满意"}}}},methods:{select:function(t,s){if(!s._constructed)return!1;this.$emit("food",t)},toggleContent:function(t){if(!t._constructed)return!1;this.$emit("food")}},computed:{positive:function(){return this.ratings.filter(function(t){return 0===t.rateType})},negative:function(){return this.ratings.filter(function(t){return 1===t.rateType})}}},k={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"ratingselect"},[e("div",{staticClass:"rating-type border-1px"},[e("span",{staticClass:"block positive",class:{active:2===t.selectType},on:{click:function(s){t.select(2,s)}}},[t._v("\n      "+t._s(t.desc.all)),e("span",{staticClass:"count"},[t._v(t._s(t.ratings.length))])]),t._v(" "),e("span",{staticClass:"block positive",class:{active:0===t.selectType},on:{click:function(s){t.select(0,s)}}},[t._v("\n      "+t._s(t.desc.positive)),e("span",{staticClass:"count"},[t._v(t._s(t.positive.length))])]),t._v(" "),e("span",{staticClass:"block negative",class:{active:1===t.selectType},on:{click:function(s){t.select(1,s)}}},[t._v("\n      "+t._s(t.desc.negative)),e("span",{staticClass:"count"},[t._v(t._s(t.negative.length))])])]),t._v(" "),e("div",{staticClass:"switch",class:{on:t.onlyContent},on:{click:t.toggleContent}},[e("span",{staticClass:"icon-check_circle"}),t._v(" "),e("span",{staticClass:"text"},[t._v("只看有内容的评价")])])])},staticRenderFns:[]};var T=e("VU/8")(b,k,!1,function(t){e("slxU")},"data-v-6cd368eb",null).exports;function $(t,s){/(Y+)/.test(s)&&(s=s.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var e={"M+":t.getMonth()+1,"D+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(var i in e)if(new RegExp("("+i+")").test(s)){var a=e[i]+"";s=s.replace(RegExp.$1,1===RegExp.$1.length?a:F(a))}return s}function F(t){return("00"+t).substr(t.length)}var S={components:{cartcontrol:C,split:x,ratingselect:T},props:{food:{type:Object}},data:function(){return{showFlag:!1,selectType:2,onlyContent:!0,desc:{all:"全部",positive:"推荐",negative:"吐槽"}}},methods:{show:function(){var t=this;this.showFlag=!0,this.selectType=2,this.onlyContent=!0,this.$nextTick(function(){t.scroll?t.scroll.refresh():t.scroll=new h.a(t.$refs.food,{click:!0})})},hide:function(){this.showFlag=!1},addFirst:function(t){t._constructed&&(i.a.set(this.food,"count",1),this.$emit("goods",t.target))},select:function(t){var s=this;void 0===t?this.onlyContent=!this.onlyContent:this.selectType=t,this.$nextTick(function(){s.scroll.refresh()})},neddShow:function(t,s){return!(this.onlyContent&&!s)&&(2===this.selectType||t===this.selectType)}},filters:{formateDate:function(t){return $(new Date(t),"YYYY-MM-DD hh:mm")}}},P={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"food"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.showFlag,expression:"showFlag"}],ref:"food",staticClass:"food"},[e("div",{staticClass:"food-content"},[e("div",{staticClass:"image-header"},[e("img",{attrs:{src:t.food.image}}),t._v(" "),e("div",{staticClass:"back",on:{click:t.hide}},[e("i",{staticClass:"icon-arrow_lift"})])]),t._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"title"},[t._v(t._s(t.food.name))]),t._v(" "),e("div",{staticClass:"detail"},[e("span",{staticClass:"sell-count"},[t._v("月售"+t._s(t.food.sellCount))]),t._v(" "),e("span",{staticClass:"rating"},[t._v("好评率"+t._s(t.food.rating))])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("￥"+t._s(t.food.price))]),e("span",{directives:[{name:"show",rawName:"v-show",value:t.food.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("￥"+t._s(t.food.oldPrice))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:t.food}})],1),t._v(" "),e("transition",{attrs:{name:"buy"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.count||0===t.food.count,expression:"!food.count || food.count === 0"}],staticClass:"buy",on:{click:function(s){return s.stopPropagation(),t.addFirst(s)}}},[t._v("加入购物车")])])],1),t._v(" "),e("split",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}]}),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.food.info,expression:"food.info"}],staticClass:"info"},[e("h1",{staticClass:"title"},[t._v("商品信息")]),t._v(" "),e("p",{staticClass:"text"},[t._v(t._s(t.food.info))])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"rating"},[e("h1",{staticClass:"title"},[t._v("商品评价")]),t._v(" "),e("ratingselect",{attrs:{"select-type":t.selectType,"only-content":t.onlyContent,desc:t.desc,ratings:t.food.ratings},on:{food:t.select}}),t._v(" "),e("div",{staticClass:"rating-wrapper"},[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.food.ratings&&t.food.ratings.length,expression:"food.ratings && food.ratings.length"}]},t._l(t.food.ratings,function(s,i){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.neddShow(s.rateType,s.text),expression:"neddShow(rating.rateType, rating.text)"}],key:i,staticClass:"rating-item border-1px"},[e("div",{staticClass:"user"},[e("span",{staticClass:"name"},[t._v(t._s(s.username))]),t._v(" "),e("img",{staticClass:"avatar",attrs:{width:"12",height:"12",src:s.avatar}})]),t._v(" "),e("div",{staticClass:"time"},[t._v(t._s(t._f("formateDate")(s.rateTime)))]),t._v(" "),e("p",{staticClass:"text"},[e("span",{class:{"icon-thumb_up":0===s.rateType,"icon-thumb_down":1===s.rateType}}),t._v(t._s(s.text)+"\n              ")])])})),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.food.ratings||!t.food.ratings.length,expression:"!food.ratings || !food.ratings.length"}],staticClass:"no-rating"},[t._v("暂无评价")])])],1)],1)])])},staticRenderFns:[]};var N={components:{shopcart:w,cartcontrol:C,food:e("VU/8")(S,P,!1,function(t){e("rE1D")},"data-v-557a9726",null).exports},props:{seller:{type:Object}},data:function(){return{goods:[],listHeight:[],scrollY:0,selectedFood:{}}},computed:{currentIndex:function(){for(var t=0;t<this.listHeight.length;t++){var s=this.listHeight[t],e=this.listHeight[t+1];if(!e||this.scrollY>=s&&this.scrollY<e)return t}return 0},selectFoods:function(){var t=[];return this.goods.forEach(function(s){s.foods.forEach(function(s){s.count&&t.push(s)})}),t}},created:function(){var t=this;this.$http.get("/api/goods").then(function(s){0===(s=s.body).errno&&(t.goods=s.data,t.$nextTick(function(){t._initScroll(),t._calculateHeight()}))}),this.classMap=["decrease","discount","special","invoice","guarantee"]},methods:{_initScroll:function(){var t=this;this.meunScroll=new h.a(this.$refs.menuWrapper,{click:!0}),this.foodsScroll=new h.a(this.$refs.foodsWrapper,{click:!0,probeType:3}),this.foodsScroll.on("scroll",function(s){t.scrollY=Math.abs(Math.round(s.y))})},_calculateHeight:function(){var t=this.$refs.foodList,s=0;this.listHeight.push(s);for(var e=0;e<t.length;e++){s+=t[e].clientHeight-1,this.listHeight.push(s)}},selectMenu:function(t,s){if(!s._constructed)return"";var e=this.$refs.foodList[t];this.foodsScroll.scrollToElement(e,300)},_drop:function(t){var s=this;this.$nextTick(function(){s.$refs.shopcart.drop(t)})},selectFood:function(t,s){s._constructed&&(this.selectedFood=t,this.$refs.food.show())}}},E={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"goods"},[e("div",{ref:"menuWrapper",staticClass:"menu-wrapper"},[e("ul",t._l(t.goods,function(s,i){return e("li",{key:s.id,ref:"menuItem",refInFor:!0,staticClass:"menu-item",class:{current:t.currentIndex===i},on:{click:function(s){t.selectMenu(i,s)}}},[e("span",{staticClass:"text border-1px"},[e("span",{directives:[{name:"show",rawName:"v-show",value:s.type>0,expression:"item.type > 0"}],staticClass:"icon",class:t.classMap[s.type]}),t._v("\n          "+t._s(s.name)+"\n        ")])])}))]),t._v(" "),e("div",{ref:"foodsWrapper",staticClass:"foods-wrapper"},[e("ul",t._l(t.goods,function(s){return e("li",{key:s.id,ref:"foodList",refInFor:!0,staticClass:"food-list border-1px"},[e("h1",{staticClass:"title"},[t._v(t._s(s.name))]),t._v(" "),e("ul",t._l(s.foods,function(s){return e("li",{key:s.id,staticClass:"food-item",on:{click:function(e){t.selectFood(s,e)}}},[e("div",{staticClass:"icon"},[e("img",{attrs:{src:s.icon,width:"57",height:"57"}})]),t._v(" "),e("div",{staticClass:"content"},[e("h2",{staticClass:"name"},[t._v(t._s(s.name))]),t._v(" "),e("p",{staticClass:"desc"},[t._v(t._s(s.description))]),t._v(" "),e("div",{staticClass:"extra"},[e("span",[t._v("月售"+t._s(s.sellCount)+"份")]),t._v(" "),e("span",[t._v("好评率"+t._s(s.rating||0)+"%")])]),t._v(" "),e("div",{staticClass:"price"},[e("span",{staticClass:"now"},[t._v("￥"+t._s(s.price))]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:s.oldPrice,expression:"food.oldPrice"}],staticClass:"old"},[t._v("￥"+t._s(s.oldPrice))])]),t._v(" "),e("div",{staticClass:"cartcontrol-wrapper"},[e("cartcontrol",{attrs:{food:s},on:{goods:t._drop}})],1)])])}))])}))]),t._v(" "),e("shopcart",{ref:"shopcart",attrs:{"delivery-price":t.seller.deliveryPrice,"min-price":t.seller.minPrice,selectFoods:t.selectFoods}}),t._v(" "),e("food",{ref:"food",attrs:{food:t.selectedFood},on:{goods:t._drop}})],1)},staticRenderFns:[]};var D=e("VU/8")(N,E,!1,function(t){e("YO+i")},"data-v-2fc5a962",null).exports,M={components:{star:r,ratingselect:T,split:x},props:{seller:{type:Object}},data:function(){return{ratings:[],selectType:2,onlyContent:!0}},created:function(){var t=this;this.$http.get("/api/ratings").then(function(s){0===(s=s.body).errno&&(t.ratings=s.data,t.$nextTick(function(){t.scroll=new h.a(t.$refs.ratings,{click:!0})}))})},methods:{select:function(t){var s=this;void 0===t?this.onlyContent=!this.onlyContent:this.selectType=t,this.$nextTick(function(){s.scroll.refresh()})},needShow:function(t,s){return!(this.onlyContent&&!s)&&(2===this.selectType||t===this.selectType)}},filters:{formateDate:function(t){return $(new Date(t),"YYYY-MM-DD hh:mm")}}},R={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"ratings",staticClass:"ratings"},[e("div",{staticClass:"ratings-content"},[e("div",{staticClass:"overview"},[e("div",{staticClass:"overview-left"},[e("h1",{staticClass:"score"},[t._v(t._s(t.seller.score))]),t._v(" "),e("div",{staticClass:"title"},[t._v("综合评分")]),t._v(" "),e("div",{staticClass:"rank"},[t._v("高于周边商家"+t._s(t.seller.rankRate)+"%")])]),t._v(" "),e("div",{staticClass:"overview-right"},[e("div",{staticClass:"score-wrapper"},[e("span",{staticClass:"title"},[t._v("服务态度")]),t._v(" "),e("star",{attrs:{size:36,score:t.seller.serviceScore}}),t._v(" "),e("span",{staticClass:"score"},[t._v(t._s(t.seller.serviceScore))])],1),t._v(" "),e("div",{staticClass:"score-wrapper"},[e("span",{staticClass:"title"},[t._v("商品评分")]),t._v(" "),e("star",{attrs:{size:36,score:t.seller.foodScore}}),t._v(" "),e("span",{staticClass:"score"},[t._v(t._s(t.seller.foodScore))])],1),t._v(" "),e("div",{staticClass:"delivery-wrapper"},[e("span",{staticClass:"title"},[t._v("送达时间")]),t._v(" "),e("span",{staticClass:"delivery"},[t._v(t._s(t.seller.deliveryTime)+"分钟")])])])]),t._v(" "),e("split"),t._v(" "),e("ratingselect",{attrs:{"select-type":t.selectType,"only-content":t.onlyContent,ratings:t.ratings},on:{food:t.select}}),t._v(" "),e("div",{staticClass:"rating-wrapper"},[e("ul",{directives:[{name:"show",rawName:"v-show",value:t.ratings&&t.ratings.length,expression:"ratings && ratings.length"}]},t._l(t.ratings,function(s,i){return e("li",{directives:[{name:"show",rawName:"v-show",value:t.needShow(s.rateType,s.text),expression:"needShow(rating.rateType, rating.text)"}],key:i,staticClass:"rating-item"},[e("div",{staticClass:"avatar"},[e("img",{attrs:{width:"28",height:"28",src:s.avatar}})]),t._v(" "),e("div",{staticClass:"content"},[e("h1",{staticClass:"name"},[t._v(t._s(s.username))]),t._v(" "),e("div",{staticClass:"star-wrapper"},[e("star",{attrs:{size:24,score:s.score}}),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:s.deliveryTime,expression:"rating.deliveryTime"}],staticClass:"delivery"},[t._v(t._s(s.deliveryTime)+"分钟送达")])],1),t._v(" "),e("p",{staticClass:"text"},[t._v(t._s(s.text))]),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:s.recommend&&s.recommend.length,expression:"rating.recommend && rating.recommend.length"}],staticClass:"recommend"},[e("span",{staticClass:"icon-thumb_up"}),t._v(" "),t._l(s.recommend,function(s,i){return e("span",{key:i,staticClass:"item"},[t._v(t._s(s))])})],2),t._v(" "),e("div",{staticClass:"time"},[t._v("\n              "+t._s(t._f("formateDate")(s.rateTime))+"\n            ")])])])}))])],1)])},staticRenderFns:[]};var Y=e("VU/8")(M,R,!1,function(t){e("CyjQ")},"data-v-b5cc842a",null).exports,H=e("mvHQ"),U=e.n(H);var O={components:{star:r,split:x},props:{seller:{type:Object}},data:function(){var t,s,e,i;return{favorite:(t=this.seller.id,s="favorite",e=!1,(i=window.localStorage.__seller__)&&(i=JSON.parse(i)[t])&&i[s]||e)}},created:function(){this.classMap=["decrease","discount","special","invoice","guarantee"]},computed:{favoriteText:function(){return this.favorite?"已收藏":"收藏"}},methods:{toggleFavorite:function(t){var s,e,i,a;this.favorite=!this.favorite,s=this.seller.id,e="favorite",i=this.favorite,(a=window.localStorage.__seller__)?(a=JSON.parse(a))[s]||(a[s]={}):(a={})[s]={},a[s][e]=i,window.localStorage.__seller__=U()(a)},_initScroll:function(){var t=this;this.scroll?this.scroll.refresh():this.$nextTick(function(){t.scroll=new h.a(t.$refs.seller,{click:!0})})},_initPics:function(){var t=this;if(this.seller.pics){var s=126*this.seller.pics.length-6;this.$refs.picList.style.width=s+"px",this.$nextTick(function(){t.picScroll?t.picScroll.refresh():t.picScroll=new h.a(t.$refs.picWrapper,{scrollX:!0,eventPassthrough:"vertical"})})}}},watch:{seller:function(){this._initScroll(),this._initPics()}}},V={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{ref:"seller",staticClass:"seller"},[e("div",{staticClass:"seller-content"},[e("div",{staticClass:"overview"},[e("div",{staticClass:"desc border-1px"},[e("h1",{staticClass:"title"},[t._v(t._s(t.seller.name))]),t._v(" "),e("star",{attrs:{size:36,score:t.seller.score}}),t._v(" "),e("span",{staticClass:"text"},[t._v("("+t._s(t.seller.ratingCount)+")")]),t._v(" "),e("span",{staticClass:"text"},[t._v("月售"+t._s(t.seller.sellCount)+"单")])],1),t._v(" "),e("ul",{staticClass:"remark"},[e("li",{staticClass:"block"},[e("h2",[t._v("起送价")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.minPrice))]),t._v("元\n          ")])]),t._v(" "),e("li",{staticClass:"block"},[e("h2",[t._v("商家配送")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.deliveryPrice))]),t._v("元\n          ")])]),t._v(" "),e("li",{staticClass:"block"},[e("h2",[t._v("平均配送时间")]),t._v(" "),e("div",{staticClass:"content"},[e("span",{staticClass:"stress"},[t._v(t._s(t.seller.deliveryTime))]),t._v("分钟\n          ")])])]),t._v(" "),e("div",{staticClass:"favorite",on:{click:t.toggleFavorite}},[e("span",{staticClass:"icon-favorite",class:{active:t.favorite}}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.favoriteText))])])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"bulletin"},[e("h1",{staticClass:"title"},[t._v("公告与活动")]),t._v(" "),e("div",{staticClass:"content-wrapper border-1px"},[e("p",{staticClass:"content"},[t._v(t._s(t.seller.bulletin))])]),t._v(" "),t.seller.supports?e("ul",{staticClass:"supports"},t._l(t.seller.supports,function(s,i){return e("li",{key:i,staticClass:"support-item border-1px"},[e("span",{staticClass:"icon",class:t.classMap[t.seller.supports[i].type]}),t._v(" "),e("span",{staticClass:"text"},[t._v(t._s(t.seller.supports[i].description))])])})):t._e()]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"pics"},[e("h1",{staticClass:"title"},[t._v("商家实景")]),t._v(" "),e("div",{ref:"picWrapper",staticClass:"pic-wrapper"},[e("ul",{ref:"picList",staticClass:"pic-list"},t._l(t.seller.pics,function(t,s){return e("li",{key:s,staticClass:"pic-item"},[e("img",{attrs:{src:t,width:"120",height:"90"}})])}))])]),t._v(" "),e("split"),t._v(" "),e("div",{staticClass:"info"},[e("h1",{staticClass:"title border-1px"},[t._v("商家信息")]),t._v(" "),e("ul",t._l(t.seller.infos,function(s,i){return e("li",{key:i,staticClass:"info-item border-1px"},[t._v(t._s(s))])}))])],1),t._v(" "),e("star")],1)},staticRenderFns:[]};var I=e("VU/8")(O,V,!1,function(t){e("YC7D")},"data-v-6863d2a0",null).exports;i.a.use(p.a);var L=new p.a({routes:[{path:"/",redirect:"/goods"},{path:"/goods",component:D},{path:"/ratings",component:Y},{path:"/seller",component:I}]}),j=(e("34KM"),e("8+8L"));i.a.config.productionTip=!1,i.a.use(j.a),new i.a({el:"#app",router:L,components:{App:d},template:"<App/>"})},YC7D:function(t,s){},"YO+i":function(t,s){},cI8w:function(t,s){},oWC1:function(t,s){},q4Ba:function(t,s){},rE1D:function(t,s){},slxU:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.f508dfde378ba5a1fdc4.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{279:function(t,e,n){var map={"./github-white.png":280,"./github-wide.png":281,"./nuxt.png":282};function r(t){var e=c(t);return n(e)}function c(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=c,t.exports=r,r.id=279},280:function(t,e,n){t.exports={srcSet:n.p+"img/ecd3c08-900.webp 900w,"+n.p+"img/f1b98ff-600.webp 600w,"+n.p+"img/ffb82aa-400.webp 400w",images:[{path:n.p+"img/ecd3c08-900.webp",width:900,height:470},{path:n.p+"img/f1b98ff-600.webp",width:600,height:314},{path:n.p+"img/ffb82aa-400.webp",width:400,height:209}],src:n.p+"img/ecd3c08-900.webp",toString:function(){return n.p+"img/ecd3c08-900.webp"},width:900,height:470}},281:function(t,e,n){t.exports={srcSet:n.p+"img/b3618ad-796.webp 796w,"+n.p+"img/1a36b1d-600.webp 600w,"+n.p+"img/ee2b5b6-400.webp 400w",images:[{path:n.p+"img/b3618ad-796.webp",width:796,height:265},{path:n.p+"img/1a36b1d-600.webp",width:600,height:200},{path:n.p+"img/ee2b5b6-400.webp",width:400,height:133}],src:n.p+"img/b3618ad-796.webp",toString:function(){return n.p+"img/b3618ad-796.webp"},width:796,height:265}},282:function(t,e,n){t.exports={srcSet:n.p+"img/124872c-900.webp 900w,"+n.p+"img/eaac2e3-600.webp 600w,"+n.p+"img/d81345f-400.webp 400w",images:[{path:n.p+"img/124872c-900.webp",width:900,height:506},{path:n.p+"img/eaac2e3-600.webp",width:600,height:338},{path:n.p+"img/d81345f-400.webp",width:400,height:225}],src:n.p+"img/124872c-900.webp",toString:function(){return n.p+"img/124872c-900.webp"},width:900,height:506}},297:function(t,e,n){"use strict";n.r(e);var r=n(6),c=(n(38),n(29),n(39),n(46),{layout:"article",head:function(){return{title:this.page.title,meta:[{hid:"description",name:"description",content:this.page.description}]}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,c=t.error,e.prev=1,e.next=4,n("blog",r.article).fetch();case 4:return o=e.sent,e.abrupt("return",{page:o});case 8:e.prev=8,e.t0=e.catch(1),c({statusCode:404,message:"Post not found"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()},computed:{meta:function(){var t={year:"numeric",month:"long",day:"numeric"},e=new Date(this.page.createdAt).toLocaleDateString("en-US",t),n=new Date(this.page.updatedAt).toLocaleDateString("en-US",t);return"Created on: ".concat(e,", modified: ").concat(n)},image:function(){try{return n(279)("./".concat(this.page.image,""))}catch(t){return!1}}}}),o=n(5),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"uk-article"},[n("h1",{staticClass:"uk-article-title uk-text-cente"},[t._v(t._s(t.page.title))]),t._v(" "),n("p",{staticClass:"uk-article-meta"},[t._v("\n    "+t._s(t.meta)+"\n  ")]),t._v(" "),t.image?n("img",{staticClass:"uk-margin-bottom",attrs:{srcSet:t.image.srcSet,src:t.image.src}}):t._e(),t._v(" "),n("nuxt-content",{attrs:{document:t.page}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{306:function(t,e,n){"use strict";n.r(e);var r=n(6),c=(n(38),n(29),n(39),{layout:"article",head:function(){return{title:this.page.title,meta:[{hid:"description",name:"description",content:this.page.description}]}},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,c=t.error,e.prev=1,e.next=4,n("blog",r.slug).fetch();case 4:return o=e.sent,e.abrupt("return",{page:o});case 8:e.prev=8,e.t0=e.catch(1),c({statusCode:404,message:"Post not found"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})}}}),o=n(4),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"uk-article"},[n("h1",{staticClass:"uk-article-title uk-text-cente"},[t._v(t._s(t.page.title))]),t._v(" "),n("p",{staticClass:"uk-article-meta"},[t._v(t._s(t.formatDate(t.page.createdAt)))]),t._v(" "),n("nuxt-content",{attrs:{document:t.page}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);
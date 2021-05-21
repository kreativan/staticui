(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2,3],{273:function(t,e,n){"use strict";n.r(e);var r={props:["title"]},c=n(4),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"uk-section uk-background-muted",attrs:{id:"page-heading"}},[n("div",{staticClass:"uk-container uk-text-center"},[n("h1",{staticClass:"uk-heading-small"},[t._v(t._s(t.title))]),t._v(" "),n("Breadcrumb",{attrs:{title:t.title}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Breadcrumb:n(195).default})},274:function(t,e,n){var map={"./github-white.png":275,"./netlify.jpg":276,"./npm.jpg":277,"./nuxt.png":278,"./vue-features.png":279,"./vuejs3.jpeg":280};function r(t){var e=c(t);return n(e)}function c(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=c,t.exports=r,r.id=274},275:function(t,e,n){t.exports={srcSet:n.p+"img/f8475d7-580.webp 580w,"+n.p+"img/60fafbc-960.webp 960w,"+n.p+"img/d6c5874-420.webp 420w",images:[{path:n.p+"img/f8475d7-580.webp",width:580,height:303},{path:n.p+"img/60fafbc-960.webp",width:960,height:502},{path:n.p+"img/d6c5874-420.webp",width:420,height:219}],src:n.p+"img/f8475d7-580.webp",toString:function(){return n.p+"img/f8475d7-580.webp"},width:580,height:303}},276:function(t,e,n){t.exports={srcSet:n.p+"img/8de26f2-580.webp 580w,"+n.p+"img/cd74f60-960.webp 960w,"+n.p+"img/8487d71-420.webp 420w",images:[{path:n.p+"img/8de26f2-580.webp",width:580,height:326},{path:n.p+"img/cd74f60-960.webp",width:960,height:540},{path:n.p+"img/8487d71-420.webp",width:420,height:236}],src:n.p+"img/8de26f2-580.webp",toString:function(){return n.p+"img/8de26f2-580.webp"},width:580,height:326}},277:function(t,e,n){t.exports={srcSet:n.p+"img/af6be01-580.webp 580w,"+n.p+"img/84e40c0-960.webp 960w,"+n.p+"img/0563731-420.webp 420w",images:[{path:n.p+"img/af6be01-580.webp",width:580,height:326},{path:n.p+"img/84e40c0-960.webp",width:960,height:540},{path:n.p+"img/0563731-420.webp",width:420,height:236}],src:n.p+"img/af6be01-580.webp",toString:function(){return n.p+"img/af6be01-580.webp"},width:580,height:326}},278:function(t,e,n){t.exports={srcSet:n.p+"img/a41889d-580.webp 580w,"+n.p+"img/e7ba841-960.webp 960w,"+n.p+"img/652b4c0-420.webp 420w",images:[{path:n.p+"img/a41889d-580.webp",width:580,height:326},{path:n.p+"img/e7ba841-960.webp",width:960,height:540},{path:n.p+"img/652b4c0-420.webp",width:420,height:236}],src:n.p+"img/a41889d-580.webp",toString:function(){return n.p+"img/a41889d-580.webp"},width:580,height:326}},279:function(t,e,n){t.exports={srcSet:n.p+"img/e256e43-580.webp 580w,"+n.p+"img/a8f2c22-960.webp 960w,"+n.p+"img/4e939d3-420.webp 420w",images:[{path:n.p+"img/e256e43-580.webp",width:580,height:387},{path:n.p+"img/a8f2c22-960.webp",width:960,height:641},{path:n.p+"img/4e939d3-420.webp",width:420,height:280}],src:n.p+"img/e256e43-580.webp",toString:function(){return n.p+"img/e256e43-580.webp"},width:580,height:387}},280:function(t,e,n){t.exports={srcSet:n.p+"img/bc29bc0-580.webp 580w,"+n.p+"img/cb61ec0-960.webp 960w,"+n.p+"img/19cf31a-420.webp 420w",images:[{path:n.p+"img/bc29bc0-580.webp",width:580,height:326},{path:n.p+"img/cb61ec0-960.webp",width:960,height:540},{path:n.p+"img/19cf31a-420.webp",width:420,height:236}],src:n.p+"img/bc29bc0-580.webp",toString:function(){return n.p+"img/bc29bc0-580.webp"},width:580,height:326}},281:function(t,e,n){"use strict";n.r(e);n(46);var r={props:["article","index"],computed:{meta:function(){var t={year:"numeric",month:"long",day:"numeric"},e=new Date(this.article.createdAt).toLocaleDateString("en-US",t),n=new Date(this.article.updatedAt).toLocaleDateString("en-US",t);return"Created on: ".concat(e,", modified: ").concat(n)},image:function(){try{return n(274)("./".concat(this.article.image,""))}catch(t){return!1}}}},c=n(4),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"uk-article uk-grid uk-flex-middle",attrs:{"uk-grid":""}},[t.image?n("div",{staticClass:"uk-width-1-2@m"},[n("nuxt-link",{attrs:{to:t.article.path+"/",title:t.article.title}},[n("img",{attrs:{srcSet:t.image.srcSet,src:t.image.src}})])],1):t._e(),t._v(" "),n("div",{staticClass:"uk-width-expand@m"},[n("h2",{staticClass:"uk-article-title"},[n("nuxt-link",{staticClass:"uk-link-heading",attrs:{to:t.article.path+"/",title:t.article.title}},[t._v("\n        "+t._s(t.article.title)+"\n        ")])],1),t._v(" "),n("span",{staticClass:"uk-text-meta"},[t._v(t._s(t.meta))]),t._v(" "),n("p",[t._v(t._s(t.article.intro))]),t._v(" "),n("nuxt-link",{staticClass:"uk-button uk-button-text",attrs:{to:t.article.path+"/"}},[t._v("\n      Read More\n    ")])],1)])}),[],!1,null,null,null);e.default=component.exports},301:function(t,e,n){"use strict";n.r(e);var r=n(6),c=(n(38),{head:function(){return{title:this.page.title,meta:[{hid:"description",name:"description",content:"static ui blog"}]}},data:function(){return{page:{},postsArray:[],limit:2,load:2,button:"Load More",spinner:!1,end:!0,total:0}},created:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("blog-page").fetch();case 2:n=e.sent,t.page=n;case 4:case"end":return e.stop()}}),e)})))()},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("blog").fetch();case 2:return n=e.sent,t.total=n.length,e.next=6,t.$content("blog").sortBy("createdAt","desc").limit(t.limit).fetch();case 6:r=e.sent,t.postsArray.push(r),t.total>t.limit&&(t.end=!1);case 9:case"end":return e.stop()}}),e)})))()},methods:{loadMore:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.spinner=!0,e.next=3,t.$content("blog").sortBy("createdAt","desc").skip(t.limit).limit(t.load).fetch();case 3:if(n=e.sent,t.spinner=!1,!(n.length<1)){e.next=8;break}return t.end=!0,e.abrupt("return");case 8:t.limit+n.length===t.total&&(t.end=!0),t.postsArray.push(n),t.limit=t.limit+t.load;case 11:case"end":return e.stop()}}),e)})))()}}}),o=n(4),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{attrs:{id:"main"}},[n("PageHeading",{attrs:{title:t.page.title}}),t._v(" "),n("div",{staticClass:"uk-section"},[n("div",{staticClass:"uk-container",attrs:{"uk-scrollspy":"target: .uk-article; cls: uk-animation-slide-bottom-small; delay: 200"}},[n("nuxt-content",{attrs:{document:t.page}}),t._v(" "),t._l(t.postsArray,(function(e,i){return[n("div",{key:i,staticClass:"uk-margin-medium-top"},[i>0?n("hr",{staticClass:"uk-margin-medium"}):t._e(),t._v(" "),t._l(e,(function(e,r){return[r>0?n("hr",{key:r,staticClass:"uk-margin-medium"}):t._e(),t._v(" "),n("ArticleIntro",{key:e.slug,attrs:{article:e,index:r}})]}))],2)]})),t._v(" "),n("div",{staticClass:"uk-margin-medium-top uk-text-muted uk-text-center"},[t._v("\n        Showing "+t._s(t.limit)+" of "+t._s(t.total)+"\n      ")]),t._v(" "),t.end?t._e():n("div",{staticClass:"uk-text-center uk-margin"},[n("button",{staticClass:"uk-button uk-button-primary uk-width-small",on:{click:function(e){return t.loadMore()}}},[n("span",{directives:[{name:"show",rawName:"v-show",value:t.spinner,expression:"spinner"}],attrs:{"uk-spinner":""}}),t._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:!t.spinner,expression:"!spinner"}]},[t._v("More")])])])],2)])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PageHeading:n(273).default,ArticleIntro:n(281).default})}}]);
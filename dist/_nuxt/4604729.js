(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{274:function(t,e,n){var map={"./github-white.png":275,"./netlify.jpg":276,"./npm.jpg":277,"./nuxt.png":278,"./vue-features.png":279,"./vuejs3.jpeg":280};function h(t){var e=c(t);return n(e)}function c(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}h.keys=function(){return Object.keys(map)},h.resolve=c,t.exports=h,h.id=274},275:function(t,e,n){t.exports={srcSet:n.p+"img/f8475d7-580.webp 580w,"+n.p+"img/60fafbc-960.webp 960w,"+n.p+"img/d6c5874-420.webp 420w",images:[{path:n.p+"img/f8475d7-580.webp",width:580,height:303},{path:n.p+"img/60fafbc-960.webp",width:960,height:502},{path:n.p+"img/d6c5874-420.webp",width:420,height:219}],src:n.p+"img/f8475d7-580.webp",toString:function(){return n.p+"img/f8475d7-580.webp"},width:580,height:303}},276:function(t,e,n){t.exports={srcSet:n.p+"img/8de26f2-580.webp 580w,"+n.p+"img/cd74f60-960.webp 960w,"+n.p+"img/8487d71-420.webp 420w",images:[{path:n.p+"img/8de26f2-580.webp",width:580,height:326},{path:n.p+"img/cd74f60-960.webp",width:960,height:540},{path:n.p+"img/8487d71-420.webp",width:420,height:236}],src:n.p+"img/8de26f2-580.webp",toString:function(){return n.p+"img/8de26f2-580.webp"},width:580,height:326}},277:function(t,e,n){t.exports={srcSet:n.p+"img/af6be01-580.webp 580w,"+n.p+"img/84e40c0-960.webp 960w,"+n.p+"img/0563731-420.webp 420w",images:[{path:n.p+"img/af6be01-580.webp",width:580,height:326},{path:n.p+"img/84e40c0-960.webp",width:960,height:540},{path:n.p+"img/0563731-420.webp",width:420,height:236}],src:n.p+"img/af6be01-580.webp",toString:function(){return n.p+"img/af6be01-580.webp"},width:580,height:326}},278:function(t,e,n){t.exports={srcSet:n.p+"img/a41889d-580.webp 580w,"+n.p+"img/e7ba841-960.webp 960w,"+n.p+"img/652b4c0-420.webp 420w",images:[{path:n.p+"img/a41889d-580.webp",width:580,height:326},{path:n.p+"img/e7ba841-960.webp",width:960,height:540},{path:n.p+"img/652b4c0-420.webp",width:420,height:236}],src:n.p+"img/a41889d-580.webp",toString:function(){return n.p+"img/a41889d-580.webp"},width:580,height:326}},279:function(t,e,n){t.exports={srcSet:n.p+"img/e256e43-580.webp 580w,"+n.p+"img/a8f2c22-960.webp 960w,"+n.p+"img/4e939d3-420.webp 420w",images:[{path:n.p+"img/e256e43-580.webp",width:580,height:387},{path:n.p+"img/a8f2c22-960.webp",width:960,height:641},{path:n.p+"img/4e939d3-420.webp",width:420,height:280}],src:n.p+"img/e256e43-580.webp",toString:function(){return n.p+"img/e256e43-580.webp"},width:580,height:387}},280:function(t,e,n){t.exports={srcSet:n.p+"img/bc29bc0-580.webp 580w,"+n.p+"img/cb61ec0-960.webp 960w,"+n.p+"img/19cf31a-420.webp 420w",images:[{path:n.p+"img/bc29bc0-580.webp",width:580,height:326},{path:n.p+"img/cb61ec0-960.webp",width:960,height:540},{path:n.p+"img/19cf31a-420.webp",width:420,height:236}],src:n.p+"img/bc29bc0-580.webp",toString:function(){return n.p+"img/bc29bc0-580.webp"},width:580,height:326}},281:function(t,e,n){"use strict";n.r(e);n(46);var h={props:["article","index"],computed:{meta:function(){var t={year:"numeric",month:"long",day:"numeric"},e=new Date(this.article.createdAt).toLocaleDateString("en-US",t),n=new Date(this.article.updatedAt).toLocaleDateString("en-US",t);return"Created on: ".concat(e,", modified: ").concat(n)},image:function(){try{return n(274)("./".concat(this.article.image,""))}catch(t){return!1}}}},c=n(4),component=Object(c.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"uk-article uk-grid uk-flex-middle",attrs:{"uk-grid":""}},[t.image?n("div",{staticClass:"uk-width-1-2@m"},[n("nuxt-link",{attrs:{to:t.article.path+"/",title:t.article.title}},[n("img",{attrs:{srcSet:t.image.srcSet,src:t.image.src}})])],1):t._e(),t._v(" "),n("div",{staticClass:"uk-width-expand@m"},[n("h2",{staticClass:"uk-article-title"},[n("nuxt-link",{staticClass:"uk-link-heading",attrs:{to:t.article.path+"/",title:t.article.title}},[t._v("\n        "+t._s(t.article.title)+"\n        ")])],1),t._v(" "),n("span",{staticClass:"uk-text-meta"},[t._v(t._s(t.meta))]),t._v(" "),n("p",[t._v(t._s(t.article.intro))]),t._v(" "),n("nuxt-link",{staticClass:"uk-button uk-button-text",attrs:{to:t.article.path+"/"}},[t._v("\n      Read More\n    ")])],1)])}),[],!1,null,null,null);e.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{269:function(t,e,n){"use strict";n.r(e);n(44),n(124);var l={props:["title"],computed:{breadcrumbs:function(){var t=this,e=this.$route.path.split("/");""!==e[e.length]&&e.pop(),e.shift();var n=e.reduce((function(e,path,n){return e.push({to:e[n-1]?"/"+e[n-1].path+"/"+path:"/"+path,title:t.title}),e}),[]);return n}}},r=n(9),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"uk-breadcrumb"},[n("li",[n("nuxt-link",{staticClass:"title",attrs:{to:"/"}},[t._v("\n      Home\n    ")])],1),t._v(" "),t._l(t.breadcrumbs,(function(e,i){return n("li",{key:i,staticClass:"item"},[n("nuxt-link",{staticClass:"title",attrs:{to:e.to}},[t._v("\n      "+t._s(e.title)+"\n    ")])],1)}))],2)}),[],!1,null,null,null);e.default=component.exports}}]);
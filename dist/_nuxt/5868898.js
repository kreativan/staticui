(window.webpackJsonp=window.webpackJsonp||[]).push([[10,3],{290:function(t,e,n){"use strict";n.r(e);var r={props:["title"]},c=n(4),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"uk-section uk-background-muted",attrs:{id:"page-heading"}},[n("div",{staticClass:"uk-container uk-text-center"},[n("h1",{staticClass:"uk-heading-small"},[t._v(t._s(t.title))]),t._v(" "),n("Breadcrumb",{attrs:{title:t.title}})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Breadcrumb:n(195).default})},305:function(t,e,n){"use strict";n.r(e);var r=n(6),c=(n(38),n(29),n(39),{head:function(){return{title:this.page.title,meta:[{hid:"description",name:"description",content:this.page.description}]}},data:function(){return{page:{}}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("nuxt-page").fetch();case 2:n=e.sent,t.page=n;case 4:case"end":return e.stop()}}),e)})))()}}),l=n(4),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{attrs:{id:"main"}},[n("PageHeading",{attrs:{title:t.page.title}}),t._v(" "),n("section",{staticClass:"uk-section"},[n("div",{staticClass:"uk-container"},[n("nuxt-content",{attrs:{document:t.page}})],1)])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PageHeading:n(290).default})}}]);
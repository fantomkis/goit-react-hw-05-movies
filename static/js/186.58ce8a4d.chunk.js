"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{6713:function(n,t,e){e.d(t,{Hg:function(){return i},IQ:function(){return p},Jh:function(){return h},V0:function(){return o},rs:function(){return f}});var r=e(5861),u=e(7757),a=e.n(u),c=e(4569),s=e.n(c)().create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"82c59d753050746a09d77670604a0453"}}),o=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s("/search/movie",{params:{query:t}});case 2:return e=n.sent,n.next=5,e.data.results;case 5:return r=n.sent,console.log(r),n.abrupt("return",r);case 8:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),i=function(){var n=(0,r.Z)(a().mark((function n(){var t,e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s("trending/movie/week");case 2:return t=n.sent,n.next=5,t.data;case 5:return e=n.sent,n.abrupt("return",e);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s("movie/".concat(t));case 2:return e=n.sent,n.next=5,e.data;case 5:return r=n.sent,n.abrupt("return",r);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s("movie/".concat(t,"/credits"));case 2:return e=n.sent,n.next=5,e.data;case 5:return r=n.sent,n.abrupt("return",r.cast);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,s("movie/".concat(t,"/reviews"));case 2:return e=n.sent,n.next=5,e.data;case 5:return r=n.sent,n.abrupt("return",r.results);case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},186:function(n,t,e){e.r(t);var r=e(885),u=e(2791),a=e(6871),c=e(6713),s=e(184);t.default=function(n){var t=(0,a.UO)().id,e=(0,u.useState)([]),o=(0,r.Z)(e,2),i=o[0],f=o[1];return(0,u.useEffect)((function(){(0,c.Jh)(t).then((function(n){f(n)})).catch((function(n){console.log(n)}))}),[t]),(0,s.jsxs)("div",{children:[" ",i.length?(0,s.jsx)("ul",{children:i.map((function(n){return(0,s.jsxs)("li",{children:[(0,s.jsxs)("p",{children:["Author: ",n.author,"."]}),(0,s.jsx)("p",{children:n.content})]},n.id)}))}):"We don't have any reviews for this movie"]})}}}]);
//# sourceMappingURL=186.58ce8a4d.chunk.js.map
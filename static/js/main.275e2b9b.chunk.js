(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{16:function(t,e,c){},18:function(t,e,c){"use strict";c.r(e);var a=c(9),n=c.n(a),s=c(4),i=(c(14),c(15),c(16),c(2)),b=c(6),j=c.n(b),r=c(1),l=function(){return Object(r.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)("div",{className:"navbar-brand",children:[Object(r.jsx)(s.c,{to:"/",className:function(t){var e=t.isActive;return j()("navbar-item",{"is-active":e})},children:"Home"}),Object(r.jsx)(s.c,{to:"tabs",className:function(t){var e=t.isActive;return j()("navbar-item",{"is-active":e})},children:"Tabs"})]})})})},d=function(){return Object(r.jsx)("h1",{className:"title",children:"Home page"})},o=function(t){var e=t.tab,c=t.tabId;return Object(r.jsx)("li",{"data-cy":"Tab",className:j()({"is-active":e.id===c}),children:Object(r.jsx)(s.b,{to:"/tabs/".concat(e.id),children:e.title})})},x=function(t){var e=t.content;return Object(r.jsx)("div",{className:"block","data-cy":"TabContent",children:e||"Please select a tab"})},h=function(t){var e,c=t.tabs,a=Object(i.h)().tabId,n=void 0===a?"":a,s=(null===(e=c.find((function(t){return t.id===n})))||void 0===e?void 0:e.content)||"";return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"tabs is-boxed",children:Object(r.jsx)("ul",{children:c.map((function(t){return Object(r.jsx)(o,{tab:t,tabId:n},t.id)}))})}),Object(r.jsx)(x,{content:s})]})},O=function(t){var e=t.tabs;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("h1",{className:"title",children:"Tabs page"}),Object(r.jsx)(h,{tabs:e})]})},m=function(){return Object(r.jsx)("h1",{className:"title",children:"Page not found"})},u=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],v=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(l,{}),Object(r.jsx)("div",{className:"section",children:Object(r.jsx)("div",{className:"container",children:Object(r.jsxs)(i.d,{children:[Object(r.jsx)(i.b,{path:"/",element:Object(r.jsx)(d,{})}),Object(r.jsx)(i.b,{path:"/home",element:Object(r.jsx)(i.a,{to:"/",replace:!0})}),Object(r.jsxs)(i.b,{path:"/tabs",element:Object(r.jsx)(O,{tabs:u}),children:[Object(r.jsx)(i.b,{index:!0,element:Object(r.jsx)(O,{tabs:u})}),Object(r.jsx)(i.b,{path:":tabId",element:Object(r.jsx)(O,{tabs:u})})]}),Object(r.jsx)(i.b,{path:"*",element:Object(r.jsx)(m,{})})]})})})]})};n.a.render(Object(r.jsx)(s.a,{children:Object(r.jsx)(v,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.275e2b9b.chunk.js.map
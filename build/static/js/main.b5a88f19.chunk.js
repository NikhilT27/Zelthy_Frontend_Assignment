(this.webpackJsonpzelthy=this.webpackJsonpzelthy||[]).push([[0],{23:function(e,a,t){},44:function(e,a,t){},45:function(e,a,t){"use strict";t.r(a);var s=t(2),c=t.n(s),n=t(17),l=t.n(n),i=(t(23),t(7)),r=t.n(i),o=t(18),j=t(3),m=t(6),b=t.n(m),d=t(4),u=t(8),h=t.p+"static/media/envelope.8735bd6f.svg",O=t.p+"static/media/telephone.ca5045ec.svg",x=t.p+"static/media/www.f9484175.svg",p=t.p+"static/media/heart.8d10903a.svg",f=t.p+"static/media/pen.4fa8f48b.svg",v=t.p+"static/media/trash.40317f13.svg",g=t.p+"static/media/emptyHeart.4ca441db.svg",N=t.p+"static/media/close.1eba4c86.svg",w=t(0);function y(e){var a=e.data,t=Object(s.useState)({name:a.name,email:a.email,phone:a.phone,website:a.website}),c=Object(j.a)(t,2),n=c[0],l=c[1],i=Object(s.useState)({name:"",email:"",phone:"",website:""}),r=Object(j.a)(i,2),o=r[0],m=r[1],b=Object(s.useState)(!1),y=Object(j.a)(b,2),C=y[0],F=y[1],k=Object(s.useState)(!1),S=Object(j.a)(k,2),B=S[0],E=S[1];function P(e){m((function(a){return Object(u.a)(Object(u.a)({},a),{},Object(d.a)({},e.target.name,e.target.value))}))}function z(e){return""!==o[e]?o[e]:n[e]}return 0===Object.keys(n).length&&n.constructor===Object?Object(w.jsx)(w.Fragment,{}):Object(w.jsxs)("div",{className:"each-user-box",children:[Object(w.jsx)("div",{className:"each-user-profile-box",children:Object(w.jsx)("img",{src:"https://avatars.dicebear.com/v2/avataaars/".concat(n.name,".svg?mood[]=happy"),className:"each-user-profile-img"})}),Object(w.jsxs)("div",{className:"each-user-main-data",children:[Object(w.jsx)("h3",{children:n.name}),Object(w.jsxs)("ul",{children:[Object(w.jsx)("li",{children:Object(w.jsxs)("div",{className:"each-user-detail-box",children:[Object(w.jsx)("img",{src:h,alt:"",className:"each-user-symbol"}),Object(w.jsx)("span",{className:"each-user-detail",children:n.email})]})}),Object(w.jsx)("li",{children:Object(w.jsxs)("div",{className:"each-user-detail-box",children:[Object(w.jsx)("img",{src:O,alt:"",className:"each-user-symbol"}),Object(w.jsx)("span",{className:"each-user-detail",children:n.phone})]})}),Object(w.jsx)("li",{children:Object(w.jsxs)("div",{className:"each-user-detail-box",children:[Object(w.jsx)("img",{src:x,alt:"",className:"each-user-symbol"}),Object(w.jsxs)("span",{className:"each-user-detail",children:["http://",n.website]})]})})]})]}),Object(w.jsxs)("div",{className:"each-user-option",children:[Object(w.jsx)("button",{className:"each-user-option-button",onClick:function(){return F(!C)},children:C?Object(w.jsx)("img",{src:p,alt:"",className:"each-user-symbol"}):Object(w.jsx)("img",{src:g,alt:"",className:"each-user-symbol"})}),Object(w.jsx)("div",{class:"each-user-option-vertical-line"}),Object(w.jsx)("button",{className:"each-user-option-button",onClick:function(){return E(!B)},children:Object(w.jsx)("img",{src:f,alt:"",className:"each-user-symbol"})}),B?Object(w.jsx)("div",{className:"modal-box",children:Object(w.jsxs)("div",{className:"modal-content",children:[Object(w.jsxs)("div",{className:"modal-title",children:[Object(w.jsx)("h3",{children:"Basic Modal"}),Object(w.jsx)("button",{onClick:function(){return E(!B)},children:Object(w.jsx)("img",{src:N,alt:"",className:"modal-close"})})]}),Object(w.jsxs)("form",{onSubmit:function(e){e.preventDefault();var a=z("name"),t=z("email"),s=z("phone"),c=z("website");l({name:a,email:t,phone:s,website:c})},className:"modal-form",children:[Object(w.jsxs)("div",{className:"modal-form-option",children:[Object(w.jsxs)("label",{children:[""===o.name?Object(w.jsx)("span",{className:"modal-form-warning",children:"* "}):Object(w.jsx)(w.Fragment,{}),"Name:"," "]}),Object(w.jsx)("input",{type:"text",name:"name",value:o.name,placeholder:n.name,onChange:P,className:"modal-form-input"})]}),Object(w.jsxs)("div",{className:"modal-form-option",children:[Object(w.jsxs)("label",{children:[""===o.email?Object(w.jsx)("span",{className:"modal-form-warning",children:"* "}):Object(w.jsx)(w.Fragment,{}),"Email:"," "]}),Object(w.jsx)("input",{type:"text",name:"email",value:o.email,placeholder:n.email,onChange:P,className:"modal-form-input"})]}),Object(w.jsxs)("div",{className:"modal-form-option",children:[Object(w.jsxs)("label",{children:[""===o.phone?Object(w.jsx)("span",{className:"modal-form-warning",children:"* "}):Object(w.jsx)(w.Fragment,{}),"Phone:"," "]}),Object(w.jsx)("input",{type:"text",name:"phone",value:o.phone,placeholder:n.phone,onChange:P,className:"modal-form-input"})]}),Object(w.jsxs)("div",{className:"modal-form-option",children:[Object(w.jsxs)("label",{children:[""===o.website?Object(w.jsx)("span",{className:"modal-form-warning",children:"* "}):Object(w.jsx)(w.Fragment,{}),"Website:"," "]}),Object(w.jsx)("input",{type:"text",name:"website",value:o.website,placeholder:n.website,onChange:P,className:"modal-form-input"})]}),Object(w.jsxs)("div",{className:"modal-form-submit",children:[Object(w.jsx)("button",{onClick:function(){return E(!B)},className:"modal-form-button modal-cancel",children:"Cancel"}),Object(w.jsx)("button",{type:"submit",className:"modal-form-button modal-ok",children:"OK"})]})]})]})}):Object(w.jsx)(w.Fragment,{}),Object(w.jsx)("div",{class:"each-user-option-vertical-line"}),Object(w.jsx)("button",{className:"each-user-option-button",onClick:function(){return l({})},children:Object(w.jsx)("img",{src:v,alt:"",className:"each-user-symbol"})})]})]})}function C(){return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)("div",{className:"loading-box",children:Object(w.jsxs)("div",{className:"spinner",children:[Object(w.jsx)("div",{className:"double-bounce1"}),Object(w.jsx)("div",{className:"double-bounce2"})]})})})}function F(){var e=Object(s.useState)([]),a=Object(j.a)(e,2),t=a[0],c=a[1];Object(s.useEffect)((function(){n()}),[]);var n=function(){var e=Object(o.a)(r.a.mark((function e(){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://jsonplaceholder.typicode.com/users");case 2:(a=e.sent)&&c(a.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(w.jsx)("div",{className:"users-box",children:0===t.length?Object(w.jsx)(C,{}):t.map((function(e){return Object(w.jsx)(y,{data:e},e.id)}))})}var k=function(){return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(F,{})})},S=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,46)).then((function(a){var t=a.getCLS,s=a.getFID,c=a.getFCP,n=a.getLCP,l=a.getTTFB;t(e),s(e),c(e),n(e),l(e)}))};t(44);l.a.render(Object(w.jsx)(c.a.StrictMode,{children:Object(w.jsx)(k,{})}),document.getElementById("root")),S()}},[[45,1,2]]]);
//# sourceMappingURL=main.b5a88f19.chunk.js.map
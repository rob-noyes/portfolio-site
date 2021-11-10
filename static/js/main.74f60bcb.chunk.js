(this["webpackJsonpportfolio-site"]=this["webpackJsonpportfolio-site"]||[]).push([[0],{26:function(e,t,c){},27:function(e,t,c){},37:function(e){e.exports=JSON.parse('{"Projects":[{"id":0,"projectName":"Room Design","link":"https://rob-noyes.github.io/room-homepage/","tags":"Javascript / ReactJS / TailwindCSS","description":"","images":["./images/projects/room/desktop1.png","./images/projects/room/desktop2.png"],"color":"#ecb6b6"},{"id":1,"projectName":"Tip Jar","link":"https://rob-noyes.github.io/room-homepage/","tags":"Javascript / ReactJS / TailwindCSS","description":"","images":["./images/projects/tipjar/desktop.png","./images/projects/tipjar/mobile.png"],"color":"#b6d8ec"},{"id":2,"projectName":"Cast","link":"https://rob-noyes.github.io/Cast/","tags":"Vanilla Javascript / CSS","description":"","images":["./images/projects/cast/castDesktop.png"],"color":"#b6ecb6"}]}')},38:function(e,t,c){"use strict";c.r(t);var s=c(2),i=c(11),n=c.n(i),o=(c(26),c(5)),r=c(3),a=(c(27),c(13)),j=c(17),l=c(39),b=c(1),d=function(){var e=Object(s.useState)(!1),t=Object(a.a)(e,2),c=t[0],i=t[1];return Object(b.jsxs)("div",{className:"header-container",children:[Object(b.jsx)("button",{className:"hamburger-menu",children:Object(b.jsx)(j.a,{onClick:function(){return i(!c)}})}),Object(b.jsx)(o.b,{to:"/",children:Object(b.jsx)("button",{className:"header-button",children:"Rob Noyes"})}),Object(b.jsx)(l.a,{in:c,timeout:300,classNames:"fade",unmountOnExit:!0,children:Object(b.jsxs)("ul",{children:[Object(b.jsx)(o.b,{to:"/",children:"Home"}),Object(b.jsx)(o.b,{to:"/portfolio",children:"Portfolio"}),Object(b.jsx)(o.b,{to:"/about",children:"About"})]})})]})},m=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(d,{}),Object(b.jsx)("h2",{children:"Welcome to The About Page"})]})},h=function(){return Object(b.jsxs)("div",{className:"landing-container",children:[Object(b.jsxs)("h2",{className:"home-heading",children:["Hi, my name is ",Object(b.jsx)("b",{children:"Rob"}),"."]}),Object(b.jsx)("p",{className:"descriptions",children:"I'm a freelance front-end developer, focused on mobile-first, responsive development."}),Object(b.jsx)(o.b,{to:"/portfolio",children:Object(b.jsx)("button",{className:"main-button",children:"View my work"})})]})},x=c(12),O=c(9),p=function(){return Object(b.jsx)("div",{className:"contact-container",children:Object(b.jsxs)("div",{className:"social-buttons",children:[Object(b.jsx)("a",{href:"mailto: robertjnoyes1@gmail.com",children:Object(b.jsx)(O.c,{})}),Object(b.jsx)("a",{href:"https://github.com/rob-noyes",children:Object(b.jsx)(x.b,{})}),Object(b.jsx)("a",{href:"https://www.linkedin.com/in/rnoyes/",children:Object(b.jsx)(x.c,{})})]})})},u=function(e){var t=e.icon,c=e.title,s=e.text,i=e.className;return Object(b.jsxs)("div",{className:"description-card ".concat(i),children:[Object(b.jsx)("figure",{className:"description-icon",children:t}),Object(b.jsx)("h2",{className:"headings",children:c}),Object(b.jsx)("p",{className:"descriptions",children:s})]})},g=function(){return Object(b.jsxs)("div",{className:"description-container",children:[Object(b.jsxs)("div",{className:"centering",children:[Object(b.jsx)("h2",{className:"home-title",children:"About"}),Object(b.jsx)("div",{className:"line"})]}),Object(b.jsx)(u,{icon:Object(b.jsx)(O.d,{}),title:"Fast",text:"Fast load times and intuitive interaction is a high priorty for me.",className:"color-red"}),Object(b.jsx)(u,{icon:Object(b.jsx)(O.b,{}),title:"Responsive",text:"My layouts are built to work on any device, from small to big.",className:"color-blue"}),Object(b.jsx)(u,{icon:Object(b.jsx)(x.a,{}),title:"Dynamic",text:"Sites don't always need to be static, I make pages come to life while feeling snappy.",className:"color-green"})]})},f=function(e){var t=e.src,c=e.title,i=e.color,n=Object(s.useState)(!1),r=Object(a.a)(n,2),j=r[0],d=r[1];return Object(b.jsxs)("div",{onMouseEnter:function(){return d(!0)},onMouseLeave:function(){return d(!1)},className:"project-card",children:[Object(b.jsx)(l.a,{in:j,timeout:200,classNames:"project-caption",unmountOnExit:!0,children:Object(b.jsxs)("div",{className:"project-caption",style:{background:i},children:[Object(b.jsx)("div",{}),Object(b.jsx)("h3",{className:"project-card-title",children:c}),Object(b.jsx)(o.b,{to:"/portfolio/test",children:Object(b.jsxs)("div",{className:"view-button",children:[Object(b.jsx)("h3",{children:"View Project"}),Object(b.jsx)(O.a,{})]})})]})}),Object(b.jsx)("img",{className:"project-card-image",alt:"",src:t})]})},N=c(37),v=function(){return Object(b.jsxs)("div",{className:"description-container",children:[Object(b.jsxs)("div",{className:"centering",children:[Object(b.jsx)("h2",{className:"home-title",children:"Portfolio"}),Object(b.jsx)("div",{className:"line"})]}),Object(b.jsx)("div",{className:"project-cards",children:N.Projects.map((function(e){return Object(b.jsx)(f,{src:e.images[0],color:e.color,title:e.projectName},e.id)}))})]})},y=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(d,{}),Object(b.jsxs)("div",{className:"hello-container",children:[Object(b.jsx)(h,{}),Object(b.jsx)(g,{})]}),Object(b.jsx)("div",{className:"hello-container",children:Object(b.jsx)(v,{})}),Object(b.jsx)("div",{children:Object(b.jsx)(p,{})})]})},k=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(d,{}),Object(b.jsx)("div",{className:"",children:Object(b.jsx)("h2",{children:"Hi this is the portfolio page"})})]})};var w=function(){return console.log(function(e){if(e<0)return!1;var t=parseInt(e.toString().split("").reverse().join(""));return e===t?"true":"false"}(10)),Object(b.jsx)(o.a,{children:Object(b.jsxs)(r.c,{children:[Object(b.jsx)(r.a,{exact:!0,path:"/",component:y}),Object(b.jsx)(r.a,{path:"/portfolio",component:k}),Object(b.jsx)(r.a,{path:"/about",component:m})]})})};n.a.render(Object(b.jsx)(o.a,{children:Object(b.jsx)(w,{})}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.74f60bcb.chunk.js.map
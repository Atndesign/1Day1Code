(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"16l3":function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),l=a("Rb52");var o=function(e){var t,a;function r(t){var a;return(a=e.call(this,t)||this).state={},a}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){return n.a.createElement("div",{className:"project__thumbnail"},n.a.createElement("img",{className:"img-fluid project-thumbnail__img",src:this.props.cover,alt:this.props.title}),n.a.createElement("p",{className:"project-thumbnail__title"},this.props.title),n.a.createElement("a",{href:this.props.path,className:"btn project-thumbnail__btn"},"View this project"))},r}(r.Component);a.d(t,"postQuery",(function(){return c}));t.default=function(e){var t=e.data;return n.a.createElement(n.a.Fragment,null,n.a.createElement(l.a,null),n.a.createElement("div",{className:"row"},t.allMarkdownRemark.edges.map((function(e){return n.a.createElement("div",{className:"col-lg-3 col-md-4"},n.a.createElement(o,{cover:e.node.frontmatter.img,title:e.node.frontmatter.title,path:e.node.frontmatter.path}))}))))};var c="3896204301"},Rb52:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),l=a("Wbzz");var o=function(e){var t,a;function r(t){var a;return(a=e.call(this,t)||this).openSidebar=function(){a.setState({menuLeft:0})},a.closeSidebar=function(){a.setState({menuLeft:-500})},a.state={menuLeft:-500},a}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this;return n.a.createElement("header",{className:"header"},n.a.createElement("div",{style:{left:+this.state.menuLeft+"px"},className:"sidebar mobile-only"},n.a.createElement("button",{className:"sidebar-cross",onClick:function(t){return e.closeSidebar()}},n.a.createElement("img",{srcSet:"/img/cross.svg",src:"/img/cross.png",alt:"cross"})),n.a.createElement("ul",{className:"nav__list"},n.a.createElement("li",{className:"list__item"},n.a.createElement(l.a,{to:"/"},"Home")),n.a.createElement("li",{className:"list__item"},n.a.createElement(l.a,{to:"/projects/"},"Projects")),n.a.createElement("li",{className:"list__item"},n.a.createElement("a",{target:"_blank",rel:"nooppener",href:"https://kmoulun.gitlab.io/moulunkevin/"},"Contact")))),n.a.createElement("button",{className:"sidebar-toggler mobile-only",onClick:function(t){return e.openSidebar()}},n.a.createElement("img",{src:"/img/menu.svg",alt:"menu toggler"})),n.a.createElement("img",{srcset:"/img/{dailycode}.svg",src:"/img/{dailycode}.png",alt:"logo",className:"logo"}),n.a.createElement("nav",{className:"header__nav desktop-only"},n.a.createElement("ul",{className:"nav__list"},n.a.createElement("li",{className:"list__item"},n.a.createElement(l.a,{to:"/"},"Home")),n.a.createElement("li",{className:"list__item"},n.a.createElement(l.a,{to:"/projects/"},"Projects")),n.a.createElement("li",{className:"list__item"},n.a.createElement("a",{target:"_blank",href:"https://kmoulun.gitlab.io/moulunkevin/"},"Contact")))))},r}(r.Component);t.a=o},Wbzz:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),l=a("+ZDr"),o=a.n(l);a.d(t,"a",(function(){return o.a}));a("lw3w"),a("emEt").default.enqueue,n.a.createContext({})},lw3w:function(e,t,a){var r;e.exports=(r=a("rzlk"))&&r.default||r},rzlk:function(e,t,a){"use strict";a.r(t);a("91GP");var r=a("q1tI"),n=a.n(r),l=a("IOVJ");t.default=function(e){var t=e.location,a=e.pageResources;return a?n.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json)):null}}}]);
//# sourceMappingURL=component---src-pages-projects-js-3ac605b381d5135a9849.js.map
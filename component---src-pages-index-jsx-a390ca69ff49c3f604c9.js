(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{140:function(e,t,a){"use strict";a.r(t);var n=a(163),r=a(0),i=a.n(r),o=a(144),l=a(149),c=a(150);t.default=function(){return i.a.createElement(o.StaticQuery,{query:"4258743871",render:function(e){var t=e.site.siteMetadata,a=t.siteUrl,n=t.owner;return i.a.createElement(l.a,null,i.a.createElement(c.a,{title:"Home",url:a,author:n}),i.a.createElement("h1",null,"Hi people"),i.a.createElement("p",null,"Welcome to your new Gatsby site."),i.a.createElement("p",null,"Now go build something great."))},data:n})}},144:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return g}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(143),c=a.n(l);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var u=a(145),s=a.n(u);a.d(t,"PageRenderer",function(){return s.a});var m=a(32);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),p=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},145:function(e,t,a){var n;e.exports=(n=a(147))&&n.default||n},146:function(e){e.exports={data:{site:{siteMetadata:{title:"jinsang.me"}}}}},147:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(51),c=a(2),u=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},148:function(e,t,a){},149:function(e,t,a){"use strict";var n=a(146),r=a(0),i=a.n(r),o=a(4),l=a.n(o),c=a(144),u=function(e){var t=e.siteTitle;return i.a.createElement("header",null,i.a.createElement("nav",null,i.a.createElement("h1",null,i.a.createElement(c.Link,{to:"/"},t)),i.a.createElement("div",null,i.a.createElement(c.Link,{to:"/page/1"}," blog "),i.a.createElement(c.Link,{to:"/resume"}," resume "))))};u.propTypes={siteTitle:l.a.string},u.defaultProps={siteTitle:""};var s=u,m=function(){return i.a.createElement("footer",null,i.a.createElement("span",null,"©",(new Date).getFullYear()),i.a.createElement("span",null,"Built with",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")),i.a.createElement("span",null,"Source code on",i.a.createElement("a",{href:"https://github.com/jin60641/blog"},"GitHub")))},d=(a(148),function(e){var t=e.children;return i.a.createElement(c.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s,{siteTitle:e.site.siteMetadata.title}),t,i.a.createElement(m,null))},data:n})});d.propTypes={children:l.a.node.isRequired};var p=d;t.a=p},150:function(e,t,a){"use strict";a(151);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(152),c=a.n(l),u=function(e){var t=e.url,a=e.title,n=e.description,i=e.author,o=e.keywords,l=e.locale,u=e.image;return r.a.createElement(c.a,{htmlAttributes:{lang:l.slice(0,2)}},r.a.createElement("title",null,a),r.a.createElement("meta",{name:"description",content:n}),r.a.createElement("meta",{name:"author",content:i.name+" <"+i.email+">"}),r.a.createElement("meta",{name:"keywords",content:o.join(", ")}),r.a.createElement("meta",{property:"og:locale",content:l}),r.a.createElement("meta",{property:"og:url",content:t}),r.a.createElement("meta",{property:"og:title",content:a}),r.a.createElement("meta",{property:"og:type",content:"website"}),r.a.createElement("meta",{property:"og:description",content:n}),u&&r.a.createElement("meta",{property:"og:image",content:u}),r.a.createElement("meta",{name:"twitter:card",content:"summary"}),r.a.createElement("meta",{name:"twitter:url",content:t}),r.a.createElement("meta",{name:"twitter:title",content:a}),r.a.createElement("meta",{name:"twitter:description",content:n}),r.a.createElement("meta",{name:"twitter:creator",content:i.name+" <"+i.email+">"}),u&&r.a.createElement("meta",{property:"twitter:image",content:u}))};u.defaultProps={description:"",keywords:[],image:"",locale:"ko_KR"},u.propTypes={url:o.a.string.isRequired,title:o.a.string.isRequired,author:o.a.shape({name:o.a.string.isRequired,email:o.a.string.isRequired}).isRequired,description:o.a.string,image:o.a.string,locale:o.a.string,keywords:o.a.arrayOf(o.a.string)};var s=u;t.a=s},163:function(e){e.exports={data:{site:{siteMetadata:{siteUrl:"jinsang.me",owner:{name:"진상현",email:"jin60641@gmail.com"}}}}}}}]);
//# sourceMappingURL=component---src-pages-index-jsx-a390ca69ff49c3f604c9.js.map
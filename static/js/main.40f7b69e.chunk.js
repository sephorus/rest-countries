(this["webpackJsonprest-countries-app"]=this["webpackJsonprest-countries-app"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){},19:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),s=n(4),r=n.n(s),o=(n(14),n(15),n(3)),i=n.n(o),u=n(5),l=n(6),j=n(7),d=n(9),p=n(8),h=(n(17),n(0));var m=function(t){var e=t.countryName,n=t.countryFlagURL,c=t.countryPopulation,a=t.countryRegion,s=t.countryCapital;return e||(e="Not known"),n||(n="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"),c&&0!=c||(c="Not know"),a||(a="Not known"),s||(s="Not known"),Object(h.jsxs)("div",{className:"countryCard",children:[Object(h.jsx)("img",{loading:"lazy",src:n,alt:"The country flag for ".concat(e)}),Object(h.jsxs)("div",{className:"countryCard__info",children:[Object(h.jsx)("h2",{children:e}),Object(h.jsxs)("div",{className:"countryCard__stats",children:[Object(h.jsxs)("p",{className:"countryCard__stat",children:[Object(h.jsx)("span",{className:"countryCard__statTitle",children:"Population: "}),c]}),Object(h.jsxs)("p",{className:"countryCard__stat",children:[Object(h.jsx)("span",{className:"countryCard__statTitle",children:"Region: "}),a]}),Object(h.jsxs)("p",{className:"countryCard__stat",children:[Object(h.jsx)("span",{className:"countryCard__statTitle",children:"Capital: "}),s]})]})]})]})},b=(n(19),function(t){Object(d.a)(n,t);var e=Object(p.a)(n);function n(t){var c;return Object(l.a)(this,n),(c=e.call(this,t)).componentDidMount=Object(u.a)(i.a.mark((function t(){var e,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://restcountries.eu/rest/v2/all");case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,c.setState({countryItems:n});case 7:case"end":return t.stop()}}),t)}))),c.state={countryItems:[]},c}return Object(j.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"countryDashboard",children:Object(h.jsx)("div",{className:"countryItems",children:this.state.countryItems.map((function(t){return Object(h.jsx)(m,{countryName:t.name,countryFlagURL:t.flag,countryPopulation:t.population,countryRegion:t.region,countryCapital:t.capital},t.numericCode)}))})})}}]),n}(a.a.Component));var y=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)("header",{className:"App-header",children:Object(h.jsx)(b,{})})})};r.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(y,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.40f7b69e.chunk.js.map
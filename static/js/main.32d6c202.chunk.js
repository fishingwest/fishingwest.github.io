(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(t,n,e){},14:function(t,n,e){"use strict";e.r(n);var a=e(1),r=e(0),c=e(3),o=e.n(c),i=e(4),s=e(5),u=e(7),p=e(6),h=function(t){Object(u.a)(e,t);var n=Object(p.a)(e);function e(){var t;Object(i.a)(this,e);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=n.call.apply(n,[this].concat(r))).state={data:[]},t}return Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this;fetch("https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*").then((function(t){return t.json()})).then((function(n){t.setState({data:n})}))}},{key:"render",value:function(){var t=this.state.data.map((function(t,n){return Object(a.jsx)("li",{children:t},n)}));return Object(a.jsx)("ul",{children:t})}}]),e}(r.Component);e(13);o.a.render(Object(a.jsx)(h,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.32d6c202.chunk.js.map
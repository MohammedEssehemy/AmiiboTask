(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(58)},31:function(e,t,a){},33:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(23),i=a.n(r),c=(a(31),a(5)),s=a(6),l=a(9),u=a(7),h=a(10),m=(a(33),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"card"},o.a.createElement("img",{src:this.props.amiibo.image,width:"40%"}),o.a.createElement("p",null,this.props.amiibo.name))}}]),t}(n.Component)),d=a(8),p=a(14),b=a.n(p),g=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).handleChange=function(e){""!==e.target.value?a.search(e.target.value):a.getAmiiboCards()},a.getAmiiboCards=function(){b.a.get("http://localhost:8080/amiibo").then(function(e){a.props.getAmiiboCards(e.data.data.docs),a.props.getTotalCardsNumber(e.data.data.total)}).catch(function(e){console.log("ERRROR",e)})},a.search=function(e){b.a.get("http://localhost:8080/amiibo/search?search="+e).then(function(e){a.props.getAmiiboCards(e.data.data.docs),a.props.getTotalCardsNumber(e.data.data.total)}).catch(function(e){console.log("ERRROR",e)})},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getAmiiboCards()}},{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("div",{className:"topnav"},o.a.createElement("h3",null,"AMIIBOS"),o.a.createElement("div",{className:"search-container"},o.a.createElement("input",{type:"text",placeholder:"Search..",name:"search",onChange:this.handleChange})))),o.a.createElement("div",{className:"sidenav"},"User Data",o.a.createElement("h3",null,"Mario"),o.a.createElement("h4",null,"Total Cards : ",this.props.total),o.a.createElement("h4",null,"Visible Cards :",this.props.amiibos.length)),0===this.props.amiibos.length?o.a.createElement("h4",null,"No cards match search "):this.props.amiibos.map(function(e){return o.a.createElement(m,{key:e._id,amiibo:e})}))}}]),t}(n.Component),E=Object(d.b)(function(e){return{amiibos:e.amiibos,total:e.total}},function(e){return{getAmiiboCards:function(t){return e(function(){return{type:"GET_AMIIBO_CARDS",amiibos:arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]}}(t))},getTotalCardsNumber:function(t){return e(function(){return{type:"GET_CARDS_TOTAL",total:arguments.length>0&&void 0!==arguments[0]?arguments[0]:0}}(t))}}})(g);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var f=a(4),v=a(25),O=[],_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_AMIIBO":return[].concat(Object(v.a)(e),[t.amiibo]);case"GET_AMIIBO_CARDS":return t.amiibos;default:return e}},w=[],C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_CARDS_TOTAL":return t.total;default:return e}},A=Object(f.c)(Object(f.b)({amiibos:_,total:C}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(o.a.createElement(d.a,{store:A}," ",o.a.createElement(E,null)," "),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,2,1]]]);
//# sourceMappingURL=main.75fd9b57.chunk.js.map
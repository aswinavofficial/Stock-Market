(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{116:function(e,a,t){"use strict";t.r(a);var n=t(1),l=t.n(n),c=t(28),r=t.n(c),o=(t(56),t(12)),s=t(13),i=t(15),m=t(14),u=t(16),d=(t(58),t(135)),h=t(136),b=t(8),f=t(122),E=t(123),p=t(124),v=t(125),y=t(126),g=t(119),O=t(120),j=t(121),S=t(117),C=t(118),k=t(33),H=t(47),D=t.n(H);k.b.addAdapter(D.a);var L=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).handleDayChange1=t.handleDayChange1.bind(Object(b.a)(Object(b.a)(t))),t.handleDayChange2=t.handleDayChange2.bind(Object(b.a)(Object(b.a)(t))),t.handleChange=t.handleChange.bind(Object(b.a)(Object(b.a)(t))),t.handleSubmit=t.handleSubmit.bind(Object(b.a)(Object(b.a)(t))),t.state={error:null,isLoaded:!1,items:void 0,selectedDay1:void 0,selectedDay2:void 0,company:void 0},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"handleChange",value:function(e){this.setState({company:e.target.value})}},{key:"handleSubmit",value:function(e){var a=this;e.preventDefault();var t="?day1="+this.state.selectedDay1+"&day2="+this.state.selectedDay2;fetch("api/chart/"+this.state.company+t).then(function(e){return e.json()}).then(function(e){console.log(e),a.setState({isLoaded:!0,items:e})},function(e){a.setState({isLoaded:!0,error:e})})}},{key:"handleDayChange1",value:function(e){this.setState({selectedDay1:e.target.value})}},{key:"handleDayChange2",value:function(e){this.setState({selectedDay2:e.target.value})}},{key:"componentDidMount",value:function(){var e=this;fetch("api/chart/ACN?day1=2016-12-01&day2=2016-12-30").then(function(e){return e.json()}).then(function(a){console.log("Items"+typeof e.state.items),e.setState({isLoaded:!0,items:a})},function(a){e.setState({isLoaded:!0,error:a})})}},{key:"render",value:function(){var e=this.state,a=e.error,t=e.isLoaded,n=e.items;return a?l.a.createElement("div",null,"Error: ",a.message):t?l.a.createElement("div",{className:"App"},l.a.createElement(S.a,null,l.a.createElement(C.a,null,l.a.createElement("a",{href:"/"},"Home")),l.a.createElement(C.a,{active:!0},"Analytics")),l.a.createElement(g.a,null,l.a.createElement(O.a,null,l.a.createElement(j.a,{sm:"12"},l.a.createElement(f.a,{inline:!0,onSubmit:this.handleSubmit},l.a.createElement(E.a,{className:"mb-2 mr-sm-2 mb-sm-0"},l.a.createElement(p.a,{for:"company",className:"mr-sm-2"},"Company Symbol:"),l.a.createElement(v.a,{type:"text",name:"company",id:"company",value:this.state.value,onChange:this.handleChange,placeholder:"PCLN"})),l.a.createElement(E.a,{className:"mb-2 mr-sm-2 mb-sm-0"},l.a.createElement(p.a,{for:"from",className:"mr-sm-2"},"From:"),l.a.createElement(v.a,{type:"text",name:"from",id:"from",onChange:this.handleDayChange1,placeholder:"2016-12-22"})),l.a.createElement(E.a,{className:"mb-2 mr-sm-2 mb-sm-0"},l.a.createElement(p.a,{for:"to",className:"mr-sm-2"},"To:"),l.a.createElement(v.a,{type:"text",name:"to",id:"to",onChange:this.handleDayChange2,placeholder:"2016-12-30"})),l.a.createElement(y.a,null,"Submit"))))),l.a.createElement("br",null),l.a.createElement(k.a,{data:n})):l.a.createElement("div",null,"Loading...")}}]),a}(n.Component),N=t(23),w=(t(32),function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(i.a)(this,Object(m.a)(a).call(this))).handleChange=e.handleChange.bind(Object(b.a)(Object(b.a)(e))),e.handleSubmit=e.handleSubmit.bind(Object(b.a)(Object(b.a)(e))),e.state={data:[],date:"2016-09-12"},e}return Object(u.a)(a,e),Object(s.a)(a,[{key:"handleChange",value:function(e){this.setState({date:e.target.value})}},{key:"handleSubmit",value:function(e){var a=this;e.preventDefault(),fetch("api/stock/"+this.state.date).then(function(e){return e.json()}).then(function(e){a.setState({data:e}),console.log(e)},function(e){a.setState({isLoaded:!0,error:e})})}},{key:"componentDidMount",value:function(){var e=this;fetch("api/stock/"+this.state.date).then(function(e){return e.json()}).then(function(a){e.setState({data:a}),console.log(a)},function(a){e.setState({isLoaded:!0,error:a})})}},{key:"render",value:function(){var e=this.state.data;return l.a.createElement("div",null,l.a.createElement(S.a,null,l.a.createElement(C.a,null,l.a.createElement("a",{href:"/"},"Home")),l.a.createElement(C.a,{active:!0},"Stock on a Date")),l.a.createElement(g.a,null,l.a.createElement(O.a,null,l.a.createElement(j.a,{sm:"12",md:{size:6,offset:3}},l.a.createElement(f.a,{inline:!0,onSubmit:this.handleSubmit},l.a.createElement(E.a,{className:"mb-2 mr-sm-2 mb-sm-0"},l.a.createElement(p.a,{for:"date",className:"mr-sm-2"},"Date"),l.a.createElement(v.a,{type:"text",name:"date",id:"date",value:this.state.value,onChange:this.handleChange,placeholder:"2016-09-12"})),l.a.createElement(y.a,null,"Submit"))))),l.a.createElement("br",null),l.a.createElement(N.a,{data:e,columns:[{Header:"Symbol",accessor:"symbol"},{Header:"Open",accessor:"open"},{Header:"Close",accessor:"close"},{Header:"Low",accessor:"low"},{Header:"High",accessor:"high"},{Header:"Volume",accessor:"volume"}],defaultPageSize:10,className:"-striped -highlight"}),l.a.createElement("br",null))}}]),a}(l.a.Component)),x=function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(i.a)(this,Object(m.a)(a).call(this))).handleChange=e.handleChange.bind(Object(b.a)(Object(b.a)(e))),e.handleSubmit=e.handleSubmit.bind(Object(b.a)(Object(b.a)(e))),e.state={data:[],company:"ACN"},e}return Object(u.a)(a,e),Object(s.a)(a,[{key:"handleChange",value:function(e){this.setState({company:e.target.value})}},{key:"handleSubmit",value:function(e){var a=this;e.preventDefault(),fetch("api/"+this.state.company).then(function(e){return e.json()}).then(function(e){a.setState({data:e}),console.log(e)},function(e){a.setState({isLoaded:!0,error:e})})}},{key:"componentDidMount",value:function(){var e=this;fetch("api/"+this.state.company).then(function(e){return e.json()}).then(function(a){e.setState({data:a}),console.log(a)},function(a){e.setState({isLoaded:!0,error:a})})}},{key:"render",value:function(){var e=this.state.data;return l.a.createElement("div",null,l.a.createElement(S.a,null,l.a.createElement(C.a,null,l.a.createElement("a",{href:"/"},"Home")),l.a.createElement(C.a,{active:!0},"Stock History")),l.a.createElement(g.a,null,l.a.createElement(O.a,null,l.a.createElement(j.a,{sm:"12",md:{size:6,offset:3}},l.a.createElement(f.a,{inline:!0,onSubmit:this.handleSubmit},l.a.createElement(E.a,{className:"mb-2 mr-sm-2 mb-sm-0"},l.a.createElement(p.a,{for:"company",className:"mr-sm-2"},"Company Symbol"),l.a.createElement(v.a,{type:"text",name:"email",id:"company",value:this.state.value,onChange:this.handleChange,placeholder:"PCLN"})),l.a.createElement(y.a,null,"Submit"))))),l.a.createElement("br",null),l.a.createElement(N.a,{data:e,columns:[{Header:"Date",accessor:"date"},{Header:"Open",accessor:"open"},{Header:"Close",accessor:"close"},{Header:"Low",accessor:"low"},{Header:"High",accessor:"high"},{Header:"Volume",accessor:"volume"}],defaultPageSize:10,className:"-striped -highlight"}),l.a.createElement("br",null))}}]),a}(l.a.Component),A=function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(i.a)(this,Object(m.a)(a).call(this))).state={data:[],isLoaded:!1},e}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("api/latest").then(function(e){return e.json()}).then(function(a){e.setState({data:a,isLoaded:!0}),console.log(a)},function(a){e.setState({isLoaded:!0,error:a})})}},{key:"render",value:function(){var e=this.state,a=e.data;return e.isLoaded?l.a.createElement("div",null,l.a.createElement(S.a,null,l.a.createElement(C.a,null,l.a.createElement("a",{href:"/"},"Home")),l.a.createElement(C.a,{active:!0},"Top Stocks")),l.a.createElement("br",null),l.a.createElement(N.a,{data:a,columns:[{Header:"Symbol",accessor:"symbol"},{Header:"Open",accessor:"open"},{Header:"Close",accessor:"close"},{Header:"Low",accessor:"low"},{Header:"High",accessor:"high"},{Header:"Volume",accessor:"volume"}],defaultPageSize:10,defaultSorted:[{id:"close",desc:!0},{id:"volume",desc:!0}],className:"-striped -highlight"}),l.a.createElement("br",null)):l.a.createElement("div",null,"Loading...")}}]),a}(l.a.Component),M=function(){return l.a.createElement("main",null,l.a.createElement(d.a,null,l.a.createElement(h.a,{exact:!0,path:"/",component:A}),l.a.createElement(h.a,{path:"/chart",component:L}),l.a.createElement(h.a,{path:"/stock",component:w}),l.a.createElement(h.a,{path:"/stock-history",component:x}),l.a.createElement(h.a,{path:"/top",component:A})))},z=t(127),P=t(128),V=t(129),B=t(134),I=t(130),J=t(131),T=t(132),W=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(i.a)(this,Object(m.a)(a).call(this,e))).toggle=t.toggle.bind(Object(b.a)(Object(b.a)(t))),t.state={isOpen:!1},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(z.a,{color:"light",light:!0,expand:"md"},l.a.createElement(P.a,{href:"/"},"Stock Market"),l.a.createElement(V.a,{onClick:this.toggle}),l.a.createElement(B.a,{isOpen:this.state.isOpen,navbar:!0},l.a.createElement(I.a,{className:"ml-auto",navbar:!0},l.a.createElement(J.a,null,l.a.createElement(T.a,{href:"/stock-history/"},"Company-Stock History")),l.a.createElement(J.a,null,l.a.createElement(T.a,{href:"/stock"},"Stock on a Date")),l.a.createElement(J.a,null,l.a.createElement(T.a,{href:"/chart"},"Analytics"))))))}}]),a}(l.a.Component),F=function(e){function a(){return Object(o.a)(this,a),Object(i.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){document.title="Stock Market"}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(W,null),l.a.createElement(M,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var $=t(133);t(114);r.a.render(l.a.createElement($.a,null,l.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},51:function(e,a,t){e.exports=t(116)},56:function(e,a,t){},58:function(e,a,t){}},[[51,2,1]]]);
//# sourceMappingURL=main.5f07becc.chunk.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1107:function(e,t,a){"use strict";var n=a(940),r=a.n(n),o=a(924),s=a.n(o),l=a(857),c=a(856),i=a(98),p=a.n(i),u=a(2),b=a.n(u),d=a(1),m=a.n(d),f=a(923),h=a.n(f),y=(a(897),a(858)),v=a(875),g=a(954),j={onEnter:b.a.func,onEntering:b.a.func,onEntered:b.a.func,onExit:b.a.func,onExiting:b.a.func,onExited:b.a.func},O={$bs_panel:b.a.shape({headingId:b.a.string,bodyId:b.a.string,bsClass:b.a.string,expanded:b.a.bool})},E=function(e){function t(){return e.apply(this,arguments)||this}return Object(c.a)(t,e),t.prototype.render=function(){var e=this.props.children,t=this.context.$bs_panel||{},a=t.headingId,n=t.bodyId,r=t.bsClass,o=t.expanded,s=Object(y.f)(this.props),c=s[0],i=s[1];return c.bsClass=r||c.bsClass,a&&n&&(i.id=n,i.role=i.role||"tabpanel",i["aria-labelledby"]=a),m.a.createElement(g.a,Object(l.a)({in:o},i),m.a.createElement("div",{className:Object(y.e)(c,"collapse")},e))},t}(m.a.Component);E.propTypes=j,E.contextTypes=O;var C=Object(y.a)("panel",E),x={collapsible:b.a.bool.isRequired},T={$bs_panel:b.a.shape({bsClass:b.a.string})},_=function(e){function t(){return e.apply(this,arguments)||this}return Object(c.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.children,a=e.className,n=e.collapsible,r=(this.context.$bs_panel||{}).bsClass,o=Object(y.g)(this.props,["collapsible"]),s=o[0],c=o[1];s.bsClass=r||s.bsClass;var i=m.a.createElement("div",Object(l.a)({},c,{className:p()(a,Object(y.e)(s,"body"))}),t);return n&&(i=m.a.createElement(C,null,i)),i},t}(m.a.Component);_.propTypes=x,_.defaultProps={collapsible:!1},_.contextTypes=T;var k=Object(y.a)("panel",_),A=a(859),N=a(877),I=a.n(N),w={componentClass:I.a},$={$bs_panel:b.a.shape({headingId:b.a.string,bsClass:b.a.string})},P=function(e){function t(){return e.apply(this,arguments)||this}return Object(c.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.children,a=e.className,n=e.componentClass,r=Object(A.a)(e,["children","className","componentClass"]),o=this.context.$bs_panel||{},s=o.headingId,c=o.bsClass,i=Object(y.f)(r),u=i[0],b=i[1];return u.bsClass=c||u.bsClass,s&&(b.role=b.role||"tab",b.id=s),m.a.createElement(n,Object(l.a)({},b,{className:p()(a,Object(y.e)(u,"heading"))}),t)},t}(m.a.Component);P.propTypes=w,P.defaultProps={componentClass:"div"},P.contextTypes=$;var K=Object(y.a)("panel",P),S=a(907),M=a(916),R=a(874),W={onClick:b.a.func,componentClass:I.a},U={componentClass:M.a},B={$bs_panel:b.a.shape({bodyId:b.a.string,onToggle:b.a.func,expanded:b.a.bool})},L=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).handleToggle=t.handleToggle.bind(Object(S.a)(Object(S.a)(t))),t}Object(c.a)(t,e);var a=t.prototype;return a.handleToggle=function(e){var t=(this.context.$bs_panel||{}).onToggle;t&&t(e)},a.render=function(){var e=this.props,t=e.onClick,a=e.className,n=e.componentClass,r=Object(A.a)(e,["onClick","className","componentClass"]),o=this.context.$bs_panel||{},s=o.expanded,l=o.bodyId,c=n;return r.onClick=Object(R.a)(t,this.handleToggle),r["aria-expanded"]=s,r.className=p()(a,!s&&"collapsed"),l&&(r["aria-controls"]=l),m.a.createElement(c,r)},t}(m.a.Component);L.propTypes=W,L.defaultProps=U,L.contextTypes=B;var F=L,D={componentClass:I.a,toggle:b.a.bool},G={$bs_panel:b.a.shape({bsClass:b.a.string})},H=function(e){function t(){return e.apply(this,arguments)||this}return Object(c.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.children,a=e.className,n=e.toggle,r=e.componentClass,o=Object(A.a)(e,["children","className","toggle","componentClass"]),s=(this.context.$bs_panel||{}).bsClass,c=Object(y.f)(o),i=c[0],u=c[1];return i.bsClass=s||i.bsClass,n&&(t=m.a.createElement(F,null,t)),m.a.createElement(r,Object(l.a)({},u,{className:p()(a,Object(y.e)(i,"title"))}),t)},t}(m.a.Component);H.propTypes=D,H.defaultProps={componentClass:"div"},H.contextTypes=G;var q=Object(y.a)("panel",H),V={$bs_panel:b.a.shape({bsClass:b.a.string})},J=function(e){function t(){return e.apply(this,arguments)||this}return Object(c.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.children,a=e.className,n=(this.context.$bs_panel||{}).bsClass,r=Object(y.f)(this.props),o=r[0],s=r[1];return o.bsClass=n||o.bsClass,m.a.createElement("div",Object(l.a)({},s,{className:p()(a,Object(y.e)(o,"footer"))}),t)},t}(m.a.Component);J.contextTypes=V;var Q=Object(y.a)("panel",J),Y=Object.prototype.hasOwnProperty,z=function(e,t){return e?e+"--"+t:null},X={expanded:b.a.bool,onToggle:b.a.func,eventKey:b.a.any,id:b.a.string},Z={$bs_panelGroup:b.a.shape({getId:b.a.func,activeKey:b.a.any,onToggle:b.a.func})},ee={$bs_panel:b.a.shape({headingId:b.a.string,bodyId:b.a.string,bsClass:b.a.string,onToggle:b.a.func,expanded:b.a.bool})},te=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).handleToggle=function(e){var a=t.context.$bs_panelGroup,n=!t.getExpanded();a&&a.onToggle?a.onToggle(t.props.eventKey,n,e):t.props.onToggle(n,e)},t}Object(c.a)(t,e);var a=t.prototype;return a.getChildContext=function(){var e,t=this.props,a=t.eventKey,n=t.id,r=null==a?n:a;if(null!==r){var o=this.context.$bs_panelGroup,s=o&&o.getId||z;e={headingId:s(r,"heading"),bodyId:s(r,"body")}}return{$bs_panel:Object(l.a)({},e,{bsClass:this.props.bsClass,expanded:this.getExpanded(),onToggle:this.handleToggle})}},a.getExpanded=function(){var e=this.context.$bs_panelGroup;return e&&Y.call(e,"activeKey")?e.activeKey===this.props.eventKey:!!this.props.expanded},a.render=function(){var e=this.props,t=e.className,a=e.children,n=Object(y.g)(this.props,["onToggle","eventKey","expanded"]),r=n[0],o=n[1];return m.a.createElement("div",Object(l.a)({},o,{className:p()(t,Object(y.d)(r))}),a)},t}(m.a.Component);te.propTypes=X,te.contextTypes=Z,te.childContextTypes=ee;var ae=h()(Object(y.a)("panel",Object(y.c)(s()(v.d).concat([v.e.DEFAULT,v.e.PRIMARY]),v.e.DEFAULT,te)),{expanded:"onToggle"});r()(ae,{Heading:K,Title:q,Body:k,Footer:Q,Toggle:F,Collapse:C});t.a=ae},1170:function(e,t,a){e.exports={AppsList:"AppsList_AppsList__3Wa3P"}},1171:function(e,t,a){e.exports={AppsBadge:"AppsBadge_AppsBadge__1-VYo"}},1172:function(e,t){},1493:function(e,t,a){"use strict";a.r(t);var n=a(199),r=a.n(n),o=a(245),s=a(47),l=a(48),c=a(51),i=a(49),p=a(50),u=a(1),b=a.n(u),d=a(1170),m=a.n(d),f=(u.Component,a(901),a(85)),h=a(100),y=a(58),v=a(1171),g=a.n(v),j=a(1107),O=a(961),E=a(99),C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this))).state={},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.appKey,a=(e.uiTemplate,e.appPublic,e.linkTo);return b.a.createElement("div",{className:g.a.AppsBadge},b.a.createElement(j.a,null,b.a.createElement(j.a.Heading,null,t),b.a.createElement(j.a.Body,null,b.a.createElement(O.a,{to:a,componentClass:E.b},"Aanpassen"))))}}]),t}(u.Component),x=a(942),T=a(69),_=a(962),k=a(1172),A=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).state={},a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.appKey,a=e.uiTemplate,n=e.appPublic,r=T.d.replace(":appId",t);return b.a.createElement("div",null,b.a.createElement(C,{linkTo:r,uiTemplate:a,appPublic:n,appKey:t}))}}]),t}(u.Component),N=Object(y.d)(Object(h.b)(function(e){return{auth:e.firebase.auth}}),Object(f.firebaseConnect)(function(e){var t=e.appKey,a=e.auth;return["/users/".concat(a.uid,"/apps/").concat(t,"/public"),"/users/".concat(a.uid,"/apps/").concat(t,"/uiTemplate")]}),Object(h.b)(function(e,t){return{appPublic:Object(x.get)(e.firebase,"users/".concat(e.firebase.auth.uid,"/apps/").concat(t.appKey,"/public"),_.a),uiTemplate:Object(x.get)(e.firebase,"users/".concat(e.firebase.auth.uid,"/apps/").concat(t.appKey,"/uiTemplate"),k.defaultUITemplate)}}))(A),I=a(902),w=a(391),$=a(1027),P=a.n($),K=a(1139),S=a(1481),M=a(1482),R=a(1483),W=a(1484),U=a(1494),B=a(68),L=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(i.a)(t).call(this,e))).getAppsShallow=Object(o.a)(r.a.mark(function e(){var t,n,o,s,l,c;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({loading:!0}),t=a.props.firebase,e.next=4,t.auth().currentUser.getIdToken(!1);case 4:return n=e.sent,o=a.props.auth.uid,e.next=8,fetch("https://dynamic-template-app.firebaseio.com/users/".concat(o,"/apps.json?shallow=true&auth=").concat(n));case 8:return s=e.sent,e.next=11,s.json();case 11:l=e.sent,c=Object.keys(l),a.setState({keys:c,loading:!1});case 14:case"end":return e.stop()}},e)})),a.state={keys:[]},e.isAuthenticated&&a.getAppsShallow(),a}return Object(p.a)(t,e),Object(l.a)(t,[{key:"componentDidUpdate",value:function(e,t,a){this.props.isAuthenticated&&!1===e.isAuthenticated&&this.getAppsShallow()}},{key:"render",value:function(){var e=this,t=this.state,a=t.keys;return t.loading?b.a.createElement(w.a,null):b.a.createElement(I.a,null,b.a.createElement(K.a,{style:{paddingTop:"20px"}},b.a.createElement(S.a,null,b.a.createElement(M.a,{xs:12,sm:6,md:4,lg:4},b.a.createElement(j.a,null,b.a.createElement(j.a.Heading,null,"Nieuwe App"),b.a.createElement(j.a.Body,null,"Maak een nieuwe app.",b.a.createElement("br",null),b.a.createElement("br",null),b.a.createElement(R.a,null,b.a.createElement(W.a,null,"Naam van je nieuwe app"),b.a.createElement(U.a,{componentClass:"input",type:"text",inputRef:function(t){return e.ref=t}}))),b.a.createElement(j.a.Footer,null,b.a.createElement(O.a,{onClick:function(){var t,a=(t=e.ref.value,P()(t,{replacement:"-",remove:null,lower:!0}));e.props.history.push(T.e.replace(":appId",a))},bsStyle:"primary"},"Maak"))))),b.a.createElement(S.a,null,a.map(function(e){return b.a.createElement(M.a,{xs:12,sm:6,md:4,lg:3},b.a.createElement(N,{key:e,appKey:e}))}))))}}]),t}(u.Component),F=Object(y.d)(Object(f.firebaseConnect)(),B.f,Object(h.b)(function(e){return{auth:e.firebase.auth}}));t.default=F(L)},877:function(e,t,a){"use strict";t.__esModule=!0;var n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},r=s(a(1)),o=s(a(925));function s(e){return e&&e.__esModule?e:{default:e}}t.default=(0,o.default)(function(e,t,a,o,s){var l=e[t],c="undefined"===typeof l?"undefined":n(l);return r.default.isValidElement(l)?new Error("Invalid "+o+" `"+s+"` of type ReactElement supplied to `"+a+"`, expected an element type (a string or a ReactClass)."):"function"!==c&&"string"!==c?new Error("Invalid "+o+" `"+s+"` of value `"+l+"` supplied to `"+a+"`, expected an element type (a string or a ReactClass)."):null})},882:function(e,t,a){"use strict";var n=a(47),r=a(48),o=a(51),s=a(49),l=a(50),c=a(1),i=a.n(c),p=a(904),u=a.n(p),b=a(905),d=a.n(b),m=a(1492),f=a(1479),h=a(1480),y=a(99),v=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this))).state={},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this.props.navbarItems;return i.a.createElement("div",{className:d.a.Navbar},i.a.createElement(m.a,{fluid:!0,staticTop:!0,inverse:!0,className:d.a.navbar},i.a.createElement(m.a.Header,null,i.a.createElement(m.a.Brand,null,"ESStudio App Maker ",i.a.createElement("small",null,"(door Sem Postma)"))),i.a.createElement(f.a,null,e.map(function(e,t){var a=e.title,n=e.route;return i.a.createElement(h.a,{componentClass:y.b,href:n,to:n,eventKey:t,key:t},a)}))))}}]),t}(c.Component),g=a(908),j=a.n(g),O=(c.Component,function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this))).state={},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this.props,t=e.navbarItems,a=e.children;return i.a.createElement("div",{className:u.a.Layout},i.a.createElement(v,{navbarItems:t}),i.a.createElement("div",null,a))}}]),t}(c.Component));O.defaultProps={navbarItems:[]};t.a=O},901:function(e,t,a){"use strict";var n=a(47),r=a(48),o=a(51),s=a(49),l=a(50),c=a(1),i=a.n(c),p=a(882),u=a(69),b=[{title:"Home",route:u.b},{title:"Signin",route:u.c},{title:"Apps",route:u.a}],d=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).state={},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.children;return i.a.createElement(p.a,{navbarItems:b},e)}}]),t}(c.Component);t.a=d},902:function(e,t,a){"use strict";var n=a(47),r=a(48),o=a(51),s=a(49),l=a(50),c=a(1),i=a.n(c),p=a(903),u=a.n(p),b=(a(882),a(1139)),d=a(1481),m=a(1482),f=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this))).state={},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentWillMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return i.a.createElement("div",{className:u.a.Page},i.a.createElement(b.a,{fluid:!0},i.a.createElement(d.a,null,i.a.createElement(m.a,{xs:12,className:"nopadding"},this.props.children))))}}]),t}(c.Component),h=a(901),y=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(o.a)(this,Object(s.a)(t).call(this,e))).state={},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return i.a.createElement(h.a,null,i.a.createElement(f,null,this.props.children))}}]),t}(c.Component);t.a=y},903:function(e,t,a){e.exports={Page:"Page_Page__wqF6Q"}},904:function(e,t,a){e.exports={Layout:"Layout_Layout__2Na2U"}},905:function(e,t,a){e.exports={Navbar:"Navbar_Navbar__1bVh3",navbar:"Navbar_navbar__WWOoy"}},908:function(e,t,a){e.exports={Footer:"Footer_Footer__3Ea7l"}},925:function(e,t,a){"use strict";t.__esModule=!0,t.default=function(e){function t(t,a,n,r,o,s){var l=r||"<<anonymous>>",c=s||n;if(null==a[n])return t?new Error("Required "+o+" `"+c+"` was not specified in `"+l+"`."):null;for(var i=arguments.length,p=Array(i>6?i-6:0),u=6;u<i;u++)p[u-6]=arguments[u];return e.apply(void 0,[a,n,l,o,c].concat(p))}var a=t.bind(null,!1);return a.isRequired=t.bind(null,!0),a}},962:function(e,t,a){"use strict";a.d(t,"a",function(){return n});var n={title:"Mijn nieuwe app!",description:"Dit is mijn nieuwe app",logoStorageRef:"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP",primaryThemeColor:"#ec6e08"}}}]);
//# sourceMappingURL=7.a54cc843.chunk.js.map
webpackJsonp([7],{1211:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,l,a,c,u,f=r(2),_=n(f),i=r(3),p=n(i),s=r(5),d=n(s),j=r(4),m=n(j),P=r(0),x=n(P),C=r(1),y=n(C),v=r(25),b=r(36),E=r(270),h=n(E),w=r(1220),g=n(w),O=(o=(0,b.firebaseConnect)(function(e){return["projects/"+e.params.projectname]}),l=(0,v.connect)(function(e,t){var r=e.firebase,n=t.params;return{project:(0,b.dataToJS)(r,"projects/"+n.projectname)}}),o(a=l((u=c=function(e){function t(){return(0,_.default)(this,t),(0,d.default)(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,p.default)(t,[{key:"render",value:function(){var e=this.props,t=e.project,r=e.params;return(0,b.isEmpty)(t)?x.default.createElement("div",null,"Project not found"):(0,b.isLoaded)(t)?x.default.createElement("div",{className:g.default.container},x.default.createElement("h2",null,"Project Container"),x.default.createElement("pre",null,"Project Key: ",r.projectname),x.default.createElement("pre",null,JSON.stringify(t,null,2))):x.default.createElement(h.default,null)}}]),t}(P.Component),c.propTypes={project:y.default.object,params:y.default.object.isRequired},a=u))||a)||a);t.default=O},1220:function(e,t){e.exports={flex:"ProjectContainer__flex___2KpL-","flex-column":"ProjectContainer__flex-column___1WU2p","flex-column-center":"ProjectContainer__flex-column-center___1jrPD","flex-row":"ProjectContainer__flex-row___IllzX","flex-row-center":"ProjectContainer__flex-row-center___39yNf",progress:"ProjectContainer__progress___2VQ9C"}}});
//# sourceMappingURL=7.21a50698f4b7aa3dcc3a.js.map
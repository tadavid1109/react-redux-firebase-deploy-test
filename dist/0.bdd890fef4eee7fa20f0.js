webpackJsonp([0],{1201:function(e,t,o){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,n,a,u,c,_=o(2),i=l(_),f=o(3),d=l(f),s=o(5),p=l(s),j=o(4),m=l(j),P=o(122),x=l(P),w=o(74),b=l(w),h=o(0),v=l(h),T=o(1),N=l(T),C=o(25),y=o(36),g=o(30),E=o(270),M=l(E),D=o(1210),R=l(D),S=o(1208),k=l(S),O=o(1206),q=l(O),J=o(1219),F=l(J),B=[{child:"createdBy",root:"users"}],L=(r=(0,y.firebaseConnect)(function(e){e.params,e.auth;return[{path:"projects",populates:B}]}),n=(0,C.connect)(function(e,t){var o=e.firebase;t.params;return{projects:(0,y.populatedDataToJS)(o,"projects",B),unpopulatedProjects:(0,y.dataToJS)(o,"projects"),auth:(0,y.pathToJS)(o,"auth")}}),r(a=n((c=u=function(e){function t(){var e,o,l,r;(0,i.default)(this,t);for(var n=arguments.length,a=Array(n),u=0;u<n;u++)a[u]=arguments[u];return o=l=(0,p.default)(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),l.state={newProjectModal:!1},l.newSubmit=function(e){return(0,l.props.firebase.pushWithMeta)("projects",e).then(function(){return l.setState({newProjectModal:!1})}).catch(function(e){console.error("error creating new project",e)})},l.deleteProject=function(e){return l.props.firebase.remove("projects/"+e)},l.toggleModal=function(e,t){var o={};o[e+"Modal"]=!l.state[e+"Modal"],l.setState(o)},l.getDeleteVisible=function(e){var t=l.props,o=t.auth,r=t.unpopulatedProjects;return!(0,y.isEmpty)(l.props.auth)&&(0,x.default)(r,e+".createdBy")===o.uid},r=o,(0,p.default)(l,r)}return(0,m.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e=this,t=this.props,o=t.projects,l=t.auth,r=this.state.newProjectModal;return(0,y.isLoaded)(o,l)?this.props.children?v.default.cloneElement(this.props.children,this.props):v.default.createElement("div",{className:F.default.container},r&&v.default.createElement(q.default,{open:r,onSubmit:this.newSubmit,onRequestClose:function(){return e.toggleModal("newProject")}}),v.default.createElement("div",{className:F.default.tiles},v.default.createElement(k.default,{onClick:function(){return e.toggleModal("newProject")}}),!(0,y.isEmpty)(o)&&(0,b.default)(o,function(t,o){return v.default.createElement(R.default,{key:t.name+"-Collab-"+o,project:t,onCollabClick:e.collabClick,onSelect:function(){return e.context.router.push(g.LIST_PATH+"/"+o)},onDelete:function(){return e.deleteProject(o)},showDelete:e.getDeleteVisible(o)})}))):v.default.createElement(M.default,null)}}]),t}(h.Component),u.contextTypes={router:N.default.object.isRequired},u.propTypes={children:N.default.object,firebase:N.default.object.isRequired,projects:N.default.object,unpopulatedProjects:N.default.object,auth:N.default.object},a=c))||a)||a);t.default=L},1205:function(e,t,o){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.NewProjectDialog=void 0;var r=o(0),n=l(r),a=o(1),u=l(a),c=o(171),_=l(c),i=o(100),f=l(i),d=o(120),s=o(170),p=o(271),j=o(30),m=o(1216),P=l(m),x=t.NewProjectDialog=function(e){var t=e.open,o=e.onRequestClose,l=e.submit,r=e.handleSubmit;return n.default.createElement(_.default,{title:"New Project",open:t,onRequestClose:o,contentClassName:P.default.container,actions:[n.default.createElement(f.default,{label:"Cancel",secondary:!0,onTouchTap:o}),n.default.createElement(f.default,{label:"Create",primary:!0,onTouchTap:l})]},n.default.createElement("form",{onSubmit:r,className:P.default.inputs},n.default.createElement(d.Field,{name:"name",component:s.TextField,floatingLabelText:"Project Name",validate:[p.required]})))};x.propTypes={open:u.default.bool.isRequired,onRequestClose:u.default.func.isRequired,onSubmit:u.default.func.isRequired,handleSubmit:u.default.func.isRequired,submit:u.default.func.isRequired},t.default=(0,d.reduxForm)({form:j.NEW_PROJECT_FORM_NAME})(x)},1206:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=o(1205),r=function(e){return e&&e.__esModule?e:{default:e}}(l);t.default=r.default},1207:function(e,t,o){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.NewProjectTile=void 0;var r=o(0),n=l(r),a=o(1),u=l(a),c=o(23),_=l(c),i=o(1223),f=l(i),d=o(1217),s=l(d),p={width:"6rem",height:"6rem"},j=t.NewProjectTile=function(e){var t=e.onClick;return n.default.createElement(_.default,{className:s.default.container,onClick:t},n.default.createElement(f.default,{color:"#979797",hoverColor:"#616161",style:p}))};j.propTypes={onClick:u.default.func},t.default=j},1208:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=o(1207),r=function(e){return e&&e.__esModule?e:{default:e}}(l);t.default=r.default},1209:function(e,t,o){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.ProjectTile=void 0;var r=o(24),n=l(r),a=o(0),u=l(a),c=o(1),_=l(c),i=o(23),f=l(i),d=o(52),s=l(d),p=o(482),j=l(p),m=o(1218),P=l(m),x=t.ProjectTile=function(e){var t=e.project,o=e.onSelect,l=e.onDelete,r=e.showDelete;return u.default.createElement(f.default,{className:P.default.container},u.default.createElement("div",{className:P.default.top},u.default.createElement("span",{className:P.default.name,onClick:function(){return o(t)}},t.name),r&&l?u.default.createElement(s.default,{tooltip:"delete",onClick:l},u.default.createElement(j.default,null)):null),u.default.createElement("span",{className:P.default.owner},(0,n.default)(t.createdBy)?t.createdBy.displayName:t.createdBy||"No Owner"))};x.propTypes={project:_.default.object.isRequired,onSelect:_.default.func.isRequired,onDelete:_.default.func,showDelete:_.default.bool},t.default=x},1210:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=o(1209),r=function(e){return e&&e.__esModule?e:{default:e}}(l);t.default=r.default},1216:function(e,t){e.exports={flex:"NewProjectDialog__flex___1aVPi","flex-column":"NewProjectDialog__flex-column___1J1Rx","flex-column-center":"NewProjectDialog__flex-column-center___2H_Nr",inputs:"NewProjectDialog__inputs___3o7ef",buttons:"NewProjectDialog__buttons___2RfwJ","flex-row":"NewProjectDialog__flex-row___CGkPL","flex-row-center":"NewProjectDialog__flex-row-center___3LYrA",container:"NewProjectDialog__container___2naoy"}},1217:function(e,t){e.exports={flex:"NewProjectTile__flex___4wGxd","flex-column":"NewProjectTile__flex-column___jmFl_","flex-column-center":"NewProjectTile__flex-column-center___27aeW","flex-row":"NewProjectTile__flex-row___1-FFx","flex-row-center":"NewProjectTile__flex-row-center___1j8H7",container:"NewProjectTile__container___HRlOk"}},1218:function(e,t){e.exports={flex:"ProjectTile__flex___keWpD","flex-column":"ProjectTile__flex-column___39rfx",container:"ProjectTile__container___2mlyY","flex-column-center":"ProjectTile__flex-column-center___3YK5Y","flex-row":"ProjectTile__flex-row___1z_kj",top:"ProjectTile__top___BBRtU",settings:"ProjectTile__settings___38tjH",collaborators:"ProjectTile__collaborators___2uOy7",collaborator:"ProjectTile__collaborator___2_edT","flex-row-center":"ProjectTile__flex-row-center___4G8Vx",name:"ProjectTile__name___1sJOu",owner:"ProjectTile__owner___1QLna",add:"ProjectTile__add___l2CgF"}},1219:function(e,t){e.exports={flex:"ProjectsContainer__flex___1zGYu","flex-column":"ProjectsContainer__flex-column___3-kIo","flex-column-center":"ProjectsContainer__flex-column-center___2tYh_",container:"ProjectsContainer__container___1kCL7",progress:"ProjectsContainer__progress___xiObt","flex-row":"ProjectsContainer__flex-row___3NnV6","flex-row-center":"ProjectsContainer__flex-row-center___2aEYS",tiles:"ProjectsContainer__tiles___3JUax"}},1223:function(e,t,o){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(0),n=l(r),a=o(21),u=l(a),c=o(20),_=l(c),i=function(e){return n.default.createElement(_.default,e,n.default.createElement("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"}))};i=(0,u.default)(i),i.displayName="ContentAddCircle",i.muiName="SvgIcon",t.default=i}});
//# sourceMappingURL=0.bdd890fef4eee7fa20f0.js.map
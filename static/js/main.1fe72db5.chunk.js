(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{276:function(e,a,t){e.exports=t.p+"static/media/bg.77428cd4.svg"},301:function(e,a,t){e.exports=t(704)},306:function(e,a,t){},508:function(e,a,t){},704:function(e,a,t){"use strict";t.r(a);var o,n,r=t(0),l=t.n(r),c=t(14),i=t.n(c),s=t(707),m=(t(306),t(95)),d=t(25),u=t(23),h=t(27),p=t(26),b=t(28),g=t(3),f=t(708),v=t(709),C=t(80),j=t(7),O=t(270),y=t(706),E=t(5),x=t.n(E),w=t(32),k=t(55),S=t.n(k),N=function(e){return"@media screen and (max-width: ".concat({xs:"575.98px",sm:"767.98px",md:"991.98px",lg:"1199.98px",xl:"1600px"}[e],")")},P=(o={ColorBox:{width:"20%",height:"20%",margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",verticalAlign:"top","&:hover button":{opacity:1}}},Object(j.a)(o,N("lg"),{ColorBox:{width:"25%"}}),Object(j.a)(o,N("md"),{ColorBox:{width:"50%"}}),Object(j.a)(o,N("xs"),{ColorBox:{width:"100%"}}),Object(j.a)(o,"copyText",{}),Object(j.a)(o,"colorName",{}),Object(j.a)(o,"seeMore",{background:"rgba(255, 255, 255, 0.3)",position:"absolute",border:"none",right:"0px",bottom:"0px",width:"60px",height:"30px",textAlign:"center",lineHeight:"30px",textTransform:"uppercase"}),Object(j.a)(o,"copyButton",{width:"100px",height:"30px",position:"absolute",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",textAlign:"center",outline:"none",background:"rgba(255, 255, 255, 0.3)",fontSize:"1rem",lineHeight:"30px",textTransform:"uppercase",border:"none",textDecoration:"none",opacity:0}),Object(j.a)(o,"boxContent",{position:"absolute",width:"100%",left:"0px",bottom:"0px",padding:"10px",color:"black",letterSpacing:"1px",textTransform:"uppercase",fontSize:"12px"}),Object(j.a)(o,"copyOverlay",{opacity:"0",zIndex:"0",width:"100%",height:"100%",transition:"transform 0.6s ease-in-out",transform:"scale(0.1)"}),Object(j.a)(o,"showOverlay",{opacity:"1",transform:"scale(50)",zIndex:"10",position:"absolute"}),Object(j.a)(o,"copyMessage",{position:"fixed",left:"0",right:"0",top:"0",bottom:"0",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",fontSize:"4rem",transform:"scale(0.1)",opacity:"0",color:"white",zIndex:"-2","& h1":Object(j.a)({fontWeight:"400",textShadow:"1px 2px black",background:"rgba(255, 255, 255, 0.2)",width:"100%",textAlign:"center",marginBottom:"0",padding:"1rem",textTransform:"uppercase"},N("xs"),{fontSize:"6rem"}),"& p":{fontSize:"2rem",fontWeight:"100"}}),Object(j.a)(o,"showMessage",{opacity:"1",transform:"scale(1)",zIndex:"25",transition:"all 0.4s ease-in-out",transitionDelay:"0.3s"}),o),F=function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(h.a)(this,Object(p.a)(a).call(this,e))).state={copied:!1},t.changeCopyState=t.changeCopyState.bind(Object(g.a)(Object(g.a)(t))),t}return Object(b.a)(a,e),Object(u.a)(a,[{key:"changeCopyState",value:function(){var e=this;this.setState({copied:!0},function(){setTimeout(function(){return e.setState({copied:!1})},1500)})}},{key:"render",value:function(){var e=this.props,a=e.name,t=e.background,o=e.moreUrl,n=e.showingFullPalette,r=e.classes,c=this.state.copied;return l.a.createElement(O.CopyToClipboard,{onCopy:this.changeCopyState,className:r.ColorBox},l.a.createElement("div",{style:{background:t}},l.a.createElement("div",{style:{background:t},className:x()(r.copyOverlay,Object(j.a)({},r.showOverlay,c))}),l.a.createElement("div",{className:x()(r.copyMessage,Object(j.a)({},r.showMessage,c))},l.a.createElement("h1",null,"copied!"),l.a.createElement("p",{className:r.copyText},t)),l.a.createElement("div",null,l.a.createElement("div",{className:r.boxContent},l.a.createElement("span",{className:r.colorName},a)),l.a.createElement("button",{className:r.copyButton},"Copy")),n&&l.a.createElement(y.a,{to:o,onClick:function(e){return e.stopPropagation()}},l.a.createElement("span",{className:r.seeMore},"MORE"))))}}]),a}(r.Component),B=Object(w.a)(P)(F),D=t(182),I=t.n(D),A=t(128),T=t.n(A),L=t(275),G=t.n(L),R=t(76),M=t.n(R),z=t(123),U=t.n(z),H=t(292),V=(t(382),n={Navbar:{display:"flex",alignItems:"center",justifyContent:"flex-start",height:"6vh"},logo:{marginRight:"15px",padding:"0 13px",fontSize:"22px",backgroundColor:"#eceff1",fontFamily:"Roboto",height:"100%",display:"flex",alignItems:"center","& a":{textDecoration:"none",color:"black"}},slider:{width:"340px",margin:"0 10px",display:"inline-block","& .rc-slider-track":{backgroundColor:"transparent"},"& .rc-slider-rail":{height:"8px"},"& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus,.rc-slider-handle:hover":{backgroundColor:"green",outline:"none",border:"2px solid green",boxShadow:"none",width:"13px",height:"13px",marginLeft:"-7px",marginTop:"-3px"}}},Object(j.a)(n,N("xs"),{logo:{display:"none"}}),Object(j.a)(n,N("sm"),{slider:{width:"150px"}}),Object(j.a)(n,"selectContainer",{marginLeft:"auto",marginRight:"1rem"}),n),q=function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(h.a)(this,Object(p.a)(a).call(this,e))).state={format:"hex",open:!1},t.handleFormatChange=t.handleFormatChange.bind(Object(g.a)(Object(g.a)(t))),t.closeSnackbar=t.closeSnackbar.bind(Object(g.a)(Object(g.a)(t))),t}return Object(b.a)(a,e),Object(u.a)(a,[{key:"handleFormatChange",value:function(e){this.setState({format:e.target.value,open:!0}),this.props.handleChange(e.target.value)}},{key:"closeSnackbar",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var e=this.props,a=e.level,t=e.changeLevel,o=e.showingAllColors,n=e.classes,r=this.state.format;return l.a.createElement("header",{className:n.Navbar},l.a.createElement("div",{className:n.logo},l.a.createElement(y.a,{to:"/"},"reactcolorpicker")),o&&l.a.createElement("div",null,l.a.createElement("span",null,"Level: ",a),l.a.createElement("div",{className:n.slider},l.a.createElement(H.a,{defaultValue:a,min:100,max:900,step:100,onAfterChange:t}))),l.a.createElement("div",{className:n.selectContainer},l.a.createElement(I.a,{value:r,onChange:this.handleFormatChange},l.a.createElement(T.a,{value:"hex"},"HEX - #ffffff"),l.a.createElement(T.a,{value:"rgb"},"RGB - rgb(255,255,255)"),l.a.createElement(T.a,{value:"rgba"},"RGBA - rgba(255,255,255, 1.0)"))),l.a.createElement(G.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.open,autoHideDuration:3e3,message:l.a.createElement("span",{id:"message-id"},"Format Changed To ",r.toUpperCase()),ContentProps:{"aria-describedby":"message-id"},onClose:this.closeSnackbar,action:[l.a.createElement(M.a,{onClick:this.closeSnackbar,color:"inherit",key:"close","aria-label":"close"},l.a.createElement(U.a,null))]}))}}]),a}(r.Component),W=Object(w.a)(V)(q);var J,Y,K=Object(w.a)({PaletteFooter:{backgroundColor:"white",height:"5vh",display:"flex",justifyContent:"flex-end",alignItems:"center",fontWeight:"bold"},emoji:{fontSize:"1.5rem",margin:"0 1rem"}})(function(e){var a=e.paletteName,t=e.emoji,o=e.classes;return l.a.createElement("footer",{className:o.PaletteFooter},a,l.a.createElement("span",{className:o.emoji},t))}),_=t(54),Q={Palette:{height:"100vh",display:"flex",flexDirection:"column",overflow:"scroll"},colors:{height:"90%",width:"100%"},goBack:(J={width:"20%",height:"50%",margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-3.5px",opacity:1,backgroundColor:"black","& a":{color:"white",width:"100px",height:"30px",position:"absolute",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",textAlign:"center",outline:"none",background:"rgba(255, 255, 255, 0.3)",fontSize:"1rem",lineHeight:"30px",textTransform:"uppercase",border:"none",textDecoration:"none"}},Object(j.a)(J,N("lg"),{width:"25%",height:"33.3333%"}),Object(j.a)(J,N("md"),{width:"50%",height:"20%"}),Object(j.a)(J,N("xs"),{width:"100%",height:"10%"}),J)},X=function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(h.a)(this,Object(p.a)(a).call(this,e))).state={level:500,format:"hex"},t.changeLevel=t.changeLevel.bind(Object(g.a)(Object(g.a)(t))),t.changeFormat=t.changeFormat.bind(Object(g.a)(Object(g.a)(t))),t}return Object(b.a)(a,e),Object(u.a)(a,[{key:"changeLevel",value:function(e){this.setState({level:e})}},{key:"changeFormat",value:function(e){this.setState({format:e})}},{key:"render",value:function(){var e=this.props.palette,a=e.colors,t=e.paletteName,o=e.emoji,n=e.id,r=this.props.classes,c=this.state,i=c.level,s=c.format,m=a[i].map(function(e){return l.a.createElement(B,{background:e[s],name:e.name,key:e.id,moreUrl:"/palette/".concat(n,"/").concat(e.id),showingFullPalette:!0})});return l.a.createElement("div",{className:r.Palette},l.a.createElement(W,{level:i,changeLevel:this.changeLevel,handleChange:this.changeFormat,showingAllColors:!0}),l.a.createElement("div",{className:r.colors},m),l.a.createElement(K,{paletteName:t,emoji:o}))}}]),a}(r.Component),Z=Object(_.withStyles)(Q,{index:1})(X),$=t(93),ee=t.n($),ae=t(183),te=t.n(ae),oe=t(122),ne=t.n(oe),re=t(184),le=t.n(re),ce=t(185),ie=t.n(ce),se=t(187),me=t.n(se),de=t(277),ue=t.n(de),he=t(94),pe=t.n(he),be=t(124),ge=t.n(be),fe=function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(h.a)(this,Object(p.a)(a).call(this,e))).deletePalette=t.deletePalette.bind(Object(g.a)(Object(g.a)(t))),t.handleClick=t.handleClick.bind(Object(g.a)(Object(g.a)(t))),t}return Object(b.a)(a,e),Object(u.a)(a,[{key:"deletePalette",value:function(e){e.stopPropagation(),this.props.openDialog(this.props.id)}},{key:"handleClick",value:function(){this.props.goToPalette(this.props.id)}},{key:"render",value:function(){var e=this.props,a=e.classes,t=e.paletteName,o=e.emoji,n=e.colors.map(function(e){return l.a.createElement("div",{className:a.miniColor,style:{backgroundColor:e.color},key:e.name})});return l.a.createElement("div",{className:a.root,onClick:this.handleClick},l.a.createElement(ge.a,{className:a.deleteIcon,style:{transition:"all 0.3s ease-in-out"},onClick:this.deletePalette}),l.a.createElement("div",{className:a.colors},n),l.a.createElement("h5",{className:a.title},t," ",l.a.createElement("span",{className:a.emoji},o)))}}]),a}(r.PureComponent),ve=Object(w.a)({root:{backgroundColor:"white",border:"1px solid black",borderRadius:"5px",padding:"0.5rem",position:"relative",overflow:"hidden",cursor:"pointer","&:hover svg":{opacity:1}},colors:{backgroundColor:"#dae1e4",height:"150px",width:"100%",borderRadius:"5px",overflow:"hidden"},title:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"0",color:"black",paddingTop:"0.5rem",fontSize:"1rem",position:"relative"},emoji:{marginLeft:"0.5rem",fontSize:"1.5rem"},miniColor:{verticalAlign:"top",height:"25%",width:"20%",display:"inline-block",margin:"0 auto",position:"relative"},deleteIcon:{color:"white",backgroundColor:"#eb3d30",width:"20px",height:"20px",position:"absolute",right:"0px",top:"0px",padding:"10px",zIndex:10,opacity:0}})(fe),Ce=t(186),je=t.n(Ce),Oe=t(121),ye=t.n(Oe),Ee=t(276),xe=(Y={"@global":{".fade-exit":{opacity:1},".fade-exit-active":{opacity:0,transition:"opacity 500ms ease-out"}},root:{height:"100vh",display:"flex",alignItems:"flex-start",justifyContent:"center",backgroundColor:"#394bad",backgroundImage:"url(".concat(t.n(Ee).a,")"),overflow:"scroll"},heading:{fontSize:"2rem"},container:{width:"50%",display:"flex",alignItems:"flex-start",flexDirection:"column",flexWrap:"wrap"},nav:{display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center",color:"white","& a":{color:"white"}},palettes:{boxSizing:"border-box",width:"100%",display:"grid",gridTemplateColumns:"repeat(3, 30%)",gridGap:"2.5rem"}},Object(j.a)(Y,N("md"),{container:{width:"80%"},palettes:{gridTemplateColumns:"repeat(2, 50%)"}}),Object(j.a)(Y,N("xs"),{container:{width:"75%"},palettes:{gridTemplateColumns:"repeat(1, 100%)",gridGap:"1.4rem"}}),Y),we=function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(h.a)(this,Object(p.a)(a).call(this,e))).state={openDeleteDialog:!1,deletingId:""},t.openDialog=t.openDialog.bind(Object(g.a)(Object(g.a)(t))),t.closeDialog=t.closeDialog.bind(Object(g.a)(Object(g.a)(t))),t.handleDelete=t.handleDelete.bind(Object(g.a)(Object(g.a)(t))),t.goToPalette=t.goToPalette.bind(Object(g.a)(Object(g.a)(t))),t}return Object(b.a)(a,e),Object(u.a)(a,[{key:"openDialog",value:function(e){this.setState({openDeleteDialog:!0,deletingId:e})}},{key:"closeDialog",value:function(){this.setState({openDeleteDialog:!1,deletingId:""})}},{key:"goToPalette",value:function(e){this.props.history.push("/palette/".concat(e))}},{key:"handleDelete",value:function(){this.props.deletePalette(this.state.deletingId),this.closeDialog()}},{key:"render",value:function(){var e=this,a=this.props,t=a.palettes,o=a.classes,n=this.state.openDeleteDialog;return l.a.createElement("div",{className:o.root},l.a.createElement("div",{className:o.container},l.a.createElement("nav",{className:o.nav},l.a.createElement("h1",{className:o.heading},"React Colors"),l.a.createElement(y.a,{to:"/palette/new"},"Create Palette")),l.a.createElement(C.TransitionGroup,{className:o.palettes},t.map(function(a){return l.a.createElement(C.CSSTransition,{key:a.id,classNames:"fade",timeout:500},l.a.createElement(ve,Object.assign({},a,{goToPalette:e.goToPalette,openDialog:e.openDialog,key:a.id,id:a.id})))}))),l.a.createElement(ee.a,{open:n,"aria-labelledby":"delete-dialog-title",onClose:this.closeDialog},l.a.createElement(pe.a,{id:"delete-dialog-title"},"Delete This Palette?"),l.a.createElement(te.a,null,l.a.createElement(ne.a,{button:!0,onClick:this.handleDelete},l.a.createElement(le.a,null,l.a.createElement(ie.a,{style:{backgroundColor:je.a[100],color:je.a[600]}},l.a.createElement(ue.a,null))),l.a.createElement(me.a,{primary:"Delete"})),l.a.createElement(ne.a,{button:!0,onClick:this.closeDialog},l.a.createElement(le.a,null,l.a.createElement(ie.a,{style:{backgroundColor:ye.a[100],color:ye.a[600]}},l.a.createElement(U.a,null))),l.a.createElement(me.a,{primary:"Cancel"})))))}}]),a}(r.Component),ke=Object(w.a)(xe)(we),Se=function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(h.a)(this,Object(p.a)(a).call(this,e)))._shades=t.gatherShades(t.props.palette,t.props.colorId),t.state={format:"hex"},t.changeFormat=t.changeFormat.bind(Object(g.a)(Object(g.a)(t))),t}return Object(b.a)(a,e),Object(u.a)(a,[{key:"gatherShades",value:function(e,a){var t=[],o=e.colors;for(var n in o)t=t.concat(o[n].filter(function(e){return e.id===a}));return t.slice(1)}},{key:"changeFormat",value:function(e){this.setState({format:e})}},{key:"render",value:function(){var e=this.state.format,a=this.props.palette,t=a.paletteName,o=a.emoji,n=a.id,r=this.props.classes,c=this._shades.map(function(a){return l.a.createElement(B,{key:a.name,name:a.name,background:a[e],showingFullPalette:!1})});return l.a.createElement("div",{className:r.Palette},l.a.createElement(W,{handleChange:this.changeFormat,showingAllColors:!1}),l.a.createElement("div",{className:r.colors},c,l.a.createElement("div",{className:r.goBack},l.a.createElement(y.a,{to:"/palette/".concat(n)},"GO BACK"))),l.a.createElement(K,{paletteName:t,emoji:o}))}}]),a}(r.Component),Ne=Object(w.a)(Q)(Se);t(508);var Pe,Fe=function(e){var a=e.children;return l.a.createElement("section",{className:"page"},a)},Be=t(40),De=t.n(Be),Ie=t(281),Ae=t.n(Ie),Te=t(279),Le=t.n(Te),Ge=t(280),Re=t.n(Ge),Me=t(48),ze=t(293),Ue=(t(531),function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(h.a)(this,Object(p.a)(a).call(this,e))).handleClickOpen=function(){t.setState({open:!0})},t.handleClose=function(){t.setState({open:!1})},t.state={stage:"form",newPaletteName:""},t.handleChange=t.handleChange.bind(Object(g.a)(Object(g.a)(t))),t.showEmojiPicker=t.showEmojiPicker.bind(Object(g.a)(Object(g.a)(t))),t.savePalette=t.savePalette.bind(Object(g.a)(Object(g.a)(t))),t}return Object(b.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;Me.ValidatorForm.addValidationRule("isPaletteNameUnique",function(a){return e.props.palettes.every(function(e){return e.paletteName.toLowerCase()!==a.toLowerCase()})})}},{key:"handleChange",value:function(e){this.setState(Object(j.a)({},e.target.name,e.target.value))}},{key:"showEmojiPicker",value:function(){this.setState({stage:"emoji"})}},{key:"savePalette",value:function(e){var a={paletteName:this.state.newPaletteName,emoji:e.native};this.props.handleSubmit(a),this.setState({stage:""})}},{key:"render",value:function(){var e=this.state,a=e.newPaletteName,t=e.stage,o=this.props.hideForm;return l.a.createElement("div",null,l.a.createElement(ee.a,{open:"emoji"===t,onClose:o},l.a.createElement(pe.a,{id:"form-dialog-title"},"Choose a Palette Emoji"),l.a.createElement(ze.a,{title:"Pick a Palette Emoji",onSelect:this.savePalette})),l.a.createElement(ee.a,{open:"form"===t,"aria-labelledby":"form-dialog-title",onClose:o},l.a.createElement(pe.a,{id:"form-dialog-title"},"Choose a Palette Name"),l.a.createElement(Me.ValidatorForm,{onSubmit:this.showEmojiPicker},l.a.createElement(Le.a,null,l.a.createElement(Re.a,null,"Please enter a name for your new beautiful palette. Make sure it's unique!"),l.a.createElement(Me.TextValidator,{label:"Palette Name",value:a,name:"newPaletteName",onChange:this.handleChange,fullWidth:!0,margin:"normal",validators:["required","isPaletteNameUnique"],errorMessages:["Enter Palette Name","Name already used"]})),l.a.createElement(Ae.a,null,l.a.createElement(De.a,{onClick:o,color:"primary"},"Cancel"),l.a.createElement(De.a,{variant:"contained",color:"primary",type:"submit"},"Save Palette")))))}}]),a}(r.Component)),He=t(282),Ve=t.n(He),qe=t(283),We=t.n(qe),Je=t(284),Ye=t.n(Je),Ke=t(53),_e=t.n(Ke),Qe=t(285),Xe=t.n(Qe),Ze=function(e){return Object(j.a)({root:{display:"flex"},hide:{display:"none"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),flexDirection:"row",justifyContent:"space-between",alignItems:"center",height:"64px"},appBarShift:{width:"calc(100% - ".concat(400,"px)"),marginLeft:400,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginLeft:12,marginRight:20},navBtns:{marginRight:"1rem","& a":{textDecoration:"none"}},button:{margin:"0 0.5rem"}},N("xs"),{navBtns:{marginRight:"0.5rem"},button:{margin:"0 0.2rem",padding:"0.3rem"}})},$e=function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(h.a)(this,Object(p.a)(a).call(this,e))).state={newPaletteName:"",formShowing:!1},t.handleChange=t.handleChange.bind(Object(g.a)(Object(g.a)(t))),t.showForm=t.showForm.bind(Object(g.a)(Object(g.a)(t))),t.hideForm=t.hideForm.bind(Object(g.a)(Object(g.a)(t))),t}return Object(b.a)(a,e),Object(u.a)(a,[{key:"handleChange",value:function(e){this.setState(Object(j.a)({},e.target.name,e.target.value))}},{key:"showForm",value:function(){this.setState({formShowing:!0})}},{key:"hideForm",value:function(){this.setState({formShowing:!1})}},{key:"render",value:function(){var e=this.props,a=e.classes,t=e.open,o=e.palettes,n=e.handleSubmit,r=e.handleDrawerOpen,c=this.state.formShowing;return l.a.createElement("div",{className:a.root},l.a.createElement(Ve.a,null),l.a.createElement(We.a,{position:"fixed",color:"default",className:x()(a.appBar,Object(j.a)({},a.appBarShift,t))},l.a.createElement(Ye.a,{disableGutters:!t},l.a.createElement(M.a,{color:"inherit","aria-label":"Open drawer",onClick:r,className:x()(a.menuButton,Object(j.a)({},a.hide,t))},l.a.createElement(Xe.a,null)),l.a.createElement(_e.a,{variant:"h6",color:"inherit",noWrap:!0},"Create A Palette")),l.a.createElement("div",{className:a.navBtns},l.a.createElement(y.a,{to:"/"},l.a.createElement(De.a,{variant:"contained",color:"secondary",className:a.button},"Go Back")),l.a.createElement(De.a,{variant:"contained",color:"primary",onClick:this.showForm,className:a.button},"Save"))),c&&l.a.createElement(Ue,{palettes:o,handleSubmit:n,hideForm:this.hideForm}))}}]),a}(r.Component),ea=Object(_.withStyles)(Ze,{withTheme:!0})($e),aa=t(286),ta={picker:{width:"100% !important",marginTop:"2rem"},addColor:{width:"100%",padding:"1rem",marginTop:"1rem",fontSize:"2rem"},colorNameInput:{width:"100%",height:"70px"}},oa=function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(h.a)(this,Object(p.a)(a).call(this,e))).state={currentColor:"teal",newColorName:""},t.updateCurrentColor=t.updateCurrentColor.bind(Object(g.a)(Object(g.a)(t))),t.handleChange=t.handleChange.bind(Object(g.a)(Object(g.a)(t))),t.handleSubmit=t.handleSubmit.bind(Object(g.a)(Object(g.a)(t))),t}return Object(b.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;Me.ValidatorForm.addValidationRule("isColorNameUnique",function(a){return e.props.colors.every(function(e){return e.name.toLowerCase()!==a.toLowerCase()})}),Me.ValidatorForm.addValidationRule("isColorUnique",function(a){return e.props.colors.every(function(a){return a.color!==e.state.currentColor})})}},{key:"updateCurrentColor",value:function(e){this.setState({currentColor:e.hex})}},{key:"handleChange",value:function(e){this.setState(Object(j.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e={color:this.state.currentColor,name:this.state.newColorName};this.props.addNewColor(e),this.setState({newColorName:""})}},{key:"render",value:function(){var e=this.props,a=e.paletteIsFull,t=e.classes,o=this.state,n=o.currentColor,r=o.newColorName;return l.a.createElement("div",null,l.a.createElement(aa.ChromePicker,{color:n,onChangeComplete:this.updateCurrentColor,className:t.picker}),l.a.createElement(Me.ValidatorForm,{onSubmit:this.handleSubmit,ref:"form",instantValidate:!1},l.a.createElement(Me.TextValidator,{value:r,className:t.colorNameInput,placeholder:"Color Name",name:"newColorName",variant:"filled",margin:"normal",onChange:this.handleChange,validators:["required","isColorNameUnique","isColorUnique"],errorMessages:["Enter a color name","Color name must be unique","Color already used!"]}),l.a.createElement(De.a,{variant:"contained",type:"submit",color:"primary",disabled:a,className:t.addColor,style:{backgroundColor:a?"grey":n}},a?"Palette Full":"Add Color")))}}]),a}(r.Component),na=Object(w.a)(ta)(oa),ra=t(288),la=t.n(ra),ca=t(290),ia=t.n(ca),sa=t(289),ma=t.n(sa),da=t(78),ua=(Pe={root:{width:"20%",height:"25%",margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-3.5px","&:hover svg":{color:"white",transform:"scale(1.5)"},verticalAlign:"top"}},Object(j.a)(Pe,N("lg"),{root:{width:"25%",height:"20%"}}),Object(j.a)(Pe,N("md"),{root:{width:"50%",height:"10%"}}),Object(j.a)(Pe,N("sm"),{root:{width:"100%",height:"5%"}}),Object(j.a)(Pe,"boxContent",{position:"absolute",width:"100%",left:"0px",bottom:"0px",padding:"10px",color:function(e){return S()(e.color).luminance()<=.08?"rgba(255,255,255,0.8)":"rgba(0,0,0,0.6)"},letterSpacing:"1px",textTransform:"uppercase",fontSize:"12px",display:"flex",justifyContent:"space-between"}),Object(j.a)(Pe,"deleteIcon",{transition:"all 0.3s ease-in-out"}),Pe),ha=Object(da.SortableElement)(function(e){var a=e.classes,t=e.handleClick,o=e.name,n=e.color;return l.a.createElement("div",{className:a.root,style:{backgroundColor:n}},l.a.createElement("div",{className:a.boxContent},l.a.createElement("span",null," ",o),l.a.createElement(ge.a,{className:a.deleteIcon,onClick:t})))}),pa=Object(w.a)(ua)(ha),ba=Object(da.SortableContainer)(function(e){var a=e.colors,t=e.removeColor;return l.a.createElement("div",{style:{height:"100%"}},a.map(function(e,a){return l.a.createElement(pa,{index:a,key:e.name,color:e.color,name:e.name,handleClick:function(){return t(e.name)}})}))}),ga=t(287),fa=function(e){return{root:{display:"flex"},drawer:{width:400,flexShrink:0,height:"100vh"},drawerPaper:{width:400,display:"flex",alignItems:"center"},drawerHeader:Object(ga.a)({display:"flex",alignItems:"center",width:"100%",height:"64px"},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,height:"calc(100vh - 64px)",padding:0,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-400},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},container:{width:"90%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},buttons:{width:"100%"},button:{width:"50%"},ColorBox:{height:"100%",marginTop:"0px"}}},va=[{paletteName:"Material UI Colors",id:"material-ui-colors",emoji:"\ud83c\udfa8",colors:[{name:"red",color:"#F44336"},{name:"pink",color:"#E91E63"},{name:"purple",color:"#9C27B0"},{name:"deeppurple",color:"#673AB7"},{name:"indigo",color:"#3F51B5"},{name:"blue",color:"#2196F3"},{name:"lightblue",color:"#03A9F4"},{name:"cyan",color:"#00BCD4"},{name:"teal",color:"#009688"},{name:"green",color:"#4CAF50"},{name:"lightgreen",color:"#8BC34A"},{name:"lime",color:"#CDDC39"},{name:"yellow",color:"#FFEB3B"},{name:"amber",color:"#FFC107"},{name:"orange",color:"#FF9800"},{name:"deeporange",color:"#FF5722"},{name:"brown",color:"#795548"},{name:"grey",color:"#9E9E9E"},{name:"bluegrey",color:"#607D8B"}]},{paletteName:"Flat UI Colors v1",id:"flat-ui-colors-v1",emoji:"\ud83e\udd19",colors:[{name:"Turquoise",color:"#1abc9c"},{name:"Emerald",color:"#2ecc71"},{name:"PeterRiver",color:"#3498db"},{name:"Amethyst",color:"#9b59b6"},{name:"WetAsphalt",color:"#34495e"},{name:"GreenSea",color:"#16a085"},{name:"Nephritis",color:"#27ae60"},{name:"BelizeHole",color:"#2980b9"},{name:"Wisteria",color:"#8e44ad"},{name:"MidnightBlue",color:"#2c3e50"},{name:"SunFlower",color:"#f1c40f"},{name:"Carrot",color:"#e67e22"},{name:"Alizarin",color:"#e74c3c"},{name:"Clouds",color:"#ecf0f1"},{name:"Concrete",color:"#95a5a6"},{name:"Orange",color:"#f39c12"},{name:"Pumpkin",color:"#d35400"},{name:"Pomegranate",color:"#c0392b"},{name:"Silver",color:"#bdc3c7"},{name:"Asbestos",color:"#7f8c8d"}]},{paletteName:"Flat UI Colors Dutch",id:"flat-ui-colors-dutch",emoji:"\ud83c\uddf3\ud83c\uddf1",colors:[{name:"Sunflower",color:"#FFC312"},{name:"Energos",color:"#C4E538"},{name:"BlueMartina",color:"#12CBC4"},{name:"LavenderRose",color:"#FDA7DF"},{name:"BaraRose",color:"#ED4C67"},{name:"RadiantYellow",color:"#F79F1F"},{name:"AndroidGreen",color:"#A3CB38"},{name:"MediterraneanSea",color:"#1289A7"},{name:"LavenderTea",color:"#D980FA"},{name:"VerryBerry",color:"#B53471"},{name:"PuffinsBill",color:"#EE5A24"},{name:"PixelatedGrass",color:"#009432"},{name:"MerchantMarineBlue",color:"#0652DD"},{name:"ForgottenPurple",color:"#9980FA"},{name:"HollyHock",color:"#833471"},{name:"RedPigment",color:"#EA2027"},{name:"TurkishAqua",color:"#006266"},{name:"20000LeaguesUnderTheSea",color:"#1B1464"},{name:"CircumorbitalRing",color:"#5758BB"},{name:"MagentaPurple",color:"#6F1E51"}]},{paletteName:"Flat UI Colors American",id:"flat-ui-colors-american",emoji:"\ud83c\uddfa\ud83c\uddf8",colors:[{name:"LightGreenishBlue",color:"#55efc4"},{name:"FadedPoster",color:"#81ecec"},{name:"GreenDarnerTail",color:"#74b9ff"},{name:"ShyMoment",color:"#a29bfe"},{name:"CityLights",color:"#dfe6e9"},{name:"MintLeaf",color:"#00b894"},{name:"RobinsEggBlue",color:"#00cec9"},{name:"ElectronBlue",color:"#0984e3"},{name:"ExodusFruit",color:"#6c5ce7"},{name:"SoothingBreeze",color:"#b2bec3"},{name:"SourLemon",color:"#ffeaa7"},{name:"FirstDate",color:"#fab1a0"},{name:"PinkGlamour",color:"#ff7675"},{name:"Pico8Pink",color:"#fd79a8"},{name:"AmericanRiver",color:"#636e72"},{name:"BrightYarrow",color:"#fdcb6e"},{name:"OrangeVille",color:"#e17055"},{name:"Chi-Gong",color:"#d63031"},{name:"PrunusAvium",color:"#e84393"},{name:"DraculaOrchid",color:"#2d3436"}]},{paletteName:"Flat UI Colors Aussie",id:"flat-ui-colors-aussie",emoji:"\ud83c\udde6\ud83c\uddfa",colors:[{name:"Beekeeper",color:"#f6e58d"},{name:"SpicedNectarine",color:"#ffbe76"},{name:"PinkGlamour",color:"#ff7979"},{name:"JuneBud",color:"#badc58"},{name:"CoastalBreeze",color:"#dff9fb"},{name:"Turbo",color:"#f9ca24"},{name:"QuinceJelly",color:"#f0932b"},{name:"CarminePink",color:"#eb4d4b"},{name:"PureApple",color:"#6ab04c"},{name:"HintOfIcePack",color:"#c7ecee"},{name:"MiddleBlue",color:"#7ed6df"},{name:"Heliotrope",color:"#e056fd"},{name:"ExodusFruit",color:"#686de0"},{name:"DeepKoamaru",color:"#30336b"},{name:"SoaringEagle",color:"#95afc0"},{name:"GreenlandGreen",color:"#22a6b3"},{name:"SteelPink",color:"#be2edd"},{name:"Blurple",color:"#4834d4"},{name:"DeepCove",color:"#130f40"},{name:"WizardGrey",color:"#535c68"}]},{paletteName:"Flat UI Colors British",id:"flat-ui-colors-british",emoji:"\ud83c\uddec\ud83c\udde7",colors:[{name:"ProtossPylon",color:"#00a8ff"},{name:"Periwinkle",color:"#9c88ff"},{name:"Rise-N-Shine",color:"#fbc531"},{name:"DownloadProgress",color:"#4cd137"},{name:"Seabrook",color:"#487eb0"},{name:"VanaDylBlue",color:"#0097e6"},{name:"MattPurple",color:"#8c7ae6"},{name:"NanohanachaGold",color:"#e1b12c"},{name:"SkirretGreen",color:"#44bd32"},{name:"Naval",color:"#40739e"},{name:"NasturcianFlower",color:"#e84118"},{name:"LynxWhite",color:"#f5f6fa"},{name:"BlueberrySoda",color:"#7f8fa6"},{name:"MazarineBlue",color:"#273c75"},{name:"BlueNights",color:"#353b48"},{name:"HarleyOrange",color:"#c23616"},{name:"HintOfPensive",color:"#dcdde1"},{name:"ChainGangGrey",color:"#718093"},{name:"PicoVoid",color:"#192a56"},{name:"ElectroMagnetic",color:"#2f3640"}]},{paletteName:"Flat UI Colors Spanish",id:"flat-ui-colors-spanish",emoji:"\ud83c\uddea\ud83c\uddf8",colors:[{name:"JacksonsPurple",color:"#40407a"},{name:"C64Purple",color:"#706fd3"},{name:"SwanWhite",color:"#f7f1e3"},{name:"SummerSky",color:"#34ace0"},{name:"CelestialGreen",color:"#33d9b2"},{name:"LuckyPoint",color:"#2c2c54"},{name:"Liberty",color:"#474787"},{name:"HotStone",color:"#aaa69d"},{name:"DevilBlue",color:"#227093"},{name:"PalmSpringsSplash",color:"#218c74"},{name:"FlourescentRed",color:"#ff5252"},{name:"SyntheticPumpkin",color:"#ff793f"},{name:"CrocodileTooth",color:"#d1ccc0"},{name:"MandarinSorbet",color:"#ffb142"},{name:"SpicedButterNut",color:"#ffda79"},{name:"EyeOfNewt",color:"#b33939"},{name:"ChileanFire",color:"#cd6133"},{name:"GreyPorcelain",color:"#84817a"},{name:"AlamedaOchre",color:"#cc8e35"},{name:"Desert",color:"#ccae62"}]},{paletteName:"Flat UI Colors Indian",id:"flat-ui-colors-indian",emoji:"\ud83c\uddee\ud83c\uddf3",colors:[{name:"OrchidOrange",color:"#FEA47F"},{name:"SpiroDiscoBall",color:"#25CCF7"},{name:"HoneyGlow",color:"#EAB543"},{name:"SweetGarden",color:"#55E6C1"},{name:"FallingStar",color:"#CAD3C8"},{name:"RichGardenia",color:"#F97F51"},{name:"ClearChill",color:"#1B9CFC"},{name:"WhitePepper",color:"#F8EFBA"},{name:"Keppel",color:"#58B19F"},{name:"ShipsOfficer",color:"#2C3A47"},{name:"FieryFuchsia",color:"#B33771"},{name:"BlueBell",color:"#3B3B98"},{name:"GeorgiaPeach",color:"#FD7272"},{name:"OasisStream",color:"#9AECDB"},{name:"BrightUbe",color:"#D6A2E8"},{name:"MagentaPurple",color:"#6D214F"},{name:"EndingNavyBlue",color:"#182C61"},{name:"SasquatchSocks",color:"#FC427B"},{name:"PineGlade",color:"#BDC581"},{name:"HighlighterLavender",color:"#82589F"}]},{paletteName:"Flat UI Colors French",id:"flat-ui-colors-french",emoji:"\ud83c\uddeb\ud83c\uddf7",colors:[{name:"FlatFlesh",color:"#fad390"},{name:"MelonMelody",color:"#f8c291"},{name:"Livid",color:"#6a89cc"},{name:"Spray",color:"#82ccdd"},{name:"ParadiseGreen",color:"#b8e994"},{name:"SquashBlossom",color:"#f6b93b"},{name:"MandarinRed",color:"#e55039"},{name:"AzraqBlue",color:"#4a69bd"},{name:"Dupain",color:"#60a3bc"},{name:"AuroraGreen",color:"#78e08f"},{name:"IcelandPoppy",color:"#fa983a"},{name:"TomatoRed",color:"#eb2f06"},{name:"YueGuangBlue",color:"#1e3799"},{name:"GoodSamaritan",color:"#3c6382"},{name:"Waterfall",color:"#38ada9"},{name:"CarrotOrange",color:"#e58e26"},{name:"JalapenoRed",color:"#b71540"},{name:"DarkSapphire",color:"#0c2461"},{name:"ForestBlues",color:"#0a3d62"},{name:"ReefEncounter",color:"#079992"}]}],Ca=function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(h.a)(this,Object(p.a)(a).call(this,e))).handleDrawerOpen=function(){t.setState({open:!0})},t.handleDrawerClose=function(){t.setState({open:!1})},t.onSortEnd=function(e){var a=e.oldIndex,o=e.newIndex;t.setState(function(e){var t=e.colors;return{colors:Object(da.arrayMove)(t,a,o)}})},t.state={open:!1,colors:va[0].colors},t.addNewColor=t.addNewColor.bind(Object(g.a)(Object(g.a)(t))),t.handleChange=t.handleChange.bind(Object(g.a)(Object(g.a)(t))),t.handleSubmit=t.handleSubmit.bind(Object(g.a)(Object(g.a)(t))),t.removeColor=t.removeColor.bind(Object(g.a)(Object(g.a)(t))),t.clearColors=t.clearColors.bind(Object(g.a)(Object(g.a)(t))),t.addRandomColor=t.addRandomColor.bind(Object(g.a)(Object(g.a)(t))),t}return Object(b.a)(a,e),Object(u.a)(a,[{key:"addNewColor",value:function(e){this.setState({colors:[].concat(Object(m.a)(this.state.colors),[e]),newColorName:""})}},{key:"handleChange",value:function(e){this.setState(Object(j.a)({},e.target.name,e.target.value))}},{key:"clearColors",value:function(){this.setState({colors:[]})}},{key:"addRandomColor",value:function(){for(var e,a=this.props.palettes.map(function(e){return e.colors}).flat(),t=!0,o=function(e,a){return e.name===a.name};t;)e=a[Math.floor(Math.random()*a.length)],t=this.state.colors.some(o);this.setState({colors:[].concat(Object(m.a)(this.state.colors),[e])})}},{key:"handleSubmit",value:function(e){e.id=e.paletteName.toLowerCase().replace(/ /g,"-"),e.colors=this.state.colors,this.props.savePalette(e),this.props.history.push("/")}},{key:"removeColor",value:function(e){this.setState({colors:this.state.colors.filter(function(a){return a.name!==e})})}},{key:"render",value:function(){var e=this.props,a=e.classes,t=e.maxColors,o=e.palettes,n=this.state,r=n.open,c=n.colors,i=c.length>=t;return l.a.createElement("div",{className:a.root},l.a.createElement(ea,{open:r,palettes:o,handleSubmit:this.handleSubmit,handleDrawerOpen:this.handleDrawerOpen}),l.a.createElement(la.a,{className:a.drawer,variant:"persistent",anchor:"left",open:r,classes:{paper:a.drawerPaper}},l.a.createElement("div",{className:a.drawerHeader},l.a.createElement(M.a,{onClick:this.handleDrawerClose},l.a.createElement(ma.a,null))),l.a.createElement(ia.a,null),l.a.createElement("div",{className:a.container},l.a.createElement(_e.a,{variant:"h4",gutterBottom:!0},"Design Your Palette"),l.a.createElement("div",{className:a.buttons},l.a.createElement(De.a,{variant:"contained",color:"secondary",onClick:this.clearColors,className:a.button},"Clear Palette"),l.a.createElement(De.a,{variant:"contained",className:a.button,color:"primary",onClick:this.addRandomColor,disabled:i},"Random Color")),l.a.createElement(na,{paletteIsFull:i,addNewColor:this.addNewColor,colors:c}))),l.a.createElement("main",{className:x()(a.content,Object(j.a)({},a.contentShift,r))},l.a.createElement("div",{className:a.drawerHeader}),l.a.createElement("div",{className:a.ColorBox},l.a.createElement(ba,{colors:c,removeColor:this.removeColor,axis:"xy",onSortEnd:this.onSortEnd,distance:20}))))}}]),a}(r.Component);Ca.defaultProps={maxColors:20};var ja=Object(_.withStyles)(fa,{withTheme:!0})(Ca),Oa=[50,100,200,300,400,500,600,700,800,900];function ya(e){for(var a={paletteName:e.paletteName,id:e.id,emoji:e.emoji,colors:{}},t=0;t<Oa.length;t++){var o=Oa[t];a.colors[o]=[]}var n,r,l=!0,c=!1,i=void 0;try{for(var s,m=e.colors[Symbol.iterator]();!(l=(s=m.next()).done);l=!0){var d=s.value,u=(n=d.color,r=10,S.a.scale(function(e){return[S()(e).darken(1.4).hex(),e,"#fff"]}(n)).mode("lab").colors(r)).reverse();for(var h in u)a.colors[Oa[h]].push({name:"".concat(d.name," ").concat(Oa[h]),id:d.name.toLowerCase().replace(/ /g,"-"),hex:u[h],rgb:S()(u[h]).css(),rgba:S()(u[h]).css().replace("rgb","rgba").replace(")",",1.0)")})}}catch(p){c=!0,i=p}finally{try{l||null==m.return||m.return()}finally{if(c)throw i}}return a}var Ea=function(e){function a(e){var t;Object(d.a)(this,a),t=Object(h.a)(this,Object(p.a)(a).call(this,e));var o=JSON.parse(window.localStorage.getItem("palettes"));return t.state={palettes:o||va},t.savePalette=t.savePalette.bind(Object(g.a)(Object(g.a)(t))),t.findPalette=t.findPalette.bind(Object(g.a)(Object(g.a)(t))),t.deletePalette=t.deletePalette.bind(Object(g.a)(Object(g.a)(t))),t}return Object(b.a)(a,e),Object(u.a)(a,[{key:"findPalette",value:function(e){return this.state.palettes.find(function(a){return a.id===e})}},{key:"deletePalette",value:function(e){this.setState(function(a){return{palettes:a.palettes.filter(function(a){return a.id!==e})}},this.syncLocalStorage)}},{key:"savePalette",value:function(e){this.setState({palettes:[].concat(Object(m.a)(this.state.palettes),[e])},this.syncLocalStorage)}},{key:"syncLocalStorage",value:function(){window.localStorage.setItem("palettes",JSON.stringify(this.state.palettes))}},{key:"render",value:function(){var e=this;return l.a.createElement(f.a,{render:function(a){var t=a.location;return l.a.createElement(C.TransitionGroup,null,l.a.createElement(C.CSSTransition,{key:t.key,classNames:"page",timeout:500},l.a.createElement(v.a,{location:t},l.a.createElement(f.a,{exact:!0,path:"/palette/new",render:function(a){return l.a.createElement(Fe,null,l.a.createElement(ja,Object.assign({savePalette:e.savePalette,palettes:e.state.palettes},a)))}}),l.a.createElement(f.a,{exact:!0,path:"/palette/:paletteId/:colorId",render:function(a){return l.a.createElement(Fe,null,l.a.createElement(Ne,{colorId:a.match.params.colorId,palette:ya(e.findPalette(a.match.params.paletteId))}))}}),l.a.createElement(f.a,{exact:!0,path:"/",render:function(a){return l.a.createElement(Fe,null,l.a.createElement(ke,Object.assign({palettes:e.state.palettes,deletePalette:e.deletePalette},a)))}}),l.a.createElement(f.a,{exact:!0,path:"/palette/:id",render:function(a){return l.a.createElement(Fe,null,l.a.createElement(Z,{palette:ya(e.findPalette(a.match.params.id))}))}}),l.a.createElement(f.a,{render:function(a){return l.a.createElement(Fe,null,l.a.createElement(ke,Object.assign({palettes:e.state.palettes,deletePalette:e.deletePalette},a)))}}))))}})}}]),a}(r.Component);i.a.render(l.a.createElement(s.a,null,l.a.createElement(Ea,null)),document.getElementById("root"))}},[[301,1,2]]]);
//# sourceMappingURL=main.1fe72db5.chunk.js.map
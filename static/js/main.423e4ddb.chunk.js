(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{133:function(e,t,n){e.exports={"user-list":"Users_user-list__BnvUe"}},28:function(e,t,n){e.exports={"profile-wrapper":"ProfileInfo_profile-wrapper__1Qvei","profile-img":"ProfileInfo_profile-img__1BOnx","profile-info":"ProfileInfo_profile-info__3rR1V","profile-name":"ProfileInfo_profile-name__1KMOV","profile-button":"ProfileInfo_profile-button__3_x_o","profile-description":"ProfileInfo_profile-description__1ykEo",contact:"ProfileInfo_contact__3xHdr","description-button":"ProfileInfo_description-button__3bRJr"}},285:function(e,t,n){},286:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n(10),i=n(7),s=n.n(i),c=n(13),o=n(3),u=n(51),l=n(129).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"497dc92a-1721-4c91-9419-3f1a4e51ffce"}}),p=function(e){return l.get("profile/".concat(e)).then((function(e){return e}))},f=function(e){return l.get("profile/status/".concat(e))},j=function(e){return l.put("profile/status",{status:e})},b=function(e){var t=new FormData;return t.append("image",e),l.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},d=function(e){return l.put("profile",e)},h=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return l.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r})},m=function(){return l.delete("auth/login")},O={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5;return l.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},getUnfollowFriend:function(e){return l.delete("follow/".concat(e)).then((function(e){return e.data.resultCode}))},getFollowFriend:function(e){return l.post("follow/".concat(e),{}).then((function(e){return e.data.resultCode}))}},g=function(){return l.get("security/get-captcha-url")},x="social_network/auth/SET_USER_DATA",v="social_network/auth/GET_CAPTCHA_URL_SUCCESS",_={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},k=function(e,t,n,r){return{type:x,payload:{userId:e,email:t,login:n,isAuth:r}}},w=function(){return function(){var e=Object(c.a)(s.a.mark((function e(t){var n,r,a,i,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.get("auth/me");case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,i=r.email,c=r.login,t(k(a,i,c,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},y=function(){return function(){var e=Object(c.a)(s.a.mark((function e(t){var n,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:n=e.sent,r=n.data.url,t({type:v,url:r});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},C=function(){return function(){var e=Object(c.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:0===e.sent.data.resultCode&&t(k(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(o.a)(Object(o.a)({},e),t.payload);case v:return Object(o.a)(Object(o.a)({},e),{},{captchaUrl:t.url});default:return e}},T=n(38),P="social_network/dialogs/SEND-MESSAGE",S={dialogsData:[{id:1,name:"\u0412\u0438\u0442\u044f"},{id:2,name:"\u041f\u0435\u0442\u044f"},{id:3,name:"\u041b\u0435\u043d\u0430"},{id:4,name:"\u0421\u0432\u0435\u0442\u0430"},{id:5,name:"\u041a\u0430\u0442\u044f"}],messagesText:[{id:1,text:"\u041f\u0440\u0438\u0432\u0435\u0442!"},{id:2,text:"\u041a\u0430\u043a \u0434\u0435\u043b\u0430?"}]},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return Object(o.a)(Object(o.a)({},e),{},{messagesText:[].concat(Object(T.a)(e.messagesText),[{id:3,text:t.newMessage}])});default:return e}},I="social_network/profile/ADD-POST",F="social_network/profile/SET_USER_PROFILE",A="social_network/profile/SET_STATUS",E="social_network/profile/DELETE_POST",D="social_network/profile/SET_AVATAR",L={postData:[{id:1,title:"Post 1",src:"https://likevideogid.ru/wp-content/uploads/2019/11/likee_avatarka13-2.jpg"},{id:2,title:"Post 2",src:"https://likevideogid.ru/wp-content/uploads/2019/11/likee_avatarka13-2.jpg"},{id:3,title:"Post 3",src:"https://likevideogid.ru/wp-content/uploads/2019/11/likee_avatarka13-2.jpg"},{id:4,title:"Post 4",src:"https://likevideogid.ru/wp-content/uploads/2019/11/likee_avatarka13-2.jpg"}],profile:null,status:""},M=function(e){return{type:A,status:e}},z=function(e){return function(){var t=Object(c.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p(e);case 2:r=t.sent,n((a=r.data,{type:F,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case I:return Object(o.a)(Object(o.a)({},e),{},{postData:[].concat(Object(T.a)(e.postData),[{id:5,title:t.text,src:"https://likevideogid.ru/wp-content/uploads/2019/11/likee_avatarka13-2.jpg"}])});case E:return Object(o.a)(Object(o.a)({},e),{},{postData:e.postData.filter((function(e){return e.id!==t.postId}))});case F:return Object(o.a)(Object(o.a)({},e),{},{profile:t.profile});case A:return Object(o.a)(Object(o.a)({},e),{},{status:t.status});case D:return Object(o.a)(Object(o.a)({},e),{},{profile:Object(o.a)(Object(o.a)({},e.profile),{},{photos:t.photos})});default:return e}},B=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(o.a)(Object(o.a)({},e),r):e}))},G="social_network/users/FOLLOW",H="social_network/users/UNFOLLOW",J="social_network/users/SET_USERS",V="social_network/users/SET_CURRENT_PAGE",Q="social_network/users/SET_TOTAL_USERS_COUNT",W="social_network/users/TOGGLE_IS_FETCHING",q="social_network/users/TOGGLE_IS_FOLLOWING_PROGRESS",X={users:[],pageSize:15,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},Y=function(e){return{type:G,userId:e}},K=function(e){return{type:H,userId:e}},Z=function(e){return{type:J,users:e}},$=function(e){return{type:V,pageNumber:e}},ee=function(e){return{type:W,isFetching:e}},te=function(e,t){return{type:q,isFetching:e,id:t}},ne=function(){var e=Object(c.a)(s.a.mark((function e(t,n,r,a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(te(!0,n)),e.next=3,r(n);case 3:0===e.sent&&t(a(n)),t(te(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:return Object(o.a)(Object(o.a)({},e),{},{users:B(e.users,t.userId,"id",{followed:!0})});case H:return Object(o.a)(Object(o.a)({},e),{},{users:B(e.users,t.userId,"id",{followed:!1})});case J:return Object(o.a)(Object(o.a)({},e),{},{users:Object(T.a)(t.users)});case V:return Object(o.a)(Object(o.a)({},e),{},{currentPage:t.pageNumber});case Q:return Object(o.a)(Object(o.a)({},e),{},{totalUsersCount:t.totalCount});case W:return Object(o.a)(Object(o.a)({},e),{},{isFetching:t.isFetching});case q:return Object(o.a)(Object(o.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(T.a)(e.followingInProgress),[t.id]):[e.followingInProgress.filter((function(e){return e!==t.id}))]});default:return e}},ae=n(130),ie=n(128),se="INITIALIZED_SUCCESS",ce={initialized:!1},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case se:return Object(o.a)(Object(o.a)({},e),{},{initialized:!0});default:return e}},ue=Object(a.c)({profilePage:R,messagesPage:U,usersPage:re,auth:N,form:ie.a,app:oe}),le=Object(a.e)(ue,Object(a.a)(ae.a)),pe=n(1),fe=n.n(pe),je=n(67),be=n.n(je),de=n(24),he=n(25),me=n(27),Oe=n(26),ge=n(91),xe=n.n(ge),ve=n(19),_e=n(40),ke=n.n(_e),we=function(){return Object(r.jsx)("nav",{className:ke.a["app-sidebar"],children:Object(r.jsxs)("ul",{className:ke.a["menu-list"],children:[Object(r.jsx)("li",{children:Object(r.jsx)(ve.b,{className:ke.a["menu-item-link"],activeClassName:ke.a["menu-item-link-active"],to:"/profile",children:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"})}),Object(r.jsx)("li",{children:Object(r.jsx)(ve.b,{className:ke.a["menu-item-link"],activeClassName:ke.a["menu-item-link-active"],to:"/users",children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"})})]})})},ye=n(12),Ce=n(11),Ne=function(e){return{isAuth:e.auth.isAuth}},Te=n(39),Pe=function(){return Object(r.jsxs)("svg",{style:{margin:"auto",background:"transparent",display:"block",shapeRendering:"auto"},width:"50px",height:"50px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid",children:[Object(r.jsx)("g",{transform:"translate(80,50)",children:Object(r.jsx)("g",{transform:"rotate(0)",children:Object(r.jsxs)("circle",{cx:"0",cy:"0",r:"6",fill:"#000000",fillOpacity:"1",children:[Object(r.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.875s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(r.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.875s"})]})})}),Object(r.jsx)("g",{transform:"translate(71.21320343559643,71.21320343559643)",children:Object(r.jsx)("g",{transform:"rotate(45)",children:Object(r.jsxs)("circle",{cx:"0",cy:"0",r:"6",fill:"#000000",fillOpacity:"0.875",children:[Object(r.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.75s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(r.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.75s"})]})})}),Object(r.jsx)("g",{transform:"translate(50,80)",children:Object(r.jsx)("g",{transform:"rotate(90)",children:Object(r.jsxs)("circle",{cx:"0",cy:"0",r:"6",fill:"#000000",fillOpacity:"0.75",children:[Object(r.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.625s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(r.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.625s"})]})})}),Object(r.jsx)("g",{transform:"translate(28.786796564403577,71.21320343559643)",children:Object(r.jsx)("g",{transform:"rotate(135)",children:Object(r.jsxs)("circle",{cx:"0",cy:"0",r:"6",fill:"#000000",fillOpacity:"0.625",children:[Object(r.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.5s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(r.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.5s"})]})})}),Object(r.jsx)("g",{transform:"translate(20,50.00000000000001)",children:Object(r.jsx)("g",{transform:"rotate(180)",children:Object(r.jsxs)("circle",{cx:"0",cy:"0",r:"6",fill:"#000000",fillOpacity:"0.5",children:[Object(r.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.375s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(r.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.375s"})]})})}),Object(r.jsx)("g",{transform:"translate(28.78679656440357,28.786796564403577)",children:Object(r.jsx)("g",{transform:"rotate(225)",children:Object(r.jsxs)("circle",{cx:"0",cy:"0",r:"6",fill:"#000000",fillOpacity:"0.375",children:[Object(r.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.25s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(r.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.25s"})]})})}),Object(r.jsx)("g",{transform:"translate(49.99999999999999,20)",children:Object(r.jsx)("g",{transform:"rotate(270)",children:Object(r.jsxs)("circle",{cx:"0",cy:"0",r:"6",fill:"#000000",fillOpacity:"0.25",children:[Object(r.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"-0.125s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(r.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"-0.125s"})]})})}),Object(r.jsx)("g",{transform:"translate(71.21320343559643,28.78679656440357)",children:Object(r.jsx)("g",{transform:"rotate(315)",children:Object(r.jsxs)("circle",{cx:"0",cy:"0",r:"6",fill:"#000000",fillOpacity:"0.125",children:[Object(r.jsx)("animateTransform",{attributeName:"transform",type:"scale",begin:"0s",values:"1.5 1.5;1 1",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite"}),Object(r.jsx)("animate",{attributeName:"fill-opacity",keyTimes:"0;1",dur:"1s",repeatCount:"indefinite",values:"1;0",begin:"0s"})]})})})]})},Se=n(28),Ue=n.n(Se),Ie=n.p+"static/media/userAvatar.79bfd233.png",Fe=function(e){var t=Object(pe.useState)(!1),n=Object(Te.a)(t,2),a=n[0],i=n[1],s=Object(pe.useState)(e.status),c=Object(Te.a)(s,2),o=c[0],u=c[1];Object(pe.useEffect)((function(){u(e.status)}),[e.status]);return Object(r.jsxs)("div",{children:[!a&&Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:"\u0421\u0442\u0430\u0442\u0443\u0441: "}),Object(r.jsx)("span",{onDoubleClick:function(){i(!0)},children:e.status||"\u043d\u0435\u0442 \u0441\u0442\u0430\u0442\u0443\u0441\u0430"})]}),a&&Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:"\u0421\u0442\u0430\u0442\u0443\u0441: "}),Object(r.jsx)("input",{autoFocus:!0,value:o,onBlur:function(){i(!1),e.updateStatus(o)},onChange:function(e){u(e.currentTarget.value)}})]})]})},Ae=n(126),Ee=n(127),De=n(47),Le=n(94),Me=n.n(Le),ze=function(e){e.input;var t=e.meta,n=t.touched,a=t.error,i=e.children,s=(Object(De.a)(e,["input","meta","children"]),n&&a);return Object(r.jsx)("div",{className:"".concat(Me.a.form_control," + ' ' + ").concat(s?Me.a.error:""),children:i})},Re=function(e){var t=e.input,n=(e.meta,Object(De.a)(e,["input","meta"]));return Object(r.jsx)(ze,Object(o.a)(Object(o.a)({},e),{},{children:Object(r.jsx)("textarea",Object(o.a)(Object(o.a)({},t),n))}))},Be=function(e){var t=e.input,n=(e.meta,Object(De.a)(e,["input","meta"]));return Object(r.jsx)(ze,Object(o.a)(Object(o.a)({},e),{},{children:Object(r.jsx)("input",Object(o.a)(Object(o.a)({},t),n))}))},Ge=Object(Ee.a)({form:"edit-profile"})((function(e){var t=e.handleSubmit,n=e.profile;e.error;return Object(r.jsxs)("form",{onSubmit:t,children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:"\u0412 \u043f\u043e\u0438\u0441\u043a\u0430\u0445 \u0440\u0430\u0431\u043e\u0442\u044b:"}),Object(r.jsx)(Ae.a,{type:"checkbox",name:"lookingForAJob",component:"input"})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:"\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u043d\u0430\u0432\u044b\u043a\u0438:"}),Object(r.jsx)(Ae.a,{name:"lookingForAJobDescription",component:Re})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:"\u041e\u0431\u043e \u043c\u043d\u0435:"}),Object(r.jsx)(Ae.a,{name:"aboutMe",component:Be})]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b:"})," ",Object.keys(n.contacts).map((function(e){return Object(r.jsxs)("div",{children:[Object(r.jsxs)("b",{children:[e,":"]}),Object(r.jsx)(Ae.a,{name:"contacts."+e,component:Be})]},e)}))]}),Object(r.jsx)("button",{children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})})),He=function(e){var t=e.profile,n=e.isOwner,a=e.goToEditMode;return Object(r.jsxs)("div",{children:[Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("b",{children:"\u0412 \u043f\u043e\u0438\u0441\u043a\u0430\u0445 \u0440\u0430\u0431\u043e\u0442\u044b:"})," ",t.lookingForAJob?"\u0434\u0430":"\u043d\u0435\u0442"]}),t.lookingForAJob&&Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:"\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0435 \u043d\u0430\u0432\u044b\u043a\u0438:"})," ",t.lookingForAJobDescription]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:"\u041e\u0431\u043e \u043c\u043d\u0435:"})," ",t.aboutMe]}),Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b:"})," ",Object.keys(t.contacts).map((function(e){return Object(r.jsx)(Je,{contactTitle:e,contactValue:t.contacts[e]},e)}))]}),n&&Object(r.jsx)("button",{className:Ue.a["description-button"],onClick:a,children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c"})]})},Je=function(e){var t=e.contactTitle,n=e.contactValue;return Object(r.jsxs)("div",{className:Ue.a.contact,children:[t,": ",n]})},Ve=function(e){var t=Object(pe.useState)(!1),n=Object(Te.a)(t,2),a=n[0],i=n[1];if(!e.profile)return Object(r.jsx)(Pe,{});return Object(r.jsxs)("div",{className:Ue.a["profile-wrapper"],children:[Object(r.jsx)("img",{className:Ue.a["profile-img"],src:null!=e.profile.photos.large?e.profile.photos.large:Ie,height:"180",width:"180",alt:""}),Object(r.jsxs)("div",{className:Ue.a["profile-info"],children:[Object(r.jsx)("h1",{className:Ue.a["profile-name"],children:e.profile.fullName}),Object(r.jsx)(Fe,{status:e.status,updateStatus:e.updateStatus}),e.isOwner&&Object(r.jsx)("input",{className:Ue.a["profile-button"],type:"file",onChange:function(t){t.target.files.length&&e.saveAvatar(t.target.files[0])}})]}),Object(r.jsx)("div",{className:Ue.a["profile-description"],children:a?Object(r.jsx)(Ge,{initialValues:e.profile,profile:e.profile,onSubmit:function(t){e.saveProfile(t),i(!1)}}):Object(r.jsx)(He,{profile:e.profile,isOwner:e.isOwner,goToEditMode:function(){i(!0)}})})]})},Qe=function(e){return Object(r.jsx)("div",{children:Object(r.jsx)(Ve,{isOwner:e.isOwner,profile:e.profile,status:e.status,updateStatus:e.updateStatus,saveAvatar:e.saveAvatar,saveProfile:e.saveProfile})})},We=function(e){Object(me.a)(n,e);var t=Object(Oe.a)(n);function n(){return Object(de.a)(this,n),t.apply(this,arguments)}return Object(he.a)(n,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authUserId)||this.props.history.push("/login"),this.props.getUserProfileThunkCreator(e),this.props.getUserStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e,t,n){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(r.jsx)(Qe,Object(o.a)(Object(o.a)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,saveAvatar:this.props.saveAvatar}))}}]),n}(fe.a.Component),qe=Object(a.d)(Object(ye.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfileThunkCreator:z,getUserStatus:function(e){return function(){var t=Object(c.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f(e);case 2:r=t.sent,n(M(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},updateStatus:function(e){return function(){var t=Object(c.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j(e);case 2:0===t.sent.data.resultCode&&n(M(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},saveAvatar:function(e){return function(){var t=Object(c.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b(e);case 2:0===(r=t.sent).data.resultCode&&n((a=r.data.data.photos,{type:D,photos:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},saveProfile:function(e){return function(){var t=Object(c.a)(s.a.mark((function t(n,r){var a;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r().auth.userId,t.next=3,d(e);case 3:0===t.sent.data.resultCode&&n(z(a));case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}}),Ce.f,(function(e){var t=function(t){Object(me.a)(a,t);var n=Object(Oe.a)(a);function a(){return Object(de.a)(this,a),n.apply(this,arguments)}return Object(he.a)(a,[{key:"render",value:function(){return this.props.isAuth?Object(r.jsx)(e,Object(o.a)({},this.props)):Object(r.jsx)(Ce.a,{to:"/login"})}}]),a}(fe.a.Component);return Object(ye.b)(Ne)(t)}))(We),Xe=n(48),Ye=n.n(Xe),Ke=function(e){for(var t=e.totalUsersCount,n=e.pageSize,a=e.currentPage,i=e.onPageChanged,s=e.portionSize,c=void 0===s?20:s,o=Math.ceil(t/n),u=[],l=1;l<=o;l++)u.push(l);var p=Math.ceil(o/c),f=Object(pe.useState)(Math.ceil(a/c)),j=Object(Te.a)(f,2),b=j[0],d=j[1],h=(b-1)*c+1,m=b*c;return Object(r.jsxs)("div",{className:Ye.a.paginator,children:[b>1&&Object(r.jsx)("button",{className:Ye.a["page-button"],onClick:function(){d(b-1)},children:"\u041d\u0430\u0437\u0430\u0434"}),u.filter((function(e){return e>=h&&e<=m})).map((function(e){return Object(r.jsx)("span",{className:"".concat(Ye.a["page-number"]," ").concat(a===e?Ye.a["page-number-active"]:""),onClick:function(t){i(e)},children:e},e)})),p>b&&Object(r.jsx)("button",{className:Ye.a["page-button"],onClick:function(){d(b+1)},children:"\u0412\u043f\u0435\u0440\u0435\u0434"})]})},Ze=n(34),$e=n.n(Ze),et=function(e){var t=e.user,n=Object(De.a)(e,["user"]);return Object(r.jsxs)("li",{className:$e.a["user-list-item"],children:[Object(r.jsx)(ve.b,{className:$e.a["item-img"],to:"/profile/"+t.id,children:Object(r.jsx)("img",{src:null!=t.photos.small?t.photos.small:Ie,alt:"avatar",width:"100",height:"100"})}),Object(r.jsxs)("div",{className:$e.a["item-description"],children:[Object(r.jsx)("div",{className:$e.a["item-name"],children:t.name}),Object(r.jsx)("div",{children:t.status||"\u0441\u0442\u0430\u0442\u0443\u0441"})]}),Object(r.jsx)("div",{className:$e.a["item-button-wrapper"],children:t.followed?Object(r.jsx)("button",{className:$e.a["item-button"],disabled:n.followingInProgress.some((function(e){return e===t.id})),onClick:function(){n.onUnfollowClick(t.id)},children:"\u041e\u0442\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"}):Object(r.jsx)("button",{className:$e.a["item-button"],disabled:n.followingInProgress.some((function(e){return e===t.id})),onClick:function(){n.onFollowClick(t.id)},children:"\u041f\u043e\u0434\u043f\u0438\u0441\u0430\u0442\u044c\u0441\u044f"})})]},n.key)},tt=n(133),nt=n.n(tt),rt=function(e){return Object(r.jsxs)("div",{children:[Object(r.jsx)(Ke,{currentPage:e.currentPage,onPageChanged:e.onPageChanged,totalUsersCount:e.totalUsersCount,pageSize:e.pageSize}),Object(r.jsx)("ul",{className:nt.a["user-list"],children:e.users.map((function(t){return Object(r.jsx)(et,{user:t,followingInProgress:e.followingInProgress,onUnfollowClick:e.onUnfollowClick,onFollowClick:e.onFollowClick},t.id)}))})]})},at=n(134),it=Object(at.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),st=function(e){return e.usersPage.pageSize},ct=function(e){return e.usersPage.totalUsersCount},ot=function(e){return e.usersPage.currentPage},ut=function(e){return e.usersPage.isFetching},lt=function(e){return e.usersPage.followingInProgress},pt=function(e){Object(me.a)(n,e);var t=Object(Oe.a)(n);function n(){var e;Object(de.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){e.props.getNewUsersThunkCreator(t,e.props.pageSize)},e.onUnfollowClick=function(t){e.props.unfollowThunkCreator(t)},e.onFollowClick=function(t){e.props.followThunkCreator(t)},e}return Object(he.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(r.jsx)(r.Fragment,{children:this.props.isFetching?Object(r.jsx)(Pe,{}):Object(r.jsx)(rt,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,onUnfollowClick:this.onUnfollowClick,onFollowClick:this.onFollowClick,followingInProgress:this.props.followingInProgress})})}}]),n}(fe.a.Component),ft=Object(ye.b)((function(e){return{users:it(e),pageSize:st(e),totalUsersCount:ct(e),currentPage:ot(e),isFetching:ut(e),followingInProgress:lt(e)}}),{getUsersThunkCreator:function(e,t){return function(){var n=Object(c.a)(s.a.mark((function n(r){var a;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(ee(!0)),r($(e)),n.next=4,O.getUsers(e,t);case 4:a=n.sent,r(ee(!1)),r(Z(a.items)),r((i=a.totalCount,{type:Q,totalCount:i}));case 8:case"end":return n.stop()}var i}),n)})));return function(e){return n.apply(this,arguments)}}()},followThunkCreator:function(e){return function(){var t=Object(c.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=O.getFollowFriend.bind(O),ne(n,e,r,Y);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollowThunkCreator:function(e){return function(){var t=Object(c.a)(s.a.mark((function t(n){var r;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=O.getUnfollowFriend.bind(O),ne(n,e,r,K);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getNewUsersThunkCreator:function(e,t){return function(){var n=Object(c.a)(s.a.mark((function n(r){var a;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(ee(!0)),r($(e)),n.next=4,O.getUsers(e,t);case 4:a=n.sent,r(ee(!1)),r(Z(a.items));case 7:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}})(pt),jt=n(41),bt=n.n(jt),dt=function(e){return Object(r.jsxs)("div",{className:bt.a["app-header"],children:[Object(r.jsx)("span",{className:bt.a.logo,children:"\u0421\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u0430\u044f \u0441\u0435\u0442\u044c"}),Object(r.jsx)("div",{className:bt.a["login-block"],children:e.isAuth?Object(r.jsxs)("div",{children:[Object(r.jsx)("span",{className:bt.a["login-name"],children:e.login})," ",Object(r.jsx)("button",{className:bt.a["login-button"],onClick:e.logoutThunkCreator,children:"\u0412\u044b\u0439\u0442\u0438"})]}):Object(r.jsx)(ve.b,{className:bt.a["login-button"],to:"/login",children:"\u0412\u043e\u0439\u0442\u0438"})})]})},ht=function(e){Object(me.a)(n,e);var t=Object(Oe.a)(n);function n(){return Object(de.a)(this,n),t.apply(this,arguments)}return Object(he.a)(n,[{key:"render",value:function(){return Object(r.jsx)(dt,Object(o.a)({},this.props))}}]),n}(fe.a.Component),mt=Object(ye.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logoutThunkCreator:C})(ht),Ot=function(e){if(!e)return"Field is required"},gt=n(29),xt=n.n(gt),vt=Object(Ee.a)({form:"login"})((function(e){return Object(r.jsxs)("div",{className:xt.a.box,children:[Object(r.jsx)("h1",{className:xt.a.title,children:"\u041b\u043e\u0433\u0438\u043d"}),Object(r.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(r.jsx)(Ae.a,{className:xt.a.input,placeholder:"Email",name:"email",component:Be,validate:[Ot]}),Object(r.jsx)(Ae.a,{className:xt.a.input,placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",name:"password",component:Be,validate:[Ot],type:"password"}),Object(r.jsxs)("div",{className:xt.a.input_remember,children:[Object(r.jsx)(Ae.a,{type:"checkbox",name:"rememberMe",component:"input"})," ",Object(r.jsx)("label",{htmlFor:"rememberMe",children:"\u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043c\u0435\u043d\u044f"})]}),e.captchaUrl&&Object(r.jsxs)("div",{children:[Object(r.jsx)("img",{src:e.captchaUrl,alt:""}),Object(r.jsx)(Ae.a,{className:xt.a.input,placeholder:"",name:"captcha",component:Be,validate:[Ot]})]}),e.error&&Object(r.jsx)("p",{className:xt.a.form_error,children:e.error}),Object(r.jsx)("button",{className:xt.a.button,children:"\u0412\u043e\u0439\u0442\u0438"})]})]})})),_t=Object(ye.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}}),{loginThunkCreator:function(e,t,n,r){return function(){var a=Object(c.a)(s.a.mark((function a(i){var c,o;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,h(e,t,n,r);case 2:0===(c=a.sent).data.resultCode?i(w()):(10===c.data.resultCode&&i(y()),o=c.data.messages.length>0?c.data.messages[0]:"Some error",i(Object(u.a)("login",{_error:o})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},logoutThunkCreator:C})((function(e){return e.isAuth?Object(r.jsx)(Ce.a,{to:"/profile"}):Object(r.jsx)(vt,{onSubmit:function(t){e.loginThunkCreator(t.email,t.password,t.rememberMe,t.captcha)},captchaUrl:e.captchaUrl})})),kt=n(72),wt=n.n(kt),yt=function(){return Object(r.jsxs)("footer",{className:wt.a["app-footer"],children:[Object(r.jsx)("p",{className:wt.a["footer-year"],children:"@2021"}),Object(r.jsx)("p",{className:wt.a["footer-copyright"],children:"\u0423\u0447\u0435\u0431\u043d\u044b\u0439 \u043f\u0440\u043e\u0435\u043a\u0442"})]})},Ct=function(e){Object(me.a)(n,e);var t=Object(Oe.a)(n);function n(){return Object(de.a)(this,n),t.apply(this,arguments)}return Object(he.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeThunkCreator()}},{key:"render",value:function(){return this.props.initialized?Object(r.jsxs)("div",{className:xe.a["app-wrapper"],children:[Object(r.jsx)(mt,{}),Object(r.jsx)(we,{}),Object(r.jsxs)("div",{className:xe.a["app-content"],children:[Object(r.jsx)(Ce.b,{path:"/login",render:function(){return Object(r.jsx)(_t,{})}}),Object(r.jsx)(Ce.b,{path:"/profile/:userId?",render:function(){return Object(r.jsx)(qe,{})}}),Object(r.jsx)(Ce.b,{path:"/users",render:function(){return Object(r.jsx)(ft,{})}})]}),Object(r.jsx)(yt,{})]}):Object(r.jsx)(Pe,{})}}]),n}(fe.a.Component),Nt=Object(a.d)(Ce.f,Object(ye.b)((function(e){return{initialized:e.app.initialized}}),{initializeThunkCreator:function(){return function(e){e(w()).then((function(){e({type:se})}))}}}))(Ct),Tt=(n(285),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,287)).then((function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),r(e),a(e),i(e),s(e)}))});be.a.render(Object(r.jsx)(fe.a.StrictMode,{children:Object(r.jsx)(ve.a,{basename:"/training-project-social-network",children:Object(r.jsx)(ye.a,{store:le,children:Object(r.jsx)(Nt,{})})})}),document.getElementById("root")),Tt()},29:function(e,t,n){e.exports={box:"Login_box__1p39G",title:"Login_title__1O1fa",input:"Login_input__STwIP",input_remember:"Login_input_remember__2wXc9",form_error:"Login_form_error__BQziA",button:"Login_button__10PUy"}},34:function(e,t,n){e.exports={"user-list-item":"User_user-list-item__2gn2M","item-img":"User_item-img__2DD_Y","item-description":"User_item-description__3VHWj","item-name":"User_item-name__1hoMC","item-button-wrapper":"User_item-button-wrapper__k0DW0","item-button":"User_item-button__1awVC"}},40:function(e,t,n){e.exports={"app-sidebar":"Navbar_app-sidebar__1E2Il","menu-list":"Navbar_menu-list__3QXBt","menu-item-link":"Navbar_menu-item-link__BZhin","menu-item-link-active":"Navbar_menu-item-link-active__2LAB3"}},41:function(e,t,n){e.exports={"app-header":"Header_app-header__x41mr",logo:"Header_logo__2ovtk","login-block":"Header_login-block__3xgdQ","login-name":"Header_login-name__1e2uw","login-button":"Header_login-button__3556c"}},48:function(e,t,n){e.exports={paginator:"Paginator_paginator__3WQnQ","page-number":"Paginator_page-number__1n9at","page-number-active":"Paginator_page-number-active__1hx0J","page-button":"Paginator_page-button__2vx-F"}},72:function(e,t,n){e.exports={"app-footer":"Footer_app-footer__1ulX7","footer-year":"Footer_footer-year__290fv","footer-copyright":"Footer_footer-copyright__UVfD2"}},91:function(e,t,n){e.exports={"app-wrapper":"App_app-wrapper__2cb_h","app-content":"App_app-content__qrqxs"}},94:function(e,t,n){e.exports={form_control:"FormsControls_form_control__38-he",error:"FormsControls_error__1B0q4"}}},[[286,1,2]]]);
//# sourceMappingURL=main.423e4ddb.chunk.js.map
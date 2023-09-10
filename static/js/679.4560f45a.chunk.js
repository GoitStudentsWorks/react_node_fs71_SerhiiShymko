"use strict";(self.webpackChunkGoose_Track_06_Frontend=self.webpackChunkGoose_Track_06_Frontend||[]).push([[679],{7679:function(n,e,t){t.r(e),t.d(e,{default:function(){return W}});var r,i,o,a=t(9439),d=t(9980),s=t(2791),c=t(6487),l=t(9434),u=t(601),f=t(6123),p=t(2839),y=t(3672),h=t(466),x=t(2891),g=t(5667),m=t(4400),v=t(7762),w=function(n){var e,t=0,r=0,i=0,o=(0,v.Z)(n);try{for(o.s();!(e=o.n()).done;){var a=e.value;"to-do"===a.category&&t++,"in-progress"===a.category&&r++,"done"===a.category&&i++}}catch(d){o.e(d)}finally{o.f()}return{toDo:t,inProgress:r,done:i}},Z=function(n){for(var e=0,t=0,r=Object.values(n);t<r.length;t++){e+=r[t]}return e},M=function(n,e){return Math.round(n/e*100)},k=function(){var n=(0,s.useState)(0),e=(0,a.Z)(n,2),t=e[0],r=e[1];return(0,s.useEffect)((function(){var n=function(){return r(window.innerWidth)};return n(),window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)}}),[]),t},j=t(2553),D=t(184),b=function(n){var e=n.color,t=n.id;return(0,D.jsx)("defs",{children:(0,D.jsxs)("linearGradient",{id:t,x1:"0",y1:"0",x2:"0",y2:"100%",children:[(0,D.jsx)("stop",{offset:"0%",stopColor:"#fff",stopOpacity:0}),(0,D.jsx)("stop",{offset:"100%",stopColor:e,stopOpacity:.8})]})})},T=function(n){var e=n.x,t=n.y,r=n.value,i=n.fill;return(0,D.jsx)("g",{children:(0,D.jsx)("text",{x:e,y:t,fill:i,children:r})})},z=t(168),P=c.ZP.div(r||(r=(0,z.Z)(["\n  display: flex;\n  align-items: center;\n  margin-top: 44px;\n  margin-left: auto;\n  margin-right: auto;\n  width: 307px;\n  height: 413px;\n  font-size: 14px;\n  font-weight: 400;\n  border-radius: 20px;\n  border: 2px solid #e3f3ff;\n\n  @media screen and (min-width: 768px) {\n    width: 640px;\n    height: 424px;\n    padding: 10px 18px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    width: 100%;\n    padding: 10px 26px;\n  }\n"]))),S=c.ZP.div(i||(i=(0,z.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin: 0;\n  padding: 28px 14px;\n  margin-top: 64px;\n  width: 335px;\n  /* height: 684px; */\n  border-radius: 16px;\n  background-color: #fff;\n  background-color: ",";\n\n  @media screen and (min-width: 375px) {\n    width: 335px;\n  }\n\n  @media screen and (min-width: 768px) {\n    align-items: center;\n    width: 704px;\n    /* height: 854px; */\n    padding: 132px 32px;\n  }\n\n  @media screen and (min-width: 1440px) {\n    width: 100%;\n    padding: 134px 113px;\n    margin-top: 32px;\n  }\n"])),(function(n){return n.theme.colors.backgroundAccent})),B=c.ZP.div(o||(o=(0,z.Z)(["\n  display: block;\n\n  @media screen and (min-width: 768px) {\n    width: 100%;\n    margin-left: 100px;\n  }\n"]))),C=t(9098),F=function(){var n=(0,l.v9)(j.Uq),e=(0,c.Fg)(),t=k(),r=(0,l.v9)((function(n){return n.auth.currentDate})),i=(0,C.Z)(r,"yyyy-MM-dd"),o=w(function(n,e){return n.filter((function(n){return n.date===e}))}(n,i)),a=function(n,e){var t=Z(n),r=Z(e);return[{name:"To Do",day:M(n.toDo,t)||0,month:M(e.toDo,r)||0},{name:"In Progress",day:M(n.inProgress,t)||0,month:M(e.inProgress,r)||0},{name:"Done",day:M(n.done,t)||0,month:M(e.done,r)||0}]}(o,w(n));return(0,D.jsx)(P,{children:(0,D.jsx)(u.h,{width:"100%",height:"97%",children:(0,D.jsxs)(f.v,{margin:{top:70,right:14,left:14,bottom:0},data:a,barGap:t<768?8:14,barSize:t<768?22:27,barBorderRadius:5,children:[(0,D.jsx)(p.q,{vertical:!1}),(0,D.jsx)(y.D,{formatter:function(n){return"By "+n.charAt(0).toUpperCase()+n.slice(1)},width:179,height:18,align:t<768?"left":"right",iconType:"circle",wrapperStyle:{fontSize:t<768?14:16,top:t<768?-40:-90,color:e.colors.colorBody}}),(0,D.jsx)(h.K,{dataKey:"name",tick:{fill:e.colors.colorBody},tickMargin:18,tickLine:!1,axisLine:!1}),(0,D.jsx)(x.B,{tickLine:!1,type:"number",domain:[0,100],tickCount:7,tick:{fontWeight:400,fill:e.colors.colorBody},axisLine:!1,tickMargin:25}),(0,D.jsx)(g.u,{}),T({x:22,y:35,value:"Tasks",offset:50,fontWeight:600,fill:e.colors.colorBody}),b({color:"#FFD2DD",id:"linearDay"}),b({color:"#3E85F3",id:"linearMonth"}),(0,D.jsx)(m.$,{dataKey:"day",fill:"url(#linearDay)",radius:8,formatter:function(n){return n},label:{formatter:function(n){return n+"%"},fill:e.colors.colorBody,fontSize:t<768?12:16,position:"top",weight:500}}),(0,D.jsx)(m.$,{dataKey:"month",fill:"url(#linearMonth)",radius:8,formatter:function(n){return n},label:{formatter:function(n){return n+"%"},fill:e.colors.colorBody,fontSize:t<768?12:16,position:"top",weight:500}})]})})})},L=t(1941),O=t(9105),_=t(9365),E=t(3629),G=t(4565),I=t(4888),K=t(8427),q=t(3541),U=t(4217),W=function(){var n=(0,l.I0)(),e=(0,l.v9)(U.VI),t=(0,C.Z)(new Date(e),"yyyy-MM-dd"),r=(0,C.Z)(e,"yyyy-MM");(0,s.useEffect)((function(){n((0,K.Jv)(r))}),[n,r]);var i=(0,s.useState)("month"),o=(0,a.Z)(i,2),c=o[0],u=o[1],f=(0,s.useState)(!1),p=(0,a.Z)(f,2),y=p[0],h=p[1],x=(0,C.Z)(e,"MMMM yyyy"),g=(0,C.Z)(e,"yyyy-MM-dd"),m=(0,L.Z)(x,"MMMM yyyy",new Date),v=(0,L.Z)(g,"yyyy-MM-dd",new Date),w=(0,_.Z)({start:(0,E.Z)(m,{weekStartsOn:1}),end:(0,G.Z)((0,I.Z)(m),{weekStartsOn:1})});return(0,D.jsxs)(S,{children:[(0,D.jsx)(B,{children:(0,D.jsx)(d.d,{dayInterval:w,onNext:function(){if("day"===c){var e=(0,O.Z)(v,{days:1}).getTime();n((0,q.vz)(e))}else{var t=(0,O.Z)(v,{months:1}).getTime();n((0,q.vz)(t))}},onPrev:function(){if("day"===c){var e=(0,O.Z)(v,{days:-1}).getTime();n((0,q.vz)(e))}else{var t=(0,O.Z)(v,{months:-1}).getTime();n((0,q.vz)(t))}},dateToday:x,onClickDate:function(e){var t=e.currentTarget.dataset.day.split("-"),r=new Date(t[0],t[1]-1,t[2]).getTime();n((0,q.vz)(r)),h(!1)},setPeriodType:u,activePeriod:c,setOpen:h,open:y})}),(0,D.jsx)(F,{currentDate:t})]})}},2553:function(n,e,t){t.d(e,{Uq:function(){return r}});var r=function(n){return n.tasks.items}}}]);
//# sourceMappingURL=679.4560f45a.chunk.js.map
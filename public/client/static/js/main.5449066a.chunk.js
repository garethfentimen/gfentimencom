(this["webpackJsonpafo-frontend"]=this["webpackJsonpafo-frontend"]||[]).push([[0],{275:function(e,t,a){},277:function(e,t,a){},278:function(e,t,a){},283:function(e,t,a){},284:function(e,t,a){},285:function(e,t,a){},308:function(e,t,a){},309:function(e,t,a){},310:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),o=a.n(c),l=(a(275),a(20)),i=a.n(l),s=a(31),u=a(17),m=a(18),d=(a(277),function(e){var t=e.children,a=e.green,n=e.onClick,c=e.primary,o=e.lg,l=e.link,i="button ";return i+=c?"primary-btn":"",i+=e.secondary?"secondary-btn":"",i+=a?"green-btn":"",i+=o?" lg-btn":" md-btn",r.a.createElement("a",{href:l,className:i,onClick:n},t)});d.default={link:""};var f=d,g=(a(278),a(49));function p(e){var t="; ".concat(document.cookie).split("; ".concat(e,"="));if(2===t.length)return t.pop().split(";").shift()}var h={"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+p("token")};var b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=Object(n.useState)(a),c=Object(u.a)(r,2),o=c[0],l=c[1],m=Object(n.useState)(e),d=Object(u.a)(m,2),f=d[0],p=d[1],b=Object(n.useState)({}),v=Object(u.a)(b,2),E=v[0],y=v[1];return Object(n.useEffect)((function(){Object(s.a)(i.a.mark((function e(){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o){e.next=15;break}return e.prev=1,e.next=4,fetch("http://localhost:4000/graphql",{method:"POST",headers:h,body:JSON.stringify({query:f})});case 4:return a=e.sent,e.next=7,a.json();case 7:(n=e.sent)&&y(t?function(e){return Object(g.a)(Object(g.a)({},e),{loading:!1,data:n.data[t]})}:function(e){return Object(g.a)(Object(g.a)({},e),{loading:!1,data:n.data})}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),y((function(t){return Object(g.a)(Object(g.a)({},t),{loading:!1,data:null,error:e.t0.message})}));case 14:l(!1);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})))()}),[o]),console.log(E),[E.data,E.loading,E.error,l,p]},v=a(252),E=a.n(v);function y(e,t,a){var n=new Date,r=E()(n).format("YYYY-MM-DD");return"mutation { createGameTeam(record: {"+"teamId: ".concat(t?t.teamId:"",",")+"userId: ".concat(a?a.userId:"",", ")+'startDate: "'.concat(r,'", ')+"currentLeagueId: ".concat(e)+"}) {\n        recordId\n        record {\n            teamId\n        }\n        error {\n            __typename\n        }\n    }}"}var O=r.a.createContext("user"),I=function(){var e,t=Object(m.f)(),a=Object(n.useContext)(O),c=b((e=a?a.userId:null)?"query { gameTeams(filter: "+"{ userId: ".concat(e,"}) {")+"teamId\n                    userId\n                    startDate\n                    endDate\n                    currentLeagueId\n                }}":"","gameTeams"),o=Object(u.a)(c,3),l=o[0],i=o[1],s=o[2];return l&&!s&&t.push("/clubhouse/"+l.teamId),!i&&r.a.createElement("div",{className:"app-start"},r.a.createElement("div",{className:"heading"},r.a.createElement("div",{className:"text-logo-left"},r.a.createElement("img",{src:"LogoFFOText.svg",className:"text-logo",alt:"logo"})),r.a.createElement("div",{className:"text"},"Welcome to Fantasy Football Owner ",document.cookie.userName),r.a.createElement("div",{className:"text-logo-right"},r.a.createElement("img",{src:"LogoFFOText.svg",className:"text-logo",alt:"logo"}))),r.a.createElement("section",{className:"app-start-action"},r.a.createElement("span",null,"This is a Fantasy Football game based on real events/data"),r.a.createElement("span",null,"Manager transitions, player crises, financial ruin?! This is fantasy football like no other."),r.a.createElement("span",null,"Legal notice: this is a non-comercial/amateur game. Players/users do not pay for any service."),r.a.createElement(f,{green:!0,lg:!0,onClick:function(){t.push("/new")}},"Start new game")))},j=a(332),S=(0,a(160).createMuiTheme)({palette:{primary:{main:"#69bb31"},secondary:{main:"#8f214d"}}}),w=a.p+"static/media/bgPattern.42364d20.svg",x=a(162);a(283);function T(){var e=Object(m.g)("teamId");return r.a.createElement("div",{style:{position:"absolute"}},"clubhouse for team: ",e.teamId)}var N=a(117),k=function e(){Object(N.a)(this,e)};k.getUsersFromId=function(e){return new Promise((function(t,a){return fetch("http://localhost:4000/graphql",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+p("token")},body:JSON.stringify({query:"query getUsers {\n                    users(filter: { twitterId: ".concat(e," }) {\n                      screenName\n                      name\n                      location\n                      authLevel\n                      userId\n                    }\n                  }")})}).then((function(e){return e.json()})).then((function(e){t(e.data.users)})).catch((function(e){a(e)}))}))},k.getUserInfo=function(){return new Promise((function(e,t){e({userId:1234})}))},k.createUser=function(e){var t=e.name,a=e.screenName,n=e.location,r=e.userId;return new Promise((function(e,c){return fetch("http://localhost:4000/graphql",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+p("token")},body:JSON.stringify({query:"mutation addUser { \n                    createUser(record:{ twitterId: ".concat(r,', screenName: "').concat(a,'", name: "').concat(t,'", location: "').concat(n,'", authLevel: PLAYER}) {\n                    recordId,\n                    record {\n                      name\n                      userId\n                      screenName\n                      location\n                      authLevel\n                    },\n                    error {\n                      message\n                    }\n                  }\n                }')})}).then((function(e){return e.json()})).then((function(t){console.log(t.data),e(t.data)})).catch((function(e){c(e)}))}))};a(347),a(240),a(343),a(239);var C=a(333),F=a(335),A=a(334),P=a(258),q=a.n(P),L=a(102),B=function e(){Object(N.a)(this,e)};B.getTeamsForLeague=function(e){return new Promise((function(t,a){return fetch("http://localhost:4000/graphql",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+p("token")},body:JSON.stringify({query:"query { teamsInCompetition(competitionId: ".concat(e,") {")+"teamId\n                    standing\n                    competitionId\n                }}"})}).then((function(e){return e.json()})).then((function(e){console.log(e.data),t(e.data.teamsInCompetition)})).catch((function(e){a(e)}))}))},B.getTeamFromTeamId=function(e){return new Promise((function(t,a){return fetch("http://localhost:4000/graphql",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+p("token")},body:JSON.stringify({query:"query { getTeam(filter: { teamId: ".concat(e," }) {")+"name \n                     logo\n                     _id\n                     ground {\n                        name\n                        capacity\n                        city\n                      }\n                }}"})}).then((function(e){return e.json()})).then((function(e){console.log(e.data.getTeam);var a=e.data.getTeam;t({name:a.name,_id:a._id,logo:a.logo,ground:a.ground.name,capacity:a.ground.capacity,city:a.ground.city})})).catch((function(e){a(null,e)}))}))};a(284);var D=function(e){var t=e.children;return r.a.createElement("div",{className:"loading"},r.a.createElement("div",{className:"loading-text-container"},t||r.a.createElement("div",null,"loading...")),r.a.createElement("div",{className:"app-logo-container"},r.a.createElement("img",{src:"MainLogo.svg",className:"app-logo-loading",alt:"ball-logo"})))};var _=f,R=a(349),G=a(345),U=a(344),M=a(336),J=a(257),Y=a.n(J);a(285);function z(e){return W.apply(this,arguments)}function W(){return(W=Object(s.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:4000/graphql",{method:"POST",headers:h,body:JSON.stringify({query:"query { coaches(filter: { currentTeamId: ".concat(t," }) {")+"firstName\n                    lastName\n                    knownAs\n                    career {\n                        teamId,\n                        start,\n                        end\n                    }\n                }}"})});case 3:return a=e.sent,e.next=6,a.json();case 6:return n=e.sent,e.abrupt("return",n.data.coaches[0]);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}var H=a(118),K=function(e){var t=e.broadcastingRevenue,a=[],n=function(e,t){if(e){var n=parseFloat(e);return a.push({angle:n,label:"\xa3".concat(n.toFixed(1),"m"),subLabel:"".concat(t)}),n}return 0},c=(n(t.equalShare,"Equal Share")+n(t.basicAward,"Basic Award")+n(t.solidarity,"Solidarity")+n((t.minimumFeaturedGames+1)*t.facilityFeePerGame,"Featured Game Facility Fees")+n(t.overseasPaymentMin,"Overseas")+n(t.centralCommercial,"Central Commercial")).toFixed(1);return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,"Minimum Estimated Broadcasting Revenue: \xa3",c,"m"),a.length>0||"0.0"===a[0].value?r.a.createElement(H.a,{colorType:"linear",colorDomain:[0,2],data:a,width:300,height:250,showLabels:!0,labelsAboveChildren:!0,className:"broadcasting-radial"}):r.a.createElement("div",null,"No information found for broadcasting"))};function V(e){return $.apply(this,arguments)}function $(){return($=Object(s.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://localhost:4000/graphql",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+p("token")},body:JSON.stringify({query:"query { broadcastRevenue(filter: { competitionId: ".concat(t," }) {")+"equalShare\n                    basicAward\n                    solidarity\n                    meritStart\n                    centralCommercial\n                    overseasPaymentMin\n                    minimumFeaturedGames\n                    facilityFeePerGame\n                }}"})});case 3:return a=e.sent,e.next=6,a.json();case 6:return n=e.sent,e.abrupt("return",n.data.broadcastRevenue[0]);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function Q(e,t){return"query { attendances(filter: "+"{ competitionId: ".concat(e,", teamId: ").concat(t," }) {")+"attendance\n                    seasonTickets\n                }}"}var X=function(e){var t=e.capacity,a=e.season,c=e.teamId,o=b(Q(a.leagueId,c),"attendances"),l=Object(u.a)(o,5),i=l[0],s=l[1],m=l[2],d=l[3],f=l[4];console.log(i,s,m),Object(n.useEffect)((function(){f(Q(a.leagueId,c)),d(!0)}),[a.leagueId,d,f,c]);var g=i&&i.length?i[0]:null,p=g?g.seasonTickets:0,h=g?g.attendance-p:0,v=g?t-g.attendance:0;return s?r.a.createElement(D,null):g&&!m?r.a.createElement("div",null,r.a.createElement(U.a,{item:!0,xs:8},r.a.createElement("div",null,"Average attendance: ",g.attendance.toLocaleString("en-GB")),r.a.createElement("div",null,"For ",a.name," ",new Date(a.start).getFullYear(),"/",new Date(a.end).getFullYear()),r.a.createElement(H.a,{colorType:"linear",colorDomain:[0,3],data:[{angle:h,label:"Matchday tickets: ".concat(h.toLocaleString("en-GB"))},{angle:p,label:"Season tickets: ".concat(p.toLocaleString("en-GB"))},{angle:v,label:"Unsold: ".concat(v.toLocaleString("en-GB"))}],width:300,height:250,showLabels:!0,labelsAboveChildren:!0,className:"matchday-radial"}))):r.a.createElement("div",null,r.a.createElement("span",null,"No data for ",ee(a)))},Z=r.a.createContext("competition");function ee(e){return"".concat(e.competitionName,": ").concat(new Date(e.start).getFullYear(),"/").concat(new Date(e.end).getFullYear())}var te=function(e){var t,a=e.broadcastingRevenue,c=e.onBack,o=e.onTeamSelect,l=e.teamInfo,m=Object(n.useContext)(Z),d=Object(n.useState)(null),f=Object(u.a)(d,2),g=f[0],p=f[1],h=Object(n.useState)(null),v=Object(u.a)(h,2),E=v[0],y=v[1],O=b((t=l.teamId,"query { "+"leagueCompetitionsForTeam(teamId:".concat(t,") { ")+"teamId\n            competitionId\n            leagueId\n            year\n            start\n            end\n            competitionName\n    }}"),"leagueCompetitionsForTeam"),I=Object(u.a)(O,2),j=I[0],S=I[1];Object(n.useEffect)((function(){Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z(l.teamId);case 2:t=e.sent,p(t);case 4:case"end":return e.stop()}}),e)})))()}),[l.teamId]),Object(n.useEffect)((function(){Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:!S&&j&&j.length&&(t=j.find((function(e){return e.leagueId===m.leagueId})),y(t||j[0]));case 1:case"end":return e.stop()}}),e)})))()}),[m.leagueId,j,S]);var w=!S&&E&&E.leagueId?r.a.createElement(R.a,{value:E.leagueId,onChange:function(e){return y(j.find((function(t){return t.leagueId===e.target.value})))}},j.map((function(e){return r.a.createElement(G.a,{key:e.leagueId,value:e.leagueId},ee(e))}))):null;return r.a.createElement(r.a.Fragment,null,g?r.a.createElement(U.a,{container:!0},r.a.createElement(U.a,{container:!0,justify:"space-around"},r.a.createElement(U.a,{item:!0},r.a.createElement(M.a,{variant:"contained",color:"secondary",onClick:function(){return c()},startIcon:r.a.createElement(Y.a,null)},"Back")),r.a.createElement(U.a,{item:!0},r.a.createElement(U.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},r.a.createElement("grid",{item:!0},r.a.createElement("h3",{className:"text-center"},l.name," Financial Analysis")),r.a.createElement("grid",{item:!0},w)),r.a.createElement(U.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},r.a.createElement("img",{src:l.logo,className:"team-logo",alt:"".concat(l.name," logo")})),r.a.createElement("div",{className:"text-center"},l.ground,", ",l.city),r.a.createElement("div",{className:"text-center"},"Capacity: ",l.capacity.toLocaleString("en-GB")),void 0!==g&&r.a.createElement("div",{className:"text-center"},"Current Manager: ",g.knownAs||g.firstName+" "+g.lastName)),r.a.createElement(U.a,{item:!0},r.a.createElement(K,{broadcastingRevenue:a})),r.a.createElement(U.a,{item:!0},E?r.a.createElement(X,{capacity:l.capacity,teamId:l.teamId,season:E}):r.a.createElement(D,null,r.a.createElement("div",null,"Loading Matchday Information")))),r.a.createElement(U.a,{container:!0,direction:"row",justify:"space-around",alignItems:"right"},r.a.createElement(U.a,{item:!0}),r.a.createElement(U.a,{item:!0},r.a.createElement(_,{lg:!0,green:!0,onClick:function(){return o()}},"Select this team")))):r.a.createElement(D,null,r.a.createElement("div",null,"Finding team information")))},ae=(a(308),a(337)),ne=a(338),re=a(339),ce=function(e){e.competitionId;var t=e.onAnalyseTeam,a=e.teamInfo,n=a.name;return r.a.createElement(ae.a,{className:"team-card"},r.a.createElement(re.a,null,r.a.createElement("div",{className:"team-content"},r.a.createElement("img",{src:a.logo,alt:"".concat(n," logo")}))),r.a.createElement(ne.a,null,r.a.createElement(_,{onClick:function(){return t(a)},green:!0},"Analyse ",n)))},oe=function(e){var t=e.onTeamSelect,a=Object(n.useContext)(Z),c=Object(n.useContext)(O),o=a.leagueId,l=function(e,t){var a=Object(n.useState)((function(){try{var a=window.localStorage.getItem(e);return a?JSON.parse(a):t}catch(q){return console.log(q),t}})),r=Object(u.a)(a,2),c=r[0],o=r[1];return[c,function(t){try{var a=t instanceof Function?t(c):t;o(a),window.localStorage.setItem(e,JSON.stringify(a))}catch(q){console.log(q)}}]}("teamsByCompetitionId",[]),m=Object(u.a)(l,2),d=m[0],f=m[1],p=Object(n.useState)([]),h=Object(u.a)(p,2),v=h[0],E=h[1],I=Object(n.useState)(null),j=Object(u.a)(I,2),S=j[0],w=j[1],x=Object(n.useState)(null),T=Object(u.a)(x,2),N=T[0],k=T[1],C=b(y(a.leagueId,S,c),"createGameTeam",!1),F=Object(u.a)(C,5),A=F[0],P=F[1],q=F[2],_=F[3],R=F[4];return Object(n.useEffect)((function(){Object(s.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=d[o])){e.next=5;break}E(t),e.next=9;break;case 5:return e.next=7,B.getTeamsForLeague(o);case 7:a=e.sent,Promise.all(a.map(function(){var e=Object(s.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.getTeamFromTeamId(t.teamId);case 2:return(a=e.sent).teamId=t.teamId,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())).then((function(e){E(e),f(Object(g.a)(Object(g.a)({},d),{},Object(L.a)({},o,e)))}));case 9:case"end":return e.stop()}}),e)})))()}),[]),Object(n.useEffect)((function(){Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!S){e.next=5;break}return e.next=3,V(o);case 3:t=e.sent,k(t);case 5:case"end":return e.stop()}}),e)})))()}),[S]),Object(n.useEffect)((function(){A&&!q&&t(A.record.teamId)}),[A]),v.length>0?S&&N?r.a.createElement(r.a.Fragment,null,r.a.createElement(te,{onBack:function(){return w(null)},broadcastingRevenue:N,teamInfo:S,onTeamSelect:function(){R(y(a.leagueId,S,c)),_(!0)}}),P&&r.a.createElement(D,null,"Please wait..."),q&&r.a.createElement("div",null,"Error selecting team: ",q)):r.a.createElement("div",{className:"team-cards"},v.map((function(e){return r.a.createElement(ce,{key:e.teamId,onAnalyseTeam:function(e){return w(e)},teamInfo:e})}))):r.a.createElement(D,null)},le=(a(309),function(e){var t=e.competitions,a=e.onTeamSelect,c=Object(n.useState)("men"),o=Object(u.a)(c,2),l=o[0],i=(o[1],Object(n.useState)(null)),s=Object(u.a)(i,2),m=s[0],d=s[1];return t.length&&r.a.createElement("section",{className:"leagues"},r.a.createElement("div",{className:"pad-all-sm marg-bottom-sm flex",style:{color:"#fff",fontSize:"1.2rem"}},r.a.createElement("span",{className:"text-center",style:{width:"90%"}},"Take control! Select a team to analyse for financial viability."),r.a.createElement("span",{className:"align-right"},"Budget: 7m")),"men"===l&&t.filter((function(e){return!e.name.includes("WSL")&&(null===m||m===e.leagueId)})).sort((function(e,t){return e.tier>t.tier?1:-1})).map((function(e){return r.a.createElement(C.a,{key:e.leagueId,onChange:function(t,a){d(a?e.leagueId:null)},className:"team-select-acc",TransitionProps:{unmountOnExit:!0}},r.a.createElement(F.a,{expandIcon:r.a.createElement(q.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},e.name),r.a.createElement(A.a,null,r.a.createElement(Z.Provider,{value:e},r.a.createElement(oe,{onTeamSelect:a}))))})))}),ie=function(){var e="query { competitions(filter: { AND: ["+'{ isCurrent: true }, { country: "'.concat("England",'" },')+"{ type: LEAGUE }]}){ name leagueId isCurrent tier logo country start}}",t=b(e,"competitions"),a=Object(u.a)(t,3),n=a[0],c=a[1],o=a[2],l=Object(m.f)();return!n||c||o?c?o?r.a.createElement("div",null,"Eek, something went wrong"):r.a.createElement(D,null,o):null:r.a.createElement(le,{competitions:n,onTeamSelect:function(e){l.push("/clubhouse/"+e)}})};var se=function(){var e=Object(n.useState)(null),t=Object(u.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){Object(s.a)(i.a.mark((function e(){var t,a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.getUserInfo();case 2:if(t=e.sent){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,k.getUsersFromId(parseInt(t.userId));case 7:if(0!==(a=e.sent).length){e.next=15;break}return e.next=11,k.createUser(t);case 11:(n=e.sent).error.message?console.error("unable to create user: ",n.error.message):c(n.record),e.next=16;break;case 15:c(a[0]);case 16:case"end":return e.stop()}}),e)})))()}),[]),a&&r.a.createElement(O.Provider,{value:a},r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"background"},r.a.createElement("img",{alt:"background pattern",src:w})),r.a.createElement(j.a,{theme:S},r.a.createElement(x.a,{basename:"production"===Object({NODE_ENV:"production",PUBLIC_URL:"/public/client",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_GRAPH_SERVER:"http://localhost:4000/graphql"})?"/ffo":"/"},r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/"},r.a.createElement(I,null)),r.a.createElement(m.a,{exact:!0,path:"/new"},r.a.createElement(ie,null)),r.a.createElement(m.a,{exact:!0,path:"/clubhouse/:teamId"},r.a.createElement(T,null)))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[310,1,2]]]);
//# sourceMappingURL=main.5449066a.chunk.js.map
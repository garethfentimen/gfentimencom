(this["webpackJsonpafo-frontend"]=this["webpackJsonpafo-frontend"]||[]).push([[0],{275:function(e,t,a){},277:function(e,t,a){},278:function(e,t,a){},283:function(e,t,a){},284:function(e,t,a){},285:function(e,t,a){},308:function(e,t,a){},309:function(e,t,a){},310:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),o=a.n(c),l=(a(275),a(18)),i=a.n(l),s=a(28),u=a(16),m=a(19),d=(a(277),function(e){var t=e.children,a=e.green,n=e.onClick,c=e.primary,o=e.lg,l=e.link,i="button ";return i+=c?"primary-btn":"",i+=e.secondary?"secondary-btn":"",i+=a?"green-btn":"",i+=o?" lg-btn":" md-btn",r.a.createElement("a",{href:l,className:i,onClick:n},t)});d.default={link:""};var f=d,p=(a(278),a(49));function g(e){var t="; ".concat(document.cookie).split("; ".concat(e,"="));if(2===t.length)return t.pop().split(";").shift()}var h={"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+g("token")};var b=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=Object(n.useState)(a),c=Object(u.a)(r,2),o=c[0],l=c[1],m=Object(n.useState)(e),d=Object(u.a)(m,2),f=d[0],g=d[1],b=Object(n.useState)({}),v=Object(u.a)(b,2),E=v[0],y=v[1];return Object(n.useEffect)((function(){Object(s.a)(i.a.mark((function e(){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o){e.next=15;break}return e.prev=1,e.next=4,fetch("https://afcmbackend.herokuapp.com/graphql",{method:"POST",headers:h,body:JSON.stringify({query:f})});case 4:return a=e.sent,e.next=7,a.json();case 7:(n=e.sent)&&y(t?function(e){return Object(p.a)(Object(p.a)({},e),{loading:!1,data:n.data[t]})}:function(e){return Object(p.a)(Object(p.a)({},e),{loading:!1,data:n.data})}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),y((function(t){return Object(p.a)(Object(p.a)({},t),{loading:!1,data:null,error:e.t0.message})}));case 14:l(!1);case 15:case"end":return e.stop()}}),e,null,[[1,11]])})))()}),[o]),[E.data,E.loading,E.error,l,g]},v=a(252),E=a.n(v);function y(e,t,a){var n=new Date,r=E()(n).format("YYYY-MM-DD");return"mutation { createGameTeam(record: {"+"teamId: ".concat(t?t.teamId:"",",")+"userId: ".concat(a?a.userId:"",", ")+'startDate: "'.concat(r,'", ')+"currentLeagueId: ".concat(e)+"}) {\n        recordId\n        record {\n            teamId\n        }\n        error {\n            __typename\n        }\n    }}"}var I=r.a.createContext("user"),j=function(){var e,t=Object(m.f)(),a=Object(n.useContext)(I),c=b((e=a?a.userId:null)?"query { gameTeams(filter: "+"{ userId: ".concat(e,"}) {")+"teamId\n                    userId\n                    startDate\n                    endDate\n                    currentLeagueId\n                }}":"","gameTeams"),o=Object(u.a)(c,3),l=o[0],i=o[1],s=o[2];return l&&!s&&t.push("/clubhouse/"+l.teamId),!i&&r.a.createElement("div",{className:"app-start"},r.a.createElement("div",{className:"heading"},r.a.createElement("div",{className:"text-logo-left"},r.a.createElement("img",{src:"/public/client/LogoFFOText.svg",className:"text-logo",alt:"logo"})),r.a.createElement("div",{className:"text"},"Welcome to Fantasy Football Owner ",document.cookie.userName),r.a.createElement("div",{className:"text-logo-right"},r.a.createElement("img",{src:"/public/client/LogoFFOText.svg",className:"text-logo",alt:"logo"}))),r.a.createElement("section",{className:"app-start-action"},r.a.createElement("span",null,"This is a Fantasy Football game based on real events/data"),r.a.createElement("span",null,"Manager transitions, player crises, financial ruin?! This is fantasy football like no other."),r.a.createElement("span",null,"Legal notice: this is a non-comercial/amateur game. Players/users do not pay for any service."),r.a.createElement(f,{green:!0,lg:!0,onClick:function(){t.push("/new")}},"Start new game")))},O=a(332),k=(0,a(160).createMuiTheme)({palette:{primary:{main:"#69bb31"},secondary:{main:"#8f214d"}}}),w=a.p+"static/media/bgPattern.42364d20.svg",x=a(162);a(283);function S(){var e=Object(m.g)("teamId");return r.a.createElement("div",{style:{position:"absolute"}},"clubhouse for team: ",e.teamId)}var N=a(117);var T=function e(){Object(N.a)(this,e)};T.getUsersFromTwitterId=function(e){return new Promise((function(t,a){return fetch("https://afcmbackend.herokuapp.com/graphql",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+g("token")},body:JSON.stringify({query:"query getUsers {\n                    users(filter: { twitterId: ".concat(e," }) {\n                      screenName\n                      name\n                      location\n                      authLevel\n                      userId\n                    }\n                  }")})}).then((function(e){return e.json()})).then((function(e){t(e.data.users)})).catch((function(e){a(e)}))}))},T.getUserInfo=function(){return new Promise((function(e,t){fetch("https://afcmbackend.herokuapp.com/graphql".replace("graphql","api/user"),{method:"GET",headers:{Accept:"application/json",Authorization:"Bearer "+g("token")}}).then((function(e){return e.json()})).then((function(t){console.info&&console.info(t.user),e(t.user)})).catch((function(e){t(e)}))}))},T.createUser=function(e){var t=e.name,a=e.screenName,n=e.ffoUserId,r=e.location,c=e.userId;return new Promise((function(e,o){return fetch("https://afcmbackend.herokuapp.com/graphql",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+g("token")},body:JSON.stringify({query:"mutation addUser { \n                    createUser(record:{ userId: ".concat(n,", twitterId: ").concat(c,', screenName: "').concat(a,'", name: "').concat(t,'", location: "').concat(r,'", authLevel: PLAYER}) {\n                    recordId,\n                    record {\n                      name\n                      userId\n                      screenName\n                      location\n                      authLevel\n                    },\n                    error {\n                      message\n                    }\n                  }\n                }')})}).then((function(e){return e.json()})).then((function(t){console.log(t.data.createUser),e(t.data.createUser)})).catch((function(e){o(e)}))}))};a(347),a(240),a(343),a(239);var F=a(333),C=a(335),q=a(334),A=a(258),L=a.n(A),P=a(102),B=function e(){Object(N.a)(this,e)};B.getTeamsForLeague=function(e){return new Promise((function(t,a){return fetch("https://afcmbackend.herokuapp.com/graphql",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+g("token")},body:JSON.stringify({query:"query { teamsInCompetition(competitionId: ".concat(e,") {")+"teamId\n                    standing\n                    competitionId\n                }}"})}).then((function(e){return e.json()})).then((function(e){console.log(e.data),t(e.data.teamsInCompetition)})).catch((function(e){a(e)}))}))},B.getTeamFromTeamId=function(e){return new Promise((function(t,a){return fetch("https://afcmbackend.herokuapp.com/graphql",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+g("token")},body:JSON.stringify({query:"query { getTeam(filter: { teamId: ".concat(e," }) {")+"name \n                     logo\n                     _id\n                     ground {\n                        name\n                        capacity\n                        city\n                      }\n                }}"})}).then((function(e){return e.json()})).then((function(e){console.log(e.data.getTeam);var a=e.data.getTeam;t({name:a.name,_id:a._id,logo:a.logo,ground:a.ground.name,capacity:a.ground.capacity,city:a.ground.city})})).catch((function(e){a(null,e)}))}))};a(284);var U=function(e){var t=e.children;return r.a.createElement("div",{className:"loading"},r.a.createElement("div",{className:"loading-text-container"},t||r.a.createElement("div",null,"loading...")),r.a.createElement("div",{className:"app-logo-container"},r.a.createElement("img",{src:"MainLogo.svg",className:"app-logo-loading",alt:"ball-logo"})))};var D=f,G=a(349),M=a(345),J=a(344),R=a(336),Y=a(257),z=a.n(Y);a(285);function _(e){return W.apply(this,arguments)}function W(){return(W=Object(s.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://afcmbackend.herokuapp.com/graphql",{method:"POST",headers:h,body:JSON.stringify({query:"query { coaches(filter: { currentTeamId: ".concat(t," }) {")+"firstName\n                    lastName\n                    knownAs\n                    career {\n                        teamId,\n                        start,\n                        end\n                    }\n                }}"})});case 3:return a=e.sent,e.next=6,a.json();case 6:return n=e.sent,e.abrupt("return",n.data.coaches[0]);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}var $=a(118),H=function(e){var t=e.broadcastingRevenue,a=[],n=function(e,t){if(e){var n=parseFloat(e);return a.push({angle:n,label:"\xa3".concat(n.toFixed(1),"m"),subLabel:"".concat(t)}),n}return 0},c=(n(t.equalShare,"Equal Share")+n(t.basicAward,"Basic Award")+n(t.solidarity,"Solidarity")+n((t.minimumFeaturedGames+1)*t.facilityFeePerGame,"Featured Game Facility Fees")+n(t.overseasPaymentMin,"Overseas")+n(t.centralCommercial,"Central Commercial")).toFixed(1);return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,"Minimum Estimated Broadcasting Revenue: \xa3",c,"m"),a.length>0||"0.0"===a[0].value?r.a.createElement($.a,{colorType:"linear",colorDomain:[0,2],data:a,width:300,height:250,showLabels:!0,labelsAboveChildren:!0,className:"broadcasting-radial"}):r.a.createElement("div",null,"No information found for broadcasting"))};function K(e){return Q.apply(this,arguments)}function Q(){return(Q=Object(s.a)(i.a.mark((function e(t){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://afcmbackend.herokuapp.com/graphql",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+g("token")},body:JSON.stringify({query:"query { broadcastRevenue(filter: { competitionId: ".concat(t," }) {")+"equalShare\n                    basicAward\n                    solidarity\n                    meritStart\n                    centralCommercial\n                    overseasPaymentMin\n                    minimumFeaturedGames\n                    facilityFeePerGame\n                }}"})});case 3:return a=e.sent,e.next=6,a.json();case 6:return n=e.sent,e.abrupt("return",n.data.broadcastRevenue[0]);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))).apply(this,arguments)}function V(e,t){return"query { attendances(filter: "+"{ competitionId: ".concat(e,", teamId: ").concat(t," }) {")+"attendance\n                    seasonTickets\n                }}"}var X=function(e){var t=e.capacity,a=e.season,c=e.teamId,o=b(V(a.leagueId,c),"attendances"),l=Object(u.a)(o,5),i=l[0],s=l[1],m=l[2],d=l[3],f=l[4];console.log(i,s,m),Object(n.useEffect)((function(){f(V(a.leagueId,c)),d(!0)}),[a.leagueId,d,f,c]);var p=i&&i.length?i[0]:null,g=p?p.seasonTickets:0,h=p?p.attendance-g:0,v=p?t-p.attendance:0;return s?r.a.createElement(U,null):p&&!m?r.a.createElement("div",null,r.a.createElement(J.a,{item:!0,xs:8},r.a.createElement("div",null,"Average attendance: ",p.attendance.toLocaleString("en-GB")),r.a.createElement("div",null,"For ",a.name," ",new Date(a.start).getFullYear(),"/",new Date(a.end).getFullYear()),r.a.createElement($.a,{colorType:"linear",colorDomain:[0,3],data:[{angle:h,label:"Matchday tickets: ".concat(h.toLocaleString("en-GB"))},{angle:g,label:"Season tickets: ".concat(g.toLocaleString("en-GB"))},{angle:v,label:"Unsold: ".concat(v.toLocaleString("en-GB"))}],width:300,height:250,showLabels:!0,labelsAboveChildren:!0,className:"matchday-radial"}))):r.a.createElement("div",null,r.a.createElement("span",null,"No data for ",ee(a)))},Z=r.a.createContext("competition");function ee(e){return"".concat(e.competitionName,": ").concat(new Date(e.start).getFullYear(),"/").concat(new Date(e.end).getFullYear())}var te=function(e){var t,a=e.broadcastingRevenue,c=e.onBack,o=e.onTeamSelect,l=e.teamInfo,m=Object(n.useContext)(Z),d=Object(n.useState)(null),f=Object(u.a)(d,2),p=f[0],g=f[1],h=Object(n.useState)(null),v=Object(u.a)(h,2),E=v[0],y=v[1],I=b((t=l.teamId,"query { "+"leagueCompetitionsForTeam(teamId:".concat(t,") { ")+"teamId\n            competitionId\n            leagueId\n            year\n            start\n            end\n            competitionName\n    }}"),"leagueCompetitionsForTeam"),j=Object(u.a)(I,2),O=j[0],k=j[1];Object(n.useEffect)((function(){Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(l.teamId);case 2:t=e.sent,g(t);case 4:case"end":return e.stop()}}),e)})))()}),[l.teamId]),Object(n.useEffect)((function(){Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:!k&&O&&O.length&&(t=O.find((function(e){return e.leagueId===m.leagueId})),y(t||O[0]));case 1:case"end":return e.stop()}}),e)})))()}),[m.leagueId,O,k]);var w=!k&&E&&E.leagueId?r.a.createElement(G.a,{value:E.leagueId,onChange:function(e){return y(O.find((function(t){return t.leagueId===e.target.value})))}},O.map((function(e){return r.a.createElement(M.a,{key:e.leagueId,value:e.leagueId},ee(e))}))):null;return r.a.createElement(r.a.Fragment,null,p?r.a.createElement(J.a,{container:!0},r.a.createElement(J.a,{container:!0,justify:"space-around"},r.a.createElement(J.a,{item:!0},r.a.createElement(R.a,{variant:"contained",color:"secondary",onClick:function(){return c()},startIcon:r.a.createElement(z.a,null)},"Back")),r.a.createElement(J.a,{item:!0},r.a.createElement(J.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},r.a.createElement("grid",{item:!0},r.a.createElement("h3",{className:"text-center"},l.name," Financial Analysis")),r.a.createElement("grid",{item:!0},w)),r.a.createElement(J.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},r.a.createElement("img",{src:l.logo,className:"team-logo",alt:"".concat(l.name," logo")})),r.a.createElement("div",{className:"text-center"},l.ground,", ",l.city),r.a.createElement("div",{className:"text-center"},"Capacity: ",l.capacity.toLocaleString("en-GB")),void 0!==p&&r.a.createElement("div",{className:"text-center"},"Current Manager: ",p.knownAs||p.firstName+" "+p.lastName)),r.a.createElement(J.a,{item:!0},r.a.createElement(H,{broadcastingRevenue:a})),r.a.createElement(J.a,{item:!0},E?r.a.createElement(X,{capacity:l.capacity,teamId:l.teamId,season:E}):r.a.createElement(U,null,r.a.createElement("div",null,"Loading Matchday Information")))),r.a.createElement(J.a,{container:!0,direction:"row",justify:"space-around",alignItems:"right"},r.a.createElement(J.a,{item:!0}),r.a.createElement(J.a,{item:!0},r.a.createElement(D,{lg:!0,green:!0,onClick:function(){return o()}},"Select this team")))):r.a.createElement(U,null,r.a.createElement("div",null,"Finding team information")))},ae=(a(308),a(337)),ne=a(338),re=a(339),ce=function(e){e.competitionId;var t=e.onAnalyseTeam,a=e.teamInfo,n=a.name;return r.a.createElement(ae.a,{className:"team-card"},r.a.createElement(re.a,null,r.a.createElement("div",{className:"team-content"},r.a.createElement("img",{src:a.logo,alt:"".concat(n," logo")}))),r.a.createElement(ne.a,null,r.a.createElement(D,{onClick:function(){return t(a)},green:!0},"Analyse ",n)))},oe=function(e){var t=e.onTeamSelect,a=Object(n.useContext)(Z),c=Object(n.useContext)(I),o=a.leagueId,l=function(e,t){var a=Object(n.useState)((function(){try{var a=window.localStorage.getItem(e);return a?JSON.parse(a):t}catch(L){return console.log(L),t}})),r=Object(u.a)(a,2),c=r[0],o=r[1];return[c,function(t){try{var a=t instanceof Function?t(c):t;o(a),window.localStorage.setItem(e,JSON.stringify(a))}catch(L){console.log(L)}}]}("teamsByCompetitionId",[]),m=Object(u.a)(l,2),d=m[0],f=m[1],g=Object(n.useState)([]),h=Object(u.a)(g,2),v=h[0],E=h[1],j=Object(n.useState)(null),O=Object(u.a)(j,2),k=O[0],w=O[1],x=Object(n.useState)(null),S=Object(u.a)(x,2),N=S[0],T=S[1],F=b(y(a.leagueId,k,c),"createGameTeam",!1),C=Object(u.a)(F,5),q=C[0],A=C[1],L=C[2],D=C[3],G=C[4];return Object(n.useEffect)((function(){Object(s.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=d[o])){e.next=5;break}E(t),e.next=9;break;case 5:return e.next=7,B.getTeamsForLeague(o);case 7:a=e.sent,Promise.all(a.map(function(){var e=Object(s.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.getTeamFromTeamId(t.teamId);case 2:return(a=e.sent).teamId=t.teamId,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())).then((function(e){E(e),f(Object(p.a)(Object(p.a)({},d),{},Object(P.a)({},o,e)))}));case 9:case"end":return e.stop()}}),e)})))()}),[]),Object(n.useEffect)((function(){Object(s.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!k){e.next=5;break}return e.next=3,K(o);case 3:t=e.sent,T(t);case 5:case"end":return e.stop()}}),e)})))()}),[k]),Object(n.useEffect)((function(){q&&!L&&t(q.record.teamId)}),[q]),v.length>0?k&&N?r.a.createElement(r.a.Fragment,null,r.a.createElement(te,{onBack:function(){return w(null)},broadcastingRevenue:N,teamInfo:k,onTeamSelect:function(){G(y(a.leagueId,k,c)),D(!0)}}),A&&r.a.createElement(U,null,"Please wait..."),L&&r.a.createElement("div",null,"Error selecting team: ",L)):r.a.createElement("div",{className:"team-cards"},v.map((function(e){return r.a.createElement(ce,{key:e.teamId,onAnalyseTeam:function(e){return w(e)},teamInfo:e})}))):r.a.createElement(U,null)},le=(a(309),function(e){var t=e.competitions,a=e.onTeamSelect,c=Object(n.useState)("men"),o=Object(u.a)(c,2),l=o[0],i=(o[1],Object(n.useState)(null)),s=Object(u.a)(i,2),m=s[0],d=s[1];return t.length&&r.a.createElement("section",{className:"leagues"},r.a.createElement("div",{className:"pad-all-sm marg-bottom-sm flex",style:{color:"#fff",fontSize:"1.2rem"}},r.a.createElement("span",{className:"text-center",style:{width:"90%"}},"Take control! Select a team to analyse for financial viability."),r.a.createElement("span",{className:"align-right"},"Budget: 7m")),"men"===l&&t.filter((function(e){return!e.name.includes("WSL")&&(null===m||m===e.leagueId)})).sort((function(e,t){return e.tier>t.tier?1:-1})).map((function(e){return r.a.createElement(F.a,{key:e.leagueId,onChange:function(t,a){d(a?e.leagueId:null)},className:"team-select-acc",TransitionProps:{unmountOnExit:!0}},r.a.createElement(C.a,{expandIcon:r.a.createElement(L.a,null),"aria-controls":"panel1a-content",id:"panel1a-header"},e.name),r.a.createElement(q.a,null,r.a.createElement(Z.Provider,{value:e},r.a.createElement(oe,{onTeamSelect:a}))))})))}),ie=function(){var e="query { competitions(filter: { AND: ["+'{ isCurrent: true }, { country: "'.concat("England",'" },')+"{ type: LEAGUE }]}){ name leagueId isCurrent tier logo country start}}",t=b(e,"competitions"),a=Object(u.a)(t,3),n=a[0],c=a[1],o=a[2],l=Object(m.f)();return!n||c||o?c?o?r.a.createElement("div",null,"Eek, something went wrong"):r.a.createElement(U,null,o):null:r.a.createElement(le,{competitions:n,onTeamSelect:function(e){l.push("/clubhouse/"+e)}})};var se=function(){var e=Object(n.useState)(null),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(null),l=Object(u.a)(o,2),d=l[0],f=l[1],p=b("query getLatestUser {users(limit: 1, sort: USERID_DESC ) {userId}}","users",!1),g=Object(u.a)(p,4),h=g[0],v=g[1],E=g[2],y=g[3];return Object(n.useEffect)((function(){Object(s.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.getUserInfo();case 2:if(t=e.sent){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,T.getUsersFromTwitterId(parseInt(t.userId));case 7:0===(a=e.sent).length?(f(t),y(!0)):c(a[0]);case 9:case"end":return e.stop()}}),e)})))()}),[y]),Object(n.useEffect)((function(){Object(s.a)(i.a.mark((function e(){var t,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(v||!h||!h[0].userId){e.next=9;break}return(t=d).ffoUserId=h[0].userId+1,e.next=5,T.createUser(t);case 5:(a=e.sent).error&&a.error.message?console.error("unable to create user: ",a.error.message):c(a.record),e.next=10;break;case 9:E&&console.error("unable to create user without latest user",E);case 10:case"end":return e.stop()}}),e)})))()}),[h,v,E,d]),a?r.a.createElement(I.Provider,{value:a},r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"background"},r.a.createElement("img",{alt:"background pattern",src:w})),r.a.createElement(O.a,{theme:k},r.a.createElement(x.a,{basename:"/ffo"},r.a.createElement(m.c,null,r.a.createElement(m.a,{exact:!0,path:"/"},r.a.createElement(j,null)),r.a.createElement(m.a,{exact:!0,path:"/new"},r.a.createElement(ie,null)),r.a.createElement(m.a,{exact:!0,path:"/clubhouse/:teamId"},r.a.createElement(S,null)),r.a.createElement(m.a,{path:"*"},r.a.createElement(j,null))))))):r.a.createElement(U,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[310,1,2]]]);
//# sourceMappingURL=main.244983e0.chunk.js.map
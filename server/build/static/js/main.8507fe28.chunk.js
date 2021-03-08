(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{105:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},109:function(e,t,a){},112:function(e,t,a){},113:function(e,t,a){"use strict";a.r(t);var n=a(3),s=a(0),i=a.n(s),r=a(55),c=a.n(r),o=a(27),l=a(12),d=(a(79),a(7)),h=a(8),u=a(10),b=a(9),f=(a(80),a(14)),m=a.n(f),j=a(19),g=a(23),p=a.n(g),O=new(function(){function e(){var t=this;Object(d.a)(this,e),this.getUsername=function(){return t.username},this.authenticated=!1,this.username=""}return Object(h.a)(e,[{key:"login",value:function(){var e=Object(j.a)(m.a.mark((function e(t,a,n){var s=this;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/checkPassword",{params:{username:a,password:n}}).then((function(e){return!!e.data&&(s.authenticated=!0,s.username=a,window.username=a,t(),!0)})).catch((function(e){console.log(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}()},{key:"logout",value:function(e){this.authenticated=!1,this.username="",window.username="",e()}},{key:"registerNew",value:function(){var e=Object(j.a)(m.a.mark((function e(t,a,n){var s=this;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/newUser",{params:{username:a,password:n}}).then((function(e){if(!e.data)return!1;s.authenticated=!0,s.username=a,window.username=a,t()})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}()},{key:"isAuthenticated",value:function(){return this.authenticated}}]),e}()),y=a(121),v=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).state={username:""},n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.setState({username:O.getUsername()})}},{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{className:"banner",children:[Object(n.jsx)("h1",{className:"heading",children:"CryptoListen"}),Object(n.jsx)(y.a,{className:"banner-logout",kind:"danger",onClick:function(){O.logout((function(){e.props.history.push("/")}))},children:"Log Out"}),Object(n.jsx)("h3",{className:"banner-username",children:this.state.username})]})}}]),a}(i.a.Component),w=Object(l.g)(v),x=a(122),S=a(119),k=(a(105),function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).changePlaylist=function(e,t){n.setState({currentPlaylist:t}),n.props.changePlaylist(n.state.playlists[t])},n.state={currentPlaylist:"0",playlists:Object.keys(n.props.playlists)},n}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsxs)("ul",{className:"Sidebar",children:[Object(n.jsx)("li",{className:"sidebar-li sidebar-library",children:"Library"}),Object.keys(this.state.playlists).map((function(t){return Object(n.jsx)("li",{className:t===e.state.currentPlaylist?"sidebar-li sidebar-li-active":"sidebar-li",onClick:function(){return e.changePlaylist(e.state.playlists[t],t)},children:e.state.playlists[t]},t)}))]})}}]),a}(i.a.Component)),T=a(116),P=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,s=new Array(n),i=0;i<n;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).playSong=function(t){e.props.changeSong(t)},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{className:"Content",children:[Object(n.jsx)("div",{className:"content-title",children:this.props.currentPlaylist}),Object(n.jsxs)("table",{className:"content-table",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{}),Object(n.jsx)("td",{children:"Title"}),Object(n.jsx)("td",{children:"Artist"}),Object(n.jsx)("td",{children:"Length"})]})}),Object(n.jsx)("tbody",{children:Array.from(this.props.currentSongs).map((function(t){var a=e.props.media[t],s=a.title,i=a.artist,r=a.length;return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{className:"content-play-col",children:Object(n.jsx)(T.a,{className:"content-play-button",onClick:function(){e.playSong(t)}})}),Object(n.jsx)("td",{children:s}),Object(n.jsx)("td",{children:i}),Object(n.jsx)("td",{children:r})]},t)}))})]})]})}}]),a}(i.a.Component),C=a(70),H=(a(106),function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{className:"Playbar",children:[Object(n.jsx)("div",{className:"playbar-title",children:this.props.media[this.props.currentPlaying].title}),Object(n.jsx)("div",{className:"playbar-artist",children:this.props.media[this.props.currentPlaying].artist}),Object(n.jsx)(C.a,{autoPlay:!1,src:"./media/"+this.props.currentPlaying+".mp3",showSkipControls:!0,onClickNext:function(){return e.props.skipSong()},onClickPrevious:function(){return e.props.skipSong(!1)},onEnded:function(){return e.props.endOfSong()}})]})}}]),a}(i.a.Component)),N=a(30),M=(a(107),function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).skipSong=function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=n.state.currentSongs.indexOf(n.state.currentPlaying);t=e?(t+1)%n.state.currentSongs.length:0===t?n.state.currentSongs.length-1:t-1,n.setState({currentPlaying:n.state.currentSongs[t]})},n.changeSong=function(e){n.setState({currentPlaying:e})},n.getRandomPlaylist=function(){var e=N.ids.sort((function(){return.5-Math.random()}));return new Set(e.slice(0,10))},n.changePlaylist=function(e){n.setState({currentPlaylist:e}),n.setState({currentSongs:Array.from(n.state.playlists[e])})},n.endOfSong=function(){var e=n.state.currentSongs.indexOf(n.state.currentPlaying);e=(e+1)%n.state.currentSongs.length,n.setState({currentPlaying:n.state.currentSongs[e]})},n.state={media:N,currentPlaylist:"home",playlists:{home:new Set(N.ids),playlist_1:n.getRandomPlaylist(),playlist_2:n.getRandomPlaylist()},currentSongs:Array.from(new Set(N.ids)),currentPlaying:Array.from(new Set(N.ids))[0]},n}return Object(h.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"Music",children:[Object(n.jsx)(k,{currentPlaylist:this.state.currentPlaylist,changePlaylist:this.changePlaylist,playlists:this.state.playlists}),Object(n.jsx)(P,{currentPlaylist:this.state.currentPlaylist,media:this.state.media,currentSongs:this.state.currentSongs,changeSong:this.changeSong}),Object(n.jsx)(H,{currentPlaying:this.state.currentPlaying,skipSong:this.skipSong,media:this.state.media,endOfSong:this.endOfSong})]})}}]),a}(i.a.Component)),A=(a(108),function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"about-container",children:[Object(n.jsx)("h1",{children:"Aim"}),Object(n.jsx)("p",{children:"The main ways of generating income (monetisation) from digital media today are advertising and the monthly subscription model.\n        Due to the increase in concern about data collection online, the advertisment monetisation model has been critised and websites are starting to search\n        for new ways of generating income from their content. The aim of this website is to investigate the feasibility of using cryptocurrency mining as a\n        valid alternative, econimically as well as being socially accepted."}),Object(n.jsx)("h1",{children:"Cryptocurrency Mining?"}),Object(n.jsx)("p",{children:"Cryptocurrencies only exist in the digital world \u2013 which is why, from their creation to their distribution, each and every process is \n        completed electronically. A crucial part of this process is called cryptocurrency mining. Miners are responsible for solving complex mathematical problems \n        using mining software. This is how a transaction is verified on the network and sent to the blockchain. The blockchain stores all transactions by users \n        for that specific cryptocurrency. Miners are then rewarded for their work with cryptocurrencies. Blocks can hold thousands of transactions. This website \n        will be mining the cryptocurrency Monero. Given the current state of Monero (XMR) and an average hashrate of 500, after 24 hours of mining, roughly 0.0002XMR \n        (3 pence) will be mined. This value can change dramatically due to market price and mining pool performance."}),Object(n.jsx)("h1",{children:"Mining Throttle"}),Object(n.jsx)("p",{children:"In the mining section of this website you are able to control the throttle of the mining. The throttle is the percentage of time that the \n        user's CPU is resting. For example, if the throttle is set to 60, the user will be mining 40% of the time and resting for the other 60%. The greater the throttle \n        the less crypto mined."}),Object(n.jsx)("h1",{children:"This Website"}),Object(n.jsx)("p",{children:"This website is a music streaming web application which uses crytocurrency mining as its monetisation method. The aim of this website is \n        to simulate a monthly subsciption service such as Spotify or Netflix and then reduce that subscription by the amount of crypto mined during that month. The \n        site can be used with no cryptocurrency mining at all, but the user would then have to pay the full subscription amount. By turning on the mining feature \n        you are agreeing to the use of your computing power. No data will be collected about you or your machine. The side effects you may witness are:"}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"An increase in computer temperature"}),Object(n.jsx)("li",{children:"An increase in computer fan speed"}),Object(n.jsx)("li",{children:"A decrease in computer processing speed"}),Object(n.jsx)("li",{children:"An increase in power usage"})]}),Object(n.jsxs)("p",{children:["If any of these side effects start to spoil your web experience, you can increase the throttle inside the 'mining' tab. This will decrese \n        the use of your central processing unit (CPU), but will also decrease your hashrate (the number of calculations per second). The legality of cryptocurrency\n        mining in the browser can be discovered ",Object(n.jsx)("a",{href:"https://doi.org/10.31585/jbba-3-2-(1)2020",target:"_blank",rel:"noopener noreferrer",children:"here"}),"."]})]})}}]),a}(i.a.Component)),I=a(43),B=a(44),U=a(24),F=(a(109),a(117)),R=a(118);function D(e,t){return Object(n.jsxs)(R.a,{children:[Object(n.jsxs)("h2",{children:[e,":"]}),Object(n.jsx)("p",{children:t})]})}var L=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).startMining=function(){n.state.mining||(window.startCrypto(n.state.throttle),n.setState({mining:!0}),n.interval=setInterval((function(){return n.getStats()}),6e4),n.timeInterval=setInterval((function(){return n.timeHandler()}),1e3),n.statsInterval=setInterval((function(){return n.statsHandler()}),6e4))},n.stopMining=function(){n.state.mining&&(window.stopCrypto(),n.setState({mining:!1}),clearInterval(n.interval),clearInterval(n.timeInterval),clearInterval(n.statsInterval))},n.changeT=function(e){n.setState({throttle:e}),window.changeThrottle(e)},n.getSessionHashes=function(){return n.state.totalHash-n.state.initialHashes},n.timeHandler=function(){n.setState((function(e){return{time:e.time+1}}))},n.getTime=function(){var e=n.state.time,t=e%60,a=Math.floor(e/60)%60;return Math.floor(e/3600).toString()+"h "+a.toString()+"m "+t.toString()+"s "},n.state={mining:!1,throttle:40,poolHashrate:0,rawHashrate:0,totalHash:0,valid:0,time:0,initialHashes:0,hashRates:[],sessionThrottles:[],totalTime:0,totalHps:0,totalThrottle:0},n.statsHandler=n.statsHandler.bind(Object(U.a)(n)),n.setStats=n.getStats.bind(Object(U.a)(n)),n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=Object(j.a)(m.a.mark((function e(){var t=this;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/getStats",{params:{username:window.username,address:window.address}}).then((function(e){t.setState({totalHash:e.data.totalHash.toFixed(0),initialHashes:e.data.totalHash.toFixed(0),valid:e.data.validShares.toFixed(0)})})).catch((function(e){console.log(e)}));case 2:return e.next=4,p.a.get("/getDBStats",{params:{username:window.username}}).then((function(e){t.setState({totalTime:parseInt(e.data.time),totalHps:parseFloat(e.data.hps),totalThrottle:parseFloat(e.data.throttle)})})).catch((function(e){console.log(e)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getStats",value:function(){var e=Object(j.a)(m.a.mark((function e(){var t=this;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/getStats",{params:{username:window.username,address:window.address}}).then((function(e){t.setState({rawHashrate:e.data.hash.toFixed(0),poolHashrate:e.data.hash2.toFixed(0),totalHash:e.data.totalHash.toFixed(0),valid:e.data.validShares.toFixed(0)})})).catch((function(e){console.log(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"statsHandler",value:function(){var e=Object(j.a)(m.a.mark((function e(){var t,a,n,s,i,r,c,o,l,d,h,u,b;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.setState({hashRates:[].concat(Object(B.a)(this.state.hashRates),[this.state.poolHashrate])}),this.setState({sessionThrottles:[].concat(Object(B.a)(this.state.sessionThrottles),[this.state.throttle])}),t=0,a=Object(I.a)(this.state.hashRates);try{for(a.s();!(n=a.n()).done;)s=n.value,t+=parseInt(s)}catch(f){a.e(f)}finally{a.f()}i=0,r=Object(I.a)(this.state.sessionThrottles);try{for(r.s();!(c=r.n()).done;)o=c.value,i+=parseInt(o)}catch(f){r.e(f)}finally{r.f()}return l=t/this.state.hashRates.length,d=i/this.state.sessionThrottles.length,h=parseInt(this.state.totalTime)+parseInt(this.state.time),u=this.state.totalHps*(this.state.totalTime/h)+l*(this.state.time/h),b=this.state.totalThrottle*(this.state.totalTime/h)+d*(this.state.time/h),e.next=15,p.a.get("/setStats",{params:{username:window.username,hashes:u,throttle:b,time:h}}).then((function(e){console.log("Database stats updated")})).catch((function(e){console.log(e)}));case 15:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{className:"mining-container",children:[Object(n.jsxs)("div",{className:"mining-controls",children:[Object(n.jsx)(y.a,{className:"mining-control-button",onClick:function(){return e.startMining()},children:"Start Mining *"}),Object(n.jsx)(F.a,{ariaLabelInput:"Throttle",id:"slider",labelText:"Throttle",max:80,min:10,step:10,value:this.state.throttle,onChange:function(t){var a=t.value;return e.changeT(a)}}),Object(n.jsx)(y.a,{className:"mining-control-button mining-stop",kind:"danger",onClick:function(){return e.stopMining()},children:"Stop Mining"})]}),Object(n.jsxs)("div",{className:"mining-dis",children:[Object(n.jsx)("p",{children:" * You must disable your AdBlocker to be able to start mining, as most AdBlockers stop crypto mining in the browser to stop cryptojacking "}),Object(n.jsx)("p",{children:" * Please ensure you have read the risks of crypto-currency mining stated on the About section of this website before you start mining "}),Object(n.jsx)("p",{children:" * All Monero goes to the autor of this site. At the end of the study the money will be donated to a charity chosen at a later date "})]}),Object(n.jsxs)("div",{className:"mining-stats",children:[Object(n.jsxs)(R.a,{children:[Object(n.jsx)("h2",{children:"Miner Status:"}),Object(n.jsx)("span",{className:"mining-dot",style:this.state.mining?{backgroundColor:"green"}:{backgroundColor:"red"},children:this.state.mining?"ON":"OFF"})]}),D("Current Throttle",this.state.throttle),D("Raw Hashrate",this.state.rawHashrate+" H/s"),D("Pay Hashrate",this.state.poolHashrate+" H/s"),D("Total Hashes",this.state.totalHash),D("Session Hashes",this.getSessionHashes()),D("Mining Time",this.getTime()),D("Total Valid Shares",this.state.valid)]})]})}}]),a}(i.a.Component),E=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).useEffect=function(){n.interval=setInterval((function(){console.log(window.getTotalHashes()),n.setState({totalHashes:window.getTotalHashes()})}),1e3)},n.state={totalHashes:0},n}return Object(h.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{className:"Main",children:Object(n.jsxs)(x.a,{children:[Object(n.jsx)(S.a,{label:"About",children:Object(n.jsx)(A,{})}),Object(n.jsx)(S.a,{label:"Music",children:Object(n.jsx)(M,{})}),Object(n.jsx)(S.a,{label:"Mining",children:Object(n.jsx)(L,{})})]})})}}]),a}(i.a.Component),G=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(w,{}),Object(n.jsx)(E,{})]})}}]),a}(i.a.Component),J=Object(l.g)(G),z=a(120),W=a(36),q=a.n(W),K=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).handleUsernameChange=function(e){n.setState({username:e.target.value})},n.handlePasswordChange=function(e){n.setState({password:e.target.value})},n.state={username:"",password:"",wrongPassword:!1},n.handleSubmit=n.handleSubmit.bind(Object(U.a)(n)),n}return Object(h.a)(a,[{key:"handleSubmit",value:function(){var e=Object(j.a)(m.a.mark((function e(){var t,a=this;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===this.state.username||""===this.state.password){e.next=4;break}return t=q.a.x2(this.state.password),e.next=4,O.login((function(){return a.props.history.push("/home")}),this.state.username,t).then((function(e){e||(a.setState({password:""}),a.setState({wrongPassword:!0}))}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"login-tile",children:[Object(n.jsx)("div",{className:"login-username",children:Object(n.jsx)(z.a,{id:"username",labelText:"Username",value:this.state.username,onChange:this.handleUsernameChange})}),Object(n.jsx)("div",{className:"login-password",children:Object(n.jsx)(z.a,{id:"password",labelText:"Password",type:"password",value:this.state.password,onChange:this.handlePasswordChange,invalidText:"Incorrect Details",invalid:!!this.state.wrongPassword})}),Object(n.jsx)(y.a,{kind:"primary",onClick:this.handleSubmit,children:" Log In "})]})}}]),a}(i.a.Component),Y=Object(l.g)(K),_=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(d.a)(this,a),(n=t.call(this,e)).handleUsernameChange=function(e){n.setState({username:e.target.value})},n.handlePasswordChange=function(e){n.setState({password:e.target.value})},n.handleConfirmPasswordChange=function(e){n.setState({confirmPassword:e.target.value})},n.state={username:"",password:"",confirmPassword:"",invalidUsername:!1,invalidPassword:!1},n.handleSubmit=n.handleSubmit.bind(Object(U.a)(n)),n}return Object(h.a)(a,[{key:"handleSubmit",value:function(){var e=Object(j.a)(m.a.mark((function e(){var t=this;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.setState({invalidPassword:!1,invalidUsername:!1}),""===this.state.username||""===this.state.password){e.next=4;break}return e.next=4,p.a.get("/usernameAvailable",{params:{username:this.state.username}}).then((function(e){if(e.data&&t.state.password===t.state.confirmPassword){var a=q.a.x2(t.state.password);O.registerNew((function(){return t.props.history.push("/home")}),t.state.username,a)}else e.data?t.state.password!==t.state.confirmPassword&&t.setState({invalidPassword:!0}):t.setState({invalidUsername:!0})})).catch((function(e){console.log(e)}));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(n.jsxs)("div",{className:"login-tile",children:[Object(n.jsx)("div",{className:"login-username",children:Object(n.jsx)(z.a,{id:"register-username",labelText:"Username",value:this.state.username,onChange:this.handleUsernameChange,invalidText:"Username unavailable",invalid:this.state.invalidUsername})}),Object(n.jsx)("div",{className:"login-password",children:Object(n.jsx)(z.a,{id:"register-password",labelText:"Password",type:"password",value:this.state.password,onChange:this.handlePasswordChange})}),Object(n.jsx)("div",{className:"login-password",children:Object(n.jsx)(z.a,{id:"register-confirm-password",labelText:"Confirm Password",type:"password",value:this.state.confirmPassword,onChange:this.handleConfirmPasswordChange,invalidText:"Passwords do not match",invalid:this.state.invalidPassword})}),Object(n.jsx)(y.a,{kind:"primary",onClick:this.handleSubmit,children:" Create Account"})]})}}]),a}(i.a.Component),V=Object(l.g)(_),X=(a(112),function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"index-container",children:[Object(n.jsx)("h1",{className:"title",children:"CryptoListen"}),Object(n.jsxs)(x.a,{className:"index-tabs",type:"container",children:[Object(n.jsx)(S.a,{id:"tab-1",label:"Login",children:Object(n.jsx)(Y,{})}),Object(n.jsx)(S.a,{id:"tab-2",label:"Create Account",children:Object(n.jsx)(V,{})})]}),Object(n.jsx)("h1",{className:"warning",children:"IMPORTANT: YOU MUST DISABLE ADBLOCKER TO USE THIS WEBSITE"})]})}}]),a}(i.a.Component)),Q=a(37),Z=a(71),$=function(e){var t=e.component,a=Object(Z.a)(e,["component"]);return Object(n.jsx)(l.b,Object(Q.a)(Object(Q.a)({},a),{},{render:function(e){return O.isAuthenticated()?Object(n.jsx)(t,Object(Q.a)({},e)):Object(n.jsx)(l.a,{to:{pathname:"/"}})}}))},ee=function(e){Object(u.a)(a,e);var t=Object(b.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){return Object(n.jsx)("div",{children:"This website is not available on Mobile devices"})}}]),a}(i.a.Component),te=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);c.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(o.a,{children:Object(n.jsxs)(l.d,{children:[te?Object(n.jsx)(ee,{}):Object(n.jsx)(l.b,{exact:!0,path:"/",component:X}),Object(n.jsx)($,{exact:!0,path:"/home",component:J}),Object(n.jsx)(l.b,{path:"*",component:function(){return"404 NOT FOUND"}})]})})}),document.getElementById("root"))},30:function(e){e.exports=JSON.parse('{"c8ef0367-e991-4d95-b80c-366a7c1302ea":{"title":"A New Orleans Crawfish Boil","artist":"Unicorn Heads","length":"7:39"},"0da1827a-4097-4fd9-9e7d-bd074402eaf8":{"title":"Acid","artist":"Jeremy Black","length":"4:14"},"6253424c-bdb5-4b36-b479-a628ec3dcac5":{"title":"Barrel Full of Sea Monkeys","artist":"The Whole Other","length":"3:17"},"3e19fdc7-ce3b-4487-83a8-1e7510dd4ee6":{"title":"Book The Rental Wit It","artist":"RAGE","length":"2:31"},"566d252c-377c-4a8d-8723-b98a638a0477":{"title":"Cages","artist":"Density & Time","length":"3:16"},"8b49ac7e-c0e0-41ce-8e87-bb652b2ae64a":{"title":"Come Vibe With Me","artist":"Patrick Patrikios","length":"3:12"},"d61c71fe-3565-4e8a-92aa-fecb39ec05f8":{"title":"Cooler Heads","artist":"Jeremy Black","length":"4:33"},"9df0c916-4ce2-45f3-bf32-2b4af5ed1e4c":{"title":"Dodo Bird","artist":"Quincas Moreira","length":"3:06"},"21a76764-7087-4edd-9461-c0e7b03b9b76":{"title":"Dynamite","artist":"Patrick Patrikios","length":"2:19"},"3e09e777-4b34-4e15-b61b-c15dc9111a7a":{"title":"Getaway Powder","artist":"DJ Freedem","length":"2:51"},"ebffeb77-dd58-49e7-bd18-90daaf9b1829":{"title":"Go Get \'Em Tiger","artist":"The Whole Other","length":"2:17"},"121d8b34-3cae-4659-940d-48d0e84f651a":{"title":"Keep It 98 Plus 2","artist":"RAGE","length":"2:11"},"e8322ca1-93c9-42c9-9acb-46a8e8edc1cb":{"title":"Lands Unknown","artist":"Futuremono","length":"2:35"},"741371a6-5b34-4606-a3d0-14dc67b59dbc":{"title":"Long Road","artist":"Futuremono","length":"1:50"},"bd33952f-1768-4f76-a53a-e4fcdbceba92":{"title":"Luxery","artist":"Causmic","length":"3:02"},"043bbb65-9669-44a5-8254-aa723197c9d9":{"title":"Modern Situations","artist":"Unicorn Heads","length":"8:52"},"c7df976d-8240-4428-9d03-1a708e639f5b":{"title":"New Horizons","artist":"Futuremono","length":"1:46"},"1c62664c-7073-4898-ab7a-de051b0c3888":{"title":"OvO","artist":"Jeremy Black","length":"3:34"},"1f843905-0ea9-495b-be9d-561d183c5a49":{"title":"Point Green Getdown","artist":"Craig MacArthur","length":"2:28"},"5e042322-fb0d-45f1-9200-f0254895957c":{"title":"Pure Magic","artist":"Chris Haugen","length":"1:49"},"89a44df4-3b7f-4d8c-a3b3-3dbd5b4c0e63":{"title":"Rockville","artist":"Patrick Patrikios","length":"2:30"},"a360a36a-8834-43ef-8e28-e642e4cb0855":{"title":"Same Time","artist":"Spence","length":"2:48"},"343bdfb2-4bb9-4020-9cd0-4bb71d4f0b6d":{"title":"Steppers To Heavan","artist":"Freedom Trail Studio","length":"3:35"},"3f4533fb-1752-484f-9668-d224190dbf97":{"title":"Strong Bones","artist":"TrackTribe","length":"2:57"},"8dff5253-bac1-4a48-a185-3d9bfeaef7fd":{"title":"Swampland","artist":"Chris Haugen","length":"2:21"},"368053f3-beba-4358-a53b-fe1beb307ccd":{"title":"Sweet Release","artist":"Dan Lebowitz","length":"2:12"},"fea58410-321b-4dde-8856-61f240726b97":{"title":"The High Line","artist":"Causmic","length":"2:54"},"e374e00e-d7d6-419e-b8fa-b605633cb45a":{"title":"Today\'s Plan","artist":"DJ Freedem","length":"2:10"},"ac810dc6-bf18-455e-b4af-9f63c0b2de54":{"title":"Two Face","artist":"Causmic","length":"3:24"},"c8ef0367-e991-4d95-b80c-326a4c1312ef":{"title":"Tomorrow","artist":"Bensound","length":"4:55"},"c2eg0367-e891-4d95-v80c-326a4c1312ee":{"title":"Slowmotion","artist":"Kristina Ayelen","length":"3:27"},"d2ea0337-e591-4d15-v80c-326w4c1312pq":{"title":"Tenderness","artist":"Swathi Ascanius","length":"2:04"},"y13c0337-e691-4d15-v80c-326w4b1368rt":{"title":"Funny Song","artist":"Aodh Durga","length":"3:07"},"h15f0337-e681-4d15-v80c-326w4b1567yp":{"title":"Once Again","artist":"Julius Thorvald","length":"3:52"},"lq3f0337-e681-5d15-v80c-326w4b1m6n5g":{"title":"Epic","artist":"Yaiza Ghalib","length":"2:59"},"fz1f0337-e381-5d15-sk0c-326w4b109nn6":{"title":"Better Days","artist":"Ruben Jacoba","length":"2:34"},"sl150337-e381-5d15-1k9c-326w4b709mb3":{"title":"Energy","artist":"Bogdana Davor","length":"3:00"},"ttv50337-e381-5d15-1t9c-326w4b507mpy":{"title":"Dubstep","artist":"Mir\xe8io Gunder","length":"2:05"},"9oz5a327-ef81-5d15-1t96-326w4b503jpt":{"title":"Sunny","artist":"Maia Balakrishna","length":"2:20"},"ids":["9oz5a327-ef81-5d15-1t96-326w4b503jpt","ttv50337-e381-5d15-1t9c-326w4b507mpy","sl150337-e381-5d15-1k9c-326w4b709mb3","fz1f0337-e381-5d15-sk0c-326w4b109nn6","lq3f0337-e681-5d15-v80c-326w4b1m6n5g","h15f0337-e681-4d15-v80c-326w4b1567yp","y13c0337-e691-4d15-v80c-326w4b1368rt","d2ea0337-e591-4d15-v80c-326w4c1312pq","c2eg0367-e891-4d95-v80c-326a4c1312ee","c8ef0367-e991-4d95-b80c-326a4c1312ef","c8ef0367-e991-4d95-b80c-366a7c1302ea","0da1827a-4097-4fd9-9e7d-bd074402eaf8","6253424c-bdb5-4b36-b479-a628ec3dcac5","3e19fdc7-ce3b-4487-83a8-1e7510dd4ee6","566d252c-377c-4a8d-8723-b98a638a0477","8b49ac7e-c0e0-41ce-8e87-bb652b2ae64a","d61c71fe-3565-4e8a-92aa-fecb39ec05f8","9df0c916-4ce2-45f3-bf32-2b4af5ed1e4c","21a76764-7087-4edd-9461-c0e7b03b9b76","3e09e777-4b34-4e15-b61b-c15dc9111a7a","ebffeb77-dd58-49e7-bd18-90daaf9b1829","121d8b34-3cae-4659-940d-48d0e84f651a","e8322ca1-93c9-42c9-9acb-46a8e8edc1cb","741371a6-5b34-4606-a3d0-14dc67b59dbc","bd33952f-1768-4f76-a53a-e4fcdbceba92","043bbb65-9669-44a5-8254-aa723197c9d9","c7df976d-8240-4428-9d03-1a708e639f5b","1c62664c-7073-4898-ab7a-de051b0c3888","1f843905-0ea9-495b-be9d-561d183c5a49","5e042322-fb0d-45f1-9200-f0254895957c","89a44df4-3b7f-4d8c-a3b3-3dbd5b4c0e63","a360a36a-8834-43ef-8e28-e642e4cb0855","343bdfb2-4bb9-4020-9cd0-4bb71d4f0b6d","3f4533fb-1752-484f-9668-d224190dbf97","8dff5253-bac1-4a48-a185-3d9bfeaef7fd","368053f3-beba-4358-a53b-fe1beb307ccd","fea58410-321b-4dde-8856-61f240726b97","e374e00e-d7d6-419e-b8fa-b605633cb45a","ac810dc6-bf18-455e-b4af-9f63c0b2de54"]}')},79:function(e,t,a){},80:function(e,t,a){}},[[113,1,2]]]);
//# sourceMappingURL=main.8507fe28.chunk.js.map
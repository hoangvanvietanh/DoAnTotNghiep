(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-370a0108"],{"29a5":function(t,e,a){},"3dca":function(t,e,a){"use strict";var n=a("29a5"),r=a.n(n);r.a},4672:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-row",{attrs:{gutter:20}},[a("el-col",{staticStyle:{padding:"15px"},attrs:{span:6}},[a("h4",[t._v("Mời bạn bè")]),a("el-input",{staticStyle:{width:"100%"},attrs:{placeholder:"username of your friend"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),a("el-button",{staticStyle:{width:"100%","margin-top":"15px"},attrs:{type:"success"},on:{click:t.addFriend}},[t._v("Thêm bạn")]),a("br"),a("h4",[t._v("Bạn bè")]),a("div",{staticStyle:{height:"80vh","overflow-y":"auto"}},t._l(t.listFriend,(function(e,n){return a("el-button",{key:n,staticStyle:{width:"100%","margin-top":"15px","margin-left":"0"},on:{click:function(a){return t.chooseFriend(e)}}},[t._v(t._s(e.user.name))])})),1)],1),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"game"},[a("div",{staticClass:"game-area"},[a("div",{staticClass:"game-title"},[a("h1",[t._v("TICTACTOE")])]),a("div",{staticClass:"game-title"},[t.nameOfFriendChoosed?a("h4",{staticStyle:{color:"red"}},[t._v("Đồ sát "),a("strong",[t._v(" "+t._s(t.nameOfFriendChoosed))])]):t._e()]),t.selectFriend?t._e():a("h4",[t._v("Vui lòng chọn bạn chơi")]),!t.isReady&&t.selectFriend?a("el-button",{staticStyle:{width:"100%","margin-top":"15px"},attrs:{type:"success"},on:{click:t.readyGame}},[t._v("Ready")]):t._e(),t.isReady&&1===t.data.start?a("h4",[t._v(t._s("Bạn đã sẵn sàng\nĐang chờ "+t.nameOfFriendChoosed+" sẵn sàng"))]):t._e(),t.isReady||1!==t.data.start?t._e():a("h4",[t._v(t._s(t.nameOfFriendChoosed+" đã sẵn sàng"))]),t.isReady&&2===t.data.start?a("board",{attrs:{squares:t.data.squares,winner:t.data.winner},on:{click:t.click}}):t._e(),t.isReady&&2===t.data.start?a("div",{staticClass:"game-info"},[0===t.data.stepNumber?a("p",[t._v(" Tới lượt"),a("b",{class:t.data.currentPlayer},[t._v(t._s(t.getNamePlayer))]),t._v("! ")]):t.data.winner?a("p",[t._v(" Người thắng: "),a("b",{class:t.data.currentPlayer},[t._v(t._s(t.getNamePlayer))]),t._v("! "),a("button",{on:{click:t.restart}},[t._v("Game mới")])]):t.data.stepNumber>8?a("p",[t._v(" Hòa "),a("button",{on:{click:t.restart}},[t._v("Game mới")])]):a("p",[t._v(" Tới lượt "),a("b",{class:t.data.currentPlayer},[t._v(t._s(t.getNamePlayer))]),t._v(" nè. ")])]):t._e()],1)])]),a("el-col",{staticStyle:{padding:"15px"},attrs:{span:6}},[a("h4",[t._v("Lịch sử")])])],1)],1)},r=[],s=(a("cb29"),a("4160"),a("b0c0"),a("d3b7"),a("159b"),a("3835")),i=(a("96cf"),a("1da1")),d=a("dc59"),c={name:"Game",components:{Board:function(){return a.e("chunk-6776d392").then(a.bind(null,"3def"))}},data:function(){return{username:"",listFriend:[],listData:[],selectFriend:!1,nameOfFriendChoosed:"",isReady:!1,data:this.getObjectData(),idFriend:0,documentID:0}},computed:{getNamePlayer:function(){return this.data.player[this.data.currentPlayer]===d["a"].currentUser.uid?"bạn":this.nameOfFriendChoosed}},watch:{data:function(t){0===t.start&&(this.isReady=!1)}},mounted:function(){this.fetchData()},methods:{getKeyPlayer:function(){return this.data.player["X"]===d["a"].currentUser.uid?"X":"O"},readyGame:function(){0!==this.data.start||this.isReady?1!==this.data.start||this.isReady||(this.data.start=2):this.data.start=1,this.isReady=!0,""===this.data.player["O"]&&""===this.data.player["X"]&&(this.data.player["O"]=this.idFriend,this.data.player["X"]=d["a"].currentUser.uid),this.data.player["X"]===d["a"].currentUser.uid?this.data.listAction["X"].isReady=!0:this.data.listAction["O"].isReady=!0,this.updateData()},chooseFriend:function(t){this.data=t.data,this.selectFriend=!0,0===this.data.start&&(this.idFriend=t.user.id,this.nameOfFriendChoosed=t.user.name,this.documentID=t.documentID),1===this.data.start&&(this.idFriend=t.user.id,this.nameOfFriendChoosed=t.user.name,this.documentID=t.documentID,this.isReady=this.data.listAction[this.getKeyPlayer()].isReady),2===this.data.start&&(this.nameOfFriendChoosed=t.user.name,this.idFriend=t.user.id,this.documentID=t.documentID,this.isReady=!0)},getKeyIsReady:function(){return this.data.listAction["X"].isReady?"X":"Y"},getIndexListAction:function(){var t=-1;return this.data.listAction.forEach((function(e,a){e.selectFriend||e.id===d["a"].currentUser.uid||(t=a)})),t},getElementAction:function(t){var e=-1;return this.data.listAction.forEach((function(a,n){a.id===t&&(e=n)})),e},addFriend:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,n,r,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,d["h"].where("username","==",t.username).get();case 2:if(a=e.sent,n=!!(a&&a.docs&&a.docs[0])&&a.docs[0].data(),r=n?n._id:-1,-1===r||r===d["a"].currentUser.uid){e.next=13;break}return s=d["a"].currentUser.providerData.displayName?d["a"].currentUser.providerData.displayName:"No Name",i=n?n.username:"No Name",e.next=10,d["e"].add({data:t.getObjectData(),users:[{id:d["a"].currentUser.uid,name:s},{id:r,name:i}],listID:[d["a"].currentUser.uid,r]});case 10:t.$message({message:"Thêm thành công",type:"success"}),e.next=14;break;case 13:t.$message({message:t.$i18n.t("chat_user_not_found"),type:"error"});case 14:case"end":return e.stop()}}),e)})))()},fetchData:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.gamesRef(),e.next=3,t.listenListUser(a);case 3:case"end":return e.stop()}}),e)})))()},listenPlayerClick:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n={},a.next=3,t.docChanges().onSnapshot((function(t){t.forEach((function(t){t.doc.exists&&(n=t.doc.data().data)}))}));case 3:e.data=n;case 4:case"end":return a.stop()}}),a)})))()},listenListUser:function(t){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var n,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=[],r={},a.next=4,t.onSnapshot((function(t){t.docChanges().forEach((function(t){t.doc.data().data&&"modified"===t.type&&(e.data=t.doc.data().data),t.doc.data().users.forEach((function(a,s){d["a"].currentUser.uid===a.id&&"added"===t.type&&(0===s?(r={user:t.doc.data().users[1],documentID:t.doc.id,data:0!==t.doc.data().data.length?t.doc.data().data:e.getObjectData()},n.push(r)):(r={user:t.doc.data().users[0],documentID:t.doc.id,data:0!==t.doc.data().data.length?t.doc.data().data:e.getObjectData()},n.push(r)))}))}))}));case 4:e.listFriend=n;case 5:case"end":return a.stop()}}),a)})))()},gamesRef:function(){return 0!==this.documentID?d["e"].doc(this.documentID):d["e"].where("listID","array-contains",d["a"].currentUser.uid)},updateData:function(){this.gamesRef().update({data:this.data})},hasWinner:function(){if(this.data.winner)return!0;for(var t=this.data.squares,e=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],a=0;a<e.length;a++){var n=Object(s["a"])(e[a],3),r=n[0],i=n[1],d=n[2];if(t[r]&&t[r]===t[i]&&t[r]===t[d])return this.data.winner=[r,i,d],this.data.playerWinner=this.getNamePlayer,this.updateData(),!0}return!1},getObjectData:function(){return{id:"",squares:Array(9).fill(null),stepNumber:0,currentPlayer:"X",winner:null,player:{X:"",O:""},users:{},playerWinner:null,start:0,listAction:{X:{isReady:!1},O:{isReady:!1}}}},restart:function(){this.isReady=!1,this.data=this.getObjectData(),this.updateData()},click:function(t){this.data.squares[t]||this.data.winner||(this.data.player[this.data.currentPlayer]===d["a"].currentUser.uid?(this.$set(this.data.squares,t,this.data.currentPlayer),this.hasWinner()||(this.data.stepNumber++,this.data.currentPlayer="X"===this.data.currentPlayer?"O":"X"),this.updateData()):this.$message({message:"Chưa tới lượt của bạn",type:"warning"}))}}},u=c,o=(a("3dca"),a("2877")),h=Object(o["a"])(u,n,r,!1,null,"5170d0b1",null);e["default"]=h.exports},"81d5":function(t,e,a){"use strict";var n=a("7b0b"),r=a("23cb"),s=a("50c4");t.exports=function(t){var e=n(this),a=s(e.length),i=arguments.length,d=r(i>1?arguments[1]:void 0,a),c=i>2?arguments[2]:void 0,u=void 0===c?a:r(c,a);while(u>d)e[d++]=t;return e}},cb29:function(t,e,a){var n=a("23e7"),r=a("81d5"),s=a("44d2");n({target:"Array",proto:!0},{fill:r}),s("fill")}}]);
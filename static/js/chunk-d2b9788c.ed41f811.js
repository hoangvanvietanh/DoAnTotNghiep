(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d2b9788c"],{"13a6":function(t,e,i){"use strict";var n=i("dec1"),s=i.n(n);s.a},4245:function(t,e,i){"use strict";var n=i("f5e5"),s=i.n(n);s.a},"466a":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"container-puzzle"}},[i("Board",{directives:[{name:"show",rawName:"v-show",value:t.playing,expression:"playing"}],ref:"board",on:{restart:t.restart}}),i("OptionsPane",{directives:[{name:"show",rawName:"v-show",value:!t.playing,expression:"!playing"}],ref:"optionsPane",on:{gameStart:t.start}})],1)},s=[],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"board"},[i("div",{staticClass:"frame-wrapper",style:t.frameSize},[t.valid?i("p",{staticClass:"win"},[t._v("You Win!")]):t._e(),t.showingOriginal&&t.image?i("div",{staticClass:"original",style:{background:"url("+t.image+")"},on:{click:function(e){t.showingOriginal=!1}}}):t._e(),i("div",{staticClass:"frame",style:t.frameSize},t._l(t.tiles,(function(e){return i("Tile",{key:e.position,ref:"tiles",refInFor:!0,attrs:{tile:e},on:{moving:t.moveTile}})})),1)]),i("div",{staticClass:"controls"},[i("a",{staticClass:"toggle-original",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.showingOriginal=!t.showingOriginal}}},[t._v(" Toggle Original Image ")]),i("a",{staticClass:"shuffle",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.shuffleTiles(e)}}},[t._v("Reshuffle")]),i("a",{staticClass:"reset",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.reset(e)}}},[t._v("Reset")]),i("a",{staticClass:"restart",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.restart(e)}}},[t._v("New Game")])])])},a=[],o=(i("4de4"),i("7db0"),i("c975"),i("84a1")),l=i.n(o),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tile",class:{empty:t.tile.isEmpty},style:t.tile.styles,on:{click:t.move}})},u=[],h={props:["tile"],methods:{move:function(){this.$emit("moving",this.tile)}}},f=h,m=(i("b9f6"),i("2877")),d=Object(m["a"])(f,c,u,!1,null,null,null),g=d.exports,p=null,v={components:{Tile:g},data:function(){return{image:null,showingOriginal:!1,size:{horizontal:0,vertical:0},tiles:[],tileSize:{width:0,height:0}}},computed:{frameSize:function(){return{width:"".concat(this.tileSize.width*this.size.horizontal,"px"),height:"".concat(this.tileSize.height*this.size.vertical,"px")}},totalTiles:function(){return this.size.horizontal*this.size.vertical},valid:function(){if(!this.tiles.length)return!1;for(var t=0;t<this.totalTiles;++t)if(this.tiles[t].styles.order!==this.tiles[t].position)return!1;return!0}},methods:{start:function(t){var e=this,i=t.image,n=t.size;this.size=n,this.image=i;var s=new Image;s.onload=function(){e.tileSize.width=Math.floor(s.width/n.horizontal),e.tileSize.height=Math.floor(s.height/n.vertical),e.generateTiles(),e.shuffleTiles()},s.src=i},generateTiles:function(){this.tiles=[];for(var t=0;t<this.totalTiles;++t)this.tiles.push({styles:{background:0===t?"transparent":"url(".concat(this.image,")"),backgroundPositionX:"-".concat(t%this.size.horizontal*this.tileSize.width,"px"),backgroundPositionY:"-".concat(Math.floor(t/this.size.horizontal)*this.tileSize.height,"px"),width:"".concat(this.tileSize.width,"px"),height:"".concat(this.tileSize.height,"px"),order:t},position:t,isEmpty:0===t})},shuffleTiles:function(){for(var t=this,e=function(e,i){var n=t.tiles.find((function(t){return t.isEmpty})),s=t.tiles.filter((function(e){return t.getAdjacentOrders(n).indexOf(e.styles.order)>-1}));t.switchTiles(n,l()(s))},i=0,n=5*this.totalTiles;i<n;++i)e(i,n);p=JSON.stringify(this.tiles)},moveTile:function(t){var e=this;if(!t.isEmpty){var i=this.tiles.find((function(i){return i.isEmpty&&e.getAdjacentOrders(t).indexOf(i.styles.order)>-1}));i&&this.switchTiles(i,t)}},switchTiles:function(t,e){var i=[e.styles.order,t.styles.order];t.styles.order=i[0],e.styles.order=i[1]},getAdjacentOrders:function(t){var e=t.styles.order;return[e%this.size.horizontal?e-1:null,(e+1)%this.size.horizontal?e+1:null,e-this.size.horizontal,e+this.size.horizontal]},reset:function(){this.tiles=JSON.parse(p)},restart:function(){this.$emit("restart")}}},z=v,w=(i("e9a5"),Object(m["a"])(z,r,a,!1,null,null,null)),y=w.exports,b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("form",{attrs:{id:"optionsForm"},on:{submit:function(e){return e.preventDefault(),t.start(e)}}},[t.image?i("img",{attrs:{src:t.image}}):t._e(),i("div",[i("div",[i("label",{attrs:{for:"file"}},[t._v(" Select an image "),i("input",{attrs:{type:"file",id:"file",accept:"image/gif, image/jpeg, image/png"},on:{change:t.fileChanged}})]),t._v(" Board size: "),i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.size.horizontal,expression:"size.horizontal",modifiers:{number:!0}}],attrs:{type:"number",name:"width",min:"2",max:"10"},domProps:{value:t.size.horizontal},on:{input:function(e){e.target.composing||t.$set(t.size,"horizontal",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(" × "),i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.size.vertical,expression:"size.vertical",modifiers:{number:!0}}],attrs:{type:"number",name:"height",min:"2",max:"10"},domProps:{value:t.size.vertical},on:{input:function(e){e.target.composing||t.$set(t.size,"vertical",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),t.image?i("button",[t._v("Start")]):t._e()])])},_=[],x=i("fbd1"),O=i.n(x),S={data:function(){return{image:null,size:{horizontal:3,vertical:3}}},methods:{fileChanged:function(t){var e=this;t.target.files.length?O()(t.target.files[0],(function(t){e.image=t.toDataURL()}),{maxWidth:600,maxHeight:600,minWidth:200,minHeight:200,canvas:!0}):this.image=null},start:function(){this.$emit("gameStart",{image:this.image,size:this.size})},reset:function(){this.image=null,document.querySelector("#optionsForm").reset()}}},T=S,k=(i("4245"),Object(m["a"])(T,b,_,!1,null,"31d604f3",null)),C=k.exports,$={name:"puzzle",components:{Board:y,OptionsPane:C},data:function(){return{playing:!1}},methods:{start:function(){var t;this.playing=!0,(t=this.$refs.board).start.apply(t,arguments)},restart:function(){this.playing=!1,this.$refs.optionsPane.reset()}}},E=$,j=(i("13a6"),Object(m["a"])(E,n,s,!1,null,null,null));e["default"]=j.exports},"752b":function(t,e,i){},"85c4":function(t,e,i){},b9f6:function(t,e,i){"use strict";var n=i("85c4"),s=i.n(n);s.a},dec1:function(t,e,i){},e9a5:function(t,e,i){"use strict";var n=i("752b"),s=i.n(n);s.a},f5e5:function(t,e,i){}}]);
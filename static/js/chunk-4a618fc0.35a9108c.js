(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a618fc0"],{"261d":function(a,t,e){},"2ad2":function(a,t,e){"use strict";var i=e("261d"),n=e.n(i);n.a},6647:function(a,t,e){"use strict";e.r(t);var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:a.loading,expression:"loading"}]},[e("DxDiagram",{ref:"diagram",attrs:{id:"diagram"},on:{"custom-command":a.onCustomCommand}},[e("DxContextMenu",{attrs:{enabled:!0,commands:["bringToFront","sendToBack","lock","unlock"]}}),e("DxContextToolbox",{attrs:{enabled:!0,category:"flowchart","shape-icons-per-row":7,width:200}}),e("DxPropertiesPanel",{attrs:{visibility:"invisible"}},[e("DxTab",[e("DxGroup",{attrs:{title:"Page Properties",commands:["pageSize","pageOrientation","pageColor"]}})],1)],1),e("DxHistoryToolbar",{attrs:{visible:!1}}),e("DxViewToolbar",{attrs:{visible:!0}}),e("DxMainToolbar",{attrs:{visible:!0}},[e("DxCommand",{attrs:{name:"undo"}}),e("DxCommand",{attrs:{name:"redo"}}),e("DxCommand",{attrs:{name:"separator"}}),e("DxCommand",{attrs:{name:"fontName"}}),e("DxCommand",{attrs:{name:"fontSize"}}),e("DxCommand",{attrs:{name:"separator"}}),e("DxCommand",{attrs:{name:"bold"}}),e("DxCommand",{attrs:{name:"italic"}}),e("DxCommand",{attrs:{name:"underline"}}),e("DxCommand",{attrs:{name:"separator"}}),e("DxCommand",{attrs:{name:"fontColor"}}),e("DxCommand",{attrs:{name:"lineColor"}}),e("DxCommand",{attrs:{name:"fillColor"}}),e("DxCommand",{attrs:{name:"separator"}}),e("DxCommand",{attrs:{name:"clear",icon:"clearsquare",text:"Clear Diagram"}}),e("DxCommand",{attrs:{name:"separator"}}),e("DxCommand",{attrs:{name:"save",icon:"save",text:"Save"}}),e("DxCommand",{attrs:{name:"changeDiagram",icon:"save",text:"Change Diagram"}})],1),e("DxToolbox",{staticClass:"custome-position",attrs:{visibility:"visible","show-search":!0,"shape-icons-per-row":4,width:220}},[e("DxGroup",{attrs:{category:"general",title:"General"}}),e("DxGroup",{attrs:{category:"flowchart",title:"Flowchart",expanded:!1}}),e("DxGroup",{attrs:{category:"orgChart",title:"Org Chart",expanded:!1}})],1)],1),e("el-dialog",{attrs:{title:"Lưu bản vẽ",visible:a.dialogVisible,"before-close":a.handleClose,width:"30%"},on:{"update:visible":function(t){a.dialogVisible=t}}},[e("span",[a._v("Nhập tên")]),e("el-input",{model:{value:a.title,callback:function(t){a.title=t},expression:"title"}}),e("el-button",{on:{click:function(t){a.dialogVisible=!1}}},[a._v("Cancel")]),e("el-button",{attrs:{type:"primary"},on:{click:a.saveData}},[a._v("Save")])],1),e("el-dialog",{attrs:{title:"Thay đổi bản vẽ",visible:a.dialogChangeDiagram,"before-close":a.handleClose,width:"30%"},on:{"update:visible":function(t){a.dialogChangeDiagram=t}}},[e("el-select",{attrs:{filterable:"",placeholder:"Select"},model:{value:a.valueDiagram,callback:function(t){a.valueDiagram=t},expression:"valueDiagram"}},a._l(a.dataDiagram,(function(a,t){return e("el-option",{key:t,attrs:{label:a.title,value:a.id}})})),1),e("el-button",{on:{click:function(t){a.dialogChangeDiagram=!1}}},[a._v("Cancel")]),e("el-button",{attrs:{type:"primary"},on:{click:a.changeDiagram}},[a._v("Save")])],1)],1)},n=[],o=(e("7db0"),e("4160"),e("b0c0"),e("159b"),e("96cf"),e("1da1")),r=(e("483b"),e("aeed"),e("8da7"),e("0770")),s=e("dc59"),l=e("5c5d"),m=e.n(l),d=(e("6d93"),{components:{DxDiagram:r["DxDiagram"],DxContextMenu:r["DxContextMenu"],DxContextToolbox:r["DxContextToolbox"],DxPropertiesPanel:r["DxPropertiesPanel"],DxGroup:r["DxGroup"],DxTab:r["DxTab"],DxHistoryToolbar:r["DxHistoryToolbar"],DxViewToolbar:r["DxViewToolbar"],DxMainToolbar:r["DxMainToolbar"],DxCommand:r["DxCommand"],DxToolbox:r["DxToolbox"]},data:function(){return{loading:!0,dialogChangeDiagram:!1,valueDiagram:"",dataDiagram:[],dialogVisible:!1,title:"",diagramContent:"",diagram:{},dataDiagramChange:{}}},mounted:function(){this.getData()},methods:{handleClose:function(a){this.loading=!1},saveData:function(){var a=this.dataDiagram.length,t={id:a+1,title:this.title,data:this.diagramContent};this.dataDiagram.push(t),this.updateData(this.dataDiagram),this.dialogVisible=!1,this.loading=!1},onCustomCommand:function(a){var t=this;if("clear"===a.name){var e=m.a.confirm("Are you sure you want to clear the diagram? This action cannot be undone.","Warning");e.then((function(t){t&&(this.valueDiagram="",a.component.import(""))}))}else if("save"===a.name)if(this.loading=!0,this.diagramContent=a.component.export(),""===this.valueDiagram)this.dialogVisible=!0;else{var i=-1;this.dataDiagram.forEach((function(a,e){a.id===t.valueDiagram&&(i=e)})),this.dataDiagram[i].data=this.diagramContent,this.updateData(this.dataDiagram)}else"changeDiagram"===a.name&&(this.loading=!0,this.dialogChangeDiagram=!0)},changeDiagram:function(){var a=this;this.loading=!0;var t=this.$refs["diagram"].instance,e=this.dataDiagram.find((function(t){return t.id===a.valueDiagram}));t.import(e.data),this.dialogVisible=!1,this.loading=!1},getData:function(){var a=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,s["h"].doc(s["a"].currentUser.uid).get();case 2:e=t.sent,e.data().dataDiagram&&(a.dataDiagram=e.data().dataDiagram),a.loading=!1;case 5:case"end":return t.stop()}}),t)})))()},updateData:function(a){this.usersRef().update({dataDiagram:a}),this.loading=!1},usersRef:function(){return s["h"].doc(s["a"].currentUser.uid)}}}),c=d,g=(e("2ad2"),e("2877")),u=Object(g["a"])(c,i,n,!1,null,null,null);t["default"]=u.exports}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-e00d4734"],{"615e":function(t,e,a){"use strict";var s=a("e66e"),n=a.n(s);n.a},"72da":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticStyle:{height:"90vh"}},[a("DxGantt",{attrs:{"task-list-width":300,height:700,"scale-type":"weeks"}},[a("DxTasks",{attrs:{"data-source":t.data.tasks}}),a("DxDependencies",{attrs:{"data-source":t.data.dependencies}}),a("DxResources",{attrs:{"data-source":t.data.resources}}),a("DxResourceAssignments",{attrs:{"data-source":t.data.resourceAssignments}}),a("DxToolbar",[a("DxItem",{attrs:{name:"undo"}}),a("DxItem",{attrs:{name:"redo"}}),a("DxItem",{attrs:{name:"separator"}}),a("DxItem",{attrs:{name:"collapseAll"}}),a("DxItem",{attrs:{name:"expandAll"}}),a("DxItem",{attrs:{name:"separator"}}),a("DxItem",{attrs:{name:"addTask"}}),a("DxItem",{attrs:{name:"deleteTask"}}),a("DxItem",{attrs:{name:"separator"}}),a("DxItem",{attrs:{name:"zoomIn"}}),a("DxItem",{attrs:{name:"zoomOut"}}),a("DxItem",{attrs:{name:"separator"}})],1),a("DxStripLine",{attrs:{start:t.currentTime,title:"Current Time","css-class":"current-time"}}),a("DxEditing",{attrs:{enabled:!0}}),a("DxValidation",{attrs:{"auto-update-parent-tasks":!0}}),a("DxColumn",{attrs:{width:300,"data-field":"title",caption:"Subject"}}),a("DxColumn",{attrs:{"data-field":"start",caption:"Start Date"}}),a("DxColumn",{attrs:{"data-field":"end",caption:"End Date"}})],1)],1)},n=[],r=(a("4160"),a("159b"),a("96cf"),a("1da1")),i=(a("483b"),a("ae469"),a("16d6"),a("ab70")),d=[{id:1,parentId:0,title:"Software Development",start:new Date("2019-02-21T05:00:00.000Z"),end:new Date("2019-07-04T12:00:00.000Z"),progress:31}],o=[{id:1,predecessorId:3,successorId:4,type:0}],c=[{id:1,text:"Management"},{id:2,text:"Project Manager"},{id:3,text:"Analyst"},{id:4,text:"Developer"},{id:5,text:"Testers"},{id:6,text:"Trainers"},{id:7,text:"Technical Communicators"},{id:8,text:"Deployment Team"}],u=[{id:0,taskId:3,resourceId:1}],D=a("dc59"),m={components:{DxGantt:i["DxGantt"],DxTasks:i["DxTasks"],DxDependencies:i["DxDependencies"],DxResources:i["DxResources"],DxResourceAssignments:i["DxResourceAssignments"],DxColumn:i["DxColumn"],DxEditing:i["DxEditing"],DxValidation:i["DxValidation"],DxToolbar:i["DxToolbar"],DxItem:i["DxItem"],DxStripLine:i["DxStripLine"]},data:function(){return{currentTime:new Date,loading:!0,data:{scaleType:"weeks",tasks:this.data?this.data.tasks:d,dependencies:this.data?this.data.dependencies:o,resources:this.data?this.data.resources:c,resourceAssignments:this.data?this.data.resourceAssignments:u}}},watch:{data:{handler:function(t){this.loading=!0,this.updateData()},deep:!0}},mounted:function(){this.getData()},methods:{getData:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,D["h"].doc(D["a"].currentUser.uid).get();case 2:a=e.sent,a.data().dataTasks&&(t.data=a.data().dataTasks,t.data.tasks.forEach((function(t){t.start=t.start.toDate(),t.end=t.end.toDate()}))),t.loading=!1;case 5:case"end":return e.stop()}}),e)})))()},updateData:function(){this.usersRef().update({dataTasks:{tasks:this.data.tasks,dependencies:this.data.dependencies,resources:this.data.resources,resourceAssignments:this.data.resourceAssignments}}),this.loading=!1},usersRef:function(){return D["h"].doc(D["a"].currentUser.uid)}}},x=m,l=(a("615e"),a("2877")),p=Object(l["a"])(x,s,n,!1,null,null,null);e["default"]=p.exports},e66e:function(t,e,a){}}]);
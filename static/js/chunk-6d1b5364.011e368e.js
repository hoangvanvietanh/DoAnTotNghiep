(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d1b5364"],{"6f82":function(e,t,a){},"9fe6":function(e,t,a){"use strict";var i=a("6f82"),s=a.n(i);s.a},bee3:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-tabs",{attrs:{type:"border-card"}},[a("el-tab-pane",{attrs:{label:"Editor"}},[a("el-tabs",{attrs:{type:"card",editable:""},on:{edit:e.handleTabsEdit},model:{value:e.editableTabsValue,callback:function(t){e.editableTabsValue=t},expression:"editableTabsValue"}},e._l(e.editableTabs,(function(e,t){return a("el-tab-pane",{key:e.name,attrs:{label:e.title,name:e.name}},[a("div",{staticStyle:{height:"70vh"},attrs:{id:e.name}})])})),1)],1),a("el-tab-pane",{attrs:{label:"Diff"}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:7}},[a("el-input",{staticStyle:{height:"70vh"},attrs:{type:"textarea",rows:50,placeholder:"Nội dung 1"},model:{value:e.textDiff1,callback:function(t){e.textDiff1=t},expression:"textDiff1"}})],1),a("el-col",{attrs:{span:10}},[a("el-select",{staticStyle:{width:"100%"},attrs:{filterable:"",placeholder:"Select"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.options,(function(e){return a("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1),a("pre",{staticStyle:{height:"70vh",overflow:"auto"},attrs:{id:"display"}})],1),a("el-col",{attrs:{span:7}},[a("el-input",{staticStyle:{height:"70vh"},attrs:{type:"textarea",rows:50,placeholder:"Nội dung 2"},model:{value:e.textDiff2,callback:function(t){e.textDiff2=t},expression:"textDiff2"}})],1)],1)],1)],1)],1)},s=[],n=(a("4de4"),a("4160"),a("b0c0"),a("d3b7"),a("25f0"),a("159b"),a("bf68")),l=a("61f0"),f=a.n(l),d=(a("f241"),a("512e")),o=(a("c1ea"),{name:"json-editor",components:{Splitpanes:d["Splitpanes"],Pane:d["Pane"]},data:function(){return{options:[{value:"diffChars",label:"So sánh theo ký tự"},{value:"diffLines",label:"So sánh theo dòng"},{value:"diffArrays",label:"So sánh theo mảng"},{value:"diffJson",label:"So sánh theo chuỗi JSON"},{value:"diffWords",label:"So sánh theo từ"},{value:"diffWordsWithSpace",label:"So sánh theo từ có khoảng trắng"},{value:"diffTrimmedLines",label:"So sánh theo dòng đã xóa khoảng trắng"}],value:"diffChars",textDiff1:"",textDiff2:"",editableTabsValue:"0",editableTabs:[{title:"Editor",name:"0",content:"Tab 1 content",isCreated:!0}],tabIndex:0,objectDiff1:"",objectDiff2:""}},mounted:function(){this.addEditor("0"),this.addEditor("diff1"),this.addEditor("diff2"),this.test()},updated:function(){var e=this;this.editableTabs.forEach((function(t){t.name!==e.editableTabsValue.toString()||t.isCreated||(e.addEditor(e.editableTabsValue.toString()),t.isCreated=!0)}))},watch:{textDiff1:function(){this.diffProcess(this.textDiff1,this.textDiff2,this.value)},textDiff2:function(){this.diffProcess(this.textDiff1,this.textDiff2,this.value)},value:function(){this.diffProcess(this.textDiff1,this.textDiff2,this.value)}},methods:{diffProcess:function(e,t,a){var i=e,s=t,l=null,f={};switch(a){case"diffChars":f=Object(n["diffChars"])(i,s);break;case"diffLines":f=Object(n["diffLines"])(i,s);break;case"diffArrays":f=Object(n["diffArrays"])(i,s);break;case"diffJson":f=Object(n["diffJson"])(i,s);break;case"diffWords":f=Object(n["diffWords"])(i,s);break;case"diffWordsWithSpace":f=Object(n["diffWordsWithSpace"])(i,s);break;case"diffTrimmedLines":f=Object(n["diffTrimmedLines"])(i,s);break;default:f=Object(n["diffChars"])(i,s)}var d=document.getElementById("display"),o=document.createDocumentFragment();d.innerHTML="",f.forEach((function(e){var t=e.added?"green":e.removed?"red":"grey";l=document.createElement("span"),l.style.color=t,l.appendChild(document.createTextNode(e.value)),o.appendChild(l)})),d.appendChild(o)},handleTabsEdit:function(e,t){if("add"===t){var a=++this.tabIndex+"",i=this.editableTabs.length,s=0===i?"Editor":"Editor "+i++;this.editableTabs.push({title:s,name:a,content:"New Tab content",isCreated:!1}),this.editableTabsValue=a}if("remove"===t){var n=this.editableTabs,l=this.editableTabsValue;l===e&&n.forEach((function(t,a){if(t.name===e){var i=n[a+1]||n[a-1];i&&(l=i.name)}})),this.editableTabsValue=l,this.editableTabs=n.filter((function(t){return t.name!==e}))}},addEditor:function(e){var t=document.getElementById(e),a={modes:["text","code","tree","form","view"],mode:"code"},i=new f.a(t,a);i.set(""),"objectDiff1"===e?this.objectDiff1=i:"objectDiff2"===e&&(this.objectDiff2=i)}}}),r=o,c=(a("9fe6"),a("2877")),b=Object(c["a"])(r,i,s,!1,null,null,null);t["default"]=b.exports}}]);
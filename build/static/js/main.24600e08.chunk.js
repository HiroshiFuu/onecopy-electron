(this["webpackJsonponecopy-electron"]=this["webpackJsonponecopy-electron"]||[]).push([[0],{27:function(e,t,a){e.exports={item:"Item_item__LUvzd",itemName:"Item_itemName__1sCCU",buttons:"Item_buttons__1_842",completedButtons:"Item_completedButtons__2rwD7",delete:"Item_delete__izmvO",edit:"Item_edit__27-IG",click:"Item_click__1xRkN"}},47:function(e,t,a){e.exports={"item-list":"ItemList_item-list__1DF8S",panel:"ItemList_panel__1vBo0",slidedown:"ItemList_slidedown__3cU-2",button:"ItemList_button__2_sNp","browser-default":"ItemList_browser-default__1xeQm",click:"ItemList_click__1It3I",blink:"ItemList_blink__pxSU6"}},61:function(e,t,a){e.exports=a(73)},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(9),o=a.n(r),c=(a(66),a(14)),i=function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(a){console.error(a)}},m=Object(n.createContext)();function u(){return Object(n.useContext)(m)[1]}var s=new Audio("sound/trash.mp3");var p=function(e,t){switch(t.type){case"ADD_ITEM":var a=Object(c.a)(Object(c.a)({},e),{},{items:e.items.concat(t.item)});return i(a),a;case"UPDATE_ITEM":var n=e.items.map((function(e){return e.key===t.item.key?(console.log("UPDATE_ITEM",t.item),Object.assign({},e,{prompt:t.item.prompt,copy:t.item.copy,key:t.item.prompt+t.item.copy})):e})),l=Object(c.a)(Object(c.a)({},e),{},{items:n});return i(l),l;case"DELETE_ITEM":var r=Object(c.a)(Object(c.a)({},e),{},{items:e.items.filter((function(e){return e.key!==t.item.key}))});return i(r),s.currentTime=0,s.play(),r;default:return e}};function d(e){var t=e.children,a=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}}();void 0===a&&(a={items:[]}),i(a);var r=Object(n.useReducer)(p,a);return l.a.createElement("div",{className:"App"},l.a.createElement(m.Provider,{value:r},t))}var E=a(32),v=a(33),f=a(40),b=a(39),y=(a(67),a(68),function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(E.a)(this,a),(n=t.call(this,e)).handleAppQuit=function(){window.quitApp()},n.handleAppMinimize=function(){window.minimizeApp()},n}return Object(v.a)(a,[{key:"componentWillMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",null,l.a.createElement("div",{className:"nav-wrapper brown darken-3"},l.a.createElement("a",{className:"brand-logo"},"One Copy \ud83d\udccb"),l.a.createElement("ul",{className:"right"},l.a.createElement("li",null,l.a.createElement("a",{onClick:this.handleAppMinimize},l.a.createElement("i",{className:"material-icons"},"remove"))),l.a.createElement("li",null,l.a.createElement("a",{onClick:this.handleAppQuit},l.a.createElement("i",{className:"material-icons"},"clear")))))))}}]),a}(l.a.Component)),_=a(22),k=a(108),h=a(107),C=a(110),I=a(106),g=a(105),O=a(111),j=a(27),N=a.n(j),w=new Audio("sound/success.mp3");var x=function(e){var t=e.item,a=u(),n=t.prompt,r=t.copy,o=l.a.useState(!1),i=Object(_.a)(o,2),m=i[0],s=i[1],p=l.a.useState(""),d=Object(_.a)(p,2),E=d[0],v=d[1],f=l.a.useState(""),b=Object(_.a)(f,2),y=b[0],j=b[1],x=function(){s(!1),v(""),j("")};return l.a.createElement("div",{className:N.a.item,tabIndex:"0"},l.a.createElement("div",{className:N.a.itemName,"data-prompt":n,"data-copy":r,onClick:function(e){var t=e.currentTarget.dataset.copy;window.copyToClipboard(t),w.currentTime=0,w.play()}},n),l.a.createElement("div",{className:N.a.buttons},l.a.createElement("button",{className:N.a.delete,onClick:function(){a({type:"DELETE_ITEM",item:t})},tabIndex:"0"}),l.a.createElement("button",{className:N.a.edit,onClick:function(){s(!0),v(n),j(r)},tabIndex:"0"})),m?l.a.createElement(C.a,{open:m,onClose:x,"aria-labelledby":"form-dialog-title",disableBackdropClick:!0,disableEscapeKeyDown:!0},l.a.createElement(O.a,{id:"form-dialog-title"},"Edit Entry"),l.a.createElement(g.a,null,l.a.createElement("form",{noValidate:!0,autoComplete:"off"},l.a.createElement(h.a,{autoFocus:!0,id:"prompt",label:"Prompt Text",type:"text",value:E,fullWidth:!0,variant:"outlined",margin:"normal",InputLabelProps:{shrink:!0},onChange:function(e){return t=e.target.value,v(t),void j(t);var t}}),l.a.createElement(h.a,{id:"copy",label:"Copy Text",type:"text",value:y,fullWidth:!0,variant:"outlined",margin:"normal",InputLabelProps:{shrink:!0},onChange:function(e){return t=e.target.value,void j(t);var t}}))),l.a.createElement(I.a,null,l.a.createElement(k.a,{onClick:x,color:"secondary"},"Cancel"),l.a.createElement(k.a,{onClick:function(){if(console.log("handleSave",E,y),null!==E&&""!==E){var e=Object(c.a)(Object(c.a)({},t),{},{prompt:E,copy:y});a({type:"UPDATE_ITEM",item:e}),s(!1)}v(""),j("")},color:"primary"},"Save"))):null)},T=a(47),A=a.n(T);var S=function(){var e=u(),t=Object(n.useContext)(m)[0].items,a=l.a.useState(!1),r=Object(_.a)(a,2),o=r[0],c=r[1],i=l.a.useState(""),s=Object(_.a)(i,2),p=s[0],d=s[1],E=l.a.useState(""),v=Object(_.a)(E,2),f=v[0],b=v[1],y=function(){c(!1),d(""),b("")};return l.a.createElement("div",{className:"item-list"},t.length>0?l.a.createElement(l.a.Fragment,null,t.map((function(e){return l.a.createElement(x,{item:e,key:e.key})}))):null,l.a.createElement("div",{className:A.a.button},l.a.createElement(k.a,{variant:"contained",color:"primary",onClick:function(){c(!0)}},"Add New Entry"),l.a.createElement(C.a,{open:o,onClose:y,"aria-labelledby":"form-dialog-title",disableBackdropClick:!0,disableEscapeKeyDown:!0},l.a.createElement(O.a,{id:"form-dialog-title"},"Add New Entry"),l.a.createElement(g.a,null,l.a.createElement("form",{noValidate:!0,autoComplete:"off"},l.a.createElement(h.a,{autoFocus:!0,id:"prompt",label:"Prompt Text",type:"text",value:p,fullWidth:!0,variant:"outlined",margin:"normal",InputLabelProps:{shrink:!0},onChange:function(e){return t=e.target.value,d(t),void b(t);var t}}),l.a.createElement(h.a,{id:"copy",label:"Copy Text",type:"text",value:f,fullWidth:!0,variant:"outlined",margin:"normal",InputLabelProps:{shrink:!0},onChange:function(e){return t=e.target.value,void b(t);var t}}))),l.a.createElement(I.a,null,l.a.createElement(k.a,{onClick:y,color:"secondary"},"Cancel"),l.a.createElement(k.a,{onClick:function(){if(console.log("handleSave",p,f),""!==p&&""!==f){var t={prompt:p,copy:f,key:p+f};t.prompt.trim()&&t.copy.trim()&&e({type:"ADD_ITEM",item:t}),c(!1)}d(""),b("")},color:"primary"},"Add")))))},L=(a(72),function(e){Object(f.a)(a,e);var t=Object(b.a)(a);function a(e){var n;return Object(E.a)(this,a),(n=t.call(this,e)).handleFooterClick=function(){window.openExternalUrl("https://github.com/HiroshiFuu")},n}return Object(v.a)(a,[{key:"componentWillMount",value:function(){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"footer-copyright"},l.a.createElement("span",null,"\xa9 2021"),l.a.createElement("a",{href:"https://icons8.com/",className:"icon8"},"Icons by Icons8"),l.a.createElement("span",{className:"text-darken-4 right clickable",onClick:this.handleFooterClick},"Made With \ud83d\udc96 by FENG Hao")))}}]),a}(l.a.Component));var D=function(){return l.a.createElement(d,null,l.a.createElement(y,null),l.a.createElement(S,null),l.a.createElement(L,null))};o.a.render(l.a.createElement(D,null),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.24600e08.chunk.js.map
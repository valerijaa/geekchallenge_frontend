(function(e){function n(n){for(var r,i,u=n[0],s=n[1],l=n[2],c=0,d=[];c<u.length;c++)i=u[c],a[i]&&d.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);p&&p(n);while(d.length)d.shift()();return o.push.apply(o,l||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,u=1;u<t.length;u++){var s=t[u];0!==a[s]&&(r=!1)}r&&(o.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},a={app:0},o=[];function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],s=u.push.bind(u);u.push=n,u=u.slice();for(var l=0;l<u.length;l++)n(u[l]);var p=s;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"034f":function(e,n,t){"use strict";var r=t("64a9"),a=t.n(r);a.a},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("097d");var r=t("2b0e"),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("AddPerson",{on:{"add-person":e.AddPerson}}),t("People",{attrs:{people:e.people}})],1)},o=[],i=t("75fc"),u=(t("7f7f"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",e._l(e.people,function(n){return t("div",{key:n.id},[t("h3",[e._v(e._s(n.name))])])}),0)}),s=[],l={name:"People",props:["people"]},p=l,c=t("2877"),d=Object(c["a"])(p,u,s,!1,null,"366a743e",null);d.options.__file="People.vue";var f=d.exports,m=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("form",{on:{submit:e.AddPerson}},[t("h1",[e._v("Add new person")]),e._v("\n       Name: "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",name:"name"},domProps:{value:e.name},on:{input:function(n){n.target.composing||(e.name=n.target.value)}}}),e._v("\nSocial media: "),e._m(0),e._v("\n\n             Username: "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",name:"username"},domProps:{value:e.username},on:{input:function(n){n.target.composing||(e.username=n.target.value)}}}),t("input",{staticClass:"btn",attrs:{type:"submit",value:"Add"}})])])},v=[function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("select",[t("option",{attrs:{value:"twitter"}},[e._v("Twitter")]),t("option",{attrs:{value:"facebook"}},[e._v("Facebook")]),t("option",{attrs:{value:"instagram"}},[e._v("Instagram")]),t("option",{attrs:{value:"linkedin"}},[e._v("Linkedin")])])}],h={name:"AddPerson",data:function(){return{name:"",username:""}},methods:{AddPerson:function(e){e.preventDefault();var n={id:99,name:this.name,username:this.username,socialMedia:"twitter"};this.$emit("add-person",n),this.name="",this.username=""}}},_=h,b=Object(c["a"])(_,m,v,!1,null,"d187b80e",null);b.options.__file="AddPerson.vue";var g=b.exports,P=t("bc3a"),y=t.n(P),w={name:"app",components:{AddPerson:g,People:f},data:function(){return{people:[]}},methods:{AddPerson:function(e){var n=this;y.a.post("http://localhost:3000/addperson",{name:e.name,username:e.username,socialMedia:e.socialMedia}).then(function(e){return n.people=[].concat(Object(i["a"])(n.people),[e.data])})}},created:function(){var e=this;y.a.get("http://localhost:3000/people").then(function(n){return e.people=n.data})}},x=w,O=(t("034f"),Object(c["a"])(x,a,o,!1,null,null,null));O.options.__file="App.vue";var j=O.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(j)}}).$mount("#app")},"64a9":function(e,n,t){}});
//# sourceMappingURL=app.25fdbebe.js.map
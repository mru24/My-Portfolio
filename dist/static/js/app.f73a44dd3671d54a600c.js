webpackJsonp([1],{"0uUr":function(t,e){},"7Q/t":function(t,e){},JEJ7:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),n={data:function(){return{showNav:!1,classObject:{burger:!0,st1:!1,st2:!1,hover:!1}}},methods:{hoverOn:function(){this.classObject.hover=!0},hoverOff:function(){this.classObject.hover=!1},toggleStage:function(){var t=this;this.showNav=!this.showNav,this.classObject.st2&&(this.classObject.st2=!1),this.classObject.hover=!1,this.classObject.st1=!this.classObject.st1,this.classObject.st1&&setTimeout(function(){t.classObject.st2=!t.classObject.st2},1e3)}}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("nav",[s("transition",{attrs:{name:"navbar"}},[t.showNav?s("div",{staticClass:"navbar"},[s("ul",[s("li",{on:{click:t.toggleStage}},[s("router-link",{attrs:{to:"/"}},[t._v("HOME")])],1),t._v(" "),s("li",{on:{click:t.toggleStage}},[s("router-link",{attrs:{to:"/work"}},[t._v("MY WORK")])],1),t._v(" "),s("li",{on:{click:t.toggleStage}},[s("router-link",{attrs:{to:"/contact"}},[t._v("CONTACT")])],1)])]):t._e()]),t._v(" "),s("div",{staticClass:"hamburger"},[s("div",{class:t.classObject,on:{mouseenter:t.hoverOn,mouseleave:t.hoverOff,click:t.toggleStage}},[s("i"),t._v(" "),s("i"),t._v(" "),s("i")])])],1)])},staticRenderFns:[]};var r={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"animContainer"},[e("div",{staticClass:"animBackground"},[e("div",{staticClass:"sphere sphere01"},[e("div",{staticClass:"planet"})]),this._v(" "),e("div",{staticClass:"sphere sphere02"},[e("div",{staticClass:"planet"})]),this._v(" "),e("div",{staticClass:"sphere sphere03"},[e("div",{staticClass:"planet"})]),this._v(" "),e("div",{staticClass:"sphere sphere04"},[e("div",{staticClass:"planet"})]),this._v(" "),e("div",{staticClass:"sphere sphere05"},[e("div",{staticClass:"planet"})]),this._v(" "),e("div",{staticClass:"sphere sphere06"},[e("div",{staticClass:"planet"})]),this._v(" "),e("div",{staticClass:"sphere sphere07"},[e("div",{staticClass:"planet"})])])])}]};var o={components:{Navbar:s("VU/8")(n,i,!1,function(t){s("vZeR")},"data-v-2abe1da5",null).exports,AnimBackground:s("VU/8")({},r,!1,function(t){s("vtH3")},"data-v-30219f95",null).exports},data:function(){return{}}},c={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Navbar"),this._v(" "),e("div",{staticClass:"mainContainer"},[e("AnimBackground"),this._v(" "),e("transition",[e("router-view")],1)],1)],1)},staticRenderFns:[]};var l=s("VU/8")(o,c,!1,function(t){s("QJ6O")},null,null).exports,v=s("/ocq"),u={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("transition",[t.show?s("div",{staticClass:"title"},[s("h2",[t._v("Follow Me:")])]):t._e()]),t._v(" "),s("ul",{on:{mouseenter:function(e){t.show=!0},mouseleave:function(e){t.show=!1}}},t._l(t.socialLinks,function(t,e){return s("li",{key:e},[s("a",{attrs:{href:t.link,target:"_blank",rel:"noreferrer nofollow noopener"}},[s("div",{staticClass:"imageContainer"},[s("img",{attrs:{src:t.image,alt:t.name}})])])])}))],1)},staticRenderFns:[]};var m={components:{social:s("VU/8")({data:function(){return{show:!1,socialLinks:[{name:"Facebook",link:"https://facebook.com/val.wroblewski",image:"static/Images/Social/fb.png"},{name:"github",link:"https://github.com/mru24",image:"static/Images/Social/gh.png"},{name:"LinkedIn",link:"https://LinkedIn.com/in/val-wroblewski-278724139/",image:"static/Images/Social/li.png"}]}}},u,!1,function(t){s("JEJ7")},"data-v-09634243",null).exports},data:function(){return{show:!0}}},h={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"container"},[e("div",{staticClass:"about"},[this._m(0),this._v(" "),e("p",[this._v("\n        Turning passion into career. My expertise is in the area of responsive design. I strive to make the web a nice and pleasant place.\n      ")]),this._v(" "),e("div",{staticClass:"arrow"},[e("router-link",{attrs:{to:"/work"}},[this._v("Check out my work")])],1)]),this._v(" "),e("div",{staticClass:"socialLinks"},[e("social")],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{staticClass:"title"},[this._v("\n        Val Wroblewski\n        "),e("br"),e("span",[this._v("Web Designer and Developer.")])])}]};var d=s("VU/8")(m,h,!1,function(t){s("ozCN")},"data-v-7ec9b4f7",null).exports,p=s("kxiW"),f=s.n(p),g=(s("881v"),f.a.initializeApp({apiKey:"AIzaSyBvL0UbxfU3O4bINITJVR2wzwnQhLht7Vw",authDomain:"myportfolio-fde76.firebaseapp.com",databaseURL:"https://myportfolio-fde76.firebaseio.com",projectId:"myportfolio-fde76",storageBucket:"",messagingSenderId:"21364349422"}).firestore()),_={data:function(){return{name:"Val Wroblewski",image:"static/Images/Waldi.jpg",email:"mru24@yahoo.com",web:"wwproject.eu",tel:"07599384805",message:{name:null,email:null,message:null}}},methods:{sendMessage:function(){var t=this;g.collection("Messages").add({name:this.message.name,email:this.message.email,message:this.message.message}).then(function(e){console.log("Message sent:",e.id),t.$router.push("/success")}).catch(function(t){console.error("Error sending message: ",t)})}}},b={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"container"},[s("h1",{staticClass:"title"},[t._v("CONTACT ME")]),t._v(" "),s("div",{staticClass:"contactInfo"},[s("div",{staticClass:"imageContainer"},[s("img",{attrs:{src:t.image,alt:""}})]),t._v(" "),s("div",{staticClass:"infoContainer"},[s("ul",[s("li",[t._v("Name: "+t._s(t.name))])]),t._v(" "),s("ul",[s("li",[t._v("Email: "+t._s(t.email))])]),t._v(" "),s("ul",[s("li",[t._v("Website: "+t._s(t.web))])]),t._v(" "),s("ul",[s("li",[t._v("Mobile: "+t._s(t.tel))])])])]),t._v(" "),s("form",{on:{submit:function(e){return e.preventDefault(),t.sendMessage(e)}}},[s("div",{staticClass:"form-control"},[s("label",[t._v("Your Name")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.message.name,expression:"message.name"}],attrs:{type:"text",required:""},domProps:{value:t.message.name},on:{input:function(e){e.target.composing||t.$set(t.message,"name",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-control"},[s("label",[t._v("Your Email")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.message.email,expression:"message.email"}],attrs:{type:"email",required:""},domProps:{value:t.message.email},on:{input:function(e){e.target.composing||t.$set(t.message,"email",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-control"},[s("label",[t._v("Your Message")]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message.message,expression:"message.message"}],attrs:{required:""},domProps:{value:t.message.message},on:{input:function(e){e.target.composing||t.$set(t.message,"message",e.target.value)}}})]),t._v(" "),s("button",{attrs:{type:"submit"}},[t._v("Send")])])])])},staticRenderFns:[]};var C=s("VU/8")(_,b,!1,function(t){s("0uUr")},"data-v-784d87ba",null).exports,k={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"container"},[s("div",{staticClass:"workNav"},[s("ul",t._l(t.workNav,function(e,a){return s("li",{key:a,on:{click:function(s){t.changeCat(e.data)}}},[t._v("\n          "+t._s(e.name)+"\n        ")])}))]),t._v(" "),s("div",{staticClass:"workContainer"},[s("transition-group",t._l(t.projects,function(e,a){return s("ul",{key:a},[t.projectsToShow==e.category?s("li",[s("div",{staticClass:"project"},[s("h4",[s("a",{attrs:{href:e.link,target:"_blank",rel:"noreferrer nofollow noopener"}},[t._v(t._s(e.name))])])])]):"all"==t.projectsToShow?s("li",[s("div",{staticClass:"project"},[s("h4",[s("a",{attrs:{href:e.link,target:"_blank",rel:"noreferrer nofollow noopener"}},[t._v(t._s(e.name))])])])]):t._e()])}))],1)])])},staticRenderFns:[]};var w=s("VU/8")({data:function(){return{projectsToShow:"all",workNav:[{name:"all",info:"",data:"all"},{name:"responsive design",info:"",data:"resp"},{name:"java script",info:"",data:"js"},{name:"php",info:"",data:"php"}],projects:[{name:"Kat FMWorld UK",info:"My first commercial project",link:"https://eager-franklin-097a07.netlify.com",github:"https://github.com/mru24/FM_World_UK",tags:["HTML","VUE JS","SASS","Bootstrap"],category:"js"},{name:"My Portfolio",info:"This Portfolio",link:"https://vigilant-shirley-59d618.netlify.com",github:"https://github.com/mru24/Yet-another-Portfolio",tags:["HTML","VUE JS","SASS","Firebase"],category:"js"}]}},methods:{changeCat:function(t){this.projectsToShow=t}}},k,!1,function(t){s("uORJ")},"data-v-808a3fbc",null).exports,j={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"container"},[this._m(0),this._v(" "),e("router-link",{attrs:{to:"/"}},[this._v("Back to Main Page")])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"success"},[e("h4",[this._v("\n        Your message has been sent."),e("br"),this._v("\n        Thank you.\n      ")])])}]};var O=s("VU/8")({},j,!1,function(t){s("7Q/t")},"data-v-49dcc97e",null).exports,S={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"container"},[this._m(0),this._v(" "),e("router-link",{attrs:{to:"/contact"}},[this._v("Return to Contact Page")])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"fail"},[e("h4",[this._v("\n        Ooops. Something went wrong."),e("br"),this._v("\n        Please try again\n      ")])])}]};var y=s("VU/8")({},S,!1,function(t){s("g/SW")},"data-v-e772aa22",null).exports;a.a.use(v.a);var E=new v.a({routes:[{path:"/",name:"Home",component:d},{path:"/contact",name:"Contact",component:C},{path:"/work",name:"Work",component:w},{path:"/success",name:"Success",component:O},{path:"/fail",name:"Fail",component:y}]});a.a.config.productionTip=!1,a.a.directive("red",{bind:function(t,e,s){!0===e.value&&(t.style.color="#bd0a0a")}}),new a.a({el:"#app",router:E,components:{App:l},template:"<App/>"})},QJ6O:function(t,e){},"g/SW":function(t,e){},ozCN:function(t,e){},uORJ:function(t,e){},vZeR:function(t,e){},vtH3:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.f73a44dd3671d54a600c.js.map
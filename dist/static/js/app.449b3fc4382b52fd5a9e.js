webpackJsonp([1],{"0uUr":function(t,e){},"4+Vy":function(t,e){},"7Q/t":function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("7+uW"),i={data:function(){return{showNav:!1,classObject:{burger:!0,st1:!1,st2:!1,hover:!1}}},methods:{hoverOn:function(){this.classObject.hover=!0},hoverOff:function(){this.classObject.hover=!1},toggleStage:function(){var t=this;this.showNav=!this.showNav,this.classObject.st2&&(this.classObject.st2=!1),this.classObject.hover=!1,this.classObject.st1=!this.classObject.st1,this.classObject.st1&&setTimeout(function(){t.classObject.st2=!t.classObject.st2},1e3)}}},n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("nav",[s("transition",{attrs:{name:"navbar"}},[t.showNav?s("div",{staticClass:"navbar"},[s("ul",[s("li",{on:{click:t.toggleStage}},[s("router-link",{attrs:{to:"/"}},[t._v("HOME")])],1),t._v(" "),s("li",{on:{click:t.toggleStage}},[s("router-link",{attrs:{to:"/work"}},[t._v("MY WORK")])],1),t._v(" "),s("li",{on:{click:t.toggleStage}},[s("router-link",{attrs:{to:"/contact"}},[t._v("CONTACT")])],1)])]):t._e()]),t._v(" "),s("div",{staticClass:"hamburger"},[s("div",{class:t.classObject,on:{mouseenter:t.hoverOn,mouseleave:t.hoverOff,click:t.toggleStage}},[s("i"),t._v(" "),s("i"),t._v(" "),s("i")])])],1)])},staticRenderFns:[]};var o={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"animContainer"},[e("div",{staticClass:"animBackground"},[e("div",{staticClass:"sphere sphere01"},[e("div",{staticClass:"planet"})]),this._v(" "),e("div",{staticClass:"sphere sphere02"},[e("div",{staticClass:"planet"})]),this._v(" "),e("div",{staticClass:"sphere sphere03"},[e("div",{staticClass:"planet"})]),this._v(" "),e("div",{staticClass:"sphere sphere04"},[e("div",{staticClass:"planet"})]),this._v(" "),e("div",{staticClass:"sphere sphere05"},[e("div",{staticClass:"planet"})]),this._v(" "),e("div",{staticClass:"sphere sphere06"},[e("div",{staticClass:"planet"})]),this._v(" "),e("div",{staticClass:"sphere sphere07"},[e("div",{staticClass:"planet"})])])])}]};var r={components:{Navbar:s("VU/8")(i,n,!1,function(t){s("ZBqh")},"data-v-52278800",null).exports,AnimBackground:s("VU/8")({},o,!1,function(t){s("vtH3")},"data-v-30219f95",null).exports},data:function(){return{}}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("Navbar"),this._v(" "),e("div",{staticClass:"mainContainer"},[e("AnimBackground"),this._v(" "),e("transition",[e("router-view")],1)],1)],1)},staticRenderFns:[]};var c=s("VU/8")(r,l,!1,function(t){s("dJv3")},null,null).exports,u=s("/ocq"),m={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("transition",[t.show?s("div",{staticClass:"title"},[s("h2",[t._v("Follow Me:")])]):t._e()]),t._v(" "),s("ul",{on:{mouseenter:function(e){t.show=!0},mouseleave:function(e){t.show=!1}}},t._l(t.socialLinks,function(t,e){return s("li",{key:e},[s("a",{attrs:{href:t.link,target:"_blank",rel:"noreferrer nofollow noopener"}},[s("div",{staticClass:"imageContainer"},[s("img",{attrs:{src:t.image,alt:t.name}})])])])}))],1)},staticRenderFns:[]};var v={components:{social:s("VU/8")({data:function(){return{show:!1,socialLinks:[{name:"Facebook",link:"https://facebook.com/val.wroblewski",image:"static/Images/Social/fb.png"},{name:"github",link:"https://github.com/mru24",image:"static/Images/Social/gh.png"},{name:"LinkedIn",link:"https://LinkedIn.com/in/val-wroblewski-278724139/",image:"static/Images/Social/li.png"}]}}},m,!1,function(t){s("TAYx")},"data-v-42cccb36",null).exports},data:function(){return{el1:!1,el2:!1,el3:!1,el4:!1,el5:!1,show:!0,arrowDown:"static/Images/arrow-down.png"}},created:function(){var t=this;setTimeout(function(){t.el1=!0},500),setTimeout(function(){t.el2=!0},2500),setTimeout(function(){t.el3=!0},3500),setTimeout(function(){t.el4=!0},4500),setTimeout(function(){t.el5=!0},6500)}},g={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"container"},[s("div",{staticClass:"about"},[s("transition",[t.el1?s("div",{staticClass:"mainTitle"},[s("div",{staticClass:"image"},[s("img",{attrs:{src:"static/Images/Waldi.jpg",alt:"My photo"}})]),t._v(" "),s("h1",[t._v("\n            Val Wroblewski\n          ")])]):t._e()]),t._v(" "),s("transition",[t.el2?s("h6",[t._v("\n          Web Developer.\n        ")]):t._e()]),t._v(" "),s("transition",[t.el3?s("div",{staticClass:"info"},[s("p",[t._v('\n            "Turning passion into career. My expertise is in the area of responsive design. I strive to make the web a nice and pleasant place."\n          ')])]):t._e()])],1),t._v(" "),s("transition",[t.el4?s("div",{staticClass:"arrow"},[s("router-link",{attrs:{to:"/work"}},[s("img",{attrs:{src:t.arrowDown,alt:"arrowDown"}})])],1):t._e()]),t._v(" "),s("transition",[t.el5?s("div",{staticClass:"socialLinks"},[s("social")],1):t._e()])],1)])},staticRenderFns:[]};var h=s("VU/8")(v,g,!1,function(t){s("Z/vP")},"data-v-799c5d7c",null).exports,p=s("kxiW"),d=s.n(p),f=(s("881v"),d.a.initializeApp({apiKey:"AIzaSyBvL0UbxfU3O4bINITJVR2wzwnQhLht7Vw",authDomain:"myportfolio-fde76.firebaseapp.com",databaseURL:"https://myportfolio-fde76.firebaseio.com",projectId:"myportfolio-fde76",storageBucket:"",messagingSenderId:"21364349422"}).firestore()),_={data:function(){return{name:"Val Wroblewski",image:"static/Images/Waldi.jpg",email:"mru24@yahoo.com",web:"wwproject.eu",tel:"07599384805",message:{name:null,email:null,message:null}}},methods:{sendMessage:function(){var t=this;f.collection("Messages").add({name:this.message.name,email:this.message.email,message:this.message.message}).then(function(e){console.log("Message sent:",e.id),t.$router.push("/success")}).catch(function(t){console.error("Error sending message: ",t)})}}},b={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"container"},[s("h1",{staticClass:"title"},[t._v("CONTACT ME")]),t._v(" "),s("div",{staticClass:"contactInfo"},[s("div",{staticClass:"imageContainer"},[s("img",{attrs:{src:t.image,alt:""}})]),t._v(" "),s("div",{staticClass:"infoContainer"},[s("ul",[s("li",[t._v("Name: "+t._s(t.name))])]),t._v(" "),s("ul",[s("li",[t._v("Email: "+t._s(t.email))])]),t._v(" "),s("ul",[s("li",[t._v("Website: "+t._s(t.web))])]),t._v(" "),s("ul",[s("li",[t._v("Mobile: "+t._s(t.tel))])])])]),t._v(" "),s("form",{on:{submit:function(e){return e.preventDefault(),t.sendMessage(e)}}},[s("div",{staticClass:"form-control"},[s("label",[t._v("Your Name")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.message.name,expression:"message.name"}],attrs:{type:"text",required:""},domProps:{value:t.message.name},on:{input:function(e){e.target.composing||t.$set(t.message,"name",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-control"},[s("label",[t._v("Your Email")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.message.email,expression:"message.email"}],attrs:{type:"email",required:""},domProps:{value:t.message.email},on:{input:function(e){e.target.composing||t.$set(t.message,"email",e.target.value)}}})]),t._v(" "),s("div",{staticClass:"form-control"},[s("label",[t._v("Your Message")]),t._v(" "),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message.message,expression:"message.message"}],attrs:{required:""},domProps:{value:t.message.message},on:{input:function(e){e.target.composing||t.$set(t.message,"message",e.target.value)}}})]),t._v(" "),s("button",{attrs:{type:"submit"}},[t._v("Send")])])])])},staticRenderFns:[]};var w=s("VU/8")(_,b,!1,function(t){s("0uUr")},"data-v-784d87ba",null).exports,C={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"container"},[s("div",{staticClass:"workNav"},[s("ul",t._l(t.workNav,function(e,a){return s("li",{key:a,on:{click:function(s){t.changeCat(e.data)}}},[t._v("\n          "+t._s(e.name)+"\n        ")])}))]),t._v(" "),s("div",{staticClass:"workContainer"},[s("transition-group",t._l(t.projects,function(e,a){return s("ul",{key:a},[t.projectsToShow==e.category?s("li",[s("a",{attrs:{href:e.link,target:"_blank",rel:"noreferrer nofollow noopener"}},[s("div",{staticClass:"project",style:{backgroundImage:"url(static/Images/work/"+e.image+")"},on:{mouseenter:function(t){e.showTags=!0},mouseleave:function(t){e.showTags=!1}}},[s("h6",{staticClass:"title"},[t._v("\n                  "+t._s(e.name)+"\n                ")]),t._v(" "),s("div",{class:[e.showTags?t.projectHover:t.projectInner]}),t._v(" "),s("div",{staticClass:"tags"},[s("transition",{attrs:{name:"tagsIn"}},[e.showTags?s("ul",t._l(e.tags,function(e,a){return s("li",{key:a,class:{tagClass:t.tagClass}},[t._v("\n                        "+t._s(e)+"\n                      ")])})):t._e()])],1),t._v(" "),s("a",{staticClass:"footer",attrs:{href:e.github,target:"_blank",rel:"nofollow noreferrer noopener"}},[s("img",{attrs:{src:t.githubIcon,alt:"Github Icon",width:"30"}})])])])]):"all"==t.projectsToShow?s("li",[s("a",{attrs:{href:e.link,target:"_blank",rel:"noreferrer nofollow noopener"}},[s("div",{staticClass:"project",style:{backgroundImage:"url(static/Images/work/"+e.image+")"},on:{mouseenter:function(t){e.showTags=!0},mouseleave:function(t){e.showTags=!1}}},[s("h6",{staticClass:"title"},[t._v("\n                  "+t._s(e.name)+"\n                ")]),t._v(" "),s("div",{class:[e.showTags?t.projectHover:t.projectInner]}),t._v(" "),s("div",{staticClass:"tags"},[s("transition",{attrs:{name:"tagsIn"}},[e.showTags?s("ul",t._l(e.tags,function(e,a){return s("li",{key:a,class:{tagClass:t.tagClass}},[t._v("\n                        "+t._s(e)+"\n                      ")])})):t._e()])],1),t._v(" "),s("a",{staticClass:"footer",attrs:{href:e.github,target:"_blank",rel:"nofollow noreferrer noopener"}},[s("img",{attrs:{src:t.githubIcon,alt:"Github Icon",width:"30"}})])])])]):t._e()])}))],1)])])},staticRenderFns:[]};var k=s("VU/8")({data:function(){return{projectsToShow:"all",githubIcon:"static/Images/Social/gh.png",projectInner:"projectInner",projectHover:"projectHover",tagClass:"tagClass",workNav:[{name:"all",info:"",data:"all"},{name:"responsive design",info:"",data:"resp"},{name:"java script",info:"",data:"js"},{name:"php",info:"",data:"php"}],projects:[{id:8,name:"The City",info:"Responsive HTML, CSS, SASS web page",link:"https://heuristic-snyder-80745a.netlify.com/",github:"https://github.com/mru24/The-City",image:"theCity.jpg",tags:["HTML","SASS"],showTags:!1,category:"resp"},{id:7,name:"Kat FMWorld UK",info:"My first commercial project",link:"https://eager-franklin-097a07.netlify.com",github:"https://github.com/mru24/FM_World_UK",image:"fmworlduk.jpg",tags:["HTML","VUE JS","SASS","Bootstrap"],showTags:!1,category:"js"},{id:6,name:"My Portfolio",info:"This Portfolio",link:"https://vigilant-shirley-59d618.netlify.com",github:"https://github.com/mru24/Yet-another-Portfolio",image:"portfolio.jpg",tags:["HTML","VUE JS","SASS","Firebase"],showTags:!1,category:"js"},{id:5,name:"PropertiesHaven",info:"",link:"https://nifty-bardeen-3df8c6.netlify.com/",github:"https://github.com/mru24/PropertiesHaven",image:"propertiesHaven.jpg",tags:["HTML","SCSS","jQUERY"],showTags:!1,category:"resp"},{id:4,name:"Profile Widget",info:"",link:"https://jolly-fermi-d95467.netlify.com/",github:"https://github.com/mru24/Portfolio-Widget",image:"profileWidget.jpg",tags:["HTML","SCSS","Bootstrap","jQUERY"],showTags:!1,category:"resp"},{id:3,name:"School",info:"",link:"https://musing-hermann-a64cac.netlify.com/",github:"https://github.com/mru24/School",image:"school.jpg",tags:["HTML","SCSS","Bootstrap","jQUERY"],showTags:!1,category:"resp"},{id:2,name:"Ping - JS Game",info:"",link:"https://pensive-carson-b3e5e8.netlify.com/",github:"https://github.com/mru24/Ping_JS_Game",image:"Ping.jpg",tags:["JavaScript","HTML","SASS"],showTags:!1,category:"js"},{id:1,name:"Rossmann Properties",info:"New Vue JS project. Not finished yet",link:"https://nifty-curie-9f3992.netlify.com/",github:"https://github.com/mru24/RossmannProperties",image:"rossmann.jpg",tags:["HTML","Vue JS","SASS"],showTags:!1,category:"js"}]}},methods:{changeCat:function(t){this.projectsToShow=t}}},C,!1,function(t){s("4+Vy")},"data-v-0c779913",null).exports,S={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"container"},[this._m(0),this._v(" "),e("router-link",{attrs:{to:"/"}},[this._v("Back to Main Page")])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"success"},[e("h4",[this._v("\n        Your message has been sent."),e("br"),this._v("\n        Thank you.\n      ")])])}]};var j=s("VU/8")({},S,!1,function(t){s("7Q/t")},"data-v-49dcc97e",null).exports,y={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"container"},[this._m(0),this._v(" "),e("router-link",{attrs:{to:"/contact"}},[this._v("Return to Contact Page")])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"fail"},[e("h4",[this._v("\n        Ooops. Something went wrong."),e("br"),this._v("\n        Please try again\n      ")])])}]};var T=s("VU/8")({},y,!1,function(t){s("g/SW")},"data-v-e772aa22",null).exports;a.a.use(u.a);var I=new u.a({mode:"history",routes:[{path:"/",name:"Home",component:h},{path:"/contact",name:"Contact",component:w},{path:"/work",name:"Work",component:k},{path:"/success",name:"Success",component:j},{path:"/fail",name:"Fail",component:T}]});a.a.config.productionTip=!1,a.a.directive("red",{bind:function(t,e,s){!0===e.value&&(t.style.color="#bd0a0a")}}),new a.a({el:"#app",router:I,components:{App:c},template:"<App/>"})},TAYx:function(t,e){},"Z/vP":function(t,e){},ZBqh:function(t,e){},dJv3:function(t,e){},"g/SW":function(t,e){},vtH3:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.449b3fc4382b52fd5a9e.js.map
(function(t){function e(e){for(var n,o,s=e[0],l=e[1],c=e[2],d=0,p=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==i[l]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},i={app:0},r=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/curriculum-vitae/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0b10":function(t,e,a){t.exports=a.p+"img/binary-light.3cb13919.jpg"},"0b76":function(t,e,a){t.exports=a.p+"img/les-visiteurs.fee30fc4.gif"},"0be8":function(t,e,a){t.exports=a.p+"media/za-warudo.68bce22b.mp3"},"19e7":function(t,e,a){t.exports=a.p+"media/konami-code.e328c2d0.mp3"},"254f":function(t,e,a){t.exports=a.p+"img/bakery.2c498e0e.svg"},"26c9":function(t,e,a){t.exports=a.p+"img/phone-ring.53005ec5.svg"},"47cf":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-main",[a("v-responsive",{staticClass:"mx-auto",attrs:{"max-width":"1000px"}},[a("curiculum")],1)],1)],1)},r=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-btn",{staticClass:"mx-2",attrs:{fab:"",fixed:"",dark:t.$vuetify.theme.dark,small:"",color:"dark",right:"",top:""},on:{click:t.darkLight}},[n("v-icon",{attrs:{dark:t.$vuetify.theme.dark}},[t._v(" mdi-theme-light-dark ")])],1),n("v-btn",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"},{name:"show",rawName:"v-show",value:t.fab,expression:"fab"}],attrs:{fab:"",dark:t.$vuetify.theme.dark,small:"",fixed:"",bottom:"",right:""},on:{click:t.toTop}},[n("v-icon",{attrs:{dark:t.$vuetify.theme.dark}},[t._v("mdi-chevron-up")])],1),n("introduction"),n("skills"),n("timeline"),n("hobbies"),n("contact"),n("v-dialog",{attrs:{transition:"fab-transition",width:"320"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-img",{attrs:{src:a("0b76"),contain:"",height:"180"}})],1)],1)},s=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section introduction"},[n("v-parallax",{attrs:{src:t.$vuetify.theme.dark?a("bfb4"):a("0b10")}},[n("div",{staticClass:"wrapper"},[n("h1",[t._v("Jérôme Magnoux")]),n("h2",[t._v("Développeur web full-stack")]),n("v-row",{attrs:{color:"orange"}},[n("v-col",{staticClass:"d-flex justify-space-around",attrs:{cols:"6",sm:"3"}},[n("p",{staticClass:"d-flex flex-column align-center wobble-vertical-on-hover"},[n("v-icon",{attrs:{"x-large":"",color:"orange"}},[t._v("mdi-xml")]),n("span",{staticClass:"font-weight-bold"},[t._v("Front-end")])],1)]),n("v-col",{staticClass:"d-flex justify-space-around",attrs:{cols:"6",sm:"3"}},[n("p",{staticClass:"d-flex flex-column align-center wobble-vertical-on-hover"},[n("v-icon",{attrs:{"x-large":"",color:"orange"}},[t._v("mdi-database")]),n("span",{staticClass:"font-weight-bold"},[t._v("Back-end")])],1)]),n("v-col",{staticClass:"d-flex justify-space-around",attrs:{cols:"6",sm:"3"}},[n("p",{staticClass:"d-flex flex-column align-center wobble-vertical-on-hover"},[n("v-icon",{attrs:{"x-large":"",color:"orange"}},[t._v("mdi-cellphone")]),n("span",{staticClass:"font-weight-bold"},[t._v("Mobile")])],1)]),n("v-col",{staticClass:"d-flex justify-space-around",attrs:{cols:"6",sm:"3"}},[n("p",{staticClass:"d-flex flex-column align-center wobble-vertical-on-hover"},[n("v-icon",{attrs:{"x-large":"",color:"orange"}},[t._v("mdi-earth")]),n("span",{staticClass:"font-weight-bold"},[t._v("Anglais")])],1)])],1)],1)])],1)},c=[],u={name:"introduction",data:function(){return{}}},d=u,p=(a("a743"),a("2877")),m=a("6544"),f=a.n(m),v=a("62ad"),g=a("132d"),h=a("8b9c"),b=a("0fd9"),y=Object(p["a"])(d,l,c,!1,null,null,null),x=y.exports;f()(y,{VCol:v["a"],VIcon:g["a"],VParallax:h["a"],VRow:b["a"]});var C=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section timeline"},[a("v-row",{staticClass:"text-center"},[a("h2",[t._v("Parcours")])]),a("v-timeline",{attrs:{dense:t.$vuetify.breakpoint.xsOnly}},t._l(t.timeline,(function(e,n){return a("v-timeline-item",{key:n,attrs:{small:""},scopedSlots:t._u([{key:"opposite",fn:function(){return[a("span",{staticClass:"headline font-weight-bold",domProps:{textContent:t._s(e.year)},on:{click:t.counting}})]},proxy:!0}],null,!0)},[a("div",{staticClass:"py-4"},[a("v-card",{attrs:{elevation:"4"}},[a("v-card-title",{staticClass:"text-h6 light--text",class:e.study?"blue":"orange"},[t._v(" "+t._s(e.title)+" ")]),a("v-card-subtitle",{staticClass:"palce text-right light--text",class:e.study?"blue":"orange"},[t._v(" "+t._s(e.place)+" ")]),a("v-card-text",{staticClass:"secondary text--primary"},[void 0!=e.data1&&""!=e.data1?a("p",{staticClass:"secondary text--primary"},[t._v(" "+t._s(e.data1)+" ")]):t._e(),void 0!=e.data2&&""!=e.data2?a("p",{staticClass:"secondary text--primary"},[t._v(" "+t._s(e.data2)+" ")]):t._e(),void 0!=e.data3&&""!=e.data3?a("p",{staticClass:"secondary text--primary"},[t._v(" "+t._s(e.data3)+" ")]):t._e(),void 0!=e.link&&""!=e.link?a("a",{attrs:{href:e.link}},[t._v(t._s(e.link))]):t._e()])],1)],1)])})),1)],1)},w=[],_=a("fed8"),k={name:"timeline",data:function(){return{timeline:_,zaWarudo:0}},methods:{counting:function(){if(this.zaWarudo++,!(this.zaWarudo%5)){var t=new Audio(a("0be8"));t.play(),document.body.classList.add("za-warudo"),setTimeout((function(){document.body.classList.remove("za-warudo")}),6e3)}}}},V=k,F=a("b0af"),S=a("99d9"),P=a("8414"),j=a("1e06"),O=Object(p["a"])(V,C,w,!1,null,null,null),A=O.exports;f()(O,{VCard:F["a"],VCardSubtitle:S["a"],VCardText:S["b"],VCardTitle:S["c"],VRow:b["a"],VTimeline:P["a"],VTimelineItem:j["a"]});var q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section skills"},[a("v-row",{staticClass:"text-center"},[a("h2",[t._v("Compétences")])]),t._l(t.skills,(function(e,n){return a("v-row",{key:e.category+"-"+n},[a("v-col",{attrs:{cols:"12"}},[t._v(" "+t._s(e.category)+" ")]),a("v-row",{staticClass:"text-center"},t._l(e.data,(function(e,i,r){return a("v-col",{key:i+"-"+r,attrs:{cols:"6",sm:"4",md:"3",lg:"2"}},[a("v-progress-circular",{attrs:{rotate:90,size:100,width:15,value:e,color:n%2?"blue":"orange"}},[t._v(" "+t._s(e)+" ")]),a("p",[t._v(t._s(i))])],1)})),1)],1)}))],2)},D=[],I=a("a52b"),L={name:"skills",data:function(){return{skills:I}}},T=L,R=a("490a"),E=Object(p["a"])(T,q,D,!1,null,null,null),$=E.exports;f()(E,{VCol:v["a"],VProgressCircular:R["a"],VRow:b["a"]});var M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section hobbies"},[n("v-row",{staticClass:"text-center"},[n("h2",[t._v("Loisirs")])]),n("v-row",{staticClass:"text-center"},[n("v-col",{attrs:{cols:"12",sm:"4"}},[n("v-card",{staticClass:"pa-2",attrs:{outlined:"",shaped:""}},[n("v-img",{staticClass:"my-3 hobby",attrs:{src:a("254f"),contain:"",height:"200"}}),n("p",[t._v("Pâtisserie")])],1)],1),n("v-col",{attrs:{cols:"12",sm:"4"}},[n("v-card",{staticClass:"pa-2",attrs:{outlined:"",shaped:""}},[n("v-img",{staticClass:"my-3 hobby",attrs:{src:a("e40d"),contain:"",height:"200"}}),n("p",[t._v("Jeu de rôle")])],1)],1),n("v-col",{attrs:{cols:"12",sm:"4"}},[n("v-card",{staticClass:"pa-2",attrs:{outlined:"",shaped:""}},[n("v-img",{staticClass:"my-3 hobby",attrs:{src:a("9506"),contain:"",height:"200"}}),n("p",[t._v("Impression 3D")])],1)],1)],1)],1)},B=[],J={name:"hobbies",data:function(){return{}}},N=J,H=(a("bd6b"),a("adda")),G=Object(p["a"])(N,M,B,!1,null,"2527654f",null),W=G.exports;f()(G,{VCard:F["a"],VCol:v["a"],VImg:H["a"],VRow:b["a"]});var z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section contacts"},[n("v-row",{staticClass:"text-center"},[n("h2",[t._v("Contact")])]),n("v-row",{staticClass:"text-center"},[n("v-col",{attrs:{cols:"12",xl:"3",lg:"3",md:"6",sm:"6"}},[n("a",{attrs:{href:t.publicPath+"CV.pdf",download:""}},[n("v-card",{staticClass:"pa-2",attrs:{outlined:"",tile:"",hover:""}},[n("v-img",{staticClass:"my-3 contact",attrs:{src:a("6369"),contain:"",height:"100"}}),n("p",[t._v("CV")])],1)],1)]),n("v-col",{attrs:{cols:"12",xl:"3",lg:"3",md:"6",sm:"6"}},[n("a",{attrs:{href:"tel:+33664412186"}},[n("v-card",{staticClass:"pa-2",attrs:{outlined:"",tile:"",hover:""}},[n("v-img",{staticClass:"my-3 contact",attrs:{src:a("26c9"),contain:"",height:"100"}}),n("p",[t._v("06.64.41.21.86")])],1)],1)]),n("v-col",{attrs:{cols:"12",xl:"3",lg:"3",md:"6",sm:"6"}},[n("a",{attrs:{href:"mailto: jmagnoux@gmail.com"}},[n("v-card",{staticClass:"pa-2",attrs:{outlined:"",tile:"",hover:""}},[n("v-img",{staticClass:"my-3 contact",attrs:{src:a("9055"),contain:"",height:"100"}}),n("p",[t._v("jmagnoux@gmail.com")])],1)],1)]),n("v-col",{attrs:{cols:"12",xl:"3",lg:"3",md:"6",sm:"6"}},[n("a",{attrs:{href:"https://www.linkedin.com/in/j%C3%A9r%C3%B4me-magnoux-a0964a138/"}},[n("v-card",{staticClass:"pa-2",attrs:{outlined:"",tile:"",hover:""}},[n("v-img",{staticClass:"my-3 contact",attrs:{src:a("953d"),contain:"",height:"100"}}),n("p",[t._v("LinkedIn")])],1)],1)])],1)],1)},U=[],X={name:"contact",data:function(){return{publicPath:"/curriculum-vitae/"}}},K=X,Q=(a("9175"),Object(p["a"])(K,z,U,!1,null,"42fa1626",null)),Y=Q.exports;f()(Q,{VCard:F["a"],VCol:v["a"],VImg:H["a"],VRow:b["a"]});var Z={name:"curiculum",components:{introduction:x,timeline:A,skills:$,hobbies:W,contact:Y},data:function(){return{fab:!1,dialog:!1,count:0}},methods:{darkLight:function(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark,this.count++,this.count%10||(this.dialog=!0)},onScroll:function(t){if("undefined"!==typeof window){var e=window.pageYOffset||t.target.scrollTop||0;this.fab=e>20}},toTop:function(){this.$vuetify.goTo(0)}}},tt=Z,et=(a("648a"),a("8336")),at=a("a523"),nt=a("169a"),it=a("269a"),rt=a.n(it),ot=a("f977"),st=Object(p["a"])(tt,o,s,!1,null,null,null),lt=st.exports;f()(st,{VBtn:et["a"],VContainer:at["a"],VDialog:nt["a"],VIcon:g["a"],VImg:H["a"]}),rt()(st,{Scroll:ot["a"]});var ct={name:"App",components:{curiculum:lt},data:function(){return{}}},ut=ct,dt=a("7496"),pt=a("f6c4"),mt=a("6b53"),ft=Object(p["a"])(ut,i,r,!1,null,null,null),vt=ft.exports;f()(ft,{VApp:dt["a"],VMain:pt["a"],VResponsive:mt["a"]});var gt=a("f309");n["a"].use(gt["a"]);var ht=new gt["a"]({theme:{options:{customProperties:!0},themes:{light:{primary:"#575556",secondary:"#FFFFFF",light:"#FFFFFF",grey:"#A8AAA9",blue:"#24445C",orange:{base:"#B36700"}},dark:{primary:"#FFFFFF",secondary:"#575556",light:"#FFFFFF",grey:"#575556",blue:"#6a90a3",orange:{base:"#F4A426"}}}}}),bt=ht;n["a"].config.productionTip=!1;var yt=[38,38,40,40,37,39,37,39,66,65],xt=yt.length,Ct=0;document.addEventListener("keydown",(function(t){if(t.keyCode===yt[Ct++]){if(xt===Ct){var e=new Audio(a("19e7"));return e.play(),Ct=0,!1}}else Ct=0}),!1),new n["a"]({vuetify:bt,render:function(t){return t(vt)}}).$mount("#app")},"5f9e":function(t,e,a){},6369:function(t,e,a){t.exports=a.p+"img/download.4c7ab456.svg"},"648a":function(t,e,a){"use strict";a("f7f6")},7109:function(t,e,a){},9055:function(t,e,a){t.exports=a.p+"img/email.c40fc05b.svg"},9175:function(t,e,a){"use strict";a("47cf")},9506:function(t,e,a){t.exports=a.p+"img/3d-print.ba0bbc03.svg"},"953d":function(t,e,a){t.exports=a.p+"img/linkedin.ed994e58.svg"},a52b:function(t){t.exports=JSON.parse('[{"category":"O.S.","data":{"Linux":80,"Windows":80,"MacOs":40}},{"category":"Langages","data":{"HTML/CSS":90,"PHP":80,"JavaScript":75,"MySQL":70,"C/C++":60,"Java":40,"Swift":40}},{"category":"Framework & Bibliothèque","data":{"VueJS":75,"Element-ui":75,"CodeIgniter":75,"Slim":65,"Doctrine":60}}]')},a743:function(t,e,a){"use strict";a("5f9e")},bd6b:function(t,e,a){"use strict";a("7109")},bfb4:function(t,e,a){t.exports=a.p+"img/binary-dark.dc55056f.jpg"},e40d:function(t,e,a){t.exports=a.p+"img/dice.cf8656cd.svg"},f7f6:function(t,e,a){},fed8:function(t){t.exports=JSON.parse('[{"year":"2022","study":false,"title":"Développeur web","place":"Carenity, Paris, Île-de-France","data1":"Maintien et amélioration de sites internet","data2":"Développement des fonctionnalités présentent sur le site, Backoffice et outil d’enquêtes.","data3":"→  PHP, VueJS, DDD, API, Git, Autonomie, Rigueur, Gestion de projet.","link":"https://www.carenity.com"},{"year":"2017","study":true,"title":"Formation « Développement Web »","place":"E2N, Noyon, Hauts-de-France","data1":"Formation de 6 mois à temps plein labellisée Grande École du Numérique par L’État.","data2":"Titre Professionnel ”Développeur Logiciel”.","link":"http://formation.novei.fr/"},{"study":false,"title":"Développeur web","place":"E2N, Noyon, Hauts-de-France","data1":"Réalisation d\'un site d\'e-commerce","data2":"Développement d\'un site e-commerce responsive.","data3":"→ HTML/CSS, JavaScript, AngularJS, Versionning, Pair programming, Rigueur."},{"year":"2014","study":true,"title":"Diplôme d’ingénieur","place":"ENSSAT, Lannion, Bretagne","data1":"Électronique et informatique industrielle.","data2":"Sujets principaux: Électronique numérique, Programmation, Traitement du signal, Télécommunication et Maths.","link":"http://www.enssat.fr/fr_FR/formations/formation-ingenieur-electronique"},{"study":false,"title":"Ingénieur développement smartphone","place":"Orange Labs, Rennes, Bretagne","data1":"Réalisation d’un démonstrateur audio 3D sur terminaux mobiles.","data2":"Rétro-ingénierie & Développement d’application.","data3":"→ Objective-C, C++, XCode, Autonomie, Gestion du temps, Rétro-ingénierie."},{"study":false,"title":"Ingénieur électronique numérique","place":"Laboratoire IRISA, Lannion, Bretagne","data1":"Étude de faisabilité de transmission UWB entre FPGA.","data2":"Recherche & Développement d’un prototype.","data3":"→ VHDL, Virtex-6, Xilinx ISE, UWB, R&D, Autonomie."},{"year":"2013","study":false,"title":"Ingénieur électronique analogique","place":"Association Observatoire Pleumeur-Bodou, Pleumeur-Bodou, Bretagne","data1":"Réalisation d’une carte d\'asservissement.","data2":"Routage & Asservissement","data3":"→ Kicad, Proteus, Java, Autonomie, Organisation."},{"study":false,"title":"Développeur C","place":"Club robotique ENSSAT, Lannion, Côtes-d’Armor","data1":"Programmation d’un tri par couleur.","data2":"Documentation & Développement d’une fonctionnalité.","data3":"→ C, MPlab X, Kicad, Esprit d’équipe, Pédagogie."},{"year":"2010","study":true,"title":"DUT GEII","place":"IUT de l’Aisne, Cuffies, Hauts-de-France","data1":"Génie Électrique et Informatique Industrielle.","data2":"Sujets principaux: Électronique numérique et analogique, programmation C/C++ et Électrotechnique.","link":"https://iut-aisne.u-picardie.fr/departements/ge2i/genie-electrique-et-informatique-industrielle-400711.kjsp"},{"study":false,"title":"Technicien développeur logiciel","place":"Matra Électronique, Lacroix-Saint-Ouen, Hauts-de-France","data1":"Étude de faisabilité de portage d’une IHM pour VEE.","data2":"Développement de prototypes","data3":"→ Windev, Qt, C/C++, Gestion du temps."},{"year":"2008","study":true,"title":"Baccalauréat Scientifique option Science de l’Ingénieur","place":"Lycée Jean Calvin, Noyon, Hauts-de-France","link":"http://calvin.lyc.ac-amiens.fr/sitewp/"}]')}});
//# sourceMappingURL=app.cb3ec806.js.map
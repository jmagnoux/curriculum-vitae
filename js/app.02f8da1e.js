(function(t){function e(e){for(var n,s,o=e[0],l=e[1],c=e[2],d=0,p=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},i={app:0},r=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0b10":function(t,e,a){t.exports=a.p+"img/binary-light.3cb13919.jpg"},"254f":function(t,e,a){t.exports=a.p+"img/bakery.2c498e0e.svg"},"26c9":function(t,e,a){t.exports=a.p+"img/phone-ring.53005ec5.svg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-main",[a("v-responsive",{staticClass:"mx-auto",attrs:{"max-width":"1000px"}},[a("curiculum")],1)],1)],1)},r=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("v-btn",{staticClass:"mx-2",attrs:{fab:"",fixed:"",dark:t.$vuetify.theme.dark,small:"",shaped:"",color:"dark",right:"",top:""},on:{click:function(e){t.$vuetify.theme.dark=!t.$vuetify.theme.dark}}},[a("v-icon",{attrs:{dark:t.$vuetify.theme.dark}},[t._v(" mdi-theme-light-dark ")])],1),a("v-btn",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"},{name:"show",rawName:"v-show",value:t.fab,expression:"fab"}],attrs:{fab:"",dark:t.$vuetify.theme.dark,small:"",fixed:"",bottom:"",right:""},on:{click:t.toTop}},[a("v-icon",{attrs:{dark:t.$vuetify.theme.dark}},[t._v("mdi-chevron-up")])],1),a("introduction"),a("skills"),a("timeline"),a("hobbies"),a("contact")],1)},o=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section introduction"},[n("v-parallax",{attrs:{src:t.$vuetify.theme.dark?a("bfb4"):a("0b10")}},[n("div",{staticClass:"wrapper"},[n("h1",[t._v("Jérôme Magnoux")]),n("h2",[t._v("Développeur web full-stack")]),n("v-row",{attrs:{color:"orange"}},[n("v-col",{staticClass:"d-flex justify-space-around",attrs:{cols:"6",sm:"3"}},[n("p",{staticClass:"d-flex flex-column align-center wobble-vertical-on-hover"},[n("v-icon",{attrs:{"x-large":"",color:"orange"}},[t._v("mdi-xml")]),n("span",{staticClass:"font-weight-bold"},[t._v("Front-end")])],1)]),n("v-col",{staticClass:"d-flex justify-space-around",attrs:{cols:"6",sm:"3"}},[n("p",{staticClass:"d-flex flex-column align-center wobble-vertical-on-hover"},[n("v-icon",{attrs:{"x-large":"",color:"orange"}},[t._v("mdi-database")]),n("span",{staticClass:"font-weight-bold"},[t._v("Back-end")])],1)]),n("v-col",{staticClass:"d-flex justify-space-around",attrs:{cols:"6",sm:"3"}},[n("p",{staticClass:"d-flex flex-column align-center wobble-vertical-on-hover"},[n("v-icon",{attrs:{"x-large":"",color:"orange"}},[t._v("mdi-cellphone")]),n("span",{staticClass:"font-weight-bold"},[t._v("Mobile")])],1)]),n("v-col",{staticClass:"d-flex justify-space-around",attrs:{cols:"6",sm:"3"}},[n("p",{staticClass:"d-flex flex-column align-center wobble-vertical-on-hover"},[n("v-icon",{attrs:{"x-large":"",color:"orange"}},[t._v("mdi-earth")]),n("span",{staticClass:"font-weight-bold"},[t._v("Anglais")])],1)])],1)],1)])],1)},c=[],u={name:"introduction",data:function(){return{}}},d=u,p=(a("a743"),a("2877")),m=a("6544"),v=a.n(m),f=a("62ad"),g=a("132d"),h=a("8b9c"),b=a("0fd9"),y=Object(p["a"])(d,l,c,!1,null,null,null),C=y.exports;v()(y,{VCol:f["a"],VIcon:g["a"],VParallax:h["a"],VRow:b["a"]});var x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section timeline"},[a("v-row",{staticClass:"text-center"},[a("h2",[t._v("Parcours")])]),a("v-timeline",{attrs:{dense:t.$vuetify.breakpoint.xsOnly}},t._l(t.timeline,(function(e,n){return a("v-timeline-item",{key:n,attrs:{small:""},scopedSlots:t._u([{key:"opposite",fn:function(){return[a("span",{staticClass:"headline font-weight-bold",domProps:{textContent:t._s(e.year)}})]},proxy:!0}],null,!0)},[a("div",{staticClass:"py-4"},[a("v-card",{attrs:{elevation:"4"}},[a("v-card-title",{staticClass:"text-h6 light--text",class:e.study?"blue":"orange"},[t._v(" "+t._s(e.title)+" ")]),a("v-card-subtitle",{staticClass:"palce text-right light--text",class:e.study?"blue":"orange"},[t._v(" "+t._s(e.place)+" ")]),a("v-card-text",{staticClass:"secondary text--primary"},[void 0!=e.data1&&""!=e.data1?a("p",{staticClass:"secondary text--primary"},[t._v(" "+t._s(e.data1)+" ")]):t._e(),void 0!=e.data2&&""!=e.data2?a("p",{staticClass:"secondary text--primary"},[t._v(" "+t._s(e.data2)+" ")]):t._e(),void 0!=e.data3&&""!=e.data3?a("p",{staticClass:"secondary text--primary"},[t._v(" "+t._s(e.data3)+" ")]):t._e(),void 0!=e.link&&""!=e.link?a("a",{attrs:{href:e.link}},[t._v(t._s(e.link))]):t._e()])],1)],1)])})),1)],1)},_=[],w=a("fed8"),k={name:"timeline",data:function(){return{timeline:w}}},F=k,S=a("b0af"),V=a("99d9"),j=a("8414"),O=a("1e06"),P=Object(p["a"])(F,x,_,!1,null,null,null),q=P.exports;v()(P,{VCard:S["a"],VCardSubtitle:V["a"],VCardText:V["b"],VCardTitle:V["c"],VRow:b["a"],VTimeline:j["a"],VTimelineItem:O["a"]});var A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"section skills"},[a("v-row",{staticClass:"text-center"},[a("h2",[t._v("Compétences")])]),t._l(t.skills,(function(e,n){return a("v-row",{key:e.category+"-"+n},[a("v-col",{attrs:{cols:"12"}},[t._v(" "+t._s(e.category)+" ")]),a("v-row",{staticClass:"text-center"},t._l(e.data,(function(e,i,r){return a("v-col",{key:i+"-"+r,attrs:{cols:"6",sm:"4",md:"3",lg:"2"}},[a("v-progress-circular",{attrs:{rotate:90,size:100,width:15,value:e,color:n%2?"blue":"orange"}},[t._v(" "+t._s(e)+" ")]),a("p",[t._v(t._s(i))])],1)})),1)],1)}))],2)},D=[],I=a("a52b"),T={name:"skills",data:function(){return{skills:I}}},R=T,E=a("490a"),L=Object(p["a"])(R,A,D,!1,null,null,null),$=L.exports;v()(L,{VCol:f["a"],VProgressCircular:E["a"],VRow:b["a"]});var M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section hobbies"},[n("v-row",{staticClass:"text-center"},[n("h2",[t._v("Loisirs")])]),n("v-row",{staticClass:"text-center"},[n("v-col",{attrs:{cols:"12",sm:"4"}},[n("v-card",{staticClass:"pa-2",attrs:{outlined:"",shaped:""}},[n("v-img",{staticClass:"my-3 hobby",attrs:{src:a("254f"),contain:"",height:"200"}}),n("p",[t._v("Pâtisserie")])],1)],1),n("v-col",{attrs:{cols:"12",sm:"4"}},[n("v-card",{staticClass:"pa-2",attrs:{outlined:"",shaped:""}},[n("v-img",{staticClass:"my-3 hobby",attrs:{src:a("e40d"),contain:"",height:"200"}}),n("p",[t._v("Jeu de rôle")])],1)],1),n("v-col",{attrs:{cols:"12",sm:"4"}},[n("v-card",{staticClass:"pa-2",attrs:{outlined:"",shaped:""}},[n("v-img",{staticClass:"my-3 hobby",attrs:{src:a("9506"),contain:"",height:"200"}}),n("p",[t._v("Impression 3D")])],1)],1)],1)],1)},B=[],J={name:"hobbies",data:function(){return{}}},N=J,H=(a("bd6b"),a("adda")),G=Object(p["a"])(N,M,B,!1,null,"2527654f",null),W=G.exports;v()(G,{VCard:S["a"],VCol:f["a"],VImg:H["a"],VRow:b["a"]});var U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"section contacts"},[n("v-row",{staticClass:"text-center"},[n("h2",[t._v("Contact")])]),n("v-row",{staticClass:"text-center"},[n("v-col",{attrs:{cols:"12",xl:"3",lg:"3",md:"6",sm:"6"}},[n("a",{attrs:{href:"../assets/CV.pdf",download:""}},[n("v-card",{staticClass:"pa-2",attrs:{outlined:"",tile:"",hover:""}},[n("v-img",{staticClass:"my-3 contact",attrs:{src:a("6369"),contain:"",height:"100"}}),n("p",[t._v("CV papier")])],1)],1)]),n("v-col",{attrs:{cols:"12",xl:"3",lg:"3",md:"6",sm:"6"}},[n("a",{attrs:{href:"tel:+33664412186"}},[n("v-card",{staticClass:"pa-2",attrs:{outlined:"",tile:"",hover:""}},[n("v-img",{staticClass:"my-3 contact",attrs:{src:a("26c9"),contain:"",height:"100"}}),n("p",[t._v("06.64.41.21.86")])],1)],1)]),n("v-col",{attrs:{cols:"12",xl:"3",lg:"3",md:"6",sm:"6"}},[n("a",{attrs:{href:"mailto: jmagnoux@gmail.com"}},[n("v-card",{staticClass:"pa-2",attrs:{outlined:"",tile:"",hover:""}},[n("v-img",{staticClass:"my-3 contact",attrs:{src:a("9055"),contain:"",height:"100"}}),n("p",[t._v("jmagnoux@gmail.com")])],1)],1)]),n("v-col",{attrs:{cols:"12",xl:"3",lg:"3",md:"6",sm:"6"}},[n("a",{attrs:{href:"https://www.linkedin.com/in/j%C3%A9r%C3%B4me-magnoux-a0964a138/"}},[n("v-card",{staticClass:"pa-2",attrs:{outlined:"",tile:"",hover:""}},[n("v-img",{staticClass:"my-3 contact",attrs:{src:a("953d"),contain:"",height:"100"}}),n("p",[t._v("LinkedIn")])],1)],1)])],1)],1)},X=[],K={name:"contact",data:function(){return{}}},Q=K,z=(a("e0c7"),Object(p["a"])(Q,U,X,!1,null,"f42ecede",null)),Y=z.exports;v()(z,{VCard:S["a"],VCol:f["a"],VImg:H["a"],VRow:b["a"]});var Z={name:"curiculum",components:{introduction:C,timeline:q,skills:$,hobbies:W,contact:Y},data:function(){return{fab:!1}},methods:{onScroll:function(t){if("undefined"!==typeof window){var e=window.pageYOffset||t.target.scrollTop||0;this.fab=e>20}},toTop:function(){this.$vuetify.goTo(0)}}},tt=Z,et=(a("648a"),a("8336")),at=a("a523"),nt=a("269a"),it=a.n(nt),rt=a("f977"),st=Object(p["a"])(tt,s,o,!1,null,null,null),ot=st.exports;v()(st,{VBtn:et["a"],VContainer:at["a"],VIcon:g["a"]}),it()(st,{Scroll:rt["a"]});var lt={name:"App",components:{curiculum:ot},data:function(){return{}}},ct=lt,ut=a("7496"),dt=a("f6c4"),pt=a("6b53"),mt=Object(p["a"])(ct,i,r,!1,null,null,null),vt=mt.exports;v()(mt,{VApp:ut["a"],VMain:dt["a"],VResponsive:pt["a"]});var ft=a("f309");n["a"].use(ft["a"]);var gt=new ft["a"]({theme:{options:{customProperties:!0},themes:{light:{primary:"#575556",secondary:"#FFFFFF",light:"#FFFFFF",grey:"#A8AAA9",blue:"#24445C",orange:{base:"#B36700"}},dark:{primary:"#FFFFFF",secondary:"#575556",light:"#FFFFFF",grey:"#575556",blue:"#6a90a3",orange:{base:"#F4A426"}}}}}),ht=gt;n["a"].config.productionTip=!1,new n["a"]({vuetify:ht,render:function(t){return t(vt)}}).$mount("#app")},"5f9e":function(t,e,a){},6369:function(t,e,a){t.exports=a.p+"img/download.4c7ab456.svg"},"648a":function(t,e,a){"use strict";a("f7f6")},7109:function(t,e,a){},9055:function(t,e,a){t.exports=a.p+"img/email.c40fc05b.svg"},9340:function(t,e,a){},9506:function(t,e,a){t.exports=a.p+"img/3d-print.ba0bbc03.svg"},"953d":function(t,e,a){t.exports=a.p+"img/linkedin.ed994e58.svg"},a52b:function(t){t.exports=JSON.parse('[{"category":"O.S.","data":{"Linux":80,"Windows":80,"MacOs":40}},{"category":"Langages","data":{"HTML/CSS":90,"PHP":80,"JavaScript":75,"MySQL":70,"C/C++":60,"Java":40,"Swift":40}},{"category":"Framework & Bibliothèque","data":{"VueJS":75,"Element-ui":75,"CodeIgniter":75,"Slim":65,"Doctrine":60}}]')},a743:function(t,e,a){"use strict";a("5f9e")},bd6b:function(t,e,a){"use strict";a("7109")},bfb4:function(t,e,a){t.exports=a.p+"img/binary-dark.dc55056f.jpg"},e0c7:function(t,e,a){"use strict";a("9340")},e40d:function(t,e,a){t.exports=a.p+"img/dice.cf8656cd.svg"},f7f6:function(t,e,a){},fed8:function(t){t.exports=JSON.parse('[{"study":false,"title":"Développeur web","place":"Carenity, Paris, Île-de-France","data1":"Maintien et amélioration de sites internet","data2":"Développement des fonctionnalités présentent sur le site, Backoffice et outil d’enquêtes.","data3":"→  PHP, VueJS, DDD, API, Git, Autonomie, Rigueur, Gestion de projet.","link":"https://www.carenity.com"},{"year":"2017","study":true,"title":"Formation « Développement Web »","place":"E2N, Noyon, Hauts-de-France","data1":"Formation de 6 mois à temps plein labellisée Grande École du Numérique par L’État.","data2":"Titre Professionnel ”Développeur Logiciel”.","link":"http://formation.novei.fr/"},{"study":false,"title":"Développeur web","place":"E2N, Noyon, Hauts-de-France","data1":"Réalisation d\'un site d\'e-commerce","data2":"Développement d\'un site e-commerce responsive.","data3":"→ HTML/CSS, JavaScript, AngularJS, Versionning, Pair programming, Rigueur."},{"year":"2014","study":true,"title":"Diplôme d’ingénieur","place":"ENSSAT, Lannion, Bretagne","data1":"Électronique et informatique industrielle.","data2":"Sujets principaux: Électronique numérique, Programmation, Traitement du signal, Télécommunication et Maths.","link":"http://www.enssat.fr/fr_FR/formations/formation-ingenieur-electronique"},{"study":false,"title":"Ingénieur développement smartphone","place":"Orange Labs, Rennes, Bretagne","data1":"Réalisation d’un démonstrateur audio 3D sur terminaux mobiles.","data2":"Rétro-ingénierie & Développement d’application.","data3":"→ Objective-C, C++, XCode, Autonomie, Gestion du temps, Rétro-ingénierie."},{"study":false,"title":"Ingénieur électronique numérique","place":"Laboratoire IRISA, Lannion, Bretagne","data1":"Étude de faisabilité de transmission UWB entre FPGA.","data2":"Recherche & Développement d’un prototype.","data3":"→ VHDL, Virtex-6, Xilinx ISE, UWB, R&D, Autonomie."},{"year":"2013","study":false,"title":"Ingénieur électronique analogique","place":"Association Observatoire Pleumeur-Bodou, Pleumeur-Bodou, Bretagne","data1":"Réalisation d’une carte d\'asservissement.","data2":"Routage & Asservissement","data3":"→ Kicad, Proteus, Java, Autonomie, Organisation."},{"year":"2013","study":false,"title":"Développeur C","place":"Club robotique ENSSAT, Lannion, Côtes-d’Armor","data1":"Programmation d’un tri par couleur.","data2":"Documentation & Développement d’une fonctionnalité.","data3":"→ C, MPlab X, Kicad, Esprit d’équipe, Pédagogie."},{"year":"2010","study":true,"title":"DUT GEII","place":"IUT de l’Aisne, Cuffies, Hauts-de-France","data1":"Génie Électrique et Informatique Industrielle.","data2":"Sujets principaux: Électronique numérique et analogique, programmation C/C++ et Électrotechnique.","link":"https://iut-aisne.u-picardie.fr/departements/ge2i/genie-electrique-et-informatique-industrielle-400711.kjsp"},{"study":false,"title":"Technicien développeur logiciel","place":"Matra Électronique, Lacroix-Saint-Ouen, Hauts-de-France","data1":"Étude de faisabilité de portage d’une IHM pour VEE.","data2":"Développement de prototypes","data3":"→ Windev, Qt, C/C++, Gestion du temps."},{"year":"2008","study":true,"title":"Baccalauréat Scientifique option Science de l’Ingénieur","place":"Lycée Jean Calvin, Noyon, Hauts-de-France","link":"http://calvin.lyc.ac-amiens.fr/sitewp/"}]')}});
//# sourceMappingURL=app.02f8da1e.js.map
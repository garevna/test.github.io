(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["page"],{"002c":function(t,e,a){"use strict";var s=a("d858"),n=a.n(s);n.a},"0e1f":function(t,e,a){t.exports=a.p+"img/dgtek-logo.992dc132.svg"},"12f6":function(t,e,a){"use strict";var s=a("a7ae"),n=a.n(s);n.a},2048:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.ready?a("v-container",{staticClass:"homefone",attrs:{fluid:""}},[a("MainMenu",{attrs:{page:t.page},on:{"update:page":function(e){t.page=e}}}),a("v-sheet",{staticClass:"mx-auto",attrs:{width:"100%","max-width":"1440",color:"homefone",tile:""}},[a("section",{staticStyle:{width:"100%"},attrs:{id:"top"}},[a("div",{staticClass:"base-title"},[a("a",{staticClass:"core-goto",attrs:{href:"#top"}}),a("Top",{attrs:{page:t.goto},on:{"update:page":function(e){t.goto=e}}})],1)])]),a("v-row",{staticClass:"mx-0 px-0",attrs:{align:"center",justify:"center"}},[a("Reviews",{attrs:{goto:t.goto},on:{"update:goto":function(e){t.goto=e}}})],1),a("v-sheet",{staticClass:"mx-auto",attrs:{width:"100%","max-width":"1130",color:"homefone",tile:""}},[a("v-row",{staticClass:"mx-0 px-0",attrs:{align:"start",justify:"center"}},[a("v-col",{staticClass:"aside-col",attrs:{cols:"12",md:"7"}},[a("section",{staticStyle:{width:"100%"},attrs:{id:"benefits"}},[a("div",{staticClass:"base-title"},[a("a",{staticClass:"core-goto",attrs:{href:"#benefits"}}),a("Aside")],1)])]),a("v-col",{staticClass:"mx-0 px-0",attrs:{cols:"12",md:"5"}},[a("v-row",{staticClass:"pa-0 my-12",attrs:{align:"center",justify:"center"}},[a("UserForm",{attrs:{address:t.address}})],1)],1)],1)],1)],1):t._e()},n=[],r=(a("c975"),a("fb6a"),a("d3b7"),a("96cf"),a("1da1")),i=a("5530"),o=a("2f62"),c=a("e9c9"),l=a("3d13"),d={name:"Page",props:["route"],components:{UserForm:function(){return a.e("userForm").then(a.bind(null,"2052"))},Reviews:function(){return Promise.all([a.e("main-menu"),a.e("reviews")]).then(a.bind(null,"ba1d"))},MainMenu:function(){return Promise.all([a.e("main-menu"),a.e("reviews")]).then(a.bind(null,"9915"))},Top:c["a"],Aside:l["a"]},data:function(){return{ready:!1,page:null,goto:null}},computed:Object(i["a"])(Object(i["a"])({},Object(o["c"])(["browserTabTitle","pages","mainContentHeight","footerHeight"])),Object(o["c"])("content",["address"])),watch:{route:function(t){this.$vuetify.goTo("#top",{duration:500,offset:80,easing:"easeInOutCubic"})},goto:function(t){t&&(this.$vuetify.goTo(t,{duration:500,offset:20,easing:"easeInOutCubic"}),this.goto=void 0)},page:function(t){if(t){if(0===t.indexOf("#"))return this.$vuetify.goTo(t,{duration:500,offset:50,easing:"easeInOutCubic"}),void(this.page=void 0);if(0===t.indexOf("http"))return window.open(t,"_blank"),void(this.page=void 0);this.$router.push({name:t}),this.page=void 0}}},methods:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(o["b"])({getPages:"GET_PAGES",getCommonData:"GET_COMMON_DATA"})),Object(o["b"])("content",{getContent:"GET_PAGE_CONTENT"})),{},{getReady:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.browserTabTitle){e.next=3;break}return e.next=3,t.getCommonData();case 3:if(t.pages){e.next=6;break}return e.next=6,t.getPages();case 6:case"end":return e.stop()}}),e)})))()}}),beforeRouteEnter:function(t,e,a){a((function(e){e.getReady();var s=t.path.slice(1),n=e.getPageIdByAddressBarString(s);n?e.getContent("live-".concat(n)).then((function(t){t?(e.ready=!0,a()):a("/404")})):a("/404")}))},mounted:function(){this.page=void 0}},u=d,f=(a("2e76"),a("2877")),p=a("6544"),m=a.n(p),C=a("62ad"),g=a("a523"),h=a("0fd9"),v=a("8dd9"),x=Object(f["a"])(u,s,n,!1,null,"4739e891",null);e["default"]=x.exports;m()(x,{VCol:C["a"],VContainer:g["a"],VRow:h["a"],VSheet:v["a"]})},"2e76":function(t,e,a){"use strict";var s=a("8cc1"),n=a.n(s);n.a},"3d13":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-card",{staticClass:"transparent",attrs:{flat:"",width:"100%"}},[s("v-row",{staticClass:"my-12",attrs:{align:"start",justify:"center"}},["blackfriday"!==t.$route.name?s("v-card",{staticClass:"deepgreen mx-auto my-12 pa-8",attrs:{dark:"",width:"100%"}},[s("h3",{staticStyle:{color:"#fff!important","text-align":"center"}},[t._v(" "+t._s(t.address.formatted)+" ")]),s("h4",{staticStyle:{color:"#fff!important","text-wrap":"normal","text-align":"center"}},[t._v(" "+t._s(t.address.streetNumber)+" "+t._s(t.address.streetName)+", "+t._s(t.address.city)+" "+t._s(t.address.state)+" "+t._s(t.address.postcode)+" ")])]):t._e()],1),s("v-card",{staticClass:"aside-card transparent mx-auto my-12",attrs:{flat:"","max-width":"480"}},[s("v-row",{staticClass:"mt-12",attrs:{align:"center",justify:"center"}},[s("v-card-title",[s("h2",{staticClass:"text-left"},[t._v(t._s(t.info.header))])]),s("v-card-text",[s("p",{staticClass:"text-left",domProps:{innerHTML:t._s(t.info.text.split("\n").join("<br>"))}})]),s("v-card-text",t._l(t.info.offer,(function(e,a){return s("h5",{key:a,staticStyle:{"margin-bottom":"16px"}},[s("strong",{staticStyle:{color:"#72BF44","margin-right":"8px"}},[t._v(t._s(e.greenText))]),t._v(t._s(e.blackText)+" ")])})),0)],1),s("v-row",{staticClass:"mt-0 mt-md-12",attrs:{align:"center",justify:"center"}},[s("v-card-text",{staticClass:"my-12"},[s("a",{attrs:{href:"https://dgtek.net",target:"_blank"}},[s("span",{staticClass:"small text-left",staticStyle:{"margin-right":"16px"}},[t._v("Pineapple NET is powered by")]),s("v-img",{staticStyle:{display:"inline-block","vertical-align":"middle"},attrs:{src:a("0e1f"),width:"50"}})],1)])],1)],1)],1)},n=[],r=a("5530"),i=a("2f62"),o={name:"Aside",computed:Object(r["a"])({},Object(i["c"])("content",["info","address"]))},c=o,l=(a("12f6"),a("2877")),d=a("6544"),u=a.n(d),f=a("b0af"),p=a("99d9"),m=a("adda"),C=a("0fd9"),g=Object(l["a"])(c,s,n,!1,null,"525ca52c",null);e["a"]=g.exports;u()(g,{VCard:f["a"],VCardText:p["a"],VCardTitle:p["b"],VImg:m["a"],VRow:C["a"]})},4644:function(t,e,a){},"8cc1":function(t,e,a){},a7ae:function(t,e,a){},d858:function(t,e,a){},d878:function(t,e,a){"use strict";var s=a("4644"),n=a.n(s);n.a},e9c9:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"page-top-container mb-12",attrs:{fluid:""}},[a("v-card",{staticClass:"mx-auto homefone",attrs:{flat:"",tile:"",width:"100%","max-width":"1180"}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{sm:"12",md:"6"}},[a("v-card",{staticClass:"transparent left-col",attrs:{flat:"",tile:"",width:"100%","max-width":"480"}},[a("v-card-text",{staticClass:"text-center text-lg-left"},[a("h1",{staticClass:"text-center text-md-left"},[t._v(" "+t._s(t.top.header)+" ")])]),a("v-card-text",{staticClass:"mx-auto mx-lg-0"},[a("p",{staticClass:"text-center text-md-left",domProps:{innerHTML:t._s(t.top.text.split("\n").join("<br>"))}})]),a("v-card-text",{staticClass:"text-center text-md-left"},[a("v-btn",{staticClass:"submit-button px-auto mx-auto",attrs:{color:"buttons",dark:"",rounded:"",height:"48"},on:{click:function(e){return t.$emit("update:page",t.top.goto)}}},[t._v(" "+t._s(t.top.button)+" ")])],1)],1)],1),a("v-col",{staticClass:"right-col mx-auto",attrs:{sm:"12",md:"6",order:"first","order-md":"last"}},[a("TopPicture",{staticClass:"top-picture",attrs:{url:t.top.pictureURL}})],1)],1)],1)],1)},n=[],r=a("5530"),i=a("2f62"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("figure",{staticClass:"mx-auto"},[a("svg",{staticStyle:{position:"absolute",top:"-100px",left:"-80px",transform:"rotate(25deg)"},attrs:{width:"800",height:"800"}},[a("path",{attrs:{d:"M56.5648 80.1215C59.4047 77.0002 61.3428 75.6889 63.9787 73.8127C83.6173 59.8443 105.177 49.9693 128.533 44.0817C138.449 41.5889 148.526 40.2663 158.755 41.1812C165.902 41.8274 172.696 43.5912 178.78 47.5441C179.88 48.2696 180.956 48.9738 182.056 49.6993C182.33 49.933 182.628 50.188 182.901 50.4216C183.235 50.8361 183.545 51.2293 183.878 51.6438C185.8 53.9747 187.963 56.1244 189.644 58.6365C195.846 67.9373 198.662 78.4309 200.142 89.3307C202.03 103.376 201.408 117.339 198.81 131.248C195.701 147.818 190.396 163.586 180.202 177.325C176.407 182.469 171.93 186.901 166.467 190.274C158.015 195.481 148.744 197.019 139 196.09C130.005 195.24 121.557 192.493 113.385 188.819C105.691 185.34 98.3655 181.23 91.4892 176.342C86.995 173.145 82.4795 169.974 78.2826 166.43C73.7627 162.609 69.5402 158.441 65.3425 154.294C61.2478 150.278 57.7376 145.729 54.603 140.942C49.4923 133.133 45.7746 124.751 44.7154 115.372C43.5054 104.66 45.96 94.8434 52.0085 85.905",fill:"#72BF44",transform:"scale(3.8, 3.8)"}})]),a("img",{staticClass:"clip-svg",attrs:{src:t.url}}),a("svg",{staticStyle:{position:"absolute",top:"80px",left:"80px"},attrs:{width:"0",height:"0"}},[a("defs",[a("clipPath",{attrs:{id:"clipping-mask"}},[a("path",{attrs:{d:"M28.1694 106.851C34.9083 98.837 39.5866 95.3979 45.9404 90.4906C93.2789 53.9542 145.777 27.3811 203.115 10.52C227.459 3.37854 252.316 -0.877352 277.767 0.399966C295.55 1.30951 312.566 5.02431 328.034 14.2357C330.833 15.9279 333.568 17.5698 336.367 19.2619C337.067 19.8148 337.831 20.418 338.532 20.9709C339.4 21.9662 340.204 22.9112 341.073 23.9065C346.064 29.4995 351.634 34.62 356.045 40.6856C372.323 63.1452 380.322 88.8902 385.048 115.772C391.091 150.412 390.901 185.093 385.807 219.831C379.705 261.216 368.08 300.825 344.135 335.877C335.225 348.999 324.555 360.422 311.335 369.315C290.886 383.045 268.046 387.756 243.798 386.395C221.413 385.161 200.201 379.168 179.582 370.852C160.17 362.971 141.608 353.489 124.085 342.036C112.632 334.546 101.129 327.121 90.3803 318.74C78.8033 309.706 67.93 299.78 57.1204 289.905C46.579 280.344 37.4349 269.406 29.199 257.841C15.7709 238.974 5.74096 218.551 2.20584 195.4C-1.83237 168.957 3.30258 144.38 17.4331 121.632",fill:"#72BF44",transform:"scale(1.5, 1.5)"}})])])])])},c=[],l={name:"TopPicture",props:["url"]},d=l,u=(a("002c"),a("2877")),f=Object(u["a"])(d,o,c,!1,null,"15e7ccbc",null),p=f.exports,m={name:"Top",components:{TopPicture:p},props:["page"],computed:Object(r["a"])({},Object(i["c"])("content",["top"]))},C=m,g=(a("d878"),a("6544")),h=a.n(g),v=a("8336"),x=a("b0af"),b=a("99d9"),w=a("62ad"),_=a("a523"),y=a("0fd9"),j=Object(u["a"])(C,s,n,!1,null,"19580630",null);e["a"]=j.exports;h()(j,{VBtn:v["a"],VCard:x["a"],VCardText:b["a"],VCol:w["a"],VContainer:_["a"],VRow:y["a"]})}}]);
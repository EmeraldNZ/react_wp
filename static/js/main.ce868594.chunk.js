(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,r){},15:function(e,t,r){},16:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(2),l=r.n(o),c=(r(14),r(3)),i=r(4),u=r(6),m=r(5),s=r(7),d=(r(15),function(e){function t(e){var r;return Object(c.a)(this,t),(r=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={products:[],dataRoute:"https://emeraldchen.000webhostapp.com/wp-json/wp/v2/posts"},r}return Object(s.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"App-header"},a.a.createElement("nav",null,a.a.createElement("a",{href:"http://emerald.rf.gd/",target:"_blank",rel:"noopener noreferrer",style:{color:"yellow",textDecorationLine:"none"}}," Home | "),a.a.createElement("a",{href:"http://emerald.rf.gd/about-us/",target:"_blank",rel:"noopener noreferrer",style:{color:"yellow",textDecorationLine:"none"}},"  About Us  | "),a.a.createElement("a",{href:"http://emerald.rf.gd/help-for-refugees/",target:"_blank",rel:"noopener noreferrer",style:{color:"yellow",textDecorationLine:"none"}},"Help for Refugees | "),a.a.createElement("a",{href:"http://emerald.rf.gd/get-involved/",target:"_blank",rel:"noopener noreferrer",style:{color:"yellow",textDecorationLine:"none"}},"Get Involved  | "),a.a.createElement("a",{href:"http://emerald.rf.gd/contact/",target:"_blank",rel:"noopener noreferrer",style:{color:"yellow",textDecorationLine:"none"}},"Contact Us   ")),a.a.createElement("h1",null,"ChangeMakers Refugee Forum"),a.a.createElement("h3",null,"New Zealanders from refugee backgrounds participating fully in NZ life"),a.a.createElement("ul",null,a.a.createElement("a",{href:"https://givealittle.co.nz/cause/turning-the-curve-teaching-refugee-background#",target:"_blank",rel:"noopener noreferrer"},a.a.createElement("b",{style:{color:"yellow",textDecoration:"underline overline",fontSize:28}},"DONATE NOW")))),a.a.createElement("br",null),a.a.createElement("hr",null),a.a.createElement("br",null),a.a.createElement("div",{className:"products"},this.state.products.map(function(e){return a.a.createElement("div",{className:"product",key:"product-".concat(e.id,"}")},a.a.createElement("img",{src:e.image,alt:e.name,className:"product-image"}),a.a.createElement("p",null,e.name),a.a.createElement("a",{href:"https://givealittle.co.nz/cause/turning-the-curve-teaching-refugee-background#",target:"_blank",rel:"noopener noreferrer"},a.a.createElement("button",null,"Read More ")),a.a.createElement("hr",null),a.a.createElement("br",null))})),a.a.createElement("nav",null,a.a.createElement("a",{href:"http://emerald.rf.gd/",target:"_blank",rel:"noopener noreferrer"}," Home  ")," |",a.a.createElement("a",{href:"http://emerald.rf.gd/about-us/",target:"_blank",rel:"noopener noreferrer"}," About Us ")," |",a.a.createElement("a",{href:"http://emerald.rf.gd/help-for-refugees/",target:"_blank",rel:"noopener noreferrer"}," Help for Refugees ")," |",a.a.createElement("a",{href:"http://emerald.rf.gd/get-involved/",target:"_blank",rel:"noopener noreferrer"}," Get Involved  ")," |",a.a.createElement("a",{href:"http://emerald.rf.gd/contact/",target:"_blank",rel:"noopener noreferrer"}," Contact Us   ")),a.a.createElement("br",null))}},{key:"componentDidMount",value:function(){var e=this;fetch(this.state.dataRoute).then(function(e){return e.json()}).then(function(t){return e.setState(function(r,n){return{products:t.map(e.mapProduct)}})})}},{key:"mapProduct",value:function(e){return{id:e.id,price:e.price,image:e.image,name:e.title.rendered,description:e.description}}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,r){e.exports=r(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.ce868594.chunk.js.map
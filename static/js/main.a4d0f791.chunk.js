(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(t,e,i){var n={"./1.jpg":20,"./10.jpg":21,"./11.jpg":22,"./12.jpg":23,"./13.jpg":24,"./14.jpg":25,"./15.jpg":26,"./16.jpg":27,"./17.jpg":28,"./18.jpg":29,"./19.jpg":30,"./2.jpg":31,"./20.jpg":32,"./21.jpg":33,"./22.jpg":34,"./3.jpg":35,"./4.jpg":36,"./5.jpg":37,"./6.jpg":38,"./7.jpg":39,"./8.jpg":40,"./9.jpg":41,"./Thumbs.db":42};function a(t){var e=o(t);return i(e)}function o(t){if(!i.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=o,t.exports=a,a.id=8},,function(t){t.exports=[{id:"0",thumbnail:"1.jpg",image:"1.jpg",description:"Beton Scene"},{id:"1",thumbnail:"2.jpg",image:"2.jpg",description:"Hello Food"},{id:"2",thumbnail:"3.jpg",image:"3.jpg",description:"Modern Barn."},{id:"3",thumbnail:"4.jpg",image:"4.jpg",description:"Modular House"},{id:"4",thumbnail:"5.jpg",image:"5.jpg",description:"Northern Wips"},{id:"5",thumbnail:"6.jpg",image:"6.jpg",description:"Ancient Temple"},{id:"6",thumbnail:"7.jpg",image:"7.jpg",description:"Dark"},{id:"7",thumbnail:"8.jpg",image:"8.jpg",description:"Cabin Entry 2018"},{id:"8",thumbnail:"9.jpg",image:"9.jpg",description:"House in the woods"},{id:"9",thumbnail:"10.jpg",image:"10.jpg",description:"Uncharted"},{id:"10",thumbnail:"11.jpg",image:"11.jpg",description:"Blue Alley"},{id:"11",thumbnail:"12.jpg",image:"12.jpg",description:"Pokeman #010-Caterpie"},{id:"12",thumbnail:"13.jpg",image:"13.jpg",description:"Dark Value"},{id:"13",thumbnail:"14.jpg",image:"14.jpg",description:"Lost City"},{id:"14",thumbnail:"15.jpg",image:"15.jpg",description:"Unnamed Artwork"},{id:"15",thumbnail:"16.jpg",image:"16.jpg",description:"Incident on the edge of town"},{id:"16",thumbnail:"17.jpg",image:"17.jpg",description:"Night Stroll"},{id:"17",thumbnail:"18.jpg",image:"18.jpg",description:"Dolorean near the street!"},{id:"18",thumbnail:"19.jpg",image:"19.jpg",description:"WW II Trench Environment"},{id:"19",thumbnail:"20.jpg",image:"20.jpg",description:"The Fate of Lcarus"},{id:"20",thumbnail:"21.jpg",image:"21.jpg",description:"Cozy Cottage"},{id:"21",thumbnail:"22.jpg",image:"22.jpg",description:"Dream Garden Shed"}]},function(t,e,i){t.exports=i(43)},,,,,,function(t,e,i){},function(t,e,i){},function(t,e,i){},function(t,e,i){t.exports=i.p+"static/media/1.ad5930d7.jpg"},function(t,e,i){t.exports=i.p+"static/media/10.dc6402c1.jpg"},function(t,e,i){t.exports=i.p+"static/media/11.578275b3.jpg"},function(t,e,i){t.exports=i.p+"static/media/12.0f113991.jpg"},function(t,e,i){t.exports=i.p+"static/media/13.45c31ae3.jpg"},function(t,e,i){t.exports=i.p+"static/media/14.e4ed42fb.jpg"},function(t,e,i){t.exports=i.p+"static/media/15.f9b062dd.jpg"},function(t,e,i){t.exports=i.p+"static/media/16.9c547c9f.jpg"},function(t,e,i){t.exports=i.p+"static/media/17.fb0c6809.jpg"},function(t,e,i){t.exports=i.p+"static/media/18.14ae8b2d.jpg"},function(t,e,i){t.exports=i.p+"static/media/19.a5e26cdc.jpg"},function(t,e,i){t.exports=i.p+"static/media/2.fccd5572.jpg"},function(t,e,i){t.exports=i.p+"static/media/20.6ede44cc.jpg"},function(t,e,i){t.exports=i.p+"static/media/21.012d1701.jpg"},function(t,e,i){t.exports=i.p+"static/media/22.54ef669e.jpg"},function(t,e,i){t.exports=i.p+"static/media/3.d05b6b47.jpg"},function(t,e,i){t.exports=i.p+"static/media/4.6fdf0963.jpg"},function(t,e,i){t.exports=i.p+"static/media/5.3c17059b.jpg"},function(t,e,i){t.exports=i.p+"static/media/6.f2937182.jpg"},function(t,e,i){t.exports=i.p+"static/media/7.2949f49b.jpg"},function(t,e,i){t.exports=i.p+"static/media/8.b37e1a45.jpg"},function(t,e,i){t.exports=i.p+"static/media/9.99ca7ac1.jpg"},function(t,e,i){t.exports=i.p+"static/media/Thumbs.f528a9d3.db"},function(t,e,i){"use strict";i.r(e);var n=i(0),a=i.n(n),o=i(9),p=i.n(o),r=(i(17),i(2)),s=i(3),c=i(5),d=i(4),m=i(1),g=i(6),u=(i(18),i(10)),l=(i(19),function(t){function e(){return Object(r.a)(this,e),Object(c.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(g.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{className:"container-item"},a.a.createElement("a",{className:"container-img",href:this.props.imageUrl},a.a.createElement("img",{className:"img",src:this.props.thumbnail,alt:""})),a.a.createElement("span",{className:"img-desc"},this.props.desc))}}]),e}(n.Component)),j=Number.MAX_SAFE_INTEGER,h=Number.MAX_SAFE_INTEGER,f=function(t){function e(t){var n;return Object(r.a)(this,e),(n=Object(c.a)(this,Object(d.a)(e).call(this,t))).productList=function(){return n.state.products.map(function(t){return a.a.createElement(l,{key:t.id,imageUrl:i(8)("./"+t.image),thumbnail:i(8)("./"+t.thumbnail),desc:t.description})})},n.state={products:u,dummyList:[]},n.productList=n.productList.bind(Object(m.a)(n)),n.addToDummyList=n.addToDummyList.bind(Object(m.a)(n)),n.init=n.init.bind(Object(m.a)(n)),n.init(),n}return Object(g.a)(e,t),Object(s.a)(e,[{key:"init",value:function(){j=window.innerHeight,h=.25*j}},{key:"addToDummyList",value:function(t,e){var i=t.offsetTop,n=t.offsetLeft;setTimeout(function(){t.style.position="absolute",t.style.left=n+"px",t.style.top=i+"px";var a=document.createElement("div");a.classList.add("flex-wrap-anim-dummy");var o=t.getBoundingClientRect();a.style.width=o.width+"px",a.style.height=o.height+"px",a.style.visibility="hidden",a.style.margin="0.4vmin",a.style.flexGrow=1,a["__flex-wrap-anim_pair"]=t,a["__flex-wrap-anim_duration"]=e,t.parentNode.appendChild(a),this.state.dummyList.push(a)}.bind(this),0)}},{key:"mainController",value:function(){for(var t=document.getElementsByClassName("flex-wrap-anim"),e=0,i=t.length;e<i;e++){var n=t[e];n.style.position="relative";for(var a=n.getElementsByTagName("div"),o=0,p=a.length;o<p;o++){var r=a[o],s=r.getElementsByTagName("img")[0],c=h*s.naturalWidth/s.naturalHeight;c=c.toFixed(3),r.style.width=c+"px",this.addToDummyList(r,"0.5s")}}}},{key:"reshapeContainer",value:function(){this.state.dummyList.forEach(function(t){var e=t["__flex-wrap-anim_pair"],i=t["__flex-wrap-anim_duration"];e.style.transition="all "+i,e.style.top=t.offsetTop+"px",e.style.left=t.offsetLeft+"px";var n=t.getBoundingClientRect();e.style.width=1.01*n.width+"px",e.style.height=n.height+"px"})}},{key:"componentDidMount",value:function(){window.addEventListener("load",this.mainController.bind(this)),window.addEventListener("resize",this.reshapeContainer.bind(this)),setInterval(this.reshapeContainer.bind(this),0)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("load",this.mainController.bind(this)),window.removeEventListener("resize",this.reshapeContainer.bind(this))}},{key:"render",value:function(){return a.a.createElement("div",{className:"container flex-wrap-anim",id:"container-all"},this.productList(),";")}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));p.a.render(a.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[11,1,2]]]);
//# sourceMappingURL=main.a4d0f791.chunk.js.map
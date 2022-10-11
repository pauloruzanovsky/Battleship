(()=>{"use strict";var e={426:(e,t,n)=>{n.d(t,{Z:()=>b});var o=n(81),r=n.n(o),i=n(645),s=n.n(i),l=n(667),a=n.n(l),c=new URL(n(111),n.b),u=new URL(n(204),n.b),p=new URL(n(544),n.b),d=new URL(n(113),n.b),h=s()(r()),f=a()(c),m=a()(u),g=a()(p),y=a()(d);h.push([e.id,"/* CSS RESET */\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\nhtml {\n  /* footer support */\n  position: relative;\n  min-height: 100%;\n}\nbody {\n  background-color: var(--grey);\n  color: var(--black);\n  font-family: 'Poppins', sans-serif;\n  word-wrap: break-word;\n\n}\nbutton,\ninput {\n  border: none;\n  color: inherit;\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: inherit;\n  cursor: pointer;\n  outline: none;\n}\ninput[type='text'],\ninput[type='number'] {\n  cursor: text;\n}\n\nul, li {\n  margin: 0px;\n  border: 0px;\n  padding: 0px;\n  list-style: none;\n}\n/* CSS START */\n@font-face{\n    font-family: Poppins;\n    src: url("+f+");\n    font-weight: 400;\n}\n@font-face{\n    font-family: Poppins;\n    src: url("+m+");\n    font-weight: 500;\n}\n@font-face{\n    font-family: Poppins;\n    src: url("+g+");\n    font-weight: 600;\n}\n@font-face{\n  font-family: Poppins;\n  src: url("+y+");\n  font-weight: 900;\n}\n\n.content {\n    display: grid;\n    place-items: center;\n    gap: 20px;\n}\n\n.title { \n    padding: 10px;\n    text-align: center;\n    font-size: 80px;\n}\n\n.gameboards {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    text-align: center;\n    gap: 50px;\n    place-items: center;\n}\n\n.gameboard {\n    display: grid;\n    grid-template-columns: repeat(10,50px);\n    outline: 1px solid black;\n}\n.opponentContainer > .gameboard {\n    cursor:crosshair\n}\n\n.opponentContainer > .gameboard > .gridColumn > .gridBlock:hover, .playerContainer > .gameboard > .gridColumn > .gridBlock:hover{\n    background:rgb(240, 239, 239);\n}\n\n\n\n\n\n.gridBlock, .shipContainer > * {\n    height: 50px;\n    width: 50px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border: 1px solid rgb(185, 195, 255);\n\n\n}\n\n.playerContainer > .gameboard > .gridColumn > .gridBlock.hasShip, .shipContainer > * {\n    border: 2px solid blue;\n    background: rgb(0, 0, 255, 0.1);\n}\n\nbutton {\n    padding: 10px;\n    border-radius: 5px;\n    border: 1px solid rgb(204, 204, 204);\n\n}\n\nbutton:hover {\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 1px 1px;\n\n}\n\n.startButton.inactive {\n    cursor:not-allowed\n}\n\n.playAgainButton {\n    display: none;\n}\n\n.resetButton {\n    display: none;\n}\n.messageBoard { \n    height: 30px;\n    font-size: 30px;\n}\n\n.hasShip {\n    font-size: 40px;\n}\n\n.showShip {\n    border: 2px solid red;\n\n    background: rgba(136, 255, 0, 0.1);\n\n}\n\n.playerContainer > p, .opponentContainer > p {\n    font-size: 30px;\n}\n\n.shipBlock { \n    background: rgba(1, 255, 221, 0.1);\n    display: flex;\n    justify-content: center;\n    align-items: center;    \n    border: 1px solid black;\n    width: 300px;\n    height: 300px;\n}\n\n.shipBlockMessage, .shipBlockMessage2 {\n    text-align: center;\n    font-size: 20px;\n}",""]);const b=h},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(o)for(var l=0;l<this.length;l++){var a=this[l][0];null!=a&&(s[a]=!0)}for(var c=0;c<e.length;c++){var u=[].concat(e[c]);o&&s[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),r&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=r):u[4]="".concat(r)),t.push(u))}},t}},667:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},s=[],l=0;l<e.length;l++){var a=e[l],c=o.base?a[0]+o.base:a[0],u=i[c]||0,p="".concat(c," ").concat(u);i[c]=u+1;var d=n(p),h={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==d)t[d].references++,t[d].updater(h);else{var f=r(h,o);o.byIndex=l,t.splice(l,0,{identifier:p,updater:f,references:1})}s.push(p)}return s}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var s=0;s<i.length;s++){var l=n(i[s]);t[l].references--}for(var a=o(e,r),c=0;c<i.length;c++){var u=n(i[c]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}i=a}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},113:(e,t,n)=>{e.exports=n.p+"cdb29a5d7ccf57ff05a3.ttf"},204:(e,t,n)=>{e.exports=n.p+"673ed42382ab264e0bf5.ttf"},111:(e,t,n)=>{e.exports=n.p+"35d26b781dc5fda684cc.ttf"},544:(e,t,n)=>{e.exports=n.p+"ac8d04b620e54be9b0f0.ttf"}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{const e=class{constructor(e){this.player=e}shipPositions=[];allShotsTaken=[];missedShots=[];ships=[];previousShot=[];placeShip(e,t,n,o){let r=new class{constructor(e){this.length=e}hitCount=0;position=[];getHit=()=>this.hitCount++;isSunk=()=>this.hitCount>=this.length}(o),i=[],s=e,l=t;if(e<0||e>10||t<0||t>10)return"invalid position";i.push([e,t]);for(let r=1;r<o;r++)"x"===n?(s++,i.push([s,t])):(l++,i.push([e,l]));if(!1===this.checkPositionAvailability(i,this.shipPositions))return"invalid position";this.shipPositions=[...this.shipPositions,...i],r.position=i,this.ships.push(r)}placeRandomShips(){let e,t=0,n=[5,4,3,3,2];for(let o=0;o<n.length;o++)for(;t!==o+1;){let r=Math.floor(10*Math.random()+1),i=Math.floor(10*Math.random()+1);console.log("x: ",r),console.log("y: ",i),e=r>=5?"x":"y","invalid position"!==this.placeShip(r,i,e,n[o])&&t++}}removeShips(){for(;this.allShotsTaken.length;)this.allShotsTaken.pop();for(;this.shipPositions.length;)this.shipPositions.pop();for(;this.ships.length;)this.ships.pop();console.log(this.shipPositions)}receiveAttack(e,t){this.allShotsTaken.push([e,t]);for(let n=0;n<this.shipPositions.length;n++){let o,r;if(this.shipPositions[n][0]===e&&this.shipPositions[n][1]===t)return this.ships.forEach((n=>{n.position.forEach((i=>{i[0]===e&&i[1]===t&&(n.getHit(),o=n.isSunk(),r=n.position)}))})),console.log("is sunk: ",o),o?{outcome:"ship sunk!",shipPosition:r}:{outcome:"you hit a ship!"}}return this.missedShots.push([e,t]),{outcome:"you missed!"}}checkIfAllShipsSunk(){if(0===this.ships.length)return!1;for(let e=0;e<this.ships.length;e++)if(!this.ships[e].isSunk())return!1;return!0}checkPositionAvailability(e,t){for(let n=0;n<e.length;n++){if(e[n][0]<1||e[n][0]>10||e[n][1]<1||e[n][1]>10)return!1;for(let o=0;o<t.length;o++)if(e[n][0]-1<=t[o][0]&&t[o][0]<=e[n][0]+1&&e[n][1]-1<=t[o][1]&&t[o][1]<=e[n][1]+1)return!1}return!0}};let t=document.querySelector(".playerContainer > div"),o=document.querySelector(".opponentContainer > div"),r=document.querySelector(".startButton"),i=document.querySelector(".resetButton"),s=document.querySelector(".playAgainButton"),l="player",a=document.querySelector(".messageBoard"),c=null,u=null,p=null,d=document.querySelector(".shipContainer"),h=document.querySelector(".shipBlockMessage"),f=document.querySelector(".shipBlock"),m=document.querySelector(".shipBlockMessage2");function g(e,t){let n=0,o=0;for(n=0;n<e;n++){const r=document.createElement("div");for(r.classList.add("gridColumn"),t.appendChild(r),o=0;o<e;o++){const e=document.createElement("div");e.classList.add("gridBlock"),e.setAttribute("x",n+1),e.setAttribute("y",o+1),r.appendChild(e)}}}function y(e){document.querySelectorAll(".playerContainer > .gameboard > .gridColumn > .gridBlock").forEach((t=>{let n=Number(t.getAttribute("x")),o=Number(t.getAttribute("y"));e.forEach((e=>{e[0]!==n||e[1]!==o||t.classList.add("hasShip")}))}))}function b(e){if(0===e.ships.length){h.textContent="Click on your board to place your Carrier";let t=document.createElement("div"),n=document.createElement("div"),o=document.createElement("div"),r=document.createElement("div"),i=document.createElement("div");d.append(t,n,o,r,i),v(e,5)}if(1===e.ships.length){h.textContent="Click on your board to place your Battleship";let t=document.createElement("div"),n=document.createElement("div"),o=document.createElement("div"),r=document.createElement("div"),i=d.lastElementChild;for(;i;)d.removeChild(i),i=d.lastElementChild;d.append(t,n,o,r),v(e,4)}if(2===e.ships.length||3===e.ships.length){h.textContent="Click on your board to place your Cruiser";let t=document.createElement("div"),n=document.createElement("div"),o=document.createElement("div"),r=d.lastElementChild;for(;r;)d.removeChild(r),r=d.lastElementChild;d.append(t,n,o),v(e,3)}if(4===e.ships.length){h.textContent="Click on your board to place your Destroyer";let t=document.createElement("div"),n=document.createElement("div"),o=d.lastElementChild;for(;o;)d.removeChild(o),o=d.lastElementChild;d.append(t,n),v(e,2)}5===e.ships.length&&(f.style.display="none",h.style.display="none",m.textContent="Good luck!",r.disabled=!1)}function v(e,t){let n=document.querySelectorAll(".playerContainer > .gameboard > .gridColumn > .gridBlock");n.forEach((o=>{o.addEventListener("click",(()=>{let r=d.getAttribute("direction"),i=Number(o.getAttribute("x")),s=Number(o.getAttribute("y"));e.placeShip(i,s,r,t),y(e.shipPositions),n.forEach((e=>{e.replaceWith(e.cloneNode(!0))})),b(e)}))}))}function x(){return"player"===l?a.textContent="Your turn to play":"opponent"===l?a.textContent="Opponent's turn to play":void 0}function C(){return function(){let e=document.querySelectorAll(".opponentContainer > .gameboard > .gridColumn > .gridBlock"),t=document.querySelectorAll(".playerContainer > .gameboard > .gridColumn > .gridBlock");e.forEach((e=>{e.style.cursor="default",e.replaceWith(e.cloneNode(!0))})),t.forEach((e=>{e.style.cursor="default",e.replaceWith(e.cloneNode(!0))}))}(),r.style.display="none",i.style.display="none",s.style.display="block",a.textContent="player"===l?"All of your opponent's ships went down, you won!":"All of your ships went down, you lost!"}function S(e,t){let n,o;console.log("current turn: ",l),"player"===l?(n=document.querySelectorAll(".opponentContainer > .gameboard > .gridColumn > .gridBlock"),o=t):(n=document.querySelectorAll(".playerContainer > .gameboard > .gridColumn > .gridBlock"),o=e),n.forEach((r=>{""===r.textContent&&r.addEventListener("click",(()=>{let i=Number(r.getAttribute("x")),s=Number(r.getAttribute("y")),a=o.receiveAttack(i,s);console.log(a),"you missed!"===a.outcome&&(r.textContent="●",r.style.background="#f2f4f8",r.style.cursor="default",l="player"===l?"opponent":"player",x(),n.forEach((e=>{e.replaceWith(e.cloneNode(!0))})),S(e,t)),"you hit a ship!"!==a.outcome&&"ship sunk!"!==a.outcome||(r.textContent="❌",r.style.cursor="default",r.replaceWith(r.cloneNode(!0)),n.forEach((e=>{let t=Number(e.getAttribute("x")),n=Number(e.getAttribute("y"));t!==i-1&&t!==i+1||n!==s-1&&n!==s+1||(e.textContent="●",e.style.background="#f2f4f8",e.style.cursor="default",e.replaceWith(e.cloneNode(!0)))})),"ship sunk!"===a.outcome&&(a.shipPosition.forEach((e=>{n.forEach((t=>{let n=Number(t.getAttribute("x")),o=Number(t.getAttribute("y"));e[0]-1<=n&&n<=e[0]+1&&e[1]-1<=o&&o<=e[1]+1&&!t.classList.contains("hasShip")&&(t.textContent="●",t.style.background="#f2f4f8",t.style.cursor="default",t.replaceWith(t.cloneNode(!0)))}))})),o.checkIfAllShipsSunk()&&C())),r.replaceWith(r.cloneNode(!0))}))})),"opponent"===l&&A(n,o)}function k(e){if("opponent"===l){let t=[];return e.forEach((e=>{let n=Number(e.getAttribute("x")),o=Number(e.getAttribute("y"));""===e.textContent&&t.push(JSON.stringify([n,o]))})),t}}function E(e){let t=[],n=Number(e.getAttribute("x")),o=Number(e.getAttribute("y"));return t.push(JSON.stringify([n+1,o])),t.push(JSON.stringify([n,o+1])),t.push(JSON.stringify([n-1,o])),t.push(JSON.stringify([n,o-1])),t}function A(e,t){let n;if(e.forEach((t=>{if("❌"===t.textContent)return console.log("squares around: ",E(t)),console.log("getAvailableSquares: ",k(e)),void E(t).forEach((t=>{if(console.log("getAvailableSquares(board).includes(position): ",k(e).includes(t)),k(e).includes(t))return u=JSON.parse(t)[0],p=JSON.parse(t)[1],void e.forEach((e=>{let t=Number(e.getAttribute("x")),n=Number(e.getAttribute("y"));if(t===u&&n===p)return e.click(),void(c=e)}))}))})),n=JSON.parse(k(e)[Math.floor(Math.random()*k(e).length)]),e.forEach((e=>{let t=Number(e.getAttribute("x")),o=Number(e.getAttribute("y"));if(t===n[0]&&o===n[1])return e.click(),void(c=e)})),t.checkIfAllShipsSunk())return l="opponent",void C();"❌"===c.textContent&&A(e,t)}d.addEventListener("click",(()=>{if("y"===d.getAttribute("direction"))return d.setAttribute("direction","x"),void(d.style.display="flex");d.setAttribute("direction","y"),d.style.display="block"}));var w=n(379),N=n.n(w),B=n(795),P=n.n(B),q=n(569),L=n.n(q),M=n(565),T=n.n(M),O=n(216),R=n.n(O),I=n(589),J=n.n(I),j=n(426),W={};W.styleTagTransform=J(),W.setAttributes=T(),W.insert=L().bind(null,"head"),W.domAPI=P(),W.insertStyleElement=R(),N()(j.Z,W),j.Z&&j.Z.locals&&j.Z.locals;let z=new e("Player"),U=new e("Computer");g(10,t),g(10,o),b(z,z.shipPositions),r.addEventListener("click",(()=>{var e,t,n,o,l;U.placeRandomShips(),document.querySelectorAll(".opponentContainer > .gameboard > .gridColumn > .gridBlock").forEach((e=>{e.classList.contains("hasShip")&&e.classList.toggle("showShip")})),e=z.shipPositions,t=U.shipPositions,n=z,o=U,m.style.display="none",r.style.display="none",i.style.display="block",s.style.display="none",y(e),l=t,document.querySelectorAll(".opponentContainer > .gameboard > .gridColumn > .gridBlock").forEach((e=>{let t=Number(e.getAttribute("x")),n=Number(e.getAttribute("y"));l.forEach((o=>{o[0]!==t||o[1]!==n||e.classList.add("hasShip")}))})),x(),S(n,o)})),i.addEventListener("click",(()=>{location.reload()})),s.addEventListener("click",(()=>{location.reload()}))})()})();
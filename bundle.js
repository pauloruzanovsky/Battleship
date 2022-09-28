(()=>{"use strict";const t=class{constructor(t){this.player=t}shipPositions=[];allShotsTaken=[];missedShots=[];ships=[];previousShot=[];placeShip(t,e,i,o){let s=new class{constructor(t){this.length=t}hitCount=0;position=[];getHit=()=>this.hitCount++;isSunk=()=>this.hitCount>=this.length}(o),r=[],n=t,u=e;if(t<0||t>10||e<0||e>10)return"invalid position";r.push([t,e]);for(let s=1;s<o;s++)"x"===i?(n++,r.push([n,e])):(u++,r.push([t,u]));if(!1===this.checkPositionAvailability(r,this.shipPositions))return"invalid position";this.shipPositions=[...this.shipPositions,...r],s.position=r,this.ships.push(s)}receiveAttack(t,e){this.allShotsTaken.push([t,e]);for(let i=0;i<this.shipPositions.length;i++){let o,s;if(this.shipPositions[i][0]===t&&this.shipPositions[i][1]===e)return this.ships.forEach((i=>{i.position.forEach((r=>{r[0]===t&&r[1]===e&&(i.getHit(),o=i.isSunk(),s=i.position)}))})),console.log("is sunk: ",o),o?{outcome:"ship sunk!",shipPosition:s}:{outcome:"you hit a ship!"}}return this.missedShots.push([t,e]),{outcome:"you missed!"}}checkIfAllShipsSunk(){if(0===this.ships.length)return!1;for(let t=0;t<this.ships.length;t++)if(!this.ships[t].isSunk())return!1;return!0}checkPositionAvailability(t,e){for(let i=0;i<t.length;i++)for(let o=0;o<e.length;o++)if(t[i][0]-1<=e[o][0]&&e[o][0]<=t[i][0]+1&&t[i][1]-1<=e[o][1]&&e[o][1]<=t[i][1]+1)return!1;return!0}};let e=document.querySelector(".playerContainer > div"),i=document.querySelector(".opponentContainer > div"),o=document.querySelector(".startButton"),s=document.querySelector(".messageBoard");function r(t,e){let i=0,o=0;for(i=0;i<t;i++){const s=document.createElement("div");for(s.classList.add("gridColumn"),e.appendChild(s),o=0;o<t;o++){const t=document.createElement("div");t.classList.add("gridBlock"),t.setAttribute("x",i+1),t.setAttribute("y",o+1),s.appendChild(t)}}}function n(){return s.textContent="Your turn to play"}let u=new t("Player"),l=new t("Computer");var c,h,a;u.placeShip(1,1,"y",5),u.placeShip(3,1,"y",4),u.placeShip(5,1,"y",3),u.placeShip(7,1,"y",3),u.placeShip(9,1,"y",2),l.placeShip(1,1,"x",5),l.placeShip(1,3,"x",4),l.placeShip(1,5,"x",3),l.placeShip(1,7,"x",3),l.placeShip(1,9,"x",2),r(10,e),r(10,i),c=u.shipPositions,h=l.shipPositions,a=l,o.addEventListener("click",(()=>{var t;t=c,document.querySelectorAll(".playerContainer > .gameboard > .gridColumn > .gridBlock").forEach((e=>{let i=Number(e.getAttribute("x")),o=Number(e.getAttribute("y"));t.forEach((t=>{t[0]!==i||t[1]!==o||e.classList.add("hasShip")}))})),function(t){document.querySelectorAll(".opponentContainer > .gameboard > .gridColumn > .gridBlock").forEach((e=>{let i=Number(e.getAttribute("x")),o=Number(e.getAttribute("y"));t.forEach((t=>{t[0]!==i||t[1]!==o||e.classList.add("hasShip")}))}))}(h),n(),function(t){let e;e=document.querySelectorAll(".opponentContainer > .gameboard > .gridColumn > .gridBlock"),e.forEach((i=>{i.addEventListener("click",(()=>{let o=Number(i.getAttribute("x")),r=Number(i.getAttribute("y")),u=t.receiveAttack(o,r);console.log(u),"you missed!"===u.outcome&&(i.textContent="●",i.style.background="#f2f4f8",i.style.cursor="default",n()),"you hit a ship!"!==u.outcome&&"ship sunk!"!==u.outcome||(i.textContent="❌",i.style.cursor="default",i.replaceWith(i.cloneNode(!0)),e.forEach((t=>{Number(t.getAttribute("x"))!==o-1&&Number(t.getAttribute("x"))!==o+1||Number(t.getAttribute("y"))!==r-1&&Number(t.getAttribute("y"))!==r+1||(t.textContent="●",t.style.background="#f2f4f8",t.style.cursor="default",t.replaceWith(t.cloneNode(!0)))})),"ship sunk!"===u.outcome&&(u.shipPosition.forEach((t=>{e.forEach((e=>{t[0]-1<=Number(e.getAttribute("x"))&&Number(e.getAttribute("x"))<=t[0]+1&&t[1]-1<=Number(e.getAttribute("y"))&&Number(e.getAttribute("y"))<=t[1]+1&&!e.classList.contains("hasShip")&&(e.textContent="●",e.style.background="#f2f4f8",e.style.cursor="default",e.replaceWith(e.cloneNode(!0)))}))})),t.checkIfAllShipsSunk()&&(s.textContent="All your opponent's ships are sunk, you won!",e.forEach((t=>{t.style.cursor="default",t.replaceWith(t.cloneNode(!0))}))))),i.replaceWith(i.cloneNode(!0))}))}))}(a)}))})();
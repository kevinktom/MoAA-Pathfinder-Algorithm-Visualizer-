!function(n){var e={};function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(o,r,function(e){return n[e]}.bind(null,r));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="/dist/",t(t.s=1)}([function(n,e,t){},function(n,e,t){"use strict";t.r(e);t(0);function o(n,e){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){if(!(Symbol.iterator in Object(n)||"[object Arguments]"===Object.prototype.toString.call(n)))return;var t=[],o=!0,r=!1,a=void 0;try{for(var i,l=n[Symbol.iterator]();!(o=(i=l.next()).done)&&(t.push(i.value),!e||t.length!==e);o=!0);}catch(n){r=!0,a=n}finally{try{o||null==l.return||l.return()}finally{if(r)throw a}}return t}(n,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function a(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}var i=function(){function n(){r(this,n),this.determineNeighbors=this.determineNeighbors.bind(this),this.nodeGenerator=this.nodeGenerator.bind(this),this.nodes=this.nodeGenerator(),this.starting=this.nodes[0][0],this.ending=this.nodes[39][24]}var e,t,o;return e=n,(t=[{key:"nodeGenerator",value:function(){for(var n=[],e=0;e<40;e++){n.push([]);for(var t=0;t<25;t++)n[e].push(new l(10,[e,t],23*e,23*t))}return this.determineNeighbors(n),n}},{key:"determineNeighbors",value:function(n){var e=[[0,-1],[-1,0],[0,1],[1,0]];n.myFlatten().forEach((function(t){e.forEach((function(e){var o=[t.x+e[0],t.y+e[1]];o[0]>=0&&o[0]<40&&o[1]>=0&&o[1]<25&&!t.neighbors.includes(n[o[0]][o[1]])&&t.neighbors.push(n[o[0]][o[1]])}))}))}}])&&a(e.prototype,t),o&&a(e,o),n}();Array.prototype.myFlatten=function(){var n=[];return this.forEach((function(e){e instanceof Array?n=n.concat(e.myFlatten()):n.push(e)})),n};var l=function n(e,t,a,i){var l=o(t,2),s=l[0],c=l[1];r(this,n),this.val=e,this.key="[".concat(s,"][").concat(c,"]"),this.x=s,this.y=c,this.neighbors=[],this.xpos=a,this.ypos=i,this.weight=1},s=i;var c=function(n,e){var t=new Set,o=[n.starting],r=null;r=setInterval((function(){var a;if(o.length>0&&(a=o[o.length-1]),o[0]===n.starting&&(a=n.starting),a===n.ending||0===o.length)return clearInterval(r),o=[],e(),void console.log("made it to the end");t.has(a)||(a=o.pop(),console.log(o),console.log(t),console.log("----------------------"),t.add(a),a.neighbors.forEach((function(n){t.has(n)||50===n.val||o.includes(n)||o.push(n)})),10===a.val&&(a.val=75),e())}),40),console.log("donezo")};var u=function(n,e){var t=new Set,o=[n.starting],r=null;r=setInterval((function(){var a;if(o.length>0&&(a=o[0]),o[0]===n.starting&&(a=n.starting),a===n.ending||0===o.length)return clearInterval(r),o=[],e(),void console.log("made it to the end");t.has(a)||(a=o.shift(),console.log(o),console.log(t),console.log("----------------------"),t.add(a),a.neighbors.forEach((function(n){t.has(n)||50===n.val||o.includes(n)||o.push(n)})),10===a.val&&(a.val=75),e())}),40),console.log("donezo")};function d(n,e){return Array.from(n).reduce((function(n,t){return e[t]<e[n]?t:n}))}var f=function(n,e,t){for(var o=function(n,e){Array.prototype.myFlatten=function(){var n=[];return this.forEach((function(e){e instanceof Array?n=n.concat(e.myFlatten()):n.push(e)})),n};var t={};n.nodes.myFlatten().forEach((function(n){var e={};n.neighbors.forEach((function(n){50!==n.val&&(e[n.key]=n.weight)})),t[n.key]=e}));var o={};for(var r in t)o[r]=1/0;o[e]=0;for(var a=new Set(Object.keys(t)),i={};a.size>0;){var l=d(a,o);for(var s in a.delete(l),t[l]){var c=t[l][s],u=o[l]+c;o[s]>u&&(o[s]=u,i[s]=l)}}return{distance:o,previous:i}}(n,e),r=(o.distance,o.previous),a=n.starting,i=n.ending,l=[i.key],s=null,c=a;l[l.length-1]!==a.key;)l.push(r[l[l.length-1]]);l=l.reverse().slice(1),Array.prototype.myFlatten=function(){var n=[];return this.forEach((function(e){e instanceof Array?n=n.concat(e.myFlatten()):n.push(e)})),n};var u=n.nodes.myFlatten(),f=[];l.forEach((function(n){u.forEach((function(e){n===e.key&&f.push(e)}))})),s=setInterval((function(){if(c===i||0===f.length)return clearInterval(s),t(),void console.log("end of dijkstras");10===(c=f.shift()).val&&(c.val=75),t()}),40),console.log("done")};var v=function(n,e,t){n.nodes.forEach((function(n){n.forEach((function(n){n.val=10}))})),n.starting=e,n.starting.val=1,n.ending=t,n.ending.val=2};var g=function(n,e,t){n.nodes.forEach((function(n){n.forEach((function(n){50!==n.val&&300!==n.val&&(n.val=10)}))})),n.starting=e,n.starting.val=1,n.ending=t,n.ending.val=2};window.addEventListener("DOMContentLoaded",(function(){var n=!1,e=!1,t=document.getElementById("app"),o=t.getContext("2d");t=document.getElementById("app"),o=t.getContext("2d"),setInterval(k,10),t.onmousedown=function(o){t.onmousemove=F;for(var r=I(t,o),a=r.x,i=r.y,l=0;l<m;l++)for(var s=0;s<y;s++)l*(d+3)<a&&a<l*(d+3)+d&&s*(h+3)<i&&i<s*(h+3)+h&&(10===E.nodes[l][s].val&&!0===n?(E.nodes[l][s].val=50,p=l,b=s):50===E.nodes[l][s].val&&!0===n?(E.nodes[l][s].val=10,p=l,b=s):10===E.nodes[l][s].val&&!0===e?(E.nodes[l][s].val=300,E.nodes[l][s].weight=4,p=l,b=s):300===E.nodes[l][s].val&&!0===e?(E.nodes[l][s].val=10,E.nodes[l][s].weight=1,p=l,b=s):!1===n&&!1===e&&2!==E.nodes[l][s].val&&1===E.nodes[l][s].val&&w.x*(d+3)<a&&a<w.x*(d+3)+d&&i>w.y*(h+3)&&i<w.y*(h+3)+h?(w.val=10,E.nodes[l][s].val=1,w=E.nodes[l][s],E.starting=w,p=l,b=s):!1===n&&!1===e&&1!==E.nodes[l][s].val&&2===E.nodes[l][s].val&&x.x*(d+3)<a&&a<x.x*(d+3)+d&&i>x.y*(h+3)&&i<x.y*(h+3)+h&&(x.val=10,E.nodes[l][s].val=2,x=E.nodes[l][s],E.ending=x,p=l,b=s))},t.onmouseup=function(){t.onmousemove=null},t.ondragstart=function(){return!1},document.getElementById("dfs").onclick=function(){c(E,k)},document.getElementById("bfs").onclick=function(){u(E,k)},document.getElementById("dijkstras").onclick=function(){f(E,E.starting.key,k)},document.getElementById("reset").onclick=function(){v(E,w,x),n=!1,r.classList.remove("clicked"),e=!1,a.classList.remove("clicked")},document.getElementById("keepwalls").onclick=function(){g(E,w,x),n=!1,r.classList.remove("clicked"),e=!1,a.classList.remove("clicked")};var r=document.getElementById("addwalls");r.onclick=function(){n=!n,e=!1,a.classList.remove("clicked"),r.classList.toggle("clicked")};var a=document.getElementById("addweights");a.onclick=function(){e=!e,n=!1,r.classList.remove("clicked"),a.classList.toggle("clicked")};var i=1200,l=800,d=20,h=20,y=25,m=40,p=0,b=0,E=new s;function k(){o.clearRect(0,0,i,l);for(var n=0;n<m;n++)for(var e=0;e<y;e++)t=E.nodes[n][e].xpos,r=E.nodes[n][e].ypos,a=d,s=h,1===(c=E.nodes[n][e].val)?o.fillStyle="#75E170":2===c?o.fillStyle="#FC7272":10===c?o.fillStyle="#EEEEDD":50===c?o.fillStyle="#1212A5":75===c?o.fillStyle="#50FFF7":300===c&&(o.fillStyle="#FFFF00"),o.beginPath(),o.rect(t,r,a,s),o.closePath(),o.fill();var t,r,a,s,c}E.nodes[0][0].val=1,E.nodes[m-1][y-1].val=2;var w=E.starting,x=E.ending;function F(o){for(var r=I(t,o),a=r.x,i=r.y,l=0;l<m;l++)for(var s=0;s<y;s++)l*(d+3)<a&&a<l*(d+3)+d&&s*(h+3)<i&&i<s*(h+3)+h&&(10!==E.nodes[l][s].val||l===p&&s===b||!0!==n?50!==E.nodes[l][s].val||l===p&&s===b||!0!==n?10!==E.nodes[l][s].val||l===p&&s===b||!0!==e?300!==E.nodes[l][s].val||l===p&&s===b||!0!==e?!1===n&&!1===e&&2!==E.nodes[l][s].val&&w.x*(d+1)<a&&a<w.x*(d+3)+3*d&&i>w.y*(h+1)&&i<w.y*(h+3)+3*h&&(l!==p||s!==b)?(w.val=10,E.nodes[l][s].val=1,w=E.nodes[l][s],E.starting=w,p=l,b=s):!1===n&&!1===e&&1!==E.nodes[l][s].val&&x.x*(d+1)<a&&a<x.x*(d+3)+3*d&&i>x.y*(h+1)&&i<x.y*(h+3)+3*h&&(l!==p||s!==b)&&(x.val=10,E.nodes[l][s].val=2,x=E.nodes[l][s],E.ending=x,p=l,b=s):(E.nodes[l][s].val=10,E.nodes[l][s].weight=1,p=l,b=s):(E.nodes[l][s].val=300,E.nodes[l][s].weight=4,p=l,b=s):(E.nodes[l][s].val=10,p=l,b=s):(E.nodes[l][s].val=50,p=l,b=s))}function I(n,e){var t=n.getBoundingClientRect();return{x:e.clientX-t.left,y:e.clientY-t.top}}}))}]);
//# sourceMappingURL=main.js.map
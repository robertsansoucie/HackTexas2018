

/* Shit */


var div = document.createElement("div");
div.class = "sidenav";
div.id = "putTheShitHere";
div.style.float = "right";
div.style.background = "#4286f4";

var p = document.createElement("h1");
p.id = "instructions";
p.innerHTML = "characters";

div.appendChild(p);

document.getElementsByTagName("body")[0].appendChild(div);
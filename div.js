

/* Shit */


var div = document.createElement("div");
div.class = "sidenav";
div.id = "putTheShitHere";
div.style.float = "right";
div.style.background = "#4286f4";

var p = document.createElement("p");
p.id = "instructions";
p.innerHTML = "characters";

div.appendChild(p);




var bub = document.createElement("button");
bub.id = "nightmodebub"; // aria-hidden


document.getElementsByTagName("body")[0].appendChild(div);
document.getElementsByTagName("div")[0].appendChild(bub);


document.getElementById('nightmodebub').addEventListener('click', function() {
  document.body.classList.toggle('nightmode');
});

document.getElementsByTagName("body")[0].appendChild(div);



var chart_div = document.createElement("div");
chart_div.id = "chart";
chart_div.style.width = "500px";
chart_div.style.height = "500px";
chart_div.style.backgoround = "#444444";
chart_div.style.position = "absolute";
chart_div.style.top = "100px";
chart_div.style.right = "10px";

document.getElementsByTagName("body")[0].appendChild(chart_div);

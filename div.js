

/* Shit */


var div = document.createElement("div");
div.class = "sidenav";
div.id = "putTheShitHere";
div.style.float = "right";
div.style.background =  "#423d49";

var p = document.createElement("p");
p.id = "instructions";
p.innerHTML = "characters";

div.appendChild(p);

var divslide = document.createElement("div");
divslide.id= "slideout";
divslide.class = "sidenav";


var bub = document.createElement("button");
bub.id = "nightmodebub"; // aria-hidden

div.appendChild(bub);
document.getElementsByTagName("body")[0].appendChild(divslide);
document.getElementById("slideout").appendChild(div);




document.getElementById('nightmodebub').addEventListener('click', function() {
  document.body.classList.toggle('nightmode');
});


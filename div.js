

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


/* random meme time! */
var memeChild = document.createElement("div");
memeChild.id = "meme";
memeChild.innerHTML = "<img src='https://d1b10bmlvqabco.cloudfront.net/attach/jl6j590c33q2vu/j6zypxbutj2152/jnb2he73d9ia/is_this_a_spy_device.jpg' width='150' height = '150' alt ='meme'>";
var mbub = document.createElement("button");
mbub.id = "mbub";
mbub.onclick = function(){
	memeChild.innerHTML = "<img src='https://d1b10bmlvqabco.cloudfront.net/attach/jl6j590c33q2vu/j6v4nghwrg15b/jn2j2k9taodn/p6_meme.png' alt ='meme2'>";
	window.reload();
}
memeChild.append(mbub);

div.append(memeChild); 

document.getElementsByTagName("body")[0].appendChild(divslide);
document.getElementById("slideout").appendChild(div);


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

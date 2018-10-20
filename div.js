var div = document.createElement("div");
div.id = "putTheShitHere"
div.style.float = "right";
div.style.width = "100px";
div.style.height = "100px";
div.style.background = "red";
div.style.position = "absolute";
div.style.top = "10px";
div.style.right = "10px";

var p = document.createElement("p");
p.innerHTML = "Add shit here k";

div.appendChild(p);

document.getElementsByTagName("body")[0].appendChild(div);
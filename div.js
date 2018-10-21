


var div = document.createElement("sidenav");
div.id = "putTheShitHere";
div.style.float = "right";
// div.style.width = "500px";
// div.style.height = "500px";
div.style.background = "#4286f4";
//div.style.position = "absolute";
// div.style.top = "10px";
// div.style.right = "10px";



var p = document.createElement("p");
p.innerHTML = "Add shit here k";

div.appendChild(p);

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
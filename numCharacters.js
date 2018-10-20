var tableRows = document.getElementsByTagName("tr");
tableRows[0].childNodes[0].innerHTML = tableRows[0].childNodes[0].innerHTML.substring(7, 9);
for(var x = 1; x < tableRows.length; x++) {
	var commitIdTag = tableRows[x].childNodes[0];
	commitIdTag.id = commitIdTag.innerHTML;
}

var div = document.getElementById("putTheShitHere");

var slider = document.createElement("input");
slider.type = "range";
slider.min = "2";
slider.max = "40";
slider.value = "40";
slider.id = "numCharactersInCommitSlider";

var output = document.createElement("p");

output.innerHTML = slider.value;

slider.oninput = function() {
	output.innerHTML = this.value;
	for(var x = 1; x < tableRows.length; x++) {
		var td = tableRows[x].childNodes[0];
		var commitId = td.id;
		td.innerHTML = commitId.substring(0, this.value);
	}
}

div.appendChild(slider);
div.appendChild(output);
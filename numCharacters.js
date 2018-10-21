var tableRows = document.getElementsByTagName("tr");
tableRows[0].childNodes[0].innerHTML = tableRows[0].childNodes[0].innerHTML.substring(7, 9);
for(var x = 1; x < tableRows.length; x++) {
	var commitIdTag = tableRows[x].childNodes[0];
	commitIdTag.id = commitIdTag.innerHTML;
}

var div = document.getElementById("putTheShitHere");

var sliderValue = 'sliderValue';

var slider = document.createElement("input");
var output = document.createElement("p");
output.id = "sliderOutput";
slider.type = "range";
slider.min = "2";
slider.max = "40";
slider.id = "numCharactersInCommitSlider";
chrome.storage.sync.get([sliderValue], function(result) {
	if(result.sliderValue === undefined) {
		slider.value = 40;
		output.innerHTML = 40;
	}
	else {
		slider.value = result.sliderValue;
		output.innerHTML = result.sliderValue;
		for(var x = 1; x < tableRows.length; x++) {
			var td = tableRows[x].childNodes[0];
			var commitId = td.id;
			td.innerHTML = commitId.substring(0, slider.value);
		}
	}
	console.log(slider.value);
});

slider.oninput = function() {
	var val = this.value;
	output.innerHTML = val;
	for(var x = 1; x < tableRows.length; x++) {
		var td = tableRows[x].childNodes[0];
		var commitId = td.id;
		td.innerHTML = commitId.substring(0, val);
	}
	var obj = {};
	obj[sliderValue] = val;
	chrome.storage.sync.set(obj, function() {
	});
}


div.appendChild(slider);
div.appendChild(output);

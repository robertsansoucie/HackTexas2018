//import * from 'Math';
var rows = document.getElementsByTagName("TR");

var numPassed = [];
var i;
for (i=1; i<rows.length; i++) {
        var amount = parseInt(rows[i].childNodes[2].childNodes[0].innerHTML,10);
        numPassed.push(amount);
}




function getMean(array){
	var sum = 0;
    var length = array.length;
	for(var i=0; i<length; i++){
		sum += array[i];
	}
	sum /= length;
	return sum;
}


function getSd(array){
	var N = array.length;
	var mean = getMean(array);
	var diffArray = [];
	for(var i=0; i<N; i++){
		var diff = (array[i]-mean);
		diffArray.push(diff*diff);
	}
	var secondMean = getMean(diffArray);
	return Math.sqrt(secondMean, 0.5);
}

var avg = getMean(numPassed);

var sd = getSd(numPassed);

console.log(Number(avg).toFixed(2));
console.log(Number(sd).toFixed(2));


var nestNumPassed = []
for(var i = 0; i<numPassed.length; i++){
	var current = []
	current.push(numPassed[i]);
	nestNumPassed.push(current);
}

google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
	
	var data = google.visualization.arrayToDataTable(nestNumPassed);
	
	var options = {
		title: 'Test Cases Passed',
		legend: {position: 'none'},
	};

	var chart = new google.visualization.Histogram(document.getElementById('chart'));
	chart.draw(data, options);
}
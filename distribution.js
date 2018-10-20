var rows = document.getElementsByTagName("TR");

var numPassed = [];
var i;
for (i=1; i<rows.length; i++) {
        var amount = rows[i].getElementsByTagName("EM")[0];
        numPassed.push(amount);
}

var avg = 0;
i = 0
for(i=0; i<numPassed.length; i++){
        avg += numPassed[i];
}
avg /= numPassed.length;

for(i=1; i<rows.length; i++) {
        rows[i].getElementsByTagName("EM")[0].innerHTML = avg;
}

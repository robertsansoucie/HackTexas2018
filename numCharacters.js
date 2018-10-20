var tableRows = document.getElementsByTagName("tr");
tableRows[0].childNodes[0].innerHTML = tableRows[0].childNodes[0].innerHTML.substring(7, 9);
for(var x = 1; x < tableRows.length; x++) {
	var commitIdTag = tableRows[x].childNodes[0];
	commitIdTag.id = commitIdTag.innerHTML;
	commitIdTag.innerHTML = commitIdTag.innerHTML.substring(0, 4);
}

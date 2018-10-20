var tableRows = document.getElementsByTagName("tr");
for(int x = 1; x < tableRows.length; x++) {
	var commitIdTag = tableRows[x].childNodes[0];
	commitIdTag.id = commitIdTag.innerHTML;
	commitIdTag.innerHTML = commitIdTag.innerHTML.substring(0, 4);
}

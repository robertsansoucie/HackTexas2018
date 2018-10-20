var tableRows = document.getElementsByTagName("tr");

var firstCommitRow = tableRows[1];

var firstCommitColumns = firstCommitRow.childNodes;

var commitId = firstCommitColumns[0];

var header = document.getElementsByTagName("h2")[0];
header.innerHTML += commitId;


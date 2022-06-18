function getContestTable () {
    var contestElement = document.getElementById("headingOne");
    var contestTable = document.createElement("table");
    contestTable.id = contestTableId;

    contestElement.appendChild(contestTable);
}

function createContestRow () {
    var contestElement = document.getElementById("contestTableId");

    var tr = document.createElement("tr");
    tr.id = "contestHeaders";
}

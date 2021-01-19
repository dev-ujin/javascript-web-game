var body = document.body;
var table = document.createElement("table");
var rowArray = [];
var colArray = [];

var clickHandler = function(event) {
    console.log(event.target);
    console.log(event.target.parentNode);
    console.log(event.target.parentNode.parentNode);
}

for (var i=1 ; i<=3 ; i+=1) {
    var row = document.createElement("tr");
    rowArray.push(row);
    colArray.push([]);
    for(var j=1 ; j<=3 ; j+=1) {
        var col = document.createElement("td");
        col.addEventListener("click", clickHandler);
        colArray[i-1].push(col);
        row.appendChild(col);
    }
    table.appendChild(row);
}
body.appendChild(table);


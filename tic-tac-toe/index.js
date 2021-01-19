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
    var tr = document.createElement("tr");
    rowArray.push(tr);
    colArray.push([]);
    for(var j=1 ; j<=3 ; j+=1) {
        var td = document.createElement("td");
        td.addEventListener("click", clickHandler);
        colArray[i-1].push(td);
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
body.appendChild(table);


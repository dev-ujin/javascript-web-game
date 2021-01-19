var body = document.body;
var table = document.createElement("table");
var rowArray = [];
var colArray = [];
var turn = "X";
var result = document.createElement("div");

var clickHandler = function(event) {
    var row = rowArray.indexOf(event.target.parentNode);
    var col = colArray[row].indexOf(event.target);
    console.log(row, col);

    if (colArray[row][col].textContent !== "") {
        console.log("빈칸이 아닙니다!");
    }
    else {
        console.log("빈칸입니다!");
        colArray[row][col].textContent = turn;
        var success = false;
        // 가로줄 검사
        if (colArray[row][0].textContent === turn && colArray[row][1].textContent === turn &&colArray[row][2].textContent === turn) {
            success = true;
        }
        // 세로줄 검사
        if (colArray[0][col].textContent === turn && colArray[1][col].textContent === turn && colArray[2][col].textContent === turn) {
            success = true;
        }
        // 대각선 검사
        if (row - col === 0) {
            if (colArray[0][0].textContent === turn && colArray[1][1].textContent === turn && colArray[2][2].textContent === turn) {
                success = true;
            }
        }
        if (Math.abs(row - col) === 2) {
            if (colArray[0][2].textContent === turn && colArray[1][1].textContent === turn && colArray[2][0].textContent === turn) {
                success = true;
            }
        }
        console.log(success);
        if (success) {
            result.textContent = turn + " wins!";
            turn = "X";
            colArray.forEach(function (row) {
                row.forEach(function (col) {
                    col.textContent = "";
                });
            });
        }
        else {
            if (turn === "X") {
                turn = "O";
            }
            else {
                turn = "X";
            }
        }
    }
};

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
body.appendChild(result);


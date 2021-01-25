// fill을 하면 empty->undefined. empty는 반복문 불가!
var nums = Array(45).fill().map(function(num, index) {return index+1;});

var shuffle = [];
while (nums.length > 0) {
     shuffle.push(nums.splice(Math.floor(Math.random() * (nums.length)), 1)[0]);
}

var bonus = shuffle[shuffle.length - 1];
var selectedNums = shuffle.slice(0, 6).sort(function (p,c) {return p-c;});
var resultNums = document.querySelector("#resultNums");

function paintBall(num, resultSection) {
    var ball = document.createElement("div");
    ball.textContent = num;
    ball.style.display = "inline-block";
    ball.style.border = "1px solid black";
    ball.style.borderRadius = "10px";
    ball.style.width = "20px";
    ball.style.height = "20px";
    ball.style.textAlign = "center";
    ball.style.marginRight = "10px";
    ball.style.fontSize = "15px";
    ball.id = "ballId" + num;
    var bgColor;
    if (num <= 10) {
        bgColor = "red";
    }
    else if (num <=20) {
        bgColor = "orange";
    }
    else if (num <= 30) {
        bgColor = "yellow";
    }
    else if (num <= 40) {
        bgColor = "blue";
    }
    else {
        bgColor = "green";
    }
    ball.style.background = bgColor;
    resultSection.appendChild(ball);
}

setTimeout(function handler() {
    paintBall(selectedNums[0], resultNums)
}, 1000);
setTimeout(function handler() {
    paintBall(selectedNums[1], resultNums)
}, 2000);
setTimeout(function handler() {
    paintBall(selectedNums[2], resultNums)
}, 3000);
setTimeout(function handler() {
    paintBall(selectedNums[3], resultNums)
}, 4000);
setTimeout(function handler() {
    paintBall(selectedNums[4], resultNums)
}, 5000);
setTimeout(function handler() {
    paintBall(selectedNums[5], resultNums)
}, 6000);

setTimeout(function handler() {
    var resultBonus = document.querySelector(".resultBonus");
    paintBall(bonus, resultBonus)
}, 7000);
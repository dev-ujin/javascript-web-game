// fill을 하면 empty->undefined. empty는 반복문 불가!
var nums = Array(45).fill().map(function(num, index) {
    return index+1;
});
/* nums.forEach(function (num, index) {
    nums[index] = index+1;
});*/

var shuffle = [];
while (nums.length > 0) {
     shuffle.push(nums.splice(Math.floor(Math.random() * (nums.length)), 1)[0]);
}

var bonus = shuffle[shuffle.length - 1];
var selectedNums = shuffle.slice(0, 6);
console.log(bonus, selectedNums.sort(function (p,c) {return p-c;}));

var resultNums = document.getElementById("resultNums");


setTimeout(function handler() {
    var ball = document.createElement("div");
    ball.textContent = selectedNums[0];
    ball.style.display = "inline-block";
    ball.style.border = "1px solid black";
    ball.style.borderRadius = "10px";
    ball.style.width = "20px";
    ball.style.height = "20px";
    ball.style.textAlign = "center";
    resultNums.appendChild(ball);
}, 1000);
setTimeout(function handler() {
    var ball = document.createElement("div");
    ball.textContent = selectedNums[1];
    ball.style.display = "inline-block";
    ball.style.border = "1px solid black";
    ball.style.borderRadius = "10px";
    ball.style.width = "20px";
    ball.style.height = "20px";
    ball.style.textAlign = "center";
    resultNums.appendChild(ball);
}, 2000);
setTimeout(function handler() {
    var ball = document.createElement("div");
    ball.textContent = selectedNums[2];
    ball.style.display = "inline-block";
    ball.style.border = "1px solid black";
    ball.style.borderRadius = "10px";
    ball.style.width = "20px";
    ball.style.height = "20px";
    ball.style.textAlign = "center";
    resultNums.appendChild(ball);
}, 3000);
setTimeout(function handler() {
    var ball = document.createElement("div");
    ball.textContent = selectedNums[3];
    ball.style.display = "inline-block";
    ball.style.border = "1px solid black";
    ball.style.borderRadius = "10px";
    ball.style.width = "20px";
    ball.style.height = "20px";
    ball.style.textAlign = "center";
    resultNums.appendChild(ball);
}, 4000);
setTimeout(function handler() {
    var ball = document.createElement("div");
    ball.textContent = selectedNums[4];
    ball.style.display = "inline-block";
    ball.style.border = "1px solid black";
    ball.style.borderRadius = "10px";
    ball.style.width = "20px";
    ball.style.height = "20px";
    ball.style.textAlign = "center";
    resultNums.appendChild(ball);
}, 5000);
setTimeout(function handler() {
    var ball = document.createElement("div");
    ball.textContent = selectedNums[5];
    ball.style.display = "inline-block";
    ball.style.border = "1px solid black";
    ball.style.borderRadius = "10px";
    ball.style.width = "20px";
    ball.style.height = "20px";
    ball.style.textAlign = "center";
    resultNums.appendChild(ball);
}, 6000);
/*for (var i = 0 ; i < selectedNums.length ; i += 1) { 
    var ball = document.createElement("div");
    ball.textContent = selectedNums[i];
    resultNums.appendChild(ball);
}*/
setTimeout(function handler() {
    var resultBonus = document.getElementsByClassName("resultBonus")[0];
    var bonusBall = document.createElement("div");
    bonusBall.textContent = bonus;
    ball.style.display = "inline-block";
    ball.style.border = "1px solid black";
    ball.style.borderRadius = "10px";
    ball.style.width = "20px";
    ball.style.height = "20px";
    ball.style.textAlign = "center";
    resultBonus.appendChild(bonusBall);
}, 7000);
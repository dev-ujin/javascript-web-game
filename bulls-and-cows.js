var body  = document.body;
var result = document.createElement("h1");
var form = document.createElement("form");
var input = document.createElement("input");
var button = document.createElement("button");
var numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var answerArray = [];
var chance = 0;

for(var i=0 ; i<4 ; i+=1) {
    var selected = numArray.splice(Math.floor(Math.random() * (10 - i)), 1)[0]; // Array.splice(위치, 갯수)
    answerArray.push(selected);
}

console.log(answerArray);

body.append(result);
document.body.append(form);
input.type = "text";
input.maxLength = 4;
form.append(input);
button.textContent = "Tell me!";
form.append(button);

form.addEventListener("submit", function callBack(event) {
    event.preventDefault(); //새로고침(submit의 기본 동작) 방지
    var myAnswer = input.value;
    console.log(myAnswer);
    //문자.split(구분자) -> 배열
    //배열.join(구분자) -> 문자

    if (myAnswer === answerArray.join("")) {
        result.textContent = "HomeRun!!!";
        input.value = "";
        input.focus();
        numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        answerArray = [];
        for (var i=0 ; i<4 ; i+=1) {
            var selected = numArray.splice(Math.floor(Math.random() * (10 - i)), 1)[0]; // Array.splice(위치, 갯수)
            answerArray.push(selected); 
        }
    }
    else {
        var myAnswerArray = myAnswer.split("");
        var strike = 0;
        var ball = 0;
        chance += 1;
        if (chance > 4) {
            result.textContent = "Fail T^T. " + "The answer was " + answerArray.join("") + ".";
            input.value = "";
            input.focus();
            numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
            answerArray = [];
            for (var i=0 ; i<4 ; i+=1) {
                var selected = numArray.splice(Math.floor(Math.random() * (10 - i)), 1)[0]; // Array.splice(위치, 갯수)
                answerArray.push(selected); 
            }
            chance = 0;
        }
        else {
            for (var i=0 ; i<3; i+=1) {
                if (Number(myAnswerArray[i]) === answerArray[i]) {
                    strike += 1;
                }
                else if (answerArray.indexOf(Number(myAnswerArray[i])) > -1) {
                    ball += 1;
                }
            }
            result.textContent = strike + "Strike" + ball + "Ball";
        }
    }
});
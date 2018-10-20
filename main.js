var inputString = document.querySelector("#inputText");
var resultField = document.querySelector("#resultText")
var finalNumber;

function numberClick(number) {
    inputString.value += number;
    resultField.value = eval(inputString.value);
    console.log(eval.inputString.value);
}

function backSpace() {
    inputString.value = inputString.value.substring(0,inputString.value.length-1)
}

function allClear(){
    inputString.value = '';
    resultField.value = '0';
}

function answer(){
    console.log(eval(inputString.value));
}


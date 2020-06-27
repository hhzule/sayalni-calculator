
// clear display
var display = document.getElementById("result");
function clearResult() {
    display = document.getElementById("result");
    display.value = "";
}

// get numbers from buttons
var numbers = [];
function getNumber(num) {

    numbers = document.getElementById("result");
    numbers.value += num

}

// claculate result

function getResult() {
    var result = document.getElementById("result");
    result.value = eval(result.value)

}

// delete input

function deleteInput() {
    var input = numbers.value.length - 1;
    display.value = numbers.value.slice(0, input);
}
console.log(display.value)

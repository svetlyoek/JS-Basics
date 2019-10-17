function printGreaterNumber(input) {
    let firstNumber = Number(input.shift());
    let secondNumber = Number(input.shift());
    if (firstNumber > secondNumber) {
        console.log(firstNumber);
    }
    else {
        console.log(secondNumber);
    }
}
printGreaterNumber([5, 10])
function sameNumbers(input) {
    let firstNumber = Number(input.shift());
    let secondNumber = Number(input.shift());
    let thirdNumber = Number(input.shift());
    if (firstNumber == secondNumber && secondNumber == thirdNumber) {
        console.log('yes')
    }
    else {
        console.log('no')
    }
}
sameNumbers([5, 5, 5]);
sameNumbers([9, 5, 5]);
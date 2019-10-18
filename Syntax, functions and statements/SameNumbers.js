function sameNumbers(number) {
    number = number.toString();
    let firstNumber = number[0];
    let isEqual = true;
    let sum = +number[0];

    for (let i = 1; i <= number.length - 1; i++) {
        sum += +number[i];

        if (firstNumber !== number[i]) {
            isEqual = false;
        }
    }
    console.log(isEqual);
    console.log(sum);
}
sameNumbers(2222222);
sameNumbers(1234)
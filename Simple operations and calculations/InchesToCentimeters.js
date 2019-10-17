function inchesTocentimeters(input) {
    let inches = input.shift();
    let centimeters = 2.54;
    let result = inches * centimeters;
    console.log(result);
}
inchesTocentimeters([5])
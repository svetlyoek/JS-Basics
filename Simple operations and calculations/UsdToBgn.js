function currencyExchange(input) {
    let dollars = Number(input.shift());
    let bgnToDollarCourse = 1.79549;
    let sum = (dollars * bgnToDollarCourse).toFixed(2);
    console.log(sum);
}
currencyExchange([20]);
currencyExchange([100]);
currencyExchange([12.5]);
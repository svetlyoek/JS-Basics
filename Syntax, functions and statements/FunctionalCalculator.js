function calculate(a, b, operator) {
    let calc = function (a, b, operator) { return operator(a, b) };
    let add = function (a, b) { return a + b };
    let subtract = function (a, b) { return a - b };
    let divide = function (a, b) { return a / b };
    let multiply = function (a, b) { return a * b };
    switch (operator) {
        case '+':
            return calc(a, b, add);
            break;
        case '-':
            return calc(a, b, subtract);
            break;
        case '/':
            return calc(a, b, divide);
            break;
        case '*':
            return calc(a, b, multiply);
            break;
    }
   
}

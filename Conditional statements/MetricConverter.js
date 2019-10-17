function metricConverter(input) {
    let number = Number(input.shift());
    let inputUnit = String(input.shift());
    let outputUnit = String(input.shift());
    if (inputUnit == 'mm') {
        if (outputUnit == 'cm') {

            console.log((number / 10).toFixed(3));
        }
        else if (outputUnit == 'm') {
            console.log((number / 1000).toFixed(3));
        }
    }
    else if (inputUnit == 'cm') {
        if (outputUnit == 'mm') {
            console.log((number * 10).toFixed(3));
        }
        else if (outputUnit == 'm') {
            console.log((number / 100).toFixed(3));
        }
    }
    else if (inputUnit == 'm') {
        if (outputUnit == 'cm') {
            console.log((number * 100).toFixed(3));
        }
        else if (outputUnit == 'mm') {
            console.log((number * 1000).toFixed(3));
        }
    }
}
metricConverter([12, 'mm', 'm']);
metricConverter([150, 'm', 'cm']);
metricConverter([45, 'cm', 'mm']);
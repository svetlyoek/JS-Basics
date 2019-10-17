function areaCalculator(input) {
    let figureType = String(input.shift());

    if (figureType == 'square') {
        let side = Number(input.shift());
        let area = side * side;
        console.log(area.toFixed(3));
    }
    else if (figureType == 'rectangle') {
        let length = Number(input.shift());
        let height = Number(input.shift());
        let area = length * height;
        console.log(area.toFixed(3));
    }
    else if (figureType == 'circle') {
        let radius = Number(input.shift());
        let area = Math.PI * radius * radius;
        console.log(area.toFixed(3));
    }
    else if (figureType == 'triangle') {
        let side = Number(input.shift());
        let sideLength = Number(input.shift());
        let area = (side * sideLength) / 2;
        console.log(area.toFixed(3));
    }
}
areaCalculator(['square', 5]);
areaCalculator(['rectangle', 7, 2.5]);
areaCalculator(['circle', 6]);
areaCalculator(['triangle', 4.5, 20]);

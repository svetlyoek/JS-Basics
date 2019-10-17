function rectangleAreaAndPerimeter(input) {
    let x1 = Number(input.shift());
    let y1 = Number(input.shift());
    let x2 = Number(input.shift());
    let y2 = Number(input.shift());
    let height = Math.abs(x1 - x2);
    let width = Math.abs(y1 - y2);
    let area = height * width;
    let perimeter = 2 * (height + width);
    console.log(area.toFixed(2));
    console.log(perimeter.toFixed(2));
}
rectangleAreaAndPerimeter([60, 20, 10, 50])
rectangleAreaAndPerimeter([30, 40, 70, -10])
rectangleAreaAndPerimeter([600.25, 500.75, 100.50, -200.5])
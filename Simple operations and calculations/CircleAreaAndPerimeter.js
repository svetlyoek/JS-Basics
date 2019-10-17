function CircleAreaAndPerimeter([params]) {

    let r = Number(params);

    let area = Math.PI * Math.pow(r, 2);

    let perimeter = 2 * Math.PI * r;

    console.log(area.toFixed(2));

    console.log(perimeter.toFixed(2));

}
CircleAreaAndPerimeter([3])
CircleAreaAndPerimeter([4.5])


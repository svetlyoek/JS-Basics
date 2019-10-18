function calorieObject(input) {
    let objects = {};
    for (let i = 0; i < input.length; i += 2) {
        objects[input[i]] = +input[i + 1];

    }
    console.log(objects);
}
calorieObject(['Yoghurt', 48, 'Rise', 138, 'Apple', 52]);
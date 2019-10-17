function tank(input) {
    let length = Number(input.shift());
    let width = Number(input.shift());
    let heigth = Number(input.shift());
    let percentage = Number(input.shift());
    let tankCapacity = (length * heigth * width) / 1000;
    let realCapacity = tankCapacity - (tankCapacity * (percentage / 100));
    console.log(realCapacity.toFixed(3))

}
tank([85, 75, 47, 17])
tank([105, 77, 89, 18.5])
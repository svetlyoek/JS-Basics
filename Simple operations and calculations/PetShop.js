function foodShop(input) {
    let dogsCount = Number(input.shift());
    let otherAnimalsCount = Number(input.shift());
    let dogFoodPrice = dogsCount * 2.50;
    let otherFoodPrice = otherAnimalsCount * 4.00;
    let sum = dogFoodPrice + otherFoodPrice;
    console.log(`${sum.toFixed(2)} lv.`)
}
foodShop([5, 4])
foodShop([13, 9])
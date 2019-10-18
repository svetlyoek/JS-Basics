function fruit(food, weight, price) {
    let fruitType = food;
    let fruitWeight = +weight;
    let fruitPricePerKg = +price;
    let sum = (fruitWeight / 1000) * fruitPricePerKg;
    console.log(`I need $${sum.toFixed(2)} to buy ${(fruitWeight / 1000).toFixed(2)} kilograms ${fruitType}.`);
}
fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);
function toyShop(input) {
    let price = 0;
    let finalPrice = 0;
    let neededMoney = Number(input.shift());
    let puzzlesCount = Number(input.shift());
    let dollsCount = Number(input.shift());
    let bearsCount = Number(input.shift());
    let minionsCount = Number(input.shift());
    let trucksCount = Number(input.shift());
    price = (puzzlesCount * 2.60) + (dollsCount * 3) + (bearsCount * 4.10) + (minionsCount * 8.20) + (trucksCount * 2);
    if (puzzlesCount + dollsCount + bearsCount + minionsCount + trucksCount >= 50) {

        finalPrice = price - (price * 0.25);
    }
    else {
        finalPrice = price;
    }

    finalPrice -= finalPrice * 0.1;

    if (finalPrice >= neededMoney) {
        console.log(`Yes! ${(Math.abs(finalPrice - neededMoney)).toFixed(2)} lv left.`)
    }
    else {
        console.log(`Not enough money! ${(neededMoney - finalPrice).toFixed(2)} lv needed.`)
    }
}
toyShop([40.8,
    20,
    25,
    30,
    50,
    10
])
toyShop([320,
    8,
    2,
    5,
    5,
    1
])
function greening(input) {
    let squareMeters = Number(input.shift());
    let price = squareMeters * 7.61;
    let discountPrice = price - (price * 0.18);
    let discount = price - discountPrice;
    console.log(`The final price is: ${discountPrice.toFixed(2)} lv.`);
    console.log(`The discount is: ${discount.toFixed(2)} lv.`)
}
greening([540])

greening([135])
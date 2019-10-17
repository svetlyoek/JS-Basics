function calculateOrderPrice(input) {
    let tablesCount = Number(input.shift());
    let tableLengthInMeters = Number(input.shift());
    let tableWidthInMeters = Number(input.shift());
    let allRecatngleTableclothArea = tablesCount * (tableLengthInMeters + 0.3 * 2) * (tableWidthInMeters + 0.3 * 2);
    let allSquareTableclothArea = tablesCount * (tableLengthInMeters / 2) * (tableLengthInMeters / 2);
    let allTableclothPriceInUsd = allRecatngleTableclothArea * 7 + allSquareTableclothArea * 9;
    let allTableclothPriceInBgn = allTableclothPriceInUsd * 1.85;
    console.log(`${allTableclothPriceInUsd.toFixed(2)} USD`);
    console.log(`${allTableclothPriceInBgn.toFixed(2)} BGN`);
}
calculateOrderPrice([5, 1.00, 0.50])
calculateOrderPrice([10, 1.2, 0.65]);
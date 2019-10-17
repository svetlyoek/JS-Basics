function charityCampaignSum(input) {
    let daysCount = Number(input.shift());
    let cookersCount = Number(input.shift());
    let cakesCount = Number(input.shift());
    let goffretsCount = Number(input.shift());
    let panckaesCount = Number(input.shift());
    let allCakesPrice = 45 * (daysCount * (cookersCount * cakesCount));
    let allGoffretsPrice = 5.80 * (daysCount * (cookersCount * goffretsCount));
    let allPancakesPrice = 3.20 * (daysCount * (cookersCount * panckaesCount));
    let sum = (allCakesPrice + allGoffretsPrice + allPancakesPrice);
    let realSum = sum - (sum / 8);
    console.log(realSum.toFixed(2));

}
charityCampaignSum([20, 8, 14, 30, 16]);
charityCampaignSum([131, 5, 9, 33, 46]);
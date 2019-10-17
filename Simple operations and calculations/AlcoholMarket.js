function alcoholPrice(input) {
    let whiskeyPrice = Number(input.shift());
    let beerAmount = Number(input.shift());
    let wineAmount = Number(input.shift());
    let rakiaAmount = Number(input.shift());
    let whiskeyAmount = Number(input.shift());
    let allWhiskeyPrice = whiskeyPrice * whiskeyAmount;
    let rakiaPrice = whiskeyPrice / 2;
    let allRakiaPrice = rakiaPrice * rakiaAmount;
    let winePrice = rakiaPrice - (rakiaPrice * 0.4);
    let allWinePrice = winePrice * wineAmount;
    let beerPrice = rakiaPrice - (rakiaPrice * 0.8);
    let allBeerPrice = beerPrice * beerAmount;
    let sum = allWhiskeyPrice + allRakiaPrice + allWinePrice + allBeerPrice;
    console.log(sum.toFixed(2));


}
alcoholPrice([50, 10, 3.5, 6.5, 1]);
alcoholPrice([63.44, 3.57, 6.35, 8.15, 2.5]);
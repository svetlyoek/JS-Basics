function danceHall(input) {
    let hallLenght = Number(input.shift());
    let hallWidth = Number(input.shift());
    let wardrobeSide = Number(input.shift());

    let wardrobeArea = wardrobeSide * wardrobeSide;
    let hallArea = hallLenght * hallWidth;
    let benchArea = hallArea / 10;
    let realHallArea = hallArea - (benchArea + wardrobeArea);
    let dancersCount = realHallArea / (7040 / 10000);
    console.log(Math.floor(dancersCount));

}
danceHall([50, 25, 2])
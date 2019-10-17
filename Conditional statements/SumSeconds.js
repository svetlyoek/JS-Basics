function sumSeconds(input) {
    let firstTime = Number(input.shift());
    let secondTime = Number(input.shift());
    let thirdTime = Number(input.shift());
    let totalTime = firstTime + secondTime + thirdTime;
    let hours = Math.floor(totalTime / 60);
    let seconds = totalTime % 60;
    if (seconds < 10) {
        console.log(`${hours}:0${seconds}`)
    }
    else {
        console.log(`${hours}:${seconds}`)
    }
}
sumSeconds([35, 45, 44]);
sumSeconds([50, 50, 49]);
function time(input) {
    let hour = Number(input.shift());
    let minutes = Number(input.shift());

    let resultHour = 0;
    let resultMinutes = 0;
    if (minutes + 15 > 59) {
        let minutesDiff = 60 - minutes;
        resultMinutes = 15 - minutesDiff;
        if (hour + 1 <= 23) {
            resultHour = hour + 1;
        }
        else {
            resultHour = 0;
        }

    }
    else {
        resultMinutes = minutes + 15;
        resultHour = hour;
    }

    if (resultMinutes < 10) {
        console.log(`${resultHour}:0${resultMinutes}`);
    }
    else {
        console.log(`${resultHour}:${resultMinutes}`);
    }
}
time([1, 46]);
time([1, 46]);
time([23, 59]);
time([11, 08]);
time([12, 49]);
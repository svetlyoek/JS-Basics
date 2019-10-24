function sumByTown(input) {
    let obj = {};

    for (let i = 0; i < input.length; i += 2) {
        let name = input[i];
        let value = Number(input[i + 1]);
        if (!obj[name]) {
            obj[name] = 0;
        }

        obj[name] += value;
    }
    console.log(JSON.stringify(obj));
}

sumByTown(["Sofia",
    "20",
    "Varna",
    "3",
    "Sofia",
    "5",
    "Varna",
    "4"],
);
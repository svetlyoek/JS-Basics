function score(input) {
    let scores = Number(input.shift());
    let bonusScores = 0.0;
    let allScores = 0.0;
    if (scores <= 100) {
        if (scores % 2 == 0) {
            bonusScores = 6;
            allScores = scores + bonusScores;
            console.log(bonusScores);
            console.log(allScores);

        }
        else if (scores % 2 != 0 && scores % 10 == 5) {
            bonusScores = 5 + 2;
            allScores = scores + bonusScores;
            console.log(bonusScores);
            console.log(allScores);
        }

    }
    else if (scores > 100 && scores <= 1000) {
        if (scores % 2 == 0) {
            bonusScores = scores * 0.20 + 1;
            allScores = scores + bonusScores;
            console.log(bonusScores);
            console.log(allScores);
        }
        else if (scores % 2 != 0 && scores % 10 == 5) {
            bonusScores = scores * 0.20 + 2;
            allScores = scores + bonusScores;
            console.log(bonusScores);
            console.log(allScores);
        }
    }
    else if (scores > 1000) {
        if (scores % 2 == 0) {
            bonusScores = scores * 0.10 + 1;
            allScores = scores + bonusScores;
            console.log(bonusScores);
            console.log(allScores);

        }
        else if (scores % 2 != 0 && scores % 10 == 5) {
            bonusScores = scores * 0.10 + 2;
            allScores = scores + bonusScores;
            console.log(bonusScores);
            console.log(allScores);
        }
    }

}
score([15875]);
score([175]);
score([20]);



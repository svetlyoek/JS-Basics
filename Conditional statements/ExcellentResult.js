function printGrade(input) {
    let grade = Number(input.shift());
    if (grade >= 5.50) {
        console.log('Excellent!')
    }
}
printGrade([6]);
printGrade([5]);
printGrade([5.50]);
printGrade([5.49]);
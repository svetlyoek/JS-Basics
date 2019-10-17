function printStars(input = 5) {
    for (let i = 1; i <= input; i++) {
        console.log('*'.repeat(input).split('').join(' '))
    }
}
printStars([5]);
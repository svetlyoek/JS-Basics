function personalInfo(input) {
    let firstName = input.shift();
    let lastName = input.shift();
    let age = Number(input.shift());
    let town = input.shift();
    console.log(`You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`);
}
concatenateData(['Svetoslav', 'Kazakov', 32, 'Dryanovo']);

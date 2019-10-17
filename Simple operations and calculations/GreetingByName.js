function greeting(input) {
    let name = input.shift();
    let greeting = "Hello, " + name + '!'
    console.log(greeting)

}
greeting(["Petar"])
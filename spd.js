//1

const too = {Hello: "World"}
const aar = {exclamation: "Mark"}
console.log({...too, ...aar});

//2

const input = "FooBar"
const printer = (...letters) => letters.forEach(letter => console.log(letter))
printer(...input)

//3

let numberStore = [0, 1, 2];
let newNumber = 12;
console.log(numberStore = [...numberStore, newNumber]);
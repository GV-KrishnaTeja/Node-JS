//var is variable which is used globally 

var teja = 'hello welcome to js test'

function newFunction() {
    var krishna ='hello'
    
}


var teja = 'hai'
console.log(teja)
//here we can see that  var can be overwritten


// const is constant variable which can be wrritten only once .This is updated programmers will mostly used

const a=23 ,b=2
const sum = a+b
console.log(sum)

//let is used for variable declarations.this will be scoped inside the block

let bro ='HOW ARE U'
let man ='good'
if (true){
    let person='not good'
    console.log(person)
}
 // console.log(person)        here it will anonymous
//ECMAScript(es6) provides the specification on how JavaScript programming language should work.(2015)

const name = 'dhoni';
{
    const name = 'ms';

    console.log(name); // ms
}
console.log(name); // dhoni



// function expression
//let x = function(x, y) {
  //  return x * y;

let x= (x,y) =>x*y;         //arrpw fun
console.log(x(12,4));


//3 
//can pass default values in fun parameters
function sum(x, y = 5) {
    console.log(x + y);
}
sum(5)            //10
sum( 15)           //15



//


function show(a, b, ...args) {
    console.log(a);                    // one
    console.log(b);                     // two
    console.log(args);                 // ["three", "four", "five", "six"]
  }
  
show('one', 'two', 'three', 'four', 'five', 'six');
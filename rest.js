//1

function myFun(a,  b, ...manyMoreArgs) {
    console.log("a", a)
    console.log("b", b)
    console.log("manyMoreArgs", manyMoreArgs)
  }
  
  myFun("one", "two", "three", "four", "five", "six")

  //2
  function sumAll(...args) { 
    let sum = 0;
    for (let arg of args) sum += arg;
    return sum;
  }
console.log( sumAll(1) ); 
console.log( sumAll(1, 2) );





//3

function fun1(...theArgs) {
    console.log(theArgs.length)
  }
fun1()         
fun1(5)        
fun1(5, 6, 7)

//1

//direct fun 

function calcRectArea(width, height) {    //fun for cal
    return width * height;                 //mul of w and h
  }
console.log(calcRectArea(5, 6));              //30


//2

hoisted()           //type of fun declartions. which means intiating fun 

function hoisted() {     // here we are declaring fuc
  console.log('foo');    //foo
}


//3
//fun is used inside 

const getRectArea = function(width, height) {        //declaring fun to get rect area         
  return width * height;                             
}
console.log(getRectArea(3, 4))                        //3*4=12


//4
//genertorfuc

//generator is nothing but fun*

function* generator(i){      //gen i
  yield i   
  yield i +10
}
const gen= generator(20)          // i=20
console.log(gen.next().value);       //20
console.log(gen.next().value);       //30   ................


//5 
//fun rest parametr(ES6)

function sum(...args){
  let sum=0               //0
  for(let arg of args)sum +=arg;
  return sum
}
let x=sum(4,6,12,16)    //0+4+6+12+16
console.log(x);        //38

class Color{
    constructor(...arr){
        this.arr=arr
    };
    methodOne(){
        console.log(`${this.arr}`)
    };
}
const Color1= new Color("red","white","black")
Color1.methodOne()

//num and float


const x = parseInt("1hello.kki");
console.log(x);


const e = "23";
console.log(Number(e));

//arrow fun

hello = function() {
   return "hello welcome to node js";             //normal 
  }
  console.log(hello)

  hello = () => {
    return "hello welcome to node js";
  }                                                //arrow
  console.log(hello)



  //2 arrow fun

  
const x1 = function(x, y) {
    return x * y;
}                             //normal
console.log(x1(12,4));

const x= (x,y) =>x*y;         //arrow fun
console.log(x(12,4));

//3

const fullName = (fname,lname) => {
    const details = {
        fname : fname,
        lname :lname    
    }
                                              //arrow
    return details
}
console.log(fullName('krishna','teja'));

// normal fun

class Main {
        function (fname,lname) {
        let details1 = {
            fname1: fname,
            lname1:lname
        
        }
        
        return details1
    }
}
    console.log('bye','friends');
    
//1 line arrow

const a = 4;
const b=5;
const add =() => a + b + 100;
console.log(add());

//2


const Place = {
    city : "MAHABALIPURAM"
}
const X44 = () => Place

console.log(X44());

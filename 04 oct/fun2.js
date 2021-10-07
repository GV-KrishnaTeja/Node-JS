//6

function myNumber(){
    return 8639134;       //8639134
}
console.log(myNumber())     //excuted (8639134)

function myData(){
}
console.log(myData());        // undefined (in fun it will be undefined)


//7 
function hello(name){
    console.log("hello"+name)
}
hello("SIR")


//8
//scope fun

var car ="kwid"
function myFunction(){
    var car = "honda";
    console.log(car)  //honda         ; inside fun 
}
myFunction()
console.log(car);  //kwid               ;var is global


//1obj assignment

const Destination1 = { a: 1, b: 2 };        //target
const Destination2 = { b: 4, c: 5 };         //source
const returnedDestination1 = Object.assign(Destination1, Destination2);  //copies from des2 to des1
console.log(returnedDestination1);                                       //{a:1,b:4,c:5}



//obj create

const obj = Object.create({});
 console.log(Object.entries(obj));     //null   cuz object is not declared ......



// 2obj defineproperities


const object1 = {};                      // empty
Object.defineProperties(object1, {
  property1: {
    value: 42,                           //42
  },
  property2: { 
      value: 180,                       //180
  }
});
console.log(object1.property1);           //42
console.log(object1.property2);            //180


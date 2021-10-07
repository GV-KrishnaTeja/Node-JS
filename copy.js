//1

var buf1 = Buffer.from('abcdefghijkl');
var buf2 = Buffer.from('HELLO');
console.log(buf2.copy(buf1));
console.log(buf1.toString());


//2


const obj = { one: 1, two: 2 };
const obj2 = obj;
console.log(
  obj, obj2  
);
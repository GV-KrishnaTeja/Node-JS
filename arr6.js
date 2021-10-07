//keys1

const array1 = ['apple', 'ball', 'cat'];
const iterator = array1.keys();

for (const key of iterator) {
  console.log(key);
} 


//keys2

const object1 = {
    a: 'somestring',
    b: 42,
    c: false
  }
  
console.log(Object.keys(object1));


//last indexof1

var uint8 = new Uint8Array([2, 5, 9, 2]);
console.log(uint8.lastIndexOf(1, 3));


//lastindexof 2


var uint8 = new Uint8Array([2, 5, 9, 2]);
console.log(uint8.lastIndexOf(2));


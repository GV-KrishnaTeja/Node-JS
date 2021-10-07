 //copywithin 1

 const array1 = ['a', 'b', 'c', 'd', 'e'];
console.log(array1.copyWithin(0, 3));

//copywithin2

 const array2 = [1, 2, 3, 4, 5]
console.log(array2.copyWithin(-2, -3, -1));

//entries1

const array3 = ['a', 'b', 'c'];

const iterator1 = array3.entries();

console.log(iterator1.next().value);

//entries2

const a = ['a', 'b', 'c'];

for (const[index, element] of a.entries())
  console.log(index, element);

//every1

const isBelowThreshold = (currentValue) => currentValue < 40;

const array4 = [1, 30, 39, 29, 10, 13];

console.log(array4.every(isBelowThreshold));

//every2

var sampleArray = [ 1, 2, 3, 4, 5 ];
var sampleArray2 = [ 0, -1, -30, 5];
function tester(number){
  return number > 0;
}
console.log(sampleArray.every(tester));

 
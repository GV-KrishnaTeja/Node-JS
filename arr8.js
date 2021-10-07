//shift1

const array1 = [1, 2, 3];
const firstElement = array1.shift();
console.log(array1);

//shift2

let Lang = ["Python", "C", "Java", "JavaScript"];
while ((i = Lang.shift()) !== undefined) {
	Lang.shift();
}
console.log(Lang);



//slice1

const animals = ['ant', 1, 'camel', 2, 'elephant'];
console.log(animals.slice(2));

//slice

const animals1 = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals1.slice(2, 4));

//some1

const array = [1, 2, 3, 4, 5];
const even = (element) => element % 2 === 0;
console.log(array.some(even));

//some2

function isBiggerThan10(element, index, array) {
    return element > 10;
  }
console.log( [2, 5, 8, 1, 4].some(isBiggerThan10))
console.log([12, 5, 8, 1, 4].some(isBiggerThan10))

//sort1

const array12 = [1, 30, 4, 21, 100000];
array12.sort();
console.log(array12);


//sort 2
const array11 = [ 1, 6, 4, 9, 3 ]
const sorted = array11.sort((a, b) => {  
  return b - a
})
console.log(sorted)

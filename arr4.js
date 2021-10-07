//flat1

const arr1 = [0, 1, 2, [3, 4]];
console.log(arr1.flat());

//flat2

const arr2 = [1, 2, , 4, 5];
console.log(arr2.flat());


// flatmap1

let arr3 = [1, 2, 3, 4];

console.log(arr3.flatMap(x => [x * 2]));

console.log(arr3.flatMap(x => [[x * 2]]));


//map1

let arr4 = [1, 2, 3, 4];
console.log(arr4.map(x => [x * 2]));

//map2
let arr5 = ["it's Sunny in", "", "California"];
console.log(arr5.map(x => x.split(" ")));


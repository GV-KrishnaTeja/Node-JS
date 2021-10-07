//fill1

const array1 = [1, 2, 3, 4];

console.log(array1.fill(0, 2, 4));

//fill2
const arr =[1,2,3]
console.log([1, 2, 3].fill(4))  

//filter1
function isBigEnough(value) {
    return value >= 10
  }
  
  let filtered = [12, 5, 8, 130, 44].filter(isBigEnough)
  console.log(filtered);

  //filter2

  const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function isPrime(num) {
  for (let i = 2; num > i; i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return num > 1;
}

console.log(array.filter(isPrime));

//find1

const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
  ];
  
  function isCherries(fruit) {
    return fruit.name === 'cherries';
  }
  
  console.log(inventory.find(isCherries));

  //find 2

  const array2 = [5, 12, 8, 130, 44];

const found = array1.find(element => element = 12);

console.log(found);



//find ind1

const array4 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array4.findIndex(isLargeNumber));


//finind2

function isPrime(num) {
 for (let i = 2; num > i; i++) {
      if (num % i == 0) {
        return false;
      }
    }
    return num > 1;
  }
  
console.log([4, 6, 8, 9, 12].findIndex(isPrime))
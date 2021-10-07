//push1

var Lang = ['java', 'c', 'python'];
console.log(Lang);
Lang.push('node')
console.log(Lang)

//push2

const animals = ['lion', 'elephant', 'sheep'];
const count = animals.push('cheeta');
console.log(animals);


//pop1

const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato']
console.log(plants.pop())


//pop2

var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var popped = myFish.pop();
console.log(myFish)
console.log(popped)

//reduce

const array1 = [1, 2, 3, 4]
const reducer = (previousValue, currentValue) => previousValue + currentValue
console.log(array1.reduce(reducer))
console.log(array1.reduce(reducer, 5))

//redright
const array2 = [[0, 1], [2, 3], [4, 5]].reduceRight(
    (accumulator, currentValue) => accumulator.concat(currentValue)
  );
  console.log(array2);


//reverse
const array3 = ['haha', 'lol', 'rolf'];
console.log('array3:', array3);
const reversed = array3.reverse();
console.log('reversed:', reversed);


//reverse2

const a = [1, 2, 3]
console.log(a)
a.reverse()
console.log(a)




const teja = ['one', 'two'];

const [red, yellow, green, blue] = teja;

console.log(red); 
console.log(yellow); 
console.log(green); 


//ignore


function ignore() {
    return [1, 2, 3];
  }
  
  const [a, , b] = ignore();
  console.log(a); 
  console.log(b); 
  
  const [c,d] = ignore();
  console.log(c);
  
//3

const hero = {
  name: 'Batman',
};
const { name } = hero;
console.log(name);

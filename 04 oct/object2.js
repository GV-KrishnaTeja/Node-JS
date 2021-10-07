// obj freze
// freze will not chabge the value when it is assigned 
const obj = {
    value: 42                          //assinging val 42
  };
Object.freeze(obj);
obj.value = 33;                       //assingng val 33 which is error cuz freze will prevent another val
console.log(obj.value);               //42

//obj es6

let a = 1, b = 2, c = 3;
  object11 = {
    a,
    b,
    c,
  };
console.log(object11);             //{a:1,b:2,c:3}
//splice

let months = ["January", "February", "Monday", "Tuesday"];
let days = months.splice(2);
console.log(days); 


//splice2


let months1 = ["January", "February", "Monday", "Tuesday"];
let days1 = months.splice(2, 1);
console.log(days1); 
console.log(months1);


//tolocals1

const array1 = [1, 'a', new Date('03 oct 2021 14:12:00 UTC')];
const localeString = array1.toLocaleString('en', { timeZone: 'UTC' });

console.log(localeString);

//tolocals2

const arr = ['hello',12,]
const localString = arr.toLocaleString()
console.log(localString)

//tostri1

const array11 = [1, 2, 'a', '1a'];
console.log(array11.toString());

//tostr2
const arr11 = ['hello','my','height','is',21.0]
console.log(arr11.toString());


// class Person {
//     constructor(name) {
//         console.log('This is a constructor');
//         this.name = name;
//     }

//     methodOne() {
//         console.log(`Inside method one and name is ${this.name}`);
//     }
// }

// const personOne = new Person('Raj');
// personOne.methodOne();

// const personTwo = new Person('Krishna'); personTwo.methodOne();


function College (name, address) {
    this.name = name;
    this.address  = address;
    console.log(`name is ${name} and address is ${address}`);
}

const collegeOne = new College('TKR', 'HYD');


const collegTwo = new College('SNIST', 'HYD');

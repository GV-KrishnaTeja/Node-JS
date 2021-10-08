 class Person {
     constructor(fname,lname,age,gender) {
         this.fname = fname;
         this.lname=lname;
         this.age=age
         this.gender=gender 
     }
     methodOne() {
         console.log(`fname is ${this.fname} and lname is ${this.lname} and he ${this.age} years old`);
         console.log(`gender is ${this.gender}`);
         
     }
    
    } 
class Bio {
   constructor(study,branch){
   this.study=study
   this.branch=branch
   }

method2() {
    console.log(`studies ${this.study} in ${this.branch}`)
}
}

const person = new Person('gv','krishnateja',23,'male');
person.methodOne();
const bio1= new bio('Btech','ece')
bio1.method2()







// //call back 
// const greeting =name1 =>console.log(`${name1}`)
// greeting('hai!!!!!');


//promises

const funOne = () =>{
    return new Promise((resolve,reject) => {
        resolve('hai my name is kt'); 
        console.log('sachinnn')     // frst output
    })
}
  const funTwo = async() =>{
      const output = await funOne()
      console.log('my name is anu ') //second output
      console.log(output)             //3rd output
   }

funTwo();
funOne();
// await is used inside the async fun
// await is used by calling promises



const promiseFunc = () => {
    return new Promise((resolve,reject) => {
        resolve('hello i m done ');
    })
}

const funcone = async () => {
    const output = await promiseFunc()
    console.log(output)
}

funcone();

//<<<<<<<<<<<<________________>>>>>>>>>>>>



const mainFunc = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() =>{
            resolve('IAM DONE AFTER 3 SECS ');
        },3000);
    })
}

const funcThree = async () => {
    const output = await mainFunc()
    console.log(output)
}
funcThree();

//<<<<<<<<<<--------------->>>>>>>>>>>
const doDisplay = () => {
    return new Promise((resolve,reject) => {
      setTimeout(() => resolve('TEJA'), 2500)
    })
  }
  
  const doDisplayNew = async () => {
    console.log(await doDisplay())
  }
  
  console.log('GANGHU VENKATA')
  doDisplayNew()
  console.log('KRISHNA')



//<<<<<<<<<<<<<<<--------->>>>>>>>>>>>>>>>

const promiseFunc11 = () => {
    return new Promise((resolve,reject) => {
        reject('HEHEEEHEHEHEHH')
    })
}

const funcone11 = async () => {
    try{
    const output = await promiseFunc11()
    console.log(output)
    }catch(err){
        console.log('ERROR HANDLED PLEASE DO CHECK')
    }
}


funcone11();
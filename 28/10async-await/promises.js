//promise

const mePromise = new Promise((resolve,reject) => {
    const a = 1+1
    if (a==2){
       return resolve('CORRECT')
    }else{
      return  reject('FAIL')
    }
    

})
mePromise.then((message => {
    console.log(message)
})).catch((message => {
    console.log('failed to excute ')
}))
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
const workDone = false

const process = new Promise((resolve, reject) => {
  if (workDone) {
    const workDone1 = 'I BUILT'
    resolve(workDone1)
  } else {
    const why = 'PENDING'
    reject(why)
  }
})
process.then((message) =>{
    console.log('This is what' + message)
}).catch((message) =>{
    console.log('something is ' + message)
})

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
const main = true
const main1 = new Promise((resolve) => {
        setTimeout(() =>{
            resolve('IAM DONE AFTER 3 SECS ');
        },3000);
    })

main1.then((message) =>{
    console.log('done man!!!!!!!!!!!!!')
}).catch((message) =>{
    console.log('error handled mannnnnnnn')
})

//<<<<<<<<<<<<<<<]

const p = 12+30
const x = new Promise((resolve,reject) =>{
    if (p == 42){
        resolve('perfect')
    }
    else{
        reject('block')
    }
})
x.then((message)=>{
    console.log(message)
}).catch((message) =>{
    console.log('error occured')
})


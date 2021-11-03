const funcOne = () => 21;

console.log(funcOne());



const mePromise = new Promise((resolve,reject) => {
    const a = 1+1
    if (a==2){
        resolve('CORRECT')
    }else{
        reject('FAIL')
    }
    
})
mePromise.then((message => {
    console.log(message)
})).catch((message => {
    console.log('failed to excute ')
}))


// Example 2
const mePromise = () => {
    return new Promise((resolve,reject) => {
        const a = 1+1
        if (a==2){
            resolve('CORRECT')
        }else{
            reject('FAIL')
        }
        
    })
}

mePromise().then((message => {
    console.log(message)
})).catch((message => {
    console.log('failed to excute ')
}))
//promises

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

//async await;


const promiseFunc = () => {
    return new Promise((resolve) => {
        resolve('hello i m done ');
    })
}

const funcone = async () => {
    const output = await promiseFunc()
    console.log(output)
}

funcone();  
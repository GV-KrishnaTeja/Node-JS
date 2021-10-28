

const oneFunc = () =>{
    return new Promise(resolve => {
        resolve(10+5)

    })
}

const mainTo = async() => {
    const msg = await oneFunc()
    console.log(msg);

}

mainTo();


//<<<<<<<<<----------->>>>>>>>>
const chalk = require('chalk')

const outputChange = () =>{
    return  new Promise(resolve=>{
        resolve('error')
    })
}
const colorTwo = async() => {
    console.log(chalk.red.bold(await outputChange()));
}
 
colorTwo();
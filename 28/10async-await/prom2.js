const k= false
const tOne = new Promise((resolve,reject) => {
    if (k){
        resolve('GOOD')
    }else{
        reject('error')
    }
})
tOne.then((message) =>{
    console.log(message)
}).catch((message)=> {
    console.log(chalk.red('performance is low'))
})
 const chalk = require('chalk')
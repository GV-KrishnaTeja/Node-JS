const mysql= require('mysql')
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Password@123',
    database:'student_table'
})
connection.connect((error)=>{
    if(error){
        return console.log(error.message);
    }
    console.log('connected sucessfully to db!!!')
})
 
// exports.connection= connection
 module.exports = connection
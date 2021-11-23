const express = require('express');
const path = require('path');
var router = express.Router();
const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Password@123',
  database : 'student_table'
});

connection.connect(function(error){
    if(error) throw error
    else console.log("connected!!!!")
})



router.post('/authorize', function (req, res, next) {
        const username = req.body.uname
        const pass = req.body.psw
         console.log(pass);
         console.log(username);
         connection.query("select * from loginuser where user_name = ? and user_pass=?",[username,pass],function(error,result,fields){
             if(result){
                 res.render('anu',{ title: 'HOMEPAGE' ,result})
             }else{
                 console.log('error')
             }
         })
        })
    
module.exports=router;

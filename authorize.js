const express = require('express');
const path = require('path');
const jwt = require('jsonwebtoken');
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
        const secret = 'QWER@#$^'
        const username = req.body.uname
        const pass = req.body.psw
         console.log(pass);
         console.log(username);
         connection.query("select * from loginuser where user_name = ? and user_pass=?",[username,pass],function(error,result,fields){
             if(result){
                jwt.sign({ user: 'IoneTech' },secret, function(err, token) { // step -1 creating a token
                    if (err) {
                        console.log(err);
                        res.status(500).send(err);
                        return;
                    } else {
                        console.log('Inside');
                        tokenGen = token;
                        console.log(token);
                        const tokenObj = {
                            code : token
                        }
                        res.cookie('jwtToken',tokenObj,{maxAge : 300000}); // step -2 & 3 , creating a cookie an dloading token in cookie
                        res.render('anu',{ title: 'HOMEPAGE' ,result})
    
                    }
                })   
    
                //res.send('<h1>Check username and password!</h1>')
                // res.render('kta', {title: 'Express'})
            
    
                
             }else{
                 console.log('error')
             }
         })
        })
    
module.exports=router;

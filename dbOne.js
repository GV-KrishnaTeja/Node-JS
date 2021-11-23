
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


router.get('/jjss',(req,res)=>{
  connection.connect(function(err) {   

      if (err) throw err;
      console.log("Connected!");
      connection.query('SELECT * FROM student_table.`student info`', function (err, result) {
        if (result){
          res.render('dbOne',{title:'express',result});
          }
        });
      }) 

    })

  
module.exports=router;


// // res.render('dbOne',{title:'express',result});

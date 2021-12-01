const express = require('express');
const path = require('path');
var router = express.Router();
const jwt= require('jsonwebtoken')
const verifyjwt = require('../utils/verifyJwtToken');
const connection =require('../utils/connection')



// const mysql      = require('mysql');
// //const express = require('express');
// const connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : 'Password@123',
//   database : 'student_table'
// });


router.get('/jjss',(req,res)=>{
  const secret = 'QWER@#$^'
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
      }
    })
    
  // connection.connect(function(err) {   
    try {
       verifyjwt.verifyJwtAuth(req.cookies.jwtToken.code).then((result) => {
        let pageNo;
        let limitvalue;
          if (result === 'Verified Successfully') {
              
              
               if(req.query.page === undefined){

                   pageNo = 1;
                   limitvalue = 3;
                   console.log(pageNo);
                   console.log(limitvalue);
      
               }else {
                   pageNo = req.query.page;
                   limitvalue = req.query.limit;
                   console.log(limitvalue);
                   console.log(pageNo);
               }
           }
        

     // if (err) throw err;
      console.log("Connected!");
      connection.query(`SELECT * FROM studentinfo limit ${(pageNo-1)*limitvalue} ,${limitvalue*1}`, function (err, result) {
        if (result) {
          console.log(result)
          console.log(result.length)
          //const details = {pageNo,limitValue}
          res.render('dbOne',{title:'express',result,pageNo,limitvalue});
          //res.send(results)
      }
      else console.log(err);
        // if (result){
        //   res.render('dbOne',{title:'express',result});
        //   }
        
        });
      })
         
      
    
    }catch(error){
    console.log(error);
    // res.send('<h3>login please!</h3>')
  }






    router.get('/updateRecord',(req,res,next) =>{
      const first = req.query.Firstname;
      const emp_id = req.query.studentId
       console.log(first,emp_id);
      // const firstUI = req.body.first_name;
      // console.log(firstUI);
      // connection.query(`UPDATE employee
      // SET first_name = ${req.body.first_name}
      // WHERE emp_id = ${emp_id}`)
      res.render('updateRecord',{first,emp_id})
  })
  
  router.get('/deleteRecord',(req,res,next) =>{
     // res.render('addRecord')
     const emp = req.query.studentId
     console.log(emp);
     connection.query(`DELETE FROM studentinfo WHERE studentId=${emp}`,(error)=>{
      if(error){
          return console.log(error);
      }
     res.send('<h1>Data Deleted successfully!</h1>')
     //res.send('Data deleted!')
  })
  })
})
  
module.exports=router;
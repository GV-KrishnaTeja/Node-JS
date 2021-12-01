
var express = require('express');
const connection = require('../utils/connection');

var router = express.Router();
// const jwt = require('jsonwebtoken');
// const mongoConnection = require('../utils/connection').connectionObject;
// const importAuthFun = require('../utils/verifyAuth');

router.post('/update_auth', function (req, res, next) {
//    const emp_id = employee.emp_id
//    console.log(emp_id);
   const name = req.body.Firstname
   const emp_id = req.body.studentId
    console.log(name,emp_id);
    connection.query(`UPDATE studentinfo SET Firstname = '${req.body.Firstname}' WHERE studentId = ${emp_id}`,(error)=>{
        if(error){
            return console.log(error);
        }
            res.render('updateRecord',{name,emp_id});
        // res.send('<h1>Data updated successfully!</h1>')
    })
      
      
    });

    
module.exports = router;
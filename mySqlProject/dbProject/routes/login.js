const express = require('express');
const path = require('path');
var router = express.Router();
// const mysql      = require('mysql');
const connection =require('../utils/connection')
// const connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : 'Password@123',
//   database : 'student_table'
// });

// connection.connect(function(error){
//     if(error) throw error
//     else console.log("connected!!!!")
// })


router.get('/login', function(req, res, next) {
  
    res.render('login', { title: 'Express' });
});


module.exports = router;

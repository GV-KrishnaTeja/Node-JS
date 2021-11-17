var express = require('express');
var router = express.Router();
const mongoConnection = require('../utils/connection').connectionObject;
const addFunction = require('../utils/connection');
// Import that connection object

/* GET home page. */
router.get('/userLogin', function(req, res, next) {
    // collect the username and password from the login form
    // get ur deatils from mongodb or from a file
    // verify your details with the details provided by the user
    // create jwt token
    // create a cookie and put the token in the cookie
    // rest of our logic
    res.render('userLogin', { title: 'Express' });
});


// router.get('/addRecord', function(req, res, next) {
//   // Database Name
//   const dbName = 'myProject';
//   let clientConn;
//   console.log(addFunction.addFun(2,383));
//   mongoConnection.then(async (client) => {
//     clientConn = client;
//     const db = client.db(dbName);
//     const collection = db.collection('documents');
//     try {
//       const insertResult = await collection.insertMany([{ a: 1, name:'Ram', city:'Bangalore'}]);
//       const findResult = await collection.find({}).toArray();
//       res.render('addRecord', { title: 'Express', findResult });
//     } catch(err) {
//       console.log(err);
//       res.status(500).send(err);
//     }
//   });
// });

module.exports = router;

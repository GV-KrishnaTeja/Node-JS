var express = require('express');
var router = express.Router();
const mongoConnection = require('../utils/connection').connectionObject;
const addFunction = require('../utils/connection');
// Import that connection object

/* GET home page. */
router.get('/table', function(req, res, next) {
  // Database Name
  const dbName = 'myProject';
  // let clientConn;
  // console.log(addFunction.addFun(2,383));
  mongoConnection.then(async (client) => {
    clientConn = client;
    const db = client.db(dbName);
    const collection = db.collection('documents');
    try {
      const insertResult = await collection.insertMany(
        [{ a: 1, name:'Ram', city:'Bangalore'},
        {a:2,name:'kittu',city:'hyd'}]);
      const findResult = await collection.find({}).toArray();
      // console.log('Found documents =>', findResult);
      // res.send({length:findResult.length});
      res.render('table', { title: 'Express', findResult });
    } catch(err) {
      console.log(err);
      res.status(500).send(err);
    }
    
  });
  // res.render('index', { title: 'Express',arr : [1,2,3,4,5], obj :{a:'Ram',b:2,c:3} });
});

module.exports = router;

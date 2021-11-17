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
      let pageNo;
      let limitValue;
      console.log(req.query.page);
      if (req.query.page === undefined){
        pageNo = 1
        limitValue = 3;
      } else {
        pageNo = req.query.page;
        limitValue = req.query.limit;
      }
    
   
      const insertResult = await collection.insertMany(
        [{ a: 1, name:'Ram', city:'Bangalore'},
         {a:2,name:'kittu',city:'hyd'},
         {a:3,name:'sachin',city:'MH'},
         {a:4,name:'anuradha',city:'pune'},
         {a:5,name:'krishna',city:'Vanasthalipuram'},
         {a:6,name:'mark',city:'mumbai'},
         {a:7,name:'john',city:'UK'},
         {a:8,name:'zakeer',city:'hyd'},
    ]);
        const findResult = await collection.find({}).limit(limitValue * 1).skip((pageNo - 1) * limitValue).toArray();
      // console.log('Found documents =>', findResult);
       console.log(findResult.length);
       //res.send({length:findResult.length});
      const details = {
        findResult,pageNo,limitValue
      }
      res.render('table', { title: 'Express', details });
   
    } catch(err) {
      console.log(err);
      res.status(500).send(err);
    }
  
    
  });
  // res.render('index', { title: 'Express',arr : [1,2,3,4,5], obj :{a:'Ram',b:2,c:3} });
});

module.exports = router;

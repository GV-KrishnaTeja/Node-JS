var express = require('express');
const jwt = require('jsonwebtoken');
var router = express.Router();
const mongoConnection = require('../utils/connection').connectionObject;
const addFunction = require('../utils/connection');
// Import that connection object

/* GET home page. */
router.post('/authorize', function(req, res, next) {
    console.log(req.body);
    const dbName = 'myProject';
    const secret = 'QWER@#$^';
    const userFrmUi = req.body.uname;
    const pswsFrmUi = req.body.psw;
    console.log(userFrmUi);
    mongoConnection.then(async (client) => {
        clientConn = client;
        const db = client.db(dbName);
        const collection = db.collection('credentials');
        try {
          console.log('hahaha............')
          const findResult = await collection.findOne({username:userFrmUi})
          //console.log('...........',findResult);
          if (findResult.username === userFrmUi && findResult.password == pswsFrmUi) {
            jwt.sign({ user: 'IoneTech' },secret,{ expiresIn: 60 }, function(err, token) { // step -1 creating a token
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
                    res.render('table', {title:'table'});
                }
              });
          } else {
              res.render('error');
          }
        } catch(err) {
          console.log(err);
          res.status(500).send(err);
        }
        
      });
});

module.exports = router;
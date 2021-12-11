var express = require('express');
var router = express.Router();
const verifyjwt = require('../util/verifyJwtToken');
const connection = require('../util/connection');

/* GET home page. */
router.get('/showData1', function (req, res, next) {
  console.log(req.cookies);
  try {
    verifyjwt.verifyJwtAuth(req.cookies.info.code).then((result) => {
      if (result === 'Verified Successfully') {
        console.log(result)
        connection.query((`SELECT * FROM Admin WHERE email= '${req.cookies.info.uname}'`), (error, result, fields) => {
          if(error){
            console.log(error)
            return
          }
           res.render('welcome', { result })
        })
      }
    })
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;

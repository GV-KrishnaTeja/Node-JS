var express = require('express');
var router = express.Router();
const verifyjwt = require('../util/verifyJwtToken');
const connection = require('../util/connection');

/* GET home page. */
router.get('/showData', function (req, res, next) {
  console.log(req.cookies);
  try {
    verifyjwt.verifyJwtAuth(req.cookies.info.code).then((result) => {
      if (result === 'Verified Successfully') {
        console.log(result)
        connection.query((`select * from studentdata where email = '${req.cookies.info.email}'`), (error, result, fields) => {
          if(error){
            console.log(error)
            return
          }
           res.render('studentData', { result })
        })
      }
    })
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;

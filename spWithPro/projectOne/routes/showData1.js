var express = require('express');
var router = express.Router();
const verifyjwt = require('../util/verifyJwtToken');
const connection = require('../util/connection');
const exeQuery = require('../util/exeQuery').exeQuery;

router.get('/showData1', async function (req, res, next) {
  console.log(req.cookies);
  try {
    const verifyResult = await verifyjwt.verifyJwtAuth(req.cookies.info.code)
      if (verifyResult === 'Verified Successfully') {
      const query = `SELECT * FROM Admin WHERE email= '${req.cookies.info.uname}'`
      const result = await exeQuery(query);
      res.render('welcome', { result })
    }
  } catch (e) {
    console.log(e);
    res.status(400).send('Error occured!')
  }
});

module.exports = router;

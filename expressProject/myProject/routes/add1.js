var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/add1', function(req, res, next) {
    const a=22,b=21
    const z=a+b
  res.send( {z});
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/div', function(req, res, next) {
    const a=100 ,b=10;
    const x = a/b;

  res.send({x:x});

});

module.exports = router;

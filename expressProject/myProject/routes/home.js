var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/home', function(req, res, next) {
  const body = req.body ;
  const a= parseInt(body.a) ,b=parseInt(body.b)
    const sum = a+b;
  res.render('add',{sum:sum});

});

module.exports = router;

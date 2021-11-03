var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/add', function(req, res, next) {
  const a=21,b=1
  
    const sum = a+b;
  res.render('add',{sum:sum});

});

module.exports = router;

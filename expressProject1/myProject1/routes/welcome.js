var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/welcome', function(req, res, next) {
  res.render('hai', { title: 'WELCOME TO IONETECHSOLUTIONS' });
});

module.exports = router;

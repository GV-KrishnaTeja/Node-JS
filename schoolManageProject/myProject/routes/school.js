var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/school', function(req, res, next) {

  res.render('school', { title: 'Express' });
});

module.exports = router;

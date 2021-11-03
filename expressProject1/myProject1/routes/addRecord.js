var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/addRecord', function(req, res, next) {
  res.render('index', { title:'express'});
});

module.exports = router;

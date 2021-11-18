var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/kta', function(req, res, next) {
  res.render('kta', { title: 'BY KT' });
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/sub/:a/:b', function(req, res, next) {
    const params = req.params
    const a=parseInt(params.a) , b= parseInt(params.b)
    const z = a-b

  res.render('sub',{z});

});

module.exports = router;

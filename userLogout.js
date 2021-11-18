var express = require('express');
var router = express.Router();



router.get('/userLogout', function(req, res, next) {
 
    res.render('userLogout', { title: 'Express' });
});



module.exports = router;

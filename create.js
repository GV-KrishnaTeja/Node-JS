
var express = require('express');
const jwt = require('jsonwebtoken');
var router = express.Router();

/* GET users listing. */
router.get('/create', function(req, res, next) {
    console.log('Heloooooooooo');
    let tokenGen;
    const secret = 'QWER@#$^';
    //generate token
    jwt.sign({ user: 'IoneTech' },secret,{ expiresIn: 60 }, function(err, token) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
            return;
        } else {
            tokenGen = token;
            console.log(token);
            res.send(token);
        }
      });
});

module.exports = router;

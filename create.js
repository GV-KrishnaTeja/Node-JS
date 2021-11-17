const {token} =require('morgan')
var express = require('express');
const jwt = require('jsonwebtoken');
var router = express.Router();

/* GET users listing. */
router.get('/create', function(req, res, next) {
    console.log('Heloooooooooo');
    let tokenGen;
    const secret = 'QWER@#$^';
    //generate token
    jwt.sign({ user: 'IoneTech' },secret, function(err, token) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
            return;
        } else {
            tokenGen = token;
            console.log(token);
            const tokenobj={
                code: token
            }
            res.cookie('jwtToken',tokenobj)

            res.send("token created");
        }
 
      });
});

module.exports = router;

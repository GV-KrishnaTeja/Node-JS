var express = require('express');
const connection = require('../util/connection');
const jwt = require('jsonwebtoken')
var router = express.Router();

/* GET home page. */
router.post('/checkValidate', function (req, res, next) {
  const email = req.body.email;
  const pass = req.body.pass;
  console.log(email,pass);
  const secret = 'QWER@#$^'
  //res.redirect('/showData');
  connection.query((`select * from studentdata where email = '${email}'`), (error, result, fields) => {
    if (result[0].password === pass && result[0].email === email) {//counter condition needs to add
      console.log(result);
      console.log('login successful');
      jwt.sign({ user: 'IoneTech' }, secret, function (err, token) { // step -1 creating a token
        if (err) {
          console.log(err);
          res.status(500).send(err);
          return;
        } else {
          console.log('Inside');
          tokenGen = token;
          console.log(token);
          const info = {
            email,
            code: token,
            role:admin
          }
        
          res.cookie('info', info, { maxAge: 300000 }); // step -2 & 3 , creating a cookie an dloading token in cookie
          res.role('/adminlogin')
          res.redirect('/showData');
        }
      })
    } else {
      console.log(error);
      res.send('check username / password!');
    }
  });
})


router.post("/authorizeLogin", function (req, res, next) {
  const uname = req.body.Uname;
  const pass = req.body.Pass;
  console.log(uname,pass)
  connection.query(`SELECT * FROM Admin WHERE username='${uname}' `,(error, result) => {
      if ((result[0].username === uname) && (result[0].password === pass)) {
        console.log("matched");
        res.render("welcome");
      } else {
        res.send("<h1>invalid input and password!</h1>");
      }
    }
  );
});

module.exports = router;





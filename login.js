var express = require('express');
var cookieParser = require('cookie-parser');
var router = express.Router();

/* GET users listing. */
router.get('/login', function(req, res, next) {
  let auth={
      code:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiSW9uZVRlY2giLCJpYXQiOjE2MzY4ODE5NTYsImV4cCI6MTYzNjg4MjAxNn0.vfIqZwEYFBqO4Zenk4_FNTgAEEnrOlGOHgqoVw1_Wzc"
  }
 // console.log(`cookies are : , ${req.cookie}`)
  res.cookie('userdata',auth,{secure:true});
  res.send('cookie created');
});

 router.get('/testRoute',function(req,res,next){
    console.log(`cookies are : , ${req.cookie}`)
    if(req.cookies.userdata.auth === true){
      res.render('create')
    }
    res.send('no acess')
 })
 module.exports = router;

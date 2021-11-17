var express = require('express');
var cookieParser = require('cookie-parser');
var router = express.Router();
const jwt = require('jsonwebtoken');

/* GET users listing. */
router.get('/login', function(req, res, next) {
   let obj ={

       auth:true

   }

  
  console.log(`cookies are : , ${req.cookies}`)
  res.cookie('userdata',obj,{secure:true});
  res.send('cookie created');
});
//get token  from cookie n verify that token

router.get('/testRoute',function(req,res,next){
  console.log(`cookies are :,${JSON.stringify(req.cookies)}`)
  //console.log('kkakakakkakakakakakakak')
  const tokenfromCookie = req.cookies.jwtToken.code;
  console.log(tokenfromCookie)
  const secret = 'QWER@#$^'

  jwt.verify(tokenfromCookie,secret,function (err,decoded) {
    if(err){
      res.status(401).send('incorrect token');
    }
    else{

      console.log(decoded.user)

      if (decoded.user ==="IoneTech"){ 
        console.log("token verified from loginpage")
        res.send("token verified from loginpage")

        }
 
        
   
      }
    })
 
 })
 module.exports = router;

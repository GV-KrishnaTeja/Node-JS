var express = require('express');
var router = express.Router();
const jwt = require('jsonwebtoken');
/* GET users listing. */
router.get('/', function(req, res, next) {

console.log(`cookies are :,${JSON.stringify(req.cookies)}`)

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
     console.log("token verified from userspage")
     res.send("token verified from userspage")

     }

     

   }
 })

})



module.exports = router;

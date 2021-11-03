var express = require('express');
var router = express.Router();
const fs =require('fs');
const path = require('path');

/* GET users listing. */
router.put('/updatedName', function(req, res, next) {
  const updatedContent = req.body ;
  const newName = updatedContent.newName
  const data =fs.readFileSync(path.resolve(__dirname,'../public/javascripts/data.json'),'utf8');
  const parsedData = JSON.parse(data)
  parsedData.name = newName;
  console.log(parsedData);
  try{
      fs.writeFileSync(path.resolve(__dirname,'../public/javascripts/data.json'),JSON.stringify(parsedData));
      res.send('File uplaoded sucessfully');
  }catch(e){
      console.log(e);
      res.status(502).send('SOME ERROR')
  }


});

module.exports = router;

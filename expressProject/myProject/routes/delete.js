var express = require('express');
var router = express.Router();
const fs =require('fs');
const path = require('path');

/* GET users listing. */
router.delete('/deletePara', function(req, res, next) {
  const deleteContent = req.query ;
  const paramNameToBeDeleted = deleteContent.param;
  const data =fs.readFileSync(path.resolve(__dirname,'../public/javascripts/data.json'),'utf8');
  const parsedData = JSON.parse(data)
  delete parsedData[`${paramNameToBeDeleted}`];
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

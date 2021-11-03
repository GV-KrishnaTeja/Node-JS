var express = require('express');
var router = express.Router();
const mongoConnection = require('../utils/connections').connection

/* GET home page. */
router.get('/', function(req, res, next) {
  // Database Name
  const dbName = 'mainProject';
  const db = mongoConnection.db(dbName);
  const collection = db.collection('documents');
  res.render('index', { title:'express'});
});

module.exports = router;

var express = require('express');
var router = express.Router();
var redis = require('redis');
/* GET home page. */
router.get('/', function(req, res, next) {

  var client = redis.createClient(6379,'redis');
  client.on('connect', function() {
    console.log('Redisに接続しました'); 
  });
  client.get('mykey', function (error, result) {
      
    if (error) {
      console.log(error);
      throw error;
    }

  console.log(result);
  res.render('index', { title: result });
  });
  // res.render('index', { title: 'Express' });
});

module.exports = router;

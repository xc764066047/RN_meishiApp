var express = require('express');
var router = express.Router();
var foodList = require('../index.json')
var data = {
  "ret":true,
  "list":[
    {
      "id":1,
      "username":"Bob"
    },
    {
      "id":2,
      "username":"YHK"
    },
    {
      "id":3,
      "username":"chuyang"
    },
    {
      "id":4,
      "username":"xiaoxia"
    }
  ]
}

/* GET home page. */
router.get('/person', function(req, res, next) {
  res.json(data);
});

router.get('/food', function(req, res, next) {
  res.json(foodList);
});


module.exports = router;

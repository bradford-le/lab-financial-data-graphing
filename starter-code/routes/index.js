var express = require('express');
var router = express.Router();

console.log('LALALALALALALA!');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bitcoin' });
});

module.exports = router;

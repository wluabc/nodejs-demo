var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/user', function(req, res, next) {
  console.log(12);
  res.render('list',{'title':'aa','name':'wanglu'});
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express11' });
});
module.exports = router;

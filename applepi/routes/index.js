var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/applepi',function(req,res,next) {
  res.send('Yummy' + req.query.apple)
})

module.exports = router;

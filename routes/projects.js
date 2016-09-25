var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('projects', { title: 'Brad Voracek' });
});

router.get('/drones', function(req, res, next) {
  res.render('projects/drones', { title: 'Brad Voracek' });
});

router.get('/marblerun', function(req, res, next) {
  res.render('projects/marblerun', { title: 'Brad Voracek' });
});

router.get('/garden', function(req, res, next) {
  res.render('projects/garden', { title: 'Brad Voracek' });
});

module.exports = router;
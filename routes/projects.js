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

router.get('/loftbed', function(req, res, next) {
  res.render('projects/loftbed', { title: 'Brad Voracek' });
});

router.get('/lancasterlabor', function(req, res, next) {
  res.render('projects/lancasterlabor', { title: 'Brad Voracek' });
});

router.get('/azfirst', function(req, res, next) {
  res.render('projects/azfirst', { title: 'Brad Voracek' });
});

router.get('/sectoralbalances', function(req, res, next) {
  res.render('projects/sectoralbalances', { title: 'Sectoral Balances Explorer' });
});

module.exports = router;
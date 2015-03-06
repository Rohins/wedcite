var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/event', function(req, res) {
  res.render('event', { title: 'Express' });
});

router.get('/party', function(req, res) {
  res.render('party', { title: 'Express' });
});

router.get('/registry', function(req, res) {
  res.render('registry', { title: 'Express' });
});

router.get('/rsvp', function(req, res) {
  res.render('rsvp', { title: 'Express' });
});

module.exports = router;

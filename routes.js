const express = require('express');
const router = express.Router();
const views = __dirname + '/views'

router.use(function (req, res, next) {
  console.log(req.path + ' ' + req.method)
  next()
})

router.get('/', function(req, res) {
  res.sendFile(views + '/index.html')
})

router.get('/about', function(req, res) {
  res.sendFile(views + '/about.html')
})

router.get('/chart', function(req, res) {
  res.sendFile(views + '/chart.html')
})

router.get('/chart/crochet', function(req, res) {
  res.sendFile(views + '/crochet-chart.html')
})

router.get('/chart/knit', function(req, res) {
  res.sendFile(views + '/knit-chart.html')
})

router.get('/crochet', function(req, res) {
  res.sendFile(views + '/crochet.html')
})

router.get('/knit', function(req, res) {
  res.sendFile(views + '/knit.html')
})

router.get('*', function(req,res) {
  res.sendFile(views +  '/404.html')
})

module.exports = router;

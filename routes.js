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

router.get('/chart', function(req, res) {
  res.sendFile(views + '/chart.html')
})

module.exports = router;

const express = require('express');
const router = express.Router();
const views = __dirname + '/views'

// generate app specific password at https://myaccount.google.com/apppasswords
// create gmail-credentials.json with the following:
// {
//   "user": "aUser@gmail.com",
//   "pass": "abcdefghijklmnop"
// }

const credentials = require(__dirname + '/gmail-credentials.json')
const send = require('gmail-send')({
  user: credentials.user,
  pass: credentials.pass,
  to:   credentials.user,
})

router.use(function (req, res, next) {
  console.log(Date.now() + ' ' + req.path + ' ' + req.method)
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

router.post('/about', function(req, res) {
  let name = req.body.name
  let email = req.body.email
  let subject = req.body.subject
  let message = req.body.message
  console.log(req.body)
  console.log('sending email from ' + name + ' with address: ' + email);

  // send({
  //   replyTo: email,
  //   subject: subject,
  //   html:    name + ' has sent a message:</br></br>' + message
  // }, function (err, res) {
  //   console.log('* [example 1.1] send() callback returned: err:', err, '; res:', res);
  // })

  res.sendFile(views +  '/emailed.html')
})

router.post('/print', function(req, res) {
  let fromUrl = req.get('Referrer')
  let fromPage = fromUrl.split('/')[3]
  console.log(fromPage)

  console.log(req.body)

  let view = views + '/404.html'

  switch(fromPage) {
    case 'crochet':
      console.log('came from crochet pattern')
      view = views + '/print-crochet.html'
      break;
    case 'knit':
      console.log('came from knit pattern')
      view = views + '/print-knit.html'
      break;
    case 'crochet':
      console.log('came from somewhere else')
      break;
  }

  res.sendFile(view)
})

module.exports = router;

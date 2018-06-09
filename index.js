const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const router = express.Router()
const views = __dirname + '/views'
const bodyParser = require('body-parser')
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/static'))

router.use(function (req, res, next) {
  console.log('/' + req.method)
  next()
})

router.get('/', function(req, res) {
  res.sendFile(views + '/index.html')
})

router.get('/chart', function(req, res) {
  res.sendFile(views + '/chart.html')
})

app.use('/', router)

app.use('*', function(req,res) {
  res.sendFile(views + '/404.html')
})

server.listen(port, function() {
  console.log('Live at Port ' + port)
})

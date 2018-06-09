const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)
const bodyParser = require('body-parser')
const port = 3000
const router = require('./routes')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/static'))

app.use('/', router)

app.use('*', function(req,res) {
  res.sendFile(__dirname +  '/views/404.html')
})

server.listen(port, function() {
  console.log('Live at Port ' + port)
})

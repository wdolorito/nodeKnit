const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const server = require('http').createServer(app)
const port = 3000
const router = require('./routes')

app.use(express.static(__dirname + '/static'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', router)

server.listen(port, function() {
  console.log('Live at Port ' + port)
})

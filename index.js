const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const server = require('http').createServer(app)
const port = 3000
const router = require('./routes')

app.use(express.static(__dirname + '/static'))
app.use('/jspdf', express.static(__dirname + '/node_modules/jspdf/dist'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', router)

server.listen(port, function() {
  console.log('Live at Port ' + port)
})

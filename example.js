// Javascript version
// Assumes usual installation through npm.
var Router = require('node-simple-router')
// Alternative: assumes router.js is located at the current working directory.
//var Router = require('./router')

var http   = require('http')

var router = Router();

router.get('/', function (request, response) {
  response.end('Home page');})

router.get('/hello/:one/:two', function (request, response) {
  response.end("Hello, " + request.params.one + request.params.two);})

server = http.createServer(router)

server.listen(3000)


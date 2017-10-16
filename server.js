var express = require('express')
var app = express()
 
var path = require('path');

app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');

})
 
app.listen(3000)
console.log('App Listening on port 3000')
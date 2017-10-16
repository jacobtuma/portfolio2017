var express = require('express')
var app = express()
 
var path = require('path');

app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');

})
 
app.listen(process.env.PORT || 3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
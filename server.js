var express = require('express');
var app = express();

app.get('/:name', function (req, res) {
   
       var user = "Hello " + req.params.name+ ' !'
       console.log( user );
       res.end( user );

})

var server = app.listen(8081, function () {

  console.log('Server running at http://127.0.0.1:8081/');

})
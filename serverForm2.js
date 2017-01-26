var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var app     = express();

app.use(bodyParser.urlencoded({ extended: true })); 


app.get('/', function(req,res){
  fs.readFile('form.html', function (err, data) {
        res.writeHead(200);
        res.write(data);
        res.end();
    });
});
app.post('/myaction', function(req, res) {
  res.send('Hello ' + req.body.name);
});

app.listen(8081, function() {
  console.log('Server running at http://127.0.0.1:8081/');
});
var http = require('http');
var fs = require('fs');
var formidable = require("formidable");
var util = require('util');

var server = http.createServer(function (req, res) {
    if (req.method.toLowerCase() == 'get') {
        displayForm(res);
    } else if (req.method.toLowerCase() == 'post') {
        fieldsOfTheForm(req, res);
    }
});


function displayForm(res) {
    fs.readFile('form.html', function (err, data) {
        res.writeHead(200, {
            'Content-Type': 'text/html',
                'Content-Length': data.length
        });
        res.write(data);
        res.end();
    });
}

function fieldsOfTheForm(req,res){
	var form = new formidable.IncomingForm();

    form.parse(req, function (err, fields, files) {
        
        res.writeHead(200, {
            'content-type': 'text/plain'
        });
        
        
    	res.write('Hello ' + req.body.name);
	
    });


}
server.listen(8081);
console.log("server listening on 8081");
var http = require("http");

http.createServer(function (request, response) {

   response.writeHead(200);
   var url = request.url;
   var array = url.split('/');
   var output = ' Hello '+url.substring(1);

   response.end(output);

}).listen(8081);


console.log('Server running at http://127.0.0.1:8081/');
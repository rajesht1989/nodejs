var http = require('http');
var dateModule = require(".\\hellomodule.js");
var url = require('url');

function hello (req, res) {
  res.writeHead(500, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dateModule.myDateTime());
  res.write(req.url);
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
}

http.createServer(hello).listen(8080);
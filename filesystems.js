var http = require('http');
var fs = require('fs');

function filesystem (req, res) {
  fs.readFile('sample.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
     res.write(data);
    //  res.write(err);
    return res.end();
  });
}
http.createServer(filesystem).listen(8080);
var http = require('http')
var fs = require('fs')

function filesystem (req, res) {
  fs.unlink('writeFile.txt', function (err) {
    if (err) return res.end(err.message) ;
    console.log('File deleted!');
    return res.end()
  });
}

http.createServer(filesystem).listen(8080)
var http = require('http');
var fs = require('fs');

function filesystem (req, res) {
  fs.appendFile('appendfile.txt', 'Hello content!', function (err) {
    if (err) throw err;
    console.log('Saved!')
    return res.end()
  });
}
http.createServer(filesystem).listen(8080);
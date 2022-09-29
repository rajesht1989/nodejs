var http = require('http')
var fs = require('fs')

function filesystem (req, res) {
fs.rename('openfile.txt', 'renamefile.txt', function (err) {
  if (err) throw err;
  console.log('Renamed!');
  return res.end()
}); 
}

http.createServer(filesystem).listen(8080)
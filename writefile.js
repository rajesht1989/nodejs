var http = require('http')
var fs = require('fs')

function filesystem (req, res) {
fs.writeFile('writefile.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
  return res.end()
}); 
}

http.createServer(filesystem).listen(8080)
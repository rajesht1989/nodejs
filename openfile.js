var http = require('http')
var fs = require('fs')

function filesystem (req, res) {
  fs.open('openfile.txt', 'w', function (err, file) {
    if (err) throw err
    console.log('Opened Status!' + file)
    return res.end()
  });
}
http.createServer(filesystem).listen(8080)
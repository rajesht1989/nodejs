var fs = require('fs');
var events = require('events');
var eventEmitter = new events.EventEmitter();

var rs = fs.createReadStream('./openfile.txt');
rs.on('open', function () {
  console.log('The file is open');
});

var myEventHandler = function () {
    console.log('I hear a scream!');
  }
  
  eventEmitter.on("scream", myEventHandler);

  //Fire the 'scream' event:
  eventEmitter.emit('scream');
  
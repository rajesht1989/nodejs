var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("use hello;", function (err, result) {
    if (err) throw err;
    con.query("select * from users;", function (err, result) {
        if (err) throw err;
        console.log("Result: " + result[0].name);
      });
  });
 
});
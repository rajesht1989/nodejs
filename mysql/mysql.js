var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "hello"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("select * from users;", function (err, result) {
        if (err) throw err;
        result.forEach(element => {
             console.log("Result: " + element.id, element.name, element.city);
        });
    });
});
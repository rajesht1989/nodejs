var http = require("http");
var mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "hello"
});

http.createServer(function (req, res) {
if (req.url == "/get_users") {
    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
        con.query("select * from users where id > 105;", function (err, result) {
            if (err) throw err;
            res.write("Data from Local DB\n\n");
            result.forEach(element => {
                res.write(element.id + "\t" + element.name + "\t" + element.city + "\n");
            });
            res.end();
        });
    });
} else {
    res.write("Hello");
    res.end();
}
}).listen(8080);
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "hello"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO users (id, name, city) VALUES ?";
  var values = [
    [101, 'John', 'Highway 71'],
    [102, 'Peter', 'Lowstreet 4'],
    [103, 'Amy', 'Apple st 652'],
    [104, 'Hannah', 'Mountain 21'],
    [105, 'Michael', 'Valley 345'],
    [106, 'Sandy', 'Ocean blvd 2'],
    [107, 'Betty', 'Green Grass 1'],
    [108, 'Richard', 'Sky st 331'],
    [109, 'Susan', 'One way 98'],
    [110, 'Vicky', 'Yellow Garden 2'],
    [111, 'Ben', 'Park Lane 38'],
    [112, 'William', 'Central st 954'],
    [113, 'Chuck', 'Main Road 989'],
    [114, 'Viola', 'Sideway 1633']
  ];
  con.query(sql, [values], function (err, result) {
    if (err) throw err;
    console.log("Number of records inserted: " + result.affectedRows);
  });
});
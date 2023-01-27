var mangoDb = require('mangodb');

var client = mangoDb.MongoClient;
var url = "mangodb://ac-ffxvbyw-shard-00-02.s0ac36v.mongodb.net:27017/sample_airbnb";

client.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
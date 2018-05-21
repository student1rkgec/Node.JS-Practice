// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://diyswim:diyswim@ds035613.mlab.com:35613/collage", function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
});
/*
var MongoClient = require('mongodb').MongoClient;  
var url = "mongodb://diyswim:diyswim@ds035613.mlab.com:35613/collage";  
MongoClient.connect(url, function(err, db) {  
if (err) throw err;  
db.createCollection("employees", function(err, res) {  
if (err) throw err;  
console.log("Collection is created!");  
db.close();  
});  
}); */ 













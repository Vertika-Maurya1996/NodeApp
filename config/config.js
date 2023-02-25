var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  database:"testDB",
  user: "root",
  password: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE testDBnew",function(err , result){
    console.log(err )
    if(err) throw err;
    console.log("DB created")
  })
});
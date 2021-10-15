const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "me",
  password: "secret",
  database: "my_db",
});

connection.connect((err) => {
  if (err)
    console.error("Error while connecting database :" + JSON.stringify(err));
  else console.log("DB Connection successful");
});


module.exports = {
    connection
}
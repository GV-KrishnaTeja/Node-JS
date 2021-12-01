var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Password@123',
  database : 'student_table'
});
 
connection.connect();
 
connection.query('SELECT * FROM student_table.`student info`', function (error, rows, fields) {
  if (error) throw error;
  console.log(rows);
  connection.end();
});
 
//connection.end();
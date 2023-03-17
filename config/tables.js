var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "todolist"
});

con.connect(function (err) {

  if (err) throw err;
  var sql = "CREATE TABLE task (id_task INT AUTO_INCREMENT PRIMARY KEY, titulo VARCHAR(255), dificuldade CHAR(1), descricao VARCHAR(255))";

  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Tabela task criada");
  });

  con.end();
});
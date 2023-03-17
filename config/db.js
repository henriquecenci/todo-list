const mysql = require("mysql");
var pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "todolist"
});
exports.pool = pool;
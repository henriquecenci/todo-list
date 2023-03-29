
con = require("../config/db.js").pool;

module.exports = {
    registerTask: function(title, importance, description){
        var sql = "INSERT INTO task (titulo, dificuldade, descricao) VALUES ?";
        var values = [
            [title, importance, description]
        ];
        con.query(sql, [values], function (err, result) {
            if (err) throw err;
            console.log("Numero de registros inseridos: " + result.affectedRows + " " + title);
        });
    },

    searchTask: function(pesquisa){
        var sql = "SELECT * FROM task WHERE titulo LIKE '%"+pesquisa+"%'";
        con.query(sql, function (err, result) {
            if (err) throw err;
        });
    },
}
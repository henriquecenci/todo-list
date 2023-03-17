const express = require('express');
const formidable = require('formidable');

con = require("../config/db.js").pool;

const listModel = require("../model/listModel.js");

const userController = {
    list: (req, res) => {
        contagem = "SELECT COUNT(*) FROM task";
        var sql = "SELECT * FROM task"
        con.query(sql, function (err, result, fields) {
            if (err) throw err;
            con.query(contagem, function (err, result2, fields) {
                if (err) throw err;
                res.render('list.ejs', { task: result, contagem: result2 })
            });
        });
    },

    registerTasks: (req, res) => {
        var form = new formidable.IncomingForm();
        form.parse(req, (err, fields) => {
            vagaModel.registerTask(fields['importance'], fields['title'], fields['description']);
        });

        res.redirect('/');
    },
}


module.exports = userController;
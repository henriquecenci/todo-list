
con = require("../config/db.js").pool;

const listController = require("../controller/listController.js")
    const userRoutes = {
        list: (req, res) => {
            listController.list(req, res);
        },

        registerTasks: (req, res) => {
            listController.registerTasks(req, res);
        },

        searchTasks: (req, res) => {
            let pesquisa = req.query.pesquisa;
            listController.searchTasks(req, res, pesquisa);
        },
    }

module.exports = userRoutes;
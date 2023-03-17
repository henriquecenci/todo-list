
con = require("../config/db.js").pool;

const listController = require("../controller/listController.js")
    const userRoutes = {
        list: (req, res) => {
            listController.list(req, res);
        },

        registerTask: (req, res) => {
            listController.registerTask(req, res);
        },
    }

module.exports = userRoutes;
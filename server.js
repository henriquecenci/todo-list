const express = require('express');
var session = require('express-session');
const app = express();

app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.use( express.static("public") );

app.use(session({ secret: '2C44-4D44-WppQ38S', resave: false, saveUninitialized: true }));

const listRoutes = require("./rotas/listRoutes.js")

con = require("./config/db.js").pool;
//-------------------------------------------------
app.get('/', function (req, res) {
    listRoutes.list(req, res)
});

app.post('/confirm', function (req, res) {
    listRoutes.registerTasks(req, res);
});

app.get('/search', function (req, res) {
    listRoutes.searchTasks(req, res);
});
//-------------------------------------------------
app.listen(80, function () {
    console.log("Servidor executando na porta 80");
});


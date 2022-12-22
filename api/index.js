
const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const roteador = require('./rotas');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    app.use(cors());
    next();
});


app.use('/api/tprodo', roteador)


app.listen(config.get("api.port"), () => {
    console.log(`Servidor rodando em http://localhost:${config.get("api.port")}`)
});

module.exports = app;

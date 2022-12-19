
const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');
const roteador = require('./rotas');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());


app.use('/api/tprodo', roteador)


app.listen(config.get("api.port"), () => {
    console.log(`Servidor rodando em http://localhost:${config.get("api.port")}`)
});

module.exports = app;

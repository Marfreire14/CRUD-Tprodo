
const ModeloTabelaTp = require('../models/ModeloTabelaTpesagens.js');

ModeloTabelaTp
    .sync()
    .then(() => console.log("Tabela criada com Sucesso"))
    .catch(console.log)

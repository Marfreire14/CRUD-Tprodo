
const ModeloTabelaTr = require('../models/ModeloTabelaTrelacional.js');

ModeloTabelaTr
    .sync()
    .then(() => console.log("Tabela criada com Sucesso"))
    .catch(console.log)

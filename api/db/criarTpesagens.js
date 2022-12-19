
const ModeloTabelaTp = require('../rotas/tprodo/ModeloTabelaTpesagens.js');

ModeloTabelaTp
    .sync()
    .then(() => console.log("Tabela criada com Sucesso"))
    .catch(console.log)

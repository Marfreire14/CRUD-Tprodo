
const ModeloTabelaTr = require('../rotas/tprodo/ModeloTabelaTrelacional.js');

ModeloTabelaTr
    .sync()
    .then(() => console.log("Tabela criada com Sucesso"))
    .catch(console.log)

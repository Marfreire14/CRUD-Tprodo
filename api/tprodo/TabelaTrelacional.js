const ModeloTr = require('../models/ModeloTabelaTrelacional.js');
const ModeloTp = require('../models/ModeloTabelaTpesagens.js');

module.exports = {
    listar() {
        return ModeloTr.findAll()

    },

    inserir(trelacional) {
        return ModeloTr.create(trelacional);
    },

    async pegarPorTag(tag) {
        const encontrado = await ModeloTr.findOne({
            where: {
                Tag: tag
            }
        })

        if (!encontrado) {
            throw new Error("Tag não encontrada!!!");
        }

        return encontrado;
    },


}

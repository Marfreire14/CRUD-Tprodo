const ModeloTp = require('../models/ModeloTabelaTpesagens.js')

module.exports = {
  
    async pegarPorId(id) {
        const encontrado = await ModeloTp.findOne({
            where: {
                idtpesagens: id
            }
        })
        return encontrado;
    },

    atualizar(id,dadosParaAtualizar){
        return ModeloTp.update(
            dadosParaAtualizar,
            {
                    where: {
                        idtpesagens: id
                    }
            }
        )
    }
}

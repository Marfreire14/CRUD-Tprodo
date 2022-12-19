
const TabelaTrelacional = require('./TabelaTrelacional.js')

class Trelacional {
    constructor(
        {
            idtrelacional, tipo, idPesagem, idPrePesagem, Tag, valido
        }) {
        this.idtrelacional = idtrelacional
        this.tipo = tipo
        this.idPesagem = idPesagem
        this.idPrePesagem = idPrePesagem
        this.Tag = Tag
        this.valido = valido
    }

    async criar() {
        const resultado = await TabelaTrelacional.inserir({
            tipo: this.tipo,
            idPesagem: this.idPesagem,
            idPrePesagem: this.idPrePesagem,
            Tag: this.Tag,
            valido: this.valido
        })

    }

    async carregar() {
        try {
            const encontrado = await TabelaTrelacional.pegarPorTag(this.Tag);
            this.idPesagem = encontrado.idPesagem

        } catch (error) {
            throw new Error(error)
        }
    }
}

module.exports = Trelacional;
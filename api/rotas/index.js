const { Router } = require('express');
const TabelaTrelacional = require('../tprodo/TabelaTrelacional.js');
const Trelacional = require('../tprodo/Trelacional.js');
const Tpesagens = require('../tprodo/Tpesagens.js');

const roteador = Router();

roteador.get('/', async (req, res) => {
    const resultado = await TabelaTrelacional.listar();
    res.send(JSON.stringify(resultado));
});


roteador.get('/:Tag', async (req, res) => {
    try {
        const tag = req.params.Tag;
        const trelacional = new Trelacional({ Tag: tag });
        await trelacional.carregar();
        const { idPesagem, Tag } = trelacional;
        const id = idPesagem
        const tpesagens = new Tpesagens({ idtpesagens: id })
        await tpesagens.carregarTpesagens();
        res.status(200).send(JSON.stringify(tpesagens));

    } catch (error) {
        res.status(404).send(JSON.stringify({ mensagem: error.massage }))
    }
});

roteador.put('/:idtpesagens', async (req, res) => {
    try {
        const id = req.params.idtpesagens;
        const dadosRecebidos = req.body;
        const dados = Object.assign({}, dadosRecebidos, { idtpesagens: id });
        const tpesagens = new Tpesagens(dados);
        await tpesagens.atualizar();
        res.status(201).send();

    } catch (error) {
        res.status(500).send(JSON.stringify({ mensagem: error.massage }));
    }
});

module.exports = roteador;
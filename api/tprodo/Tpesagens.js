const TabelaTpesagens = require('./TabelaTpesagens.js');


class Tpesagens {
    constructor(
        {
            idtpesagens, numeroPesagem, seriePesagem, status, veiculo, placaVeiculo, tipoVeiculo, descricaoTipoVeiculo, valorPesagem, motorista, nomeMotorista, transportadora, nomeTransportadora, cliente, nomeCliente, destino, descricaoDestino, produto, descricaoProduto, precoProduto, descricaoPrecoProduto, valorPrecoProduto, freteProduto, descricaoFreteProduto, valorPrecoFrete, armazem, descricaoArmazem, numeroNF, pesoNF, observacao, campo1, campo2, pesoEntrada, pesoSaida, pesoReal, totalDescontos, tara, umidade, descricaoUmidade, descontoUmidade, unidadeProduto, densidadeProduto, dataEntrada, horaEntrada, tipoEntrada, usuarioEntrada, nomeUsuarioEntrada, dataSaida, horaSaida, tipoSaida, usuarioSaida, nomeUsuarioSaida, filial, nomeFilial, exclusao, idUsuarioExclusao, nomeUsuarioExclusao, motivoExclusao, dataExclusao, statusApontamento, statusLiberacao, balancaEntrada, balancaSaida, operacao, quantidade, r_unidade, r_precoUnitario, r_quantidade, rf_status, rf_numeroFatura, rf_serieFatura, rf_notaFiscal, rf_dataFatura, pbtTipoVeiculo, tag, tipoOperacao, comprimentoVeiculo, alturaVeiculo, larguraVeiculo, tipo, descricaoTipo, adicional3, precoProdutoNF, volumeNF, pesoCarga, descarregamento
        }) {

        this.idtpesagens = idtpesagens
        this.numeroPesagem = numeroPesagem
        this.seriePesagem = seriePesagem
        this.status = status
        this.veiculo = veiculo
        this.placaVeiculo = placaVeiculo
        this.tipoVeiculo = tipoVeiculo
        this.descricaoTipoVeiculo = descricaoTipoVeiculo
        this.valorPesagem = valorPesagem
        this.motorista = motorista
        this.nomeMotorista = nomeMotorista
        this.transportadora = transportadora
        this.nomeTransportadora = nomeTransportadora
        this.cliente = cliente
        this.nomeCliente = nomeCliente
        this.destino = destino
        this.descricaoDestino = descricaoDestino
        this.produto = produto
        this.densidadeProduto = descricaoProduto
        this.precoProduto = precoProduto
        this.descricaoPrecoProduto = descricaoPrecoProduto
        this.valorPrecoProduto = valorPrecoProduto
        this.freteProduto = freteProduto
        this.descricaoPrecoProduto = descricaoFreteProduto
        this.valorPrecoFrete = valorPrecoFrete
        this.armazem = armazem
        this.descricaoArmazem = descricaoArmazem
        this.numeroNF = numeroNF
        this.pesoNF = pesoNF
        this.observacao = observacao
        this.campo1 = campo1
        this.campo2 = campo2
        this.pesoEntrada = pesoEntrada
        this.pesoSaida = pesoSaida
        this.pesoReal = pesoReal
        this.totalDescontos = totalDescontos
        this.tara = tara
        this.umidade = umidade
        this.descricaoUmidade = descricaoUmidade
        this.descontoUmidade = descontoUmidade
        this.unidadeProduto = unidadeProduto
        this.densidadeProduto = densidadeProduto
        this.dataEntrada = dataEntrada
        this.horaEntrada = horaEntrada
        this.tipoEntrada = tipoEntrada
        this.usuarioEntrada = usuarioEntrada
        this.nomeUsuarioEntrada = nomeUsuarioEntrada
        this.dataSaida = dataSaida
        this.horaSaida = horaSaida
        this.tipoSaida = tipoSaida
        this.usuarioSaida = usuarioSaida
        this.nomeUsuarioSaida = nomeUsuarioSaida
        this.filial = filial
        this.nomeFilial = nomeFilial
        this.exclusao = exclusao
        this.idUsuarioExclusao = idUsuarioExclusao
        this.nomeUsuarioExclusao = nomeUsuarioExclusao
        this.motivoExclusao = motivoExclusao
        this.dataExclusao = dataExclusao
        this.statusApontamento = statusApontamento
        this.statusLiberacao = statusLiberacao
        this.balancaEntrada = balancaEntrada
        this.balancaSaida = balancaSaida
        this.operacao = operacao
        this.quantidade = quantidade
        this.r_unidade = r_unidade
        this.r_precoUnitario = r_precoUnitario
        this.r_quantidade = r_quantidade
        this.rf_status = rf_status
        this.rf_numeroFatura = rf_numeroFatura
        this.rf_serieFatura = rf_serieFatura
        this.rf_notaFiscal = rf_notaFiscal
        this.rf_dataFatura = rf_dataFatura
        this.pbtTipoVeiculo = pbtTipoVeiculo
        this.tag = tag
        this.tipoOperacao = tipoOperacao
        this.comprimentoVeiculo = comprimentoVeiculo
        this.alturaVeiculo = alturaVeiculo
        this.larguraVeiculo = larguraVeiculo
        this.tipo = tipo
        this.descricaoTipo = descricaoTipo
        this.adicional3 = adicional3
        this.precoProdutoNF = precoProdutoNF
        this.volumeNF = volumeNF
        this.pesoCarga = pesoCarga
        this.descarregamento = descarregamento

    }

    async carregarTpesagens() {
        const encontrado = await TabelaTpesagens.pegarPorId(this.idtpesagens);
        this.idtpesagens = encontrado.idtpesagens
        this.numeroPesagem = encontrado.numeroPesagem
        this.seriePesagem = encontrado.seriePesagem
        this.status = encontrado.status
        this.placaVeiculo = encontrado.placaVeiculo
        this.dataEntrada = encontrado.dataEntrada
        this.horaEntrada = encontrado.horaEntrada
        this.tag = encontrado.tag
        this.descarregamento = encontrado.descarregamento
    }

    async atualizar() {
        await TabelaTpesagens.pegarPorId(this.idtpesagens);
        const campos = ["descarregamento"];
        const dadosParaAtualizar = {};

        campos.forEach((campo) => {
            const valor = this[campo]
            dadosParaAtualizar[campo] = valor;
        });

        if (Object.keys(dadosParaAtualizar).length === 0) {
            throw new Error("Não foi atualizado");
        }


        await TabelaTpesagens.atualizar(this.idtpesagens, dadosParaAtualizar);
    }

}

module.exports = Tpesagens;
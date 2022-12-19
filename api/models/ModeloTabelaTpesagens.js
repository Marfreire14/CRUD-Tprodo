const Sequelize = require('sequelize');

const instancia = require('../db');

const colunas = {
    idtpesagens: {
        type: Sequelize.INTEGER,
        allowNull: true,
        autoIncrement: true,
        primaryKey: true,
    },

    numeroPesagem: {
        allowNull: false,
        type: Sequelize.INTEGER,
    },
    seriePesagem: {
        allowNull: false,
        type: Sequelize.STRING(5),
    },

    status: {
        allowNull: false,
        type: Sequelize.STRING(10),
    },
    veiculo: {
        allowNull: false,
        type: Sequelize.INTEGER,
    },

    placaVeiculo: {
        allowNull: false,
        type: Sequelize.STRING(10),
    },

    tipoVeiculo: {
        allowNull: false,
        type: Sequelize.INTEGER,
    },

    descricaoTipoVeiculo: {
        allowNull: false,
        type: Sequelize.STRING(45),
    },

    valorPesagem: {
        allowNull: false,
        type: Sequelize.FLOAT,
    },

    motorista: {
        allowNull: false,
        type: Sequelize.INTEGER,
    },

    nomeMotorista: {
        allowNull: false,
        type: Sequelize.STRING(50),
    },

    transportadora: {
        allowNull: false,
        type: Sequelize.INTEGER,
    },

    nomeTransportadora: {
        allowNull: false,
        type: Sequelize.STRING(50),
    },

    cliente: {
        allowNull: false,
        type: Sequelize.INTEGER,
    },

    nomeCliente: {
        allowNull: false,
        type: Sequelize.STRING(100),
    },

    destino: {
        allowNull: false,
        type: Sequelize.INTEGER,
    },

    descricaoDestino: {
        allowNull: false,
        type: Sequelize.STRING(50),
    },

    produto: {
        allowNull: false,
        type: Sequelize.INTEGER,
    },

    descricaoProduto: {
        allowNull: false,
        type: Sequelize.STRING(100),
    },

    precoProduto: {
        allowNull: false,
        type: Sequelize.INTEGER,
    },

    descricaoPrecoProduto: {
        allowNull: false,
        type: Sequelize.STRING(45),
    },

    valorPrecoProduto: {
        allowNull: false,
        type: Sequelize.FLOAT,
    },

    freteProduto: {
        allowNull: false,
        type: Sequelize.INTEGER,
    },

    descricaoFreteProduto: {
        allowNull: false,
        type: Sequelize.STRING(45),
    },

    valorPrecoFrete: {
        allowNull: false,
        type: Sequelize.FLOAT,
    },

    armazem: {
        allowNull: false,
        type: Sequelize.INTEGER,
    },

    descricaoArmazem: {
        allowNull: false,
        type: Sequelize.STRING(50),
    },

    numeroNF: {
        allowNull: false,
        type: Sequelize.STRING(15),
    },

    pesoNF: {
        allowNull: false,
        type: Sequelize.FLOAT,
    },

    observacao: {
        allowNull: false,
        type: Sequelize.STRING(45),
    },

    campo1: {
        allowNull: false,
        type: Sequelize.STRING(45),
    },

    campo2: {
        allowNull: false,
        type: Sequelize.STRING(45),
    },

    pesoEntrada: {
        allowNull: false,
        type: Sequelize.FLOAT,
    },

    pesoSaida: {
        allowNull: false,
        type: Sequelize.FLOAT,
    },

    pesoReal: {
        allowNull: false,
        type: Sequelize.FLOAT,
    },

    totalDescontos: {
        allowNull: false,
        type: Sequelize.FLOAT,
    },

    tara: {
        allowNull: false,
        type: Sequelize.FLOAT,
    },

    umidade: {
        allowNull: false,
        type: Sequelize.INTEGER,
    },

    descricaoUmidade: {
        allowNull: false,
        type: Sequelize.STRING(50),
    },

    descontoUmidade: {
        allowNull: false,
        type: Sequelize.DECIMAL(9, 3),
    },

    unidadeProduto: {
        allowNull: false,
        type: Sequelize.STRING(5),
    },

    densidadeProduto: {
        allowNull: false,
        type: Sequelize.DECIMAL(9, 3),
    },

    dataEntrada: {
        allowNull: false,
        type: Sequelize.DATE,
    },

    horaEntrada: {
        allowNull: false,
        type: Sequelize.DATE,
    },

    tipoEntrada: {
        allowNull: false,
        type: Sequelize.STRING(15),
    },

    usuarioEntrada: {
        allowNull: false,
        type: Sequelize.INTEGER,
    },

    nomeUsuarioEntrada: {
        allowNull: false,
        type: Sequelize.STRING(45),
    },

    dataSaida: {
        allowNull: false,
        type: Sequelize.DATE,
    },

    horaSaida: {
        allowNull: false,
        type: Sequelize.DATE,
    },

    tipoSaida: {
        allowNull: false,
        type: Sequelize.STRING(15),
    },

    usuarioSaida: {
        allowNull: false,
        type: Sequelize.INTEGER,
    },

    nomeUsuarioSaida: {
        allowNull: false,
        type: Sequelize.STRING(45),
    },

    filial: {
        allowNull: false,
        type: Sequelize.INTEGER,
    },

    nomeFilial: {
        allowNull: false,
        type: Sequelize.STRING(45),
    },

    exclusao: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
    },

    idUsuarioExclusao: {
        allowNull: false,
        type: Sequelize.INTEGER,
    },

    nomeUsuarioExclusao: {
        allowNull: false,
        type: Sequelize.STRING(45),
    },

    motivoExclusao: {
        allowNull: false,
        type: Sequelize.STRING(100),
    },

    dataExclusao: {
        allowNull: false,
        type: Sequelize.DATE,
    },

    statusApontamento: {
        allowNull: false,
        type: Sequelize.STRING(10),
    },

    statusLiberacao: {
        allowNull: false,
        type: Sequelize.STRING(10),
    },

    balancaEntrada: {
        allowNull: false,
        type: Sequelize.STRING(45),
    },

    balancaSaida: {
        allowNull: false,
        type: Sequelize.STRING(45),
    },

    operacao: {
        allowNull: false,
        type: Sequelize.STRING(10),
    },

    quantidade: {
        allowNull: false,
        type: Sequelize.DECIMAL(9, 3),
    },

    r_unidade: {
        allowNull: false,
        type: Sequelize.STRING(5),
    },

    r_precoUnitario: {
        allowNull: false,
        type: Sequelize.FLOAT,
    },

    r_quantidade: {
        allowNull: false,
        type: Sequelize.DECIMAL(9, 3),
    },

    rf_status: {
        allowNull: false,
        type: Sequelize.STRING(10),
    },

    rf_numeroFatura: {
        allowNull: false,
        type: Sequelize.INTEGER,
    },

    rf_serieFatura: {
        allowNull: false,
        type: Sequelize.STRING(5),
    },

    rf_notaFiscal: {
        allowNull: false,
        type: Sequelize.STRING(15),
    },

    rf_dataFatura: {
        allowNull: false,
        type: Sequelize.DATE,
    },

    pbtTipoVeiculo: {
        allowNull: false,
        type: Sequelize.INTEGER,
    },

    tag: {
        allowNull: false,
        type: Sequelize.STRING(15),
    },

    tipoOperacao: {
        allowNull: false,
        type: Sequelize.STRING(10),
    },

    comprimentoVeiculo: {
        allowNull: false,
        type: Sequelize.FLOAT,
    },

    alturaVeiculo: {
        allowNull: false,
        type: Sequelize.FLOAT,
    },

    larguraVeiculo: {
        allowNull: false,
        type: Sequelize.FLOAT,
    },

    tipo: {
        allowNull: false,
        type: Sequelize.INTEGER,
    },

    descricaoTipo: {
        allowNull: false,
        type: Sequelize.STRING(100),
    },

    adicional3: {
        allowNull: false,
        type: Sequelize.FLOAT,
    },

    precoProdutoNF: {
        allowNull: false,
        type: Sequelize.FLOAT,
    },

    volumeNF: {
        allowNull: false,
        type: Sequelize.FLOAT,
    },

    pesoCarga: {
        allowNull: false,
        type: Sequelize.FLOAT,
    },

    descarregamento: {
        allowNull: false,
        type: Sequelize.BOOLEAN,

    }
}

const opcoes = {
    freezeTableName: true,
    tableName: 'tpesagens',
    timestamps: false,
}

module.exports = instancia.define('tpesagem', colunas, opcoes);

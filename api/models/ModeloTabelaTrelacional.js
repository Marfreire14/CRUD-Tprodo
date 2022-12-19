
const Sequelize = require('sequelize');
const instancia = require('../db');

const colunas = {
    idtrelacional: {
        type: Sequelize.INTEGER,
        allowNull: true,
        autoIncrement: true,
        primaryKey: true,
    },

    tipo: {
        allowNull: false,
        type: Sequelize.STRING(8)
    },

    idPesagem: {
        allowNull: false,
        type: Sequelize.INTEGER,
    },

    idPrePesagem: {
        allowNull: false,
        type: Sequelize.INTEGER
    },
    Tag: {
        allowNull: true,
        type: Sequelize.STRING(15)
    },

    valido: {
        allowNull: true,
        type: Sequelize.BOOLEAN
    }

}

const opcoes = {
    freezeTableName: true,
    tableName: 'trelacional',
    timestamps: false,

}

module.exports = instancia.define('trelacional', colunas, opcoes);

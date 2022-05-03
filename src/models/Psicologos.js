const db = require('../database'); //importar db
const { DataTypes } = require('sequelize'); //importar DataTypes do sequelize

const Psicologos = db.define(
    "Psicologos", 
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome: {
            type: DataTypes.STRING(45),
        },
        email: {
            type: DataTypes.STRING(45),
        },
        senha: {
            type: DataTypes.STRING(45),
        },
        apresentacao: {
            type: DataTypes.STRING(150),
        }
    }, {
        tableName: "psicologos",
        timestamps: false,
    }
)

module.exports = Psicologos

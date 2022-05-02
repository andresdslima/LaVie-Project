const db = require('../database'); //importar db
const { DataTypes } = require('sequelize'); //importar DataTypes do sequelize

const Psicologos = db.define(
    "Psicologos"
//     {
//         //AGUARDAR DB
//     }
)

module.exports = Psicologos
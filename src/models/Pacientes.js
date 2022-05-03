const db = require("../database");
const { DataTypes } = require("sequelize");

const Pacientes = db.define(
    "Pacientes",
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
        idade: {
            type: DataTypes.DATEONLY,
        },
    },
    {
        tableName: "pacientes",
        timestamps: false,
    },
);

module.exports = Pacientes;
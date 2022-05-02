const Psicologos = require('../models/Psicologos');
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const secret = require("../configs/secret");
// const testJson = require('../database/test.json');

const authController = {
    async login(req, res) {
        try {
            const { email, senha } = req.body;
            const psicologoLogin = await Psicologos.findONe({
                where: {
                    email
                }
            });

            // const psicologoLogin = psicologosDB.find(psicologo => psicologo.email === email);

            if (!psicologoLogin || !bcrypt.compareSync(senha, psicologoLogin.senha)) {
                return res.status(401).json('E-mail ou senha inválido, verifique e tente novamente.');
            }

            const token = jwt.sign({
                id: psicologoLogin.id,
                nome: psicologoLogin.nome,
                email: psicologoLogin.email,
            }, secret.key);

            return res.status(200).json(token);
        }
        catch (error) {
            console.error(error);
            return res.status(500).json("Erro interno no servidor!");
        };
    },
};

module.exports = authController;
const Psicologos = require("../models/Psicologos");
const bcrypt = require("bcryptjs");

const psicologosController = {

    async cadastrarPsicologo(req, res) {
        try {
            // capturar os dados da request numa estrutura
            const { nome, email, senha, apresentacao } = req.body;
            
            const psicologo = await Psicologos.create({ nome, email, senha, apresentacao })
            // // criar a nova senha criptografada a partir do que o usuario me mandou
            // const novaSenha = bcrypt.hashSync(senha, 10);
            // const novoPsicologo = await Psicologos.create({ nome, email, senha: novaSenha, apresentacao });

            return res.status(201).json(psicologo);
        }
        catch (error) {
            console.error(error);
            return res.status(400).json("Nao foi possivel cadastrar");
        }
    },

    async listarPsicologos(req, res) {
        try {
            const lista = await Psicologos.findAll();
            res.status(200);
            res.json(lista);
        }
        catch (error) {
            res.status(500);
            res.send("Erro ao recuperar dados dos filmes")
        }
    },

    async buscarPeloId(req, res) {

        try {
            const { id } = req.params;
            
            const psicologos = await Psicologos.findByPk(idPsicologos)
            if (psicologos) {  // psicologos é diferente de UNDEFINED?
                res.status(200);
                res.json(psicologos);
            }
            else {
                res.status(404); // not found
                res.send("Id: " + idPsicologos + " não encontrado");
            }
        }
        catch (error) {
            res.status(500);
            res.send("Erro ao recuperar ")
        }
    },

    async alterarPerfil(req, res) {
        try {
            const { id } = req.params;
            const { nome } = req.body;
            const { senha } = req.body;
            const { apresentacao } = req.body;

            await Psicologos.update(
                // {
                //     person_name: nome,
                // },
                // {
                //     where: {
                //         person_id: id
                //     },
                // }
            );

            const psicologoAtualizado = await Psicologos.findByPk(id);

            return res.status(200).json(psicologoAtualizado);
        }
        catch (error) {
            console.error(error);
            return res.status(400).json("Não foi possivel atualizar");
        }

    },

    deletarPsicologo(req, res) {
        try {
            const { id } = req.params;
            
            const psicologo = Psicologos.deleteOne({id})

            return res.status(200).json("Artigo apagado com sucesso!");
        }
        catch (error) {
            console.error(error);
            return res.status(400).json("Não foi possivel apagar");
        }
    },

}

module.exports = psicologosController;
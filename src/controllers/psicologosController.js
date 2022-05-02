const Psicologos = require("../models/Psicologos");

// conlistaDePsicologos = st bcrypt = require("bcryptjs");

// const listaDePsicologos = require("../models/psicologos.json")

const psicologosController = {

    async cadastrarPsicologo(req, res) {
        try {
            // capturar os dados da request numa estrutura
            const { nome, email, senha, apresentacao } = req.body;
            
            const novoPsicologo = await Psicologos.create({ nome, email, senha, apresentacao });
            
            return res.status(201).json(novoPsicologo);
        }
        catch (error) {
            console.error(error);
            return res.status(400).json("Nao foi possivel cadastrar");
        }
    },

    //FUNCIONANDO???
    async listarPsicologos(req, res) {
        try {
            const lista = await Psicologos.findAll()
            res.status(200);
            res.json(lista);
        }
        catch (error) {
            res.status(500);
            res.send("Erro ao recuperar dados dos psicologos")
        }
    },

    async buscarPeloId(req, res) {

        try {
            const { id } = req.params;
            const psicologo = await Psicologos.findByPk(id)

            res.json(psicologo)
            
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

    async deletarPsicologo(req, res) {
        try {
            const { id } = req.params;
            
            await listaDePsicologos.destroy({
                where:{
                    psicologo_id: id
                }
            })

            return res.status(200).json("Artigo apagado com sucesso!");
        }
        catch (error) {
            console.error(error);
            return res.status(400).json("Não foi possivel apagar");
        }
    },

}

module.exports = psicologosController;
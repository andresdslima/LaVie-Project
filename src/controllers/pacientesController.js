const Pacientes = require("../models/Pacientes");

const pacientesController = {
    async listarPacientes(req, res) {
        try {
            const pacientes = await Pacientes.findAll();
            res.status(200);
            return res.json(pacientes);
        }
        catch (error) {
            console.error(error);
            res.status(404);
            return res.json([]);
        }
    },

    async mostrarPaciente(req, res) {
        try {
            const { id } = req.params;
            const pacienteEspecifico = await Pacientes.findByPk(id);
            res.status(200);
            return res.json(pacienteEspecifico);
        }
        catch (error) {
            console.error(error);
            return res.status(404).json("Id não encontrado");
        }
    },

    async cadastarPaciente(req, res) {
        try {
            const { nome, email, idade } = req.body;
            const pacienteNovo = await Pacientes.create({ nome, email, idade });
            res.status(201);
            return res.json(pacienteNovo);
        }
        catch (error) {
            console.error(error);
            res.status(400);
            return res.json("Não foi possivel cadastrar os dados do paciente");
        }
    },

    async atualizarPaciente(req, res) {
        try {
            const { id } = req.params;
            const { nome, email, idade } = req.body;

            if (!id) return res.status(400).json("Id não encontrado!");

            await Pacientes.update(
                {
                    nome,
                    email,
                    idade
                },
                {
                    where: {
                        id
                    },
                }
            );

            const pacienteAtualizado = await Pacientes.findByPk(id);

            return res.status(200).json(pacienteAtualizado);
        }
        catch (erro) {
            console.error(error);
            return res.status(400).json("Não foi possivel atualizar");
        }
    },

    async deletarPaciente(req, res) {
        try {
            const { id } = req.params;
            const pacienteDeletado = await Pacientes.findByPk(id);

            if (!pacienteDeletado) {
                return res.status(404).json("Id não encontrado!");
            }

            await Pacientes.destroy({
                where: {
                    id
                }
            });

            return res.status(204).json("Paciente deletado com sucesso");
        }
        catch (error) {
            console.error(error);
            return res.status(404).json("Id não encontrado");
        }
    }
};

module.exports = pacientesController;
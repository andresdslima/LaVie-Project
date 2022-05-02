const Paciente = require("../models/Pacientes");

const PacienteController = {
    async listarPacientes(req, res) {
        try {
            const pacientes = await Paciente.findAll();
            res.status(200);
            return res.json(pacientes);
        }
        catch(error) {
            console.error(error);
            res.status(404);
            return res.json([]);
        }
    },

    async mostrarPaciente(req, res) {
        try {
            const { id } = req.params;
            const pacienteEspecifico = await Paciente.findByPk(id);
            res.status(200);
            return res.json(pacienteEspecifico);
        }
        catch(error) {
            console.error(error);
            return res.status(404).json("Id não encontrado");
        }
    },

    async cadastarPaciente(req, res) {
        try {
            const { nome, email, idade } = req.body;
            const pacienteNovo = await Paciente.create({ nome, email, idade });
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

            await Paciente.update(
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
            
            const pacienteAtualizado = await Paciente.findByPk(id);
            res.status(201);
            return res.json(pacienteAtualizado);
        }
        catch(error) {
            console.error(error);
            return res.status(400).json("Não foi possivel atualizar os dados do paciente");
        }
    },

    async deletarPaciente(req, res) {
        try {
            const { id } = req.params;
   
            const pacienteDeletado = Paciente.destroy({
                where: {
                    id
                }
            });
            
            res.status(204);
            return res.json("Paciente deletado com sucesso");
        }
        catch (error) {
            console.error(error);
            res.status(404);
            return res.json("Id não encontrado");
        }
    }
};

module.exports = PacienteController;

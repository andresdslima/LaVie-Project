const Paciente = require("../models/Pacientes");

const PacienteController = {
    async listarPacientes(req, res) {
        try {
            //localhost:4000/pacientes?pag=20
            const { page = 1, limit = 20 } = req.query;
            const offset = parseInt(limit) * (parseInt(page)-1);

            let filter = {
                limit: parseInt(limit),
                offset
            };

            Object.assign(filter);
            
            const pacientes = await Paciente.findAll(filter);
            res.status(200);
            return res.json(pacientes);
        }
        catch(error) {
            console.error(error);
            return res.status(404);
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
            res.status(400);
            return res.json("Não foi possível atualizar os dados do paciente");
        }
    },

    async deletarPaciente(req, res) {
        try {
            const { id } = req.params;
            const paciente = await Paciente.findByPk(id);

            if(!paciente) {
                res.status(404);
                return res.json("Id não encontrado");
            } else {
                await Paciente.destroy({
                    where: {
                        id
                    }
                });
                return res.status(204).json("Paciente deletado");
            }            
            
        } 
        catch(error) {
            console.error(error);
            return res.status(500);
        }
    }
};

module.exports = PacienteController;

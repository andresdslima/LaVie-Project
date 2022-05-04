const { Pacientes } = require("../models");

const pacientesController = {
    async listarPacientes(req, res) {
        try {
            const { page = 1, limit = 20 } = req.query;
            const offset = parseInt(limit) * (parseInt(page)-1);

            let filter = {
                limit: parseInt(limit),
                offset
            };

            const pacientes = await Pacientes.findAll(filter);

            return res.status(200).json(pacientes);
        }
        catch (error) {
            console.error(error);
            return res.status(500).json("Não foi possível listas dados dos pacientes");
        }
    },

    async mostrarPaciente(req, res) {
        try {
            const { id } = req.params;
            const pacienteEspecifico = await Pacientes.findByPk(id);

            if (!pacienteEspecifico) {
                return res.status(404).json("Id não encontrado!");
            }
            
            return res.status(200).json(pacienteEspecifico);
        }
        catch (error) {
            console.error(error);
            return res.status(500).json("Não foi possível mostrar dados do paciente");
        }
    },

    /* // const existsUser = await Usuarios.findOne({ where: { email } });
    const existsUser = await Usuarios.count({ where: { email } });

    if (existsUser) {
      return res.stauts(400).json("email já existe");
    } */


    async cadastarPaciente(req, res) {
        try {
            const { nome, email, idade } = req.body;
            const pacienteNovo = await Pacientes.create({ nome, email, idade });
            
            return res.status(201).json(pacienteNovo);
        }
        catch (error) {
            console.error(error);
            return res.status(400).json("Não foi possível cadastrar os dados do paciente");
        }
    },

    async atualizarPaciente(req, res) {
        try {
            const { id } = req.params;
            const { nome, email, idade } = req.body;
            const existsUser = await Pacientes.count({
                where: {
                    id
                }
            });

            if (existsUser === 0) {
                return res.status(400).json("Id não encontrado!");
            }

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
        catch (error) {
            console.error(error);
            return res.status(500).json("Não foi possível atualizar dados do paciente");
        }
    },

    async deletarPaciente(req, res) {
        try {
            const { id } = req.params;
            const existsUser = await Pacientes.count({
                where: {
                    id
                }
            });

            if (existsUser === 0) {
                return res.status(404).json("Id não encontrado!");
            }

            await Pacientes.destroy({
                where: {
                    id
                }
            });

            return res.status(204).json("Paciente deletado!");
        }
        catch (error) {
            console.error(error);
            return res.status(500).json("Não foi possível deletar dados do paciente");
        }
    }
};

module.exports = pacientesController;
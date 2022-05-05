const { Pacientes, Atendimentos } = require("../models");

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
            return res.status(500).json("Não foi possível listar os dados");
        };
    },

    async mostrarPaciente(req, res) {
        try {
            const { id } = req.params;
            const pacienteEspecifico = await Pacientes.findByPk(id);

            if (!pacienteEspecifico) {
                return res.status(404).json("Id não encontrado!");
            };
            
            return res.status(200).json(pacienteEspecifico);
        }
        catch (error) {
            console.error(error);
            return res.status(500).json("Erro interno no servidor");
        }
    },

    async cadastarPaciente(req, res) {
        try {
            const { nome, email, idade } = req.body;
            
            if (!nome || !email || !idade) {
                return res.status(400).json("Preencha todos os campos corretamente");
            };

            const pacienteNovo = await Pacientes.create({ nome, email, idade });
            
            return res.status(201).json(pacienteNovo);
        }
        catch (error) {
            console.error(error);
            return res.status(500).json("Nao foi possivel cadastrar");
        };
    },

    async atualizarPaciente(req, res) {
        try {
            const { id } = req.params;
            const { nome, email, idade } = req.body;
            const existsUser = await Pacientes.count({
                where: {
                    email
                }
            });

            if (existsUser) {
                return res.stauts(400).json("Email já existe");
            };

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

            if (!pacienteAtualizado) {
                return res.status(400).json("Id não encontrado!");
            };

            return res.status(200).json(pacienteAtualizado);
        }
        catch (error) {
            console.error(error);
            return res.status(500).json("Não foi possivel atualizar");
        }
    },

    async deletarPaciente(req, res) {
        try {
            const { id } = req.params;
            const existsPaciente = await Pacientes.count({
                where: {
                    id
                }
            });
            
            if (existsPaciente == 0) {
                return res.status(404).json("Id não encontrado!");
            }

            await Pacientes.destroy({
                where: {
                    id
                }
            });

            return res.status(204).json("Paciente deletado com sucesso!");
        }
        catch (error) {
            const { id } = req.params;
            const existsAtendimento = await Atendimentos.count({
                where: {
                    paciente_id: id
                }
            });

            console.error(error);
            
            if (existsAtendimento != 0) {
                return res.status(405).json("Não é possível deletar paciente com atendimento cadastrado.");
            }

            return res.status(500).json("Não foi possivel deletar");
        };
    }
};

module.exports = pacientesController;
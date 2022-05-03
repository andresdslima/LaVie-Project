const Atendimentos = require("../models/Atendimentos");
const Psicologos = require("../models/Psicologos");
const Pacientes = require("../models/Pacientes");

const atendimentosController = {
  async listarAtendimentos(req, res) {
    try {
      const { page = 1, limit = 20 } = req.query;
      const offset = parseInt(limit) * (parseInt(page) - 1);

      const filter = {
        limit: parseInt(limit),
        offset,
      };

      // Object.assign(filter, {
      //   includes: [Psicologos, Pacientes],
      // });

      const listarAtendimentos = await Atendimentos.findAll(filter);

      return res.status(200).json(listarAtendimentos);
    }
    catch (error) {
      console.error("Erro ao buscar lista de atendimentos")
    }
  },

  async buscarIdAtendimentos(req, res) {
    try {
      const { id } = req.params;
      const buscarId = await Atendimentos.findByPk(id, {
        includes: [Pacientes, Psicologos],
      });

      if (!buscarId) {
        return res.status(400).json("Id não encontrado!");
      }

      return res.status(200).json(buscarId);
    }
    catch (error) {
      console.error(error);
      return res.status(404);
    }
  },

  async cadastrarAtendimentos(req, res) {
    try {
      const { paciente_id, psicologo_id, data_atendimento, observacao } = req.body;

      console.log(req.user);
      
      const novoAtendimento = await Atendimentos.create({
        paciente_id,
        psicologo_id,
        // psicologo_id: req.user.id,
        data_atendimento,
        observacao,
      });

      return res.status(201).json(novoAtendimento);
    }
    catch (error) {
      console.log(error);
      return res.status(500).json("Erro interno no servidor!");
    }
  },
};

module.exports = atendimentosController;
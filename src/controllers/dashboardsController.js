const Atendimentos = require("../models/Atendimentos");
const Psicologos = require("../models/Psicologos");
const Pacientes = require("../models/Pacientes");

const dashboardsController = {
  async listarAtendimentos(req, res) {
    try {
      const lista = await Atendimentos.findAll();

      return res.status(200).json(lista.length);
    }
    catch (error) {
      console.error(error);
      return res.status(500).json("Erro interno no servidor!");
    }
  },

  async listarAtendimentosById(req, res) {
    try {
      const { id } = req.params;
      const lista = await Atendimentos.findAll({
        where: {
          psicologo_id: id,
        }
      });

      return res.status(200).json(lista.length);
    }
    catch (error) {
      console.error(error);
      return res.status(500).json("Erro interno no servidor!");
    }
  },

  async listarPsicologos(req, res) {
    try {
      const lista = await Psicologos.findAll();

      return res.status(200).json(lista.length);
    }
    catch (error) {
      console.error(error);
      return res.status(500).json("Erro interno no servidor!");
    }
  },

  async listarPacientes(req, res) {
    try {
      const lista = await Pacientes.findAll();

      return res.status(200).json(lista.length);
    }
    catch (error) {
      console.error(error);
      return res.status(500).json("Erro interno no servidor!");
    }
  },
};

module.exports = dashboardsController;
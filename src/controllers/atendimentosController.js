const { Atendimentos, Pacientes, Psicologos} = require("../models/Atendimentos");

const atendimentosController = {
  
  async listarAtendimentos(req, res) {
    try{
      const {page = 1} = req.query

      const limit = 20;
      const offset = limit * (parseInt(page) -1);

      const filter = {
        limit,
        offset,
      };

      Object.assign(filter);

      const listarAtendimentos = await Atendimentos.findAll(filter);

      return res.status(200).json(listarAtendimentos);
    } 
     catch (error) {
          console.error("Erro ao buscar lista de atendimentos")
        }
  },

  async buscarIdAtendimentos(req, res) {
    try {
      const{ id } = req.params;
      const buscarId = await Atendimentos.findByPk(id, {
          include: [Pacientes, Psicologos],
      });
      if (buscarId) {
        res.status(200).json(buscarId);
      }else {
         res.status(400).json("Id não encontrado")
      }
    }catch (error) {
      res.status(404);
    }

  },

  async cadastrarAtendimentos (req,res) {
    const { id_paciente, id_psicologo, data_atendimento, observacoes } = req.body;
  }

}


  


   





module.exports = atendimentosController;


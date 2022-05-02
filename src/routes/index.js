const express = require("express");
<<<<<<< HEAD
const psicologosController = require("../controllers/psicologosController");

const routes = express.Router();

//PSICOLOGOS
routes.get("/psicologos", psicologosController.listarPsicologos);
routes.get("/psicologos/:id", psicologosController.buscarPeloId);
routes.post("/psicologos", psicologosController.cadastrarPsicologo);
routes.put("/psicologos/:id", psicologosController.alterarPerfil);
routes.delete("/psicologos/:id", psicologosController.deletarPsicologo);





module.exports = routes
=======
const PacienteController = require("../controllers/paciente.controller");

const routes = express.Router();

routes.get("/pacientes", PacienteController.listarPacientes);
routes.get("/pacientes/:id", PacienteController.mostrarPaciente);
routes.post("/pacientes", PacienteController.cadastarPaciente);
routes.put("/pacientes/:id", PacienteController.atualizarPaciente);
routes.delete("/pacientes/:id", PacienteController.deletarPaciente);

module.exports = routes;
>>>>>>> 36c1e15eb142561facb366ef2075387def5c8e25

const express = require("express");
const psicologosController = require("../controllers/psicologosController");
const PacienteController = require("../controllers/paciente.controller");

const routes = express.Router();

//PSICOLOGOS
routes.get("/psicologos", psicologosController.listarPsicologos);
routes.get("/psicologos/:id", psicologosController.buscarPeloId);
routes.post("/psicologos", psicologosController.cadastrarPsicologo);
routes.put("/psicologos/:id", psicologosController.alterarPerfil);
routes.delete("/psicologos/:id", psicologosController.deletarPsicologo);

//PACIENTES
routes.get("/pacientes", PacienteController.listarPacientes);
routes.get("/pacientes/:id", PacienteController.mostrarPaciente);
routes.post("/pacientes", PacienteController.cadastarPaciente);
routes.put("/pacientes/:id", PacienteController.atualizarPaciente);
routes.delete("/pacientes/:id", PacienteController.deletarPaciente);

module.exports = routes;


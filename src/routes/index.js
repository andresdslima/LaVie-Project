const express = require("express");
const PacienteController = require("../controllers/paciente.controller");

const routes = express.Router();

routes.get("/pacientes", PacienteController.listarPacientes);
routes.get("/pacientes/:id", PacienteController.mostrarPaciente);
routes.post("/pacientes", PacienteController.cadastarPaciente);
routes.put("/pacientes/:id", PacienteController.atualizarPaciente);
routes.delete("/pacientes/:id", PacienteController.deletarPaciente);

module.exports = routes;
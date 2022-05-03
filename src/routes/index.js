const express = require("express");
const psicologosController = require("../controllers/psicologosController")

const routes = express.Router();

routes.get("/psicologos", psicologosController.listarPsicologos);
routes.get("/psicologos/:id", psicologosController.buscarPeloId);
routes.post("/psicologos", psicologosController.cadastrarPsicologo);
routes.put("/psicologos/:id", psicologosController.alterarPerfil);
routes.delete("/psicologos/:id", psicologosController.deletarPsicologo);
routes.post('/login', loginValidator, authController.login);

routes.get('/pacientes', pacientesController.listarPacientes);
routes.get('/pacientes/:id', pacientesController.mostrarPaciente);
routes.post('/pacientes', pacientesController.cadastarPaciente);
routes.put('/pacientes/:id', pacientesController.atualizarPaciente);
routes.delete('/pacientes/:id', pacientesController.deletarPaciente);

module.exports = routes;


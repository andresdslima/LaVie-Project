const express = require("express");
const psicologosController = require("../controllers/psicologosController");
const pacientesController = require("../controllers/pacientesController");
const authController = require("../controllers/authController");
const loginValidator = require("../validators/psicologos/auth/loginValidator");
const auth = require("../middlewares/auth");
const atendimentosController = require("../controllers/atendimentosController");
const dashboardsController = require("../controllers/dashboardsController");

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

routes.get("/atendimentos", atendimentosController.listarAtendimentos);
routes.get("/atendimentos/:id", atendimentosController.buscarIdAtendimentos);
routes.post("/atendimentos", auth, atendimentosController.cadastrarAtendimentos); // "psicologo_id": req.user.id; JWT

routes.get("/dashboards/psicologos", dashboardsController.listarPsicologos);
routes.get("/dashboards/pacientes", dashboardsController.listarPacientes);
routes.get("/dashboards/atendimentos", dashboardsController.listarAtendimentos);
routes.get("/dashboards/atendimentos/:id", dashboardsController.listarAtendimentosById); // numero de atendimentos por psicologo

module.exports = routes;
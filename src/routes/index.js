const express = require("express");
<<<<<<< HEAD
const psicologosController = require("../controllers/psicologosController");
const authController = require("../controllers/authController");
const loginValidator = require("../validators/psicologos/auth/loginValidator");
const auth = require("../middlewares/auth");

const routes = express.Router();

//PSICOLOGOS
routes.get("/psicologos", psicologosController.listarPsicologos);
routes.get("/psicologos/:id", psicologosController.buscarPeloId);
routes.post("/psicologos", psicologosController.cadastrarPsicologo);
routes.put("/psicologos/:id", psicologosController.alterarPerfil);
routes.delete("/psicologos/:id", psicologosController.deletarPsicologo);
routes.post('/login', loginValidator, authController.login);

routes.post("/atendimentos", auth, );

routes.get("/dashboard/psicologos", );
routes.get("/dashboard/pacientes", );
routes.get("/dashboard/atendimentos", );
routes.get("/dashboard/atendimentos/:id", ); // media de atendimentos por psicologo

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

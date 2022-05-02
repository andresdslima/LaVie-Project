const express = require("express");
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
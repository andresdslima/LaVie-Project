const express = require("express");
const atendimentosController = require("../controllers/atendimentosController");


const routes = express.Router();

routes.get("/atendimentos", atendimentosController.listarAtendimentos);
routes.get("/atendimentos/:id", atendimentosController.buscarIdAtendimentos);
routes.post("atendimentos", atendimentosController.cadastrarAtendimentos)


module.exports = routes;

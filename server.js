const express = require("express");
const cors = require("cors");
const routes = require("./src/routes");
const handleError = require('./src/middlewares/handleError');

const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(handleError);

app.listen(4000, () => console.log("Servidor rodando na porta 4000"));

const express = require("express");
const cors = require("cors");
const routes = require("./src/routes");
const db = require("./src/database");

const port = 4000
const app = express();
db.hasConnection();

db.hasConnection();

app.use(express.json());
app.use(cors());
app.use(routes);
app.use(handleError);

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))

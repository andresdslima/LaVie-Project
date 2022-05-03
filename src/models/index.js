const Atendimentos = require("./Atendimentos");
const Pacientes = require("./Pacientes");
const Psicologos = require("./Psicologos");

Pacientes.belongsToMany(Psicologos, {
  foreignKey: "paciente_atendimento",
  through: Atendimentos,
});

Psicologos.belongsToMany(Pacientes, {
  foreignKey: "psicologo_atendimento",
  through: Atendimentos,
});

Atendimentos.hasMany(Pacientes, {
  foreignKey: "paciente_id",
});

Atendimentos.hasMany(Psicologos, {
  foreignKey: "psicologo_id",
});


module.exports = {
  Atendimentos,
  Pacientes,
  Psicologos,
};
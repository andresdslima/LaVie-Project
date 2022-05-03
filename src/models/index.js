const Atendimentos = require("./Atendimentos");
const Pacientes = require("./Pacientes");
const Psicologos = require("./Psicologos");

Pacientes.belongsToMany(Psicologos, {
    foreignKey:"id_paciente", //id_paciente?
    through: Atendimentos,
});

Psicologos.belongsToMany(Pacientes, {
  foreignKey: "id_psicologo", //id_psicologo?
  through: Atendimentos,
});

// Atendimentos.hasMany(Pacientes, {
//   foreignKey:"",//id_paciente?
// });

// Atendimentos.hasMany(Psicologos, {
//   foreignKey:"",//id_psicologo?
// })


module.exports = {
  Atendimentos,
  Pacientes,
  Psicologos
};
/**
 * Consulta.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: { 
    data: { type: 'string' },
    horario: { type: 'string' },
    valor: { type: 'number' },
    especialidade: { type: 'string' },
    consultorio: {model: 'consultorio'},
    medico: {model: 'medico'},
    paciente: {model: 'paciente'},
    situacao: { type: 'number', defaultsTo: 0 }
  },

};


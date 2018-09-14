/**
 * Medico.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

var bcrypt = require('bcrypt');

module.exports = {

  attributes: {

    nome: {type: 'string'},
    tipo: {type: 'number'},
    email:{type: 'string'},
    senha: {type: 'string'},
    dataNascimento: {type: 'string'},
    cpf: {type: 'string'},
    rg: {type: 'string'},
    numeroCRM: {type: 'string'},
    dataInsricaoCRM: {type: 'string'},
    periodoValidadeCRM: {type: 'number'},
    //endereco: {type: 'json'},
    especialidades:{type: 'json', columnType: 'array'},
    consultas: {collection: 'consulta', via: 'medico'},
    consultorio: {collection: 'consultorio',via:'medicos'}

  },

  beforeCreate: function (values, cb) {

    // Hash password
    bcrypt.hash(values.senha, 10, function (err, hash) {
      if (err) return cb(err);
      values.senha = hash;
      cb();
    });
  }

};


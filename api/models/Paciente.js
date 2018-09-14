/**
 * Paciente.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

var bcrypt = require('bcrypt');

module.exports = {

  attributes: {
    nome: { type: 'string', required: true },
    dataNascimento: { type: 'string', required: true },
    cpf: { type: 'string', required: true, unique: true },
    telefone: { type: 'string', required: true },
    email: { type: 'string', required: true, unique: true },
    senha: { type: 'string', required: true},
    consultas: { collection: 'consulta', via: 'paciente' }

  },


  /**
   * this is called so we can create our password hash for us
   *
   * before saving
   * @param values
   * @param cb
   */

  beforeCreate: function (values, cb) {

    // Hash password
    bcrypt.hash(values.senha, 10, function (err, hash) {
      if (err) return cb(err);
      values.senha = hash;
      cb();
    });
  }

  /**
   * this holds our validation message by
   * sails-hook-validation dependency
   */
  /*validationMessages: { //hand for i18n & l10n

    nome:{
      required: 'Nome é obrigatório'
    },
    dataNascimento: {
      required: 'Data de Nascimento é obrigatório'
    },
    cpf: {
      required: 'Cpf é obrigatório'
    },
    telefone: {
      required: 'Telefone é obrigatório'
    },
    email: {
      email: 'Informe um endereço de email válido',
      required: 'E-mail é obrigatório',
      unique: 'Este email já existe'
    },
    senha: {
      required: 'Senha é obrigatório'
    }

  }*/


};

/**
 * Consultorio.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    razaoSocial: {type: 'string'},
    nomeFantasia: {type: 'string'},
    cnpj: {type: 'string'},
    endereco: {type: 'json'},
    email: {type: 'string'},
    telefone: {type: 'string'},
    medicos: {collection: 'medico', via: 'consultorio'}
  },

};


/**
 * Profissional.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nome: {type: 'string'},
    dataNascimento: {type: 'string'},
    cpf: {type: 'string'},
    rg: {type: 'string'},
    numeroCRM: {type: 'string'},
    dataInsricaoCRM: {type: 'string'},
    periodoValidadeCRM: {type: 'number'},
    endereco: {type: 'json'},
    especialidades: {collection: 'especialidade', via: 'profissionais'},
    areasDeAtuacao: {collection: 'areadeatuacao', via: 'profissionais'},
    //consultas: {collection: 'consulta', via: 'profissional'},
    consultorio: {model: 'consultorio'}

  },

};


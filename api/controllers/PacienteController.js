/**
 * PacienteController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var bcrypt = require('bcrypt');

module.exports = {
    
  /**
   * `PacienteController.nome()`
   */
  nome: async function (req, res) {
    return res.json({
      todo: 'nome() is not implemented yet!'
    });
  },

  /**
   * `PacienteController.dataNascimento()`
   */
  dataNascimento: async function (req, res) {
    return res.json({
      todo: 'dataNascimento() is not implemented yet!'
    });
  },

  /**
   * `PacienteController.cpf()`
   */
  cpf: async function (req, res) {
    return res.json({
      todo: 'cpf() is not implemented yet!'
    });
  },

  /**
   * `PacienteController.telefone()`
   */
  telefone: async function (req, res) {
    return res.json({
      todo: 'telefone() is not implemented yet!'  
    });
  },


  /**
   * `PacienteController.email()`
   */
  email: async function (req, res) {
    return res.json({
      todo: 'email() is not implemented yet!'
    });
  },

  /**
   * `PacienteController.senha()`
   */
  senha: async function (req, res) {
    return res.json({
      todo: 'senha() is not implemented yet!'
    });
  },

  /**
   * `PacienteController.consultas()`
   */
  consultas: async function (req, res) {
    return res.json({
      todo: 'consultas() is not implemented yet!'
    });
  },

  //Função para validar login do Paciente

  login : async function (req, res) {

    console.log(req.body.email);
    console.log(req.body.senha);
    
      await Paciente.findOne({ // consulta paciente que tem o email informado no login

          email: req.body.email

      }).exec(function callback(err, user) {

          if (err) return res.serverError(err);
      
          if (!user) return res.json({result:false,menssage:"Email Inválido"});
      
          //check password
          bcrypt.compare(req.body.senha, user.senha, function (error, matched) { // Compara a senha do paciente retornado da consulta com a senha informada no login
            if (error) return res.serverError(error);
      
            if (!matched)
                return res.json({result:false,menssage:"Senha Inválida!"});
            else
                return res.json({result:true,user:user}); // retorna o objeto Paciente , caso seja validado seu email e senha
      
          });
                    
      })
 
  }


};


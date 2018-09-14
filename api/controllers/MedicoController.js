/**
 * MedicoController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var bcrypt = require('bcrypt');


module.exports = {
  

    consulta: async function (req, res) {

    console.log(req.body.email);

       await Medico.findOne({ // consulta paciente que tem o email informado no login

            email: req.body.email
  
        }).exec(function callback(err, user) {
  
            if (err) return res.serverError(err);
        
            if (!user) return res.json({result:false,menssage:"Email Inválido"});

           var esp = user.especialidades;
           return res.json(user.especialidades);
        }) 
    },


    login : async function (req, res) {

        console.log(req.body.email);
        console.log(req.body.senha);
    
      await Medico.findOne({ // consulta paciente que tem o email informado no login

          email: req.body.email

      }).exec(function callback(err, user) {

            if (err) return res.serverError(err);
      
            if (!user) return res.json({result:false,menssage:"Email Inválido"});
      
          //check password
            bcrypt.compare(req.body.senha, user.senha, function (error, matched) { // Compara a senha do médico retornado da consulta com a senha informada no login
                if (error) return res.serverError(error);
      
                if (!matched)
                    return res.json({result:false,menssage:"Senha Inválida!"});
                else
                    return res.json({result:true,user:user}); // retorna o objeto Médico , caso seja validado seu email e senha
      
            });
          
          
        })
    }

}
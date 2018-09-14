/**
 * ConsultaController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  

  /**
   * `ConsultaController.data()`
   */
  data: async function (req, res) {
    return res.json({
      todo: 'data() is not implemented yet!'
    });
  },

  /**
   * `ConsultaController.horario()`
   */
  horario: async function (req, res) {
    return res.json({
      todo: 'horario() is not implemented yet!'
    });
  },

  /**
   * `ConsultaController.situacao()`
   */
  situacao: async function (req, res) {
    return res.json({
      todo: 'situacao() is not implemented yet!'
    });
  },

  getByPaciente: async function (req, res) {
    const idPaciente = req.param('id');
    let consultas = await Consulta.find({paciente: idPaciente}).populate('medico').populate('paciente').populate('consultorio');
    return res.json(consultas);
  },

  getByMedico: async function (req, res) {
    const idMedico = req.param('id');
    let consultas = await Consulta.find({medico: idMedico}).populate('medico').populate('paciente').populate('consultorio');
    return res.json(consultas);
  },

  getByConsultorio: async function (req, res) {
    const consultorioId = req.param('id');
    let consultas = await Consulta.find({consultorio: consultorioId}).populate('medico').populate('paciente').populate('consultorio');
    return res.json(consultas);
  },

};


const Tarefas = require('../models/TarefaModel');

module.exports.index = async (req, res, next) => {
    const tarefa = await Tarefas.procurar()
    res.render('index', { tarefa });
}
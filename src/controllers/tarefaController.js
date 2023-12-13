const Tarefas = require('../models/TarefaModel');

module.exports.index = async (req, res) => {
    try {
        const tarefa = new Tarefas(req.body);
        await tarefa.adicionar();

        if (tarefa.errors.length > 0) {
            req.flash('errors', tarefa.errors);
            res.redirect('/');
        };

        req.flash('success', 'Tarefa adicionada com sucesso!');
        res.redirect('back');
    } catch (err) {
        console.log(err);
    };
}


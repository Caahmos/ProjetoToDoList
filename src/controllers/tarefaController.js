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
        return;
    } catch (err) {
        console.log(err);
    };
}

exports.editarTarefa = async (req, res) => {
    const tarefa = await Tarefas.procurarporid(req.params.id);
    res.render('editar', { tarefa });
};

exports.tarefaEditada = async (req, res) => {
    try {
        const tarefa = new Tarefas(req.body);
        await tarefa.atualizarTarefa(req.params.id);

        if (tarefa.errors.length > 0) {
            req.flash('errors', tarefa.errors);
            res.redirect('back');
        };

        req.flash('success', 'Tarefa atualizada com sucesso!');
        res.redirect('/');
        return
    } catch (err) {
        console.log(err);
    };
};

exports.excluirTarefa = async (req, res) => {
    try{
        await Tarefas.excluirTarefa(req.params.id);
        req.flash('success', 'Tarefa excluída com sucesso!');
        res.redirect('back');
    }catch(err){
        console.log(err);
    };
}


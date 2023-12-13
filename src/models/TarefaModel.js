const mongoose = require('mongoose');

const TarefaSchema = mongoose.Schema({
    tarefa: String,
    status: String
})

const TarefaModelo = mongoose.model('Tarefa', TarefaSchema);

class Tarefas{
    constructor(body){
        this.body = body;
        this.errors = [];
    }

    async adicionar(){
        this.valida();
        console.log(this.body);
        if(this.errors.length > 0) return;
        await TarefaModelo.create(this.body);
    }

    static async procurar(){
        const contato = await TarefaModelo.find();
        console.log(contato);
        return contato;
    }

    valida(){
        this.formatarCampos();
        if(!this.body.tarefa) this.errors.push('O campo tarefa precisa estar preenchido');
        if(!this.body.status) this.errors.push('O campo status precisa estar preenchido');
    }

    formatarCampos(){
        for(let key in this.body){
            if(typeof this.body[key] !== 'string') this.body[key] = '';
        }

        this.body = {
            tarefa: this.body.tarefa,
            status: this.body.status
        }
    }
}

module.exports = Tarefas;
const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const tarefaController = require('./src/controllers/tarefaController');

route.get('/', homeController.index);
route.post('/tarefa', tarefaController.index);

route.get('/tarefa/editar/:id', tarefaController.editarTarefa);
route.post('/tarefa/editada/:id', tarefaController.tarefaEditada);

route.get('/tarefa/excluir/:id', tarefaController.excluirTarefa);

module.exports = route;
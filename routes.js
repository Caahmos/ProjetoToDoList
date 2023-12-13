const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const tarefaController = require('./src/controllers/tarefaController');

route.get('/', homeController.index);
route.post('/tarefa', tarefaController.index);

module.exports = route;
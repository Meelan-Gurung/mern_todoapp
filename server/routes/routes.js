import express from 'express';
import { addtodos, gettodos, toggleTodo, updateTodo, deleteTodo } from '../controller/todo-controller.js';

const route = express.Router();

route.post('/todos', addtodos);
route.get('/todos', gettodos);
route.get('/todos/:id', toggleTodo);
route.put('/todos/:id', updateTodo);
route.delete('/todos/:id', deleteTodo);

export default route;
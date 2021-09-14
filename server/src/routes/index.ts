import { Router } from 'express';
const router = Router();

import { root, getAllTodos, getTodo, createTodo, deleteTodo, updateTodo } from '../controller/index.controller';

router.get('/', root);
router.get('/todos', getAllTodos);          // Get all todos
router.get('/todos/:id', getTodo);          // Get a todo by id
router.post('/todos', createTodo);          // Create a todo
router.delete('/todos/:id', deleteTodo);    // Delete a todo by id
router.put('/todos/:id', updateTodo);       // Update a todo by id

export default router;
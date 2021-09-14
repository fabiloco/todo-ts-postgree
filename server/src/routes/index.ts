import { Router } from 'express';
const router = Router();

import { root, getAllTodos, createTodo, deleteTodo, updateTodo } from '../controller/index.controller';

router.get('/', root);
router.get('/todos', getAllTodos);
router.post('/todos', createTodo);
router.delete('/todos/:id', deleteTodo);
router.put('/todos/:id', updateTodo);

export default router;
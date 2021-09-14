import { Router } from 'express';
const router = Router();

import { root, getAllTodos } from '../controller/index.controller';

router.get('/', root);
router.get('/todos', getAllTodos);

export default router;
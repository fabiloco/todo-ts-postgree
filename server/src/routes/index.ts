import { Router } from 'express';
const router = Router();

import { root } from '../controller/index.controller';

router.get('/', root);

export default router;
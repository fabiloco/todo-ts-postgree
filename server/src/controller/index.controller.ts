import { Request, Response } from 'express';
import { QueryResult } from 'pg';

import { pool } from '../database';

export const root = async (req: Request, res: Response) => {
    res.json({ hello: 'world!' });
};
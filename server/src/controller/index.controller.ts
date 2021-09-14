import { Request, Response } from 'express';
import { QueryResult } from 'pg';

import { pool } from '../database';

export const root = async (req: Request, res: Response) => {
    res.json({ hello: 'world!' });
};

export const getAllTodos = async (req: Request, res: Response) => {
    try {
        const response: QueryResult = await pool.query('SELECT * FROM todo;');
        res.status(200).json(response.rows);
    } catch(error: unknown) {
        console.error('An error has occurred in getAllTodos query: ' + (error as Error).message);
    };
};
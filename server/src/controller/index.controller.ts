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

export const createTodo = async (req: Request, res: Response) => {
    const { description } = req.body;
    try {
        await pool.query(`INSERT INTO todo (description) VALUES ('${description}');`);
        res.status(200).json({
            message: 'Todo created successfully',
            body: {
                todo: {
                    description,
                },
            },
        });
    } catch(error: unknown) {
        console.error('An error has occurred in createTodo query: ' + (error as Error).message);
    };
};

export const deleteTodo = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
        await pool.query(`DELETE FROM todo WHERE todo_id=${id};`);
        res.status(200).json({
            message: `Todo ${id} deleted successfully`,
        });
    } catch(error: unknown) {
        console.error('An error has occurred in deleteTodo query: ' + (error as Error).message);
    };
};

export const updateTodo = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const { description } = req.body;
    try {
        await pool.query(`UPDATE todo SET description='${description}' WHERE todo_id=${id};`);
        res.status(200).json({
            message: `Todo ${id} updated successfully`,
        });
    } catch(error: unknown) {
        console.error('An error has occurred in updateTodo query: ' + (error as Error).message);
    };
};
import { Pool } from 'pg';

import { config } from './config';

// Pool is the connection object
export const pool = new Pool({
    user: config.dbUser,
    host: config.dbHost,
    password: config.dbPassword,
    database: config.dbName,
});
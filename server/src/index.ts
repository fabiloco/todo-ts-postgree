import express from 'express';
import cors from 'cors';

import { config } from './config';

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
import indexRoutes from './routes';
app.use(indexRoutes);

app.listen(config.port, () => {
    console.log(`Server listening on http://localhost:${config.port}`);
});
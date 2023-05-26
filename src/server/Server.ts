import express from 'express';
import 'dotenv/config';
const server = express();
import routes from './routes';

server.use(express.json());

server.use(routes);

export { server };

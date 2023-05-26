import express from 'express';
const server = express();
import routes from './routes';

server.use(express.json());

server.use(routes);

export { server };

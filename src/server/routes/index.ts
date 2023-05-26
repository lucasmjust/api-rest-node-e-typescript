import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';

const code = StatusCodes;
const routes = Router();

routes.post('/teste/:id', (request, response) => {
  return response.status(code.OK).json(request.params.id);
});

export default routes;

import EquiposController from "./controllers/equiposController.ts";
import { Router } from './deps.ts';

const router = new Router();

router
  .get('/api/v1/equipos', EquiposController.list)
  .get('/api/v1/equipos/:id', EquiposController.get)
  .delete('/api/v1/equipos/:id', EquiposController.delete)
  .patch('/api/v1/equipos/:id', EquiposController.update)
  .post('/api/v1/equipos', EquiposController.add);

export default router;
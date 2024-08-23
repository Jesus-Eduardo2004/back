import { Router } from 'express';
import presupuestoController from '../controllers/presupuestoController';

class PresupuestoRoutes {
  public router: Router = Router();

  constructor() {
    this.config();
  }

  config(): void {
    this.router.get('/', presupuestoController.list);
    this.router.get('/:id', presupuestoController.getOne);
    this.router.post('/', presupuestoController.create);  // Asegúrate de que POST esté definido
    this.router.put('/:id', presupuestoController.update);
    this.router.delete('/:id', presupuestoController.delete);
  }
}

const presupuestoRoutes = new PresupuestoRoutes();
export default presupuestoRoutes.router;
